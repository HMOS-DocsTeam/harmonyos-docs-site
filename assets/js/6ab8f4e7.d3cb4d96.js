"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["860521"], {
802588(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_connectivity_kit_bluetooth_bluetooth_br_br_discovery_development_guide_br_discovery_development_guide_md_6ab_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-connectivity-kit-bluetooth-bluetooth-br-br-discovery-development-guide-br-discovery-development-guide-md-6ab.json
var site_docs_system_network_connectivity_kit_bluetooth_bluetooth_br_br_discovery_development_guide_br_discovery_development_guide_md_6ab_namespaceObject = JSON.parse('{"id":"system-network/connectivity-kit/bluetooth/bluetooth-br/br-discovery-development-guide/br-discovery-development-guide","title":"查找设备","description":"简介","source":"@site/docs/system-network/connectivity-kit/bluetooth/bluetooth-br/br-discovery-development-guide/br-discovery-development-guide.md","sourceDirName":"system-network/connectivity-kit/bluetooth/bluetooth-br/br-discovery-development-guide","slug":"/system-network/connectivity-kit/bluetooth/bluetooth-br/br-discovery-development-guide/","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/bluetooth/bluetooth-br/br-discovery-development-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"查找设备","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/br-discovery-development-guide","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"蓝牙设置","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/bluetooth/br-development-guide/"},"next":{"title":"配对与连接设备","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/bluetooth/bluetooth-br/br-pair-device-development-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/connectivity-kit/bluetooth/bluetooth-br/br-discovery-development-guide/br-discovery-development-guide.md


const frontMatter = {
	title: '查找设备',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/br-discovery-development-guide',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '查找设备';

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
}, {
  "value": "申请蓝牙权限",
  "id": "申请蓝牙权限",
  "level": 3
}, {
  "value": "导入所需API模块",
  "id": "导入所需api模块",
  "level": 3
}, {
  "value": "扫描周边蓝牙设备",
  "id": "扫描周边蓝牙设备",
  "level": 3
}, {
  "value": "设置本机蓝牙扫描模式",
  "id": "设置本机蓝牙扫描模式",
  "level": 3
}, {
  "value": "查找已配对设备信息",
  "id": "查找已配对设备信息",
  "level": 3
}, {
  "value": "完整示例",
  "id": "完整示例",
  "level": 2
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
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "查找设备",
        children: "查找设备"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本指南主要提供了查找设备相关的开发指导，包括如何扫描周边设备、设置本机蓝牙扫描模式以及查找已配对设备信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "申请蓝牙权限",
      children: "申请蓝牙权限"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要申请权限ohos.permission.ACCESS_BLUETOOTH。如何配置和申请权限，具体操作请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
        children: "声明权限"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
        children: "向用户申请授权"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入所需api模块",
      children: "导入所需API模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导入connection和错误码模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { connection } from '@kit.ConnectivityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "扫描周边蓝牙设备",
      children: "扫描周边蓝牙设备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于扫描周边支持蓝牙能力的设备，并获取到蓝牙设备的部分信息。此过程也可被称为“搜索”、“发现”或“查找”。只有周边蓝牙设备处于可被发现的状态时，才能被本机蓝牙设备扫描到。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "1. 订阅扫描设备结果上报事件"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["推荐使用API version 18开始支持的扫描结果上报方式。该方式可获取到更多设备信息，包括设备地址、设备信号强度、设备名称和设备类型。详情请见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-connection/js-apis-bluetooth-connection#connectionondiscoveryresult18",
          children: "connection.on('discoveryResult')"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 定义扫描结果上报回调函数\nfunction onReceiveEvent(data: Array<connection.DiscoveryResult>) {\n  console.info('bluetooth device: '+ JSON.stringify(data));\n}\n\ntry {\n  // 发起订阅\n  connection.on('discoveryResult', onReceiveEvent);\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["API version 17及以前的扫描结果上报方式只支持获取设备地址信息。详情请见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-connection/js-apis-bluetooth-connection#connectiononbluetoothdevicefind",
          children: "connection.on('bluetoothDeviceFind')"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 定义扫描结果上报回调函数\nfunction onReceiveEvent(data: Array<string>) {\n  console.info('bluetooth device: '+ JSON.stringify(data));\n}\n\ntry {\n  // 发起订阅\n  connection.on('bluetoothDeviceFind', onReceiveEvent);\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2. 发起设备扫描"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用发起扫描后，整个扫描过程大约持续12s。应用可以对扫描到的蓝牙设备发起配对、连接和传输数据流程。具体操作请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-network/connectivity-kit/bluetooth/bluetooth-br/br-pair-device-development-guide",
        children: "配对与连接设备"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-network/connectivity-kit/bluetooth/bluetooth-br/spp-development-guide",
        children: "连接和传输数据"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n  // 判断本机设备是否正在进行扫描\n  let scan = connection.isBluetoothDiscovering();\n  if (!scan) {\n    // 若当前不处于扫描过程，则开始扫描设备\n    connection.startBluetoothDiscovery();\n  }\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "3. 停止设备扫描"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "扫描是一个很消耗蓝牙硬件资源的过程。当扫描到应用所需的蓝牙设备后，在发起连接前，必须停止设备扫描。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 定义扫描结果上报回调函数\nfunction onReceiveEvent(data: Array<string>) {\n  console.info('bluetooth device: '+ JSON.stringify(data));\n}\n\ntry {\n  // 判断本机设备是否正在进行扫描\n  let scan = connection.isBluetoothDiscovering();\n  if (scan) {\n    // 若当前处于扫描过程，则停止扫描设备\n    connection.stopBluetoothDiscovery();\n  }\n  // 若不再需要使用扫描，可以取消订阅扫描上报结果\n  connection.off('bluetoothDeviceFind', onReceiveEvent);\n} catch (err) {\n    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置本机蓝牙扫描模式",
      children: "设置本机蓝牙扫描模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本机蓝牙扫描模式用于控制本机设备是否可以被周边其他蓝牙设备扫描到或连接上。非系统应用一般不用关注这个模式，系统设置应用会决定如何设置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["系统设置应用打开蓝牙后，若系统蓝牙设置界面在前台，会将本机蓝牙扫描模式设置为可被扫描和可被连接，即", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-connection/js-apis-bluetooth-connection#scanmode",
          children: "SCAN_MODE_CONNECTABLE_GENERAL_DISCOVERABLE"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["系统设置应用打开蓝牙后，若系统蓝牙设置界面在后台，会将本机蓝牙扫描模式设置为可被连接，即", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-connection/js-apis-bluetooth-connection#scanmode",
          children: "SCAN_MODE_CONNECTABLE"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n  // 获取当前本机的扫描模式\n  let scanMode: connection.ScanMode = connection.getBluetoothScanMode();\n  console.info('scanMode: ' + scanMode);\n  if (scanMode != connection.ScanMode.SCAN_MODE_CONNECTABLE_GENERAL_DISCOVERABLE) {\n    // 将本机设备的扫描模式设置为可被发现和可被连接\n    connection.setBluetoothScanMode(connection.ScanMode.SCAN_MODE_CONNECTABLE_GENERAL_DISCOVERABLE, 0);\n  }\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查找已配对设备信息",
      children: "查找已配对设备信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在发起扫描设备前，可以查找该设备是否是已配对的设备，以减少扫描设备的流程。也可以对已配对设备发起连接和传输数据流程，具体操作请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-network/connectivity-kit/bluetooth/bluetooth-br/br-pair-device-development-guide",
        children: "配对与连接设备"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-network/connectivity-kit/bluetooth/bluetooth-br/spp-development-guide",
        children: "传输数据"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n  // 获取已配对设备信息\n  let devices = connection.getPairedDevices();\n  console.info('pairedDevices: ' + JSON.stringify(devices));\n  // 若已知设备地址，可主动查询该设备是否是已配对的\n  if (devices.length > 0) {\n    let pairState = connection.getPairState(devices[0]);\n    console.info('device: '+ devices[0] + ' pairState is ' + pairState);\n  }\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { connection } from '@kit.ConnectivityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nexport class DiscoveryDeviceManager {\n  // 定义扫描结果上报回调函数\n  onReceiveEvent = (data: Array<string>) => {\n    console.info('bluetooth device: '+ JSON.stringify(data));\n  };\n\n  public startDiscovery() {\n    try {\n      connection.on('bluetoothDeviceFind', this.onReceiveEvent);\n    } catch (err) {\n      console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n    try {\n      // 判断本机设备是否正在进行扫描\n      let scan = connection.isBluetoothDiscovering();\n      if (!scan) {\n        // 若当前不处于扫描过程，则开始扫描设备\n        connection.startBluetoothDiscovery();\n      }\n    } catch (err) {\n      console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  }\n\n  public stopDiscovery() {\n    try {\n      // 判断本机设备是否正在进行扫描\n      let scan = connection.isBluetoothDiscovering();\n      if (scan) {\n        // 若当前处于扫描过程，则停止扫描设备\n        connection.stopBluetoothDiscovery();\n      }\n      // 若不再需要使用扫描，可以取消订阅扫描上报结果\n      connection.off('bluetoothDeviceFind', this.onReceiveEvent);\n    } catch (err) {\n      console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  }\n\n  public setScanMode() {\n    try {\n      // 获取当前本机的扫描模式\n      let scanMode: connection.ScanMode = connection.getBluetoothScanMode();\n      console.info('scanMode: ' + scanMode);\n      if (scanMode != connection.ScanMode.SCAN_MODE_CONNECTABLE_GENERAL_DISCOVERABLE) {\n        // 将本机设备的扫描模式设为可被发现和可被连接\n        connection.setBluetoothScanMode(connection.ScanMode.SCAN_MODE_CONNECTABLE_GENERAL_DISCOVERABLE, 0);\n      }\n    } catch (err) {\n      console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  }\n\n  public getPairedDevices() {\n    try {\n      // 获取已配对设备信息\n      let devices = connection.getPairedDevices();\n      console.info('pairedDevices: ' + JSON.stringify(devices));\n      // 若已知设备地址，可主动查询该设备是否是已配对的\n      if (devices.length > 0) {\n        let pairState = connection.getPairState(devices[0]);\n        console.info('device: '+ devices[0] + ' pairState is ' + pairState);\n      }\n    } catch (err) {\n      console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  }\n}\n\nlet discoveryDeviceManager = new DiscoveryDeviceManager();\nexport default discoveryDeviceManager as DiscoveryDeviceManager;\n"
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