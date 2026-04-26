"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["618493"], {
830027(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_wear_engine_kit_guide_wearengine_phonedev_wear_engine_app_development_device_sensor_device_sensor_md_fdc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-wear-engine-kit-guide-wearengine-phonedev-wear-engine-app-development-device-sensor-device-sensor-md-fdc.json
var site_docs_system_hardware_wear_engine_kit_guide_wearengine_phonedev_wear_engine_app_development_device_sensor_device_sensor_md_fdc_namespaceObject = JSON.parse('{"id":"system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/device_sensor/device_sensor","title":"穿戴设备传感器获取","description":"人体传感器功能仅限专业研究机构使用。","source":"@site/docs/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/device_sensor/device_sensor.md","sourceDirName":"system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/device_sensor","slug":"/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/device_sensor/","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/device_sensor/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"穿戴设备传感器获取","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/device_sensor","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"穿戴设备模板化通知","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/device_notification/"},"next":{"title":"管理应用与Wear Engine服务的连接状态","permalink":"/harmonyos-docs-site/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/wearengine_service_status/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/device_sensor/device_sensor.md


const frontMatter = {
	title: '穿戴设备传感器获取',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/device_sensor',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '穿戴设备传感器获取';

const assets = {

};



const toc = [{
  "value": "获取穿戴设备的传感器列表",
  "id": "获取穿戴设备的传感器列表",
  "level": 2
}, {
  "value": "订阅指定传感器数据上报",
  "id": "订阅指定传感器数据上报",
  "level": 2
}, {
  "value": "穿戴设备传感器数据格式及样例",
  "id": "穿戴设备传感器数据格式及样例",
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
        id: "穿戴设备传感器获取",
        children: "穿戴设备传感器获取"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(885274)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "人体传感器功能仅限专业研究机构使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "手机侧应用可以通过Wear Engine获取穿戴设备上的传感器信息，并通过打开、关闭命令控制获取传感器数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用传感器相关接口前，需要向手机侧用户申请获取对应权限的授权（参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wear-engine-app-development/request_user_authorization",
        children: "请求用户授权"
      }), "），否则接口将调用失败。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "传感器类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "申请权限"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECG、PPG、HR"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#permission",
              children: "HEALTH_SENSOR"
            }), "人体传感器"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACC、GYRO、MAG"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#permission",
              children: "MOTION_SENSOR"
            }), "运动传感器"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(897904)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "穿戴设备侧无对应的应用，手机侧应用也可以使用该能力获取穿戴设备传感器。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["请确保穿戴设备和华为运动健康App处于连接状态。用户可进入App“设备”界面查看设备是否在线。开发者可调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#getconnecteddevices",
          children: "getConnectedDevices"
        }), "方法了解设备是否在线，如果返回列表中不包含目标设备，则提醒用户重新连接该设备。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取穿戴设备的传感器列表",
      children: "获取穿戴设备的传感器列表"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(648570)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该接口的调用需要在开发者联盟申请运动传感器权限或人体传感器（受限开放，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wearengine_preparation/wearengine_apply",
        children: "申请接入Wear Engine服务"
      }), "）权限并获得用户授权。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "手机侧应用可以获取穿戴设备上传感器列表，并获得这些传感器的名称、ID、上报周期等参数。"
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
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#wearenginegetsensorclient",
            children: "getSensorClient"
          }), "方法，获取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#sensorclient",
            children: "SensorClient"
          }), "对象。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#getsensorlist",
            children: "getSensorList"
          }), "方法，获取指定连接设备的传感器列表。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 步骤3 获取SensorClient客户端\nlet sensorClient: wearEngine.SensorClient = wearEngine.getSensorClient(this.getUIContext().getHostContext());\n\n// 步骤4 获取指定连接设备的传感器列表\nsensorClient.getSensorList(targetDevice.randomId).then((sensorList) => {\n  console.info(`Succeeded in getting sensor list, result is ${sensorList}`);\n}).catch((error: BusinessError) => {\n  console.error(`Failed to get sensor list. Code is ${error.code}, message is ${error.message}`);\n})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "订阅指定传感器数据上报",
      children: "订阅指定传感器数据上报"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(55791)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该接口的调用需要在开发者联盟申请运动传感器权限或人体传感器权限（受限开放，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-hardware/wear-engine-kit-guide/wearengine_phonedev/wearengine_preparation/wearengine_apply",
        children: "申请接入Wear Engine服务"
      }), "）并获得用户授权。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["手机侧通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#getsensorlist",
        children: "getSensorList"
      }), "方法获取传感器列表后可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#subscribesensor",
        children: "subscribeSensor"
      }), "方法订阅指定传感器数据上报。通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#unsubscribesensor",
        children: "unsubscribeSensor"
      }), "方法可取消订阅指定传感器的数据上报。"]
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
          children: ["参见上一小节", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E8%8E%B7%E5%8F%96%E7%A9%BF%E6%88%B4%E8%AE%BE%E5%A4%87%E7%9A%84%E4%BC%A0%E6%84%9F%E5%99%A8%E5%88%97%E8%A1%A8",
            children: "获取穿戴设备的传感器列表"
          }), "，获取设备的传感器列表信息。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "核对传感器列表中是否存在目标传感器。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "订阅或取消订阅传感器数据上报。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let sensorClient: wearEngine.SensorClient = wearEngine.getSensorClient(this.getUIContext().getHostContext());\nlet sensorList: wearEngine.Sensor[] = await sensorClient.getSensorList(targetDevice.randomId);\nsensorList.forEach((sensor, idx, arr) => {\n  if (sensor.type === wearEngine.SensorType.ACCELEROMETER) {\n    let callback = (sensorResult: wearEngine.SensorResult) => {\n      console.info(`Succeeded in getting sensor result, result is ${sensorResult}`);\n    }\n    // 订阅传感器数据上报\n    sensorClient.subscribeSensor(targetDevice.randomId, wearEngine.SensorType.ACCELEROMETER, callback).then(() => {\n      console.info(`Succeeded in subscribing sensor data.`);\n    }).catch((error: BusinessError) => {\n      console.error(`Failed to subscribe sensor data. Code is ${error.code}, message is ${error.message}`);\n    })\n\n    // 取消传感器数据上报\n    sensorClient.unsubscribeSensor(targetDevice.randomId, wearEngine.SensorType.ACCELEROMETER, callback).then(() => {\n      console.info(`Succeeded in unsubscribing sensor data.`);\n    }).catch((error: BusinessError) => {\n      console.error(`Failed to unsubscribe sensor data. Code is ${error.code}, message is ${error.message}`);\n    })\n  }\n})\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(653804)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["传感器成功打开后，会根据每个传感器的上报周期，连续不断地通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#subscribesensor",
              children: "subscribeSensor"
            }), "方法入参的回调函数上报数据，数据上报时长可由开发者通过取消订阅传感器接口自行控制。每组数据都有时间戳属性，建议开发者根据时间戳进行数据对齐。不同的传感器上报的数据格式是不同的，具体可参见：", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%A9%BF%E6%88%B4%E8%AE%BE%E5%A4%87%E4%BC%A0%E6%84%9F%E5%99%A8%E6%95%B0%E6%8D%AE%E6%A0%BC%E5%BC%8F%E5%8F%8A%E6%A0%B7%E4%BE%8B",
              children: "穿戴设备传感器数据格式及样例"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["传感器分为多通道传感器，如PPG、ECG，和非多通道传感器，如ACC。对于多通道传感器上报的数据，可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#sensordata",
              children: "SensorData"
            }), "中的channel字段来区分通道。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["设备连接状态断开，设备会停止传感器数据的上报，需要开发者主动订阅设备的连接状态，设备重新连接上后主动调用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/wear-engine-api/wearengine_arkts_api/wearengine_api/wearengine_api#subscribesensor",
              children: "subscribeSensor"
            }), "方法订阅指定传感器数据上报。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "穿戴设备传感器数据格式及样例",
      children: "穿戴设备传感器数据格式及样例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(737119)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "数据上报数量非固定，示例中给出的是通常上报结果，实际有可能根据设备原因增加或者减少数据。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "传感器"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持多通道"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "采集周期（ms）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "上报周期（ms）"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据格式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据样例"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1次上报10组，每组3个数据，分别代表x轴、y轴、z轴加速度，共30个数据。  单位：m/s^2，4096为1个重力加速度g"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["[34303.0, 10753.0, 54799.0, 33023.0, 15617.0, 2576.0, 33535.0, 9729.0, 5136.0, 24063.0, 6145.0, 62479.0, 23295.0, 6145.0, 58895.0, 35071.0, 9729.0, 57359.0, 46335.0, 10497.0, 53263.0, 55039.0, 4609.0, 57359.0, 42495.0, 2305.0, 60943.0, 41471.0, 64768.0, 57359.0]  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " ACC、GYRO原始数据值范围为有符号Short，目前上报后的数据值范围为无符号Short，需要开发者自行进行转换。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GYRO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1次上报10组，每组3个数据，分别代表x轴、y轴、z轴角速度，共30个数据。  单位：70mdps/LSB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[34303.0, 10753.0, 54799.0, 33023.0, 15617.0, 2576.0, 33535.0, 9729.0, 5136.0, 24063.0, 6145.0, 62479.0, 23295.0, 6145.0, 58895.0, 35071.0, 9729.0, 57359.0, 46335.0, 10497.0, 53263.0, 55039.0, 4609.0, 57359.0, 42495.0, 2305.0, 60943.0, 41471.0, 64768.0, 57359.0]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1次1个数据，代表每分钟心跳次数。  单位：次/分钟"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[80.0]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1次上报1组，每组4个数据，分别代表x轴、y轴、z轴磁场强度，最后一个数据无实际意义，无需关注。  单位：μT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3.9310358, 21.161278, -34.467373, 0.0]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PPG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "三路数据（GREEN/RED/IR） 100ms上报10包数据，每包数据4个字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[758457.0, 2273675.0, 2276247.0, 2278939.0, 2281102.0, 2283411.0, 2285717.0, 2288307.0, 2290863.0, 2293297.0]（一路数据）"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ECG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一路数据100ms上报50包数据。不区分左右手。  单位：nV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[-5020837.0, -4742510.0, -4896082.0, -4938397.0, -4796497.0, -4886598.0, -4871642.0, -4943139.0, -5209429.0, -5294787.0, -5161278.0, -5174045.0, -5588071.0, -5323970.0, -5342938.0, -5028133.0, -5094523.0, -5240070.0, -5394008.0, -5540285.0, -5655190.0, -5589895.0, -5539920.0, -5559618.0, -5623090.0, -5501618.0, -5747845.0, -5871870.0, -5814964.0, -5885002.0, -6069946.0, -5678536.0, -5839040.0, -5903971.0, -5959417.0, -6172084.0, -6263279.0, -6029455.0, -6097669.0, -6165518.0, -6174638.0, -6284072.0, -6347544.0, -6319091.0, -6085631.0, -6143631.0, -6382198.0, -6250512.0, -6396059.0, -6424512.0]"
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
648570(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
737119(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
897904(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
653804(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
885274(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
55791(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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