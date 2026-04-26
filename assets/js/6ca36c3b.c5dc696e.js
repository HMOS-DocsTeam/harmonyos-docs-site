"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["194697"], {
95915(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_connectivity_kit_nfc_nfc_hce_guide_nfc_hce_guide_md_6ca_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-connectivity-kit-nfc-nfc-hce-guide-nfc-hce-guide-md-6ca.json
var site_docs_system_network_connectivity_kit_nfc_nfc_hce_guide_nfc_hce_guide_md_6ca_namespaceObject = JSON.parse('{"id":"system-network/connectivity-kit/nfc/nfc-hce-guide/nfc-hce-guide","title":"HCE卡模拟开发指南","description":"简介","source":"@site/docs/system-network/connectivity-kit/nfc/nfc-hce-guide/nfc-hce-guide.md","sourceDirName":"system-network/connectivity-kit/nfc/nfc-hce-guide","slug":"/system-network/connectivity-kit/nfc/nfc-hce-guide/","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/nfc/nfc-hce-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"HCE卡模拟开发指南","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/nfc-hce-guide","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"NFC标签读写开发指南","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/nfc/nfc-tag-access-guide/"},"next":{"title":"安全单元访问开发指南","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/nfc/nfc-se-access-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/connectivity-kit/nfc/nfc-hce-guide/nfc-hce-guide.md


const frontMatter = {
	title: 'HCE卡模拟开发指南',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/nfc-hce-guide',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = 'HCE卡模拟开发指南';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "HCE应用刷卡的约束条件",
  "id": "hce应用刷卡的约束条件",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发准备",
  "id": "开发准备",
  "level": 2
}, {
  "value": "HCE应用支持前台或后台刷卡的选择",
  "id": "hce应用支持前台或后台刷卡的选择",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "HCE应用前台刷卡",
  "id": "hce应用前台刷卡",
  "level": 3
}, {
  "value": "HCE应用后台刷卡",
  "id": "hce应用后台刷卡",
  "level": 3
}, {
  "value": "OFFHOST应用刷卡",
  "id": "offhost应用刷卡",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "hce卡模拟开发指南",
        children: "HCE卡模拟开发指南"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "近场通信(Near Field Communication，NFC)是一种短距高频的无线电技术，在13.56MHz频率运行，通信距离一般在10厘米距离内。HCE(Host Card Emulation)，称为基于主机的卡模拟，表示不依赖安全单元芯片，电子设备上的应用程序模拟NFC卡片和NFC读卡器通信，实现NFC刷卡业务。从API version 22开始支持OFFHOST(Off Host Card Emulation)，称为基于安全单元的卡模拟，卡由设备中的一个单独芯片(称为安全单元)进行模拟。无线运营商部分SIM卡也包含安全单元。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用程序模拟NFC卡片，和NFC读卡器通信完成NFC刷卡业务。从使用场景上，可以分成HCE应用前台刷卡和HCE应用后台刷卡。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HCE应用前台刷卡"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "前台刷卡是指在触碰NFC读卡器之前，用户明确想使用在电子设备上打开特定的应用程序和NFC读卡器进行刷卡操作。当用户打开应用程序在前台，并且进入应用的刷卡页面时，电子设备触碰NFC读卡器后，会把刷卡交易数据分发给前台应用。若应用切换至后台或退出运行时，前台优先分发规则也随即被暂停。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HCE应用后台刷卡"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "后台刷卡是指不打开特定的HCE应用程序，当电子设备触碰NFC读卡器时，根据NFC读卡器选择的应用ID（Applet ID，AID，参考ISO/IEC 7816-4规范）匹配到HCE应用程序，并自动和匹配的HCE应用程序通信完成刷卡交易。如果NFC读卡器选择的应用ID，匹配到多个HCE应用程序时，说明存在冲突，需要用户打开指定的HCE应用，重新靠近NFC读卡器触发刷卡。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "安全单元模拟NFC卡片，和NFC读卡器完成NFC刷卡业务。要模拟的卡片通过应用配置到安全单元中，当电子设备触碰到NFC读卡器时，数据不经过设备CPU处理，而是直接发送到安全单元，完成刷卡。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hce应用刷卡的约束条件",
      children: "HCE应用刷卡的约束条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "基于刷卡安全性考虑，不论HCE应用是前台方式还是后台方式刷卡，均不支持电子设备在灭屏或熄屏状态下的HCE刷卡操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "电子设备必须具备NFC控制器芯片，才支持HCE刷卡能力。对于是否具有NFC安全单元芯片，没有约束要求。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HCE应用程序需要声明NFC卡模拟权限，具体见示例。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["NFC卡模拟完整的API说明以及实例代码请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-cardemulation/js-apis-cardemulation",
        children: "NFC卡模拟接口"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "完成HCE卡模拟功能，需要使用到下面的接口。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持版本"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "功能描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hasHceCapability(): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 9开始支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断设备是否支持HCE卡模拟功能。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isDefaultService(elementName: ElementName, type: CardType): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 9开始支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断指定的应用是否为指定业务类型的默认应用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "start(elementName: ElementName, aidList: string[]): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 9开始支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "启动HCE业务功能。包括设置当前应用为前台优先，动态注册AID列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stop(elementName: ElementName): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 9开始支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止HCE业务功能。包括取消APDU数据接收的订阅、退出当前应用前台优先、释放动态注册的AID列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'hceCmd', callback: AsyncCallback<number[]>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 8开始支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅回调，用于接收对端读卡设备发送的APDU数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "transmit(response: number[]): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 9开始支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送APDU数据到对端读卡设备。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'hceCmd', callback?: AsyncCallback<number[]>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 18开始支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消APDU数据接收的订阅。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发准备",
      children: "开发准备"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hce应用支持前台或后台刷卡的选择",
      children: "HCE应用支持前台或后台刷卡的选择"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HCE应用开发者根据业务需要，可以选择实现前台刷卡或者后台刷卡。两种不同的刷卡方式，代码实现上会存在一些差异。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HCE应用前台刷卡"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在配置文件module.json5中，不需要静态声明NFC读卡器选择的应用ID（AID，参考ISO/IEC 7816-4规范），而是通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-cardemulation/js-apis-cardemulation#start9",
          children: "start"
        }), "来动态注册。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["HCE应用的刷卡页面退出时，需要显式调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-cardemulation/js-apis-cardemulation#stop9",
          children: "stop"
        }), "来释放动态注册的AID刷卡配置项。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HCE应用后台刷卡"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在配置文件module.json5中，需要静态声明NFC读卡器选择的应用ID（AID）。根据业务选择， 选择声明的AID是属于Payment类型，还是Other类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果选择Payment类型，该HCE应用会在系统设置页面的NFC\"默认付款应用\"里出现。用户必须选择该HCE应用作为默认支付应用后，才能实现后台刷卡功能。由于提供了默认支付应用的选项， 因此Payment类型的HCE应用，不会出现多个冲突的情况。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果选择Other类型，该HCE应用不会出现在系统设置页面的NFC\"默认付款应用\"里，但是多个HCE应用如果都声明了相同的Other类型的AID时，会出现冲突的可能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HCE应用后台刷卡的实现，不需要调用接口start和stop。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["HCE应用后台刷卡建议使用单独专用的HceAbility实现，以减少", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability#oncreate",
          children: "onCreate"
        }), "函数耗时。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["HceAbility的OnCreate函数中除了", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-cardemulation/js-apis-cardemulation#on8",
          children: "hceService.on"
        }), "外，尽量减少其它操作。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HceAbility的OnCreate函数中hceService.on要同步执行，不能异步执行，以免影响HCE通信时序。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(764284)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从API version 9之后的应用开发新增支持", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/ability-terminology#stage%E6%A8%A1%E5%9E%8B",
          children: "Stage模型"
        }), "，作为目前主推并长期演进的模型。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["HCE示例代码的提供，全部按照", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/ability-terminology#stage%E6%A8%A1%E5%9E%8B",
          children: "Stage模型"
        }), "来说明。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hce应用前台刷卡",
      children: "HCE应用前台刷卡"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在module.json5文件中声明NFC卡模拟权限，以及声明HCE特定的action。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "import需要的NFC卡模拟模块和其他相关的模块。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "判断设备是否支持NFC能力和HCE能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使能前台HCE应用程序优先处理NFC刷卡功能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "订阅HCE APDU数据的接收。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "完成HCE刷卡APDU数据的接收和发送。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "退出应用程序NFC刷卡页面时，退出前台优先功能。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    \"abilities\": [\n      {\n        // 以下使用的变量名若无默认值需先声明定义\n        \"name\": \"EntryAbility\",\n        \"srcEntry\": \"./ets/entryability/EntryAbility.ts\",\n        \"description\": \"$string:EntryAbility_desc\",\n        \"icon\": \"$media:icon\",\n        \"label\": \"$string:EntryAbility_label\",\n        \"startWindowIcon\": \"$media:icon\",\n        \"startWindowBackground\": \"$color:start_window_background\",\n        \"exported\": true,\n        \"skills\": [\n          {\n            \"entities\": [\n              \"entity.system.home\"\n            ],\n            \"actions\": [\n              \"ohos.want.action.home\",\n\n              // actions必须包含\"ohos.nfc.cardemulation.action.HOST_APDU_SERVICE\"\n              \"ohos.nfc.cardemulation.action.HOST_APDU_SERVICE\"\n            ]\n          }\n        ]\n      }\n    ],\n    \"requestPermissions\": [\n      {\n        // 添加使用NFC卡模拟需要的权限\n        \"name\": \"ohos.permission.NFC_CARD_EMULATION\",\n        \"reason\": \"$string:app_name\",\n      }\n    ]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { cardEmulation } from '@kit.ConnectivityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { AsyncCallback } from '@kit.BasicServicesKit';\nimport { AbilityConstant, UIAbility, Want, bundleManager } from '@kit.AbilityKit';\n\nlet hceElementName: bundleManager.ElementName;\nlet hceService: cardEmulation.HceService;\n\nconst hceCommandCb: AsyncCallback<number[]> = (error: BusinessError, hceCommand: number[]) => {\n  if (!error) {\n    if (hceCommand == null) {\n      hilog.error(0x0000, 'testTag', 'hceCommandCb has invalid hceCommand.');\n      return;\n    }\n    // 应用程序根据自己业务实现，检查接收到的指令内容，发送匹配的响应数据\n    hilog.info(0x0000, 'testTag', 'hceCommand = %{public}s', JSON.stringify(hceCommand));\n    let responseData = [0x90, 0x00]; // 根据接收到的不同指令更改响应数据\n    hceService.transmit(responseData).then(() => {\n      hilog.info(0x0000, 'testTag', 'hceService transmit Promise success.');\n    }).catch((err: BusinessError) => {\n      hilog.error(0x0000, 'testTag', 'hceService transmit Promise error = %{public}s', JSON.stringify(err));\n    });\n  } else {\n    hilog.error(0x0000, 'testTag', 'hceCommandCb error %{public}s', JSON.stringify(error));\n  }\n}\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');\n\n    // 判断设备是否支持NFC能力和HCE能力\n    if (!canIUse(\"SystemCapability.Communication.NFC.Core\")) {\n      hilog.error(0x0000, 'testTag', 'nfc unavailable.');\n      return;\n    }\n    if (!cardEmulation.hasHceCapability()) {\n      hilog.error(0x0000, 'testTag', 'hce unavailable.');\n      return;\n    }\n\n    // hceElementName中元素不能为空，通过want获取应用的elementname或按应用实际信息填写\n    hceElementName = {\n      bundleName: want.bundleName ?? '',\n      abilityName: want.abilityName ?? '',\n      moduleName: want.moduleName,\n    }\n    hceService = new cardEmulation.HceService();\n  }\n\n  onForeground() {\n    // 应用进入前台\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onForeground');\n    if (hceElementName != undefined) {\n      try {\n        // 调用接口使能前台HCE应用程序优先处理NFC刷卡功能\n        let aidList = [\"A0000000031010\", \"A0000000031011\"]; // 修改为正确的aid\n        hceService.start(hceElementName, aidList);\n\n        // 订阅HCE APDU数据的接收\n        hceService.on('hceCmd', hceCommandCb);\n      } catch (error) {\n        hilog.error(0x0000, 'testTag', 'hceService.start error = %{public}s', JSON.stringify(error));\n      }\n    }\n  }\n\n  onBackground() {\n    // 应用退到后台\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onBackground');\n    // 应用程序退出前台，停止HCE业务功能\n    if (hceElementName != undefined) {\n      try {\n        hceService.stop(hceElementName);\n      } catch (error) {\n        hilog.error(0x0000, 'testTag', 'hceService.stop error = %{public}s', JSON.stringify(error));\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hce应用后台刷卡",
      children: "HCE应用后台刷卡"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在module.json5文件中声明NFC卡模拟权限，声明HCE特定的action，声明应用能够处理的AID。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "import需要的NFC卡模拟模块和其他相关的模块。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "判断设备是否支持NFC能力和HCE能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "订阅HCE APDU数据的接收。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "完成HCE刷卡APDU数据的接收和发送。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "退出应用程序时，退出订阅功能。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    \"abilities\": [\n      {\n        \"name\": \"HceUIAbility\",\n        \"srcEntry\": \"./ets/hceuiability/HceUIAbility.ts\",\n        \"description\": \"$string:EntryAbility_desc\",\n        \"icon\": \"$media:icon\",\n        \"label\": \"$string:EntryAbility_label\",\n        \"startWindowIcon\": \"$media:icon\",\n        \"startWindowBackground\": \"$color:start_window_background\",\n        \"exported\": true,\n        \"skills\": [\n          {\n            \"entities\": [\n              \"entity.system.home\"\n            ],\n            \"actions\": [\n              \"ohos.want.action.home\",\n\n              // actions必须包含\"ohos.nfc.cardemulation.action.HOST_APDU_SERVICE\"\n              \"ohos.nfc.cardemulation.action.HOST_APDU_SERVICE\"\n            ]\n          }\n        ],\n\n        // 根据业务需要至少定义一个Payment类型或Other类型的AID，可以定义多个\n        \"metadata\": [\n          {\n            \"name\": \"payment-aid\",\n            \"value\": \"A0000000031010\" // 定义Payment类型的AID\n          },\n          {\n            \"name\": \"other-aid\",\n            \"value\": \"A0000000031011\" // 定义Other类型的AID\n          }\n        ]\n      }\n    ],\n    \"requestPermissions\": [\n      {\n        // 添加使用NFC卡模拟需要的权限\n        \"name\": \"ohos.permission.NFC_CARD_EMULATION\",\n        \"reason\": \"$string:app_name\",\n      }\n    ]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { cardEmulation } from '@kit.ConnectivityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { AsyncCallback } from '@kit.BasicServicesKit';\nimport { AbilityConstant, UIAbility, Want, bundleManager } from '@kit.AbilityKit';\n\nlet hceElementName: bundleManager.ElementName;\nlet hceService: cardEmulation.HceService;\n\nconst hceCommandCb: AsyncCallback<number[]> = (error: BusinessError, hceCommand: number[]) => {\n  if (!error) {\n    if (hceCommand == null) {\n      hilog.error(0x0000, 'testTag', 'hceCommandCb has invalid hceCommand.');\n      return;\n    }\n\n    // 应用程序根据自己业务实现，检查接收到的指令内容，发送匹配的响应数据\n    hilog.info(0x0000, 'testTag', 'hceCommand = %{public}s', JSON.stringify(hceCommand));\n    let responseData = [0x90, 0x00]; // 根据接收到的不同指令更改响应数据\n    hceService.transmit(responseData).then(() => {\n      hilog.info(0x0000, 'testTag', 'hceService transmit Promise success.');\n    }).catch((err: BusinessError) => {\n      hilog.error(0x0000, 'testTag', 'hceService transmit Promise error = %{public}s', JSON.stringify(err));\n    });\n  } else {\n    hilog.error(0x0000, 'testTag', 'hceCommandCb error %{public}s', JSON.stringify(error));\n  }\n}\n\n// 使用单独专用的HceAbility实现，以减少OnCreate函数耗时\nexport default class HceUIAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    // OnCreate函数中除了hceService.on外，尽量减少其它操作\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');\n\n    // 判断设备是否支持NFC能力和HCE能力\n    if (!canIUse(\"SystemCapability.Communication.NFC.Core\")) {\n      hilog.error(0x0000, 'testTag', 'nfc unavailable.');\n      return;\n    }\n    if (!cardEmulation.hasHceCapability()) {\n      hilog.error(0x0000, 'testTag', 'hce unavailable.');\n      return;\n    }\n\n    // 应用程序被运行到前台时，订阅HCE刷卡数据的接收\n    hceService = new cardEmulation.HceService();\n    // hceService.on同步执行，不能异步执行，以免影响HCE通信时序\n    hceService.on('hceCmd', hceCommandCb);\n  }\n\n  onForeground() {\n    // 应用进入前台\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onForeground');\n  }\n\n  onDestroy() {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onDestroy');\n    // 退出应用程序，取消订阅接受HCE刷卡数据\n    hceService.off('hceCmd', hceCommandCb);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "offhost应用刷卡",
      children: "OFFHOST应用刷卡"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在module.json5文件中声明OFFHOST特定的action，声明应用能够处理的AID，声明安全单元。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将OFFHOST应用设置为默认付款应用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(455669)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从 API version 22开始支持OFFHOST能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前只支持payment类型的AID。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前只支持SIM作为安全单元。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"abilities\": [\n      {\n        \"name\": \"EntryAbility\",\n        \"srcEntry\": \"./ets/entryability/EntryAbility.ts\",\n        \"description\": \"$string:EntryAbility_desc\",\n        \"icon\": \"$media:icon\",\n        \"label\": \"$string:EntryAbility_label\",\n        \"startWindowIcon\": \"$media:icon\",\n        \"startWindowBackground\": \"$color:start_window_background\",\n        \"exported\": true,\n        \"skills\": [\n          {\n            \"entities\": [\n              \"entity.system.home\"\n            ],\n            \"actions\": [\n              \"ohos.want.action.home\",\n\n              // actions必须包含\"ohos.nfc.cardemulation.action.OFF_HOST_APDU_SERVICE\"\n              \"ohos.nfc.cardemulation.action.OFF_HOST_APDU_SERVICE\"\n            ]\n          }\n        ]\n        // 根据业务需要至少定义一个Payment类型的AID，可以定义多个\n        \"metadata\": [\n          {\n            \"name\": \"payment-aid\",\n            \"value\": \"A0000000031010\" // 定义Payment类型的AID，需要修改为正确的AID\n          },\n           {\n             \"name\": \"secureElement\",\n             \"value\": \"SIM\" // 定义secureElement\n            },\n        ]\n      }\n    ]\n"
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
455669(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
764284(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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