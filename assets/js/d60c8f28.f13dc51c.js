"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["842371"], {
420995(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_use_ndk_ndk_node_query_operate_ndk_node_query_operate_md_d60_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-use-ndk-ndk-node-query-operate-ndk-node-query-operate-md-d60.json
var site_docs_arkui_arkts_use_ndk_ndk_node_query_operate_ndk_node_query_operate_md_d60_namespaceObject = JSON.parse('{"id":"arkui/arkts-use-ndk/ndk-node-query-operate/ndk-node-query-operate","title":"查询和操作自定义节点","description":"NDK提供一系列节点查询、遍历、操作能力，通过使用以下接口，开发者可以高效地访问和操控节点。","source":"@site/docs/arkui/arkts-use-ndk/ndk-node-query-operate/ndk-node-query-operate.md","sourceDirName":"arkui/arkts-use-ndk/ndk-node-query-operate","slug":"/arkui/arkts-use-ndk/ndk-node-query-operate/","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-node-query-operate/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"查询和操作自定义节点","sidebar_position":13,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-node-query-operate","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自定义绘制","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/arkts-user-defined-draw/"},"next":{"title":"通过EmbeddedComponent拉起EmbeddedUIExtensionAbility","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-embedded-component/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-use-ndk/ndk-node-query-operate/ndk-node-query-operate.md


const frontMatter = {
	title: '查询和操作自定义节点',
	sidebar_position: 13,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-node-query-operate',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '查询和操作自定义节点';

const assets = {

};



const toc = [{
  "value": "查询节点uniqueId及通过uniqueId获取节点信息",
  "id": "查询节点uniqueid及通过uniqueid获取节点信息",
  "level": 2
}, {
  "value": "通过用户id获取节点信息",
  "id": "通过用户id获取节点信息",
  "level": 2
}, {
  "value": "移动节点",
  "id": "移动节点",
  "level": 2
}, {
  "value": "在当前即时帧触发节点属性更新",
  "id": "在当前即时帧触发节点属性更新",
  "level": 2
}, {
  "value": "用不同的展开模式获取对应下标的子节点",
  "id": "用不同的展开模式获取对应下标的子节点",
  "level": 2
}, {
  "value": "节点是否处于渲染状态",
  "id": "节点是否处于渲染状态",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "查询和操作自定义节点",
        children: "查询和操作自定义节点"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NDK提供一系列节点查询、遍历、操作能力，通过使用以下接口，开发者可以高效地访问和操控节点。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下场景基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-use-ndk/ndk-access-the-arkts-page",
        children: "接入ArkTS页面"
      }), "章节，创建前置工程。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查询节点uniqueid及通过uniqueid获取节点信息",
      children: "查询节点uniqueId及通过uniqueId获取节点信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "uniqueId是系统分配的唯一标识的节点Id。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodeutils_getnodeuniqueid",
        children: "OH_ArkUI_NodeUtils_GetNodeUniqueId"
      }), "接口，可以获取目标节点的uniqueId。使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodeutils_getnodehandlebyuniqueid",
        children: "OH_ArkUI_NodeUtils_GetNodeHandleByUniqueId"
      }), "接口，可以通过uniqueId获取目标节点的指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArkUI_NativeNodeAPI_1* nodeAPI = NativeModuleInstance::GetInstance()->GetNativeNodeAPI();\nArkUI_NodeHandle testNode = nodeAPI->createNode(ARKUI_NODE_COLUMN);\nArkUI_NumberValue value[] = {VALUE_1};\nArkUI_AttributeItem item = {value, sizeof(value) / sizeof(ArkUI_NumberValue)};\nvalue[0].f32 = VALUE_2;\nnodeAPI->setAttribute(testNode, NODE_WIDTH, &item);\nnodeAPI->setAttribute(testNode, NODE_HEIGHT, &item);\nstruct IdList {\n    int32_t id = -1;\n};\nIdList *idl = new IdList;\nint32_t uid = -1;\nOH_ArkUI_NodeUtils_GetNodeUniqueId(testNode, &uid);\nidl->id = uid;\nauto button = nodeAPI->createNode(ARKUI_NODE_BUTTON);\nvalue[0].f32 = VALUE_3;\nnodeAPI->setAttribute(button, NODE_WIDTH, &item);\nnodeAPI->setAttribute(button, NODE_HEIGHT, &item);\nnodeAPI->addChild(testNode, button);\nnodeAPI->registerNodeEvent(button, NODE_ON_CLICK, 1, idl);\nOH_LOG_Print(LOG_APP, LOG_WARN, LOG_PRINT, \"GetNodeUniqueId\", \"GetNodeHandleByUniqueId success1\");\nnodeAPI->registerNodeEventReceiver([](ArkUI_NodeEvent *event) {\n    auto targetId = OH_ArkUI_NodeEvent_GetTargetId(event);\n    if (targetId == 1) {\n        auto idl = (IdList *)OH_ArkUI_NodeEvent_GetUserData(event);\n        ArkUI_NodeHandle Test_Column;\n        auto ec = OH_ArkUI_NodeUtils_GetNodeHandleByUniqueId(idl->id, &Test_Column);\n        if (ec == 0) {\n            OH_LOG_Print(LOG_APP, LOG_WARN, LOG_PRINT, \"GetNodeUniqueId\", \"GetNodeHandleByUniqueId success\");\n        }\n    }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过用户id获取节点信息",
      children: "通过用户id获取节点信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodeutils_getattachednodehandlebyid",
        children: "OH_ArkUI_NodeUtils_GetAttachedNodeHandleById"
      }), "接口，可以通过用户设置的id获取目标节点的指针。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS侧接入Native组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import nativeNode from 'libentry.so';\nimport { NodeContent } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct GetNodeById {\n  private rootSlot = new NodeContent();\n\n  aboutToAppear(): void {\n    nativeNode.createUserIdNode(this.rootSlot);\n  }\n\n  build() {\n    Scroll() {\n      Column({ space: 15 }) {\n        Column() {\n          ContentSlot(this.rootSlot)\n        }\n      }\n      .width('100%')\n    }.scrollBarColor(Color.Transparent)\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新建GetNodeByIdExample.h文件，在其中创建Text节点并设置id属性，通过OH_ArkUI_NodeUtils_GetAttachedNodeHandleById接口拿到节点。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// GetNodeByIdExample.h\n#ifndef MYAPPLICATION_GETNODEBYID_H\n#define MYAPPLICATION_GETNODEBYID_H\n\n#include \"ArkUINode.h\"\n#include <hilog/log.h>\n\nnamespace NativeModule {\n\nstd::shared_ptr<ArkUIBaseNode> CreateGetNodeByIdExample()\n{\n    auto nodeAPI = NativeModuleInstance::GetInstance()->GetNativeNodeAPI();\n    \n    // 创建传入事件节点结构体\n    struct A {\n        ArkUI_NodeHandle node;\n    };\n    A* a = new A;\n    \n    // 创建根节点Scroll\n    ArkUI_NodeHandle scroll = nodeAPI->createNode(ARKUI_NODE_SCROLL);\n    ArkUI_NumberValue length_value[] = {{.f32 = 480}};\n    ArkUI_AttributeItem length_item = {length_value, sizeof(length_value) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(scroll, NODE_WIDTH, &length_item);\n    ArkUI_NumberValue length_value1[] = {{.f32 = 650}};\n    ArkUI_AttributeItem length_item1 = {length_value1, sizeof(length_value1) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(scroll, NODE_HEIGHT, &length_item1);\n    ArkUI_AttributeItem scroll_id = {.string = \"Scroll_CAPI\"};\n    nodeAPI->setAttribute(scroll, NODE_ID, &scroll_id);\n    \n    // 创建Column\n    ArkUI_NodeHandle column = nodeAPI->createNode(ARKUI_NODE_COLUMN);\n    ArkUI_NumberValue value[] = {480};\n    ArkUI_AttributeItem item = {value, sizeof(value) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(column, NODE_WIDTH, &item);\n    ArkUI_NumberValue column_bc[] = {{.u32 = 0xFFF00BB}};\n    ArkUI_AttributeItem column_item = {column_bc, 1};\n    nodeAPI->setAttribute(column, NODE_BACKGROUND_COLOR, &column_item);\n    ArkUI_AttributeItem column_id = {.string = \"Column_CAPI\"};\n    nodeAPI->setAttribute(column, NODE_ID, &column_id);\n    \n    // 创建Text\n    ArkUI_NodeHandle text0 = nodeAPI->createNode(ARKUI_NODE_TEXT);\n    ArkUI_NumberValue text_width[] = {300};\n    ArkUI_AttributeItem text_item0 = {text_width, sizeof(text_width) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(text0, NODE_WIDTH, &text_item0);\n    ArkUI_NumberValue text_height[] = {50};\n    ArkUI_AttributeItem text_item1 = {text_height, sizeof(text_height) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(text0, NODE_HEIGHT, &text_item1);\n    ArkUI_AttributeItem text_item = {.string = \"示例Text节点\"};\n    nodeAPI->setAttribute(text0, NODE_TEXT_CONTENT, &text_item);\n    ArkUI_NumberValue margin[] = {10};\n    ArkUI_AttributeItem item_margin = {margin, sizeof(margin) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(text0, NODE_MARGIN, &item_margin);\n    ArkUI_AttributeItem text0_id = {.string = \"Text0_CAPI\"};\n    nodeAPI->setAttribute(text0, NODE_ID, &text0_id);\n    a->node = text0;\n    \n    // 创建Row\n    ArkUI_NodeHandle row0 = nodeAPI->createNode(ARKUI_NODE_ROW);\n    ArkUI_NumberValue width_value[] = {{.f32=330}};\n    ArkUI_AttributeItem width_item = {width_value, sizeof(width_value) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(row0, NODE_WIDTH, &width_item);\n    nodeAPI->setAttribute(row0, NODE_HEIGHT, &text_item1);\n    nodeAPI->setAttribute(row0, NODE_MARGIN, &item_margin);\n    \n    // 创建Button\n    ArkUI_NodeHandle bt0 = nodeAPI->createNode(ARKUI_NODE_BUTTON);\n    ArkUI_NumberValue btn_width[] = {150};\n    ArkUI_AttributeItem btn_item0 = {btn_width, sizeof(btn_width) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(bt0, NODE_WIDTH, &btn_item0);\n    nodeAPI->setAttribute(bt0, NODE_HEIGHT, &text_item1);\n    nodeAPI->setAttribute(bt0, NODE_MARGIN, &item_margin);\n    ArkUI_AttributeItem bt0_item = {.string = \"GetAttachedNodeHandleById\"};\n    nodeAPI->setAttribute(bt0, NODE_BUTTON_LABEL, &bt0_item);\n    nodeAPI->registerNodeEvent(bt0, NODE_ON_CLICK, 0, a);\n    \n    // 注册事件\n    auto onClick = [](ArkUI_NodeEvent *event) {\n        ArkUI_NodeHandle node = OH_ArkUI_NodeEvent_GetNodeHandle(event);\n        auto nodeAPI = NativeModuleInstance::GetInstance()->GetNativeNodeAPI();\n        \n        if (OH_ArkUI_NodeEvent_GetTargetId(event) == 0) {  // GetAttachedNodeHandleById\n            A* a = (A*)OH_ArkUI_NodeEvent_GetUserData(event);\n            ArkUI_NodeHandle node = nullptr;\n            auto res = OH_ArkUI_NodeUtils_GetAttachedNodeHandleById(\"Text0_CAPI\", &node);\n            if (node == a->node) {\n                OH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00, \"GetNodeByIdExample\", \"get Text0_CAPI success\");\n            } else {\n                OH_LOG_Print(LOG_APP, LOG_ERROR, 0xFF00, \"GetNodeByIdExample\", \"get Text0_CAPI failed\");\n            }\n        }\n    };\n    nodeAPI->registerNodeEventReceiver(onClick);\n    \n    // 节点添加\n    nodeAPI->addChild(scroll, column);\n    nodeAPI->addChild(column, text0);\n    nodeAPI->addChild(column, row0);\n    nodeAPI->addChild(row0, bt0);\n    \n    return std::make_shared<ArkUINode>(scroll);\n}\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_GETNODEBYID_H\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在NativeEntry.cpp中，挂载Native节点。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// NativeEntry.cpp\n#include <arkui/native_node_napi.h>\n#include <hilog/log.h>\n#include <js_native_api.h>\n#include \"NativeEntry.h\"\n#include \"MoveToExample.h\"\n#include \"GetNodeByIdExample.h\"\n\n\nnamespace NativeModule {\n// ...\nstatic napi_value CreateNativeRoot(napi_env env, napi_callback_info info, const char *who, MakeNodeFn makeNodeFn)\n{\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    // 获取NodeContent\n    ArkUI_NodeContentHandle contentHandle;\n    OH_ArkUI_GetNodeContentFromNapiValue(env, args[0], &contentHandle);\n    if (contentHandle == nullptr) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, K_LOG_DOMAIN,\n                     \"%{public}s nodeContentHandle is null\", who);\n        return nullptr;\n    }\n    NativeEntry::GetInstance()->SetContentHandle(contentHandle);\n\n    // 创建节点\n    auto node = makeNodeFn();\n\n    // 保持Native侧对象到管理类中，维护生命周期。\n    NativeEntry::GetInstance()->SetRootNode(node);\n    return nullptr;\n}\n\nnapi_value DestroyNativeRoot(napi_env env, napi_callback_info info)\n{\n    // 从管理类中释放Native侧对象。\n    NativeEntry::GetInstance()->DisposeRootNode();\n    return nullptr;\n}\n// ...\n} // namespace NativeModule\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "运行程序，点击按钮，打印节点获取成功信息。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "移动节点",
      children: "移动节点"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodeutils_moveto",
        children: "OH_ArkUI_NodeUtils_MoveTo"
      }), "接口，可以将Native节点移动到新的父节点下，从而按需改变节点树结构。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(907834)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前仅支持以下类型的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodetype",
        children: "ArkUI_NodeType"
      }), "进行移动操作：ARKUI_NODE_STACK、ARKUI_NODE_XCOMPONENT、ARKUI_NODE_EMBEDDED_COMPONENT。对于其他类型的节点，移动操作不会生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS侧接入Native组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// MoveTo.ets\nimport nativeNode from 'libentry.so';\nimport { NodeContent } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct MoveTo {\n  private rootSlot = new NodeContent();\n\n  aboutToAppear(): void {\n    nativeNode.createMoveToNode(this.rootSlot);\n  }\n\n  build() {\n    Scroll() {\n      Column({ space: 15 }) {\n        Column() {\n          ContentSlot(this.rootSlot)\n        }\n      }\n      .width('100%')\n    }.scrollBarColor(Color.Transparent)\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新建MoveTo.h文件，在其中创建Stack节点，通过OH_ArkUI_NodeUtils_MoveTo接口移动Stack节点。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// MoveToExample.h\n#ifndef MYAPPLICATION_MOVETO_H\n#define MYAPPLICATION_MOVETO_H\n\n#include \"ArkUINode.h\"\n#include <hilog/log.h>\n\nnamespace NativeModule {\n\nstd::shared_ptr<ArkUIBaseNode> CreateMoveToExample()\n{\n    auto nodeAPI = NativeModuleInstance::GetInstance()->GetNativeNodeAPI();\n\n    // 创建传入事件节点结构体\n    struct A {\n        ArkUI_NodeHandle node;\n        ArkUI_NodeHandle targetParent;\n    };\n    A* a = new A;\n\n    // 创建根节点Scroll\n    ArkUI_NodeHandle scroll = nodeAPI->createNode(ARKUI_NODE_SCROLL);\n    ArkUI_NumberValue length_value[] = {{.f32 = 480}};\n    ArkUI_AttributeItem length_item = {length_value, sizeof(length_value) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(scroll, NODE_WIDTH, &length_item);\n    ArkUI_NumberValue length_value1[] = {{.f32 = 650}};\n    ArkUI_AttributeItem length_item1 = {length_value1, sizeof(length_value1) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(scroll, NODE_HEIGHT, &length_item1);\n    ArkUI_AttributeItem scroll_id = {.string = \"Scroll_CAPI\"};\n    nodeAPI->setAttribute(scroll, NODE_ID, &scroll_id);\n\n    // 创建Column\n    ArkUI_NodeHandle column = nodeAPI->createNode(ARKUI_NODE_COLUMN);\n    ArkUI_NumberValue value[] = {480};\n    ArkUI_AttributeItem item = {value, sizeof(value) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(column, NODE_WIDTH, &item);\n    ArkUI_AttributeItem column_id = {.string = \"Column_CAPI\"};\n    nodeAPI->setAttribute(column, NODE_ID, &column_id);\n\n    // 创建Row\n    ArkUI_NumberValue text_height[] = {50};\n    ArkUI_AttributeItem text_item1 = {text_height, sizeof(text_height) / sizeof(ArkUI_NumberValue)};\n    ArkUI_NumberValue margin[] = {10};\n    ArkUI_AttributeItem item_margin = {margin, sizeof(margin) / sizeof(ArkUI_NumberValue)};\n    ArkUI_NodeHandle row0 = nodeAPI->createNode(ARKUI_NODE_ROW);\n    ArkUI_NumberValue width_value[] = {{.f32=330}};\n    ArkUI_AttributeItem width_item = {width_value, sizeof(width_value) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(row0, NODE_WIDTH, &width_item);\n    nodeAPI->setAttribute(row0, NODE_HEIGHT, &text_item1);\n    nodeAPI->setAttribute(row0, NODE_MARGIN, &item_margin);\n\n    ArkUI_NodeHandle row1 = nodeAPI->createNode(ARKUI_NODE_ROW);\n    nodeAPI->setAttribute(row1, NODE_WIDTH, &width_item);\n    nodeAPI->setAttribute(row1, NODE_HEIGHT, &text_item1);\n    nodeAPI->setAttribute(row1, NODE_MARGIN, &item_margin);\n    a->targetParent = row1;\n\n    ArkUI_NodeHandle row2 = nodeAPI->createNode(ARKUI_NODE_ROW);\n    nodeAPI->setAttribute(row2, NODE_WIDTH, &width_item);\n    nodeAPI->setAttribute(row2, NODE_HEIGHT, &text_item1);\n    nodeAPI->setAttribute(row2, NODE_MARGIN, &item_margin);\n\n    // 创建Stack\n    ArkUI_NodeHandle stack0 = nodeAPI->createNode(ARKUI_NODE_STACK);\n    ArkUI_NumberValue stack_value[] = {{.f32=50}};\n    ArkUI_AttributeItem stack_item1 = {stack_value, sizeof(width_value) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(stack0, NODE_WIDTH, &stack_item1);\n    nodeAPI->setAttribute(stack0, NODE_HEIGHT, &stack_item1);\n    ArkUI_NumberValue stack_bc[] = {{.u32 = 0xFFFFB6C1}};\n    ArkUI_AttributeItem stack_item2 = {stack_bc, 1};\n    nodeAPI->setAttribute(stack0, NODE_BACKGROUND_COLOR, &stack_item2);\n    a->node = stack0;\n\n    ArkUI_NodeHandle stack1 = nodeAPI->createNode(ARKUI_NODE_STACK);\n    nodeAPI->setAttribute(stack1, NODE_WIDTH, &stack_item1);\n    nodeAPI->setAttribute(stack1, NODE_HEIGHT, &stack_item1);\n    ArkUI_NumberValue stack_bc1[] = {{.u32 = 0xFF6495ED}};\n    ArkUI_AttributeItem stack_item3 = {stack_bc1, 1};\n    nodeAPI->setAttribute(stack1, NODE_BACKGROUND_COLOR, &stack_item3);\n\n    ArkUI_NodeHandle stack2 = nodeAPI->createNode(ARKUI_NODE_STACK);\n    nodeAPI->setAttribute(stack2, NODE_WIDTH, &stack_item1);\n    nodeAPI->setAttribute(stack2, NODE_HEIGHT, &stack_item1);\n    ArkUI_NumberValue stack_bc2[] = {{.u32 = 0xFF90EE90}};\n    ArkUI_AttributeItem stack_item4 = {stack_bc2, 1};\n    nodeAPI->setAttribute(stack2, NODE_BACKGROUND_COLOR, &stack_item4);\n\n    ArkUI_NodeHandle stack3 = nodeAPI->createNode(ARKUI_NODE_STACK);\n    nodeAPI->setAttribute(stack3, NODE_WIDTH, &stack_item1);\n    nodeAPI->setAttribute(stack3, NODE_HEIGHT, &stack_item1);\n    nodeAPI->setAttribute(stack3, NODE_BACKGROUND_COLOR, &stack_item2);\n\n    ArkUI_NodeHandle stack4 = nodeAPI->createNode(ARKUI_NODE_STACK);\n    nodeAPI->setAttribute(stack4, NODE_WIDTH, &stack_item1);\n    nodeAPI->setAttribute(stack4, NODE_HEIGHT, &stack_item1);\n    nodeAPI->setAttribute(stack4, NODE_BACKGROUND_COLOR, &stack_item3);\n    \n    ArkUI_NodeHandle stack5 = nodeAPI->createNode(ARKUI_NODE_STACK);\n    nodeAPI->setAttribute(stack5, NODE_WIDTH, &stack_item1);\n    nodeAPI->setAttribute(stack5, NODE_HEIGHT, &stack_item1);\n    nodeAPI->setAttribute(stack5, NODE_BACKGROUND_COLOR, &stack_item4);\n\n    // 创建Button\n    ArkUI_NodeHandle bt0 = nodeAPI->createNode(ARKUI_NODE_BUTTON);\n    ArkUI_NumberValue btn_width[] = {150};\n    ArkUI_AttributeItem btn_item0 = {btn_width, sizeof(btn_width) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(bt0, NODE_WIDTH, &btn_item0);\n    nodeAPI->setAttribute(bt0, NODE_HEIGHT, &text_item1);\n    nodeAPI->setAttribute(bt0, NODE_MARGIN, &item_margin);\n    ArkUI_AttributeItem bt0_item = {.string = \"MoveTo\"};\n    nodeAPI->setAttribute(bt0, NODE_BUTTON_LABEL, &bt0_item);\n    nodeAPI->registerNodeEvent(bt0, NODE_ON_CLICK, 0, a);\n\n    // 注册事件\n    auto onClick = [](ArkUI_NodeEvent *event) {\n        ArkUI_NodeHandle node = OH_ArkUI_NodeEvent_GetNodeHandle(event);\n        auto nodeAPI = NativeModuleInstance::GetInstance()->GetNativeNodeAPI();\n        \n        if (OH_ArkUI_NodeEvent_GetTargetId(event) == 0) {  // MoveTo\n            A* a = (A*)OH_ArkUI_NodeEvent_GetUserData(event);\n            auto res = OH_ArkUI_NodeUtils_MoveTo(a->node, a->targetParent, 2);\n        }\n    };\n    nodeAPI->registerNodeEventReceiver(onClick);\n\n    // 节点添加\n    nodeAPI->addChild(scroll, column);\n    nodeAPI->addChild(column, row0);\n    nodeAPI->addChild(column, row1);\n    nodeAPI->addChild(column, row2);\n    nodeAPI->addChild(row0, stack0);\n    nodeAPI->addChild(row0, stack1);\n    nodeAPI->addChild(row0, stack2);\n    nodeAPI->addChild(row1, stack3);\n    nodeAPI->addChild(row1, stack4);\n    nodeAPI->addChild(row1, stack5);\n    nodeAPI->addChild(row2, bt0);\n\n    return std::make_shared<ArkUINode>(scroll);\n}\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_MOVETO_H\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在NativeEntry.cpp中，挂载Native节点。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// NativeEntry.cpp\n#include <arkui/native_node_napi.h>\n#include <hilog/log.h>\n#include <js_native_api.h>\n#include \"NativeEntry.h\"\n#include \"MoveToExample.h\"\n#include \"GetNodeByIdExample.h\"\n\n\nnamespace NativeModule {\n// ...\nstatic napi_value CreateNativeRoot(napi_env env, napi_callback_info info, const char *who, MakeNodeFn makeNodeFn)\n{\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    // 获取NodeContent\n    ArkUI_NodeContentHandle contentHandle;\n    OH_ArkUI_GetNodeContentFromNapiValue(env, args[0], &contentHandle);\n    if (contentHandle == nullptr) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, K_LOG_DOMAIN,\n                     \"%{public}s nodeContentHandle is null\", who);\n        return nullptr;\n    }\n    NativeEntry::GetInstance()->SetContentHandle(contentHandle);\n\n    // 创建节点\n    auto node = makeNodeFn();\n\n    // 保持Native侧对象到管理类中，维护生命周期。\n    NativeEntry::GetInstance()->SetRootNode(node);\n    return nullptr;\n}\n\nnapi_value DestroyNativeRoot(napi_env env, napi_callback_info info)\n{\n    // 从管理类中释放Native侧对象。\n    NativeEntry::GetInstance()->DisposeRootNode();\n    return nullptr;\n}\n// ...\n} // namespace NativeModule\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "运行程序，点击按钮，Stack节点会移动到目标位置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(731267)/* ["default"] */.A) + "",
            width: "276",
            height: "232"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在当前即时帧触发节点属性更新",
      children: "在当前即时帧触发节点属性更新"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 21开始，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nativemodule_invalidateattributes",
        children: "OH_ArkUI_NativeModule_InvalidateAttributes"
      }), "接口，在当前帧即时触发节点属性更新，避免组件切换过程中出现闪烁。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS侧接入Native组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import testNapi from 'libentry.so';\nimport { NodeContent } from '@kit.ArkUI';\n\n@Component\nstruct ImageContent {\n  private nodeContent: NodeContent = new NodeContent();\n\n  aboutToAppear() {\n    // 通过C-API创建节点，并添加到管理器nodeContent上\n    testNapi.createNativeNode(this.nodeContent);\n  }\n  build() {\n    Column() {\n      // 显示nodeContent管理器里存放的Native侧的组件\n      ContentSlot(this.nodeContent)\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n  @State showParent: boolean = true;\n  build() {\n    Row() {\n      Column() {\n        // $r('app.string.Switch')需要替换为开发者所需的资源文件。\n        Button($r('app.string.Switch')).onClick(()=>{\n          this.showParent = !this.showParent;\n        }).margin(20)\n        if(this.showParent) {\n          ImageContent()\n        } else {\n          ImageContent()\n        }\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新建Attribute_util.h用于设置组件属性。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#ifndef MYAPPLICATION_ATTRIBUTE_UTIL_H\n#define MYAPPLICATION_ATTRIBUTE_UTIL_H\n\n#include <arkui/native_node.h>\n#include <cstdint>\n#include <string>\nclass AttributeUtil {\npublic:\n    ArkUI_NativeNodeAPI_1 *api_;\n    ArkUI_NodeHandle node_;\n    AttributeUtil(ArkUI_NodeHandle node, ArkUI_NativeNodeAPI_1 *api)\n    {\n        this->node_ = node;\n        api_ = api;\n    }\n    int32_t Width(float width)\n    {\n        ArkUI_NumberValue NODE_WIDTH_value[] = {width};\n        ArkUI_AttributeItem NODE_WIDTH_Item = {NODE_WIDTH_value, 1};\n        return api_->setAttribute(node_, NODE_WIDTH, &NODE_WIDTH_Item);\n    }\n    int32_t Height(float height)\n    {\n        ArkUI_NumberValue NODE_HEIGHT_value[] = {height};\n        ArkUI_AttributeItem NODE_HEIGHT_Item = {NODE_HEIGHT_value, 1};\n        return api_->setAttribute(node_, NODE_HEIGHT, &NODE_HEIGHT_Item);\n    }\n    int32_t ImageSrc(std::string src)\n    {\n        ArkUI_AttributeItem NODE_IMAGE_SRC_VALUE = {.string = src.c_str()};\n        return api_->setAttribute(node_, NODE_IMAGE_SRC, &NODE_IMAGE_SRC_VALUE);\n    }\n    int32_t ImageSyncLoad()\n    {\n        ArkUI_NumberValue NODE_TRANSLATE_ITEM_VALUE[] = {{.i32 = 1}};\n        ArkUI_AttributeItem NODE_BORDER_WIDTH_ITEM = {NODE_TRANSLATE_ITEM_VALUE, 1};\n        return api_->setAttribute(node_, NODE_IMAGE_SYNC_LOAD, &NODE_BORDER_WIDTH_ITEM);\n    }\n};\n#endif // MYAPPLICATION_ATTRIBUTE_UTIL_H\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在nai_init.cpp中，挂载Native节点。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"Attribute_util.h\"\n#include \"napi/native_api.h\"\n#include <arkui/native_interface.h>\n#include <arkui/native_node.h>\n#include <arkui/native_node_napi.h>\n#include <hilog/log.h>\n#include <js_native_api.h>\n#include <js_native_api_types.h>\n// ...\nconst unsigned int NUMBER_2 = 2;\nconst unsigned int NUMBER_WIDTH = 100;\nconst unsigned int NUMBER_HEIGHT = 100;\n\nstatic napi_value Add(napi_env env, napi_callback_info info)\n{\n    size_t argc = NUMBER_2;\n    napi_value args[NUMBER_2] = {nullptr};\n\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    napi_valuetype valuetype0;\n    napi_typeof(env, args[0], &valuetype0);\n\n    napi_valuetype valuetype1;\n    napi_typeof(env, args[1], &valuetype1);\n\n    double value0;\n    napi_get_value_double(env, args[0], &value0);\n\n    double value1;\n    napi_get_value_double(env, args[1], &value1);\n\n    napi_value sum;\n    napi_create_double(env, value0 + value1, &sum);\n\n    return sum;\n}\n\nstatic ArkUI_NativeNodeAPI_1 *nodeAPI = nullptr;\n\nstatic napi_value NAPI_Global_createNativeNode(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    ArkUI_NodeContentHandle contentHandle;\n    OH_ArkUI_GetNodeContentFromNapiValue(env, args[0], &contentHandle);\n    OH_ArkUI_GetModuleInterface(ARKUI_NATIVE_NODE, ArkUI_NativeNodeAPI_1, nodeAPI);\n    // 创建Image组件\n    auto imageNode = nodeAPI->createNode(ARKUI_NODE_IMAGE);\n    AttributeUtil imageNodeAttr(imageNode, nodeAPI);\n    // 设置image组件属性\n    imageNodeAttr.ImageSrc(\"resources/base/media/startIcon.png\");\n    imageNodeAttr.ImageSyncLoad();\n    imageNodeAttr.Width(NUMBER_WIDTH);\n    imageNodeAttr.Height(NUMBER_HEIGHT);\n    // 在当前即时帧触发节点属性更新\n    OH_ArkUI_NativeModule_InvalidateAttributes(imageNode);\n    // 挂载image组件到组件树\n    OH_ArkUI_NodeContent_AddNode(contentHandle, imageNode);\n    return nullptr;\n}\n\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports)\n{\n    napi_property_descriptor desc[] = {\n        {\"add\", nullptr, Add, nullptr, nullptr, nullptr, napi_default, nullptr},\n        {\"createNativeNode\", nullptr, NAPI_Global_createNativeNode, nullptr, nullptr, nullptr, napi_default, nullptr},\n        // ...\n    };\n    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\n    return exports;\n}\nEXTERN_C_END\n\nstatic napi_module demoModule = {\n    .nm_version = 1,\n    .nm_flags = 0,\n    .nm_filename = nullptr,\n    .nm_register_func = Init,\n    .nm_modname = \"entry\",\n    .nm_priv = ((void*)0),\n    .reserved = { 0 },\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void)\n{\n    napi_module_register(&demoModule);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "运行程序，点击按钮，切换图片正常展示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(1292)/* ["default"] */.A) + "",
            width: "194",
            height: "202"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "用不同的展开模式获取对应下标的子节点",
      children: "用不同的展开模式获取对应下标的子节点"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NDK支持通过不同的展开方式获取目标节点下的有效节点信息。例如，在LazyForEach场景下，可以处理存在多个子节点的情况。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodeutils_getfirstchildindexwithoutexpand",
        children: "OH_ArkUI_NodeUtils_GetFirstChildIndexWithoutExpand"
      }), "接口，可以获取目标节点的第一个存在于组件树的节点。使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodeutils_getlastchildindexwithoutexpand",
        children: "OH_ArkUI_NodeUtils_GetLastChildIndexWithoutExpand"
      }), "接口，可以获取目标节点的最后一个存在于组件树的节点。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodeutils_getchildwithexpandmode",
        children: "OH_ArkUI_NodeUtils_GetChildWithExpandMode"
      }), "接口，可以通过不同的节点展开模式获取对应下标的子节点。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(823622)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["节点展开方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#arkui_expandmode",
        children: "ArkUI_ExpandMode"
      }), "，此处推荐使用ARKUI_LAZY_EXPAND懒展开方式，智能识别对应场景。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过ArkTS构造LazyForEach及ArkTS的下树节点展开场景。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { NodeController, FrameNode, UIContext, BuilderNode, ExpandMode, LengthUnit } from '@kit.ArkUI';\n\nconst TEST_TAG: string = \"FrameNode \";\n\n// BasicDataSource实现了IDataSource接口，用于管理listener监听，以及通知LazyForEach数据更新\nclass BasicDataSource implements IDataSource {\n  private listeners: DataChangeListener[] = [];\n  private originDataArray: string[] = [];\n\n  public totalCount(): number {\n    return 0;\n  }\n\n  public getData(index: number): string {\n    return this.originDataArray[index];\n  }\n\n  // 该方法为框架侧调用，为LazyForEach组件向其数据源处添加listener监听\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      console.info('add listener');\n      this.listeners.push(listener);\n    }\n  }\n\n  // 该方法为框架侧调用，为对应的LazyForEach组件在数据源处去除listener监听\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      console.info('remove listener');\n      this.listeners.splice(pos, 1);\n    }\n  }\n\n  // 通知LazyForEach组件需要重载所有子组件\n  notifyDataReload(): void {\n    this.listeners.forEach(listener => {\n      listener.onDataReloaded();\n    })\n  }\n\n  // 通知LazyForEach组件需要在index对应索引处添加子组件\n  notifyDataAdd(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index);\n      // 写法2：listener.onDatasetChange([{type: DataOperationType.ADD, index: index}]);\n    })\n  }\n\n  // 通知LazyForEach组件在index对应索引处数据有变化，需要重建该子组件\n  notifyDataChange(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataChange(index);\n      // 写法2：listener.onDatasetChange([{type: DataOperationType.CHANGE, index: index}]);\n    })\n  }\n\n  // 通知LazyForEach组件需要在index对应索引处删除该子组件\n  notifyDataDelete(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataDelete(index);\n      // 写法2：listener.onDatasetChange([{type: DataOperationType.DELETE, index: index}]);\n    })\n  }\n\n  // 通知LazyForEach组件将from索引和to索引处的子组件进行交换\n  notifyDataMove(from: number, to: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataMove(from, to);\n      // 写法2：listener.onDatasetChange(\n      //         [{type: DataOperationType.EXCHANGE, index: {start: from, end: to}}]);\n    })\n  }\n\n  notifyDatasetChange(operations: DataOperation[]): void {\n    this.listeners.forEach(listener => {\n      listener.onDatasetChange(operations);\n    })\n  }\n}\n\nclass MyDataSource extends BasicDataSource {\n  private dataArray: string[] = []\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n\n  public addData(index: number, data: string): void {\n    this.dataArray.splice(index, 0, data);\n    this.notifyDataAdd(index);\n  }\n\n  public pushData(data: string): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n\nclass Params {\n  data: MyDataSource | null = null;\n  scroller: Scroller | null = null;\n  constructor(data: MyDataSource, scroller: Scroller) {\n    this.data = data;\n    this.scroller = scroller;\n  }\n}\n\n@Builder\nfunction buildData(params: Params) {\n  List({ scroller: params.scroller }) {\n    LazyForEach(params.data, (item: string) => {\n      ListItem() {\n        Column() {\n          Text(item)\n            .fontSize(20)\n            .onAppear(() => {\n              console.info(TEST_TAG + \" node appear: \" + item)\n            })\n            .backgroundColor(Color.Pink)\n            .margin({\n              top: 30,\n              bottom: 30,\n              left: 10,\n              right: 10\n            })\n        }\n      }\n      .id(item)\n    }, (item: string) => item)\n  }\n  .cachedCount(5)\n  .listDirection(Axis.Horizontal)\n}\n\nclass MyNodeController extends NodeController {\n  private rootNode: FrameNode | null = null;\n  private uiContext: UIContext | null = null;\n  private data: MyDataSource = new MyDataSource();\n  private scroller: Scroller = new Scroller();\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.uiContext = uiContext;\n    for (let i = 0; i <= 20; i++) {\n      this.data.pushData(`N${i}`);\n    }\n    const params: Params = new Params(this.data, this.scroller);\n    const dataNode: BuilderNode<[Params]> = new BuilderNode(uiContext);\n    dataNode.build(wrapBuilder<[Params]>(buildData), params);\n    this.rootNode = dataNode.getFrameNode();\n    const scrollToIndexOptions: ScrollToIndexOptions = {\n      extraOffset: {\n        value: 20, unit: LengthUnit.VP\n      }\n    };\n    this.scroller.scrollToIndex(6, true, ScrollAlign.START, scrollToIndexOptions);\n    return this.rootNode;\n  }\n\n  // 获取不展开场景下第一个活跃节点的下标\n  getFirstChildIndexWithoutExpand() {\n    console.info(`${TEST_TAG} getFirstChildIndexWithoutExpand: ${this.rootNode!.getFirstChildIndexWithoutExpand()}`);\n  }\n\n  // 获取不展开场景下最后一个活跃节点的下标\n  getLastChildIndexWithoutExpand() {\n    console.info(`${TEST_TAG} getLastChildIndexWithoutExpand: ${this.rootNode!.getLastChildIndexWithoutExpand()}`);\n  }\n\n  // 用不展开的方式获取节点\n  getChildWithNotExpand() {\n    const childNode = this.rootNode!.getChild(3, ExpandMode.NOT_EXPAND);\n    console.info(TEST_TAG + \" getChild(3, ExpandMode.NOT_EXPAND): \" + childNode?.getId());\n    if (childNode?.getId() === \"N9\") {\n      console.info(TEST_TAG + \" getChild(3, ExpandMode.NOT_EXPAND)  result: success.\");\n    } else {\n      console.info(TEST_TAG + \" getChild(3, ExpandMode.NOT_EXPAND)  result: fail.\");\n    }\n  }\n  \n  // 以展开的方式获取节点\n  getChildWithExpand() {\n    const childNode = this.rootNode!.getChild(3, ExpandMode.EXPAND);\n    console.info(TEST_TAG + \" getChild(3, ExpandMode.EXPAND): \" + childNode?.getId());\n    if (childNode?.getId() === \"N3\") {\n      console.info(TEST_TAG + \" getChild(3, ExpandMode.EXPAND)  result: success.\");\n    } else {\n      console.info(TEST_TAG + \" getChild(3, ExpandMode.EXPAND)  result: fail.\");\n    }\n  }\n  \n  getChildWithLazyExpand() {\n    const childNode = this.rootNode!.getChild(3, ExpandMode.LAZY_EXPAND);\n    console.info(TEST_TAG + \" getChild(3, ExpandMode.LAZY_EXPAND): \" + childNode?.getId());\n    if (childNode?.getId() === \"N3\") {\n      console.info(TEST_TAG + \" getChild(3, ExpandMode.LAZY_EXPAND)  result: success.\");\n    } else {\n      console.info(TEST_TAG + \" getChild(3, ExpandMode.LAZY_EXPAND)  result: fail.\");\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private myNodeController: MyNodeController = new MyNodeController();\n  private scroller: Scroller = new Scroller();\n\n  build() {\n    Scroll(this.scroller) {\n      Column({ space: 8 }) {\n        Column() {\n          Text(\"This is a NodeContainer.\")\n            .textAlign(TextAlign.Center)\n            .borderRadius(10)\n            .backgroundColor(0xFFFFFF)\n            .width('100%')\n            .fontSize(16)\n          NodeContainer(this.myNodeController)\n            .borderWidth(1)\n            .width(300)\n            .height(100)\n        }\n\n        Button(\"getFirstChildIndexWithoutExpand\")\n            .width(300)\n            .onClick(() => {\n              this.myNodeController.getFirstChildIndexWithoutExpand();\n            })\n          Button(\"getLastChildIndexWithoutExpand\")\n            .width(300)\n            .onClick(() => {\n              this.myNodeController.getLastChildIndexWithoutExpand();\n            })\n          Button(\"getChildWithNotExpand\")\n            .width(300)\n            .onClick(() => {\n              this.myNodeController.getChildWithNotExpand();\n            })\n          Button(\"getChildWithExpand\")\n            .width(300)\n            .onClick(() => {\n              this.myNodeController.getChildWithExpand();\n            })\n          Button(\"getChildWithLazyExpand\")\n            .width(300)\n            .onClick(() => {\n              this.myNodeController.getChildWithLazyExpand();\n            })\n        }\n        .width(\"100%\")\n      }\n      .scrollable(ScrollDirection.Vertical) // 滚动方向纵向\n    }\n  }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["NDK侧通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodeutils_getattachednodehandlebyid",
            children: "OH_ArkUI_NodeUtils_GetAttachedNodeHandleById"
          }), "接口获取ArkTS组件，并通过懒展开模式获取对应的子组件信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ArkUI_NodeHandle childNode = nullptr;\nOH_ArkUI_NodeUtils_GetAttachedNodeHandleById(\"N3\", &childNode);\n    \nuint32_t index = 0;\nOH_ArkUI_NodeUtils_GetFirstChildIndexWithoutExpand(childNode, &index);\nuint32_t index1 = 0;\nOH_ArkUI_NodeUtils_GetLastChildIndexWithoutExpand(childNode, &index1);\nArkUI_NodeHandle child = nullptr;\nauto result = OH_ArkUI_NodeUtils_GetChildWithExpandMode(childNode, 3, &child, 0);\nOH_LOG_Print(LOG_APP, LOG_INFO, 0xFF00, \"Manager\",\n    \"firstChildIndex - lastChildIndex == %{d -- %{public}d, -- getResult = %{public}d\",\n    index, index1, result);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "查看日志打印的对应错误码返回是否正确，以此判断是否成功获取到对应子节点。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "节点是否处于渲染状态",
      children: "节点是否处于渲染状态"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 23开始，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nativemodule_isinrenderstate",
        children: "OH_ArkUI_NativeModule_IsInRenderState"
      }), "接口，可以查询节点是否在渲染树上。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS侧接入Native组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "//Index.ets\n\nimport testNapi from 'libentry.so';\nimport { NodeContent } from '@kit.ArkUI';\n\n@Component\nstruct TestContent {\n  private nodeContent: NodeContent = new NodeContent();\n\n  aboutToAppear() {\n    // 通过C-API创建节点，并添加到管理器nodeContent上\n    testNapi.createNativeNode(this.nodeContent);\n  }\n  build() {\n    Column() {\n      // 显示nodeContent管理器里存放的Native侧的组件\n      ContentSlot(this.nodeContent)\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n  @State showParent: boolean = true;\n  build() {\n    Row() {\n      Column() {\n        TestContent()\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新建Attribute_util .h用于设置组件属性。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#ifndef MYAPPLICATION_ATTRIBUTE_UTIL_H\n#define MYAPPLICATION_ATTRIBUTE_UTIL_H\n#include <arkui/native_node.h>\n#include <cstdint>\n#include <string>\n  class AttributeUtil {\n    public:\n    ArkUI_NativeNodeAPI_1 *api_;\n    ArkUI_NodeHandle node_;\n    AttributeUtil(ArkUI_NodeHandle node, ArkUI_NativeNodeAPI_1 *api) {\n    this->node_ = node;\n    api_ = api;\n  }\nint32_t width(float width) {\n  ArkUI_NumberValue NODE_WIDTH_value[] = {width};\n  ArkUI_AttributeItem NODE_WIDTH_Item = {NODE_WIDTH_value, 1};\n  return api_->setAttribute(node_, NODE_WIDTH, &NODE_WIDTH_Item);\n}\nint32_t height(float height) {\n  ArkUI_NumberValue NODE_HEIGHT_value[] = {height};\n  ArkUI_AttributeItem NODE_HEIGHT_Item = {NODE_HEIGHT_value, 1};\n  return api_->setAttribute(node_, NODE_HEIGHT, &NODE_HEIGHT_Item);\n}\n\nint32_t buttonLabel(std::string text) {\n  ArkUI_AttributeItem NODE_TRANSLATE_ITEM_LABEL = {.string = text.c_str()};\n  return api_->setAttribute(node_, NODE_BUTTON_LABEL, &NODE_TRANSLATE_ITEM_LABEL);\n}\n\nint32_t text(std::string str) {\n  ArkUI_AttributeItem TEXT_ITEM = {.string = str.c_str()};\n  return api_->setAttribute(node_, NODE_TEXT_CONTENT, &TEXT_ITEM);\n}\n\nint32_t visibility(int isSHow) {\n  ArkUI_NumberValue NODE_VISIBILITY_ITEM_VALUE = {.i32 = isSHow};\n  ArkUI_AttributeItem NODE_VISIBILITY__ITEM = {&NODE_VISIBILITY_ITEM_VALUE, 1};\n  return api_->setAttribute(node_, NODE_VISIBILITY, &NODE_VISIBILITY__ITEM);\n}\n\nint32_t margin(float value) {\n  ArkUI_NumberValue NODE_margin_ITEM_VALUE = {.f32 = value};\n  ArkUI_AttributeItem NODE_MARGIN_ITEM = {&NODE_margin_ITEM_VALUE, 1};\n  return api_->setAttribute(node_, NODE_MARGIN, &NODE_MARGIN_ITEM);\n}\n};\n\n#endif // MYAPPLICATION_ATTRIBUTE_UTIL_H\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在nai_init.cpp中，挂载Native节点。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"napi/native_api.h\"\n#include \"AttributeUtil.h\"\n#include <arkui/native_interface.h>\n#include <arkui/native_node.h>\n#include <arkui/native_node_napi.h>\n#include <hilog/log.h>\n\nstatic ArkUI_NativeNodeAPI_1 *nodeAPI = nullptr;\nstatic ArkUI_NodeHandle textNode = nullptr;\nstatic bool showText = false;\n\nnamespace Event {\n  void onClickFunc(ArkUI_NodeEvent *event) {\n    AttributeUtil textAttr(textNode, nodeAPI);\n    if (showText) {\n      textAttr.visibility(0);\n    } else {\n      textAttr.visibility(1);\n    }\n    showText = !showText;\n    bool isOnRenderTree = false;\n    OH_ArkUI_NativeModule_IsInRenderState(textNode, &isOnRenderTree);\n    OH_LOG_Print(LOG_APP, LOG_INFO, 1, \"event\",\"on render tree statie is %{public}d\", isOnRenderTree);\n  }\n} // namespace Event\n\n\nstatic napi_value NAPI_Global_createNativeNode(napi_env env, napi_callback_info info) {\n  size_t argc = 1;\n  napi_value args[1] = {nullptr};\n  napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n  ArkUI_NodeContentHandle contentHandle;\n  OH_ArkUI_GetNodeContentFromNapiValue(env, args[0], &contentHandle);\n  OH_ArkUI_GetModuleInterface(ARKUI_NATIVE_NODE, ArkUI_NativeNodeAPI_1, nodeAPI);\n  auto columnTest = nodeAPI->createNode(ARKUI_NODE_COLUMN);\n  AttributeUtil columnAttr(columnTest, nodeAPI);\n  columnAttr.width(300);\n  columnAttr.height(300);\n  auto buttonNode = nodeAPI->createNode(ARKUI_NODE_BUTTON);\n  nodeAPI->addChild(columnTest, buttonNode);\n  AttributeUtil buttonAttr(buttonNode, nodeAPI);\n  buttonAttr.width(200);\n  buttonAttr.height(30);\n  buttonAttr.margin(20);\n  buttonAttr.buttonLabel(\"change text visibility\");\n  nodeAPI->registerNodeEvent(buttonNode, NODE_ON_CLICK, 1, nullptr);\n  nodeAPI->registerNodeEventReceiver(Event::onClickFunc);\n  textNode = nodeAPI->createNode(ARKUI_NODE_TEXT);\n  nodeAPI->addChild(columnTest, textNode);\n  AttributeUtil textAttr(textNode, nodeAPI);\n  textAttr.text(\"hello word\");\n  OH_ArkUI_NodeContent_AddNode(contentHandle, columnTest);\n  return nullptr;\n}\nEXTERN_C_START\nstatic napi_value Init(napi_env env, napi_value exports) {\n  napi_property_descriptor desc[] = {\n    {\"createNativeNode\", nullptr, NAPI_Global_createNativeNode, nullptr, nullptr, nullptr, napi_default, nullptr}};\nnapi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);\nreturn exports;\n}\nEXTERN_C_END\n\nstatic napi_module demoModule = {\n  .nm_version = 1,\n  .nm_flags = 0,\n  .nm_filename = nullptr,\n  .nm_register_func = Init,\n  .nm_modname = \"entry\",\n  .nm_priv = ((void *)0),\n  .reserved = {0},\n};\n\nextern \"C\" __attribute__((constructor)) void RegisterEntryModule(void) { napi_module_register(&demoModule); }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "运行程序，点击change text visibility后打印text是否在渲染树上。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(498569)/* ["default"] */.A) + "",
            width: "377",
            height: "195"
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
1292(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478073-6cd480990695ff9b84654c29905ae429.png");

},
907834(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
731267(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958072-a007490eb22360e34f16ba49644d024f.gif");

},
498569(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798424-5c535f7483f7928f769fa441b8776567.png");

},
823622(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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