"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["663367"], {
214930(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_input_kit_monitor_guidelines_monitor_guidelines_md_c12_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-input-kit-monitor-guidelines-monitor-guidelines-md-c12.json
var site_docs_system_basicfun_input_kit_monitor_guidelines_monitor_guidelines_md_c12_namespaceObject = JSON.parse('{"id":"system-basicfun/input-kit/monitor-guidelines/monitor-guidelines","title":"事件监听开发指导（C/C++）","description":"功能介绍","source":"@site/docs/system-basicfun/input-kit/monitor-guidelines/monitor-guidelines.md","sourceDirName":"system-basicfun/input-kit/monitor-guidelines","slug":"/system-basicfun/input-kit/monitor-guidelines/","permalink":"/harmonyos-docs-site/system-basicfun/input-kit/monitor-guidelines/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"事件监听开发指导（C/C++）","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/monitor-guidelines","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"鼠标光标开发指导","permalink":"/harmonyos-docs-site/system-basicfun/input-kit/pointerstyle-guidelines/"},"next":{"title":"事件拦截开发指导（C/C++）","permalink":"/harmonyos-docs-site/system-basicfun/input-kit/interceptor-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/input-kit/monitor-guidelines/monitor-guidelines.md


const frontMatter = {
	title: '事件监听开发指导（C/C++）',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/monitor-guidelines',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = '事件监听开发指导（C/C++）';

const assets = {

};



const toc = [{
  "value": "功能介绍",
  "id": "功能介绍",
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
  "value": "申请所需权限",
  "id": "申请所需权限",
  "level": 3
}, {
  "value": "创建事件监听",
  "id": "创建事件监听",
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
        id: "事件监听开发指导cc",
        children: "事件监听开发指导（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始，多模为应用提供了按键、输入事件（鼠标、触屏和轴事件）监听能力，当前仅支持录屏类应用。使用场景例如：用户在录屏应用开启录屏时，监听设备的按键、鼠标、触摸和轴事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建和删除事件监听相关接口如下表所示，接口详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-basicfun-api/input-api/input-c/input-module/capi-input/capi-input",
        children: "Input文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input_Result OH_Input_AddKeyEventMonitor(Input_KeyEventCallback callback)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建按键事件监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input_Result OH_Input_AddMouseEventMonitor(Input_MouseEventCallback callback)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建鼠标事件监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input_Result OH_Input_AddTouchEventMonitor(Input_TouchEventCallback callback)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建触摸事件监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input_Result OH_Input_AddAxisEventMonitorForAll(Input_AxisEventCallback callback)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建所有类型轴事件监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input_Result OH_Input_AddAxisEventMonitor(InputEvent_AxisEventType axisEventType, Input_AxisEventCallback callback)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建指定类型轴事件监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input_Result OH_Input_RemoveKeyEventMonitor(Input_KeyEventCallback callback)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除按键事件监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input_Result OH_Input_RemoveMouseEventMonitor(Input_MouseEventCallback callback)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除鼠标事件监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input_Result OH_Input_RemoveTouchEventMonitor(Input_TouchEventCallback callback)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除触摸事件监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input_Result OH_Input_RemoveAxisEventMonitorForAll(Input_AxisEventCallback callback)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除所有类型轴事件监听。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input_Result OH_Input_RemoveAxisEventMonitor(InputEvent_AxisEventType axisEventType, Input_AxisEventCallback callback)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除指定类型轴事件监听。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "链接动态库",
      children: "链接动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用创建和删除事件监听前，需链接相关动态库。链接动态库的方法是，在CMakeList.txt文件中新增如下配置："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libohinput.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "申请所需权限",
      children: "申请所需权限"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用需要在module.json5中添加下面权限的配置，详细的配置方法参考声明", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
        children: "声明权限文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"requestPermissions\": [\n    {\n        \"name\": \"ohos.permission.INPUT_MONITORING\"\n    }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建事件监听",
      children: "创建事件监听"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "按键事件"
          })
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct KeyEvent {\n    int32_t action;\n    int32_t keyCode;\n    int64_t actionTime { -1 };\n};\n\n//定义按键事件回调函数\nvoid OnKeyEventCallback(const Input_KeyEvent* keyEvent)\n{\n    KeyEvent event;\n    //Input_KeyEvent的生命周期仅限于回调函数内，回调函数执行完毕后会被自动销毁\n    event.action = OH_Input_GetKeyEventAction(keyEvent);\n    event.keyCode = OH_Input_GetKeyEventKeyCode(keyEvent);\n    event.actionTime = OH_Input_GetKeyEventActionTime(keyEvent);\n    // ...\n}\n\nstatic napi_value AddKeyEventMonitor(napi_env env, napi_callback_info info)\n{\n    Input_Result ret = OH_Input_AddKeyEventMonitor(OnKeyEventCallback);\n    // ...\n}\n\nstatic napi_value RemoveKeyEventMonitor(napi_env env, napi_callback_info info)\n{\n    Input_Result ret = OH_Input_RemoveKeyEventMonitor(OnKeyEventCallback);\n    // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "鼠标事件"
          })
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct MouseEvent {\n    int32_t action;\n    int32_t displayX;\n    int32_t displayY;\n    int32_t button { -1 };\n    int32_t axisType { -1 };\n    float axisValue { 0.0f };\n    int64_t actionTime { -1 };\n};\n\n//定义鼠标事件回调函数\nvoid OnMouseEventCallback(const Input_MouseEvent* mouseEvent)\n{\n    MouseEvent event;\n    //Input_MouseEvent的生命周期仅限于回调函数内，回调函数执行完毕后会被自动销毁\n    event.action = OH_Input_GetMouseEventAction(mouseEvent);\n    event.displayX = OH_Input_GetMouseEventDisplayX(mouseEvent);\n    event.displayY = OH_Input_GetMouseEventDisplayY(mouseEvent);\n    event.button = OH_Input_GetMouseEventButton(mouseEvent);\n    event.axisType = OH_Input_GetMouseEventAxisType(mouseEvent);\n    event.axisValue = OH_Input_GetMouseEventAxisValue(mouseEvent);\n    event.actionTime = OH_Input_GetMouseEventActionTime(mouseEvent);\n    // ...\n}\n\nstatic napi_value AddMouseEventMonitor(napi_env env, napi_callback_info info)\n{\n    Input_Result ret = OH_Input_AddMouseEventMonitor(OnMouseEventCallback);\n    // ...\n}\n\nstatic napi_value RemoveMouseEventMonitor(napi_env env, napi_callback_info info)\n{\n    Input_Result ret = OH_Input_RemoveMouseEventMonitor(OnMouseEventCallback);\n    // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "触摸事件"
          })
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct TouchEvent {\n    int32_t action;\n    int32_t id;\n    int32_t displayX;\n    int32_t displayY;\n    int64_t actionTime { -1 };\n};\n\nvoid OnTouchEventCallback(const Input_TouchEvent* touchEvent)\n{\n    TouchEvent event;\n    //Input_TouchEvent的生命周期仅限于回调函数内，回调函数执行完毕后会被自动销毁\n    event.action = OH_Input_GetTouchEventAction(touchEvent);\n    event.id = OH_Input_GetTouchEventFingerId(touchEvent);\n    event.displayX = OH_Input_GetTouchEventDisplayX(touchEvent);\n    event.displayY = OH_Input_GetTouchEventDisplayY(touchEvent);\n    event.actionTime = OH_Input_GetTouchEventActionTime(touchEvent);\n    // ...\n}\n\nstatic napi_value AddTouchEventMonitor(napi_env env, napi_callback_info info)\n{\n    Input_Result ret = OH_Input_AddTouchEventMonitor(OnTouchEventCallback);\n    // ...\n}\n\nstatic napi_value RemoveTouchEventMonitor(napi_env env, napi_callback_info info)\n{\n    Input_Result ret = OH_Input_RemoveTouchEventMonitor(OnTouchEventCallback);\n    // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "轴事件"
          })
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "struct AxisEvent {\n    int32_t axisAction;\n    float displayX;\n    float displayY;\n    std::map<int32_t, double> axisValues;\n    int64_t actionTime { -1 };\n    int32_t sourceType;\n    int32_t axisEventType { -1 };\n};\n\nvoid OnAllAxisEventCallback(const Input_AxisEvent* axisEvent)\n{\n    AxisEvent event;\n    //Input_AxisEvent的生命周期仅限于回调函数内，回调函数执行完毕后会被自动销毁\n    InputEvent_AxisAction action = static_cast<InputEvent_AxisAction>(0);\n    Input_Result ret = OH_Input_GetAxisEventAction(axisEvent, &action);\n    event.axisAction = action;\n    ret = OH_Input_GetAxisEventDisplayX(axisEvent, &event.displayX);\n    ret = OH_Input_GetAxisEventDisplayY(axisEvent, &event.displayY);\n    ret = OH_Input_GetAxisEventActionTime(axisEvent, &event.actionTime);\n    InputEvent_SourceType sourceType = static_cast<InputEvent_SourceType>(0);\n    ret = OH_Input_GetAxisEventSourceType(axisEvent, &sourceType);\n    event.sourceType = sourceType;\n    InputEvent_AxisEventType axisEventType = static_cast<InputEvent_AxisEventType>(-1);\n    ret = OH_Input_GetAxisEventType(axisEvent, &axisEventType);\n    event.axisEventType = axisEventType;\n    if (event.axisEventType == AXIS_EVENT_TYPE_PINCH) {\n        double value = 0;\n        ret = OH_Input_GetAxisEventAxisValue(axisEvent, AXIS_TYPE_PINCH, &value);\n        event.axisValues.insert(std::make_pair(AXIS_TYPE_PINCH, value));\n        ret = OH_Input_GetAxisEventAxisValue(axisEvent, AXIS_TYPE_ROTATE, &value);\n        event.axisValues.insert(std::make_pair(AXIS_TYPE_ROTATE, value));\n    } else if (event.axisEventType == AXIS_EVENT_TYPE_SCROLL) {\n        double value = 0;\n        ret = OH_Input_GetAxisEventAxisValue(axisEvent, AXIS_TYPE_SCROLL_VERTICAL, &value);\n        event.axisValues.insert(std::make_pair(AXIS_TYPE_SCROLL_VERTICAL, value));\n        ret = OH_Input_GetAxisEventAxisValue(axisEvent, AXIS_TYPE_SCROLL_HORIZONTAL, &value);\n        event.axisValues.insert(std::make_pair(AXIS_TYPE_SCROLL_HORIZONTAL, value));\n    }\n    // ...\n}\n\n//定义捏合类型轴事件回调函数\nvoid OnPinchAxisEventCallback(const Input_AxisEvent* axisEvent)\n{\n    AxisEvent event;\n    //Input_AxisEvent的生命周期仅限于回调函数内，回调函数执行完毕后会被自动销毁\n    InputEvent_AxisAction action = static_cast<InputEvent_AxisAction>(0);\n    Input_Result ret = OH_Input_GetAxisEventAction(axisEvent, &action);\n    event.axisAction = action;\n    ret = OH_Input_GetAxisEventDisplayX(axisEvent, &event.displayX);\n    ret = OH_Input_GetAxisEventDisplayY(axisEvent, &event.displayY);\n    ret = OH_Input_GetAxisEventActionTime(axisEvent, &event.actionTime);\n    InputEvent_SourceType sourceType = static_cast<InputEvent_SourceType>(0);\n    ret = OH_Input_GetAxisEventSourceType(axisEvent, &sourceType);\n    event.sourceType = sourceType;\n    InputEvent_AxisEventType axisEventType = static_cast<InputEvent_AxisEventType>(-1);\n    ret = OH_Input_GetAxisEventType(axisEvent, &axisEventType);\n    event.axisEventType = axisEventType;\n    double value = 0;\n    ret = OH_Input_GetAxisEventAxisValue(axisEvent, AXIS_TYPE_PINCH, &value);\n    event.axisValues.insert(std::make_pair(AXIS_TYPE_PINCH, value));\n    ret = OH_Input_GetAxisEventAxisValue(axisEvent, AXIS_TYPE_ROTATE, &value);\n    event.axisValues.insert(std::make_pair(AXIS_TYPE_ROTATE, value));\n    // ...\n}\n\nvoid OnScrollAxisEventCallback(const Input_AxisEvent* axisEvent)\n{\n    AxisEvent event;\n    //Input_AxisEvent的生命周期仅限于回调函数内，回调函数执行完毕后会被自动销毁\n    InputEvent_AxisAction action = static_cast<InputEvent_AxisAction>(0);\n    Input_Result ret = OH_Input_GetAxisEventAction(axisEvent, &action);\n    event.axisAction = action;\n    ret = OH_Input_GetAxisEventDisplayX(axisEvent, &event.displayX);\n    ret = OH_Input_GetAxisEventDisplayY(axisEvent, &event.displayY);\n    ret = OH_Input_GetAxisEventActionTime(axisEvent, &event.actionTime);\n    InputEvent_SourceType sourceType = static_cast<InputEvent_SourceType>(0);\n    ret = OH_Input_GetAxisEventSourceType(axisEvent, &sourceType);\n    event.sourceType = sourceType;\n    InputEvent_AxisEventType axisEventType = static_cast<InputEvent_AxisEventType>(-1);\n    ret = OH_Input_GetAxisEventType(axisEvent, &axisEventType);\n    event.axisEventType = axisEventType;\n    double value = 0;\n    ret = OH_Input_GetAxisEventAxisValue(axisEvent, AXIS_TYPE_SCROLL_VERTICAL, &value);\n    event.axisValues.insert(std::make_pair(AXIS_TYPE_SCROLL_VERTICAL, value));\n    ret = OH_Input_GetAxisEventAxisValue(axisEvent, AXIS_TYPE_SCROLL_HORIZONTAL, &value);\n    event.axisValues.insert(std::make_pair(AXIS_TYPE_SCROLL_HORIZONTAL, value));\n    // ...\n}\n\nstatic napi_value AddAxisEventMonitorForAll(napi_env env, napi_callback_info info)\n{\n    Input_Result ret = OH_Input_AddAxisEventMonitorForAll(OnAllAxisEventCallback);\n    // ...\n}\n\nstatic napi_value RemoveAxisEventMonitorForAll(napi_env env, napi_callback_info info)\n{\n    Input_Result ret = OH_Input_RemoveAxisEventMonitorForAll(OnAllAxisEventCallback);\n    // ...\n}\n\nstatic napi_value AddPinchAxisEventMonitor(napi_env env, napi_callback_info info)\n{\n    Input_Result ret = OH_Input_AddAxisEventMonitor(AXIS_EVENT_TYPE_PINCH, OnPinchAxisEventCallback);\n    // ...\n}\n\nstatic napi_value RemovePinchAxisEventMonitor(napi_env env, napi_callback_info info)\n{\n    Input_Result ret = OH_Input_RemoveAxisEventMonitor(AXIS_EVENT_TYPE_PINCH, OnPinchAxisEventCallback);\n    // ...\n}\n\nstatic napi_value AddScrollAxisEventMonitor(napi_env env, napi_callback_info info)\n{\n    Input_Result ret = OH_Input_AddAxisEventMonitor(AXIS_EVENT_TYPE_SCROLL, OnScrollAxisEventCallback);\n    // ...\n}\n\nstatic napi_value RemoveScrollAxisEventMonitor(napi_env env, napi_callback_info info)\n{\n    Input_Result ret =  OH_Input_RemoveAxisEventMonitor(AXIS_EVENT_TYPE_SCROLL, OnScrollAxisEventCallback);\n    // ...\n}\n"
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