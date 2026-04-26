"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["85203"], {
947706(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_use_ndk_arkts_add_event_ndk_drag_event_ndk_drag_event_md_b7d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-use-ndk-arkts-add-event-ndk-drag-event-ndk-drag-event-md-b7d.json
var site_docs_arkui_arkts_use_ndk_arkts_add_event_ndk_drag_event_ndk_drag_event_md_b7d_namespaceObject = JSON.parse('{"id":"arkui/arkts-use-ndk/arkts-add-event/ndk-drag-event/ndk-drag-event","title":"拖拽事件","description":"ArkUI开发框架针对拖拽事件提供了NODE\\\\ON\\\\PRE\\\\DRAG，NODE\\\\ON\\\\DRAG\\\\START，NODE\\\\ON\\\\DROP，NODE\\\\ON\\\\DRAG\\\\ENTER，NODE\\\\ON\\\\DRAG\\\\MOVE，NODE\\\\ON\\\\DRAG\\\\LEAVE，NODE\\\\ON\\\\DRAG\\\\END等组件事件，当拖拽在不同的阶段时会触发对应的组件事件，完成对应的数据处理操作，实现期望的拖拽交互能力。","source":"@site/docs/arkui/arkts-use-ndk/arkts-add-event/ndk-drag-event/ndk-drag-event.md","sourceDirName":"arkui/arkts-use-ndk/arkts-add-event/ndk-drag-event","slug":"/arkui/arkts-use-ndk/arkts-add-event/ndk-drag-event/","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/arkts-add-event/ndk-drag-event/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"拖拽事件","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-drag-event","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"绑定手势事件","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/arkts-add-event/ndk-bind-gesture-events/"},"next":{"title":"监听组件布局和绘制送显事件","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/arkts-add-event/ndk-inspector-component-observer/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-use-ndk/arkts-add-event/ndk-drag-event/ndk-drag-event.md


const frontMatter = {
	title: '拖拽事件',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-drag-event',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '拖拽事件';

const assets = {

};



const toc = [{
  "value": "通用拖拽",
  "id": "通用拖拽",
  "level": 2
}, {
  "value": "DragAction主动发起拖拽",
  "id": "dragaction主动发起拖拽",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "拖拽事件",
        children: "拖拽事件"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkUI开发框架针对拖拽事件提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeeventtype",
        children: "NODE_ON_PRE_DRAG"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeeventtype",
        children: "NODE_ON_DRAG_START"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeeventtype",
        children: "NODE_ON_DROP"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeeventtype",
        children: "NODE_ON_DRAG_ENTER"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeeventtype",
        children: "NODE_ON_DRAG_MOVE"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeeventtype",
        children: "NODE_ON_DRAG_LEAVE"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeeventtype",
        children: "NODE_ON_DRAG_END"
      }), "等组件事件，当拖拽在不同的阶段时会触发对应的组件事件，完成对应的数据处理操作，实现期望的拖拽交互能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通用拖拽",
      children: "通用拖拽"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkUI提供了使用C和C++开发拖拽功能的能力，开发者可调用C API实现拖拽功能。以下以Image组件为例，详细介绍C API实现拖拽功能的基本步骤，以及在开发过程中需要注意的事项。完整示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/NativeDragDrop",
        children: "NativeDragDrop"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "组件拖拽设置。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-h/capi-native-interface-h#oh_arkui_getmoduleinterface",
            children: "OH_ArkUI_GetModuleInterface"
          }), "接口初始化nodeAPI，创建节点等操作均需通过nodeAPI完成。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ArkUI_NativeNodeAPI_1 *nativeNodeAPI = nullptr;\nOH_ArkUI_GetModuleInterface(ARKUI_NATIVE_NODE, ArkUI_NativeNodeAPI_1, nativeNodeAPI);\nnodeAPI = nativeNodeAPI;\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建Image节点，通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-drag-and-drop-h/capi-drag-and-drop-h#oh_arkui_setnodedraggable",
            children: "OH_ArkUI_SetNodeDraggable"
          }), "设置节点可拖拽，并设置其他相关属性。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "dragImage2 = nodeAPI->createNode(ARKUI_NODE_IMAGE);\nSetId(dragImage2, \"dragImage\");\nSetCommonAttribute(dragImage2, 140.0f, 140.0f, 0xFFFFFFFF, 5.0f);\n// 图片src/main/resources/base/media/seagull.png需要替换为开发者所需的资源文件\nSetImageSrc(dragImage2, \"/resources/base/media/seagull.png\");\nOH_ArkUI_SetNodeDraggable(dragImage2, true);\nnodeAPI->registerNodeEvent(dragImage2, NODE_ON_DRAG_START, 1, nullptr);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#define DEFAULT_WIDTH 200.0\n// 设置节点宽度\nvoid SetWidth(ArkUI_NodeHandle &node, float width = DEFAULT_WIDTH)\n{\n    if (!nodeAPI) {\n        return;\n    }\n    ArkUI_NumberValue widthValue[] = {width};\n    ArkUI_AttributeItem widthItem = {widthValue, 1};\n    nodeAPI->setAttribute(node, NODE_WIDTH, &widthItem);\n}\n\n#define DEFAULT_HEIGHT 200.0\n// 设置节点高度\nvoid SetHeight(ArkUI_NodeHandle &node, float height = DEFAULT_HEIGHT)\n{\n    if (!nodeAPI) {\n        return;\n    }\n    ArkUI_NumberValue heightValue[] = {height};\n    ArkUI_AttributeItem heightItem = {heightValue, 1};\n    nodeAPI->setAttribute(node, NODE_HEIGHT, &heightItem);\n}\n\n#define DEFAULT_BG_COLOR 0xFFFFFFFF\n// 设置节点背景颜色\nvoid SetBackgroundColor(ArkUI_NodeHandle &node, uint32_t color = DEFAULT_BG_COLOR)\n{\n    if (!nodeAPI) {\n        return;\n    }\n    ArkUI_NumberValue colorValue[] = {{.u32 = color}};\n    ArkUI_AttributeItem colorItem = {colorValue, 1};\n    nodeAPI->setAttribute(node, NODE_BACKGROUND_COLOR, &colorItem);\n}\n\n#define DEFAULT_MARGIN 5.0\n// 设置节点外边距\nvoid SetMargin(ArkUI_NodeHandle &node, float margin = DEFAULT_MARGIN)\n{\n    if (!nodeAPI) {\n        return;\n    }\n    ArkUI_NumberValue marginValue[] = {margin};\n    ArkUI_AttributeItem marginItem = {marginValue, 1};\n    nodeAPI->setAttribute(node, NODE_MARGIN, &marginItem);\n}\n\n// 设置Button节点标签\nvoid SetButtonLabel(ArkUI_NodeHandle &node, const char *label)\n{\n    if (!nodeAPI) {\n        return;\n    }\n    ArkUI_AttributeItem NODE_Button_SRC_Item = {.string = label};\n    nodeAPI->setAttribute(node, NODE_BUTTON_LABEL, &NODE_Button_SRC_Item);\n}\n\n// 设置节点标识符\nvoid SetId(ArkUI_NodeHandle &node, const char *id)\n{\n    if (!nodeAPI) {\n        return;\n    }\n    ArkUI_AttributeItem idItem = {.string = id};\n    nodeAPI->setAttribute(node, NODE_ID, &idItem);\n}\n\n#define DEFAULT_BORDER_WIDTH 0.0\n// 设置节点边框宽度\nvoid SetBorderWidth(ArkUI_NodeHandle &node, float width = DEFAULT_BORDER_WIDTH)\n{\n    if (!nodeAPI) {\n        return;\n    }\n    ArkUI_NumberValue borderWidthValue[] = {width};\n    ArkUI_AttributeItem borderWidthItem = {borderWidthValue, 1};\n    nodeAPI->setAttribute(node, NODE_BORDER_WIDTH, &borderWidthItem);\n}\n\n#define DEFAULT_BORDER_COLOR 0xFF000000\n// 设置节点边框颜色\nvoid SetBorderColor(ArkUI_NodeHandle &node, uint32_t color = DEFAULT_BORDER_COLOR)\n{\n    if (!nodeAPI) {\n        return;\n    }\n    ArkUI_NumberValue borderColorValue[] = {{.u32 = color}};\n    ArkUI_AttributeItem borderColorItem = {borderColorValue, 1};\n    nodeAPI->setAttribute(node, NODE_BORDER_COLOR, &borderColorItem);\n}\n\n// 设置节点常用属性（宽高、背景色、外边距、边框样式）\nvoid SetCommonAttribute(ArkUI_NodeHandle &node, float width = DEFAULT_WIDTH, float height = DEFAULT_HEIGHT,\n                        unsigned int color = DEFAULT_BG_COLOR, float margin = DEFAULT_MARGIN)\n{\n    SetWidth(node, width);\n    SetHeight(node, height);\n    SetBackgroundColor(node, color);\n    SetMargin(node, margin);\n    SetBorderWidth(node, DEFAULT_BORDER_WIDTH);\n    SetBorderColor(node);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void SetImageSrc(ArkUI_NodeHandle &node, const char *src)\n{\n    if (!nodeAPI) {\n        return;\n    }\n    ArkUI_AttributeItem imageSrcItem = {.string = src};\n    nodeAPI->setAttribute(node, NODE_IMAGE_SRC, &imageSrcItem);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "自定义拖拽预览和背板图。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_createpixelmap",
            children: "pixelMap"
          }), "，设置pixelMap的宽高等各项属性。设置Image节点的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-dragpreviewoption/capi-arkui-nativemodule-arkui-dragpreviewoption",
            children: "ArkUI_DragPreviewOption"
          }), "，可用于设置跟手图的圆角、角标等。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 创建pixelMap\nuint8_t data[960000];\nsize_t dataSize = 960000;\nfor (int i = 0; i < dataSize; i++) {\n    data[i] = i + 1;\n}\n// 创建参数结构体实例，并设置参数\nOH_Pixelmap_InitializationOptions *createOpts;\nOH_PixelmapInitializationOptions_Create(&createOpts);\nOH_PixelmapInitializationOptions_SetWidth(createOpts, 200U);\nOH_PixelmapInitializationOptions_SetHeight(createOpts, 200U);\nOH_PixelmapInitializationOptions_SetPixelFormat(createOpts, PIXEL_FORMAT_BGRA_8888);\nOH_PixelmapInitializationOptions_SetAlphaType(createOpts, PIXELMAP_ALPHA_TYPE_UNKNOWN);\n// 设置自定义跟手图\nOH_PixelmapNative *pixelmap = nullptr;\nOH_PixelmapNative_CreatePixelmap(data, dataSize, createOpts, &pixelmap);\nOH_PixelmapNative_Opacity(pixelmap, 0.1f);\nOH_ArkUI_SetNodeDragPreview(node, pixelmap);\n// 设置跟手图选项\nauto *previewOptionsText = OH_ArkUI_CreateDragPreviewOption();\nOH_ArkUI_DragPreviewOption_SetScaleMode(previewOptionsText, ARKUI_DRAG_PREVIEW_SCALE_DISABLED);\nOH_ArkUI_DragPreviewOption_SetNumberBadgeEnabled(previewOptionsText, true);\nOH_ArkUI_DragPreviewOption_SetBadgeNumber(previewOptionsText, 10U);\nOH_ArkUI_DragPreviewOption_SetDefaultShadowEnabled(previewOptionsText, true);\nOH_ArkUI_DragPreviewOption_SetDefaultRadiusEnabled(previewOptionsText, true);\nint returnValue = OH_ArkUI_DragPreviewOption_SetDefaultAnimationBeforeLiftingEnabled(previewOptionsText, true);\nOH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"Manager\",\n    \"dragTest DragPreviewOption_SetDefaultAnimationBeforeLiftingEnabled returnValue = %{public}d\",\n    returnValue);\nOH_ArkUI_SetNodeDragPreviewOption(node, previewOptionsText);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置相关事件。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["C API的事件通过统一的回调来接收，当收到事件时通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeeventtype",
            children: "eventType"
          }), "进行区分。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "nodeAPI->addNodeEventReceiver(dragNode, [](ArkUI_NodeEvent *event) {\n    OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\", \"RegisterNodeEventFirstReceiver called\");\n    auto eventType = OH_ArkUI_NodeEvent_GetEventType(event);\n    auto preDragStatus = OH_ArkUI_NodeEvent_GetPreDragStatus(event);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\",\n        \"eventType = %{public}d, preDragStatus = %{public}d\", eventType, preDragStatus);\n    auto *dragEvent = OH_ArkUI_NodeEvent_GetDragEvent(event);\n    switch (eventType) {\n        case NODE_ON_PRE_DRAG:\n            OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\", \"NODE_ON_PRE_DRAG Event Receive\");\n            break;\n        case NODE_ON_CLICK:\n            OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\", \"NODE_ON_CLICK Event Receive\");\n            break;\n        case NODE_ON_DROP:\n            OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\", \"NODE_ON_DROP Event Receive\");\n            break;\n        case NODE_ON_DRAG_ENTER:\n            OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\", \"NODE_ON_DRAG_ENTER Event Receive\");\n            break;\n        case NODE_ON_DRAG_MOVE:\n            OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\", \"NODE_ON_DRAG_MOVE Event Receive\");\n            break;\n        case NODE_ON_DRAG_LEAVE:\n            OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\", \"NODE_ON_DRAG_LEAVE Event Receive\");\n            break;\n        case NODE_ON_DRAG_START: {\n            OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\", \"NODE_ON_DRAG_START Event Receive\");\n            // ...\n            break;\n        }\n        case NODE_ON_DRAG_END: {\n            OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\", \"NODE_ON_DRAG_END Event Receive\");\n            // ...\n            break;\n        }\n        default:\n            OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\", \"UNKNOWN Event Receive\");\n            break;\n    }\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "处理NODE_ON_DRAG_START事件。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在NODE_ON_DRAG_START事件中，应用可以执行起拖阶段所需的操作，通常涉及处理起拖过程的数据。例如，创建", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
            children: "OH_UdmfRecord"
          }), "，将用于拖拽图片所需的数据imageValue以", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udsfileuri/capi-udmf-oh-udsfileuri",
            children: "OH_UdsFileUri"
          }), "类型添加到OH_UdmfRecord中，接着将OH_UdmfRecord设置到", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
            children: "OH_UdmfData"
          }), "中，最后将OH_UdmfData设置到", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-dragevent/capi-arkui-nativemodule-arkui-dragevent",
            children: "DragEvent"
          }), "中。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void SetImageData(ArkUI_DragEvent* dragEvent)\n{\n    int returnValue;\n    OH_UdmfRecord *record = OH_UdmfRecord_Create();\n    OH_UdsFileUri *imageValue = OH_UdsFileUri_Create();\n    // 图片src/main/resources/base/media/seagull.png需要替换为开发者所需的资源文件\n    returnValue = OH_UdsFileUri_SetFileUri(imageValue, \"/resources/base/media/seagull.png\");\n    returnValue = OH_UdmfRecord_AddFileUri(record, imageValue);\n    OH_UdmfData *data = OH_UdmfData_Create();\n    returnValue = OH_UdmfData_AddRecord(data, record);\n    returnValue = OH_ArkUI_DragEvent_SetData(dragEvent, data);\n}\n// ···\n            case NODE_ON_DRAG_START: {\n                OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\", \"NODE_ON_DRAG_START EventReceiver\");\n                SetImageData(dragEvent);\n                break;\n            }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "处理NODE_ON_DROP事件。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在NODE_ON_DROP事件中，应用可以执行与落入阶段相关的操作，通常需要获取拖拽过程中传递的数据。例如，引用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkdata-api/arkdata-c/arkdata-headerfile/capi-udmf-meta-h/capi-udmf-meta-h",
            children: "udmf_meta.h"
          }), "头文件，获取", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfdata/capi-udmf-oh-udmfdata",
            children: "OH_UdmfData"
          }), "，判断是否存在所需的数据类型，从", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkdata-api/arkdata-c/arkdata-struct/capi-udmf-oh-udmfrecord/capi-udmf-oh-udmfrecord",
            children: "OH_UdmfRecord"
          }), "中提取相应的数据，最后销毁指针。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void GetDragData(ArkUI_DragEvent* dragEvent)\n{\n    // 获取UDMF data\n    int returnValue;\n    // 创建OH_UdmfData对象\n    OH_UdmfData *data = OH_UdmfData_Create();\n    returnValue = OH_ArkUI_DragEvent_GetUdmfData(dragEvent, data);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\",\n        \"OH_ArkUI_DragEvent_GetUdmfData returnValue = %{public}d\", returnValue);\n    // 判断OH_UdmfData是否有对应的类型\n    bool resultUdmf = OH_UdmfData_HasType(data, UDMF_META_GENERAL_FILE);\n    if (resultUdmf) {\n        // 获取OH_UdmfData的记录\n        unsigned int recordsCount = 0;\n        OH_UdmfRecord **records = OH_UdmfData_GetRecords(data, &recordsCount);\n        // 获取records中的元素\n        int returnStatus;\n        for (int i = 0; i < recordsCount; i++) {\n            // 从OH_UdmfRecord中获取文件类型数据\n            OH_UdsFileUri *imageValue = OH_UdsFileUri_Create();\n            returnStatus = OH_UdmfRecord_GetFileUri(records[i], imageValue);\n            const char *fileUri = OH_UdsFileUri_GetFileUri(imageValue);\n            OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\",\n                \"dragTest OH_UdmfRecord_GetPlainText \"\n                \"returnStatus= %{public}d \"\n                \"fileUri= %{public}s\",\n                returnStatus, fileUri);\n            // 使用结束后销毁指针\n            OH_UdsFileUri_Destroy(imageValue);\n        }\n        if (recordsCount != 0) {\n            OH_ArkUI_DragEvent_SetDragResult(dragEvent, ARKUI_DRAG_RESULT_SUCCESSFUL);\n            ArkUI_DropOperation option;\n            OH_ArkUI_DragEvent_GetDropOperation(dragEvent, &option);\n            OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\",\n                \"OH_ArkUI_DragEvent_GetDropOperation returnValue = %{public}d\", option);\n        }\n    } else {\n        OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\",\n            \"OH_UdmfData_HasType not contain UDMF_META_GENERAL_FILE\");\n    }\n    int32_t count;\n    OH_ArkUI_DragEvent_GetDataTypeCount(dragEvent, &count);\n    if (count <= 0 || count >= 128U) {\n        return;\n    }\n    char **eventTypeArray = new char *[count];\n    for (int i = 0; i < count; i++) {\n        eventTypeArray[i] = new char[128U];\n    }\n    OH_ArkUI_DragEvent_GetDataTypes(dragEvent, eventTypeArray, count, 128U);\n    for (int i = 0; i < count; i++) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\",\n            \"OH_ArkUI_DragEvent_GetDataTypes returnValue = %{public}s\", eventTypeArray[i]);\n    }\n}\n// ...\n            case NODE_ON_DROP: {\n                OH_ArkUI_DragEvent_SetSuggestedDropOperation(dragEvent, ARKUI_DROP_OPERATION_COPY);\n                OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\", \"NODE_ON_DROP EventReceiver\");\n                GetDragData(dragEvent);\n                break;\n            }\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dragaction主动发起拖拽",
      children: "DragAction主动发起拖拽"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除了通用拖拽以外，ArkUI还提供了使用C API实现主动发起拖拽的能力。以下以文本拖拽为例，详细介绍C-API实现主动发起拖拽的基本步骤，以及在开发过程中需要注意的事项。完整示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/NativeDragDrop",
        children: "NativeDragDrop"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "节点注册事件。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建Button节点，设置按钮相关属性，同时需要注册", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeeventtype",
            children: "NODE_ON_TOUCH_INTERCEPT"
          }), "事件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// buttonTouch作为targetId，用于区分不同target的事件。\nenum {\n    BUTTON_TOUCH = 1\n};\n\ndragButton = nodeAPI->createNode(ARKUI_NODE_BUTTON);\nSetId(dragButton, \"dragBt3\");\nSetCommonAttribute(dragButton, 80.0f, 50.0f, 0xFFFF0000, 20.0f);\nSetButtonLabel(dragButton, \"拖起\");\nnodeAPI->registerNodeEvent(dragButton, NODE_ON_TOUCH_INTERCEPT, BUTTON_TOUCH, nullptr);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#define DEFAULT_WIDTH 200.0\n// 设置节点宽度\nvoid SetWidth(ArkUI_NodeHandle &node, float width = DEFAULT_WIDTH)\n{\n    if (!nodeAPI) {\n        return;\n    }\n    ArkUI_NumberValue widthValue[] = {width};\n    ArkUI_AttributeItem widthItem = {widthValue, 1};\n    nodeAPI->setAttribute(node, NODE_WIDTH, &widthItem);\n}\n\n#define DEFAULT_HEIGHT 200.0\n// 设置节点高度\nvoid SetHeight(ArkUI_NodeHandle &node, float height = DEFAULT_HEIGHT)\n{\n    if (!nodeAPI) {\n        return;\n    }\n    ArkUI_NumberValue heightValue[] = {height};\n    ArkUI_AttributeItem heightItem = {heightValue, 1};\n    nodeAPI->setAttribute(node, NODE_HEIGHT, &heightItem);\n}\n\n#define DEFAULT_BG_COLOR 0xFFFFFFFF\n// 设置节点背景颜色\nvoid SetBackgroundColor(ArkUI_NodeHandle &node, uint32_t color = DEFAULT_BG_COLOR)\n{\n    if (!nodeAPI) {\n        return;\n    }\n    ArkUI_NumberValue colorValue[] = {{.u32 = color}};\n    ArkUI_AttributeItem colorItem = {colorValue, 1};\n    nodeAPI->setAttribute(node, NODE_BACKGROUND_COLOR, &colorItem);\n}\n\n#define DEFAULT_MARGIN 5.0\n// 设置节点外边距\nvoid SetMargin(ArkUI_NodeHandle &node, float margin = DEFAULT_MARGIN)\n{\n    if (!nodeAPI) {\n        return;\n    }\n    ArkUI_NumberValue marginValue[] = {margin};\n    ArkUI_AttributeItem marginItem = {marginValue, 1};\n    nodeAPI->setAttribute(node, NODE_MARGIN, &marginItem);\n}\n\n// 设置Button节点标签\nvoid SetButtonLabel(ArkUI_NodeHandle &node, const char *label)\n{\n    if (!nodeAPI) {\n        return;\n    }\n    ArkUI_AttributeItem NODE_Button_SRC_Item = {.string = label};\n    nodeAPI->setAttribute(node, NODE_BUTTON_LABEL, &NODE_Button_SRC_Item);\n}\n\n// 设置节点标识符\nvoid SetId(ArkUI_NodeHandle &node, const char *id)\n{\n    if (!nodeAPI) {\n        return;\n    }\n    ArkUI_AttributeItem idItem = {.string = id};\n    nodeAPI->setAttribute(node, NODE_ID, &idItem);\n}\n\n#define DEFAULT_BORDER_WIDTH 0.0\n// 设置节点边框宽度\nvoid SetBorderWidth(ArkUI_NodeHandle &node, float width = DEFAULT_BORDER_WIDTH)\n{\n    if (!nodeAPI) {\n        return;\n    }\n    ArkUI_NumberValue borderWidthValue[] = {width};\n    ArkUI_AttributeItem borderWidthItem = {borderWidthValue, 1};\n    nodeAPI->setAttribute(node, NODE_BORDER_WIDTH, &borderWidthItem);\n}\n\n#define DEFAULT_BORDER_COLOR 0xFF000000\n// 设置节点边框颜色\nvoid SetBorderColor(ArkUI_NodeHandle &node, uint32_t color = DEFAULT_BORDER_COLOR)\n{\n    if (!nodeAPI) {\n        return;\n    }\n    ArkUI_NumberValue borderColorValue[] = {{.u32 = color}};\n    ArkUI_AttributeItem borderColorItem = {borderColorValue, 1};\n    nodeAPI->setAttribute(node, NODE_BORDER_COLOR, &borderColorItem);\n}\n\n// 设置节点常用属性（宽高、背景色、外边距、边框样式）\nvoid SetCommonAttribute(ArkUI_NodeHandle &node, float width = DEFAULT_WIDTH, float height = DEFAULT_HEIGHT,\n                        unsigned int color = DEFAULT_BG_COLOR, float margin = DEFAULT_MARGIN)\n{\n    SetWidth(node, width);\n    SetHeight(node, height);\n    SetBackgroundColor(node, color);\n    SetMargin(node, margin);\n    SetBorderWidth(node, DEFAULT_BORDER_WIDTH);\n    SetBorderColor(node);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "接收NODE_ON_TOUCH_INTERCEPT事件。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["DragAction主动发起拖拽需通过事件触发，在NODE_ON_TOUCH_INTERCEPT事件中执行发起拖拽所需的操作，通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodeevent_gettargetid",
            children: "targetId"
          }), "区分不同按钮触发的事件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "nodeAPI->addNodeEventReceiver(dragButton, [](ArkUI_NodeEvent *event) {\n    OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\", \"RegisterNodeEventForthReceiver called\");\n    auto eventType = OH_ArkUI_NodeEvent_GetEventType(event);\n    auto preDragStatus = OH_ArkUI_NodeEvent_GetPreDragStatus(event);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\",\n        \"eventType = %{public}d, preDragStatus = %{public}d\", eventType, preDragStatus);\n\n    auto *dragEvent = OH_ArkUI_NodeEvent_GetDragEvent(event);\n    switch (eventType) {\n        case NODE_ON_TOUCH_INTERCEPT: {\n            OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\", \"NODE_ON_TOUCH_INTERCEPT EventReceiver\");\n            // ...\n            break;\n        }\n        default: {\n            OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\", \"UNKNOWN EventReceiver\");\n            break;\n        }\n    }\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "起拖阶段设置。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在NODE_ON_TOUCH_INTERCEPT事件中，需要对DragAction进行相关设置。为了主动发起拖拽，需要创建", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-c/image-headerfile/capi-pixelmap-native-h/capi-pixelmap-native-h#oh_pixelmapnative_createpixelmap",
            children: "pixelMap"
          }), "，设置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-dragpreviewoption/capi-arkui-nativemodule-arkui-dragpreviewoption",
            children: "ArkUI_DragPreviewOption"
          }), "和跟手点，并将拖拽过程中的文本数据设置到DragAction中。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "            case NODE_ON_TOUCH_INTERCEPT: {\n                OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\", \"NODE_ON_TOUCH_INTERCEPT EventReceiver\");\n                // 创建DragAction\n                action = OH_ArkUI_CreateDragActionWithNode(dragButton);\n                OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\",\n                    \"OH_ArkUI_CreateDragActionWithNode returnValue = %{public}p\", action);\n                // 设置pixelMap\n                std::vector<OH_PixelmapNative *> pixelVector;\n                SetPixelMap(pixelVector);\n                // 设置DragPreviewOption\n                SetDragPreviewOption();\n                // 设置pointerId、touchPoint\n                PrintDragActionInfos();\n                // 设置unifiedData\n                SetDragActionData();\n                // startDrag\n                int returnValue = OH_ArkUI_StartDrag(action);\n                OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\",\n                    \"OH_ArkUI_StartDrag returnValue = %{public}d\",\n                    returnValue);\n                OH_ArkUI_DragAction_Dispose(action);\n                break;\n            }\n            // ...\nvoid SetDragActionData()\n{\n    // 创建OH_UdmfRecord对象\n    OH_UdmfRecord *record = OH_UdmfRecord_Create();\n    // 向OH_UdmfRecord中添加纯文本类型数据\n    OH_UdsPlainText *plainText = OH_UdsPlainText_Create();\n    int returnStatus;\n    OH_UdsPlainText_SetAbstract(plainText, \"this is plainText Abstract example\");\n    OH_UdsPlainText_SetContent(plainText, \"this is plainText Content example\");\n    returnStatus = OH_UdmfRecord_AddPlainText(record, plainText);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\",\n        \"dragTest OH_UdmfRecord_AddPlainText returnStatus = %{public}d\", returnStatus);\n    // 创建OH_UdmfData对象\n    OH_UdmfData *data = OH_UdmfData_Create();\n    // 向OH_UdmfData中添加OH_UdmfRecord\n    returnStatus = OH_UdmfData_AddRecord(data, record);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\",\n        \"dragTest OH_UdmfData_AddRecord returnStatus = %{public}d\", returnStatus);\n    int returnValue = OH_ArkUI_DragAction_SetData(action, data);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\",\n        \"OH_ArkUI_DragAction_SetData returnValue = %{public}d\", returnValue);\n    // 注册拖拽状态监听回调\n    OH_ArkUI_DragAction_RegisterStatusListener(action, data, &DragStatusListener);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void SetPixelMap(std::vector<OH_PixelmapNative *> &pixelVector)\n{\n    uint8_t data[960000];\n    size_t dataSize = 960000;\n    for (int i = 0; i < dataSize; i++) {\n        data[i] = i + 1;\n    }\n    // 创建参数结构体实例，并设置参数\n    OH_Pixelmap_InitializationOptions *createOpts;\n    OH_PixelmapInitializationOptions_Create(&createOpts);\n    OH_PixelmapInitializationOptions_SetWidth(createOpts, 200U);\n    OH_PixelmapInitializationOptions_SetHeight(createOpts, 300U);\n    OH_PixelmapInitializationOptions_SetPixelFormat(createOpts, PIXEL_FORMAT_BGRA_8888);\n    OH_PixelmapInitializationOptions_SetAlphaType(createOpts, PIXELMAP_ALPHA_TYPE_UNKNOWN);\n    // 创建Pixelmap实例\n    OH_PixelmapNative *pixelmap = nullptr;\n    OH_PixelmapNative_CreatePixelmap(data, dataSize, createOpts, &pixelmap);\n    OH_PixelmapNative_Flip(pixelmap, true, true);\n    pixelVector.push_back(pixelmap);\n    int returnValue = OH_ArkUI_DragAction_SetPixelMaps(action, pixelVector.data(), pixelVector.size());\n    OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\",\n        \"OH_ArkUI_DragAction_SetPixelMaps returnValue = %{public}d\", returnValue);\n}\n\nvoid SetDragPreviewOption()\n{\n    auto *previewOptions = OH_ArkUI_CreateDragPreviewOption();\n    OH_ArkUI_DragPreviewOption_SetScaleMode(previewOptions,\n        ArkUI_DragPreviewScaleMode::ARKUI_DRAG_PREVIEW_SCALE_DISABLED);\n    OH_ArkUI_DragPreviewOption_SetDefaultShadowEnabled(previewOptions, true);\n    OH_ArkUI_DragPreviewOption_SetDefaultRadiusEnabled(previewOptions, true);\n    int returnValue = OH_ArkUI_DragAction_SetDragPreviewOption(action, previewOptions);\n    OH_ArkUI_DragPreviewOption_Dispose(previewOptions);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\",\n        \"OH_ArkUI_DragAction_SetDragPreviewOption returnValue = %{public}d\", returnValue);\n}\n\nvoid PrintDragActionInfos()\n{\n    // 设置pointerId\n    int returnValue = OH_ArkUI_DragAction_SetPointerId(action, 0);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\",\n        \"OH_ArkUI_DragAction_SetPointerId returnValue = %{public}d\", returnValue);\n    // 设置touchPoint\n    returnValue = OH_ArkUI_DragAction_SetTouchPointX(action, 200.0f);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\",\n        \"OH_ArkUI_DragAction_SetTouchPointX returnValue = %{public}d\", returnValue);\n    returnValue = OH_ArkUI_DragAction_SetTouchPointY(action, 200.0f);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\",\n        \"OH_ArkUI_DragAction_SetTouchPointY returnValue = %{public}d\", returnValue);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "处理NODE_ON_DROP事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在NODE_ON_DROP事件中，应用可以执行与落入阶段相关的操作。通常情况下，需要从DragEvent中获取拖拽过程中传递的数据，DragAction中的拖拽数据也需要通过DragEvent获取。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "            case NODE_ON_DROP: {\n                OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\", \"NODE_ON_DROP EventReceiver\");\n                GetUdmfDataText(dragEvent);\n                OH_ArkUI_DragAction_UnregisterStatusListener(action);\n                break;\n            }\n            // ...\nvoid GetUdmfDataText(ArkUI_DragEvent* dragEvent)\n{\n    // 获取UDMF data\n    int returnValue;\n    // 创建OH_UdmfData对象\n    OH_UdmfData *data = OH_UdmfData_Create();\n    returnValue = OH_ArkUI_DragEvent_GetUdmfData(dragEvent, data);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\",\n        \"OH_ArkUI_DragEvent_GetUdmfData returnValue = %{public}d\", returnValue);\n    // 判断OH_UdmfData是否有对应的类型\n    bool resultUdmf = OH_UdmfData_HasType(data, UDMF_META_PLAIN_TEXT);\n    if (resultUdmf) {\n        // 获取OH_UdmfData的记录\n        unsigned int recordsCount = 0;\n        OH_UdmfRecord **records = OH_UdmfData_GetRecords(data, &recordsCount);\n        // 获取records中的元素\n        int returnStatus;\n        for (int i = 0; i < recordsCount; i++) {\n            // 从OH_UdmfRecord中获取纯文本类型数据\n            OH_UdsPlainText *plainTextValue = OH_UdsPlainText_Create();\n            returnStatus = OH_UdmfRecord_GetPlainText(records[i], plainTextValue);\n            OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\",\n                \"dragTest OH_UdmfRecord_GetPlainText \"\n                \"returnStatus= %{public}d\",\n                returnStatus);\n            auto getAbstract = OH_UdsPlainText_GetAbstract(plainTextValue);\n            auto getContent = OH_UdsPlainText_GetContent(plainTextValue);\n            OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\",\n                \"OH_UdsPlainText_GetAbstract = \"\n                \"%{public}s, OH_UdsPlainText_GetContent = \"\n                \"%{public}s\",\n                getAbstract, getContent);\n            // 使用结束后销毁指针\n            OH_UdsPlainText_Destroy(plainTextValue);\n        }\n    } else {\n        OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00U, \"dragTest\",\n            \"OH_UdmfData_HasType not contain UDMF_META_PLAIN_TEXT\");\n    }\n    OH_UdmfData_Destroy(data);\n}\n"
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