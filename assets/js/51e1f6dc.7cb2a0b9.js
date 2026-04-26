"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["91085"], {
107648(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_distributed_service_kit_abilityconnect_distributed_abilityconnectmanager_guidelines_abilityconnectmanager_guidelines_md_51e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-distributed-service-kit-abilityconnect-distributed-abilityconnectmanager-guidelines-abilityconnectmanager-guidelines-md-51e.json
var site_docs_system_network_distributed_service_kit_abilityconnect_distributed_abilityconnectmanager_guidelines_abilityconnectmanager_guidelines_md_51e_namespaceObject = JSON.parse('{"id":"system-network/distributed-service-kit/abilityconnect-distributed/abilityconnectmanager-guidelines/abilityconnectmanager-guidelines","title":"跨设备连接UIAbility开发指南","description":"简介","source":"@site/docs/system-network/distributed-service-kit/abilityconnect-distributed/abilityconnectmanager-guidelines/abilityconnectmanager-guidelines.md","sourceDirName":"system-network/distributed-service-kit/abilityconnect-distributed/abilityconnectmanager-guidelines","slug":"/system-network/distributed-service-kit/abilityconnect-distributed/abilityconnectmanager-guidelines/","permalink":"/harmonyos-docs-site/system-network/distributed-service-kit/abilityconnect-distributed/abilityconnectmanager-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"跨设备连接UIAbility开发指南","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/abilityconnectmanager-guidelines","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"分布式设备管理开发指南","permalink":"/harmonyos-docs-site/system-network/distributed-service-kit/devicemanager-guidelines/"},"next":{"title":"增强连接开发指导","permalink":"/harmonyos-docs-site/system-network/distributed-service-kit/abilityconnect-distributed/linkenhance_development-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/distributed-service-kit/abilityconnect-distributed/abilityconnectmanager-guidelines/abilityconnectmanager-guidelines.md


const frontMatter = {
	title: '跨设备连接UIAbility开发指南',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/abilityconnectmanager-guidelines',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '跨设备连接UIAbility开发指南';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "能力范围",
  "id": "能力范围",
  "level": 3
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 3
}, {
  "value": "实现原理",
  "id": "实现原理",
  "level": 3
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 3
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}, {
  "value": "环境准备",
  "id": "环境准备",
  "level": 2
}, {
  "value": "环境要求",
  "id": "环境要求",
  "level": 3
}, {
  "value": "搭建环境",
  "id": "搭建环境",
  "level": 3
}, {
  "value": "检验环境是否搭建成功",
  "id": "检验环境是否搭建成功",
  "level": 3
}, {
  "value": "开发指导",
  "id": "开发指导",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 3
}, {
  "value": "调测验证",
  "id": "调测验证",
  "level": 3
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "设备A应用无法拉起设备B应用",
  "id": "设备a应用无法拉起设备b应用",
  "level": 3
}, {
  "value": "应用锁屏或者退后台一段时间后，正在执行的协同业务被断开",
  "id": "应用锁屏或者退后台一段时间后正在执行的协同业务被断开",
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
        id: "跨设备连接uiability开发指南",
        children: "跨设备连接UIAbility开发指南"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自API version 18起，系统新增支持应用跨设备协同连接与通信能力（含数据传输）。该特性通过分布式组件管理框架实现多端应用协作（即多个终端设备上的应用协同完成同一业务场景），成为分布式能力体系的核心功能之一。典型应用场景如智能手表端的拍照控制应用，可远程调用手机端相机功能并实现跨设备的实时双向数据交互。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "能力范围",
      children: "能力范围"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "跨设备拉起应用：支持在分布式组网环境下拉起关联应用，实现多端业务协同（需应用适配开发）"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "跨设备数据交互：实现跨设备数据传输，跨设备数据交互能力随不同应用类型存在差异。具体为系统应用可传输文本、字节流、图片及传输流，三方应用仅支持文本信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在进行应用跨设备连接管理开发前，开发者应了解以下基本概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DMS"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DMS（Distributedsched Management Service）是分布式组件管理框架，提供分布式组件的管理能力。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "UIAbility"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-overview",
            children: "UIAbility"
          }), "描述应用程序的界面交互能力，负责管理应用界面的生命周期、用户交互以及界面渲染等任务。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "字节流"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["字节流是数据类型为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/arraybuffer-object",
            children: "ArrayBuffer"
          }), "类型的数据。可以被用于存储二进制数据，例如图像或音频数据。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用跨设备连接管理依托分布式组件管理框架，在分布式组件管理框架上进行了JS对象型的封装，能通过分布式组件管理框架服务建立协同关系并进行应用间的连接，数据的交互能力由系统支持。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 应用跨设备连接运行机制"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(59580)/* ["default"] */.A) + "",
        width: "1298",
        height: "822"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "仅限于API version 18及以上版本设备，设备间需要登录相同的华为账号。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不同设备间只有相同bundleName的UIAbility应用才能进行协同。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "业务协同完毕后需及时结束协同状态。为了系统的安全和资源合理利用考虑，未申请长时任务的应用，在锁屏或退至后台5秒以上，会被结束掉协同生命周期。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "分布式组件管理框架在协同过程中不会对传输内容进行审查。涉及隐私敏感数据时，建议业务通过弹框提醒等方式提醒用户。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit暂不支持模拟器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "环境准备",
      children: "环境准备"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "环境要求",
      children: "环境要求"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可登录华为账号的设备A和设备B，设备间需要组网成功（设备组网通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-network/distributed-service-kit/devicemanager-guidelines",
        children: "Device Manager"
      }), "的接口实现）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "搭建环境",
      children: "搭建环境"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在PC上安装", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/download/deveco-studio",
          children: "DevEco Studio"
        }), "，要求版本在4.1及以上。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将public-SDK更新到API 18或以上。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用USB线缆将任意一台调试设备（设备A或者设备B）连接到PC。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "打开设备A和设备B的蓝牙，互相识别，实现组网。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "检验环境是否搭建成功",
      children: "检验环境是否搭建成功"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PC上执行shell命令："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc shell\nhidumper -s 4700 -a \"buscenter -l remote_device_info\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组网成功时可显示组网设备数量的信息，如“remote device num = 1”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发指导",
      children: "开发指导"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用跨设备连接管理可以通过分布式组件管理框架，拉起对端设备并发送消息。具体案例提供如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用跨设备连接管理接口如下表所示。具体API说明详见API参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/distributed-service-api/distributed-service-arkts/js-apis-distributed-abilityconnectionmanager/js-apis-distributed-abilityconnectionmanager",
        children: "abilityConnectionManager"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " abilityConnectionManager接口功能介绍"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "createAbilityConnectionSession(serviceName: string, context: Context, peerInfo: PeerInfo, connectOptions: ConnectOptions): number;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建应用间的会话。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "destroyAbilityConnectionSession(sessionId: number): void;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁应用间的会话。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "connect(sessionId: number): Promise<ConnectResult>;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "source侧进行ability的连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "acceptConnect(sessionId: number, token: string): Promise<void>;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sink侧进行ability的连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "disconnect(sessionId: number): void;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "断开ability的连接。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'connect'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'disconnect'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'connect'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'disconnect'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sendMessage(sessionId: number, msg: string): Promise<void>;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送文本信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sendData(sessionId: number, data: ArrayBuffer): Promise<void>;"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送ArrayBuffer字节流。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过应用跨设备管理模块，设备A拉起并连接设备B上的应用。连接成功后，设备A和设备B通过on接口注册相应事件的回调监听。设备A或设备B通过sendMessage、sendData接口发送消息、字节流。对端通过监听到的回调信息进行后续协同业务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "导入AbilityConnectionManager模块文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import {abilityConnectionManager, distributedDeviceManager } from '@kit.DistributedServiceKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "发现设备"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设备A上的应用，需要发现并选择设备B的networkId来作为协同接口的入参。可调用分布式设备管理模块接口，进行对端设备的发现和选择，详情可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-network/distributed-service-kit/devicemanager-guidelines",
        children: "分布式设备管理开发指南"
      }), "进行开发。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "应用间创建会话并进行连接"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备A和设备B在创建会话和连接时要执行的操作不同，接下来的开发步骤中，以设备A作为连接发起方，设备B作为连接接收端。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "1.设备A"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用主动调用createAbilityConnectionSession()接口创建会话，获得sessionId。之后调用connect()方法启动ability会话连接（此时设备B上应用会被拉起）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let dmClass: distributedDeviceManager.DeviceManager;\n\nfunction initDmClass(): void {\n  // 其中createDeviceManager接口为系统API\n  try {\n    dmClass = distributedDeviceManager.createDeviceManager('com.example.remotephotodemo');\n  } catch (err) {\n    hilog.info(0x0000, 'testTag', 'createDeviceManager err');\n  }\n}\n\n// 获取设备B的设备ID\nfunction getRemoteDeviceId(): string | undefined {\n  initDmClass();\n  if (typeof dmClass === 'object' && dmClass !== null) {\n    hilog.info(0x0000, 'testTag', 'getRemoteDeviceId begin');\n    let list = dmClass.getAvailableDeviceListSync();\n    if (typeof (list) === 'undefined' || typeof (list.length) === 'undefined') {\n      hilog.info(0x0000, 'testTag', 'getRemoteDeviceId err: list is null');\n      return;\n    }\n    if (list.length === 0) {\n      hilog.info(0x0000, 'testTag', 'getRemoteDeviceId err: list is empty');\n      return;\n    }\n    // 弹框选择设备\n    return list[0].networkId;\n  } else {\n    hilog.info(0x0000, 'testTag', 'getRemoteDeviceId err: dmClass is null');\n    return;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  createSession(): void {\n    // 定义peer信息\n    const peerInfo: abilityConnectionManager.PeerInfo = {\n      deviceId: getRemoteDeviceId()!,\n      bundleName: 'com.example.myapplication',\n      moduleName: 'entry',\n      abilityName: 'EntryAbility',\n    };\n    const myRecord: Record<string, string> = {\n      'newKey1': 'value1',\n    };\n\n    // 定义连接选项\n    const connectOption: abilityConnectionManager.ConnectOptions = {\n      needSendData: true,\n      startOptions: abilityConnectionManager.StartOptionParams.START_IN_FOREGROUND,\n      parameters: myRecord\n    };\n    console.info(TAG + JSON.stringify(peerInfo))\n    console.info(TAG + JSON.stringify(connectOption))\n    let context = this.getUIContext().getHostContext();\n    try {\n      this.sessionId = abilityConnectionManager.createAbilityConnectionSession('collabTest', context, peerInfo, connectOption);\n      hilog.info(0x0000, 'testTag', 'createSession sessionId is', this.sessionId);\n      abilityConnectionManager.connect(this.sessionId).then((connectResult) => {\n        if (!connectResult.isConnected) {\n          hilog.info(0x0000, 'testTag', 'connect failed');\n          return;\n        }\n      }).catch(() => {\n        hilog.error(0x0000, 'testTag', 'connect failed');\n      })\n    } catch (error) {\n      hilog.error(0x0000, 'testTag', error);\n    }\n  }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2.设备B"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备A的应用调用connect()后，设备B的应用会通过协同的方式被拉起，拉起时会触发协同生命周期函数onCollaborate()，可在该接口中配置createAbilityConnectionSession()接口以及acceptConnect()接口的调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "onCollaborate(wantParam: Record<string, Object>): AbilityConstant.CollaborateResult {\n  hilog.info(0x0000, 'testTag', '%{public}s', 'on collaborate');\n  let param = wantParam['ohos.extra.param.key.supportCollaborateIndex'] as Record<string, Object>\n  this.onCollab(param);\n  return 0;\n}\n\nonCollab(collabParam: Record<string, Object>) {\n  const sessionId = this.createSessionFromWant(collabParam);\n  if (sessionId == -1) {\n    return;\n  }\n  this.registerSessionEvent(sessionId);\n  const collabToken = collabParam['ohos.dms.collabToken'] as string;\n  abilityConnectionManager.acceptConnect(sessionId, collabToken).then(() => {\n    AppStorage.setOrCreate<number>('sessionId', sessionId);\n  }).catch(() => {\n    console.error(TAG + `acceptConnect failed` );\n  })\n}\n\ncreateSessionFromWant(collabParam: Record<string, Object>): number {\n  let sessionId = -1;\n  const peerInfo = collabParam['PeerInfo'] as abilityConnectionManager.PeerInfo;\n  if (peerInfo == undefined) {\n    return sessionId;\n  }\n  // 定义连接选项\n  const options = collabParam['ConnectOption'] as abilityConnectionManager.ConnectOptions;\n  try {\n    sessionId = abilityConnectionManager.createAbilityConnectionSession('collabTest', this.context, peerInfo, options);\n  } catch (error) {\n    console.error(error);\n  }\n  return sessionId;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "注册事件监听"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用创建会话成功并获得sessionId后，开发者可调用on()方法进行对应事件的监听，通过触发回调函数的方式通知监听者，以便执行对应业务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { abilityConnectionManager } from '@kit.DistributedServiceKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nabilityConnectionManager.on(\"connect\", this.sessionId,(callbackInfo) => {\n  hilog.info(0x0000, 'testTag', 'session connect, sessionId is', callbackInfo.sessionId);\n});\nabilityConnectionManager.on(\"disconnect\", this.sessionId,(callbackInfo) => {\n  hilog.info(0x0000, 'testTag', 'session disconnect, sessionId is', callbackInfo.sessionId);\n});\nabilityConnectionManager.on(\"receiveMessage\", this.sessionId,(callbackInfo) => {\n  hilog.info(0x0000, 'testTag', 'session receiveMessage, sessionId is', callbackInfo.sessionId);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "发送消息"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用连接成功后，开发者可在设备A或者设备B上调用sendMessage()方法给对端应用发送文本信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { abilityConnectionManager } from '@kit.DistributedServiceKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nabilityConnectionManager.sendMessage(this.sessionId, \"message send success\").then(() => {\n  hilog.info(0x0000, 'testTag', \"sendMessage success\");\n}).catch(() => {\n  hilog.error(0x0000, 'testTag', \"connect failed\");\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2.发送字节流数据"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用连接成功后，开发者可在设备A或者设备B上调用sendData()方法给对端应用发送字节数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { abilityConnectionManager } from '@kit.DistributedServiceKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { util } from '@kit.ArkTS';\n\nlet textEncoder = util.TextEncoder.create(\"utf-8\");\nconst arrayBuffer  = textEncoder.encodeInto(\"data send success\");\n\nabilityConnectionManager.sendData(this.sessionId, arrayBuffer.buffer).then(() => {\n  hilog.info(0x0000, 'testTag', \"sendMessage success\");\n}).catch(() => {\n  hilog.info(0x0000, 'testTag', \"sendMessage failed\");\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "结束协同"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "业务协同完毕后需及时结束协同状态。若是后续短期内还有协同需要，可调用disconnect()方法断开应用间的连接，保留sessionId，以便下次继续使用该sessionId进行连接。若是短期无需使用协同业务，可直接调用destroyAbilityConnectionSession()接口销毁会话，此时会自动断开连接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { abilityConnectionManager } from '@kit.DistributedServiceKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nhilog.info(0x0000, 'testTag', 'disconnectRemoteAbility begin');\nif (this.sessionId == -1) {\n  hilog.info(0x0000, 'testTag', 'Invalid session ID.');\nreturn;\n}\nabilityConnectionManager.disconnect(this.sessionId);\n\nhilog.info(0x0000, 'testTag', 'destroyAbilityConnectionSession called');\nabilityConnectionManager.destroyAbilityConnectionSession(this.sessionId);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "调测验证",
      children: "调测验证"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用侧开发完成后，可在设备A和设备B上安装应用，测试步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击设备A应用的“连接”按钮，此时设备B上的应用被拉起。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击设备A应用的“sendMessage”按钮，此时设备B上的应用会触发on()方法的回调，接收该字符串。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击设备A应用的“sendData”按钮，此时设备B上的应用会触发on()方法的回调，接收该字节流。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击设备A或设备B应用的“disconnect”按钮，此时双端会断开连接，触发connect()接口的回调，将断连信息上报给双端应用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设备a应用无法拉起设备b应用",
      children: "设备A应用无法拉起设备B应用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "【原因1】：设备间没有相互组网，导致设备A发起连接时，createAbilityConnectionSession()接口中的peerInfo.deviceId属性未设置正确。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "【原因2】：有多台设备相互组网，设备A发起连接时，createAbilityConnectionSession()接口中的peerInfo.deviceId属性设置为其他设备的deviceId，未正确指定到B设备上。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "针对原因1，设备A和设备B开启USB调试功能，用USB线连接设备和PC。执行shell命令："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hdc shell\nhidumper -s 4700 -a \"buscenter -l remote_device_info\"\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "回显信息为“remote device num = 0”即为组网失败，请确保登录同一华为账号并使用蓝牙连接。组网成功时可显示组网设备数量的信息，如“remote device num = 1”。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "针对原因2，查询并选择指定设备时，添加设备选择列表，确保指定到期望的设备。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用锁屏或者退后台一段时间后正在执行的协同业务被断开",
      children: "应用锁屏或者退后台一段时间后，正在执行的协同业务被断开"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用在协同过程中，DMS会对应用的生命周期进行监听。发生锁屏、退后台操作持续五秒后，未申请长时任务的应用会被结束协同状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用申请", (0,jsx_runtime.jsx)(_components.a, {
        href: "/background-task-kit/continuous-task",
        children: "长时任务(ArkTS)"
      }), "，消除此限制。"]
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
59580(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958422-5780289a13bca235a477079da3e31532.png");

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