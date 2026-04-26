"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["582119"], {
257907(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_connectivity_kit_connectivity_kit_intro_connectivity_kit_intro_md_319_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-connectivity-kit-connectivity-kit-intro-connectivity-kit-intro-md-319.json
var site_docs_system_network_connectivity_kit_connectivity_kit_intro_connectivity_kit_intro_md_319_namespaceObject = JSON.parse('{"id":"system-network/connectivity-kit/connectivity-kit-intro/connectivity-kit-intro","title":"Connectivity Kit简介","description":"Connectivity Kit开发概述","source":"@site/docs/system-network/connectivity-kit/connectivity-kit-intro/connectivity-kit-intro.md","sourceDirName":"system-network/connectivity-kit/connectivity-kit-intro","slug":"/system-network/connectivity-kit/connectivity-kit-intro/","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/connectivity-kit-intro/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Connectivity Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/connectivity-kit-intro","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"查询指定认证类型的认证冻结状态","permalink":"/harmonyos-docs-site/system-security/user-authentication-kit/user-authentication-dev/obtain-auth-lock-state-capabilities/"},"next":{"title":"蓝牙服务开发概述","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/bluetooth/bluetooth-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/connectivity-kit/connectivity-kit-intro/connectivity-kit-intro.md


const frontMatter = {
	title: 'Connectivity Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/connectivity-kit-intro',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = 'Connectivity Kit简介';

const assets = {

};



const toc = [{
  "value": "Connectivity Kit开发概述",
  "id": "connectivity-kit开发概述",
  "level": 2
}, {
  "value": "蓝牙简介",
  "id": "蓝牙简介",
  "level": 3
}, {
  "value": "WLAN简介",
  "id": "wlan简介",
  "level": 3
}, {
  "value": "NFC简介",
  "id": "nfc简介",
  "level": 3
}, {
  "value": "运作机制",
  "id": "运作机制",
  "level": 3
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "connectivity-kit简介",
        children: "Connectivity Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "connectivity-kit开发概述",
      children: "Connectivity Kit开发概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "移动终端设备已经深入人民日常生活的方方面面，如连接蓝牙耳机听音乐、连接WIFI上网、使用NFC进行一碰开门等已成为终端用户日常生活中常见的行为。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当用户处于这些丰富的使用场景中时，蓝牙提供基于蓝牙连接的基础能力，如音乐/通话/分享等，WIFI提供基础的无线连接能力，NFC提供基础的靠近刷卡和读卡能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于开发者，设计基础通信的体验服务，可以使应用的使用体验更贴近每个终端用户的日常生活。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "蓝牙简介",
      children: "蓝牙简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "蓝牙技术是一种无线通信技术，可以在短距离内传输数据，该技术规范由蓝牙技术联盟（Bluetooth Special Interest Group, SIG）制定。可以用于连接手机、耳机、音箱、键盘、鼠标、打印机等各种设备。特点是低功耗、低成本、简单易用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "蓝牙模块提供了多种API，适用于不同场景，助力开发者完成蓝牙相关开发。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "ACCESS模块"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["提供开启、关闭蓝牙和获取蓝牙开关状态等能力。使用蓝牙其他功能需要通过该模块打开蓝牙，在蓝牙已打开的情况下使用其他功能。具体内容可参考API ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-access/js-apis-bluetooth-access",
            children: "@ohos.bluetooth.access"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CONNECTION模块"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["提供蓝牙设备的发现、配对连接和获取本端及对端设备信息等能力。具体内容可参考API ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-connection/js-apis-bluetooth-connection",
            children: "@ohos.bluetooth.connection"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BLE模块"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["提供基于低功耗蓝牙（Bluetooth Low Energy）技术的蓝牙能力，可支持发现设备、发送广播报文、发现服务和传输数据等功能。具体内容可参考API ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-ble/js-apis-bluetooth-ble",
            children: "@ohos.bluetooth.ble"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SOCKET模块"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["提供基于串口通信协议（Serial Port Profile，SPP）实现蓝牙设备间通信连接和传输数据的能力。具体内容可参考API ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-socket/js-apis-bluetooth-socket",
            children: "@ohos.bluetooth.socket"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "A2DP模块"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["提供基于增强音频分发协议（Advanced Audio Distribution Profile，A2DP）实现蓝牙设备间通信连接和传输高品质音频的能力。例如：手机与耳机、音响等设备间传输音频流，实现听音乐的场景。具体内容可参考API ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-a2dp/js-apis-bluetooth-a2dp",
            children: "@ohos.bluetooth.a2dp"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HFP模块"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["提供基于免提协议（Hands-Free Profile，HFP）实现蓝牙设备间通信连接和免提通话的能力，可支持双向语音通话和控制等功能。具体内容可参考API ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-hfp/js-apis-bluetooth-hfp",
            children: "@ohos.bluetooth.hfp"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HID模块"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["提供基于人机接口协议（Human Interface Device Profile，HID）实现蓝牙设备间通信连接、无线控制和传输的能力。例如：支持键盘、鼠标、游戏手柄等设备与主机（如手机、平板和PC）间的低延迟双向通信。具体内容可参考API ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-hid/js-apis-bluetooth-hid",
            children: "@ohos.bluetooth.hid"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PAN模块"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["提供基于个人局域网协议（Personal Area Network，PAN）实现设备间网络共享的能力。例如：手机与PC间的互联网共享。具体内容可参考API ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-pan/js-apis-bluetooth-pan",
            children: "@ohos.bluetooth.pan"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MAP模块"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["提供基于消息访问协议（Message Access Profile，MAP）实现设备间消息共享的能力。例如：手机与车载间的短信数据同步。具体内容可参考API ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-map/js-apis-bluetooth-map",
            children: "@ohos.bluetooth.map"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PBAP模块"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["提供基于电话簿访问协议（Phone Book Access Profile）实现设备间电话簿数据共享的能力。例如：手机与车载间的联系人和通话记录的数据同步。具体内容可参考API ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-bluetooth-pbap/js-apis-bluetooth-pbap",
            children: "@ohos.bluetooth.pbap"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wlan简介",
      children: "WLAN简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无线局域网（Wireless Local Area Networks，WLAN），是通过无线电、红外光信号或者其他技术发送和接收数据的局域网，用户可以通过WLAN实现结点之间无物理连接的网络通讯。常用于用户携带可移动终端的办公、公众环境中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WLAN系统为用户提供接入WLAN网络功能（STA模式）、点对点的数据传输功能（P2P模式）和热点分享功能（AP模式），让应用可以通过WLAN和其他设备互联互通。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "STA模式"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["STA模式即工作站模式，可以理解为某网络中的一个工作站即客户端。当某设备具备该功能时，它可以连到另外的一个路由网络中，如家用路由器，通常用于提供网络的数据上行服务。详情请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-wifimanager/js-apis-wifimanager",
            children: "@ohos.wifiManager (WLAN)"
          }), "文档。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "P2P模式"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["P2P模式也是Wi-Fi Direct；Wi-Fi Direct是一种点对点连接技术，它可以在两台STA之间直接建立TCP/IP链接，并不需要AP的参与；其中一台STA会起到传统意义上的AP的作用，称为Group Owner(GO),另外一台station则称为Group Client(GC)，像连接AP一样连接到GO。详情请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-wifimanager/js-apis-wifimanager",
            children: "@ohos.wifiManager (WLAN)"
          }), "文档。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AP模式"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["AP模式为加入无线局域网的成员设备（即客户端）提供下行数据业务，它提供以无线方式组建无线局域网WLAN，相当于WLAN的中心设备。详情请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-wifimanager/js-apis-wifimanager",
            children: "@ohos.wifiManager (WLAN)"
          }), "文档。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nfc简介",
      children: "NFC简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NFC英文全称Near Field Communication，近距离无线通信。NFC服务提供NFC开关控制、NFC标签读写、NFC卡模拟等业务功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NFC开关控制"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["NFC开关模块，提供了打开NFC和关闭NFC功能。打开或关闭NFC的应用程序，需要声明权限\"ohos.permission.MANAGE_SECURE_SETTINGS\"，该权限只有系统应用才能声明。因此，只有系统应用才能打开或关闭NFC。详情请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-nfccontroller/js-apis-nfccontroller",
            children: "@ohos.nfc.controller (标准NFC)"
          }), "文档。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NFC标签读写"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["NFC标签读写模块，提供了NFC标签的发现和分发给应用程序，以及应用程序通过NFC标签读写接口访问NFC标签的能力。应用程序需要按照规定的格式来声明NFC标签读写能力，只有声明后应用程序才能收到NFC标签的分发。详情请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-nfctag/js-apis-nfctag",
            children: "@ohos.nfc.tag (标准NFC-Tag)"
          }), "文档。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NFC卡模拟"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["NFC卡模拟模块，提供了NFC的刷卡业务，电子设备和读卡器触碰完成刷卡。应用程序需要按照规定的格式来声明NFC卡模拟能力，只有声明后应用程序才能够具备刷卡能力。详情请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-cardemulation/js-apis-cardemulation",
            children: "@ohos.nfc.cardEmulation (标准NFC-cardEmulation)"
          }), "文档。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "运作机制",
      children: "运作机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Connectivity能力作为系统为应用提供的一种基础通信服务，需要在应用使用场景中打开相应开关/连接等处理，在业务结束时主动结束连接等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用设备的相关能力，需要用户主动授权打开开关。否则系统不会向三方应用提供服务。"
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