"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["229410"], {
693784(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_game_controller_api_game_controller_c_game_controller_headerfile_and_struct_game_controller_headerfile_capi_game_pad_capi_game_pad_md_8b1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-game-controller-api-game-controller-c-game-controller-headerfile-and-struct-game-controller-headerfile-capi-game-pad-capi-game-pad-md-8b1.json
var site_docs_ref_game_controller_api_game_controller_c_game_controller_headerfile_and_struct_game_controller_headerfile_capi_game_pad_capi_game_pad_md_8b1_namespaceObject = JSON.parse('{"id":"game-controller-api/game-controller-c/game-controller-headerfile-and-struct/game-controller-headerfile/capi-game-pad/capi-game-pad","title":"game_pad.h","description":"概述","source":"@site/docs-ref/game-controller-api/game-controller-c/game-controller-headerfile-and-struct/game-controller-headerfile/capi-game-pad/capi-game-pad.md","sourceDirName":"game-controller-api/game-controller-c/game-controller-headerfile-and-struct/game-controller-headerfile/capi-game-pad","slug":"/game-controller-api/game-controller-c/game-controller-headerfile-and-struct/game-controller-headerfile/capi-game-pad/capi-game-pad","permalink":"/harmonyos-docs-site/ref/game-controller-api/game-controller-c/game-controller-headerfile-and-struct/game-controller-headerfile/capi-game-pad/capi-game-pad","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"game_pad.h","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad","kit":"应用服务","last_updated":"2026-04-22","slug":"capi-game-pad"},"sidebar":"ref","previous":{"title":"game_device_event.h","permalink":"/harmonyos-docs-site/ref/game-controller-api/game-controller-c/game-controller-headerfile-and-struct/game-controller-headerfile/capi-game-device-event/capi-game-device-event"},"next":{"title":"game_pad_event.h","permalink":"/harmonyos-docs-site/ref/game-controller-api/game-controller-c/game-controller-headerfile-and-struct/game-controller-headerfile/capi-game-pad-event/capi-game-pad-event"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/game-controller-api/game-controller-c/game-controller-headerfile-and-struct/game-controller-headerfile/capi-game-pad/capi-game-pad.md


const frontMatter = {
	title: 'game_pad.h',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'capi-game-pad'
};
const contentTitle = 'game_pad.h';

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
        id: "game_padh",
        children: "game_pad.h"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义游戏手柄的接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "库："
        })
      }), " libohgame_controller.z.so"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Game.GameController"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "相关模块："
        })
      }), (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller",
        children: "GameController"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_leftshoulder_registerbuttoninputmonitor",
              children: "OH_GamePad_LeftShoulder_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册LeftShoulder按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_leftshoulder_unregisterbuttoninputmonitor",
              children: "OH_GamePad_LeftShoulder_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册LeftShoulder按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_rightshoulder_registerbuttoninputmonitor",
              children: "OH_GamePad_RightShoulder_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册RightShoulder按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_rightshoulder_unregisterbuttoninputmonitor",
              children: "OH_GamePad_RightShoulder_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册RightShoulder按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_lefttrigger_registerbuttoninputmonitor",
              children: "OH_GamePad_LeftTrigger_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册LeftTrigger按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_lefttrigger_unregisterbuttoninputmonitor",
              children: "OH_GamePad_LeftTrigger_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册LeftTrigger按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_lefttrigger_registeraxisinputmonitor",
              children: "OH_GamePad_LeftTrigger_RegisterAxisInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamepad_axisinputmonitorcallback",
              children: "GamePad_AxisInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册LeftTrigger轴事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_lefttrigger_unregisteraxisinputmonitor",
              children: "OH_GamePad_LeftTrigger_UnregisterAxisInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册LeftTrigger轴事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_righttrigger_registerbuttoninputmonitor",
              children: "OH_GamePad_RightTrigger_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册RightTrigger按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_righttrigger_unregisterbuttoninputmonitor",
              children: "OH_GamePad_RightTrigger_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册RightTrigger按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_righttrigger_registeraxisinputmonitor",
              children: "OH_GamePad_RightTrigger_RegisterAxisInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamepad_axisinputmonitorcallback",
              children: "GamePad_AxisInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册RightTrigger轴事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_righttrigger_unregisteraxisinputmonitor",
              children: "OH_GamePad_RightTrigger_UnregisterAxisInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册RightTrigger轴事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_buttonmenu_registerbuttoninputmonitor",
              children: "OH_GamePad_ButtonMenu_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册Menu按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_buttonmenu_unregisterbuttoninputmonitor",
              children: "OH_GamePad_ButtonMenu_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册Menu按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_buttonhome_registerbuttoninputmonitor",
              children: "OH_GamePad_ButtonHome_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册Home按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_buttonhome_unregisterbuttoninputmonitor",
              children: "OH_GamePad_ButtonHome_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册Home按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_buttona_registerbuttoninputmonitor",
              children: "OH_GamePad_ButtonA_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册A按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_buttona_unregisterbuttoninputmonitor",
              children: "OH_GamePad_ButtonA_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册A按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_buttonb_registerbuttoninputmonitor",
              children: "OH_GamePad_ButtonB_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册B按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_buttonb_unregisterbuttoninputmonitor",
              children: "OH_GamePad_ButtonB_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册B按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_buttonx_registerbuttoninputmonitor",
              children: "OH_GamePad_ButtonX_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册X按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_buttonx_unregisterbuttoninputmonitor",
              children: "OH_GamePad_ButtonX_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册X按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_buttony_registerbuttoninputmonitor",
              children: "OH_GamePad_ButtonY_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册Y按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_buttony_unregisterbuttoninputmonitor",
              children: "OH_GamePad_ButtonY_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册Y按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_buttonc_registerbuttoninputmonitor",
              children: "OH_GamePad_ButtonC_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册C按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_buttonc_unregisterbuttoninputmonitor",
              children: "OH_GamePad_ButtonC_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册C按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_dpad_leftbutton_registerbuttoninputmonitor",
              children: "OH_GamePad_Dpad_LeftButton_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册方向按键的向左按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_dpad_leftbutton_unregisterbuttoninputmonitor",
              children: "OH_GamePad_Dpad_LeftButton_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册方向按键的向左按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_dpad_rightbutton_registerbuttoninputmonitor",
              children: "OH_GamePad_Dpad_RightButton_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册方向按键的向右按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_dpad_rightbutton_unregisterbuttoninputmonitor",
              children: "OH_GamePad_Dpad_RightButton_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册方向按键的向右按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_dpad_upbutton_registerbuttoninputmonitor",
              children: "OH_GamePad_Dpad_UpButton_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册方向按键的向上按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_dpad_upbutton_unregisterbuttoninputmonitor",
              children: "OH_GamePad_Dpad_UpButton_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册方向按键的向上按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_dpad_downbutton_registerbuttoninputmonitor",
              children: "OH_GamePad_Dpad_DownButton_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册方向按键的向下按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_dpad_downbutton_unregisterbuttoninputmonitor",
              children: "OH_GamePad_Dpad_DownButton_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册方向按键的向下按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_dpad_registeraxisinputmonitor",
              children: "OH_GamePad_Dpad_RegisterAxisInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamepad_axisinputmonitorcallback",
              children: "GamePad_AxisInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册方向按键轴事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_dpad_unregisteraxisinputmonitor",
              children: "OH_GamePad_Dpad_UnregisterAxisInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册方向按键轴事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_leftthumbstick_registerbuttoninputmonitor",
              children: "OH_GamePad_LeftThumbstick_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册LeftThumbstick按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_leftthumbstick_unregisterbuttoninputmonitor",
              children: "OH_GamePad_LeftThumbstick_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册LeftThumbstick按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_leftthumbstick_registeraxisinputmonitor",
              children: "OH_GamePad_LeftThumbstick_RegisterAxisInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamepad_axisinputmonitorcallback",
              children: "GamePad_AxisInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册LeftThumbstick轴事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_leftthumbstick_unregisteraxisinputmonitor",
              children: "OH_GamePad_LeftThumbstick_UnregisterAxisInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册LeftThumbstick轴事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_rightthumbstick_registerbuttoninputmonitor",
              children: "OH_GamePad_RightThumbstick_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册RightThumbstick按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_rightthumbstick_unregisterbuttoninputmonitor",
              children: "OH_GamePad_RightThumbstick_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册RightThumbstick按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_rightthumbstick_registeraxisinputmonitor",
              children: "OH_GamePad_RightThumbstick_RegisterAxisInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamepad_axisinputmonitorcallback",
              children: "GamePad_AxisInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册RightThumbstick轴事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller#oh_gamepad_rightthumbstick_unregisteraxisinputmonitor",
              children: "OH_GamePad_RightThumbstick_UnregisterAxisInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册RightThumbstick轴事件的监听回调。"
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