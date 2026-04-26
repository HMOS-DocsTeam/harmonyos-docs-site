"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["580504"], {
397091(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_remote_communication_kit_guide_remote_communication_netcom_remote_communication_netinit_remote_communication_netcancle_c_remote_communication_netcancle_c_md_63e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-remote-communication-kit-guide-remote-communication-netcom-remote-communication-netinit-remote-communication-netcancle-c-remote-communication-netcancle-c-md-63e.json
var site_docs_system_network_remote_communication_kit_guide_remote_communication_netcom_remote_communication_netinit_remote_communication_netcancle_c_remote_communication_netcancle_c_md_63e_namespaceObject = JSON.parse('{"id":"system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-netinit/remote-communication-netcancle-c/remote-communication-netcancle-c","title":"取消网络请求（C++）","description":"在远场通信服务的框架中，没有明确指定任何request的情况下，可以取消所有正在进行的网络请求。如果开发者需要取消特定的一个网络请求，可以使用HMS\\\\Rcp\\\\CancelRequest方法，并传入需要取消的请求，以实现这一目标。开发者们可以根据具体需求，灵活地管理和控制网络请求的执行。总之，HMS\\\\Rcp\\\\CancelRequest方法的灵活运用，不仅能够优化网络资源的使用，还能提升应用程序的用户体验。","source":"@site/docs/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-netinit/remote-communication-netcancle-c/remote-communication-netcancle-c.md","sourceDirName":"system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-netinit/remote-communication-netcancle-c","slug":"/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-netinit/remote-communication-netcancle-c/","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-netinit/remote-communication-netcancle-c/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"取消网络请求（C++）","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-netcancle-c","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"发送网络请求（C++）","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-netinit/remote-communication-netsend-c/"},"next":{"title":"关闭会话（C++）","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-netinit/remote-communication-netclose-c/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-netinit/remote-communication-netcancle-c/remote-communication-netcancle-c.md


const frontMatter = {
	title: '取消网络请求（C++）',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-netcancle-c',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '取消网络请求（C++）';

const assets = {

};



const toc = [{
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
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "取消网络请求c",
        children: "取消网络请求（C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在远场通信服务的框架中，没有明确指定任何request的情况下，可以取消所有正在进行的网络请求。如果开发者需要取消特定的一个网络请求，可以使用HMS_Rcp_CancelRequest方法，并传入需要取消的请求，以实现这一目标。开发者们可以根据具体需求，灵活地管理和控制网络请求的执行。总之，HMS_Rcp_CancelRequest方法的灵活运用，不仅能够优化网络资源的使用，还能提升应用程序的用户体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消网络请求能力支持Phone、2in1、Tablet、Wearable设备。并且从5.1.1(19)开始，新增支持TV设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#hms_rcp_cancelrequest",
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
            children: ["uint32_t HMS_Rcp_CancelRequest(", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_session",
              children: "Rcp_Session"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview#rcp_request",
              children: "Rcp_Request"
            }), " *request);"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消指定或所有正在进行的会话请求。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
          children: ["创建会话，会话发起请求，并在使用fetch请求后，使用HMS_Rcp_CancelRequest取消网络请求。销毁request并关闭session。“", (0,jsx_runtime.jsx)(_components.code, {
            children: "http://www.example.com”请根据实际情况替换为想要请求的URL地址"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void ResponseCallback(void *usrCtx, Rcp_Response *response, uint32_t errCode)\n{\n    (void *)usrCtx;\n    if (response != NULL) {\n        printf(\"Response status: %d\\n\", response->statusCode);\n    } else {\n        printf(\"Fetch failed: errCode: %u\\n\", errCode);\n    }\n    if (response != NULL) {\n        response->destroyResponse(response);\n    }\n}\n\nint main() {\n    const char *kHttpServerAddress = \"http://www.example.com/delete\";\n    Rcp_Request *request = HMS_Rcp_CreateRequest(kHttpServerAddress);\n    request->method = RCP_METHOD_DELETE;\n    uint32_t errCode = 0;\n    // 创建session\n    Rcp_Session *session = HMS_Rcp_CreateSession(NULL, &errCode);\n    // 配置请求回调\n    Rcp_ResponseCallbackObject responseCallback = {ResponseCallback, NULL};\n    // 发起fetch请求\n    errCode = HMS_Rcp_Fetch(session, request, &responseCallback);\n    // 取消请求，处理errCode\n    errCode = HMS_Rcp_CancelRequest(session, request);\n    // 在退出前取消可能还在执行的requests\n    errCode = HMS_Rcp_CancelSession(session);\n    // 清理request\n    HMS_Rcp_DestroyRequest(request);\n    // 关闭session\n    errCode = HMS_Rcp_CloseSession(&session);\n    // 处理errCode\n    return 0;\n}\n"
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