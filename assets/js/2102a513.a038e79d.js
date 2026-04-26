"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["174477"], {
182588(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_remote_communication_kit_guide_remote_communication_hpp_remote_communication_cache_remote_communication_cache_shared_remote_communication_cache_shared_md_210_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-remote-communication-kit-guide-remote-communication-hpp-remote-communication-cache-remote-communication-cache-shared-remote-communication-cache-shared-md-210.json
var site_docs_system_network_remote_communication_kit_guide_remote_communication_hpp_remote_communication_cache_remote_communication_cache_shared_remote_communication_cache_shared_md_210_namespaceObject = JSON.parse('{"id":"system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-cache/remote-communication-cache-shared/remote-communication-cache-shared","title":"Session间缓存共享","description":"从6.0.0(20)开始，支持Session间缓存共享。","source":"@site/docs/system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-cache/remote-communication-cache-shared/remote-communication-cache-shared.md","sourceDirName":"system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-cache/remote-communication-cache-shared","slug":"/system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-cache/remote-communication-cache-shared/","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-cache/remote-communication-cache-shared/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Session间缓存共享","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-cache-shared","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"HTTP缓存基本功能","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-cache/remote-communication-cache-basic/"},"next":{"title":"自定义缓存拦截器","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-cache/remote-communication-cache-intercept/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-cache/remote-communication-cache-shared/remote-communication-cache-shared.md


const frontMatter = {
	title: 'Session间缓存共享',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-cache-shared',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = 'Session间缓存共享';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "引用相同HTTP响应缓存实例",
  "id": "引用相同http响应缓存实例",
  "level": 2
}, {
  "value": "配置相同缓存存储路径",
  "id": "配置相同缓存存储路径",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "session间缓存共享",
        children: "Session间缓存共享"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20)开始，支持Session间缓存共享。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Session之间数据是隔离的，当业务场景需要实现跨Session访问缓存数据时，可通过以下两种标准方式达成目标："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "引用相同的HTTP响应缓存实例，不同Session能直接访问同一缓存池中的数据；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "配置相同的缓存存储路径，使各个Session基于同一存储位置读写缓存，以此实现缓存数据的跨Session共享与交互。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Session间缓存共享能力支持Phone、2in1、Tablet、Wearable、TV设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "引用相同http响应缓存实例",
      children: "引用相同HTTP响应缓存实例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#responsecache",
        children: "ResponseCache"
      }), "实例，将其配置到不同Session中，可以在Session间共享缓存数据。"]
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
          }), "实例。其中，pathToFolder即缓存记录文件路径，”/path/dir”请根据实际情况替换为想要存储HTTP缓存的沙箱路径。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const responseCache = new rcp.ResponseCache({\n  persistent: {\n    kind: 'file-system',\n    pathToFolder: \"/path/dir\" // 请根据自身业务选择合适的路径\n  }\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建SessionA和SessionB。配置responseCache实例到SessionA和SessionB中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const sessionA: rcp.Session = rcp.createSession({\n  requestConfiguration: {\n    cache: responseCache\n  }\n});\nconst sessionB: rcp.Session = rcp.createSession({\n  requestConfiguration: {\n    cache: responseCache\n  }\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["由SessionA发起第一次请求。“", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://www.example.com”请根据实际情况替换为支持HTTP缓存协议的URL。本次请求将会从网络服务器获取数据，此时可查看缓存状态信息，此时缓存条数应当为1"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const responseA = await sessionA.get('https://www.example.com');\nconsole.info(`Request succeeded, message is ${JSON.stringify(responseA)}`);\nlet cacheState = await responseCache.getState();\nconsole.info(`The current number of cache entries is: ${cacheState.count}`);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["由SessionB发起第二次请求。“", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://www.example.com”请根据实际情况替换为支持HTTP缓存协议的URL。本次请求将会直接从缓存中获取响应，此时可查看缓存状态信息，此时缓存命中数应当为1"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const responseB = await sessionB.get('https://www.example.com');\nconsole.info(`Request succeeded, message is ${JSON.stringify(responseB)}`);\ncacheState = await responseCache.getState();\nconsole.info(`The current cache hit count is: ${cacheState.hitCount}`);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置相同缓存存储路径",
      children: "配置相同缓存存储路径"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建不同的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#responsecache",
        children: "ResponseCache"
      }), "实例，但对应缓存存储路径相同，将ResponseCache实例配置到不同Session中，可以在Session间共享缓存数据。"]
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
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建ResponseCacheA和ResponseCacheB实例，两者对应缓存存储路径相同。其中，pathToFolder即HTTP缓存响应记录文件路径，”/path/dir”请根据实际情况替换为想要存储HTTP缓存的沙箱路径。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const responseCacheA = new rcp.ResponseCache({\n  persistent: {\n    kind: 'file-system',\n    pathToFolder: \"/path/dir\" // 请根据自身业务选择合适的路径\n  }\n});\nconst responseCacheB = new rcp.ResponseCache({\n  persistent: {\n    kind: 'file-system',\n    pathToFolder: \"/path/dir\" // 请根据自身业务选择合适的路径\n  }\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建SessionA和SessionB。配置responseCacheA实例到SessionA，配置responseCacheB实例到SessionB中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const sessionA: rcp.Session = rcp.createSession({\n  requestConfiguration: {\n    cache: responseCacheA\n  }\n});\nconst sessionB: rcp.Session = rcp.createSession({\n  requestConfiguration: {\n    cache: responseCacheB\n  }\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["由SessionA发起第一次请求。“", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://www.example.com”请根据实际情况替换为支持HTTP缓存协议的URL。本次请求将会从网络服务器获取数据，此时可查看responseCacheA的缓存状态信息，此时缓存条数应当为1"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const responseA = await sessionA.get('https://www.example.com');\nconsole.info(`Request succeeded, message is ${JSON.stringify(responseA)}`);\nlet cacheState = await responseCacheA.getState();\nconsole.info(`The current number of cache entries is: ${cacheState.count}`);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["由SessionB发起第二次请求。“", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://www.example.com”请根据实际情况替换为支持HTTP缓存协议的URL。本次请求将会直接从缓存中获取响应，此时可查看responseCacheB的缓存状态信息，此时缓存条数和缓存命中数均应当为1"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const responseB = await sessionB.get('https://www.example.com');\nconsole.info(`Request succeeded, message is ${JSON.stringify(responseB)}`);\ncacheState = await responseCacheB.getState();\nconsole.info(`The current number of cache entries is: ${cacheState.count}`);\nconsole.info(`The current cache hit count is: ${cacheState.hitCount}`);\n"
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