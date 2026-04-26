"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["491141"], {
332775(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_remote_communication_kit_guide_remote_communication_hpp_remote_communication_cache_remote_communication_cache_basic_remote_communication_cache_basic_md_4b6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-remote-communication-kit-guide-remote-communication-hpp-remote-communication-cache-remote-communication-cache-basic-remote-communication-cache-basic-md-4b6.json
var site_docs_system_network_remote_communication_kit_guide_remote_communication_hpp_remote_communication_cache_remote_communication_cache_basic_remote_communication_cache_basic_md_4b6_namespaceObject = JSON.parse('{"id":"system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-cache/remote-communication-cache-basic/remote-communication-cache-basic","title":"HTTP缓存基本功能","description":"从6.0.0(20)开始，支持HTTP缓存。","source":"@site/docs/system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-cache/remote-communication-cache-basic/remote-communication-cache-basic.md","sourceDirName":"system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-cache/remote-communication-cache-basic","slug":"/system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-cache/remote-communication-cache-basic/","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-cache/remote-communication-cache-basic/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"HTTP缓存基本功能","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-cache-basic","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通过配置Configuration优化传输性能","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-cpo/"},"next":{"title":"Session间缓存共享","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-cache/remote-communication-cache-shared/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-cache/remote-communication-cache-basic/remote-communication-cache-basic.md


const frontMatter = {
	title: 'HTTP缓存基本功能',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-cache-basic',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = 'HTTP缓存基本功能';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "使用HTTP缓存",
  "id": "使用http缓存",
  "level": 2
}, {
  "value": "配置缓存过期策略",
  "id": "配置缓存过期策略",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "http缓存基本功能",
        children: "HTTP缓存基本功能"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20)开始，支持HTTP缓存。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HTTP 缓存是一种在客户端存储网络资源副本的机制，当后续请求相同资源时，可直接从缓存中获取，无需再次向服务器发起完整请求。HTTP 缓存适用于静态资源（如图片、CSS）和高访问量内容，能有效提升网络资源获取性能。Remote Communication Kit模块提供HTTP缓存功能，遵循", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.rfc-editor.org/rfc/rfc9111.html",
        children: "RFC 9111"
      }), "协议，支持独立配置缓存策略与持久化存储路径，实现内存、磁盘双重缓存管理，并提供自定义缓存拦截器能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTTP缓存基本功能能力支持Phone、2in1、Tablet、Wearable、TV设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用http缓存",
      children: "使用HTTP缓存"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在需要频繁获取网络热点数据的场景下，网络请求耗时在总时长中占比较大。开发者可以通过创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#responsecache",
        children: "ResponseCache"
      }), "实例，并将其配置到Session中，即可使用HTTP缓存功能，提升资源加载性能。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rcp } from '@kit.RemoteCommunicationKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#responsecache",
            children: "ResponseCache"
          }), "实例。其中，pathToFolder即HTTP缓存响应记录文件路径，“/path/dir“请根据实际情况替换为想要存储HTTP缓存的沙箱路径。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const responseCache = new rcp.ResponseCache({\n  persistent: {\n    kind: 'file-system',\n    pathToFolder: \"/path/dir\" // 请根据自身业务选择合适的路径\n  }\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建会话。在创建Session时，传入responseCache实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const session: rcp.Session = rcp.createSession({\n  requestConfiguration: {\n    cache: responseCache\n  }\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["发起第一次请求。“", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://www.example.com”请根据实际情况替换为支持HTTP缓存协议的URL。本次请求将会从网络服务器获取数据，此时可查看缓存状态信息，若HTTP缓存成功，此时缓存条数应当为1"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const responseA = await session.get('https://www.example.com');\nconsole.info(`Request succeeded, message is ${JSON.stringify(responseA)}`);\nlet cacheState = await responseCache.getState();\nconsole.info(`The current number of cache entries is: ${cacheState.count}`);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "发起第二次请求。由于上次请求将会把响应存储到缓存中，第二次请求将会直接从缓存中获取响应。此时可查看缓存状态信息，此时缓存命中数应当为1。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const responseB = await session.get('https://www.example.com');\nconsole.info(`Request succeeded, message is ${JSON.stringify(responseB)}`);\ncacheState = await responseCache.getState();\nconsole.info(`The current cache hit count is: ${cacheState.hitCount}`);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置缓存过期策略",
      children: "配置缓存过期策略"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Remote Communication Kit提供了丰富的缓存过期策略配置项供开发者使用，包括永不过期、绝对时间、相对时间以及滑动时间过期策略，具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#expirationpolicy",
        children: "接口文档"
      }), "。开发者可以根据业务特性选择不同的缓存过期策略，灵活调整缓存生命周期。下面以相对时间过期策略配置为例，讲述如何配置缓存过期策略，并体会对应的缓存逻辑。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rcp } from '@kit.RemoteCommunicationKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#responsecache",
            children: "ResponseCache"
          }), "实例。其中，pathToFolder即HTTP缓存响应记录文件路径，”/path/dir”请根据实际情况替换为想要存储HTTP缓存的沙箱路径。defaultExpirationPolicy即默认过期策略，示例代码中配置了时间间隔3秒的相对时间过期策略，具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#relativetimeexpirationpolicy",
            children: "RelativeTimeExpirationPolicy"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const responseCache = new rcp.ResponseCache({\n  persistent: {\n    kind: 'file-system',\n    pathToFolder: \"/path/dir\" // 请根据自身业务选择合适的路径\n  },\n  // 过期策略配置，可根据业务特性进行选择\n  defaultExpirationPolicy: {\n    kind: 'relative',\n    time: {\n      units: 'seconds',\n      value: 3,\n    }\n  }\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建会话。在创建Session时，传入responseCache实例。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const session: rcp.Session = rcp.createSession({\n  requestConfiguration: {\n    cache: responseCache\n  }\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["发起第一次请求。“", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://www.example.com”请根据实际情况替换为支持HTTP缓存协议的URL。本次请求将会从网络服务器获取数据，此时可查看缓存状态信息，若HTTP缓存成功，此时缓存条数应当为1"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const responseA = await session.get('https://www.example.com');\nconsole.info(`Request succeeded, message is ${JSON.stringify(responseA)}`);\nlet cacheState = await responseCache.getState();\nconsole.info(`The current number of cache entries is: ${cacheState.count}`);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义sleep延时函数，并延时4秒。由于配置的缓存过期策略为3秒，此时若延时4秒，步骤4中存储的缓存记录将会过期。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 定义sleep函数，入参timeout单位为ms。\ntype sleepFn = (a: number) => Promise<null>\nconst sleep: sleepFn = (timeout) => {\n  return new Promise(resolve => {\n    setTimeout(() => {\n      resolve(null)\n    }, timeout);\n  });\n};\n// 延时4秒，使缓存过期。\nawait sleep(4000);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "发起第二次请求。由于缓存记录已过期，此时本次请求仍然会去访问网络服务器获取数据，此时缓存命中数应为0。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const responseB = await session.get('https://www.example.com');\nconsole.info(`Request succeeded, message is ${JSON.stringify(responseB)}`);\ncacheState = await responseCache.getState();\nconsole.info(`The current cache hit count is: ${cacheState.hitCount}`);\n"
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