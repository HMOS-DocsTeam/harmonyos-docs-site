"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["789228"], {
632615(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_remote_communication_kit_guide_remote_communication_netcom_remote_communication_customhttp_remote_communication_customconfig_remote_communication_customtranferconfig_remote_communication_customtranferconfig_md_58c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-remote-communication-kit-guide-remote-communication-netcom-remote-communication-customhttp-remote-communication-customconfig-remote-communication-customtranferconfig-remote-communication-customtranferconfig-md-58c.json
var site_docs_system_network_remote_communication_kit_guide_remote_communication_netcom_remote_communication_customhttp_remote_communication_customconfig_remote_communication_customtranferconfig_remote_communication_customtranferconfig_md_58c_namespaceObject = JSON.parse('{"id":"system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-customconfig/remote-communication-customtranferconfig/remote-communication-customtranferconfig","title":"TransferConfiguration：定制数据传输","description":"场景介绍","source":"@site/docs/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-customconfig/remote-communication-customtranferconfig/remote-communication-customtranferconfig.md","sourceDirName":"system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-customconfig/remote-communication-customtranferconfig","slug":"/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-customconfig/remote-communication-customtranferconfig/","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-customconfig/remote-communication-customtranferconfig/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"TransferConfiguration：定制数据传输","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-customtranferconfig","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"DnsConfiguration：定制DNS","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-customconfig/remote-communication-customdnsconfig/"},"next":{"title":"ProxyConfiguration：定制代理","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-customconfig/remote-communication-customproxyconfig/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-customconfig/remote-communication-customtranferconfig/remote-communication-customtranferconfig.md


const frontMatter = {
	title: 'TransferConfiguration：定制数据传输',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-customtranferconfig',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = 'TransferConfiguration：定制数据传输';

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
  "value": "超时重试",
  "id": "超时重试",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "transferconfiguration定制数据传输",
        children: "TransferConfiguration：定制数据传输"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在远场通信框架中，开发者们利用 TransferConfiguration，可以对 HTTP请求期间的数据传输行为进行精细化管理和定制化调整。TransferConfiguration提供了自动重定向策略、超时时间设定等关键功能的配置选项。通过理解和灵活运用这些属性，开发者可以根据项目需求，实现数据传输策略的个性化定制，从而获得更高效、更可靠的数据传输体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定制数据传输能力支持Phone、2in1、Tablet、Wearable设备。并且从5.1.1(19)开始，新增支持TV设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面会介绍超时重试场景下TransferConfiguration如何去使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "超时重试",
      children: "超时重试"
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
          children: "定义会话配置，创建会话，以及定义日志函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 定义日志函数\nconst logI = console.info\nconst logE = console.error\n\n// 定义会话配置\nconst sessionConfig: rcp.SessionConfiguration = {\n  requestConfiguration: {\n    transfer: {\n      timeout: {\n        connectMs: 3000,\n        transferMs: 6000\n      }\n    }\n  }\n};\n\n// 创建会话\nconst session = rcp.createSession(sessionConfig);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义异步函数，利用递归实现重试，如果请求失败，会在指定的重试次数内进行重试，在最后一次重试时，会等待3秒后再发送请求（根据实际情况进行调整）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async function retryRequest(url: string, retryCount: number, attempt: number): Promise<rcp.Response | undefined> {\n  return new Promise((resolve, reject) => {\n    // 在最后一次重试时，等待一段时间后再发送请求\n    const delay = attempt === retryCount - 1 ? 3000 : 0; // 如果是最后一次重试，延迟3秒，否则不延迟\n    setTimeout(() => {\n      session.get(url)\n        .then(response => {\n          if (response.statusCode === 200) {\n            logI(`Request successful on attempt ${attempt}.`); // 记录请求成功信息\n            resolve(response); // 请求成功，Promise resolve\n          } else {\n            logE(`Request failed on attempt ${attempt}, statusCode: ${response.statusCode}`); // 记录请求失败信息\n            if (attempt < retryCount) { // 如果还未达到重试次数\n              retryRequest(url, retryCount, attempt + 1); // 进行下一次重试\n            } else { // 如果已经达到重试次数\n              logE(`All retries failed.`); // 记录所有重试失败信息\n              reject(new Error('All retries failed')); // 所有重试失败，Promise reject\n            }\n          }\n        })\n        .catch((err: BusinessError) => { // 请求的catch块，处理请求过程中抛出的错误\n          logE(`Request error on attempt ${attempt}, error code is ${err.code}, error data is ${err.data}`); // 记录请求错误信息\n          if (attempt < retryCount) { // 如果还未达到重试次数\n            retryRequest(url, retryCount, attempt + 1); // 进行下一次重试\n          } else { // 如果已经达到重试次数\n            logE(`All retries failed.`); // 记录所有重试失败信息\n            reject(new Error('All retries failed')); // 所有重试失败，Promise reject\n          }\n        });\n    }, delay); // 延迟指定时间后再发送请求\n  });\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用retryRequest方法，实现网络请求的重试逻辑。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 定义URL\nconst URL = 'https://www.example.com'\n\n// 定义重试次数，值为3\nconst retryCount = 3\n// 定义当前尝试次数，初始值为1\nconst attempt = 1\n\n// 调用retryRequest函数进行网络请求，参数为URL、重试次数和当前尝试次数,将返回的结果存储在response变量中\nconst response = retryRequest(URL, retryCount, attempt);\n// 使用then方法处理response的成功返回情况\nresponse.then((res) => {\n  // 如果返回的状态码不是200，表示请求未成功\n  if (res?.statusCode != 200) {\n    // 打印日志，表示超时重试失败\n    logI(`Timeout retry failed`);\n    return;\n  }\n  // 打印日志，如果返回的状态码是200，表示请求成功\n  logI(`Timeout retry succeeded, print result: ${res}`);\n}).catch((err: BusinessError) => {\n  // 打印日志，表示响应出错，并打印错误信息\n  logE(`Response error, the error code is ${err.code}, error data is ${err.data}`);\n})\n"
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