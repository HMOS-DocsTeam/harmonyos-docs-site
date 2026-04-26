"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["3046"], {
47455(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_connectivity_kit_bluetooth_bluetooth_ble_ble_development_guide_ble_development_guide_md_53e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-connectivity-kit-bluetooth-bluetooth-ble-ble-development-guide-ble-development-guide-md-53e.json
var site_docs_system_network_connectivity_kit_bluetooth_bluetooth_ble_ble_development_guide_ble_development_guide_md_53e_namespaceObject = JSON.parse('{"id":"system-network/connectivity-kit/bluetooth/bluetooth-ble/ble-development-guide/ble-development-guide","title":"查找设备","description":"简介","source":"@site/docs/system-network/connectivity-kit/bluetooth/bluetooth-ble/ble-development-guide/ble-development-guide.md","sourceDirName":"system-network/connectivity-kit/bluetooth/bluetooth-ble/ble-development-guide","slug":"/system-network/connectivity-kit/bluetooth/bluetooth-ble/ble-development-guide/","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/bluetooth/bluetooth-ble/ble-development-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"查找设备","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ble-development-guide","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"连接和传输数据","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/bluetooth/bluetooth-br/spp-development-guide/"},"next":{"title":"连接和传输数据","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/bluetooth/bluetooth-ble/gatt-development-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/connectivity-kit/bluetooth/bluetooth-ble/ble-development-guide/ble-development-guide.md


const frontMatter = {
	title: '查找设备',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ble-development-guide',
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
  "value": "BLE扫描流程",
  "id": "ble扫描流程",
  "level": 3
}, {
  "value": "BLE广播流程",
  "id": "ble广播流程",
  "level": 3
}, {
  "value": "完整示例",
  "id": "完整示例",
  "level": 2
}, {
  "value": "BLE扫描流程",
  "id": "ble扫描流程-1",
  "level": 3
}, {
  "value": "BLE广播流程",
  "id": "ble广播流程-1",
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
        id: "查找设备",
        children: "查找设备"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本指南主要提供了BLE扫描和BLE广播相关操作的开发指导。可以实现发现周边BLE设备和其他设备发现本机设备的场景。"
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
      children: "导入ble和错误码模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ble } from '@kit.ConnectivityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ble扫描流程",
      children: "BLE扫描流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "1. 订阅扫描结果上报事件"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["推荐使用API version 15开始支持的扫描方式，该方式支持应用发起和管理多路扫描。该方式支持的上报事件请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#onbledevicefind15",
          children: "on('BLEDeviceFind')"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 定义扫描结果上报回调函数\nfunction onReceiveEvent(scanReport: ble.ScanReport) {\n  console.info('BLE scan device find result: '+ JSON.stringify(scanReport));\n}\n\n// 创建ble扫描实例，可以管理该实例下创建的扫描流程\nlet bleScanner: ble.BleScanner = ble.createBleScanner();\n\ntry {\n  // 发起订阅\n  bleScanner.on('BLEDeviceFind', onReceiveEvent);\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["API version 14及以前支持的扫描方式只支持应用发起单路扫描。该方式支持的上报事件请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#bleonbledevicefind",
          children: "ble.on('BLEDeviceFind')"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 定义扫描结果上报回调函数\nfunction onReceiveEvent(data: Array<ble.ScanResult>) {\n  console.info('BLE scan device find result: '+ JSON.stringify(data));\n}\n\ntry {\n  // 发起订阅\n  ble.on('BLEDeviceFind', onReceiveEvent);\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如何解析扫描到的广播报文，具体可参考本章节", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E5%AE%8C%E6%95%B4%E7%A4%BA%E4%BE%8B",
          children: "完整示例"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2. 发起扫描"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过BLE扫描周边其他设备发出的BLE广播，可以发现或者查找到应用需要的目标设备，适用于查找设备场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若本机设备扫描到可连接的BLE广播，则可以和该设备进行通用属性协议（Generic Attribute Profile，GATT）的连接和数据传输，此时本机设备角色也被称为GATT客户端。具体操作请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-network/connectivity-kit/bluetooth/bluetooth-ble/gatt-development-guide",
        children: "连接和传输数据"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["推荐使用API version 15开始支持的扫描方式，该方式支持应用发起和管理多路扫描。可通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#blecreateblescanner15",
          children: "createBleScanner"
        }), "创建扫描实例", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#blescanner15",
          children: "BleScanner"
        }), "，并调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#startscan15",
          children: "startScan"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建ble扫描实例\nlet bleScanner: ble.BleScanner = ble.createBleScanner();\n\n// 构造扫描BLE广播的过滤条件，目标BLE广播报文需符合该过滤条件\nlet manufactureId = 4567;\nlet manufactureData: Uint8Array = new Uint8Array([1, 2, 3, 4]);\nlet manufactureDataMask: Uint8Array = new Uint8Array([0xFF, 0xFF, 0xFF, 0xFF]);\nlet scanFilter: ble.ScanFilter = { // 根据业务实际情况定义过滤器\n  manufactureId: manufactureId,\n  manufactureData: manufactureData.buffer,\n  manufactureDataMask: manufactureDataMask.buffer\n};\n\n// 构造扫描配置参数\nlet scanOptions: ble.ScanOptions = {\n  interval: 0,\n  dutyMode: ble.ScanDuty.SCAN_MODE_LOW_POWER,\n  matchMode: ble.MatchMode.MATCH_MODE_AGGRESSIVE\n}\n\ntry {\n  // 发起扫描\n  bleScanner.startScan([scanFilter], scanOptions);\n  console.info('startBleScan success');\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["API version 14及以前支持的扫描方式只支持应用发起单路扫描。若要再次发起扫描，必须先停止上一路的扫描流程。详情请见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#blestartblescan",
          children: "ble.startBLEScan"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 构造扫描BLE广播的过滤条件，目标BLE广播报文需符合该过滤条件\nlet manufactureId = 4567;\nlet manufactureData: Uint8Array = new Uint8Array([1, 2, 3, 4]);\nlet manufactureDataMask: Uint8Array = new Uint8Array([0xFF, 0xFF, 0xFF, 0xFF]);\nlet scanFilter: ble.ScanFilter = { // 根据业务实际情况定义过滤器\n  manufactureId: manufactureId,\n  manufactureData: manufactureData.buffer,\n  manufactureDataMask: manufactureDataMask.buffer\n};\n\n// 构造扫描配置参数\nlet scanOptions: ble.ScanOptions = {\n  interval: 0,\n  dutyMode: ble.ScanDuty.SCAN_MODE_LOW_POWER,\n  matchMode: ble.MatchMode.MATCH_MODE_AGGRESSIVE\n}\ntry {\n  // 发起扫描\n  ble.startBLEScan([scanFilter], scanOptions);\n  console.info('startBleScan success');\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "3. 停止扫描"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "扫描流程会消耗蓝牙硬件资源和影响设备功耗。当应用不再需要该扫描时，需要主动停止。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["搭配API version 15开始支持的多路扫描方式。详情请见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#stopscan15",
          children: "stopScan"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 定义扫描结果上报回调函数\nfunction onReceiveEvent(scanReport: ble.ScanReport) {\n  console.info('BLE scan device find result: '+ JSON.stringify(scanReport));\n}\n\n// 创建ble扫描实例\nlet bleScanner: ble.BleScanner = ble.createBleScanner();\n\ntry {\n  bleScanner.off('BLEDeviceFind', onReceiveEvent);\n  // 停止扫描\n  bleScanner.stopScan();\n  console.info('stopBleScan success');\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["搭配API version 14及以前支持的单路扫描方式。详情请见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#blestopblescan",
          children: "ble.stopBLEScan"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 定义扫描结果上报回调函数\nfunction onReceiveEvent(data: Array<ble.ScanResult>) {\n  console.info('BLE scan device find result: '+ JSON.stringify(data));\n}\n\ntry {\n  // 取消订阅\n  ble.off('BLEDeviceFind', onReceiveEvent);\n  // 停止扫描\n  ble.stopBLEScan();\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ble广播流程",
      children: "BLE广播流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本机设备发送BLE广播后，可以实现被其他设备发现的功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["若本机设备发送的是可连接广播，则可以接受其他设备发起的通用属性协议（Generic Attribute Profile，GATT）连接，此时本机设备角色也被称为GATT服务端。具体操作请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-network/connectivity-kit/bluetooth/bluetooth-ble/gatt-development-guide",
        children: "连接和传输数据"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "推荐使用API version 11及以后开始支持的广播操作方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "1. 订阅广播状态上报事件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "搭配API version 11开始支持的广播操作方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function onReceiveEvent(data: ble.AdvertisingStateChangeInfo) {\n    console.info('bluetooth advertising state = ' + JSON.stringify(data));\n}\n\ntry {\n    ble.on('advertisingStateChange', onReceiveEvent);\n} catch (err) {\n    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2. 启动广播"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "推荐使用API version 11开始支持的广播操作方式。支持在不释放相关广播资源情况下，多次操作启动或者停止指定标识的广播，且支持设置广播持续发送的时间。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["相关API请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#blestartadvertising11",
            children: "ble.startAdvertising"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#bleenableadvertising11",
            children: "ble.enableAdvertising"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["首次启动广播接口", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#blestartadvertising11",
            children: "ble.startAdvertising"
          }), "会分配广播相关资源，从API version 15开始，该接口支持应用多次调用，实现启动多路广播的功能，并通过不同的广播标识进行管理。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 设置广播发送的参数\nlet setting: ble.AdvertiseSetting = {\n    interval: 160,\n    txPower: 0,\n    connectable: true // 发送支持连接的广播\n};\n// 构造广播数据\nlet manufactureValueBuffer = new Uint8Array(4);\nmanufactureValueBuffer[0] = 1;\nmanufactureValueBuffer[1] = 2;\nmanufactureValueBuffer[2] = 3;\nmanufactureValueBuffer[3] = 4;\nlet serviceValueBuffer = new Uint8Array(4);\nserviceValueBuffer[0] = 5;\nserviceValueBuffer[1] = 6;\nserviceValueBuffer[2] = 7;\nserviceValueBuffer[3] = 8;\nlet manufactureDataUnit: ble.ManufactureData = {\n  manufactureId: 4567,\n  manufactureValue: manufactureValueBuffer.buffer\n};\nlet serviceDataUnit1: ble.ServiceData = {\n  serviceUuid: \"00001999-0000-1000-8000-00805f9b34fb\",\n  serviceValue: serviceValueBuffer.buffer\n};\nlet serviceDataUnit2: ble.ServiceData = {\n  serviceUuid: \"19991999-0000-1000-8000-00805f9b34fb\",\n  serviceValue: serviceValueBuffer.buffer\n};\nlet advData: ble.AdvertiseData = {\n  serviceUuids: [\"00001888-0000-1000-8000-00805f9b34fb\", \"18881888-0000-1000-8000-00805f9b34fb\"],\n  manufactureData: [manufactureDataUnit],\n  serviceData: [],\n  includeDeviceName: false // 表示是否携带设备名，可选参数。注意：带上设备名时，容易导致广播报文长度超出31个字节，使得广播启动失败\n};\nlet advResponse: ble.AdvertiseData = {\n  serviceUuids: [],\n  manufactureData: [],\n  serviceData: [serviceDataUnit1, serviceDataUnit2]\n};\n// 构造广播启动完整参数AdvertisingParams\nlet advertisingParams: ble.AdvertisingParams = {\n  advertisingSettings: setting,\n  advertisingData: advData, // 注意: 广播报文长度不能超过31个字节\n  advertisingResponse: advResponse, // 注意: 广播报文长度不能超过31个字节\n  duration: 0 // 可选参数，若大于0，则广播发送一段时间后，则会停止，但分配的广播资源还在，可重新启动发送\n}\n\nlet advHandle = 0xFF; // 定义广播标识\n\n// 首次启动广播，蓝牙子系统会分配相关资源，包括应用获取到的广播的标识ID\ntry {\n  ble.startAdvertising(advertisingParams, (err, outAdvHandle) => {\n    if (err) {\n      return;\n    } else {\n      advHandle = outAdvHandle;\n      console.info(\"advHandle: \" + advHandle);\n    }\n  });\n} catch (err) {\n    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n\n// 构造启动广播参数\nlet advertisingEnableParams: ble.AdvertisingEnableParams = {\n  advertisingId: advHandle, // 使用首次启动广播时获取到的广播标识ID\n  duration: 300\n}\ntry {\n  // 再次启动\n  ble.enableAdvertising(advertisingEnableParams, (err) => {\n    if (err) {\n      return;\n    }\n  });\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["API version 10及以前支持的广播操作方式只支持应用启动单路广播。若要再次启动广播，必须先停止上一路的广播流程。详情请见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#blestartadvertising",
          children: "ble.startAdvertising"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 设置广播发送的参数\nlet setting: ble.AdvertiseSetting = {\n    interval: 160,\n    txPower: 0,\n    connectable: true\n};\n// 构造广播数据\nlet manufactureValueBuffer = new Uint8Array(4);\nmanufactureValueBuffer[0] = 1;\nmanufactureValueBuffer[1] = 2;\nmanufactureValueBuffer[2] = 3;\nmanufactureValueBuffer[3] = 4;\nlet serviceValueBuffer = new Uint8Array(4);\nserviceValueBuffer[0] = 5;\nserviceValueBuffer[1] = 6;\nserviceValueBuffer[2] = 7;\nserviceValueBuffer[3] = 8;\nlet manufactureDataUnit: ble.ManufactureData = {\n  manufactureId: 4567,\n  manufactureValue: manufactureValueBuffer.buffer\n};\nlet serviceDataUnit1: ble.ServiceData = {\n  serviceUuid: \"00001999-0000-1000-8000-00805f9b34fb\",\n  serviceValue: serviceValueBuffer.buffer\n};\nlet serviceDataUnit2: ble.ServiceData = {\n  serviceUuid: \"19991999-0000-1000-8000-00805f9b34fb\",\n  serviceValue: serviceValueBuffer.buffer\n};\nlet advData: ble.AdvertiseData = {\n  serviceUuids: [\"00001888-0000-1000-8000-00805f9b34fb\", \"18881888-0000-1000-8000-00805f9b34fb\"],\n  manufactureData: [manufactureDataUnit],\n  serviceData: [],\n  includeDeviceName: false // 表示是否携带设备名，可选参数。注意：带上设备名时，容易导致广播报文长度超出31个字节\n};\nlet advResponse: ble.AdvertiseData = {\n  serviceUuids: [],\n  manufactureData: [],\n  serviceData: [serviceDataUnit1, serviceDataUnit2]\n};\ntry {\n  // 启动广播\n  ble.startAdvertising(setting, advData ,advResponse);\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "3. 停止广播"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "广播流程会消耗蓝牙硬件资源和影响设备功耗。当应用不再需要该广播时，需要主动停止。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["搭配API version 11开始支持的广播方式。相关API请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#bledisableadvertising11",
            children: "ble.disableAdvertising"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#blestopadvertising11",
            children: "ble.stopAdvertising"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["完全停止广播接口", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#blestopadvertising11",
            children: "ble.stopAdvertising"
          }), "会释放所有广播资源，因此首次启动广播分配的广播标识将无效。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let advHandle = 1; // 注意：该值是首次启动广播时获取到的广播标识，此处是伪代码ID\n\n// 构造停止广播参数\nlet advertisingDisableParams: ble.AdvertisingDisableParams = {\n    advertisingId: advHandle // 使用首次启动广播时获取到的广播标识ID\n}\ntry {\n  // 停止\n  ble.disableAdvertising(advertisingDisableParams, (err) => {\n    if (err) {\n      return;\n    }\n  });\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n\ntry {\n  // 完全停止\n  ble.stopAdvertising(advHandle, (err) => {\n    if (err) {\n      return;\n    }\n  });\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["搭配API version 11及以前支持的单路广播方式。相关API请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble#blestopadvertising",
          children: "ble.stopAdvertising"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n  // 停止\n  ble.stopAdvertising();\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ble扫描流程-1",
      children: "BLE扫描流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ble } from '@kit.ConnectivityKit';\nimport { BusinessError } from '@ohos.base';\n\nconst TAG: string = 'BleScanManager';\n\n// 参考蓝牙标准协议规范Core Assigned Numbers\nconst BLE_ADV_TYPE_FLAG = 0x01;\nconst BLE_ADV_TYPE_16_BIT_SERVICE_UUIDS_INCOMPLETE = 0x02;\nconst BLE_ADV_TYPE_16_BIT_SERVICE_UUIDS_COMPLETE = 0x03;\nconst BLE_ADV_TYPE_32_BIT_SERVICE_UUIDS_INCOMPLETE = 0x04;\nconst BLE_ADV_TYPE_32_BIT_SERVICE_UUIDS_COMPLETE = 0x05;\nconst BLE_ADV_TYPE_128_BIT_SERVICE_UUIDS_INCOMPLETE = 0x06;\nconst BLE_ADV_TYPE_128_BIT_SERVICE_UUIDS_COMPLETE = 0x07;\nconst BLE_ADV_TYPE_LOCAL_NAME_SHORT = 0x08;\nconst BLE_ADV_TYPE_LOCAL_NAME_COMPLETE = 0x09;\nconst BLE_ADV_TYPE_TX_POWER_LEVEL = 0x0A;\nconst BLE_ADV_TYPE_16_BIT_SERVICE_SOLICITATION_UUIDS = 0x14;\nconst BLE_ADV_TYPE_128_BIT_SERVICE_SOLICITATION_UUIDS = 0x15;\nconst BLE_ADV_TYPE_32_BIT_SERVICE_SOLICITATION_UUIDS = 0x1F;\nconst BLE_ADV_TYPE_16_BIT_SERVICE_DATA = 0x16;\nconst BLE_ADV_TYPE_32_BIT_SERVICE_DATA = 0x20;\nconst BLE_ADV_TYPE_128_BIT_SERVICE_DATA = 0x21;\nconst BLE_ADV_TYPE_MANUFACTURER_SPECIFIC_DATA = 0xFF;\n\nconst BLUETOOTH_UUID_16_BIT_LENGTH = 2;\nconst BLUETOOTH_UUID_32_BIT_LENGTH = 4;\nconst BLUETOOTH_UUID_128_BIT_LENGTH = 16;\n\nconst BLUETOOTH_MANUFACTURE_ID_LENGTH = 2;\n\nexport class BleScanManager {\n  bleScanner: ble.BleScanner = ble.createBleScanner();\n\n  // 1. 定义扫描结果上报回调函数\n  onReceiveEvent = (scanReport: ble.ScanReport) => {\n    console.info(TAG, 'BLE scan device find result: '+ JSON.stringify(scanReport));\n    if (scanReport.scanResult.length > 0) {\n      console.info(TAG, 'BLE scan result: ' + scanReport.scanResult[0].deviceId);\n      this.parseScanResult(scanReport.scanResult[0].data);\n    }\n  };\n\n  public parseScanResult(data: ArrayBuffer) {\n    let advData = new Uint8Array(data);\n    if (advData.byteLength == 0) {\n      console.warn(TAG, 'adv data length is 0');\n      return;\n    }\n\n    let advertiseFlags: number = -1;\n    let txPowerLevel: number = -1;\n    let localName: string = '';\n    let serviceUuids: string[] = [];\n    let serviceSolicitationUuids: string[] = [];\n    let manufactureSpecificDatas: Record<number, Uint8Array> = {};\n    let serviceDatas: Record<string, Uint8Array> = {};\n\n    let curPos = 0;\n    while (curPos < advData.byteLength) {\n      let length = advData[curPos++]; // 获取当前广播类型的长度（length+data），curPos指向下一个位置\n      if (length == 0) {\n        break;\n      }\n\n      // 获取当前广播类型内容长度（data）\n      let advDataLength = length - 1;\n\n      // 获取当前广播类型，curPos指向下一个位置，从该位置解析实际内容，参考Core Specification Supplement, PartA\n      let advDataType = advData[curPos++];\n      switch (advDataType) {\n        case BLE_ADV_TYPE_FLAG:\n          advertiseFlags = advData[curPos];\n          break;\n        case BLE_ADV_TYPE_LOCAL_NAME_SHORT:\n        case BLE_ADV_TYPE_LOCAL_NAME_COMPLETE:\n          localName = advData.slice(curPos, curPos + advDataLength).toString();\n          break;\n        case BLE_ADV_TYPE_TX_POWER_LEVEL:\n          txPowerLevel = advData[curPos];\n          break;\n        case BLE_ADV_TYPE_16_BIT_SERVICE_UUIDS_INCOMPLETE:\n        case BLE_ADV_TYPE_16_BIT_SERVICE_UUIDS_COMPLETE:\n          this.parseServiceUuid(BLUETOOTH_UUID_16_BIT_LENGTH, curPos, advDataLength, advData, serviceUuids);\n          break;\n        case BLE_ADV_TYPE_32_BIT_SERVICE_UUIDS_INCOMPLETE:\n        case BLE_ADV_TYPE_32_BIT_SERVICE_UUIDS_COMPLETE:\n          this.parseServiceUuid(BLUETOOTH_UUID_32_BIT_LENGTH, curPos, advDataLength, advData, serviceUuids);\n          break;\n        case BLE_ADV_TYPE_128_BIT_SERVICE_UUIDS_INCOMPLETE:\n        case BLE_ADV_TYPE_128_BIT_SERVICE_UUIDS_COMPLETE:\n          this.parseServiceUuid(BLUETOOTH_UUID_128_BIT_LENGTH, curPos, advDataLength, advData, serviceUuids);\n          break;\n        case BLE_ADV_TYPE_16_BIT_SERVICE_SOLICITATION_UUIDS:\n          this.parseServiceSolicitationUuid(BLUETOOTH_UUID_16_BIT_LENGTH, curPos, advDataLength,\n            advData, serviceSolicitationUuids);\n          break;\n        case BLE_ADV_TYPE_32_BIT_SERVICE_SOLICITATION_UUIDS:\n          this.parseServiceSolicitationUuid(BLUETOOTH_UUID_32_BIT_LENGTH, curPos, advDataLength,\n            advData, serviceSolicitationUuids);\n          break;\n        case BLE_ADV_TYPE_128_BIT_SERVICE_SOLICITATION_UUIDS:\n          this.parseServiceSolicitationUuid(BLUETOOTH_UUID_128_BIT_LENGTH, curPos, advDataLength,\n            advData, serviceSolicitationUuids);\n          break;\n        case BLE_ADV_TYPE_16_BIT_SERVICE_DATA:\n          this.parseServiceData(BLUETOOTH_UUID_16_BIT_LENGTH, curPos, advDataLength, advData, serviceDatas);\n          break;\n        case BLE_ADV_TYPE_32_BIT_SERVICE_DATA:\n          this.parseServiceData(BLUETOOTH_UUID_32_BIT_LENGTH, curPos, advDataLength, advData, serviceDatas);\n          break;\n        case BLE_ADV_TYPE_128_BIT_SERVICE_DATA:\n          this.parseServiceData(BLUETOOTH_UUID_128_BIT_LENGTH, curPos, advDataLength, advData, serviceDatas);\n          break;\n        case BLE_ADV_TYPE_MANUFACTURER_SPECIFIC_DATA:\n          this.parseManufactureData(curPos, advDataLength, advData, manufactureSpecificDatas);\n          break;\n        default:\n          break;\n      }\n      curPos += advDataLength; // curPos指向下一个字段类型\n    }\n    console.info(TAG, 'advertiseFlags: ' + advertiseFlags);\n    console.info(TAG, 'txPowerLevel: ' + txPowerLevel);\n    console.info(TAG, 'localName: ' + localName);\n    console.info(TAG, 'serviceUuids: ' + JSON.stringify(serviceUuids));\n    console.info(TAG, 'serviceSolicitationUuids: ' + JSON.stringify(serviceSolicitationUuids));\n    console.info(TAG, 'manufactureSpecificDatas: ' + JSON.stringify(manufactureSpecificDatas));\n    console.info(TAG, 'serviceDatas: ' + JSON.stringify(serviceDatas));\n  }\n\n  private parseServiceUuid(uuidLength: number, curPos: number, advDataLength: number,\n    advData: Uint8Array, serviceUuids: string[]) {\n    while (advDataLength > 0) {\n      let tmpData: Uint8Array = advData.slice(curPos, curPos + uuidLength);\n      serviceUuids.push(this.getUuidFromUint8Array(uuidLength, tmpData));\n      advDataLength -= uuidLength;\n      curPos += uuidLength;\n    }\n  }\n\n  private parseServiceSolicitationUuid(uuidLength: number, curPos: number, advDataLength: number,\n    advData: Uint8Array, serviceSolicitationUuids: string[]) {\n    while (advDataLength > 0) {\n      let tmpData: Uint8Array = advData.slice(curPos, curPos + uuidLength);\n      serviceSolicitationUuids.push(this.getUuidFromUint8Array(uuidLength, tmpData));\n      advDataLength -= uuidLength;\n      curPos += uuidLength;\n    }\n  }\n\n  private getUuidFromUint8Array(uuidLength: number, uuidData: Uint8Array): string {\n    let uuid = \"\";\n    let temp: string = \"\";\n    for (let i = uuidLength - 1; i > -1; i--) {\n      temp += uuidData[i].toString(16).padStart(2, \"0\");\n    }\n    switch (uuidLength) {\n      case BLUETOOTH_UUID_16_BIT_LENGTH:\n        uuid = `0000${temp}-0000-1000-8000-00805F9B34FB`;\n        break;\n      case BLUETOOTH_UUID_32_BIT_LENGTH:\n        uuid = `${temp}-0000-1000-8000-00805F9B34FB`;\n        break;\n      case BLUETOOTH_UUID_128_BIT_LENGTH:\n        uuid = `${temp.substring(0, 8)}-${temp.substring(8, 12)}-${temp.substring(12, 16)}-${temp.substring(16, 20)}-${temp.substring(20, 32)}`;\n        break;\n      default:\n        break;\n    }\n    return uuid;\n  }\n\n  private parseServiceData(uuidLength: number, curPos: number, advDataLength: number,\n    advData: Uint8Array, serviceDatas: Record<number, Uint8Array>) {\n    let uuid: Uint8Array = advData.slice(curPos, curPos + uuidLength);\n    let data: Uint8Array = advData.slice(curPos + uuidLength, curPos + advDataLength);\n    serviceDatas[this.getUuidFromUint8Array(uuidLength, uuid)] = data;\n  }\n\n  private parseManufactureData(curPos: number, advDataLength: number,\n    advData: Uint8Array, manufactureSpecificDatas: Record<number, Uint8Array>) {\n    let manufactureId: number = (advData[curPos + 1] << 8) + advData[curPos];\n    let data: Uint8Array = advData.slice(curPos + BLUETOOTH_MANUFACTURE_ID_LENGTH, curPos + advDataLength);\n    manufactureSpecificDatas[manufactureId] = data;\n  }\n\n  // 2. 开启扫描\n  public startScan() {\n    // 2.1 构造扫描BLE广播的过滤条件，目标BLE广播报文需符合该过滤条件\n    let manufactureId = 4567;\n    let manufactureData: Uint8Array = new Uint8Array([1, 2, 3, 4]);\n    let manufactureDataMask: Uint8Array = new Uint8Array([0xFF, 0xFF, 0xFF, 0xFF]);\n    let scanFilter: ble.ScanFilter = { // 根据业务实际情况定义过滤器\n      manufactureId: manufactureId,\n      manufactureData: manufactureData.buffer,\n      manufactureDataMask: manufactureDataMask.buffer\n    };\n\n    // 2.2 构造扫描配置参数\n    let scanOptions: ble.ScanOptions = {\n      interval: 0,\n      dutyMode: ble.ScanDuty.SCAN_MODE_LOW_POWER,\n      matchMode: ble.MatchMode.MATCH_MODE_AGGRESSIVE\n    }\n    try {\n      // 发起订阅\n      this.bleScanner.on('BLEDeviceFind', this.onReceiveEvent);\n      // 发起扫描\n      this.bleScanner.startScan([scanFilter], scanOptions);\n      console.info('startBleScan success');\n    } catch (err) {\n      console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  }\n\n  // 3. 关闭扫描\n  public stopScan() {\n    try {\n      // 取消订阅\n      this.bleScanner.off('BLEDeviceFind', this.onReceiveEvent);\n      // 停止扫描\n      this.bleScanner.stopScan();\n      console.info('stopBleScan success');\n    } catch (err) {\n      console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  }\n}\n\nlet bleScanManager = new BleScanManager();\nexport default bleScanManager as BleScanManager;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ble广播流程-1",
      children: "BLE广播流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ble } from '@kit.ConnectivityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nconst TAG: string = 'BleAdvertisingManager';\n\nexport class BleAdvertisingManager {\n  private advHandle: number = 0xFF; // 初始的无效值\n\n  // 1. 定义广播状态上报事件\n  onReceiveEvent = (data: ble.AdvertisingStateChangeInfo) => {\n    console.info(TAG, 'bluetooth advertising state = ' + JSON.stringify(data));\n    AppStorage.setOrCreate('advertiserState', data.state);\n  };\n\n  // 2. 首次启动广播\n  public async startAdvertising() {\n    // 2.1 设置广播发送的参数\n    let setting: ble.AdvertiseSetting = {\n      interval: 160,\n      txPower: 0,\n      connectable: true\n    };\n    // 2.2 构造广播数据\n    let manufactureValueBuffer = new Uint8Array(4);\n    manufactureValueBuffer[0] = 1;\n    manufactureValueBuffer[1] = 2;\n    manufactureValueBuffer[2] = 3;\n    manufactureValueBuffer[3] = 4;\n    let serviceValueBuffer = new Uint8Array(4);\n    serviceValueBuffer[0] = 5;\n    serviceValueBuffer[1] = 6;\n    serviceValueBuffer[2] = 7;\n    serviceValueBuffer[3] = 8;\n    let manufactureDataUnit: ble.ManufactureData = {\n      manufactureId: 4567,\n      manufactureValue: manufactureValueBuffer.buffer\n    };\n    let serviceDataUnit1: ble.ServiceData = {\n      serviceUuid: \"00001999-0000-1000-8000-00805f9b34fb\",\n      serviceValue: serviceValueBuffer.buffer\n    };\n    let serviceDataUnit2: ble.ServiceData = {\n      serviceUuid: \"19991999-0000-1000-8000-00805f9b34fb\",\n      serviceValue: serviceValueBuffer.buffer\n    };\n    let advData: ble.AdvertiseData = {\n      serviceUuids: [\"00001888-0000-1000-8000-00805f9b34fb\", \"18881888-0000-1000-8000-00805f9b34fb\"],\n      manufactureData: [manufactureDataUnit],\n      serviceData: [],\n      includeDeviceName: false // 表示是否携带设备名，可选参数。注意：带上设备名时，容易导致广播报文长度超出31个字节，使得广播启动失败\n    };\n    let advResponse: ble.AdvertiseData = {\n      serviceUuids: [],\n      manufactureData: [],\n      serviceData: [serviceDataUnit1, serviceDataUnit2]\n    };\n    // 2.3 构造广播启动完整参数AdvertisingParams\n    let advertisingParams: ble.AdvertisingParams = {\n      advertisingSettings: setting,\n      advertisingData: advData, // 注意: 广播报文长度不能超过31个字节\n      advertisingResponse: advResponse, // 注意: 广播报文长度不能超过31个字节\n      duration: 0 // 可选参数，若参数大于0，则广播发送一段时间后会停止，但分配的广播资源还在，可重新启动发送\n    }\n\n    // 2.4 首次启动广播，蓝牙子系统会分配相关资源，包括应用获取到的广播标识ID\n    try {\n      ble.on('advertisingStateChange', this.onReceiveEvent);\n      this.advHandle = await ble.startAdvertising(advertisingParams);\n    } catch (err) {\n      console.error(TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  }\n\n  // 3. 停止指定标识的广播，即首次启动时分配的标识，停止后，该路广播资源仍然存在\n  public async disableAdvertising() {\n    // 3.1 构造停止广播参数\n    let advertisingDisableParams: ble.AdvertisingDisableParams = {\n      advertisingId: this.advHandle // 使用首次启动广播时获取到的广播标识ID\n    }\n    try {\n      // 3.2 停止\n      await ble.disableAdvertising(advertisingDisableParams);\n    } catch (err) {\n      console.error(TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  }\n\n  // 4. 启动指定标识的广播，即首次启动时分配的标识\n  public async enableAdvertising(enableDuration: number) {\n    // 4.1 构造启动广播参数\n    let advertisingEnableParams: ble.AdvertisingEnableParams = {\n      advertisingId: this.advHandle, // 使用首次启动广播时获取到的广播标识ID\n      duration: enableDuration\n    }\n    try {\n      // 4.2 再次启动\n      await ble.enableAdvertising(advertisingEnableParams);\n    } catch (err) {\n      console.error(TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  }\n\n  // 5. 完全停止广播，释放广播资源\n  public async stopAdvertising() {\n    try {\n      await ble.stopAdvertising(this.advHandle);\n      ble.off('advertisingStateChange', this.onReceiveEvent);\n    } catch (err) {\n      console.error(TAG, 'errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n    }\n  }\n}\n\nlet bleAdvertisingManager = new BleAdvertisingManager();\nexport default bleAdvertisingManager as BleAdvertisingManager;\n"
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