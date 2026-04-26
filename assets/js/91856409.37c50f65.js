"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["248908"], {
327402(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_sensor_service_kit_sensor_sensor_guidelines_capi_sensor_guidelines_capi_md_918_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-sensor-service-kit-sensor-sensor-guidelines-capi-sensor-guidelines-capi-md-918.json
var site_docs_system_hardware_sensor_service_kit_sensor_sensor_guidelines_capi_sensor_guidelines_capi_md_918_namespaceObject = JSON.parse('{"id":"system-hardware/sensor-service-kit/sensor/sensor-guidelines-capi/sensor-guidelines-capi","title":"传感器开发指导(C/C++)","description":"场景介绍","source":"@site/docs/system-hardware/sensor-service-kit/sensor/sensor-guidelines-capi/sensor-guidelines-capi.md","sourceDirName":"system-hardware/sensor-service-kit/sensor/sensor-guidelines-capi","slug":"/system-hardware/sensor-service-kit/sensor/sensor-guidelines-capi/","permalink":"/harmonyos-docs-site/system-hardware/sensor-service-kit/sensor/sensor-guidelines-capi/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"传感器开发指导(C/C++)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/sensor-guidelines-capi","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"传感器开发指导(ArkTS)","permalink":"/harmonyos-docs-site/system-hardware/sensor-service-kit/sensor/sensor-guidelines/"},"next":{"title":"振动开发概述","permalink":"/harmonyos-docs-site/system-hardware/sensor-service-kit/vibrator/vibrator-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/sensor-service-kit/sensor/sensor-guidelines-capi/sensor-guidelines-capi.md


const frontMatter = {
	title: '传感器开发指导(C/C++)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/sensor-guidelines-capi',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '传感器开发指导(C/C++)';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "函数说明",
  "id": "函数说明",
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
    div: "div",
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
        id: "传感器开发指导cc",
        children: "传感器开发指导(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当设备需要获取传感器数据时，可以使用sensor模块，例如：通过订阅方向传感器数据感知用户设备当前的朝向，通过订阅计步传感器数据统计用户的步数等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的接口介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-module/capi-sensor/capi-sensor",
        children: "Sensor"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_Sensor_GetInfos(Sensor_Info **infos, uint32_t *count)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取设备上所有传感器的信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Sensor_Subscribe(const Sensor_SubscriptionId *id, const Sensor_SubscriptionAttribute *attribute, const Sensor_Subscriber *subscriber)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅传感器数据。系统将以指定的频率向用户上报传感器数据。  订阅加速度传感器，需要申请ohos.permission.ACCELEROMETER权限；  订阅陀螺仪传感器，需要申请ohos.permission.GYROSCOPE权限；  订阅计步器相关传感器时，需要申请ohos.permission.ACTIVITY_MOTION权限；  订阅与健康相关的传感器时，比如心率传感器需要申请ohos.permission.READ_HEALTH_DATA权限，否则订阅失败;  订阅其余传感器不需要申请权限。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Sensor_Unsubscribe(const Sensor_SubscriptionId *id, const Sensor_Subscriber *subscriber)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消订阅传感器数据。  取消订阅加速度传感器，需要申请ohos.permission.ACCELEROMETER权限；  取消订阅陀螺仪传感器，需要申请ohos.permission.GYROSCOPE权限；  取消订阅计步器相关传感器时，需要申请ohos.permission.ACTIVITY_MOTION权限；  取消订阅与健康相关的传感器时，需要申请ohos.permission.READ_HEALTH_DATA权限，否则取消订阅失败。  取消订阅其余传感器不需要申请权限。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Sensor_CreateInfos(uint32_t count)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用给定的数字创建一个实例数组，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-info/capi-sensor-sensor-info",
              children: "Sensor_Info"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Sensor_DestroyInfos(Sensor_Info **sensors, uint32_t count)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁实例数组并回收内存，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-info/capi-sensor-sensor-info",
              children: "Sensor_Info"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SensorInfo_GetName(Sensor_Info *sensor, char *sensorName, uint32_t *length)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取传感器名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SensorInfo_GetVendorName(Sensor_Info* sensor, char *vendorName, uint32_t *length)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取传感器的厂商名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SensorInfo_GetType(Sensor_Info* sensor, Sensor_Type *sensorType)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取传感器类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SensorInfo_GetResolution(Sensor_Info* sensor, float *resolution)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取传感器分辨率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SensorInfo_GetMinSamplingInterval(Sensor_Info* sensor, int64_t *minSamplingInterval)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取传感器的最小数据上报间隔。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SensorInfo_GetMaxSamplingInterval(Sensor_Info* sensor, int64_t *maxSamplingInterval)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取传感器的最大数据上报间隔时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SensorEvent_GetType(Sensor_Event* sensorEvent, Sensor_Type *sensorType)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取传感器类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SensorEvent_GetTimestamp(Sensor_Event* sensorEvent, int64_t *timestamp)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取传感器数据的时间戳。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SensorEvent_GetAccuracy(Sensor_Event* sensorEvent, Sensor_Accuracy *accuracy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取传感器数据的精度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SensorEvent_GetData(Sensor_Event* sensorEvent, float **data, uint32_t *length)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取传感器数据。  数据的长度和内容依赖于监听的传感器类型，传感器上报的数据格式如下：  1.SENSOR_TYPE_ACCELEROMETER", (0,jsx_runtime.jsx)(_components.div, {
              children: "0"
            }), "、data[1]、data[2]分别表示设备x、y、z轴的加速度分量，单位m/s²；  2.SENSOR_TYPE_GYROSCOPE", (0,jsx_runtime.jsx)(_components.div, {
              children: "0"
            }), "、data[1]、data[2]分别表示设备x、y、z轴的旋转角速度，单位弧度/s；  3.SENSOR_TYPE_AMBIENT_LIGHT", (0,jsx_runtime.jsx)(_components.div, {
              children: "0"
            }), "表示环境光强度，单位lux；从API Version 12开始，将返回两个额外的数据，其中data[1]表示色温，单位kelvin；data[2]表示红外亮度，单位cd/m²；  4.SENSOR_TYPE_MAGNETIC_FIELD", (0,jsx_runtime.jsx)(_components.div, {
              children: "0"
            }), "、data[1]、data[2]分别表示设备x、y、z轴的地磁分量，单位微特斯拉；  5.SENSOR_TYPE_BAROMETER", (0,jsx_runtime.jsx)(_components.div, {
              children: "0"
            }), "表示气压值，单位hPa；  6.SENSOR_TYPE_HALL", (0,jsx_runtime.jsx)(_components.div, {
              children: "0"
            }), "表示皮套吸合状态，0表示打开，大于0表示吸附；  7.SENSOR_TYPE_PROXIMITY", (0,jsx_runtime.jsx)(_components.div, {
              children: "0"
            }), "表示接近状态，0表示接近，大于0表示远离；  8.SENSOR_TYPE_ORIENTATION", (0,jsx_runtime.jsx)(_components.div, {
              children: "0"
            }), "、data[1]、data[2]分别表示设备绕z、x、y轴的角度，单位度；  9.SENSOR_TYPE_GRAVITY", (0,jsx_runtime.jsx)(_components.div, {
              children: "0"
            }), "、data[1]、data[2]分别表示设备x、y、z轴的重力加速度分量，单位m/s²；  10.SENSOR_TYPE_ROTATION_VECTOR", (0,jsx_runtime.jsx)(_components.div, {
              children: "0"
            }), "、data[1]、data[2]分别表示设备x、y、z轴的旋转角度，单位度，data[3]表示旋转向量元素；  11.SENSOR_TYPE_PEDOMETER_DETECTION", (0,jsx_runtime.jsx)(_components.div, {
              children: "0"
            }), "表示计步检测状态，1表示检测到了步数变化；  12.SENSOR_TYPE_PEDOMETER", (0,jsx_runtime.jsx)(_components.div, {
              children: "0"
            }), "表示步数；  13.SENSOR_TYPE_HEART_RATE", (0,jsx_runtime.jsx)(_components.div, {
              children: "0"
            }), "表示心率数值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Sensor_CreateSubscriptionId(void)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个Sensor_SubscriptionId 实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Sensor_DestroySubscriptionId(Sensor_SubscriptionId *id)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁Sensor_SubscriptionId 实例并回收内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SensorSubscriptionId_SetType(Sensor_SubscriptionId* id, const Sensor_Type sensorType)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置传感器类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Sensor_CreateSubscriptionAttribute(void)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建Sensor_SubscriptionAttribute实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Sensor_DestroySubscriptionAttribute(Sensor_SubscriptionAttribute *attribute)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁Sensor_SubscriptionAttribute实例并回收内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SensorSubscriptionAttribute_SetSamplingInterval(Sensor_SubscriptionAttribute* attribute, const int64_t samplingInterval)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置传感器数据上报间隔。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Sensor_CreateSubscriber(void)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个Sensor_Subscriber实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_Sensor_DestroySubscriber(Sensor_Subscriber *subscriber)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁Sensor_Subscriber实例并回收内存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_SensorSubscriber_SetCallback(Sensor_Subscriber* subscriber, const Sensor_EventCallback callback)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置一个回调函数来上报传感器数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发步骤以加速度传感器为例。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新建一个Native C++工程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(160891)/* ["default"] */.A) + "",
            width: "1296",
            height: "1006"
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
            children: "\"requestPermissions\": [\n  {\n    \"name\": \"ohos.permission.ACCELEROMETER\"\n  }\n]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CMakeLists.txt文件中引入动态依赖库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "target_link_libraries(entry PUBLIC libace_napi.z.so)\ntarget_link_libraries(entry PUBLIC libhilog_ndk.z.so)\ntarget_link_libraries(entry PUBLIC libohsensor.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在oh_sensor_capi.cpp文件中编码，首先导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"sensors/oh_sensor.h\"\n#include \"napi/native_api.h\"\n#include \"hilog/log.h\"\n#include <thread>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义常量。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const int SENSOR_LOG_DOMAIN = 0xD002700;\nconst char *TAG = \"[Sensor]\";\nconstexpr Sensor_Type SENSOR_ID { SENSOR_TYPE_ACCELEROMETER };\nconstexpr uint32_t SENSOR_NAME_LENGTH_MAX = 64;\nconstexpr int64_t SENSOR_SAMPLE_PERIOD = 200000000;\nconstexpr int32_t SLEEP_TIME_MS = 1000;\nconstexpr int64_t INVALID_VALUE = -1;\nconstexpr float INVALID_RESOLUTION = -1.0F;\nSensor_Subscriber *g_user = nullptr;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义一个回调函数用来接收传感器数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 定义回调函数\nvoid SensorDataCallbackImpl(Sensor_Event *event)\n{\n    if (event == nullptr) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, SENSOR_LOG_DOMAIN, TAG, \"event is null\");\n        return;\n    }\n    int64_t timestamp = INVALID_VALUE;\n    // 获取传感器数据的时间戳。\n    int32_t ret = OH_SensorEvent_GetTimestamp(event, &timestamp);\n    if (ret != SENSOR_SUCCESS) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, SENSOR_LOG_DOMAIN, TAG, \"get timestamp failed\");\n        return;\n    }\n    Sensor_Type sensorType;\n    // 获取传感器类型。\n    ret = OH_SensorEvent_GetType(event, &sensorType);\n    if (ret != SENSOR_SUCCESS) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, SENSOR_LOG_DOMAIN, TAG, \"get sensor type failed\");\n        return;\n    }\n    Sensor_Accuracy accuracy = SENSOR_ACCURACY_UNRELIABLE;\n    // 获取传感器数据的精度。\n    ret = OH_SensorEvent_GetAccuracy(event, &accuracy);\n    if (ret != SENSOR_SUCCESS) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, SENSOR_LOG_DOMAIN, TAG, \"get sensor accuracy failed\");\n        return;\n    }\n    float *data = nullptr;\n    uint32_t length = 0;\n    // 获取传感器数据。\n    ret = OH_SensorEvent_GetData(event, &data, &length);\n    if (ret != SENSOR_SUCCESS) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, SENSOR_LOG_DOMAIN, TAG, \"get sensor data failed\");\n        return;\n    }\n    if (data == nullptr) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, SENSOR_LOG_DOMAIN, TAG, \"sensor data is null\");\n        return;\n    }\n    OH_LOG_Print(LOG_APP, LOG_INFO, SENSOR_LOG_DOMAIN, TAG,\n        \"sensorType:%{public}d, dataLen:%{public}d, accuracy:%{public}d\", sensorType, length, accuracy);\n    for (uint32_t i = 0; i < length; ++i) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, SENSOR_LOG_DOMAIN, TAG, \"data[%{public}d]:%{public}f\", i, data[i]);\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取设备上所有传感器的信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static int32_t GetSensorInfo(Sensor_Info *sensorInfoTemp)\n{\n    char sensorName[SENSOR_NAME_LENGTH_MAX] = {};\n    uint32_t length = SENSOR_NAME_LENGTH_MAX;\n    // 获取传感器名称。\n    int32_t ret = OH_SensorInfo_GetName(sensorInfoTemp, sensorName, &length);\n    if (ret != SENSOR_SUCCESS) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, SENSOR_LOG_DOMAIN, TAG, \"get sensor name failed\");\n        return ret;\n    }\n    char vendorName[SENSOR_NAME_LENGTH_MAX] = {};\n    length = SENSOR_NAME_LENGTH_MAX;\n    // 获取传感器的厂商名称。\n    ret = OH_SensorInfo_GetVendorName(sensorInfoTemp, vendorName, &length);\n    if (ret != SENSOR_SUCCESS) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, SENSOR_LOG_DOMAIN, TAG, \"get sensor vendor name failed\");\n        return ret;\n    }\n    Sensor_Type sensorType;\n    // 获取传感器类型。\n    ret = OH_SensorInfo_GetType(sensorInfoTemp, &sensorType);\n    if (ret != SENSOR_SUCCESS) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, SENSOR_LOG_DOMAIN, TAG, \"get sensor type failed\");\n        return ret;\n    }\n    float resolution = INVALID_RESOLUTION;\n    // 获取传感器分辨率。\n    ret = OH_SensorInfo_GetResolution(sensorInfoTemp, &resolution);\n    if (ret != SENSOR_SUCCESS) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, SENSOR_LOG_DOMAIN, TAG, \"get sensor resolution failed\");\n        return ret;\n    }\n    int64_t minSamplePeriod = INVALID_VALUE;\n    // 获取传感器的最小数据上报间隔。\n    ret = OH_SensorInfo_GetMinSamplingInterval(sensorInfoTemp, &minSamplePeriod);\n    if (ret != SENSOR_SUCCESS) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, SENSOR_LOG_DOMAIN, TAG, \"get sensor min sampling interval failed\");\n        return ret;\n    }\n    int64_t maxSamplePeriod = INVALID_VALUE;\n    // 获取传感器的最大数据上报间隔时间。\n    ret = OH_SensorInfo_GetMaxSamplingInterval(sensorInfoTemp, &maxSamplePeriod);\n    if (ret != SENSOR_SUCCESS) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, SENSOR_LOG_DOMAIN, TAG, \"get sensor max sampling interval failed\");\n    }\n    return ret;\n}\n\nstatic napi_value GetSensorInfos(napi_env env, napi_callback_info info)\n{\n    uint32_t count = 0;\n    // 获取设备上所有传感器的个数。\n    int32_t ret = OH_Sensor_GetInfos(nullptr, &count);\n    if (ret != SENSOR_SUCCESS) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, SENSOR_LOG_DOMAIN, TAG, \"get sensor count failed\");\n        return nullptr;\n    }\n    // 用给定的数字创建一个实例数组。\n    Sensor_Info **sensors = OH_Sensor_CreateInfos(count);\n    if (sensors == nullptr) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, SENSOR_LOG_DOMAIN, TAG, \"create sensorInfo array failed\");\n        return nullptr;\n    }\n    // 获取设备上所有传感器的信息。\n    ret = OH_Sensor_GetInfos(sensors, &count);\n    if (ret != SENSOR_SUCCESS) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, SENSOR_LOG_DOMAIN, TAG, \"get all sensor info failed\");\n        return nullptr;\n    }\n    for (uint32_t i = 0; i < count; ++i) {\n        Sensor_Info *sensorInfoTemp = sensors[i];\n        ret = GetSensorInfo(sensorInfoTemp);\n        if (ret != SENSOR_SUCCESS) {\n            OH_LOG_Print(LOG_APP, LOG_ERROR, SENSOR_LOG_DOMAIN, TAG, \"get sensor info failed\");\n            return nullptr;\n        }\n    }\n    OH_LOG_Print(LOG_APP, LOG_INFO, SENSOR_LOG_DOMAIN, TAG, \"GetSensorInfos successful\");\n    // 销毁实例数组并回收内存。\n    ret = OH_Sensor_DestroyInfos(sensors, count);\n    if (ret != SENSOR_SUCCESS) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, SENSOR_LOG_DOMAIN, TAG, \"destroy sensor info failed\");\n        return nullptr;\n    }\n    return nullptr;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "订阅和取消订阅传感器数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "static napi_value Subscriber(napi_env env, napi_callback_info info)\n{\n    // 创建Sensor_Subscriber实例。\n    g_user = OH_Sensor_CreateSubscriber();\n    // 设置回调函数来报告传感器数据。\n    int32_t ret = OH_SensorSubscriber_SetCallback(g_user, SensorDataCallbackImpl);\n    if (ret != SENSOR_SUCCESS) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, SENSOR_LOG_DOMAIN, TAG, \"OH_SensorSubscriber_SetCallback failed\");\n        return nullptr;\n    }\n    // 创建Sensor_SubscriptionId实例。\n    Sensor_SubscriptionId *id = OH_Sensor_CreateSubscriptionId();\n    // 设置传感器类型,示例中设置的是SENSOR_TYPE_ACCELEROMETER类型，需开通ohos.permission.ACCELEROMETER权限\n    // 参考传感器开发指导中 开发步骤第2点配置加速度传感器权限。\n    ret = OH_SensorSubscriptionId_SetType(id, SENSOR_ID);\n    if (ret != SENSOR_SUCCESS) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, SENSOR_LOG_DOMAIN, TAG, \"OH_SensorSubscriptionId_SetType failed\");\n        return nullptr;\n    }\n    // 创建Sensor_SubscriptionAttribute实例。\n    Sensor_SubscriptionAttribute *attr = OH_Sensor_CreateSubscriptionAttribute();\n    // 设置传感器数据报告间隔。\n    ret = OH_SensorSubscriptionAttribute_SetSamplingInterval(attr, SENSOR_SAMPLE_PERIOD);\n    if (ret != SENSOR_SUCCESS) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, SENSOR_LOG_DOMAIN, TAG,\n            \"OH_SensorSubscriptionAttribute_SetSamplingInterval failed\");\n        return nullptr;\n    }\n    // 订阅传感器数据。\n    ret = OH_Sensor_Subscribe(id, attr, g_user);\n    if (ret != SENSOR_SUCCESS) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, SENSOR_LOG_DOMAIN, TAG, \"OH_Sensor_Subscribe failed\");\n        return nullptr;\n    }\n    OH_LOG_Print(LOG_APP, LOG_INFO, SENSOR_LOG_DOMAIN, TAG, \"OH_Sensor_Subscribe successful\");\n    std::this_thread::sleep_for(std::chrono::milliseconds(SLEEP_TIME_MS));\n    // 取消订阅传感器数据。\n    ret = OH_Sensor_Unsubscribe(id, g_user);\n    if (ret != SENSOR_SUCCESS) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, SENSOR_LOG_DOMAIN, TAG, \"OH_Sensor_Unsubscribe failed\");\n        return nullptr;\n    }\n    OH_LOG_Print(LOG_APP, LOG_INFO, SENSOR_LOG_DOMAIN, TAG, \"OH_Sensor_Unsubscribe successful\");\n    if (id != nullptr) {\n        // 销毁Sensor_SubscriptionId实例。\n        OH_Sensor_DestroySubscriptionId(id);\n    }\n    if (attr != nullptr) {\n        // 销毁Sensor_SubscriptionAttribute实例。\n        OH_Sensor_DestroySubscriptionAttribute(attr);\n    }\n    if (g_user != nullptr) {\n        // 销毁Sensor_Subscriber实例并回收内存。\n        OH_Sensor_DestroySubscriber(g_user);\n        g_user = nullptr;\n    }\n    return nullptr;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Init函数中补充接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "EXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        {\"getSensorInfos\", nullptr, GetSensorInfos, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"subscriber\", nullptr, Subscriber, nullptr, nullptr, nullptr, napi_default, nullptr}\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在types/libentry路径下index.d.ts文件中引入Napi接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "export const getSensorInfos: () => object;\nexport const subscriber: () => object;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写程序入口调用代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport sensorCapi from 'libentry.so';\n\nconst DOMAIN = 0xD002700;\n// ...\n          try {\n            sensorCapi.getSensorInfos();\n            // ...\n          } catch (error) {\n            let e: BusinessError = error as BusinessError;\n            hilog.error(DOMAIN, 'testTag', `Failed to invoke getSensorInfos. Code: ${e.code}, message: ${e.message}`);\n          }\n          // ...\n          try {\n            sensorCapi.subscriber();\n            // ...\n          } catch (error) {\n            let e: BusinessError = error as BusinessError;\n            hilog.error(DOMAIN, 'testTag', `Failed to invoke subscriber. Code: ${e.code}, message: ${e.message}`);\n          }\n"
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
160891(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798832-12203499fa82cf5f6e80703fc6af9bf1.png");

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