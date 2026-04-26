"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["764003"], {
629639(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_game_service_kit_guide_gameservice_gameperformance_dev_gameservice_gameperformance_access_procedure_c_gameservice_gameperformance_access_procedure_c_md_89b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-game-service-kit-guide-gameservice-gameperformance-dev-gameservice-gameperformance-access-procedure-c-gameservice-gameperformance-access-procedure-c-md-89b.json
var site_docs_game_service_kit_guide_gameservice_gameperformance_dev_gameservice_gameperformance_access_procedure_c_gameservice_gameperformance_access_procedure_c_md_89b_namespaceObject = JSON.parse('{"id":"game-service-kit-guide/gameservice-gameperformance-dev/gameservice-gameperformance-access-procedure-c/gameservice-gameperformance-access-procedure-c","title":"开发指导(C/C++)","description":"游戏场景感知包括：","source":"@site/docs/game-service-kit-guide/gameservice-gameperformance-dev/gameservice-gameperformance-access-procedure-c/gameservice-gameperformance-access-procedure-c.md","sourceDirName":"game-service-kit-guide/gameservice-gameperformance-dev/gameservice-gameperformance-access-procedure-c","slug":"/game-service-kit-guide/gameservice-gameperformance-dev/gameservice-gameperformance-access-procedure-c/","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-gameperformance-dev/gameservice-gameperformance-access-procedure-c/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"开发指导(C/C++)","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gameservice-gameperformance-access-procedure-c","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开发指导(ArkTS)","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-gameperformance-dev/gameservice-gameperformance-access-procedure/"},"next":{"title":"概述","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-nearbytransfer-dev/gameservice-nearbytransfer-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/game-service-kit-guide/gameservice-gameperformance-dev/gameservice-gameperformance-access-procedure-c/gameservice-gameperformance-access-procedure-c.md


const frontMatter = {
	title: '开发指导(C/C++)',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/gameservice-gameperformance-access-procedure-c',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '开发指导(C/C++)';

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
  "value": "在 CMake 脚本中链接动态库",
  "id": "在-cmake-脚本中链接动态库",
  "level": 3
}, {
  "value": "导入模块",
  "id": "导入模块",
  "level": 3
}, {
  "value": "初始化",
  "id": "初始化",
  "level": 3
}, {
  "value": "注册温度变化回调",
  "id": "注册温度变化回调",
  "level": 3
}, {
  "value": "取消注册指定温度变化回调",
  "id": "取消注册指定温度变化回调",
  "level": 3
}, {
  "value": "取消注册所有温度变化回调",
  "id": "取消注册所有温度变化回调",
  "level": 3
}, {
  "value": "上报游戏包信息",
  "id": "上报游戏包信息",
  "level": 3
}, {
  "value": "上报游戏配置信息",
  "id": "上报游戏配置信息",
  "level": 3
}, {
  "value": "上报游戏场景信息",
  "id": "上报游戏场景信息",
  "level": 3
}, {
  "value": "上报游戏网络信息",
  "id": "上报游戏网络信息",
  "level": 3
}, {
  "value": "上报游戏玩家信息",
  "id": "上报游戏玩家信息",
  "level": 3
}, {
  "value": "查询GPU性能信息",
  "id": "查询gpu性能信息",
  "level": 3
}, {
  "value": "查询CPU性能信息",
  "id": "查询cpu性能信息",
  "level": 3
}, {
  "value": "查询温度相关信息",
  "id": "查询温度相关信息",
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
        id: "开发指导cc",
        children: "开发指导(C/C++)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "游戏场景感知包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Game Service Kit通过游戏提供的精细化场景信息、配置信息和网络信息等数据，以及当前负载情况使用不同策略优化系统资源调度。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Game Service Kit通过感知游戏设备的系统状态信息（包括温度变化趋势数据、GPU性能信息和CPU性能信息等），并将其反馈给游戏应用，游戏应用可以基于当前设备状态自行调整游戏设置等内容，在系统资源有限的情况下优化玩家的游戏体验。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(765350)/* ["default"] */.A) + "",
        width: "953",
        height: "671"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["游戏启动后调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_init",
            children: "HMS_GamePerformance_Init"
          }), "接口对游戏场景感知进行初始化。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["初始化成功后，游戏调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_registerthermallevelchangedcallback",
            children: "HMS_GamePerformance_RegisterThermalLevelChangedCallback"
          }), "接口注册设备状态变化事件监听，订阅设备状态变化通知。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "游戏调用以下接口向游戏场景感知上报各种游戏信息。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["包信息：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_updatepackageinfo",
              children: "HMS_GamePerformance_UpdatePackageInfo"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["配置信息：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_updateconfiginfo",
              children: "HMS_GamePerformance_UpdateConfigInfo"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["场景信息：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_updatesceneinfo",
              children: "HMS_GamePerformance_UpdateSceneInfo"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["网络信息：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_updatenetinfo",
              children: "HMS_GamePerformance_UpdateNetInfo"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["玩家信息：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_updateplayerinfo",
              children: "HMS_GamePerformance_UpdatePlayerInfo"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "游戏场景感知广播游戏信息给终端系统。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "终端系统根据游戏信息进行系统资源调度。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "终端系统会将设备状态变化通知游戏场景感知。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "游戏场景感知向游戏客户端反馈设备状态变化。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如不再需要订阅，游戏可调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_unregisterthermallevelchangedcallback",
            children: "HMS_GamePerformance_UnregisterThermalLevelChangedCallback"
          }), "接口或", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_unregisterallthermallevelchangedcallbacks",
            children: "HMS_GamePerformance_UnregisterAllThermalLevelChangedCallbacks"
          }), "接口取消设备状态变化事件监听。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "游戏调用以下接口向游戏场景感知主动查询设备状态信息。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["设备GPU性能信息：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_querygpuinfo",
              children: "HMS_GamePerformance_QueryGpuInfo"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["设备CPU性能信息：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_querycpuinfo",
              children: "HMS_GamePerformance_QueryCpuInfo"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["设备温度相关信息：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_querythermalinfo",
              children: "HMS_GamePerformance_QueryThermalInfo"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(269364)/* ["default"] */.A) + "",
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
        href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_init",
              children: "HMS_GamePerformance_Init"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_initparameters",
              children: "GamePerformance_InitParameters"
            }), " *initParameters)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏初始化接口，对游戏场景感知进行初始化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_registerthermallevelchangedcallback",
              children: "HMS_GamePerformance_RegisterThermalLevelChangedCallback"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_deviceinfotype-1",
              children: "GamePerformance_DeviceInfoType"
            }), " *types[], size_t size, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermallevelchangedcallback",
              children: "GamePerformance_ThermalLevelChangedCallback"
            }), " callback, void *userData)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册温度变化回调接口，当达到触发点时，将调用回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_updatepackageinfo",
              children: "HMS_GamePerformance_UpdatePackageInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), " *packageInfo)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新游戏包信息接口，用于上报游戏包信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_updateconfiginfo",
              children: "HMS_GamePerformance_UpdateConfigInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), " *configInfo)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新游戏配置信息接口，用于上报游戏配置信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_updatesceneinfo",
              children: "HMS_GamePerformance_UpdateSceneInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新游戏场景信息接口，用于上报游戏场景信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_updatenetinfo",
              children: "HMS_GamePerformance_UpdateNetInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), " *netInfo)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新游戏网络信息接口，用于上报游戏网络信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_updateplayerinfo",
              children: "HMS_GamePerformance_UpdatePlayerInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_playerinfo",
              children: "GamePerformance_PlayerInfo"
            }), " *playerInfo)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新游戏玩家信息接口，用于上报游戏玩家信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_unregisterthermallevelchangedcallback",
              children: "HMS_GamePerformance_UnregisterThermalLevelChangedCallback"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermallevelchangedcallback",
              children: "GamePerformance_ThermalLevelChangedCallback"
            }), " callback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册指定温度变化回调接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_unregisterallthermallevelchangedcallbacks",
              children: "HMS_GamePerformance_UnregisterAllThermalLevelChangedCallbacks"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册所有温度变化回调接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_querythermalinfo",
              children: "HMS_GamePerformance_QueryThermalInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermalinfoqueryparameters",
              children: "GamePerformance_ThermalInfoQueryParameters"
            }), " *parameters, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), " **thermalInfo)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询温度信息接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_querygpuinfo",
              children: "HMS_GamePerformance_QueryGpuInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), " **gpuInfo)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询GPU性能信息接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_querycpuinfo",
              children: "HMS_GamePerformance_QueryCpuInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_cpuinfo",
              children: "GamePerformance_CpuInfo"
            }), " **cpuInfo)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询CPU性能信息接口。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接入步骤",
      children: "接入步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在-cmake-脚本中链接动态库",
      children: "在 CMake 脚本中链接动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_include_directories(entry PUBLIC ${HMOS_SDK_NATIVE}/sysroot/usr/include)\ntarget_link_directories(entry PUBLIC ${HMOS_SDK_NATIVE}/sysroot/usr/lib/aarch64-linux-ohos)\ntarget_link_libraries(entry PUBLIC libgame_performance.z.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "导入Game Service Kit。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <GameServiceKit/game_performance.h>\n#include <cstdlib>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "初始化",
      children: "初始化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["导入相关模块后，需先调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_init",
        children: "HMS_GamePerformance_Init"
      }), "接口对游戏场景感知进行初始化。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(496128)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HMS_GamePerformance_Init接口是调用其他接口的前提，如果未初始化或初始化失败，将无法调用其他接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建初始化参数\nGamePerformance_InitParameters *initParameters = NULL;\nHMS_GamePerformance_CreateInitParameters(&initParameters);\n\n// 设置参数，所有SetXXX接口的第二个参数均为示例，请替换成实际参数\nGamePerformance_ErrorCode appVersionSetCode = HMS_GamePerformance_InitParameters_SetAppVersion(initParameters, \"1.0\");\n\n// 所有SetXXX接口，如果参数设置错误，将会返回错误码401；为确保参数设置无误，建议接收返回值并判断错误码\nif (appVersionSetCode != GAME_PERFORMANCE_SUCCESS) {\n    // 异常处理\n}\nHMS_GamePerformance_InitParameters_SetBundleName(initParameters, \"com.example.demo\");\n \n// 初始化\nGamePerformance_ErrorCode ret = HMS_GamePerformance_Init(initParameters);\nif (ret != GAME_PERFORMANCE_SUCCESS) {\n    // 异常处理\n}\n\n// 使用完释放内存\nHMS_GamePerformance_DestroyInitParameters(&initParameters);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "注册温度变化回调",
      children: "注册温度变化回调"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_registerthermallevelchangedcallback",
        children: "HMS_GamePerformance_RegisterThermalLevelChangedCallback"
      }), "接口可以注册温度变化回调，获取设备状态信息的通知，包括温度相关信息、GPU负载和CPU负载信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 定义回调函数\nstatic void onThermalLevelChanged(GamePerformance_DeviceInfo *deviceInfo, void *userData) {\n    // 获取GPU负载等级（须订阅设备信息类型：GAME_PERFORMANCE_DEVICEINFO_TYPE_GPU）\n    (void) userData;\n    GamePerformance_GpuInfo *gpuInfo = NULL;\n    HMS_GamePerformance_DeviceInfo_GetGpuInfo(deviceInfo, &gpuInfo);\n    int32_t gpuloadLevel = -1;\n    int32_t vertexLevel = -1;\n    int32_t fragmentLoadLevel = -1;\n    int32_t bandwidthLoadLevel = -1;\n    int32_t textureLoadLevel = -1;\n    int32_t currentFrequency = -1;\n    HMS_GamePerformance_GpuInfo_GetGpuLoadLevel(gpuInfo, &gpuloadLevel);\n    HMS_GamePerformance_GpuInfo_GetVertexLoadLevel(gpuInfo, &vertexLevel);\n    HMS_GamePerformance_GpuInfo_GetFragmentLoadLevel(gpuInfo, &fragmentLoadLevel);\n    HMS_GamePerformance_GpuInfo_GetBandwidthLoadLevel(gpuInfo, &bandwidthLoadLevel);\n    HMS_GamePerformance_GpuInfo_GetTextureLoadLevel(gpuInfo, &textureLoadLevel);\n    HMS_GamePerformance_GpuInfo_GetCurrentFrequency(gpuInfo, &currentFrequency);\n\n    // 获取温度相关信息（须订阅设备信息类型：GAME_PERFORMANCE_DEVICEINFO_TYPE_THERMAL）\n    GamePerformance_ThermalInfo *thermalInfo = NULL;\n    HMS_GamePerformance_DeviceInfo_GetThermalInfo(deviceInfo, &thermalInfo);\n    int32_t margin = INT32_MIN;\n    int32_t trend = INT32_MIN;\n    int32_t level = -1;\n    int32_t recommendNormalizedCurrent = 0;\n    int32_t nowNormalizedCurrent = 0;\n    int32_t recommendMaxNormalizedCurrent = 0;\n    HMS_GamePerformance_ThermalInfo_GetThermalMargin(thermalInfo, &margin);\n    HMS_GamePerformance_ThermalInfo_GetThermalTrend(thermalInfo, &trend);\n    HMS_GamePerformance_ThermalInfo_GetThermalLevel(thermalInfo, &level);\n    HMS_GamePerformance_ThermalInfo_GetRecommendNormalizedCurrent(thermalInfo, &recommendNormalizedCurrent);\n    HMS_GamePerformance_ThermalInfo_GetNowNormalizedCurrent(thermalInfo, &nowNormalizedCurrent);\n    HMS_GamePerformance_ThermalInfo_GetRecommendMaxNormalizedCurrent(thermalInfo, &recommendMaxNormalizedCurrent);\n\n    // 获取CPU使用率（须订阅设备信息类型：GAME_PERFORMANCE_DEVICEINFO_TYPE_CPU）\n    GamePerformance_CpuInfo *cpuInfo = NULL;\n    HMS_GamePerformance_DeviceInfo_GetCpuInfo(deviceInfo, &cpuInfo);\n    int32_t cpuLoadLevel = 0;\n    int32_t singleThreadLoadLevel = 0;\n    HMS_GamePerformance_CpuInfo_GetCpuLoadLevel(cpuInfo, &cpuLoadLevel);\n    HMS_GamePerformance_CpuInfo_GetSingleThreadLoadLevel(cpuInfo, &singleThreadLoadLevel);\n\n    // 使用完释放内存\n    HMS_GamePerformance_DestroyGpuInfo(&gpuInfo);\n    HMS_GamePerformance_DestroyThermalInfo(&thermalInfo);\n    HMS_GamePerformance_DestroyCpuInfo(&cpuInfo);\n}\n\n// 注册回调\nvoid registerCallback() {\n    // 按需订阅设备信息类型\n    int size = 2; // 订阅的设备信息类型的数量，即下文array数组的长度\n    GamePerformance_DeviceInfoType **array = (GamePerformance_DeviceInfoType **)malloc(sizeof(GamePerformance_DeviceInfoType *) * size);\n    if (array == NULL) {\n        // 异常处理\n    }\n    array[0] = (GamePerformance_DeviceInfoType *)malloc(sizeof(GamePerformance_DeviceInfoType));\n    array[1] = (GamePerformance_DeviceInfoType *)malloc(sizeof(GamePerformance_DeviceInfoType));\n    if (!array[0] || !array[1]) {\n        // 异常处理\n    }\n    *(array[0]) = GAME_PERFORMANCE_DEVICEINFO_TYPE_GPU;\n    *(array[1]) = GAME_PERFORMANCE_DEVICEINFO_TYPE_THERMAL;\n    void *userData = (void *)\"mydata\"; // 用户自定义任意类型，callback透传返回\n    GamePerformance_ErrorCode ret =\n        HMS_GamePerformance_RegisterThermalLevelChangedCallback(array, size, onThermalLevelChanged, userData);\n    free(array);\n    if (ret != GAME_PERFORMANCE_SUCCESS) {\n        // 异常处理\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "取消注册指定温度变化回调",
      children: "取消注册指定温度变化回调"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_unregisterthermallevelchangedcallback",
        children: "HMS_GamePerformance_UnregisterThermalLevelChangedCallback"
      }), "接口可以取消注册指定温度变化回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 取消注册\nGamePerformance_ErrorCode ret = HMS_GamePerformance_UnregisterThermalLevelChangedCallback(onThermalLevelChanged);\nif (ret != GAME_PERFORMANCE_SUCCESS) {\n    // 异常处理\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "取消注册所有温度变化回调",
      children: "取消注册所有温度变化回调"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_unregisterallthermallevelchangedcallbacks",
        children: "HMS_GamePerformance_UnregisterAllThermalLevelChangedCallbacks"
      }), "接口可以取消注册所有温度变化回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 取消所有注册的函数\nGamePerformance_ErrorCode ret = HMS_GamePerformance_UnregisterAllThermalLevelChangedCallbacks();\nif (ret != GAME_PERFORMANCE_SUCCESS) {\n    // 异常处理\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "上报游戏包信息",
      children: "上报游戏包信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["初始化成功后，可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_updatepackageinfo",
        children: "HMS_GamePerformance_UpdatePackageInfo"
      }), "接口上报游戏包信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_PackageInfo *packageInfo = NULL;\nHMS_GamePerformance_CreatePackageInfo(&packageInfo);\n\n// SetXXX接口的第二个参数均为示例，请替换成实际参数\n// 设置必选参数\nHMS_GamePerformance_PackageInfo_SetBundleName(packageInfo, \"com.example.demo\");\nHMS_GamePerformance_PackageInfo_SetAppVersion(packageInfo, \"1.0\");\n\n// 按需设置可选参数\nHMS_GamePerformance_PackageInfo_SetEngineType(packageInfo, GAME_PERFORMANCE_ENGINE_TYPE_COCOS);\nHMS_GamePerformance_PackageInfo_SetEngineVersion(packageInfo, \"2.0\");\nHMS_GamePerformance_PackageInfo_SetGameType(packageInfo, GAME_PERFORMANCE_GAME_TYPE_FPS);\n\n// 上报游戏包信息\nGamePerformance_ErrorCode ret = HMS_GamePerformance_UpdatePackageInfo(packageInfo);\nif (ret != GAME_PERFORMANCE_SUCCESS) {\n    // 异常处理\n}\n\n// 使用完释放内存\nHMS_GamePerformance_DestroyPackageInfo(&packageInfo);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "上报游戏配置信息",
      children: "上报游戏配置信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["初始化成功后，可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_updateconfiginfo",
        children: "HMS_GamePerformance_UpdateConfigInfo"
      }), "接口上报游戏配置信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GamePerformance_ConfigInfo *configInfo = NULL;\nHMS_GamePerformance_CreateConfigInfo(&configInfo);\n\n// 如需多次上报，若使用同一个实例上报，只需通过set方法更新参数即可（同一个实例将保留上一次设置的数据）\n// SetXXX接口的第二个参数均为示例，请替换成实际参数\n// 按需设置下列可选字段\nHMS_GamePerformance_ConfigInfo_SetMaxPictureQualityLevel(configInfo, GAME_PERFORMANCE_PQL_BALANCED);\nHMS_GamePerformance_ConfigInfo_SetCurrentPictureQualityLevel(configInfo, GAME_PERFORMANCE_PQL_HD);\nHMS_GamePerformance_ConfigInfo_SetMaxFrameRate(configInfo, 120);\nHMS_GamePerformance_ConfigInfo_SetCurrentFrameRate(configInfo, 60);\nHMS_GamePerformance_ConfigInfo_SetMaxResolution(configInfo, \"1260*2720\");\nHMS_GamePerformance_ConfigInfo_SetCurrentResolution(configInfo, \"1260*2720\");\nHMS_GamePerformance_ConfigInfo_SetAntiAliasingEnabled(configInfo, true);\nHMS_GamePerformance_ConfigInfo_SetShadowEnabled(configInfo, true);\nHMS_GamePerformance_ConfigInfo_SetMultithreadingEnabled(configInfo, true);\nHMS_GamePerformance_ConfigInfo_SetParticleEnabled(configInfo, true);\nHMS_GamePerformance_ConfigInfo_SetHdModeEnabled(configInfo, true);\n\n// 上报游戏配置信息\nGamePerformance_ErrorCode ret = HMS_GamePerformance_UpdateConfigInfo(configInfo);\nif (ret != GAME_PERFORMANCE_SUCCESS) {\n    // 异常处理\n}\n\n// 使用完释放内存\nHMS_GamePerformance_DestroyConfigInfo(&configInfo);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "上报游戏场景信息",
      children: "上报游戏场景信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["初始化成功后，可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_updatesceneinfo",
        children: "HMS_GamePerformance_UpdateSceneInfo"
      }), "接口上报游戏场景信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// SetXXX接口的第二个参数均为示例，请替换成实际参数\nGamePerformance_SceneInfo *sceneInfo = NULL;\nHMS_GamePerformance_CreateSceneInfo(&sceneInfo);\n\n// 如需多次上报，若使用同一个实例上报，只需通过set方法更新参数即可（同一个实例将保留上一次设置的数据）\n// 设置必选字段\nHMS_GamePerformance_SceneInfo_SetSceneID(sceneInfo, 1);\nHMS_GamePerformance_SceneInfo_SetImportanceLevel(sceneInfo, GAME_PERFORMANCE_SIL_LEVEL1);\n\n// 按需设置下列可选字段\nHMS_GamePerformance_SceneInfo_SetDescription(sceneInfo, \"this is description of scene\");\nHMS_GamePerformance_SceneInfo_SetSubSceneID(sceneInfo, \"20101020304\");\nHMS_GamePerformance_SceneInfo_SetSubDescription(sceneInfo, \"this is description of subScene\");\nHMS_GamePerformance_SceneInfo_SetSceneFrequency(sceneInfo, 2);\nHMS_GamePerformance_SceneInfo_SetSceneTime(sceneInfo, 15);\nHMS_GamePerformance_SceneInfo_SetRecommendedCpuLevel(sceneInfo, GAME_PERFORMANCE_CPU_LEVEL_HIGH);\nHMS_GamePerformance_SceneInfo_SetRecommendedGpuLevel(sceneInfo, GAME_PERFORMANCE_GPU_LEVEL_HIGH);\nHMS_GamePerformance_SceneInfo_SetRecommendedDdrLevel(sceneInfo, GAME_PERFORMANCE_DDR_LEVEL_HIGH);\nHMS_GamePerformance_SceneInfo_SetKeyThread(sceneInfo, \"render\");\nHMS_GamePerformance_SceneInfo_SetDrawCallCount(sceneInfo, 100);\nHMS_GamePerformance_SceneInfo_SetVertexCount(sceneInfo, 100);\nHMS_GamePerformance_SceneInfo_SetTriangleCount(sceneInfo, 100);\nHMS_GamePerformance_SceneInfo_SetShaderCount(sceneInfo, 100);\nHMS_GamePerformance_SceneInfo_SetTextureCount(sceneInfo, 100);\nHMS_GamePerformance_SceneInfo_SetMeshCount(sceneInfo, 100);\nHMS_GamePerformance_SceneInfo_SetChannelCount(sceneInfo, 100);\nHMS_GamePerformance_SceneInfo_SetParticipantCount(sceneInfo, 5);\n\n// 上报游戏场景信息\nGamePerformance_ErrorCode ret = HMS_GamePerformance_UpdateSceneInfo(sceneInfo);\nif (ret != GAME_PERFORMANCE_SUCCESS) {\n    // 异常处理\n}\n\n// 使用完释放内存\nHMS_GamePerformance_DestroySceneInfo(&sceneInfo);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "上报游戏网络信息",
      children: "上报游戏网络信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["初始化成功后，可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_updatenetinfo",
        children: "HMS_GamePerformance_UpdateNetInfo"
      }), "接口上报游戏网络信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// SetXXX接口的第二个参数均为示例，请替换成实际参数\nGamePerformance_NetInfo *netInfo = NULL;\nHMS_GamePerformance_CreateNetInfo(&netInfo);\n\n// 如需多次上报，若使用同一个实例上报，只需通过set方法更新参数即可（同一个实例将保留上一次设置的数据）\n// 设置必选字段\nHMS_GamePerformance_NetInfo_SetTotalLatency(netInfo, 60);\n\n// 按需设置下列可选字段\nHMS_GamePerformance_NetInfo_SetNetLoad(netInfo, GAME_PERFORMANCE_NET_LOAD_HEAVY);\nHMS_GamePerformance_NetInfo_SetUplinkLatency(netInfo, 10);\nHMS_GamePerformance_NetInfo_SetDownlinkLatency(netInfo, 20);\nHMS_GamePerformance_NetInfo_SetServerLatency(netInfo, 30);\n\n// 上报游戏网络信息\nGamePerformance_ErrorCode ret = HMS_GamePerformance_UpdateNetInfo(netInfo);\nif (ret != GAME_PERFORMANCE_SUCCESS) {\n    // 异常处理\n}\n\n// 使用完释放内存\nHMS_GamePerformance_DestroyNetInfo(&netInfo);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "上报游戏玩家信息",
      children: "上报游戏玩家信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["初始化成功后，可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_updateplayerinfo",
        children: "HMS_GamePerformance_UpdatePlayerInfo"
      }), "接口上报游戏玩家信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// SetXXX接口的第二个参数均为示例，请替换成实际参数\nGamePerformance_PlayerInfo *playerInfo = NULL;\nHMS_GamePerformance_CreatePlayerInfo(&playerInfo);\n\n// 下列三个参数至少设置一个\nHMS_GamePerformance_PlayerInfo_SetGamePlayerId(playerInfo, \"43JIOdok74***3980sd9453\");\nHMS_GamePerformance_PlayerInfo_SetTeamPlayerId(playerInfo, \"s2546dgs38***374dgwa5g3\");\nHMS_GamePerformance_PlayerInfo_SetThirdOpenId(playerInfo, \"k854Cs367***937efwhi03\");\n\n// 上报游戏玩家信息\nGamePerformance_ErrorCode ret = HMS_GamePerformance_UpdatePlayerInfo(playerInfo);\nif (ret != GAME_PERFORMANCE_SUCCESS) {\n    // 异常处理\n}\n\n// 使用完释放内存\nHMS_GamePerformance_DestroyPlayerInfo(&playerInfo);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询gpu性能信息",
      children: "查询GPU性能信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除订阅设备状态变化的方式外，也可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_querygpuinfo",
        children: "HMS_GamePerformance_QueryGpuInfo"
      }), "接口主动查询设备GPU性能信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 查询GPU性能信息\nGamePerformance_GpuInfo *gpuInfo = NULL;\nGamePerformance_ErrorCode ret = HMS_GamePerformance_QueryGpuInfo(&gpuInfo);\nif (ret != GAME_PERFORMANCE_SUCCESS) {\n    // 异常处理\n}\n\n// 获取指标数据值\nint32_t gpuloadLevel = -1;\nint32_t bandwidth = -1;\nint32_t currentFrequency = -1;\nint32_t fragmentLoadLevel = -1;\nint32_t textureLoadLevel = -1;\nint32_t vertexLoadLevel = -1;\nHMS_GamePerformance_GpuInfo_GetGpuLoadLevel(gpuInfo, &gpuloadLevel);\nHMS_GamePerformance_GpuInfo_GetBandwidthLoadLevel(gpuInfo, &bandwidth);\nHMS_GamePerformance_GpuInfo_GetCurrentFrequency(gpuInfo, &currentFrequency);\nHMS_GamePerformance_GpuInfo_GetFragmentLoadLevel(gpuInfo, &fragmentLoadLevel);\nHMS_GamePerformance_GpuInfo_GetTextureLoadLevel(gpuInfo, &textureLoadLevel);\nHMS_GamePerformance_GpuInfo_GetVertexLoadLevel(gpuInfo, &vertexLoadLevel);\n\n// 使用完释放内存\nHMS_GamePerformance_DestroyGpuInfo(&gpuInfo);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询cpu性能信息",
      children: "查询CPU性能信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除订阅设备状态变化的方式外，也可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_querycpuinfo",
        children: "HMS_GamePerformance_QueryCpuInfo"
      }), "接口主动查询设备CPU性能信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 查询CPU性能信息\nGamePerformance_CpuInfo *cpuInfo = NULL;\nGamePerformance_ErrorCode ret = HMS_GamePerformance_QueryCpuInfo(&cpuInfo);\nif (ret != GAME_PERFORMANCE_SUCCESS) {\n    // 异常处理\n}\n\nint32_t cpuLoadLevel = 0;\nint32_t singleThreadLoadLevel = 0;\nHMS_GamePerformance_CpuInfo_GetCpuLoadLevel(cpuInfo, &cpuLoadLevel);\nHMS_GamePerformance_CpuInfo_GetSingleThreadLoadLevel(cpuInfo, &singleThreadLoadLevel);\n\n// 使用完释放内存\nHMS_GamePerformance_DestroyCpuInfo(&cpuInfo);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查询温度相关信息",
      children: "查询温度相关信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除订阅设备状态变化的方式外，也可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_querythermalinfo",
        children: "HMS_GamePerformance_QueryThermalInfo"
      }), "接口主动查询设备温控档位、温升趋势、当前的工作电流、系统建议的工作电流和系统建议的最大工作电流。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 查询温度和温升趋势\nGamePerformance_ThermalInfo *thermalInfo = NULL;\nGamePerformance_ThermalInfoQueryParameters *parameters = NULL;\n\n// 创建查询参数\nHMS_GamePerformance_CreateThermalInfoQueryParameters(&parameters);\n\n// 设置是否预测温升趋势。true：将查询温升趋势预测信息，false:不会查询温升趋势预测信息，默认为false。\nHMS_GamePerformance_ThermalInfoQueryParameters_SetNeedsPrediction(parameters, true);\n\n// needsPrediction=true时可选设置该参数。设置预测温升趋势的目标温度等级，设置后将以该温度等级作为目标温度等级进行温升趋势预测，若不设置，将使用系统默认档位进行预测。\nHMS_GamePerformance_ThermalInfoQueryParameters_SetTargetThermalLevel(parameters, 4);\n\n// 查询温度信息\nGamePerformance_ErrorCode ret = HMS_GamePerformance_QueryThermalInfo(parameters, &thermalInfo);\nif (ret != GAME_PERFORMANCE_SUCCESS) {\n    // 异常处理\n}\nint32_t margin = INT32_MIN;\nint32_t trend = INT32_MIN;\nint32_t level = -1;\nint32_t recommendNormalizedCurrent = 0;\nint32_t nowNormalizedCurrent = 0;\nint32_t recommendMaxNormalizedCurrent = 0;\nHMS_GamePerformance_ThermalInfo_GetThermalLevel(thermalInfo, &level);\nHMS_GamePerformance_ThermalInfo_GetThermalMargin(thermalInfo, &margin); // needsPrediction=true时,返回有效值\nHMS_GamePerformance_ThermalInfo_GetThermalTrend(thermalInfo, &trend); // needsPrediction=true时,返回有效值\nHMS_GamePerformance_ThermalInfo_GetRecommendNormalizedCurrent(thermalInfo, &recommendNormalizedCurrent);\nHMS_GamePerformance_ThermalInfo_GetNowNormalizedCurrent(thermalInfo, &nowNormalizedCurrent);\nHMS_GamePerformance_ThermalInfo_GetRecommendMaxNormalizedCurrent(thermalInfo, &recommendMaxNormalizedCurrent);\n\n// 使用完释放内存\nHMS_GamePerformance_DestroyThermalInfo(&thermalInfo);\nHMS_GamePerformance_DestroyThermalInfoQueryParameters(&parameters);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(501956)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["查询温度变化趋势需要历史数据作为计算依据，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_querythermalinfo",
        children: "HMS_GamePerformance_QueryThermalInfo"
      }), "接口时请保证设备已启动至少一分钟，否则会返回1010300001错误。"]
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
765350(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958900-38fd7bd23b323aab2a7f281b22cf9e59.png");

},
496128(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
501956(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
269364(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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