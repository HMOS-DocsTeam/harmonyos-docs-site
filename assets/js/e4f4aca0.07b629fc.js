"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["999666"], {
751581(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_window_manager_native_window_event_filter_native_window_event_filter_md_e4f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-window-manager-native-window-event-filter-native-window-event-filter-md-e4f.json
var site_docs_arkui_window_manager_native_window_event_filter_native_window_event_filter_md_e4f_namespaceObject = JSON.parse('{"id":"arkui/window-manager/native-window-event-filter/native-window-event-filter","title":"使用WindowManager管理多模输入事件（C/C++）","description":"场景介绍","source":"@site/docs/arkui/window-manager/native-window-event-filter/native-window-event-filter.md","sourceDirName":"arkui/window-manager/native-window-event-filter","slug":"/arkui/window-manager/native-window-event-filter/","permalink":"/harmonyos-docs-site/arkui/window-manager/native-window-event-filter/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"使用WindowManager管理多模输入事件（C/C++）","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-window-event-filter","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"窗口元数据配置","permalink":"/harmonyos-docs-site/arkui/window-manager/window-config-m/"},"next":{"title":"画中画开发概述","permalink":"/harmonyos-docs-site/arkui/window-manager/window-pipwindow/pipwindow-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/window-manager/native-window-event-filter/native-window-event-filter.md


const frontMatter = {
	title: '使用WindowManager管理多模输入事件（C/C++）',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/native-window-event-filter',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用WindowManager管理多模输入事件（C/C++）';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "过滤多模输入事件",
  "id": "过滤多模输入事件",
  "level": 2
}, {
  "value": "在CMake脚本中链接动态库",
  "id": "在cmake脚本中链接动态库",
  "level": 3
}, {
  "value": "添加头文件",
  "id": "添加头文件",
  "level": 3
}, {
  "value": "接口使用说明",
  "id": "接口使用说明",
  "level": 3
}, {
  "value": "示例代码",
  "id": "示例代码",
  "level": 3
}, {
  "value": "将多模触摸事件注入给目标窗口",
  "id": "将多模触摸事件注入给目标窗口",
  "level": 2
}, {
  "value": "在CMake脚本中链接动态库",
  "id": "在cmake脚本中链接动态库-1",
  "level": 3
}, {
  "value": "添加头文件",
  "id": "添加头文件-1",
  "level": 3
}, {
  "value": "接口使用说明",
  "id": "接口使用说明-1",
  "level": 3
}, {
  "value": "示例代码",
  "id": "示例代码-1",
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
        id: "使用windowmanager管理多模输入事件cc",
        children: "使用WindowManager管理多模输入事件（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-module/capi-windowmanager/capi-windowmanager",
        children: "WindowManager"
      }), "提供应用窗口的管理能力，可以用于管理多模输入事件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前支持使用WindowManager进行多模输入事件的过滤，还可以将多模触摸事件注入目标窗口，具体开发步骤可见下文。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "过滤多模输入事件",
      children: "过滤多模输入事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用WindowManager模块提供的能力去拦截按键事件，让按键事件不往应用内部组件分发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在cmake脚本中链接动态库",
      children: "在CMake脚本中链接动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libnative_window_manager.so libohinput.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加头文件",
      children: "添加头文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"multimodalinput/oh_input_manager.h\"\n#include \"multimodalinput/oh_key_code.h\"\n#include \"window_manager/oh_window_comm.h\"\n#include \"window_manager/oh_window_event_filter.h\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口使用说明",
      children: "接口使用说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_NativeWindowManager_RegisterKeyEventFilter(int32_t windowId, OH_NativeWindowManager_KeyEventFilter keyEventFilter)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为指定的窗口注册过滤回调函数keyEventFilter。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_NativeWindowManager_UnregisterKeyEventFilter(int32_t windowId)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消指定窗口上的过滤回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用窗口创建后，使用窗口ID绑定按键事件过滤函数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用窗口需要收到按键事件时，才触发按键事件的拦截。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当回调函数返回true表示拦截，false表示不拦截。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同一个窗口ID注册的回调函数只允许一个，最后注册的回调函数会覆盖之前注册过的回调函数。如需过滤多个按键的组合场景，建议在一个回调函数里面处理。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例代码中介绍了如何注册过滤函数和取消过滤函数，以过滤ESC退出按键和数字按键为例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n#include \"window_manager/oh_window_comm.h\"\n#include \"window_manager/oh_window_event_filter.h\"\n#include \"multimodalinput/oh_input_manager.h\"\n#include \"multimodalinput/oh_key_code.h\"\n\n// 设置过滤函数\nstatic bool filterFunc(Input_KeyEvent *event) {\n  auto keyCode = OH_Input_GetKeyEventKeyCode(event);\n  auto action = OH_Input_GetKeyEventAction(event);\n  // case1: 过滤escape\n  // return keyCode == Input_KeyCode::KEYCODE_ESCAPE;\n\n  // case2: 过滤数字键的按下，抬起不过滤\n  // return keyCode >= Input_KeyCode::KEYCODE_0 && keyCode <= Input_KeyCode::KEYCODE_9\n  //  && action == Input_KeyEventAction::KEY_ACTION_DOWN;\n  \n  // 过滤escape和数字键的按下(case1 || case2)\n  return (keyCode >= Input_KeyCode::KEYCODE_0 && keyCode <= Input_KeyCode::KEYCODE_9\n     && action == Input_KeyEventAction::KEY_ACTION_DOWN) || (keyCode == Input_KeyCode::KEYCODE_ESCAPE);\n}\n\nstatic napi_value registerFilter(napi_env env, napi_callback_info info) {\n  size_t argc = 1;\n  napi_value args[1] = {nullptr};\n  napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n  \n  int32_t windowId;\n  napi_get_value_int32(env, args[0], &windowId);\n  \n  // 向windowId对应的窗口注册filterFunc的过滤函数\n  auto res = OH_NativeWindowManager_RegisterKeyEventFilter(windowId, filterFunc);\n  \n  napi_value errCode;\n  napi_create_int32(env, res, &errCode);\n  return errCode;\n}\n\nstatic napi_value clearFilter(napi_env env, napi_callback_info info) {\n  size_t argc = 1;\n  napi_value args[1] = {nullptr};\n  napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n  int32_t windowId;\n  napi_get_value_int32(env, args[0], &windowId);\n\n  auto res = OH_NativeWindowManager_UnregisterKeyEventFilter(windowId);\n  napi_value errCode;\n  napi_create_int32(env, res, &errCode);\n  return errCode;\n\n}\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports) {\n  napi_property_descriptor desc[] = {\n    {\"registerFilter\", nullptr, registerFilter, nullptr, nullptr, nullptr, napi_default, nullptr},\n    {\"clearFilter\", nullptr, clearFilter, nullptr, nullptr, nullptr, napi_default, nullptr}};\n  napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n  return exports;\n}\nEXTERN_C_END\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "将多模触摸事件注入给目标窗口",
      children: "将多模触摸事件注入给目标窗口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用WindowManager模块提供的能力为指定窗口注入触摸事件，仅支持同进程窗口。此操作不会触发窗口焦点、层级变化或拖拽，事件会直接发送给ArkUI。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在cmake脚本中链接动态库-1",
      children: "在CMake脚本中链接动态库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "target_link_libraries(entry PUBLIC libnative_window_manager.so libohinput.so)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加头文件-1",
      children: "添加头文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"multimodalinput/oh_input_manager.h\"\n#include \"window_manager/oh_window.h\"\n#include \"napi/native_api.h\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接口使用说明-1",
      children: "接口使用说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_WindowManager_InjectTouchEvent(int32_t windowId, Input_TouchEvent* touchEvent, int32_t windowX, int32_t windowY)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为指定的窗口注入触摸事件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造事件参数，向目标窗口ID注入事件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "仅支持注入同进程窗口。注入不会触发窗口焦点、层级变化或拖拽，事件直接发送给ArkUI。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "接口需要在指定窗口加载UI后调用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "完成窗口和多模触摸事件校验，确保事件参数正确，再将事件发送给ArkUI。具体参数说明如下："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "windowId"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "目标窗口ID，仅支持同进程的窗口，否则返回错误码1300002。窗口需完成UI加载，否则返回错误码1300003。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "touchEvent"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["多模触摸事件，具体可见", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/system-basicfun-api/input-api/input-c/input-struct/capi-input-input-touchevent/capi-input-input-touchevent",
                  children: "Input_TouchEvent"
                }), "，事件定义在oh_input_manager.h中。调用", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#oh_input_createtouchevent",
                  children: "OH_Input_CreateTouchEvent"
                }), "接口创建touchEvent对象，使用完后调用", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#oh_input_destroytouchevent",
                  children: "OH_Input_DestroyTouchEvent"
                }), "接口销毁该对象。具体参数说明见下表。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "windowX"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "注入事件相对于注入窗口的落点横坐标。参数应为大于等于0的整数，否则返回错误码1300003。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "windowY"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "注入事件相对于注入窗口的落点纵坐标。参数应为大于等于0的整数，否则返回错误码1300003。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其中，touchEvent多模触摸事件具体参数说明如下："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "方法"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "action"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#oh_input_settoucheventaction",
                  children: "OH_Input_SetTouchEventAction"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示事件行为，默认值为0。  当前只支持0-3的行为，分别表示为：  - 0：cancel，表示取消事件。  - 1：down，表示按下事件。  - 2：move，表示移动事件。  - 3：up，表示抬起事件。  - 其他行为会返回错误码1300003。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "id"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#oh_input_settoucheventfingerid",
                  children: "OH_Input_SetTouchEventFingerId"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示手指ID，默认值为0。  应为大于等于0的整数，否则返回错误码1300003。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "displayX"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#oh_input_settoucheventdisplayx",
                  children: "OH_Input_SetTouchEventDisplayX"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["表示事件落点相对于屏幕的横坐标，默认值为0。  参数应为非负整数，否则返回错误码1300003。建议与windowX保持对应关系，即使不一致也不会返回错误码，仅校验入参合法范围。转换方法推荐使用", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#getwindowproperties9",
                  children: "getWindowProperties()"
                }), "方法获取windowRect属性，通过displayX减去windowRect中窗口左上角横坐标计算对应的windowX。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "displayY"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#oh_input_settoucheventdisplayy",
                  children: "OH_Input_SetTouchEventDisplayY"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["表示事件落点相对于屏幕的纵坐标，默认值为0。  参数应为非负整数，否则返回错误码1300003。建议与windowY保持对应关系，即使不一致也不会返回错误码，仅校验入参合法范围。转换方法推荐使用", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#getwindowproperties9",
                  children: "getWindowProperties()"
                }), "方法获取windowRect属性，通过displayY减去windowRect中窗口左上角纵坐标计算对应的windowY。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "actionTime"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#oh_input_settoucheventactiontime",
                  children: "OH_Input_SetTouchEventActionTime"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示时间戳，默认值为-1。参数应为非负整数，否则返回错误码1300003。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "windowId"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#oh_input_settoucheventwindowid",
                  children: "OH_Input_SetTouchEventWindowId"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["表示事件注入窗口ID，默认值为-1。若参数不为默认值且不等于", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-window-h/capi-oh-window-h#oh_windowmanager_injecttouchevent",
                  children: "OH_WindowManager_InjectTouchEvent"
                }), "接口参数windowId，将校验传入参数错误。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "displayId"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/system-basicfun-api/input-api/input-c/input-headerfile/capi-oh-input-manager-h/capi-oh-input-manager-h#oh_input_settoucheventdisplayid",
                  children: "OH_Input_SetTouchEventDisplayId"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["表示事件注入屏幕ID，默认值为-1。无限制，但是应该尽量保证与", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-oh-window-h/capi-oh-window-h#oh_windowmanager_injecttouchevent",
                  children: "OH_WindowManager_InjectTouchEvent"
                }), "接口参数windowId有相互对应关系，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#getwindowproperties9",
                  children: "getWindowProperties()"
                }), "方法获取displayId属性。"]
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例代码-1",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例代码介绍了如何将多模触摸事件注入目标窗口，以单次事件注入为例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n#include \"window_manager/oh_window.h\"\n#include \"multimodalinput/oh_input_manager.h\"\n\nstatic napi_value injectEvent(napi_env env, napi_callback_info info) {\n  size_t argc = 10;\n  napi_value args[10] = {nullptr};\n  napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n  int32_t windowId;\n  napi_get_value_int32(env, args[0], &windowId);\n\n  int32_t displayId;\n  napi_get_value_int32(env, args[1], &displayId);\n\n  int32_t windowX;\n  napi_get_value_int32(env, args[2], &windowX);\n\n  int32_t windowY;\n  napi_get_value_int32(env, args[3], &windowY);\n\n  int32_t action;\n  napi_get_value_int32(env, args[4], &action);\n\n  int32_t fingerId;\n  napi_get_value_int32(env, args[5], &fingerId);\n\n  int32_t displayX;\n  napi_get_value_int32(env, args[6], &displayX);\n\n  int32_t displayY;\n  napi_get_value_int32(env, args[7], &displayY);\n\n  int32_t actionTime;\n  napi_get_value_int32(env, args[8], &actionTime);\n\n  int32_t TE_WindowId;\n  napi_get_value_int32(env, args[9], &TE_WindowId);\n  \n  // 构造多模事件touchEvent\n  Input_TouchEvent* touchEvent = OH_Input_CreateTouchEvent();\n  OH_Input_SetTouchEventAction(touchEvent, action);\n  OH_Input_SetTouchEventFingerId(touchEvent, fingerId);\n  OH_Input_SetTouchEventDisplayX(touchEvent, displayX);\n  OH_Input_SetTouchEventDisplayY(touchEvent, displayY);\n  OH_Input_SetTouchEventActionTime(touchEvent, actionTime);\n  OH_Input_SetTouchEventWindowId(touchEvent, TE_WindowId);\n  OH_Input_SetTouchEventDisplayId(touchEvent, displayId);\n\n  // 向windowId对应的窗口注入多模触摸事件\n  auto res = OH_WindowManager_InjectTouchEvent(windowId, touchEvent, windowX, windowY);\n\n  // 使用完touchEvent后销毁对象\n  OH_Input_DestroyTouchEvent(&touchEvent);\n  \n  napi_value errCode;\n  napi_create_int32(env, res, &errCode);\n  return errCode;\n}\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports) {\n  napi_property_descriptor desc[] = {\n    {\"injectEvent\", nullptr, injectEvent, nullptr, nullptr, nullptr, napi_default, nullptr}};\n  napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n  return exports;\n}\nEXTERN_C_END\n"
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