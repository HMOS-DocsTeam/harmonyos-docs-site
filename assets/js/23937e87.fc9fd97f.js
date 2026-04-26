"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["458650"], {
476575(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_hardware_api_sensor_service_api_sensor_service_c_sensor_service_headerfile_capi_oh_sensor_type_h_capi_oh_sensor_type_h_md_239_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-hardware-api-sensor-service-api-sensor-service-c-sensor-service-headerfile-capi-oh-sensor-type-h-capi-oh-sensor-type-h-md-239.json
var site_docs_ref_system_hardware_api_sensor_service_api_sensor_service_c_sensor_service_headerfile_capi_oh_sensor_type_h_capi_oh_sensor_type_h_md_239_namespaceObject = JSON.parse('{"id":"system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h","title":"oh_sensor_type.h","description":"概述","source":"@site/docs-ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h.md","sourceDirName":"system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h","slug":"/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h","permalink":"/harmonyos-docs-site/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"oh_sensor_type.h","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-sensor-type-h","kit":"系统","last_updated":"2026-04-22","slug":"capi-oh-sensor-type-h"},"sidebar":"ref","previous":{"title":"oh_sensor.h","permalink":"/harmonyos-docs-site/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-h/capi-oh-sensor-h"},"next":{"title":"vibrator.h","permalink":"/harmonyos-docs-site/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-vibrator-h/capi-vibrator-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h.md


const frontMatter = {
	title: 'oh_sensor_type.h',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-sensor-type-h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-oh-sensor-type-h'
};
const contentTitle = 'oh_sensor_type.h';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "结构体",
  "id": "结构体",
  "level": 3
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "Sensor_Type",
  "id": "sensor_type",
  "level": 3
}, {
  "value": "Sensor_Result",
  "id": "sensor_result",
  "level": 3
}, {
  "value": "Sensor_Accuracy",
  "id": "sensor_accuracy",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_Sensor_CreateInfos()",
  "id": "oh_sensor_createinfos",
  "level": 3
}, {
  "value": "OH_Sensor_DestroyInfos()",
  "id": "oh_sensor_destroyinfos",
  "level": 3
}, {
  "value": "OH_SensorInfo_GetName()",
  "id": "oh_sensorinfo_getname",
  "level": 3
}, {
  "value": "OH_SensorInfo_GetVendorName()",
  "id": "oh_sensorinfo_getvendorname",
  "level": 3
}, {
  "value": "OH_SensorInfo_GetType()",
  "id": "oh_sensorinfo_gettype",
  "level": 3
}, {
  "value": "OH_SensorInfo_GetResolution()",
  "id": "oh_sensorinfo_getresolution",
  "level": 3
}, {
  "value": "OH_SensorInfo_GetMinSamplingInterval()",
  "id": "oh_sensorinfo_getminsamplinginterval",
  "level": 3
}, {
  "value": "OH_SensorInfo_GetMaxSamplingInterval()",
  "id": "oh_sensorinfo_getmaxsamplinginterval",
  "level": 3
}, {
  "value": "OH_SensorEvent_GetType()",
  "id": "oh_sensorevent_gettype",
  "level": 3
}, {
  "value": "OH_SensorEvent_GetTimestamp()",
  "id": "oh_sensorevent_gettimestamp",
  "level": 3
}, {
  "value": "OH_SensorEvent_GetAccuracy()",
  "id": "oh_sensorevent_getaccuracy",
  "level": 3
}, {
  "value": "OH_SensorEvent_GetData()",
  "id": "oh_sensorevent_getdata",
  "level": 3
}, {
  "value": "OH_Sensor_CreateSubscriptionId()",
  "id": "oh_sensor_createsubscriptionid",
  "level": 3
}, {
  "value": "OH_Sensor_DestroySubscriptionId()",
  "id": "oh_sensor_destroysubscriptionid",
  "level": 3
}, {
  "value": "OH_SensorSubscriptionId_GetType()",
  "id": "oh_sensorsubscriptionid_gettype",
  "level": 3
}, {
  "value": "OH_SensorSubscriptionId_SetType()",
  "id": "oh_sensorsubscriptionid_settype",
  "level": 3
}, {
  "value": "OH_Sensor_CreateSubscriptionAttribute()",
  "id": "oh_sensor_createsubscriptionattribute",
  "level": 3
}, {
  "value": "OH_Sensor_DestroySubscriptionAttribute()",
  "id": "oh_sensor_destroysubscriptionattribute",
  "level": 3
}, {
  "value": "OH_SensorSubscriptionAttribute_SetSamplingInterval()",
  "id": "oh_sensorsubscriptionattribute_setsamplinginterval",
  "level": 3
}, {
  "value": "OH_SensorSubscriptionAttribute_GetSamplingInterval()",
  "id": "oh_sensorsubscriptionattribute_getsamplinginterval",
  "level": 3
}, {
  "value": "Sensor_EventCallback()",
  "id": "sensor_eventcallback",
  "level": 3
}, {
  "value": "OH_Sensor_CreateSubscriber()",
  "id": "oh_sensor_createsubscriber",
  "level": 3
}, {
  "value": "OH_Sensor_DestroySubscriber()",
  "id": "oh_sensor_destroysubscriber",
  "level": 3
}, {
  "value": "OH_SensorSubscriber_SetCallback()",
  "id": "oh_sensorsubscriber_setcallback",
  "level": 3
}, {
  "value": "OH_SensorSubscriber_GetCallback()",
  "id": "oh_sensorsubscriber_getcallback",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    pre: "pre",
    strong: "strong",
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
        id: "oh_sensor_typeh",
        children: "oh_sensor_type.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义常用传感器属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <sensors/oh_sensor_type.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libohsensor.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Sensors.Sensor"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-module/capi-sensor/capi-sensor",
        children: "Sensor"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-info/capi-sensor-sensor-info",
              children: "Sensor_Info"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensor_Info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义传感器信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-event/capi-sensor-sensor-event",
              children: "Sensor_Event"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensor_Event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义传感器数据信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriptionid/capi-sensor-sensor-subscriptionid",
              children: "Sensor_SubscriptionId"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensor_SubscriptionId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义传感器订阅ID，唯一标识传感器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriptionattribute/capi-sensor-sensor-subscriptionattribute",
              children: "Sensor_SubscriptionAttribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensor_SubscriptionAttribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义传感器订阅属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriber/capi-sensor-sensor-subscriber",
              children: "Sensor_Subscriber"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensor_Subscriber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义传感器订阅者信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#sensor_type",
              children: "Sensor_Type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensor_Type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举传感器类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#sensor_result",
              children: "Sensor_Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensor_Result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义传感器错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#sensor_accuracy",
              children: "Sensor_Accuracy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensor_Accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举传感器报告的数据的精度级别。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "typedef关键字"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_sensor_createinfos",
              children: "Sensor_Info **OH_Sensor_CreateInfos(uint32_t count)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用给定的数字创建一个实例数组，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-info/capi-sensor-sensor-info",
              children: "Sensor_Info"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_sensor_destroyinfos",
              children: "int32_t OH_Sensor_DestroyInfos(Sensor_Info **sensors, uint32_t count)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁实例数组并回收内存，请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-info/capi-sensor-sensor-info",
              children: "Sensor_Info"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_sensorinfo_getname",
              children: "int32_t OH_SensorInfo_GetName(Sensor_Info* sensor, char *sensorName, uint32_t *length)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取传感器名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_sensorinfo_getvendorname",
              children: "int32_t OH_SensorInfo_GetVendorName(Sensor_Info* sensor, char *vendorName, uint32_t *length)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取传感器的厂商名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_sensorinfo_gettype",
              children: "int32_t OH_SensorInfo_GetType(Sensor_Info* sensor, Sensor_Type *sensorType)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取传感器类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_sensorinfo_getresolution",
              children: "int32_t OH_SensorInfo_GetResolution(Sensor_Info* sensor, float *resolution)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取传感器分辨率。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_sensorinfo_getminsamplinginterval",
              children: "int32_t OH_SensorInfo_GetMinSamplingInterval(Sensor_Info* sensor, int64_t *minSamplingInterval)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取传感器的最小数据上报间隔。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_sensorinfo_getmaxsamplinginterval",
              children: "int32_t OH_SensorInfo_GetMaxSamplingInterval(Sensor_Info* sensor, int64_t *maxSamplingInterval)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取传感器的最大数据上报间隔时间。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_sensorevent_gettype",
              children: "int32_t OH_SensorEvent_GetType(Sensor_Event* sensorEvent, Sensor_Type *sensorType)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取传感器类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_sensorevent_gettimestamp",
              children: "int32_t OH_SensorEvent_GetTimestamp(Sensor_Event* sensorEvent, int64_t *timestamp)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取传感器数据的时间戳。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_sensorevent_getaccuracy",
              children: "int32_t OH_SensorEvent_GetAccuracy(Sensor_Event* sensorEvent, Sensor_Accuracy *accuracy)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取传感器数据的精度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_sensorevent_getdata",
              children: "int32_t OH_SensorEvent_GetData(Sensor_Event* sensorEvent, float **data, uint32_t *length)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["获取传感器数据。数据的长度和内容依赖于监听的传感器类型，传感器上报的数据格式如下：SENSOR_TYPE_ACCELEROMETER: data[0]、data[1]、data[2]分别表示设备x、y、z轴的加速度分量，单位m/s2。SENSOR_TYPE_GYROSCOPE: data[0]、data[1]、data[2]分别表示设备x、y、z轴的旋转角速度，单位弧度/s。SENSOR_TYPE_AMBIENT_LIGHT: data[0]表示环境光强度，单位勒克斯；从api版本12开始，将返回两个额外的数据，其中data[1]表示色温，单位为开尔文；data[2]表示红外亮度，单位cd/m2。SENSOR_TYPE_MAGNETIC_FIELD: data[0]、data[1]、data[2]分别表示设备x、y、z轴的地磁分量，单位微特斯拉。SENSOR_TYPE_BAROMETER：data[0]表示气压值，单位hPa。SENSOR_TYPE_HALL: data[0]表示皮套吸合状态，0表示打开，大于0表示吸附。SENSOR_TYPE_PROXIMITY：data[0]表示接近状态，0表示接近，大于0表示远离。SENSOR_TYPE_ORIENTATION", (0,jsx_runtime.jsx)(_components.div, {
              children: "0"
            }), "、data[1]、data[2]分别表示设备绕z、x、y轴的角度，单位度。SENSOR_TYPE_GRAVITY：data[0]、data[1]、data[2]分别表示设备x、y、z轴的重力加速度分量，单位m/s2。SENSOR_TYPE_ROTATION_VECTOR", (0,jsx_runtime.jsx)(_components.div, {
              children: "0"
            }), "、data[1]、data[2]分别表示设备x、y、z轴的旋转角度，单位度，data[3]表示旋转向量元素。SENSOR_TYPE_PEDOMETER_DETECTION", (0,jsx_runtime.jsx)(_components.div, {
              children: "0"
            }), "表示几步检测状态，1表示检测到了步数变化。SENSOR_TYPE_PEDOMETER", (0,jsx_runtime.jsx)(_components.div, {
              children: "0"
            }), "表示步数。SENSOR_TYPE_HEART_RATE：data[0]表示心率数值。SENSOR_TYPE_LINEAR_ACCELERATION：从api版本13开始支持。data[0]，data[1]，data[2]，表示分别绕设备的x、y、z轴的线性加速度，单位为m/s2。SENSOR_TYPE_GAME_ROTATION_VECTOR：从api版本13支持。data[0]，data[1]和data[2]，表示设备分别围绕x、y、z轴的旋转角度，单位为度。data[3]表示旋转向量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_sensor_createsubscriptionid",
              children: "Sensor_SubscriptionId *OH_Sensor_CreateSubscriptionId(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建一个", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriptionid/capi-sensor-sensor-subscriptionid",
              children: "Sensor_SubscriptionId"
            }), "实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_sensor_destroysubscriptionid",
              children: "int32_t OH_Sensor_DestroySubscriptionId(Sensor_SubscriptionId *id)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriptionid/capi-sensor-sensor-subscriptionid",
              children: "Sensor_SubscriptionId"
            }), "实例并回收内存。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_sensorsubscriptionid_gettype",
              children: "int32_t OH_SensorSubscriptionId_GetType(Sensor_SubscriptionId* id, Sensor_Type *sensorType)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取传感器类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_sensorsubscriptionid_settype",
              children: "int32_t OH_SensorSubscriptionId_SetType(Sensor_SubscriptionId* id, const Sensor_Type sensorType)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置传感器类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_sensor_createsubscriptionattribute",
              children: "Sensor_SubscriptionAttribute *OH_Sensor_CreateSubscriptionAttribute(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriptionattribute/capi-sensor-sensor-subscriptionattribute",
              children: "Sensor_SubscriptionAttribute"
            }), "实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_sensor_destroysubscriptionattribute",
              children: "int32_t OH_Sensor_DestroySubscriptionAttribute(Sensor_SubscriptionAttribute *attribute)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriptionattribute/capi-sensor-sensor-subscriptionattribute",
              children: "Sensor_SubscriptionAttribute"
            }), "实例并回收内存。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_sensorsubscriptionattribute_setsamplinginterval",
              children: "int32_t OH_SensorSubscriptionAttribute_SetSamplingInterval(Sensor_SubscriptionAttribute* attribute, const int64_t samplingInterval)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置传感器数据报告间隔。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_sensorsubscriptionattribute_getsamplinginterval",
              children: "int32_t OH_SensorSubscriptionAttribute_GetSamplingInterval(Sensor_SubscriptionAttribute* attribute, int64_t *samplingInterval)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取传感器数据报告间隔。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#sensor_eventcallback",
              children: "typedef void (*Sensor_EventCallback)(Sensor_Event *event)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sensor_EventCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义用于报告传感器数据的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_sensor_createsubscriber",
              children: "Sensor_Subscriber *OH_Sensor_CreateSubscriber(void)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建一个", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriber/capi-sensor-sensor-subscriber",
              children: "Sensor_Subscriber"
            }), "实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_sensor_destroysubscriber",
              children: "int32_t OH_Sensor_DestroySubscriber(Sensor_Subscriber *subscriber)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriber/capi-sensor-sensor-subscriber",
              children: "Sensor_Subscriber"
            }), "实例并回收内存。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_sensorsubscriber_setcallback",
              children: "int32_t OH_SensorSubscriber_SetCallback(Sensor_Subscriber* subscriber, const Sensor_EventCallback callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置一个回调函数来报告传感器数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_sensorsubscriber_getcallback",
              children: "int32_t OH_SensorSubscriber_GetCallback(Sensor_Subscriber* subscriber, Sensor_EventCallback *callback)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取用于报告传感器数据的回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sensor_type",
      children: "Sensor_Type"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Sensor_Type\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举传感器类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SENSOR_TYPE_ACCELEROMETER = 1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["加速度传感器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SENSOR_TYPE_GYROSCOPE = 2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["陀螺仪传感器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SENSOR_TYPE_AMBIENT_LIGHT = 5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["环境光传感器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SENSOR_TYPE_MAGNETIC_FIELD = 6"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["地磁传感器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SENSOR_TYPE_BAROMETER = 8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["气压传感器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SENSOR_TYPE_HALL = 10"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["霍尔传感器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SENSOR_TYPE_PROXIMITY = 12"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["接近光传感器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SENSOR_TYPE_ORIENTATION = 256"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["方向传感器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SENSOR_TYPE_GRAVITY = 257"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["重力传感器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SENSOR_TYPE_LINEAR_ACCELERATION = 258"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["线性加速度传感器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 13"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SENSOR_TYPE_ROTATION_VECTOR = 259"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["旋转矢量传感器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SENSOR_TYPE_GAME_ROTATION_VECTOR = 262"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["游戏旋转矢量传感器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 13"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SENSOR_TYPE_PEDOMETER_DETECTION = 265"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["计步器检测传感器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SENSOR_TYPE_PEDOMETER = 266"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["计步器传感器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SENSOR_TYPE_HEART_RATE = 278"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["心率传感器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sensor_result",
      children: "Sensor_Result"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Sensor_Result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义传感器错误码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SENSOR_SUCCESS = 0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["操作成功。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SENSOR_PERMISSION_DENIED = 201"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["权限验证失败。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SENSOR_PARAMETER_ERROR = 401"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["参数检查失败。例如，没有传入强制参数，或者传入的参数类型不正确。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SENSOR_SERVICE_EXCEPTION = 14500101"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["传感器服务异常。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sensor_accuracy",
      children: "Sensor_Accuracy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Sensor_Accuracy\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举传感器报告的数据的精度级别。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SENSOR_ACCURACY_UNRELIABLE = 0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["传感器数据不可靠。有可能传感器不与设备接触而进行测量。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SENSOR_ACCURACY_LOW = 1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["传感器数据精度较低。数据在使用前必须根据环境进行校准。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SENSOR_ACCURACY_MEDIUM = 2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["传感器数据处于中等精度水平。建议用户在使用前根据实际环境进行数据校准。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SENSOR_ACCURACY_HIGH = 3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["传感器数据具有很高的精度。数据可以直接使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "起始版本："
              })
            }), " 11"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_sensor_createinfos",
      children: "OH_Sensor_CreateInfos()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sensor_Info **OH_Sensor_CreateInfos(uint32_t count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用给定的数字创建一个实例数组，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-info/capi-sensor-sensor-info",
        children: "Sensor_Info"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t count"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["要创建的实例的数量，请参考 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-info/capi-sensor-sensor-info",
              children: "Sensor_Info"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-info/capi-sensor-sensor-info",
              children: "Sensor_Info **"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功，返回指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-info/capi-sensor-sensor-info",
              children: "Sensor_Info"
            }), "实例数组的双指针；否则返回", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "NULL"
              })
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_sensor_destroyinfos",
      children: "OH_Sensor_DestroyInfos()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Sensor_DestroyInfos(Sensor_Info **sensors, uint32_t count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁实例数组并回收内存，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-info/capi-sensor-sensor-info",
        children: "Sensor_Info"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-info/capi-sensor-sensor-info",
              children: "Sensor_Info"
            }), " **sensors"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-info/capi-sensor-sensor-info",
              children: "Sensor_Info"
            }), "实例数组的双指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t count"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["要销毁的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-info/capi-sensor-sensor-info",
              children: "Sensor_Info"
            }), "实例的数量。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功返回", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "SENSOR_SUCCESS"
              })
            }), "；否则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "Sensor_Result"
            }), "中定义的错误代码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_sensorinfo_getname",
      children: "OH_SensorInfo_GetName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_SensorInfo_GetName(Sensor_Info* sensor, char *sensorName, uint32_t *length)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取传感器名称。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-info/capi-sensor-sensor-info",
              children: "Sensor_Info"
            }), "* sensor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向传感器信息的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char *sensorName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向传感器名称的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向长度的指针，以字节为单位。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功返回", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "SENSOR_SUCCESS"
              })
            }), "；否则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "Sensor_Result"
            }), "中定义的错误代码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_sensorinfo_getvendorname",
      children: "OH_SensorInfo_GetVendorName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_SensorInfo_GetVendorName(Sensor_Info* sensor, char *vendorName, uint32_t *length)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取传感器的厂商名称。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-info/capi-sensor-sensor-info",
              children: "Sensor_Info"
            }), "* sensor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向传感器信息的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "char *vendorName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向供应商名称的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向长度的指针，以字节为单位。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功返回", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "SENSOR_SUCCESS"
              })
            }), "；否则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "Sensor_Result"
            }), "中定义的错误代码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_sensorinfo_gettype",
      children: "OH_SensorInfo_GetType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_SensorInfo_GetType(Sensor_Info* sensor, Sensor_Type *sensorType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取传感器类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-info/capi-sensor-sensor-info",
              children: "Sensor_Info"
            }), "* sensor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向传感器信息的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_type",
              children: "Sensor_Type"
            }), " *sensorType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向传感器类型的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功返回", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "SENSOR_SUCCESS"
              })
            }), "；否则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "Sensor_Result"
            }), "中定义的错误代码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_sensorinfo_getresolution",
      children: "OH_SensorInfo_GetResolution()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_SensorInfo_GetResolution(Sensor_Info* sensor, float *resolution)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取传感器分辨率。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-info/capi-sensor-sensor-info",
              children: "Sensor_Info"
            }), "* sensor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向传感器信息的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float *resolution"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向传感器分辨率", (0,jsx_runtime.jsx)(_components.a, {
              href: "#sensor_accuracy",
              children: "Sensor_Accuracy"
            }), "的指针。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功返回", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "SENSOR_SUCCESS"
              })
            }), "；否则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "Sensor_Result"
            }), "中定义的错误代码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_sensorinfo_getminsamplinginterval",
      children: "OH_SensorInfo_GetMinSamplingInterval()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_SensorInfo_GetMinSamplingInterval(Sensor_Info* sensor, int64_t *minSamplingInterval)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取传感器的最小数据上报间隔。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-info/capi-sensor-sensor-info",
              children: "Sensor_Info"
            }), "* sensor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向传感器信息的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t *minSamplingInterval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向最小数据报告间隔的指针，以纳秒为单位。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功返回", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "SENSOR_SUCCESS"
              })
            }), "；否则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "Sensor_Result"
            }), "中定义的错误代码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_sensorinfo_getmaxsamplinginterval",
      children: "OH_SensorInfo_GetMaxSamplingInterval()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_SensorInfo_GetMaxSamplingInterval(Sensor_Info* sensor, int64_t *maxSamplingInterval)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取传感器的最大数据上报间隔时间。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-info/capi-sensor-sensor-info",
              children: "Sensor_Info"
            }), "* sensor"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向传感器信息的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t *maxSamplingInterval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向最大数据报告间隔的指针，单位为纳秒。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功返回", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "SENSOR_SUCCESS"
              })
            }), "；否则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "Sensor_Result"
            }), "中定义的错误代码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_sensorevent_gettype",
      children: "OH_SensorEvent_GetType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_SensorEvent_GetType(Sensor_Event* sensorEvent, Sensor_Type *sensorType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取传感器类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-event/capi-sensor-sensor-event",
              children: "Sensor_Event"
            }), "* sensorEvent"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向传感器数据信息的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_type",
              children: "Sensor_Type"
            }), " *sensorType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向传感器类型的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功返回", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "SENSOR_SUCCESS"
              })
            }), "；否则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "Sensor_Result"
            }), "中定义的错误代码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_sensorevent_gettimestamp",
      children: "OH_SensorEvent_GetTimestamp()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_SensorEvent_GetTimestamp(Sensor_Event* sensorEvent, int64_t *timestamp)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取传感器数据的时间戳。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-event/capi-sensor-sensor-event",
              children: "Sensor_Event"
            }), "* sensorEvent"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向传感器数据信息的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t *timestamp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "时间戳指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功返回", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "SENSOR_SUCCESS"
              })
            }), "；否则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "Sensor_Result"
            }), "中定义的错误代码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_sensorevent_getaccuracy",
      children: "OH_SensorEvent_GetAccuracy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_SensorEvent_GetAccuracy(Sensor_Event* sensorEvent, Sensor_Accuracy *accuracy)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取传感器数据的精度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-event/capi-sensor-sensor-event",
              children: "Sensor_Event"
            }), "* sensorEvent"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向传感器数据信息的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_accuracy",
              children: "Sensor_Accuracy"
            }), " *accuracy"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向精度的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功返回", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "SENSOR_SUCCESS"
              })
            }), "；否则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "Sensor_Result"
            }), "中定义的错误代码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_sensorevent_getdata",
      children: "OH_SensorEvent_GetData()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_SensorEvent_GetData(Sensor_Event* sensorEvent, float **data, uint32_t *length)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取传感器数据。数据的长度和内容依赖于监听的传感器类型，传感器上报的数据格式如下：SENSOR_TYPE_ACCELEROMETER: data[0]、data[1]、data[2]分别表示设备x、y、z轴的加速度分量，单位m/s2。SENSOR_TYPE_GYROSCOPE: data[0]、data[1]、data[2]分别表示设备x、y、z轴的旋转角速度，单位弧度/s。SENSOR_TYPE_AMBIENT_LIGHT: data[0]表示环境光强度，单位勒克斯；从api版本12开始，将返回两个额外的数据，其中data[1]表示色温，单位为开尔文；data[2]表示红外亮度，单位cd/m2。SENSOR_TYPE_MAGNETIC_FIELD: data[0]、data[1]、data[2]分别表示设备x、y、z轴的地磁分量，单位微特斯拉。SENSOR_TYPE_BAROMETER：data[0]表示气压值，单位hPa。SENSOR_TYPE_HALL: data[0]表示皮套吸合状态，0表示打开，大于0表示吸附。SENSOR_TYPE_PROXIMITY：data[0]表示接近状态，0表示接近，大于0表示远离。SENSOR_TYPE_ORIENTATION"
    }), (0,jsx_runtime.jsx)(_components.div, {
      children: "0"
    }), "、data[1]、data[2]分别表示设备绕z、x、y轴的角度，单位度。SENSOR_TYPE_GRAVITY：data[0]、data[1]、data[2]分别表示设备x、y、z轴的重力加速度分量，单位m/s2。SENSOR_TYPE_ROTATION_VECTOR", (0,jsx_runtime.jsx)(_components.div, {
      children: "0"
    }), "、data[1]、data[2]分别表示设备x、y、z轴的旋转角度，单位度，data[3]表示旋转向量元素。SENSOR_TYPE_PEDOMETER_DETECTION", (0,jsx_runtime.jsx)(_components.div, {
      children: "0"
    }), "表示几步检测状态，1表示检测到了步数变化。SENSOR_TYPE_PEDOMETER", (0,jsx_runtime.jsx)(_components.div, {
      children: "0"
    }), "表示步数。SENSOR_TYPE_HEART_RATE：data[0]表示心率数值。SENSOR_TYPE_LINEAR_ACCELERATION：从api版本13开始支持。data[0]，data[1]，data[2]，表示分别绕设备的x、y、z轴的线性加速度，单位为m/s2。SENSOR_TYPE_GAME_ROTATION_VECTOR：从api版本13支持。data[0]，data[1]和data[2]，表示设备分别围绕x、y、z轴的旋转角度，单位为度。data[3]表示旋转向量。", (0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-event/capi-sensor-sensor-event",
              children: "Sensor_Event"
            }), "* sensorEvent"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传感器数据信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "float **data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "出参，传感器数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "出参，数组长度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功返回", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "SENSOR_SUCCESS"
              })
            }), "；否则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "Sensor_Result"
            }), "中定义的错误代码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_sensor_createsubscriptionid",
      children: "OH_Sensor_CreateSubscriptionId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sensor_SubscriptionId *OH_Sensor_CreateSubscriptionId(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriptionid/capi-sensor-sensor-subscriptionid",
        children: "Sensor_SubscriptionId"
      }), "实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriptionid/capi-sensor-sensor-subscriptionid",
              children: "Sensor_SubscriptionId *"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功，返回指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriptionid/capi-sensor-sensor-subscriptionid",
              children: "Sensor_SubscriptionId"
            }), "实例的指针;否则返回", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "NULL"
              })
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_sensor_destroysubscriptionid",
      children: "OH_Sensor_DestroySubscriptionId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Sensor_DestroySubscriptionId(Sensor_SubscriptionId *id)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriptionid/capi-sensor-sensor-subscriptionid",
        children: "Sensor_SubscriptionId"
      }), "实例并回收内存。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriptionid/capi-sensor-sensor-subscriptionid",
              children: "Sensor_SubscriptionId"
            }), " *id"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriptionid/capi-sensor-sensor-subscriptionid",
              children: "Sensor_SubscriptionId"
            }), "实例的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功返回", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "SENSOR_SUCCESS"
              })
            }), "；否则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "Sensor_Result"
            }), "中定义的错误代码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_sensorsubscriptionid_gettype",
      children: "OH_SensorSubscriptionId_GetType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_SensorSubscriptionId_GetType(Sensor_SubscriptionId* id, Sensor_Type *sensorType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取传感器类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriptionid/capi-sensor-sensor-subscriptionid",
              children: "Sensor_SubscriptionId"
            }), "* id"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向传感器订阅ID的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_type",
              children: "Sensor_Type"
            }), " *sensorType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向传感器类型的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功返回", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "SENSOR_SUCCESS"
              })
            }), "；否则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "Sensor_Result"
            }), "中定义的错误代码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_sensorsubscriptionid_settype",
      children: "OH_SensorSubscriptionId_SetType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_SensorSubscriptionId_SetType(Sensor_SubscriptionId* id, const Sensor_Type sensorType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置传感器类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriptionid/capi-sensor-sensor-subscriptionid",
              children: "Sensor_SubscriptionId"
            }), "* id"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向传感器订阅ID的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_type",
              children: "const Sensor_Type"
            }), " sensorType"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要设置的传感器类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功返回", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "SENSOR_SUCCESS"
              })
            }), "；否则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "Sensor_Result"
            }), "中定义的错误代码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_sensor_createsubscriptionattribute",
      children: "OH_Sensor_CreateSubscriptionAttribute()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sensor_SubscriptionAttribute *OH_Sensor_CreateSubscriptionAttribute(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriptionattribute/capi-sensor-sensor-subscriptionattribute",
        children: "Sensor_SubscriptionAttribute"
      }), "实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriptionattribute/capi-sensor-sensor-subscriptionattribute",
              children: "Sensor_SubscriptionAttribute *"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功，返回指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriptionattribute/capi-sensor-sensor-subscriptionattribute",
              children: "Sensor_SubscriptionAttribute"
            }), "实例的指针；否则返回", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "NULL"
              })
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_sensor_destroysubscriptionattribute",
      children: "OH_Sensor_DestroySubscriptionAttribute()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Sensor_DestroySubscriptionAttribute(Sensor_SubscriptionAttribute *attribute)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriptionattribute/capi-sensor-sensor-subscriptionattribute",
        children: "Sensor_SubscriptionAttribute"
      }), "实例并回收内存。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriptionattribute/capi-sensor-sensor-subscriptionattribute",
              children: "Sensor_SubscriptionAttribute"
            }), " *attribute"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriptionattribute/capi-sensor-sensor-subscriptionattribute",
              children: "Sensor_SubscriptionAttribute"
            }), "实例的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功返回", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "SENSOR_SUCCESS"
              })
            }), "；否则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "Sensor_Result"
            }), "中定义的错误代码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_sensorsubscriptionattribute_setsamplinginterval",
      children: "OH_SensorSubscriptionAttribute_SetSamplingInterval()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_SensorSubscriptionAttribute_SetSamplingInterval(Sensor_SubscriptionAttribute* attribute, const int64_t samplingInterval)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置传感器数据报告间隔。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriptionattribute/capi-sensor-sensor-subscriptionattribute",
              children: "Sensor_SubscriptionAttribute"
            }), "* attribute"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向传感器订阅属性的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "const int64_t samplingInterval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "要设置的数据报告间隔，以纳秒为单位。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功返回", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "SENSOR_SUCCESS"
              })
            }), "；否则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "Sensor_Result"
            }), "中定义的错误代码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_sensorsubscriptionattribute_getsamplinginterval",
      children: "OH_SensorSubscriptionAttribute_GetSamplingInterval()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_SensorSubscriptionAttribute_GetSamplingInterval(Sensor_SubscriptionAttribute* attribute, int64_t *samplingInterval)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取传感器数据报告间隔。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriptionattribute/capi-sensor-sensor-subscriptionattribute",
              children: "Sensor_SubscriptionAttribute"
            }), "* attribute"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向传感器订阅属性的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "int64_t *samplingInterval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向数据报告间隔的指针，以纳秒为单位。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功返回", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "SENSOR_SUCCESS"
              })
            }), "；否则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "Sensor_Result"
            }), "中定义的错误代码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sensor_eventcallback",
      children: "Sensor_EventCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*Sensor_EventCallback)(Sensor_Event *event)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义用于报告传感器数据的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-event/capi-sensor-sensor-event",
              children: "Sensor_Event"
            }), "* event"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向传感器数据信息的指针。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_sensor_createsubscriber",
      children: "OH_Sensor_CreateSubscriber()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sensor_Subscriber *OH_Sensor_CreateSubscriber(void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriber/capi-sensor-sensor-subscriber",
        children: "Sensor_Subscriber"
      }), "实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriber/capi-sensor-sensor-subscriber",
              children: "Sensor_Subscriber *"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功，返回指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriber/capi-sensor-sensor-subscriber",
              children: "Sensor_Subscriber"
            }), "实例的指针;否则返回", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "NULL"
              })
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_sensor_destroysubscriber",
      children: "OH_Sensor_DestroySubscriber()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_Sensor_DestroySubscriber(Sensor_Subscriber *subscriber)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriber/capi-sensor-sensor-subscriber",
        children: "Sensor_Subscriber"
      }), "实例并回收内存。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriber/capi-sensor-sensor-subscriber",
              children: "Sensor_Subscriber"
            }), " *subscriber"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriber/capi-sensor-sensor-subscriber",
              children: "Sensor_Subscriber"
            }), "实例的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功返回", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "SENSOR_SUCCESS"
              })
            }), "；否则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "Sensor_Result"
            }), "中定义的错误代码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_sensorsubscriber_setcallback",
      children: "OH_SensorSubscriber_SetCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_SensorSubscriber_SetCallback(Sensor_Subscriber* subscriber, const Sensor_EventCallback callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置一个回调函数来报告传感器数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriber/capi-sensor-sensor-subscriber",
              children: "Sensor_Subscriber"
            }), "* subscriber"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向传感器订阅者信息的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_eventcallback",
              children: "const Sensor_EventCallback"
            }), " callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功返回", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "SENSOR_SUCCESS"
              })
            }), "；否则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "Sensor_Result"
            }), "中定义的错误代码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_sensorsubscriber_getcallback",
      children: "OH_SensorSubscriber_GetCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t OH_SensorSubscriber_GetCallback(Sensor_Subscriber* subscriber, Sensor_EventCallback *callback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取用于报告传感器数据的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 11"]
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
            children: "参数项"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriber/capi-sensor-sensor-subscriber",
              children: "Sensor_Subscriber"
            }), "* subscriber"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向传感器订阅者信息的指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_eventcallback",
              children: "Sensor_EventCallback"
            }), " *callback"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指向回调函数的指针。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
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
            children: "int32_t"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功返回", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "SENSOR_SUCCESS"
              })
            }), "；否则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "Sensor_Result"
            }), "中定义的错误代码。"]
          })]
        })
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