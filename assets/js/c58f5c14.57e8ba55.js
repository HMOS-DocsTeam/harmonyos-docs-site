"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["580479"], {
407412(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_remote_communication_kit_guide_remote_communication_netcom_remote_communication_customhttp_remote_communication_customconfig_remote_communication_customproxyconfig_remote_communication_customproxyconfig_md_c58_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-remote-communication-kit-guide-remote-communication-netcom-remote-communication-customhttp-remote-communication-customconfig-remote-communication-customproxyconfig-remote-communication-customproxyconfig-md-c58.json
var site_docs_system_network_remote_communication_kit_guide_remote_communication_netcom_remote_communication_customhttp_remote_communication_customconfig_remote_communication_customproxyconfig_remote_communication_customproxyconfig_md_c58_namespaceObject = JSON.parse('{"id":"system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-customconfig/remote-communication-customproxyconfig/remote-communication-customproxyconfig","title":"ProxyConfiguration：定制代理","description":"场景介绍","source":"@site/docs/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-customconfig/remote-communication-customproxyconfig/remote-communication-customproxyconfig.md","sourceDirName":"system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-customconfig/remote-communication-customproxyconfig","slug":"/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-customconfig/remote-communication-customproxyconfig/","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-customconfig/remote-communication-customproxyconfig/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"ProxyConfiguration：定制代理","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-customproxyconfig","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"TransferConfiguration：定制数据传输","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-customconfig/remote-communication-customtranferconfig/"},"next":{"title":"SecurityConfiguration：定制安全传输行为","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-customconfig/remote-communication-customsecurityconfig/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-customconfig/remote-communication-customproxyconfig/remote-communication-customproxyconfig.md


const frontMatter = {
	title: 'ProxyConfiguration：定制代理',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-customproxyconfig',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = 'ProxyConfiguration：定制代理';

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
  "value": "使用示例",
  "id": "使用示例",
  "level": 2
}, {
  "value": "&#39;no-proxy&#39;",
  "id": "no-proxy",
  "level": 3
}, {
  "value": "&#39;system&#39;",
  "id": "system",
  "level": 3
}, {
  "value": "WebProxy（自定义代理设置）",
  "id": "webproxy自定义代理设置",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "proxyconfiguration定制代理",
        children: "ProxyConfiguration：定制代理"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在远场通信框架中，ProxyConfiguration配置会话代理设置，提供system、no-proxy和WebProxy三种选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "system使用系统代理，适合快速部署；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "no-proxy不使用代理，适用于需直接访问特定资源或有代理限制的环境；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "WebProxy允许开发者自定义代理设置，解决特定网络问题，优化代理路径，提升性能和用户体验。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定制代理能力支持Phone、2in1、Tablet、Wearable设备。并且从5.1.1(19)开始，新增支持TV设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面将对框架提供的三种选项（'system'，'no-proxy'，'WebProxy'）以示例代码的方式进行说明。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "no-proxy",
      children: "'no-proxy'"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入需要的模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rcp } from '@kit.RemoteCommunicationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建一个新的会话对象和请求，会话用于管理后续的网络请求。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const session = rcp.createSession();\n// 定义请求的URL（请根据实际需求调整）\nconst requestURL = 'https://example.com';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义发起请求时需要的代理配置，在定义proxyConfiguration时选择'no-proxy'即可将代理方式选择为不使用代理方式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 配置请求的proxy方式为'no-proxy'\nconst configuration: rcp.Configuration = {\n  proxy: 'no-proxy'\n}\n// 定义request并将请求configuration添加到request中\nconst request = new rcp.Request(requestURL, \"GET\");\nrequest.configuration = configuration;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "利用fetch发起网络请求并在成功或失败时进行响应的处理，此处只给出示例，对成功或失败的处理请根据实际业务来实现。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "session.fetch(request).then((response: rcp.Response) => {\n  // 处理请求成功响应\n  console.info(`Response success, ${response}`);\n  // 关闭会话\n  session.close();\n}).catch((err: BusinessError) => {\n  // 处理请求失败响应\n  console.error(`The error code is ${err.code}, error data is ${err.data}`);\n  // 关闭会话\n  session.close();\n})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "system",
      children: "'system'"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入需要的模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rcp } from '@kit.RemoteCommunicationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建一个新的会话对象和请求，会话用于管理后续的网络请求。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const session = rcp.createSession();\n// 定义请求的URL（请根据实际需求调整）\nconst requestURL = 'https://example.com';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义发起请求时需要的代理配置，在定义proxyConfiguration时选择'system'即可将代理方式选择为使用系统代理方式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 配置请求的proxy方式为'system'\nconst configuration: rcp.Configuration = {\n  proxy: 'system'\n}\n// 定义request并将请求configuration添加到request中\nconst request = new rcp.Request(requestURL, \"GET\");\nrequest.configuration = configuration;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "利用fetch发起网络请求并在成功或失败时进行响应的处理，此处只给出示例，对成功或失败的处理请根据实际业务来实现。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "session.fetch(request).then((response: rcp.Response) => {\n  // 处理请求成功响应\n  console.info(`Response success, ${response}`);\n  // 关闭会话\n  session.close();\n}).catch((err: BusinessError) => {\n  // 处理请求失败响应\n  console.error(`The error code is ${err.code}, error data is ${err.data}`);\n  // 关闭会话\n  session.close();\n})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "webproxy自定义代理设置",
      children: "WebProxy（自定义代理设置）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入需要的模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rcp } from '@kit.RemoteCommunicationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建一个新的会话对象和请求，会话用于管理后续的网络请求。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const session = rcp.createSession();\n// 定义请求的URL（请根据实际需求调整）\nconst requestURL = 'https://example.com';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过WebProxy自定义代理配置，通过声明式方式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 自定义proxy\nconst configuration: rcp.Configuration = {\n  proxy: {\n    url: 'https://www.example.com',\n    createTunnel: 'always',\n    exclusions: [\n      'https://www.example1.com',\n      'https://www.example2.com'\n    ]\n  }\n}\n// 定义request并将请求configuration添加到request中\nconst request = new rcp.Request(requestURL, \"GET\");\nrequest.configuration = configuration;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "利用fetch发起网络请求并在成功或失败时进行响应的处理，此处只给出示例，对成功或失败的处理请根据实际业务来实现。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "session.fetch(request).then((response: rcp.Response) => {\n  // 处理请求成功响应\n  console.info(`Response success, ${response}`);\n  // 关闭会话\n  session.close();\n}).catch((err: BusinessError) => {\n  // 处理请求失败响应\n  console.error(`The error code is ${err.code}, error data is ${err.data}`);\n  // 关闭会话\n  session.close();\n})\n"
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