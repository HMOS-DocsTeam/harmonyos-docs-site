"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["969971"], {
906602(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_remote_communication_kit_guide_remote_communication_netcom_remote_communication_netinit_remote_communication_netsend_c_remote_communication_netsend_c_md_085_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-remote-communication-kit-guide-remote-communication-netcom-remote-communication-netinit-remote-communication-netsend-c-remote-communication-netsend-c-md-085.json
var site_docs_system_network_remote_communication_kit_guide_remote_communication_netcom_remote_communication_netinit_remote_communication_netsend_c_remote_communication_netsend_c_md_085_namespaceObject = JSON.parse('{"id":"system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-netinit/remote-communication-netsend-c/remote-communication-netsend-c","title":"发送网络请求（C++）","description":"约束与限制","source":"@site/docs/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-netinit/remote-communication-netsend-c/remote-communication-netsend-c.md","sourceDirName":"system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-netinit/remote-communication-netsend-c","slug":"/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-netinit/remote-communication-netsend-c/","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-netinit/remote-communication-netsend-c/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"发送网络请求（C++）","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-netsend-c","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"关闭会话（ArkTS）","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-netinit/remote-communication-netclose-arkts/"},"next":{"title":"取消网络请求（C++）","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-netinit/remote-communication-netcancle-c/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-netinit/remote-communication-netsend-c/remote-communication-netsend-c.md


const frontMatter = {
	title: '发送网络请求（C++）',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-netsend-c',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '发送网络请求（C++）';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "如何使用fetchsync发起网络请求",
  "id": "如何使用fetchsync发起网络请求",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 3
}, {
  "value": "使用示例",
  "id": "使用示例",
  "level": 3
}, {
  "value": "如何使用fetch发起异步网络请求",
  "id": "如何使用fetch发起异步网络请求",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明-1",
  "level": 3
}, {
  "value": "使用示例",
  "id": "使用示例-1",
  "level": 3
}, {
  "value": "如何使用get发送网络请求",
  "id": "如何使用get发送网络请求",
  "level": 2
}, {
  "value": "使用示例",
  "id": "使用示例-2",
  "level": 3
}, {
  "value": "如何使用post发送网络请求",
  "id": "如何使用post发送网络请求",
  "level": 2
}, {
  "value": "使用示例",
  "id": "使用示例-3",
  "level": 3
}, {
  "value": "如何使用put发送网络请求",
  "id": "如何使用put发送网络请求",
  "level": 2
}, {
  "value": "使用示例",
  "id": "使用示例-4",
  "level": 3
}, {
  "value": "如何使用head发送网络请求",
  "id": "如何使用head发送网络请求",
  "level": 2
}, {
  "value": "使用示例",
  "id": "使用示例-5",
  "level": 3
}, {
  "value": "如何使用delete发送网络请求",
  "id": "如何使用delete发送网络请求",
  "level": 2
}, {
  "value": "使用示例",
  "id": "使用示例-6",
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "发送网络请求c",
        children: "发送网络请求（C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发送网络请求能力支持Phone、2in1、Tablet、Wearable设备。并且从5.1.1(19)开始，新增支持TV设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何使用fetchsync发起网络请求",
      children: "如何使用fetchsync发起网络请求"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发送一个同步HTTP请求，也可以设置请求头和请求体等参数，并返回来自服务器的HTTP响应。常用于获取资源，支持通过拦截器来处理请求和响应。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_fetchsync",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_response",
              children: "Rcp_Response"
            }), " *HMS_Rcp_FetchSync(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_session",
              children: "Rcp_Session"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_request",
              children: "Rcp_Request"
            }), " *request, uint32_t *errCode);"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送一个HTTP请求，并直接返回来自服务器的HTTP响应。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CPP侧导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"RemoteCommunicationKit/rcp.h\"\n#include <stdio.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CMakeLists.txt中添加以下lib。（具体请见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-network/remote-communication-kit-guide/remote-communication-preparations#c-api%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87",
            children: "C API开发准备"
          }), "）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "librcp_c.so\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建Request对象。\"", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://www.example.com\"请根据实际情况替换为想要请求的URL地址。（实际使用时请将该代码块放入main函数或者其他函数区域内）"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const char *kHttpServerAddress = \"https://www.example.com\";\nRcp_Request *request = HMS_Rcp_CreateRequest(kHttpServerAddress);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建会话。（实际使用时请将该代码块放入main函数或者其他函数区域内）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "uint32_t errCode = 0;\nRcp_Session *session = HMS_Rcp_CreateSession(NULL, &errCode);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "发起请求，并处理返回结果。（实际使用时请将该代码块放入main函数或者其他函数区域内）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Rcp_Response *response = HMS_Rcp_FetchSync(session, request, &errCode);\nif (response != NULL) {\n    printf(\"Response status: %d\\n\", response->statusCode);\n} else {\n    printf(\"Fetch failed: errCode: %u\\n\", errCode);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "清理response响应和request请求。最后关闭session。（实际使用时请将该代码块放入main函数或者其他函数区域内）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 清理request\nHMS_Rcp_DestroyRequest(request);\n// 处理response，并清理response\nif (response != NULL) {\n    response->destroyResponse(response);\n}\n// 关闭session\nerrCode = HMS_Rcp_CloseSession(&session);\n// 处理errCode\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何使用fetch发起异步网络请求",
      children: "如何使用fetch发起异步网络请求"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发送一个异步HTTP请求，也可以设置请求头和请求体等参数，并返回来自服务器的HTTP响应。常用于获取资源，支持通过拦截器来处理请求和响应。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明-1",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_fetch",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t HMS_Rcp_Fetch(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_session",
              children: "Rcp_Session"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_request",
              children: "Rcp_Request"
            }), " *request, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_responsecallbackobject",
              children: "Rcp_ResponseCallbackObject"
            }), " *responseCallback);"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送一个HTTP请求，并返回来自服务器的HTTP响应。使用responseCallback异步回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例-1",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CPP侧导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"RemoteCommunicationKit/rcp.h\"\n#include <cstring>\n#include <stdio.h>\n#include <unistd.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CMakeLists.txt中添加以下lib。（具体请见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-network/remote-communication-kit-guide/remote-communication-preparations#c-api%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87",
            children: "C API开发准备"
          }), "）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "librcp_c.so\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建Request对象。\"", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://www.example.com\"请根据实际情况替换为想要请求的URL地址。（完整见步骤5"
          }), "）"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const char *kHttpServerAddress = \"https://www.example.com\";\nRcp_Request *request = HMS_Rcp_CreateRequest(kHttpServerAddress);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建会话。（完整见步骤5）"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "uint32_t errCode = 0;\nRcp_Session *session = HMS_Rcp_CreateSession(NULL, &errCode);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "发起请求，并处理返回结果。最后关闭session。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 异步请求的响应处理回调，请用户自定义\nvoid ResponseCallback(void *usrCtx, Rcp_Response *response, uint32_t errCode)\n{\n    (void *)usrCtx;\n    if (response != NULL) {\n        printf(\"Response status: %d\\n\", response->statusCode);\n    } else {\n        printf(\"Fetch failed: errCode: %u\\n\", errCode);\n    }\n    // 注意清理响应\n    if (response != NULL) {\n        response->destroyResponse(response);\n    }\n}\n\nint main() {\n    const char *kHttpServerAddress = \"https://www.example.com\";\n    // 请求配置\n    Rcp_Configuration config;\n    // 初始化配置参数\n    (void)memset(&config, 0, sizeof(Rcp_Configuration));\n    // 重新设置自动重定向\n    config.transferConfiguration.autoRedirect = true;\n    // 重新设置请求超时配置参数\n    config.transferConfiguration.timeout.transferMs = 1000 * 10;\n    config.transferConfiguration.timeout.connectMs = 1000 * 10;\n    Rcp_Request *request = HMS_Rcp_CreateRequest(kHttpServerAddress);\n    request->method = RCP_METHOD_GET;\n    request->configuration = &config;\n    uint32_t errCode = 0;\n    // 创建session\n    Rcp_Session *session = HMS_Rcp_CreateSession(NULL, &errCode);\n    // 配置请求回调\n    Rcp_ResponseCallbackObject responseCallback = {ResponseCallback, NULL};\n    // 发起fetch请求\n    errCode = HMS_Rcp_Fetch(session, request, &responseCallback);\n    // 等待fetch结果，仅是等待异步调用完成，开发者可根据自己实际场景处理回调。\n    usleep(1000 * 1000 * 3);\n    printf(\"Fetch completed, errCode: %u\\n\", errCode);\n    // 在退出前取消可能还在执行的requests\n    errCode = HMS_Rcp_CancelSession(session);\n    // 清理request\n    HMS_Rcp_DestroyRequest(request);\n    // 关闭session\n    errCode = HMS_Rcp_CloseSession(&session);\n    // 处理errCode\n    return 0;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何使用get发送网络请求",
      children: "如何使用get发送网络请求"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发送一个带有默认HTTP参数的HTTP GET请求，并返回来自服务器的HTTP响应。采用异步回调的方式进行处理，提高应用的响应性和效率。常用于从服务器获取数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例-2",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CPP侧导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"RemoteCommunicationKit/rcp.h\"\n#include <cstring>\n#include <stdio.h>\n#include <unistd.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CMakeLists.txt中添加以下lib。（具体请见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-network/remote-communication-kit-guide/remote-communication-preparations#c-api%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87",
            children: "C API开发准备"
          }), "）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "librcp_c.so\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建会话，会话发起get请求。“", (0,jsx_runtime.jsx)(_components.code, {
            children: "http://www.example.com”请根据实际情况替换为想要请求的URL地址。等待响应返回后，销毁request并关闭session"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void ResponseCallback(void *usrCtx, Rcp_Response *response, uint32_t errCode)\n{\n    (void *)usrCtx;\n    if (response != NULL) {\n        printf(\"Response status: %d\\n\", response->statusCode);\n    } else {\n        printf(\"Fetch failed: errCode: %u\\n\", errCode);\n    }\n    // 注意清理响应\n    if (response != NULL) {\n        response->destroyResponse(response);\n    }\n}\n\nint main() {\n    const char *kHttpServerAddress = \"http://www.example.com\";\n    // 请求配置\n    Rcp_Configuration config;\n    // 初始化配置参数\n    (void)memset(&config, 0, sizeof(Rcp_Configuration));\n    // 重新设置自动重定向\n    config.transferConfiguration.autoRedirect = true;\n    // 重新设置请求超时配置参数\n    config.transferConfiguration.timeout.transferMs = 1000 * 10;\n    config.transferConfiguration.timeout.connectMs = 1000 * 10;\n    Rcp_Request *request = HMS_Rcp_CreateRequest(kHttpServerAddress);\n    request->method = RCP_METHOD_GET;\n    request->configuration = &config;\n    uint32_t errCode = 0;\n    // 创建session\n    Rcp_Session *session = HMS_Rcp_CreateSession(NULL, &errCode);\n    // 配置请求回调\n    Rcp_ResponseCallbackObject responseCallback = {ResponseCallback, NULL};\n    // 发起请求\n    errCode = HMS_Rcp_Fetch(session, request, &responseCallback);\n    // 等待结果，仅是等待异步调用完成，开发者可根据自己实际场景处理回调。\n    usleep(1000 * 1000 * 3);\n    printf(\"Fetch completed, errCode: %u\\n\", errCode);\n    // 在退出前取消可能还在执行的requests\n    errCode = HMS_Rcp_CancelSession(session);\n    // 清理request\n    HMS_Rcp_DestroyRequest(request);\n    // 关闭session\n    errCode = HMS_Rcp_CloseSession(&session);\n    // 处理errCode\n    return 0;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何使用post发送网络请求",
      children: "如何使用post发送网络请求"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发送一个带有默认HTTP参数的HTTP POST请求，并返回来自服务器的HTTP响应。使用异步回调。常用于向服务器提交数据。与GET请求不同，POST请求将参数包含在请求主体中，适用于创建新资源、提交表单数据或执行某些操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例-3",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CPP侧导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"RemoteCommunicationKit/rcp.h\"\n#include <cstdlib>\n#include <cstring>\n#include <stdio.h>\n#include <unistd.h>\n#include <thread>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CMakeLists.txt中添加以下lib。（具体请见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-network/remote-communication-kit-guide/remote-communication-preparations#c-api%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87",
            children: "C API开发准备"
          }), "）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "librcp_c.so\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建会话，会话发起post请求。“", (0,jsx_runtime.jsx)(_components.code, {
            children: "http://www.example.com”请根据实际情况替换为想要请求的URL地址。等待响应返回后，销毁request并关闭session"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void ResponseCallback(void *usrCtx, Rcp_Response *response, uint32_t errCode)\n{\n    (void *)usrCtx;\n    if (response != NULL) {\n        printf(\"Response status: %d\\n\", response->statusCode);\n    } else {\n        printf(\"Fetch failed: errCode: %u\\n\", errCode);\n    }\n    // 注意清理响应\n    if (response != NULL) {\n        response->destroyResponse(response);\n    }\n}\n\nint main() {\n    const char *kHttpServerAddress = \"http://www.example.com\";\n    const char *content = \"content\";\n    Rcp_Request *request = HMS_Rcp_CreateRequest(kHttpServerAddress);\n    // 设置request参数\n    request->method = RCP_METHOD_POST;\n    request->content = (Rcp_RequestContent *)calloc(1, sizeof(Rcp_RequestContent));\n    request->content->type = RCP_CONTENT_TYPE_STRING;\n    request->content->data.contentStr.buffer = content;\n    request->content->data.contentStr.length = strlen(content);\n    // 请求配置\n    Rcp_Configuration config;\n    // 初始化配置参数\n    (void)memset(&config, 0, sizeof(Rcp_Configuration));\n    // 重新设置自动重定向\n    config.transferConfiguration.autoRedirect = true;\n    // 重新设置请求超时配置参数\n    config.transferConfiguration.timeout.transferMs = 1000 * 10;\n    config.transferConfiguration.timeout.connectMs = 1000 * 10;\n    request->configuration = &config;\n    uint32_t errCode = 0;\n    // 创建session\n    Rcp_Session *session = HMS_Rcp_CreateSession(NULL, &errCode);\n    // 配置请求回调\n    Rcp_ResponseCallbackObject responseCallback = {ResponseCallback, NULL};\n    // 发起请求\n    errCode = HMS_Rcp_Fetch(session, request, &responseCallback);\n    // 等待fetch结果，仅是等待异步调用完成，开发者可根据自己实际场景处理回调。\n    std::this_thread::sleep_for(std::chrono::milliseconds(1000 * 1000 * 3));\n    printf(\"Fetch completed, errCode: %u\\n\", errCode);\n    // 清理request->content\n    free(request->content);\n    // 清理request\n    HMS_Rcp_DestroyRequest(request);\n    // 关闭session\n    errCode = HMS_Rcp_CloseSession(&session);\n    // 处理errCode\n    return 0;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何使用put发送网络请求",
      children: "如何使用put发送网络请求"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发送一个带有默认HTTP参数的HTTP PUT请求，并返回来自服务器的HTTP响应。使用异步回调。常用于向服务器更新资源。PUT请求将更新的数据发送到特定的URL，用于替换指定资源的全部内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例-4",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CPP侧导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"RemoteCommunicationKit/rcp.h\"\n#include <cstdlib>\n#include <cstring>\n#include <stdio.h>\n#include <unistd.h>\n#include <thread>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CMakeLists.txt中添加以下lib。（具体请见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-network/remote-communication-kit-guide/remote-communication-preparations#c-api%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87",
            children: "C API开发准备"
          }), "）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "librcp_c.so\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建会话，会话发起put请求。“", (0,jsx_runtime.jsx)(_components.code, {
            children: "http://www.example.com”请根据实际情况替换为想要请求的URL地址。等待响应返回后，销毁request并关闭session"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void ResponseCallback(void *usrCtx, Rcp_Response *response, uint32_t errCode)\n{\n    (void *)usrCtx;\n    if (response != NULL) {\n        printf(\"Response status: %d\\n\", response->statusCode);\n    } else {\n        printf(\"Fetch failed: errCode: %u\\n\", errCode);\n    }\n    // 注意清理响应\n    if (response != NULL) {\n        response->destroyResponse(response);\n    }\n}\n\nint main() {\n    const char *kHttpServerAddress = \"http://www.example.com\";\n    const char *content = \"content\";\n    // 创建request，并设置request的参数\n    Rcp_Request *request = HMS_Rcp_CreateRequest(kHttpServerAddress);\n    request->method = RCP_METHOD_PUT;\n    request->content = (Rcp_RequestContent *)calloc(1, sizeof(Rcp_RequestContent));\n    request->content->type = RCP_CONTENT_TYPE_STRING;\n    request->content->data.contentStr.buffer = content;\n    request->content->data.contentStr.length = strlen(content);\n    // 请求配置\n    Rcp_Configuration config;\n    // 初始化配置参数\n    (void)memset(&config, 0, sizeof(Rcp_Configuration));\n    // 重新设置自动重定向\n    config.transferConfiguration.autoRedirect = true;\n    // 重新设置请求超时配置参数\n    config.transferConfiguration.timeout.transferMs = 1000 * 10;\n    config.transferConfiguration.timeout.connectMs = 1000 * 10;\n    request->configuration = &config;\n    uint32_t errCode = 0;\n    // 创建session\n    Rcp_Session *session = HMS_Rcp_CreateSession(NULL, &errCode);\n    // 配置请求回调\n    Rcp_ResponseCallbackObject responseCallback = {ResponseCallback, NULL};\n    // 发起fetch请求\n    errCode = HMS_Rcp_Fetch(session, request, &responseCallback);\n    // 等待结果，仅是等待异步调用完成，开发者可根据自己实际场景处理回调。\n    std::this_thread::sleep_for(std::chrono::milliseconds(1000 * 1000 * 3));\n    printf(\"Fetch completed, errCode: %u\\n\", errCode);\n    // 在退出前取消可能还在执行的requests\n    errCode = HMS_Rcp_CancelSession(session);\n    // 清理request content\n    free(request->content);\n    // 清理request\n    HMS_Rcp_DestroyRequest(request);\n    // 关闭session\n    errCode = HMS_Rcp_CloseSession(&session);\n    // 处理errCode\n    return 0;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何使用head发送网络请求",
      children: "如何使用head发送网络请求"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发送一个带有默认HTTP参数的HTTP HEAD请求，并返回来自服务器的HTTP响应。使用异步回调。类似GET请求，但只返回响应头，不返回实体内容。可以获取资源的元信息，如文件大小、修改日期等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例-5",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CPP侧导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"RemoteCommunicationKit/rcp.h\"\n#include <cstring>\n#include <stdio.h>\n#include <unistd.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CMakeLists.txt中添加以下lib。（具体请见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-network/remote-communication-kit-guide/remote-communication-preparations#c-api%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87",
            children: "C API开发准备"
          }), "）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "librcp_c.so\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建会话，会话发起head请求。“", (0,jsx_runtime.jsx)(_components.code, {
            children: "http://www.example.com”请根据实际情况替换为想要请求的URL地址。等待响应返回后，销毁request并关闭session"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void ResponseCallback(void *usrCtx, Rcp_Response *response, uint32_t errCode)\n{\n    (void *)usrCtx;\n    if (response != NULL) {\n        printf(\"Response status: %d\\n\", response->statusCode);\n    } else {\n        printf(\"Fetch failed: errCode: %u\\n\", errCode);\n    }\n    // 注意清理响应\n    if (response != NULL) {\n        response->destroyResponse(response);\n    }\n}\n\nint main() {\n    const char *kHttpServerAddress = \"http://www.example.com/head\";\n    Rcp_Request *request = HMS_Rcp_CreateRequest(kHttpServerAddress);\n    request->method = RCP_METHOD_HEAD;\n    // 请求配置\n    Rcp_Configuration config;\n    // 初始化配置参数\n    (void)memset(&config, 0, sizeof(Rcp_Configuration));\n    // 重新设置自动重定向\n    config.transferConfiguration.autoRedirect = true;\n    // 重新设置请求超时配置参数\n    config.transferConfiguration.timeout.transferMs = 1000 * 10;\n    config.transferConfiguration.timeout.connectMs = 1000 * 10;\n    request->configuration = &config;\n    uint32_t errCode = 0;\n    // 创建session\n    Rcp_Session *session = HMS_Rcp_CreateSession(NULL, &errCode);\n    // 配置请求回调\n    Rcp_ResponseCallbackObject responseCallback = {ResponseCallback, NULL};\n    // 发起fetch请求\n    errCode = HMS_Rcp_Fetch(session, request, &responseCallback);\n    // 等待fetch结果，仅是等待异步调用完成，开发者可根据自己实际场景处理回调。\n    usleep(1000 * 1000 * 3);\n    printf(\"Fetch completed, errCode: %u\\n\", errCode);\n    // 在退出前取消可能还在执行的requests\n    errCode = HMS_Rcp_CancelSession(session);\n    // 清理request\n    HMS_Rcp_DestroyRequest(request);\n    // 关闭session\n    errCode = HMS_Rcp_CloseSession(&session);\n    // 处理errCode\n    return 0;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何使用delete发送网络请求",
      children: "如何使用delete发送网络请求"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发送一个带有默认HTTP参数的HTTP DELETE请求，并返回来自服务器的HTTP响应，用于从服务器删除资源，通过向指定URL发送DELETE请求，可以删除该URL上对应的资源。使用异步回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例-6",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CPP侧导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"RemoteCommunicationKit/rcp.h\"\n#include <cstring>\n#include <stdio.h>\n#include <unistd.h>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CMakeLists.txt中添加以下lib。（具体请见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-network/remote-communication-kit-guide/remote-communication-preparations#c-api%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87",
            children: "C API开发准备"
          }), "）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "librcp_c.so\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建会话，会话发起delete请求。“", (0,jsx_runtime.jsx)(_components.code, {
            children: "http://www.example.com”请根据实际情况替换为想要请求的URL地址。等待响应返回后，销毁request并关闭session"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void ResponseCallback(void *usrCtx, Rcp_Response *response, uint32_t errCode)\n{\n    (void *)usrCtx;\n    if (response != NULL) {\n        printf(\"Response status: %d\\n\", response->statusCode);\n    } else {\n        printf(\"Fetch failed: errCode: %u\\n\", errCode);\n    }\n    if (response != NULL) {\n        response->destroyResponse(response);\n    }\n}\n\nint main() {\n    const char *kHttpServerAddress = \"http://www.example.com/delete\";\n    Rcp_Request *request = HMS_Rcp_CreateRequest(kHttpServerAddress);\n    request->method = RCP_METHOD_DELETE;\n    // 请求配置\n    Rcp_Configuration config;\n    // 初始化配置参数\n    (void)memset(&config, 0, sizeof(Rcp_Configuration));\n    // 重新设置自动重定向\n    config.transferConfiguration.autoRedirect = true;\n    // 重新设置请求超时配置参数\n    config.transferConfiguration.timeout.transferMs = 1000 * 10;\n    config.transferConfiguration.timeout.connectMs = 1000 * 10;\n    request->configuration = &config;\n    uint32_t errCode = 0;\n    // 创建session\n    Rcp_Session *session = HMS_Rcp_CreateSession(NULL, &errCode);\n    // 配置请求回调\n    Rcp_ResponseCallbackObject responseCallback = {ResponseCallback, NULL};\n    // 发起fetch请求\n    errCode = HMS_Rcp_Fetch(session, request, &responseCallback);\n    // 等待fetch结果，仅是等待异步调用完成，开发者可根据自己实际场景处理回调。\n    usleep(1000 * 1000 * 3);\n    printf(\"Fetch completed, errCode: %u\\n\", errCode);\n    // 在退出前取消可能还在执行的requests\n    errCode = HMS_Rcp_CancelSession(session);\n    // 清理request\n    HMS_Rcp_DestroyRequest(request);\n    // 关闭session\n    errCode = HMS_Rcp_CloseSession(&session);\n    // 处理errCode\n    return 0;\n}\n"
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