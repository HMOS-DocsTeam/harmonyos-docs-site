"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["870678"], {
585473(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_remote_communication_kit_guide_remote_communication_netcom_remote_communication_netinit_remote_communication_netclose_arkts_remote_communication_netclose_arkts_md_dc1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-remote-communication-kit-guide-remote-communication-netcom-remote-communication-netinit-remote-communication-netclose-arkts-remote-communication-netclose-arkts-md-dc1.json
var site_docs_system_network_remote_communication_kit_guide_remote_communication_netcom_remote_communication_netinit_remote_communication_netclose_arkts_remote_communication_netclose_arkts_md_dc1_namespaceObject = JSON.parse('{"id":"system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-netinit/remote-communication-netclose-arkts/remote-communication-netclose-arkts","title":"关闭会话（ArkTS）","description":"当一个HTTP请求完成，即数据已经成功发送并收到确认，或者在某些情况下，由于超时或其他错误原因，通信尝试失败，此时应立即调用相应的“关闭会话”或“释放资源”方法。这一操作的主要目的是：","source":"@site/docs/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-netinit/remote-communication-netclose-arkts/remote-communication-netclose-arkts.md","sourceDirName":"system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-netinit/remote-communication-netclose-arkts","slug":"/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-netinit/remote-communication-netclose-arkts/","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-netinit/remote-communication-netclose-arkts/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"关闭会话（ArkTS）","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-netclose-arkts","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"取消网络请求（ArkTS）","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-netinit/remote-communication-netcancle-arkts/"},"next":{"title":"发送网络请求（C++）","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-netinit/remote-communication-netsend-c/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-netinit/remote-communication-netclose-arkts/remote-communication-netclose-arkts.md


const frontMatter = {
	title: '关闭会话（ArkTS）',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-netclose-arkts',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '关闭会话（ArkTS）';

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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "关闭会话arkts",
        children: "关闭会话（ArkTS）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当一个HTTP请求完成，即数据已经成功发送并收到确认，或者在某些情况下，由于超时或其他错误原因，通信尝试失败，此时应立即调用相应的“关闭会话”或“释放资源”方法。这一操作的主要目的是："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "释放资源：在通信过程中，系统会分配各种资源，包括内存、网络带宽、处理器时间等，以支持数据的发送和接收。一旦通信结束，这些资源应被及时释放。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "清理状态：关闭会话还涉及清理与特定会话相关的所有内部状态信息，如缓存、连接状态标志等。这有助于保持系统的清晰性和可预测性，避免潜在的资源泄漏或状态冲突。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "优化性能：及时释放资源有助于提高系统的整体性能。例如，通过快速释放网络带宽，可以减少延迟，提高后续通信的效率。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "错误恢复：在遇到通信错误时，正确的关闭会话操作可以帮助系统更快地从错误状态中恢复，避免资源锁定或死锁情况的发生。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在请求结束后，及时关闭会话并释放相关资源是保持系统健康和高效运行的关键步骤。这不仅有助于优化资源利用，还能提高系统的稳定性和可靠性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关闭会话能力支持Phone、2in1、Tablet、Wearable设备。并且从5.1.1(19)开始，新增支持TV设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#close",
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "close(): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭会话。返回为空。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建会话，会话发起请求后关闭会话。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 1、创建会话\nconst session = rcp.createSession();\n// 2、创建Request，\"`http://www.example.com\"请根据实际情况替换为想要请求的URL地址`。\nlet req = new rcp.Request(\"http://www.example.com/fetch\", \"GET\");\n// 3、利用fetch发起网络请求\nsession.fetch(req).then((response) => {\n  // 4、对响应的处理，此处为示例，只做打印处理\n  console.info(`Response succeeded: ${response}`);\n}).catch((err: BusinessError) => {\n  // 5、请求错误处理\n  console.error(`Response error code is ${err.code}, error data is ${err.data}`);\n});\nsession.close();\n"
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