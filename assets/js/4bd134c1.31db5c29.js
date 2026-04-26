"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["501450"], {
398283(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_remote_communication_kit_guide_remote_communication_netcom_remote_communication_customhttp_remote_communication_interceptconfig_remote_communication_interceptconfig_md_4bd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-remote-communication-kit-guide-remote-communication-netcom-remote-communication-customhttp-remote-communication-interceptconfig-remote-communication-interceptconfig-md-4bd.json
var site_docs_system_network_remote_communication_kit_guide_remote_communication_netcom_remote_communication_customhttp_remote_communication_interceptconfig_remote_communication_interceptconfig_md_4bd_namespaceObject = JSON.parse('{"id":"system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-interceptconfig/remote-communication-interceptconfig","title":"拦截器：更丰富、更高阶的定制能力","description":"使用拦截器可以便捷地对HTTP的请求与响应进行修改，您可以创建拦截器链，按需定制一组拦截器对网络请求/响应进行修改。Remote Communication Kit模块提供了拦截器能力，在SessionConfiguration中添加interceptors参数，传入自定义的拦截器，即可在HTTP请求和响应的过程中添加拦截器功能。","source":"@site/docs/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-interceptconfig/remote-communication-interceptconfig.md","sourceDirName":"system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-interceptconfig","slug":"/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-interceptconfig/","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-interceptconfig/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"拦截器：更丰富、更高阶的定制能力","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-interceptconfig","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ProcessingConfiguration：定制处理行为","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-customconfig/remote-communication-customprocessconfig/"},"next":{"title":"快速实现上传下载","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-filetransfer/remote-communication-filetransferfast/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-customhttp/remote-communication-interceptconfig/remote-communication-interceptconfig.md


const frontMatter = {
	title: '拦截器：更丰富、更高阶的定制能力',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-interceptconfig',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '拦截器：更丰富、更高阶的定制能力';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "拦截器工作原理",
  "id": "拦截器工作原理",
  "level": 2
}, {
  "value": "拦截器的定义和使用",
  "id": "拦截器的定义和使用",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
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
        id: "拦截器更丰富更高阶的定制能力",
        children: "拦截器：更丰富、更高阶的定制能力"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用拦截器可以便捷地对HTTP的请求与响应进行修改，您可以创建拦截器链，按需定制一组拦截器对网络请求/响应进行修改。Remote Communication Kit模块提供了拦截器能力，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#sessionconfiguration",
        children: "SessionConfiguration"
      }), "中添加interceptors参数，传入自定义的拦截器，即可在HTTP请求和响应的过程中添加拦截器功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "拦截器：更丰富、更高阶的定制能力支持Phone、2in1、Tablet、Wearable设备。并且从5.1.1(19)开始，新增支持TV设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "拦截器工作原理",
      children: "拦截器工作原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在客户端发送HTTP请求到达目标服务器之前，可以使用拦截器对请求进行修改。如下图，定义了RequestUrlChangeInterceptor链式拦截器（下文以拦截器1代替）和ResponseHeaderRemoveInterceptor链式拦截器（下文以拦截器2代替）。拦截器1会将请求先拦截，该拦截器可以实现当网络质量差时，通过修改HTTP请求中的URL，来调整请求资源的大小。然后经过拦截器2，最后到达Internet。当请求到达目标服务器，服务器返回请求响应的结果给客户端之前，可以使用拦截器对HTTP的响应进行修改。响应先被拦截器2拦截，在响应返回给应用前检查和修改服务器的响应头。然后经过拦截器1，最后客户端接收响应结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(220984)/* ["default"] */.A) + "",
        width: "779",
        height: "321"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(183509)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RequestUrlChangeInterceptor拦截器和ResponseHeaderRemoveInterceptor拦截器都是自定义拦截器，需要开发者通过代码去实现内部逻辑。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "拦截器的定义和使用",
      children: "拦截器的定义和使用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本节介绍如何自定义拦截器，定义RequestUrlChangeInterceptor拦截器和ResponseHeaderRemoveInterceptor拦截器实现", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#interceptor",
        children: "Interceptor"
      }), "，可在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#intercept",
        children: "intercept()"
      }), "方法中根据业务需求自定义处理逻辑，实现对请求/响应的修改。以下示例模拟网络质量不佳的情况。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入需要的模块，示例中包含了利用远场通信框架发起网络请求以及请求后的响应和错误处理，所以需导入以下模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rcp } from '@kit.RemoteCommunicationKit';\nimport { url } from '@kit.ArkTS';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义两种拦截器，RequestUrlChangeInterceptor拦截器中，当网络质量较差的时候，修改请求中的URL路径，请求获取分辨率较小的图片，可提升用户体验；NetworkQualityProvider中的isNetWorkFast用于在示例代码中模拟网络质量的好坏，这里仅作为场景模拟，需要开发者自行评估实现。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 模拟网络质量不佳的情况\nexport class NetworkQualityProvider {\n  isNetworkFast: boolean = true\n\n  public constructor(isNetworkFast: boolean) {\n    this.isNetworkFast = isNetworkFast\n  }\n}\n\n// 定义RequestUrlChangeInterceptor拦截器\nexport class RequestUrlChangeInterceptor implements rcp.Interceptor {\n  private readonly networkQualityProvider: NetworkQualityProvider;\n\n  constructor(networkQualityProvider: NetworkQualityProvider) {\n    this.networkQualityProvider = networkQualityProvider;\n  }\n\n  // 自定义请求处理逻辑\n  async intercept(context: rcp.RequestContext, next: rcp.RequestHandler): Promise<rcp.Response> {\n    if (context.request.method === 'GET' && !this.networkQualityProvider.isNetworkFast) {\n      console.info('[RequestUrlChangeInterceptor]: Slow network is detected');\n      const parts = context.request.url.pathname.split('.');\n      if (parts.length === 2) {\n        const changed = url.URL.parseURL(context.request.url.href);\n        changed.pathname = parts[0] + '_small.' + parts[1];\n        console.info(`[RequestUrlChangeInterceptor]: Replace URL from \"${context.request.url.href}\" to \"${changed}\"`);\n        AppStorage.setOrCreate('ReplacedInfo',\n          `[RequestUrlChangeInterceptor]: Replace URL from \"${context.request.url.href}\" to \"${changed}\"`);\n        context.request.url = changed;\n      }\n    } else {\n      console.info('[RequestUrlChangeInterceptor]: Network is fast');\n    }\n    return next.handle(context);\n  }\n}\n\n// 定义ResponseHeaderRemoveInterceptor拦截器\nexport class ResponseHeaderRemoveInterceptor implements rcp.Interceptor {\n  // 自定义响应处理逻辑\n  async intercept(context: rcp.RequestContext, next: rcp.RequestHandler): Promise<rcp.Response> {\n    const response = await next.handle(context);\n    const toReturn: rcp.Response = {\n      request: response.request,\n      statusCode: response.statusCode,\n      httpVersion: response.httpVersion,\n      headers: {\n        'content-range': response.headers['content-range']\n      },\n      effectiveUrl: response.effectiveUrl,\n      timeInfo: response.timeInfo,\n      toJSON: () => null\n    };\n    console.info('[ResponseHeaderRemoveInterceptor]: Response was modified');\n    return toReturn;\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用拦截器，通过Remote Communication Kit模块中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#sessionconfiguration",
            children: "SessionConfiguration"
          }), "对象来设置interceptors，即可在请求/响应中添加拦截器。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function httpRequest(networkStateSimulator: NetworkQualityProvider) {\n  const sessionConfig: rcp.SessionConfiguration = {\n    interceptors: [\n      new RequestUrlChangeInterceptor(networkStateSimulator),\n      new ResponseHeaderRemoveInterceptor()\n    ],\n    requestConfiguration: {\n      security: {\n        tlsOptions: {\n          tlsVersion: 'TlsV1.3'\n        }\n      }\n    }\n  };\n  const session = rcp.createSession(sessionConfig);\n}\n"
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
183509(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
220984(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478431-df44bd8b57b53359f116a768fbb9a420.png");

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