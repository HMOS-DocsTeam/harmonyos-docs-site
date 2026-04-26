"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["821479"], {
564093(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_remote_communication_kit_guide_remote_communication_urpc_remote_communication_urpccall_remote_communication_urpccall_md_5e7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-remote-communication-kit-guide-remote-communication-urpc-remote-communication-urpccall-remote-communication-urpccall-md-5e7.json
var site_docs_system_network_remote_communication_kit_guide_remote_communication_urpc_remote_communication_urpccall_remote_communication_urpccall_md_5e7_namespaceObject = JSON.parse('{"id":"system-network/remote-communication-kit-guide/remote-communication-urpc/remote-communication-urpccall/remote-communication-urpccall","title":"使用URPC进行远程程序调用","description":"场景介绍","source":"@site/docs/system-network/remote-communication-kit-guide/remote-communication-urpc/remote-communication-urpccall/remote-communication-urpccall.md","sourceDirName":"system-network/remote-communication-kit-guide/remote-communication-urpc/remote-communication-urpccall","slug":"/system-network/remote-communication-kit-guide/remote-communication-urpc/remote-communication-urpccall/","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-urpc/remote-communication-urpccall/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用URPC进行远程程序调用","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-urpccall","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自定义缓存拦截器","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-cache/remote-communication-cache-intercept/"},"next":{"title":"Service Collaboration Kit简介","permalink":"/harmonyos-docs-site/system-network/service-collaboration-kit-guide/servicecollaborationkit-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/remote-communication-kit-guide/remote-communication-urpc/remote-communication-urpccall/remote-communication-urpccall.md


const frontMatter = {
	title: '使用URPC进行远程程序调用',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-urpccall',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '使用URPC进行远程程序调用';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "使用示例",
  "id": "使用示例",
  "level": 2
}, {
  "value": "创建urpcStub",
  "id": "创建urpcstub",
  "level": 3
}, {
  "value": "使用call收发网络请求",
  "id": "使用call收发网络请求",
  "level": 3
}, {
  "value": "（可选）使用cancel取消网络请求",
  "id": "可选使用cancel取消网络请求",
  "level": 3
}, {
  "value": "使用destroy关闭URPC",
  "id": "使用destroy关闭urpc",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用urpc进行远程程序调用",
        children: "使用URPC进行远程程序调用"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发送一个URPC请求，可以设置优先级等参数，返回来自远程服务器的URPC响应。当发起请求后，可以选择取消指定或正在进行的URPC请求。当完成请求后，需要关闭请求来释放与此URPC关联的资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用URPC进行远程程序调用能力支持Phone、2in1、Tablet、Wearable设备。并且从5.1.1(19)开始，新增支持TV设备。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["此功能需要配合部署远程服务器。如有需要，请通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
          children: "在线提单"
        }), "的方式与我们联系。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-urpcapi/remote-communication-urpcapi",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "call: (funcName: string, request: object, returnValue: object, config?: CallingOption) => UrpcPromise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送一个URPC请求，并返回来自服务器的URPC响应。使用Promise异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cancel: (callingId?: number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number[]) => void"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "destroy: () => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁UrpcStub实例"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建urpcstub",
      children: "创建urpcStub"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from \"@kit.PerformanceAnalysisKit\";\nimport { urpc } from \"@kit.RemoteCommunicationKit\";\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义远程调用的类，作为调用方法的入参和返回值，示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 定义调用方法的入参类示例\nexport class MediaTaskRequestMessage {\n  RequestMessage: urpc.FlowbufElement<string>;\n\n  constructor() {\n    this.RequestMessage = {type: 'STRING', value: \"\", name: \"\"};\n  }\n\n  setRequestMessage(RequestMessage: string) {\n    this.RequestMessage.value = RequestMessage;\n  }\n\n  getRequestMessage(): string {\n    return this.RequestMessage.value;\n  }\n\n}\n\n// 定义用于接收调用方法返回值的类示例\nexport class MediaTaskResponseMessage {\n  ResponseMessage: urpc.FlowbufElement<string>;\n\n  constructor() {\n    this.ResponseMessage = {type: 'STRING', value: \"\", name: \"\"};\n  }\n\n  setResponseMessage(ResponseMessage: string) {\n    this.ResponseMessage.value = ResponseMessage;\n  }\n\n  getResponseMessage(): string {\n    return this.ResponseMessage.value;\n  }\n\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建Request对象和Response接收对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let request = new MediaTaskRequestMessage();\nlet response = new MediaTaskResponseMessage();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置连接信息，创建发起URPC调用的UrpcStub。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 提前部署好的远程服务器的ip地址和端口号\nlet node: urpc.IpAndPort = {\n  ip: '127.0.0.1',\n  port: 8000\n}\nlet connect: urpc.UrpcConnectConfiguration = {\n  node: node,\n  protocol: 'eat',\n}\nlet config: urpc.UrpcInitConfiguration = {\n  timeout: 3000,\n  mode: 'client',\n  connect: connect\n}\nconst funcList:string[] = [\"uploadFile\"];\nlet urpcStub = urpc.urpcStubCreate(config, funcList);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用call收发网络请求",
      children: "使用call收发网络请求"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "urpcStub.then(async (stub: urpc.UrpcStub) =>{\n  let upload_config: urpc.CallingOption = {\n    priority: 0\n  };\n  let urpcPromise = stub.call(\"uploadFile\", request, response, upload_config);\n  urpcPromise.promise.then((resp: object) => {\n    hilog.info(0x000, \"urpc\", \"resp: %{public}s\", resp);\n  }).catch((err: BusinessError) => {\n    hilog.error(0x000, \"urpc\", \"the error code is %d\", err.code);\n  })\n}).catch((error: BusinessError) => {\n  hilog.error(0x000, \"urpc\", \"urpc call failed, error code is %d\", error.code);\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "可选使用cancel取消网络请求",
      children: "（可选）使用cancel取消网络请求"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当调用call发起一次urpc收发请求后，根据业务需要，不用接收响应时，可调用cancel取消指定callingId的请求；若不指定callingId，则取消UrpcStub发起的全部请求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "urpcStub.then(async (stub: urpc.UrpcStub) =>{\n  let upload_config: urpc.CallingOption = {\n    priority: 0\n  };\n  let urpcPromise = stub.call(\"uploadFile\", request, response, upload_config);\n  stub.cancel(urpcPromise.callingId);\n}).catch((error: BusinessError) => {\n  hilog.error(0x000, \"urpc\", \"urpc cancel failed, error code is %d\", error.code);\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用destroy关闭urpc",
      children: "使用destroy关闭URPC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当完成所有urpc收发网络请求后，需调用destroy释放并销毁UrpcStub相关的资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "urpcStub.then(async (stub: urpc.UrpcStub) =>{\n  stub.destroy();\n}).catch((error: BusinessError) => {\n  hilog.error(0x000, \"urpc\", \"urpc destroy failed, error code is %d\", error.code);\n})\n"
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