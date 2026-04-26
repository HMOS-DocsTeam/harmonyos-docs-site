"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["102566"], {
893214(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_game_controller_kit_game_controller_monitor_pad_game_controller_monitor_pad_md_312_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-game-controller-kit-game-controller-monitor-pad-game-controller-monitor-pad-md-312.json
var site_docs_game_controller_kit_game_controller_monitor_pad_game_controller_monitor_pad_md_312_namespaceObject = JSON.parse('{"id":"game-controller-kit/game-controller-monitor-pad/game-controller-monitor-pad","title":"监听游戏手柄的轴和按键事件（C/C++）","description":"须先完成监听设备上下线功能的开发后，才能进行游戏手柄轴事件和按键事件的监听注册。","source":"@site/docs/game-controller-kit/game-controller-monitor-pad/game-controller-monitor-pad.md","sourceDirName":"game-controller-kit/game-controller-monitor-pad","slug":"/game-controller-kit/game-controller-monitor-pad/","permalink":"/harmonyos-docs-site/game-controller-kit/game-controller-monitor-pad/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"监听游戏手柄的轴和按键事件（C/C++）","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/game-controller-monitor-pad","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"监听设备上下线（C/C++）","permalink":"/harmonyos-docs-site/game-controller-kit/game-controller-monitor-device/"},"next":{"title":"Game Service Kit简介","permalink":"/harmonyos-docs-site/game-service-kit-guide/gameservice-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/game-controller-kit/game-controller-monitor-pad/game-controller-monitor-pad.md


const frontMatter = {
	title: '监听游戏手柄的轴和按键事件（C/C++）',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/game-controller-monitor-pad',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '监听游戏手柄的轴和按键事件（C/C++）';

const assets = {

};



const toc = [{
  "value": "功能介绍",
  "id": "功能介绍",
  "level": 2
}, {
  "value": "按键",
  "id": "按键",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "链接动态库",
  "id": "链接动态库",
  "level": 3
}, {
  "value": "导入模块",
  "id": "导入模块",
  "level": 3
}, {
  "value": "注册和取消注册轴事件的监听",
  "id": "注册和取消注册轴事件的监听",
  "level": 3
}, {
  "value": "注册按键事件的监听和取消注册",
  "id": "注册按键事件的监听和取消注册",
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
        id: "监听游戏手柄的轴和按键事件cc",
        children: "监听游戏手柄的轴和按键事件（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(983156)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["须先完成", (0,jsx_runtime.jsx)(_components.a, {
        href: "/game-controller-kit/game-controller-monitor-device",
        children: "监听设备上下线"
      }), "功能的开发后，才能进行游戏手柄轴事件和按键事件的监听注册。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Game Controller Kit提供游戏手柄轴事件和按键事件的监听能力。通过轴事件和按键事件的监听注册，在玩家操作手柄按键和摇杆时可获得对应回调通知。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "按键",
      children: "按键"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Game Controller Kit支持的手柄键位参考图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(654089)/* ["default"] */.A) + "",
        width: "1080",
        height: "1292"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接口详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller",
        children: "API参考"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_GamePad_LeftShoulder_RegisterButtonInputMonitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册LeftShoulder按键事件的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_GamePad_RightShoulder_RegisterButtonInputMonitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册RightShoulder按键事件的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_GamePad_LeftTrigger_RegisterButtonInputMonitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册LeftTrigger按键事件的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_GamePad_RightTrigger_RegisterButtonInputMonitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册RightTrigger按键事件的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_GamePad_ButtonMenu_RegisterButtonInputMonitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册Menu按键事件的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_GamePad_ButtonHome_RegisterButtonInputMonitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册Home按键事件的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_GamePad_ButtonA_RegisterButtonInputMonitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册A按键事件的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_GamePad_ButtonB_RegisterButtonInputMonitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册B按键事件的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_GamePad_ButtonX_RegisterButtonInputMonitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册X按键事件的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_GamePad_ButtonY_RegisterButtonInputMonitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册Y按键事件的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_GamePad_ButtonC_RegisterButtonInputMonitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册C按键事件的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_GamePad_Dpad_LeftButton_RegisterButtonInputMonitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册方向按键的向左按键事件的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_GamePad_Dpad_RightButton_RegisterButtonInputMonitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册方向按键的向右按键事件的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_GamePad_Dpad_UpButton_RegisterButtonInputMonitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册方向按键的向上按键事件的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_GamePad_Dpad_DownButton_RegisterButtonInputMonitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册方向按键的向下按键事件的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_GamePad_LeftThumbstick_RegisterButtonInputMonitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册LeftThumbstick按键事件的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_GamePad_RightThumbstick_RegisterButtonInputMonitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册RightThumbstick按键事件的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_GamePad_LeftTrigger_RegisterAxisInputMonitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册LeftTrigger轴事件的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_GamePad_RightTrigger_RegisterAxisInputMonitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册RightTrigger轴事件的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_GamePad_Dpad_RegisterAxisInputMonitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册方向按键轴事件的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_GamePad_LeftThumbstick_RegisterAxisInputMonitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册LeftThumbstick轴事件的监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_GamePad_RightThumbstick_RegisterAxisInputMonitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册RightThumbstick轴事件的监听。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "链接动态库",
      children: "链接动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libohgame_controller.z.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <GameControllerKit/game_pad.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "注册和取消注册轴事件的监听",
      children: "注册和取消注册轴事件的监听"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用相应接口注册或取消注册轴事件回调，通过回调函数获取轴值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "物理轴及其对应的轴值获取接口如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "物理轴"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "轴值获取接口"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LeftThumbstick"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过OH_GamePad_AxisEvent_GetXAxisValue获取X轴的轴值。  通过OH_GamePad_AxisEvent_GetYAxisValue获取Y轴的轴值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RightThumbstick"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过OH_GamePad_AxisEvent_GetZAxisValue获取Z轴的轴值。  通过OH_GamePad_AxisEvent_GetRZAxisValue获取RZ轴的轴值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DPAD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过OH_GamePad_AxisEvent_GetHatXAxisValue获取HatX轴的轴值。  通过OH_GamePad_AxisEvent_GetHatYAxisValue获取HatY轴的轴值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LeftTrigger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过OH_GamePad_AxisEvent_GetBrakeAxisValue获取Brake轴的轴值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RightTrigger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过OH_GamePad_AxisEvent_GetGasAxisValue获取Gas轴的轴值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以LeftThumbstick轴事件为例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_value GamePad::LeftThumbstick_RegisterAxisInputMonitor(napi_env env, napi_callback_info info) {\n    napi_value result;\n    GameController_ErrorCode errorCode =\n        OH_GamePad_LeftThumbstick_RegisterAxisInputMonitor(GamePad::LeftThumbstick_OnAxisEvent);\n    if (errorCode != GameController_ErrorCode::GAME_CONTROLLER_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"LeftThumbstick_RegisterAxisInputMonitor Failed, %{public}d\", errorCode);\n        napi_create_double(env, errorCode, &result);\n        return result;\n    }\n    OH_LOG_INFO(LOG_APP, \"LeftThumbstick_RegisterAxisInputMonitor Success\");\n    napi_create_double(env, 0, &result);\n    return result;\n}\n\nnapi_value GamePad::LeftThumbstick_UnregisterAxisInputMonitor(napi_env env, napi_callback_info info) {\n    napi_value result;\n    GameController_ErrorCode errorCode = OH_GamePad_LeftThumbstick_UnregisterAxisInputMonitor();\n    if (errorCode != GameController_ErrorCode::GAME_CONTROLLER_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"LeftThumbstick_UnregisterAxisInputMonitor Failed, %{public}d\", errorCode);\n        napi_create_double(env, errorCode, &result);\n        return result;\n    }\n    OH_LOG_INFO(LOG_APP, \"LeftThumbstick_UnregisterAxisInputMonitor Success\");\n    napi_create_double(env, 0, &result);\n    return result;\n}\n\nvoid GamePad::LeftThumbstick_OnAxisEvent(const struct GamePad_AxisEvent *axisEvent) {\n    std::string val = \"X\";\n    double xAxisValue;\n    OH_GamePad_AxisEvent_GetXAxisValue(axisEvent, &xAxisValue);\n    val.append(std::to_string(xAxisValue)).append(\"_Y\");\n    double yAxisValue;\n    OH_GamePad_AxisEvent_GetYAxisValue(axisEvent, &yAxisValue);\n    val.append(std::to_string(yAxisValue));\n    OnAxisEvent(axisEvent, \"LeftThumbstick_OnAxisEvent\", val);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "注册按键事件的监听和取消注册",
      children: "注册按键事件的监听和取消注册"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用相应接口注册或取消注册按键事件回调，从回调函数中获取按键值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下是按键名称与对应按键值："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "按键名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "按键值"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LeftShoulder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2307"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RightShoulder"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2308"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LeftTrigger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2309"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RightTrigger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2310"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LeftThumbstick"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2314"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RightThumbstick"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2315"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ButtonHome"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2311"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ButtonMenu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2312"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ButtonA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2301"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ButtonB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2302"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ButtonC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2303"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ButtonX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2304"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ButtonY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2305"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dpad_UpButton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2012"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dpad_DownButton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2013"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dpad_LeftButton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2014"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dpad_RightButton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2015"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以LeftShoulder按键事件为例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "napi_value GamePad::LeftShoulder_RegisterButtonInputMonitor(napi_env env, napi_callback_info info) {\n    napi_value result;\n    GameController_ErrorCode errorCode =\n        OH_GamePad_LeftShoulder_RegisterButtonInputMonitor(GamePad::LeftShoulder_OnButtonEvent);\n    if (errorCode != GameController_ErrorCode::GAME_CONTROLLER_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"LeftShoulder_RegisterButtonInputMonitor Failed, %{public}d\", errorCode);\n        napi_create_double(env, errorCode, &result);\n        return result;\n    }\n    OH_LOG_INFO(LOG_APP, \"LeftShoulder_RegisterButtonInputMonitor Success\");\n    napi_create_double(env, 0, &result);\n    return result;\n}\n\nnapi_value GamePad::LeftShoulder_UnregisterButtonInputMonitor(napi_env env, napi_callback_info info) {\n    napi_value result;\n    GameController_ErrorCode errorCode = OH_GamePad_LeftShoulder_UnregisterButtonInputMonitor();\n    if (errorCode != GameController_ErrorCode::GAME_CONTROLLER_SUCCESS) {\n        OH_LOG_ERROR(LOG_APP, \"LeftShoulder_UnregisterButtonInputMonitor Failed, %{public}d\", errorCode);\n        napi_create_double(env, errorCode, &result);\n        return result;\n    }\n    OH_LOG_INFO(LOG_APP, \"LeftShoulder_UnregisterButtonInputMonitor Success\");\n    napi_create_double(env, 0, &result);\n    return result;\n}\n\nvoid GamePad::LeftShoulder_OnButtonEvent(const struct GamePad_ButtonEvent *buttonEvent) {\n    OnButtonEvent(buttonEvent, \"LeftShoulder_OnButtonEvent\");\n}\n\nvoid GamePad::OnButtonEvent(const struct GamePad_ButtonEvent *buttonEvent, const std::string &buttonName) {\n    std::string temp;\n    temp.append(\"OnButtonEvent:\").append(buttonName);\n    char *deviceId;\n    OH_GamePad_ButtonEvent_GetDeviceId(buttonEvent, &deviceId);\n    temp.append(\" ,deviceId:\").append(deviceId);\n    free(deviceId);\n    GamePad_Button_ActionType action;\n    OH_GamePad_ButtonEvent_GetButtonAction(buttonEvent, &action);\n    temp.append(\" ,action:\").append(std::to_string(action));\n    std::int32_t buttonCode;\n    OH_GamePad_ButtonEvent_GetButtonCode(buttonEvent, &buttonCode);\n    temp.append(\" ,code:\").append(std::to_string(buttonCode));\n    char *buttonCodeName;\n    OH_GamePad_ButtonEvent_GetButtonCodeName(buttonEvent, &buttonCodeName);\n    temp.append(\" ,codeName:\").append(buttonCodeName);\n    free(buttonCodeName);\n    std::int64_t actionTime;\n    OH_GamePad_ButtonEvent_GetActionTime(buttonEvent, &actionTime);\n    temp.append(\" ,actionTime:\").append(std::to_string(actionTime));\n    std::int32_t count;\n    OH_GamePad_PressedButtons_GetCount(buttonEvent, &count);\n    temp.append(\" ,count:\").append(std::to_string(count));\n    std::string pressedButtonCodes;\n    for (std::int32_t idx = 0; idx < count; idx++) {\n        GamePad_PressedButton *pressedButton;\n        OH_GamePad_PressedButtons_GetButtonInfo(buttonEvent, idx, &pressedButton);\n        int code;\n        OH_GamePad_PressedButton_GetButtonCode(pressedButton, &code);\n        char *name;\n        OH_GamePad_PressedButton_GetButtonCodeName(pressedButton, &name);\n        if (idx != 0) {\n            pressedButtonCodes = pressedButtonCodes.append(\";\");\n        }\n        pressedButtonCodes = pressedButtonCodes.append(std::to_string(code) + \"|\").append(name);\n        free(name);\n        OH_GamePad_DestroyPressedButton(&pressedButton);\n    }\n    temp.append(\" ,pressedButtonCodes:\").append(pressedButtonCodes);\n    OH_LOG_INFO(LOG_APP, \"%{public}s\", temp.c_str());\n    Log::GetInstance()->PrintLog(temp);\n}\n"
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
983156(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
654089(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799234-947efcb71102f08378185351eeb0904d.png");

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