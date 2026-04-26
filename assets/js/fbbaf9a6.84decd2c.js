"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["577443"], {
208565(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_nearlink_kit_guide_nearlink_start_scan_nearlink_start_scan_md_fbb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-nearlink-kit-guide-nearlink-start-scan-nearlink-start-scan-md-fbb.json
var site_docs_system_network_nearlink_kit_guide_nearlink_start_scan_nearlink_start_scan_md_fbb_namespaceObject = JSON.parse('{"id":"system-network/nearlink-kit-guide/nearlink-start-scan/nearlink-start-scan","title":"发起星闪扫描","description":"场景介绍","source":"@site/docs/system-network/nearlink-kit-guide/nearlink-start-scan/nearlink-start-scan.md","sourceDirName":"system-network/nearlink-kit-guide/nearlink-start-scan","slug":"/system-network/nearlink-kit-guide/nearlink-start-scan/","permalink":"/harmonyos-docs-site/system-network/nearlink-kit-guide/nearlink-start-scan/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"发起星闪扫描","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/nearlink-start-scan","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"发送星闪广播","permalink":"/harmonyos-docs-site/system-network/nearlink-kit-guide/nearlink-send-advertising/"},"next":{"title":"SSAP服务端","permalink":"/harmonyos-docs-site/system-network/nearlink-kit-guide/nearlink-ssap-connect/nearlink-ssap-server-connect/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/nearlink-kit-guide/nearlink-start-scan/nearlink-start-scan.md


const frontMatter = {
	title: '发起星闪扫描',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/nearlink-start-scan',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '发起星闪扫描';

const assets = {

};



const toc = [{
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
  "value": "示例代码",
  "id": "示例代码",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "发起星闪扫描",
        children: "发起星闪扫描"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发起星闪扫描，可以扫描到正在发送星闪广播的外围设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-scan/nearlink-scan#startscan",
              children: "startScan"
            }), "(filters: Array<ScanFilters>, options?: ScanOptions): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动星闪扫描。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-scan/nearlink-scan#stopscan",
              children: "stopScan"
            }), "(): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止星闪扫描。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-scan/nearlink-scan#on-devicefound",
              children: "on"
            }), "(type: 'deviceFound', callback: Callback<Array<ScanResults>>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅扫描结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-scan/nearlink-scan#off-devicefound",
              children: "off"
            }), "(type: 'deviceFound', callback?: Callback<Array<ScanResults>>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消订阅扫描结果。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { scan } from '@kit.NearLinkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { util } from '@kit.ArkTS';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义扫描结果回调，解析扫描结果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const SLE_ADV_DATA_TYPE_DISCOVERY_LEVEL = 0x01;\nconst SLE_ADV_DATA_TYPE_SERVICE_DATA_16BIT_UUID = 0x03;\nconst SLE_ADV_DATA_TYPE_SERVICE_DATA_128BIT_UUID = 0x04;\nconst SLE_ADV_DATA_TYPE_COMPLETE_LIST_OF_16BIT_SERVICE_UUIDS = 0x05;\nconst SLE_ADV_DATA_TYPE_COMPLETE_LIST_OF_128BIT_SERVICE_UUIDS = 0x06;\nconst SLE_ADV_DATA_TYPE_INCOMPLETE_LIST_OF_16BIT_SERVICE_UUIDS = 0x07;\nconst SLE_ADV_DATA_TYPE_INCOMPLETE_LIST_OF_128BIT_SERVICE_UUIDS = 0x08;\nconst SLE_ADV_DATA_TYPE_SHORTENED_LOCAL_NAME = 0x0A;\nconst SLE_ADV_DATA_TYPE_COMPLETE_LOCAL_NAME = 0x0B;\nconst SLE_ADV_DATA_TYPE_MANUFACTURER_SPECIFIC_DATA = 0xFF;\n\nconst NEARLINK_UUID_16_BIT_LENGTH = 2;\nconst NEARLINK_UUID_128_BIT_LENGTH = 16;\n\nconst NEARLINK_MANUFACTURE_ID_LENGTH = 2;\n\n// 定义扫描结果回调\nlet onReceiveEvent:(data: Array<scan.ScanResults>) => void = (data: Array<scan.ScanResults>) => {\n  console.info('scan result addr:'+ data[0].address + 'name:' + data[0].deviceName);\n  parseScanResult(data[0].data);\n}\n\n// 按照数据类型解析扫描结果\nfunction parseScanResult(data: ArrayBuffer) {\n  let advData = new Uint8Array(data);\n  if (advData.byteLength == 0) {\n    console.warn('nothing, adv data length is 0');\n    return;\n  }\n  console.info('advData: ' + JSON.stringify(advData));\n\n  let discoveryLevel: number = -1;\n  let serviceData: Record<string, Uint8Array> = {};\n  let standardUuids: string[] = [];\n  let specificUuids: string[] = [];\n  let localName: string = \"\";\n  let manufactureSpecificData: Record<number, Uint8Array> = {};\n\n  let curPos: number= 0;\n  while (curPos < advData.byteLength) {\n    let advDataType: number = advData[curPos++];\n    let advDataLength: number = advData[curPos++];\n    if (advDataLength == 0) {\n      break;\n    }\n    switch (advDataType) {\n      case SLE_ADV_DATA_TYPE_DISCOVERY_LEVEL: // 发现等级\n        discoveryLevel = advData[curPos];\n        break;\n      case SLE_ADV_DATA_TYPE_SERVICE_DATA_16BIT_UUID: // 标准服务数据信息\n        parseServiceData(NEARLINK_UUID_16_BIT_LENGTH, curPos, advDataLength, advData, serviceData);\n        break;\n      case SLE_ADV_DATA_TYPE_SERVICE_DATA_128BIT_UUID: // 自定义服务数据信息\n        parseServiceData(NEARLINK_UUID_128_BIT_LENGTH, curPos, advDataLength, advData, serviceData);\n        break;\n      case SLE_ADV_DATA_TYPE_COMPLETE_LIST_OF_16BIT_SERVICE_UUIDS: // 完整标准服务标识列表\n      case SLE_ADV_DATA_TYPE_INCOMPLETE_LIST_OF_16BIT_SERVICE_UUIDS: // 部分标准服务标识列表\n        parseServiceUuid(NEARLINK_UUID_16_BIT_LENGTH, curPos, advDataLength, advData, standardUuids);\n        break;\n      case SLE_ADV_DATA_TYPE_COMPLETE_LIST_OF_128BIT_SERVICE_UUIDS: // 完整自定义服务标识列表\n      case SLE_ADV_DATA_TYPE_INCOMPLETE_LIST_OF_128BIT_SERVICE_UUIDS: // 部分自定义服务标识列表\n        parseServiceUuid(NEARLINK_UUID_128_BIT_LENGTH, curPos, advDataLength, advData, specificUuids);\n        break;\n      case SLE_ADV_DATA_TYPE_SHORTENED_LOCAL_NAME: // 设备缩写本地名称\n      case SLE_ADV_DATA_TYPE_COMPLETE_LOCAL_NAME: // 设备完整本地名称\n        let tmpName: Uint8Array = advData.slice(curPos, curPos + advDataLength);\n        let decoder = util.TextDecoder.create('utf-8');\n        localName = decoder.decodeToString(new Uint8Array(tmpName));\n        break;\n      case SLE_ADV_DATA_TYPE_MANUFACTURER_SPECIFIC_DATA: // 厂商自定义信息\n        parseManufactureData(curPos, advDataLength, advData, manufactureSpecificData);\n        break;\n      default:\n        break;\n    }\n    curPos += advDataLength;\n  }\n}\n\n// 解析服务数据信息\nfunction parseServiceData (uuidLength: number, curPos: number, advDataLength: number,\n  advData: Uint8Array, serviceData: Record<string, Uint8Array>) {\n  let tmpUuid: Uint8Array = advData.slice(curPos, curPos + uuidLength);\n  getUuidFromUint8Array(uuidLength, tmpUuid);\n  let tmpValue: Uint8Array = advData.slice(curPos + uuidLength, curPos + advDataLength);\n  serviceData[tmpUuid.toString()] = tmpValue;\n}\n\n// 解析服务标识列表\nfunction parseServiceUuid (uuidLength: number, curPos: number, advDataLength: number,\n  advData: Uint8Array, serviceUuids: string[]) {\n  while (advDataLength > 0) {\n    let tmpData: Uint8Array = advData.slice(curPos, curPos + uuidLength);\n    serviceUuids.push(getUuidFromUint8Array(uuidLength, tmpData));\n    advDataLength -= uuidLength;\n    curPos += uuidLength;\n  }\n}\n\n// 解析厂商自定义信息\nfunction parseManufactureData(curPos: number, advDataLength: number,\n  advData: Uint8Array, manufactureSpecificData: Record<number, Uint8Array>) {\n    let manufactureId: number = (advData[curPos + 1] << 8) + advData[curPos];\n    let tmpValue: Uint8Array = advData.slice(curPos + NEARLINK_MANUFACTURE_ID_LENGTH, curPos + advDataLength);\n    manufactureSpecificData[manufactureId] = tmpValue;\n}\n\n// 解析UUID\nfunction getUuidFromUint8Array(uuidLength: number, uuidData: Uint8Array): string {\n  let uuid: string = '';\n  let temp: string = '';\n  for (let i = uuidLength - 1; i > -1; i--) {\n    temp += uuidData[i].toString(16).padStart(2, '0');\n  }\n  switch (uuidLength) {\n    case NEARLINK_UUID_16_BIT_LENGTH:\n      uuid = `37BEA880-FC70-11EA-B720-00000000${temp}`;\n      break;\n    case NEARLINK_UUID_128_BIT_LENGTH:\n      uuid = `${temp.substring(0, 8)}-${temp.substring(8, 12)}-${temp.substring(12, 16)}-${temp.substring(16,\n          20)}-${temp.substring(20, 32)}`;\n      break;\n    default:\n      break;\n  }\n  return uuid;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "订阅扫描结果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  scan.on(\"deviceFound\", onReceiveEvent);\n  // 订阅星闪扫描结果。返回的扫描结果中携带的地址为远端设备随机地址。\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置扫描参数，扫描过滤器配置期望的设备名称、地址等信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(417860)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "扫描过滤器至少携带一个过滤条件，否则扫描过滤器无效。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "过滤器可以配置多组，组之间的条件是或的关系，如步骤5所示。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "一组过滤器内的条件是与的关系，如下示例：address和deviceName同时满足才会上报。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let scanFilter1: scan.ScanFilters = {\n  address:\"11:22:33:44:AA:BB\", // 期望扫描到的外围设备1的地址\n  deviceName:\"deviceName1\" // 期望扫描到的外围设备1的名称\n};\nlet scanFilter2: scan.ScanFilters = {\n  address:\"22:33:44:AB:CD:EF\", // 期望扫描到的外围设备2的地址\n  deviceName:\"deviceName2\" // 期望扫描到的外围设备2的名称\n};\nlet scanOptions: scan.ScanOptions = {\n  scanMode: scan.ScanMode.SCAN_MODE_LOW_POWER\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开启星闪扫描，参数配置在步骤4中构造。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  scan.startScan([scanFilter1, scanFilter2], scanOptions).then(() => {\n    console.info(\"start scan success\");\n  }).catch ((err: BusinessError) => {\n    console.error('errCode: ' + err.code + ', errMessage: ' + err.message);\n  });\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "停止星闪扫描。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  scan.stopScan().then(() => {\n    console.info(\"stop scan success\");\n  }).catch ((err: BusinessError) => {\n    console.error('errCode: ' + err.code + ', errMessage: ' + err.message);\n  });\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "取消订阅扫描结果，其中onReceiveEvent是在步骤3中注册的回调函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  scan.off(\"deviceFound\", onReceiveEvent);\n} catch (err) {\n  console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["星闪扫描场景可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/harmonyos_samples/nearlink-kit_-sample-code",
        children: "星闪示例代码"
      }), "，entry/src/main/ets/pages/ScanConfigPage.ets中的实现方法。"]
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
417860(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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