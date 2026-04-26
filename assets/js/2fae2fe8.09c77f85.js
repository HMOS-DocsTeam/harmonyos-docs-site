"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["688207"], {
445967(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_connectivity_kit_wlan_p_2_p_development_guide_p_2_p_development_guide_md_2fa_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-connectivity-kit-wlan-p-2-p-development-guide-p-2-p-development-guide-md-2fa.json
var site_docs_system_network_connectivity_kit_wlan_p_2_p_development_guide_p_2_p_development_guide_md_2fa_namespaceObject = JSON.parse('{"id":"system-network/connectivity-kit/wlan/p2p-development-guide/p2p-development-guide","title":"P2P模式开发指南","description":"简介","source":"@site/docs/system-network/connectivity-kit/wlan/p2p-development-guide/p2p-development-guide.md","sourceDirName":"system-network/connectivity-kit/wlan/p2p-development-guide","slug":"/system-network/connectivity-kit/wlan/p2p-development-guide/","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/wlan/p2p-development-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"P2P模式开发指南","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/p2p-development-guide","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"WLAN服务开发概述","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/wlan/wlan-overview/"},"next":{"title":"STA模式开发指南","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/wlan/sta-development-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/connectivity-kit/wlan/p2p-development-guide/p2p-development-guide.md


const frontMatter = {
	title: 'P2P模式开发指南',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/p2p-development-guide',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = 'P2P模式开发指南';

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
  "value": "创建/删除P2P群组",
  "id": "创建删除p2p群组",
  "level": 3
}, {
  "value": "建立P2P连接",
  "id": "建立p2p连接",
  "level": 3
}, {
  "value": "获取对端IP以及Socket通信",
  "id": "获取对端ip以及socket通信",
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
        id: "p2p模式开发指南",
        children: "P2P模式开发指南"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "P2P模式，主要提供了WLAN设备的一种点对点连接技术，它可以在两台STA之间直接建立TCP/IP连接，并不需要AP的参与。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主要场景有："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建/删除P2P群组"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "建立P2P连接"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整的JS API说明以及示例代码请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-wifimanager/js-apis-wifimanager",
        children: "P2P接口"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体接口说明如下表。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "createGroup()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建群组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "removeGroup()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除群组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startDiscoverDevices()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开始发现设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getP2pPeerDevices()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取P2P对端设备列表信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "p2pConnect()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "执行P2P连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getP2pLinkedInfo()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取P2P连接信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'p2pPersistentGroupChange')"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册P2P永久组状态改变事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'p2pPersistentGroupChange')"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册P2P永久组状态改变事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'p2pPeerDeviceChange')"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册P2P对端设备状态改变事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'p2pPeerDeviceChange')"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册P2P对端设备状态改变事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'p2pConnectionChange')"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册P2P连接状态改变事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'p2pConnectionChange')"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册P2P连接状态改变事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "主要场景开发步骤",
      children: "主要场景开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建删除p2p群组",
      children: "创建/删除P2P群组"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "import需要的Wi-Fi模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { wifiManager } from '@kit.ConnectivityKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开启设备的Wi-Fi。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要SystemCapability.Communication.WiFi.P2P系统能力。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建/删除P2P群组。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async createGroup() {\n  try {\n    let deviceInfo = await wifiManager.getP2pLocalDevice();\n    let config:wifiManager.WifiP2PConfig = {\n      deviceAddress: deviceInfo.deviceAddress,\n      netId: this.netId,\n      passphrase: this.passphrase,\n      groupName: this.groupName,\n      goBand: this.goBand,\n    }\n    hilog.info(`deviceAddress: ${config.deviceAddress}, netId: ${config.netId}, pwd: ${config.passphrase}, gpname: ${config.groupName}, goBand: ${config.goBand}`);\n    await wifiManager.createGroup(config);\n    this.promptAction.showToast({\n      message: 'createGroup success',\n      duration: 2000\n    });\n  } catch (e) {\n    hilog.info(TAG, `createGroup Error: ${JSON.stringify(e)}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { wifiManager } from '@kit.ConnectivityKit';\n\n// 创建群组，将当前设备当作GO使用时，需要该步骤\n// netId：-1表示创建临时组，下次和已连接过的设备连接，需要重新进行GO协商，以及WPS密钥协商;\n// netId：-2表示创建永久组，下次和已连接过的设备连接，不需要重新进行GO和WPS密钥协商;\n\nlet recvP2pPersistentGroupChangeFunc = () => {\n  console.info(\"p2p persistent group change receive event\");\n\n  // 永久组创建好后需要处理的业务\n}\n// 创建永久组，需要注册永久组状态改变事件回调\nwifiManager.on(\"p2pPersistentGroupChange\", recvP2pPersistentGroupChangeFunc);\ntry {\n  let config: wifiManager.WifiP2PConfig = {\n    deviceAddress: \"00:11:22:33:44:55\",\n    deviceAddressType: 1,\n    netId: -2,\n    passphrase: \"12345678\",\n    groupName: \"testGroup\",\n    goBand: 0\n}\n  wifiManager.createGroup(config);\n} catch (error) {\n  console.error(\"failed:\" + JSON.stringify(error));\n}\n\n// 删除群组\ntry {\n  wifiManager.removeGroup();\n} catch (error) {\n  console.error(\"failed:\" + JSON.stringify(error));\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["错误码请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/connectivity-api/connectivity-arkts-errcode/errorcode-wifi/errorcode-wifi",
            children: "WIFI错误码"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "建立p2p连接",
      children: "建立P2P连接"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "import需要的Wi-Fi模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { wifiManager } from '@kit.ConnectivityKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开启设备的Wi-Fi。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "需要SystemCapability.Communication.WiFi.P2P系统能力。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册\"p2pPeerDeviceChange\"事件回调，并在回调实现中执行P2P连接。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "connectP2p(p2pScanInfo: wifiManager.WifiP2pDevice) {\n  this.promptAction.showToast({\n    message: 'connect to device',\n    duration: 2000\n  });\n  hilog.info(TAG , `connect deviceAddress=${ p2pScanInfo.deviceAddress }`);\n  hilog.info(TAG , `p2pScanInfo:` + JSON.stringify(p2pScanInfo));\n  let config: wifiManager.WifiP2PConfig = {\n    deviceAddress : p2pScanInfo.deviceAddress,\n    netId : - 2 ,\n    deviceAddressType: 1,\n    passphrase : '' ,\n    groupName : '' ,\n    goBand : 0\n  }\n  wifiManager.p2pConnect(config);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开始P2P设备发现。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "aboutToAppear() {\n  // 如果wifi是开的，就记录下状态，然后扫描p2p设备，并获取连接信息\n  if (!wifiManager.isWifiActive()) {\n    this.promptAction.showToast({\n      message: 'please activate wifi',\n      duration: 2000\n    });\n    return;\n  }\n  this.isSwitchOn = true;\n  wifiManager.startDiscoverDevices();\n  this.addListener();\n}\n\naboutToDisappear() {\n  wifiManager.off('p2pPeerDeviceChange');\n  wifiManager.off('p2pConnectionChange');\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例代码："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { wifiManager } from '@kit.ConnectivityKit';\n\nlet recvP2pConnectionChangeFunc = (result: wifiManager.WifiP2pLinkedInfo) => {\n  console.info(\"p2p connection change receive event: \" + JSON.stringify(result));\n  wifiManager.getP2pLinkedInfo((err, data) => {\n    if (err) {\n      console.error(\"failed to get P2pLinkedInfo: \" + JSON.stringify(err));\n      return;\n    }\n    console.info(\"get getP2pLinkedInfo: \" + JSON.stringify(data));\n    // 添加P2P连接成功或者失败场景的业务处理\n  });\n}\n// P2P连接完成，会调用\"p2pConnectionChange\"事件回调\nwifiManager.on(\"p2pConnectionChange\", recvP2pConnectionChangeFunc);\n\nlet recvP2pPeerDeviceChangeFunc = (result: wifiManager.WifiP2pDevice[]) => {\n  console.info(\"p2p peer device change receive event: \" + JSON.stringify(result));\n  wifiManager.getP2pPeerDevices((err, data) => {\n    if (err) {\n      console.error(\"failed to get peer devices: \" + JSON.stringify(err));\n      return;\n    }\n    console.info(\"get peer devices: \" + JSON.stringify(data));\n    let len = data.length;\n    for (let i = 0; i < len; ++i) {\n      // 选择符合条件的对端P2P设备\n      if (data[i].deviceName === \"my_test_device\") {\n        console.info(\"p2p connect to test device: \" + data[i].deviceAddress);\n        let config: wifiManager.WifiP2PConfig = {\n          deviceAddress: data[i].deviceAddress,\n          deviceAddressType: 1,\n          netId: -2,\n          passphrase: \"\",\n          groupName: \"\",\n          goBand: 0,\n        }\n        // 执行P2P连接，作为GO时不能主动发起连接\n        wifiManager.p2pConnect(config);\n      }\n    }\n  });\n}\n// P2P扫描结果上报时会调用\"p2pPeerDeviceChange\"事件回调\nwifiManager.on(\"p2pPeerDeviceChange\", recvP2pPeerDeviceChangeFunc);\n\nsetTimeout(() => {\n  wifiManager.off(\"p2pConnectionChange\", recvP2pConnectionChangeFunc);\n}, 125 * 1000);\nsetTimeout(() => {\n  wifiManager.off(\"p2pPeerDeviceChange\", recvP2pPeerDeviceChangeFunc);\n}, 125 * 1000);\n// 开始发现P2P设备，即，开始P2P扫描\nconsole.info(\"start discover devices -> \" + wifiManager.startDiscoverDevices());\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["错误码请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/connectivity-api/connectivity-arkts-errcode/errorcode-wifi/errorcode-wifi",
            children: "WIFI错误码"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取对端ip以及socket通信",
      children: "获取对端IP以及Socket通信"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "import需要的Wi-Fi模块。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开启设备的Wi-Fi。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "需要SystemCapability.Communication.WiFi.P2P系统能力。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-wifimanager/js-apis-wifimanager#p2pconnectstate",
          children: "wifiP2pLinkedInfo.connectState"
        }), "获取P2P连接状态，确保连接状态为CONNECTED。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-wifimanager/js-apis-wifimanager#wifip2pgroupinfo",
          children: "wifiP2pGroupInfo.goIpAddress"
        }), "获取群组IP地址，以便Socket通信。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Socket通信请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-network/network-kit/network-kit-data-transmission/socket-connection",
          children: "使用Socket访问网络"
        }), "。"]
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