"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["883270"], {
194957(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_network_api_connectivity_api_connectivity_arkts_js_apis_fusionconnectivity_partneragent_js_apis_fusionconnectivity_partneragent_md_919_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-network-api-connectivity-api-connectivity-arkts-js-apis-fusionconnectivity-partneragent-js-apis-fusionconnectivity-partneragent-md-919.json
var site_docs_ref_system_network_api_connectivity_api_connectivity_arkts_js_apis_fusionconnectivity_partneragent_js_apis_fusionconnectivity_partneragent_md_919_namespaceObject = JSON.parse('{"id":"system-network-api/connectivity-api/connectivity-arkts/js-apis-fusionconnectivity-partneragent/js-apis-fusionconnectivity-partneragent","title":"@ohos.FusionConnectivity.partnerAgent（设备状态通知模块）","description":"本模块基于蓝牙通信技术，为应用提供设备发现与设备下线的通知功能，主要功能特性包括：","source":"@site/docs-ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-fusionconnectivity-partneragent/js-apis-fusionconnectivity-partneragent.md","sourceDirName":"system-network-api/connectivity-api/connectivity-arkts/js-apis-fusionconnectivity-partneragent","slug":"/system-network-api/connectivity-api/connectivity-arkts/js-apis-fusionconnectivity-partneragent/js-apis-fusionconnectivity-partneragent","permalink":"/harmonyos-docs-site/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-fusionconnectivity-partneragent/js-apis-fusionconnectivity-partneragent","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":21,"frontMatter":{"title":"@ohos.FusionConnectivity.partnerAgent（设备状态通知模块）","sidebar_position":21,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-fusionconnectivity-partneragent","kit":"系统","last_updated":"2026-04-22","slug":"js-apis-fusionconnectivity-partneragent"},"sidebar":"ref","previous":{"title":"@ohos.wifiManagerExt (WLAN扩展接口)","permalink":"/harmonyos-docs-site/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-wifimanagerext/js-apis-wifimanagerext"},"next":{"title":"@ohos.FusionConnectivity.PartnerAgentExtensionContext (设备状态通知能力上下文)","permalink":"/harmonyos-docs-site/ref/system-network-api/connectivity-api/connectivity-arkts/is-fusionconnectivity-partneragentextensioncontext/is-fusionconnectivity-partneragentextensioncontext"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-fusionconnectivity-partneragent/js-apis-fusionconnectivity-partneragent.md


const frontMatter = {
	title: '@ohos.FusionConnectivity.partnerAgent（设备状态通知模块）',
	sidebar_position: 21,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-fusionconnectivity-partneragent',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'js-apis-fusionconnectivity-partneragent'
};
const contentTitle = '@ohos.FusionConnectivity.partnerAgent（设备状态通知模块）';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "partnerAgent.isPartnerAgentSupported",
  "id": "partneragentispartneragentsupported",
  "level": 2
}, {
  "value": "partnerAgent.bindDevice",
  "id": "partneragentbinddevice",
  "level": 2
}, {
  "value": "partnerAgent.unbindDevice",
  "id": "partneragentunbinddevice",
  "level": 2
}, {
  "value": "partnerAgent.isDeviceBound",
  "id": "partneragentisdevicebound",
  "level": 2
}, {
  "value": "partnerAgent.getBoundDevices",
  "id": "partneragentgetbounddevices",
  "level": 2
}, {
  "value": "partnerAgent.isDeviceControlEnabled",
  "id": "partneragentisdevicecontrolenabled",
  "level": 2
}, {
  "value": "partnerAgent.DeviceCapability",
  "id": "partneragentdevicecapability",
  "level": 2
}, {
  "value": "partnerAgent.BusinessCapability",
  "id": "partneragentbusinesscapability",
  "level": 2
}, {
  "value": "partnerAgent.PartnerDeviceAddress",
  "id": "partneragentpartnerdeviceaddress",
  "level": 2
}, {
  "value": "partnerAgent.PartnerAgentExtensionAbilityDestroyReason",
  "id": "partneragentpartneragentextensionabilitydestroyreason",
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
    p: "p",
    pre: "pre",
    strong: "strong",
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
        id: "ohosfusionconnectivitypartneragent设备状态通知模块",
        children: "@ohos.FusionConnectivity.partnerAgent（设备状态通知模块）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块基于蓝牙通信技术，为应用提供设备发现与设备下线的通知功能，主要功能特性包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "动态监听并发现应用预先注册的蓝牙设备。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["采用进程拉起机制，当目标设备出现时自动拉起应用的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/is-fusionconnectivity-partneragentextensionability/is-fusionconnectivity-partneragentextensionability",
          children: "PartnerAgentExtensionAbility"
        }), "进程。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["采用进程销毁机制，当所有设备下线时自动销毁应用的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/is-fusionconnectivity-partneragentextensionability/is-fusionconnectivity-partneragentextensionability",
          children: "PartnerAgentExtensionAbility"
        }), "进程。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/is-fusionconnectivity-partneragentextensionability/is-fusionconnectivity-partneragentextensionability",
          children: "PartnerAgentExtensionAbility"
        }), "的接口通知应用发现已注册设备。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(157322)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 23开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { partnerAgent } from '@kit.ConnectivityKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "partneragentispartneragentsupported",
      children: "partnerAgent.isPartnerAgentSupported"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isPartnerAgentSupported(): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断本机设备是否支持外设互通功能，若该接口返回值是false，该文件内的其他接口均无法使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.FusionConnectivity.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束"
        })
      }), "： 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持外设互通功能。true表示支持外设互通功能，false表示不支持外设互通功能。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { partnerAgent } from '@kit.ConnectivityKit';\nlet isSupport = partnerAgent.isPartnerAgentSupported();\nconsole.info(`This device support partner agent: ${isSupport}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "partneragentbinddevice",
      children: "partnerAgent.bindDevice"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bindDevice(deviceAddress: PartnerDeviceAddress, deviceCapability: DeviceCapability, businessCapability: BusinessCapability, partnerAgentExtensionAbilityName: string): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用注册设备，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["建议先使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#partneragentispartneragentsupported",
          children: "isPartnerAgentSupported"
        }), "判断本机是否支持外设互通功能。仅支持情况下才能使用融合短距外设互通模块功能。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["可以通过接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "#partneragentisdevicebound",
          children: "isDeviceBound"
        }), "判断设备是否已注册。若已注册，无需重复调用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用需要先实现", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/is-fusionconnectivity-partneragentextensionability/is-fusionconnectivity-partneragentextensionability",
          children: "PartnerAgentExtensionAbility"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用注册该设备后，如果外设互通子系统检测到该设备，会激活应用的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/is-fusionconnectivity-partneragentextensionability/is-fusionconnectivity-partneragentextensionability",
          children: "PartnerAgentExtensionAbility"
        }), "进程。应用可以在新进程中执行业务操作。每当已注册设备被发现或者已断连时，该进程将被激活并保持运行3分钟（时间随着新的通知刷新）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在应用注册前，需先与该设备完成", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-connection/js-apis-bluetooth-connection#connectionpairdevice",
          children: "蓝牙配对"
        }), "。如果该设备已注册，且用户在此期间取消了与该设备的配对，该设备的发现和下线通知功能将自动关闭，但注册信息会保留30天。若在这30天内重新与该设备进行蓝牙配对，外设互通子系统可以恢复设备的发现和下线通知功能。否则，注册信息会被清除。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["可以通过接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "#partneragentgetbounddevices",
          children: "getBoundDevices"
        }), "获取所有已注册过的设备。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用在使用该接口前，建议提示用户并获取应用注册该设备的授权。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.ACCESS_BLUETOOTH"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.FusionConnectivity.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束"
        })
      }), "： 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceAddress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#partneragentpartnerdeviceaddress",
              children: "PartnerDeviceAddress"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用注册的设备地址信息。  应用需配置PartnerDeviceAddress类型的bluetoothAddress选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceCapability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#partneragentdevicecapability",
              children: "DeviceCapability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["注册设备支持的能力。  - 配置", (0,jsx_runtime.jsx)(_components.a, {
              href: "#partneragentdevicecapability",
              children: "supportBR"
            }), "选项后，外设互通子系统将监听与该设备的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-network/connectivity-kit/terminology#acl",
              children: "ACL"
            }), "连接状态，一旦建立ACL连接，即视为成功发现该设备；  - 配置", (0,jsx_runtime.jsx)(_components.a, {
              href: "#partneragentdevicecapability",
              children: "supportBleAdvertiser"
            }), "选项后，系统将启动该设备的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-network/connectivity-kit/terminology#ble",
              children: "BLE"
            }), "扫描，扫描到该设备后，同样视为成功发现该设备。  注意：  为了减少系统功耗，若BLE扫描到该设备后，但应用在3分钟内未与该设备建立蓝牙连接，外设互通子系统将自动终止应用的PartnerAgentExtensionAbility进程。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "businessCapability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#partneragentbusinesscapability",
              children: "BusinessCapability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用注册设备的业务功能，包括媒体控制、通话控制。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "partnerAgentExtensionAbilityName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该参数需与应用模块级配置文件", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
              children: "module.json5"
            }), " 中的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file#extensionabilities%E6%A0%87%E7%AD%BE",
              children: "extensionabilities"
            }), " name属性值相同。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，无返回结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码说明文档"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts-errcode/errorcode-fusionconnectivity/errorcode-fusionconnectivity",
        children: "融合短距服务子系统错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "34900003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The device is not paired."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "34900004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The device has already been bound to the PartnerAgentExtensionAbility."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "34900005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bluetooth disabled."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "34900099"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { partnerAgent, common } from '@kit.ConnectivityKit';\ntry {\n  let btAddr: common.BluetoothAddress = {\n    \"address\": \"11:22:33:44:55:66\",\n    \"addressType\": common.BluetoothAddressType.REAL,\n  };\n  let deviceAddress: partnerAgent.PartnerDeviceAddress = {\n    \"bluetoothAddress\": btAddr,\n  };\n  let capability: partnerAgent.DeviceCapability = {\n    \"supportBR\": true,\n    \"supportBleAdvertiser\": true,\n  };\n  let businessCap: partnerAgent.BusinessCapability = {\n    \"supportMediaControl\": true,\n    \"supportTelephonyControl\": true,\n  };\n  partnerAgent.bindDevice(deviceAddress, capability, businessCap, \"testAbilityName\")\n    .then(() => {\n      console.info(`bind device success: ${btAddr.address}`);\n    })\n    .catch((err: BusinessError) => {\n      console.error(`errCode: ${err.code}, errMessage: ${err.message}`);\n    });\n} catch (err) {\n  console.error(`errCode: ${err.code}, errMessage: ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "partneragentunbinddevice",
      children: "partnerAgent.unbindDevice"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "unbindDevice(deviceAddress: PartnerDeviceAddress): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用解注册设备，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用本接口进行解注册后，应用的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/is-fusionconnectivity-partneragentextensionability/is-fusionconnectivity-partneragentextensionability",
          children: "PartnerAgentExtensionAbility"
        }), "进程将不再接收此设备的发现和下线状态通知。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用解注册的设备需是已通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "#partneragentbinddevice",
          children: "bindDevice"
        }), "接口注册过的设备，建议与bindDevice接口成对使用。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["建议使用前通过接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "#partneragentisdevicebound",
          children: "isDeviceBound"
        }), "判断设备是否已注册。若已注册，可调用该接口。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.ACCESS_BLUETOOTH"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.FusionConnectivity.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束"
        })
      }), "： 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceAddress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#partneragentpartnerdeviceaddress",
              children: "PartnerDeviceAddress"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用注册的设备地址信息。  应用必须配置PartnerDeviceAddress类型的bluetoothAddress选项。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，无返回结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码说明文档"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts-errcode/errorcode-fusionconnectivity/errorcode-fusionconnectivity",
        children: "融合短距服务子系统错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "34900001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The device is not bound."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "34900099"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { partnerAgent, common } from '@kit.ConnectivityKit';\ntry {\n  let btAddr: common.BluetoothAddress = {\n    \"address\": \"11:22:33:44:55:66\",\n    \"addressType\": common.BluetoothAddressType.REAL,\n  };\n  let deviceAddress: partnerAgent.PartnerDeviceAddress = {\n    \"bluetoothAddress\": btAddr,\n  };\n  partnerAgent.unbindDevice(deviceAddress)\n    .then(() => {\n      console.info(`unbind device success: ${btAddr.address}`);\n    })\n    .catch((err: BusinessError) => {\n      console.error(`errCode: ${err.code}, errMessage: ${err.message}`);\n    });\n} catch (err) {\n  console.error(`errCode: ${err.code}, errMessage: ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "partneragentisdevicebound",
      children: "partnerAgent.isDeviceBound"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isDeviceBound(deviceAddress: PartnerDeviceAddress): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断当前应用是否已注册过该设备。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#partneragentbinddevice",
          children: "bindDevice"
        }), "接口进行注册。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#partneragentunbinddevice",
          children: "unbindDevice"
        }), "接口进行解注册。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.ACCESS_BLUETOOTH"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.FusionConnectivity.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束"
        })
      }), "：此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceAddress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#partneragentpartnerdeviceaddress",
              children: "PartnerDeviceAddress"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用注册的设备地址信息。  应用需配置PartnerDeviceAddress类型的bluetoothAddress选项。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用是否注册过该设备。 true表示已注册设备，false表示未注册设备。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码说明文档"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts-errcode/errorcode-fusionconnectivity/errorcode-fusionconnectivity",
        children: "融合短距服务子系统错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "34900099"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { partnerAgent, common } from '@kit.ConnectivityKit';\ntry {\n  let btAddr: common.BluetoothAddress = {\n    \"address\": \"11:22:33:44:55:66\",\n    \"addressType\": common.BluetoothAddressType.REAL,\n  };\n  let deviceAddress: partnerAgent.PartnerDeviceAddress = {\n    \"bluetoothAddress\": btAddr,\n  };\n  let isBound = partnerAgent.isDeviceBound(deviceAddress);\n  console.info(`device is bound: ${isBound}`);\n} catch (err) {\n  console.error(`errCode: ${err.code}, errMessage: ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "partneragentgetbounddevices",
      children: "partnerAgent.getBoundDevices"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getBoundDevices(): PartnerDeviceAddress[]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取应用当前注册过的所有设备。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["可通过调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#partneragentbinddevice",
          children: "bindDevice"
        }), "接口注册设备。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.ACCESS_BLUETOOTH"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.FusionConnectivity.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束"
        })
      }), "： 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#partneragentpartnerdeviceaddress",
              children: "PartnerDeviceAddress"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用注册过的所有设备。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码说明文档"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts-errcode/errorcode-fusionconnectivity/errorcode-fusionconnectivity",
        children: "融合短距服务子系统错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "34900099"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { partnerAgent, common } from '@kit.ConnectivityKit';\ntry {\n  let devices = partnerAgent.getBoundDevices();\n  console.info(`bound devices: ${devices}`);\n} catch (err) {\n  console.error(`errCode: ${err.code}, errMessage: ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "partneragentisdevicecontrolenabled",
      children: "partnerAgent.isDeviceControlEnabled"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isDeviceControlEnabled(deviceAddress: PartnerDeviceAddress): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断当前设备的互通功能是否已经打开。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#partneragentbinddevice",
          children: "bindDevice"
        }), "接口注册设备后，设备的互通功能将默认开启，且可在系统设置应用设备详情页显示该功能已开启。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果该功能已关闭，可通过系统设置应用设备详情页信息互通功能开关使能该功能。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果系统设置应用设备详情页未显示此功能开关，请先调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#partneragentbinddevice",
          children: "bindDevice"
        }), "接口注册设备，之后此功能开关按钮会出现。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.ACCESS_BLUETOOTH"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.FusionConnectivity.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束"
        })
      }), "： 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceAddress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#partneragentpartnerdeviceaddress",
              children: "PartnerDeviceAddress"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用注册的设备地址信息。  应用需在PartnerDeviceAddress中设置bluetoothAddress字段值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示当前设备是否已经打开互通功能。true表示已打开，false表示未打开。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码说明文档"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts-errcode/errorcode-fusionconnectivity/errorcode-fusionconnectivity",
        children: "融合短距服务子系统错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "34900099"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { partnerAgent, common } from '@kit.ConnectivityKit';\ntry {\n  let btAddr: common.BluetoothAddress = {\n    \"address\": \"11:22:33:44:55:66\",\n    \"addressType\": common.BluetoothAddressType.REAL,\n  };\n  let deviceAddress: partnerAgent.PartnerDeviceAddress = {\n    \"bluetoothAddress\": btAddr,\n  };\n  let isEnabled = partnerAgent.isDeviceControlEnabled(deviceAddress);\n  console.info(`device control is enabled: ${isEnabled}`);\n} catch (err) {\n  console.error(`errCode: ${err.code}, errMessage: ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "partneragentdevicecapability",
      children: "partnerAgent.DeviceCapability"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述设备支持的被发现能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.FusionConnectivity.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束"
        })
      }), "： 此接口仅可在Stage模型下使用。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "supportBR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该设备是否支持通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-network/connectivity-kit/terminology#acl",
              children: "ACL"
            }), "连接的方式发现，建立ACL连接后会认为成功发现了该设备。发现设备后，会拉起", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/connectivity-api/connectivity-arkts/is-fusionconnectivity-partneragentextensionability/is-fusionconnectivity-partneragentextensionability",
              children: "PartnerAgentExtensionAbility"
            }), "进程，并调用进程中", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/connectivity-api/connectivity-arkts/is-fusionconnectivity-partneragentextensionability/is-fusionconnectivity-partneragentextensionability#ondevicediscovered",
              children: "onDeviceDiscovered"
            }), "方法。true表示支持通过连接的方式发现，false表示不支持通过连接的方式发现。未指定默认为false。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "supportBleAdvertiser"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该设备是否支持通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-network/connectivity-kit/terminology#ble",
              children: "BLE"
            }), "扫描的方式发现，扫描到该设备后会认为成功发现了该设备。发现设备后，会拉起PartnerAgentExtensionAbility进程，并调用进程中onDeviceDiscovered方法。true表示支持通过BLE扫描的方式发现，false表示不支持通过BLE扫描的方式发现。未指定默认为false。  注意：  选择", (0,jsx_runtime.jsx)(_components.a, {
              href: "#partneragentdevicecapability",
              children: "supportBleAdvertiser"
            }), "选项，若扫描到该设备，3min内无ACL连接，会调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/connectivity-api/connectivity-arkts/is-fusionconnectivity-partneragentextensionability/is-fusionconnectivity-partneragentextensionability#ondestroywithreason",
              children: "onDestroyWithReason"
            }), "并销毁已拉起的PartnerAgentExtensionAbility进程。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "partneragentbusinesscapability",
      children: "partnerAgent.BusinessCapability"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述设备支持的业务功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.FusionConnectivity.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束"
        })
      }), "： 此接口仅可在Stage模型下使用。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "supportMediaControl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该设备是否支持媒体控制功能，例如控制媒体播放、音量调节、上一首和下一首等功能。true表示支持，false表示不支持。未指定默认为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "supportTelephonyControl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该设备是否支持通话控制功能，如接听和挂断电话。 true表示支持，false表示不支持。未指定默认为false。  注意：  supportMediaControl和supportTelephonyControl均选择false时，", (0,jsx_runtime.jsx)(_components.a, {
              href: "#partneragentdevicecapability",
              children: "设备发现"
            }), "时不会拉起", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/connectivity-api/connectivity-arkts/is-fusionconnectivity-partneragentextensionability/is-fusionconnectivity-partneragentextensionability",
              children: "PartnerAgentExtensionAbility"
            }), "进程。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "partneragentpartnerdeviceaddress",
      children: "partnerAgent.PartnerDeviceAddress"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述设备地址信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.FusionConnectivity.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束"
        })
      }), "： 此接口仅可在Stage模型下使用。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bluetoothAddress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-common/js-apis-bluetooth-common#bluetoothaddress",
              children: "common.BluetoothAddress"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该设备的蓝牙地址信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "partneragentpartneragentextensionabilitydestroyreason",
      children: "partnerAgent.PartnerAgentExtensionAbilityDestroyReason"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举，PartnerAgentExtensionAbility被销毁的原因。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.FusionConnectivity.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束"
        })
      }), "： 此接口仅可在Stage模型下使用。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UNKNOWN_REASON"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统内部导致的未知原因，建议重试该操作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USER_CLOSED_ABILITY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户在系统设置应用关闭了该设备的信息互通功能，建议在系统设置应用开启该设备的信息互通功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEVICE_UNPAIRED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户取消了该设备的蓝牙配对关系，建议重新进行蓝牙配对流程。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEVICE_LOST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该设备已断开连接或未被发现，可能原因包括距离过长、设备关机、设备电量耗尽等，建议确认设备状态"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BLUETOOTH_DISABLED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "蓝牙被关闭，建议打开蓝牙"
          })]
        })]
      })]
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
157322(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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