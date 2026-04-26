"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["155635"], {
713675(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_use_ndk_arkts_add_event_ndk_listen_to_component_events_ndk_listen_to_component_events_md_44c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-use-ndk-arkts-add-event-ndk-listen-to-component-events-ndk-listen-to-component-events-md-44c.json
var site_docs_arkui_arkts_use_ndk_arkts_add_event_ndk_listen_to_component_events_ndk_listen_to_component_events_md_44c_namespaceObject = JSON.parse('{"id":"arkui/arkts-use-ndk/arkts-add-event/ndk-listen-to-component-events/ndk-listen-to-component-events","title":"监听组件事件","description":"NDK接口针对UI组件的事件，提供了监听函数的方式。首先，可使用addNodeEventReceiver函数添加组件事件的监听器，该监听器会监听该组件上发生的所有事件，例如：点击事件、焦点事件。然后，可使用registerNodeEvent函数声明组件的哪些事件需要监听，NDK接口支持的事件范围通过ArkUI\\\\NodeEventType枚举值定义。","source":"@site/docs/arkui/arkts-use-ndk/arkts-add-event/ndk-listen-to-component-events/ndk-listen-to-component-events.md","sourceDirName":"arkui/arkts-use-ndk/arkts-add-event/ndk-listen-to-component-events","slug":"/arkui/arkts-use-ndk/arkts-add-event/ndk-listen-to-component-events/","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/arkts-add-event/ndk-listen-to-component-events/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"监听组件事件","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-listen-to-component-events","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"接入ArkTS页面","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-access-the-arkts-page/"},"next":{"title":"绑定手势事件","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/arkts-add-event/ndk-bind-gesture-events/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-use-ndk/arkts-add-event/ndk-listen-to-component-events/ndk-listen-to-component-events.md


const frontMatter = {
	title: '监听组件事件',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-listen-to-component-events',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '监听组件事件';

const assets = {

};



const toc = [{
  "value": "完整示例",
  "id": "完整示例",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "监听组件事件",
        children: "监听组件事件"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["NDK接口针对UI组件的事件，提供了监听函数的方式。首先，可使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#addnodeeventreceiver",
        children: "addNodeEventReceiver"
      }), "函数添加组件事件的监听器，该监听器会监听该组件上发生的所有事件，例如：点击事件、焦点事件。然后，可使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#registernodeevent",
        children: "registerNodeEvent"
      }), "函数声明组件的哪些事件需要监听，NDK接口支持的事件范围通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeeventtype",
        children: "ArkUI_NodeEventType"
      }), "枚举值定义。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(628760)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["事件注册需要声明", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#addnodeeventreceiver",
          children: "addNodeEventReceiver"
        }), "监听器注册和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#registernodeevent",
          children: "registerNodeEvent"
        }), "事件类型，监听器只能监听已声明的事件。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["需要关注事件的反注册逻辑，如在组件销毁前调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#removenodeeventreceiver",
          children: "removeNodeEventReceiver"
        }), "移除事件监听器，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#unregisternodeevent",
          children: "unregisterNodeEvent"
        }), "通知ArkUI框架已监听的事件不再需要监听。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#addnodeeventreceiver",
          children: "addNodeEventReceiver"
        }), "可以添加多个函数指针，每个函数指针都会在对应事件触发时触发，对应的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#removenodeeventreceiver",
          children: "removeNodeEventReceiver"
        }), "需要传递对应的函数指针用于移除监听。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#registernodeeventreceiver",
          children: "registerNodeEventReceiver"
        }), "是全局监听函数，不同于", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#addnodeeventreceiver",
          children: "addNodeEventReceiver"
        }), "，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#registernodeeventreceiver",
          children: "registerNodeEventReceiver"
        }), "能够监听所有Native组件的事件触发，但只能传递一个函数指针，多次调用使用最后一次的函数指针进行回调，释放时使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#unregisternodeeventreceiver",
          children: "unregisterNodeEventReceiver"
        }), "进行释放。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下示例基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-use-ndk/ndk-access-the-arkts-page",
        children: "接入ArkTS页面"
      }), "章节，补充相关事件监听。详细代码请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-use-ndk/arkts-add-event/ndk-listen-to-component-events#%E5%AE%8C%E6%95%B4%E7%A4%BA%E4%BE%8B",
        children: "完整示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "事件注册和事件解注册"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过addNodeEventReceiver对节点绑定事件处理函数，接着通过调用registerNodeEvent注册对应的事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(496403)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["事件监听函数的入参", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nodeevent/capi-arkui-nativemodule-arkui-nodeevent",
            children: "ArkUI_NodeEvent"
          }), "* event只在函数回调周期内生效，不推荐对该指针进行缓存或者进行异步处理。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["定义", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1",
            children: "ArkUI_NativeNodeAPI_1"
          }), "类型的指针："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ArkUI_NativeNodeAPI_1 *nodeAPI = nullptr;\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-h/capi-native-interface-h#oh_arkui_getmoduleinterface",
            children: "OH_ArkUI_GetModuleInterface"
          }), "接口给定义的指针赋值："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_ArkUI_GetModuleInterface(ARKUI_NATIVE_NODE, ArkUI_NativeNodeAPI_1, nodeAPI);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义事件触发回调函数："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void NodeEventReceiver(ArkUI_NodeEvent *event) {\n  // 设置对应的事件类型触发时进行的操作，如NODE_ON_CLICK_EVENT\n};\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建一个节点，将事件触发回调函数绑定到该节点并进行事件注册："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "auto button = nodeAPI->createNode(ARKUI_NODE_BUTTON);\nnodeAPI->addNodeEventReceiver(button, NodeEventReceiver);\nnodeAPI->registerNodeEvent(button, NODE_ON_CLICK_EVENT, 0, nullptr);\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["详细的事件类型请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeeventtype",
            children: "ArkUI_NodeEventType"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过unregisterNodeEvent解注册对应的事件类型，再通过removeNodeEventReceiver卸载事件处理函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "解注册对应的事件类型："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "nodeAPI->unregisterNodeEvent(button, NODE_ON_CLICK_EVENT);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "卸载事件处理函数："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "nodeAPI->removeNodeEventReceiver(button, NodeEventReceiver);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "全局事件监听"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用registerNodeEventReceiver注册全局的事件处理函数，对事件进行统一的处理，结束后可使用unregisterNodeEventReceiver进行释放。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册全局的事件处理函数："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "nodeAPI->registerNodeEventReceiver([](ArkUI_NodeEvent *event) {\n    // 从组件事件中获取基础事件对象\n    auto *inputEvent = OH_ArkUI_NodeEvent_GetInputEvent(event);\n    // 从组件事件获取事件类型\n    auto eventType = OH_ArkUI_NodeEvent_GetEventType(event);\n    // ···\n    switch (eventType) {\n        case NODE_ON_CLICK_EVENT: {\n            // 触发点击事件所进行的操作，从基础事件获取事件信息\n            // ···\n        }\n        default: {\n            break;\n        }\n    }\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "解注册全局的事件处理函数："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "nodeAPI->unregisterNodeEventReceiver();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取事件信息"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ArkUI框架提供了", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodeevent_getinputevent",
            children: "OH_ArkUI_NodeEvent_GetInputEvent()"
          }), "接口，用于从输入交互相关的组件事件（如NODE_ON_CLICK_EVENT、NODE_TOUCH_EVENT等，具体可参见每个枚举定义的说明）中获取基础事件对象。然后，可通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-ui-input-event-h/capi-ui-input-event-h#oh_arkui_pointerevent_getdisplayx",
            children: "OH_ArkUI_PointerEvent_GetDisplayX()"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-ui-input-event-h/capi-ui-input-event-h#oh_arkui_pointerevent_getdisplayxbyindex",
            children: "OH_ArkUI_PointerEvent_GetDisplayXByIndex()"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-ui-input-event-h/capi-ui-input-event-h#oh_arkui_uiinputevent_getaction",
            children: "OH_ArkUI_UIInputEvent_GetAction()"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-ui-input-event-h/capi-ui-input-event-h#oh_arkui_uiinputevent_geteventtime",
            children: "OH_ArkUI_UIInputEvent_GetEventTime()"
          }), "等接口，从基础事件中获取更多信息。应用根据获取的事件信息，在事件执行过程中实现差异化交互逻辑。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册事件监听回调："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 注册click事件\nnodeAPI->registerNodeEvent(button, NODE_ON_CLICK_EVENT, 0, nullptr);\n// 设置组件事件的全局监听\nnodeAPI->registerNodeEventReceiver([](ArkUI_NodeEvent *event) {\n    // 从组件事件中获取基础事件对象\n    auto *inputEvent = OH_ArkUI_NodeEvent_GetInputEvent(event);\n    // 从组件事件获取事件类型\n    auto eventType = OH_ArkUI_NodeEvent_GetEventType(event);\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n                 \"NdkAddInteractionEvent_eventInfo inputEvent = %{public}p\", inputEvent);\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n                 \"NdkAddInteractionEvent_eventInfo eventType = %{public}d\", eventType);\n    auto componentEvent = OH_ArkUI_NodeEvent_GetNodeComponentEvent(event);\n    // 获取组件事件中的数字类型数据\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n                 \"NdkAddInteractionEvent_eventInfo componentEvent = %{public}p\", componentEvent);\n    // 获取触发该事件的组件对象\n    auto nodeHandle = OH_ArkUI_NodeEvent_GetNodeHandle(event);\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n                 \"NdkAddInteractionEvent_eventInfo nodeHandle = %{public}p\", nodeHandle);\n    // 根据eventType来区分事件类型，进行差异化处理，其他获取事件信息的接口也可类似方式来进行差异化的处理\n    switch (eventType) {\n        case NODE_ON_CLICK_EVENT: {\n            // 触发点击事件所进行的操作，从基础事件获取事件信息\n            auto x = OH_ArkUI_PointerEvent_GetX(inputEvent);\n            auto y = OH_ArkUI_PointerEvent_GetY(inputEvent);\n            auto displayX = OH_ArkUI_PointerEvent_GetDisplayX(inputEvent);\n            auto displayY = OH_ArkUI_PointerEvent_GetDisplayY(inputEvent);\n            auto windowX = OH_ArkUI_PointerEvent_GetWindowX(inputEvent);\n            auto windowY = OH_ArkUI_PointerEvent_GetWindowY(inputEvent);\n            auto pointerCount = OH_ArkUI_PointerEvent_GetPointerCount(inputEvent);\n            auto xByIndex = OH_ArkUI_PointerEvent_GetXByIndex(inputEvent, 0);\n            auto yByIndex = OH_ArkUI_PointerEvent_GetYByIndex(inputEvent, 0);\n            auto displayXByIndex = OH_ArkUI_PointerEvent_GetDisplayXByIndex(inputEvent, 0);\n            auto displayYByIndex = OH_ArkUI_PointerEvent_GetDisplayYByIndex(inputEvent, 0);\n            auto windowXByIndex = OH_ArkUI_PointerEvent_GetWindowXByIndex(inputEvent, 0);\n            auto windowYByIndex = OH_ArkUI_PointerEvent_GetWindowYByIndex(inputEvent, 0);\n            auto pointerId = OH_ArkUI_PointerEvent_GetPointerId(inputEvent, 0);\n            auto pressure = OH_ArkUI_PointerEvent_GetPressure(inputEvent, 0);\n            auto action = OH_ArkUI_UIInputEvent_GetAction(inputEvent);\n            auto eventTime = OH_ArkUI_UIInputEvent_GetEventTime(inputEvent);\n            auto sourceType = OH_ArkUI_UIInputEvent_GetSourceType(inputEvent);\n            auto type = OH_ArkUI_UIInputEvent_GetType(inputEvent);\n            std::string eventInfo =\n                \"x: \" + std::to_string(x) + \", y: \" + std::to_string(y) +\n                \", displayX: \" + std::to_string(displayX) + \", displayY: \" + std::to_string(displayY) +\n                \", windowX: \" + std::to_string(windowX) + \", windowY: \" + std::to_string(windowY) +\n                \", pointerCount: \" + std::to_string(pointerCount) + \", xByIndex: \" + std::to_string(xByIndex) +\n                \", yByIndex: \" + std::to_string(yByIndex) +\n                \", displayXByIndex: \" + std::to_string(displayXByIndex) +\n                \", displayYByIndex: \" + std::to_string(displayYByIndex) +\n                \", windowXByIndex: \" + std::to_string(windowXByIndex) +\n                \", windowYByIndex: \" + std::to_string(windowYByIndex) +\n                \", pointerId: \" + std::to_string(pointerId) + \", pressure: \" + std::to_string(pressure) +\n                \", action: \" + std::to_string(action) + \", eventTime: \" + std::to_string(eventTime) +\n                \", sourceType: \" + std::to_string(sourceType) + \", type: \" + std::to_string(type);\n            OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n                         \"NdkAddInteractionEvent_eventInfoOfCommonEvent eventInfo = %{public}s\",\n                         eventInfo.c_str());\n            break;\n        }\n        default: {\n            break;\n        }\n    }\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "解注册事件处理函数："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "nodeAPI->unregisterNodeEventReceiver();\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "解注册对应的事件类型："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "nodeAPI->unregisterNodeEvent(button, NODE_ON_CLICK_EVENT);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "深浅色变更事件"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkUI开发框架在NDK接口提供了以组件为注册单位的系统深浅色变更事件，系统通过在深浅色变更时通知注册在组件上的回调，实现NDK侧的深浅色变更能力。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(298763)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "一个回调内可以自行设计多个组件的深浅色变更。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "同一组件仅能注册一个系统深浅变更回调。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "建议注册在页面内不会被销毁的节点，防止因节点销毁导致的回调失效。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "struct ColorModeInfo {\n    const char* lightMsg;\n    const char* darkMsg;\n};\n\n// 注册回调函数\nvoid onColorModeChange(ArkUI_SystemColorMode colorMode, void *userData)\n{\n    ColorModeInfo* info = static_cast<ColorModeInfo*>(userData);\n    if (colorMode == ARKUI_SYSTEM_COLOR_MODE_LIGHT) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n                     \"NdkAddInteractionEvent_Light mode: \", info->lightMsg);\n    } else if (colorMode == ARKUI_SYSTEM_COLOR_MODE_DARK) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n                     \"NdkAddInteractionEvent_Dark mode: \", info->darkMsg);\n    }\n}\n\nArkUI_NodeHandle testColorModeChange(ArkUI_NativeNodeAPI_1 *nodeAPI) {\n    ArkUI_NodeHandle text = nodeAPI->createNode(ARKUI_NODE_TEXT);\n    static ColorModeInfo info = {\"Light mode\", \"Dark mode\"};\n    OH_ArkUI_RegisterSystemColorModeChangeEvent(text, &info, onColorModeChange);\n\n    ArkUI_AttributeItem itemstring = {nullptr, 0, (\"test_light_dark\")};\n    nodeAPI->setAttribute(text, NODE_TEXT_CONTENT, &itemstring);\n\n    return text;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在ArkUINode基类对象中实现通用事件注册逻辑。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ArkUINode.h\n// 提供通用属性和事件的封装。\n\n#ifndef MYAPPLICATION_ARKUINODE_H\n#define MYAPPLICATION_ARKUINODE_H\n\n#include \"ArkUIBaseNode.h\"\n#include \"NativeModule.h\"\n\n#include <arkui/native_node.h>\n#include <arkui/native_type.h>\n\nnamespace NativeModule {\n\nclass ArkUINode : public ArkUIBaseNode {\npublic:\n    explicit ArkUINode(ArkUI_NodeHandle handle) : ArkUIBaseNode(handle)\n    {\n        nativeModule_ = NativeModuleInstance::GetInstance()->GetNativeNodeAPI();\n        // 事件触发时需要通过函数获取对应的事件对象，这边通过设置节点自定义数据将封装类指针保持在组件上，方便后续事件分发。\n        nativeModule_->setUserData(handle_, this);\n        // 注册节点监听事件接受器。\n        nativeModule_->addNodeEventReceiver(handle_, ArkUINode::NodeEventReceiver);\n    }\n\n    ~ArkUINode() override\n    {\n        if (onClick_) {\n            nativeModule_->unregisterNodeEvent(handle_, NODE_ON_CLICK_EVENT);\n        }\n        if (onTouch_) {\n            nativeModule_->unregisterNodeEvent(handle_, NODE_TOUCH_EVENT);\n        }\n        if (onDisappear_) {\n            nativeModule_->unregisterNodeEvent(handle_, NODE_EVENT_ON_DISAPPEAR);\n        }\n        if (onAppear_) {\n            nativeModule_->unregisterNodeEvent(handle_, NODE_EVENT_ON_APPEAR);\n        }\n        nativeModule_->removeNodeEventReceiver(handle_, ArkUINode::NodeEventReceiver);\n    }\n    // 设置节点宽度\n    void SetWidth(float width)\n    {\n        if (!handle_) {\n            return;\n        }\n        ArkUI_NumberValue value[] = {{.f32 = width}};\n        ArkUI_AttributeItem item = {value, 1};\n        nativeModule_->setAttribute(handle_, NODE_WIDTH, &item);\n    }\n    // 设置节点宽度（百分比形式）\n    void SetPercentWidth(float percent)\n    {\n        if (!handle_) {\n            return;\n        }\n        ArkUI_NumberValue value[] = {{.f32 = percent}};\n        ArkUI_AttributeItem item = {value, 1};\n        nativeModule_->setAttribute(handle_, NODE_WIDTH_PERCENT, &item);\n    }\n    // 设置节点高度\n    void SetHeight(float height)\n    {\n        if (!handle_) {\n            return;\n        }\n        ArkUI_NumberValue value[] = {{.f32 = height}};\n        ArkUI_AttributeItem item = {value, 1};\n        nativeModule_->setAttribute(handle_, NODE_HEIGHT, &item);\n    }\n    // 设置节点高度（百分比形式）\n    void SetPercentHeight(float percent)\n    {\n        if (!handle_) {\n            return;\n        }\n        ArkUI_NumberValue value[] = {{.f32 = percent}};\n        ArkUI_AttributeItem item = {value, 1};\n        nativeModule_->setAttribute(handle_, NODE_HEIGHT_PERCENT, &item);\n    }\n    // 设置节点背景颜色\n    void SetBackgroundColor(uint32_t color)\n    {\n        if (!handle_) {\n            return;\n        }\n        ArkUI_NumberValue value[] = {{.u32 = color}};\n        ArkUI_AttributeItem item = {value, 1};\n        nativeModule_->setAttribute(handle_, NODE_BACKGROUND_COLOR, &item);\n    }\n    // 处理通用事件。\n    void RegisterOnClick(const std::function<void(ArkUI_NodeEvent *event)> &onClick)\n    {\n        if (!handle_) {\n            return;\n        }\n        onClick_ = onClick;\n        // 注册点击事件。\n        nativeModule_->registerNodeEvent(handle_, NODE_ON_CLICK_EVENT, 0, nullptr);\n    }\n\n    void RegisterOnTouch(const std::function<void(int32_t type, float x, float y)> &onTouch)\n    {\n        if (!handle_) {\n            return;\n        }\n        onTouch_ = onTouch;\n        // 注册触碰事件。\n        nativeModule_->registerNodeEvent(handle_, NODE_TOUCH_EVENT, 0, nullptr);\n    }\n\n    void RegisterOnDisappear(const std::function<void()> &onDisappear)\n    {\n        if (!handle_) {\n            return;\n        }\n        onDisappear_ = onDisappear;\n        // 注册卸载事件。\n        nativeModule_->registerNodeEvent(handle_, NODE_EVENT_ON_DISAPPEAR, 0, nullptr);\n    }\n\n    void RegisterOnAppear(const std::function<void()> &onAppear)\n    {\n        if (!handle_) {\n            return;\n        }\n        onAppear_ = onAppear;\n        // 注册挂载事件。\n        nativeModule_->registerNodeEvent(handle_, NODE_EVENT_ON_APPEAR, 0, nullptr);\n    }\n\nprotected:\n    // 事件监听器函数指针。\n    static void NodeEventReceiver(ArkUI_NodeEvent *event)\n    {\n        // 获取事件发生的UI组件对象。\n        auto nodeHandle = OH_ArkUI_NodeEvent_GetNodeHandle(event);\n        // 获取保持在UI组件对象中的自定义数据，返回封装类指针。\n        auto *node = reinterpret_cast<ArkUINode *>(\n            NativeModuleInstance::GetInstance()->GetNativeNodeAPI()->getUserData(nodeHandle));\n        // 基于封装类实例对象处理事件。\n        node->ProcessNodeEvent(event);\n    }\n    void ProcessNodeEvent(ArkUI_NodeEvent *event)\n    {\n        auto eventType = OH_ArkUI_NodeEvent_GetEventType(event);\n        switch (eventType) {\n            case NODE_ON_CLICK_EVENT: {\n                if (onClick_) {\n                    onClick_(event);\n                }\n                break;\n            }\n            case NODE_TOUCH_EVENT: {\n                if (onTouch_) {\n                    auto *uiInputEvent = OH_ArkUI_NodeEvent_GetInputEvent(event);\n                    float x = OH_ArkUI_PointerEvent_GetX(uiInputEvent);\n                    float y = OH_ArkUI_PointerEvent_GetY(uiInputEvent);\n                    auto type = OH_ArkUI_UIInputEvent_GetAction(uiInputEvent);\n                    onTouch_(type, x, y);\n                }\n            }\n            case NODE_EVENT_ON_DISAPPEAR: {\n                if (onDisappear_) {\n                    onDisappear_();\n                }\n                break;\n            }\n            case NODE_EVENT_ON_APPEAR: {\n                if (onAppear_) {\n                    onAppear_();\n                }\n                break;\n            }\n            default: {\n                // 组件特有事件交给子类处理\n                OnNodeEvent(event);\n            }\n        }\n    }\n\n    virtual void OnNodeEvent(ArkUI_NodeEvent *event) {}\n\n    void OnAddChild(const std::shared_ptr<ArkUIBaseNode> &child) override\n    {\n        nativeModule_->addChild(handle_, child->GetHandle());\n    }\n\n    void OnRemoveChild(const std::shared_ptr<ArkUIBaseNode> &child) override\n    {\n        nativeModule_->removeChild(handle_, child->GetHandle());\n    }\n\n    void OnInsertChild(const std::shared_ptr<ArkUIBaseNode> &child, int32_t index) override\n    {\n        nativeModule_->insertChildAt(handle_, child->GetHandle(), index);\n    }\n\nprivate:\n    std::function<void(ArkUI_NodeEvent *event)> onClick_;\n    std::function<void()> onDisappear_;\n    std::function<void()> onAppear_;\n    std::function<void(int32_t type, float x, float y)> onTouch_;\n};\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_ARKUINODE_H\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在ArkUIListNode对象中实现列表事件注册逻辑。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ArkUIListNode.h\n// 列表封装类对象\n\n#ifndef MYAPPLICATION_ARKUILISTNODE_H\n#define MYAPPLICATION_ARKUILISTNODE_H\n\n#include \"ArkUINode.h\"\n\nnamespace NativeModule {\nclass ArkUIListNode : public ArkUINode {\npublic:\n    ArkUIListNode()\n        : ArkUINode((NativeModuleInstance::GetInstance()->GetNativeNodeAPI())->createNode(ARKUI_NODE_LIST)) {}\n\n    ~ArkUIListNode() override { nativeModule_->unregisterNodeEvent(handle_, NODE_LIST_ON_SCROLL_INDEX); }\n\n    void SetScrollBarState(bool isShow)\n    {\n        if (!handle_) {\n            return;\n        }\n        ArkUI_ScrollBarDisplayMode displayMode =\n            isShow ? ARKUI_SCROLL_BAR_DISPLAY_MODE_ON : ARKUI_SCROLL_BAR_DISPLAY_MODE_OFF;\n        ArkUI_NumberValue value[] = {{.i32 = displayMode}};\n        ArkUI_AttributeItem item = {value, 1};\n        nativeModule_->setAttribute(handle_, NODE_SCROLL_BAR_DISPLAY_MODE, &item);\n    }\n\n    // 注册列表相关事件。\n    void RegisterOnScrollIndex(const std::function<void(int32_t index)> &onScrollIndex)\n    {\n        if (!handle_) {\n            return;\n        }\n        onScrollIndex_ = onScrollIndex;\n        nativeModule_->registerNodeEvent(handle_, NODE_LIST_ON_SCROLL_INDEX, 0, nullptr);\n    }\n\nprotected:\n   // 处理List相关事件。\n    void OnNodeEvent(ArkUI_NodeEvent *event) override\n    {\n        auto eventType = OH_ArkUI_NodeEvent_GetEventType(event);\n        switch (eventType) {\n            case NODE_LIST_ON_SCROLL_INDEX: {\n                auto index = OH_ArkUI_NodeEvent_GetNodeComponentEvent(event)->data[0];\n                if (onScrollIndex_) {\n                    onScrollIndex_(index.i32);\n                }\n            }\n            default: {\n            }\n        }\n    }\n\nprivate:\n    std::function<void(int32_t index)> onScrollIndex_;\n};\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_ARKUILISTNODE_H\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加相关事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// NormalTextListExample.h\n// 文本列表示例。\n\n#ifndef MYAPPLICATION_NORMALTEXTLISTEXAMPLE_H\n#define MYAPPLICATION_NORMALTEXTLISTEXAMPLE_H\n\n#include \"ArkUIBaseNode.h\"\n#include \"ArkUIListItemNode.h\"\n#include \"ArkUIListNode.h\"\n#include \"ArkUITextNode.h\"\n#include <hilog/log.h>\n\nconst unsigned int LOG_PRINT_DOMAIN = 0xF811;\nconst unsigned int LOOP_SIZE = 30;\nconst unsigned int FONT_SIZE = 16;\nconst unsigned int HEIGHT_SIZE = 200;\nconst float PERCENT_WIDTH_1 = 1;\nconst float PERCENT_HEIGHT_1 = 1;\n\nnamespace NativeModule {\n\nstd::shared_ptr<ArkUIBaseNode> CreateTextListExample()\n{\n    // 创建组件并挂载\n    // 1：创建List组件。\n    auto list = std::make_shared<ArkUIListNode>();\n    list->SetPercentWidth(PERCENT_WIDTH_1);\n    list->SetPercentHeight(PERCENT_HEIGHT_1);\n    // 2：创建ListItem子组件并挂载到List上。\n    for (int32_t i = 0; i < LOOP_SIZE; ++i) {\n        auto listItem = std::make_shared<ArkUIListItemNode>();\n        auto textNode = std::make_shared<ArkUITextNode>();\n        textNode->SetTextContent(std::to_string(i));\n        textNode->SetFontSize(FONT_SIZE);\n        textNode->SetPercentWidth(PERCENT_WIDTH_1);\n        textNode->SetHeight(HEIGHT_SIZE);\n        textNode->SetBackgroundColor(0xFFfffacd);\n        textNode->SetTextAlign(ARKUI_TEXT_ALIGNMENT_CENTER);\n        listItem->AddChild(textNode);\n        // 列表项注册点击事件。\n        auto onClick = [](ArkUI_NodeEvent *event) {\n            // 从组件事件中获取基础事件对象\n            auto *inputEvent = OH_ArkUI_NodeEvent_GetInputEvent(event);\n            if (inputEvent == nullptr) {\n                return;\n            }\n            // 从组件事件获取事件类型\n            auto eventType = OH_ArkUI_NodeEvent_GetEventType(event);\n            OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n                         \"NdkAddInteractionEvent_eventInfo inputEvent = %{public}p\", inputEvent);\n            OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n                         \"NdkAddInteractionEvent_eventInfo eventType = %{public}d\", eventType);\n            auto componentEvent = OH_ArkUI_NodeEvent_GetNodeComponentEvent(event);\n            // 获取组件事件中的数字类型数据\n            OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n                         \"NdkAddInteractionEvent_eventInfo componentEvent = %{public}p\", componentEvent);\n            // 获取触发该事件的组件对象\n            auto nodeHandle = OH_ArkUI_NodeEvent_GetNodeHandle(event);\n            if (nodeHandle == nullptr) {\n                return;\n            }\n            OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n                         \"NdkAddInteractionEvent_eventInfo nodeHandle = %{public}p\", nodeHandle);\n            // 根据eventType来区分事件类型，进行差异化处理，其他获取事件信息的接口也可类似方式来进行差异化的处理\n            switch (eventType) {\n                case NODE_ON_CLICK_EVENT: {\n                    // 触发点击事件所进行的操作，从基础事件获取事件信息\n                    auto x = OH_ArkUI_PointerEvent_GetX(inputEvent);\n                    auto y = OH_ArkUI_PointerEvent_GetY(inputEvent);\n                    auto displayX = OH_ArkUI_PointerEvent_GetDisplayX(inputEvent);\n                    auto displayY = OH_ArkUI_PointerEvent_GetDisplayY(inputEvent);\n                    auto windowX = OH_ArkUI_PointerEvent_GetWindowX(inputEvent);\n                    auto windowY = OH_ArkUI_PointerEvent_GetWindowY(inputEvent);\n                    auto pointerCount = OH_ArkUI_PointerEvent_GetPointerCount(inputEvent);\n                    auto xByIndex = OH_ArkUI_PointerEvent_GetXByIndex(inputEvent, 0);\n                    auto yByIndex = OH_ArkUI_PointerEvent_GetYByIndex(inputEvent, 0);\n                    auto displayXByIndex = OH_ArkUI_PointerEvent_GetDisplayXByIndex(inputEvent, 0);\n                    auto displayYByIndex = OH_ArkUI_PointerEvent_GetDisplayYByIndex(inputEvent, 0);\n                    auto windowXByIndex = OH_ArkUI_PointerEvent_GetWindowXByIndex(inputEvent, 0);\n                    auto windowYByIndex = OH_ArkUI_PointerEvent_GetWindowYByIndex(inputEvent, 0);\n                    auto pointerId = OH_ArkUI_PointerEvent_GetPointerId(inputEvent, 0);\n                    auto pressure = OH_ArkUI_PointerEvent_GetPressure(inputEvent, 0);\n                    auto action = OH_ArkUI_UIInputEvent_GetAction(inputEvent);\n                    auto eventTime = OH_ArkUI_UIInputEvent_GetEventTime(inputEvent);\n                    auto sourceType = OH_ArkUI_UIInputEvent_GetSourceType(inputEvent);\n                    auto type = OH_ArkUI_UIInputEvent_GetType(inputEvent);\n                    std::string eventInfo =\n                        \"x: \" + std::to_string(x) + \", y: \" + std::to_string(y) +\n                        \", displayX: \" + std::to_string(displayX) + \", displayY: \" + std::to_string(displayY) +\n                        \", windowX: \" + std::to_string(windowX) + \", windowY: \" + std::to_string(windowY) +\n                        \", pointerCount: \" + std::to_string(pointerCount) + \", xByIndex: \" + std::to_string(xByIndex) +\n                        \", yByIndex: \" + std::to_string(yByIndex) +\n                        \", displayXByIndex: \" + std::to_string(displayXByIndex) +\n                        \", displayYByIndex: \" + std::to_string(displayYByIndex) +\n                        \", windowXByIndex: \" + std::to_string(windowXByIndex) +\n                        \", windowYByIndex: \" + std::to_string(windowYByIndex) +\n                        \", pointerId: \" + std::to_string(pointerId) + \", pressure: \" + std::to_string(pressure) +\n                        \", action: \" + std::to_string(action) + \", eventTime: \" + std::to_string(eventTime) +\n                        \", sourceType: \" + std::to_string(sourceType) + \", type: \" + std::to_string(type);\n                    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n                                 \"NdkAddInteractionEvent_eventInfoOfCommonEvent eventInfo = %{public}s\",\n                                 eventInfo.c_str());\n                }\n                default: {\n                    break;\n                }\n            }\n        };\n        listItem->RegisterOnClick(onClick);\n        list->AddChild(listItem);\n    }\n    // 3：注册List相关监听事件.\n    list->RegisterOnScrollIndex([](int32_t index) { OH_LOG_INFO(LOG_APP, \"on list scroll index: %{public}d\", index); });\n    // 4: 注册挂载事件。\n    list->RegisterOnAppear([]() { OH_LOG_INFO(LOG_APP, \"on list mount to tree\"); });\n    // 5: 注册卸载事件。\n    list->RegisterOnDisappear([]() { OH_LOG_INFO(LOG_APP, \"on list unmount from tree\"); });\n    return list;\n}\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_NORMALTEXTLISTEXAMPLE_H\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "由于使用了日志相关接口，需要在CMakeLists.txt中添加对libhilog_ndk.z.so的引用，如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "add_library(entry SHARED napi_init.cpp NativeEntry.cpp)\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libace_ndk.z.so libhilog_ndk.z.so)\n"
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
628760(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
496403(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
298763(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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