"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["126934"], {
803066(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_connectivity_kit_bluetooth_br_development_guide_br_development_guide_md_fde_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-connectivity-kit-bluetooth-br-development-guide-br-development-guide-md-fde.json
var site_docs_system_network_connectivity_kit_bluetooth_br_development_guide_br_development_guide_md_fde_namespaceObject = JSON.parse('{"id":"system-network/connectivity-kit/bluetooth/br-development-guide/br-development-guide","title":"蓝牙设置","description":"简介","source":"@site/docs/system-network/connectivity-kit/bluetooth/br-development-guide/br-development-guide.md","sourceDirName":"system-network/connectivity-kit/bluetooth/br-development-guide","slug":"/system-network/connectivity-kit/bluetooth/br-development-guide/","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/bluetooth/br-development-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"蓝牙设置","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/br-development-guide","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"蓝牙服务开发概述","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/bluetooth/bluetooth-overview/"},"next":{"title":"查找设备","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/bluetooth/bluetooth-br/br-discovery-development-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/connectivity-kit/bluetooth/br-development-guide/br-development-guide.md


const frontMatter = {
	title: '蓝牙设置',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/br-development-guide',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '蓝牙设置';

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
  "value": "订阅蓝牙开关状态变化事件",
  "id": "订阅蓝牙开关状态变化事件",
  "level": 3
}, {
  "value": "开启蓝牙",
  "id": "开启蓝牙",
  "level": 3
}, {
  "value": "关闭蓝牙",
  "id": "关闭蓝牙",
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
    img: "img",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "蓝牙设置",
        children: "蓝牙设置"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本指南主要提供了开启蓝牙、关闭蓝牙和获取蓝牙开关状态的开发指导。开发者在使用蓝牙其他功能时，应确保蓝牙子系统已正常开启。"
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
      children: "导入access和错误码模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { access } from '@kit.ConnectivityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "订阅蓝牙开关状态变化事件",
      children: "订阅蓝牙开关状态变化事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过订阅开关状态变化事件，可以获取实时的蓝牙开关状态。蓝牙开启或者关闭过程中，涉及多种蓝牙状态的跃迁。其中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-access/js-apis-bluetooth-access#bluetoothstate",
        children: "STATE_OFF"
      }), "表示蓝牙已关闭，此状态下，应用不可以使用蓝牙其他功能；", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-access/js-apis-bluetooth-access#bluetoothstate",
        children: "STATE_ON"
      }), "表示蓝牙已打开，此状态下，应用可以使用蓝牙其他功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 定义蓝牙开关状态变化函数回调\nfunction onReceiveEvent(data: access.BluetoothState) {\n  let btStateMessage = '';\n  switch (data) {\n    case access.BluetoothState.STATE_OFF:\n      // 表示蓝牙是关闭的\n      btStateMessage += 'STATE_OFF';\n      break;\n    case access.BluetoothState.STATE_TURNING_ON:\n      btStateMessage += 'STATE_TURNING_ON';\n      break;\n    case access.BluetoothState.STATE_ON:\n      // 表示蓝牙是开启的，此时应用才可以使用蓝牙其他功能\n      btStateMessage += 'STATE_ON';\n      break;\n    case access.BluetoothState.STATE_TURNING_OFF:\n      btStateMessage += 'STATE_TURNING_OFF';\n      break;\n    case access.BluetoothState.STATE_BLE_TURNING_ON:\n      btStateMessage += 'STATE_BLE_TURNING_ON';\n      break;\n    case access.BluetoothState.STATE_BLE_ON:\n      btStateMessage += 'STATE_BLE_ON';\n      break;\n    case access.BluetoothState.STATE_BLE_TURNING_OFF:\n      btStateMessage += 'STATE_BLE_TURNING_OFF';\n      break;\n    default:\n      btStateMessage += 'unknown state';\n      break;\n  }\n  console.info('bluetooth state: ' + btStateMessage);\n}\n\ntry {\n    // 发起订阅\n    access.on('stateChange', onReceiveEvent);\n} catch (err) {\n    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开启蓝牙",
      children: "开启蓝牙"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若应用获取到的蓝牙开关状态是关闭的，当需要使用蓝牙时，则需要主动开启蓝牙。通过订阅蓝牙开关状态，判断蓝牙是否开启成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统弹出对话框并提示应用“想要开启蓝牙”，如下图1。若用户同意授权，将开启蓝牙。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(647643)/* ["default"] */.A) + "",
        width: "390",
        height: "167"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 开启蓝牙对话框"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n    // 主动获取蓝牙当前的开关状态\n    let state = access.getState();\n    if (state == access.BluetoothState.STATE_OFF) {\n        // 若蓝牙是关闭的，则主动开启蓝牙\n        access.enableBluetooth();\n    }\n} catch (err) {\n    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "关闭蓝牙",
      children: "关闭蓝牙"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若应用不需要使用蓝牙时，可根据实际情况判断是否需要主动关闭蓝牙。通过订阅蓝牙开关状态，判断蓝牙是否关闭成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统弹出对话框并提示应用“想要关闭蓝牙”，如下图2。若用户同意授权，将关闭蓝牙。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(434219)/* ["default"] */.A) + "",
        width: "386",
        height: "164"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 关闭蓝牙对话框"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n   // 主动获取蓝牙当前的开关状态\n   let state = access.getState();\n   if (state == access.BluetoothState.STATE_ON) {\n     // 若蓝牙是开启的，则主动关闭蓝牙\n     access.disableBluetooth();\n  }\n} catch (err) {\n    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { access } from '@kit.ConnectivityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nexport class AdapterManager {\n  // 定义蓝牙开关状态变化函数回调\n  onReceiveEvent = (data: access.BluetoothState) => {\n    let btStateMessage = '';\n    switch (data) {\n      case access.BluetoothState.STATE_OFF:\n        // 表示蓝牙是关闭的\n        btStateMessage += 'STATE_OFF';\n        break;\n      case access.BluetoothState.STATE_TURNING_ON:\n        btStateMessage += 'STATE_TURNING_ON';\n        break;\n      case access.BluetoothState.STATE_ON:\n        // 表示蓝牙是开启的，此时应用才可以使用蓝牙其他功能\n        btStateMessage += 'STATE_ON';\n        break;\n      case access.BluetoothState.STATE_TURNING_OFF:\n        btStateMessage += 'STATE_TURNING_OFF';\n        break;\n      case access.BluetoothState.STATE_BLE_TURNING_ON:\n        btStateMessage += 'STATE_BLE_TURNING_ON';\n        break;\n      case access.BluetoothState.STATE_BLE_ON:\n        btStateMessage += 'STATE_BLE_ON';\n        break;\n      case access.BluetoothState.STATE_BLE_TURNING_OFF:\n        btStateMessage += 'STATE_BLE_TURNING_OFF';\n        break;\n      default:\n        btStateMessage += 'unknown state';\n        break;\n    }\n    console.info('bluetooth state: ' + btStateMessage);\n  };\n\n  // 开启蓝牙\n  public openBluetooth() {\n    try {\n      access.on('stateChange', this.onReceiveEvent);\n    } catch (err) {\n      console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n    try {\n      // 主动获取蓝牙当前的开关状态\n      let state = access.getState();\n      if (state == access.BluetoothState.STATE_OFF) {\n        // 若蓝牙是关闭的，则主动开启蓝牙\n        access.enableBluetooth();\n      }\n    } catch (err) {\n      console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  }\n\n  // 关闭蓝牙\n  public closeBluetooth() {\n    try {\n      // 主动获取蓝牙当前的开关状态\n      let state = access.getState();\n      if (state == access.BluetoothState.STATE_ON) {\n        // 若蓝牙是开启的，则主动关闭蓝牙\n        access.disableBluetooth();\n      }\n    } catch (err) {\n      console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  }\n}\n\nlet adapterManager = new AdapterManager();\nexport default adapterManager as AdapterManager;\n"
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
647643(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798770-5eef774e546a4ed15a9dd9367c962087.png");

},
434219(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438465-978ac91d00ce6561e215f8cd2c568a48.png");

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