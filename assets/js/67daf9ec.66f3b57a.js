"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["504265"], {
204322(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_wear_engine_kit_guide_wearengine_phonedev_wear_engine_app_development_query_and_subscribe_status_query_and_subscribe_status_md_67d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-wear-engine-kit-guide-wearengine-phonedev-wear-engine-app-development-query-and-subscribe-status-query-and-subscribe-status-md-67d.json
var site_docs_system_hardware_wear_engine_kit_guide_wearengine_phonedev_wear_engine_app_development_query_and_subscribe_status_query_and_subscribe_status_md_67d_namespaceObject = JSON.parse('{"id":"system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/query_and_subscribe_status/query_and_subscribe_status","title":"状态查询与订阅","description":"该接口的调用需要在开发者联盟申请设备基础信息权限与穿戴用户状态权限（请参考申请接入Wear Engine服务），穿戴用户状态权限还需获得用户授权。","source":"@site/docs/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/query_and_subscribe_status/query_and_subscribe_status.md","sourceDirName":"system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/query_and_subscribe_status","slug":"/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/query_and_subscribe_status/","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/query_and_subscribe_status/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"状态查询与订阅","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/query_and_subscribe_status","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用间消息通信","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/p2p_communication/"},"next":{"title":"穿戴设备模板化通知","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/device_notification/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/query_and_subscribe_status/query_and_subscribe_status.md


const frontMatter = {
	title: '状态查询与订阅',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/query_and_subscribe_status',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '状态查询与订阅';

const assets = {

};



const toc = [{
  "value": "查询设备状态",
  "id": "查询设备状态",
  "level": 2
}, {
  "value": "订阅设备状态",
  "id": "订阅设备状态",
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
        id: "状态查询与订阅",
        children: "状态查询与订阅"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(535222)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该接口的调用需要在开发者联盟申请设备基础信息权限与穿戴用户状态权限（请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wearengine_preparation/wearengine_apply",
        children: "申请接入Wear Engine服务"
      }), "），穿戴用户状态权限还需获得用户授权。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "实时查询穿戴设备可用空间、电量状态。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "订阅穿戴设备连接状态、低电量告警、用户心率告警。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查询和订阅穿戴设备充电状态、佩戴状态、设备模式。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用该接口前，需要确保应用已申请相应权限（参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wearengine_preparation/wearengine_apply",
        children: "申请接入Wear Engine服务"
      }), "）同时向手机侧用户申请获取对应权限的授权（参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/request_user_authorization",
        children: "请求用户授权"
      }), "），否则接口将调用失败。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 申请权限：设备基础信息"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "穿戴设备状态与运动健康状态"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "查询结果"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "订阅事件的触发条件"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "订阅结果"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "连接状态"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 2：手机连接设备成功  - 3：手机与设备断开（断开蓝牙或拉远距离）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 2：连接成功  - 3：连接断开  - 4：连接失败  - 5：设备被删除"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "可用空间"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可用存储空间，单位：KB（例如：20480）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "电量状态"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "电量值（例如：97）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备电量每减少1% （例如：由98%降到97%），且设备处于非充电状态"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "电量值（例如：97）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "充电状态"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 1：设备正在充电状态  - 2：设备为非充电状态  - 3：设备正在充电，且为满电状态"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 1：给设备进行充电  - 2：设备停止充电  - 3：设备达到充满电的状态"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 1：充电开始  - 2：充电结束  - 3：充电完成"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "设备模式"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- -1：设备不支持模式切换  - 0：设备处于智能模式  - 1：设备处于超长续航模式"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 0：设备从超长续航模式切换到智能模式  - 1：设备从智能模式切换到超长续航模式"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 0：设备处于智能模式  - 1：设备处于超长续航模式"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " 申请权限：穿戴用户状态USER_STATUS（仅限企业开发者）"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "穿戴设备状态与运动健康状态"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "查询结果"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "订阅事件的触发条件"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "订阅结果"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "佩戴状态"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 1：佩戴中  - 2：未佩戴"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 1：将穿戴设备戴在手腕上  - 2：将穿戴设备由手腕摘下"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 1：佩戴  - 2：未佩戴"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "心率告警"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 1：静态心率连续10分钟高于上限值  - 2：静态心率连续10分钟低于下限值  - 3：运动心率过高  - 4：运动心率过低  备注：打开运动健康App 设备，在应用和服务列表中，点击心率，设置相应的心率提醒。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 1：静态心率过高  - 2：静态心率过低  - 3：运动心率过高  - 4：运动心率过低"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(758884)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "穿戴设备侧无对应的应用，手机侧应用也可以使用该能力获取穿戴设备状态。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在查询或订阅穿戴设备电量、充电、佩戴、心率告警状态时，请确保穿戴设备和华为运动健康App处于连接状态。用户可进入App“设备”界面查看设备是否在线。开发者可调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#getconnecteddevices",
          children: "getConnectedDevices"
        }), "或根据返回错误码了解设备是否已连接手机，如果设备未连接则提醒用户重新连接设备。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["查询和订阅佩戴状态、心率告警时，需要申请穿戴用户状态", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#permission",
          children: "USER_STATUS"
        }), "权限。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查询设备状态",
      children: "查询设备状态"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["穿戴设备的状态可以调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#monitorclient",
        children: "MonitorClient"
      }), "对象中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#querystatus",
        children: "queryStatus"
      }), "方法获取到。一次只能查询一个状态。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/query_connected_devices",
            children: "已连接穿戴设备查询"
          }), "章节，获取已连接设备列表。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/we-device-selection",
            children: "目标设备选择"
          }), "章节，从已连接设备列表中选定需要通信的设备。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api",
            children: "wearEngine"
          }), "中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#wearenginegetmonitorclient",
            children: "getMonitorClient"
          }), "方法，获取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#monitorclient",
            children: "MonitorClient"
          }), "对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#querystatus",
            children: "queryStatus"
          }), "方法，查询指定指标状态。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#monitoritem",
                children: "MonitorItem"
              }), "对象，查询指定指标状态。目前支持查询的状态如下："]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "“电量状态”字段：POWER_STATUS。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "“充电状态”字段：CHARGE_STATUS。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "“佩戴状态”字段：WEAR_STATUS。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "“设备模式”字段：POWER_MODE。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "“可用内存”字段：AVAILABLE_STORAGE_SPACE"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
                href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#monitordata",
                children: "MonitorData"
              }), "对象，返回指定指标状态的查询结果。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "// 步骤3 获取MonitorClient对象\nlet monitorClient: wearEngine.MonitorClient = wearEngine.getMonitorClient(this.getUIContext().getHostContext());\n\n// 步骤4 查询指定指标状态（以佩戴状态为例）\nmonitorClient.queryStatus(targetDevice.randomId, wearEngine.MonitorItem.WEAR_STATUS).then((result: wearEngine.MonitorData) => {\n  // 获取到所查状态的状态值，处理对应业务逻辑\n  console.info(`Succeeded in querying wear status, result is ${result.code}.`);\n}).catch((error: BusinessError) => {\n  // 处理调用失败时捕获到的异常\n  console.error(`Failed to query wear status. Code is ${error.code}, message is ${error.message}.`);\n})\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "订阅设备状态",
      children: "订阅设备状态"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/query_connected_devices",
            children: "已连接穿戴设备查询"
          }), "章节，获取已连接的设备列表。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/we-device-selection",
            children: "目标设备选择"
          }), "章节，从已连接设备列表中选定需要通信的设备。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api",
            children: "wearEngine"
          }), "中的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#wearenginegetmonitorclient",
            children: "getMonitorClient"
          }), "方法，获取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#monitorclient",
            children: "MonitorClient"
          }), "对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["定义订阅任务的回调对象", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#callback",
            children: "Callback"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#subscribeevent",
            children: "subscribeEvent"
          }), "方法，订阅指定指标状态变化的订阅。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#monitorevent",
              children: "MonitorEvent"
            }), "对象，订阅穿戴设备与运动健康状态。目前支持的订阅状态如下：\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "“设备连接状态”字段： EVENT_CONNECTION_STATUS_CHANGED。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "“电量降低状态”字段：EVENT_BATTERY_LEVEL_DROPPED。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "“充电状态”字段： EVENT_CHARGE_STATUS_CHANGED。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "“佩戴状态”字段：EVENT_WEAR_STATUS_CHANGED。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "“心率告警”字段：EVENT_HEART_RATE_ALARM。"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "“设备模式”字段：EVENT_POWER_MODE_CHANGED。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/basic-services-others/js-apis-base/js-apis-base#callback",
              children: "Callback"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#monitoreventdata",
              children: "MonitorEventData"
            }), ">对象，返回设备状态的订阅结果。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 步骤3 获取MonitorClient对象\nlet monitorClient: wearEngine.MonitorClient = wearEngine.getMonitorClient(this.getUIContext().getHostContext());\n\n// 步骤4 定义回调函数\nlet callback = (monitorEventData: wearEngine.MonitorEventData) => {\n  // 处理监听到状态变化后的业务逻辑\n  console.info(`Succeeded in listening change of ${monitorEventData.event}, the new status is ${monitorEventData.data}.`)\n}\n\n// 步骤5 调用订阅方法\nmonitorClient.subscribeEvent(targetDevice.randomId, wearEngine.MonitorEvent.EVENT_WEAR_STATUS_CHANGED, callback).then(() => {\n  console.info(`Succeeded in subscribing wear status.`);\n}).catch((error: BusinessError) => {\n  console.error(`Failed to subscribe wear status. Code is ${error.code}, message is ${error.message}.`);\n})\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#unsubscribeevent",
            children: "unsubscribeEvent"
          }), "方法，解除穿戴设备状态变化的订阅。（需要传入订阅时使用的回调函数对象）"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 步骤6 取消订阅，取消订阅时需要传入与订阅时相同的回调函数对象才可正常取消订阅\nmonitorClient.unsubscribeEvent(targetDevice.randomId, wearEngine.MonitorEvent.EVENT_WEAR_STATUS_CHANGED, callback).then(() => {\n  console.info(`Succeeded in unsubscribing wear status`);\n}).catch((error: BusinessError) => {\n  console.error(`Failed to unsubscribe wear status. Code is ${error.code}, message is ${error.message}.`);\n})\n"
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
535222(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
758884(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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