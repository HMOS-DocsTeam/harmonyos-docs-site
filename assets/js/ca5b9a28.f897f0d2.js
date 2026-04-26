"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["769123"], {
596826(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_remote_communication_kit_guide_remote_communication_hpp_remote_communication_tpms_remote_communication_tpms_md_ca5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-remote-communication-kit-guide-remote-communication-hpp-remote-communication-tpms-remote-communication-tpms-md-ca5.json
var site_docs_system_network_remote_communication_kit_guide_remote_communication_hpp_remote_communication_tpms_remote_communication_tpms_md_ca5_namespaceObject = JSON.parse('{"id":"system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-tpms/remote-communication-tpms","title":"基于TracingConfiguration实现性能维测","description":"约束与限制","source":"@site/docs/system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-tpms/remote-communication-tpms.md","sourceDirName":"system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-tpms","slug":"/system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-tpms/","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-tpms/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"基于TracingConfiguration实现性能维测","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-tpms","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"流式传输","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-netcom/remote-communication-streamreq/remote-communication-syncstreamreq/"},"next":{"title":"通过配置Configuration优化传输性能","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-cpo/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/remote-communication-kit-guide/remote-communication-hpp/remote-communication-tpms/remote-communication-tpms.md


const frontMatter = {
	title: '基于TracingConfiguration实现性能维测',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-tpms',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '基于TracingConfiguration实现性能维测';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "捕获有关HTTP请求/响应流的详细信息",
  "id": "捕获有关http请求响应流的详细信息",
  "level": 2
}, {
  "value": "HTTP请求过程中各时间点详解",
  "id": "http请求过程中各时间点详解",
  "level": 2
}, {
  "value": "TimeInfo时间线",
  "id": "timeinfo时间线",
  "level": 3
}, {
  "value": "示例代码",
  "id": "示例代码",
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
    img: "img",
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
        id: "基于tracingconfiguration实现性能维测",
        children: "基于TracingConfiguration实现性能维测"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "性能维测能力支持Phone、2in1、Tablet、Wearable设备。并且从5.1.1(19)开始，新增支持TV设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "捕获有关http请求响应流的详细信息",
      children: "捕获有关HTTP请求/响应流的详细信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当需要进行性能维测时，可以采集应用中HTTP请求的详细跟踪信息时，利用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#tracingconfiguration",
        children: "TracingConfiguration"
      }), "进行相关配置。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#tracingconfiguration",
        children: "TracingConfiguration"
      }), "中可以设置verbose（启用详细跟踪）、infoToCollect（配置要收集的特定类型的信息事件）、collectTimeInfo（在跟踪过程中是否应收集与时间相关的信息）、httpEventsHandler（为HTTP请求/响应过程中的特定操作定义响应处理程序的回调）四个参数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面将以获取HTTP请求/响应时的数据接收时、请求头接收时、数据传输完成时等详细信息为例，进行介绍。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入需要的模块，示例中包含了利用远场通信框架发起网络请求以及请求后的响应和错误处理，所以需导入以下模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { rcp } from '@kit.RemoteCommunicationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建自定义响应处理程序，在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-rcp/remote-communication-rcp#httpeventshandler",
            children: "HttpEventsHandler"
          }), "中设置onDataReceive（当接收到HTTP响应正文的一部分时调用的回调）、onHeaderReceive（用于在响应期间处理接收到的headers的回调）、onDataEnd（数据传输完成时触发的回调）。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 定义自定义响应处理程序\nconst customHttpEventsHandler: rcp.HttpEventsHandler = {\n  onDataReceive: (incomingData: ArrayBuffer) => {\n    // 用于处理传入数据的自定义逻辑\n    console.info(`Received data: ${incomingData.byteLength}`, );\n    return incomingData.byteLength;\n  },\n  onHeaderReceive: (headers: rcp.RequestHeaders) => {\n    // 处理响应头的自定义逻辑\n    console.info(`Received headers: ${JSON.stringify(headers)}`);\n  },\n  onDataEnd: () => {\n    // 用于处理数据传输完成的自定义逻辑\n    console.info('Data transfer complete');\n  }\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置tracingConfig对象中的verbose为true，表示启用详细跟踪，设置tracingConfig对象中的infoToCollect对象中的incomingData为true（收集传入的数据信息事件）、outgoingData为true（收集传出的数据信息事件）、incomingHeader为true（收集传入的header信息事件）、outgoingHeader为true（收集传出的header信息事件）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 配置跟踪设置\nconst tracingConfig: rcp.TracingConfiguration = {\n  verbose: true,\n  infoToCollect: {\n    incomingHeader: true, // 收集传入的header信息事件\n    outgoingHeader: true, // 收集传入的header信息事件\n    incomingData: true, // 收集传入数据信息事件\n    outgoingData: true // 收集传出数据信息事件\n  },\n  collectTimeInfo: true,\n  httpEventsHandler: customHttpEventsHandler\n};\nconst securityConfig: rcp.SecurityConfiguration = {\n  tlsOptions: {\n    tlsVersion: 'TlsV1.3'\n  }\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用rcp.createSession()传入tracingConfig ，创建通信会话对象session。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建通信会话对象，并传入相关配置\nconst session = rcp.createSession({ requestConfiguration: { tracing: tracingConfig, security: securityConfig } });\nsession.get('http://developer.huawei.com').then((response) => {\n  console.info(`Request succeeded, message is ${JSON.stringify(response)}`);\n}).catch((err: BusinessError) => {\n  console.error(`err: error code is ${err.code}, error data is ${err.data}`);\n});\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "http请求过程中各时间点详解",
      children: "HTTP请求过程中各时间点详解"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在实施性能维测的过程中，HTTP请求的各个时间点至关重要。借助TimeInfo提供的详细字段，可以精准控制请求过程，无论是直接利用这些字段，还是通过它们之间的运算，都能准确获取所需的时间点，从而提升测试效率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面，我们将通过图片、时间线及一段示例代码，详细解析请求过程中的关键时间点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(17966)/* ["default"] */.A) + "",
        width: "647",
        height: "444"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从图中可以看到HTTP请求过程的基本过程，并且有一些关键的时间点，下面将以时间线的方式对其进行说明："
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "timeinfo时间线",
      children: "TimeInfo时间线"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求开始 （0时刻） -> nameLookupTimeMs（DNS解析）-> connectTimeMs（建立连接）-> tlsHandshakeTimeMs（TLS握手）-> preTransferTimeMs（请求业务数据发送到服务器的时间点） -> startTransferTimeMs（从服务器接收到首包数据的时间点）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(935425)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "各时间节点所显示的时间均相对于0时刻，即从0时刻开始计时的时间。例如tlsHandshakeTimeMs为150.1ms，指从发起请求时间0开始，直到TLS握手结束所花费的时间为150.1ms。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络请求过程中关键节点时间计算方法："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "首包耗时：startTransferTimeMs - preTransferTimeMs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TLS握手（不包含建连时间）耗时：tlsHandshakeTimeMs - connectTimeMs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "接收剩余数据的耗时：totalTimeMs - startTransferTimeMs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这段代码在使用过程中会将上述说明中三个比较关键的时间点打印出来，开发者可以根据获取到的时间对应用性能实现动态调整，获取最佳体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { rcp } from '@kit.RemoteCommunicationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 1、创建session、requestURL\nconst session = rcp.createSession();\nconst requestURL = \"https://www.example.com\";\n\n// 2、在需要跟踪分析请求过程中各个时间段消耗的时间，请将此开关打开\nconst configuration: rcp.Configuration = {\n  tracing: {\n    collectTimeInfo: true\n  }\n}\n\n// 3、创建请求\nconst request = new rcp.Request(requestURL, \"GET\");\nrequest.configuration = configuration;\n\n// 4、使用fetch发起网络请求，request中携带上面配置好的configuration\nsession.fetch(request).then((response: rcp.Response) => {\n// 由于timeInfo中各个参数有可能为undefined，所以需要在两个时间段做运算前添加判空操作\n  if (!response.timeInfo) {\n    console.error(`timeInfo is undefined ${response.timeInfo}`);\n    return;\n  }\n  let remainderDataTime = response.timeInfo?.totalTimeMs - response.timeInfo?.startTransferTimeMs;\n  let firstPackageTime = response.timeInfo?.startTransferTimeMs - response.timeInfo?.preTransferTimeMs;\n  let TLSTime = response.timeInfo?.tlsHandshakeTimeMs - response.timeInfo?.connectTimeMs;\n  \n  console.info(`首包耗时${firstPackageTime}`);\n  console.info(`TLS握手（不包含建连时间）耗时${TLSTime}`);\n  console.info(`接收剩余数据的耗时${remainderDataTime}`);\n}).catch((err: BusinessError) => {\n  console.error(`Response err, the error code is ${err.code}, error data is ${err.data}`);\n})\n"
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
935425(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
17966(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798782-3201f3416fe3ca27cc342047b465c8c9.png");

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