"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["984944"], {
444483(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_connectivity_kit_wlan_sta_development_guide_sta_development_guide_md_148_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-connectivity-kit-wlan-sta-development-guide-sta-development-guide-md-148.json
var site_docs_system_network_connectivity_kit_wlan_sta_development_guide_sta_development_guide_md_148_namespaceObject = JSON.parse('{"id":"system-network/connectivity-kit/wlan/sta-development-guide/sta-development-guide","title":"STA模式开发指南","description":"简介","source":"@site/docs/system-network/connectivity-kit/wlan/sta-development-guide/sta-development-guide.md","sourceDirName":"system-network/connectivity-kit/wlan/sta-development-guide","slug":"/system-network/connectivity-kit/wlan/sta-development-guide/","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/wlan/sta-development-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"STA模式开发指南","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/sta-development-guide","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"P2P模式开发指南","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/wlan/p2p-development-guide/"},"next":{"title":"Wi-Fi扫描开发指南","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/wlan/scan-development-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/connectivity-kit/wlan/sta-development-guide/sta-development-guide.md


const frontMatter = {
	title: 'STA模式开发指南',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/sta-development-guide',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = 'STA模式开发指南';

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
  "value": "主要场景开发步骤",
  "id": "主要场景开发步骤",
  "level": 2
}, {
  "value": "判断Wi-Fi状态",
  "id": "判断wi-fi状态",
  "level": 3
}, {
  "value": "建立Wi-Fi连接",
  "id": "建立wi-fi连接",
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
        id: "sta模式开发指南",
        children: "STA模式开发指南"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Wi-Fi STA模式（Station Mode，站点模式）是无线设备作为客户端接入无线局域网（WLAN）的工作模式。在该模式下，设备（如手机、电脑、平板等）通过连接到接入点（AP，Access Point）或无线路由器，实现对网络的访问。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%88%A4%E6%96%ADwi-fi%E7%8A%B6%E6%80%81",
          children: "判断Wi-Fi状态"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%BB%BA%E7%AB%8Bwi-fi%E8%BF%9E%E6%8E%A5",
          children: "建立Wi-Fi连接"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整的JS API说明以及示例代码请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-wifimanager/js-apis-wifimanager",
        children: "STA接口"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口具体说明如下表所示。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "isWifiActive()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询WLAN开关是否已使能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "addCandidateConfig()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "添加候选网络配置，使用前先使能WLAN。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "connectToCandidateConfig()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用使用该接口连接到自己添加的候选网络。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isConnected()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询WLAN是否已连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "removeCandidateConfig()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "移除候选网络配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getCandidateConfigs()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取候选网络配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'wifiStateChange')"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册WLAN状态改变事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'wifiStateChange')"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册WLAN状态改变事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'wifiConnectionChange')"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册WLAN连接状态改变事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'wifiConnectionChange')"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册WLAN连接状态改变事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "主要场景开发步骤",
      children: "主要场景开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "判断wi-fi状态",
      children: "判断Wi-Fi状态"
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
          children: "需要申请权限ohos.permission.GET_WIFI_INFO。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开启设备Wi-Fi。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { wifiManager } from '@kit.ConnectivityKit';\n\nlet recvPowerNotifyFunc: (result: number) => void = (result: number) => {\n  let wifiState = \"\";\n  switch (result) {\n    case 0:\n      wifiState += 'DISABLED';\n      break;\n    case 1:\n      wifiState += 'ENABLED';\n      break;\n    case 2:\n      wifiState += 'ENABLING';\n      break;\n    case 3:\n      wifiState += 'DISABLING';\n      break;\n    default:\n      wifiState += 'UNKNOWN STATUS';\n      break;\n  }\n  console.info(`Wi-Fi state changed: ${wifiState}`);\n};\ntry {\n  wifiManager.on(\"wifiStateChange\", recvPowerNotifyFunc);\n  let isWifiActive = wifiManager.isWifiActive();\n  if (!isWifiActive) {\n    console.info(\"Wi-Fi not enabled. Skipping monitor.\");\n  } else {\n    console.info(\"Wi-Fi is enabled. Starting monitor...\");\n  }\n} catch (error) {\n  console.error(`WiFi state monitor failed: ${error.message}`);\n} finally {\n  try {\n    wifiManager.off(\"wifiStateChange\", recvPowerNotifyFunc);\n    console.info(\"Wi-Fi monitor off: listener removed.\");\n  } catch (e) {\n     console.error(`WiFi state monitor failed. ${e.message}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "建立wi-fi连接",
      children: "建立Wi-Fi连接"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入需要的Wi-Fi模块。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开启设备的Wi-Fi。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要SystemCapability.Communication.WiFi.STA系统能力。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要申请权限ohos.permission.GET_WIFI_INFO，ohos.permission.SET_WIFI_INFO。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { wifiManager } from '@kit.ConnectivityKit';\n\ntry {\n  let recvWifiConnectionChangeFunc = (result: number) => {\n    console.info(\"Receive wifi connection change event: \" + result);\n  }\n\n  let config: wifiManager.WifiDeviceConfig = {\n    ssid: \"****\",\n    bssid: \"****\",\n    preSharedKey: \"****\",\n    securityType: 0\n  }\n\n  // 更新当前Wi-Fi连接状态\n  wifiManager.on(\"wifiConnectionChange\", recvWifiConnectionChangeFunc);\n  // 添加候选网络配置\n  wifiManager.addCandidateConfig(config).then(result => {\n    // 连接指定网络\n    wifiManager.connectToCandidateConfig(result);\n  });\n\n  if (!wifiManager.isConnected()) {\n    console.info(\"Wi-Fi not connected\");\n  }\n  // 获取连接信息\n  wifiManager.getLinkedInfo().then(data => {\n    console.info(\"get Wi-Fi linked info: \" + JSON.stringify(data));\n  })\n  // 查询信号强度\n  let rssi = -88;\n  let band = 1;\n  let level = wifiManager.getSignalLevel(rssi, band);\n  console.info(\"level:\" + JSON.stringify(level));\n\n  // 取消注册，停止更新当前Wi-Fi连接状态\n  wifiManager.off(\"wifiConnectionChange\", recvWifiConnectionChangeFunc);\n} catch (error) {\n  console.error(`WiFi Connection failed. ${error.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Wi-Fi连接状态值，详情请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-wifimanager/js-apis-wifimanager#connstate",
            children: "ConnState"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["错误码详情请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/connectivity-api/connectivity-arkts-errcode/errorcode-wifi/errorcode-wifi",
            children: "WIFI错误码"
          }), "。"]
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