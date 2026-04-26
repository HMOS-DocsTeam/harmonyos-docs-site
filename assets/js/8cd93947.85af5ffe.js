"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["524279"], {
781289(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_remote_communication_kit_guide_remote_communication_netcom_remote_communication_netinit_remote_communication_netsend_arkts_remote_communication_netsend_arkts_md_8cd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-remote-communication-kit-guide-remote-communication-netcom-remote-communication-netinit-remote-communication-netsend-arkts-remote-communication-netsend-arkts-md-8cd.json
var site_docs_system_network_remote_communication_kit_guide_remote_communication_netcom_remote_communication_netinit_remote_communication_netsend_arkts_remote_communication_netsend_arkts_md_8cd_namespaceObject = JSON.parse('{"id":"system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-netinit/remote-communication-netsend-arkts/remote-communication-netsend-arkts","title":"发送网络请求（ArkTS）","description":"约束与限制","source":"@site/docs/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-netinit/remote-communication-netsend-arkts/remote-communication-netsend-arkts.md","sourceDirName":"system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-netinit/remote-communication-netsend-arkts","slug":"/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-netinit/remote-communication-netsend-arkts/","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-netinit/remote-communication-netsend-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"发送网络请求（ArkTS）","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-netsend-arkts","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开发准备","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-preparations/"},"next":{"title":"取消网络请求（ArkTS）","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-netinit/remote-communication-netcancle-arkts/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-netinit/remote-communication-netsend-arkts/remote-communication-netsend-arkts.md


const frontMatter = {
	title: '发送网络请求（ArkTS）',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-netsend-arkts',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '发送网络请求（ArkTS）';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "如何使用FETCH发起网络请求",
  "id": "如何使用fetch发起网络请求",
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
  "value": "如何发起GET网络请求",
  "id": "如何发起get网络请求",
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
  "value": "如何发起POST网络请求",
  "id": "如何发起post网络请求",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明-2",
  "level": 3
}, {
  "value": "使用示例",
  "id": "使用示例-2",
  "level": 3
}, {
  "value": "如何发起PUT网络请求",
  "id": "如何发起put网络请求",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明-3",
  "level": 3
}, {
  "value": "使用示例",
  "id": "使用示例-3",
  "level": 3
}, {
  "value": "如何发起HEAD网络请求",
  "id": "如何发起head网络请求",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明-4",
  "level": 3
}, {
  "value": "使用示例",
  "id": "使用示例-4",
  "level": 3
}, {
  "value": "如何发起DELETE网络请求",
  "id": "如何发起delete网络请求",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明-5",
  "level": 3
}, {
  "value": "使用示例",
  "id": "使用示例-5",
  "level": 3
}, {
  "value": "如何使用Form发送HTTP简单的表格数据",
  "id": "如何使用form发送http简单的表格数据",
  "level": 2
}, {
  "value": "使用示例",
  "id": "使用示例-6",
  "level": 3
}, {
  "value": "如何使用MultipartForm发送HTTP多部分表格数据",
  "id": "如何使用multipartform发送http多部分表格数据",
  "level": 2
}, {
  "value": "使用示例",
  "id": "使用示例-7",
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
        id: "发送网络请求arkts",
        children: "发送网络请求（ArkTS）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发送网络请求能力支持Phone、2in1、Tablet、Wearable设备。并且从5.1.1(19)开始，新增支持TV设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何使用fetch发起网络请求",
      children: "如何使用FETCH发起网络请求"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发送一个HTTP请求，也可以设置请求头和请求体等参数，并返回来自服务器的HTTP响应。使用Promise异步回调。常用于获取资源，支持流处理和通过拦截器来处理请求和响应。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#fetch",
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
            children: ["fetch(request: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#request",
              children: "Request"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#response",
              children: "Response"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送一个HTTP请求，并返回来自服务器的HTTP响应。使用Promise异步回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rcp } from '@kit.RemoteCommunicationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建Request对象。\"", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://www.example.com\"请根据实际情况替换为想要请求的URL地址"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const kHttpServerAddress = \"https://www.example.com/fetch\";\nconst request = new rcp.Request(kHttpServerAddress, 'GET');\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建会话。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const session = rcp.createSession();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "发起请求，并处理返回结果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "session.fetch(request).then((rep: rcp.Response) => {\n  console.info(`Response succeeded: ${rep}`);\n}).catch((err: BusinessError) => {\n  // 错误处理，通过catch块，捕获error，并对error进行处理，本示例中会将错误信息展现到打印台上。\n  console.error(`Response error code is ${err.code}, error data is ${err.data}`);\n});\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何发起get网络请求",
      children: "如何发起GET网络请求"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTTP GET请求是常用的通信方式之一。为了有效地实现这一目标，RemoteCommunicationKit采用了Promise和异步回调的组合策略，不仅可以高效地从服务器获取数据，还可以提高代码的可读性和可维护性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明-1",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#get",
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
            children: ["get(url: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#urlorstring",
              children: "URLOrString"
            }), ", destination?: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#responsebodydestination",
              children: "ResponseBodyDestination"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#response",
              children: "Response"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送一个带有默认HTTP参数的HTTP GET请求，参数为开发者需要请求的地址及响应的目标，并返回来自服务器的HTTP响应。使用Promise异步回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例-1",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rcp } from '@kit.RemoteCommunicationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建会话，会话发起get请求。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 1、定义请求URL，此处只给出示例，还请根据实际情况将其替换为需要请求的URL\nconst getURL = \"http://www.example.com/get\";\n\n// 2、创建session\nconst session = rcp.createSession();\n\n// 3、使用session.get发起请求，以getURL为入参，使用Promise进行异步回调。\nsession.get(getURL).then((response) => {\n  console.info(`Response succeeded: ${response}`);\n}).catch((err: BusinessError) => {\n  // 4、错误处理，通过catch块，捕获error，并对error进行处理，本示例中会将错误信息展现到打印台上。\n  console.error(`Response error code is ${err.code}, error data is ${err.data}`);\n});\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何发起post网络请求",
      children: "如何发起POST网络请求"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发送一个带有默认HTTP参数的HTTP POST请求，并返回来自服务器的HTTP响应。使用Promise异步回调。常用于向服务器提交数据。与GET请求不同，POST请求将参数包含在请求主体中，适用于创建新资源、提交表单数据或执行某些操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明-2",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#post",
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
            children: ["post(url: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#urlorstring",
              children: "URLOrString"
            }), ", content?: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#requestcontent",
              children: "RequestContent"
            }), ", destination?: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#responsebodydestination",
              children: "ResponseBodyDestination"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#response",
              children: "Response"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送一个带有默认HTTP参数的HTTP POST请求，并返回来自服务器的HTTP响应。使用Promise异步回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例-2",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rcp } from '@kit.RemoteCommunicationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建会话，使用会话发起post请求。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 定义URL此处给出示例，请根据实际情况选择正确地址\nconst postURL = \"https://www.example.com\";\n// 定义content，请根据实际情况选择\nconst postContent: rcp.RequestContent = {\n  fields: {\n    'key1': 'value1',\n    'key2': 'value2',\n    'key3': 'value3'\n  }\n}\n// 创建session\nconst session = rcp.createSession();\n// 使用post发起请求，使用Promise进行异步回调；其中content以及destination为可选参数，可根据实际情况选择\nsession.post(postURL, postContent)\n  .then((response) => {\n    console.info(`Response succeeded: ${JSON.stringify(response.headers)}`);\n    console.info(`Response succeeded: ${JSON.stringify(response.statusCode)}`);\n    console.info(`Response succeeded: ${JSON.stringify(postContent)}`);\n  })\n  .catch((err: BusinessError) => {\n    console.error(`Response error code is ${err.code}, error data is ${err.data}`);\n  })\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何发起put网络请求",
      children: "如何发起PUT网络请求"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在远场通信服务框架中，HTTP PUT请求用于更新服务器上的特定资源。作为幂等操作，它确保每次请求仅影响目标资源状态。通过Promise异步编程模型，可以有效地管理和控制请求执行流程，结构化处理异步操作和反馈。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明-3",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#put",
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
            children: ["put(url: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#urlorstring",
              children: "URLOrString"
            }), ", content?: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#requestcontent",
              children: "RequestContent"
            }), ", destination?: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#responsebodydestination",
              children: "ResponseBodyDestination"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#response",
              children: "Response"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送一个带有默认HTTP参数的HTTP PUT请求，并返回来自服务器的HTTP响应。使用Promise异步回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例-3",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rcp } from '@kit.RemoteCommunicationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建会话，会话发起put请求。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建会话\nconst session = rcp.createSession();\n\n// 定义content，请根据实际情况选择\nconst postContent: rcp.RequestContent = {\n  fields: {\n    'key1': 'value1',\n    'key2': 'value2',\n    'key3': 'value3'\n  }\n}\n\n// 会话发起PUT请求，\"`http://www.example.com\"请根据实际情况替换为想要请求的URL地址`。\nsession.put(\"http://www.example.com/put\", postContent).then((response) => {\n  // 对响应的处理，此处为示例，只做打印处理\n  console.info(`Response succeeded: ${response}`);\n}).catch((err: BusinessError) => {\n  // 请求错误处理\n  console.error(`Response error code is ${err.code}, error data is ${err.data}`);\n});\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何发起head网络请求",
      children: "如何发起HEAD网络请求"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTTP HEAD请求可高效访问服务器资源头信息。它与GET请求类似，但主要的区别在于，HEAD请求只返回响应头，而不返回实体内容，这使得其在获取资源的元信息，如文件大小、修改日期等，以及检查资源是否已更改等方面更加有效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明-4",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#head",
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
            children: ["head(url: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#urlorstring",
              children: "URLOrString"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#response",
              children: "Response"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送一个带有默认HTTP参数的HTTP HEAD请求，并返回来自服务器的HTTP响应。使用Promise异步回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例-4",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rcp } from '@kit.RemoteCommunicationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建会话，会话发起head请求。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 1、创建会话\nconst session = rcp.createSession();\n\n// 2、会话发起HEAD请求，\"`http://www.example.com\"请根据实际情况替换为想要请求的URL地址`。\nsession.head(\"http://www.example.com/head\").then((response) => {\n  // 3、对响应的处理，此处为示例，只做打印处理\n  console.info(`Response succeeded: ${response}`);\n}).catch((err: BusinessError) => {\n  // 4、请求错误处理\n  console.error(`Response error code is ${err.code}, error data is ${err.data}`);\n});\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何发起delete网络请求",
      children: "如何发起DELETE网络请求"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在远场通信服务的框架中，Remote Communication Kit采用了一种结合发起 HTTP DELETE 请求与 Promise 异步处理的方法。具体操作如下：通过向预定义的 URL 发送一个包含默认 HTTP 参数的 HTTP DELETE 请求，即可实现对目标 URL 上相关资源的有效删除。这种机制不仅简化了请求的发送过程，还增强了异步处理的效率，确保了资源管理的灵活性和响应速度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明-5",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#delete",
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
            children: ["delete(url: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#urlorstring",
              children: "URLOrString"
            }), "): Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#response",
              children: "Response"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送一个带有默认HTTP参数的HTTP DELETE请求，并返回来自服务器的HTTP响应。使用Promise异步回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例-5",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rcp } from '@kit.RemoteCommunicationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建会话，会话发起delete请求。\"", (0,jsx_runtime.jsx)(_components.code, {
            children: "http://www.example.com\"请根据实际情况替换为想要请求的URL地址"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const session = rcp.createSession();\nsession.delete(\"http://www.example.com/delete\").then((response) => {\n  console.info(`Response succeeded: ${response}`);\n}).catch((err: BusinessError) => {\n  console.error(`Response error code is ${err.code}, error data is ${err.data}`);\n});\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何使用form发送http简单的表格数据",
      children: "如何使用Form发送HTTP简单的表格数据"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#requestcontent",
        children: "RequestContent"
      }), "指定HTTP请求中要发送的数据时，可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#form",
        children: "Form"
      }), "来发送简单的HTTP表单数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.1(21)开始，Form表单支持使用keys来指定表单中key的发送顺序。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例-6",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rcp } from '@kit.RemoteCommunicationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建RequestContent。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建Form表单数据。\nconst simpleForm = new rcp.Form({\n  \"key1\": \"value1\",\n  \"key2\": \"value2\",\n});\n// 指定表单中key的发送顺序。指定后，将按照keys列表中的顺序发送（不在列表中的key将不被发送）；若不指定，则默认按各个key的hash顺序发送。\nsimpleForm.keys = [\"key2\", \"key1\"];\n// 创建request请求。请将URL地址替换为实际访问的地址。\nlet req = new rcp.Request(\"http://example.com\");\nreq.content = simpleForm;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建会话，并发起fetch请求。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  // 创建会话。\n  const session = rcp.createSession();\n  // 会话发起请求。\n  session.fetch(req).then((resp: rcp.Response) => {\n    console.info(`Response succeeded: ${JSON.stringify(resp)}`);\n    session.close();\n  }).catch((err: BusinessError) => {\n    // 请求错误处理。\n    console.error(`Response error code is ${err.code}, error data is ${err.data}`);\n    session.close();\n  })\n} catch (err) {\n  // 创建会话错误处理。\n  console.error(`createSession error code is ${err.code}, error data is ${err.data}`);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "如何使用multipartform发送http多部分表格数据",
      children: "如何使用MultipartForm发送HTTP多部分表格数据"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#requestcontent",
        children: "RequestContent"
      }), "指定HTTP请求中要发送的数据时，可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#multipartform",
        children: "MultipartForm"
      }), "来发送HTTP多部分表格数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.1(21)开始，MultipartForm表单支持使用keys来指定表单中key的发送顺序。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用示例-7",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rcp } from '@kit.RemoteCommunicationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建RequestContent。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建MultipartForm多部分表单数据。\nconst multiForm = new rcp.MultipartForm({\n  \"key1\": \"value1\",\n  \"key2\": \"value2\",\n  \"key3\": \"value3\",\n});\n// 定义多部分表单中的键的顺序。指定后，将按keys列表中的顺序发送（不在列表中的key不会被发送）；如果不指定，则默认按照各个key的hash顺序发送。\nmultiForm.keys = [\"key3\", \"key1\", \"key2\"];\n// 创建request请求。请将URL地址替换为实际访问的地址。\nlet req = new rcp.Request(\"http://example.com\");\nreq.content = multiForm;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建会话，并发起fetch请求。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  // 创建会话。\n  const session = rcp.createSession();\n  // 会话发起请求。\n  session.fetch(req).then((resp: rcp.Response) => {\n    console.info(`Response succeeded: ${JSON.stringify(resp)}`);\n    session.close();\n  }).catch((err: BusinessError) => {\n    // 请求错误处理。\n    console.error(`Response error code is ${err.code}, error data is ${err.data}`);\n    session.close();\n  })\n} catch (err) {\n  // 创建会话错误处理。\n  console.error(`createSession error code is ${err.code}, error data is ${err.data}`);\n}\n"
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