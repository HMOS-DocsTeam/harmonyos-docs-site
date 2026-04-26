"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["363199"], {
117783(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_connectivity_kit_bluetooth_bluetooth_ble_gatt_development_guide_gatt_development_guide_md_967_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-connectivity-kit-bluetooth-bluetooth-ble-gatt-development-guide-gatt-development-guide-md-967.json
var site_docs_system_network_connectivity_kit_bluetooth_bluetooth_ble_gatt_development_guide_gatt_development_guide_md_967_namespaceObject = JSON.parse('{"id":"system-network/connectivity-kit/bluetooth/bluetooth-ble/gatt-development-guide/gatt-development-guide","title":"连接和传输数据","description":"简介","source":"@site/docs/system-network/connectivity-kit/bluetooth/bluetooth-ble/gatt-development-guide/gatt-development-guide.md","sourceDirName":"system-network/connectivity-kit/bluetooth/bluetooth-ble/gatt-development-guide","slug":"/system-network/connectivity-kit/bluetooth/bluetooth-ble/gatt-development-guide/","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/bluetooth/bluetooth-ble/gatt-development-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"连接和传输数据","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gatt-development-guide","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"查找设备","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/bluetooth/bluetooth-ble/ble-development-guide/"},"next":{"title":"NFC标签读写开发指南","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/nfc/nfc-tag-access-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/connectivity-kit/bluetooth/bluetooth-ble/gatt-development-guide/gatt-development-guide.md


const frontMatter = {
	title: '连接和传输数据',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gatt-development-guide',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '连接和传输数据';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "实现原理",
  "id": "实现原理",
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
  "value": "客户端",
  "id": "客户端",
  "level": 3
}, {
  "value": "服务端",
  "id": "服务端",
  "level": 3
}, {
  "value": "完整示例",
  "id": "完整示例",
  "level": 2
}, {
  "value": "客户端",
  "id": "客户端-1",
  "level": 3
}, {
  "value": "服务端",
  "id": "服务端-1",
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
        id: "连接和传输数据",
        children: "连接和传输数据"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本指南主要提供了基于通用属性协议（Generic Attribute Profile，GATT）实现BLE设备间连接和传输数据的开发指导。当两个设备间进行GATT通信交互时，依据设备功能的不同，可区分为GATT客户端和GATT服务端，本指南将分别介绍客户端与服务端的实现方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["GATT是低功耗蓝牙（BLE）的核心协议，定义了基于服务（Service）、特征值（Characteristic）和描述符（Descriptor）进行蓝牙通信和传输数据的机制。相关术语介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-network/connectivity-kit/terminology",
        children: "Connectivity Kit术语"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "客户端获取到服务端的设备地址后，即可向服务端发起连接。服务端设备地址可以通过BLE扫描流程获取。待两端连接成功后，即可向服务端发起服务查询、读写特征值和接收通知等操作，从而实现向服务端发送数据或者接收服务端数据的功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务端需要发送BLE广播才能被客户端发现。服务端需要支持客户端需要连接的服务，等待客户端的连接请求即可。待两端连接成功后，即可接收客户端的读写特征值和发送通知等操作，从而实现接收客户端数据或者向客户端发送数据的功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["客户端的BLE扫描和服务端的BLE广播流程，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-network/connectivity-kit/bluetooth/bluetooth-ble/ble-development-guide",
        children: "查找设备"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "申请蓝牙权限",
      children: "申请蓝牙权限"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要申请权限ohos.permission.ACCESS_BLUETOOTH。如何配置和申请权限，请参考", (0,jsx_runtime.jsx)(_components.a, {
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
      children: "导入ble、constant和错误码模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ble, constant } from '@kit.ConnectivityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "客户端",
      children: "客户端"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "1. 创建客户端实例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "客户端通过查找设备流程搜索到目标设备后，即可构造客户端实例，后续所有操作都基于该客户端实例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 此处是伪代码\nlet device = 'XX:XX:XX:XX:XX:XX';\n\ntry {\n  let gattClient: ble.GattClientDevice = ble.createGattClientDevice(device);\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2. 订阅连接状态变化事件"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过订阅连接状态变化事件，可以获取实时的GATT连接状态。整个连接过程会涉及多种状态的跃迁，其中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-constant/js-apis-bluetooth-constant#profileconnectionstate",
        children: "STATE_CONNECTED"
      }), "表示已连接，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-constant/js-apis-bluetooth-constant#profileconnectionstate",
        children: "STATE_DISCONNECTED"
      }), "表示已断连。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 此处是伪代码\nlet device = 'XX:XX:XX:XX:XX:XX';\n\nfunction clientConnectStateChanged(state: ble.BLEConnectionChangeState) {\n  console.info('bluetooth connect state changed');\n  let connectState: ble.ProfileConnectionState = state.state;\n}\n\ntry {\n  let gattClient: ble.GattClientDevice = ble.createGattClientDevice(device);\n  gattClient.on('BLEConnectionStateChange', clientConnectStateChanged);\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "3. 发起连接"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过创建的客户端实例，直接发起连接即可。通过连接状态变化事件判断是否已连接成功。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 此处是伪代码\nlet device = 'XX:XX:XX:XX:XX:XX';\n\ntry {\n    let gattClient: ble.GattClientDevice = ble.createGattClientDevice(device);\n    gattClient.connect();\n} catch (err) {\n    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "4. 服务发现"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务发现是获取服务端支持的所有服务能力集合的过程。客户端需要根据服务发现结果，判断服务端是否存在应用需要的服务能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "后续的读写特征值、读写描述符等操作都需要在服务发现操作完成后进行，否则会失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "后续的读写等操作中指定的特征值或描述符必须包含在服务能力集合中，否则会失败。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 此处是伪代码\nlet device = 'XX:XX:XX:XX:XX:XX';\n\ntry {\n  let gattClient: ble.GattClientDevice = ble.createGattClientDevice(device);\n  // 此处是伪代码，需要连接上后，才可以调用\n  gattClient.getServices().then((result: Array<ble.GattService>) => {\n    console.info('getServices successfully:' + JSON.stringify(result));\n  });\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "5. 传输数据"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传输数据通过操作服务端的特征值或者描述符实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "5.1 读取或写入特征值"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "读取特征值操作，可以获取服务端特征值的数据内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "写入特征值操作，可以更新服务端特征值的数据内容。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["相关API请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#readcharacteristicvalue",
        children: "readCharacteristicValue"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#writecharacteristicvalue",
        children: "writeCharacteristicValue"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 此处是伪代码\nlet device = 'XX:XX:XX:XX:XX:XX';\nlet descriptors: Array<ble.BLEDescriptor> = [];\nlet bufferDesc = new ArrayBuffer(2);\nlet descV = new Uint8Array(bufferDesc);\ndescV[0] = 11;\nlet descriptor: ble.BLEDescriptor = {\n  serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',\n  characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',\n  descriptorUuid: '00008888-0000-1000-8000-00805F9B34FB',\n  descriptorValue: bufferDesc\n};\ndescriptors[0] = descriptor;\nlet bufferCCC = new ArrayBuffer(2);\nlet cccV = new Uint8Array(bufferCCC);\ncccV[0] = 1;\nlet characteristic: ble.BLECharacteristic = {\n  serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',\n  characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',\n  characteristicValue: bufferCCC,\n  descriptors:descriptors\n};\n\nlet gattClient: ble.GattClientDevice = ble.createGattClientDevice(device);\n\n// 读取特征值\ntry {\n  gattClient.readCharacteristicValue(characteristic).then((outData: ble.BLECharacteristic) => {\n  });\n} catch (err) {\n    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n\n// 写入特征值\ntry {\n  gattClient.writeCharacteristicValue(characteristic, ble.GattWriteType.WRITE, (err) => {\n    if (err) {\n      console.error(TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n      return;\n    }\n    console.info(TAG, 'writeCharacteristicValue success');\n  });\n} catch (err) {\n    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "5.2 读取或写入描述符"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "读取描述符操作，可以获取服务端描述符的数据内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "写入描述符操作，可以更新服务端描述符的数据内容。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["相关API请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#readdescriptorvalue",
        children: "readDescriptorValue"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#writedescriptorvalue",
        children: "writeDescriptorValue"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 此处是伪代码\nlet device = 'XX:XX:XX:XX:XX:XX';\nlet bufferDesc = new ArrayBuffer(2);\nlet descV = new Uint8Array(bufferDesc);\ndescV[0] = 11;\nlet descriptor: ble.BLEDescriptor = {\n  serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',\n  characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',\n  descriptorUuid: '00008888-0000-1000-8000-00805F9B34FB',\n  descriptorValue: bufferDesc\n};\nlet gattClient: ble.GattClientDevice = ble.createGattClientDevice(device);\n\n// 读取描述符\ntry {\n  gattClient.readDescriptorValue(descriptor).then((outData: ble.BLEDescriptor) => {\n  });\n} catch (err) {\n    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n\n// 写入描述符\ntry {\n  gattClient.writeDescriptorValue(descriptor, (err) => {\n    if (err) {\n      console.error(TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n      return;\n    }\n  });\n} catch (err) {\n    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "5.3 接收服务端特征值变化通知或指示"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当服务端特征值的数据内容发生变化时，客户端可以通过接收服务端的特征值变化通知或者指示来实现更新数据。该服务端特征值需包含蓝牙标准协议定义的Client Characteristic Configuration描述符UUID（00002902-0000-1000-8000-00805f9b34fb），才能支持通知或者指示能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "客户端收到服务端通知时，不需要回复确认；客户端收到服务端指示时，需要回复确认，蓝牙子系统会实现该操作，应用无需关注。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["先订阅服务端特征值变化事件，详情请见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#onblecharacteristicchange",
          children: "on('BLECharacteristicChange')"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["再使能服务端特征值变化通知或者指示能力，应用根据实际场景选择一种方式即可。相关API请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#setcharacteristicchangenotification",
          children: "setCharacteristicChangeNotification"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#setcharacteristicchangeindication",
          children: "setCharacteristicChangeIndication"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 此处是伪代码\nlet device = 'XX:XX:XX:XX:XX:XX';\n\n// 定义服务端特征值变化事件\nfunction characteristicChange(characteristicChangeReq: ble.BLECharacteristic) {\n  let serviceUuid: string = characteristicChangeReq.serviceUuid;\n  let characteristicUuid: string = characteristicChangeReq.characteristicUuid;\n  let value: Uint8Array = new Uint8Array(characteristicChangeReq.characteristicValue);\n}\n\nlet descriptors: Array<ble.BLEDescriptor> = [];\nlet arrayBuffer = new ArrayBuffer(2);\nlet descV = new Uint8Array(arrayBuffer);\ndescV[0] = 11;\nlet descriptor: ble.BLEDescriptor = {\n  serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',\n  characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',\n  descriptorUuid: '00002902-0000-1000-8000-00805F9B34FB',\n  descriptorValue: arrayBuffer\n};\ndescriptors[0] = descriptor;\nlet arrayBufferC = new ArrayBuffer(2);\nlet characteristic: ble.BLECharacteristic = {\n  serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',\n  characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',\n  characteristicValue: arrayBufferC,\n  descriptors:descriptors\n};\n\nlet gattClient: ble.GattClientDevice = ble.createGattClientDevice(device);\n\n// 发起订阅\ntry {\n    gattClient.on('BLECharacteristicChange', characteristicChange);\n} catch (err) {\n    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n\n// 通知和指示，2选1即可\n// 设置特征值变化通知能力\ntry {\n  // enable入参: true表示启用，false表示禁用\n  gattClient.setCharacteristicChangeNotification(characteristic, true, (err: BusinessError) => {\n    if (err) {\n      console.error('setCharacteristicChangeNotification callback failed');\n    } else {\n      console.info('setCharacteristicChangeNotification callback successful');\n    }\n  });\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n\n// 设置特征值变化指示能力\ntry {\n  // enable入参: true表示启用，false表示禁用\n  gattClient.setCharacteristicChangeIndication(characteristic, true, (err: BusinessError) => {\n    if (err) {\n      console.error('setCharacteristicChangeIndication callback failed');\n    } else {\n      console.info('setCharacteristicChangeIndication callback successful');\n    }\n  });\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "6. 断开连接"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用不再需要已建立的连接时，需主动断开连接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 此处是伪代码\nlet device = 'XX:XX:XX:XX:XX:XX';\n\nlet gattClient: ble.GattClientDevice = ble.createGattClientDevice(device);\ntry {\n  // 发起断连\n  gattClient.disconnect();\n\n  // 如果应用不再使用此gattClient，则需要close，gattClient实例将不能再使用\n  gattClient.close()\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "服务端",
      children: "服务端"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "1. 创建服务端实例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构造服务端实例，后续所有操作都基于该服务端实例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n  let gattServer: ble.GattServer = ble.createGattServer();\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2. 添加服务"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加应用需要的服务，将在蓝牙子系统中注册指定的UUID服务。客户端会发起服务查询，判断服务端是否支持特定的服务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建descriptors\nlet descriptors: Array<ble.BLEDescriptor> = [];\nlet arrayBuffer = new ArrayBuffer(2);\nlet descV = new Uint8Array(arrayBuffer);\ndescV[0] = 11;\nlet descriptor: ble.BLEDescriptor = {\n  serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',\n  characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',\n  descriptorUuid: '00002902-0000-1000-8000-00805F9B34FB',\n  descriptorValue: arrayBuffer};\ndescriptors[0] = descriptor;\n\n// 创建characteristics\nlet characteristics: Array<ble.BLECharacteristic> = [];\nlet arrayBufferC = new ArrayBuffer(2);\nlet cccV = new Uint8Array(arrayBufferC);\ncccV[0] = 1;\nlet characteristic: ble.BLECharacteristic = {\n  serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',\n  characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',\n  characteristicValue: arrayBufferC,\n  descriptors:descriptors\n};\ncharacteristics[0] = characteristic;\n\n// 创建gattService\nlet gattService: ble.GattService = {\n  serviceUuid:'00001810-0000-1000-8000-00805F9B34FB',\n  isPrimary: true,\n  characteristics:characteristics,\n  includeServices:[]\n};\n\ntry {\n  let gattServer: ble.GattServer = ble.createGattServer();\n  gattServer.addService(gattService);\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "3. 订阅连接状态变化事件"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过订阅连接状态变化事件，可以获取实时的GATT连接状态以及客户端的设备地址。整个连接过程涉及多种状态的跃迁，其中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-constant/js-apis-bluetooth-constant#profileconnectionstate",
        children: "STATE_CONNECTED"
      }), "表示已连接，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-constant/js-apis-bluetooth-constant#profileconnectionstate",
        children: "STATE_DISCONNECTED"
      }), "表示已断连。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function ServerConnectStateChanged(state: ble.BLEConnectionChangeState) {\n  console.info('bluetooth connect state changed');\n  let connectState: ble.ProfileConnectionState = state.state;\n  let device = state.deviceId;\n}\n\ntry {\n  let gattServer: ble.GattServer = ble.createGattServer();\n  gattServer.on('connectionStateChange', ServerConnectStateChanged);\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "4. 传输数据"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传输数据可以通过客户端读写特征值数据内容、读写描述符数据内容、主动发送特征值数据内容变化通知或指示实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "4.1 订阅特征值读取或写入事件"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过订阅特征值读取或写入事件，获取客户端的操作请求，相关API请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#oncharacteristicread",
        children: "on('characteristicRead')"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#oncharacteristicwrite",
        children: "on('characteristicWrite')"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["收到读取特征值请求时，需要调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#sendresponse",
          children: "sendResponse"
        }), "进行回复对应特征值的数据内容。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["收到写入特征值请求时，可保存客户端写入的特征值数据内容。根据写入请求", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#characteristicwriterequest",
          children: "CharacteristicWriteRequest"
        }), "的needRsp判断是否需要调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#sendresponse",
          children: "sendResponse"
        }), "进行回复。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let gattServer: ble.GattServer = ble.createGattServer();\nlet arrayBufferCCC = new ArrayBuffer(2);\nlet cccValue = new Uint8Array(arrayBufferCCC);\ncccValue[0] = 1;\n\n// 定义特征值读取回调函数\nfunction readCharacteristicReq(characteristicReadRequest: ble.CharacteristicReadRequest) {\n  let deviceId: string = characteristicReadRequest.deviceId;\n  let transId: number = characteristicReadRequest.transId;\n  let offset: number = characteristicReadRequest.offset;\n  let characteristicUuid: string = characteristicReadRequest.characteristicUuid;\n\n  let serverResponse: ble.ServerResponse = {\n    deviceId: deviceId,\n    transId: transId,\n    status: 0,\n    offset: offset,\n    value:arrayBufferCCC // 传入服务端对应特征值的数据内容，此处是伪代码\n  };\n\n  try {\n    gattServer.sendResponse(serverResponse);\n  } catch (err) {\n    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n  }\n}\n\n// 定义特征值写入回调函数\nfunction writeCharacteristicReq(characteristicWriteRequest: ble.CharacteristicWriteRequest) {\n  let deviceId: string = characteristicWriteRequest.deviceId;\n  let transId: number = characteristicWriteRequest.transId;\n  let offset: number = characteristicWriteRequest.offset;\n  let needRsp: boolean = characteristicWriteRequest.needRsp;\n  if (!needRsp) { // 判断是否需要回复客户端\n      return;\n  }\n  let value: Uint8Array =  new Uint8Array(characteristicWriteRequest.value); // 可保存写入的数据内容\n  let characteristicUuid: string = characteristicWriteRequest.characteristicUuid;\n  cccValue[0] = value[0];\n  let serverResponse: ble.ServerResponse = {\n    deviceId: deviceId,\n    transId: transId,\n    status: 0,\n    offset: offset,\n    value:arrayBufferCCC\n  };\n\n  try {\n    gattServer.sendResponse(serverResponse);\n  } catch (err) {\n    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n  }\n}\n\n// 订阅特征值读取事件\ngattServer.on('characteristicRead', readCharacteristicReq);\n\n// 订阅特征值写入事件\ngattServer.on('characteristicWrite', writeCharacteristicReq);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "4.2 订阅描述符读取或写入事件"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过订阅描述符读取或写入事件，获取客户端的操作请求，相关API请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#ondescriptorread",
        children: "on('descriptorRead')"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#ondescriptorwrite",
        children: "on('descriptorWrite')"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["收到读取描述符请求时，需要调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#sendresponse",
          children: "sendResponse"
        }), "进行回复对应描述符的数据内容。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["收到写入描述符请求时，可保存客户端写入的描述符数据内容。根据写入请求", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#descriptorwriterequest",
          children: "DescriptorWriteRequest"
        }), "的needRsp判断是否需要调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#sendresponse",
          children: "sendResponse"
        }), "进行回复。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let gattServer: ble.GattServer = ble.createGattServer();\n\n// 定义描述符读取回调函数\nlet arrayBufferDesc = new ArrayBuffer(2);\nlet descValue = new Uint8Array(arrayBufferDesc);\ndescValue[0] = 1;\nfunction readDescriptorReq(descriptorReadRequest: ble.DescriptorReadRequest) {\n  let deviceId: string = descriptorReadRequest.deviceId;\n  let transId: number = descriptorReadRequest.transId;\n  let offset: number = descriptorReadRequest.offset;\n  let descriptorUuid: string = descriptorReadRequest.descriptorUuid;\n\n  let serverResponse: ble.ServerResponse = {\n    deviceId: deviceId,\n    transId: transId,\n    status: 0,\n    offset: offset,\n    value:arrayBufferDesc\n  };\n\n  try {\n    gattServer.sendResponse(serverResponse);\n  } catch (err) {\n    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n  }\n}\n\n// 定义描述符写入回调函数\nfunction writeDescriptorReq(descriptorWriteRequest: ble.DescriptorWriteRequest) {\n  let deviceId: string = descriptorWriteRequest.deviceId;\n  let transId: number = descriptorWriteRequest.transId;\n  let offset: number = descriptorWriteRequest.offset;\n  let isPrepared: boolean = descriptorWriteRequest.isPrepared;\n  let needRsp: boolean = descriptorWriteRequest.needRsp;\n  if (!needRsp) { // 判断是否需要回复客户端\n      return;\n  }\n\n  let value: Uint8Array = new Uint8Array(descriptorWriteRequest.value); // 可保存写入的数据内容\n  let descriptorUuid: string = descriptorWriteRequest.descriptorUuid;\n  descValue[0] = value[0];\n  let serverResponse: ble.ServerResponse = {\n    deviceId: deviceId,\n    transId: transId,\n    status: 0,\n    offset: offset,\n    value:arrayBufferDesc\n  };\n\n  try {\n    gattServer.sendResponse(serverResponse);\n  } catch (err) {\n    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n  }\n}\n\n// 订阅描述符读取事件\ngattServer.on('descriptorRead', readDescriptorReq);\n\n// 订阅描述符写入事件\ngattServer.on('descriptorWrite', writeDescriptorReq);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "4.3 发送特征值变化通知或指示"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当服务端的特征值数据内容发生变化时，可以通过通知或者指示主动知会到客户端，相关API请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#notifycharacteristicchanged",
        children: "notifyCharacteristicChanged"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["发送通知时，不需要客户端回复确认；发送指示时，需要客户端回复确认。应用根据", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#notifycharacteristic",
        children: "NotifyCharacteristic"
      }), "的confirm参数决定发送哪种类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该特征值需包含蓝牙标准协议定义的Client Characteristic Configuration描述符UUID（00002902-0000-1000-8000-00805f9b34fb），才支持通知或者指示能力。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用通知或者指示能力需要使能。客户端可以通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#setcharacteristicchangenotification",
          children: "setCharacteristicChangeNotification"
        }), "或", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#setcharacteristicchangeindication",
          children: "setCharacteristicChangeIndication"
        }), "使能该能力，应用根据实际场景选择一种方式即可。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let device = 'XX:XX:XX:XX:XX:XX'; // 该设备地址表示客户端地址，可以通过连接状态变化事件中获取\nlet arrayBufferC = new ArrayBuffer(2);\nlet notifyCharacter: ble.NotifyCharacteristic = {\n  serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',\n  characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',\n  characteristicValue: arrayBufferC,\n  confirm: true // 决定发送通知还是指示\n};\ntry {\n  let gattServer: ble.GattServer = ble.createGattServer();\n  // 发送变更通知或指示\n  gattServer.notifyCharacteristicChanged(device, notifyCharacter, (err: BusinessError) => {\n    if (err) {\n      console.error('notifyCharacteristicChanged callback failed');\n    } else {\n      console.info('notifyCharacteristicChanged callback successful');\n    }\n  });\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "5. 关闭服务端实例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用不再需要创建的服务端实例时，需要主动关闭，并释放相关资源。例如：删除已添加的服务，取消已订阅事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n  let gattServer: ble.GattServer = ble.createGattServer();\n  gattServer.removeService('00001810-0000-1000-8000-00805F9B34FB'); // 删除此前注册的服务\n  gattServer.close() // 应用不再使用此gattServer，则需要close\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "客户端-1",
      children: "客户端"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ble, constant } from '@kit.ConnectivityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nconst TAG: string = 'GattClientManager';\n\nexport class GattClientManager {\n  device: string = '';\n  gattClient: ble.GattClientDevice | undefined = undefined;\n  connectState: ble.ProfileConnectionState = constant.ProfileConnectionState.STATE_DISCONNECTED;\n  myServiceUuid: string = '00001810-0000-1000-8000-00805F9B34FB';\n  myCharacteristicUuid: string = '00001820-0000-1000-8000-00805F9B34FB';\n  // 标准协议描述符Client Characteristic Configuration，用于特征值变化通知或指示\n  myFirstDescriptorUuid: string = '00002902-0000-1000-8000-00805F9B34FB';\n  // 自定义描述符\n  mySecondDescriptorUuid: string = '00008888-0000-1000-8000-00805F9B34FB';\n\n  myService: ble.GattService | undefined = undefined;\n  myCharacteristic: ble.BLECharacteristic | undefined = undefined;\n  myFirstDescriptor: ble.BLEDescriptor | undefined = undefined;\n  mySecondDescriptor: ble.BLEDescriptor | undefined = undefined;\n\n  foundService: boolean = false;\n  foundChar: boolean = false;\n  foundFirstDes: boolean = false;\n  foundSecondDes: boolean = false;\n\n  // 构造BLEDescriptor\n  private initDescriptor(des: string, value: ArrayBuffer): ble.BLEDescriptor {\n    let descriptor: ble.BLEDescriptor = {\n      serviceUuid: this.myServiceUuid,\n      characteristicUuid: this.myCharacteristicUuid,\n      descriptorUuid: des,\n      descriptorValue: value\n    };\n    return descriptor;\n  }\n\n  // 构造BLECharacteristic\n  private initCharacteristic(isWrite: boolean): ble.BLECharacteristic {\n    let descriptors: Array<ble.BLEDescriptor> = [];\n    let charBuffer = new ArrayBuffer(2);\n    if (isWrite) {\n      let charValue = new Uint8Array(charBuffer);\n      charValue[0] = 21;\n      charValue[1] = 22;\n    }\n    let characteristic: ble.BLECharacteristic = {\n      serviceUuid: this.myServiceUuid,\n      characteristicUuid: this.myCharacteristicUuid,\n      characteristicValue: charBuffer,\n      descriptors: descriptors\n    };\n    return characteristic;\n  }\n\n  private logCharacteristic(char: ble.BLECharacteristic) {\n    let message = 'logCharacteristic uuid:' + char.characteristicUuid + ', value: ';\n    let value = new Uint8Array(char.characteristicValue);\n    message += 'logCharacteristic value: ';\n    for (let i = 0; i < char.characteristicValue.byteLength; i++) {\n      message += value[i] + ' ';\n    }\n    console.info(TAG, message);\n  }\n\n  private logDescriptor(des: ble.BLEDescriptor) {\n    let message = 'logDescriptor uuid:' + des.descriptorUuid + ', value: ';\n    let value = new Uint8Array(des.descriptorValue);\n    message += 'logDescriptor value: ';\n    for (let i = 0; i < des.descriptorValue.byteLength; i++) {\n      message += value[i] + ' ';\n    }\n    console.info(TAG, message);\n  }\n\n  private checkService(services: Array<ble.GattService>) {\n    for (let i = 0; i < services.length; i++) {\n      if (services[i].serviceUuid != this.myServiceUuid) {\n        continue;\n      }\n      this.myService = services[i];\n      this.foundService = true;\n      for (let j = 0; j < services[i].characteristics.length; j++) {\n        if (services[i].characteristics[j].characteristicUuid != this.myCharacteristicUuid) {\n          continue;\n        }\n        this.logCharacteristic(services[i].characteristics[j]);\n        this.myCharacteristic = services[i].characteristics[j];\n        this.foundChar = true;\n        for (let k = 0; k < services[i].characteristics[j].descriptors.length; k++) {\n          if (services[i].characteristics[j].descriptors[k].descriptorUuid == this.myFirstDescriptorUuid) {\n            this.myFirstDescriptor= services[i].characteristics[j].descriptors[k];\n            this.foundFirstDes = true;\n            continue;\n          }\n          if (services[i].characteristics[j].descriptors[k].descriptorUuid == this.mySecondDescriptorUuid) {\n            this.mySecondDescriptor = services[i].characteristics[j].descriptors[k];\n            this.foundSecondDes = true;\n            continue;\n          }\n        }\n      }\n    }\n    console.info(TAG, 'foundService: ' + this.foundService + ', foundChar: ' + this.foundChar +\n      ', foundFirDes: ' + this.foundFirstDes + ', foundSecDes: ' + this.foundSecondDes);\n  }\n\n  // 1. 定义连接状态变化回调函数\n  onGattClientStateChange = (stateInfo: ble.BLEConnectionChangeState) => {\n    let state = '';\n    switch (stateInfo.state) {\n      case 0:\n        state = 'DISCONNECTED';\n        break;\n      case 1:\n        state = 'CONNECTING';\n        break;\n      case 2:\n        state = 'CONNECTED';\n        break;\n      case 3:\n        state = 'DISCONNECTING';\n        break;\n      default:\n        state = 'undefined';\n        break;\n    }\n    console.info(TAG, 'onGattClientStateChange: device=' + stateInfo.deviceId + ', state=' + state);\n    if (stateInfo.deviceId == this.device) {\n      this.connectState = stateInfo.state;\n    }\n  };\n\n  // 2. client端主动连接时调用\n  public startConnect(peerDevice: string) { // 对端设备一般通过ble查找设备获取到\n    if (this.connectState != constant.ProfileConnectionState.STATE_DISCONNECTED) {\n      console.error(TAG, 'startConnect failed');\n      return;\n    }\n    console.info(TAG, 'startConnect ' + peerDevice);\n    this.device = peerDevice;\n    // 2.1 使用device构造gattClient，后续的交互都需要使用该实例\n    this.gattClient = ble.createGattClientDevice(peerDevice);\n    try {\n      // 2.2 订阅连接状态\n      this.gattClient.on('BLEConnectionStateChange', this.onGattClientStateChange);\n\n      // 2.3 发起连接\n      this.gattClient.connect();\n    } catch (err) {\n      console.error(TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  }\n\n  // 3. client端连接成功后，需要进行服务发现\n  public async discoverServices() {\n    if (!this.gattClient) {\n      console.error(TAG, 'gattClient does not exist');\n      return;\n    }\n    console.info(TAG, 'discoverServices');\n    try {\n      let serverService = await this.gattClient.getServices();\n      this.checkService(serverService); // 要确保server端的服务内容有业务所需要的服务\n      if (typeof this.myService !== 'undefined') {\n        console.info(TAG, 'Service: ' + JSON.stringify(this.myService));\n      }\n      if (typeof this.myCharacteristic !== 'undefined') {\n        this.logCharacteristic(this.myCharacteristic);\n      }\n      if (typeof this.myFirstDescriptor !== 'undefined') {\n        this.logDescriptor(this.myFirstDescriptor);\n      }\n      if (typeof this.mySecondDescriptor !== 'undefined') {\n        this.logDescriptor(this.mySecondDescriptor);\n      }\n    } catch (err) {\n      console.error(TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  }\n\n  // 4. 在确保拿到了server端的服务结果后，读取server端特定服务的特征值时调用\n  public readCharacteristicValue() {\n    if (!this.gattClient || this.connectState != constant.ProfileConnectionState.STATE_CONNECTED) {\n      console.error(TAG, 'gattClient does not exist or state not connected');\n      return;\n    }\n    if (!this.foundChar) { // 要确保server端有对应的characteristic\n      console.error(TAG, 'server characteristic does not exist');\n      return;\n    }\n\n    let characteristic = this.initCharacteristic(false);\n    console.info(TAG, 'readCharacteristicValue');\n    try {\n      this.gattClient.readCharacteristicValue(characteristic).then((outData: ble.BLECharacteristic) => {\n        this.myCharacteristic = outData;\n        this.logCharacteristic(this.myCharacteristic);\n      });\n    } catch (err) {\n      console.error(TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  }\n\n  // 5. 在确保拿到了server端的服务结果后，写入server端特定服务的特征值时调用\n  public writeCharacteristicValue() {\n    if (!this.gattClient || this.connectState != constant.ProfileConnectionState.STATE_CONNECTED) {\n      console.error(TAG, 'gattClient does not exist or state not connected');\n      return;\n    }\n    if (!this.foundChar) { // 要确保server端有对应的characteristic\n      console.error(TAG, 'server characteristic does not exist');\n      return;\n    }\n\n    let characteristic = this.initCharacteristic(true);\n    console.info(TAG, 'writeCharacteristicValue');\n    try {\n      this.gattClient.writeCharacteristicValue(characteristic, ble.GattWriteType.WRITE, (err) => {\n        if (err) {\n          console.error(TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n          return;\n        }\n        console.info(TAG, 'writeCharacteristicValue success');\n      });\n    } catch (err) {\n      console.error(TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  }\n\n  // 6. 在确保拿到了server端的服务结果后，读取server端特定服务的描述符时调用\n  public readDescriptorValue() {\n    if (!this.gattClient || this.connectState != constant.ProfileConnectionState.STATE_CONNECTED) {\n      console.error(TAG, 'gattClient does not exist or state not connected');\n      return;\n    }\n    if (!this.foundSecondDes) { // 要确保server端有对应的descriptor\n      console.error(TAG, 'server descriptor does not exist');\n      return;\n    }\n\n    let descBuffer = new ArrayBuffer(0);\n    let descriptor = this.initDescriptor(this.mySecondDescriptorUuid, descBuffer);\n    console.info(TAG, 'readDescriptorValue');\n    try {\n      this.gattClient.readDescriptorValue(descriptor).then((outData: ble.BLEDescriptor) => {\n        this.logDescriptor(outData);\n      });\n    } catch (err) {\n      console.error(TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  }\n\n  // 7. 在确保拿到了server端的服务结果后，写入server端特定服务的描述符时调用\n  public writeDescriptorValue() {\n    if (!this.gattClient || this.connectState != constant.ProfileConnectionState.STATE_CONNECTED) {\n      console.error(TAG, 'gattClient does not exist or state not connected');\n      return;\n    }\n    if (!this.foundSecondDes) { // 要确保server端有对应的descriptor\n      console.error(TAG, 'server descriptor does not exist');\n      return;\n    }\n\n    let descBuffer = new ArrayBuffer(2);\n    let descValue = new Uint8Array(descBuffer);\n    descValue[0] = 41;\n    descValue[1] = 42;\n    let descriptor = this.initDescriptor(this.mySecondDescriptorUuid, descBuffer);\n    console.info(TAG, 'writeDescriptorValue');\n    try {\n      this.gattClient.writeDescriptorValue(descriptor, (err) => {\n        if (err) {\n          console.error(TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n          return;\n        }\n        console.info(TAG, 'writeDescriptorValue success');\n      });\n    } catch (err) {\n      console.error(TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  }\n\n  // 8. 定义特征值变化回调函数\n  onCharacteristicChange = (char: ble.BLECharacteristic) => {\n    console.info(TAG, 'onCharacteristicChange: uuid: ' + char.characteristicUuid + ', value: ' + JSON.stringify(new Uint8Array(char.characteristicValue)));\n    this.myCharacteristic = char;\n    this.logCharacteristic(this.myCharacteristic);\n  }\n\n  // 9. 使能或禁用接收服务端端特征值内容变更通知的能力时调用，一般通知或者指示，二选一\n  public Notify(enable: boolean) {\n    if (!this.gattClient || this.connectState != constant.ProfileConnectionState.STATE_CONNECTED) {\n      console.error(TAG, 'gattClient does not exist or state not connected');\n      return;\n    }\n\n    if (!this.foundFirstDes) { // 要确保server端有对应的client configuration descriptor\n      console.error(TAG, 'server client configuration descriptor does not exist');\n      return;\n    }\n\n    console.info(TAG, 'Notify ' + this.device + ' enable: ' + enable);\n    try {\n      // 订阅特征值变化\n      this.gattClient.on('BLECharacteristicChange', this.onCharacteristicChange);\n      // 设置特征值变化通知能力，enable: true表示启用，false表示禁用\n      this.gattClient.setCharacteristicChangeNotification(this.myCharacteristic, enable, (err: BusinessError) => {\n        if (err) {\n          console.error('setCharacteristicChangeNotification callback failed');\n        } else {\n          console.info('setCharacteristicChangeNotification callback successful');\n        }\n      });\n    } catch (err) {\n      console.error(TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  }\n\n  // 10. 使能或禁用接收服务端端特征值内容变更指示的能力时调用，一般通知或者指示，二选一\n  public Indicate(enable: boolean) {\n    if (!this.gattClient || this.connectState != constant.ProfileConnectionState.STATE_CONNECTED) {\n      console.error(TAG, 'gattClient does not exist or state not connected');\n      return;\n    }\n\n    if (!this.foundFirstDes) { // 要确保server端有对应的client configuration descriptor\n      console.error(TAG, 'server client configuration descriptor does not exist');\n      return;\n    }\n\n    console.info(TAG, 'Indicate ' + this.device + ' enable: ' + enable);\n    try {\n      // 订阅特征值变化\n      this.gattClient.on('BLECharacteristicChange', this.onCharacteristicChange);\n      // 设置特征值变化指示能力，enable: true表示启用，false表示禁用\n      this.gattClient.setCharacteristicChangeIndication(this.myCharacteristic, enable, (err: BusinessError) => {\n        if (err) {\n          console.error('setCharacteristicChangeIndication callback failed');\n        } else {\n          console.info('setCharacteristicChangeIndication callback successful');\n        }\n      });\n    } catch (err) {\n      console.error(TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  }\n\n  // 11.client端主动断开时调用\n  public stopConnect() {\n    if (!this.gattClient || this.connectState != constant.ProfileConnectionState.STATE_CONNECTED) {\n      console.error(TAG, 'gattClient does not exist or state not connected');\n      return;\n    }\n\n    console.info(TAG, 'stopConnect ' + this.device);\n    try {\n      this.gattClient.disconnect(); // 11.1 断开连接\n      this.gattClient.off('BLEConnectionStateChange', this.onGattClientStateChange); // 11.2 取消订阅连接状态\n      this.gattClient.off('BLECharacteristicChange', this.onCharacteristicChange); // 11.3 取消订阅特征值变化\n      this.gattClient.close() // 11.4 如果应用不再使用此gattClient，则需要close\n    } catch (err) {\n      console.error(TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  }\n}\n\nlet gattClientManager = new GattClientManager();\nexport default gattClientManager as GattClientManager;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "服务端-1",
      children: "服务端"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ble, constant } from '@kit.ConnectivityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nconst TAG: string = 'GattServerManager';\n\nexport class GattServerManager {\n  device = '';\n  gattServer: ble.GattServer | undefined = undefined;\n  connectState: ble.ProfileConnectionState = constant.ProfileConnectionState.STATE_DISCONNECTED;\n  myServiceUuid: string = '00001810-0000-1000-8000-00805F9B34FB';\n  myCharacteristicUuid: string = '00001820-0000-1000-8000-00805F9B34FB';\n  // 标准协议描述符Client Characteristic Configuration，用于特征值变化通知或指示\n  myFirstDescriptorUuid: string = '00002902-0000-1000-8000-00805F9B34FB';\n  // 自定义描述符\n  mySecondDescriptorUuid: string = '00008888-0000-1000-8000-00805F9B34FB';\n\n  charBuffer = new ArrayBuffer(2);\n  charValue = new Uint8Array(this.charBuffer);\n\n  firDescBuffer = new ArrayBuffer(2);\n  firDescValue = new Uint8Array(this.firDescBuffer);\n\n  secDescBuffer = new ArrayBuffer(2);\n  secDescValue = new Uint8Array(this.secDescBuffer);\n\n  // 构造BLEDescriptor\n  private initDescriptor(des: string, value: ArrayBuffer): ble.BLEDescriptor {\n    let descriptor: ble.BLEDescriptor = {\n      serviceUuid: this.myServiceUuid,\n      characteristicUuid: this.myCharacteristicUuid,\n      descriptorUuid: des,\n      descriptorValue: value\n    };\n    return descriptor;\n  }\n\n  // 构造BLECharacteristic\n  private initCharacteristic(): ble.BLECharacteristic {\n    let descriptors: Array<ble.BLEDescriptor> = [];\n    // 默认Client Characteristic Configuration描述符没有使能特征值变化通知或者指示能力\n    descriptors[0] = this.initDescriptor(this.myFirstDescriptorUuid, this.firDescBuffer);\n    this.secDescValue[0] = 31;\n    this.secDescValue[1] = 32;\n    descriptors[1] = this.initDescriptor(this.mySecondDescriptorUuid, this.secDescBuffer);\n    this.charValue[0] = 1;\n    this.charValue[1] = 2;\n    let characteristic: ble.BLECharacteristic = {\n      serviceUuid: this.myServiceUuid,\n      characteristicUuid: this.myCharacteristicUuid,\n      characteristicValue: this.charBuffer,\n      descriptors: descriptors\n    };\n    return characteristic;\n  }\n\n  // 1. 定义连接状态变化回调函数\n  onGattServerStateChange = (stateInfo: ble.BLEConnectionChangeState) => {\n    let state = '';\n    switch (stateInfo.state) {\n      case 0:\n        state = 'DISCONNECTED';\n      break;\n      case 1:\n        state = 'CONNECTING';\n      break;\n      case 2:\n        state = 'CONNECTED';\n      break;\n      case 3:\n        state = 'DISCONNECTING';\n      break;\n      default:\n        state = 'undefined';\n      break;\n    }\n    console.info(TAG, 'onGattServerStateChange: device=' + stateInfo.deviceId + ', state=' + state);\n    this.device = stateInfo.deviceId;\n  }\n\n  // 2. 定义读取特征值请求回调函数\n  onCharacteristicRead = (charReq: ble.CharacteristicReadRequest) => {\n    let deviceId: string = charReq.deviceId;\n    let transId: number = charReq.transId;\n    let offset: number = charReq.offset;\n    console.info(TAG, 'receive characteristicRead: uuid: ' + charReq.characteristicUuid + ', value: ' + JSON.stringify(this.charValue));\n    let serverResponse: ble.ServerResponse = {\n      deviceId: deviceId,\n      transId: transId,\n      status: 0, // 0表示成功\n      offset: offset,\n      value: this.charBuffer\n    };\n\n    try {\n      this.gattServer?.sendResponse(serverResponse);\n    } catch (err) {\n      console.error(TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  };\n\n  // 检查client configuration descriptor的通知能力是否使能\n  private checkDescriptorNotification(buffer: Uint8Array): boolean {\n    const notify = new ArrayBuffer(2);\n    let notifyValue = new Uint8Array(notify);\n    notifyValue.set([1, 0]); // 使能client configuration descriptor notification的值\n    return notifyValue.every((value, index) => value === buffer[index]);\n  }\n\n  // 检查client configuration descriptor的指示能力是否使能\n  private checkDescriptorIndication(buffer: Uint8Array): boolean {\n    const notify = new ArrayBuffer(2);\n    let notifyValue = new Uint8Array(notify);\n    notifyValue.set([2, 0]); // 使能client configuration descriptor indication的值\n    return notifyValue.every((value, index) => value === buffer[index]);\n  }\n\n  // 3. 定义写入特征值请求回调函数\n  onCharacteristicWrite = (charReq: ble.CharacteristicWriteRequest) => {\n    let deviceId: string = charReq.deviceId;\n    let transId: number = charReq.transId;\n    let offset: number = charReq.offset;\n    this.charBuffer = charReq.value;\n    this.charValue = new Uint8Array(charReq.value);\n    console.info(TAG, 'receive characteristicWrite: uuid: ' + charReq.characteristicUuid + ', needRsp=' + charReq.needRsp + ', value: ' + JSON.stringify(this.charValue));\n    if (!charReq.needRsp) {\n      return;\n    }\n    let rspBuffer = new ArrayBuffer(0);\n    let serverResponse: ble.ServerResponse = {\n      deviceId: deviceId,\n      transId: transId,\n      status: 0, // 0表示成功\n      offset: offset,\n      value: rspBuffer\n    };\n\n    try {\n      this.gattServer?.sendResponse(serverResponse);\n      this.sendCharacterChange(); // 此处特征值变化了，模拟主动发送变化通知或者指示\n    } catch (err) {\n      console.error(TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  }\n\n  // 4. 定义读取描述符请求回调函数\n  onDescriptorRead = (desReq: ble.DescriptorReadRequest) => {\n    let deviceId: string = desReq.deviceId;\n    let transId: number = desReq.transId;\n    let offset: number = desReq.offset;\n    let tmpBuffer = new ArrayBuffer(2);\n    if (desReq.descriptorUuid == this.myFirstDescriptorUuid) {\n      tmpBuffer = this.firDescBuffer;\n    } else {\n      tmpBuffer = this.secDescBuffer;\n    }\n    let tmpValue = new Uint8Array(tmpBuffer);\n    console.info(TAG, 'receive descriptorRead: ' + desReq.descriptorUuid + ', tmpValue: ' + JSON.stringify(tmpValue));\n    let serverResponse: ble.ServerResponse = {\n      deviceId: deviceId,\n      transId: transId,\n      status: 0, // 0表示成功\n      offset: offset,\n      value: tmpBuffer\n    };\n\n    try {\n      this.gattServer?.sendResponse(serverResponse);\n    } catch (err) {\n      console.error(TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  }\n\n  // 5. 定义写入描述符请求回调函数\n  onDescriptorWrite = (desReq: ble.DescriptorWriteRequest) => {\n    let deviceId: string = desReq.deviceId;\n    let transId: number = desReq.transId;\n    let offset: number = desReq.offset;\n    console.info(TAG, 'receive descriptorWrite: uuid: ' + desReq.descriptorUuid + ', needRsp: '+ desReq.needRsp + ', value: ' + JSON.stringify(new Uint8Array(desReq.value)));\n    if (desReq.descriptorUuid == this.myFirstDescriptorUuid) {\n      this.firDescBuffer = desReq.value;\n      this.firDescValue = new Uint8Array(desReq.value);\n    } else {\n      this.secDescBuffer = desReq.value;\n      this.secDescValue = new Uint8Array(desReq.value);\n    }\n    if (!desReq.needRsp) {\n      return;\n    }\n    let rspBuffer = new ArrayBuffer(0);\n    let serverResponse: ble.ServerResponse = {\n      deviceId: deviceId,\n      transId: transId,\n      status: 0, // 0表示成功\n      offset: offset,\n      value: rspBuffer\n    };\n\n    try {\n      this.gattServer?.sendResponse(serverResponse);\n    } catch (err) {\n      console.error(TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  }\n\n  // 6. server端注册服务时调用\n  public registerServer() {\n    let characteristics: Array<ble.BLECharacteristic> = [];\n    let characteristic = this.initCharacteristic();\n    characteristics.push(characteristic);\n    let gattService: ble.GattService = {\n      serviceUuid: this.myServiceUuid,\n      isPrimary: true,\n      characteristics: characteristics\n    };\n\n    console.info(TAG, 'registerServer ' + this.myServiceUuid);\n    try {\n      this.gattServer = ble.createGattServer(); // 6.1 构造gattServer，后续的交互都需要使用该实例\n      this.gattServer.addService(gattService); // 6.2 注册服务\n      this.gattServer.on('connectionStateChange', this.onGattServerStateChange); // 6.3 订阅连接状态\n      this.gattServer.on('characteristicRead', this.onCharacteristicRead); // 6.4 订阅特征值读事件\n      this.gattServer.on('characteristicWrite', this.onCharacteristicWrite); // 6.5 订阅特征值写事件\n      this.gattServer.on('descriptorRead', this.onDescriptorRead); // 6.6 订阅描述符读事件\n      this.gattServer.on('descriptorWrite', this.onDescriptorWrite); // 6.7 订阅描述符写事件\n    } catch (err) {\n      console.error(TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  }\n\n  // 7. 特征值内容发生变化时调用\n  public sendCharacterChange() {\n    console.info(TAG, 'sendCharacterChange: uuid: ' + this.myCharacteristicUuid + ', value: ' + JSON.stringify(new Uint8Array(this.charBuffer)));\n    if (this.checkDescriptorNotification(this.firDescValue)) {\n      let notifyCharacter: ble.NotifyCharacteristic = {\n        serviceUuid: this.myServiceUuid,\n        characteristicUuid: this.myCharacteristicUuid,\n        characteristicValue: this.charBuffer,\n        confirm: false\n      };\n      console.info(TAG, 'sendCharacterChange notification');\n      this.gattServer?.notifyCharacteristicChanged(this.device, notifyCharacter, (err: BusinessError) => {\n        if (err) {\n          console.error(TAG, 'notifyCharacteristicChanged notification callback failed');\n        } else {\n          console.info(TAG, 'notifyCharacteristicChanged notification callback successful');\n        }\n      });\n    } else if (this.checkDescriptorIndication(this.firDescValue)) {\n      let notifyCharacter: ble.NotifyCharacteristic = {\n        serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',\n        characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',\n        characteristicValue: this.charBuffer,\n        confirm: true\n      };\n      console.info(TAG, 'sendCharacterChange indication');\n      this.gattServer?.notifyCharacteristicChanged(this.device, notifyCharacter, (err: BusinessError) => {\n        if (err) {\n          console.error(TAG, 'notifyCharacteristicChanged indication callback failed');\n        } else {\n          console.info(TAG, 'notifyCharacteristicChanged indication callback successful');\n        }\n      });\n    } else {\n      console.info(TAG, 'notification/indication is disabled');\n    }\n  }\n\n  // 8. server端删除服务，不再使用时调用\n  public unRegisterServer() {\n    if (!this.gattServer) {\n      console.error(TAG, 'no gattServer');\n      return;\n    }\n\n    console.info(TAG, 'unRegisterServer ' + this.myServiceUuid);\n    try {\n      this.gattServer.removeService(this.myServiceUuid); // 8.1 删除服务\n      this.gattServer.off('connectionStateChange', this.onGattServerStateChange); // 8.2 取消订阅连接状态\n      this.gattServer.off('characteristicRead', this.onCharacteristicRead); // 8.3 取消订阅特征值读事件\n      this.gattServer.off('characteristicWrite', this.onCharacteristicWrite); // 8.4 取消订阅特征值写事件\n      this.gattServer.off('descriptorRead', this.onDescriptorRead); // 8.5 取消订阅描述符读事件\n      this.gattServer.off('descriptorWrite', this.onDescriptorWrite); // 8.6 取消订阅描述符写事件\n      this.gattServer.close() // 8.7 如果应用不再使用此gattServer，则需要close\n    } catch (err) {\n      console.error(TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  }\n}\n\nlet gattServerManager = new GattServerManager();\nexport default gattServerManager as GattServerManager;\n"
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