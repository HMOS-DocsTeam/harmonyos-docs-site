"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["657954"], {
83326(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_remote_communication_kit_guide_remote_communication_hpp_remote_communication_cache_remote_communication_cache_intercept_remote_communication_cache_intercept_md_d86_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-remote-communication-kit-guide-remote-communication-hpp-remote-communication-cache-remote-communication-cache-intercept-remote-communication-cache-intercept-md-d86.json
var site_docs_system_network_remote_communication_kit_guide_remote_communication_hpp_remote_communication_cache_remote_communication_cache_intercept_remote_communication_cache_intercept_md_d86_namespaceObject = JSON.parse('{"id":"system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-cache/remote-communication-cache-intercept/remote-communication-cache-intercept","title":"自定义缓存拦截器","description":"从6.0.0(20)开始，支持自定义缓存拦截器。","source":"@site/docs/system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-cache/remote-communication-cache-intercept/remote-communication-cache-intercept.md","sourceDirName":"system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-cache/remote-communication-cache-intercept","slug":"/system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-cache/remote-communication-cache-intercept/","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-cache/remote-communication-cache-intercept/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"自定义缓存拦截器","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-cache-intercept","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Session间缓存共享","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-cache/remote-communication-cache-shared/"},"next":{"title":"使用URPC进行远程程序调用","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-urpc/remote-communication-urpccall/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-cache/remote-communication-cache-intercept/remote-communication-cache-intercept.md


const frontMatter = {
	title: '自定义缓存拦截器',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-cache-intercept',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '自定义缓存拦截器';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "使用自定义缓存拦截器",
  "id": "使用自定义缓存拦截器",
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
        id: "自定义缓存拦截器",
        children: "自定义缓存拦截器"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20)开始，支持自定义缓存拦截器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Remote Communication Kit模块提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-interceptconfig#%E6%8B%A6%E6%88%AA%E5%99%A8%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86",
        children: "拦截器"
      }), "能力，支持开发者根据业务需求，实现自定义缓存拦截器。通过拦截器机制，开发者能够介入缓存处理流程，包括缓存数据的预处理、加载逻辑定制等，从而精准匹配复杂业务场景对缓存逻辑的差异化需求，提升系统的灵活性与可扩展性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义缓存拦截器能力支持Phone、2in1、Tablet、Wearable、TV设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用自定义缓存拦截器",
      children: "使用自定义缓存拦截器"
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
          children: "实现自定义缓存拦截器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class BlindCacheInterceptor implements rcp.Interceptor {\n  private readonly cache: rcp.ResponseCache;\n  constructor(cache: rcp.ResponseCache) {\n    this.cache = cache;\n  }\n  async intercept(context: rcp.RequestContext, next: rcp.RequestHandler): Promise<rcp.Response> {\n    const key: rcp.ResponseCacheKey = {\n      url: context.request.url,\n      method: context.request.method,\n    };\n    const responseInCache = await this.cache.get(key);\n    if (responseInCache) {\n      return rcp.createResponse(context.request, responseInCache.response, new Date());\n    }\n    const networkResponse = await next.handle(context);\n    await this.cache.set(key, rcp.createCachedResponse(networkResponse));\n    return networkResponse;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建ResponseCache实例。其中，pathToFolder即HTTP缓存响应记录文件路径，”/path/dir”请根据实际情况替换为想要存储HTTP缓存的沙箱路径。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const responseCache = new rcp.ResponseCache({\n  persistent: {\n    kind: 'file-system',\n    pathToFolder: \"/path/dir\" // 请根据自身业务选择合适的路径\n  }\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建会话。在创建Session时，添加", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#interceptor",
            children: "Interceptors"
          }), "参数。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const session: rcp.Session = rcp.createSession({ interceptors: [new BlindCacheInterceptor(responseCache)] });\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["发起第一次请求。“", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://www.example.com”请根据实际情况替换为支持HTTP缓存协议的URL。本次请求将会从网络服务器获取数据，此时可查看缓存状态信息，此时缓存条数应当为1"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const responseA = await session.put('https://www.example.com');\nconsole.info(`Request succeeded, message is ${JSON.stringify(responseA)}`);\nlet cacheState = await responseCache.getState();\nconsole.info(`The current number of cache entries is: ${cacheState.count}`);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["发起第二次请求。“", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://www.example.com”请根据实际情况替换为支持HTTP缓存协议的URL。本次请求将会按照自定义缓存拦截器逻辑从缓存中获取响应，此时可查看缓存状态信息，此时缓存命中数应当为1"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const responseB = await session.put('https://www.example.com');\nconsole.info(`Request succeeded, message is ${JSON.stringify(responseB)}`);\ncacheState = await responseCache.getState();\nconsole.info(`The current cache hit count is: ${cacheState.hitCount}`);\n"
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