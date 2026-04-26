"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["554188"], {
915123(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_game_service_kit_guide_gameservice_gameperformance_dev_gameservice_gameperformance_access_procedure_gameservice_gameperformance_access_procedure_md_7b3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-game-service-kit-guide-gameservice-gameperformance-dev-gameservice-gameperformance-access-procedure-gameservice-gameperformance-access-procedure-md-7b3.json
var site_docs_game_service_kit_guide_gameservice_gameperformance_dev_gameservice_gameperformance_access_procedure_gameservice_gameperformance_access_procedure_md_7b3_namespaceObject = JSON.parse('{"id":"game-service-kit-guide/gameservice-gameperformance-dev/gameservice-gameperformance-access-procedure/gameservice-gameperformance-access-procedure","title":"开发指导(ArkTS)","description":"游戏场景感知包括：","source":"@site/docs/game-service-kit-guide/gameservice-gameperformance-dev/gameservice-gameperformance-access-procedure/gameservice-gameperformance-access-procedure.md","sourceDirName":"game-service-kit-guide/gameservice-gameperformance-dev/gameservice-gameperformance-access-procedure","slug":"/game-service-kit-guide/gameservice-gameperformance-dev/gameservice-gameperformance-access-procedure/","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-gameperformance-dev/gameservice-gameperformance-access-procedure/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"开发指导(ArkTS)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gameservice-gameperformance-access-procedure","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开发准备","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-gameperformance-dev/gameservice-gameperformance-config-agc/"},"next":{"title":"开发指导(C/C++)","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-gameperformance-dev/gameservice-gameperformance-access-procedure-c/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/game-service-kit-guide/gameservice-gameperformance-dev/gameservice-gameperformance-access-procedure/gameservice-gameperformance-access-procedure.md


const frontMatter = {
	title: '开发指导(ArkTS)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gameservice-gameperformance-access-procedure',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '开发指导(ArkTS)';

const assets = {

};



const toc = [{
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "接入步骤",
  "id": "接入步骤",
  "level": 2
}, {
  "value": "导入模块",
  "id": "导入模块",
  "level": 3
}, {
  "value": "初始化",
  "id": "初始化",
  "level": 3
}, {
  "value": "订阅设备状态变化",
  "id": "订阅设备状态变化",
  "level": 3
}, {
  "value": "上报游戏信息",
  "id": "上报游戏信息",
  "level": 3
}, {
  "value": "取消订阅设备状态",
  "id": "取消订阅设备状态",
  "level": 3
}, {
  "value": "查询设备状态信息",
  "id": "查询设备状态信息",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "开发指导arkts",
        children: "开发指导(ArkTS)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "游戏场景感知包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Game Service Kit通过游戏提供的精细化场景信息、配置信息和网络信息等数据，以及当前负载情况使用不同策略优化系统资源调度。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Game Service Kit通过感知游戏设备的系统状态信息（包括温度变化趋势数据、GPU性能信息等），并将其反馈给游戏应用，游戏应用可以基于当前设备状态自行调整游戏设置等内容，在系统资源有限的情况下优化玩家的游戏体验。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(436029)/* ["default"] */.A) + "",
        width: "953",
        height: "671"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏启动后调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/game-service-api/gameservice-arkts/gameservice-gameperformance/gameservice-gameperformance#gameperformanceinit",
          children: "gamePerformance.init"
        }), "接口对游戏场景感知进行初始化。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["初始化成功后，游戏调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/game-service-api/gameservice-arkts/gameservice-gameperformance/gameservice-gameperformance#gameperformanceondevicestatechanged",
          children: "gamePerformance.on"
        }), "接口注册设备状态变化事件监听，订阅设备状态变化通知。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/game-service-api/gameservice-arkts/gameservice-gameperformance/gameservice-gameperformance#gameperformanceupdategameinfo",
          children: "gamePerformance.updateGameInfo"
        }), "接口向游戏场景感知上报游戏信息（包信息、配置信息、场景信息和网络信息等）。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "游戏场景感知广播游戏信息给终端系统。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "终端系统根据游戏信息进行系统资源调度。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "终端系统会将设备状态变化通知游戏场景感知。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "游戏场景感知向游戏客户端反馈设备状态变化。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如不再需要订阅，游戏可调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/game-service-api/gameservice-arkts/gameservice-gameperformance/gameservice-gameperformance#gameperformanceoffdevicestatechanged",
          children: "gamePerformance.off"
        }), "接口取消设备状态变化事件监听。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["游戏调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/game-service-api/gameservice-arkts/gameservice-gameperformance/gameservice-gameperformance#gameperformancegetdeviceinfobyscope",
          children: "gamePerformance.getDeviceInfoByScope"
        }), "接口向游戏场景感知主动查询设备状态信息。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(73910)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mali系列GPU不支持采集GPU性能信息，调用订阅和查询设备状态信息接口时无法获取设备GPU性能信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-arkts/gameservice-gameperformance/gameservice-gameperformance",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-arkts/gameservice-gameperformance/gameservice-gameperformance#gameperformanceinit",
              children: "init"
            }), "(gamePackageInfo: GamePackageInfo): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏初始化接口，对游戏场景感知进行初始化，通过Promise对象获取返回值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-arkts/gameservice-gameperformance/gameservice-gameperformance#gameperformanceondevicestatechanged",
              children: "on"
            }), "(type: 'deviceStateChanged', callback: Callback<DeviceInfo>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "订阅设备状态变化接口，主要用于监听deviceStateChanged（设备状态变化）事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-arkts/gameservice-gameperformance/gameservice-gameperformance#gameperformanceondevicestatechanged-1",
              children: "on"
            }), "(type: 'deviceStateChanged', callback: Callback<DeviceInfo>, scope: Array<DeviceInfoType>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按需订阅设备状态变化接口。主要用于监听deviceStateChanged（设备状态变化）事件，支持传入参数指定订阅的设备状态信息类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-arkts/gameservice-gameperformance/gameservice-gameperformance#gameperformanceupdategameinfo",
              children: "updateGameInfo"
            }), "<T extends BaseGameInfo>(gameInfo: T): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新游戏信息接口，主要用于上报游戏信息（包信息、配置信息、场景信息和网络信息等），通过Promise对象获取返回值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-arkts/gameservice-gameperformance/gameservice-gameperformance#gameperformanceoffdevicestatechanged",
              children: "off"
            }), "(type: 'deviceStateChanged', callback?: Callback<DeviceInfo>): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消订阅设备状态变化接口，主要用于取消监听deviceStateChanged（设备状态变化）事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-arkts/gameservice-gameperformance/gameservice-gameperformance#gameperformancegetdeviceinfobyscope",
              children: "getDeviceInfoByScope"
            }), "(scope: Array<DeviceInfoParameter>): Promise<DeviceInfo>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询设备状态信息接口。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接入步骤",
      children: "接入步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导入Game Service Kit及公共模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { gamePerformance } from '@kit.GameServiceKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "初始化",
      children: "初始化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["导入相关模块后，需先调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-arkts/gameservice-gameperformance/gameservice-gameperformance#gameperformanceinit",
        children: "init"
      }), "接口对游戏场景感知进行初始化。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(247974)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "init接口是调用其他接口的前提，如果未初始化或初始化失败，将无法调用其他接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let gamePackageInfo: gamePerformance.GamePackageInfo = {\n  messageType: 0,\n  bundleName: \"com.example.demo\", // 仅示例，请替换为实际的游戏包名\n  appVersion: \"1.0\"\n}\ntry {\n  gamePerformance.init(gamePackageInfo).then(() => {\n    // 初始化成功\n    hilog.info(0x0001, 'demo', `Succeeded in initializing.`);\n  })\n} catch (error) {\n  // 初始化失败\n  let err = error as BusinessError;\n  hilog.error(0x0001, 'demo', `Failed to initialize. Code: ${err.code}, message: ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "订阅设备状态变化",
      children: "订阅设备状态变化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-arkts/gameservice-gameperformance/gameservice-gameperformance#gameperformanceondevicestatechanged",
        children: "on"
      }), "接口可以订阅设备状态变化事件，获取设备状态变化的通知（如设备温控档位）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function onDeviceStateChange(data:gamePerformance.DeviceInfo) {\n  // 设备信息详情\n  hilog.info(0x0001, 'demo', `device state changed. tempLevel is ${data.tempLevel}`);\n}\n\n// 订阅deviceStateChanged事件\ntry {\n  gamePerformance.on('deviceStateChanged', onDeviceStateChange);\n} catch (error) {\n  // 订阅失败\n  let err = error as BusinessError;\n  hilog.error(0x0001, 'demo', `Failed to subscribe. Code: ${err.code}, message: ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["目前支持订阅GPU和温度变化趋势两种类型的设备状态数据，也可以调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-arkts/gameservice-gameperformance/gameservice-gameperformance#gameperformanceondevicestatechanged-1",
        children: "on"
      }), "接口按需订阅，如只订阅GPU数据："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function onDeviceStateChange(data:gamePerformance.DeviceInfo) {\n  // data中仅含有gpuInfo\n  hilog.info(0x0001, 'demo', `device state changed. tempLevel is ${data.tempLevel}`);\n}\n\n// 订阅deviceStateChanged事件\ntry {\n  let types:Array<gamePerformance.DeviceInfoType> = [gamePerformance.DeviceInfoType.GPU];\n  gamePerformance.on('deviceStateChanged', onDeviceStateChange, types);\n} catch (error) {\n  // 订阅失败\n  let err = error as BusinessError;\n  hilog.error(0x0001, 'demo', `Failed to subscribe. Code: ${err.code}, message: ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "上报游戏信息",
      children: "上报游戏信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["初始化成功后，可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-arkts/gameservice-gameperformance/gameservice-gameperformance#gameperformanceupdategameinfo",
        children: "updateGameInfo"
      }), "接口上报游戏信息（包信息、配置信息、场景信息和网络信息等）。若需上报自定义数据，可调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-arkts/gameservice-gameperformance/gameservice-gameperformance#gameperformanceaddgamecustomdata",
        children: "addGameCustomData"
      }), "接口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 以更新游戏场景信息为例\nlet gameSceneInfo: gamePerformance.GameSceneInfo = {\n  messageType: 2,\n  sceneID: 7,\n  importanceLevel: 4\n}\ntry {\n  gamePerformance.updateGameInfo(gameSceneInfo).then(() => {\n    // 更新游戏场景信息成功\n    hilog.info(0x0001, 'demo', `Succeeded in updating.`);\n  });\n} catch (error) {\n  // 更新游戏场景信息失败\n  let err = error as BusinessError;\n  hilog.error(0x0001, 'demo', `Failed to update. Code: ${err.code}, message: ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "取消订阅设备状态",
      children: "取消订阅设备状态"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如不再需要订阅，则可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-arkts/gameservice-gameperformance/gameservice-gameperformance#gameperformanceoffdevicestatechanged",
        children: "off"
      }), "接口取消订阅设备状态。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function onDeviceStateChange(data:gamePerformance.DeviceInfo) {\n  // 设备信息详情\n  hilog.info(0x0001, 'demo', `device state changed. tempLevel is ${data.tempLevel}`);\n}\n\n// 取消订阅deviceStateChanged事件\ntry {\n  gamePerformance.off('deviceStateChanged', onDeviceStateChange);\n} catch (error) {\n  // 取消订阅失败\n  let err = error as BusinessError;\n  hilog.error(0x0001, 'demo', `Failed to unsubscribe. Code: ${err.code}, message: ${err.message}`);\n}\n\n// 取消deviceStateChanged事件的全部订阅\ntry {\n  gamePerformance.off(\"deviceStateChanged\");\n} catch (error) {\n  // 取消订阅失败\n  let err = error as BusinessError;\n  hilog.error(0x0001, 'demo', `Failed to unsubscribe. Code: ${err.code}, message: ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询设备状态信息",
      children: "查询设备状态信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除订阅设备状态变化的方式外，也可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-arkts/gameservice-gameperformance/gameservice-gameperformance#gameperformancegetdeviceinfobyscope",
        children: "getDeviceInfoByScope"
      }), "接口主动查询设备状态："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 查询设备状态\ntry {\n  let gpuParam: gamePerformance.DeviceInfoParameter = {\n    deviceInfoType: gamePerformance.DeviceInfoType.GPU\n  }\n  let thermalParam: gamePerformance.DeviceInfoParameter = {\n    deviceInfoType: gamePerformance.DeviceInfoType.THERMAL\n  }\n  let gameInfos: Array<gamePerformance.DeviceInfoParameter> = [gpuParam, thermalParam];\n  gamePerformance.getDeviceInfoByScope(gameInfos).then((deviceInfo:gamePerformance.DeviceInfo) => {\n    hilog.info(0x0001, 'demo', `Succeeded in querying device info. tempLevel is ${deviceInfo.tempLevel}`);\n  });\n} catch (error) {\n  // 查询失败\n  let err = error as BusinessError;\n  hilog.error(0x0001, 'demo', `Failed to query. Code: ${err.code}, message: ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主动查询接口同样支持按需查询，如只查询温度变化趋势数据："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 只查询设备温度数据\ntry {\n  let thermalParam: gamePerformance.DeviceInfoParameter = {\n    deviceInfoType: gamePerformance.DeviceInfoType.THERMAL\n  }\n  let gameInfos: Array<gamePerformance.DeviceInfoParameter> = [thermalParam];\n  gamePerformance.getDeviceInfoByScope(gameInfos).then((deviceInfo:gamePerformance.DeviceInfo) => {\n    // 此处的查询结果中将不含有gpuInfo\n    hilog.info(0x0001, 'demo', `Succeeded in querying device info. tempLevel is ${deviceInfo.tempLevel}`);\n  });\n} catch (error) {\n  // 查询失败\n  let err = error as BusinessError;\n  hilog.error(0x0001, 'demo', `Failed to query. Code: ${err.code}, message: ${err.message}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(711643)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询温度变化趋势需要历史数据作为计算依据，调用该接口时请保证设备已启动至少一分钟，否则会返回1010300003错误。"
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
436029(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438945-38fd7bd23b323aab2a7f281b22cf9e59.png");

},
73910(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
247974(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
711643(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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