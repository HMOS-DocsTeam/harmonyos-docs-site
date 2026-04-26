"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["940463"], {
397015(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_network_kit_network_kit_network_management_net_statistics_net_statistics_md_751_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-network-kit-network-kit-network-management-net-statistics-net-statistics-md-751.json
var site_docs_system_network_network_kit_network_kit_network_management_net_statistics_net_statistics_md_751_namespaceObject = JSON.parse('{"id":"system-network/network-kit/network-kit-network-management/net-statistics/net-statistics","title":"统计网络流量消耗","description":"简介","source":"@site/docs/system-network/network-kit/network-kit-network-management/net-statistics/net-statistics.md","sourceDirName":"system-network/network-kit/network-kit-network-management/net-statistics","slug":"/system-network/network-kit/network-kit-network-management/net-statistics/","permalink":"/harmonyos-docs-site/system-network/network-kit/network-kit-network-management/net-statistics/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"统计网络流量消耗","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/net-statistics","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"连接VPN","permalink":"/harmonyos-docs-site/system-network/network-kit/network-kit-network-connecttion/net-vpnextension/"},"next":{"title":"使用网络防火墙","permalink":"/harmonyos-docs-site/system-network/network-kit/network-kit-network-management/net-netfirewall/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/network-kit/network-kit-network-management/net-statistics/net-statistics.md


const frontMatter = {
	title: '统计网络流量消耗',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/net-statistics',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '统计网络流量消耗';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "统计网络流量消耗",
        children: "统计网络流量消耗"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "流量管理提供了基于物理网络的数据流量统计能力，支持基于网卡/UID 的流量统计。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "流量管理主要实现功能有："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持基于网卡/UID 的实时流量统计。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持基于网卡/UID 的历史流量统计。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持基于网卡/UID 的流量变化订阅。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(605870)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了保证应用的运行效率，大部分 API 调用都是异步的，对于异步调用的 API 均提供了 callback 和 Promise 两种方式，以下示例均采用 Promise 函数，更多方式可以查阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-statistics/js-apis-net-statistics",
        children: "@ohos.net.statistics (流量管理)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下分别介绍具体开发方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["导入", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-statistics/js-apis-net-statistics",
            children: "statistics"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-socket/js-apis-socket",
            children: "socket"
          }), "以及错误码模块。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { socket, statistics } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取指定网卡实时流量数据"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-statistics/js-apis-net-statistics#statisticsgetifacerxbytes-1",
            children: "getIfaceRxBytes"
          }), "接口传入网卡名获取实时下行流量数据。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "  // wlan0为主WiFi网卡名，获取主WiFi实时下行流量数据。\n  statistics.getIfaceRxBytes('wlan0').then((stats: number) => {\n    hilog.info(0x0000, 'testTag', JSON.stringify(stats));\n    // ...\n  })\n  .catch((err: BusinessError) => {\n    hilog.error(0x0000, 'testTag', JSON.stringify(err));\n    // ...\n  });\n  // ...\n  // wlan0为主WiFi网卡名，获取主WiFi实时上行流量数据。\n  statistics.getIfaceTxBytes('wlan0').then((stats: number) => {\n    hilog.info(0x0000, 'testTag', JSON.stringify(stats));\n    // ...\n  })\n  .catch((err: BusinessError) => {\n    hilog.error(0x0000, 'testTag', JSON.stringify(err));\n    // ...\n  });\n// ...\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取蜂窝实时流量数据"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-statistics/js-apis-net-statistics#statisticsgetcellularrxbytes-1",
            children: "getCellularRxBytes"
          }), "接口获取蜂窝实时上下行流量数据。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取蜂窝实时下行流量数据。\nstatistics.getCellularRxBytes().then((stats: number) => {\n  hilog.info(0x0000, 'testTag', JSON.stringify(stats));\n  // ...\n})\n// ...\n// 获取蜂窝实时上行流量数据。\nstatistics.getCellularTxBytes().then((stats: number) => {\n  hilog.info(0x0000, 'testTag', JSON.stringify(stats));\n  // ...\n})\n// ...\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取所有网卡实时流量数据"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-statistics/js-apis-net-statistics#statisticsgetallrxbytes-1",
            children: "getAllRxBytes"
          }), "接口获取所有网卡实时上下行流量数据。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取所有网卡实时下行流量数据。\nstatistics.getAllRxBytes().then((stats: number) => {\n  hilog.info(0x0000, 'testTag', JSON.stringify(stats));\n  // ...\n})\n// ...\n// 获取所有网卡实时上行流量数据。\nstatistics.getAllTxBytes().then((stats: number) => {\n  hilog.info(0x0000, 'testTag', JSON.stringify(stats));\n  // ...\n})\n// ...\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取指定应用实时流量数据"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-statistics/js-apis-net-statistics#statisticsgetuidrxbytes-1",
            children: "getUidRxBytes"
          }), "接口，传入UID获取指定应用实时上下行流量数据。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: " let UID = 20010038;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取指定应用实时下行流量数据。\n// ...\nstatistics.getUidRxBytes(UID).then((stats: number) => {\n  hilog.info(0x0000, 'testTag', JSON.stringify(stats));\n  // ...\n})\n// ...\n// 获取指定应用实时上行流量数据。\n// ...\nstatistics.getUidTxBytes(UID).then((stats: number) => {\n  hilog.info(0x0000, 'testTag', JSON.stringify(stats));\n  // ...\n})\n// ...\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取指定socket实时流量数据"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-statistics/js-apis-net-statistics#statisticsgetsockfdrxbytes11-1",
            children: "getSockfdRxBytes"
          }), "接口，传入指定的sockFd获取指定socket实时上下行流量数据。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取指定socket实时下行流量数据。\nlet tcp: socket.TCPSocket = socket.constructTCPSocketInstance();\n// ...\ntcp.getSocketFd().then((sockfd: number) => {\n  statistics.getSockfdRxBytes(sockfd).then((stats: number) => {\n    hilog.info(0x0000, 'testTag', JSON.stringify(stats));\n    // ...\n  }).catch((err: BusinessError) => {\n    hilog.error(0x0000, 'testTag', JSON.stringify(err));\n    // ...\n  });\n})\n// ...\n// 获取指定socket实时上行流量数据。\ntcp.getSocketFd().then((sockfd: number) => {\n  statistics.getSockfdTxBytes(sockfd).then((stats: number) => {\n    hilog.info(0x0000, 'testTag', JSON.stringify(stats));\n    // ...\n  }).catch((err: BusinessError) => {\n    hilog.error(0x0000, 'testTag', JSON.stringify(err));\n    // ...\n  });\n})\n// ...\n"
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
605870(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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