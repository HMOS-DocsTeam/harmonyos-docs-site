"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["776402"], {
884881(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_use_ndk_arkts_add_event_ndk_bind_gesture_events_ndk_bind_gesture_events_md_957_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-use-ndk-arkts-add-event-ndk-bind-gesture-events-ndk-bind-gesture-events-md-957.json
var site_docs_arkui_arkts_use_ndk_arkts_add_event_ndk_bind_gesture_events_ndk_bind_gesture_events_md_957_namespaceObject = JSON.parse('{"id":"arkui/arkts-use-ndk/arkts-add-event/ndk-bind-gesture-events/ndk-bind-gesture-events","title":"绑定手势事件","description":"ArkUI开发框架在NDK接口主要提供点击手势、滑动手势、快滑手势、长按手势、捏合手势和旋转手势，通过给指定的组件绑定不同的手势并设置相应的回调，实现期望的手势交互能力。","source":"@site/docs/arkui/arkts-use-ndk/arkts-add-event/ndk-bind-gesture-events/ndk-bind-gesture-events.md","sourceDirName":"arkui/arkts-use-ndk/arkts-add-event/ndk-bind-gesture-events","slug":"/arkui/arkts-use-ndk/arkts-add-event/ndk-bind-gesture-events/","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/arkts-add-event/ndk-bind-gesture-events/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"绑定手势事件","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-bind-gesture-events","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"监听组件事件","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/arkts-add-event/ndk-listen-to-component-events/"},"next":{"title":"拖拽事件","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/arkts-add-event/ndk-drag-event/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-use-ndk/arkts-add-event/ndk-bind-gesture-events/ndk-bind-gesture-events.md


const frontMatter = {
	title: '绑定手势事件',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-bind-gesture-events',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '绑定手势事件';

const assets = {

};



const toc = [{
  "value": "单一手势",
  "id": "单一手势",
  "level": 2
}, {
  "value": "组合手势",
  "id": "组合手势",
  "level": 2
}, {
  "value": "顺序识别",
  "id": "顺序识别",
  "level": 3
}, {
  "value": "并行识别",
  "id": "并行识别",
  "level": 3
}, {
  "value": "互斥识别",
  "id": "互斥识别",
  "level": 3
}, {
  "value": "自定义手势判定",
  "id": "自定义手势判定",
  "level": 3
}, {
  "value": "获取事件信息",
  "id": "获取事件信息",
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "绑定手势事件",
        children: "绑定手势事件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI开发框架在NDK接口主要提供点击手势、滑动手势、快滑手势、长按手势、捏合手势和旋转手势，通过给指定的组件绑定不同的手势并设置相应的回调，实现期望的手势交互能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面通过一个简单的示例来介绍如何实现手势绑定。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建一个Column节点，用于绑定手势。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建Column节点\nauto column = nodeAPI->createNode(ARKUI_NODE_COLUMN);\n// 设置背景色\nArkUI_NumberValue value[] = {{.u32 = 0xff112233}};\nArkUI_AttributeItem item = {value, 1};\nnodeAPI->setAttribute(column, NODE_BACKGROUND_COLOR, &item);\n// 设置宽度\nArkUI_NumberValue widthValue[] = {{400}};\nArkUI_AttributeItem width = {widthValue, 1};\nnodeAPI->setAttribute(column, NODE_WIDTH, &width);\n// 设置高度\nArkUI_NumberValue heightValue[] = {{400}};\nArkUI_AttributeItem height = {heightValue, 1};\nnodeAPI->setAttribute(column, NODE_HEIGHT, &height);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建一个单指长按1秒并持续响应的长按手势。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取手势Native接口集合\nauto gestureApi = reinterpret_cast<ArkUI_NativeGestureAPI_1 *>(\n    OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_GESTURE, \"ArkUI_NativeGestureAPI_1\"));\n// 创建长按手势\n// DURATION_NUM_1000 = 1000\nauto longPressGesture = gestureApi->createLongPressGesture(1, true, DURATION_NUM_1000);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将创建的手势和步骤一中创建的Column节点绑定。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "auto onActionCallBack = [](ArkUI_GestureEvent *event, void *extraParam) {\n    // 回调内容\n    // ···\n};\n\n// 将手势设置到组件上\ngestureApi->setGestureEventTarget(\n    longPressGesture, GESTURE_EVENT_ACTION_ACCEPT | GESTURE_EVENT_ACTION_UPDATE | GESTURE_EVENT_ACTION_END, column,\n    onActionCallBack);\n\ngestureApi->addGestureToNode(column, longPressGesture, PARALLEL, NORMAL_GESTURE_MASK);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "单一手势",
      children: "单一手势"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过上文的示例已经了解了如何将手势绑定在节点上，接下来将分别介绍不同手势的创建方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击手势"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过给组件绑定点击手势可在组件被点击时触发此回调，可指定触发回调需要的点击次数和手指个数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取手势Native接口集合\nauto gestureApi = reinterpret_cast<ArkUI_NativeGestureAPI_1 *>(\n    OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_GESTURE, \"ArkUI_NativeGestureAPI_1\"));\n// 创建点击手势\nauto tapGesture = gestureApi->createTapGesture(1, 1);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "滑动手势"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过给组件绑定滑动手势可在用户滑动组件时触发回调，可指定触发回调需要的手指个数、滑动方向、滑动距离。单位为px。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取手势Native接口集合\nauto gestureApi = reinterpret_cast<ArkUI_NativeGestureAPI_1 *>(\n    OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_GESTURE, \"ArkUI_NativeGestureAPI_1\"));\n// 创建滑动手势\nauto panGesture = gestureApi->createPanGesture(1, GESTURE_DIRECTION_ALL, 1);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "长按手势"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过给组件绑定长按手势可在用户长按组件时触发回调，可指定触发回调需要的手指个数、长按时间（单位毫秒）、是否连续触发。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取手势Native接口集合\nauto gestureApi = reinterpret_cast<ArkUI_NativeGestureAPI_1 *>(\n    OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_GESTURE, \"ArkUI_NativeGestureAPI_1\"));\n// 创建长按手势\n// DURATION_NUM_1000 = 1000\nauto longPressGesture = gestureApi->createLongPressGesture(1, true, DURATION_NUM_1000);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "捏合手势"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过给组件绑定捏合手势可在用户捏合组件时触发回调，可指定触发回调需要的手指个数（最小为2）、捏合距离（单位px）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取手势Native接口集合\nauto gestureApi = reinterpret_cast<ArkUI_NativeGestureAPI_1 *>(\n    OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_GESTURE, \"ArkUI_NativeGestureAPI_1\"));\n// 创建捏合手势\n// NUMBER_2 = 2，NUMBER_10 = 10\nauto pinchGesture = gestureApi->createPinchGesture(NUMBER_2, NUMBER_10);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "旋转手势"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过给组件绑定旋转手势可在用户旋转组件时触发回调，可指定触发回调需要的手指个数（最小为2）、旋转角度。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取手势Native接口集合\nauto gestureApi = reinterpret_cast<ArkUI_NativeGestureAPI_1 *>(\n    OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_GESTURE, \"ArkUI_NativeGestureAPI_1\"));\n// 创建旋转手势\n// NUMBER_2 = 2，NUMBER_10 = 10\nauto rotationGesture = gestureApi->createRotationGesture(NUMBER_2, NUMBER_10);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "快滑手势"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过给组件绑定快滑手势可在用户快速滑动组件时触发回调，可指定触发回调需要的手指个数（最小为1）、滑动方向、滑动速度（单位px/s）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取手势Native接口集合\nauto gestureApi = reinterpret_cast<ArkUI_NativeGestureAPI_1 *>(\n    OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_GESTURE, \"ArkUI_NativeGestureAPI_1\"));\n// 创建快滑手势\n// SPEED_NUM_50 = 50\nauto swipeGesture = gestureApi->createSwipeGesture(1, GESTURE_DIRECTION_ALL, SPEED_NUM_50);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "组合手势",
      children: "组合手势"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以将多个不同类型的手势组合在一起，形成一个手势组，这个手势组可以作为一个识别整体，达到对用户多个不同类型手势序列的识别目的。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-gesture-h/capi-native-gesture-h#arkui_groupgesturemode",
        children: "ArkUI_GroupGestureMode"
      }), "来指定这个手势组的识别模式，即组内的手势之间的关系，包含顺序识别SEQUENTIAL_GROUP，并行识别PARALLEL_GROUP，互斥识别EXCLUSIVE_GROUP。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "顺序识别",
      children: "顺序识别"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["顺序识别组合手势对应的ArkUI_GroupGestureMode为SEQUENTIAL_GROUP。顺序识别组合手势将按照手势的注册顺序识别手势，直到所有的手势识别成功。当顺序识别组合手势中有一个手势识别失败时，后续手势识别均失败。顺序识别手势组仅有最后一个手势可以响应", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-gesture-h/capi-native-gesture-h#arkui_gestureeventactiontype",
        children: "GESTURE_EVENT_ACTION_END"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以顺序识别长按和滑动手势为例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// LongPressAndSwipeGesture.h\n#include <arkui/native_animate.h>\n#include <arkui/native_gesture.h>\n#include <arkui/native_interface.h>\n#include <arkui/native_node.h>\n#include <arkui/native_type.h>\n#include <arkui/native_node_napi.h>\n#include <hilog/log.h>\n#include \"Common.h\"\n#include \"Function.h\"\n// ...\nArkUI_NodeHandle LongPressAndSwipeGesture()\n{\n    auto column = nodeAPI->createNode(ARKUI_NODE_COLUMN);\n\n    // 创建节点\n    ArkUI_NumberValue value[] = {{.u32 = 0xff112233}};\n    ArkUI_AttributeItem item = {value, ITEM_SIZE_ONE};\n    nodeAPI->setAttribute(column, NODE_BACKGROUND_COLOR, &item);\n    ArkUI_NumberValue widthValue[] = {{WIDTH_SIZE}};\n    ArkUI_AttributeItem width = {widthValue, ITEM_SIZE_ONE};\n    nodeAPI->setAttribute(column, NODE_WIDTH, &width);\n    ArkUI_NumberValue heightValue[] = {{HEIGHT_SIZE}};\n    ArkUI_AttributeItem height = {heightValue, ITEM_SIZE_ONE};\n    nodeAPI->setAttribute(column, NODE_HEIGHT, &height);\n\n    // 判断是否支持创建手势\n    auto gestureApi = reinterpret_cast<ArkUI_NativeGestureAPI_1 *>(\n        OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_GESTURE, \"ArkUI_NativeGestureAPI_1\"));\n    if (gestureApi->createGroupGesture) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n                     \"NdkAddInteractionEvent_GestureSampleLog, createGroupGesture api exist\");\n    } else {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n                     \"NdkAddInteractionEvent_GestureSampleLog, createGroupGesture api not exist\");\n    }\n    auto groupGesture = gestureApi->createGroupGesture(ArkUI_GroupGestureMode::SEQUENTIAL_GROUP);\n\n    // 创建长按手势\n    auto longPressGesture = gestureApi->createLongPressGesture(FINGERS_NUM, true, DURATION_NUM);\n    if (gestureApi->getGestureType) {\n        ArkUI_GestureRecognizerType type = gestureApi->getGestureType(longPressGesture);\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n                     \"NdkAddInteractionEvent_GestureSampleLog longPressGesture,\"\n                     \"ArkUI_GestureRecognizerType%{public}d\", type);\n    }\n    // 给长按手势绑定回调\n    auto onActionCallBackPanLongPress = [](ArkUI_GestureEvent *event, void *extraParam) {\n        ArkUI_GestureEventActionType actionType = OH_ArkUI_GestureEvent_GetActionType(event);\n\n        float velocity = OH_ArkUI_PanGesture_GetVelocity(event);\n        float velocityX = OH_ArkUI_PanGesture_GetVelocityX(event);\n        float velocityY = OH_ArkUI_PanGesture_GetVelocityY(event);\n        float offsetX = OH_ArkUI_PanGesture_GetOffsetX(event);\n        float offsetY = OH_ArkUI_PanGesture_GetOffsetY(event);\n        float scale = OH_ArkUI_PinchGesture_GetScale(event);\n        float centerX = OH_ArkUI_PinchGesture_GetCenterX(event);\n        float centerY = OH_ArkUI_PinchGesture_GetCenterY(event);\n        float angle = OH_ArkUI_SwipeGesture_GetAngle(event);\n        float velocityS = OH_ArkUI_SwipeGesture_GetVelocity(event);\n        float angleR = OH_ArkUI_RotationGesture_GetAngle(event);\n        float repeat = OH_ArkUI_LongPress_GetRepeatCount(event);\n\n        OH_LOG_Print(\n            LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n            \"NdkAddInteractionEvent_GestureSampleLog,longPressGesturecallback actionType:%{public}d,\"\n            \"velocity%{public}f,velocityX%{public}f;\"\n            \"velocityY%{public}f,offsetX%{public}f,offsetY%{public}f,scale%{public}fcenterX\"\n            \"%{public}fcenterY\"\n            \"%{public}fangle%{public}fvelocityS%{public}fangleR%{public}frepeat%{public}f\",\n            actionType, velocity, velocityX, velocityY, offsetX, offsetY, scale, centerX, centerY, angle, velocityS,\n            angleR, repeat);\n    };\n    gestureApi->setGestureEventTarget(longPressGesture,\n                                      GESTURE_EVENT_ACTION_ACCEPT | GESTURE_EVENT_ACTION_UPDATE |\n                                      GESTURE_EVENT_ACTION_CANCEL, column, onActionCallBackPanLongPress);\n\n    // 将长按手势添加到手势组\n    if (gestureApi->addChildGesture) {\n        gestureApi->addChildGesture(groupGesture, longPressGesture);\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n                     \"NdkAddInteractionEvent_GestureSampleLog, addChildGesture longPressGesture\");\n    }\n    // 创建快滑手势 swipe\n    auto swipeGesture = gestureApi->createSwipeGesture(1, GESTURE_DIRECTION_ALL, 100);\n    if (gestureApi->getGestureType) {\n        ArkUI_GestureRecognizerType type = gestureApi->getGestureType(swipeGesture);\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n                     \"NdkAddInteractionEvent_GestureSampleLog, ArkUI_GestureRecognizerType %{public}d\",\n                     type);\n    }\n    // 给快滑手势绑定回调\n    auto onActionCallBack = [](ArkUI_GestureEvent *event, void *extraParam) {\n        ArkUI_GestureEventActionType actionType = OH_ArkUI_GestureEvent_GetActionType(event);\n\n        float velocity = OH_ArkUI_PanGesture_GetVelocity(event);\n        float velocityX = OH_ArkUI_PanGesture_GetVelocityX(event);\n        float velocityY = OH_ArkUI_PanGesture_GetVelocityY(event);\n        float offsetX = OH_ArkUI_PanGesture_GetOffsetX(event);\n        float offsetY = OH_ArkUI_PanGesture_GetOffsetY(event);\n        float scale = OH_ArkUI_PinchGesture_GetScale(event);\n        float centerX = OH_ArkUI_PinchGesture_GetCenterX(event);\n        float centerY = OH_ArkUI_PinchGesture_GetCenterY(event);\n        float angle = OH_ArkUI_SwipeGesture_GetAngle(event);\n        float velocityS = OH_ArkUI_SwipeGesture_GetVelocity(event);\n        float angleR = OH_ArkUI_RotationGesture_GetAngle(event);\n        float repeat = OH_ArkUI_LongPress_GetRepeatCount(event);\n        \n        // 通过日志查看\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n                     \"NdkAddInteractionEvent_GestureSampleLog, swipeGesture \"\n                     \"callback actionType: %{public}d, velocity %{public}f,velocityX \"\n                     \"%{public}f; \"\n                     \"velocityY %{public}f, offsetX %{public}f, offsetY %{public}f, scale %{public}fcenterX \"\n                     \"%{public}f centerY\"\n                     \" %{public}f angle %{public}f velocityS %{public}f angleR %{public}f repeat %{public}f\",\n                     actionType, velocity, velocityX, velocityY, offsetX, offsetY, scale, centerX, centerY, angle,\n                     velocityS, angleR, repeat);\n\n        ArkUI_NumberValue value[] = {{.f32 = 0}, {.f32 = 0}, {.f32 = 0}, {.f32 = angleR}, {.f32 = 0}};\n        ArkUI_AttributeItem item = {value, ITEM_SIZE_FIVE};\n        auto column = reinterpret_cast<ArkUI_NodeHandle>(extraParam);\n        nodeAPI->setAttribute(column, NODE_ROTATE, &item);\n    };\n\n    gestureApi->setGestureEventTarget(\n        swipeGesture, GESTURE_EVENT_ACTION_ACCEPT | GESTURE_EVENT_ACTION_UPDATE | GESTURE_EVENT_ACTION_END, column,\n        onActionCallBack);\n\n    // 将快滑手势添加到手势组\n    if (gestureApi->addChildGesture) {\n        gestureApi->addChildGesture(groupGesture, swipeGesture);\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n                     \"NdkAddInteractionEvent_GestureSampleLog, addChildGesture swipeGesture\");\n    }\n    // 将手势组设置到组件上\n    gestureApi->addGestureToNode(column, groupGesture, PRIORITY, NORMAL_GESTURE_MASK);\n    return column;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "完整示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/ArkUISample/NdkAddInteractionEvent",
        children: "示例工程"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "并行识别",
      children: "并行识别"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "并行识别组合手势对应的ArkUI_GroupGestureMode为PARALLEL_GROUP。并行识别组合手势中注册的手势将同时进行识别，直到所有手势识别结束。并行识别手势组合中的手势进行识别时互不影响。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以并行识别长按和快滑手势为例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// LongPressAndFlickGesture.h\n#include <arkui/native_animate.h>\n#include <arkui/native_gesture.h>\n#include <arkui/native_interface.h>\n#include <arkui/native_node.h>\n#include <arkui/native_type.h>\n#include <arkui/native_node_napi.h>\n#include <hilog/log.h>\n#include \"Common.h\"\n#include \"Function.h\"\n// ...\n\nArkUI_NodeHandle LongPressAndFlickGesture()\n{\n    auto column = nodeAPI->createNode(ARKUI_NODE_COLUMN);\n\n    // 创建节点\n    ArkUI_NumberValue value[] = {{.u32 = 0xff112233}};\n    ArkUI_AttributeItem item = {value, ITEM_SIZE_ONE};\n    nodeAPI->setAttribute(column, NODE_BACKGROUND_COLOR, &item);\n    ArkUI_NumberValue widthValue[] = {{WIDTH_SIZE}};\n    ArkUI_AttributeItem width = {widthValue, ITEM_SIZE_ONE};\n    nodeAPI->setAttribute(column, NODE_WIDTH, &width);\n    ArkUI_NumberValue heightValue[] = {{HEIGHT_SIZE}};\n    ArkUI_AttributeItem height = {heightValue, ITEM_SIZE_ONE};\n    nodeAPI->setAttribute(column, NODE_HEIGHT, &height);\n\n    // 判断是否支持创建手势\n    auto gestureApi = reinterpret_cast<ArkUI_NativeGestureAPI_1 *>(\n        OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_GESTURE, \"ArkUI_NativeGestureAPI_1\"));\n    if (gestureApi->createGroupGesture) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n                     \"NdkAddInteractionEvent_GestureSampleLog, createGroupGesture api exist\");\n    } else {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n                     \"NdkAddInteractionEvent_GestureSampleLog, createGroupGesture api not exist\");\n    }\n\n    // 创建手势组\n    auto groupGesture = gestureApi->createGroupGesture(ArkUI_GroupGestureMode::PARALLEL_GROUP);\n\n    // 创建长按手势\n    auto longPressGesture = gestureApi->createLongPressGesture(FINGERS_NUM, true, DURATION_NUM_500);\n    if (gestureApi->getGestureType) {\n        ArkUI_GestureRecognizerType type = gestureApi->getGestureType(longPressGesture);\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n                     \"NdkAddInteractionEvent_GestureSampleLog,ArkUI_GestureRecognizerType%{public}d\", type);\n    }\n    // 给长按手势绑定回调\n    auto onActionCallBackPanLongPress = [](ArkUI_GestureEvent *event, void *extraParam) {\n        ArkUI_GestureEventActionType actionType = OH_ArkUI_GestureEvent_GetActionType(event);\n\n        float velocity = OH_ArkUI_PanGesture_GetVelocity(event);\n        float velocityX = OH_ArkUI_PanGesture_GetVelocityX(event);\n        float velocityY = OH_ArkUI_PanGesture_GetVelocityY(event);\n        float offsetX = OH_ArkUI_PanGesture_GetOffsetX(event);\n        float offsetY = OH_ArkUI_PanGesture_GetOffsetY(event);\n        float scale = OH_ArkUI_PinchGesture_GetScale(event);\n        float centerX = OH_ArkUI_PinchGesture_GetCenterX(event);\n        float centerY = OH_ArkUI_PinchGesture_GetCenterY(event);\n        float angle = OH_ArkUI_SwipeGesture_GetAngle(event);\n        float velocityS = OH_ArkUI_SwipeGesture_GetVelocity(event);\n        float angleR = OH_ArkUI_RotationGesture_GetAngle(event);\n        float repeat = OH_ArkUI_LongPress_GetRepeatCount(event);\n\n        OH_LOG_Print(\n            LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n            \"NdkAddInteractionEvent_GestureSampleLog,longPressGesturecallback actionType:%{public}d,\"\n            \"velocity%{public}f,velocityX%{public}f;\"\n            \"velocityY%{public}f,offsetX%{public}f,offsetY%{public}f,scale%{public}f, centerX \"\n            \"%{public}fcenterY\"\n            \"%{public}fangle%{public}fvelocityS%{public}fangleR%{public}frepeat%{public}f\",\n            actionType, velocity, velocityX, velocityY, offsetX, offsetY, scale, centerX, centerY, angle, velocityS,\n            angleR, repeat);\n    };\n    gestureApi->setGestureEventTarget(longPressGesture,\n                                      GESTURE_EVENT_ACTION_ACCEPT | GESTURE_EVENT_ACTION_UPDATE |\n                                            GESTURE_EVENT_ACTION_CANCEL,\n                                      column, onActionCallBackPanLongPress);\n\n    // 将长按手势添加到手势组\n    if (gestureApi->addChildGesture) {\n        gestureApi->addChildGesture(groupGesture, longPressGesture);\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n                     \"NdkAddInteractionEvent_GestureSampleLog, addChildGesture longPressGesture\");\n    }\n    // 创建快滑手势 swipe\n    auto swipeGesture = gestureApi->createSwipeGesture(FINGERS_NUM, GESTURE_DIRECTION_ALL, DURATION_NUM_100);\n    if (gestureApi->getGestureType) {\n        ArkUI_GestureRecognizerType type = gestureApi->getGestureType(swipeGesture);\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n                     \"NdkAddInteractionEvent_GestureSampleLog, ArkUI_GestureRecognizerType %{public}d\",\n                     type);\n    }\n    // 给快滑手势绑定回调\n    auto onActionCallBack = [](ArkUI_GestureEvent *event, void *extraParam) {\n        ArkUI_GestureEventActionType actionType = OH_ArkUI_GestureEvent_GetActionType(event);\n\n        float velocity = OH_ArkUI_PanGesture_GetVelocity(event);\n        float velocityX = OH_ArkUI_PanGesture_GetVelocityX(event);\n        float velocityY = OH_ArkUI_PanGesture_GetVelocityY(event);\n        float offsetX = OH_ArkUI_PanGesture_GetOffsetX(event);\n        float offsetY = OH_ArkUI_PanGesture_GetOffsetY(event);\n        float scale = OH_ArkUI_PinchGesture_GetScale(event);\n        float centerX = OH_ArkUI_PinchGesture_GetCenterX(event);\n        float centerY = OH_ArkUI_PinchGesture_GetCenterY(event);\n        float angle = OH_ArkUI_SwipeGesture_GetAngle(event);\n        float velocityS = OH_ArkUI_SwipeGesture_GetVelocity(event);\n        float angleR = OH_ArkUI_RotationGesture_GetAngle(event);\n        float repeat = OH_ArkUI_LongPress_GetRepeatCount(event);\n        \n        // 通过日志查看\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n                     \"NdkAddInteractionEvent_GestureSampleLog, swipeGesture \"\n                     \"callback actionType: %{public}d, velocity%{public}f,velocityX \"\n                     \"%{public}f; \"\n                     \"velocityY %{public}f, offsetX %{public}f, offsetY %{public}f, scale %{public}f, centerX \"\n                     \"%{public}f centerY\"\n                     \" %{public}f angle %{public}f velocityS %{public}f angleR %{public}f repeat %{public}f\",\n                     actionType, velocity, velocityX, velocityY, offsetX, offsetY, scale, centerX, centerY, angle,\n                     velocityS, angleR, repeat);\n\n        ArkUI_NumberValue value[] = {{.f32 = 0}, {.f32 = 0}, {.f32 = 0}, {.f32 = angleR}, {.f32 = 0}};\n        ArkUI_AttributeItem item = {value, ITEM_SIZE_FIVE};\n        auto column = reinterpret_cast<ArkUI_NodeHandle>(extraParam);\n        nodeAPI->setAttribute(column, NODE_ROTATE, &item);\n    };\n\n    gestureApi->setGestureEventTarget(\n        swipeGesture, GESTURE_EVENT_ACTION_ACCEPT | GESTURE_EVENT_ACTION_UPDATE | GESTURE_EVENT_ACTION_END, column,\n        onActionCallBack);\n\n    // 将快滑手势添加到手势组\n    if (gestureApi->addChildGesture) {\n        gestureApi->addChildGesture(groupGesture, swipeGesture);\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n                     \"NdkAddInteractionEvent_GestureSampleLog, addChildGesture swipeGesture\");\n    }\n    // 将手势组设置到组件上\n    gestureApi->addGestureToNode(column, groupGesture, PRIORITY, NORMAL_GESTURE_MASK);\n    return column;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "完整示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/ArkUISample/NdkAddInteractionEvent",
        children: "示例工程"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "互斥识别",
      children: "互斥识别"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "互斥识别组合手势对应的ArkUI_GroupGestureMode为EXCLUSIVE_GROUP。互斥识别组合手势中注册的手势将同时进行识别，若有一个手势识别成功，则结束手势识别，其他所有手势识别失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以互斥识别滑动手势和捏合手势为例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// SwipeAndPinchExclusiveGesture.h\n#include <arkui/native_animate.h>\n#include <arkui/native_gesture.h>\n#include <arkui/native_interface.h>\n#include <arkui/native_node.h>\n#include <arkui/native_type.h>\n#include <arkui/native_node_napi.h>\n#include <hilog/log.h>\n#include \"Common.h\"\n#include \"Function.h\"\n// ...\n\nArkUI_NodeHandle SwipeAndPinchExclusiveGesture()\n{\n    OH_ArkUI_GetModuleInterface(ARKUI_NATIVE_NODE, ArkUI_NativeNodeAPI_1, nodeAPI);\n    if (nodeAPI == nullptr) {\n        return nullptr;\n    }\n    auto column = nodeAPI->createNode(ARKUI_NODE_COLUMN);\n\n    // 创建节点\n    ArkUI_NumberValue value[] = {{.u32 = 0xff112233}};\n    ArkUI_AttributeItem item = {value, 1};\n    nodeAPI->setAttribute(column, NODE_BACKGROUND_COLOR, &item);\n    ArkUI_NumberValue widthValue[] = {{WIDTH_SIZE}};\n    ArkUI_AttributeItem width = {widthValue, ITEM_SIZE_ONE};\n    nodeAPI->setAttribute(column, NODE_WIDTH, &width);\n    ArkUI_NumberValue heightValue[] = {{HEIGHT_SIZE}};\n    ArkUI_AttributeItem height = {heightValue, ITEM_SIZE_ONE};\n    nodeAPI->setAttribute(column, NODE_HEIGHT, &height);\n\n    // 判断是否支持创建手势\n    auto gestureApi = reinterpret_cast<ArkUI_NativeGestureAPI_1 *>(\n        OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_GESTURE, \"ArkUI_NativeGestureAPI_1\"));\n    if (gestureApi->createGroupGesture) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n                     \"NdkAddInteractionEvent_GestureSampleLog, createGroupGesture api exist\");\n    } else {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n                     \"NdkAddInteractionEvent_GestureSampleLog, createGroupGesture api not exist\");\n    }\n    auto groupGesture = gestureApi->createGroupGesture(ArkUI_GroupGestureMode::EXCLUSIVE_GROUP);\n\n    // 创建滑动手势\n    auto panGesture = gestureApi->createPanGesture(FINGERS_NUM, GESTURE_DIRECTION_VERTICAL, DURATION_NUM);\n    if (gestureApi->getGestureType) {\n        ArkUI_GestureRecognizerType type = gestureApi->getGestureType(panGesture);\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n                     \"NdkAddInteractionEvent_GestureSampleLog panGesture, ArkUI_GestureRecognizerType %{public}d\",\n                     type);\n    }\n    // 给滑动手势绑定回调\n    auto onActionCallBackPan = [](ArkUI_GestureEvent *event, void *extraParam) {\n        ArkUI_GestureEventActionType actionType = OH_ArkUI_GestureEvent_GetActionType(event);\n\n        float velocity = OH_ArkUI_PanGesture_GetVelocity(event);\n        float velocityX = OH_ArkUI_PanGesture_GetVelocityX(event);\n        float velocityY = OH_ArkUI_PanGesture_GetVelocityY(event);\n        float offsetX = OH_ArkUI_PanGesture_GetOffsetX(event);\n        float offsetY = OH_ArkUI_PanGesture_GetOffsetY(event);\n        float scale = OH_ArkUI_PinchGesture_GetScale(event);\n        float centerX = OH_ArkUI_PinchGesture_GetCenterX(event);\n        float centerY = OH_ArkUI_PinchGesture_GetCenterY(event);\n        float angle = OH_ArkUI_SwipeGesture_GetAngle(event);\n        float velocityS = OH_ArkUI_SwipeGesture_GetVelocity(event);\n        float angleR = OH_ArkUI_RotationGesture_GetAngle(event);\n        float repeat = OH_ArkUI_LongPress_GetRepeatCount(event);\n\n        // 通过日志查看\n        OH_LOG_Print(\n            LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n            \"NdkAddInteractionEvent_GestureSampleLog, panGesture callback actionType: %{public}d, \"\n            \"velocity %{public}f,velocityX %{public}f; \"\n            \"velocityY %{public}f, offsetX %{public}f, offsetY %{public}f, scale %{public}fcenterX \"\n            \"%{public}f centerY\"\n            \" %{public}f angle %{public}f velocityS %{public}f angleR %{public}f repeat %{public}f\",\n            actionType, velocity, velocityX, velocityY, offsetX, offsetY, scale, centerX, centerY, angle, velocityS,\n            angleR, repeat);\n    };\n    gestureApi->setGestureEventTarget(panGesture,\n                                      GESTURE_EVENT_ACTION_ACCEPT | GESTURE_EVENT_ACTION_UPDATE |\n                                          GESTURE_EVENT_ACTION_END | GESTURE_EVENT_ACTION_CANCEL,\n                                      column, onActionCallBackPan);\n    // 将滑动手势添加到手势组\n    if (gestureApi->addChildGesture) {\n        gestureApi->addChildGesture(groupGesture, panGesture);\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n                     \"NdkAddInteractionEvent_GestureSampleLog, addChildGesture panGesture\");\n    }\n    // 创建捏合手势\n    auto pinchGesture = gestureApi->createPinchGesture(0, 0);\n    if (gestureApi->getGestureType) {\n        ArkUI_GestureRecognizerType type = gestureApi->getGestureType(pinchGesture);\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n                     \"NdkAddInteractionEvent_GestureSampleLog pinchGesture, \"\n                     \"ArkUI_GestureRecognizerType %{public}d\", type);\n    }\n    // 给捏合手势绑定回调\n    auto onActionCallBack = [](ArkUI_GestureEvent *event, void *extraParam) {\n        ArkUI_GestureEventActionType actionType = OH_ArkUI_GestureEvent_GetActionType(event);\n\n        float velocity = OH_ArkUI_PanGesture_GetVelocity(event);\n        float velocityX = OH_ArkUI_PanGesture_GetVelocityX(event);\n        float velocityY = OH_ArkUI_PanGesture_GetVelocityY(event);\n        float offsetX = OH_ArkUI_PanGesture_GetOffsetX(event);\n        float offsetY = OH_ArkUI_PanGesture_GetOffsetY(event);\n        float scale = OH_ArkUI_PinchGesture_GetScale(event);\n        float centerX = OH_ArkUI_PinchGesture_GetCenterX(event);\n        float centerY = OH_ArkUI_PinchGesture_GetCenterY(event);\n        float angle = OH_ArkUI_SwipeGesture_GetAngle(event);\n        float velocityS = OH_ArkUI_SwipeGesture_GetVelocity(event);\n        float angleR = OH_ArkUI_RotationGesture_GetAngle(event);\n        float repeat = OH_ArkUI_LongPress_GetRepeatCount(event);\n        \n        OH_LOG_Print(\n            LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n            \"NdkAddInteractionEvent_GestureSampleLog, pinchGesture callback actionType: %{public}d, \"\n            \"velocity %{public}f,velocityX %{public}f; \"\n            \"velocityY %{public}f, offsetX %{public}f, offsetY %{public}f, scale %{public}fcenterX \"\n            \"%{public}f centerY\"\n            \" %{public}f angle %{public}f velocityS %{public}f angleR %{public}f repeat %{public}f\",\n            actionType, velocity, velocityX, velocityY, offsetX, offsetY, scale, centerX, centerY, angle, velocityS,\n            angleR, repeat);\n        ArkUI_NumberValue value[] = {{.f32 = scale}, {.f32 = scale}};\n        ArkUI_AttributeItem item = {value, ITEM_SIZE_TWO};\n        auto column = reinterpret_cast<ArkUI_NodeHandle>(extraParam);\n        nodeAPI->setAttribute(column, NODE_SCALE, &item);\n    };\n    gestureApi->setGestureEventTarget(pinchGesture,\n                                      GESTURE_EVENT_ACTION_ACCEPT | GESTURE_EVENT_ACTION_UPDATE |\n                                          GESTURE_EVENT_ACTION_END | GESTURE_EVENT_ACTION_CANCEL,\n                                      column, onActionCallBack);\n    // 将捏合手势添加到手势组\n    if (gestureApi->addChildGesture) {\n        gestureApi->addChildGesture(groupGesture, pinchGesture);\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n                     \"NdkAddInteractionEvent_GestureSampleLog, addChildGesture pinchGesture\");\n    }\n    // 将手势组设置到组件上\n    gestureApi->addGestureToNode(column, groupGesture, PRIORITY, NORMAL_GESTURE_MASK);\n    return column;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "完整示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/blob/master/code/DocsSample/ArkUISample/NdkAddInteractionEvent",
        children: "示例工程"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自定义手势判定",
      children: "自定义手势判定"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当用户的操作符合某个手势识别器，该识别器即将触发成功时，可通过自定义手势判定能力来动态决策，是否希望该识别器被系统认定为识别成功。通过setGestureInterrupterToNode接口，绑定一个回调在该组件上，但组件上的某个手势即将识别成功时，通过返回CONTINUE或REJECT来决定是否将成功机会让给其它手势识别器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上文绑定手势事件的示例中按照如下方式进行调整即可实现自定义手势判定。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建自定义手势判定回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "auto onInterruptCallback = [](ArkUI_GestureInterruptInfo *info) -> ArkUI_GestureInterruptResult {\n    // 获取是否系统手势\n    auto sysTag = OH_ArkUI_GestureInterruptInfo_GetSystemFlag(info);\n    // 获取拦截的手势指针\n    auto recognizer = OH_ArkUI_GestureInterruptInfo_GetRecognizer(info);\n    // 获取系统手势类型\n    auto systemRecognizerType = OH_ArkUI_GestureInterruptInfo_GetSystemRecognizerType(info);\n    // 获取手势事件\n    auto gestureEvent = OH_ArkUI_GestureInterruptInfo_GetGestureEvent(info);\n    auto inputEvent = OH_ArkUI_GestureEvent_GetRawInputEvent(gestureEvent);\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n        \"NdkAddInteractionEvent_eventInfo longPressGesture\");\n    if (sysTag) {\n        // 如果是系统手势则不拦截\n        return GESTURE_INTERRUPT_RESULT_CONTINUE;\n    } else {\n        // 不是系统手势则拒绝\n        return GESTURE_INTERRUPT_RESULT_REJECT;\n    }\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "绑定手势判定和节点。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "gestureApi->setGestureInterrupterToNode(column, onInterruptCallback);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "经过上述修改，将原本可以生效的长按手势做了拦截，即，此时再对Column节点长按将不会触发长按的手势回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取事件信息",
      children: "获取事件信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["绑定手势事件已详细说明如何将手势绑定到节点上。在回调执行时，ArkUI框架提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-gesture-h/capi-native-gesture-h#oh_arkui_gestureevent_getrawinputevent",
        children: "OH_ArkUI_GestureEvent_GetRawInputEvent()"
      }), "接口，可从手势事件中获取基础事件对象。之后，可通过调用", (0,jsx_runtime.jsx)(_components.a, {
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
      }), "等接口，从基础事件中获取更多信息。应用依据获取的信息，在手势事件执行过程中实现差异化交互逻辑。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 设置回调，在触发手势事件时执行回调处理手势事件\nauto onActionCallback = [](ArkUI_GestureEvent *event, void *extraParams) {\n    // 从手势事件获取基础事件对象\n    auto *inputEvent = OH_ArkUI_GestureEvent_GetRawInputEvent(event);\n    // 从基础事件获取事件信息\n    auto x = OH_ArkUI_PointerEvent_GetX(inputEvent);\n    auto y = OH_ArkUI_PointerEvent_GetY(inputEvent);\n    auto displayX = OH_ArkUI_PointerEvent_GetDisplayX(inputEvent);\n    auto displayY = OH_ArkUI_PointerEvent_GetDisplayY(inputEvent);\n    auto windowX = OH_ArkUI_PointerEvent_GetWindowX(inputEvent);\n    auto windowY = OH_ArkUI_PointerEvent_GetWindowY(inputEvent);\n    auto pointerCount = OH_ArkUI_PointerEvent_GetPointerCount(inputEvent);\n    auto xByIndex = OH_ArkUI_PointerEvent_GetXByIndex(inputEvent, 0);\n    auto yByIndex = OH_ArkUI_PointerEvent_GetYByIndex(inputEvent, 0);\n    auto displayXByIndex = OH_ArkUI_PointerEvent_GetDisplayXByIndex(inputEvent, 0);\n    auto displayYByIndex = OH_ArkUI_PointerEvent_GetDisplayYByIndex(inputEvent, 0);\n    auto windowXByIndex = OH_ArkUI_PointerEvent_GetWindowXByIndex(inputEvent, 0);\n    auto windowYByIndex = OH_ArkUI_PointerEvent_GetWindowYByIndex(inputEvent, 0);\n    auto pointerId = OH_ArkUI_PointerEvent_GetPointerId(inputEvent, 0);\n    auto pressure = OH_ArkUI_PointerEvent_GetPressure(inputEvent, 0);\n    auto action = OH_ArkUI_UIInputEvent_GetAction(inputEvent);\n    auto eventTime = OH_ArkUI_UIInputEvent_GetEventTime(inputEvent);\n    auto sourceType = OH_ArkUI_UIInputEvent_GetSourceType(inputEvent);\n    auto type = OH_ArkUI_UIInputEvent_GetType(inputEvent);\n    std::string eventInfo =\n        \"x: \" + std::to_string(x) + \", y: \" + std::to_string(y) +\n        \", displayX: \" + std::to_string(displayX) + \", displayY: \" + std::to_string(displayY) +\n        \", windowX: \" + std::to_string(windowX) + \", windowY: \" + std::to_string(windowY) + \"\\n\" +\n        \", pointerCount: \" + std::to_string(pointerCount) + \", xByIndex: \" + std::to_string(xByIndex) +\n        \", yByIndex: \" + std::to_string(yByIndex) +\n        \", displayXByIndex: \" + std::to_string(displayXByIndex) +\n        \", displayYByIndex: \" + std::to_string(displayYByIndex) +\n        \", windowXByIndex: \" + std::to_string(windowXByIndex) +\n        \", windowYByIndex: \" + std::to_string(windowYByIndex) + \"\\n\" +\n        \", pointerId: \" + std::to_string(pointerId) + \", pressure: \" + std::to_string(pressure) +\n        \", action: \" + std::to_string(action) + \", eventTime: \" + std::to_string(eventTime) +\n        \", sourceType: \" + std::to_string(sourceType) + \", type: \" + std::to_string(type);\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"[Sample_NdkAddInteractionEvent]\",\n                 \"NdkAddInteractionEvent_eventInfoOfCommonEvent eventInfo = %{public}s\", eventInfo.c_str());\n};\n// 创建一个单指点击手势\nauto TapGesture = gestureApi->createTapGesture(COUNT_NUM_1, FINGERS_NUM_1);\n// 将事件回调绑定到TapGesture上，触发手势后，通过回调函数处理手势事件\ngestureApi->setGestureEventTarget(TapGesture,\n                                  GESTURE_EVENT_ACTION_ACCEPT | GESTURE_EVENT_ACTION_UPDATE |\n                                  GESTURE_EVENT_ACTION_END | GESTURE_EVENT_ACTION_CANCEL,\n                                  column, onActionCallback);\n// 将手势添加到column组件上，使column组件可以触发单指点击手势\ngestureApi->addGestureToNode(column, TapGesture, ArkUI_GesturePriority::PARALLEL,\n                             ArkUI_GestureMask::NORMAL_GESTURE_MASK);\n"
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