"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["378675"], {
648644(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_hardware_api_sensor_service_api_sensor_service_c_sensor_service_headerfile_capi_oh_sensor_h_capi_oh_sensor_h_md_2b6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-hardware-api-sensor-service-api-sensor-service-c-sensor-service-headerfile-capi-oh-sensor-h-capi-oh-sensor-h-md-2b6.json
var site_docs_ref_system_hardware_api_sensor_service_api_sensor_service_c_sensor_service_headerfile_capi_oh_sensor_h_capi_oh_sensor_h_md_2b6_namespaceObject = JSON.parse('{"id":"system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-h/capi-oh-sensor-h","title":"oh_sensor.h","description":"概述","source":"@site/docs-ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-h/capi-oh-sensor-h.md","sourceDirName":"system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-h","slug":"/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-h/capi-oh-sensor-h","permalink":"/harmonyos-docs-site/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-h/capi-oh-sensor-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"oh_sensor.h","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-sensor-h","kit":"系统","last_updated":"2026-04-22","slug":"capi-oh-sensor-h"},"sidebar":"ref","previous":{"title":"Vibrator","permalink":"/harmonyos-docs-site/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-module/capi-vibrator/capi-vibrator"},"next":{"title":"oh_sensor_type.h","permalink":"/harmonyos-docs-site/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-h/capi-oh-sensor-h.md


const frontMatter = {
	title: 'oh_sensor.h',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-sensor-h',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'capi-oh-sensor-h'
};
const contentTitle = 'oh_sensor.h';

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
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_Sensor_GetInfos()",
  "id": "oh_sensor_getinfos",
  "level": 3
}, {
  "value": "OH_Sensor_Subscribe()",
  "id": "oh_sensor_subscribe",
  "level": 3
}, {
  "value": "OH_Sensor_Unsubscribe()",
  "id": "oh_sensor_unsubscribe",
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
        id: "oh_sensorh",
        children: "oh_sensor.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明操作传感器的API，包括获取传感器信息和订阅取消订阅传感器数据。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <sensors/oh_sensor.h>"]
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
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_sensor_getinfos",
              children: "Sensor_Result OH_Sensor_GetInfos(Sensor_Info **infos, uint32_t *count)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取设备上所有传感器的信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_sensor_subscribe",
              children: "Sensor_Result OH_Sensor_Subscribe(const Sensor_SubscriptionId *id, const Sensor_SubscriptionAttribute *attribute, const Sensor_Subscriber *subscriber)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅传感器数据。系统将以指定的频率向用户报告传感器数据。订阅加速度传感器，需要申请ohos.permission.ACCELEROMETER权限；订阅陀螺仪传感器，需要申请ohos.permission.GYROSCOPE权限；订阅计步器相关传感器时，需要申请ohos.permission.ACTIVITY_MOTION权限；订阅与健康相关的传感器时，比如心率传感器，需要申请ohos.permission.READ_HEALTH_DATA权限，否则订阅失败。订阅其余传感器不需要申请权限。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_sensor_unsubscribe",
              children: "Sensor_Result OH_Sensor_Unsubscribe(const Sensor_SubscriptionId *id, const Sensor_Subscriber *subscriber)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消订阅传感器数据。取消订阅加速度计传感器，需要申请ohos.permission.ACCELEROMETER权限；取消订阅陀螺仪传感器，需要申请ohos.permission.GYROSCOPE权限；取消订阅计步器相关传感器时，需要申请ohos.permission.ACTIVITY_MOTION权限；取消订阅与健康相关的传感器时，需要申请ohos.permission.READ_HEALTH_DATA权限，否则取消订阅失败。取消订阅其余传感器不需要申请权限。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_sensor_getinfos",
      children: "OH_Sensor_GetInfos()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sensor_Result OH_Sensor_GetInfos(Sensor_Info **infos, uint32_t *count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取设备上所有传感器的信息。"
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
            }), " **infos"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- 双指针指向设备上所有传感器的信息。请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-info/capi-sensor-sensor-info",
              children: "Sensor_Info"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "uint32_t *count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- 指向设备上传感器数量的指针。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "Sensor_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功返回", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "SENSOR_SUCCESS"
              })
            }), "；否则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "Sensor_Result"
            }), "中定义的错误代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "SENSOR_PARAMETER_ERROR"
            }), "参数检查失败。例如，参数无效；或传入的参数类型不正确。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "SENSOR_SERVICE_EXCEPTION"
            }), "传感器服务异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_sensor_subscribe",
      children: "OH_Sensor_Subscribe()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sensor_Result OH_Sensor_Subscribe(const Sensor_SubscriptionId *id, const Sensor_SubscriptionAttribute *attribute, const Sensor_Subscriber *subscriber)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "订阅传感器数据。系统将以指定的频率向用户报告传感器数据。订阅加速度传感器，需要申请ohos.permission.ACCELEROMETER权限；订阅陀螺仪传感器，需要申请ohos.permission.GYROSCOPE权限；订阅计步器相关传感器时，需要申请ohos.permission.ACTIVITY_MOTION权限；订阅与健康相关的传感器时，比如心率传感器，需要申请ohos.permission.READ_HEALTH_DATA权限，否则订阅失败。订阅其余传感器不需要申请权限。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ACCELEROMETER or ohos.permission.GYROSCOPE or"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.ACTIVITY_MOTION or ohos.permission.READ_HEALTH_DATA"
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
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriptionid/capi-sensor-sensor-subscriptionid",
              children: "const Sensor_SubscriptionId"
            }), " *id"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- 指向传感器订阅ID的指针。请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriptionid/capi-sensor-sensor-subscriptionid",
              children: "Sensor_SubscriptionId"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriptionattribute/capi-sensor-sensor-subscriptionattribute",
              children: "const Sensor_SubscriptionAttribute"
            }), " *attribute"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- 指向订阅属性的指针，该属性用于指定数据报告频率。请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriptionattribute/capi-sensor-sensor-subscriptionattribute",
              children: "Sensor_SubscriptionAttribute"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriber/capi-sensor-sensor-subscriber",
              children: "const Sensor_Subscriber"
            }), " *subscriber"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- 指向订阅者信息的指针，该信息用于指定的回调函数报告传感器数据。请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriber/capi-sensor-sensor-subscriber",
              children: "Sensor_Subscriber"
            }), "。"]
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "Sensor_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功返回", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "SENSOR_SUCCESS"
              })
            }), "；否则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "Sensor_Result"
            }), "中定义的错误代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "SENSOR_PERMISSION_DENIED"
            }), "权限验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "SENSOR_PARAMETER_ERROR"
            }), "参数检查失败。例如，参数无效；或传入的参数类型不正确。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "SENSOR_SERVICE_EXCEPTION"
            }), "传感器服务异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_sensor_unsubscribe",
      children: "OH_Sensor_Unsubscribe()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sensor_Result OH_Sensor_Unsubscribe(const Sensor_SubscriptionId *id, const Sensor_Subscriber *subscriber)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消订阅传感器数据。取消订阅加速度计传感器，需要申请ohos.permission.ACCELEROMETER权限；取消订阅陀螺仪传感器，需要申请ohos.permission.GYROSCOPE权限；取消订阅计步器相关传感器时，需要申请ohos.permission.ACTIVITY_MOTION权限；取消订阅与健康相关的传感器时，需要申请ohos.permission.READ_HEALTH_DATA权限，否则取消订阅失败。取消订阅其余传感器不需要申请权限。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限："
        })
      }), " ohos.permission.ACCELEROMETER or ohos.permission.GYROSCOPE or"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ohos.permission.ACTIVITY_MOTION or ohos.permission.READ_HEALTH_DATA"
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
              children: "const Sensor_SubscriptionId"
            }), " *id"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- 指向传感器订阅ID的指针。请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriptionid/capi-sensor-sensor-subscriptionid",
              children: "Sensor_SubscriptionId"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriber/capi-sensor-sensor-subscriber",
              children: "const Sensor_Subscriber"
            }), " *subscriber"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- 指向订阅者信息的指针，该信息用于指定的回调函数报告传感器数据。请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-struct/capi-sensor-sensor-subscriber/capi-sensor-sensor-subscriber",
              children: "Sensor_Subscriber"
            }), "。"]
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "Sensor_Result"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果操作成功返回", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "SENSOR_SUCCESS"
              })
            }), "；否则返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "Sensor_Result"
            }), "中定义的错误代码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "SENSOR_PERMISSION_DENIED"
            }), "权限验证失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "SENSOR_PARAMETER_ERROR"
            }), "参数检查失败。例如，参数无效；或传入的参数类型不正确。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-c/sensor-service-headerfile/capi-oh-sensor-type-h/capi-oh-sensor-type-h#sensor_result",
              children: "SENSOR_SERVICE_EXCEPTION"
            }), "传感器服务异常。"]
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