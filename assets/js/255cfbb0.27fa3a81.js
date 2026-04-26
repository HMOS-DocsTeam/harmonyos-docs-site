"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["536743"], {
150299(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_game_controller_api_game_controller_c_game_controller_module_capi_game_controller_capi_game_controller_md_255_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-game-controller-api-game-controller-c-game-controller-module-capi-game-controller-capi-game-controller-md-255.json
var site_docs_ref_game_controller_api_game_controller_c_game_controller_module_capi_game_controller_capi_game_controller_md_255_namespaceObject = JSON.parse('{"id":"game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller","title":"GameController","description":"概述","source":"@site/docs-ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller.md","sourceDirName":"game-controller-api/game-controller-c/game-controller-module/capi-game-controller","slug":"/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller","permalink":"/harmonyos-docs-site/ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"GameController","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller","kit":"应用服务","last_updated":"2026-04-22","slug":"capi-game-controller"},"sidebar":"ref","previous":{"title":"图标格式说明","permalink":"/harmonyos-docs-site/ref/file-manager-service-api/filemanagerservice-iconformat/filemanagerservice-iconformat"},"next":{"title":"game_controller_type.h","permalink":"/harmonyos-docs-site/ref/game-controller-api/game-controller-c/game-controller-headerfile-and-struct/game-controller-headerfile/capi-game-controller-type/capi-game-controller-type"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/game-controller-api/game-controller-c/game-controller-module/capi-game-controller/capi-game-controller.md


const frontMatter = {
	title: 'GameController',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'capi-game-controller'
};
const contentTitle = 'GameController';

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
  "value": "文件",
  "id": "文件",
  "level": 3
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
}, {
  "value": "类型定义说明",
  "id": "类型定义说明",
  "level": 2
}, {
  "value": "GameController_ErrorCode",
  "id": "gamecontroller_errorcode",
  "level": 3
}, {
  "value": "GameDevice_AllDeviceInfos",
  "id": "gamedevice_alldeviceinfos",
  "level": 3
}, {
  "value": "GameDevice_DeviceEvent",
  "id": "gamedevice_deviceevent",
  "level": 3
}, {
  "value": "GameDevice_DeviceInfo",
  "id": "gamedevice_deviceinfo",
  "level": 3
}, {
  "value": "GameDevice_DeviceMonitorCallback",
  "id": "gamedevice_devicemonitorcallback",
  "level": 3
}, {
  "value": "GameDevice_DeviceType",
  "id": "gamedevice_devicetype",
  "level": 3
}, {
  "value": "GameDevice_StatusChangedType",
  "id": "gamedevice_statuschangedtype",
  "level": 3
}, {
  "value": "GamePad_AxisEvent",
  "id": "gamepad_axisevent",
  "level": 3
}, {
  "value": "GamePad_AxisInputMonitorCallback",
  "id": "gamepad_axisinputmonitorcallback",
  "level": 3
}, {
  "value": "GamePad_AxisSourceType",
  "id": "gamepad_axissourcetype",
  "level": 3
}, {
  "value": "GamePad_Button_ActionType",
  "id": "gamepad_button_actiontype",
  "level": 3
}, {
  "value": "GamePad_ButtonEvent",
  "id": "gamepad_buttonevent",
  "level": 3
}, {
  "value": "GamePad_ButtonInputMonitorCallback",
  "id": "gamepad_buttoninputmonitorcallback",
  "level": 3
}, {
  "value": "GamePad_PressedButton",
  "id": "gamepad_pressedbutton",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "GameController_ErrorCode",
  "id": "gamecontroller_errorcode-1",
  "level": 3
}, {
  "value": "GameDevice_DeviceType",
  "id": "gamedevice_devicetype-1",
  "level": 3
}, {
  "value": "GameDevice_StatusChangedType",
  "id": "gamedevice_statuschangedtype-1",
  "level": 3
}, {
  "value": "GamePad_AxisSourceType",
  "id": "gamepad_axissourcetype-1",
  "level": 3
}, {
  "value": "GamePad_Button_ActionType",
  "id": "gamepad_button_actiontype-1",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "OH_GameDevice_AllDeviceInfos_GetCount()",
  "id": "oh_gamedevice_alldeviceinfos_getcount",
  "level": 3
}, {
  "value": "OH_GameDevice_AllDeviceInfos_GetDeviceInfo()",
  "id": "oh_gamedevice_alldeviceinfos_getdeviceinfo",
  "level": 3
}, {
  "value": "OH_GameDevice_DestroyAllDeviceInfos()",
  "id": "oh_gamedevice_destroyalldeviceinfos",
  "level": 3
}, {
  "value": "OH_GameDevice_DestroyDeviceInfo()",
  "id": "oh_gamedevice_destroydeviceinfo",
  "level": 3
}, {
  "value": "OH_GameDevice_DeviceEvent_GetChangedType()",
  "id": "oh_gamedevice_deviceevent_getchangedtype",
  "level": 3
}, {
  "value": "OH_GameDevice_DeviceEvent_GetDeviceInfo()",
  "id": "oh_gamedevice_deviceevent_getdeviceinfo",
  "level": 3
}, {
  "value": "OH_GameDevice_DeviceInfo_GetDeviceId()",
  "id": "oh_gamedevice_deviceinfo_getdeviceid",
  "level": 3
}, {
  "value": "OH_GameDevice_DeviceInfo_GetDeviceType()",
  "id": "oh_gamedevice_deviceinfo_getdevicetype",
  "level": 3
}, {
  "value": "OH_GameDevice_DeviceInfo_GetName()",
  "id": "oh_gamedevice_deviceinfo_getname",
  "level": 3
}, {
  "value": "OH_GameDevice_DeviceInfo_GetPhysicalAddress()",
  "id": "oh_gamedevice_deviceinfo_getphysicaladdress",
  "level": 3
}, {
  "value": "OH_GameDevice_DeviceInfo_GetProduct()",
  "id": "oh_gamedevice_deviceinfo_getproduct",
  "level": 3
}, {
  "value": "OH_GameDevice_DeviceInfo_GetVersion()",
  "id": "oh_gamedevice_deviceinfo_getversion",
  "level": 3
}, {
  "value": "OH_GameDevice_GetAllDeviceInfos()",
  "id": "oh_gamedevice_getalldeviceinfos",
  "level": 3
}, {
  "value": "OH_GameDevice_RegisterDeviceMonitor()",
  "id": "oh_gamedevice_registerdevicemonitor",
  "level": 3
}, {
  "value": "OH_GameDevice_UnregisterDeviceMonitor()",
  "id": "oh_gamedevice_unregisterdevicemonitor",
  "level": 3
}, {
  "value": "OH_GamePad_AxisEvent_GetActionTime()",
  "id": "oh_gamepad_axisevent_getactiontime",
  "level": 3
}, {
  "value": "OH_GamePad_AxisEvent_GetAxisSourceType()",
  "id": "oh_gamepad_axisevent_getaxissourcetype",
  "level": 3
}, {
  "value": "OH_GamePad_AxisEvent_GetBrakeAxisValue()",
  "id": "oh_gamepad_axisevent_getbrakeaxisvalue",
  "level": 3
}, {
  "value": "OH_GamePad_AxisEvent_GetDeviceId()",
  "id": "oh_gamepad_axisevent_getdeviceid",
  "level": 3
}, {
  "value": "OH_GamePad_AxisEvent_GetGasAxisValue()",
  "id": "oh_gamepad_axisevent_getgasaxisvalue",
  "level": 3
}, {
  "value": "OH_GamePad_AxisEvent_GetHatXAxisValue()",
  "id": "oh_gamepad_axisevent_gethatxaxisvalue",
  "level": 3
}, {
  "value": "OH_GamePad_AxisEvent_GetHatYAxisValue()",
  "id": "oh_gamepad_axisevent_gethatyaxisvalue",
  "level": 3
}, {
  "value": "OH_GamePad_AxisEvent_GetRZAxisValue()",
  "id": "oh_gamepad_axisevent_getrzaxisvalue",
  "level": 3
}, {
  "value": "OH_GamePad_AxisEvent_GetXAxisValue()",
  "id": "oh_gamepad_axisevent_getxaxisvalue",
  "level": 3
}, {
  "value": "OH_GamePad_AxisEvent_GetYAxisValue()",
  "id": "oh_gamepad_axisevent_getyaxisvalue",
  "level": 3
}, {
  "value": "OH_GamePad_AxisEvent_GetZAxisValue()",
  "id": "oh_gamepad_axisevent_getzaxisvalue",
  "level": 3
}, {
  "value": "OH_GamePad_ButtonA_RegisterButtonInputMonitor()",
  "id": "oh_gamepad_buttona_registerbuttoninputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_ButtonA_UnregisterButtonInputMonitor()",
  "id": "oh_gamepad_buttona_unregisterbuttoninputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_ButtonB_RegisterButtonInputMonitor()",
  "id": "oh_gamepad_buttonb_registerbuttoninputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_ButtonB_UnregisterButtonInputMonitor()",
  "id": "oh_gamepad_buttonb_unregisterbuttoninputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_ButtonC_RegisterButtonInputMonitor()",
  "id": "oh_gamepad_buttonc_registerbuttoninputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_ButtonC_UnregisterButtonInputMonitor()",
  "id": "oh_gamepad_buttonc_unregisterbuttoninputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_ButtonEvent_GetActionTime()",
  "id": "oh_gamepad_buttonevent_getactiontime",
  "level": 3
}, {
  "value": "OH_GamePad_ButtonEvent_GetButtonAction()",
  "id": "oh_gamepad_buttonevent_getbuttonaction",
  "level": 3
}, {
  "value": "OH_GamePad_ButtonEvent_GetButtonCode()",
  "id": "oh_gamepad_buttonevent_getbuttoncode",
  "level": 3
}, {
  "value": "OH_GamePad_ButtonEvent_GetButtonCodeName()",
  "id": "oh_gamepad_buttonevent_getbuttoncodename",
  "level": 3
}, {
  "value": "OH_GamePad_ButtonEvent_GetDeviceId()",
  "id": "oh_gamepad_buttonevent_getdeviceid",
  "level": 3
}, {
  "value": "OH_GamePad_ButtonHome_RegisterButtonInputMonitor()",
  "id": "oh_gamepad_buttonhome_registerbuttoninputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_ButtonHome_UnregisterButtonInputMonitor()",
  "id": "oh_gamepad_buttonhome_unregisterbuttoninputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_ButtonMenu_RegisterButtonInputMonitor()",
  "id": "oh_gamepad_buttonmenu_registerbuttoninputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_ButtonMenu_UnregisterButtonInputMonitor()",
  "id": "oh_gamepad_buttonmenu_unregisterbuttoninputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_ButtonX_RegisterButtonInputMonitor()",
  "id": "oh_gamepad_buttonx_registerbuttoninputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_ButtonX_UnregisterButtonInputMonitor()",
  "id": "oh_gamepad_buttonx_unregisterbuttoninputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_ButtonY_RegisterButtonInputMonitor()",
  "id": "oh_gamepad_buttony_registerbuttoninputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_ButtonY_UnregisterButtonInputMonitor()",
  "id": "oh_gamepad_buttony_unregisterbuttoninputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_DestroyPressedButton()",
  "id": "oh_gamepad_destroypressedbutton",
  "level": 3
}, {
  "value": "OH_GamePad_Dpad_DownButton_RegisterButtonInputMonitor()",
  "id": "oh_gamepad_dpad_downbutton_registerbuttoninputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_Dpad_DownButton_UnregisterButtonInputMonitor()",
  "id": "oh_gamepad_dpad_downbutton_unregisterbuttoninputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_Dpad_LeftButton_RegisterButtonInputMonitor()",
  "id": "oh_gamepad_dpad_leftbutton_registerbuttoninputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_Dpad_LeftButton_UnregisterButtonInputMonitor()",
  "id": "oh_gamepad_dpad_leftbutton_unregisterbuttoninputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_Dpad_RegisterAxisInputMonitor()",
  "id": "oh_gamepad_dpad_registeraxisinputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_Dpad_RightButton_RegisterButtonInputMonitor()",
  "id": "oh_gamepad_dpad_rightbutton_registerbuttoninputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_Dpad_RightButton_UnregisterButtonInputMonitor()",
  "id": "oh_gamepad_dpad_rightbutton_unregisterbuttoninputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_Dpad_UnregisterAxisInputMonitor()",
  "id": "oh_gamepad_dpad_unregisteraxisinputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_Dpad_UpButton_RegisterButtonInputMonitor()",
  "id": "oh_gamepad_dpad_upbutton_registerbuttoninputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_Dpad_UpButton_UnregisterButtonInputMonitor()",
  "id": "oh_gamepad_dpad_upbutton_unregisterbuttoninputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_LeftShoulder_RegisterButtonInputMonitor()",
  "id": "oh_gamepad_leftshoulder_registerbuttoninputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_LeftShoulder_UnregisterButtonInputMonitor()",
  "id": "oh_gamepad_leftshoulder_unregisterbuttoninputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_LeftThumbstick_RegisterAxisInputMonitor()",
  "id": "oh_gamepad_leftthumbstick_registeraxisinputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_LeftThumbstick_RegisterButtonInputMonitor()",
  "id": "oh_gamepad_leftthumbstick_registerbuttoninputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_LeftThumbstick_UnregisterAxisInputMonitor()",
  "id": "oh_gamepad_leftthumbstick_unregisteraxisinputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_LeftThumbstick_UnregisterButtonInputMonitor()",
  "id": "oh_gamepad_leftthumbstick_unregisterbuttoninputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_LeftTrigger_RegisterAxisInputMonitor()",
  "id": "oh_gamepad_lefttrigger_registeraxisinputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_LeftTrigger_RegisterButtonInputMonitor()",
  "id": "oh_gamepad_lefttrigger_registerbuttoninputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_LeftTrigger_UnregisterAxisInputMonitor()",
  "id": "oh_gamepad_lefttrigger_unregisteraxisinputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_LeftTrigger_UnregisterButtonInputMonitor()",
  "id": "oh_gamepad_lefttrigger_unregisterbuttoninputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_PressedButton_GetButtonCode()",
  "id": "oh_gamepad_pressedbutton_getbuttoncode",
  "level": 3
}, {
  "value": "OH_GamePad_PressedButton_GetButtonCodeName()",
  "id": "oh_gamepad_pressedbutton_getbuttoncodename",
  "level": 3
}, {
  "value": "OH_GamePad_PressedButtons_GetButtonInfo()",
  "id": "oh_gamepad_pressedbuttons_getbuttoninfo",
  "level": 3
}, {
  "value": "OH_GamePad_PressedButtons_GetCount()",
  "id": "oh_gamepad_pressedbuttons_getcount",
  "level": 3
}, {
  "value": "OH_GamePad_RightShoulder_RegisterButtonInputMonitor()",
  "id": "oh_gamepad_rightshoulder_registerbuttoninputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_RightShoulder_UnregisterButtonInputMonitor()",
  "id": "oh_gamepad_rightshoulder_unregisterbuttoninputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_RightThumbstick_RegisterAxisInputMonitor()",
  "id": "oh_gamepad_rightthumbstick_registeraxisinputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_RightThumbstick_RegisterButtonInputMonitor()",
  "id": "oh_gamepad_rightthumbstick_registerbuttoninputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_RightThumbstick_UnregisterAxisInputMonitor()",
  "id": "oh_gamepad_rightthumbstick_unregisteraxisinputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_RightThumbstick_UnregisterButtonInputMonitor()",
  "id": "oh_gamepad_rightthumbstick_unregisterbuttoninputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_RightTrigger_RegisterAxisInputMonitor()",
  "id": "oh_gamepad_righttrigger_registeraxisinputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_RightTrigger_RegisterButtonInputMonitor()",
  "id": "oh_gamepad_righttrigger_registerbuttoninputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_RightTrigger_UnregisterAxisInputMonitor()",
  "id": "oh_gamepad_righttrigger_unregisteraxisinputmonitor",
  "level": 3
}, {
  "value": "OH_GamePad_RightTrigger_UnregisterButtonInputMonitor()",
  "id": "oh_gamepad_righttrigger_unregisterbuttoninputmonitor",
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
    li: "li",
    p: "p",
    pre: "pre",
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
        id: "gamecontroller",
        children: "GameController"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GameController模块提供游戏控制器功能的API接口。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "文件",
      children: "文件"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/game-controller-api/game-controller-c/game-controller-headerfile-and-struct/game-controller-headerfile/capi-game-controller-type/capi-game-controller-type",
              children: "game_controller_type.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义GameController模块的通用枚举类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-headerfile-and-struct/game-controller-headerfile/capi-game-device/capi-game-device",
              children: "game_device.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义游戏设备的接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-headerfile-and-struct/game-controller-headerfile/capi-game-device-event/capi-game-device-event",
              children: "game_device_event.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义游戏设备事件的接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-headerfile-and-struct/game-controller-headerfile/capi-game-pad/capi-game-pad",
              children: "game_pad.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义游戏手柄的接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/game-controller-api/game-controller-c/game-controller-headerfile-and-struct/game-controller-headerfile/capi-game-pad-event/capi-game-pad-event",
              children: "game_pad_event.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义游戏手柄事件的接口。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类型定义",
      children: "类型定义"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举定义游戏控制器的错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_alldeviceinfos",
              children: "GameDevice_AllDeviceInfos"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_alldeviceinfos",
              children: "GameDevice_AllDeviceInfos"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamedevice_getalldeviceinfos",
              children: "OH_GameDevice_GetAllDeviceInfos"
            }), "接口的调用结果。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_statuschangedtype",
              children: "GameDevice_StatusChangedType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_statuschangedtype",
              children: "GameDevice_StatusChangedType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举定义设备的状态变化类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_devicetype",
              children: "GameDevice_DeviceType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_devicetype",
              children: "GameDevice_DeviceType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举定义设备类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceinfo",
              children: "GameDevice_DeviceInfo"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceinfo",
              children: "GameDevice_DeviceInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义设备信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceevent",
              children: "GameDevice_DeviceEvent"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceevent",
              children: "GameDevice_DeviceEvent"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义设备状态变化事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(*", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_devicemonitorcallback",
              children: "GameDevice_DeviceMonitorCallback"
            }), ") (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceevent",
              children: "GameDevice_DeviceEvent"
            }), " *deviceEvent)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["定义", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamedevice_registerdevicemonitor",
              children: "OH_GameDevice_RegisterDeviceMonitor"
            }), "中使用的回调函数。当设备上线或下线时，该回调函数将被调用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axissourcetype",
              children: "GamePad_AxisSourceType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axissourcetype",
              children: "GamePad_AxisSourceType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举定义手柄轴事件来源类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_button_actiontype",
              children: "GamePad_Button_ActionType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_button_actiontype",
              children: "GamePad_Button_ActionType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此枚举定义手柄按键动作类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttonevent",
              children: "GamePad_ButtonEvent"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttonevent",
              children: "GamePad_ButtonEvent"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义手柄按键事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义手柄轴事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_pressedbutton",
              children: "GamePad_PressedButton"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_pressedbutton",
              children: "GamePad_PressedButton"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义手柄按下的按键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(*", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), ") (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttonevent",
              children: "GamePad_ButtonEvent"
            }), " *buttonEvent)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义在按键事件注册监听接口中使用的回调函数。当玩家按下按键时，该回调函数将被调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(*", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisinputmonitorcallback",
              children: "GamePad_AxisInputMonitorCallback"
            }), ") (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), " *axisEvent)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "定义在轴事件注册监听接口中使用的回调函数。当玩家操作摇杆时，该回调函数将被调用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " {  GAME_CONTROLLER_SUCCESS = 0,  GAME_CONTROLLER_PARAM_ERROR = 401,  GAME_CONTROLLER_MULTIMODAL_INPUT_ERROR = 32200001,  GAME_CONTROLLER_NO_MEMORY = 32200002  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏控制器错误码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_statuschangedtype",
              children: "GameDevice_StatusChangedType"
            }), " {  OFFLINE = 0,  ONLINE = 1  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备的状态变化类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_devicetype",
              children: "GameDevice_DeviceType"
            }), " {  UNKNOWN = 0,  GAME_PAD = 1  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axissourcetype",
              children: "GamePad_AxisSourceType"
            }), " {  DPAD = 0,  LEFT_THUMBSTICK = 1,  RIGHT_THUMBSTICK = 2,  LEFT_TRIGGER = 3,  RIGHT_TRIGGER = 4  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手柄轴事件来源类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_button_actiontype",
              children: "GamePad_Button_ActionType"
            }), " {  DOWN = 0,  UP = 1  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "手柄按键动作类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamedevice_getalldeviceinfos",
              children: "OH_GameDevice_GetAllDeviceInfos"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_alldeviceinfos",
              children: "GameDevice_AllDeviceInfos"
            }), " **allDeviceInfos)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取所有在线设备的信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamedevice_registerdevicemonitor",
              children: "OH_GameDevice_RegisterDeviceMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_devicemonitorcallback",
              children: "GameDevice_DeviceMonitorCallback"
            }), " deviceMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册设备状态变化事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamedevice_unregisterdevicemonitor",
              children: "OH_GameDevice_UnregisterDeviceMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册设备状态变化事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamedevice_destroyalldeviceinfos",
              children: "OH_GameDevice_DestroyAllDeviceInfos"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_alldeviceinfos",
              children: "GameDevice_AllDeviceInfos"
            }), " **allDeviceInfos)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_alldeviceinfos",
              children: "GameDevice_AllDeviceInfos"
            }), "实例不再使用，销毁该实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamedevice_alldeviceinfos_getcount",
              children: "OH_GameDevice_AllDeviceInfos_GetCount"
            }), " (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_alldeviceinfos",
              children: "GameDevice_AllDeviceInfos"
            }), " *allDeviceInfos, int32_t *count)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取设备数量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamedevice_alldeviceinfos_getdeviceinfo",
              children: "OH_GameDevice_AllDeviceInfos_GetDeviceInfo"
            }), " (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_alldeviceinfos",
              children: "GameDevice_AllDeviceInfos"
            }), " *allDeviceInfos, const int32_t index, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceinfo",
              children: "GameDevice_DeviceInfo"
            }), " **deviceInfo)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从所有设备信息中获取指定序号的设备信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamedevice_deviceevent_getchangedtype",
              children: "OH_GameDevice_DeviceEvent_GetChangedType"
            }), " (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceevent",
              children: "GameDevice_DeviceEvent"
            }), " *deviceEvent, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_statuschangedtype",
              children: "GameDevice_StatusChangedType"
            }), " *statusChangedType)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从设备状态变化事件中获取状态变化类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamedevice_deviceevent_getdeviceinfo",
              children: "OH_GameDevice_DeviceEvent_GetDeviceInfo"
            }), " (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceevent",
              children: "GameDevice_DeviceEvent"
            }), " *deviceEvent, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceinfo",
              children: "GameDevice_DeviceInfo"
            }), " **deviceInfo)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从设备状态变化事件中获取设备信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamedevice_destroydeviceinfo",
              children: "OH_GameDevice_DestroyDeviceInfo"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceinfo",
              children: "GameDevice_DeviceInfo"
            }), " **deviceInfo)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceinfo",
              children: "GameDevice_DeviceInfo"
            }), "实例不再使用，销毁该实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamedevice_deviceinfo_getdeviceid",
              children: "OH_GameDevice_DeviceInfo_GetDeviceId"
            }), " (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceinfo",
              children: "GameDevice_DeviceInfo"
            }), " *deviceInfo, char **deviceId)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从设备信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceinfo",
              children: "GameDevice_DeviceInfo"
            }), "中获取设备ID。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamedevice_deviceinfo_getname",
              children: "OH_GameDevice_DeviceInfo_GetName"
            }), " (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceinfo",
              children: "GameDevice_DeviceInfo"
            }), " *deviceInfo, char **name)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从设备信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceinfo",
              children: "GameDevice_DeviceInfo"
            }), "中获取设备名称。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamedevice_deviceinfo_getproduct",
              children: "OH_GameDevice_DeviceInfo_GetProduct"
            }), " (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceinfo",
              children: "GameDevice_DeviceInfo"
            }), " *deviceInfo, int32_t *product)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从设备信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceinfo",
              children: "GameDevice_DeviceInfo"
            }), "中获取产品信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamedevice_deviceinfo_getversion",
              children: "OH_GameDevice_DeviceInfo_GetVersion"
            }), " (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceinfo",
              children: "GameDevice_DeviceInfo"
            }), " *deviceInfo, int32_t *version)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从设备信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceinfo",
              children: "GameDevice_DeviceInfo"
            }), "中获取版本信息。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamedevice_deviceinfo_getphysicaladdress",
              children: "OH_GameDevice_DeviceInfo_GetPhysicalAddress"
            }), " (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceinfo",
              children: "GameDevice_DeviceInfo"
            }), " *deviceInfo, char **physicalAddress)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从设备信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceinfo",
              children: "GameDevice_DeviceInfo"
            }), "中获取物理地址。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamedevice_deviceinfo_getdevicetype",
              children: "OH_GameDevice_DeviceInfo_GetDeviceType"
            }), " (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceinfo",
              children: "GameDevice_DeviceInfo"
            }), " *deviceInfo, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_devicetype",
              children: "GameDevice_DeviceType"
            }), " *deviceType)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从设备信息", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceinfo",
              children: "GameDevice_DeviceInfo"
            }), "中获取设备类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_leftshoulder_registerbuttoninputmonitor",
              children: "OH_GamePad_LeftShoulder_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册LeftShoulder按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_leftshoulder_unregisterbuttoninputmonitor",
              children: "OH_GamePad_LeftShoulder_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册LeftShoulder按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_rightshoulder_registerbuttoninputmonitor",
              children: "OH_GamePad_RightShoulder_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册RightShoulder按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_rightshoulder_unregisterbuttoninputmonitor",
              children: "OH_GamePad_RightShoulder_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册RightShoulder按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_lefttrigger_registerbuttoninputmonitor",
              children: "OH_GamePad_LeftTrigger_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册LeftTrigger按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_lefttrigger_unregisterbuttoninputmonitor",
              children: "OH_GamePad_LeftTrigger_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册LeftTrigger按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_lefttrigger_registeraxisinputmonitor",
              children: "OH_GamePad_LeftTrigger_RegisterAxisInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisinputmonitorcallback",
              children: "GamePad_AxisInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册LeftTrigger轴事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_lefttrigger_unregisteraxisinputmonitor",
              children: "OH_GamePad_LeftTrigger_UnregisterAxisInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册LeftTrigger轴事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_righttrigger_registerbuttoninputmonitor",
              children: "OH_GamePad_RightTrigger_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册RightTrigger按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_righttrigger_unregisterbuttoninputmonitor",
              children: "OH_GamePad_RightTrigger_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册RightTrigger按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_righttrigger_registeraxisinputmonitor",
              children: "OH_GamePad_RightTrigger_RegisterAxisInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisinputmonitorcallback",
              children: "GamePad_AxisInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册RightTrigger轴事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_righttrigger_unregisteraxisinputmonitor",
              children: "OH_GamePad_RightTrigger_UnregisterAxisInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册RightTrigger轴事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_buttonmenu_registerbuttoninputmonitor",
              children: "OH_GamePad_ButtonMenu_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册Menu按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_buttonmenu_unregisterbuttoninputmonitor",
              children: "OH_GamePad_ButtonMenu_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册Menu按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_buttonhome_registerbuttoninputmonitor",
              children: "OH_GamePad_ButtonHome_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册Home按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_buttonhome_unregisterbuttoninputmonitor",
              children: "OH_GamePad_ButtonHome_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册Home按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_buttona_registerbuttoninputmonitor",
              children: "OH_GamePad_ButtonA_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册A按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_buttona_unregisterbuttoninputmonitor",
              children: "OH_GamePad_ButtonA_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册A按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_buttonb_registerbuttoninputmonitor",
              children: "OH_GamePad_ButtonB_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册B按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_buttonb_unregisterbuttoninputmonitor",
              children: "OH_GamePad_ButtonB_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册B按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_buttonx_registerbuttoninputmonitor",
              children: "OH_GamePad_ButtonX_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册X按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_buttonx_unregisterbuttoninputmonitor",
              children: "OH_GamePad_ButtonX_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册X按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_buttony_registerbuttoninputmonitor",
              children: "OH_GamePad_ButtonY_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册Y按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_buttony_unregisterbuttoninputmonitor",
              children: "OH_GamePad_ButtonY_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册Y按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_buttonc_registerbuttoninputmonitor",
              children: "OH_GamePad_ButtonC_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册C按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_buttonc_unregisterbuttoninputmonitor",
              children: "OH_GamePad_ButtonC_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册C按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_dpad_leftbutton_registerbuttoninputmonitor",
              children: "OH_GamePad_Dpad_LeftButton_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册方向按键的向左按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_dpad_leftbutton_unregisterbuttoninputmonitor",
              children: "OH_GamePad_Dpad_LeftButton_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册方向按键的向左按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_dpad_rightbutton_registerbuttoninputmonitor",
              children: "OH_GamePad_Dpad_RightButton_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册方向按键的向右按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_dpad_rightbutton_unregisterbuttoninputmonitor",
              children: "OH_GamePad_Dpad_RightButton_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册方向按键的向右按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_dpad_upbutton_registerbuttoninputmonitor",
              children: "OH_GamePad_Dpad_UpButton_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册方向按键的向上按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_dpad_upbutton_unregisterbuttoninputmonitor",
              children: "OH_GamePad_Dpad_UpButton_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册方向按键的向上按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_dpad_downbutton_registerbuttoninputmonitor",
              children: "OH_GamePad_Dpad_DownButton_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册方向按键的向下按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_dpad_downbutton_unregisterbuttoninputmonitor",
              children: "OH_GamePad_Dpad_DownButton_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册方向按键的向下按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_dpad_registeraxisinputmonitor",
              children: "OH_GamePad_Dpad_RegisterAxisInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisinputmonitorcallback",
              children: "GamePad_AxisInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册方向按键轴事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_dpad_unregisteraxisinputmonitor",
              children: "OH_GamePad_Dpad_UnregisterAxisInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册方向按键轴事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_leftthumbstick_registerbuttoninputmonitor",
              children: "OH_GamePad_LeftThumbstick_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册LeftThumbstick按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_leftthumbstick_unregisterbuttoninputmonitor",
              children: "OH_GamePad_LeftThumbstick_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册LeftThumbstick按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_leftthumbstick_registeraxisinputmonitor",
              children: "OH_GamePad_LeftThumbstick_RegisterAxisInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisinputmonitorcallback",
              children: "GamePad_AxisInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册LeftThumbstick轴事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_leftthumbstick_unregisteraxisinputmonitor",
              children: "OH_GamePad_LeftThumbstick_UnregisterAxisInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册LeftThumbstick轴事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_rightthumbstick_registerbuttoninputmonitor",
              children: "OH_GamePad_RightThumbstick_RegisterButtonInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册RightThumbstick按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_rightthumbstick_unregisterbuttoninputmonitor",
              children: "OH_GamePad_RightThumbstick_UnregisterButtonInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册RightThumbstick按键事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_rightthumbstick_registeraxisinputmonitor",
              children: "OH_GamePad_RightThumbstick_RegisterAxisInputMonitor"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisinputmonitorcallback",
              children: "GamePad_AxisInputMonitorCallback"
            }), " inputMonitorCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册RightThumbstick轴事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_rightthumbstick_unregisteraxisinputmonitor",
              children: "OH_GamePad_RightThumbstick_UnregisterAxisInputMonitor"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册RightThumbstick轴事件的监听回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_buttonevent_getdeviceid",
              children: "OH_GamePad_ButtonEvent_GetDeviceId"
            }), " (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttonevent",
              children: "GamePad_ButtonEvent"
            }), " *buttonEvent, char **deviceId)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从按键事件", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttonevent",
              children: "GamePad_ButtonEvent"
            }), "中获取设备ID。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_buttonevent_getbuttonaction",
              children: "OH_GamePad_ButtonEvent_GetButtonAction"
            }), " (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttonevent",
              children: "GamePad_ButtonEvent"
            }), " *buttonEvent, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_button_actiontype",
              children: "GamePad_Button_ActionType"
            }), " *actionType)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从按键事件", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttonevent",
              children: "GamePad_ButtonEvent"
            }), "中获取按键动作类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_buttonevent_getbuttoncode",
              children: "OH_GamePad_ButtonEvent_GetButtonCode"
            }), " (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttonevent",
              children: "GamePad_ButtonEvent"
            }), " *buttonEvent, int32_t *code)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从按键事件", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttonevent",
              children: "GamePad_ButtonEvent"
            }), "中获取按键编码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_buttonevent_getbuttoncodename",
              children: "OH_GamePad_ButtonEvent_GetButtonCodeName"
            }), " (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttonevent",
              children: "GamePad_ButtonEvent"
            }), " *buttonEvent, char **codeName)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从按键事件", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttonevent",
              children: "GamePad_ButtonEvent"
            }), "中获取按键的名称。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_pressedbuttons_getcount",
              children: "OH_GamePad_PressedButtons_GetCount"
            }), " (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttonevent",
              children: "GamePad_ButtonEvent"
            }), " *buttonEvent, int32_t *count)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从按键事件", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttonevent",
              children: "GamePad_ButtonEvent"
            }), "中获取按下的按键数量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_pressedbuttons_getbuttoninfo",
              children: "OH_GamePad_PressedButtons_GetButtonInfo"
            }), " (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttonevent",
              children: "GamePad_ButtonEvent"
            }), " *buttonEvent, const int32_t index, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_pressedbutton",
              children: "GamePad_PressedButton"
            }), " **pressedButton)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从按键事件", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttonevent",
              children: "GamePad_ButtonEvent"
            }), "中获取指定序号的按下的按键。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_destroypressedbutton",
              children: "OH_GamePad_DestroyPressedButton"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_pressedbutton",
              children: "GamePad_PressedButton"
            }), " **pressedButton)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["当", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_pressedbutton",
              children: "GamePad_PressedButton"
            }), "实例不再使用， 销毁该实例。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_pressedbutton_getbuttoncode",
              children: "OH_GamePad_PressedButton_GetButtonCode"
            }), " (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_pressedbutton",
              children: "GamePad_PressedButton"
            }), " *pressedButton, int32_t *code)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从按下的按键", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_pressedbutton",
              children: "GamePad_PressedButton"
            }), "中获取按键编码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_pressedbutton_getbuttoncodename",
              children: "OH_GamePad_PressedButton_GetButtonCodeName"
            }), " (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_pressedbutton",
              children: "GamePad_PressedButton"
            }), " *pressedButton, char **codeName)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从按下的按键", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_pressedbutton",
              children: "GamePad_PressedButton"
            }), "中获取按键的名称。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_buttonevent_getactiontime",
              children: "OH_GamePad_ButtonEvent_GetActionTime"
            }), " (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttonevent",
              children: "GamePad_ButtonEvent"
            }), " *buttonEvent, int64_t *actionTime)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从按键事件", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttonevent",
              children: "GamePad_ButtonEvent"
            }), "中获取按键动作的时间。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_axisevent_getdeviceid",
              children: "OH_GamePad_AxisEvent_GetDeviceId"
            }), " (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), " *axisEvent, char **deviceId)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从轴事件", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), "中获取设备ID。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_axisevent_getaxissourcetype",
              children: "OH_GamePad_AxisEvent_GetAxisSourceType"
            }), " (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), " *axisEvent, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axissourcetype",
              children: "GamePad_AxisSourceType"
            }), " *axisSourceType)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从轴事件", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), "中获取轴事件来源类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_axisevent_getxaxisvalue",
              children: "OH_GamePad_AxisEvent_GetXAxisValue"
            }), " (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), " *axisEvent, double *axisValue)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从轴事件", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), "中获取X轴的轴值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_axisevent_getyaxisvalue",
              children: "OH_GamePad_AxisEvent_GetYAxisValue"
            }), " (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), " *axisEvent, double *axisValue)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从轴事件", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), "中获取Y轴的轴值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_axisevent_getzaxisvalue",
              children: "OH_GamePad_AxisEvent_GetZAxisValue"
            }), " (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), " *axisEvent, double *axisValue)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从轴事件", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), "中获取Z轴的轴值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_axisevent_getrzaxisvalue",
              children: "OH_GamePad_AxisEvent_GetRZAxisValue"
            }), " (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), " *axisEvent, double *axisValue)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从轴事件", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), "中获取RZ轴的轴值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_axisevent_gethatxaxisvalue",
              children: "OH_GamePad_AxisEvent_GetHatXAxisValue"
            }), " (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), " *axisEvent, double *axisValue)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从轴事件", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), "中获取HatX轴的轴值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_axisevent_gethatyaxisvalue",
              children: "OH_GamePad_AxisEvent_GetHatYAxisValue"
            }), " (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), " *axisEvent, double *axisValue)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从轴事件", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), "中获取HatY轴的轴值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_axisevent_getbrakeaxisvalue",
              children: "OH_GamePad_AxisEvent_GetBrakeAxisValue"
            }), " (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), " *axisEvent, double *axisValue)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从轴事件", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), "中获取Brake轴的轴值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_axisevent_getgasaxisvalue",
              children: "OH_GamePad_AxisEvent_GetGasAxisValue"
            }), " (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), " *axisEvent, double *axisValue)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从轴事件", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), "中获取Gas轴的轴值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#gamecontroller_errorcode",
              children: "GameController_ErrorCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#oh_gamepad_axisevent_getactiontime",
              children: "OH_GamePad_AxisEvent_GetActionTime"
            }), " (const struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), " *axisEvent, int64_t *actionTime)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["从轴事件", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), "中获取动作时间。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "类型定义说明",
      children: "类型定义说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gamecontroller_errorcode",
      children: "GameController_ErrorCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum GameController_ErrorCode GameController_ErrorCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举定义游戏控制器的错误码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gamedevice_alldeviceinfos",
      children: "GameDevice_AllDeviceInfos"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct GameDevice_AllDeviceInfos GameDevice_AllDeviceInfos\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["定义", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_gamedevice_getalldeviceinfos",
        children: "OH_GameDevice_GetAllDeviceInfos"
      }), "接口的调用结果。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gamedevice_deviceevent",
      children: "GameDevice_DeviceEvent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct GameDevice_DeviceEvent GameDevice_DeviceEvent\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义设备状态变化事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gamedevice_deviceinfo",
      children: "GameDevice_DeviceInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct GameDevice_DeviceInfo GameDevice_DeviceInfo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义设备信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gamedevice_devicemonitorcallback",
      children: "GameDevice_DeviceMonitorCallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(*GameDevice_DeviceMonitorCallback) (const struct GameDevice_DeviceEvent *deviceEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["定义", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oh_gamedevice_registerdevicemonitor",
        children: "OH_GameDevice_RegisterDeviceMonitor"
      }), "中使用的回调函数。当设备上线或下线时，该回调函数将被调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceEvent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出参数。设备状态变化事件", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceevent",
              children: "GameDevice_DeviceEvent"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gamedevice_devicetype",
      children: "GameDevice_DeviceType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum GameDevice_DeviceType GameDevice_DeviceType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举定义设备类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gamedevice_statuschangedtype",
      children: "GameDevice_StatusChangedType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum GameDevice_StatusChangedType GameDevice_StatusChangedType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举定义设备的状态变化类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gamepad_axisevent",
      children: "GamePad_AxisEvent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct GamePad_AxisEvent GamePad_AxisEvent\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义手柄轴事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gamepad_axisinputmonitorcallback",
      children: "GamePad_AxisInputMonitorCallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(*GamePad_AxisInputMonitorCallback) (const struct GamePad_AxisEvent *axisEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义在轴事件注册监听接口中使用的回调函数。当玩家操作摇杆时，该回调函数将被调用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "axisEvent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出参数，手柄轴事件", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gamepad_axissourcetype",
      children: "GamePad_AxisSourceType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum GamePad_AxisSourceType GamePad_AxisSourceType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举定义手柄轴事件来源类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gamepad_button_actiontype",
      children: "GamePad_Button_ActionType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum GamePad_Button_ActionType GamePad_Button_ActionType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举定义手柄按键动作类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gamepad_buttonevent",
      children: "GamePad_ButtonEvent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct GamePad_ButtonEvent GamePad_ButtonEvent\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义手柄按键事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gamepad_buttoninputmonitorcallback",
      children: "GamePad_ButtonInputMonitorCallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(*GamePad_ButtonInputMonitorCallback) (const struct GamePad_ButtonEvent *buttonEvent)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义在按键事件注册监听接口中使用的回调函数。当玩家按下按键时，该回调函数将被调用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buttonEvent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出参数，手柄按键事件", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttonevent",
              children: "GamePad_ButtonEvent"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gamepad_pressedbutton",
      children: "GamePad_PressedButton"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct GamePad_PressedButton GamePad_PressedButton\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义手柄按下的按键。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gamecontroller_errorcode-1",
      children: "GameController_ErrorCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum GameController_ErrorCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举定义游戏控制器的错误码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_CONTROLLER_SUCCESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_CONTROLLER_PARAM_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "参数非法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_CONTROLLER_MULTIMODAL_INPUT_ERROR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询多模输入中所有设备信息失败。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_CONTROLLER_NO_MEMORY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备内存不足。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gamedevice_devicetype-1",
      children: "GameDevice_DeviceType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum GameDevice_DeviceType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举定义设备类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UNKNOWN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未知。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GAME_PAD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "游戏手柄。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gamedevice_statuschangedtype-1",
      children: "GameDevice_StatusChangedType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum GameDevice_StatusChangedType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举定义设备的状态变化类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OFFLINE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备下线。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ONLINE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备上线。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gamepad_axissourcetype-1",
      children: "GamePad_AxisSourceType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum GamePad_AxisSourceType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举定义手柄轴事件来源类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DPAD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轴事件来源于方向按键DPAD。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEFT_THUMBSTICK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轴事件来源于LeftThumbstick。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RIGHT_THUMBSTICK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轴事件来源于RightThumbstick。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LEFT_TRIGGER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轴事件来源于LeftTrigger。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RIGHT_TRIGGER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "轴事件来源于RightTrigger。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gamepad_button_actiontype-1",
      children: "GamePad_Button_ActionType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum GamePad_Button_ActionType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此枚举定义手柄按键动作类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DOWN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键按下。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按键抬起。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamedevice_alldeviceinfos_getcount",
      children: "OH_GameDevice_AllDeviceInfos_GetCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GameDevice_AllDeviceInfos_GetCount (const struct GameDevice_AllDeviceInfos *allDeviceInfos, int32_t *count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取设备数量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "allDeviceInfos"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_alldeviceinfos",
              children: "GameDevice_AllDeviceInfos"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，设备数量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数allDeviceInfos为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamedevice_alldeviceinfos_getdeviceinfo",
      children: "OH_GameDevice_AllDeviceInfos_GetDeviceInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GameDevice_AllDeviceInfos_GetDeviceInfo (const struct GameDevice_AllDeviceInfos *allDeviceInfos, const int32_t index, GameDevice_DeviceInfo **deviceInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从所有设备信息中获取指定序号的设备信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "allDeviceInfos"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_alldeviceinfos",
              children: "GameDevice_AllDeviceInfos"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定查询的设备序号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出参数，二级指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceinfo",
              children: "GameDevice_DeviceInfo"
            }), "设备信息实例。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：allDeviceInfos为null或者index小于0或者index大于等于所有设备数。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamedevice_destroyalldeviceinfos",
      children: "OH_GameDevice_DestroyAllDeviceInfos()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GameDevice_DestroyAllDeviceInfos (GameDevice_AllDeviceInfos **allDeviceInfos)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamedevice_alldeviceinfos",
        children: "GameDevice_AllDeviceInfos"
      }), "实例不再使用，销毁该实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "allDeviceInfos"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["二级指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_alldeviceinfos",
              children: "GameDevice_AllDeviceInfos"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数allDeviceInfos为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamedevice_destroydeviceinfo",
      children: "OH_GameDevice_DestroyDeviceInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GameDevice_DestroyDeviceInfo (GameDevice_DeviceInfo **deviceInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamedevice_deviceinfo",
        children: "GameDevice_DeviceInfo"
      }), "实例不再使用，销毁该实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["二级指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceinfo",
              children: "GameDevice_DeviceInfo"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数deviceInfo为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamedevice_deviceevent_getchangedtype",
      children: "OH_GameDevice_DeviceEvent_GetChangedType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GameDevice_DeviceEvent_GetChangedType (const struct GameDevice_DeviceEvent *deviceEvent, GameDevice_StatusChangedType *statusChangedType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从设备状态变化事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamedevice_deviceevent",
        children: "GameDevice_DeviceEvent"
      }), "中获取状态变化类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "deviceEvent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceevent",
              children: "GameDevice_DeviceEvent"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "statusChangedType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，设备状态变化类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数deviceEvent为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamedevice_deviceevent_getdeviceinfo",
      children: "OH_GameDevice_DeviceEvent_GetDeviceInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GameDevice_DeviceEvent_GetDeviceInfo (const struct GameDevice_DeviceEvent *deviceEvent, GameDevice_DeviceInfo **deviceInfo)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从设备状态变化事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamedevice_deviceevent",
        children: "GameDevice_DeviceEvent"
      }), "中获取设备信息。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "deviceEvent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceevent",
              children: "GameDevice_DeviceEvent"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出参数，二级指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceinfo",
              children: "GameDevice_DeviceInfo"
            }), "设备信息实例。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数deviceEvent为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamedevice_deviceinfo_getdeviceid",
      children: "OH_GameDevice_DeviceInfo_GetDeviceId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GameDevice_DeviceInfo_GetDeviceId (const struct GameDevice_DeviceInfo *deviceInfo, char **deviceId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从设备信息", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamedevice_deviceinfo",
        children: "GameDevice_DeviceInfo"
      }), "中获取设备ID。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "deviceInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceinfo",
              children: "GameDevice_DeviceInfo"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，二级指针指向设备ID。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数deviceInfo或deviceId为null。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_NO_MEMORY：设备内存不足。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamedevice_deviceinfo_getdevicetype",
      children: "OH_GameDevice_DeviceInfo_GetDeviceType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GameDevice_DeviceInfo_GetDeviceType (const struct GameDevice_DeviceInfo *deviceInfo, GameDevice_DeviceType *deviceType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从设备信息", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamedevice_deviceinfo",
        children: "GameDevice_DeviceInfo"
      }), "中获取设备类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "deviceInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceinfo",
              children: "GameDevice_DeviceInfo"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，设备类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数deviceInfo为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamedevice_deviceinfo_getname",
      children: "OH_GameDevice_DeviceInfo_GetName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GameDevice_DeviceInfo_GetName (const struct GameDevice_DeviceInfo *deviceInfo, char **name)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从设备信息", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamedevice_deviceinfo",
        children: "GameDevice_DeviceInfo"
      }), "中获取设备名称。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "deviceInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceinfo",
              children: "GameDevice_DeviceInfo"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，二级指针指向设备名称。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数deviceInfo或name为null。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_NO_MEMORY：设备内存不足。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamedevice_deviceinfo_getphysicaladdress",
      children: "OH_GameDevice_DeviceInfo_GetPhysicalAddress()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GameDevice_DeviceInfo_GetPhysicalAddress (const struct GameDevice_DeviceInfo *deviceInfo, char **physicalAddress)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从设备信息", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamedevice_deviceinfo",
        children: "GameDevice_DeviceInfo"
      }), "中获取物理地址。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "deviceInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceinfo",
              children: "GameDevice_DeviceInfo"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "physicalAddress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，二级指针指向物理地址。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数deviceInfo或physicalAddress为null。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_NO_MEMORY：设备内存不足。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamedevice_deviceinfo_getproduct",
      children: "OH_GameDevice_DeviceInfo_GetProduct()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GameDevice_DeviceInfo_GetProduct (const struct GameDevice_DeviceInfo *deviceInfo, int32_t *product)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从设备信息", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamedevice_deviceinfo",
        children: "GameDevice_DeviceInfo"
      }), "中获取产品信息。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "deviceInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceinfo",
              children: "GameDevice_DeviceInfo"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "product"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，产品信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数deviceInfo为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamedevice_deviceinfo_getversion",
      children: "OH_GameDevice_DeviceInfo_GetVersion()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GameDevice_DeviceInfo_GetVersion (const struct GameDevice_DeviceInfo *deviceInfo, int32_t *version)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从设备信息", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamedevice_deviceinfo",
        children: "GameDevice_DeviceInfo"
      }), "中获取版本信息。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "deviceInfo"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_deviceinfo",
              children: "GameDevice_DeviceInfo"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，版本信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数deviceInfo为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamedevice_getalldeviceinfos",
      children: "OH_GameDevice_GetAllDeviceInfos()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GameDevice_GetAllDeviceInfos (GameDevice_AllDeviceInfos **allDeviceInfos)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取所有在线设备的信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "allDeviceInfos"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出参数。二级指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_alldeviceinfos",
              children: "GameDevice_AllDeviceInfos"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_MULTIMODAL_INPUT_ERROR：查询多模输入中所有设备信息失败。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamedevice_registerdevicemonitor",
      children: "OH_GameDevice_RegisterDeviceMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GameDevice_RegisterDeviceMonitor (GameDevice_DeviceMonitorCallback deviceMonitorCallback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册设备状态变化事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceMonitorCallback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamedevice_devicemonitorcallback",
              children: "GameDevice_DeviceMonitorCallback"
            }), "，不能为空，否则将返回错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数deviceMonitorCallback为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamedevice_unregisterdevicemonitor",
      children: "OH_GameDevice_UnregisterDeviceMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GameDevice_UnregisterDeviceMonitor (void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册设备状态变化事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_axisevent_getactiontime",
      children: "OH_GamePad_AxisEvent_GetActionTime()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_AxisEvent_GetActionTime (const struct GamePad_AxisEvent *axisEvent, int64_t *actionTime)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从轴事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamepad_axisevent",
        children: "GamePad_AxisEvent"
      }), "中获取动作时间。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "axisEvent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "actionTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，动作时间。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数axisEvent为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_axisevent_getaxissourcetype",
      children: "OH_GamePad_AxisEvent_GetAxisSourceType()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_AxisEvent_GetAxisSourceType (const struct GamePad_AxisEvent *axisEvent, GamePad_AxisSourceType *axisSourceType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从轴事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamepad_axisevent",
        children: "GamePad_AxisEvent"
      }), "中获取轴事件来源类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "axisEvent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "axisSourceType"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出参数，轴事件来源类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axissourcetype",
              children: "GamePad_AxisSourceType"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数axisEvent为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_axisevent_getbrakeaxisvalue",
      children: "OH_GamePad_AxisEvent_GetBrakeAxisValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_AxisEvent_GetBrakeAxisValue (const struct GamePad_AxisEvent *axisEvent, double *axisValue)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从轴事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamepad_axisevent",
        children: "GamePad_AxisEvent"
      }), "中获取Brake轴的轴值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "axisEvent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "axisValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，轴值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数axisEvent为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_axisevent_getdeviceid",
      children: "OH_GamePad_AxisEvent_GetDeviceId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_AxisEvent_GetDeviceId (const struct GamePad_AxisEvent *axisEvent, char **deviceId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从轴事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamepad_axisevent",
        children: "GamePad_AxisEvent"
      }), "中获取设备ID。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "axisEvent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，二级指针指向设备ID。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数axisEvent或deviceId为null。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_NO_MEMORY：设备内存不足。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_axisevent_getgasaxisvalue",
      children: "OH_GamePad_AxisEvent_GetGasAxisValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_AxisEvent_GetGasAxisValue (const struct GamePad_AxisEvent *axisEvent, double *axisValue)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从轴事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamepad_axisevent",
        children: "GamePad_AxisEvent"
      }), "中获取Gas轴的轴值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "axisEvent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "axisValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，轴值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数axisEvent为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_axisevent_gethatxaxisvalue",
      children: "OH_GamePad_AxisEvent_GetHatXAxisValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_AxisEvent_GetHatXAxisValue (const struct GamePad_AxisEvent *axisEvent, double *axisValue)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从轴事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamepad_axisevent",
        children: "GamePad_AxisEvent"
      }), "中获取HatX轴的轴值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "axisEvent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "axisValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，轴值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数axisEvent为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_axisevent_gethatyaxisvalue",
      children: "OH_GamePad_AxisEvent_GetHatYAxisValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_AxisEvent_GetHatYAxisValue (const struct GamePad_AxisEvent *axisEvent, double *axisValue)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从轴事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamepad_axisevent",
        children: "GamePad_AxisEvent"
      }), "中获取HatY轴的轴值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "axisEvent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "axisValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，轴值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数axisEvent为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_axisevent_getrzaxisvalue",
      children: "OH_GamePad_AxisEvent_GetRZAxisValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_AxisEvent_GetRZAxisValue (const struct GamePad_AxisEvent *axisEvent, double *axisValue)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从轴事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamepad_axisevent",
        children: "GamePad_AxisEvent"
      }), "中获取RZ轴的轴值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "axisEvent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "axisValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，轴值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数axisEvent为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_axisevent_getxaxisvalue",
      children: "OH_GamePad_AxisEvent_GetXAxisValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_AxisEvent_GetXAxisValue (const struct GamePad_AxisEvent *axisEvent, double *axisValue)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从轴事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamepad_axisevent",
        children: "GamePad_AxisEvent"
      }), "中获取X轴的轴值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "axisEvent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "axisValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，轴值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数axisEvent为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_axisevent_getyaxisvalue",
      children: "OH_GamePad_AxisEvent_GetYAxisValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_AxisEvent_GetYAxisValue (const struct GamePad_AxisEvent *axisEvent, double *axisValue)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从轴事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamepad_axisevent",
        children: "GamePad_AxisEvent"
      }), "中获取Y轴的轴值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "axisEvent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "axisValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，轴值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数axisEvent为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_axisevent_getzaxisvalue",
      children: "OH_GamePad_AxisEvent_GetZAxisValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_AxisEvent_GetZAxisValue (const struct GamePad_AxisEvent *axisEvent, double *axisValue)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从轴事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamepad_axisevent",
        children: "GamePad_AxisEvent"
      }), "中获取Z轴的轴值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "axisEvent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisevent",
              children: "GamePad_AxisEvent"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "axisValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，轴值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数axisEvent为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_buttona_registerbuttoninputmonitor",
      children: "OH_GamePad_ButtonA_RegisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_ButtonA_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册A按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputMonitorCallback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), "，不能为空，否则将返回错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_buttona_unregisterbuttoninputmonitor",
      children: "OH_GamePad_ButtonA_UnregisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_ButtonA_UnregisterButtonInputMonitor (void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册A按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_buttonb_registerbuttoninputmonitor",
      children: "OH_GamePad_ButtonB_RegisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_ButtonB_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册B按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputMonitorCallback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出参数，回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), "，不能为空，否则将返回错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_buttonb_unregisterbuttoninputmonitor",
      children: "OH_GamePad_ButtonB_UnregisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_ButtonB_UnregisterButtonInputMonitor (void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册B按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_buttonc_registerbuttoninputmonitor",
      children: "OH_GamePad_ButtonC_RegisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_ButtonC_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册C按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputMonitorCallback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出参数，回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), "，不能为空，否则将返回错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_buttonc_unregisterbuttoninputmonitor",
      children: "OH_GamePad_ButtonC_UnregisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_ButtonC_UnregisterButtonInputMonitor (void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册C按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_buttonevent_getactiontime",
      children: "OH_GamePad_ButtonEvent_GetActionTime()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_ButtonEvent_GetActionTime (const struct GamePad_ButtonEvent *buttonEvent, int64_t *actionTime)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从按键事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamepad_buttonevent",
        children: "GamePad_ButtonEvent"
      }), "中获取按键动作的时间。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "buttonEvent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttonevent",
              children: "GamePad_ButtonEvent"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "actionTime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，按键动作的时间。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数buttonEvent为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_buttonevent_getbuttonaction",
      children: "OH_GamePad_ButtonEvent_GetButtonAction()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_ButtonEvent_GetButtonAction (const struct GamePad_ButtonEvent *buttonEvent, GamePad_Button_ActionType *actionType)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从按键事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamepad_buttonevent",
        children: "GamePad_ButtonEvent"
      }), "中获取按键动作类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "buttonEvent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttonevent",
              children: "GamePad_ButtonEvent"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "actionType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，按键动作类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数buttonEvent为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_buttonevent_getbuttoncode",
      children: "OH_GamePad_ButtonEvent_GetButtonCode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_ButtonEvent_GetButtonCode (const struct GamePad_ButtonEvent *buttonEvent, int32_t *code)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从按键事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamepad_buttonevent",
        children: "GamePad_ButtonEvent"
      }), "中获取按键编码。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "buttonEvent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttonevent",
              children: "GamePad_ButtonEvent"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，按键编码。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数buttonEvent为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_buttonevent_getbuttoncodename",
      children: "OH_GamePad_ButtonEvent_GetButtonCodeName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_ButtonEvent_GetButtonCodeName (const struct GamePad_ButtonEvent *buttonEvent, char **codeName)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从按键事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamepad_buttonevent",
        children: "GamePad_ButtonEvent"
      }), "中获取按键的名称。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "buttonEvent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttonevent",
              children: "GamePad_ButtonEvent"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "codeName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，二级指针指向按键的名称。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数buttonEvent或codeName为null。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_NO_MEMORY：设备内存不足。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_buttonevent_getdeviceid",
      children: "OH_GamePad_ButtonEvent_GetDeviceId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_ButtonEvent_GetDeviceId (const struct GamePad_ButtonEvent *buttonEvent, char **deviceId)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从按键事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamepad_buttonevent",
        children: "GamePad_ButtonEvent"
      }), "中获取设备ID。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "buttonEvent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttonevent",
              children: "GamePad_ButtonEvent"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "deviceId"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，二级指针指向设备ID。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数buttonEvent或deviceId为null。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_NO_MEMORY：设备内存不足。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_buttonhome_registerbuttoninputmonitor",
      children: "OH_GamePad_ButtonHome_RegisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_ButtonHome_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册Home按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputMonitorCallback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), "，不能为空，否则将返回错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_buttonhome_unregisterbuttoninputmonitor",
      children: "OH_GamePad_ButtonHome_UnregisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_ButtonHome_UnregisterButtonInputMonitor (void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册Home按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_buttonmenu_registerbuttoninputmonitor",
      children: "OH_GamePad_ButtonMenu_RegisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_ButtonMenu_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册Menu按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputMonitorCallback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), "，不能为空，否则将返回错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_buttonmenu_unregisterbuttoninputmonitor",
      children: "OH_GamePad_ButtonMenu_UnregisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_ButtonMenu_UnregisterButtonInputMonitor (void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册Menu按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_buttonx_registerbuttoninputmonitor",
      children: "OH_GamePad_ButtonX_RegisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_ButtonX_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册X按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputMonitorCallback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出参数，回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), "，不能为空，否则将返回错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_buttonx_unregisterbuttoninputmonitor",
      children: "OH_GamePad_ButtonX_UnregisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_ButtonX_UnregisterButtonInputMonitor (void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册X按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_buttony_registerbuttoninputmonitor",
      children: "OH_GamePad_ButtonY_RegisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_ButtonY_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册Y按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputMonitorCallback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出参数，回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), "，不能为空，否则将返回错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_buttony_unregisterbuttoninputmonitor",
      children: "OH_GamePad_ButtonY_UnregisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_ButtonY_UnregisterButtonInputMonitor (void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册Y按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_destroypressedbutton",
      children: "OH_GamePad_DestroyPressedButton()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_DestroyPressedButton (GamePad_PressedButton **pressedButton)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamepad_pressedbutton",
        children: "GamePad_PressedButton"
      }), "实例不再使用， 销毁该实例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pressedButton"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["二级指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_pressedbutton",
              children: "GamePad_PressedButton"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数pressedButton为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_dpad_downbutton_registerbuttoninputmonitor",
      children: "OH_GamePad_Dpad_DownButton_RegisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_Dpad_DownButton_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册方向按键的向下按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputMonitorCallback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), "，不能为空，否则将返回错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_dpad_downbutton_unregisterbuttoninputmonitor",
      children: "OH_GamePad_Dpad_DownButton_UnregisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_Dpad_DownButton_UnregisterButtonInputMonitor (void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册方向按键的向下按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_dpad_leftbutton_registerbuttoninputmonitor",
      children: "OH_GamePad_Dpad_LeftButton_RegisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_Dpad_LeftButton_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册方向按键的向左按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputMonitorCallback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), "，不能为空，否则将返回错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_dpad_leftbutton_unregisterbuttoninputmonitor",
      children: "OH_GamePad_Dpad_LeftButton_UnregisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_Dpad_LeftButton_UnregisterButtonInputMonitor (void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册方向按键的向左按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_dpad_registeraxisinputmonitor",
      children: "OH_GamePad_Dpad_RegisterAxisInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_Dpad_RegisterAxisInputMonitor (GamePad_AxisInputMonitorCallback inputMonitorCallback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册方向按键轴事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputMonitorCallback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisinputmonitorcallback",
              children: "GamePad_AxisInputMonitorCallback"
            }), "，不能为空，否则将返回错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_dpad_rightbutton_registerbuttoninputmonitor",
      children: "OH_GamePad_Dpad_RightButton_RegisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_Dpad_RightButton_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册方向按键的向右按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputMonitorCallback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), "，不能为空，否则将返回错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_dpad_rightbutton_unregisterbuttoninputmonitor",
      children: "OH_GamePad_Dpad_RightButton_UnregisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_Dpad_RightButton_UnregisterButtonInputMonitor (void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册方向按键的向右按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_dpad_unregisteraxisinputmonitor",
      children: "OH_GamePad_Dpad_UnregisterAxisInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_Dpad_UnregisterAxisInputMonitor (void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册方向按键轴事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_dpad_upbutton_registerbuttoninputmonitor",
      children: "OH_GamePad_Dpad_UpButton_RegisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_Dpad_UpButton_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册方向按键的向上按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputMonitorCallback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), "，不能为空，否则将返回错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_dpad_upbutton_unregisterbuttoninputmonitor",
      children: "OH_GamePad_Dpad_UpButton_UnregisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_Dpad_UpButton_UnregisterButtonInputMonitor (void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册方向按键的向上按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_leftshoulder_registerbuttoninputmonitor",
      children: "OH_GamePad_LeftShoulder_RegisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_LeftShoulder_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册LeftShoulder按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputMonitorCallback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), "，不能为空，否则将返回错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_leftshoulder_unregisterbuttoninputmonitor",
      children: "OH_GamePad_LeftShoulder_UnregisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_LeftShoulder_UnregisterButtonInputMonitor (void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册LeftShoulder按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_leftthumbstick_registeraxisinputmonitor",
      children: "OH_GamePad_LeftThumbstick_RegisterAxisInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_LeftThumbstick_RegisterAxisInputMonitor (GamePad_AxisInputMonitorCallback inputMonitorCallback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册LeftThumbstick轴事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputMonitorCallback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisinputmonitorcallback",
              children: "GamePad_AxisInputMonitorCallback"
            }), "，不能为空，否则将返回错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_leftthumbstick_registerbuttoninputmonitor",
      children: "OH_GamePad_LeftThumbstick_RegisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_LeftThumbstick_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册LeftThumbstick按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputMonitorCallback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), "，不能为空，否则将返回错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_leftthumbstick_unregisteraxisinputmonitor",
      children: "OH_GamePad_LeftThumbstick_UnregisterAxisInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_LeftThumbstick_UnregisterAxisInputMonitor (void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册LeftThumbstick轴事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_leftthumbstick_unregisterbuttoninputmonitor",
      children: "OH_GamePad_LeftThumbstick_UnregisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_LeftThumbstick_UnregisterButtonInputMonitor (void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册LeftThumbstick按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_lefttrigger_registeraxisinputmonitor",
      children: "OH_GamePad_LeftTrigger_RegisterAxisInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_LeftTrigger_RegisterAxisInputMonitor (GamePad_AxisInputMonitorCallback inputMonitorCallback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册LeftTrigger轴事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputMonitorCallback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisinputmonitorcallback",
              children: "GamePad_AxisInputMonitorCallback"
            }), "，不能为空，否则将返回错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_lefttrigger_registerbuttoninputmonitor",
      children: "OH_GamePad_LeftTrigger_RegisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_LeftTrigger_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册LeftTrigger按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputMonitorCallback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), "，不能为空，否则将返回错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_lefttrigger_unregisteraxisinputmonitor",
      children: "OH_GamePad_LeftTrigger_UnregisterAxisInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_LeftTrigger_UnregisterAxisInputMonitor (void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册LeftTrigger轴事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_lefttrigger_unregisterbuttoninputmonitor",
      children: "OH_GamePad_LeftTrigger_UnregisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_LeftTrigger_UnregisterButtonInputMonitor (void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册LeftTrigger按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_pressedbutton_getbuttoncode",
      children: "OH_GamePad_PressedButton_GetButtonCode()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_PressedButton_GetButtonCode (const struct GamePad_PressedButton *pressedButton, int32_t *code)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从按下的按键", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamepad_pressedbutton",
        children: "GamePad_PressedButton"
      }), "中获取按键编码。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "pressedButton"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_pressedbutton",
              children: "GamePad_PressedButton"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，按键编码。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数pressedButton为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_pressedbutton_getbuttoncodename",
      children: "OH_GamePad_PressedButton_GetButtonCodeName()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_PressedButton_GetButtonCodeName (const struct GamePad_PressedButton *pressedButton, char **codeName)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从按下的按键", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamepad_pressedbutton",
        children: "GamePad_PressedButton"
      }), "中获取按键的名称。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "pressedButton"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_pressedbutton",
              children: "GamePad_PressedButton"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "codeName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，二级指针指向按键的名称。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数pressedButton或codeName为null。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_NO_MEMORY：设备内存不足。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_pressedbuttons_getbuttoninfo",
      children: "OH_GamePad_PressedButtons_GetButtonInfo()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_PressedButtons_GetButtonInfo (const struct GamePad_ButtonEvent *buttonEvent, const int32_t index, GamePad_PressedButton **pressedButton)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从按键事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamepad_buttonevent",
        children: "GamePad_ButtonEvent"
      }), "中获取指定序号的按下的按键。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
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
            children: "buttonEvent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttonevent",
              children: "GamePad_ButtonEvent"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定按键序号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pressedButton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，二级指针指向按下的键。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：buttonEvent为null或index小于0或index大于等于所有按键数。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_pressedbuttons_getcount",
      children: "OH_GamePad_PressedButtons_GetCount()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_PressedButtons_GetCount (const struct GamePad_ButtonEvent *buttonEvent, int32_t *count)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从按键事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamepad_buttonevent",
        children: "GamePad_ButtonEvent"
      }), "中获取按下的按键数量。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "buttonEvent"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指针指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttonevent",
              children: "GamePad_ButtonEvent"
            }), "实例，不能为空，否则将返回错误码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出参数，按下的按键数量。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数buttonEvent为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_rightshoulder_registerbuttoninputmonitor",
      children: "OH_GamePad_RightShoulder_RegisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_RightShoulder_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册RightShoulder按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputMonitorCallback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), "，不能为空，否则将返回错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_rightshoulder_unregisterbuttoninputmonitor",
      children: "OH_GamePad_RightShoulder_UnregisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_RightShoulder_UnregisterButtonInputMonitor (void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册RightShoulder按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_rightthumbstick_registeraxisinputmonitor",
      children: "OH_GamePad_RightThumbstick_RegisterAxisInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_RightThumbstick_RegisterAxisInputMonitor (GamePad_AxisInputMonitorCallback inputMonitorCallback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册RightThumbstick轴事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputMonitorCallback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisinputmonitorcallback",
              children: "GamePad_AxisInputMonitorCallback"
            }), "，不能为空，否则将返回错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_rightthumbstick_registerbuttoninputmonitor",
      children: "OH_GamePad_RightThumbstick_RegisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_RightThumbstick_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册RightThumbstick按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputMonitorCallback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), "，不能为空，否则将返回错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_rightthumbstick_unregisteraxisinputmonitor",
      children: "OH_GamePad_RightThumbstick_UnregisterAxisInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_RightThumbstick_UnregisterAxisInputMonitor (void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册RightThumbstick轴事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_rightthumbstick_unregisterbuttoninputmonitor",
      children: "OH_GamePad_RightThumbstick_UnregisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_RightThumbstick_UnregisterButtonInputMonitor (void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册RightThumbstick按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_righttrigger_registeraxisinputmonitor",
      children: "OH_GamePad_RightTrigger_RegisterAxisInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_RightTrigger_RegisterAxisInputMonitor (GamePad_AxisInputMonitorCallback inputMonitorCallback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册RightTrigger轴事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputMonitorCallback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_axisinputmonitorcallback",
              children: "GamePad_AxisInputMonitorCallback"
            }), "，不能为空，否则将返回错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_righttrigger_registerbuttoninputmonitor",
      children: "OH_GamePad_RightTrigger_RegisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_RightTrigger_RegisterButtonInputMonitor (GamePad_ButtonInputMonitorCallback inputMonitorCallback)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册RightTrigger按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "inputMonitorCallback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gamepad_buttoninputmonitorcallback",
              children: "GamePad_ButtonInputMonitorCallback"
            }), "，不能为空，否则将返回错误码。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["函数的执行结果，错误码", (0,jsx_runtime.jsx)(_components.a, {
        href: "#gamecontroller_errorcode",
        children: "GameController_ErrorCode"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_SUCCESS：成功。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GAME_CONTROLLER_PARAM_ERROR：参数inputMonitorCallback为null。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_righttrigger_unregisteraxisinputmonitor",
      children: "OH_GamePad_RightTrigger_UnregisterAxisInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_RightTrigger_UnregisterAxisInputMonitor (void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册RightTrigger轴事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_gamepad_righttrigger_unregisterbuttoninputmonitor",
      children: "OH_GamePad_RightTrigger_UnregisterButtonInputMonitor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GameController_ErrorCode OH_GamePad_RightTrigger_UnregisterButtonInputMonitor (void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消注册RightTrigger按键事件的监听回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 21"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数的执行结果，执行成功返回GAME_CONTROLLER_SUCCESS。"
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