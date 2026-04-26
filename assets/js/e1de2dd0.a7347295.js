"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["561323"], {
658006(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_connectivity_kit_wlan_scan_development_guide_scan_development_guide_md_e1d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-connectivity-kit-wlan-scan-development-guide-scan-development-guide-md-e1d.json
var site_docs_system_network_connectivity_kit_wlan_scan_development_guide_scan_development_guide_md_e1d_namespaceObject = JSON.parse('{"id":"system-network/connectivity-kit/wlan/scan-development-guide/scan-development-guide","title":"Wi-Fi扫描开发指南","description":"简介","source":"@site/docs/system-network/connectivity-kit/wlan/scan-development-guide/scan-development-guide.md","sourceDirName":"system-network/connectivity-kit/wlan/scan-development-guide","slug":"/system-network/connectivity-kit/wlan/scan-development-guide/","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/wlan/scan-development-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Wi-Fi扫描开发指南","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-development-guide","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"STA模式开发指南","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/wlan/sta-development-guide/"},"next":{"title":"Connectivity Kit术语","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/terminology/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/connectivity-kit/wlan/scan-development-guide/scan-development-guide.md


const frontMatter = {
	title: 'Wi-Fi扫描开发指南',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-development-guide',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = 'Wi-Fi扫描开发指南';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "Wi-Fi扫描",
  "id": "wi-fi扫描",
  "level": 3
}, {
  "value": "PNO扫描",
  "id": "pno扫描",
  "level": 3
}, {
  "value": "周期扫描",
  "id": "周期扫描",
  "level": 3
}, {
  "value": "扫描管控",
  "id": "扫描管控",
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
        id: "wi-fi扫描开发指南",
        children: "Wi-Fi扫描开发指南"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Wi-Fi扫描是指设备（如手机、电脑、路由器等）搜索周围可用Wi-Fi网络的过程。通过扫描，设备可以获取附近网络的基本信息（如网络名称、信号强度、加密方式等），从而实现连接、管理或分析周围网络。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#wi-fi%E6%89%AB%E6%8F%8F",
          children: "Wi-Fi扫描"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#pno%E6%89%AB%E6%8F%8F",
          children: "PNO扫描"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%91%A8%E6%9C%9F%E6%89%AB%E6%8F%8F",
          children: "周期扫描"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%89%AB%E6%8F%8F%E7%AE%A1%E6%8E%A7",
          children: "扫描管控"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整的JS API说明以及示例代码请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-wifimanager/js-apis-wifimanager",
        children: "SCAN接口"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口具体说明如下表所示。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getScanInfoList()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取扫描结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'wifiScanStateChange')"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册扫描状态改变事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'wifiScanStateChange')"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册扫描状态改变事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wi-fi扫描",
      children: "Wi-Fi扫描"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入需要的Wi-Fi模块。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要SystemCapability.Communication.WiFi.STA系统能力。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要权限ohos.permission.GET_WIFI_INFO。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开启设备的Wi-Fi。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(877939)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "主动扫描接口，从API version 10开始废弃。替代接口仅向系统应用开放。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { wifiManager } from '@kit.ConnectivityKit';\n\ntry {\n  let recvWifiScanStateChangeFunc = (result:number) => {\n      console.info(\"Receive Wifi scan state change event: \" + result);\n  }\n\n  // 获取扫描状态 0：扫描失败；1：扫描成功。\n  wifiManager.on(\"wifiScanStateChange\", recvWifiScanStateChangeFunc);\n\n  let isWifiActive = wifiManager.isWifiActive();\n  if (!isWifiActive) {\n    console.error(\"wifi not enable\"); // 请先手动打开WiFi\n    return;\n  }\n\n  let scanInfoList = wifiManager.getScanInfoList();\n\n  let len = scanInfoList.length;\n  console.info(\"wifi received scan info: \" + len);\n  if(len > 0){\n    for (let i = 0; i < len; ++i) {\n      console.info(\"ssid: \" + scanInfoList[i].ssid);\n      console.info(\"bssid: \" + scanInfoList[i].bssid);\n      console.info(\"capabilities: \" + scanInfoList[i].capabilities);\n      console.info(\"securityType: \" + scanInfoList[i].securityType);\n      console.info(\"rssi: \" + scanInfoList[i].rssi);\n      console.info(\"band: \" + scanInfoList[i].band);\n      console.info(\"frequency: \" + scanInfoList[i].frequency);\n      console.info(\"channelWidth: \" + scanInfoList[i].channelWidth);\n      console.info(\"timestamp: \" + scanInfoList[i].timestamp);\n      console.info(\"supportedWifiCategory: \" + scanInfoList[i].supportedWifiCategory);\n      console.info(\"isHiLinkNetwork: \" + scanInfoList[i].isHiLinkNetwork);\n    }\n  }\n\n  // 取消注册，停止获取扫描状态。\n  wifiManager.off(\"wifiScanStateChange\", recvWifiScanStateChangeFunc);\n} catch (error) {\n  console.error(`WiFi scan fail. ${error.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["错误码详情请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/connectivity-api/connectivity-arkts-errcode/errorcode-wifi/errorcode-wifi",
            children: "WIFI错误码"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pno扫描",
      children: "PNO扫描"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PNO扫描即首选分流网络扫描（Preferred Network Offload scanning），是一种用于降低移动设备功耗的Wi-Fi扫描技术。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "触发PNO扫描条件：当设备未连接Wi-Fi且屏幕关闭后，会触发PNO扫描，支持设备在后台寻找并连接首选的Wi-Fi网络。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "周期扫描",
      children: "周期扫描"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WiFi周期扫描是指无线设备（如智能手机、平板电脑、笔记本电脑等）按照一定的时间间隔，自动搜索周围可用的WiFi网络的过程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "触发场景描述："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备亮屏且与Wi-Fi已连接：判断当前链路是否支持上网。支持上网，扫描间隔1h；不支持上网，判断是否静止，静止场景下扫描周期从20s开始倍增，最大300s；非静止场景扫描周期从20s开始，最大160s。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备亮屏且与Wi-Fi未连接：静止场景扫描周期从20s开始倍增，最大300s；非静止场景扫描周期从20s开始，最大160s。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "扫描管控",
      children: "扫描管控"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WiFi扫描管控是指对无线设备扫描WiFi网络的行为进行管理和控制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下是一些常见的管控方式和应用场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "WiFi在关闭的情况下不触发周期扫描和PNO扫描。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "WiFi连接过程中不允许触发扫描。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "前台应用2分钟内最多发起4次扫描。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备温度达到阈值，设备扫描会被管控。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "扫描接口从API version 9开始支持，从API version 10开始废弃，替代接口仅向系统应用开放。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "扫描结果获取真实bssid，需要申请ohos.permission.GET_WIFI_PEERS_MAC权限。"
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
877939(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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