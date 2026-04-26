"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["949081"], {
270377(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_game_service_api_gameservice_c_gameservice_total_gameservice_files_gameservice_game_performance_h_gameservice_game_performance_h_md_7de_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-game-service-api-gameservice-c-gameservice-total-gameservice-files-gameservice-game-performance-h-gameservice-game-performance-h-md-7de.json
var site_docs_ref_game_service_api_gameservice_c_gameservice_total_gameservice_files_gameservice_game_performance_h_gameservice_game_performance_h_md_7de_namespaceObject = JSON.parse('{"id":"game-service-api/gameservice-c/gameservice-total/gameservice-files/gameservice-game-performance-h/gameservice-game-performance-h","title":"game_performance.h","description":"概述","source":"@site/docs-ref/game-service-api/gameservice-c/gameservice-total/gameservice-files/gameservice-game-performance-h/gameservice-game-performance-h.md","sourceDirName":"game-service-api/gameservice-c/gameservice-total/gameservice-files/gameservice-game-performance-h","slug":"/game-service-api/gameservice-c/gameservice-total/gameservice-files/gameservice-game-performance-h/gameservice-game-performance-h","permalink":"/harmonyos-docs-site/ref/game-service-api/gameservice-c/gameservice-total/gameservice-files/gameservice-game-performance-h/gameservice-game-performance-h","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"game_performance.h","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/gameservice-game-performance-h","kit":"应用服务","last_updated":"2026-04-22","slug":"gameservice-game-performance-h"},"sidebar":"ref","previous":{"title":"GamePerformance","permalink":"/harmonyos-docs-site/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance"},"next":{"title":"C API错误码","permalink":"/harmonyos-docs-site/ref/game-service-api/gameservice-c/gameservice-c-error-code/gameservice-c-error-code"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/game-service-api/gameservice-c/gameservice-total/gameservice-files/gameservice-game-performance-h/gameservice-game-performance-h.md


const frontMatter = {
	title: 'game_performance.h',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/gameservice-game-performance-h',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'gameservice-game-performance-h'
};
const contentTitle = 'game_performance.h';

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
  "value": "类型定义",
  "id": "类型定义",
  "level": 3
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
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
        id: "game_performanceh",
        children: "game_performance.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明游戏场景感知的类型及相关接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "引用文件："
        })
      }), " <GameServiceKit/game_performance.h>"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libgame_performance.z.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.GameService.GamePerformance"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.2(14)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance",
        children: "GamePerformance"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类型定义",
      children: "类型定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_deviceinfo",
              children: "GamePerformance_DeviceInfo"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_deviceinfo",
              children: "GamePerformance_DeviceInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义设备性能信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义GPU性能信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_cpuinfo",
              children: "GamePerformance_CpuInfo"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_cpuinfo",
              children: "GamePerformance_CpuInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义CPU性能信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义温度信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermalinfoqueryparameters",
              children: "GamePerformance_ThermalInfoQueryParameters"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermalinfoqueryparameters",
              children: "GamePerformance_ThermalInfoQueryParameters"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义温度信息的查询参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_initparameters",
              children: "GamePerformance_InitParameters"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_initparameters",
              children: "GamePerformance_InitParameters"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义初始化参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义游戏包信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义游戏配置信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义游戏场景信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义游戏网络信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_playerinfo",
              children: "GamePerformance_PlayerInfo"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_playerinfo",
              children: "GamePerformance_PlayerInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义游戏玩家信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_enginetype-1",
              children: "GamePerformance_EngineType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_enginetype",
              children: "GamePerformance_EngineType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义游戏引擎类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_gametype-1",
              children: "GamePerformance_GameType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_gametype",
              children: "GamePerformance_GameType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义游戏类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_picturequalitylevel-1",
              children: "GamePerformance_PictureQualityLevel"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_picturequalitylevel",
              children: "GamePerformance_PictureQualityLevel"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义画质等级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneimportancelevel-1",
              children: "GamePerformance_SceneImportanceLevel"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneimportancelevel",
              children: "GamePerformance_SceneImportanceLevel"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义游戏场景重要程度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_cpulevel-1",
              children: "GamePerformance_CpuLevel"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_cpulevel",
              children: "GamePerformance_CpuLevel"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义CPU等级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_gpulevel-1",
              children: "GamePerformance_GpuLevel"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_gpulevel",
              children: "GamePerformance_GpuLevel"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义GPU等级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_ddrlevel-1",
              children: "GamePerformance_DdrLevel"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_ddrlevel",
              children: "GamePerformance_DdrLevel"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义DDR等级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_netload-1",
              children: "GamePerformance_NetLoad"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_netload",
              children: "GamePerformance_NetLoad"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义网络负载等级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode",
              children: "GamePerformance_ErrorCode"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_deviceinfotype-1",
              children: "GamePerformance_DeviceInfoType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_deviceinfotype",
              children: "GamePerformance_DeviceInfoType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义设备性能信息类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(*", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermallevelchangedcallback",
              children: "GamePerformance_ThermalLevelChangedCallback"
            }), ") (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_deviceinfo",
              children: "GamePerformance_DeviceInfo"
            }), " *deviceInfo, void *userData)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_registerthermallevelchangedcallback",
              children: "HMS_GamePerformance_RegisterThermalLevelChangedCallback"
            }), "中使用的回调函数。当温度等级改变并且温度等级小于3档时，该函数将被调用一次。当温度等级大于或等于3档时，该函数将每10秒调用一次。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_enginetype-1",
              children: "GamePerformance_EngineType"
            }), " {  GAME_PERFORMANCE_ENGINE_TYPE_UNITY = 1,  GAME_PERFORMANCE_ENGINE_TYPE_UNREAL = 2,  GAME_PERFORMANCE_ENGINE_TYPE_MESSIAH = 3,  GAME_PERFORMANCE_ENGINE_TYPE_COCOS = 4,  GAME_PERFORMANCE_ENGINE_TYPE_OTHERS = 200  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述引擎类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_gametype-1",
              children: "GamePerformance_GameType"
            }), " {  GAME_PERFORMANCE_GAME_TYPE_MOBA = 1,  GAME_PERFORMANCE_GAME_TYPE_RPG = 2,  GAME_PERFORMANCE_GAME_TYPE_FPS = 3,  GAME_PERFORMANCE_GAME_TYPE_FTG = 4,  GAME_PERFORMANCE_GAME_TYPE_RAC = 5,  GAME_PERFORMANCE_GAME_TYPE_OTHERS = 200  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述游戏类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_picturequalitylevel-1",
              children: "GamePerformance_PictureQualityLevel"
            }), " {  GAME_PERFORMANCE_PQL_SMOOTH = 1,  GAME_PERFORMANCE_PQL_BALANCED = 2,  GAME_PERFORMANCE_PQL_HD = 3,  GAME_PERFORMANCE_PQL_HDR = 4,  GAME_PERFORMANCE_PQL_UHD = 5  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述画质等级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneimportancelevel-1",
              children: "GamePerformance_SceneImportanceLevel"
            }), " {  GAME_PERFORMANCE_SIL_LEVEL1 = 1,  GAME_PERFORMANCE_SIL_LEVEL2 = 2,  GAME_PERFORMANCE_SIL_LEVEL3 = 3,  GAME_PERFORMANCE_SIL_LEVEL4 = 4,  GAME_PERFORMANCE_SIL_LEVEL5 = 5  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述场景重要程度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_cpulevel-1",
              children: "GamePerformance_CpuLevel"
            }), " {  GAME_PERFORMANCE_CPU_LEVEL_LOW = 1,  GAME_PERFORMANCE_CPU_LEVEL_MIDDLE = 2,  GAME_PERFORMANCE_CPU_LEVEL_HIGH = 3  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述CPU等级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_gpulevel-1",
              children: "GamePerformance_GpuLevel"
            }), " {  GAME_PERFORMANCE_GPU_LEVEL_LOW = 1,  GAME_PERFORMANCE_GPU_LEVEL_MIDDLE = 2,  GAME_PERFORMANCE_GPU_LEVEL_HIGH = 3  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述GPU等级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_ddrlevel-1",
              children: "GamePerformance_DdrLevel"
            }), " {  GAME_PERFORMANCE_DDR_LEVEL_LOW = 1,  GAME_PERFORMANCE_DDR_LEVEL_MIDDLE = 2,  GAME_PERFORMANCE_DDR_LEVEL_HIGH = 3  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述DDR等级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_netload-1",
              children: "GamePerformance_NetLoad"
            }), " {  GAME_PERFORMANCE_NET_LOAD_LIGHT = 1,  GAME_PERFORMANCE_NET_LOAD_MODERATE = 2,  GAME_PERFORMANCE_NET_LOAD_HEAVY = 3  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述网络负载等级。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " {  GAME_PERFORMANCE_SUCCESS = 0,  GAME_PERFORMANCE_PARAM_INVALID = 401,  GAME_PERFORMANCE_INTERNAL_ERROR = 1010300001,  GAME_PERFORMANCE_AUTH_FAILED = 1010300002,  GAME_PERFORMANCE_INVALID_REQUEST = 1010300003,  GAME_PERFORMANCE_PARAM_ERROR = 1010300004  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述错误码。  GAME_PERFORMANCE_PARAM_ERROR 从6.0.2(22)开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_deviceinfotype-1",
              children: "GamePerformance_DeviceInfoType"
            }), " {  GAME_PERFORMANCE_DEVICEINFO_TYPE_THERMAL = 0,  GAME_PERFORMANCE_DEVICEINFO_TYPE_GPU = 1,  GAME_PERFORMANCE_DEVICEINFO_TYPE_CPU = 2  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举描述设备性能信息类型。  GAME_PERFORMANCE_DEVICEINFO_TYPE_CPU 从6.0.2(22)开始支持。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_createinitparameters",
              children: "HMS_GamePerformance_CreateInitParameters"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_initparameters",
              children: "GamePerformance_InitParameters"
            }), " **initParameters)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_initparameters",
              children: "GamePerformance_InitParameters"
            }), "实例，该实例在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_init",
              children: "HMS_GamePerformance_Init"
            }), "方法中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_destroyinitparameters",
              children: "HMS_GamePerformance_DestroyInitParameters"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_initparameters",
              children: "GamePerformance_InitParameters"
            }), " **initParameters)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_initparameters",
              children: "GamePerformance_InitParameters"
            }), "实例不再使用，销毁该实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_initparameters_setbundlename",
              children: "HMS_GamePerformance_InitParameters_SetBundleName"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_initparameters",
              children: "GamePerformance_InitParameters"
            }), " *initParameters, const char *bundleName)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_initparameters",
              children: "GamePerformance_InitParameters"
            }), "实例设置包名。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_initparameters_setappversion",
              children: "HMS_GamePerformance_InitParameters_SetAppVersion"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_initparameters",
              children: "GamePerformance_InitParameters"
            }), " *initParameters, const char *appVersion)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_initparameters",
              children: "GamePerformance_InitParameters"
            }), "实例设置版本号。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["初始化游戏场景感知。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：调用HMS_GamePerformance_Init前，必须已设置bundleName，appVersion。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_createpackageinfo",
              children: "HMS_GamePerformance_CreatePackageInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), " **packageInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), "实例，该实例在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_updatepackageinfo",
              children: "HMS_GamePerformance_UpdatePackageInfo"
            }), "方法中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_destroypackageinfo",
              children: "HMS_GamePerformance_DestroyPackageInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), " **packageInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), "实例不再使用，销毁该实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_packageinfo_setbundlename",
              children: "HMS_GamePerformance_PackageInfo_SetBundleName"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), " *packageInfo, const char *bundleName)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), "实例设置包名。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_packageinfo_setappversion",
              children: "HMS_GamePerformance_PackageInfo_SetAppVersion"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), " *packageInfo, const char *appVersion)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), "实例设置版本号。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_packageinfo_setenginetype",
              children: "HMS_GamePerformance_PackageInfo_SetEngineType"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), " *packageInfo, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_enginetype-1",
              children: "GamePerformance_EngineType"
            }), " engineType)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), "实例设置引擎类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_packageinfo_setengineversion",
              children: "HMS_GamePerformance_PackageInfo_SetEngineVersion"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), " *packageInfo, const char *engineVersion)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), "实例设置引擎版本号。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_packageinfo_setgametype",
              children: "HMS_GamePerformance_PackageInfo_SetGameType"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), " *packageInfo, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_gametype-1",
              children: "GamePerformance_GameType"
            }), " gameType)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), "实例设置游戏类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_packageinfo_setvulkansupported",
              children: "HMS_GamePerformance_PackageInfo_SetVulkanSupported"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), " *packageInfo, const bool vulkanSupported)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_packageinfo",
              children: "GamePerformance_PackageInfo"
            }), "实例设置是否支持vulkan。"]
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["更新游戏包信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：调用HMS_GamePerformance_UpdatePackageInfo前，必须已设置bundleName，appVersion。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_createconfiginfo",
              children: "HMS_GamePerformance_CreateConfigInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), " **configInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例，该实例在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_updateconfiginfo",
              children: "HMS_GamePerformance_UpdateConfigInfo"
            }), "方法中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_destroyconfiginfo",
              children: "HMS_GamePerformance_DestroyConfigInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), " **configInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例不再使用，销毁该实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_configinfo_setmaxpicturequalitylevel",
              children: "HMS_GamePerformance_ConfigInfo_SetMaxPictureQualityLevel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), " *configInfo, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_picturequalitylevel-1",
              children: "GamePerformance_PictureQualityLevel"
            }), " maxPictureQualityLevel)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例设置最大画质等级。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_configinfo_setcurrentpicturequalitylevel",
              children: "HMS_GamePerformance_ConfigInfo_SetCurrentPictureQualityLevel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), " *configInfo, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_picturequalitylevel-1",
              children: "GamePerformance_PictureQualityLevel"
            }), " currentPictureQualityLevel)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例设置当前画质等级。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_configinfo_setmaxframerate",
              children: "HMS_GamePerformance_ConfigInfo_SetMaxFrameRate"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), " *configInfo, const int64_t maxFrameRate)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例设置最大帧率。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_configinfo_setcurrentframerate",
              children: "HMS_GamePerformance_ConfigInfo_SetCurrentFrameRate"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), " *configInfo, const int64_t currentFrameRate)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例设置当前帧率。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_configinfo_setmaxresolution",
              children: "HMS_GamePerformance_ConfigInfo_SetMaxResolution"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), " *configInfo, const char *maxResolution)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例设置最大分辨率。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_configinfo_setcurrentresolution",
              children: "HMS_GamePerformance_ConfigInfo_SetCurrentResolution"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), " *configInfo, const char *currentResolution)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例设置当前分辨率。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_configinfo_setantialiasingenabled",
              children: "HMS_GamePerformance_ConfigInfo_SetAntiAliasingEnabled"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), " *configInfo, const bool antiAliasingEnabled)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例设置是否开启抗锯齿。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_configinfo_setshadowenabled",
              children: "HMS_GamePerformance_ConfigInfo_SetShadowEnabled"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), " *configInfo, const bool shadowEnabled)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例设置是否开启阴影。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_configinfo_setmultithreadingenabled",
              children: "HMS_GamePerformance_ConfigInfo_SetMultithreadingEnabled"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), " *configInfo, const bool multithreadingEnabled)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例设置开启多线程。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_configinfo_setparticleenabled",
              children: "HMS_GamePerformance_ConfigInfo_SetParticleEnabled"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), " *configInfo, const bool particleEnabled)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例设置粒子效果。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_configinfo_sethdmodeenabled",
              children: "HMS_GamePerformance_ConfigInfo_SetHdModeEnabled"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), " *configInfo, const bool hdModeEnabled)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_configinfo",
              children: "GamePerformance_ConfigInfo"
            }), "实例设置开启高清模式。"]
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
            children: "更新游戏配置信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_createsceneinfo",
              children: "HMS_GamePerformance_CreateSceneInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " **sceneInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例，该实例在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_updatesceneinfo",
              children: "HMS_GamePerformance_UpdateSceneInfo"
            }), "方法中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_destroysceneinfo",
              children: "HMS_GamePerformance_DestroySceneInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " **sceneInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例不再使用，销毁该实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_sceneinfo_setsceneid",
              children: "HMS_GamePerformance_SceneInfo_SetSceneID"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const int64_t sceneID)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置场景ID。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_sceneinfo_setdescription",
              children: "HMS_GamePerformance_SceneInfo_SetDescription"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const char *description)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置场景描述。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_sceneinfo_setsubsceneid",
              children: "HMS_GamePerformance_SceneInfo_SetSubSceneID"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const char *subSceneID)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置子场景ID。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_sceneinfo_setsubdescription",
              children: "HMS_GamePerformance_SceneInfo_SetSubDescription"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const char *subDescription)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置子场景描述。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_sceneinfo_setimportancelevel",
              children: "HMS_GamePerformance_SceneInfo_SetImportanceLevel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneimportancelevel-1",
              children: "GamePerformance_SceneImportanceLevel"
            }), " importanceLevel)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置场景重要程度。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_sceneinfo_setscenefrequency",
              children: "HMS_GamePerformance_SceneInfo_SetSceneFrequency"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const int64_t sceneFrequency)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置该场景在一局游戏中出现的次数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_sceneinfo_setscenetime",
              children: "HMS_GamePerformance_SceneInfo_SetSceneTime"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const int64_t sceneTime)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置场景持续时间。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_sceneinfo_setrecommendedcpulevel",
              children: "HMS_GamePerformance_SceneInfo_SetRecommendedCpuLevel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_cpulevel-1",
              children: "GamePerformance_CpuLevel"
            }), " recommendedCpuLevel)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置推荐的CPU等级。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_sceneinfo_setrecommendedgpulevel",
              children: "HMS_GamePerformance_SceneInfo_SetRecommendedGpuLevel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_gpulevel-1",
              children: "GamePerformance_GpuLevel"
            }), " recommendedGpuLevel)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置推荐的GPU等级。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_sceneinfo_setrecommendedddrlevel",
              children: "HMS_GamePerformance_SceneInfo_SetRecommendedDdrLevel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_ddrlevel-1",
              children: "GamePerformance_DdrLevel"
            }), " recommendedDdrLevel)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置推荐的DDR等级。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_sceneinfo_setmaxframerate",
              children: "HMS_GamePerformance_SceneInfo_SetMaxFrameRate"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const int64_t maxFrameRate)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置场景最大帧率。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_sceneinfo_setcurrentframerate",
              children: "HMS_GamePerformance_SceneInfo_SetCurrentFrameRate"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const int64_t currentFrameRate)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置场景当前帧率。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_sceneinfo_setkeythread",
              children: "HMS_GamePerformance_SceneInfo_SetKeyThread"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const char *keyThread)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置关键线程。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_sceneinfo_setdrawcallcount",
              children: "HMS_GamePerformance_SceneInfo_SetDrawCallCount"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const int64_t drawCallCount)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置每帧的平均Drawcall数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_sceneinfo_setvertexcount",
              children: "HMS_GamePerformance_SceneInfo_SetVertexCount"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const int64_t vertexCount)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置每帧的平均模型顶点数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_sceneinfo_settrianglecount",
              children: "HMS_GamePerformance_SceneInfo_SetTriangleCount"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const int64_t triangleCount)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置每帧的平均模型三角形数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_sceneinfo_setshadercount",
              children: "HMS_GamePerformance_SceneInfo_SetShaderCount"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const int64_t shaderCount)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置每帧的平均shader数量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_sceneinfo_settexturecount",
              children: "HMS_GamePerformance_SceneInfo_SetTextureCount"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const int64_t textureCount)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置每帧的平均纹理数量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_sceneinfo_setmeshcount",
              children: "HMS_GamePerformance_SceneInfo_SetMeshCount"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const int64_t meshCount)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置每帧的平均mesh数量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_sceneinfo_setchannelcount",
              children: "HMS_GamePerformance_SceneInfo_SetChannelCount"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const int64_t channelCount)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置每帧渲染的通道数。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_sceneinfo_setparticipantcount",
              children: "HMS_GamePerformance_SceneInfo_SetParticipantCount"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), " *sceneInfo, const int64_t participantCount)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_sceneinfo",
              children: "GamePerformance_SceneInfo"
            }), "实例设置场景下的同屏人数。"]
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["更新游戏场景信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：调用HMS_GamePerformance_UpdateSceneInfo前，必须已设置sceneID，importanceLevel。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_createnetinfo",
              children: "HMS_GamePerformance_CreateNetInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), " **netInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), "实例，该实例在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_updatenetinfo",
              children: "HMS_GamePerformance_UpdateNetInfo"
            }), "方法中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_destroynetinfo",
              children: "HMS_GamePerformance_DestroyNetInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), " **netInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), "实例不再使用，销毁该实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_netinfo_settotallatency",
              children: "HMS_GamePerformance_NetInfo_SetTotalLatency"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), " *netInfo, const int64_t total)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), "实例设置总网络时延。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_netinfo_setuplinklatency",
              children: "HMS_GamePerformance_NetInfo_SetUplinkLatency"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), " *netInfo, const int64_t up)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), "实例设置上行网络时延。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_netinfo_setdownlinklatency",
              children: "HMS_GamePerformance_NetInfo_SetDownlinkLatency"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), " *netInfo, const int64_t down)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), "实例设置下行网络时延。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_netinfo_setserverlatency",
              children: "HMS_GamePerformance_NetInfo_SetServerLatency"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), " *netInfo, const int64_t server)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), "实例设置服务器网络时延。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_netinfo_setnetload",
              children: "HMS_GamePerformance_NetInfo_SetNetLoad"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), " *netInfo, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_netload-1",
              children: "GamePerformance_NetLoad"
            }), " netLoad)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_netinfo",
              children: "GamePerformance_NetInfo"
            }), "实例设置网络负载。"]
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
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["更新游戏网络信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：调用HMS_GamePerformance_UpdateNetInfo前必须已设置totalLatency。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_createplayerinfo",
              children: "HMS_GamePerformance_CreatePlayerInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_playerinfo",
              children: "GamePerformance_PlayerInfo"
            }), " **playerInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_playerinfo",
              children: "GamePerformance_PlayerInfo"
            }), "实例，该实例在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_updateplayerinfo",
              children: "HMS_GamePerformance_UpdatePlayerInfo"
            }), "方法中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_destroyplayerinfo",
              children: "HMS_GamePerformance_DestroyPlayerInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_playerinfo",
              children: "GamePerformance_PlayerInfo"
            }), " **playerInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_playerinfo",
              children: "GamePerformance_PlayerInfo"
            }), "实例不再使用，销毁该实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_playerinfo_setgameplayerid",
              children: "HMS_GamePerformance_PlayerInfo_SetGamePlayerId"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_playerinfo",
              children: "GamePerformance_PlayerInfo"
            }), " *playerInfo, const char *gamePlayerId)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_playerinfo",
              children: "GamePerformance_PlayerInfo"
            }), "实例设置游戏玩家ID。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：gamePlayerId、teamPlayerId和thirdOpenId不能同时为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_playerinfo_setteamplayerid",
              children: "HMS_GamePerformance_PlayerInfo_SetTeamPlayerId"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_playerinfo",
              children: "GamePerformance_PlayerInfo"
            }), " *playerInfo, const char *teamPlayerId)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_playerinfo",
              children: "GamePerformance_PlayerInfo"
            }), "实例设置团队玩家ID。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：gamePlayerId、teamPlayerId和thirdOpenId不能同时为空。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_playerinfo_setthirdopenid",
              children: "HMS_GamePerformance_PlayerInfo_SetThirdOpenId"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_playerinfo",
              children: "GamePerformance_PlayerInfo"
            }), " *playerInfo, const char *thirdOpenId)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_playerinfo",
              children: "GamePerformance_PlayerInfo"
            }), "实例设置游戏官方账号。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            }), "：gamePlayerId、teamPlayerId和thirdOpenId不能同时为空。"]
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
            children: "更新游戏玩家信息。"
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
            children: "订阅温度变化事件，注册温度变化回调，当达到触发点时，将调用回调函数。"
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
            children: "取消注册指定温度变化回调。"
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
            children: "取消注册所有温度变化回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_createthermalinfoqueryparameters",
              children: "HMS_GamePerformance_CreateThermalInfoQueryParameters"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermalinfoqueryparameters",
              children: "GamePerformance_ThermalInfoQueryParameters"
            }), " **parameters)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermalinfoqueryparameters",
              children: "GamePerformance_ThermalInfoQueryParameters"
            }), "实例，该实例在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_querythermalinfo",
              children: "HMS_GamePerformance_QueryThermalInfo"
            }), "方法中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_destroythermalinfoqueryparameters",
              children: "HMS_GamePerformance_DestroyThermalInfoQueryParameters"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermalinfoqueryparameters",
              children: "GamePerformance_ThermalInfoQueryParameters"
            }), " **parameters)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermalinfoqueryparameters",
              children: "GamePerformance_ThermalInfoQueryParameters"
            }), "实例不再使用，销毁该实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_thermalinfoqueryparameters_setneedsprediction",
              children: "HMS_GamePerformance_ThermalInfoQueryParameters_SetNeedsPrediction"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermalinfoqueryparameters",
              children: "GamePerformance_ThermalInfoQueryParameters"
            }), " *parameters, const bool needsPrediction)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermalinfoqueryparameters",
              children: "GamePerformance_ThermalInfoQueryParameters"
            }), "实例设置是否需要预测温升趋势。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_thermalinfoqueryparameters_settargetthermallevel",
              children: "HMS_GamePerformance_ThermalInfoQueryParameters_SetTargetThermalLevel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermalinfoqueryparameters",
              children: "GamePerformance_ThermalInfoQueryParameters"
            }), " *parameters, const int32_t targetThermalLevel)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermalinfoqueryparameters",
              children: "GamePerformance_ThermalInfoQueryParameters"
            }), "实例设置预测温升趋势的目标温度等级。"]
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
            }), " *parameters，", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), " **thermalInfo)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询温度信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_destroythermalinfo",
              children: "HMS_GamePerformance_DestroyThermalInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), " **thermalInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), "实例不再使用，销毁该实例。"]
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
            children: "查询GPU性能信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_destroygpuinfo",
              children: "HMS_GamePerformance_DestroyGpuInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), " **gpuInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), "实例不再使用，销毁该实例。"]
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
            children: "查询CPU性能信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_destroycpuinfo",
              children: "HMS_GamePerformance_DestroyCpuInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_cpuinfo",
              children: "GamePerformance_CpuInfo"
            }), " **cpuInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_cpuinfo",
              children: "GamePerformance_CpuInfo"
            }), "实例不再使用，销毁该实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_deviceinfo_getthermalinfo",
              children: "HMS_GamePerformance_DeviceInfo_GetThermalInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_deviceinfo",
              children: "GamePerformance_DeviceInfo"
            }), " *deviceInfo, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), " **thermalInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从设备性能信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_deviceinfo",
              children: "GamePerformance_DeviceInfo"
            }), "中获取温度信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_thermalinfo_getthermalmargin",
              children: "HMS_GamePerformance_ThermalInfo_GetThermalMargin"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), " *thermalInfo, int32_t *thermalMargin)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从温度信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), "中获取温度时间裕量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_thermalinfo_getthermaltrend",
              children: "HMS_GamePerformance_ThermalInfo_GetThermalTrend"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), " *thermalInfo, int32_t *thermalTrend)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), "中获取温升趋势。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_thermalinfo_getthermallevel",
              children: "HMS_GamePerformance_ThermalInfo_GetThermalLevel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), " *thermalInfo, int32_t *thermalLevel)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), "中获取温度等级。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_thermalinfo_getrecommendnormalizedcurrent",
              children: "HMS_GamePerformance_ThermalInfo_GetRecommendNormalizedCurrent"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), " *thermalInfo, int32_t *recommendCurrent)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), "中获取系统建议的工作电流。若当前的工作电流高于此值，温升趋势thermalTrend会大于0，设备有发烫风险。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_thermalinfo_getnownormalizedcurrent",
              children: "HMS_GamePerformance_ThermalInfo_GetNowNormalizedCurrent"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), " *thermalInfo, int32_t *nowCurrent)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), "中获取当前的工作电流。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_thermalinfo_getrecommendmaxnormalizedcurrent",
              children: "HMS_GamePerformance_ThermalInfo_GetRecommendMaxNormalizedCurrent"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), " *thermalInfo, int32_t *recommendMaxCurrent)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_thermalinfo",
              children: "GamePerformance_ThermalInfo"
            }), "中获取系统建议的最大工作电流。若当前的工作电流高于此值，设备会立即发烫。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_deviceinfo_getgpuinfo",
              children: "HMS_GamePerformance_DeviceInfo_GetGpuInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_deviceinfo",
              children: "GamePerformance_DeviceInfo"
            }), " *deviceInfo, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), " **gpuInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从设备性能信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_deviceinfo",
              children: "GamePerformance_DeviceInfo"
            }), "中获取GPU性能信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_gpuinfo_getgpuloadlevel",
              children: "HMS_GamePerformance_GpuInfo_GetGpuLoadLevel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), " *gpuInfo, int32_t *gpuLoadLevel)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), "中获取GPU负载信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_gpuinfo_getvertexloadlevel",
              children: "HMS_GamePerformance_GpuInfo_GetVertexLoadLevel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), " *gpuInfo, int32_t *vertexLoadLevel)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), "中获取GPU顶点处理负载等级。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_gpuinfo_getfragmentloadlevel",
              children: "HMS_GamePerformance_GpuInfo_GetFragmentLoadLevel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), " *gpuInfo, int32_t *fragmentLoadLevel)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), "中获取GPU片元处理负载等级。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_gpuinfo_gettextureloadlevel",
              children: "HMS_GamePerformance_GpuInfo_GetTextureLoadLevel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), " *gpuInfo, int32_t *textureLoadLevel)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), "中获取GPU纹理处理负载等级。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_gpuinfo_getbandwidthloadlevel",
              children: "HMS_GamePerformance_GpuInfo_GetBandwidthLoadLevel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), " *gpuInfo, int32_t *bandwidthLoadLevel)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), "中获取GPU带宽负载等级。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_gpuinfo_getcurrentfrequency",
              children: "HMS_GamePerformance_GpuInfo_GetCurrentFrequency"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), " *gpuInfo, int32_t *currentFrequency)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_gpuinfo",
              children: "GamePerformance_GpuInfo"
            }), "中获取GPU频点信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_deviceinfo_getcpuinfo",
              children: "HMS_GamePerformance_DeviceInfo_GetCpuInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_deviceinfo",
              children: "GamePerformance_DeviceInfo"
            }), " *deviceInfo, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_cpuinfo",
              children: "GamePerformance_CpuInfo"
            }), " **cpuInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从设备性能信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_deviceinfo",
              children: "GamePerformance_DeviceInfo"
            }), "中获取CPU性能信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_cpuinfo",
              children: "GamePerformance_CpuInfo"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_cpuinfo_getcpuloadlevel",
              children: "HMS_GamePerformance_CpuInfo_GetCpuLoadLevel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_cpuinfo",
              children: "GamePerformance_CpuInfo"
            }), " *cpuInfo, int32_t *cpuLoadLevel)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_cpuinfo",
              children: "GamePerformance_CpuInfo"
            }), "中获取CPU负载整体等级。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_cpuinfo_getsinglethreadloadlevel",
              children: "HMS_GamePerformance_CpuInfo_GetSingleThreadLoadLevel"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_cpuinfo",
              children: "GamePerformance_CpuInfo"
            }), " *cpuInfo, int32_t *singleThreadLoadLevel)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_cpuinfo",
              children: "GamePerformance_CpuInfo"
            }), "中获取游戏最重线程的负载整体等级。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_errorcode-1",
              children: "GamePerformance_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#hms_gameperformance_destroydeviceinfo",
              children: "HMS_GamePerformance_DestroyDeviceInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_deviceinfo",
              children: "GamePerformance_DeviceInfo"
            }), " **deviceInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-service-api/gameservice-c/gameservice-module/gameservice-game-performance/gameservice-game-performance#gameperformance_deviceinfo",
              children: "GamePerformance_DeviceInfo"
            }), "实例不再使用，销毁该实例。"]
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