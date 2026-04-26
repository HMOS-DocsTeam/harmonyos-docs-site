"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["812225"], {
295946(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_distributed_service_kit_devicemanager_guidelines_devicemanager_guidelines_md_4d3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-distributed-service-kit-devicemanager-guidelines-devicemanager-guidelines-md-4d3.json
var site_docs_system_network_distributed_service_kit_devicemanager_guidelines_devicemanager_guidelines_md_4d3_namespaceObject = JSON.parse('{"id":"system-network/distributed-service-kit/devicemanager-guidelines/devicemanager-guidelines","title":"分布式设备管理开发指南","description":"分布式设备管理简介","source":"@site/docs/system-network/distributed-service-kit/devicemanager-guidelines/devicemanager-guidelines.md","sourceDirName":"system-network/distributed-service-kit/devicemanager-guidelines","slug":"/system-network/distributed-service-kit/devicemanager-guidelines/","permalink":"/harmonyos-docs-site/system-network/distributed-service-kit/devicemanager-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"分布式设备管理开发指南","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicemanager-guidelines","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Distributed Service Kit简介","permalink":"/harmonyos-docs-site/system-network/distributed-service-kit/distributedservice-kit-intro/"},"next":{"title":"跨设备连接UIAbility开发指南","permalink":"/harmonyos-docs-site/system-network/distributed-service-kit/abilityconnect-distributed/abilityconnectmanager-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/distributed-service-kit/devicemanager-guidelines/devicemanager-guidelines.md


const frontMatter = {
	title: '分布式设备管理开发指南',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicemanager-guidelines',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '分布式设备管理开发指南';

const assets = {

};



const toc = [{
  "value": "分布式设备管理简介",
  "id": "分布式设备管理简介",
  "level": 2
}, {
  "value": "运作机制",
  "id": "运作机制",
  "level": 3
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 3
}, {
  "value": "申请分布式数据同步权限开发指导",
  "id": "申请分布式数据同步权限开发指导",
  "level": 2
}, {
  "value": "场景概述",
  "id": "场景概述",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 3
}, {
  "value": "设备发现开发指导",
  "id": "设备发现开发指导",
  "level": 2
}, {
  "value": "场景概述",
  "id": "场景概述-1",
  "level": 3
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤-1",
  "level": 3
}, {
  "value": "设备绑定开发指导",
  "id": "设备绑定开发指导",
  "level": 2
}, {
  "value": "场景概述",
  "id": "场景概述-2",
  "level": 3
}, {
  "value": "接口说明",
  "id": "接口说明-1",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤-2",
  "level": 3
}, {
  "value": "设备信息查询开发指导",
  "id": "设备信息查询开发指导",
  "level": 2
}, {
  "value": "场景概述",
  "id": "场景概述-3",
  "level": 3
}, {
  "value": "接口说明",
  "id": "接口说明-2",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤-3",
  "level": 3
}, {
  "value": "设备上下线监听开发指导",
  "id": "设备上下线监听开发指导",
  "level": 2
}, {
  "value": "场景概述",
  "id": "场景概述-4",
  "level": 3
}, {
  "value": "接口说明",
  "id": "接口说明-3",
  "level": 3
}, {
  "value": "开发步骤",
  "id": "开发步骤-4",
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
    ol: "ol",
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
        id: "分布式设备管理开发指南",
        children: "分布式设备管理开发指南"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "分布式设备管理简介",
      children: "分布式设备管理简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "随着用户不同种类的终端设备数量不断增多，将不同设备作为本端设备能力的扩展，使设备之间协同合作完成各种复杂场景即为设备的分布式业务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分布式设备管理是分布式业务入口，在分布式业务中对周边可信和非可信设备进行统一管理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分布式设备管理提供如下四大功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "发现"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "发现周围终端设备并上报。周围设备需要连接同局域网或者同时打开蓝牙，可以根据设备类型、距离、设备是否可信等进行筛选。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "绑定"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不同设备协同合作完成分布式业务的前提是设备间可信，对于周边发现的不可信设备，可通过绑定使彼此建立可信关系，提供PIN码、碰、扫、靠等设备认证框架，支持对接各种认证交互接口。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "查询"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询功能包含：查询本机设备信息、查询周围的在线的可信设备、查询可信设备信息。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "监听"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "监听设备上、下线。设备上线表示设备间已经可信，业务可以发起分布式操作；设备下线表示分布式业务不可用。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "运作机制",
      children: "运作机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备管理作为分布式业务入口，需要应用在所使用的业务场景，向发现设备主动发起绑定建立可信关系；业务结束后由业务自主判断是否解除绑定关系，设备间可信关系的解除由业务自己控制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用设备管理能力，需要用户确认不同设备已连接同一局域网或者蓝牙开关已开启，否则该能力不可用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备信息属于用户敏感数据，所以即使用户已连接同一局域网或者蓝牙开关已开启，应用在获取设备位置前仍需向用户申请数据同步权限。在用户确认允许后，系统才会向应用提供设备管理能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "申请分布式数据同步权限开发指导",
      children: "申请分布式数据同步权限开发指导"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "场景概述",
      children: "场景概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用在使用分布式设备管理系统能力前，需要检查是否已经获取用户授权访问分布式数据同步信息。如未获得授权，可以向用户申请需要的分布式数据同步权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.DISTRIBUTED_DATASYNC：分布式数据同步权限"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用设备管理能力，必须申请权限，并且获得用户授权。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "适用于Stage应用模型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在module.json5配置文件中配置分布式数据同步权限ohos.permission.DISTRIBUTED_DATASYNC。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"module\" : {\n    \"requestPermissions\":[\n      {\n        \"name\" : \"ohos.permission.DISTRIBUTED_DATASYNC\",\n        \"reason\": \"$string:distributed_permission\",\n        \"usedScene\": {\n          \"abilities\": [\n            \"MainAbility\"\n          ],\n          \"when\": \"inuse\"\n        }\n      }\n    ]\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入abilityAccessCtrl模块，用于获取权限申请的能力。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { abilityAccessCtrl } from '@kit.AbilityKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["分布式数据同步权限的授权方式为user_grant，因此需要调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-arkts/both-models/js-apis-abilityaccessctrl/js-apis-abilityaccessctrl#requestpermissionsfromuser9",
            children: "requestPermissionsFromUser()"
          }), "接口，以动态弹窗的方式向用户申请授权。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let atManager = abilityAccessCtrl.createAtManager();\natManager.requestPermissionsFromUser(context, ['ohos.permission.DISTRIBUTED_DATASYNC'])\n  .then(async (data) => {\n    logger.info(`data: ${JSON.stringify(data)}`);\n    // ...\n  })\n  .catch((err: BusinessError) => {\n    logger.error(`requestPermissionsFromUser error: ${JSON.stringify(err)}`);\n  });\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设备发现开发指导",
      children: "设备发现开发指导"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "场景概述-1",
      children: "场景概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以调用设备发现相关接口，获取周边可用的设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "startDiscovering(discoverParam: {[key: string]: Object;} , filterOptions?: {[key: string]: Object;} ): void;"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["发现周边同局域网或者开启蓝牙的设备。详细信息参见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/distributed-service-api/distributed-service-arkts/js-apis-distributeddevicemanager/js-apis-distributeddevicemanager#startdiscovering",
        children: "startDiscovering"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤-1",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "申请分布式数据同步权限。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入distributedDeviceManager模块，所有与设备管理相关的功能API，都是通过该模块提供的。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { distributedDeviceManager } from '@kit.DistributedServiceKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入BusinessError模块，用于获取distributedDeviceManager模块相关接口抛出的错误码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建设备管理实例，设备管理实例是分布式设备管理方法的调用入口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "async createDeviceManager(): Promise<void> {\n  if (typeof (this.deviceManager) != 'undefined') {\n    return;\n  }\n\n  logger.info('[DeviceManager.RemoteDeviceModel] deviceManager.createDeviceManager begin');\n  try {\n    let dmInstance = distributedDeviceManager.createDeviceManager('com.samples.devicemanager');\n    this.deviceManager = dmInstance\n    // ...\n    logger.info(`[DeviceManager.RemoteDeviceModel] createDeviceManager callback returned,\n    value= ${JSON.stringify(this.deviceManager)}`);\n  } catch (err) {\n    let error: BusinessError = err as BusinessError;\n    logger.error(`[DeviceManager.RemoteDeviceModel] createDeviceManager throw error,\n    error=${error} message=${error.message}`);\n  }\n  logger.info('[DeviceManager.RemoteDeviceModel] distributedDeviceManager.createDeviceManager end');\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册发现设备的回调，调用发现接口发现周边设备。发现状态持续两分钟，超过两分钟，会停止发现，最大发现数量99个。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "startDeviceDiscovery(): void {\n  if (typeof (this.deviceManager) == 'undefined') {\n    logger.error('[DeviceManager.RemoteDeviceModel] deviceManager has not initialized');\n    this.showErrMsg('deviceManager has not initialized');\n    return;\n  }\n  let self = this;\n  try {\n    this.deviceManager.on('discoverSuccess', (data) => {\n      if (data == null) {\n        return;\n      }\n      logger.info('[DeviceManager.RemoteDeviceModel] deviceFound data=' + JSON.stringify(data));\n      self.deviceFound(data);\n    })\n    this.deviceManager.on('discoverFailure', (data) => {\n      logger.info('[DeviceManager.RemoteDeviceModel] discoverFail data=' + JSON.stringify(data));\n    })\n    // ...\n    let discoverParam: Record<string, number> = {\n      'discoverTargetType': 1\n    };\n    let filterOptions: Record<string, number> = this.getFilterOptions();\n    logger.info('[DeviceManager.RemoteDeviceModel] startDeviceDiscovery filterOptions = ' + JSON.stringify(filterOptions));\n    if (Object.entries(filterOptions).length == 0) {\n      this.deviceManager.startDiscovering(discoverParam);\n    } else {\n      this.deviceManager.startDiscovering(discoverParam, filterOptions);\n    }\n  } catch (err) {\n    let e: BusinessError = err as BusinessError;\n    logger.error('[DeviceManager.RemoteDeviceModel] startDeviceDiscovery failed err: ' + e.toString());\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设备绑定开发指导",
      children: "设备绑定开发指导"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "场景概述-2",
      children: "场景概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者发现周边不可信设备后，通过绑定接口建立可信关系。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明-1",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bindTarget(deviceId: string, bindParam: {[key: string]: Object;} , callback: AsyncCallback<{deviceId: string;}>): void;"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设备绑定。详细信息参见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/distributed-service-api/distributed-service-arkts/js-apis-distributeddevicemanager/js-apis-distributeddevicemanager#bindtarget",
        children: "bindTarget"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤-2",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "申请分布式数据同步权限。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "发现周边不可信设备。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选择不可信设备id，发起设备绑定。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "authenticateDevice(device: distributedDeviceManager.DeviceBasicInfo): void {\n  logger.info('[DeviceManager.RemoteDeviceModel] authenticateDevice ' + JSON.stringify(device));\n  if (typeof (this.deviceManager) == 'undefined') {\n    logger.error('[DeviceManager.RemoteDeviceModel] deviceManager has not initialized');\n    this.showErrMsg('deviceManager has not initialized');\n    return;\n  }\n\n  for (let i = 0; i < this.discoverList.length; i++) {\n    if (this.discoverList[i].deviceId != device.deviceId) {\n      continue;\n    }\n\n    let bindParam: Record<string, number | string> = {\n      'bindLevel': 3,\n      'bindType': 1, // PIN码认证\n      'targetPkgName': 'ohos.samples.etsdevicemanager',\n      'appName': 'DeviceManager',\n    };\n    try {\n      this.deviceManager.bindTarget(device.deviceId, bindParam, (err: BusinessError, data: Object) => {\n        if (err) {\n          logger.error('[DeviceManager.RemoteDeviceModel] authenticateDevice error:' + JSON.stringify(err));\n          return;\n        }\n        logger.info('[DeviceManager.RemoteDeviceModel] authenticateDevice succeed:' + JSON.stringify(data));\n      })\n    } catch (err) {\n      let e: BusinessError = err as BusinessError;\n      logger.error('[DeviceManager.RemoteDeviceModel] authenticateDevice failed err: ' + e.toString());\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设备信息查询开发指导",
      children: "设备信息查询开发指导"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "场景概述-3",
      children: "场景概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备与周边设备建立可信关系后，通过设备信息查询接口可以获取所有上线并且可信的设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明-2",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAvailableDeviceListSync(): Array<DeviceBasicInfo>;"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设备信息查询。详细信息参见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/distributed-service-api/distributed-service-arkts/js-apis-distributeddevicemanager/js-apis-distributeddevicemanager#getavailabledevicelistsync",
        children: "getAvailableDeviceListSync"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤-3",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "申请分布式数据同步权限。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "发现周边不可信设备。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "建立设备间的可信关系。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询周围上线并且可信的设备。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "getTrustedDeviceList(): void {\n  if (typeof (this.deviceManager) == 'undefined') {\n    logger.error('[DeviceManager.RemoteDeviceModel] deviceManager has not initialized');\n    this.showErrMsg('deviceManager has not initialized');\n    return;\n  }\n\n  logger.info('[DeviceManager.RemoteDeviceModel] getTrustedDeviceList begin');\n  try {\n    this.trustedDeviceList = this.deviceManager.getAvailableDeviceListSync();\n    // ...\n  } catch (error) {\n    logger.error('[DeviceManager.RemoteDeviceModel] getTrustedDeviceList error: ${error}' + error.toString());\n    this.showErrMsg('getTrustedDeviceList failed');\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设备上下线监听开发指导",
      children: "设备上下线监听开发指导"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "场景概述-4",
      children: "场景概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "周边可信设备可用后会给业务报上线通知，当设备不可用时会给业务报下线通知。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口说明-3",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'deviceStateChange', callback: Callback<{ action: DeviceStateChange; device: DeviceBasicInfo; }>): void;"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设备上下线监听。详细信息参见：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/distributed-service-api/distributed-service-arkts/js-apis-distributeddevicemanager/js-apis-distributeddevicemanager#ondevicestatechange",
        children: "on('deviceStateChange')"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发步骤-4",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "申请分布式数据同步权限。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入distributedDeviceManager模块，所有与设备管理相关的功能API，都是通过该模块提供的。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { distributedDeviceManager } from '@kit.DistributedServiceKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入BusinessError模块，用于获取distributedDeviceManager模块相关接口抛出的错误码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建设备管理实例，设备管理实例是分布式设备管理方法的调用入口，并注册设备上下线回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "registerDeviceStateListener(): void {\n  logger.info('[DeviceManager.RemoteDeviceModel] registerDeviceStateListener');\n  if (typeof (this.deviceManager) == 'undefined') {\n    logger.error('[DeviceManager.RemoteDeviceModel] deviceManager has not initialized');\n    this.showErrMsg('deviceManager has not initialized');\n    return;\n  }\n\n  // ...\n  try {\n    this.deviceManager.on('deviceStateChange', (data: dataType) => {\n      if (data == null) {\n        return;\n      }\n      logger.info('[DeviceManager.RemoteDeviceModel] deviceStateChange data=' + JSON.stringify(data));\n      switch (data.action) {\n        case distributedDeviceManager.DeviceStateChange.AVAILABLE:\n          logger.info('[DeviceManager.RemoteDeviceModel] deviceStateChange ONLINE');\n          // ...\n          break;\n        case distributedDeviceManager.DeviceStateChange.UNAVAILABLE:\n          logger.info('[DeviceManager.RemoteDeviceModel] deviceStateChange OFFLINE');\n          // ...\n          break;\n        default:\n          break;\n      }\n    })\n  } catch(err) {\n    let e: BusinessError = err as BusinessError;\n    logger.error('[DeviceManager.RemoteDeviceModel] deviceStateChange failed err: ' + e.toString());\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
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