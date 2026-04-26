"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["37986"], {
941565(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_hardware_api_sensor_service_api_sensor_service_arkts_js_apis_vibrator_js_apis_vibrator_md_062_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-hardware-api-sensor-service-api-sensor-service-arkts-js-apis-vibrator-js-apis-vibrator-md-062.json
var site_docs_ref_system_hardware_api_sensor_service_api_sensor_service_arkts_js_apis_vibrator_js_apis_vibrator_md_062_namespaceObject = JSON.parse('{"id":"system-hardware-api/sensor-service-api/sensor-service-arkts/js-apis-vibrator/js-apis-vibrator","title":"@ohos.vibrator (振动)","description":"vibrator模块提供控制设备马达振动的能力。包括启动指定时长、预置效果、自定义文件等模式的振动；停止指定时长、预置效果或所有模式的振动。","source":"@site/docs-ref/system-hardware-api/sensor-service-api/sensor-service-arkts/js-apis-vibrator/js-apis-vibrator.md","sourceDirName":"system-hardware-api/sensor-service-api/sensor-service-arkts/js-apis-vibrator","slug":"/system-hardware-api/sensor-service-api/sensor-service-arkts/js-apis-vibrator/js-apis-vibrator","permalink":"/harmonyos-docs-site/ref/system-hardware-api/sensor-service-api/sensor-service-arkts/js-apis-vibrator/js-apis-vibrator","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"@ohos.vibrator (振动)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-vibrator","kit":"系统","last_updated":"2026-04-22","slug":"js-apis-vibrator"},"sidebar":"ref","previous":{"title":"@ohos.sensor (传感器)","permalink":"/harmonyos-docs-site/ref/system-hardware-api/sensor-service-api/sensor-service-arkts/js-apis-sensor/js-apis-sensor"},"next":{"title":"@system.sensor (传感器)","permalink":"/harmonyos-docs-site/ref/system-hardware-api/sensor-service-api/sensor-service-arkts/js-apis-system-sensor/js-apis-system-sensor"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-hardware-api/sensor-service-api/sensor-service-arkts/js-apis-vibrator/js-apis-vibrator.md


const frontMatter = {
	title: '@ohos.vibrator (振动)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-vibrator',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'js-apis-vibrator'
};
const contentTitle = '@ohos.vibrator (振动)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "vibrator.startVibration9+",
  "id": "vibratorstartvibration9",
  "level": 2
}, {
  "value": "vibrator.startVibration9+",
  "id": "vibratorstartvibration9-1",
  "level": 2
}, {
  "value": "vibrator.stopVibration9+",
  "id": "vibratorstopvibration9",
  "level": 2
}, {
  "value": "vibrator.stopVibration9+",
  "id": "vibratorstopvibration9-1",
  "level": 2
}, {
  "value": "vibrator.stopVibration10+",
  "id": "vibratorstopvibration10",
  "level": 2
}, {
  "value": "vibrator.stopVibration10+",
  "id": "vibratorstopvibration10-1",
  "level": 2
}, {
  "value": "vibrator.stopVibration19+",
  "id": "vibratorstopvibration19",
  "level": 2
}, {
  "value": "vibrator.stopVibrationSync12+",
  "id": "vibratorstopvibrationsync12",
  "level": 2
}, {
  "value": "vibrator.isSupportEffect10+",
  "id": "vibratorissupporteffect10",
  "level": 2
}, {
  "value": "vibrator.isSupportEffect10+",
  "id": "vibratorissupporteffect10-1",
  "level": 2
}, {
  "value": "vibrator.isSupportEffectSync12+",
  "id": "vibratorissupporteffectsync12",
  "level": 2
}, {
  "value": "vibrator.getEffectInfoSync19+",
  "id": "vibratorgeteffectinfosync19",
  "level": 2
}, {
  "value": "vibrator.getVibratorInfoSync19+",
  "id": "vibratorgetvibratorinfosync19",
  "level": 2
}, {
  "value": "vibrator.on19+",
  "id": "vibratoron19",
  "level": 2
}, {
  "value": "vibrator.off19+",
  "id": "vibratoroff19",
  "level": 2
}, {
  "value": "VibratorStatusEvent19+",
  "id": "vibratorstatusevent19",
  "level": 2
}, {
  "value": "VibratorInfoParam19+",
  "id": "vibratorinfoparam19",
  "level": 2
}, {
  "value": "EffectInfo19+",
  "id": "effectinfo19",
  "level": 2
}, {
  "value": "VibratorInfo19+",
  "id": "vibratorinfo19",
  "level": 2
}, {
  "value": "vibrator.isHdHapticSupported12+",
  "id": "vibratorishdhapticsupported12",
  "level": 2
}, {
  "value": "VibratorPatternBuilder18+",
  "id": "vibratorpatternbuilder18",
  "level": 2
}, {
  "value": "vibrator(&#39;addContinuousEvent&#39;)18+",
  "id": "vibratoraddcontinuousevent18",
  "level": 3
}, {
  "value": "vibrator(&#39;addTransientEvent&#39;)18+",
  "id": "vibratoraddtransientevent18",
  "level": 3
}, {
  "value": "vibrator(&#39;build&#39;)18+",
  "id": "vibratorbuild18",
  "level": 3
}, {
  "value": "EffectId",
  "id": "effectid",
  "level": 2
}, {
  "value": "HapticFeedback12+",
  "id": "hapticfeedback12",
  "level": 2
}, {
  "value": "VibratorStopMode",
  "id": "vibratorstopmode",
  "level": 2
}, {
  "value": "VibrateEffect9+",
  "id": "vibrateeffect9",
  "level": 2
}, {
  "value": "VibrateTime9+",
  "id": "vibratetime9",
  "level": 2
}, {
  "value": "VibratePreset9+",
  "id": "vibratepreset9",
  "level": 2
}, {
  "value": "VibrateFromFile10+",
  "id": "vibratefromfile10",
  "level": 2
}, {
  "value": "HapticFileDescriptor10+",
  "id": "hapticfiledescriptor10",
  "level": 2
}, {
  "value": "VibratorEventType18+",
  "id": "vibratoreventtype18",
  "level": 2
}, {
  "value": "VibratorCurvePoint18+",
  "id": "vibratorcurvepoint18",
  "level": 2
}, {
  "value": "VibratorEvent18+",
  "id": "vibratorevent18",
  "level": 2
}, {
  "value": "VibratorPattern18+",
  "id": "vibratorpattern18",
  "level": 2
}, {
  "value": "ContinuousParam18+",
  "id": "continuousparam18",
  "level": 2
}, {
  "value": "TransientParam18+",
  "id": "transientparam18",
  "level": 2
}, {
  "value": "VibrateFromPattern18+",
  "id": "vibratefrompattern18",
  "level": 2
}, {
  "value": "VibrateAttribute9+",
  "id": "vibrateattribute9",
  "level": 2
}, {
  "value": "Usage9+",
  "id": "usage9",
  "level": 2
}, {
  "value": "vibrator.vibrate(deprecated)",
  "id": "vibratorvibratedeprecated",
  "level": 2
}, {
  "value": "vibrator.vibrate(deprecated)",
  "id": "vibratorvibratedeprecated-1",
  "level": 2
}, {
  "value": "vibrator.vibrate(deprecated)",
  "id": "vibratorvibratedeprecated-2",
  "level": 2
}, {
  "value": "vibrator.vibrate(deprecated)",
  "id": "vibratorvibratedeprecated-3",
  "level": 2
}, {
  "value": "vibrator.stop(deprecated)",
  "id": "vibratorstopdeprecated",
  "level": 2
}, {
  "value": "vibrator.stop(deprecated)",
  "id": "vibratorstopdeprecated-1",
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
        id: "ohosvibrator-振动",
        children: "@ohos.vibrator (振动)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "vibrator模块提供控制设备马达振动的能力。包括启动指定时长、预置效果、自定义文件等模式的振动；停止指定时长、预置效果或所有模式的振动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(342694)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 8开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { vibrator } from '@kit.SensorServiceKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratorstartvibration9",
      children: "vibrator.startVibration9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据指定的振动效果和振动属性触发马达振动。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.VIBRATE"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
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
            children: "effect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibrateeffect9",
              children: "VibrateEffect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["马达振动效果，支持四种：  1、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibratepreset9",
              children: "VibratePreset"
            }), "：按照预置振动效果触发马达振动，适用于交互反馈类的短振场景（如点击长按，滑动，拖拽等），为确保与系统整体振感反馈体验风格一致，推荐使用此接口；  2、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibratefromfile10",
              children: "VibrateFromFile"
            }), "：按照文件形式定制自定义振动效果触发马达振动，适用于匹配复杂场景效果的交互反馈（如表情包触发的拟真效果、游戏场景/操作反馈）；  3、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibratetime9",
              children: "VibrateTime"
            }), "：按照指定时长触发马达振动，仅对振动时长进行启动或停止控制，满足基础功能，无法对振动强度、频率等维度进行个性化设置，此种振动调节不够细腻，无法满足精致体验；  4、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibratefrompattern18",
              children: "VibrateFromPattern18+"
            }), "：按照自定义振动效果触发马达振动。使用场景和VibrateFromFile一致。VibrateFromFile是面向文件中提前定制好的效果，将具体的振动事件以文件描述符形式传递到接口中；VibrateFromPattern提供更加灵活的振动事件排列组合，将振动事件以振动事件数组的形式传递到接口中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "attribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibrateattribute9",
              children: "VibrateAttribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "马达振动属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。当马达振动成功，err为undefined；否则为错误对象，包含错误码和错误信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/sensor-service-api/sensor-service-arkts-errcode/errorcode-vibrator/errorcode-vibrator",
        children: "振动错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。错误码和错误信息会以异常的形式抛出，调用接口时需要使用try catch对可能出现的异常进行捕获操作。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error.Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14600101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device operation failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "按照预置振动效果触发马达振动："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { vibrator } from '@kit.SensorServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 使用try catch对可能出现的异常进行捕获\ntry {\n  // 查询是否支持'haptic.notice.success'\n  vibrator.isSupportEffect('haptic.notice.success', (err: BusinessError, state: boolean) => {\n    if (err) {\n      console.error(`Failed to query effect. Code: ${err.code}, message: ${err.message}`);\n      return;\n    }\n    console.info('Succeed in querying effect');\n    if (state) {\n      try {\n        vibrator.startVibration({\n          type: 'preset',\n          effectId: 'haptic.notice.success',\n          count: 1,\n        }, {\n          usage: 'notification' // 根据实际选择类型归属不同的开关管控\n        }, (error: BusinessError) => {\n          if (error) {\n            console.error(`Failed to start vibration. Code: ${error.code}, message: ${error.message}`);\n      return;\n          }\n          console.info('Succeed in starting vibration');\n       \n        });\n      } catch (err) {\n        let e: BusinessError = err as BusinessError;\n    console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n      }\n    }\n  })\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "按照自定义振动配置文件触发马达振动："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { vibrator } from '@kit.SensorServiceKit';\nimport { resourceManager } from '@kit.LocalizationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nconst fileName: string = 'xxx.json';\n\n@Entry\n@Component\nstruct Index {\n  uiContext = this.getUIContext();\n\n  build() {\n    Row() {\n      Column() {\n        Button('alarm-file')\n          .onClick(() => {\n            let rawFd: resourceManager.RawFileDescriptor | undefined = this.uiContext.getHostContext()?.resourceManager.getRawFdSync(fileName);\n            if (rawFd != undefined) {\n              try {\n                vibrator.startVibration({\n                  type: \"file\",\n                  hapticFd: { fd: rawFd.fd, offset: rawFd.offset, length: rawFd.length }\n                }, {\n                  id: 0,\n                  usage: 'alarm' // 根据实际选择类型归属不同的开关管控\n                }, (error: BusinessError) => {\n                  if (error) {\n                    console.error(`Failed to start vibration. Code: ${error.code}, message: ${error.message}`);\n                    return;\n                  }\n                  console.info('Succeed in starting vibration');\n                });\n              } catch (err) {\n                let e: BusinessError = err as BusinessError;\n                console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n              } finally {\n                vibrator.stopVibration();\n                this.uiContext.getHostContext()?.resourceManager.closeRawFdSync(fileName);\n              }\n            }\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "按照指定时长触发马达振动："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { vibrator } from '@kit.SensorServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\ntry {\n  vibrator.startVibration({\n    type: 'time',\n    duration: 1000,\n  }, {\n    id: 0,\n    usage: 'alarm' // 根据实际选择类型归属不同的开关管控\n  }, (error: BusinessError) => {\n    if (error) {\n      console.error(`Failed to start vibration. Code: ${error.code}, message: ${error.message}`);\n      return;\n    }\n    console.info('Succeed in starting vibration');\n  });\n} catch (err) {\n  let e: BusinessError = err as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratorstartvibration9-1",
      children: "vibrator.startVibration9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "startVibration(effect: VibrateEffect, attribute: VibrateAttribute): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据指定的振动效果和振动属性触发马达振动。使用promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.VIBRATE"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
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
            children: "effect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibrateeffect9",
              children: "VibrateEffect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["马达振动效果，支持四种：  1、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibratetime9",
              children: "VibrateTime"
            }), "：按照预置振动效果触发马达振动，适用于交互反馈类的短振场景（如点击长按，滑动，拖拽等），为确保与系统整体振感反馈体验风格一致，推荐使用此接口；  2、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibratepreset9",
              children: "VibratePreset"
            }), "：按照文件形式定制自定义振动效果触发马达振动，适用于匹配复杂场景效果的交互反馈（如表情包触发的拟真效果、游戏场景/操作反馈）；  3、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibratefromfile10",
              children: "VibrateFromFile"
            }), "：按照指定时长触发马达振动，仅对振动时长进行启动或停止控制，满足基础功能，无法对振动强度、频率等维度进行个性化设置，此种振动调节不够细腻，无法满足精致体验；  4、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibratefrompattern18",
              children: "VibrateFromPattern18+"
            }), "：按照自定义振动效果触发马达振动。使用场景和VibrateFromFile一致。VibrateFromFile是面向文件中提前定制好的效果，将具体的振动事件以文件描述符形式传递到接口中；VibrateFromPattern提供更加灵活的振动事件排列组合，将振动事件以振动事件数组的形式传递到接口中。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "attribute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibrateattribute9",
              children: "VibrateAttribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "马达振动属性。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
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
            children: "无返回结果的Promise对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/sensor-service-api/sensor-service-arkts-errcode/errorcode-vibrator/errorcode-vibrator",
        children: "振动错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。错误码和错误信息会以异常的形式抛出，调用接口时需要使用try catch对可能出现的异常进行捕获操作。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error.Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capability not supported."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14600101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device operation failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "按照预置振动效果触发马达振动："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { vibrator } from '@kit.SensorServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 使用try catch对可能出现的异常进行捕获\ntry {\n  // 查询是否支持'haptic.notice.success'\n  vibrator.isSupportEffect('haptic.notice.success', (err: BusinessError, state: boolean) => {\n    if (err) {\n      console.error(`Failed to query effect. Code: ${err.code}, message: ${err.message}`);\n      return;\n    }\n    console.info('Succeed in querying effect');\n    if (state) {\n      try {\n        vibrator.startVibration({\n          type: 'preset',\n          effectId: 'haptic.notice.success',\n          count: 1,\n        }, {\n          usage: 'notification' // 根据实际选择类型归属不同的开关管控\n        }, (error: BusinessError) => {\n          if (error) {\n            console.error(`Failed to start vibration. Code: ${error.code}, message: ${error.message}`);\n            return;\n          }\n          console.info('Succeed in starting vibration');\n       \n        });\n      } catch (err) {\n        let e: BusinessError = err as BusinessError;\n        console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n      }\n    }\n  })\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "按照自定义振动配置文件触发马达振动："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { vibrator } from '@kit.SensorServiceKit';\nimport { resourceManager } from '@kit.LocalizationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nconst fileName: string = 'xxx.json';\n\n@Entry\n@Component\nstruct Index {\n  uiContext = this.getUIContext();\n\n  build() {\n    Row() {\n      Column() {\n        Button('alarm-file')\n          .onClick(() => {\n            let rawFd: resourceManager.RawFileDescriptor | undefined = this.uiContext.getHostContext()?.resourceManager.getRawFdSync(fileName);\n            if (rawFd != undefined) {\n              try {\n                vibrator.startVibration({\n                  type: \"file\",\n                  hapticFd: { fd: rawFd.fd, offset: rawFd.offset, length: rawFd.length }\n                }, {\n                  id: 0,\n                  usage: 'alarm' // 根据实际选择类型归属不同的开关管控\n                }, (error: BusinessError) => {\n                  if (error) {\n                    console.error(`Failed to start vibration. Code: ${error.code}, message: ${error.message}`);\n                    return;\n                  }\n                  console.info('Succeed in starting vibration');\n                });\n              } catch (err) {\n                let e: BusinessError = err as BusinessError;\n                console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n              } finally {\n                vibrator.stopVibration();\n                this.uiContext.getHostContext()?.resourceManager.closeRawFdSync(fileName);\n              }\n            }\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "按照指定时长触发马达振动："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { vibrator } from '@kit.SensorServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\ntry {\n  vibrator.startVibration({\n    type: 'time',\n    duration: 1000\n  }, {\n    id: 0,\n    usage: 'alarm' // 根据实际选择类型归属不同的开关管控\n  }).then(() => {\n    console.info('Succeed in starting vibration');\n  }, (error: BusinessError) => {\n    console.error(`Failed to start vibration. Code: ${error.code}, message: ${error.message}`);\n  });\n} catch (err) {\n  let e: BusinessError = err as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratorstopvibration9",
      children: "vibrator.stopVibration9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stopVibration(stopMode: VibratorStopMode, callback: AsyncCallback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按照指定模式停止马达振动。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.VIBRATE"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
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
            children: "stopMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibratorstopmode",
              children: "VibratorStopMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定的停止振动模式，支持两种：  VIBRATOR_STOP_MODE_TIME：停止固定时长振动；  VIBRATOR_STOP_MODE_PRESET：停止预置振动。  此接口无法停止自定义振动，请使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibratorstopvibration10",
              children: "vibrator.stopVibration10+"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，当马达停止振动成功，err为undefined，否则为错误对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。错误码和错误信息会以异常的形式抛出，调用接口时需要使用try catch对可能出现的异常进行捕获操作。"]
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
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error.Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "停止指定时长振动："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { vibrator } from '@kit.SensorServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 使用try catch对可能出现的异常进行捕获\ntry {\n  // 按照指定时长振动\n  vibrator.startVibration({\n    type: 'time',\n    duration: 1000,\n  }, {\n    id: 0,\n    usage: 'alarm' // 根据实际选择类型归属不同的开关管控\n  }, (error: BusinessError) => {\n    if (error) {\n      console.error(`Failed to start vibration. Code: ${error.code}, message: ${error.message}`);\n      return;\n    }\n    console.info('Succeed in starting vibration');\n  });\n} catch (err) {\n  let e: BusinessError = err as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n\ntry {\n  // 按照VIBRATOR_STOP_MODE_TIME模式停止振动\n  vibrator.stopVibration(vibrator.VibratorStopMode.VIBRATOR_STOP_MODE_TIME, (error: BusinessError) => {\n    if (error) {\n      console.error(`Failed to stop vibration. Code: ${error.code}, message: ${error.message}`);\n      return;\n    }\n    console.info('Succeed in stopping vibration');\n  })\n} catch (err) {\n  let e: BusinessError = err as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "停止预置振动："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { vibrator } from '@kit.SensorServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\ntry {\n  // 按照预置效果振动\n  vibrator.startVibration({\n    type: 'preset',\n    effectId: 'haptic.notice.success',\n    count: 1,\n  }, {\n    id: 0,\n    usage: 'notification' // 根据实际选择类型归属不同的开关管控\n  }, (error: BusinessError) => {\n    if (error) {\n      console.error(`Failed to start vibration. Code: ${error.code}, message: ${error.message}`);\n      return;\n    }\n    console.info('Succeed in starting vibration');\n  });\n} catch (err) {\n  let e: BusinessError = err as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n\ntry {\n  // 按照VIBRATOR_STOP_MODE_PRESET模式停止振动\n  vibrator.stopVibration(vibrator.VibratorStopMode.VIBRATOR_STOP_MODE_PRESET, (error: BusinessError) => {\n    if (error) {\n      console.error(`Failed to stop vibration. Code: ${error.code}, message: ${error.message}`);\n      return;\n    }\n    console.info('Succeed in stopping vibration');\n  })\n} catch (err) {\n  let e: BusinessError = err as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratorstopvibration9-1",
      children: "vibrator.stopVibration9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stopVibration(stopMode: VibratorStopMode): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按照指定模式停止马达的振动。使用promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.VIBRATE"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
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
            children: "stopMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibratorstopmode",
              children: "VibratorStopMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持停止两种指定的振动模式：  VIBRATOR_STOP_MODE_TIME：停止指定时长振动；  VIBRATOR_STOP_MODE_PRESET：停止预置振动。  此接口无法停止自定义振动，请使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibratorstopvibration10-1",
              children: "vibrator.stopVibration10+"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
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
            children: "Promise对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。错误码和错误信息会以异常的形式抛出，调用接口时需要使用try catch对可能出现的异常进行捕获操作。"]
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
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error.Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "停止指定时长振动："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { vibrator } from '@kit.SensorServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 使用try catch对可能出现的异常进行捕获\ntry {\n  // 按照指定时长振动\n  vibrator.startVibration({\n    type: 'time',\n    duration: 1000,\n  }, {\n    id: 0,\n    usage: 'alarm' // 根据实际选择类型归属不同的开关管控\n  }).then(() => {\n    console.info('Succeed in starting vibration');\n  }, (error: BusinessError) => {\n    console.error(`Failed to start vibration. Code: ${error.code}, message: ${error.message}`);\n  });\n} catch (err) {\n  let e: BusinessError = err as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n\ntry {\n  // 按照VIBRATOR_STOP_MODE_TIME模式停止振动\n  vibrator.stopVibration(vibrator.VibratorStopMode.VIBRATOR_STOP_MODE_TIME).then(() => {\n    console.info('Succeed in stopping vibration');\n  }, (error: BusinessError) => {\n    console.error(`Failed to stop vibration. Code: ${error.code}, message: ${error.message}`);\n  });\n} catch (err) {\n  let e: BusinessError = err as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "停止预置振动："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { vibrator } from '@kit.SensorServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\ntry {\n  // 按照预置效果振动\n  vibrator.startVibration({\n    type: 'preset',\n    effectId: 'haptic.notice.success',\n    count: 1,\n  }, {\n    id: 0,\n    usage: 'notification' // 根据实际选择类型归属不同的开关管控\n  }).then(() => {\n    console.info('Succeed in starting vibration');\n  }, (error: BusinessError) => {\n    console.error(`Failed to start vibration. Code: ${error.code}, message: ${error.message}`);\n  });\n} catch (err) {\n  let e: BusinessError = err as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n\ntry {\n  // 按照VIBRATOR_STOP_MODE_PRESET模式停止振动\n  vibrator.stopVibration(vibrator.VibratorStopMode.VIBRATOR_STOP_MODE_PRESET).then(() => {\n    console.info('Succeed in stopping vibration');\n  }, (error: BusinessError) => {\n    console.error(`Failed to stop vibration. Code: ${error.code}, message: ${error.message}`);\n  });\n} catch (err) {\n  let e: BusinessError = err as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratorstopvibration10",
      children: "vibrator.stopVibration10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stopVibration(callback: AsyncCallback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "停止所有模式的马达振动。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.VIBRATE"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
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
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，当马达停止振动成功，err为undefined，否则为错误对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。错误码和错误信息会以异常的形式抛出，调用接口时需要使用try catch对可能出现的异常进行捕获操作。"]
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
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { vibrator } from '@kit.SensorServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 使用try catch对可能出现的异常进行捕获\ntry {\n  // 停止所有模式的马达振动\n  vibrator.stopVibration((error: BusinessError) => {\n    if (error) {\n      console.error(`Failed to stop vibration. Code: ${error.code}, message: ${error.message}`);\n      return;\n    }\n    console.info('Succeed in stopping vibration');\n  })\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratorstopvibration10-1",
      children: "vibrator.stopVibration10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stopVibration(): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "停止所有模式的马达振动。使用promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.VIBRATE"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
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
            children: "Promise对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。错误码和错误信息会以异常的形式抛出，调用接口时需要使用try catch对可能出现的异常进行捕获操作。"]
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
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { vibrator } from '@kit.SensorServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 使用try catch对可能出现的异常进行捕获\ntry {\n  // 停止所有模式的马达振动\n  vibrator.stopVibration().then(() => {\n    console.info('Succeed in stopping vibration');\n  }, (error: BusinessError) => {\n    console.error(`Failed to stop vibration. Code: ${error.code}, message: ${error.message}`);\n  });\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratorstopvibration19",
      children: "vibrator.stopVibration19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stopVibration(param?: VibratorInfoParam): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不传参默认停止本地设备所有马达的振动，也可传递参数停止指定设备马达振动。使用promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.VIBRATE"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
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
            children: "param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibratorinfoparam19",
              children: "VibratorInfoParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指出需要控制的设备和马达信息，不传参默认控制的为本地设备的全部马达"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
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
            children: "Promise对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。错误码和错误信息会以异常的形式抛出，调用接口时需要使用try catch对可能出现的异常进行捕获操作。"]
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
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14600101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device operation failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { vibrator } from '@kit.SensorServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nfunction vibratorDemo() {\n  // 查询所有马达设备信息。\n  const vibratorInfoList: vibrator.VibratorInfo[] = vibrator.getVibratorInfoSync();\n  // 根据实际业务逻辑获取目标马达, 例如查找本地马达，此处示例仅做展示，开发者需要自行调整筛选逻辑。\n  const targetVibrator = vibratorInfoList.find((vibrator: vibrator.VibratorInfo) => {\n    return vibrator.isLocalVibrator;\n  });\n  if (!targetVibrator) {\n    return;\n  }\n  // 调用 vibrator.startVibration 开始振动。\n  // ...\n\n  // 使用try catch对可能出现的异常进行捕获。\n  try {\n    // 根据实际业务场景停止马达振动。\n    vibrator.stopVibration({ deviceId: targetVibrator.deviceId, vibratorId: targetVibrator.vibratorId }).then(() => {\n      console.info('Succeed in stopping vibration');\n    }, (error: BusinessError) => {\n      console.error(`Failed to stop vibration. Code: ${error.code}, message: ${error.message}`);\n    });\n  } catch (error) {\n    let e: BusinessError = error as BusinessError;\n    console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratorstopvibrationsync12",
      children: "vibrator.stopVibrationSync12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stopVibrationSync(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "停止任何形式的马达振动。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.VIBRATE"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/sensor-service-api/sensor-service-arkts-errcode/errorcode-vibrator/errorcode-vibrator",
        children: "振动错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。错误码和错误信息会以异常的形式抛出，调用接口时需要使用try catch对可能出现的异常进行捕获操作。"]
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
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14600101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device operation failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { vibrator } from '@kit.SensorServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 使用try catch对可能出现的异常进行捕获\ntry {\n  // 停止任何形式的马达振动\n  vibrator.stopVibrationSync()\n  console.info('Succeed in stopping vibration');\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratorissupporteffect10",
      children: "vibrator.isSupportEffect10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isSupportEffect(effectId: string, callback: AsyncCallback<boolean>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询是否支持传入参数effectId。使用callback异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
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
            children: "effectId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待确认的预置振动效果，字符串最大长度64，超出截取64。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，当返回true则表示支持该effectId，返回false不支持。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。错误码和错误信息会以异常的形式抛出，调用接口时需要使用try catch对可能出现的异常进行捕获操作。"]
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
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error.Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { vibrator } from '@kit.SensorServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 使用try catch对可能出现的异常进行捕获\ntry {\n  // 查询是否支持'haptic.notice.success'\n  vibrator.isSupportEffect('haptic.notice.success', (err: BusinessError, state: boolean) => {\n    if (err) {\n      console.error(`Failed to query effect. Code: ${err.code}, message: ${err.message}`);\n      return;\n    }\n    console.info('Succeed in querying effect');\n    if (state) {\n      try {\n        // 使用startVibration需要添加ohos.permission.VIBRATE权限\n        vibrator.startVibration({\n          type: 'preset',\n          effectId: 'haptic.notice.success',\n          count: 1,\n        }, {\n          usage: 'unknown' // 根据实际选择类型归属不同的开关管控\n        }, (error: BusinessError) => {\n          if (error) {\n            console.error(`Failed to start vibration. Code: ${error.code}, message: ${error.message}`);\n          } else {\n            console.info('Succeed in starting vibration');\n          }\n        });\n      } catch (error) {\n        let e: BusinessError = error as BusinessError;\n        console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n      }\n    }\n  })\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratorissupporteffect10-1",
      children: "vibrator.isSupportEffect10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isSupportEffect(effectId: string): Promise<boolean>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询是否支持传入参数effectId。使用promise异步回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
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
            children: "effectId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待确认的预置振动效果，字符串最大长度64，超出截取64。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
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
            children: "Promise对象。当返回true则表示支持该effectId，返回false不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。错误码和错误信息会以异常的形式抛出，调用接口时需要使用try catch对可能出现的异常进行捕获操作。"]
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
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error.Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { vibrator } from '@kit.SensorServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 使用try catch对可能出现的异常进行捕获\ntry {\n  // 查询是否支持'haptic.notice.success'\n  vibrator.isSupportEffect('haptic.notice.success').then((state: boolean) => {\n    console.info(`The query result is ${state}`);\n    if (state) {\n      try {\n        vibrator.startVibration({\n          type: 'preset',\n          effectId: 'haptic.notice.success',\n          count: 1,\n        }, {\n          usage: 'unknown' // 根据实际选择类型归属不同的开关管控\n        }).then(() => {\n          console.info('Succeed in starting vibration');\n        }).catch((error: BusinessError) => {\n          console.error(`Failed to start vibration. Code: ${error.code}, message: ${error.message}`);\n        });\n      } catch (error) {\n        let e: BusinessError = error as BusinessError;\n        console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n      }\n    }\n  }, (error: BusinessError) => {\n    console.error(`Failed to query effect. Code: ${error.code}, message: ${error.message}`);\n  })\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratorissupporteffectsync12",
      children: "vibrator.isSupportEffectSync12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isSupportEffectSync(effectId: string): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询是否支持预设的振动效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
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
            children: "effectId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待确认的预置振动效果，字符串最大长度64，超出截取64。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回对象。当返回true则表示支持该effectId，返回false不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/sensor-service-api/sensor-service-arkts-errcode/errorcode-vibrator/errorcode-vibrator",
        children: "振动错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。错误码和错误信息会以异常的形式抛出，调用接口时需要使用try catch对可能出现的异常进行捕获操作。"]
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
            children: "Parameter error.Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14600101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device operation failed."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { vibrator } from '@kit.SensorServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 使用try catch对可能出现的异常进行捕获\ntry {\n  // 查询是否支持预设'haptic.notice.success'\n  let ret = vibrator.isSupportEffectSync('haptic.notice.success');\n  console.info(`The query result is ${ret}`);\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratorgeteffectinfosync19",
      children: "vibrator.getEffectInfoSync19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getEffectInfoSync(effectId: string, param?: VibratorInfoParam): EffectInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过设备ID和可控马达ID获取预置振动效果信息，用于判断该预置振动效果是否受支持。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
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
            children: "effectId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "待确认的预置振动效果，字符串最大长度64，超出截取64。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibratorinfoparam19",
              children: "VibratorInfoParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指出需要查询的设备和马达信息，默认查询的是本地设备。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/sensor-service-api/sensor-service-arkts-errcode/errorcode-vibrator/errorcode-vibrator",
        children: "振动错误码"
      }), "。错误码和错误信息会以异常的形式抛出，调用接口时需要使用try catch对可能出现的异常进行捕获操作。"]
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
            children: "14600101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device operation failed."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
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
              href: "#effectinfo19",
              children: "EffectInfo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该信息包括指示是否支持该效果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { vibrator } from '@kit.SensorServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 使用try catch对可能出现的异常进行捕获\ntry {\n  const effectInfo: vibrator.EffectInfo = vibrator.getEffectInfoSync('haptic.clock.timer', { deviceId: 1, vibratorId: 3});\n  console.info(`isEffectSupported: ${effectInfo.isEffectSupported}`);\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratorgetvibratorinfosync19",
      children: "vibrator.getVibratorInfoSync19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getVibratorInfoSync(param?: VibratorInfoParam): Array<VibratorInfo>;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询一个或所有设备的马达信息列表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
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
            children: "param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibratorinfoparam19",
              children: "VibratorInfoParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指出需要控制的设备和马达信息,不传参默认查询所有设备所有马达的信息"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
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
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibratorinfo19",
              children: "VibratorInfo"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "马达设备的信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { vibrator } from '@kit.SensorServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\ntry {\n  const vibratorInfoList: vibrator.VibratorInfo[] = vibrator.getVibratorInfoSync({ deviceId: 1, vibratorId: 3 });\n  console.info(`vibratorInfoList: ${JSON.stringify(vibratorInfoList)}`);\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratoron19",
      children: "vibrator.on19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "on(type: 'vibratorStateChange', callback: Callback<VibratorStatusEvent>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册一个回调函数，在马达上线或下线时触发回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
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
            children: "'vibratorStateChange'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听类型，该值固定为vibratorStateChange。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibratorstatusevent19",
              children: "VibratorStatusEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，回调参数数据为VibratorStatusEvent。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/sensor-service-api/sensor-service-arkts-errcode/errorcode-vibrator/errorcode-vibrator",
        children: "振动错误码"
      }), "。错误码和错误信息会以异常的形式抛出，调用接口时需要使用try catch对可能出现的异常进行捕获操作。"]
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
            children: "14600101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device operation failed."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { vibrator } from '@kit.SensorServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 回调函数\nconst vibratorStateChangeCallback = (data: vibrator.VibratorStatusEvent) => {\n  console.info('vibrator state callback info:', JSON.stringify(data));\n}\n\n// 使用try catch对可能出现的异常进行捕获\ntry {\n  // 订阅 vibratorStateChange事件\n  vibrator.on('vibratorStateChange', vibratorStateChangeCallback);\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratoroff19",
      children: "vibrator.off19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "off(type: 'vibratorStateChange', callback?: Callback<VibratorStatusEvent>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注销马达上线或下线事件的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
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
            children: "'vibratorStateChange'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听类型，该值固定为vibratorStateChange。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibratorstatusevent19",
              children: "VibratorStatusEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，回调参数数据为VibratorStatusEvent，不填此参数则为注销所有callback"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/sensor-service-api/sensor-service-arkts-errcode/errorcode-vibrator/errorcode-vibrator",
        children: "振动错误码"
      }), "。错误码和错误信息会以异常的形式抛出，调用接口时需要使用try catch对可能出现的异常进行捕获操作。"]
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
            children: "14600101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device operation failed."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { vibrator } from '@kit.SensorServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 回调函数\nconst vibratorStateChangeCallback = (data: vibrator.VibratorStatusEvent) => {\n  console.info('vibrator state callback info:', JSON.stringify(data));\n}\n// 使用try catch对可能出现的异常进行捕获\ntry {\n  // 取消订阅 vibratorStateChange事件\n  vibrator.off('vibratorStateChange', vibratorStateChangeCallback);\n  // 取消订阅所有 vibratorStateChange事件\n  // vibrator.off('vibratorStateChange');\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratorstatusevent19",
      children: "VibratorStatusEvent19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "振动设备上线、下线状态事件信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "timestamp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "报告事件的时间戳，单位ms。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备的ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "vibratorCount"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备上的马达的数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isVibratorOnline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指示设备的上线和下线状态，true表示上线，false表示下线。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratorinfoparam19",
      children: "VibratorInfoParam19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备上马达的参数。默认情况下，VibratorInfoParam默认为查询或控制本地全部马达。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
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
            children: "deviceId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备的ID：默认值为-1，表示本地设备，API19以后设备ID可以使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibratorgetvibratorinfosync19",
              children: "getVibratorInfoSync"
            }), "或设备上下线接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibratoron19",
              children: "on"
            }), "查询。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "vibratorId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["马达ID：默认值为0，控制的是该设备的全部马达，API19以后马达ID可以使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibratorgetvibratorinfosync19",
              children: "getVibratorInfoSync"
            }), "设备上下线接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibratoron19",
              children: "on"
            }), "查询。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "effectinfo19",
      children: "EffectInfo19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询的预制效果信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
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
            children: "isEffectSupported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预制效果是否支持，true表示支持，false表示不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratorinfo19",
      children: "VibratorInfo19+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示查询的马达信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
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
            children: "deviceId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "vibratorId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "马达ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isHdHapticSupported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持高清振动，true为支持，false为不支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "isLocalVibrator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否为本地设备，true为本地设备，false为非本地设备。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratorishdhapticsupported12",
      children: "vibrator.isHdHapticSupported12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "isHdHapticSupported(): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询是否支持高清振动。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回对象，当返回true表示支持高清振动，返回false不支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-hardware-api/sensor-service-api/sensor-service-arkts-errcode/errorcode-vibrator/errorcode-vibrator",
        children: "振动错误码"
      }), "。错误码和错误信息会以异常的形式抛出，调用接口时需要使用try catch对可能出现的异常进行捕获操作。"]
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
            children: "14600101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device operation failed."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { vibrator } from '@kit.SensorServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 使用try catch对可能出现的异常进行捕获\ntry {\n  // 查询是否支持高清振动\n  let ret = vibrator.isHdHapticSupported();\n  console.info(`The query result is ${ret}`);\n} catch (error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratorpatternbuilder18",
      children: "VibratorPatternBuilder18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vibratoraddcontinuousevent18",
      children: "vibrator('addContinuousEvent')18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "addContinuousEvent(time: number, duration: number, options?: ContinuousParam): VibratorPatternBuilder;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加长振事件的方法成VibratorPattern对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
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
            children: "time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长振事件的起始时间。单位ms，取值范围[0,1800000]区间内所有整数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长振事件的持续时间。单位ms，取值范围(0,5000]区间内所有整数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#continuousparam18",
              children: "ContinuousParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，可选参数对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
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
            children: "VibratorPatternBuilder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回已添加连续振动事件的VibratorPatternBuilder对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。错误码和错误信息会以异常的形式抛出，调用接口时需要使用try catch对可能出现的异常进行捕获操作。"]
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error.Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { vibrator } from '@kit.SensorServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet builder = new vibrator.VibratorPatternBuilder();\n// 使用try catch对可能出现的异常进行捕获\ntry {\n  let pointsMe: vibrator.VibratorCurvePoint[] = [\n    { time: 0, intensity: 0, frequency: -7 },\n    { time: 42, intensity: 1, frequency: -6 },\n    { time: 128, intensity: 0.94, frequency: -4 },\n    { time: 217, intensity: 0.63, frequency: -14 },\n    { time: 763, intensity: 0.48, frequency: -14 },\n    { time: 1125, intensity: 0.53, frequency: -10 },\n    { time: 1503, intensity: 0.42, frequency: -14 },\n    { time: 1858, intensity: 0.39, frequency: -14 },\n    { time: 2295, intensity: 0.34, frequency: -17 },\n    { time: 2448, intensity: 0.21, frequency: -14 },\n    { time: 2468, intensity: 0, frequency: -21 }\n  ] // VibratorCurvePoint参数最少设置4个，最大设置16个\n  let param: vibrator.ContinuousParam = {\n    intensity: 97,\n    frequency: 34,\n    points:pointsMe,\n    index: 0\n  }\n  builder.addContinuousEvent(0, 2468, param);\n  console.info(`addContinuousEvent builder is ${builder.build()}`);\n} catch(error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`Exception. Code ${e.code}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vibratoraddtransientevent18",
      children: "vibrator('addTransientEvent')18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "addTransientEvent(time: number, options?: TransientParam): VibratorPatternBuilder;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加短振事件的方法成VibratorPattern对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
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
            children: "time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "短振事件的起始时间。单位ms，取值范围[0,1800000]区间内所有整数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#transientparam18",
              children: "TransientParam"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，可选参数对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
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
            children: "VibratorPatternBuilder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回已添加短振事件的VibratorPatternBuilder对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。错误码和错误信息会以异常的形式抛出，调用接口时需要使用try catch对可能出现的异常进行捕获操作。"]
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
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error.Possible causes:1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { vibrator } from '@kit.SensorServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet builder = new vibrator.VibratorPatternBuilder();\n// 使用try catch对可能出现的异常进行捕获\ntry {\n  let param: vibrator.TransientParam = {\n    intensity: 80,\n    frequency: 70,\n    index: 0\n  }\n  builder.addTransientEvent(0, param);\n  console.info(`addTransientEvent builder is ${builder.build()}`);\n} catch(error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vibratorbuild18",
      children: "vibrator('build')18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "build(): VibratorPattern;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "构造组合短事件或长事件的振动序列的方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
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
              href: "#vibratorpattern18",
              children: "VibratorPattern"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "构造组合短振或长振的振动序列方法。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { vibrator } from '@kit.SensorServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet builder = new vibrator.VibratorPatternBuilder();\ntry {\n  let param: vibrator.TransientParam = {\n    intensity: 80,\n    frequency: 70,\n    index: 0\n  }\n  builder.addTransientEvent(0, param);\n  console.info(`addTransientEvent builder is ${builder.build()}`);\n} catch(error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\ntry {\n  vibrator.startVibration({\n    type: \"pattern\",\n    pattern: builder.build()\n  }, {\n  usage: \"alarm\", // 根据实际选择类型归属不同的开关管控\n  }, (error) => {\n  if (error) {\n    let e: BusinessError = error as BusinessError;\n    console.error(`Vibrate fail. Code: ${e.code}, message: ${e.message}`);\n  } else {\n    console.info(`vibrate success`);\n  }\n  });\n} catch(error) {\n  let e: BusinessError = error as BusinessError;\n  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "effectid",
      children: "EffectId"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["预置的振动效果。在调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#vibratorstartvibration9",
        children: "vibrator.startVibration9+"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "#vibratorstopvibration9-1",
        children: "vibrator.stopVibration9+"
      }), "接口下发", (0,jsx_runtime.jsx)(_components.a, {
        href: "#vibratepreset9",
        children: "VibratePreset"
      }), "形式振动的时候需要使用此参数类型。此参数值种类多样，'haptic.clock.timer'为其中一种。", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hapticfeedback12",
        children: "HapticFeedback12+"
      }), "展示了几种常用的EffectId值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(235407)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于设备存在多样性，不同的设备可能预置不同的效果，建议使用预置效果前先使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#vibratorissupporteffect10-1",
        children: "vibrator.isSupportEffect"
      }), "10+接口查询当前设备是否支持该预置效果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
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
            children: "EFFECT_CLOCK_TIMER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'haptic.clock.timer'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述用户调整计时器时的振动效果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hapticfeedback12",
      children: "HapticFeedback12+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["简单而通用的振动效果。根据各设备的马达器件不同，同一振动效果的频率会有差异，但效果的频率趋向是统一的。这几种振动效果是EffectId参数的具体值，使用方法参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#vibratorstartvibration9",
        children: "vibrator.startVibration9+"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "#vibratorstopvibration9-1",
        children: "vibrator.stopVibration9+"
      }), "接口下发", (0,jsx_runtime.jsx)(_components.a, {
        href: "#vibratepreset9",
        children: "VibratePreset"
      }), "形式振动的示例代码。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
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
            children: "EFFECT_SOFT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'haptic.effect.soft'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "较松散的振动效果，频率偏低。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFFECT_HARD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'haptic.effect.hard'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "较沉重的振动效果，频率居中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFFECT_SHARP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'haptic.effect.sharp'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "较尖锐的振动效果，频率偏高。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFFECT_NOTICE_SUCCESS18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'haptic.notice.success'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表达成功通知的振动效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFFECT_NOTICE_FAILURE18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'haptic.notice.fail'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表达失败通知的振动效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EFFECT_NOTICE_WARNING18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'haptic.notice.warning'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表达警告通知的振动效果。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratorstopmode",
      children: "VibratorStopMode"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["停止振动的模式。在调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#vibratorstopvibration9",
        children: "vibrator.stopVibration9+"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "#vibratorstopvibration9-1",
        children: "vibrator.stopVibration9+"
      }), "接口时，需要使用此参数类型指定停止的振动模式。停止模式和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#vibrateeffect9",
        children: "VibrateEffect9+"
      }), "中下发的模式为对应关系。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
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
            children: "VIBRATOR_STOP_MODE_TIME"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'time'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止duration模式的振动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VIBRATOR_STOP_MODE_PRESET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'preset'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "停止预置EffectId的振动。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibrateeffect9",
      children: "VibrateEffect9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type VibrateEffect = VibrateTime | VibratePreset | VibrateFromFile | VibrateFromPattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["马达振动效果，支持以下四种：在调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#vibratorstartvibration9",
        children: "vibrator.startVibration9+"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "#vibratorstartvibration9-1",
        children: "vibrator.startVibration9+"
      }), "接口时，此参数的四种类型表示以四种不同的形式触发振动。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibratetime9",
              children: "VibrateTime"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["按照指定时长触发马达振动。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibratepreset9",
              children: "VibratePreset"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按照预置振动类型触发马达振动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibratefromfile10",
              children: "VibrateFromFile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按照自定义振动配置文件触发马达振动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibratefrompattern18",
              children: "VibrateFromPattern18+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按照自定义振动效果触发马达振动。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratetime9",
      children: "VibrateTime9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指定时长振动类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 11开始，该接口在支持元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'time'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值为'time'，按照指定时长触发马达振动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "马达持续振动时长, 单位ms。取值范围(0,1800000]区间内所有整数。由于实际产品厂商驱动对器件保护设计规格不同，不同设备实际最大振动时长会有差异。单次触发长振动一般建议不超过10秒，以最大化用户体验。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratepreset9",
      children: "VibratePreset9+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["预置振动类型。当调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#vibratorstartvibration9",
        children: "vibrator.startVibration9+"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "#vibratorstartvibration9-1",
        children: "vibrator.startVibration9+"
      }), "时，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#vibrateeffect9",
        children: "VibrateEffect9+"
      }), "参数的值可以为VibratePreset，表示触发预置振动类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "'preset'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值为'preset'，按照预置振动效果触发马达振动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "effectId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预置的振动效果ID，字符串最大长度64，超出截取64。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，振动的重复次数，默认值为1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "intensity12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，振动调节强度，取值范围(0,100]内所有整数，默认值为100。若振动效果不支持强度调节或设备不支持时，则按默认强度振动。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratefromfile10",
      children: "VibrateFromFile10+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自定义振动类型。仅部分设备支持。当设备不支持此振动类型时，返回设备不支持错误码。当调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#vibratorstartvibration9",
        children: "vibrator.startVibration9+"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "#vibratorstartvibration9-1",
        children: "vibrator.startVibration9+"
      }), "时，", (0,jsx_runtime.jsx)(_components.a, {
        href: "#vibrateeffect9",
        children: "VibrateEffect9+"
      }), "参数的值可以为VibrateFromFile，表示触发自定义振动类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'file'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值为'file'，按照振动配置文件触发马达振动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hapticFd"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#hapticfiledescriptor10",
              children: "HapticFileDescriptor"
            }), "10+"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "振动配置文件的描述符。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hapticfiledescriptor10",
      children: "HapticFileDescriptor10+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自定义振动配置文件的描述符，必须确认资源文件可用，其参数可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs#fileioopen",
        children: "fileIo.open"
      }), "从沙箱路径获取或者通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/localization-api/localization-arkts/js-apis-resource-manager/js-apis-resource-manager#getrawfd9",
        children: "getRawFd"
      }), "从HAP资源获取。使用场景：振动序列被存储在一个文件中，需要根据偏移量和长度进行振动，振动序列存储格式，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-hardware/sensor-service-kit/vibrator/vibrator-guidelines#%E6%8C%AF%E5%8A%A8%E6%95%88%E6%9E%9C%E8%AF%B4%E6%98%8E",
        children: "振动效果说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "fd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源文件描述符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "offset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "距文件起始位置的偏移量，单位为字节，默认为文件起始位置，不可超出文件有效范围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源长度，单位为字节，默认值为从偏移位置至文件结尾的长度，不可超出文件有效范围。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratoreventtype18",
      children: "VibratorEventType18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "振动事件类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
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
            children: "CONTINUOUS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示长振。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TRANSIENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示短振。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratorcurvepoint18",
      children: "VibratorCurvePoint18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相对事件振动强度的增益。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "起始时间偏移，单位ms。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "intensity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，相对事件振动强度增益，取值范围[0,100%]，省略时默认值为1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "frequency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，相对事件振动频率变化，取值范围[-100,100]内所有整数，省略时默认值为0。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratorevent18",
      children: "VibratorEvent18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "振动事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
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
            children: "eventType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VibratorEventType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "振动事件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "振动起始时间，单位ms。取值范围[0,1800000]区间内所有整数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，表示振动持续时间，单位ms，取值范围（0,5000]区间所有整数，短振默认值为48，长振默认值为1000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "intensity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，表示振动强度，取值范围[0,100]区间所有整数，省略时默认值为100。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "frequency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，表示振动频率，取值范围[0,100]区间内所有整数，省略时默认值为50。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，表示通道编号，取值范围[0,2]区间内所有整数，省略时默认值为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "points"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibratorcurvepoint18",
              children: "VibratorCurvePoint"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，表示振动调节曲线数组。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratorpattern18",
      children: "VibratorPattern18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "马达振动序列，每个events代表一个振动事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
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
            children: "time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "振动绝对起始时间，单位ms。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "events"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibratorevent18",
              children: "VibratorEvent"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "振动事件数组，build()方法返回的VibratorPattern对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "continuousparam18",
      children: "ContinuousParam18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "连续振动参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "intensity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，表示振动强度，取值范围[0,100]内所有整数，省略时默认值为100。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "frequency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，表示振动频率，取值范围[0,100]内所有整数，省略时默认值为50。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "points"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#vibratorcurvepoint18",
              children: "VibratorCurvePoint"
            }), "[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，表示振动调节曲线数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，表示通道编号，取值范围[0,2]区间内所有整数，省略时默认值为0。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "transientparam18",
      children: "TransientParam18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "瞬态振动参数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "intensity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，表示振动强度，取值范围[0,100]内所有整数，省略时默认值为100。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "frequency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，表示振动频率，取值范围[0,100]内所有整数，省略时默认值为50。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选参数，表示通道编号，取值范围[0,2]区间内所有整数，省略时默认值为0。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratefrompattern18",
      children: "VibrateFromPattern18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义振动效果触发马达振动。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
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
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'pattern'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值为“pattern”，根据组合模式触发电机振动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VibratorPattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "振动事件数组，build()方法返回的VibratorPattern对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibrateattribute9",
      children: "VibrateAttribute9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "马达振动属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "马达ID， 默认值为0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceId19+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设备ID，默认值为-1，表示本地设备，API19以后设备ID可以使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibratorgetvibratorinfosync19",
              children: "getVibratorInfoSync"
            }), "或设备上下线接口", (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibratoron19",
              children: "on"
            }), "查询。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API"
              })
            }), "：从API version 19开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#usage9",
              children: "Usage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["马达振动的使用场景。默认值为'unknown'，取值范围只允许在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#usage9",
              children: "Usage"
            }), "提供的类型中选取。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "usage9",
      children: "Usage9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Usage = 'unknown' | 'alarm' | 'ring' | 'notification' | 'communication' | 'touch' | 'media' | 'physicalFeedback' | 'simulateReality'"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "振动使用场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API"
        })
      }), "：从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'unknown'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "没有明确使用场景，最低优先级，值固定为'unknown'字符串。受触感开关管控，关闭时不振动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'alarm'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于警报场景，值固定为'alarm'字符串。受三态开关管控，静音时不振动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'ring'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于铃声场景，值固定为'ring'字符串。受三态开关管控，静音时不振动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'notification'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于通知场景，值固定为'notification'字符串。受三态开关管控，静音时不振动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'communication'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于通信场景，值固定为'communication'字符串。受三态开关管控，静音时不振动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'touch'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于触摸场景，值固定为'touch'字符串。 受触感开关管控，关闭时不振动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'media'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于多媒体场景，值固定为'media'字符串。受触感开关管控，关闭时不振动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'physicalFeedback'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于物理反馈场景，值固定为'physicalFeedback'字符串。受触感开关管控，关闭时不振动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "'simulateReality'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于模拟现实场景，值固定为'simulateReality'字符串。受触感开关管控，关闭时不振动。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratorvibratedeprecated",
      children: "vibrator.vibrate(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "vibrate(duration: number): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按照指定持续时间触发马达振动。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 8 开始支持，从API version 9 开始废弃，建议使用 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#vibratorstartvibration9-1",
        children: "vibrator.startVibration"
      }), "9+代替。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.VIBRATE"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
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
            children: "duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "马达振动时长, 单位ms；取值范围是（0,1800000]区间的所有整数。由于实际产品厂商驱动对器件保护设计规格不同，不同设备实际最大振动时长会有差异。单次触发长振动一般建议不超过10秒，以最大化用户体验。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
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
            children: "Promise对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { vibrator } from '@kit.SensorServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nvibrator.vibrate(1000).then(() => {\n  console.info('Succeed in vibrating');\n}, (error: BusinessError) => {\n  console.error(`Failed to vibrate. Code: ${error.code}, message: ${error.message}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratorvibratedeprecated-1",
      children: "vibrator.vibrate(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "vibrate(duration: number, callback?: AsyncCallback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按照指定持续时间触发马达振动。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 8 开始支持，从API version 9 开始废弃，建议使用 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#vibratorstartvibration9",
        children: "vibrator.startVibration"
      }), "9+代替。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.VIBRATE"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
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
            children: "duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "马达振动时长, 单位ms。取值范围是（0,1800000]区间的所有整数。由于实际产品厂商驱动对器件保护设计规格不同，不同设备实际最大振动时长会有差异。单次触发长振动一般建议不超过10秒，以最大化用户体验。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，当马达振动成功，err为undefined，否则为错误对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { vibrator } from '@kit.SensorServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nvibrator.vibrate(1000, (error: BusinessError) => {\n  if (error) {\n    console.error(`Failed to vibrate. Code: ${error.code}, message: ${error.message}`);\n  } else {\n    console.info('Succeed in vibrating');\n  }\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratorvibratedeprecated-2",
      children: "vibrator.vibrate(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "vibrate(effectId: EffectId): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按照预置振动效果触发马达振动。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 8 开始支持，从API version 9 开始废弃，建议使用 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#vibratorstartvibration9-1",
        children: "vibrator.startVibration"
      }), "9+代替。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.VIBRATE"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
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
            children: "effectId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#effectid",
              children: "EffectId"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预置的振动效果ID，字符串最大长度64，超出截取64，建议先查询是否支持。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
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
            children: "Promise对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { vibrator } from '@kit.SensorServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nvibrator.vibrate(vibrator.EffectId.EFFECT_CLOCK_TIMER).then(() => {\n  console.info('Succeed in vibrating');\n}, (error: BusinessError) => {\n  console.error(`Failed to vibrate. Code: ${error.code}, message: ${error.message}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratorvibratedeprecated-3",
      children: "vibrator.vibrate(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "vibrate(effectId: EffectId, callback?: AsyncCallback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按照指定振动效果触发马达振动。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 8 开始支持，从API version 9 开始废弃，建议使用 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#vibratorstartvibration9",
        children: "vibrator.startVibration"
      }), "9+代替。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.VIBRATE"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
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
            children: "effectId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#effectid",
              children: "EffectId"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "预置的振动效果ID，字符串最大长度64，超出截取64，建议先查询是否支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，当马达振动成功，err为undefined，否则为错误对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { vibrator } from '@kit.SensorServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nvibrator.vibrate(vibrator.EffectId.EFFECT_CLOCK_TIMER, (error: BusinessError) => {\n  if (error) {\n    console.error(`Failed to vibrate. Code: ${error.code}, message: ${error.message}`);\n  } else {\n    console.info('Succeed in vibrating');\n  }\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratorstopdeprecated",
      children: "vibrator.stop(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stop(stopMode: VibratorStopMode): Promise<void>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按照指定模式停止马达的振动。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 8 开始支持，从API version 9 开始废弃，建议使用 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#vibratorstopvibration9-1",
        children: "vibrator.stopVibration"
      }), "9+代替。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.VIBRATE"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
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
            children: "stopMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibratorstopmode",
              children: "VibratorStopMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "马达停止指定的振动模式。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值"
        })
      }), "："]
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
            children: "Promise对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { vibrator } from '@kit.SensorServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 按照effectId类型启动振动\nvibrator.vibrate(vibrator.EffectId.EFFECT_CLOCK_TIMER, (error: BusinessError) => {\n  if (error) {\n    console.error(`Failed to vibrate. Code: ${error.code}, message: ${error.message}`);\n  } else {\n    console.info('Succeed in vibrating');\n  }\n})\n// 使用VIBRATOR_STOP_MODE_PRESET模式停止振动\nvibrator.stop(vibrator.VibratorStopMode.VIBRATOR_STOP_MODE_PRESET).then(() => {\n  console.info('Succeed in stopping');\n}, (error: BusinessError) => {\n  console.error(`Failed to stop. Code: ${error.code}, message: ${error.message}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vibratorstopdeprecated-1",
      children: "vibrator.stop(deprecated)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stop(stopMode: VibratorStopMode, callback?: AsyncCallback<void>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "按照指定模式停止马达的振动。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 8 开始支持，从API version 9 开始废弃，建议使用 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "#vibratorstopvibration9",
        children: "vibrator.stopVibration"
      }), "9+代替。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.VIBRATE"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Sensors.MiscDevice"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数"
        })
      }), "："]
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
            children: "stopMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#vibratorstopmode",
              children: "VibratorStopMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "马达停止指定的振动模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数，当马达停止振动成功，err为undefined，否则为错误对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { vibrator } from '@kit.SensorServiceKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n// 按照effectId类型启动振动\nvibrator.vibrate(vibrator.EffectId.EFFECT_CLOCK_TIMER, (error: BusinessError) => {\n  if (error) {\n    console.error(`Failed to vibrate. Code: ${error.code}, message: ${error.message}`);\n  } else {\n    console.info('Succeed in vibrating');\n  }\n})\n// 使用VIBRATOR_STOP_MODE_PRESET模式停止振动\nvibrator.stop(vibrator.VibratorStopMode.VIBRATOR_STOP_MODE_PRESET, (error: BusinessError) => {\n  if (error) {\n    console.error(`Failed to stop. Code: ${error.code}, message: ${error.message}`);\n  } else {\n    console.info('Succeed in stopping');\n  }\n})\n"
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
342694(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
235407(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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