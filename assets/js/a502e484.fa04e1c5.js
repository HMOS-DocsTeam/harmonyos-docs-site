"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["133117"], {
84417(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_connectivity_kit_bluetooth_bluetooth_br_br_pair_device_development_guide_br_pair_device_development_guide_md_a50_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-connectivity-kit-bluetooth-bluetooth-br-br-pair-device-development-guide-br-pair-device-development-guide-md-a50.json
var site_docs_system_network_connectivity_kit_bluetooth_bluetooth_br_br_pair_device_development_guide_br_pair_device_development_guide_md_a50_namespaceObject = JSON.parse('{"id":"system-network/connectivity-kit/bluetooth/bluetooth-br/br-pair-device-development-guide/br-pair-device-development-guide","title":"配对与连接设备","description":"简介","source":"@site/docs/system-network/connectivity-kit/bluetooth/bluetooth-br/br-pair-device-development-guide/br-pair-device-development-guide.md","sourceDirName":"system-network/connectivity-kit/bluetooth/bluetooth-br/br-pair-device-development-guide","slug":"/system-network/connectivity-kit/bluetooth/bluetooth-br/br-pair-device-development-guide/","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/bluetooth/bluetooth-br/br-pair-device-development-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"配对与连接设备","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/br-pair-device-development-guide","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"查找设备","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/bluetooth/bluetooth-br/br-discovery-development-guide/"},"next":{"title":"连接和传输数据","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/bluetooth/bluetooth-br/spp-development-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/connectivity-kit/bluetooth/bluetooth-br/br-pair-device-development-guide/br-pair-device-development-guide.md


const frontMatter = {
	title: '配对与连接设备',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/br-pair-device-development-guide',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '配对与连接设备';

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
  "value": "订阅配对状态变化事件",
  "id": "订阅配对状态变化事件",
  "level": 3
}, {
  "value": "发起配对",
  "id": "发起配对",
  "level": 3
}, {
  "value": "连接已配对设备的profile",
  "id": "连接已配对设备的profile",
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
        id: "配对与连接设备",
        children: "配对与连接设备"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本指南主要提供了主动配对设备和连接设备可用profile能力的开发指导。"
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
      children: "导入connection、a2dp、 hfp、 hid、baseProfile、constant和错误码模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { connection, a2dp, hfp, hid, baseProfile, constant, common } from '@kit.ConnectivityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "订阅配对状态变化事件",
      children: "订阅配对状态变化事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过订阅配对状态变化事件，可以获取实时的配对状态。在整个配对过程中，涉及多种状态的跃迁，其中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-connection/js-apis-bluetooth-connection#bondstate",
        children: "BOND_STATE_BONDED"
      }), "表示已配对。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用主动发起配对其他设备，或者其他设备主动配对本机设备，都可以通过此事件获取配对情况。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 定义配对状态变化函数回调\nfunction onReceiveEvent(data: connection.BondStateParam) {\n    console.info('pair result: '+ JSON.stringify(data));\n}\n\ntry {\n  // 发起订阅\n  connection.on('bondStateChange', onReceiveEvent);\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "发起配对",
      children: "发起配对"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若目标设备的配对状态是", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-connection/js-apis-bluetooth-connection#bondstate",
        children: "BOND_STATE_INVALID"
      }), "，则可以主动配对目标设备。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["目标设备可以通过发现设备流程获取，详情请参考：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-network/connectivity-kit/bluetooth/bluetooth-br/br-discovery-development-guide",
          children: "传统蓝牙查找设备"
        }), "或者", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-network/connectivity-kit/bluetooth/bluetooth-ble/ble-development-guide",
          children: "低功耗蓝牙查找设备"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配对过程中，系统会弹出对话框。不同配对类型，对话框样式可能不一样，其中“确认配对密钥（Confirm Passkey）”模式如下图1。若用户同意授权，才能配对成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(523804)/* ["default"] */.A) + "",
        width: "392",
        height: "249"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 蓝牙配对请求对话框"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "蓝牙设备的实际MAC地址属于用户的隐私信息，在发现设备过程中，蓝牙子系统会给每个蓝牙外设分配一个虚拟MAC地址，并保存该虚拟MAC地址与外设实际MAC地址的映射关系。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若开发者不知道目标设备的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-common/js-apis-bluetooth-common#bluetoothaddresstype",
        children: "地址类型"
      }), "，推荐使用API version 20及以前的配对方式发起配对，详情请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-connection/js-apis-bluetooth-connection#connectionpairdevice",
        children: "connection.pairDevice"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "此配对方式不需要关注目标设备的MAC地址类型。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 通过发现设备流程获取目标设备地址\nlet device = '11:22:33:44:55:66';\n\ntry {\n  // 发起配对\n  connection.pairDevice(device).then(() => {\n    console.info('pairDevice');\n  }, (error: BusinessError) => {\n    console.error('pairDevice: errCode:' + error.code + ', errMessage:' + error.message);\n  });\n} catch (err) {\n  console.error('startPair: errCode:' + err.code + ', errMessage:' + err.message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若开发者已知目标设备的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-common/js-apis-bluetooth-common#bluetoothaddresstype",
        children: "地址类型"
      }), "，推荐使用API version 21开始支持的配对方式发起配对，详情请见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-connection/js-apis-bluetooth-connection#connectionpairdevice21",
        children: "connection.pairDevice"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "此配对方式需要同时指定目标设备的MAC地址和地址类型。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let btAddr: common.BluetoothAddress = {\n    \"address\": '11:22:33:44:55:66', // 目标设备的实际MAC地址或虚拟MAC地址\n    \"addressType\": common.BluetoothAddressType.REAL, // 相应的地址类型\n}\n\ntry {\n    // 发起配对\n    connection.pairDevice(btAddr).then(() => {\n        console.info('pairDevice');\n    }, (error: BusinessError) => {\n        console.error('pairDevice: errCode:' + error.code + ', errMessage:' + error.message);\n    });\n} catch (err) {\n  console.error('startPair: errCode:' + err.code + ', errMessage:' + err.message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "连接已配对设备的profile",
      children: "连接已配对设备的profile"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若应用配对完目标设备后，可以调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-connection/js-apis-bluetooth-connection#connectionconnectallowedprofiles16",
        children: "connectAllowedProfiles"
      }), "，发起连接该设备支持的profile能力（只包括A2DP、HFP和HID）。若应用需要使用SPP连接，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-network/connectivity-kit/bluetooth/bluetooth-br/spp-development-guide",
        children: "连接和传输数据"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "蓝牙子系统会在配对过程中查询和保存目标设备支持的所有profile能力。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["配对完成后，应用可以主动查询目标设备的profile能力，需调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-connection/js-apis-bluetooth-connection#connectiongetremoteprofileuuids12",
          children: "getRemoteProfileUuids"
        }), "。若存在应用需要的能力，则可以在配对完成后30s内，发起连接目标设备的profile。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 设备地址是已配对的设备\nlet device = 'XX:XX:XX:XX:XX:XX';\n\n// 创建A2DP/HFP/HID实例\nlet a2dpSrc = a2dp.createA2dpSrcProfile();\nlet hfpAg = hfp.createHfpAgProfile();\nlet hidHost = hid.createHidHostProfile();\n\n// 定义A2DP连接状态变化回调函数\nfunction onA2dpConnectStateChange(data: baseProfile.StateChangeParam) {\n  console.info(`A2DP State: ${JSON.stringify(data)}`);\n}\n\n// 定义HFP连接状态变化回调函数\nfunction onHfpConnectStateChange(data: baseProfile.StateChangeParam) {\n  console.info(`HFP State: ${JSON.stringify(data)}`);\n}\n\n// 定义HID连接状态变化回调函数\nfunction onHidConnectStateChange(data: baseProfile.StateChangeParam) {\n  console.info(`HID State: ${JSON.stringify(data)}`);\n}\n\ntry {\n    // 建议判断目标设备的profile能力是否存在A2DP/HFP/HID\n    // 订阅A2DP/HFP/HID连接状态变化事件\n    a2dpSrc.on('connectionStateChange', onA2dpConnectStateChange);\n    hfpAg.on('connectionStateChange', onHfpConnectStateChange);\n    hidHost.on('connectionStateChange', onHidConnectStateChange);\n\n    // 发起连接profile\n    connection.connectAllowedProfiles(device).then(() => {\n      console.info('connectAllowedProfiles');\n    }, (error: BusinessError) => {\n      console.error('errCode:' + error.code + ',errMessage' + error.message);\n    });\n} catch (err) {\n  console.error('errCode:' + err.code + ',errMessage' + err.message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { connection, a2dp, hfp, hid, baseProfile, constant } from '@kit.ConnectivityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nexport class PairDeviceManager {\n  device: string = '';\n  pairState: connection.BondState = connection.BondState.BOND_STATE_INVALID;\n  a2dpSrc = a2dp.createA2dpSrcProfile();\n  hfpAg = hfp.createHfpAgProfile();\n  hidHost = hid.createHidHostProfile();\n\n  // 定义配对状态变化回调函数\n  onBondStateEvent = (data: connection.BondStateParam) => {\n    console.info('pair result: '+ JSON.stringify(data));\n    if (data && data.deviceId == this.device) {\n      this.pairState = data.state; // 保存目标设备的配对状态\n    }\n  };\n\n  // 发起配对，设备地址可以通过查找设备流程获取\n  public startPair(device: string) {\n    this.device = device;\n    try {\n      // 发起订阅配对状态变化事件\n      connection.on('bondStateChange', this.onBondStateEvent);\n    } catch (err) {\n      console.error('bondStateChange errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n\n    try {\n      // 发起配对\n      connection.pairDevice(device).then(() => {\n        console.info('pairDevice');\n      }, (error: BusinessError) => {\n        console.error('pairDevice: errCode:' + error.code + ',errMessage' + error.message);\n      });\n    } catch (err) {\n      console.error('startPair: errCode:' + err.code + ',errMessage' + err.message);\n    }\n  }\n\n  // 定义A2DP连接状态变化回调函数\n  onA2dpConnectStateChange = (data: baseProfile.StateChangeParam) => {\n    console.info(`A2DP State: ${JSON.stringify(data)}`);\n  };\n\n  // 定义HFP连接状态变化回调函数\n  onHfpConnectStateChange = (data: baseProfile.StateChangeParam) => {\n    console.info(`HFP State: ${JSON.stringify(data)}`);\n  };\n\n  // 定义HID连接状态变化回调函数\n  onHidConnectStateChange = (data: baseProfile.StateChangeParam) => {\n    console.info(`HID State: ${JSON.stringify(data)}`);\n  };\n\n  // 发起连接\n  public async connect(device: string) {\n    try {\n      let uuids = await connection.getRemoteProfileUuids(device);\n      console.info('device: ' + device + ' remoteUuids: '+ JSON.stringify(uuids));\n      let allowedProfiles = 0;\n      // 若存在应用需要的profile，则监听对应的profile连接状态\n      if (uuids.some(uuid => uuid == constant.ProfileUuids.PROFILE_UUID_A2DP_SINK.toLowerCase())) {\n        console.info('device supports a2dp');\n        allowedProfiles++;\n        this.a2dpSrc.on('connectionStateChange', this.onA2dpConnectStateChange);\n      }\n      if (uuids.some(uuid => uuid == constant.ProfileUuids.PROFILE_UUID_HFP_HF.toLowerCase())) {\n        console.info('device supports hfp');\n        allowedProfiles++;\n        this.hfpAg.on('connectionStateChange', this.onHfpConnectStateChange);\n      }\n      if (uuids.some(uuid => uuid == constant.ProfileUuids.PROFILE_UUID_HID.toLowerCase()) ||\n        uuids.some(uuid => uuid == constant.ProfileUuids.PROFILE_UUID_HOGP.toLowerCase())) {\n        console.info('device supports hid');\n        allowedProfiles++;\n        this.hidHost.on('connectionStateChange', this.onHidConnectStateChange);\n      }\n      if (allowedProfiles > 0) { // 若存在可用的profile，则发起连接\n        connection.connectAllowedProfiles(device).then(() => {\n          console.info('connectAllowedProfiles');\n        }, (error: BusinessError) => {\n          console.error('errCode:' + error.code + ',errMessage' + error.message);\n        });\n      }\n    } catch (err) {\n      console.error('errCode:' + err.code + ',errMessage' + err.message);\n    }\n  }\n}\n\nlet pairDeviceManager = new PairDeviceManager();\nexport default pairDeviceManager as PairDeviceManager;\n"
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
523804(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958420-5e85cc45adffe1495660caf5f35fa686.png");

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