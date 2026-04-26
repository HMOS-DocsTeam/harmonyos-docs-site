"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["815417"], {
741541(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_hardware_api_wear_engine_api_wearengine_arkts_api_wearengine_api_wearengine_api_md_51d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-hardware-api-wear-engine-api-wearengine-arkts-api-wearengine-api-wearengine-api-md-51d.json
var site_docs_ref_system_hardware_api_wear_engine_api_wearengine_arkts_api_wearengine_api_wearengine_api_md_51d_namespaceObject = JSON.parse('{"id":"system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api","title":"wearEngine(穿戴设备能力开放)","description":"本模块提供手机与穿戴设备侧的交互能力。应用可调用模块内接口实现如下功能：","source":"@site/docs-ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api.md","sourceDirName":"system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api","slug":"/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api","permalink":"/harmonyos-docs-site/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"wearEngine(穿戴设备能力开放)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/wearengine_api","kit":"系统","last_updated":"2026-04-22","slug":"wearengine_api"},"sidebar":"ref","previous":{"title":"机械体控制模块错误码","permalink":"/harmonyos-docs-site/ref/system-hardware-api/mechanic-kit-api/mechanic-arkts-errcode/errorcode-mechanic/errorcode-mechanic"},"next":{"title":"ArkTS API错误码","permalink":"/harmonyos-docs-site/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api.md


const frontMatter = {
	title: 'wearEngine(穿戴设备能力开放)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/wearengine_api',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'wearengine_api'
};
const contentTitle = 'wearEngine(穿戴设备能力开放)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "wearEngine.getAuthClient",
  "id": "wearenginegetauthclient",
  "level": 2
}, {
  "value": "AuthClient",
  "id": "authclient",
  "level": 2
}, {
  "value": "requestAuthorization",
  "id": "requestauthorization",
  "level": 3
}, {
  "value": "getAuthorization",
  "id": "getauthorization",
  "level": 3
}, {
  "value": "AuthorizationBase",
  "id": "authorizationbase",
  "level": 2
}, {
  "value": "Permission",
  "id": "permission",
  "level": 2
}, {
  "value": "AuthorizationRequest",
  "id": "authorizationrequest",
  "level": 2
}, {
  "value": "AuthorizationResponse",
  "id": "authorizationresponse",
  "level": 2
}, {
  "value": "wearEngine.getDeviceClient",
  "id": "wearenginegetdeviceclient",
  "level": 2
}, {
  "value": "DeviceClient",
  "id": "deviceclient",
  "level": 2
}, {
  "value": "getConnectedDevices",
  "id": "getconnecteddevices",
  "level": 3
}, {
  "value": "Device",
  "id": "device",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 3
}, {
  "value": "isWearEngineCapabilitySupported",
  "id": "iswearenginecapabilitysupported",
  "level": 3
}, {
  "value": "isDeviceCapabilitySupported",
  "id": "isdevicecapabilitysupported",
  "level": 3
}, {
  "value": "getSerialNumber",
  "id": "getserialnumber",
  "level": 3
}, {
  "value": "WearEngineCapability",
  "id": "wearenginecapability",
  "level": 2
}, {
  "value": "DeviceCapability",
  "id": "devicecapability",
  "level": 2
}, {
  "value": "DeviceCategory",
  "id": "devicecategory",
  "level": 2
}, {
  "value": "OsCategory",
  "id": "oscategory",
  "level": 2
}, {
  "value": "wearEngine.getMonitorClient",
  "id": "wearenginegetmonitorclient",
  "level": 2
}, {
  "value": "MonitorClient",
  "id": "monitorclient",
  "level": 2
}, {
  "value": "queryStatus",
  "id": "querystatus",
  "level": 3
}, {
  "value": "subscribeEvent",
  "id": "subscribeevent",
  "level": 3
}, {
  "value": "unsubscribeEvent",
  "id": "unsubscribeevent",
  "level": 3
}, {
  "value": "MonitorItem",
  "id": "monitoritem",
  "level": 2
}, {
  "value": "MonitorEvent",
  "id": "monitorevent",
  "level": 2
}, {
  "value": "MonitorData",
  "id": "monitordata",
  "level": 2
}, {
  "value": "MonitorEventData",
  "id": "monitoreventdata",
  "level": 2
}, {
  "value": "wearEngine.getP2pClient",
  "id": "wearenginegetp2pclient",
  "level": 2
}, {
  "value": "P2pClient",
  "id": "p2pclient",
  "level": 2
}, {
  "value": "isRemoteAppInstalled",
  "id": "isremoteappinstalled",
  "level": 3
}, {
  "value": "getRemoteAppVersion",
  "id": "getremoteappversion",
  "level": 3
}, {
  "value": "startRemoteApp",
  "id": "startremoteapp",
  "level": 3
}, {
  "value": "sendMessage",
  "id": "sendmessage",
  "level": 3
}, {
  "value": "transferFile",
  "id": "transferfile",
  "level": 3
}, {
  "value": "cancelFileTransfer",
  "id": "cancelfiletransfer",
  "level": 3
}, {
  "value": "registerMessageReceiver",
  "id": "registermessagereceiver",
  "level": 3
}, {
  "value": "registerFileReceiver",
  "id": "registerfilereceiver",
  "level": 3
}, {
  "value": "unregisterMessageReceiver",
  "id": "unregistermessagereceiver",
  "level": 3
}, {
  "value": "unregisterFileReceiver",
  "id": "unregisterfilereceiver",
  "level": 3
}, {
  "value": "AppInfo",
  "id": "appinfo",
  "level": 2
}, {
  "value": "P2pResultCode",
  "id": "p2presultcode",
  "level": 2
}, {
  "value": "P2pResult",
  "id": "p2presult",
  "level": 2
}, {
  "value": "P2pMessage",
  "id": "p2pmessage",
  "level": 2
}, {
  "value": "P2pFile",
  "id": "p2pfile",
  "level": 2
}, {
  "value": "P2pAppParam",
  "id": "p2pappparam",
  "level": 2
}, {
  "value": "wearEngine.getNotifyClient",
  "id": "wearenginegetnotifyclient",
  "level": 2
}, {
  "value": "NotifyClient",
  "id": "notifyclient",
  "level": 2
}, {
  "value": "notify",
  "id": "notify",
  "level": 3
}, {
  "value": "NotificationOptions",
  "id": "notificationoptions",
  "level": 2
}, {
  "value": "属性",
  "id": "属性-1",
  "level": 3
}, {
  "value": "onAction",
  "id": "onaction",
  "level": 3
}, {
  "value": "Notification",
  "id": "notification",
  "level": 2
}, {
  "value": "NotificationType",
  "id": "notificationtype",
  "level": 2
}, {
  "value": "NotificationButton",
  "id": "notificationbutton",
  "level": 2
}, {
  "value": "ButtonId",
  "id": "buttonid",
  "level": 2
}, {
  "value": "NotificationFeedback",
  "id": "notificationfeedback",
  "level": 2
}, {
  "value": "NotificationAction",
  "id": "notificationaction",
  "level": 2
}, {
  "value": "NotificationErrorCode",
  "id": "notificationerrorcode",
  "level": 2
}, {
  "value": "wearEngine.getSensorClient",
  "id": "wearenginegetsensorclient",
  "level": 2
}, {
  "value": "SensorClient",
  "id": "sensorclient",
  "level": 2
}, {
  "value": "getSensorList",
  "id": "getsensorlist",
  "level": 3
}, {
  "value": "subscribeSensor",
  "id": "subscribesensor",
  "level": 3
}, {
  "value": "unsubscribeSensor",
  "id": "unsubscribesensor",
  "level": 3
}, {
  "value": "SensorType",
  "id": "sensortype",
  "level": 2
}, {
  "value": "Sensor",
  "id": "sensor",
  "level": 2
}, {
  "value": "SensorData",
  "id": "sensordata",
  "level": 2
}, {
  "value": "SensorErrorCode",
  "id": "sensorerrorcode",
  "level": 2
}, {
  "value": "SensorResult",
  "id": "sensorresult",
  "level": 2
}, {
  "value": "on/off订阅事件",
  "id": "onoff订阅事件",
  "level": 2
}, {
  "value": "wearEngine.on",
  "id": "wearengineon",
  "level": 3
}, {
  "value": "wearEngine.off",
  "id": "wearengineoff",
  "level": 3
}, {
  "value": "wearEngine.destroy",
  "id": "wearenginedestroy",
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
        id: "wearengine穿戴设备能力开放",
        children: "wearEngine(穿戴设备能力开放)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块提供手机与穿戴设备侧的交互能力。应用可调用模块内接口实现如下功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取与当前设备已连接配对的设备列表、与对端设备互通消息互送文件等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查询穿戴设备状态、向穿戴设备发送模板化通知、接收穿戴设备传感器的相关数据等。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(728978)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["针对系统能力SystemCapability.Health.WearEngine，请先使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/common-basic-arkts/js-apis-syscap/js-apis-syscap#caniuse",
        children: "canIUse()"
      }), "接口判断当前设备是否支持此syscap及对应接口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本"
        })
      }), "：5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { wearEngine } from '@kit.WearEngine';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wearenginegetauthclient",
      children: "wearEngine.getAuthClient"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAuthClient(context: common.Context): AuthClient"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于获取权限管理的客户端。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中返回801错误码。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context#context",
              children: "common.Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Context上下文，仅支持包含connectServiceExtensionAbility方法的Context（例：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#uiabilitycontext-1",
              children: "UIAbilityContext"
            }), "）。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#authclient",
              children: "AuthClient"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "权限管理客户端，存储了权限模块的相关方法。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code",
        children: "Wear Engine ArkTS API错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008509999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008509999"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { wearEngine } from '@kit.WearEngine';\n\nlet authClient: wearEngine.AuthClient = wearEngine.getAuthClient(this.getUIContext().getHostContext());\nconsole.info(`Succeeded in getting auth client`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "authclient",
      children: "AuthClient"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["权限管理客户端类，由", (0,jsx_runtime.jsx)(_components.a, {
        href: "#wearenginegetauthclient",
        children: "wearEngine.getAuthClient"
      }), "返回得到。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requestauthorization",
      children: "requestAuthorization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "requestAuthorization(request: AuthorizationRequest): Promise<AuthorizationResponse>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向手机用户申请需要授权的权限，返回申请的权限中用户已授权的权限，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中返回801错误码。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#authorizationrequest",
              children: "AuthorizationRequest"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "权限请求类。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#authorizationresponse",
              children: "AuthorizationResponse"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回权限响应类。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code",
        children: "Wear Engine ArkTS API错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500001-%E7%BD%91%E7%BB%9C%E9%94%99%E8%AF%AF",
              children: "1008500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network error. The network is unavailable."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500004-%E5%BA%94%E7%94%A8%E6%9C%AA%E7%94%B3%E8%AF%B7wear-engine%E6%9C%8D%E5%8A%A1",
              children: "1008500004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App has not applied for the Wear Engine service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500006-%E7%94%A8%E6%88%B7%E6%9C%AA%E5%90%8C%E6%84%8F%E9%9A%90%E7%A7%81%E6%8E%88%E6%9D%83",
              children: "1008500006"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User privacy is not agreed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500007-%E7%A9%BF%E6%88%B4%E8%AE%BE%E5%A4%87%E4%BE%A7%E8%83%BD%E5%8A%9B%E4%B8%8D%E6%94%AF%E6%8C%81",
              children: "1008500007"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The device capability is not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500008-%E8%B4%A6%E5%8F%B7%E6%9C%AA%E7%99%BB%E5%BD%95",
              children: "1008500008"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. The user has not logged in with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500009-%E8%B4%A6%E5%8F%B7%E5%BC%82%E5%B8%B8",
              children: "1008500009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. Failed to obtain account information with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008509999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008509999"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { wearEngine } from '@kit.WearEngine';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet authClient: wearEngine.AuthClient = wearEngine.getAuthClient(this.getUIContext().getHostContext());\n\nlet request: wearEngine.AuthorizationRequest = {\n  permissions: [wearEngine.Permission.USER_STATUS]\n}\n\nauthClient.requestAuthorization(request).then(result => {\n  console.info(`Succeeded in requesting authorize, authorized permissions is ${result.permissions}`);\n}).catch((error: BusinessError) => {\n  console.error(`Failed to request authorize. Code is ${error.code}, message is ${error.message}`);\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getauthorization",
      children: "getAuthorization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getAuthorization(): Promise<AuthorizationResponse>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取用户已授权的权限，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中返回801错误码。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#authorizationresponse",
              children: "AuthorizationResponse"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回权限响应类。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code",
        children: "Wear Engine ArkTS API错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500001-%E7%BD%91%E7%BB%9C%E9%94%99%E8%AF%AF",
              children: "1008500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network error. The network is unavailable."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500004-%E5%BA%94%E7%94%A8%E6%9C%AA%E7%94%B3%E8%AF%B7wear-engine%E6%9C%8D%E5%8A%A1",
              children: "1008500004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App has not applied for the Wear Engine service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500006-%E7%94%A8%E6%88%B7%E6%9C%AA%E5%90%8C%E6%84%8F%E9%9A%90%E7%A7%81%E6%8E%88%E6%9D%83",
              children: "1008500006"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User privacy is not agreed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500007-%E7%A9%BF%E6%88%B4%E8%AE%BE%E5%A4%87%E4%BE%A7%E8%83%BD%E5%8A%9B%E4%B8%8D%E6%94%AF%E6%8C%81",
              children: "1008500007"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The device capability is not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500008-%E8%B4%A6%E5%8F%B7%E6%9C%AA%E7%99%BB%E5%BD%95",
              children: "1008500008"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. The user has not logged in with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500009-%E8%B4%A6%E5%8F%B7%E5%BC%82%E5%B8%B8",
              children: "1008500009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. Failed to obtain account information with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008509999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008509999"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { wearEngine } from '@kit.WearEngine';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet authClient: wearEngine.AuthClient = wearEngine.getAuthClient(this.getUIContext().getHostContext());\n\nauthClient.getAuthorization().then(result => {\n  console.info(`Succeeded in getting authorized permissions, authorized permissions is ${result.permissions}`);\n}).catch((error: BusinessError) => {\n  console.error(`Failed to get authorized permissions. Code is ${error.code}, message is ${error.message}`);\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "authorizationbase",
      children: "AuthorizationBase"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "权限控制模块输入输出的基类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
            children: "permissions"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#permission",
              children: "Permission"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "权限枚举类型的数组。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "permission",
      children: "Permission"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "权限枚举类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
            children: "USER_STATUS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取用户状态权限。如：穿戴设备的佩戴状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MOTION_SENSOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取对端设备运动传感器数据权限。如：加速度传感器数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEALTH_SENSOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取对端设备人体传感器数据权限。如：心率传感器数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEVICE_IDENTIFIER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取已连接穿戴设备的序列号。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "authorizationrequest",
      children: "AuthorizationRequest"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["权限请求类，继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#authorizationbase",
        children: "AuthorizationBase"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "authorizationresponse",
      children: "AuthorizationResponse"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["权限响应类，继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "#authorizationbase",
        children: "AuthorizationBase"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wearenginegetdeviceclient",
      children: "wearEngine.getDeviceClient"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getDeviceClient(context: common.Context): DeviceClient"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于获取Device模块的客户端。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context#context",
              children: "common.Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Context上下文，仅支持包含connectServiceExtensionAbility方法的Context（例：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#uiabilitycontext-1",
              children: "UIAbilityContext"
            }), "）。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#deviceclient",
              children: "DeviceClient"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device客户端，存储了Device模块的相关方法。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code",
        children: "Wear Engine ArkTS API错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008509999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008509999"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { wearEngine } from '@kit.WearEngine';\n\nlet deviceClient: wearEngine.DeviceClient = wearEngine.getDeviceClient(this.getUIContext().getHostContext());\nconsole.info(`Succeeded in getting device client.`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "deviceclient",
      children: "DeviceClient"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Device客户端类。由接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "#wearenginegetdeviceclient",
        children: "wearEngine.getDeviceClient"
      }), "返回得到。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getconnecteddevices",
      children: "getConnectedDevices"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getConnectedDevices(): Promise<Device[]>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前已连接且支持wearEngine能力集的设备。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#device",
              children: "Device"
            }), "[]>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回设备列表。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code",
        children: "Wear Engine ArkTS API错误码"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500001-%E7%BD%91%E7%BB%9C%E9%94%99%E8%AF%AF",
              children: "1008500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network error. The network is unavailable."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500004-%E5%BA%94%E7%94%A8%E6%9C%AA%E7%94%B3%E8%AF%B7wear-engine%E6%9C%8D%E5%8A%A1",
              children: "1008500004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App has not applied for the Wear Engine service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500006-%E7%94%A8%E6%88%B7%E6%9C%AA%E5%90%8C%E6%84%8F%E9%9A%90%E7%A7%81%E6%8E%88%E6%9D%83",
              children: "1008500006"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User privacy is not agreed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500008-%E8%B4%A6%E5%8F%B7%E6%9C%AA%E7%99%BB%E5%BD%95",
              children: "1008500008"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. The user has not logged in with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500009-%E8%B4%A6%E5%8F%B7%E5%BC%82%E5%B8%B8",
              children: "1008500009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. Failed to obtain account information with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008509999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008509999"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { wearEngine } from '@kit.WearEngine';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet deviceClient: wearEngine.DeviceClient = wearEngine.getDeviceClient(this.getUIContext().getHostContext());\ndeviceClient.getConnectedDevices().then((devices) => {\n  console.info(`Succeeded in getting devices, devices number is ${devices.length}.`);\n}).catch((error: BusinessError) => {\n  console.error(`Failed to get devices. Code is ${error.code}, message is ${error.message}.`);\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "device",
      children: "Device"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["穿戴设备信息类。由接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getconnecteddevices",
        children: "getConnectedDevices"
      }), "返回。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性",
      children: "属性"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "randomId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备随机唯一标识符，每次绑定自动生成。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "category"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#devicecategory",
              children: "DeviceCategory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "softwareVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备软件版本号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备型号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isSmartWatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备是否为智能表。true：是，false：不是。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "osCategory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oscategory",
              children: "OsCategory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备的操作系统类别。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 5.1.0(18)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "iswearenginecapabilitysupported",
      children: "isWearEngineCapabilitySupported"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isWearEngineCapabilitySupported(capability: WearEngineCapability): Promise<boolean>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getconnecteddevices",
        children: "getConnectedDevices"
      }), "接口获取到已连接的穿戴设备后，查询设备是否支持指定的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#wearenginecapability",
        children: "WearEngineCapability"
      }), "，使用Promise异步回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中返回801错误码。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "capability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#wearenginecapability",
              children: "WearEngineCapability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的WearEngine能力。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: "Promise<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回是否支持指定能力的查询结果。  true：支持，false：不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code",
        children: "Wear Engine ArkTS API错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500001-%E7%BD%91%E7%BB%9C%E9%94%99%E8%AF%AF",
              children: "1008500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network error. The network is unavailable."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500002-%E6%97%A0%E7%BB%91%E5%AE%9A%E8%AE%BE%E5%A4%87",
              children: "1008500002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No device is bound."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500003-%E8%AE%BE%E5%A4%87%E6%9C%AA%E8%BF%9E%E6%8E%A5",
              children: "1008500003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device disconnected."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500004-%E5%BA%94%E7%94%A8%E6%9C%AA%E7%94%B3%E8%AF%B7wear-engine%E6%9C%8D%E5%8A%A1",
              children: "1008500004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App has not applied for the Wear Engine service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500006-%E7%94%A8%E6%88%B7%E6%9C%AA%E5%90%8C%E6%84%8F%E9%9A%90%E7%A7%81%E6%8E%88%E6%9D%83",
              children: "1008500006"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User privacy is not agreed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500008-%E8%B4%A6%E5%8F%B7%E6%9C%AA%E7%99%BB%E5%BD%95",
              children: "1008500008"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. The user has not logged in with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500009-%E8%B4%A6%E5%8F%B7%E5%BC%82%E5%B8%B8",
              children: "1008500009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. Failed to obtain account information with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008509999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008509999"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { wearEngine } from '@kit.WearEngine';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet deviceClient: wearEngine.DeviceClient = wearEngine.getDeviceClient(this.getUIContext().getHostContext());\nlet devices: wearEngine.Device[] = await deviceClient.getConnectedDevices();\n\nif (devices.length > 0) {\n  // 从得到的设备列表中选取目标设备，并定义为device(假设数组中存在已连接设备且第一位即为目标设备)\n  let device: wearEngine.Device = devices[0];\n\n  device.isWearEngineCapabilitySupported(wearEngine.WearEngineCapability.P2P_COMMUNICATION).then((isSupportP2P) => {\n    console.info(`Succeeded in checking p2p capability, result is ${isSupportP2P}`);\n  }).catch((error: BusinessError) => {\n    console.error(`Failed to check p2p capability. Code is ${error.code}, message is ${error.message}`);\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "isdevicecapabilitysupported",
      children: "isDeviceCapabilitySupported"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isDeviceCapabilitySupported(capability: DeviceCapability): Promise<boolean>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getconnecteddevices",
        children: "getConnectedDevices"
      }), "接口获取到已连接的穿戴设备后，查询设备是否支持指定的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#devicecapability",
        children: "DeviceCapability"
      }), "，使用Promise异步回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中返回801错误码。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "capability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#devicecapability",
              children: "DeviceCapability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的Device能力。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: "Promise<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回是否支持指定能力的查询结果。  true：支持，false：不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code",
        children: "Wear Engine ArkTS API错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500001-%E7%BD%91%E7%BB%9C%E9%94%99%E8%AF%AF",
              children: "1008500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network error. The network is unavailable."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500002-%E6%97%A0%E7%BB%91%E5%AE%9A%E8%AE%BE%E5%A4%87",
              children: "1008500002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No device is bound."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500003-%E8%AE%BE%E5%A4%87%E6%9C%AA%E8%BF%9E%E6%8E%A5",
              children: "1008500003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device disconnected."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500004-%E5%BA%94%E7%94%A8%E6%9C%AA%E7%94%B3%E8%AF%B7wear-engine%E6%9C%8D%E5%8A%A1",
              children: "1008500004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App has not applied for the Wear Engine service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500006-%E7%94%A8%E6%88%B7%E6%9C%AA%E5%90%8C%E6%84%8F%E9%9A%90%E7%A7%81%E6%8E%88%E6%9D%83",
              children: "1008500006"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User privacy is not agreed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500008-%E8%B4%A6%E5%8F%B7%E6%9C%AA%E7%99%BB%E5%BD%95",
              children: "1008500008"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. The user has not logged in with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500009-%E8%B4%A6%E5%8F%B7%E5%BC%82%E5%B8%B8",
              children: "1008500009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. Failed to obtain account information with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008509999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008509999"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { wearEngine } from '@kit.WearEngine';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet deviceClient: wearEngine.DeviceClient = wearEngine.getDeviceClient(this.getUIContext().getHostContext());\nlet devices: wearEngine.Device[] = await deviceClient.getConnectedDevices();\n\nif (devices.length > 0) {\n  // 从得到的设备列表中选取目标设备，并定义为device(假设数组中存在已连接设备且第一位即为目标设备)\n  let device: wearEngine.Device = devices[0];\n\n  device.isDeviceCapabilitySupported(wearEngine.DeviceCapability.CBT_I).then((isSupportCBTI) => {\n    console.info(`Succeeded in checking CBTI capability, result is ${isSupportCBTI}`);\n  }).catch((error: BusinessError) => {\n    console.error(`Failed to check CBTI capability. Code is ${error.code}, message is ${error.message}`);\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getserialnumber",
      children: "getSerialNumber"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getSerialNumber(): Promise<string>"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getconnecteddevices",
        children: "getConnectedDevices"
      }), "接口获取到已连接的穿戴设备后，查询设备的SN，使用Promise异步回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中返回801错误码。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: "Promise<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回设备SN。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code",
        children: "Wear Engine ArkTS API错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500001-%E7%BD%91%E7%BB%9C%E9%94%99%E8%AF%AF",
              children: "1008500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network error. The network is unavailable."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500002-%E6%97%A0%E7%BB%91%E5%AE%9A%E8%AE%BE%E5%A4%87",
              children: "1008500002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No device is bound."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500003-%E8%AE%BE%E5%A4%87%E6%9C%AA%E8%BF%9E%E6%8E%A5",
              children: "1008500003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device disconnected."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500004-%E5%BA%94%E7%94%A8%E6%9C%AA%E7%94%B3%E8%AF%B7wear-engine%E6%9C%8D%E5%8A%A1",
              children: "1008500004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App has not applied for the Wear Engine service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500005-%E7%94%A8%E6%88%B7%E6%9C%AA%E6%8E%88%E6%9D%83",
              children: "1008500005"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The HUAWEI ID is not authorized."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500006-%E7%94%A8%E6%88%B7%E6%9C%AA%E5%90%8C%E6%84%8F%E9%9A%90%E7%A7%81%E6%8E%88%E6%9D%83",
              children: "1008500006"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User privacy is not agreed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500008-%E8%B4%A6%E5%8F%B7%E6%9C%AA%E7%99%BB%E5%BD%95",
              children: "1008500008"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. The user has not logged in with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500009-%E8%B4%A6%E5%8F%B7%E5%BC%82%E5%B8%B8",
              children: "1008500009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. Failed to obtain account information with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008509999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008509999"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { wearEngine } from '@kit.WearEngine';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet deviceClient: wearEngine.DeviceClient = wearEngine.getDeviceClient(this.getUIContext().getHostContext());\nlet devices: wearEngine.Device[] = await deviceClient.getConnectedDevices();\n\nif (devices.length > 0) {\n  // 从得到的设备列表中选取目标设备，并定义为device(假设数组中存在已连接设备且第一位即为目标设备)\n  let device: wearEngine.Device = devices[0];\n\n  device.getSerialNumber().then((sn) => {\n    console.info(`Succeeded in getting device SN, result is ${sn}`);\n  }).catch((error: BusinessError) => {\n    console.error(`Failed to get device SN. Code is ${error.code}, message is ${error.message}`);\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wearenginecapability",
      children: "WearEngineCapability"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WearEngine能力集枚举类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
            children: "P2P_COMMUNICATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P2p(peer-to-peer)能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MONITOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monitor能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NOTIFICATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Notify能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SENSOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensor能力。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "devicecapability",
      children: "DeviceCapability"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Device能力集枚举类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "APP_INSTALLATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持应用安装能力。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CBT_I"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CBTI数字疗法能力。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "devicecategory",
      children: "DeviceCategory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备类型枚举类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
            children: "DEFAULT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手机或平板类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WATCH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手表类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BAND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手环类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OTHER_DEVICES"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "255"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "其它设备类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "oscategory",
      children: "OsCategory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备的操作系统类型枚举类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在wearable中正常调用，在其他设备类型中调用无效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.0(18)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "HARMONYOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HarmonyOS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IOS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IOS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OTHER_OS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "255"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "其他类型"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wearenginegetmonitorclient",
      children: "wearEngine.getMonitorClient"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getMonitorClient(context: common.Context): MonitorClient"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于获取Monitor模块的客户端。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 对于6.0.2(22)及之前版本，该接口在Phone、Tablet中可正常调用，在其他设备类型中返回801错误码。对于6.1.0(23)及之后版本，该接口在Phone、Tablet、Wearable中可正常调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context#context",
              children: "common.Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Context上下文，仅支持包含connectServiceExtensionAbility方法的Context（例：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#uiabilitycontext-1",
              children: "UIAbilityContext"
            }), "）。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#monitorclient",
              children: "MonitorClient"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monitor客户端，存储了Monitor模块的相关方法。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code",
        children: "Wear Engine ArkTS API错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008509999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008509999"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { wearEngine } from '@kit.WearEngine';\n\nlet monitorClient: wearEngine.MonitorClient = wearEngine.getMonitorClient(this.getUIContext().getHostContext());\nconsole.info(`Succeeded in getting monitor client.`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "monitorclient",
      children: "MonitorClient"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Monitor客户端类。由接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "#wearenginegetmonitorclient",
        children: "wearEngine.getMonitorClient"
      }), "返回得到。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "querystatus",
      children: "queryStatus"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "queryStatus(deviceRandomId: string, item: MonitorItem): Promise<MonitorData>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询指定设备的指定状态，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中返回801错误码。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "deviceRandomId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#device",
              children: "Device"
            }), "的随机标识符，用于指定本次查询的设备。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "item"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#monitoritem",
              children: "MonitorItem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可查询的设备状态枚举，用于指定本次查询的状态。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#monitordata",
              children: "MonitorData"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise对象，返回查询的结果。不同状态返回值的含义请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#monitoritem",
              children: "MonitorItem"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code",
        children: "Wear Engine ArkTS API错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500001-%E7%BD%91%E7%BB%9C%E9%94%99%E8%AF%AF",
              children: "1008500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network error. The network is unavailable."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500002-%E6%97%A0%E7%BB%91%E5%AE%9A%E8%AE%BE%E5%A4%87",
              children: "1008500002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No device is bound."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500003-%E8%AE%BE%E5%A4%87%E6%9C%AA%E8%BF%9E%E6%8E%A5",
              children: "1008500003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device disconnected."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500004-%E5%BA%94%E7%94%A8%E6%9C%AA%E7%94%B3%E8%AF%B7wear-engine%E6%9C%8D%E5%8A%A1",
              children: "1008500004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App has not applied for the Wear Engine service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500005-%E7%94%A8%E6%88%B7%E6%9C%AA%E6%8E%88%E6%9D%83",
              children: "1008500005"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The HUAWEI ID is not authorized."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500006-%E7%94%A8%E6%88%B7%E6%9C%AA%E5%90%8C%E6%84%8F%E9%9A%90%E7%A7%81%E6%8E%88%E6%9D%83",
              children: "1008500006"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User privacy is not agreed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500007-%E7%A9%BF%E6%88%B4%E8%AE%BE%E5%A4%87%E4%BE%A7%E8%83%BD%E5%8A%9B%E4%B8%8D%E6%94%AF%E6%8C%81",
              children: "1008500007"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The device capability is not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500008-%E8%B4%A6%E5%8F%B7%E6%9C%AA%E7%99%BB%E5%BD%95",
              children: "1008500008"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. The user has not logged in with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500009-%E8%B4%A6%E5%8F%B7%E5%BC%82%E5%B8%B8",
              children: "1008500009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. Failed to obtain account information with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500010-%E6%97%A0%E6%95%88%E8%AE%BE%E5%A4%87id",
              children: "1008500010"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device ID is invalid."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008509999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008509999"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { wearEngine } from '@kit.WearEngine';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet deviceClient: wearEngine.DeviceClient = wearEngine.getDeviceClient(this.getUIContext().getHostContext());\nlet monitorClient: wearEngine.MonitorClient = wearEngine.getMonitorClient(this.getUIContext().getHostContext());\nlet devices: wearEngine.Device[] = await deviceClient.getConnectedDevices();\n\nif (devices.length > 0) {\n  // 从得到的设备列表中选取目标设备，并定义为device(假设数组中存在已连接设备且第一位即为目标设备)\n  let device: wearEngine.Device = devices[0];\n\n  monitorClient.queryStatus(device.randomId, wearEngine.MonitorItem.WEAR_STATUS).then((result) => {\n    console.info(`Succeeded in querying wear status, result is ${result.code}.`);\n  }).catch((error: BusinessError) => {\n    console.error(`Failed to query wear status. Code is ${error.code}, message is ${error.message}.`);\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "subscribeevent",
      children: "subscribeEvent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "subscribeEvent(deviceRandomId: string, type: MonitorEvent, callback: Callback<MonitorEventData>): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "监听指定设备的指定状态变化事件，当状态发生变化时使用callback异步回调，订阅成功与否使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 对于6.0.2(22)及之前版本，该接口在Phone、Tablet中可正常调用，在其他设备类型中返回801错误码。对于6.1.0(23)及之后版本，该接口在Phone、Tablet中可正常调用，在Wearable中可以订阅设备连接状态变化事件，订阅其他事件返回801错误码。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "deviceRandomId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#device",
              children: "Device"
            }), "的随机标识符，用于指定本次订阅的设备。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#monitorevent",
              children: "MonitorEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可订阅的设备状态枚举，用于指定本次订阅监听的设备状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#monitoreventdata",
              children: "MonitorEventData"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数，状态发生变化后执行，传入", (0,jsx_runtime.jsx)(_components.a, {
              href: "#monitoreventdata",
              children: "MonitorEventData"
            }), "类。建议保证回调函数的生命周期延长至取消监听时，详情请见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#unsubscribeevent",
              children: "unsubscribeEvent"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: "Promise对象。无结果返回的Promise对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code",
        children: "Wear Engine ArkTS API错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500001-%E7%BD%91%E7%BB%9C%E9%94%99%E8%AF%AF",
              children: "1008500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network error. The network is unavailable."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500002-%E6%97%A0%E7%BB%91%E5%AE%9A%E8%AE%BE%E5%A4%87",
              children: "1008500002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No device is bound."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500003-%E8%AE%BE%E5%A4%87%E6%9C%AA%E8%BF%9E%E6%8E%A5",
              children: "1008500003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device disconnected."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500004-%E5%BA%94%E7%94%A8%E6%9C%AA%E7%94%B3%E8%AF%B7wear-engine%E6%9C%8D%E5%8A%A1",
              children: "1008500004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App has not applied for the Wear Engine service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500005-%E7%94%A8%E6%88%B7%E6%9C%AA%E6%8E%88%E6%9D%83",
              children: "1008500005"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The HUAWEI ID is not authorized."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500006-%E7%94%A8%E6%88%B7%E6%9C%AA%E5%90%8C%E6%84%8F%E9%9A%90%E7%A7%81%E6%8E%88%E6%9D%83",
              children: "1008500006"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User privacy is not agreed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500007-%E7%A9%BF%E6%88%B4%E8%AE%BE%E5%A4%87%E4%BE%A7%E8%83%BD%E5%8A%9B%E4%B8%8D%E6%94%AF%E6%8C%81",
              children: "1008500007"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The device capability is not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500008-%E8%B4%A6%E5%8F%B7%E6%9C%AA%E7%99%BB%E5%BD%95",
              children: "1008500008"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. The user has not logged in with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500009-%E8%B4%A6%E5%8F%B7%E5%BC%82%E5%B8%B8",
              children: "1008500009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. Failed to obtain account information with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500010-%E6%97%A0%E6%95%88%E8%AE%BE%E5%A4%87id",
              children: "1008500010"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device ID is invalid."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500012-%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0%E8%BF%87%E5%A4%9A",
              children: "1008500012"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Too many callbacks of the same type."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008509999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008509999"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { wearEngine } from '@kit.WearEngine';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet deviceClient: wearEngine.DeviceClient = wearEngine.getDeviceClient(this.getUIContext().getHostContext());\nlet monitorClient: wearEngine.MonitorClient = wearEngine.getMonitorClient(this.getUIContext().getHostContext());\nlet devices: wearEngine.Device[] = await deviceClient.getConnectedDevices();\n\nif (devices.length > 0) {\n  // 从得到的设备列表中选取目标设备，并定义为device(假设数组中存在已连接设备且第一位即为目标设备)\n  let device: wearEngine.Device = devices[0];\n\n  let callback = (monitorEventData: wearEngine.MonitorEventData) => {\n    console.info(`Succeeded in listening change of ${monitorEventData.event}, the new status is ${monitorEventData.data}.`)\n  }\n  monitorClient.subscribeEvent(device.randomId, wearEngine.MonitorEvent.EVENT_WEAR_STATUS_CHANGED, callback).then(() => {\n    console.info(`Succeeded in subscribing wear status.`);\n  }).catch((error: BusinessError) => {\n    console.error(`Failed to subscribe wear status. Code is ${error.code}, message is ${error.message}.`);\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "unsubscribeevent",
      children: "unsubscribeEvent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "unsubscribeEvent(deviceRandomId: string, type: MonitorEvent, callback: Callback<MonitorEventData>): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消订阅监听指定设备的指定状态变化事件，取消订阅成功与否使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 对于6.0.2(22)及之前版本，该接口在Phone、Tablet中可正常调用，在其他设备类型中返回801错误码。对于6.1.0(23)及之后版本，该接口在Phone、Tablet中可正常调用，在Wearable中可以取消订阅设备连接状态变化事件，取消订阅其他事件返回801错误码。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "deviceRandomId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#device",
              children: "Device"
            }), "的随机标识符，用于指定本次取消订阅的设备。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#monitorevent",
              children: "MonitorEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可订阅的设备状态枚举，用于指定本次取消订阅监听的设备状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#monitoreventdata",
              children: "MonitorEventData"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数。此处需保证传入的对象与调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#subscribeevent",
              children: "subscribeEvent"
            }), "接口时传入的回调函数为同一个对象。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: "Promise对象。无结果返回的Promise对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code",
        children: "Wear Engine ArkTS API错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500001-%E7%BD%91%E7%BB%9C%E9%94%99%E8%AF%AF",
              children: "1008500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network error. The network is unavailable."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500002-%E6%97%A0%E7%BB%91%E5%AE%9A%E8%AE%BE%E5%A4%87",
              children: "1008500002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No device is bound."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500003-%E8%AE%BE%E5%A4%87%E6%9C%AA%E8%BF%9E%E6%8E%A5",
              children: "1008500003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device disconnected."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500004-%E5%BA%94%E7%94%A8%E6%9C%AA%E7%94%B3%E8%AF%B7wear-engine%E6%9C%8D%E5%8A%A1",
              children: "1008500004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App has not applied for the Wear Engine service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500005-%E7%94%A8%E6%88%B7%E6%9C%AA%E6%8E%88%E6%9D%83",
              children: "1008500005"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The HUAWEI ID is not authorized."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500006-%E7%94%A8%E6%88%B7%E6%9C%AA%E5%90%8C%E6%84%8F%E9%9A%90%E7%A7%81%E6%8E%88%E6%9D%83",
              children: "1008500006"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User privacy is not agreed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500007-%E7%A9%BF%E6%88%B4%E8%AE%BE%E5%A4%87%E4%BE%A7%E8%83%BD%E5%8A%9B%E4%B8%8D%E6%94%AF%E6%8C%81",
              children: "1008500007"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The device capability is not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500008-%E8%B4%A6%E5%8F%B7%E6%9C%AA%E7%99%BB%E5%BD%95",
              children: "1008500008"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. The user has not logged in with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500009-%E8%B4%A6%E5%8F%B7%E5%BC%82%E5%B8%B8",
              children: "1008500009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. Failed to obtain account information with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500010-%E6%97%A0%E6%95%88%E8%AE%BE%E5%A4%87id",
              children: "1008500010"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device ID is invalid."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008509999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008509999"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { wearEngine } from '@kit.WearEngine';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet deviceClient: wearEngine.DeviceClient = wearEngine.getDeviceClient(this.getUIContext().getHostContext());\nlet devices: wearEngine.Device[] = await deviceClient.getConnectedDevices();\nlet monitorClient: wearEngine.MonitorClient = wearEngine.getMonitorClient(this.getUIContext().getHostContext());\n\nif (devices.length > 0) {\n  // 从得到的设备列表中选取目标设备，并定义为device(假设数组中存在已连接设备且第一位即为目标设备)\n  let device: wearEngine.Device = devices[0];\n\n  // 解注册时回调函数需要保证和注册时为同一个对象\n  let callback = (monitorEventData: wearEngine.MonitorEventData) => {\n    console.info(`Succeeded in listening change of ${monitorEventData.event}, the new status is ${monitorEventData.data}.`)\n  }\n  // 创建待删除的订阅任务\n  await monitorClient.subscribeEvent(device.randomId, wearEngine.MonitorEvent.EVENT_WEAR_STATUS_CHANGED, callback);\n  // 删除之前创建的订阅任务\n  monitorClient.unsubscribeEvent(device.randomId, wearEngine.MonitorEvent.EVENT_WEAR_STATUS_CHANGED, callback).then(() => {\n    console.info(`Succeeded in unsubscribing wear status`);\n  }).catch((error: BusinessError) => {\n    console.error(`Failed to unsubscribe wear status. Code is ${error.code}, message is ${error.message}.`);\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "monitoritem",
      children: "MonitorItem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备状态的枚举类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
            children: "WEAR_STATUS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wearStatus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "佩戴状态。返回值含义：  1：佩戴  2：未佩戴"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "POWER_STATUS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "powerStatus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "电量状态。返回值含义：剩余电量百分比（0~100）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CHARGE_STATUS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "chargeStatus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "充电状态。返回值含义：  1：正在充电  2：未充电  3：电量已充满"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AVAILABLE_STORAGE_SPACE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "availableStorageSpace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可用存储空间。返回值含义：用户可用空间（KB）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "POWER_MODE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "powerMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "电源模式。返回值含义：  -1：设备不区分电源模式  0：智能模式  1：超长续航模式"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "monitorevent",
      children: "MonitorEvent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备状态变化事件的枚举类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "EVENT_CONNECTION_STATUS_CHANGED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "connectionStatus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备连接状态变化。  返回值含义：2：连接成功；3：连接断开；5：设备解绑"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EVENT_BATTERY_LEVEL_DROPPED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lowPower"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备电量降低。  返回值含义：剩余电量百分比（0~100）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EVENT_WEAR_STATUS_CHANGED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "wearStatus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备佩戴状态变化。  返回值含义：1：佩戴，2：未佩戴。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EVENT_HEART_RATE_ALARM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "heartRateAlarm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "心率告警。  返回值含义：1：静态心率过高，2：静态心率过低，3：运动心率过高，4：运动心率过低。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EVENT_CHARGE_STATUS_CHANGED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "chargeStatus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "充电状态变化。  返回值含义：1：充电开始，2：充电结束，3：充电完成。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EVENT_POWER_MODE_CHANGED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "powerMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "电源模式切换。  返回值含义：0：切换至智能模式，1：切换至超长续航模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "monitordata",
      children: "MonitorData"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["作为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#querystatus",
        children: "queryStatus"
      }), "接口的返回值与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#subscribeevent",
        children: "subscribeEvent"
      }), "接口回调函数的入参，返回设备的状态信息。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
            children: "code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#querystatus",
              children: "queryStatus"
            }), "接口查询设备状态时，返回值含义请见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#monitoritem",
              children: "MonitorItem"
            }), "。  当使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#subscribeevent",
              children: "subscribeEvent"
            }), "接口订阅监听时，返回值含义请见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#monitorevent",
              children: "MonitorEvent"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扩展字段。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "monitoreventdata",
      children: "MonitorEventData"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["作为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#subscribeevent",
        children: "subscribeEvent"
      }), "接口的返回值，当订阅监听的事件触发时，作为入参将设备对应状态变化后的信息传递给回调函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#monitorevent",
              children: "MonitorEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数注册的订阅监听事件枚举值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#monitordata",
              children: "MonitorData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备状态发生变化后的状态信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wearenginegetp2pclient",
      children: "wearEngine.getP2pClient"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getP2pClient(context: common.Context): P2pClient"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于获取P2p模块的客户端。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context#context",
              children: "common.Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Context上下文，仅支持包含connectServiceExtensionAbility方法的Context（例：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#uiabilitycontext-1",
              children: "UIAbilityContext"
            }), "）。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#p2pclient",
              children: "P2pClient"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P2p客户端，存储了P2p模块的相关方法。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code",
        children: "Wear Engine ArkTS API错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008509999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008509999"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { wearEngine } from '@kit.WearEngine';\n\nlet p2pClient: wearEngine.P2pClient = wearEngine.getP2pClient(this.getUIContext().getHostContext());\nconsole.info(`Succeeded in getting p2p client.`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "p2pclient",
      children: "P2pClient"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["P2p客户端类。由接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "#wearenginegetp2pclient",
        children: "wearEngine.getP2pClient"
      }), "返回得到。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "isremoteappinstalled",
      children: "isRemoteAppInstalled"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isRemoteAppInstalled(deviceRandomId: string, remoteBundleName: string): Promise<boolean>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断穿戴设备是否已安装指定的应用，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "deviceRandomId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#device",
              children: "Device"
            }), "的随机标识符，用于指定本次订阅的设备。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "remoteBundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待查询的设备侧指定应用名称。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: "Promise<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象。表示设备侧应用是否安装。true：已安装，false：未安装。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code",
        children: "Wear Engine ArkTS API错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500001-%E7%BD%91%E7%BB%9C%E9%94%99%E8%AF%AF",
              children: "1008500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network error. The network is unavailable."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500002-%E6%97%A0%E7%BB%91%E5%AE%9A%E8%AE%BE%E5%A4%87",
              children: "1008500002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No device is bound."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500003-%E8%AE%BE%E5%A4%87%E6%9C%AA%E8%BF%9E%E6%8E%A5",
              children: "1008500003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device disconnected."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500004-%E5%BA%94%E7%94%A8%E6%9C%AA%E7%94%B3%E8%AF%B7wear-engine%E6%9C%8D%E5%8A%A1",
              children: "1008500004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App has not applied for the Wear Engine service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500005-%E7%94%A8%E6%88%B7%E6%9C%AA%E6%8E%88%E6%9D%83",
              children: "1008500005"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The HUAWEI ID is not authorized."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500006-%E7%94%A8%E6%88%B7%E6%9C%AA%E5%90%8C%E6%84%8F%E9%9A%90%E7%A7%81%E6%8E%88%E6%9D%83",
              children: "1008500006"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User privacy is not agreed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500007-%E7%A9%BF%E6%88%B4%E8%AE%BE%E5%A4%87%E4%BE%A7%E8%83%BD%E5%8A%9B%E4%B8%8D%E6%94%AF%E6%8C%81",
              children: "1008500007"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The device capability is not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500008-%E8%B4%A6%E5%8F%B7%E6%9C%AA%E7%99%BB%E5%BD%95",
              children: "1008500008"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. The user has not logged in with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500009-%E8%B4%A6%E5%8F%B7%E5%BC%82%E5%B8%B8",
              children: "1008500009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. Failed to obtain account information with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500010-%E6%97%A0%E6%95%88%E8%AE%BE%E5%A4%87id",
              children: "1008500010"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device ID is invalid."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008509999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008509999"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { wearEngine } from '@kit.WearEngine';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet deviceClient: wearEngine.DeviceClient = wearEngine.getDeviceClient(this.getUIContext().getHostContext());\nlet p2pClient: wearEngine.P2pClient = wearEngine.getP2pClient(this.getUIContext().getHostContext());\nlet deviceList: wearEngine.Device[] = await deviceClient.getConnectedDevices();\n\ndeviceList.forEach(async (device, idx, arr) => {\n  // 挑选支持应用安装的设备\n  if (await device.isDeviceCapabilitySupported(wearEngine.DeviceCapability.APP_INSTALLATION)) {\n    // 将设备侧应用包名定义为remoteBundleName\n    let remoteBundleName: string = '';\n\n    p2pClient.isRemoteAppInstalled(device.randomId, remoteBundleName).then((isInstall) => {\n      console.info(`Succeeded in checking remote app install, result is ${isInstall}.`);\n    }).catch((error: BusinessError) => {\n      console.error(`Failed to check remote app install. Code is ${error.code}, message is ${error.message}.`);\n    })\n  }\n  if (idx === deviceList.length - 1) {\n    // 若不存在目标设备则抛出错误\n    throw new Error('cannot find target device');\n  }\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getremoteappversion",
      children: "getRemoteAppVersion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getRemoteAppVersion(deviceRandomId: string, remoteBundleName: string): Promise<number>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取穿戴设备指定应用的版本号，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中返回801错误码。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "deviceRandomId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#device",
              children: "Device"
            }), "的随机标识符，用于指定本次订阅的设备。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "remoteBundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待查询版本号的设备侧应用名称。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: "Promise<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象。表示设备侧应用的版本号。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code",
        children: "Wear Engine ArkTS API错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500001-%E7%BD%91%E7%BB%9C%E9%94%99%E8%AF%AF",
              children: "1008500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network error. The network is unavailable."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500002-%E6%97%A0%E7%BB%91%E5%AE%9A%E8%AE%BE%E5%A4%87",
              children: "1008500002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No device is bound."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500003-%E8%AE%BE%E5%A4%87%E6%9C%AA%E8%BF%9E%E6%8E%A5",
              children: "1008500003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device disconnected."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500004-%E5%BA%94%E7%94%A8%E6%9C%AA%E7%94%B3%E8%AF%B7wear-engine%E6%9C%8D%E5%8A%A1",
              children: "1008500004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App has not applied for the Wear Engine service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500005-%E7%94%A8%E6%88%B7%E6%9C%AA%E6%8E%88%E6%9D%83",
              children: "1008500005"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The HUAWEI ID is not authorized."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500006-%E7%94%A8%E6%88%B7%E6%9C%AA%E5%90%8C%E6%84%8F%E9%9A%90%E7%A7%81%E6%8E%88%E6%9D%83",
              children: "1008500006"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User privacy is not agreed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500007-%E7%A9%BF%E6%88%B4%E8%AE%BE%E5%A4%87%E4%BE%A7%E8%83%BD%E5%8A%9B%E4%B8%8D%E6%94%AF%E6%8C%81",
              children: "1008500007"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The device capability is not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500008-%E8%B4%A6%E5%8F%B7%E6%9C%AA%E7%99%BB%E5%BD%95",
              children: "1008500008"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. The user has not logged in with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500009-%E8%B4%A6%E5%8F%B7%E5%BC%82%E5%B8%B8",
              children: "1008500009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. Failed to obtain account information with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500010-%E6%97%A0%E6%95%88%E8%AE%BE%E5%A4%87id",
              children: "1008500010"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device ID is invalid."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008509999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008509999"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { wearEngine } from '@kit.WearEngine';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet deviceClient: wearEngine.DeviceClient = wearEngine.getDeviceClient(this.getUIContext().getHostContext());\nlet p2pClient: wearEngine.P2pClient = wearEngine.getP2pClient(this.getUIContext().getHostContext());\nlet deviceList: wearEngine.Device[] = await deviceClient.getConnectedDevices();\n\ndeviceList.forEach(async (device, idx, arr) => {\n  // 挑选支持应用安装的设备\n  if (await device.isDeviceCapabilitySupported(wearEngine.DeviceCapability.APP_INSTALLATION)) {\n    // 将设备侧应用包名定义为remoteBundleName\n    let remoteBundleName: string = '';\n\n    p2pClient.getRemoteAppVersion(device.randomId, remoteBundleName).then((version) => {\n      console.info(`Succeeded in getting remote app version, version is ${version}.`);\n    }).catch((error: BusinessError) => {\n      console.error(`Failed to check get remote app version. Code is ${error.code}, message is ${error.message}.`);\n    })\n  }\n  if (idx === deviceList.length - 1) {\n    // 若不存在目标设备则抛出错误\n    throw new Error('cannot find target device');\n  }\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "startremoteapp",
      children: "startRemoteApp"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "startRemoteApp(deviceRandomId: string, remoteBundleName: string, transformLocalBundleName?: boolean): Promise<P2pResult>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "拉起穿戴设备的指定应用，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中返回801错误码。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "deviceRandomId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#device",
              children: "Device"
            }), "的随机标识符，用于指定本次订阅的设备。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "remoteBundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待拉起的设备侧应用名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "transformLocalBundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否需要将本地包名和指纹转换为兼容应用在云端存储的包名和指纹。默认值：false。  true：转换，false：不转换。  待兼容应用设置请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wearengine_preparation/wearengine_apply",
              children: "申请接入Wear Engine服务"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#p2presult",
              children: "P2pResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象。属性中的code字段表示本次拉起应用的结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code",
        children: "Wear Engine ArkTS API错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500001-%E7%BD%91%E7%BB%9C%E9%94%99%E8%AF%AF",
              children: "1008500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network error. The network is unavailable."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500002-%E6%97%A0%E7%BB%91%E5%AE%9A%E8%AE%BE%E5%A4%87",
              children: "1008500002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No device is bound."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500003-%E8%AE%BE%E5%A4%87%E6%9C%AA%E8%BF%9E%E6%8E%A5",
              children: "1008500003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device disconnected."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500004-%E5%BA%94%E7%94%A8%E6%9C%AA%E7%94%B3%E8%AF%B7wear-engine%E6%9C%8D%E5%8A%A1",
              children: "1008500004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App has not applied for the Wear Engine service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500005-%E7%94%A8%E6%88%B7%E6%9C%AA%E6%8E%88%E6%9D%83",
              children: "1008500005"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The HUAWEI ID is not authorized."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500006-%E7%94%A8%E6%88%B7%E6%9C%AA%E5%90%8C%E6%84%8F%E9%9A%90%E7%A7%81%E6%8E%88%E6%9D%83",
              children: "1008500006"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User privacy is not agreed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500007-%E7%A9%BF%E6%88%B4%E8%AE%BE%E5%A4%87%E4%BE%A7%E8%83%BD%E5%8A%9B%E4%B8%8D%E6%94%AF%E6%8C%81",
              children: "1008500007"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The device capability is not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500008-%E8%B4%A6%E5%8F%B7%E6%9C%AA%E7%99%BB%E5%BD%95",
              children: "1008500008"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. The user has not logged in with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500009-%E8%B4%A6%E5%8F%B7%E5%BC%82%E5%B8%B8",
              children: "1008500009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. Failed to obtain account information with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500010-%E6%97%A0%E6%95%88%E8%AE%BE%E5%A4%87id",
              children: "1008500010"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device ID is invalid."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008509999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008509999"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { wearEngine } from '@kit.WearEngine';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet deviceClient: wearEngine.DeviceClient = wearEngine.getDeviceClient(this.getUIContext().getHostContext());\nlet p2pClient: wearEngine.P2pClient = wearEngine.getP2pClient(this.getUIContext().getHostContext());\nlet deviceList: wearEngine.Device[] = await deviceClient.getConnectedDevices();\n\ndeviceList.forEach(async (device, idx, arr) => {\n  // 挑选支持应用安装的设备\n  if (await device.isDeviceCapabilitySupported(wearEngine.DeviceCapability.APP_INSTALLATION)) {\n    // 将设备侧应用包名定义为remoteBundleName\n    let remoteBundleName: string = '';\n\n    // transformLocalBundleName不传入参数时，默认为false\n    p2pClient.startRemoteApp(device.randomId, remoteBundleName).then((p2pResult) => {\n      console.info(`Succeeded in starting remote app, result is ${p2pResult.code}.`);\n    }).catch((error: BusinessError) => {\n      console.error(`Failed to start remote app. Code is ${error.code}, message is ${error.message}.`);\n    })\n  }\n  if (idx === deviceList.length - 1) {\n    // 若不存在目标设备则抛出错误\n    throw new Error('cannot find target device');\n  }\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sendmessage",
      children: "sendMessage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "sendMessage(deviceRandomId: string, appParam: P2pAppParam, message: P2pMessage): Promise<P2pResult>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向对端设备的指定应用发送消息，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "deviceRandomId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#device",
              children: "Device"
            }), "的随机标识符，用于指定本次订阅的设备。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appParam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#p2pappparam",
              children: "P2pAppParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的设备侧应用参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "message"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#p2pmessage",
              children: "P2pMessage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要传输的消息内容，取值范围：[1，4096)，单位字节。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#p2presult",
              children: "P2pResult"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise对象。返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#p2presult",
              children: "P2pResult"
            }), "对象，其属性中的code字段表示本次消息发送的结果。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code",
        children: "Wear Engine ArkTS API错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500001-%E7%BD%91%E7%BB%9C%E9%94%99%E8%AF%AF",
              children: "1008500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network error. The network is unavailable."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500002-%E6%97%A0%E7%BB%91%E5%AE%9A%E8%AE%BE%E5%A4%87",
              children: "1008500002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No device is bound."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500003-%E8%AE%BE%E5%A4%87%E6%9C%AA%E8%BF%9E%E6%8E%A5",
              children: "1008500003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device disconnected."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500004-%E5%BA%94%E7%94%A8%E6%9C%AA%E7%94%B3%E8%AF%B7wear-engine%E6%9C%8D%E5%8A%A1",
              children: "1008500004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App has not applied for the Wear Engine service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500005-%E7%94%A8%E6%88%B7%E6%9C%AA%E6%8E%88%E6%9D%83",
              children: "1008500005"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The HUAWEI ID is not authorized."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500006-%E7%94%A8%E6%88%B7%E6%9C%AA%E5%90%8C%E6%84%8F%E9%9A%90%E7%A7%81%E6%8E%88%E6%9D%83",
              children: "1008500006"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User privacy is not agreed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500007-%E7%A9%BF%E6%88%B4%E8%AE%BE%E5%A4%87%E4%BE%A7%E8%83%BD%E5%8A%9B%E4%B8%8D%E6%94%AF%E6%8C%81",
              children: "1008500007"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The device capability is not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500008-%E8%B4%A6%E5%8F%B7%E6%9C%AA%E7%99%BB%E5%BD%95",
              children: "1008500008"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. The user has not logged in with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500009-%E8%B4%A6%E5%8F%B7%E5%BC%82%E5%B8%B8",
              children: "1008500009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. Failed to obtain account information with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500010-%E6%97%A0%E6%95%88%E8%AE%BE%E5%A4%87id",
              children: "1008500010"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device ID is invalid."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008509999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008509999"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { wearEngine } from '@kit.WearEngine';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { util } from '@kit.ArkTS';\n\nlet deviceClient: wearEngine.DeviceClient = wearEngine.getDeviceClient(this.getUIContext().getHostContext());\nlet p2pClient: wearEngine.P2pClient = wearEngine.getP2pClient(this.getUIContext().getHostContext());\nlet deviceList: wearEngine.Device[] = await deviceClient.getConnectedDevices();\n\ndeviceList.forEach(async (device, idx, arr) => {\n  // 挑选支持应用安装的设备\n  if (await device.isDeviceCapabilitySupported(wearEngine.DeviceCapability.APP_INSTALLATION)) {\n    // 设置设备侧应用的应用信息：包名与指纹\n    let appInfo: wearEngine.AppInfo = {\n      bundleName: '',\n      fingerprint: ''\n    }\n    // 将设备侧应用参数类定义为appParam\n    let appParam: wearEngine.P2pAppParam = {\n      remoteApp: appInfo\n      // transformLocalAppInfo默认为false，不转换包名指纹\n    }\n\n    // 设置需要发送的消息内容\n    let messageContent: string = 'this is message';\n    let textEncoder: util.TextEncoder = new util.TextEncoder;\n    let message: wearEngine.P2pMessage = {\n      content: textEncoder.encodeInto(messageContent)\n    }\n\n    p2pClient.sendMessage(device.randomId, appParam, message).then((p2pResult) => {\n      console.info(`Succeeded in sending message, result is ${p2pResult.code}.`);\n    }).catch((error: BusinessError) => {\n      console.error(`Failed to send message. Code is ${error.code}, message is ${error.message}.`);\n    })\n  }\n  if (idx === deviceList.length - 1) {\n    // 若不存在目标设备则抛出错误\n    throw new Error('cannot find target device');\n  }\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "transferfile",
      children: "transferFile"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "transferFile(deviceRandomId: string, appParam: P2pAppParam, file: P2pFile, callback: AsyncCallback<P2pResult>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向对端设备的指定应用发送文件，使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "deviceRandomId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#device",
              children: "Device"
            }), "的随机标识符，用于指定本次订阅的设备。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appParam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#p2pappparam",
              children: "P2pAppParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定的设备侧应用参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#p2pfile",
              children: "P2pFile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要传输的文件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AsyncCallback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#p2presult",
              children: "P2pResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通用回调函数，携带错误参数和异步返回值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code",
        children: "Wear Engine ArkTS API错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500001-%E7%BD%91%E7%BB%9C%E9%94%99%E8%AF%AF",
              children: "1008500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network error. The network is unavailable."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500002-%E6%97%A0%E7%BB%91%E5%AE%9A%E8%AE%BE%E5%A4%87",
              children: "1008500002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No device is bound."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500003-%E8%AE%BE%E5%A4%87%E6%9C%AA%E8%BF%9E%E6%8E%A5",
              children: "1008500003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device disconnected."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500004-%E5%BA%94%E7%94%A8%E6%9C%AA%E7%94%B3%E8%AF%B7wear-engine%E6%9C%8D%E5%8A%A1",
              children: "1008500004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App has not applied for the Wear Engine service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500005-%E7%94%A8%E6%88%B7%E6%9C%AA%E6%8E%88%E6%9D%83",
              children: "1008500005"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The HUAWEI ID is not authorized."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500006-%E7%94%A8%E6%88%B7%E6%9C%AA%E5%90%8C%E6%84%8F%E9%9A%90%E7%A7%81%E6%8E%88%E6%9D%83",
              children: "1008500006"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User privacy is not agreed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500007-%E7%A9%BF%E6%88%B4%E8%AE%BE%E5%A4%87%E4%BE%A7%E8%83%BD%E5%8A%9B%E4%B8%8D%E6%94%AF%E6%8C%81",
              children: "1008500007"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The device capability is not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500008-%E8%B4%A6%E5%8F%B7%E6%9C%AA%E7%99%BB%E5%BD%95",
              children: "1008500008"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. The user has not logged in with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500009-%E8%B4%A6%E5%8F%B7%E5%BC%82%E5%B8%B8",
              children: "1008500009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. Failed to obtain account information with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500010-%E6%97%A0%E6%95%88%E8%AE%BE%E5%A4%87id",
              children: "1008500010"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device ID is invalid."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500011-%E6%97%A0%E6%95%88%E6%96%87%E4%BB%B6",
              children: "1008500011"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File is invalid."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008509999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008509999"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { wearEngine } from '@kit.WearEngine';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo } from '@kit.CoreFileKit';\n\nlet deviceClient: wearEngine.DeviceClient = wearEngine.getDeviceClient(this.getUIContext().getHostContext());\nlet p2pClient: wearEngine.P2pClient = wearEngine.getP2pClient(this.getUIContext().getHostContext());\nlet deviceList: wearEngine.Device[] = await deviceClient.getConnectedDevices();\n\ndeviceList.forEach(async (device, idx, arr) => {\n  // 挑选支持应用安装的设备\n  if (await device.isDeviceCapabilitySupported(wearEngine.DeviceCapability.APP_INSTALLATION)) {\n    // 设置设备侧应用的应用信息：包名与指纹\n    let appInfo: wearEngine.AppInfo = {\n      bundleName: '',\n      fingerprint: ''\n    }\n    // 将设备侧应用参数类定义为appParam\n    let appParam: wearEngine.P2pAppParam = {\n      remoteApp: appInfo\n      // transformLocalAppInfo默认为false，不转换包名指纹\n    }\n    // 设置需要发送的文件\n    let p2pFile: wearEngine.P2pFile = {\n      file: fileIo.openSync('')\n    }\n\n    p2pClient.transferFile(device.randomId, appParam, p2pFile, (error: BusinessError, p2pResult: wearEngine.P2pResult) => {\n      // callback处理逻辑\n      if (error) {\n        console.error(`Failed to transfer file. Code is ${error.code}, message is ${error.message}.`);\n        return;\n      }\n      if (p2pResult.code) {\n        if (p2pResult.code === wearEngine.P2pResultCode.COMMUNICATION_SUCCESS) {\n          console.info(`Succeeded in transfering file, the result is ${p2pResult.code}.`);\n        }\n        console.info(`Failed to transfer file, the error code is ${p2pResult.code}.`);\n      }\n      if (p2pResult.progress) {\n        console.info(`Succeeded in transfering file, the progress is ${p2pResult.progress}.`);\n      }\n    });\n    fileIo.close(p2pFile.file);\n  }\n  if (idx === deviceList.length - 1) {\n    // 若不存在目标设备则抛出错误\n    throw new Error('cannot find target device');\n  }\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cancelfiletransfer",
      children: "cancelFileTransfer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cancelFileTransfer(deviceRandomId: string, appParam: P2pAppParam, file: P2pFile): Promise<P2pResult>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消向对端设备的指定应用发送文件，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中返回801错误码。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "deviceRandomId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#device",
              children: "Device"
            }), "的随机标识符，用于指定本次订阅的设备。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appParam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#p2pappparam",
              children: "P2pAppParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定设备侧应用参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#p2pfile",
              children: "P2pFile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要传输的文件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#p2presult",
              children: "P2pResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象。属性中的code字段表示本次取消文件发送的结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code",
        children: "Wear Engine ArkTS API错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500001-%E7%BD%91%E7%BB%9C%E9%94%99%E8%AF%AF",
              children: "1008500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network error. The network is unavailable."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500002-%E6%97%A0%E7%BB%91%E5%AE%9A%E8%AE%BE%E5%A4%87",
              children: "1008500002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No device is bound."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500003-%E8%AE%BE%E5%A4%87%E6%9C%AA%E8%BF%9E%E6%8E%A5",
              children: "1008500003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device disconnected."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500004-%E5%BA%94%E7%94%A8%E6%9C%AA%E7%94%B3%E8%AF%B7wear-engine%E6%9C%8D%E5%8A%A1",
              children: "1008500004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App has not applied for the Wear Engine service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500005-%E7%94%A8%E6%88%B7%E6%9C%AA%E6%8E%88%E6%9D%83",
              children: "1008500005"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The HUAWEI ID is not authorized."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500006-%E7%94%A8%E6%88%B7%E6%9C%AA%E5%90%8C%E6%84%8F%E9%9A%90%E7%A7%81%E6%8E%88%E6%9D%83",
              children: "1008500006"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User privacy is not agreed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500007-%E7%A9%BF%E6%88%B4%E8%AE%BE%E5%A4%87%E4%BE%A7%E8%83%BD%E5%8A%9B%E4%B8%8D%E6%94%AF%E6%8C%81",
              children: "1008500007"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The device capability is not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500008-%E8%B4%A6%E5%8F%B7%E6%9C%AA%E7%99%BB%E5%BD%95",
              children: "1008500008"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. The user has not logged in with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500009-%E8%B4%A6%E5%8F%B7%E5%BC%82%E5%B8%B8",
              children: "1008500009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. Failed to obtain account information with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500010-%E6%97%A0%E6%95%88%E8%AE%BE%E5%A4%87id",
              children: "1008500010"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device ID is invalid."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500011-%E6%97%A0%E6%95%88%E6%96%87%E4%BB%B6",
              children: "1008500011"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File is invalid."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008509999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008509999"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { wearEngine } from '@kit.WearEngine';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { fileIo } from '@kit.CoreFileKit';\n\nlet deviceClient: wearEngine.DeviceClient = wearEngine.getDeviceClient(this.getUIContext().getHostContext());\nlet p2pClient: wearEngine.P2pClient = wearEngine.getP2pClient(this.getUIContext().getHostContext());\nlet deviceList: wearEngine.Device[] = await deviceClient.getConnectedDevices();\n\ndeviceList.forEach(async (device, idx, arr) => {\n  // 挑选支持应用安装的设备\n  if (await device.isDeviceCapabilitySupported(wearEngine.DeviceCapability.APP_INSTALLATION)) {\n    // 设置设备侧应用的应用信息：包名与指纹\n    let appInfo: wearEngine.AppInfo = {\n      bundleName: '',\n      fingerprint: ''\n    }\n    // 将设备侧应用参数类定义为appParam\n    let appParam: wearEngine.P2pAppParam = {\n      remoteApp: appInfo\n      // transformLocalAppInfo默认为false，不转换包名指纹\n    }\n    // 设置需要发送的文件信息\n    let p2pFile: wearEngine.P2pFile = {\n      file: fileIo.openSync('')\n    }\n\n    p2pClient.transferFile(device.randomId, appParam, p2pFile, () => {\n      // 回调函数执行逻辑\n    })\n\n    p2pClient.cancelFileTransfer(device.randomId, appParam, p2pFile).then((p2pResult) => {\n      if (p2pResult.code === wearEngine.P2pResultCode.COMMUNICATION_SUCCESS) {\n        console.info(`Succeeded in cancelling transfer file, the result is ${p2pResult.code}.`);\n      }\n    }).catch((error: BusinessError) => {\n      console.error(`Failed to cancel transfer file. Code is ${error.code}, message is ${error.message}.`);\n    })\n    fileIo.close(p2pFile.file);\n  }\n  if (idx === deviceList.length - 1) {\n    // 若不存在目标设备则抛出错误\n    throw new Error('cannot find target device');\n  }\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "registermessagereceiver",
      children: "registerMessageReceiver"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "registerMessageReceiver(deviceRandomId: string, appParam: P2pAppParam, callback: Callback<P2pMessage>): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "订阅对端设备应用向本端设备发送消息的事件，接收到对端应用发送的消息时使用callback异步回调，订阅成功与否使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "deviceRandomId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#device",
              children: "Device"
            }), "的随机标识符，用于指定本次订阅的设备。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appParam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#p2pappparam",
              children: "P2pAppParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备侧应用参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#p2pmessage",
              children: "P2pMessage"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接收到设备侧应用发送的消息后执行的回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: "Promise对象。无结果返回的Promise对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code",
        children: "Wear Engine ArkTS API错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500001-%E7%BD%91%E7%BB%9C%E9%94%99%E8%AF%AF",
              children: "1008500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network error. The network is unavailable."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500002-%E6%97%A0%E7%BB%91%E5%AE%9A%E8%AE%BE%E5%A4%87",
              children: "1008500002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No device is bound."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500003-%E8%AE%BE%E5%A4%87%E6%9C%AA%E8%BF%9E%E6%8E%A5",
              children: "1008500003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device disconnected."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500004-%E5%BA%94%E7%94%A8%E6%9C%AA%E7%94%B3%E8%AF%B7wear-engine%E6%9C%8D%E5%8A%A1",
              children: "1008500004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App has not applied for the Wear Engine service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500005-%E7%94%A8%E6%88%B7%E6%9C%AA%E6%8E%88%E6%9D%83",
              children: "1008500005"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The HUAWEI ID is not authorized."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500006-%E7%94%A8%E6%88%B7%E6%9C%AA%E5%90%8C%E6%84%8F%E9%9A%90%E7%A7%81%E6%8E%88%E6%9D%83",
              children: "1008500006"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User privacy is not agreed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500007-%E7%A9%BF%E6%88%B4%E8%AE%BE%E5%A4%87%E4%BE%A7%E8%83%BD%E5%8A%9B%E4%B8%8D%E6%94%AF%E6%8C%81",
              children: "1008500007"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The device capability is not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500008-%E8%B4%A6%E5%8F%B7%E6%9C%AA%E7%99%BB%E5%BD%95",
              children: "1008500008"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. The user has not logged in with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500009-%E8%B4%A6%E5%8F%B7%E5%BC%82%E5%B8%B8",
              children: "1008500009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. Failed to obtain account information with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500010-%E6%97%A0%E6%95%88%E8%AE%BE%E5%A4%87id",
              children: "1008500010"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device ID is invalid."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500012-%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0%E8%BF%87%E5%A4%9A",
              children: "1008500012"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Too many callbacks of the same type."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008509999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008509999"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { wearEngine } from '@kit.WearEngine';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet deviceClient: wearEngine.DeviceClient = wearEngine.getDeviceClient(this.getUIContext().getHostContext());\nlet p2pClient: wearEngine.P2pClient = wearEngine.getP2pClient(this.getUIContext().getHostContext());\nlet deviceList: wearEngine.Device[] = await deviceClient.getConnectedDevices();\n\ndeviceList.forEach(async (device, idx, arr) => {\n  // 挑选支持应用安装的设备\n  if (await device.isDeviceCapabilitySupported(wearEngine.DeviceCapability.APP_INSTALLATION)) {\n    // 设置设备侧应用的应用信息：包名与指纹\n    let appInfo: wearEngine.AppInfo = {\n      bundleName: '',\n      fingerprint: ''\n    }\n    // 将设备侧应用参数类定义为appParam\n    let appParam: wearEngine.P2pAppParam = {\n      remoteApp: appInfo\n      // transformLocalAppInfo默认为false，不转换包名\n    }\n    // 设置需要发送的文件信息\n    let callback = (p2pMessage: wearEngine.P2pMessage) => {\n      console.info(`Succeeded in receiving message, the message is ${p2pMessage.content}.`)\n    }\n\n    p2pClient.registerMessageReceiver(device.randomId, appParam, callback).then(() => {\n      console.info(`Succeeded in registering message receiver.`);\n    }).catch((error: BusinessError) => {\n      console.error(`Failed to register message receiver. Code is ${error.code}, message is ${error.message}.`);\n    })\n  }\n  if (idx === deviceList.length - 1) {\n    // 若不存在目标设备则抛出错误\n    throw new Error('cannot find target device');\n  }\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "registerfilereceiver",
      children: "registerFileReceiver"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "registerFileReceiver(deviceRandomId: string, appParam: P2pAppParam, callback: Callback<P2pFile>): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "订阅对端设备向本端设备发送文件的事件，接收到对端设备发送的文件时使用callback异步回调，订阅成功与否使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "deviceRandomId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#device",
              children: "Device"
            }), "的随机标识符，用于指定本次订阅的设备。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appParam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#p2pappparam",
              children: "P2pAppParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备侧应用参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#p2pfile",
              children: "P2pFile"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接收到设备侧应用发送的文件后执行的回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: "Promise对象。无结果返回的Promise对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code",
        children: "Wear Engine ArkTS API错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500001-%E7%BD%91%E7%BB%9C%E9%94%99%E8%AF%AF",
              children: "1008500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network error. The network is unavailable."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500002-%E6%97%A0%E7%BB%91%E5%AE%9A%E8%AE%BE%E5%A4%87",
              children: "1008500002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No device is bound."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500003-%E8%AE%BE%E5%A4%87%E6%9C%AA%E8%BF%9E%E6%8E%A5",
              children: "1008500003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device disconnected."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500004-%E5%BA%94%E7%94%A8%E6%9C%AA%E7%94%B3%E8%AF%B7wear-engine%E6%9C%8D%E5%8A%A1",
              children: "1008500004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App has not applied for the Wear Engine service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500005-%E7%94%A8%E6%88%B7%E6%9C%AA%E6%8E%88%E6%9D%83",
              children: "1008500005"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The HUAWEI ID is not authorized."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500006-%E7%94%A8%E6%88%B7%E6%9C%AA%E5%90%8C%E6%84%8F%E9%9A%90%E7%A7%81%E6%8E%88%E6%9D%83",
              children: "1008500006"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User privacy is not agreed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500007-%E7%A9%BF%E6%88%B4%E8%AE%BE%E5%A4%87%E4%BE%A7%E8%83%BD%E5%8A%9B%E4%B8%8D%E6%94%AF%E6%8C%81",
              children: "1008500007"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The device capability is not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500008-%E8%B4%A6%E5%8F%B7%E6%9C%AA%E7%99%BB%E5%BD%95",
              children: "1008500008"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. The user has not logged in with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500009-%E8%B4%A6%E5%8F%B7%E5%BC%82%E5%B8%B8",
              children: "1008500009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. Failed to obtain account information with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500010-%E6%97%A0%E6%95%88%E8%AE%BE%E5%A4%87id",
              children: "1008500010"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device ID is invalid."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500012-%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0%E8%BF%87%E5%A4%9A",
              children: "1008500012"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Too many callbacks of the same type."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008509999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008509999"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { wearEngine } from '@kit.WearEngine';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet deviceClient: wearEngine.DeviceClient = wearEngine.getDeviceClient(this.getUIContext().getHostContext());\nlet p2pClient: wearEngine.P2pClient = wearEngine.getP2pClient(this.getUIContext().getHostContext());\nlet deviceList: wearEngine.Device[] = await deviceClient.getConnectedDevices();\n\ndeviceList.forEach(async (device, idx, arr) => {\n  // 挑选支持应用安装的设备\n  if (await device.isDeviceCapabilitySupported(wearEngine.DeviceCapability.APP_INSTALLATION)) {\n    // 设置设备侧应用的应用信息：包名与指纹\n    let appInfo: wearEngine.AppInfo = {\n      bundleName: '',\n      fingerprint: ''\n    }\n    // 将设备侧应用参数类定义为appParam\n    let appParam: wearEngine.P2pAppParam = {\n      remoteApp: appInfo\n      // transformLocalAppInfo默认为false，不转换包名指纹\n    }\n    // 设置需要发送的文件信息\n    let callback = (p2pMessage: wearEngine.P2pFile) => {\n      console.info(`Succeeded in receiving file.`)\n    }\n\n    p2pClient.registerFileReceiver(device.randomId, appParam, callback).then(() => {\n      console.info(`Succeeded in registering file receiver.`)\n    }).catch((error: BusinessError) => {\n      console.error(`Failed to register file receiver. Code is ${error.code}, message is ${error.message}.`);\n    })\n  }\n  if (idx === deviceList.length - 1) {\n    // 若不存在目标设备则抛出错误\n    throw new Error('cannot find target device');\n  }\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "unregistermessagereceiver",
      children: "unregisterMessageReceiver"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "unregisterMessageReceiver(deviceRandomId: string, appParam: P2pAppParam, callback: Callback<P2pMessage>): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消订阅对端应用向本端应用发送消息的事件，取消订阅成功与否使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "deviceRandomId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#device",
              children: "Device"
            }), "的随机标识符，用于指定本次订阅的设备。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appParam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#p2pappparam",
              children: "P2pAppParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备侧应用参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#p2pmessage",
              children: "P2pMessage"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，需要同订阅监听时的回调函数为同一个对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: "Promise对象。无结果返回的Promise对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code",
        children: "Wear Engine ArkTS API错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500001-%E7%BD%91%E7%BB%9C%E9%94%99%E8%AF%AF",
              children: "1008500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network error. The network is unavailable."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500002-%E6%97%A0%E7%BB%91%E5%AE%9A%E8%AE%BE%E5%A4%87",
              children: "1008500002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No device is bound."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500003-%E8%AE%BE%E5%A4%87%E6%9C%AA%E8%BF%9E%E6%8E%A5",
              children: "1008500003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device disconnected."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500004-%E5%BA%94%E7%94%A8%E6%9C%AA%E7%94%B3%E8%AF%B7wear-engine%E6%9C%8D%E5%8A%A1",
              children: "1008500004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App has not applied for the Wear Engine service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500005-%E7%94%A8%E6%88%B7%E6%9C%AA%E6%8E%88%E6%9D%83",
              children: "1008500005"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The HUAWEI ID is not authorized."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500006-%E7%94%A8%E6%88%B7%E6%9C%AA%E5%90%8C%E6%84%8F%E9%9A%90%E7%A7%81%E6%8E%88%E6%9D%83",
              children: "1008500006"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User privacy is not agreed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500007-%E7%A9%BF%E6%88%B4%E8%AE%BE%E5%A4%87%E4%BE%A7%E8%83%BD%E5%8A%9B%E4%B8%8D%E6%94%AF%E6%8C%81",
              children: "1008500007"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The device capability is not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500008-%E8%B4%A6%E5%8F%B7%E6%9C%AA%E7%99%BB%E5%BD%95",
              children: "1008500008"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. The user has not logged in with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500009-%E8%B4%A6%E5%8F%B7%E5%BC%82%E5%B8%B8",
              children: "1008500009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. Failed to obtain account information with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500010-%E6%97%A0%E6%95%88%E8%AE%BE%E5%A4%87id",
              children: "1008500010"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device ID is invalid."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008509999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008509999"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { wearEngine } from '@kit.WearEngine';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet deviceClient: wearEngine.DeviceClient = wearEngine.getDeviceClient(this.getUIContext().getHostContext());\nlet p2pClient: wearEngine.P2pClient = wearEngine.getP2pClient(this.getUIContext().getHostContext());\nlet deviceList: wearEngine.Device[] = await deviceClient.getConnectedDevices();\n\ndeviceList.forEach(async (device, idx, arr) => {\n  // 挑选支持应用安装的设备\n  if (await device.isDeviceCapabilitySupported(wearEngine.DeviceCapability.APP_INSTALLATION)) {\n    // 设置设备侧应用的应用信息：包名与指纹\n    let appInfo: wearEngine.AppInfo = {\n      bundleName: '',\n      fingerprint: ''\n    }\n    // 将设备侧应用参数类定义为appParam\n    let appParam: wearEngine.P2pAppParam = {\n      remoteApp: appInfo\n      // transformLocalAppInfo默认为false，不转换包名指纹\n    }\n    // 设置需要发送的文件信息\n    let callback = (p2pMessage: wearEngine.P2pMessage) => {\n      console.info(`Succeeded in receiving message, the message is ${p2pMessage.content}.`)\n    }\n\n    p2pClient.registerMessageReceiver(device.randomId, appParam, callback).then(() => {\n      console.info(`Succeeded in registering message receiver.`)\n    }).catch((error: BusinessError) => {\n      console.error(`Failed to register message receiver. Code is ${error.code}, message is ${error.message}.`);\n    })\n\n    p2pClient.unregisterMessageReceiver(device.randomId, appParam, callback).then(() => {\n      console.info(`Succeeded in unregistering message receiver.`)\n    }).catch((error: BusinessError) => {\n      console.error(`Failed to unregister message receiver. Code is ${error.code}, message is ${error.message}.`);\n    })\n  }\n  if (idx === deviceList.length - 1) {\n    // 若不存在目标设备则抛出错误\n    throw new Error('cannot find target device');\n  }\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "unregisterfilereceiver",
      children: "unregisterFileReceiver"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "unregisterFileReceiver(deviceRandomId: string, appParam: P2pAppParam, callback: Callback<P2pFile>): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消订阅对端应用向本端应用发送文件的事件，取消订阅成功与否使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "deviceRandomId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#device",
              children: "Device"
            }), "的随机标识符，用于指定本次订阅的设备。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "appParam"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#p2pappparam",
              children: "P2pAppParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备侧应用参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#p2pfile",
              children: "P2pFile"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，需要同订阅监听时的回调函数为同一个对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: "Promise对象。无结果返回的Promise对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code",
        children: "Wear Engine ArkTS API错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500001-%E7%BD%91%E7%BB%9C%E9%94%99%E8%AF%AF",
              children: "1008500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network error. The network is unavailable."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500002-%E6%97%A0%E7%BB%91%E5%AE%9A%E8%AE%BE%E5%A4%87",
              children: "1008500002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No device is bound."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500003-%E8%AE%BE%E5%A4%87%E6%9C%AA%E8%BF%9E%E6%8E%A5",
              children: "1008500003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device disconnected."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500004-%E5%BA%94%E7%94%A8%E6%9C%AA%E7%94%B3%E8%AF%B7wear-engine%E6%9C%8D%E5%8A%A1",
              children: "1008500004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App has not applied for the Wear Engine service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500005-%E7%94%A8%E6%88%B7%E6%9C%AA%E6%8E%88%E6%9D%83",
              children: "1008500005"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The HUAWEI ID is not authorized."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500006-%E7%94%A8%E6%88%B7%E6%9C%AA%E5%90%8C%E6%84%8F%E9%9A%90%E7%A7%81%E6%8E%88%E6%9D%83",
              children: "1008500006"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User privacy is not agreed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500007-%E7%A9%BF%E6%88%B4%E8%AE%BE%E5%A4%87%E4%BE%A7%E8%83%BD%E5%8A%9B%E4%B8%8D%E6%94%AF%E6%8C%81",
              children: "1008500007"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The device capability is not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500008-%E8%B4%A6%E5%8F%B7%E6%9C%AA%E7%99%BB%E5%BD%95",
              children: "1008500008"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. The user has not logged in with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500009-%E8%B4%A6%E5%8F%B7%E5%BC%82%E5%B8%B8",
              children: "1008500009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. Failed to obtain account information with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500010-%E6%97%A0%E6%95%88%E8%AE%BE%E5%A4%87id",
              children: "1008500010"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device ID is invalid."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008509999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008509999"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { wearEngine } from '@kit.WearEngine';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet deviceClient: wearEngine.DeviceClient = wearEngine.getDeviceClient(this.getUIContext().getHostContext());\nlet p2pClient: wearEngine.P2pClient = wearEngine.getP2pClient(this.getUIContext().getHostContext());\nlet deviceList: wearEngine.Device[] = await deviceClient.getConnectedDevices();\n\ndeviceList.forEach(async (device, idx, arr) => {\n  // 挑选支持应用安装的设备\n  if (await device.isDeviceCapabilitySupported(wearEngine.DeviceCapability.APP_INSTALLATION)) {\n    // 设置设备侧应用的应用信息：包名与指纹\n    let appInfo: wearEngine.AppInfo = {\n      bundleName: '',\n      fingerprint: ''\n    }\n    // 将设备侧应用参数类定义为appParam\n    let appParam: wearEngine.P2pAppParam = {\n      remoteApp: appInfo\n      // transformLocalAppInfo默认为false，不转换包名指纹\n    }\n    // 设置需要发送的文件信息\n    let callback = (p2pMessage: wearEngine.P2pFile) => {\n      console.info(`Succeeded in receiving file.`)\n    }\n\n    p2pClient.registerFileReceiver(device.randomId, appParam, callback).then(() => {\n      console.info(`Succeeded in registering file receiver.`);\n    }).catch((error: BusinessError) => {\n      console.error(`Failed to register file receiver. Code is ${error.code}, message is ${error.message}.`);\n    })\n\n    p2pClient.unregisterFileReceiver(device.randomId, appParam, callback).then(() => {\n      console.info(`Succeeded in unregistering file receiver.`);\n    }).catch((error: BusinessError) => {\n      console.error(`Failed to unregister file receiver. Code is ${error.code}, message is ${error.message}.`);\n    })\n  }\n  if (idx === deviceList.length - 1) {\n    // 若不存在目标设备则抛出错误\n    throw new Error('cannot find target device');\n  }\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appinfo",
      children: "AppInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备侧应用信息类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
            children: "bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fingerprint"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-hardware/wear-engine-kit-guide/wearengine_faq/wearengine_faq-9",
              children: "应用指纹，用于标识应用的唯一身份。"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "p2presultcode",
      children: "P2pResultCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "存储P2p通信的返回值枚举类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "REMOTE_APP_NOT_INSTALLED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备侧应用未安装。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REMOTE_APP_NOT_RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备侧应用未运行。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "REMOTE_APP_RUNNING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "202"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备侧应用运行中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UNKNOWN_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "203"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未知错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COMMUNICATION_FAILURE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "206"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "与设备侧应用通信失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "COMMUNICATION_SUCCESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "207"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "与设备侧应用通信成功。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "p2presult",
      children: "P2pResult"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "存储P2p通信的结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
            children: "code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于返回除文件传输外的P2p通信结果，返回值含义见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#p2presultcode",
              children: "P2pResultCode"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "progress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "仅用于上报文件传输进度，返回值范围：0-100。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "p2pmessage",
      children: "P2pMessage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本端设备应用向对端设备应用发送的消息类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
            children: "content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uint8Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传输消息的内容，格式为Uint8Array（二进制字节数组）类型数据。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "p2pfile",
      children: "P2pFile"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本端设备应用向对端设备应用发送的文件类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
            children: "file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs#file",
              children: "fs.File"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "p2pappparam",
      children: "P2pAppParam"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "P2p通信过程中可用的设备侧应用参数类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
            children: "remoteApp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#appinfo",
              children: "AppInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备侧应用信息类。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "transformLocalAppInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否需要将本地包名和指纹转换为兼容应用在云端存储的包名和指纹。默认值：false。  true：转换；false：不转换。  待兼容应用设置请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wearengine_preparation/wearengine_apply",
              children: "申请接入Wear Engine服务"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wearenginegetnotifyclient",
      children: "wearEngine.getNotifyClient"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getNotifyClient(context: common.Context): NotifyClient"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于获取Notify模块的客户端。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中返回801错误码。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context#context",
              children: "common.Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Context上下文，仅支持包含connectServiceExtensionAbility方法的Context（例：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#uiabilitycontext-1",
              children: "UIAbilityContext"
            }), "）。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#notifyclient",
              children: "NotifyClient"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模板化通知客户端，存储了发送模板化通知的相关方法。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code",
        children: "Wear Engine ArkTS API错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008509999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008509999"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { wearEngine } from '@kit.WearEngine';\n\nlet notifyClient: wearEngine.NotifyClient = wearEngine.getNotifyClient(this.getUIContext().getHostContext());\nconsole.info(`Succeeded in getting notify client`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notifyclient",
      children: "NotifyClient"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Notify客户端类，由", (0,jsx_runtime.jsx)(_components.a, {
        href: "#wearenginegetnotifyclient",
        children: "wearEngine.getNotifyClient"
      }), "返回得到。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "notify",
      children: "notify"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "notify(deviceRandomId: string, options: NotificationOptions): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向穿戴设备发送模板化通知，返回是否发送成功，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中返回801错误码。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "deviceRandomId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#device",
              children: "Device"
            }), "的随机标识符，用于指定本次查询的设备。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#notificationoptions",
              children: "NotificationOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模板化通知配置参数类。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: "Promise对象。无结果返回的Promise对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code",
        children: "Wear Engine ArkTS API错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500001-%E7%BD%91%E7%BB%9C%E9%94%99%E8%AF%AF",
              children: "1008500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network error. The network is unavailable."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500002-%E6%97%A0%E7%BB%91%E5%AE%9A%E8%AE%BE%E5%A4%87",
              children: "1008500002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No device is bound."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500003-%E8%AE%BE%E5%A4%87%E6%9C%AA%E8%BF%9E%E6%8E%A5",
              children: "1008500003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device disconnected."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500004-%E5%BA%94%E7%94%A8%E6%9C%AA%E7%94%B3%E8%AF%B7wear-engine%E6%9C%8D%E5%8A%A1",
              children: "1008500004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App has not applied for the Wear Engine service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500005-%E7%94%A8%E6%88%B7%E6%9C%AA%E6%8E%88%E6%9D%83",
              children: "1008500005"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The HUAWEI ID is not authorized."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500006-%E7%94%A8%E6%88%B7%E6%9C%AA%E5%90%8C%E6%84%8F%E9%9A%90%E7%A7%81%E6%8E%88%E6%9D%83",
              children: "1008500006"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User privacy is not agreed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500007-%E7%A9%BF%E6%88%B4%E8%AE%BE%E5%A4%87%E4%BE%A7%E8%83%BD%E5%8A%9B%E4%B8%8D%E6%94%AF%E6%8C%81",
              children: "1008500007"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The device capability is not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500008-%E8%B4%A6%E5%8F%B7%E6%9C%AA%E7%99%BB%E5%BD%95",
              children: "1008500008"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. The user has not logged in with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500009-%E8%B4%A6%E5%8F%B7%E5%BC%82%E5%B8%B8",
              children: "1008500009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. Failed to obtain account information with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500010-%E6%97%A0%E6%95%88%E8%AE%BE%E5%A4%87id",
              children: "1008500010"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device ID is invalid."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008509999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008509999"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { wearEngine } from '@kit.WearEngine';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet notifyClient: wearEngine.NotifyClient = wearEngine.getNotifyClient(this.getUIContext().getHostContext());\nlet deviceClient: wearEngine.DeviceClient = wearEngine.getDeviceClient(this.getUIContext().getHostContext());\nlet devices: wearEngine.Device[] = await deviceClient.getConnectedDevices();\n\nif (devices.length > 0) {\n  // 从得到的设备列表中选取目标设备，并定义为device(假设数组中存在已连接设备且第一位即为目标设备)\n  let device: wearEngine.Device = devices[0];\n\n  let button1: wearEngine.NotificationButton = {\n    buttonId: wearEngine.ButtonId.FIRST_BUTTON,\n    content: 'button_1'\n  }\n  let type1Notification: wearEngine.Notification = {\n    type: wearEngine.NotificationType.NOTIFICATION_WITH_ONE_BUTTON,\n    bundleName: 'bundleName',\n    title: 'title',\n    text: 'text',\n    buttons: [button1]\n  }\n  let options: wearEngine.NotificationOptions = {\n    notification: type1Notification,\n    onAction: (feedback: wearEngine.NotificationFeedback) => {\n      console.info(`one button notify get feedback is ${feedback.action ? feedback.action : feedback.errorCode}`);\n    }\n  }\n\n  notifyClient.notify(device.randomId, options).then(result => {\n    console.info(`Succeeded in sending notification.`);\n  }).catch((error: BusinessError) => {\n    console.error(`Failed to send notification. Code is ${error.code}, message is ${error.message}`);\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notificationoptions",
      children: "NotificationOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模板化通知的配置参数类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性-1",
      children: "属性"
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
            children: "notification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#notification",
              children: "Notification"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "模板化通知的通知体参数类。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onaction",
      children: "onAction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onAction(feedback: NotificationFeedback): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备侧对应用发出的通知做相关操作后执行的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中返回801错误码。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "feedback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#notificationfeedback",
              children: "NotificationFeedback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备侧操作通知的反馈类。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notification",
      children: "Notification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模板化通知的通知体参数类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#notificationtype",
              children: "NotificationType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知的模板类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送通知应用的包名。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "title"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知的标题，取值范围：[1，28)，单位字节。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知的内容，取值范围：[1，400)，单位字节。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buttons"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#notificationbutton",
              children: "NotificationButton"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知按钮信息类，若未填写，默认为空。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notificationtype",
      children: "NotificationType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模板化通知的模板类型枚举类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
            children: "NOTIFICATION_WITHOUT_BUTTONS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "没有按钮的通知类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NOTIFICATION_WITH_ONE_BUTTON"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "51"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拥有一个按钮的通知类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NOTIFICATION_WITH_TWO_BUTTONS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "52"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拥有两个按钮的通知类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NOTIFICATION_WITH_THREE_BUTTONS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "53"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拥有三个按钮的通知类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notificationbutton",
      children: "NotificationButton"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通知按钮信息类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
            children: "buttonId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#buttonid",
              children: "ButtonId"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按钮Id枚举类。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按钮上的文字内容，取值范围：[1，12)，单位字节。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "buttonid",
      children: "ButtonId"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模板化通知的按钮Id枚举类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "FIRST_BUTTON"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "firstButton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第一个按钮的Id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECOND_BUTTON"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "secondButton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第二个按钮的Id。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "THIRD_BUTTON"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "thirdButton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "第三个按钮的Id。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notificationfeedback",
      children: "NotificationFeedback"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备侧操作通知的反馈类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
            children: "action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#notificationaction",
              children: "NotificationAction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备侧对通知的操作反馈枚举类。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "errorCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["错误码，含义请见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#notificationerrorcode",
              children: "NotificationErrorCode"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notificationaction",
      children: "NotificationAction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备侧对通知的操作反馈枚举类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
            children: "NOTIFICATION_SWITCHED_TO_BACKGROUND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户使用Home键退出或熄屏，通知退回后台。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NOTIFICATION_DELETED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知被用户删除。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIRST_BUTTON_CLICKED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户点击通知的第一个按钮。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SECOND_BUTTON_CLICKED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户点击通知的第二个按钮。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "THIRD_BUTTON_CLICKED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户点击通知的第三个按钮。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notificationerrorcode",
      children: "NotificationErrorCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通知在设备侧发生错误的反馈枚举类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INTERNAL_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "255"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Wear Engine内部错误。通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
              children: "在线提单"
            }), "提交问题，华为支持人员会及时处理。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wearenginegetsensorclient",
      children: "wearEngine.getSensorClient"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getSensorClient(context: common.Context): SensorClient"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于获取Sensor模块的客户端。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中返回801错误码。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-context/js-apis-inner-application-context#context",
              children: "common.Context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Context上下文，仅支持包含connectServiceExtensionAbility方法的Context（例：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-arkts/ability-api-interface-depend/ability-arkts-application/js-apis-inner-application-uiabilitycontext/js-apis-inner-application-uiabilitycontext#uiabilitycontext-1",
              children: "UIAbilityContext"
            }), "）。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#sensorclient",
              children: "SensorClient"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensor客户端，存储了Sensor模块的相关方法。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code",
        children: "Wear Engine ArkTS API错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008509999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008509999"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { wearEngine } from '@kit.WearEngine';\n\nlet sensorClient: wearEngine.SensorClient = wearEngine.getSensorClient(this.getUIContext().getHostContext());\nconsole.info(`Succeeded in getting sensor client`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sensorclient",
      children: "SensorClient"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sensor客户端类。由接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "#wearenginegetsensorclient",
        children: "wearEngine.getSensorClient"
      }), "返回得到。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getsensorlist",
      children: "getSensorList"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getSensorList(deviceRandomId: string): Promise<Sensor[]>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取设备侧可用的传感器列表，返回对应的传感器列表，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中返回801错误码。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
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
            children: "deviceRandomId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#device",
              children: "Device"
            }), "的随机标识符，用于指定设备。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#sensor",
              children: "Sensor"
            }), "[]>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Promise对象，返回设备侧可用的传感器列表。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code",
        children: "Wear Engine ArkTS API错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500001-%E7%BD%91%E7%BB%9C%E9%94%99%E8%AF%AF",
              children: "1008500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network error. The network is unavailable."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500002-%E6%97%A0%E7%BB%91%E5%AE%9A%E8%AE%BE%E5%A4%87",
              children: "1008500002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No device is bound."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500003-%E8%AE%BE%E5%A4%87%E6%9C%AA%E8%BF%9E%E6%8E%A5",
              children: "1008500003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device disconnected."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500004-%E5%BA%94%E7%94%A8%E6%9C%AA%E7%94%B3%E8%AF%B7wear-engine%E6%9C%8D%E5%8A%A1",
              children: "1008500004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App has not applied for the Wear Engine service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500005-%E7%94%A8%E6%88%B7%E6%9C%AA%E6%8E%88%E6%9D%83",
              children: "1008500005"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The HUAWEI ID is not authorized."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500006-%E7%94%A8%E6%88%B7%E6%9C%AA%E5%90%8C%E6%84%8F%E9%9A%90%E7%A7%81%E6%8E%88%E6%9D%83",
              children: "1008500006"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User privacy is not agreed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500007-%E7%A9%BF%E6%88%B4%E8%AE%BE%E5%A4%87%E4%BE%A7%E8%83%BD%E5%8A%9B%E4%B8%8D%E6%94%AF%E6%8C%81",
              children: "1008500007"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The device capability is not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500008-%E8%B4%A6%E5%8F%B7%E6%9C%AA%E7%99%BB%E5%BD%95",
              children: "1008500008"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. The user has not logged in with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500009-%E8%B4%A6%E5%8F%B7%E5%BC%82%E5%B8%B8",
              children: "1008500009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. Failed to obtain account information with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500010-%E6%97%A0%E6%95%88%E8%AE%BE%E5%A4%87id",
              children: "1008500010"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device ID is invalid."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008509999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008509999"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { wearEngine } from '@kit.WearEngine';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet sensorClient: wearEngine.SensorClient = wearEngine.getSensorClient(this.getUIContext().getHostContext());\nlet deviceClient: wearEngine.DeviceClient = wearEngine.getDeviceClient(this.getUIContext().getHostContext());\nlet devices: wearEngine.Device[] = await deviceClient.getConnectedDevices();\n\nif (devices.length > 0) {\n  // 从得到的设备列表中选取目标设备，并定义为device(假设数组中存在已连接设备且第一位即为目标设备)\n  let device: wearEngine.Device = devices[0];\n\n  sensorClient.getSensorList(device.randomId).then((sensorList) => {\n    console.info(`Succeeded in getting sensor list, result is ${sensorList}`);\n  }).catch((error: BusinessError) => {\n    console.error(`Failed to get sensor list. Code is ${error.code}, message is ${error.message}`);\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "subscribesensor",
      children: "subscribeSensor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "subscribeSensor(deviceRandomId: string, type: SensorType, callback: Callback<SensorResult>): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "订阅指定的传感器数据上报，返回是否订阅成功，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中返回801错误码。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "deviceRandomId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#device",
              children: "Device"
            }), "的随机标识符，用于指定本次订阅的设备。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#sensortype",
              children: "SensorType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传感器类别，用于指定本次订阅的传感器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#sensorresult",
              children: "SensorResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，用于处理传感器上报的数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: "Promise对象。无结果返回的Promise对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code",
        children: "Wear Engine ArkTS API错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500001-%E7%BD%91%E7%BB%9C%E9%94%99%E8%AF%AF",
              children: "1008500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network error. The network is unavailable."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500002-%E6%97%A0%E7%BB%91%E5%AE%9A%E8%AE%BE%E5%A4%87",
              children: "1008500002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No device is bound."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500003-%E8%AE%BE%E5%A4%87%E6%9C%AA%E8%BF%9E%E6%8E%A5",
              children: "1008500003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device disconnected."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500004-%E5%BA%94%E7%94%A8%E6%9C%AA%E7%94%B3%E8%AF%B7wear-engine%E6%9C%8D%E5%8A%A1",
              children: "1008500004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App has not applied for the Wear Engine service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500005-%E7%94%A8%E6%88%B7%E6%9C%AA%E6%8E%88%E6%9D%83",
              children: "1008500005"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The HUAWEI ID is not authorized."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500006-%E7%94%A8%E6%88%B7%E6%9C%AA%E5%90%8C%E6%84%8F%E9%9A%90%E7%A7%81%E6%8E%88%E6%9D%83",
              children: "1008500006"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User privacy is not agreed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500007-%E7%A9%BF%E6%88%B4%E8%AE%BE%E5%A4%87%E4%BE%A7%E8%83%BD%E5%8A%9B%E4%B8%8D%E6%94%AF%E6%8C%81",
              children: "1008500007"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The device capability is not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500008-%E8%B4%A6%E5%8F%B7%E6%9C%AA%E7%99%BB%E5%BD%95",
              children: "1008500008"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. The user has not logged in with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500009-%E8%B4%A6%E5%8F%B7%E5%BC%82%E5%B8%B8",
              children: "1008500009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. Failed to obtain account information with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500010-%E6%97%A0%E6%95%88%E8%AE%BE%E5%A4%87id",
              children: "1008500010"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device ID is invalid."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500012-%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0%E8%BF%87%E5%A4%9A",
              children: "1008500012"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Too many callbacks of the same type."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008509999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008509999"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { wearEngine } from '@kit.WearEngine';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet sensorClient: wearEngine.SensorClient = wearEngine.getSensorClient(this.getUIContext().getHostContext());\nlet deviceClient: wearEngine.DeviceClient = wearEngine.getDeviceClient(this.getUIContext().getHostContext());\nlet devices: wearEngine.Device[] = await deviceClient.getConnectedDevices();\n\nif (devices.length > 0) {\n  // 从得到的设备列表中选取目标设备，并定义为device(假设数组中存在已连接设备,第一位即为目标设备且具备相关能力)\n  let device: wearEngine.Device = devices[0];\n  let sensorList: wearEngine.Sensor[] = await sensorClient.getSensorList(device.randomId);\n  sensorList.forEach((sensor, idx, arr) => {\n    if (sensor.type === wearEngine.SensorType.ACCELEROMETER) {\n      let callback = (sensorResult: wearEngine.SensorResult) => {\n        console.info(`Succeeded in getting sensor result, result is ${sensorResult}`);\n      }\n      // 订阅加速度传感器数据上报\n      sensorClient.subscribeSensor(device.randomId, wearEngine.SensorType.ACCELEROMETER, callback).then(() => {\n        console.info(`Succeeded in subscribing sensor data.`);\n      }).catch((error: BusinessError) => {\n        console.error(`Failed to subscribe sensor data. Code is ${error.code}, message is ${error.message}`);\n      })\n    }\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "unsubscribesensor",
      children: "unsubscribeSensor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "unsubscribeSensor(deviceRandomId: string, type: SensorType, callback: Callback<SensorResult>): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消订阅指定的传感器数据上报，返回是否取消成功，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "设备行为差异："
        })
      }), " 该接口在Phone、Tablet中可正常调用，在其他设备类型中返回801错误码。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "deviceRandomId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#device",
              children: "Device"
            }), "的随机标识符，用于指定本次取消订阅的设备。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#sensortype",
              children: "SensorType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传感器类别，用于指定本次取消订阅的传感器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#sensorresult",
              children: "SensorResult"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，用于处理传感器上报的数据，需要同订阅监听时的回调函数为同一个对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: "Promise对象。无结果返回的Promise对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code",
        children: "Wear Engine ArkTS API错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500001-%E7%BD%91%E7%BB%9C%E9%94%99%E8%AF%AF",
              children: "1008500001"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network error. The network is unavailable."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500002-%E6%97%A0%E7%BB%91%E5%AE%9A%E8%AE%BE%E5%A4%87",
              children: "1008500002"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No device is bound."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500003-%E8%AE%BE%E5%A4%87%E6%9C%AA%E8%BF%9E%E6%8E%A5",
              children: "1008500003"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device disconnected."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500004-%E5%BA%94%E7%94%A8%E6%9C%AA%E7%94%B3%E8%AF%B7wear-engine%E6%9C%8D%E5%8A%A1",
              children: "1008500004"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App has not applied for the Wear Engine service."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500005-%E7%94%A8%E6%88%B7%E6%9C%AA%E6%8E%88%E6%9D%83",
              children: "1008500005"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The HUAWEI ID is not authorized."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500006-%E7%94%A8%E6%88%B7%E6%9C%AA%E5%90%8C%E6%84%8F%E9%9A%90%E7%A7%81%E6%8E%88%E6%9D%83",
              children: "1008500006"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User privacy is not agreed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500007-%E7%A9%BF%E6%88%B4%E8%AE%BE%E5%A4%87%E4%BE%A7%E8%83%BD%E5%8A%9B%E4%B8%8D%E6%94%AF%E6%8C%81",
              children: "1008500007"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The device capability is not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500008-%E8%B4%A6%E5%8F%B7%E6%9C%AA%E7%99%BB%E5%BD%95",
              children: "1008500008"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. The user has not logged in with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500009-%E8%B4%A6%E5%8F%B7%E5%BC%82%E5%B8%B8",
              children: "1008500009"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Account error. Failed to obtain account information with HUAWEI ID."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500010-%E6%97%A0%E6%95%88%E8%AE%BE%E5%A4%87id",
              children: "1008500010"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device ID is invalid."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008509999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008509999"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { wearEngine } from '@kit.WearEngine';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet sensorClient: wearEngine.SensorClient = wearEngine.getSensorClient(this.getUIContext().getHostContext());\nlet deviceClient: wearEngine.DeviceClient = wearEngine.getDeviceClient(this.getUIContext().getHostContext());\nlet devices: wearEngine.Device[] = await deviceClient.getConnectedDevices();\n\nif (devices.length > 0) {\n  // 从得到的设备列表中选取目标设备，并定义为device(假设数组中存在已连接设备,第一位即为目标设备且具备相关能力)\n  let device: wearEngine.Device = devices[0];\n  let sensorList: wearEngine.Sensor[] = await sensorClient.getSensorList(device.randomId);\n  sensorList.forEach((sensor, idx, arr) => {\n    if (sensor.type === wearEngine.SensorType.ACCELEROMETER) {\n      let callback = (sensorResult: wearEngine.SensorResult) => {\n        console.info(`Succeeded in getting sensor result, result is ${sensorResult}`);\n      }\n      // 订阅加速度传感器数据上报\n      sensorClient.subscribeSensor(device.randomId, wearEngine.SensorType.ACCELEROMETER, callback).then(() => {\n        console.info(`Succeeded in subscribing sensor data.`);\n      }).catch((error: BusinessError) => {\n        console.error(`Failed to subscribe sensor data. Code is ${error.code}, message is ${error.message}`);\n      })\n      // 取消加速度传感器数据上报, 注意传入的回调函数需与订阅时为同一对象\n      sensorClient.unsubscribeSensor(device.randomId, wearEngine.SensorType.ACCELEROMETER, callback).then(() => {\n        console.info(`Succeeded in unsubscribing sensor data.`);\n      }).catch((error: BusinessError) => {\n        console.error(`Failed to unsubscribe sensor data. Code is ${error.code}, message is ${error.message}`);\n      })\n    }\n  })\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sensortype",
      children: "SensorType"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传感器类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "ELECTROCARDIOGRAPHY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECG（electrocardiograph）传感器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PHOTOPLETHYSMOGRAPHY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PPG（photoplethysmogram）传感器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCELEROMETER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加速度传感器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GYROSCOPE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "陀螺仪传感器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAGNETIC_FIELD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "磁力传感器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEART_RATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "心率传感器。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sensor",
      children: "Sensor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传感器信息类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传感器名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传感器ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#sensortype",
              children: "SensorType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传感器类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传感器采样周期，单位毫秒。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传感器分辨率，当前仅作为Sensor对象的返回值信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isUtcTimestampSupported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传感器是否支持UTC（ Coordinated Universal Time）时间戳。true：支持，false：不支持。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sensordata",
      children: "SensorData"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传感器上报数据类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "sensorType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#sensortype",
              children: "SensorType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传感器类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["数据内容，格式及含义请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/device_sensor#%E7%A9%BF%E6%88%B4%E8%AE%BE%E5%A4%87%E4%BC%A0%E6%84%9F%E5%99%A8%E6%95%B0%E6%8D%AE%E6%A0%BC%E5%BC%8F%E5%8F%8A%E6%A0%B7%E4%BE%8B",
              children: "穿戴设备传感器数据格式及样例"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "channel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传感器通道ID，为大于0的整数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "timestamp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计时时间戳。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "utcTimestamp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UTC时间戳。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sensorerrorcode",
      children: "SensorErrorCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传感器类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
            children: "DEVICE_NOT_BEING_WORN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "300"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备未佩戴。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEVICE_LEAD_OFF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "301"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备引线脱落。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SENSOR_TURNED_OFF_MANUALLY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "302"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传感器被手动关闭。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SENSOR_OCCUPIED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "303"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传感器被占用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SENSOR_NOT_SUPPORTED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "304"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传感器不支持。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sensorresult",
      children: "SensorResult"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传感器上报结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
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
            children: "data"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#sensordata",
              children: "SensorData"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传感器正常上报的数据内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "errorCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["错误码，含义请见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#sensorerrorcode",
              children: "SensorErrorCode"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "onoff订阅事件",
      children: "on/off订阅事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wearengineon",
      children: "wearEngine.on"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'serviceDie', callback: Callback<void>): void"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["订阅服务端消亡事件，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#wearenginedestroy",
        children: "wearEngine.destroy"
      }), "接口主动发起的消亡事件不会触发执行回调函数。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听的事件类型，仅支持serviceDie(服务端消亡事件)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code",
        children: "Wear Engine ArkTS API错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008500012-%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0%E8%BF%87%E5%A4%9A",
              children: "1008500012"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Too many callbacks of the same type."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008509999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008509999"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { wearEngine } from '@kit.WearEngine';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet callback = () => {\n  console.info(`The service destruction event`);\n}\ntry {\n  wearEngine.on('serviceDie', callback);\n  console.info(`Succeeded in subscribing the service destruction event.`);\n} catch (error) {\n  const err: BusinessError = error as BusinessError;\n  console.error(`Failed to subscribe the service destruction event. Code is ${err.code}, message is ${err.message}.`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wearengineoff",
      children: "wearEngine.off"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'serviceDie', callback?: Callback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消订阅服务端消亡事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听的事件类型，仅支持serviceDie(服务端消亡事件)。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，需要同订阅监听时的回调函数为同一个对象。  当该参数为空时，会取消掉之前所有的订阅。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code",
        children: "Wear Engine ArkTS API错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008509999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008509999"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
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
        children: "import { wearEngine } from '@kit.WearEngine';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet callback = () => {\n  console.info(`The service destruction event`);\n}\nwearEngine.on('serviceDie', callback);\n\ntry {\n  wearEngine.off('serviceDie', callback);\n  console.info(`Succeeded in unsubscribing the service destruction event.`);\n} catch (error) {\n  const err: BusinessError = error as BusinessError;\n  console.error(`Failed to unsubscribe the service destruction event. Code is ${err.code}, message is ${err.message}.`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wearenginedestroy",
      children: "wearEngine.destroy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "destroy(): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主动销毁服务端，使用Promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Health.WearEngine"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
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
            children: "Promise对象。无结果返回的Promise对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code",
        children: "Wear Engine ArkTS API错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_api_error_code/wearengine_api_error_code#section1008509999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1008509999"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { wearEngine } from '@kit.WearEngine';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nwearEngine.destroy().then(() => {\n  console.info(`Succeeded in destroying wear engine channel.`);\n}).catch((error: BusinessError) => {\n  console.error(`Failed to destroy wear engine channel. Code is ${error.code}, message is ${error.message}.`);\n})\n"
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
728978(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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