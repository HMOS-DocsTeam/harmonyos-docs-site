"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["405478"], {
392615(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_remote_communication_kit_guide_remote_communication_hpp_remote_communication_cpo_remote_communication_cpo_md_5d5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-remote-communication-kit-guide-remote-communication-hpp-remote-communication-cpo-remote-communication-cpo-md-5d5.json
var site_docs_system_network_remote_communication_kit_guide_remote_communication_hpp_remote_communication_cpo_remote_communication_cpo_md_5d5_namespaceObject = JSON.parse('{"id":"system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-cpo/remote-communication-cpo","title":"通过配置Configuration优化传输性能","description":"约束与限制","source":"@site/docs/system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-cpo/remote-communication-cpo.md","sourceDirName":"system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-cpo","slug":"/system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-cpo/","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-cpo/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"通过配置Configuration优化传输性能","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-cpo","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"基于TracingConfiguration实现性能维测","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-tpms/"},"next":{"title":"HTTP缓存基本功能","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-cache/remote-communication-cache-basic/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-cpo/remote-communication-cpo.md


const frontMatter = {
	title: '通过配置Configuration优化传输性能',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-cpo',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '通过配置Configuration优化传输性能';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "请求预处理阶段",
  "id": "请求预处理阶段",
  "level": 2
}, {
  "value": "DNS阶段",
  "id": "dns阶段",
  "level": 2
}, {
  "value": "连接阶段",
  "id": "连接阶段",
  "level": 2
}, {
  "value": "HTTP请求阶段",
  "id": "http请求阶段",
  "level": 2
}, {
  "value": "HTTP响应阶段",
  "id": "http响应阶段",
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
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "通过配置configuration优化传输性能",
        children: "通过配置Configuration优化传输性能"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过配置Configuration优化传输性能能力支持Phone、2in1、Tablet、Wearable设备。并且从5.1.1(19)开始，新增支持TV设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { rcp } from '@kit.RemoteCommunicationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "请求预处理阶段",
      children: "请求预处理阶段"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "基于Session抽象的高并发网络框架"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持创建多个Session"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持请求动态取消"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持关闭Session"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Session中的资源互相独立、互不影响"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用可以通过使用Session来获取最佳的网络性能体验"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const session1 = rcp.createSession({\n  requestConfiguration: {\n    transfer: {\n      timeout: {\n        connectMs: 5000,\n        transferMs: 5000\n      }\n    }\n  }\n});\n\nconst request1 = new rcp.Request('https://example.com');\nconst request2 = new rcp.Request('https://example.com');\nsession1.fetch(request1).then((response) => {\n  console.info(`Request1 succeeded, message is ${JSON.stringify(response)}`);\n}).catch((err: BusinessError) => {\n  console.error(`err1: error code is ${err.code}, error data is ${err.data}`);\n});\nsession1.fetch(request2).then((response) => {\n  console.info(`Request2 succeeded, message is ${JSON.stringify(response)}`);\n  session1.close();\n}).catch((err: BusinessError) => {\n  console.error(`err2: error code is ${err.code}, error data is ${err.data}`);\n  session1.close();\n});\nsession1.cancel(request1); // 取消request1请求\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dns阶段",
      children: "DNS阶段"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-customconfig/remote-communication-customdnsconfig",
        children: "定制DNS"
      }), "请求规则，如定制DNS服务器、重写DNS解析函数，从而获取最佳的DNS性能体验。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 定制DNS解析函数\nconst session = rcp.createSession();\nconst request = new rcp.Request('https://example.com');\nrequest.configuration = {\n  dns: {\n    dnsRules: (host: string, port: number): rcp.IpAddress[] => {\n      if (host === 'example.com') {\n        return ['7.128.8.45', '7.128.8.46'];\n      }\n      return [];\n    }\n  }\n};\nsession.fetch(request).then((response) => {\n  console.info(`Request succeeded, message is ${JSON.stringify(response)}`);\n}).catch((err: BusinessError) => {\n  console.error(`err: error code is ${err.code}, error data is ${err.data}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 定制DNS服务器\nconst session = rcp.createSession();\nconst request = new rcp.Request('https://example.com');\nrequest.configuration = {\n  dns: {\n    dnsRules: [\n      {\n        ip: '7.128.8.45',\n        port: 53,\n      },\n    ]\n  }\n};\nsession.fetch(request).then((response) => {\n  console.info(`Request succeeded, message is ${JSON.stringify(response)}`);\n}).catch((err: BusinessError) => {\n  console.error(`err: error code is ${err.code}, error data is ${err.data}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "连接阶段",
      children: "连接阶段"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据资源特征动态调整连接池大小"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const session = rcp.createSession({\n  connectionConfiguration: {\n    maxConnectionsPerHost: 16,\n    maxTotalConnections: 1024,\n  }\n});\nfor (let i = 0; i < 1024; ++i) {\n  session.get('https://example' + i.toString() + '.com/image.png').then((response) => {\n    console.info(`Request succeeded, message is ${JSON.stringify(response)}`);\n  }).catch((err: BusinessError) => {\n    console.error(`err: error code is ${err.code}, error data is ${err.data}`);\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "http请求阶段",
      children: "HTTP请求阶段"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持响应体分段返回，以节省内存"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持直接将响应写入文件，以节省内存"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持请求体分段上传，以节省内存"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 使用响应体直接写入文件\nconst session = rcp.createSession();\ntry {\n  const response = await session.get('https://example.com/video.mp4', {\n    kind: 'file',\n    file: './video.mp4',\n  });\n  console.info(`Request succeeded, message is ${JSON.stringify(response)}`);\n} catch (err) {\n  console.error(`err: error code is ${err.code}, error data is ${err.data}`);\n} finally {\n  session.close();\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 分段上传数据\nconst session = rcp.createSession();\ntry {\n  const response = await session.post('https://example.com/video.mp4', (maxSize: number) => {\n    return new ArrayBuffer(maxSize);\n  });\n  console.info(`Request succeeded, message is ${JSON.stringify(response)}`);\n} catch (err) {\n  console.error(`err: error code is ${err.code}, error data is ${err.data}`);\n} finally {\n  session.close();\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "http响应阶段",
      children: "HTTP响应阶段"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取响应各阶段耗时动态判断网络质量，动态调整请求（请求不同质量的资源、降低资源缓存数量）。更详细的示例请移步", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-tpms#http%E8%AF%B7%E6%B1%82%E8%BF%87%E7%A8%8B%E4%B8%AD%E5%90%84%E6%97%B6%E9%97%B4%E7%82%B9%E8%AF%A6%E8%A7%A3",
        children: "HTTP请求过程中各时间点详解"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 获取各个阶段的耗时信息\nconst session = rcp.createSession();\ntry {\n  const response = await session.get('https://example.com');\n  console.info(response.timeInfo?.nameLookupTimeMs.toString());\n  console.info(response.timeInfo?.connectTimeMs.toString());\n  console.info(response.timeInfo?.tlsHandshakeTimeMs.toString());\n  console.info(response.timeInfo?.preTransferTimeMs.toString());\n  console.info(response.timeInfo?.startTransferTimeMs.toString());\n  console.info(response.timeInfo?.totalTimeMs.toString());\n  console.info(response.timeInfo?.redirectTimeMs.toString());\n} catch (err) {\n  console.error(`err: error code is ${err.code}, error data is ${err.data}`);\n} finally {\n  session.close();\n}\n"
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