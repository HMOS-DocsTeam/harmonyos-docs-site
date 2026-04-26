"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["488214"], {
510652(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_hardware_sensor_service_kit_vibrator_vibrator_guidelines_vibrator_guidelines_md_486_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-hardware-sensor-service-kit-vibrator-vibrator-guidelines-vibrator-guidelines-md-486.json
var site_docs_system_hardware_sensor_service_kit_vibrator_vibrator_guidelines_vibrator_guidelines_md_486_namespaceObject = JSON.parse('{"id":"system-hardware/sensor-service-kit/vibrator/vibrator-guidelines/vibrator-guidelines","title":"振动开发指导(ArkTS)","description":"场景介绍","source":"@site/docs/system-hardware/sensor-service-kit/vibrator/vibrator-guidelines/vibrator-guidelines.md","sourceDirName":"system-hardware/sensor-service-kit/vibrator/vibrator-guidelines","slug":"/system-hardware/sensor-service-kit/vibrator/vibrator-guidelines/","permalink":"/harmonyos-docs-site/system-hardware/sensor-service-kit/vibrator/vibrator-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"振动开发指导(ArkTS)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/vibrator-guidelines","kit":"system/hardware","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"振动开发概述","permalink":"/harmonyos-docs-site/system-hardware/sensor-service-kit/vibrator/vibrator-overview/"},"next":{"title":"振动开发指导(C/C++)","permalink":"/harmonyos-docs-site/system-hardware/sensor-service-kit/vibrator/vibrator-guidelines-capi/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-hardware/sensor-service-kit/vibrator/vibrator-guidelines/vibrator-guidelines.md


const frontMatter = {
	title: '振动开发指导(ArkTS)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/vibrator-guidelines',
	kit: 'system/hardware',
	last_updated: '2026-04-22'
};
const contentTitle = '振动开发指导(ArkTS)';

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
  "value": "振动效果说明",
  "id": "振动效果说明",
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
        id: "振动开发指导arkts",
        children: "振动开发指导(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当设备需要设置不同的振动效果时，可以调用Vibrator模块，例如：设备的按键可以设置不同强度和不同时长的振动，闹钟和来电可以设置不同强度和时长的单次或周期振动。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细的接口介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/sensor-service-api/sensor-service-arkts/js-apis-vibrator/js-apis-vibrator",
        children: "@ohos.vibrator (振动)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "startVibration(effect: VibrateEffect, attribute: VibrateAttribute): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据指定振动效果和振动属性触发马达振动，使用Promise异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据指定振动效果和振动属性触发马达振动，使用Callback异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stopVibration(stopMode: VibratorStopMode): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按照指定模式停止马达的振动，使用Promise异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stopVibration(stopMode: VibratorStopMode, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按照指定模式停止马达的振动，使用Callback异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stopVibration(): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止所有模式的马达振动，使用Promise异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stopVibration(param?: VibratorInfoParam): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不传参则停止本地设备所有马达的振动，也可传参停止指定马达振动，使用Promise异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stopVibration(callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止所有模式的马达振动，使用Callback异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isSupportEffect(effectId: string): Promise<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询是否支持传入的参数effectId。返回true则表示支持，否则不支持，使用Promise异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isSupportEffect(effectId: string, callback: AsyncCallback<boolean>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询是否支持传入的参数effectId。返回true则表示支持，否则不支持，使用Callback异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getEffectInfoSync(effectId: string, param?: VibratorInfoParam): EffectInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同步查询是否支持传入的参数effectId，param可指定具体马达。返回EffectInfo中isEffectSupported字段可判断是否支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "getVibratorInfoSync(param?: VibratorInfoParam): Array<VibratorInfo>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同步查询一个或所有设备的马达信息列表。返回VibratorInfo包含设备ID、马达ID、设备名称、是否支持高清振动、是否本地设备等信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "on(type: 'vibratorStateChange', callback: Callback<VibratorStatusEvent>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册马达设备上线下状态变化的监听。callback参数VibratorStatusEvent可返回事件时间戳、设备ID、马达数量、上线或下线等信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'vibratorStateChange', callback?: Callback<VibratorStatusEvent>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注销马达设备上线下状态变化的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isHdHapticSupported(): boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询是否支持高清振动。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "振动效果说明",
      children: "振动效果说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前支持三类振动效果，如下所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "固定时长振动"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["传入一个固定时长，马达按照默认强度和频率触发振动，振动效果描述请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-arkts/js-apis-vibrator/js-apis-vibrator#vibratetime9",
              children: "VibrateTime"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "预置振动"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["系统中的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-arkts/js-apis-vibrator/js-apis-vibrator#effectid",
              children: "EffectId"
            }), "，这些效果适用于某些固定场景，比如效果\"haptic.clock.timer\"通常用于用户调整计时器时的振感反馈，振动效果描述请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-arkts/js-apis-vibrator/js-apis-vibrator#vibratepreset9",
              children: "VibratePreset"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "自定义振动"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["自定义振动提供给用户设计自己所需振动效果的能力，用户可通过自定义振动配置文件，并遵循相应规则编排所需振动形式，使能更加开放的振感交互体验，效果描述请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-hardware-api/sensor-service-api/sensor-service-arkts/js-apis-vibrator/js-apis-vibrator#vibratefromfile10",
              children: "VibrateFromFile"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义振动配置文件为Json格式，在形式上如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"MetaData\": {\n        \"Create\": \"2023-01-09\",\n        \"Description\": \"a haptic case\",\n        \"Version\": 1.0,\n        \"ChannelNumber\": 1\n    },\n    \"Channels\": [\n        {\n            \"Parameters\": {\n                \"Index\": 0\n            },\n            \"Pattern\": [\n                {\n                    \"Event\": {\n                        \"Type\": \"transient\",\n                        \"StartTime\": 0,\n                        \"Parameters\": {\n                            \"Frequency\": 31,\n                            \"Intensity\": 100\n                        }\n                    }\n                },\n                {\n                    \"Event\": {\n                        \"Type\": \"continuous\",\n                        \"StartTime\": 40,\n                        \"Duration\": 54,\n                        \"Parameters\": {\n                            \"Frequency\": 30,\n                            \"Intensity\": 38,\n                            \"Curve\": [\n                                {\n                                    \"Time\": 0,\n                                    \"Frequency\": 0,\n                                    \"Intensity\": 0\n                                },\n                                {\n                                    \"Time\": 1,\n                                    \"Frequency\": 15,\n                                    \"Intensity\": 0.5\n                                },\n                                {\n                                    \"Time\": 40,\n                                    \"Frequency\": -8,\n                                    \"Intensity\": 1.0\n                                },\n                                {\n                                    \"Time\": 54,\n                                    \"Frequency\": 0,\n                                    \"Intensity\": 0\n                                }\n                            ]\n                        }\n                    }\n                }\n            ]\n        }\n    ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSON文件共包含3个属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "\"MetaData\"属性中为文件头信息，可在如下属性中添加描述："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "名称"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填项"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Version"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "文件格式的版本号，向前兼容，目前支持版本1.0。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "ChannelNumber"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示马达振动的通道数，最大支持双马达通道。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Create"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "可记录文件创作时间。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Description"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "可指明振动效果、创建信息等附加说明。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "\"Channels\"属性中为马达振动通道的相关信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "\"Channels\"是Json数组，表示各个通道的信息，包含2个属性。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "名称"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填项"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Parameters"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "为通道参数。其中\"Index\"表示通道编号，0表示全通道发送，1、2分别对应左右马达。0不能与其他通道编号同时作为配置参数。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Pattern"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "马达振动序列。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "\"Pattern\"是Json数组，包含振动事件序列，每个\"Event\"属性代表1个振动事件，支持添加2种振动类型。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "振动类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "transient"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "瞬态短振动，干脆有力。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "continuous"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "稳态长振动，具备长时间输出强劲有力振动的能力。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "\"Event\"表示一个振动事件，包含如下属性："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "名称"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填项"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Type"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "振动事件类型，为\"transient\" 或\"continuous\"。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "StartTime"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "振动的起始时间，单位ms，有效范围为[0, 1800,000]。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Duration"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "振动持续时间，仅当类型为\"continuous\"时有效，单位ms，有效范围为[0, 5000]。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "\"Parameters\"表示振动事件参数设置，必填项，可设置以下属性参数："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "名称"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填项"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Intensity"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "振动事件强度，有效范围为[0, 100]，数字大小代表最大振动量的xx%。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Frequency"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "振动事件频率，有效范围为[0, 100]，一般支持频率调节的马达设置为55时为器件的谐振频率，此时振动量最大，越靠近谐振频率的振动，同强度设置的振动量越大。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Curve"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "否"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "振动曲线，当振动事件类型为\"continuous\"时有效，为Json数组，支持设置一组调节点，调节点数量最大支持16个，最小为4个，每个调节点需包含如下属性：  \"Time\"：相对事件起始时间的偏移，最小为0，最大不能超过事件振动时长；  \"Intensity\"：相对事件振动强度的增益，范围为[0, 1]，此值乘上振动事件强度为对应时间点调节后的强度；  \"Frequency\"：相对事件振动频率的变化，范围为[-100, 100]，此值加上振动事件频率为对应时间点调节后的频率。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其他要求："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "要求"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "振动事件(event)的数量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不得超过128个。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "振动配置文件长度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不得超过64KB。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新建一个工程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(135906)/* ["default"] */.A) + "",
            width: "1278",
            height: "1008"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["配置权限，具体配置方式请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
            children: "声明权限"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"requestPermissions\": [\n  {\n    \"name\": \"ohos.permission.VIBRATE\"\n  }\n],\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { vibrator } from '@kit.SensorServiceKit';\nimport { resourceManager } from '@kit.LocalizationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义常量。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const fileName: string = 'vibrator.json';\nlet TAG = 'vibrator:';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "振动器查询。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "情形一"
            })
          }), " 查询所有马达信息："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  const vibratorInfoList: vibrator.VibratorInfo[] = vibrator.getVibratorInfoSync();\n  console.info(`vibratorInfoList: ${JSON.stringify(vibratorInfoList)}`);\n  // ...\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "情形二"
            })
          }), " 查询指定设备的一个或多个马达信息："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  const vibratorParam: vibrator.VibratorInfoParam = {\n    deviceId: -1    // deviceId 需要是查询出来真实存在的设备\n  }\n  const vibratorInfoList: vibrator.VibratorInfo[] = vibrator.getVibratorInfoSync(vibratorParam);\n  console.info(`vibratorInfoList: ${JSON.stringify(vibratorInfoList)}`);\n  // ...\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据指定振动效果和振动属性触发马达振动。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "情形一"
            })
          }), " 按照指定持续时间触发马达振动："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  // 触发马达振动\n  vibrator.startVibration({\n    type: 'time',\n    duration: 1000,\n  }, {\n    id: 0,\n    usage: 'alarm'\n  }, (error: BusinessError) => {\n    if (error) {\n      console.error(`Failed to start vibration. Code: ${error.code}, message: ${error.message}`);\n      return;\n    }\n    console.info('Succeed in starting vibration');\n  });\n} catch (err) {\n  let e: BusinessError = err as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "情形二"
            })
          }), " 按照预置振动效果触发马达振动，可先查询振动效果是否被支持，再调用振动接口："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  vibrator.isSupportEffect(this.realEffectId, (err: BusinessError, state: boolean) => {\n    if (err) {\n      console.error(`Failed to query effect. Code: ${err.code}, message: ${err.message}`);\n      return;\n    }\n    console.info('Succeed in querying effect');\n    if (state) {\n      try {\n        // 触发马达振动\n        vibrator.startVibration({\n          type: 'preset',\n          effectId: this.realEffectId,\n          count: 1,\n          intensity: 50,\n        }, {\n          usage: 'unknown'\n        }, (error: BusinessError) => {\n          if (error) {\n            console.error(`Failed to start vibration. Code: ${error.code}, message: ${error.message}`);\n          } else {\n            console.info('Succeed in starting vibration');\n          }\n        });\n      } catch (error) {\n        let e: BusinessError = error as BusinessError;\n        console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n      }\n    }\n  })\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "情形三"
            })
          }), " 按照自定义振动配置文件触发马达振动："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取文件资源描述符\nlet rawFd: resourceManager.RawFileDescriptor | undefined = this.uiContext.getHostContext()?.resourceManager.getRawFdSync(fileName);\nif (rawFd != undefined) {\n  // 触发马达振动\n  try {\n    vibrator.startVibration({\n      type: \"file\",\n      hapticFd: { fd: rawFd.fd, offset: rawFd.offset, length: rawFd.length }\n    }, {\n      id: 0,\n      usage: 'alarm' // 根据实际选择类型归属不同的开关管控\n    }, (error: BusinessError) => {\n      if (error) {\n        console.error(`Failed to start vibration. Code: ${error.code}, message: ${error.message}`);\n        return;\n      }\n      console.info('Succeed in starting vibration');\n    });\n  } catch (err) {\n    let e: BusinessError = err as BusinessError;\n    console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n  } finally {\n    vibrator.stopVibration();\n    this.uiContext.getHostContext()?.resourceManager.closeRawFdSync(fileName);\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "情形四"
            })
          }), " Pattern类型的马达振动："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加短振事件的方式获取Pattern，并触发振动："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let builder: vibrator.VibratorPatternBuilder = new vibrator.VibratorPatternBuilder();\ntry {\n  let param: vibrator.TransientParam = {\n    intensity: 80,\n    frequency: 70,\n    index: 0\n  }\n  builder.addTransientEvent(0, param);\n  console.info(`addTransientEvent builder is ${builder.build()}`);\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\ntry {\n  vibrator.startVibration({\n    type: \"pattern\",\n    pattern: builder.build()\n  }, {\n    id: 1,\n    deviceId: -1,\n    // 根据实际选择类型归属不同的开关管控\n    usage: \"alarm\"\n  }, (error: BusinessError) => {\n    if (error) {\n      let e: BusinessError = error as BusinessError;\n      console.error(`Vibrate fail. Code: ${e.code}, message: ${e.message}`);\n    } else {\n      console.info(`vibrate success`);\n    }\n  });\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加长振事件的方式获取Pattern，并触发振动："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let builder: vibrator.VibratorPatternBuilder = new vibrator.VibratorPatternBuilder();\ntry {\n  // VibratorCurvePoint参数最少设置4个，最大设置16个\n  let pointsMe: vibrator.VibratorCurvePoint[] = [\n    { time: 0, intensity: 0, frequency: -7 },\n    { time: 42, intensity: 1, frequency: -6 },\n    { time: 128, intensity: 0.94, frequency: -4 },\n    { time: 217, intensity: 0.63, frequency: -14 },\n    { time: 763, intensity: 0.48, frequency: -14 },\n    { time: 1125, intensity: 0.53, frequency: -10 },\n    { time: 1503, intensity: 0.42, frequency: -14 },\n    { time: 1858, intensity: 0.39, frequency: -14 },\n    { time: 2295, intensity: 0.34, frequency: -17 },\n    { time: 2448, intensity: 0.21, frequency: -14 },\n    { time: 2468, intensity: 0, frequency: -21 }\n  ]\n  let param: vibrator.ContinuousParam = {\n    intensity: 97,\n    frequency: 34,\n    points: pointsMe,\n    index: 0\n  }\n  builder.addContinuousEvent(0, 2468, param);\n  console.info(`addContinuousEvent builder is ${builder.build()}`);\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`Exception. Code ${e.code}`);\n}\ntry {\n  vibrator.startVibration({\n    type: 'pattern',\n    pattern: builder.build()\n  }, {\n    id: 1,\n    deviceId: -1,\n    usage:\"alarm\",\n  }, (error: BusinessError) => {\n    if (error) {\n      let e: BusinessError = error as BusinessError;\n      console.error(`Vibrate fail. Code: ${e.code}, message: ${e.message}`);\n    } else {\n      console.info(`vibrate success`);\n    }\n  });\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "停止马达的振动。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "方式一"
            })
          }), " 按照指定模式停止对应的马达振动，自定义振动不支持此类停止方式："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "​停止固定时长振动："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  // 按照VIBRATOR_STOP_MODE_TIME模式停止振动\n  vibrator.stopVibration(vibrator.VibratorStopMode.VIBRATOR_STOP_MODE_TIME, (error: BusinessError) => {\n    if (error) {\n      console.error(`Failed to stop vibration. Code: ${error.code}, message: ${error.message}`);\n      return;\n    }\n    console.info('Succeed in stopping vibration');\n  })\n} catch (err) {\n  let e: BusinessError = err as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "​停止预置振动："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  // 按照VIBRATOR_STOP_MODE_PRESET模式停止振动\n  vibrator.stopVibration(vibrator.VibratorStopMode.VIBRATOR_STOP_MODE_PRESET, (error: BusinessError) => {\n    if (error) {\n      console.error(`Failed to stop vibration. Code: ${error.code}, message: ${error.message}`);\n      return;\n    }\n    console.info('Succeed in stopping vibration');\n  })\n} catch (err) {\n  let e: BusinessError = err as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "方式二"
            })
          }), " 停止所有模式的马达振动，包括自定义振动："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  // 停止所有模式的马达振动\n  vibrator.stopVibration((error: BusinessError) => {\n    if (error) {\n      console.error(`Failed to stop vibration. Code: ${error.code}, message: ${error.message}`);\n      return;\n    }\n    console.info('Succeed in stopping vibration');\n  })\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "方式三"
            })
          }), " 停止指定设备的振动："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const vibratorInfoParam: vibrator.VibratorInfoParam = {\n  deviceId: -1   // deviceId 需要是查询出来真实存在的设备\n}\ntry {\n  vibrator.stopVibration(vibratorInfoParam).then(() => {\n    console.info('Succeed in stopping vibration');\n  }, (error: BusinessError) => {\n    console.error(`Failed to stop vibration. Code: ${error.code}, message: ${error.message}`);\n  });\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "动态马达状态变化监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 回调函数\nvibratorStateChangeCallback = (data: vibrator.VibratorStatusEvent) => {\n  console.info('vibrator state callback info:', JSON.stringify(data));\n  // ...\n}\n// ...\n            try {\n              // 订阅 vibratorStateChange事件\n              vibrator.on('vibratorStateChange', this.vibratorStateChangeCallback);\n            } catch (error) {\n              let e: BusinessError = error as BusinessError;\n              console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n            }\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "取消监听,取消传入的callback需与注册的一致。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 回调函数\nvibratorStateChangeCallback = (data: vibrator.VibratorStatusEvent) => {\n  console.info('vibrator state callback info:', JSON.stringify(data));\n  // ...\n}\n// ...\n            try {\n              // 取消订阅 vibratorStateChange事件\n              vibrator.off('vibratorStateChange', this.vibratorStateChangeCallback);\n              // 取消订阅所有 vibratorStateChange事件\n              // vibrator.off('vibratorStateChange');\n            } catch (error) {\n              let e: BusinessError = error as BusinessError;\n              console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n            }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过设备ID和马达ID获取预置振动效果信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  const effectInfo: vibrator.EffectInfo = vibrator.getEffectInfoSync('haptic.clock.timer', { deviceId: -1, vibratorId: 1});\n  console.info(`isEffectSupported: ${effectInfo.isEffectSupported}`);\n  // ...\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查询是否支持高清振动。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  // 查询是否支持高清振动\n  let ret = vibrator.isHdHapticSupported();\n  console.info(`The query result is ${ret}`);\n  // ...\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n"
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
135906(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958482-01bf155e8d47a07ac4f9402186c8767d.png");

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