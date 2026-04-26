"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["560364"], {
338210(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_network_api_connectivity_api_connectivity_arkts_js_apis_bluetooth_constant_js_apis_bluetooth_constant_md_fba_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-network-api-connectivity-api-connectivity-arkts-js-apis-bluetooth-constant-js-apis-bluetooth-constant-md-fba.json
var site_docs_ref_system_network_api_connectivity_api_connectivity_arkts_js_apis_bluetooth_constant_js_apis_bluetooth_constant_md_fba_namespaceObject = JSON.parse('{"id":"system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-constant/js-apis-bluetooth-constant","title":"@ohos.bluetooth.constant (蓝牙constant模块)","description":"本模块提供了蓝牙Profile、设备类型相关的常量定义。","source":"@site/docs-ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-constant/js-apis-bluetooth-constant.md","sourceDirName":"system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-constant","slug":"/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-constant/js-apis-bluetooth-constant","permalink":"/harmonyos-docs-site/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-constant/js-apis-bluetooth-constant","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"@ohos.bluetooth.constant (蓝牙constant模块)","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bluetooth-constant","kit":"系统","last_updated":"2026-04-22","slug":"js-apis-bluetooth-constant"},"sidebar":"ref","previous":{"title":"@ohos.bluetooth.connection (蓝牙connection模块)","permalink":"/harmonyos-docs-site/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-connection/js-apis-bluetooth-connection"},"next":{"title":"@ohos.bluetooth.common (蓝牙common模块)","permalink":"/harmonyos-docs-site/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-common/js-apis-bluetooth-common"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-constant/js-apis-bluetooth-constant.md


const frontMatter = {
	title: '@ohos.bluetooth.constant (蓝牙constant模块)',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bluetooth-constant',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'js-apis-bluetooth-constant'
};
const contentTitle = '@ohos.bluetooth.constant (蓝牙constant模块)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "ProfileId",
  "id": "profileid",
  "level": 2
}, {
  "value": "ProfileConnectionState",
  "id": "profileconnectionstate",
  "level": 2
}, {
  "value": "MajorClass",
  "id": "majorclass",
  "level": 2
}, {
  "value": "MajorMinorClass",
  "id": "majorminorclass",
  "level": 2
}, {
  "value": "ProfileUuids12+",
  "id": "profileuuids12",
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
    p: "p",
    pre: "pre",
    strong: "strong",
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
        id: "ohosbluetoothconstant-蓝牙constant模块",
        children: "@ohos.bluetooth.constant (蓝牙constant模块)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本模块提供了蓝牙", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-network/connectivity-kit/terminology#profile",
        children: "Profile"
      }), "、设备类型相关的常量定义。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(158577)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { constant } from '@kit.ConnectivityKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "profileid",
      children: "ProfileId"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["枚举，表示蓝牙", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-network/connectivity-kit/terminology#profile",
        children: "Profile"
      }), "协议的标识。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.Bluetooth.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "PROFILE_A2DP_SOURCE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/system-network/connectivity-kit/terminology#a2dp-source",
              children: "A2DP Source"
            }), " Profile，负责发送音频数据端使用的协议。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PROFILE_HANDSFREE_AUDIO_GATEWAY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/system-network/connectivity-kit/terminology#hfp-ag",
              children: "HFP Ag"
            }), " Profile，负责通话音频网关使用的协议。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PROFILE_HID_HOST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/system-network/connectivity-kit/terminology#hid-host",
              children: "HID Host"
            }), " Profile，负责与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-network/connectivity-kit/terminology#hid-device",
              children: "HID Device"
            }), "建立通信并处理数据交互的协议。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PROFILE_PAN_NETWORK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/system-network/connectivity-kit/terminology#nap",
              children: "NAP"
            }), " Profile，负责提供网络共享端使用的协议。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "profileconnectionstate",
      children: "ProfileConnectionState"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举，本端和对端蓝牙设备间的Profile连接状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.Bluetooth.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "STATE_DISCONNECTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示Profile已断开连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STATE_CONNECTING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示Profile正在连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STATE_CONNECTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示Profile已连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "STATE_DISCONNECTING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示Profile正在断开连接。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "majorclass",
      children: "MajorClass"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举，蓝牙设备的主要类型。蓝牙标准协议字段。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.Bluetooth.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "MAJOR_MISC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示不属于其他标准类别的杂项设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAJOR_COMPUTER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示计算机设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAJOR_PHONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示手机设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAJOR_NETWORKING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0300"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示局域网/网络接入点设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAJOR_AUDIO_VIDEO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示音频/视频设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAJOR_PERIPHERAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示外围设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAJOR_IMAGING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0600"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示成像设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAJOR_WEARABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0700"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示可穿戴设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAJOR_TOY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0800"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示玩具设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAJOR_HEALTH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0900"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示健康设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAJOR_UNCATEGORIZED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x1F00"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示未分类设备。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "majorminorclass",
      children: "MajorMinorClass"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["枚举，蓝牙设备的子类型，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#majorclass",
        children: "MajorClass"
      }), "基础上进一步细分的类型。蓝牙标准协议字段。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.Bluetooth.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "COMPUTER_UNCATEGORIZED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示未分类计算机设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COMPUTER_DESKTOP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0104"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示台式计算机设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COMPUTER_SERVER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0108"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示服务器设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COMPUTER_LAPTOP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x010C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示便携式计算机设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COMPUTER_HANDHELD_PC_PDA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0110"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示手持式计算机设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COMPUTER_PALM_SIZE_PC_PDA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0114"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示掌上电脑设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COMPUTER_WEARABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0118"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示可穿戴计算机设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COMPUTER_TABLET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x011C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示平板电脑设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PHONE_UNCATEGORIZED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示未分类手机设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PHONE_CELLULAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0204"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示便携式手机设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PHONE_CORDLESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0208"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示无线电话设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PHONE_SMART"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x020C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示智能手机设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PHONE_MODEM_OR_GATEWAY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0210"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示调制解调器或网关手机设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PHONE_ISDN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0214"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示ISDN手机设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETWORK_FULLY_AVAILABLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0300"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示网络负载占用率0%的网络设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETWORK_1_TO_17_UTILIZED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0320"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示网络负载占用率1%~17%的网络设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETWORK_17_TO_33_UTILIZED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0340"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示网络负载占用率17%~33%的网络设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETWORK_33_TO_50_UTILIZED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0360"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示网络负载占用率33%~50%的网络设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETWORK_60_TO_67_UTILIZED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0380"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示网络负载占用率60%~67%的网络设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETWORK_67_TO_83_UTILIZED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x03A0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示网络负载占用率67%~83%的网络设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETWORK_83_TO_99_UTILIZED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x03C0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示网络负载占用率83%~99%的网络设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NETWORK_NO_SERVICE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x03E0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示网络负载占用率100%的网络设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_VIDEO_UNCATEGORIZED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示未分类音频/视频设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_VIDEO_WEARABLE_HEADSET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0404"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示可穿戴式音频/视频设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_VIDEO_HANDSFREE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0408"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示免提音频/视频设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_VIDEO_MICROPHONE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0410"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示麦克风音频/视频设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_VIDEO_LOUDSPEAKER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0414"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示扬声器音频/视频设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_VIDEO_HEADPHONES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0418"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示头戴式音频/视频设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_VIDEO_PORTABLE_AUDIO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x041C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示便携式音频/视频设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_VIDEO_CAR_AUDIO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0420"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示汽车音频/视频设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_VIDEO_SET_TOP_BOX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0424"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示机顶盒音频/视频设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_VIDEO_HIFI_AUDIO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0428"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示高保真音频/视频设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_VIDEO_VCR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x042C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示录像机音频/视频设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_VIDEO_VIDEO_CAMERA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0430"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示照相机视频设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_VIDEO_CAMCORDER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0434"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示摄像机音频/视频设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_VIDEO_VIDEO_MONITOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0438"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示监视器视频设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_VIDEO_VIDEO_DISPLAY_AND_LOUDSPEAKER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x043C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示具备显示和扬声器的视频设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_VIDEO_VIDEO_CONFERENCING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0440"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示会议视频设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AUDIO_VIDEO_VIDEO_GAMING_TOY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0448"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示游戏玩具视频设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PERIPHERAL_NON_KEYBOARD_NON_POINTING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示非键盘非指向外围设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PERIPHERAL_KEYBOARD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0540"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示外设键盘设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PERIPHERAL_POINTING_DEVICE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0580"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示定点装置外围设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PERIPHERAL_KEYBOARD_POINTING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x05C0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示键盘指向外围设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PERIPHERAL_UNCATEGORIZED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示未分类外围设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PERIPHERAL_JOYSTICK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0504"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示周边操纵杆设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PERIPHERAL_GAMEPAD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0508"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示周边游戏板设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PERIPHERAL_REMOTE_CONTROL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x05C0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示远程控制外围设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PERIPHERAL_SENSING_DEVICE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0510"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示外围传感设备设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PERIPHERAL_DIGITIZER_TABLET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0514"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示外围数字化仪平板电脑设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PERIPHERAL_CARD_READER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0518"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示外围读卡器设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PERIPHERAL_DIGITAL_PEN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x051C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示外设数码笔设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PERIPHERAL_SCANNER_RFID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0520"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示射频识别扫描仪外围设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PERIPHERAL_GESTURAL_INPUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0522"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示手势输入外围设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGING_UNCATEGORIZED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0600"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示未分类的图像设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGING_DISPLAY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0610"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示图像显示设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGING_CAMERA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0620"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示成像照相机设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGING_SCANNER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0640"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示成像扫描仪设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGING_PRINTER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0680"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示成像打印机设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEARABLE_UNCATEGORIZED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0700"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示未分类的可穿戴设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEARABLE_WRIST_WATCH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0704"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示可穿戴腕表设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEARABLE_PAGER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0708"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示可穿戴寻呼机设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEARABLE_JACKET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x070C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示可穿戴夹克设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEARABLE_HELMET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0710"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示可穿戴头盔设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEARABLE_GLASSES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0714"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示可穿戴眼镜设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOY_UNCATEGORIZED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0800"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示未分类的玩具设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOY_ROBOT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0804"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示玩具机器人设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOY_VEHICLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0808"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示玩具车设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOY_DOLL_ACTION_FIGURE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x080C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示人形娃娃玩具设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOY_CONTROLLER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0810"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示玩具控制器设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TOY_GAME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0814"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示玩具游戏设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_UNCATEGORIZED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0900"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示未分类健康设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_BLOOD_PRESSURE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0904"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示血压健康设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_THERMOMETER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0908"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示温度计健康设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_WEIGHING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x090C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示体重健康设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_GLUCOSE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0910"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示葡萄糖健康设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_PULSE_OXIMETER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0914"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示脉搏血氧仪健康设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_PULSE_RATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0918"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示脉搏率健康设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_DATA_DISPLAY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x091C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示数据显示健康设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_STEP_COUNTER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0920"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示阶梯计数器健康设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_BODY_COMPOSITION_ANALYZER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0924"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示身体成分分析仪健康设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_PEAK_FLOW_MONITOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0928"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示湿度计健康设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_MEDICATION_MONITOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x092C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示药物监视仪健康设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_KNEE_PROSTHESIS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0930"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示膝盖假肢健康设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_ANKLE_PROSTHESIS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0934"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示脚踝假肢健康设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_GENERIC_HEALTH_MANAGER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0938"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示通用健康管理设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_PERSONAL_MOBILITY_DEVICE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x093C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示个人移动健康设备。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "profileuuids12",
      children: "ProfileUuids12+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["枚举，由蓝牙技术联盟（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-network/connectivity-kit/terminology#bluetooth-sig",
        children: "Bluetooth Special Interest Group"
      }), "）定义，使用通用唯一标识（Universally Unique Identifier，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-network/connectivity-kit/terminology#uuid",
        children: "UUID"
      }), "）表示不同的蓝牙协议Profile。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.Bluetooth.Core"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "PROFILE_UUID_HFP_AG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'0000111F-0000-1000-8000-00805F9B34FB'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示Hands-Free Audio Gateway Profile。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PROFILE_UUID_HFP_HF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'0000111E-0000-1000-8000-00805F9B34FB'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示Hands-Free Profile。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PROFILE_UUID_HSP_AG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'00001112-0000-1000-8000-00805F9B34FB'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示Headset Audio Gateway Profile。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PROFILE_UUID_HSP_HS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'00001108-0000-1000-8000-00805F9B34FB'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示Headset Profile。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PROFILE_UUID_A2DP_SRC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'0000110A-0000-1000-8000-00805F9B34FB'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示A2DP Source Profile。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PROFILE_UUID_A2DP_SINK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'0000110B-0000-1000-8000-00805F9B34FB'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示A2DP Sink Profile。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PROFILE_UUID_AVRCP_CT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'0000110E-0000-1000-8000-00805F9B34FB'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示AVRCP Controller Profile。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PROFILE_UUID_AVRCP_TG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'0000110C-0000-1000-8000-00805F9B34FB'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示AVRCP Target Profile。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PROFILE_UUID_HID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'00001124-0000-1000-8000-00805F9B34FB'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示HID Profile。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PROFILE_UUID_HOGP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'00001812-0000-1000-8000-00805F9B34FB'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示HID over GATT Profile。"
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
158577(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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