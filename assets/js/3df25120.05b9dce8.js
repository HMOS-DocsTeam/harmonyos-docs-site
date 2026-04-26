"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["289439"], {
60673(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_sensor_service_kit_sensor_sensor_guidelines_sensor_guidelines_md_3df_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-sensor-service-kit-sensor-sensor-guidelines-sensor-guidelines-md-3df.json
var site_docs_system_hardware_sensor_service_kit_sensor_sensor_guidelines_sensor_guidelines_md_3df_namespaceObject = JSON.parse('{"id":"system-hardware/sensor-service-kit/sensor/sensor-guidelines/sensor-guidelines","title":"传感器开发指导(ArkTS)","description":"场景介绍","source":"@site/docs/system-hardware/sensor-service-kit/sensor/sensor-guidelines/sensor-guidelines.md","sourceDirName":"system-hardware/sensor-service-kit/sensor/sensor-guidelines","slug":"/system-hardware/sensor-service-kit/sensor/sensor-guidelines/","permalink":"/harmonyos-docs-site/system-hardware/sensor-service-kit/sensor/sensor-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"传感器开发指导(ArkTS)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/sensor-guidelines","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"传感器开发概述","permalink":"/harmonyos-docs-site/system-hardware/sensor-service-kit/sensor/sensor-overview/"},"next":{"title":"传感器开发指导(C/C++)","permalink":"/harmonyos-docs-site/system-hardware/sensor-service-kit/sensor/sensor-guidelines-capi/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/sensor-service-kit/sensor/sensor-guidelines/sensor-guidelines.md


const frontMatter = {
	title: '传感器开发指导(ArkTS)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/sensor-guidelines',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '传感器开发指导(ArkTS)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
        id: "传感器开发指导arkts",
        children: "传感器开发指导(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当设备需要获取传感器数据时，可以使用sensor模块，例如：通过订阅方向传感器数据感知用户设备当前的朝向，通过订阅计步传感器数据统计用户的步数等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的接口介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/sensor-service-api/sensor-service-arkts/js-apis-sensor/js-apis-sensor",
        children: "@ohos.sensor (传感器)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sensor.on(sensorId, callback: AsyncCallback<Response>, options?: Options): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "持续监听传感器数据变化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sensor.on(type: 'sensorStatusChange', callback: Callback<SensorStatusEvent>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听传感器动态上下线的状态变化，callback返回传感器状态事件数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sensor.once(sensorId, callback: AsyncCallback<Response>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取一次传感器数据变化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sensor.off(sensorId, callback?: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注销传感器数据的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sensor.off(sensorId, sensorInfoParam?: SensorInfoParam, callback?:AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注销传感器数据的监听，可传入设置参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sensor.off(type: 'sensorStatusChange', callback?: Callback<SensorStatusEvent>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注销传感器动态上下线的状态变化的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sensor.getSensorList(callback: AsyncCallback<Array<Sensor>>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取设备上的所有传感器信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发步骤以加速度传感器ACCELEROMETER为例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新建一个工程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(178186)/* ["default"] */.A) + "",
            width: "1078",
            height: "977"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["配置加速度传感器权限，具体配置方式请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
            children: "声明权限"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"requestPermissions\": [\n  {\n    \"name\":\"ohos.permission.ACCELEROMETER\"\n  }\n],\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { sensor } from '@kit.SensorServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义常量。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let TAG = 'sensor: ';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询设备支持的所有传感器的参数，如果获取不到某个传感器则代表该传感器在此设备上不存在或不可用，如果订阅没查到的传感器时需要处理异常。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  sensor.getSensorList((error: BusinessError, data: Array<sensor.Sensor>) => {\n      if (error) {\n          console.error(TAG + 'getSensorList failed');\n      } else {\n          console.info('getSensorList success');\n          for (let i = 0; i < data.length; i++) {\n              console.info(TAG + JSON.stringify(data[i]));\n              // ...\n          }\n      }\n  });\n} catch (error) {\n  console.error(TAG + 'get list exception, code:' + error.code + 'msg:' + error.message);\n  console.error(TAG + 'get list exception, msg:' + JSON.stringify(error));\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(536955)/* ["default"] */.A) + "",
            width: "1292",
            height: "259"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该传感器支持的最小采样周期为5000000纳秒，最大采样周期是200000000纳秒。不同传感器支持的采样周期范围也不同，interval应该设置在传感器支持范围内，大于最大值时以最大值上报数据，小于最小值时以最小值上报数据。设置数值越小数据上报越频繁，其功耗越大。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据设备Id查询传感器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  this.deviceId = -1;\n  // 第一个参数deviceId 非必填，缺省默认查询的为本地设备。\n  const sensorList: sensor.Sensor[] = sensor.getSensorListByDeviceSync(this.deviceId);\n  console.info(`sensorList length: ${sensorList.length}`);\n  console.info(`sensorList: ${JSON.stringify(sensorList)}`);\n  // ···\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`Failed to get sensorList. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据设备Id和传感器类型查询传感器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  this.deviceId = -1;\n  // 第二个参数deviceId 非必填\n  const sensorList: sensor.Sensor[] = sensor.getSingleSensorByDeviceSync(sensor.SensorId.ACCELEROMETER, this.deviceId);\n  console.info(`sensorList length: ${sensorList.length}`);\n  console.info(`sensorList Json: ${JSON.stringify(sensorList)}`);\n  // ...\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`Failed to get sensorList. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册监听。可以通过on()和once()两种接口监听传感器的调用结果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过on()接口，实现对传感器的持续监听，传感器上报周期interval设置为100000000纳秒。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  sensor.on(sensor.SensorId.ACCELEROMETER, (data: sensor.AccelerometerResponse) => {\n        console.info(\"Succeeded in obtaining data. x: \" + data.x + \" y: \" + data.y + \" z: \" + data.z);\n        // ...\n  }, { interval: 100000000 });\n} catch (error) {\n    let e: BusinessError = error as BusinessError;\n    console.error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "第三个参数还可以传入SensorInfoParam，传递deviceId、sensorIndex。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  sensor.on(sensor.SensorId.ACCELEROMETER, (data: sensor.AccelerometerResponse) => {\n        console.info(\"Succeeded in obtaining data. x: \" + data.x + \" y: \" + data.y + \" z: \" + data.z);\n        // ...\n  }, { interval: 100000000, sensorInfoParam: { deviceId: -1 } });\n} catch (error) {\n    let e: BusinessError = error as BusinessError;\n    console.error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(572913)/* ["default"] */.A) + "",
            width: "969",
            height: "174"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过once()接口，实现对传感器的一次监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  sensor.once(sensor.SensorId.ACCELEROMETER, (data: sensor.AccelerometerResponse) => {\n      console.info(\"Succeeded in obtaining data. x: \" + data.x + \" y: \" + data.y + \" z: \" + data.z);\n      // ...\n  });\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`Failed to invoke once. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(619519)/* ["default"] */.A) + "",
            width: "1191",
            height: "21"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "取消持续监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "取消持续监听，此场景下未订阅而取消监听为异常行为，需处理异常。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  sensor.off(sensor.SensorId.ACCELEROMETER);\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`Failed to invoke off. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据SensorInfoParam取消监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  sensor.off(sensor.SensorId.ACCELEROMETER, { deviceId: -1 });\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`Failed to invoke off. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "动态传感器状态的监听，在收到设备下线事件通知时，用户应主动调用off关闭该设备上的传感器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册监听, SensorStatusEvent 会返回事件时间戳、传感器ID、传感器索引、上线或下线、设备id、设备名称等值。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  sensor.on('sensorStatusChange', (data: sensor.SensorStatusEvent) => {\n      console.info(`timestamp: ${data.timestamp},\n      deviceId: ${data.deviceId} deviceName: ${data.deviceName}\n      sensorId: ${data.sensorId} sensorIndex:${data.sensorIndex} isSensorOnline: ${data.isSensorOnline}`);\n  });\n  // ···\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "取消监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  sensor.off('sensorStatusChange');\n  // ···\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取某时刻地球上特定位置的地磁场信息"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用callback方式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  sensor.getGeomagneticInfo({ latitude: 80, longitude: 0, altitude: 0 }, 1580486400000,\n      (err: BusinessError, data: sensor.GeomagneticResponse) => {\n    if (err) {\n      console.error(`Failed to get geomagneticInfo. Code: ${err.code}, message: ${err.message}`);\n      return;\n    }\n    console.info(\"Succeeded in getting geomagneticInfo x\" + data.x);\n    console.info(\"Succeeded in getting geomagneticInfo y\" + data.y);\n    console.info(\"Succeeded in getting geomagneticInfo z\" + data.z);\n    console.info(\"Succeeded in getting geomagneticInfo geomagneticDip\" + data.geomagneticDip);\n    console.info(\"Succeeded in getting geomagneticInfo deflectionAngle\" + data.deflectionAngle);\n    console.info(\"Succeeded in getting geomagneticInfo levelIntensity\" + data.levelIntensity);\n    console.info(\"Succeeded in getting geomagneticInfo totalIntensity\" + data.totalIntensity);\n  });\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`Failed to get geomagneticInfo. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用promise方式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  const promise = sensor.getGeomagneticInfo({ latitude: 80, longitude: 0, altitude: 0 }, 1580486400000);\n  promise.then((data: sensor.GeomagneticResponse) => {\n    console.info(\"Succeeded in getting geomagneticInfo x\" + data.x);\n    console.info(\"Succeeded in getting geomagneticInfo y\" + data.y);\n    console.info(\"Succeeded in getting geomagneticInfo z\" + data.z);\n    console.info(\"Succeeded in getting geomagneticInfo geomagneticDip\" + data.geomagneticDip);\n    console.info(\"Succeeded in getting geomagneticInfo deflectionAngle\" + data.deflectionAngle);\n    console.info(\"Succeeded in getting geomagneticInfo levelIntensity\" + data.levelIntensity);\n    console.info(\"Succeeded in getting geomagneticInfo totalIntensity\" + data.totalIntensity);\n  }, (err: BusinessError) => {\n    console.error(`Failed to get geomagneticInfo. Code: ${err.code}, message: ${err.message}`);\n  });\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`Failed to get geomagneticInfo. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据气压值获取海拔高度"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用callback方式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  let seaPressure = 1013.2;\n  let currentPressure = 1500.0;\n  sensor.getDeviceAltitude(seaPressure, currentPressure, (err: BusinessError, data: number) => {\n    if (err) {\n      console.error(`Failed to get altitude. Code: ${err.code}, message: ${err.message}`);\n      return;\n    }\n    console.info('Succeeded in getting altitude: ' + data);\n  });\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`Failed to get altitude. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用promise方式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  let seaPressure = 1013.2;\n  let currentPressure = 1500.0;\n  const promise = sensor.getDeviceAltitude(seaPressure, currentPressure);\n  promise.then((data: number) => {\n    console.info('Succeeded in getting device altitude: ', data);\n  }, (err: BusinessError) => {\n    console.error(`Failed to get altitude. Code: ${err.code}, message: ${err.message}`);\n  });\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`Failed to get altitude. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据倾斜矩阵计算地磁倾角"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用callback方式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  // inclinationMatrix可以为3*3，或者4*4\n  let inclinationMatrix = [\n    1, 0, 0,\n    0, 1, 0,\n    0, 0, 1\n  ]\n  sensor.getInclination(inclinationMatrix, (err: BusinessError, data: number) => {\n    if (err) {\n      console.error(`Failed to get inclination. Code: ${err.code}, message: ${err.message}`);\n      return;\n    }\n    console.info('Succeeded in getting inclination: ' + data);\n  })\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`Failed to get inclination. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用promise方式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  // inclinationMatrix可以为3*3，或者4*4\n  let inclinationMatrix = [\n    1, 0, 0,\n    0, 1, 0,\n    0, 0, 1\n  ]\n  const promise = sensor.getInclination(inclinationMatrix);\n  promise.then((data: number) => {\n    console.info('Succeeded in getting inclination: ' + data);\n  }, (err: BusinessError) => {\n    console.error(`Failed to get inclination. Code: ${err.code}, message: ${err.message}`);\n  });\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`Failed to get inclination. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "计算两个旋转矩阵之间的角度变化"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用callback方式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  // 旋转矩阵可以为3*3，或者4*4\n  let currentRotationMatrix = [\n    1, 0, 0,\n    0, 1, 0,\n    0, 0, 1\n  ];\n  let preRotationMatrix = [\n    1, 0, 0,\n    0, 0.87, -0.50,\n    0, 0.50, 0.87\n  ];\n  sensor.getAngleVariation(currentRotationMatrix, preRotationMatrix, (err: BusinessError, data: Array<number>) => {\n    if (err) {\n      console.error(`Failed to get angle variation. Code: ${err.code}, message: ${err.message}`);\n      return;\n    }\n    if (data.length < 3) {\n      console.error(\"Failed to get angle variation, length\" + data.length);\n      return;\n    }\n    console.info(\"Z: \" + data[0]);\n    console.info(\"X: \" + data[1]);\n    console.info(\"Y: \" + data[2]);\n  })\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`Failed to get angle variation. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用promise方式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  // 旋转矩阵可以为3*3，或者4*4\n  let currentRotationMatrix = [\n    1, 0, 0,\n    0, 1, 0,\n    0, 0, 1\n  ];\n  let preRotationMatrix = [\n    1, 0, 0,\n    0, 0.87, -0.50,\n    0, 0.50, 0.87\n  ];\n  const promise = sensor.getAngleVariation(currentRotationMatrix, preRotationMatrix);\n  promise.then((data: Array<number>) => {\n    if (data.length < 3) {\n      console.error(\"Failed to get angle variation, length\" + data.length);\n      return;\n    }\n    console.info(\"Z: \" + data[0]);\n    console.info(\"X: \" + data[1]);\n    console.info(\"Y: \" + data[2]);\n  }, (err: BusinessError) => {\n    console.error(`Failed to get angle variation. Code: ${err.code}, message: ${err.message}`);\n  });\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`Failed to get angle variation. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据旋转矢量获取旋转矩阵"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用callback方式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  let rotationVector = [0.20046076, 0.21907, 0.73978853, 0.60376877];\n  sensor.getRotationMatrix(rotationVector, (err: BusinessError, data: Array<number>) => {\n    if (err) {\n      console.error(`Failed to get rotationMatrix. Code: ${err.code}, message: ${err.message}`);\n      return;\n    }\n    for (let i = 0; i < data.length; i++) {\n      console.info('Succeeded in getting data[' + i + ']: ' + data[i]);\n    }\n  })\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`Failed to get rotationMatrix. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用promise方式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  let rotationVector = [0.20046076, 0.21907, 0.73978853, 0.60376877];\n  const promise = sensor.getRotationMatrix(rotationVector);\n  promise.then((data: Array<number>) => {\n    for (let i = 0; i < data.length; i++) {\n      console.info('Succeeded in getting data[' + i + ']: ' + data[i]);\n    }\n  }, (err: BusinessError) => {\n    console.error(`Failed to get rotationMatrix. Code: ${err.code}, message: ${err.message}`);\n  });\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`Failed to get rotationMatrix. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据指定坐标系映射旋转矩阵"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用callback方式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  let rotationMatrix = [\n    1, 0, 0,\n    0, 0.87, -0.50,\n    0, 0.50, 0.87\n  ];\n  sensor.transformRotationMatrix(rotationMatrix, { x: 1, y: 3 }, (err: BusinessError, data: Array<number>) => {\n    if (err) {\n      console.error(`Failed to transform rotationMatrix. Code: ${err.code}, message: ${err.message}`);\n      return;\n    }\n    for (let i = 0; i < data.length; i++) {\n      console.info('Succeeded in getting data[' + i + '] = ' + data[i]);\n    }\n  })\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`Failed to transform rotationMatrix. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用promise方式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  let rotationMatrix = [\n    1, 0, 0,\n    0, 0.87, -0.50,\n    0, 0.50, 0.87\n  ];\n  const promise = sensor.transformRotationMatrix(rotationMatrix, { x: 1, y: 3 });\n  promise.then((data: Array<number>) => {\n    for (let i = 0; i < data.length; i++) {\n      console.info('Succeeded in getting data[' + i + ']: ' + data[i]);\n    }\n  }, (err: BusinessError) => {\n    console.error(`Failed to transform rotationMatrix. Code: ${err.code}, message: ${err.message}`);\n  });\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`Failed to transform rotationMatrix. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据旋转向量计算归一化四元数"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用callback方式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  let rotationVector = [0.20046076, 0.21907, 0.73978853, 0.60376877];\n  sensor.getQuaternion(rotationVector, (err: BusinessError, data: Array<number>) => {\n    if (err) {\n      console.error(`Failed to get quaternion. Code: ${err.code}, message: ${err.message}`);\n      return;\n    }\n    for (let i = 0; i < data.length; i++) {\n      console.info('Succeeded in getting data[' + i + ']: ' + data[i]);\n    }\n  })\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`Failed to get quaternion. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用promise方式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n    let rotationVector = [0.20046076, 0.21907, 0.73978853, 0.60376877];\n    const promise = sensor.getQuaternion(rotationVector);\n    promise.then((data: Array<number>) => {\n        for (let i = 0; i < data.length; i++) {\n            console.info('Succeeded in getting data[' + i + ']: ' + data[i]);\n        }\n    }, (err: BusinessError) => {\n        console.error(`Failed to get quaternion. Code: ${err.code}, message: ${err.message}`);\n    });\n} catch (error) {\n    let e: BusinessError = error as BusinessError;\n    console.error(`Failed to get quaternion. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据旋转矩阵计算设备方向"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用callback方式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  let preRotationMatrix = [\n    1, 0, 0,\n    0, 0.87, -0.50,\n    0, 0.50, 0.87\n  ];\n  sensor.getOrientation(preRotationMatrix, (err: BusinessError, data: Array<number>) => {\n    if (err) {\n      console.error(`Failed to get orientation. Code: ${err.code}, message: ${err.message}`);\n      return;\n    }\n    if (data.length < 3) {\n      console.error(\"Failed to get orientation, length\" + data.length);\n    }\n    console.info(\"Succeeded in getting data. Z: \" + data[0]);\n    console.info(\"Succeeded in getting data. X: \" + data[1]);\n    console.info(\"Succeeded in getting data. Y: \" + data[2]);\n  })\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`Failed to get orientation. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用promise方式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  let preRotationMatrix = [\n    1, 0, 0,\n    0, 0.87, -0.50,\n    0, 0.50, 0.87\n  ];\n  const promise = sensor.getOrientation(preRotationMatrix);\n  promise.then((data: Array<number>) => {\n    for (let i = 0; i < data.length; i++) {\n      console.info('Succeeded in getting data[' + i + ']: ' + data[i]);\n    }\n  }, (err: BusinessError) => {\n    console.error(`Failed to get orientation. Code: ${err.code}, message: ${err.message}`);\n  });\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`Failed to get orientation. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据重力矢量和地磁矢量计算旋转矩阵"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用callback方式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  let gravity = [-0.27775216, 0.5351276, 9.788099];\n  let geomagnetic = [210.87253, -78.6096, -111.44444];\n  sensor.getRotationMatrix(gravity, geomagnetic, (err: BusinessError, data: sensor.RotationMatrixResponse) => {\n    if (err) {\n      console.error(`Failed to get rotationMatrix. Code: ${err.code}, message: ${err.message}`);\n      return;\n    }\n    console.info('Succeeded in getting rotationMatrix' + JSON.stringify(data));\n  })\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`Failed to get rotationMatrix. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用promise方式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  let gravity = [-0.27775216, 0.5351276, 9.788099];\n  let geomagnetic = [210.87253, -78.6096, -111.44444];\n  const promise = sensor.getRotationMatrix(gravity, geomagnetic);\n  promise.then((data: sensor.RotationMatrixResponse) => {\n    console.info('Succeeded in getting rotationMatrix' + JSON.stringify(data));\n  }, (err: BusinessError) => {\n    console.error(`Failed to get rotationMatrix. Code: ${err.code}, message: ${err.message}`);\n  });\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`Failed to get rotationMatrix. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取指定传感器类型的属性信息"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用callback方式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  sensor.getSingleSensor(sensor.SensorId.ACCELEROMETER, (err: BusinessError, data: sensor.Sensor) => {\n    if (err) {\n      console.error(`Failed to get singleSensor. Code: ${err.code}, message: ${err.message}`);\n      return;\n    }\n    console.info('Succeeded in getting sensor: ' + JSON.stringify(data));\n  });\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`Failed to get singleSensor. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用promise方式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  sensor.getSingleSensor(sensor.SensorId.ACCELEROMETER).then((data: sensor.Sensor) => {\n    console.info('Succeeded in getting sensor: ' + JSON.stringify(data));\n  }, (err: BusinessError) => {\n    console.error(`Failed to get singleSensor. Code: ${err.code}, message: ${err.message}`);\n  });\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`Failed to get singleSensor . Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用sync方式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  let ret = sensor.getSingleSensorSync(sensor.SensorId.ACCELEROMETER);\n  console.info('Succeeded in getting sensor: ' + JSON.stringify(ret));\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`Failed to get singleSensor . Code: ${e.code}, message: ${e.message}`);\n}\n"
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
572913(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958480-105f21207b3e86896b8f50d02c1e47f0.png");

},
536955(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438525-f8925243677ce6f966485a36b0ef174d.png");

},
178186(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798830-0d17b6aa5c4180f3519632c553a387aa.png");

},
619519(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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