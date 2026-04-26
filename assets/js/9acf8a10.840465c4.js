"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["844201"], {
115112(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_network_kit_network_kit_network_connecttion_net_vpnextension_net_vpnextension_md_9ac_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-network-kit-network-kit-network-connecttion-net-vpnextension-net-vpnextension-md-9ac.json
var site_docs_system_network_network_kit_network_kit_network_connecttion_net_vpnextension_net_vpnextension_md_9ac_namespaceObject = JSON.parse('{"id":"system-network/network-kit/network-kit-network-connecttion/net-vpnextension/net-vpnextension","title":"连接VPN","description":"简介","source":"@site/docs/system-network/network-kit/network-kit-network-connecttion/net-vpnextension/net-vpnextension.md","sourceDirName":"system-network/network-kit/network-kit-network-connecttion/net-vpnextension","slug":"/system-network/network-kit/network-kit-network-connecttion/net-vpnextension/","permalink":"/harmonyos-docs-site/system-network/network-kit/network-kit-network-connecttion/net-vpnextension/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"连接VPN","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/net-vpnextension","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"管理网络连接(C/C++)","permalink":"/harmonyos-docs-site/system-network/network-kit/network-kit-network-connecttion/native-netmanager-guidelines/"},"next":{"title":"统计网络流量消耗","permalink":"/harmonyos-docs-site/system-network/network-kit/network-kit-network-management/net-statistics/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/network-kit/network-kit-network-connecttion/net-vpnextension/net-vpnextension.md


const frontMatter = {
	title: '连接VPN',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/net-vpnextension',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '连接VPN';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "VPN应用的显示体验",
  "id": "vpn应用的显示体验",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "创建VPN Extension Ability",
  "id": "创建vpn-extension-ability",
  "level": 3
}, {
  "value": "启动VPN Extension Ability",
  "id": "启动vpn-extension-ability",
  "level": 3
}, {
  "value": "停止VPN Extension Ability",
  "id": "停止vpn-extension-ability",
  "level": 3
}, {
  "value": "生成VPN Id",
  "id": "生成vpn-id",
  "level": 3
}, {
  "value": "断开VPN",
  "id": "断开vpn",
  "level": 3
}, {
  "value": "服务生命周期",
  "id": "服务生命周期",
  "level": 2
}, {
  "value": "VPN Config参数说明",
  "id": "vpn-config参数说明",
  "level": 2
}, {
  "value": "VPN Demo示例",
  "id": "vpn-demo示例",
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
        id: "连接vpn",
        children: "连接VPN"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VPN，即虚拟专用网络（Virtual Private Network），是在公用网络上建立专用网络的一种技术。在VPN网络中，任意两个节点间的连接并非依赖传统专用网络所需要的端到端的物理链路，而是构建在公用网络服务商提供的平台（如Internet）之上的逻辑网络。用户数据在这一逻辑链路中进行传输。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS为开发者提供了用于创建VPN的API解决方案。当前提供三方VPN能力主要用于创建虚拟网卡及配置VPN路由信息，连接隧道过程及内部连接的协议需要应用内部自行实现。本文将指导您如何开发自己的VPN客户端。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(646030)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["为了保证应用的运行效率，所有API调用都是异步的，对于异步调用的API均提供了Promise的方式，以下示例均采用Promise方式，更多方式可以查阅", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-vpnextension/js-apis-net-vpnextension",
          children: "@ohos.net.vpnExtension (VPN增强管理)"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["完整的JS API说明以及示例代码请参考：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-vpnextension/js-apis-net-vpnextension",
          children: "@ohos.net.vpnExtension (VPN增强管理)"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用该功能需要", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/app-permissions/permissions-for-all#ohospermissioninternet",
          children: "ohos.permission.INTERNET"
        }), "权限。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vpn应用的显示体验",
      children: "VPN应用的显示体验"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["借助系统提供的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-vpnextension/js-apis-net-vpnextension",
        children: "VPN Extension"
      }), "接口开发者可以构建支持不同协议的VPN服务。HarmonyOS系统提供了界面 (UI) 使用户可以了解当前VPN应用服务的启动和连接："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在VPN应用首次启动连接之前，系统会显示VPN连接授权对话框。该对话框会提示用户是否信任该VPN应用并接受VPN连接请求。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当VPN启动连接成功时，状态栏显示一个VPN (钥匙) 图标以提醒用户VPN处于连接状态。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了使用户可以方便的查看和配置，您的VPN应用还需要提供以下界面："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用于手动启动和停止连接的控件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当VPN启动连接时，在通知栏显示VPN应用的连接状态或提供网络统计信息 (如连接时长、流量等) 。点击该通知能够将您的VPN应用调入前台。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建vpn-extension-ability",
      children: "创建VPN Extension Ability"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果想使您的应用支持VPN能力，首先您需要创建一个继承于VpnExtensionAbility的extensionAbilities。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 举例：在应用的module.json5中定义MyVpnExtAbility。\n\"extensionAbilities\": [\n// ···\n  {\n    \"name\": \"MyVpnExtAbility\",\n    \"srcEntry\": \"./ets/vpnability/VPNExtentionAbility.ets\",\n    \"type\": \"vpn\"\n  }\n],\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(695905)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果DevEco Studio工具提示不能识别\"type\": \"vpn\"，需要您手动在SDK的toolchains\\modulecheck\\module.json文件中，给extensionAbilities对应的type枚举添加\"vpn\"定义，并清除build缓存和重启DevEco Studio工具。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接下来您需要在创建的VpnExtensionAbility中实现VPN的配置、启动和停止操作："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["建立一个VPN的网络隧道，以UDP隧道为例（参考本文下方VPN Demo示例工程文件", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/NetWork_Kit/NetWorkKit_NetManager/VPNControl_Case/entry/src/main/cpp/napi_init.cpp",
          children: "napi_init"
        }), "的UdpConnect()方法）；"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过VpnConnection.", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-vpnextension/js-apis-net-vpnextension#protect",
          children: "protect"
        }), "保护前一步建立的UDP隧道；"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["构建VPN Config参数，参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#vpn-config%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E",
          children: "VPN Config参数说明"
        }), "；"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过VpnConnection.", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-vpnextension/js-apis-net-vpnextension#create",
          children: "create"
        }), "建立VPN网络连接；"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "处理虚拟网卡的数据，如：读写操作。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "启动vpn-extension-ability",
      children: "启动VPN Extension Ability"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当VPN应用启动VPN连接时，需要调用startVpnExtensionAbility接口，携带需要启动的VpnExtensionAbility信息，其中bundleName需要与您的VPN应用bundleName一致，abilityName为您在前面创建的VpnExtensionAbility名。您可参考如下示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common, Want } from '@kit.AbilityKit';\nimport { vpnExtension } from '@kit.NetworkKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n// ···\n\nconst TITLE_FONT_SIZE = 35; // 标题字体大小\nconst BUTTON_FONT_SIZE = 25; // 按钮字体大小\nconst BUTTON_MARGIN = 16;\n\nlet want: Want = {\n  deviceId: '',\n  bundleName: 'com.samples.vpncontrol_case',\n  abilityName: 'MyVpnExtAbility',\n};\n\n@Entry\n@Component\nstruct StartVpn {\n  @State message: string = 'VPN';\n// ···\n  build() {\n    Row() {\n      Column() {\n        // ···\n        Text(this.message)\n          .fontSize(TITLE_FONT_SIZE)\n          .fontWeight(FontWeight.Bold)\n        // ···\n          .onClick(() => {\n            hilog.info(0x0000, 'testTag', 'developTag', '%{public}s', 'vpn Client');\n          })\n        // ···\n        Button($r('app.string.start_vpnExt'))\n          .onClick(() => {\n            // ···\n              vpnExtension.startVpnExtensionAbility(want)\n            // ···\n          })\n          .width('70%')\n        // ···\n          .fontSize(BUTTON_FONT_SIZE)\n          .margin(BUTTON_MARGIN)\n        // ···\n      }.width('100%');\n    }.height('100%');\n\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果您的VPN应用未获取用户信任，系统将弹出VPN连接的授权对话框，当获取用户授权后，系统将自动调用并启动您实现的VPN Extension Ability的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-vpnextensionability/js-apis-vpnextensionability#vpnextensionabilityoncreate",
        children: "onCreate"
      }), "方法将被调用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前系统仅支持启动一个VPN连接服务，当VPN已经启动时应用新调用启动接口会收到系统拒绝错误，此时建议您的应用可以提醒用户先断开当前已经激活的VPN应用连接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "停止vpn-extension-ability",
      children: "停止VPN Extension Ability"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当VPN应用需要停止VPN连接时，需要调用stopVpnExtensionAbility接口，携带需要停止的VpnExtensionAbility信息。系统会对调用方做权限校验，stopVpnExtensionAbility的调用方应用必须获取了用户的VPN信任授权，且只允许停止应用自己启动的VpnExtensionAbility，所以接口传入的参数中bundleName需要与您的VPN应用bundleName一致，abilityName为指定停止VPN的VpnExtensionAbility名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "您可参考如下示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common, Want } from '@kit.AbilityKit';\nimport { vpnExtension } from '@kit.NetworkKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const TITLE_FONT_SIZE = 35; // 标题字体大小\nconst BUTTON_FONT_SIZE = 25; // 按钮字体大小\nconst BUTTON_MARGIN = 16;\n\nlet want: Want = {\n  deviceId: '',\n  bundleName: 'com.samples.vpncontrol_case',\n  abilityName: 'MyVpnExtAbility',\n};\n\n@Entry\n@Component\nstruct StopVpn {\n  @State message: string = 'VPN';\n\n  // ...\n  build() {\n    Row() {\n      Column() {\n        // ...\n        Text(this.message)\n          .fontSize(TITLE_FONT_SIZE)\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            hilog.info(0x0000, 'testTag', 'developTag', '%{public}s', 'vpn Client');\n          })\n        // ...\n        Button('Start Extension').onClick(() => {\n          vpnExtension.startVpnExtensionAbility(want);\n        }).width('70%').fontSize(20).margin(16);\n        Button($r('app.string.stop_vpnExt'))\n          .onClick(() => {\n            try {\n              hilog.info(0x0000, 'testTag', 'btn end')\n              vpnExtension.stopVpnExtensionAbility(want)\n              // ...\n            } catch (err) {\n              // ...\n              hilog.error(0x0000, 'testTag', 'developTag', 'stop vpnExt Fail %{public}s', JSON.stringify(err) ?? '');\n            }\n\n          })\n          .width('70%')\n          // ...\n          .fontSize(BUTTON_FONT_SIZE)\n          .margin(BUTTON_MARGIN)\n      }.width('100%');\n    }.height('100%');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["stopVpnExtensionAbility后，您的VPN Extension Ability的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-vpnextensionability/js-apis-vpnextensionability#vpnextensionabilityondestroy",
        children: "onDestroy"
      }), "方法将被调用，您可在此时destroy vpn连接。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "private context = this.getUIContext().getHostContext() as common.VpnExtensionContext;\nprivate vpnConnection: vpnExtension.VpnConnection = vpnExtension.createVpnConnection(this.context);\n\nDestroy() {\n  hilog.info(0x0000, 'testTag', 'developTag', '%{public}s', 'vpn Destroy');\n  // ...\n  this.vpnConnection.destroy().then(() => {\n    hilog.info(0x0000, 'testTag', 'developTag', '%{public}s', 'vpn Destroy Success');\n    // ...\n  }).catch((err: Error) => {\n     hilog.error(0x0000, 'testTag', 'developTag', 'vpn Destroy Failed: %{public}s', JSON.stringify(err) ?? '');\n    // ...\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "生成vpn-id",
      children: "生成VPN Id"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建新的VPN时，应生成一个VPN Id作为VPN的唯一标识。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可参考如下示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { vpnExtension, VpnExtensionAbility } from '@kit.NetworkKit';\n// ...\nexport class VpnTest extends VpnExtensionAbility {\n  public vpnId: string = '';\n  // ...\n  getVpnId() {\n    // ...\n      let vpnConnection = vpnExtension.createVpnConnection(this.context);\n      vpnConnection?.generateVpnId().then((data) => {\n        if (data) {\n          this.vpnId = data;\n        }\n      });\n    // ...\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "断开vpn",
      children: "断开VPN"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若需断开VPN，可参考如下示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { vpnExtension, VpnExtensionAbility } from '@kit.NetworkKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n// ...\nexport class VpnTest extends VpnExtensionAbility {\n  public vpnId: string = 'test_vpn_id';\n  public vpnConnection: vpnExtension.VpnConnection | undefined;\n  // ...\n  destroy() {\n    // ...\n      this.vpnConnection = vpnExtension.createVpnConnection(this.context);\n      hilog.info(0x0000, 'testTag', 'create success');\n      this.vpnConnection?.destroy(this.vpnId);\n      // ...\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "服务生命周期",
      children: "服务生命周期"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了保障设备的网络连接，当系统观察到VPN相关应用出现异常时会主动停止VPN连接："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当调用startVpnExtensionAbility接口的应用进程退出时。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当VPN服务进程销毁时。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vpn-config参数说明",
      children: "VPN Config参数说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "addresses"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-connection/js-apis-net-connection#linkaddress",
              children: "LinkAddress"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPN虚拟网卡的IP地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "routes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-connection/js-apis-net-connection#routeinfo",
              children: "RouteInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VPN虚拟网卡的路由信息(目前最多可配置1024条路由)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dnsAddresses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS服务器地址信息。配置DNS服务器地址后，VPN启动状态下，被代理的应用上网时，使用配置的DNS服务器进行DNS查询。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "searchDomains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS的搜索域列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mtu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最大传输单元MTU值(单位：字节)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isIPv4Accepted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持IPV4，默认值为true。true：支持IPV4；false：不支持IPV4。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isIPv6Accepted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持IPV6，默认值为false。true：支持IPV6；false：不支持IPV6。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isInternal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持内置VPN，默认值为false。true：支持内置VPN；false：不支持内置VPN。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isBlocking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否阻塞模式，默认值为false。true：是阻塞模式；false：不是阻塞模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "trustedApplications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "受信任的应用信息列表，以string类型表示的包名。配置此列表后，仅列表中的应用数据才能根据routes被VPN代理。  注：trustedApplications和blockedApplications列表不能同时配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "blockedApplications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "被阻止的应用信息列表，string类型表示的包名。当配置该列表后，该列表中的应用数据不会被VPN代理，其他应用可以根据routes配置被VPN代理。  注：trustedApplications和blockedApplications列表不能同时配置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { vpnExtension } from '@kit.NetworkKit';\nimport { common } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let vpnConfig: vpnExtension.VpnConfig = {\n  // 配置VPN虚拟网卡的IP地址。\n  addresses: [{\n    address: {\n      address:'192.x.x.5',\n      family:1\n    },\n    prefixLength:24\n  }],\n  // 配置路由参数。\n  routes: [{\n    // VPN虚拟网卡接口名固定为“vpn-tun”。\n    interface: 'vpn-tun',\n    destination: {\n      address: {\n        address:'10.x.x.8',\n        family:1,\n        port:8080\n      },\n      prefixLength:24\n    },\n    gateway: {\n      address:'10.x.x.5',\n      family:1,\n      port:8080\n    },\n    hasGateway: false,\n    isDefaultRoute: false,\n  }],\n  // 配置最大传输单元值。\n  mtu: 1400,\n  // 配置VPN使用的DNS服务器。\n  dnsAddresses: ['223.x.x.5', '223.x.x.6'],\n  // 受信任的应用信息列表。\n  trustedApplications: ['com.test.browser'],\n  // 被阻止的应用信息列表。\n  blockedApplications: ['com.test.games'],\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let context = this.getUIContext().getHostContext() as common.VpnExtensionContext;\nlet vpnConnection: vpnExtension.VpnConnection = vpnExtension.createVpnConnection(context);\n// 创建 VPN 连接并应用配置\nvpnConnection.create(vpnConfig).then((data) => {\n  hilog.info(0x0000, 'testTag', 'vpn create ' + JSON.stringify(data));\n  // ...\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vpn-demo示例",
      children: "VPN Demo示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HarmonyOS开源项目包含一个名为", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/DocsSample/NetWork_Kit/NetWorkKit_NetManager/VPNControl_Case",
        children: "VPN"
      }), "的示例应用。此应用展示了如何设置和连接 VPN 服务。"]
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
646030(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
695905(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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