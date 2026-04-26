"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["130365"], {
632482(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_sensor_service_kit_sensor_sensor_overview_sensor_overview_md_747_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-sensor-service-kit-sensor-sensor-overview-sensor-overview-md-747.json
var site_docs_system_hardware_sensor_service_kit_sensor_sensor_overview_sensor_overview_md_747_namespaceObject = JSON.parse('{"id":"system-hardware/sensor-service-kit/sensor/sensor-overview/sensor-overview","title":"传感器开发概述","description":"传感器类型","source":"@site/docs/system-hardware/sensor-service-kit/sensor/sensor-overview/sensor-overview.md","sourceDirName":"system-hardware/sensor-service-kit/sensor/sensor-overview","slug":"/system-hardware/sensor-service-kit/sensor/sensor-overview/","permalink":"/harmonyos-docs-site/system-hardware/sensor-service-kit/sensor/sensor-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"传感器开发概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/sensor-overview","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Sensor Service Kit开发简介","permalink":"/harmonyos-docs-site/system-hardware/sensor-service-kit/sensorservice-kit-intro/"},"next":{"title":"传感器开发指导(ArkTS)","permalink":"/harmonyos-docs-site/system-hardware/sensor-service-kit/sensor/sensor-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/sensor-service-kit/sensor/sensor-overview/sensor-overview.md


const frontMatter = {
	title: '传感器开发概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/sensor-overview',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '传感器开发概述';

const assets = {

};



const toc = [{
  "value": "传感器类型",
  "id": "传感器类型",
  "level": 2
}, {
  "value": "运作机制",
  "id": "运作机制",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
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
        id: "传感器开发概述",
        children: "传感器开发概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "传感器类型",
      children: "传感器类型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["系统传感器是应用访问底层硬件传感器的一种设备抽象概念。开发者根据传感器提供的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/sensor-service-api/sensor-service-arkts/js-apis-sensor/js-apis-sensor",
        children: "@ohos.sensor (传感器)"
      }), "，可以查询设备上的传感器，订阅传感器数据，并根据传感器数据定制相应的算法开发各类应用，比如指南针、运动健康、游戏等。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "传感器类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "主要用途"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCELEROMETER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加速度传感器"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测量三个物理轴（x、y 和 z）上，施加在设备上的加速度（包括重力加速度），单位 : m/s²。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检测运动状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ACCELEROMETER_UNCALIBRATED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未校准加速度传感器"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测量三个物理轴（x、y 和 z）上，施加在设备上的未校准的加速度（包括重力加速度），单位 : m/s²。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检测加速度偏差估值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LINEAR_ACCELEROMETER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "线性加速度传感器"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测量三个物理轴（x、y 和 z）上，施加在设备上的线性加速度（不包括重力加速度），单位 : m/s²。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检测每个单轴方向上的线性加速度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GRAVITY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重力传感器"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测量三个物理轴（x、y 和 z）上，施加在设备上的重力加速度，单位 : m/s²。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测量重力大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GYROSCOPE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "陀螺仪传感器"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测量三个物理轴（x、y 和 z）上，设备的旋转角速度，单位 : rad/s。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测量旋转的角速度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GYROSCOPE_UNCALIBRATED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未校准陀螺仪传感器"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测量三个物理轴（x、y 和 z）上，设备的未校准旋转角速度，单位 : rad/s。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测量旋转的角速度及偏差估值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIGNIFICANT_MOTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "大幅度动作传感器"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测量三个物理轴（x、y 和 z）上，设备是否存在大幅度运动；如果取值为1则代表存在大幅度运动，取值为0则代表没有大幅度运动。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于检测设备是否存在大幅度运动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PEDOMETER_DETECTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计步器检测传感器"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检测用户的计步动作；如果取值为1则代表用户产生了计步行走的动作；取值为0则代表用户没有发生运动。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于检测用户是否有计步的动作。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PEDOMETER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "计步器传感器"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "统计用户的行走步数。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于提供用户行走的步数数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AMBIENT_TEMPERATURE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "环境温度传感器"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测量环境温度，单位 : 摄氏度 (°C)。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测量环境温度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAGNETIC_FIELD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "磁场传感器"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测量三个物理轴向（x、y、z）上，环境地磁场，单位 : μT。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建指南针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MAGNETIC_FIELD_UNCALIBRATED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未校准磁场传感器"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测量三个物理轴向（x、y、z）上，未校准环境地磁场，单位 : μT。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测量地磁偏差估值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HUMIDITY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "湿度传感器"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测量环境的相对湿度，以百分比 (%) 表示。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监测露点、绝对湿度和相对湿度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BAROMETER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "气压计传感器"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测量环境气压，单位 : hPa 或 mbar。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测量环境气压。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ORIENTATION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "方向传感器"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测量设备围绕所有三个物理轴（z、x、y）旋转的角度值，单位：rad。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于测量屏幕旋转的3个角度值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ROTATION_VECTOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "旋转矢量传感器"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测量设备旋转矢量，复合传感器：由加速度传感器、磁场传感器、陀螺仪传感器合成。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检测设备相对于东北天坐标系的方向。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PROXIMITY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接近光传感器"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测量可见物体相对于设备显示屏的接近或远离状态。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通话中设备相对人的位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AMBIENT_LIGHT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "环境光传感器"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测量设备周围光线强度，单位：lux。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自动调节屏幕亮度，检测屏幕上方是否有遮挡。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEART_RATE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "心率传感器"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测量用户的心率数值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于提供用户的心率健康数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "WEAR_DETECTION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "佩戴检测传感器"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检测用户是否佩戴。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于检测用户是否佩戴智能穿戴。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HALL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "霍尔传感器"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "测量设备周围是否存在磁力吸引。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备的皮套模式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方向类传感器坐标系和设备的器件贴片方向相关，基本是基于产品定义屏幕自然方向（不同型号的设备屏幕自然方向可能会有所差异）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以常见的直板手机为例，将手机竖直地拿在面前，屏幕正对着使用者："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "X轴：沿着屏幕的短边方向，从左到右；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Y轴：沿着屏幕的长边方向，从下到上；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Z轴：垂直于屏幕，从屏幕向外指向用户的方向。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用者可以结合设备自然方向及当前的屏幕方向，根据自身的业务场景来决定如何解释和使用这些原始数据。例如，一个体感交互的赛车游戏需要通过倾斜设备来控制方向。无论玩家是竖着还是横着玩，传感器提供的X、Y轴数据始终是相对于屏幕自然方向的数据。开发者需要根据当前的屏幕方向/应用界面显示需求，决定是使用X轴的数据还是Y轴的数据来控制赛车的左右转向，从而确保用户体验的一致性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于方向传感器，建议先调用DMS相关接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-display/js-apis-display#display",
        children: "Display"
      }), "获取屏幕方向，再进行开发操作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运作机制",
      children: "运作机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传感器包含如下四个模块：Sensor API、Sensor Framework、Sensor Service和HDF层。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 传感器"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(525215)/* ["default"] */.A) + "",
        width: "509",
        height: "702"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sensor API：提供传感器的基础API，主要包含查询传感器列表，订阅/取消传感器的数据、执行控制命令等，简化应用开发。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sensor Framework：主要实现传感器的订阅管理，数据通道的创建、销毁、订阅与取消订阅，实现与SensorService的通信。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sensor Service：主要实现HD_IDL层数据接收、解析、分发，前后台的策略管控，对该设备Sensor的管理，Sensor权限管控等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HDF层：对不同的FIFO、频率进行策略选择，以及适配不同设备。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "针对下面所列传感器，开发者需要请求相应的权限，才能获取到相应传感器的数据。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "传感器"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "权限名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "敏感级别"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "权限描述"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "加速度传感器，加速度未校准传感器，线性加速度传感器"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ohos.permission.ACCELEROMETER"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "system_grant"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "允许应用读取加速度传感器的数据，包括：加速度传感器、加速度未校准传感器、线性加速度传感器。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "陀螺仪传感器，陀螺仪未校准传感器"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ohos.permission.GYROSCOPE"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "system_grant"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "允许应用读取陀螺仪传感器的数据，包括：陀螺仪传感器、陀螺仪未校准传感器。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "计步器"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ohos.permission.ACTIVITY_MOTION"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "user_grant"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "该权限允许应用读取用户当前的运动状态。例如：判断用户是否处于运动中、记录用户行走步数。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "心率传感器"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ohos.permission.READ_HEALTH_DATA"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "user_grant"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "该权限允许应用读取用户的健康数据，如：心率数据等。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "传感器数据订阅和取消订阅接口成对调用，当不再需要订阅传感器数据时，开发者需要调用取消订阅接口停止数据上报。"
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
525215(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478479-cb6d80f6e762826df64991e4a189a0d2.png");

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