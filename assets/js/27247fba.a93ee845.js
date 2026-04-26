"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["256145"], {
193747(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_connectivity_kit_nfc_nfc_tag_access_guide_nfc_tag_access_guide_md_272_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-connectivity-kit-nfc-nfc-tag-access-guide-nfc-tag-access-guide-md-272.json
var site_docs_system_network_connectivity_kit_nfc_nfc_tag_access_guide_nfc_tag_access_guide_md_272_namespaceObject = JSON.parse('{"id":"system-network/connectivity-kit/nfc/nfc-tag-access-guide/nfc-tag-access-guide","title":"NFC标签读写开发指南","description":"简介","source":"@site/docs/system-network/connectivity-kit/nfc/nfc-tag-access-guide/nfc-tag-access-guide.md","sourceDirName":"system-network/connectivity-kit/nfc/nfc-tag-access-guide","slug":"/system-network/connectivity-kit/nfc/nfc-tag-access-guide/","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/nfc/nfc-tag-access-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"NFC标签读写开发指南","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/nfc-tag-access-guide","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"连接和传输数据","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/bluetooth/bluetooth-ble/gatt-development-guide/"},"next":{"title":"HCE卡模拟开发指南","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/nfc/nfc-hce-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/connectivity-kit/nfc/nfc-tag-access-guide/nfc-tag-access-guide.md


const frontMatter = {
	title: 'NFC标签读写开发指南',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/nfc-tag-access-guide',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = 'NFC标签读写开发指南';

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
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发准备",
  "id": "开发准备",
  "level": 2
}, {
  "value": "NFC标签前台读写或后台读写的选择",
  "id": "nfc标签前台读写或后台读写的选择",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "前台读取标签",
  "id": "前台读取标签",
  "level": 3
}, {
  "value": "后台读取标签",
  "id": "后台读取标签",
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
        id: "nfc标签读写开发指南",
        children: "NFC标签读写开发指南"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "近场通信(Near Field Communication，NFC)是一种短距高频的无线电技术，在13.56MHz频率运行，通信距离一般在10厘米距离内。电子设备可以通过NFC通信技术和NFC标签通信，从标签中读取数据，或写入数据到标签。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NFC标签支持一种或多种通信技术，具体技术如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NfcA (也称为 ISO 14443-3A)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NfcB (也称为 ISO 14443-3B)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NfcF (也称为 JIS 6319-4)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NfcV (也称为 ISO 15693)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IsoDep (也称为 ISO 14443-4)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NDEF"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MifareClassic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MifareUltralight"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "电子设备通过NFC天线位置触碰NFC标签卡片，完成NFC标签卡片的读取或写入。从使用场景上，可以分成NFC标签前台读写和NFC标签后台读写。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "NFC标签前台读写"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "前台读写是指在触碰NFC标签之前，用户先在电子设备上打开特定的应用程序，用户明确想使用所打开的应用程序和NFC标签进行读写操作。用户打开应用程序在前台，并且进入应用的刷卡页面之后，电子设备触碰NFC标签，只会把读取到的卡片分发给前台应用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "NFC标签后台读写"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "后台读写是指不打开特定的NFC标签应用程序，电子设备触碰发现NFC标签后，根据NFC标签的技术类型，分发给能够处理的应用程序。如果能匹配到多个应用程序，则弹出应用选择器列举出应用列表给用户手动选择。用户选择指定的应用后，自动跳转到应用程序的NFC标签读写卡页面。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "常用读写NDEF格式Tag定制功能"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["读取定制Tag内容拉起AirTouch服务，通过碰一碰服务直达，满足用户碎片化需求，如：NFC碰一碰点单、支付、活动推广等，详细应用开发接入指导及标签制作参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/airtouch/",
            children: "AirTouch服务"
          }), "。更多NDEF标签格式规范请关注", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://nfc-forum.org/",
            children: "NFC论坛"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "标签读写约束条件"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不管是前台读写，还是后台读写，电子设备能够发现NFC标签的前提条件是设备必须是亮屏和解锁状态。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["NFC标签读写完整的JS API说明以及实例代码请参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-nfctag/js-apis-nfctag",
        children: "NFC标签接口"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取不同技术类型标签对象的接口说明如下表，根据不同技术的标签对象来执行NFC标签的读写。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "getNfcA(tagInfo: TagInfo): NfcATag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 9开始支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取NfcA技术类型的标签对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getNfcB(tagInfo: TagInfo): NfcBTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 9开始支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取NfcB技术类型的标签对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getNfcF(tagInfo: TagInfo): NfcFTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 9开始支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取NfcF技术类型的标签对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getNfcV(tagInfo: TagInfo): NfcVTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 9开始支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取NfcV技术类型的标签对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getIsoDep(tagInfo: TagInfo): IsoDepTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 9开始支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取IsoDep技术类型的标签对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getNdef(tagInfo: TagInfo): NdefTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 9开始支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取NDEF技术类型的标签对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getMifareClassic(tagInfo: TagInfo): MifareClassicTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 9开始支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取MIFARE Classic技术类型的标签对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getMifareUltralight(tagInfo: TagInfo): MifareUltralightTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从API version 9开始支持"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取MifareUltralight技术类型的标签对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发准备",
      children: "开发准备"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nfc标签前台读写或后台读写的选择",
      children: "NFC标签前台读写或后台读写的选择"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NFC标签读写应用开发者根据业务需要，可以选择实现前台读卡或者后台读卡。两种不同的读卡方式，代码实现上会存在一些差异。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NFC标签前台读写"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在配置文件module.json5中，不需要静态声明过滤读取NFC标签的技术类型，而是通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-nfctag/js-apis-nfctag#tagregisterforegrounddispatch10",
          children: "tag.registerForegroundDispatch"
        }), "或者", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-nfctag/js-apis-nfctag#tagon11",
          children: "tag.on"
        }), "来完成动态注册。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过tag.registerForegroundDispatch或tag.on来动态注册前台读写标签时，入参中必须指定需要读取NFC标签的技术类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果选择tag.registerForegroundDispatch注册，当应用运行在前台并进入该页面，NFC的卡模拟功能在打开时，可以同时完成刷卡。如果选择tag.on注册，当应用运行在前台并进入该页面时，NFC的卡模拟是关闭的，无法同时进行刷卡功能。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当应用页面切换到后台时，需要显式调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-nfctag/js-apis-nfctag#tagunregisterforegrounddispatch10",
          children: "tag.unregisterForegroundDispatch"
        }), "或者", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-nfctag/js-apis-nfctag#tagoff11",
          children: "tag.off"
        }), "来取消注册，退出前台读卡优先功能。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NFC标签后台读写"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在配置文件module.json5中，需要静态声明过滤读取NFC标签的技术类型。根据业务需要至少定义一种读标签的技术类型，‘tag-tech/’是前缀，后面跟着技术类型描述。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "技术类型的描述字符，必须完整匹配并区分大小写，需要严格匹配。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(307448)/* ["default"] */.A) + "",
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
        children: ["NFC标签读写示例代码的提供，全部按照", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/ability-terminology#stage%E6%A8%A1%E5%9E%8B",
          children: "Stage模型"
        }), "来说明。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "前台读取标签",
      children: "前台读取标签"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在module.json5文件中声明NFC标签读取的权限，以及声明NFC标签特定的action。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "import需要的tag模块和其他相关的模块。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "判断设备是否支持NFC能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "调用tag模块中前台优先的接口，使能前台应用程序优先处理所发现的NFC标签功能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取特定技术类型的NFC标签对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "执行读写接口完成标签数据的读取或写入数据到标签。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "退出应用程序NFC标签页面时，调用tag模块退出前台优先功能。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    \"abilities\": [\n      {\n        \"name\": \"EntryAbility\",\n        \"srcEntry\": \"./ets/entryability/EntryAbility.ts\",\n        \"description\": \"$string:EntryAbility_desc\",\n        \"icon\": \"$media:icon\",\n        \"label\": \"$string:EntryAbility_label\",\n        \"startWindowIcon\": \"$media:icon\",\n        \"startWindowBackground\": \"$color:start_window_background\",\n        \"exported\": true,\n        \"skills\": [\n          {\n            \"entities\": [\n              \"entity.system.home\"\n            ],\n            \"actions\": [\n              \"ohos.want.action.home\",\n\n              // actions必须包含\"ohos.nfc.tag.action.TAG_FOUND\"\n              \"ohos.nfc.tag.action.TAG_FOUND\"\n            ]\n          }\n        ]\n      }\n    ],\n    \"requestPermissions\": [\n      {\n        // 添加NFC标签操作的权限\n        \"name\": \"ohos.permission.NFC_TAG\",\n        \"reason\": \"$string:app_name\",\n      }\n    ]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { tag } from '@kit.ConnectivityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { AbilityConstant, UIAbility, Want, bundleManager } from '@kit.AbilityKit';\n\nlet nfcTagElementName: bundleManager.ElementName;\nlet foregroundRegister: boolean;\n\nasync function readerModeCb(error: BusinessError, tagInfo: tag.TagInfo) {\n  if (!error) {\n    // 获取特定技术类型的NFC标签对象\n    if (tagInfo == null) {\n      hilog.error(0x0000, 'testTag', 'readerModeCb tagInfo is invalid');\n      return;\n    }\n    if (tagInfo.uid == null) {\n      hilog.error(0x0000, 'testTag', 'readerModeCb uid is invalid');\n      return;\n    }\n    if (tagInfo.technology == null || tagInfo.technology.length == 0) {\n      hilog.error(0x0000, 'testTag', 'readerModeCb technology is invalid');\n      return;\n    }\n\n    // 标签里面可能支持多种技术类型，选择特定的技术类型接口，完成标签数据的读取或写入\n    // 下面示例代码，使用IsoDep完成标签数据的读取或写入\n    let isoDep: tag.IsoDepTag | null = null;\n    for (let i = 0; i < tagInfo.technology.length; i++) {\n      if (tagInfo.technology[i] == tag.ISO_DEP) {\n        try {\n          isoDep = tag.getIsoDep(tagInfo);\n        } catch (error) {\n          hilog.error(0x0000, 'testTag', 'readerModeCb getIsoDep error = %{public}s', JSON.stringify(error));\n          return;\n        }\n      }\n      // 也可以按需选择其它类型的技术读写标签\n    }\n    if (isoDep == null) {\n      hilog.error(0x0000, 'testTag', 'readerModeCb getIsoDep is invalid');\n      return;\n    }\n\n    // 使用IsoDep技术连接到NFC标签\n    try {\n      isoDep.connect();\n    } catch (error) {\n      hilog.error(0x0000, 'testTag', 'readerModeCb isoDep.connect() error = %{public}s', JSON.stringify(error));\n      return;\n    }\n    if (!isoDep.isConnected()) {\n      hilog.error(0x0000, 'testTag', 'readerModeCb isoDep.isConnected() false.');\n      return;\n    }\n\n    // 发送指令到已连接的标签，获取标签的响应数据\n    let cmdData = [0x01, 0x02, 0x03, 0x04]; // 修改为正确的访问标签的指令数据\n    try {\n      isoDep.transmit(cmdData).then((response: number[]) => {\n        hilog.info(0x0000, 'testTag', 'readerModeCb isoDep.transmit() response = %{public}s.', JSON.stringify(response));\n      }).catch((err: BusinessError) => {\n        hilog.error(0x0000, 'testTag', 'readerModeCb isoDep.transmit() err = %{public}s.', JSON.stringify(err));\n        return;\n      });\n    } catch (businessError) {\n      hilog.error(0x0000, 'testTag', 'readerModeCb isoDep.transmit() businessError = %{public}s.', JSON.stringify(businessError));\n      return;\n    }\n  } else {\n    hilog.info(0x0000, 'testTag', 'readerModeCb readerModeCb error %{public}s', JSON.stringify(error));\n  }\n}\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');\n\n    // 判断设备是否支持NFC能力\n    if (!canIUse(\"SystemCapability.Communication.NFC.Core\")) {\n      hilog.error(0x0000, 'testTag', 'nfc unavailable.');\n      return;\n    }\n\n    // 根据应用程序信息，初始化正确的值\n    nfcTagElementName = {\n      bundleName: want.bundleName ?? '',\n      abilityName: want.abilityName ?? '',\n      moduleName: want.moduleName,\n    }\n  }\n\n  onForeground() {\n    // 应用进入前台，调用tag模块中前台优先的接口，使能前台应用程序优先处理所发现的NFC标签功能\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onForeground');\n    if (nfcTagElementName != undefined) {\n      // 根据业务需要，选择需要读取标签的通信技术\n      let techList: number[] = [tag.NFC_A, tag.NFC_B, tag.NFC_F, tag.NFC_V];\n      try {\n        tag.on('readerMode', nfcTagElementName, techList, readerModeCb);\n        foregroundRegister = true;\n      } catch (error) {\n        hilog.error(0x0000, 'testTag', 'on readerMode error = %{public}s', JSON.stringify(error));\n      }\n    }\n  }\n\n  onBackground() {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onBackground');\n    // 退出应用程序NFC标签页面时，调用tag模块退出前台优先功能\n    if (foregroundRegister) {\n      foregroundRegister = false;\n      try {\n        tag.off('readerMode', nfcTagElementName);\n      } catch (error) {\n        hilog.error(0x0000, 'testTag', 'off readerMode error = %{public}s', JSON.stringify(error));\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "后台读取标签",
      children: "后台读取标签"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在module.json5文件中声明NFC标签读取的权限，声明NFC标签特定的action，以及声明本应用程序的能够处理的NFC标签技术类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "import需要的tag模块和其他相关的模块。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取特定技术类型的NFC标签对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "执行读写接口完成标签数据的读取或写入数据到标签。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用程序需要支持后台读卡时，需要在应用的属性配置文件中，声明与NFC相关的属性值。比如，在module.json5文件中，声明下面属性值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(872621)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "声明\"actions\"字段的内容填写，必须包含\"ohos.nfc.tag.action.TAG_FOUND\"，不能更改。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "声明技术时\"uris\"中\"type\"字段的内容填写，前缀必须是\"tag-tech/\"，后面接着NfcA/NfcB/NfcF/NfcV/IsoDep/Ndef/MifareClassic/MifareUL/NdefFormatable\"中的一个。如果存在多个\"type\"时，需要分行填写。填写错误会造成解析失败。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "声明权限时\"requestPermissions\"中的\"name\"字段的内容填写，必须是\"ohos.permission.NFC_TAG\"，不能更改。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wearable设备不支持后台读卡。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    \"abilities\": [\n      {\n        \"name\": \"EntryAbility\",\n        \"srcEntry\": \"./ets/entryability/EntryAbility.ts\",\n        \"description\": \"$string:EntryAbility_desc\",\n        \"icon\": \"$media:icon\",\n        \"label\": \"$string:EntryAbility_label\",\n        \"startWindowIcon\": \"$media:icon\",\n        \"startWindowBackground\": \"$color:start_window_background\",\n        \"exported\": true,\n        \"skills\": [\n          {\n            \"entities\": [\n              \"entity.system.home\"\n            ],\n            \"actions\": [\n              \"ohos.want.action.home\",\n\n              // actions必须包含\"ohos.nfc.tag.action.TAG_FOUND\"\n              \"ohos.nfc.tag.action.TAG_FOUND\"\n            ],\n\n            // 根据业务需要至少定义一种读标签的技术类型，‘tag-tech/’是前缀，后面跟着技术类型描述\n            \"uris\": [\n              {\n                  \"type\":\"tag-tech/NfcA\"\n              },\n              {\n                  \"type\":\"tag-tech/IsoDep\"\n              }\n              // 必要时可添加其他技术类型\n              // 例如: NfcB/NfcF/NfcV/Ndef/MifareClassic/MifareUL/NdefFormatable\n            ]\n          }\n        ]\n      }\n    ],\n    \"requestPermissions\": [\n      {\n        // 添加NFC标签操作的权限\n        \"name\": \"ohos.permission.NFC_TAG\",\n        \"reason\": \"$string:app_name\",\n      }\n    ]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { tag } from '@kit.ConnectivityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');\n\n    // 获取特定技术类型的NFC标签对象\n    let tagInfo: tag.TagInfo;\n    try {\n      tagInfo = tag.getTagInfo(want);\n    } catch (error) {\n      hilog.error(0x0000, 'testTag', 'getTagInfo error = %{public}s', JSON.stringify(error));\n      return;\n    }\n\n    if (tagInfo == null) {\n      hilog.error(0x0000, 'testTag', 'tagInfo is invalid');\n      return;\n    }\n    if (tagInfo.uid == null) {\n      hilog.error(0x0000, 'testTag', 'uid is invalid');\n      return;\n    }\n    if (tagInfo.technology == null || tagInfo.technology.length == 0) {\n      hilog.error(0x0000, 'testTag', 'technology is invalid');\n      return;\n    }\n\n    // 标签里面可能支持多种技术类型，选择特定的技术类型接口，完成标签数据的读取或写入\n    // 下面示例代码，使用IsoDep完成标签数据的读取或写入\n    let isoDep: tag.IsoDepTag | null = null;\n    for (let i = 0; i < tagInfo.technology.length; i++) {\n      if (tagInfo.technology[i] == tag.ISO_DEP) {\n        try {\n          isoDep = tag.getIsoDep(tagInfo);\n        } catch (error) {\n          hilog.error(0x0000, 'testTag', 'getIsoDep error = %{public}s', JSON.stringify(error));\n          return;\n        }\n      }\n      // 也可以按需选择其它类型的技术读写标签\n    }\n    if (isoDep == null) {\n      hilog.error(0x0000, 'testTag', 'getIsoDep is invalid');\n      return;\n    }\n\n    // 使用IsoDep技术连接到NFC标签\n    try {\n      isoDep.connect();\n    } catch (error) {\n      hilog.error(0x0000, 'testTag', 'isoDep.connect() error = %{public}s', JSON.stringify(error));\n      return;\n    }\n    if (!isoDep.isConnected()) {\n      hilog.error(0x0000, 'testTag', 'isoDep.isConnected() false.');\n      return;\n    }\n\n    // 发送指令到已连接的标签，获取标签的响应数据\n    let cmdData = [0x01, 0x02, 0x03, 0x04]; // 修改为正确的访问标签的指令数据\n    try {\n      isoDep.transmit(cmdData).then((response: number[]) => {\n        hilog.info(0x0000, 'testTag', 'isoDep.transmit() response = %{public}s.', JSON.stringify(response));\n      }).catch((err: BusinessError) => {\n        hilog.error(0x0000, 'testTag', 'isoDep.transmit() err = %{public}s.', JSON.stringify(err));\n        return;\n      });\n    } catch (businessError) {\n      hilog.error(0x0000, 'testTag', 'isoDep.transmit() businessError = %{public}s.', JSON.stringify(businessError));\n      return;\n    }\n  }\n}\n"
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
872621(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
307448(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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