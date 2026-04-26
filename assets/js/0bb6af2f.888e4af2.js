"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["200689"], {
239261(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_user_defined_capabilities_arkts_nodes_arkts_user_defined_arktsnode_crosslanguage_arkts_user_defined_arktsnode_crosslanguage_md_0bb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-user-defined-capabilities-arkts-nodes-arkts-user-defined-arktsnode-crosslanguage-arkts-user-defined-arktsnode-crosslanguage-md-0bb.json
var site_docs_arkui_arkts_ui_development_arkts_user_defined_capabilities_arkts_nodes_arkts_user_defined_arktsnode_crosslanguage_arkts_user_defined_arktsnode_crosslanguage_md_0bb_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-crosslanguage/arkts-user-defined-arktsnode-crosslanguage","title":"设置自定义节点跨语言属性","description":"概述","source":"@site/docs/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-crosslanguage/arkts-user-defined-arktsnode-crosslanguage.md","sourceDirName":"arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-crosslanguage","slug":"/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-crosslanguage/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-crosslanguage/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"设置自定义节点跨语言属性","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-user-defined-arktsnode-crosslanguage","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自定义声明式节点 (BuilderNode)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode/"},"next":{"title":"使用画布绘制自定义图形 (Canvas)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-draw/arkts-drawing-customization-on-canvas/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-crosslanguage/arkts-user-defined-arktsnode-crosslanguage.md


const frontMatter = {
	title: '设置自定义节点跨语言属性',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-user-defined-arktsnode-crosslanguage',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '设置自定义节点跨语言属性';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "设置和获取跨语言配置",
  "id": "设置和获取跨语言配置",
  "level": 2
}, {
  "value": "跨语言设置节点属性",
  "id": "跨语言设置节点属性",
  "level": 2
}, {
  "value": "支持跨语言设置属性的节点类型",
  "id": "支持跨语言设置属性的节点类型",
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
        id: "设置自定义节点跨语言属性",
        children: "设置自定义节点跨语言属性"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkUI支持在前端使用ArkTS语言创建命令式节点，即", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode",
        children: "FrameNode"
      }), "节点，也可以在Native侧使用C语言创建命令式节点，并且可以混合使用两类节点构建页面。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对上述场景，ArkUI提供命令式节点跨语言属性设置功能，即使用ArkTS语言创建的命令式节点，可以在Native侧进行属性设置。使用C语言创建的节点，可以在ArkTS侧进行属性设置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(301723)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["下述示例中，需要先进行Native侧配置，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-use-ndk/ndk-access-the-arkts-page",
        children: "接入ArkTS页面"
      }), "完成。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置和获取跨语言配置",
      children: "设置和获取跨语言配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "跨语言指的是跨越ArkTS语言和C语言。跨语言配置指的是命令式节点上对于跨语言操作的权限配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#setcrosslanguageoptions15",
        children: "setCrossLanguageOptions"
      }), "与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodeutils_setcrosslanguageoption",
        children: "OH_ArkUI_NodeUtils_SetCrossLanguageOption"
      }), "接口设置当前节点的跨语言配置。如果当前节点无法修改或设置跨语言配置，则会抛出异常信息。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getcrosslanguageoptions15",
        children: "getCrossLanguageOptions"
      }), "与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodeutils_getcrosslanguageoption",
        children: "OH_ArkUI_NodeUtils_GetCrossLanguageOption"
      }), "接口获取当前节点的跨语言配置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例描述了如何设置和获取ArkTS命令式节点的跨语言配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { NodeController, UIContext, FrameNode, typeNode, BuilderNode } from '@kit.ArkUI';\n\n@Builder\nfunction insideScroll() {\n  Column() {\n    ForEach([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (item: number) => {\n      Text(item.toString())\n        .width(\"75%\")\n        .height(50)\n        .backgroundColor(0xFFFFFF)\n        .borderRadius(15)\n        .fontSize(30)\n        .textAlign(TextAlign.Center)\n        .margin({ top: 10 })\n    }, (item: string) => item)\n  }\n  .width(\"100%\")\n}\n\nclass MyNodeController extends NodeController {\n  uiContext: UIContext | null = null;\n  rootNode: FrameNode | null = null;\n  scrollNode: FrameNode | null = null;\n  scroller: Scroller = new Scroller();\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.uiContext = uiContext;\n    this.rootNode = new FrameNode(uiContext);\n    this.rootNode.commonAttribute.width(\"80%\").height(\"50%\").borderWidth(2).margin(15);\n    const scroll = typeNode.createNode(uiContext, 'Scroll');\n    scroll.initialize(this.scroller).id(\"scroll\");\n    this.scrollNode = scroll;\n    this.rootNode.appendChild(this.scrollNode);\n    const builderNode = new BuilderNode(uiContext);\n    builderNode.build(wrapBuilder(insideScroll));\n    this.scrollNode?.appendChild(builderNode.getFrameNode());\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct CrossLanguage {\n  myNodeController: MyNodeController = new MyNodeController()\n  @State attributeSetting: boolean = false;\n  @State getCrossLanguageOptions: string = '{\"attributeSetting\": false}';\n\n  build() {\n    Scroll() {\n      Column({ space: 15 }) {\n        Column() {\n          Scroll() {\n            Column() {\n              NodeContainer(this.myNodeController)\n              Button(\"setCrossLanguageOptions\").margin({ bottom: 15})\n                .onClick(() => {\n                  this.attributeSetting = !this.attributeSetting;\n                  this.myNodeController.scrollNode?.setCrossLanguageOptions({\n                    attributeSetting: this.attributeSetting\n                  });\n                  // 若attributeSetting为true，表示scrollNode支持通过非ArkTS语言进行属性设置，否则为不支持\n                  this.getCrossLanguageOptions = JSON.stringify(this.myNodeController.scrollNode?.getCrossLanguageOptions());\n                })\n              Text(\"CrossLanguageOptions: \" + this.getCrossLanguageOptions)\n            }\n          }.scrollBarColor(Color.Transparent)\n        }\n        .width('100%')\n        .height(350)\n        .backgroundColor(0xeeeeee)\n        .id('Part_TS')\n      }\n      .width('100%')\n    }.scrollBarColor(Color.Transparent)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "跨语言设置节点属性",
      children: "跨语言设置节点属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["获取节点后，若节点的跨语言配置设置为允许属性设置，ArkTS侧可利用getAttribute接口获取修改Native节点属性的对象，Native侧可利用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#setattribute",
        children: "setAttribute"
      }), "接口修改ArkTS节点属性。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下示例创建了ArkTS的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#scroll12",
        children: "Scroll"
      }), "类型节点，并在Native侧修改了Scroll的属性。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在ArkTS侧创建组件类型为Scroll的命令式节点。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Index.ets\nimport nativeNode from 'libentry.so';\nimport { NodeController, UIContext, FrameNode, typeNode, BuilderNode, NodeContent } from '@kit.ArkUI';\n\n@Builder\nfunction insideScroll() {\n  Column() {\n    ForEach([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (item: number) => {\n      Text(item.toString())\n        .width(\"75%\")\n        .height(50)\n        .backgroundColor(0xFFFFFF)\n        .borderRadius(15)\n        .fontSize(30)\n        .textAlign(TextAlign.Center)\n        .margin({ top: 10 })\n    }, (item: string) => item)\n  }\n  .width(\"100%\")\n}\n\nclass MyNodeController extends NodeController {\n  uiContext: UIContext | null = null;\n  rootNode: FrameNode | null = null;\n  scrollNode: FrameNode | null = null;\n  scroller: Scroller = new Scroller();\n\n  makeNode(uiContext: UIContext): FrameNode | null {\n    this.uiContext = uiContext;\n    this.rootNode = new FrameNode(uiContext);\n    this.rootNode.commonAttribute.width(\"80%\").height(\"50%\").borderWidth(2).margin(15);\n    const scroll = typeNode.createNode(uiContext, 'Scroll');\n    scroll.initialize(this.scroller).id(\"scroll\");\n    this.scrollNode = scroll;\n    this.rootNode.appendChild(this.scrollNode);\n    const builderNode = new BuilderNode(uiContext);\n    builderNode.build(wrapBuilder(insideScroll));\n    this.scrollNode?.appendChild(builderNode.getFrameNode());\n    return this.rootNode;\n  }\n}\n\n@Entry\n@Component\nstruct CrossLanguage {\n  private myNodeController: MyNodeController = new MyNodeController();\n  @State attributeSetting: boolean = false;\n  @State getCrossLanguageOptions: string = '{\"attributeSetting\": false}';\n  private rootSlot = new NodeContent();\n\n  aboutToAppear(): void {\n    nativeNode.createNativeRoot(this.rootSlot);\n  }\n\n  build() {\n    Scroll() {\n      Column({ space: 15 }) {\n        Column() {\n          Scroll() {\n            Column() {\n              NodeContainer(this.myNodeController)\n              Button(\"setCrossLanguageOptions\").margin({ bottom: 15})\n                .onClick(() => {\n                  this.attributeSetting = !this.attributeSetting;\n                  this.myNodeController.scrollNode?.setCrossLanguageOptions({\n                    attributeSetting: this.attributeSetting\n                  });\n                  // 若attributeSetting为true，表示scrollNode支持通过非ArkTS语言进行属性设置，否则为不支持\n                  this.getCrossLanguageOptions = JSON.stringify(this.myNodeController.scrollNode?.getCrossLanguageOptions());\n                })\n              Text(\"CrossLanguageOptions: \" + this.getCrossLanguageOptions)\n            }\n          }.scrollBarColor(Color.Transparent)\n        }\n        .width('100%')\n        .height(350)\n        .backgroundColor(0xeeeeee)\n        .id('Part_TS')\n\n        Column() {\n          ContentSlot(this.rootSlot)\n        }\n        .width(500)\n        .height(400)\n        .id('Part_C')\n      }\n      .width('100%')\n    }.scrollBarColor(Color.Transparent)\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "新建CrossLanguageExample.h文件，在其中获取到目标节点（该节点在ArkTS侧创建），并设置属性。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// CrossLanguageExample.h\n#ifndef MYAPPLICATION_CROSSLANGUAGEEXAMPLE_H\n#define MYAPPLICATION_CROSSLANGUAGEEXAMPLE_H\n\n#include \"ArkUINode.h\"\n#include <hilog/log.h>\n\nnamespace NativeModule {\n\nstd::shared_ptr<ArkUIBaseNode> CreateCrossLanguageExample() {\n    auto nodeAPI = NativeModuleInstance::GetInstance()->GetNativeNodeAPI();\n    \n    // 创建根节点Scroll\n    ArkUI_NodeHandle scroll = nodeAPI->createNode(ARKUI_NODE_SCROLL);\n    ArkUI_NumberValue length_value[] = {{.f32 = 480}};\n    ArkUI_AttributeItem length_item = {length_value, sizeof(length_value) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(scroll, NODE_WIDTH, &length_item);\n    ArkUI_NumberValue length_value1[] = {{.f32 = 650}};\n    ArkUI_AttributeItem length_item1 = {length_value1, sizeof(length_value1) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(scroll, NODE_HEIGHT, &length_item1);\n    ArkUI_AttributeItem scroll_id = {.string = \"Scroll_CAPI\"};\n    nodeAPI->setAttribute(scroll, NODE_ID, &scroll_id);\n    \n    // 创建Column\n    ArkUI_NodeHandle column = nodeAPI->createNode(ARKUI_NODE_COLUMN);\n    ArkUI_NumberValue value[] = {480};\n    ArkUI_AttributeItem item = {value, sizeof(value) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(column, NODE_WIDTH, &item);\n    ArkUI_NumberValue column_bc[] = {{.u32 = 0xFFF00BB}};\n    ArkUI_AttributeItem column_item = {column_bc, 1};\n    nodeAPI->setAttribute(column, NODE_BACKGROUND_COLOR, &column_item);\n    ArkUI_AttributeItem column_id = {.string = \"Column_CAPI\"};\n    nodeAPI->setAttribute(column, NODE_ID, &column_id);\n    \n    // 创建Text\n    ArkUI_NodeHandle text0 = nodeAPI->createNode(ARKUI_NODE_TEXT);\n    ArkUI_NumberValue text_width[] = {300};\n    ArkUI_AttributeItem text_item0 = {text_width, sizeof(text_width) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(text0, NODE_WIDTH, &text_item0);\n    ArkUI_NumberValue text_height[] = {50};\n    ArkUI_AttributeItem text_item1 = {text_height, sizeof(text_height) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(text0, NODE_HEIGHT, &text_item1);\n    ArkUI_AttributeItem text_item = {.string = \"C设置TS创建的节点属性\"};\n    nodeAPI->setAttribute(text0, NODE_TEXT_CONTENT, &text_item);\n    ArkUI_NumberValue margin[] = {10};\n    ArkUI_AttributeItem item_margin = {margin, sizeof(margin) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(text0, NODE_MARGIN, &item_margin);\n    \n    // 创建Row\n    ArkUI_NodeHandle row0 = nodeAPI->createNode(ARKUI_NODE_ROW);\n    ArkUI_NumberValue width_value[] = {{.f32=330}};\n    ArkUI_AttributeItem width_item = {width_value, sizeof(width_value) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(row0, NODE_WIDTH, &width_item);\n    nodeAPI->setAttribute(row0, NODE_HEIGHT, &text_item1);\n    nodeAPI->setAttribute(row0, NODE_MARGIN, &item_margin);\n    \n    // 创建Button\n    ArkUI_NodeHandle bt0 = nodeAPI->createNode(ARKUI_NODE_BUTTON);\n    ArkUI_NumberValue btn_width[] = {150};\n    ArkUI_AttributeItem btn_item0 = {btn_width, sizeof(btn_width) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(bt0, NODE_WIDTH, &btn_item0);\n    nodeAPI->setAttribute(bt0, NODE_HEIGHT, &text_item1);\n    nodeAPI->setAttribute(bt0, NODE_MARGIN, &item_margin);\n    ArkUI_AttributeItem bt0_item = {.string = \"scrollBarColor\"};\n    nodeAPI->setAttribute(bt0, NODE_BUTTON_LABEL, &bt0_item);\n    nodeAPI->registerNodeEvent(bt0, NODE_ON_CLICK, 0, nullptr);\n    \n    ArkUI_NodeHandle bt1 = nodeAPI->createNode(ARKUI_NODE_BUTTON);\n    nodeAPI->setAttribute(bt1, NODE_WIDTH, &btn_item0);\n    nodeAPI->setAttribute(bt1, NODE_HEIGHT, &text_item1);\n    nodeAPI->setAttribute(bt1, NODE_MARGIN, &item_margin);\n    ArkUI_AttributeItem bt1_item = {.string = \"scrollBarWidth\"};\n    nodeAPI->setAttribute(bt1, NODE_BUTTON_LABEL, &bt1_item);\n    nodeAPI->registerNodeEvent(bt1, NODE_ON_CLICK, 1, nullptr);\n    \n    // 注册事件\n    auto onClick = [](ArkUI_NodeEvent *event) {\n        ArkUI_NodeHandle node = OH_ArkUI_NodeEvent_GetNodeHandle(event);\n        auto nodeAPI = NativeModuleInstance::GetInstance()->GetNativeNodeAPI();\n        \n        if (OH_ArkUI_NodeEvent_GetTargetId(event) == 0) {  // scrollBarColor\n            ArkUI_NodeHandle node_ptr = nullptr;\n            OH_ArkUI_NodeUtils_GetAttachedNodeHandleById(\"scroll\", &node_ptr);\n            try {\n                ArkUI_NumberValue scroll_color_value[] = {{.u32 = 0xff00ff00}};\n                ArkUI_AttributeItem scroll_color_item = {scroll_color_value, sizeof(scroll_color_value) / sizeof(ArkUI_NumberValue)};\n                nodeAPI->setAttribute(node_ptr, NODE_SCROLL_BAR_COLOR, &scroll_color_item);\n            } catch (...) {\n                OH_LOG_Print(LOG_APP, LOG_ERROR, 0xFF00, \"CrossLanguageExample\", \"crossLanguage setAttribute error\");\n            }\n        }\n        \n        if (OH_ArkUI_NodeEvent_GetTargetId(event) == 1) {  // scrollBarWidth\n            ArkUI_NodeHandle node_ptr = nullptr;\n            OH_ArkUI_NodeUtils_GetAttachedNodeHandleById(\"scroll\", &node_ptr);\n            try {\n                ArkUI_NumberValue scroll_width_value[] = {{20}};\n                ArkUI_AttributeItem scroll_width_item = {scroll_width_value, sizeof(scroll_width_value) / sizeof(ArkUI_NumberValue)};\n                nodeAPI->setAttribute(node_ptr, NODE_SCROLL_BAR_WIDTH, &scroll_width_item);\n            } catch (...) {\n                OH_LOG_Print(LOG_APP, LOG_ERROR, 0xFF00, \"CrossLanguageExample\", \"crossLanguage setAttribute error\");\n            }\n        }\n    };\n    nodeAPI->registerNodeEventReceiver(onClick);\n    \n    // 节点添加\n    nodeAPI->addChild(scroll, column);\n    nodeAPI->addChild(column, text0);\n    nodeAPI->addChild(column, row0);\n    nodeAPI->addChild(row0, bt0);\n    nodeAPI->addChild(row0, bt1);\n    \n    return std::make_shared<ArkUINode>(scroll);\n}\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_CROSSLANGUAGEEXAMPLE_H\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在NativeEntry.cpp中，挂载Native节点。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// NativeEntry.cpp\n\n\n#include <arkui/native_node_napi.h>\n#include <js_native_api.h>\n#include \"NativeEntry.h\"\n#include \"CrossLanguageExample.h\"\n\n\nnamespace NativeModule {\n\n\nnapi_value CreateNativeRoot(napi_env env, napi_callback_info info) {\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n\n\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n\n    // 获取NodeContent\n    ArkUI_NodeContentHandle contentHandle;\n    OH_ArkUI_GetNodeContentFromNapiValue(env, args[0], &contentHandle);\n    NativeEntry::GetInstance()->SetContentHandle(contentHandle);\n\n\n    // 创建节点\n    auto node = CreateCrossLanguageExample();\n\n\n    // 保持Native侧对象到管理类中，维护生命周期。\n    NativeEntry::GetInstance()->SetRootNode(node);\n    return nullptr;\n}\n\n\nnapi_value DestroyNativeRoot(napi_env env, napi_callback_info info) {\n    // 从管理类中释放Native侧对象。\n    NativeEntry::GetInstance()->DisposeRootNode();\n    return nullptr;\n}\n\n\n} // namespace NativeModule\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "修改CMakeLists.txt，添加链接库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// CMakeLists.txt\n# the minimum version of CMake.\ncmake_minimum_required(VERSION 3.5.0)\nproject(CAPI_DEMO)\n\nset(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})\n\nif(DEFINED PACKAGE_FIND_FILE)\n    include(${PACKAGE_FIND_FILE})\nendif()\n\ninclude_directories(${NATIVERENDER_ROOT_PATH}\n                  ${NATIVERENDER_ROOT_PATH}/include)\n\nadd_library(entry SHARED napi_init.cpp NativeEntry.cpp)\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libace_ndk.z.so hilog_ndk.z.so)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "运行程序，在ArkTS侧点击按钮，设置当前attributeSetting为true，在Native侧点击按钮，设置ArkTS侧Scroll组件滚动条的颜色和粗细属性。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(969607)/* ["default"] */.A) + "",
        width: "445",
        height: "722"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持跨语言设置属性的节点类型",
      children: "支持跨语言设置属性的节点类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅以下节点类型支持跨语言设置节点属性。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.th, {
            children: ["ArkTS侧", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#typedframenode12",
              children: "TypedFrameNode"
            }), "类型"]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["Native侧", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodetype",
              children: "ArkUI_NodeType"
            }), "类型"]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ArkTS属性获取接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ArkTS控制器获取/绑定接口"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#button12",
              children: "Button"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_NODE_BUTTON"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getattributebutton20",
              children: "getAttribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#checkbox18",
              children: "Checkbox"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_NODE_CHECKBOX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getattributecheckbox20",
              children: "getAttribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#radio18",
              children: "Radio"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_NODE_RADIO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getattributeradio20",
              children: "getAttribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#slider18",
              children: "Slider"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_NODE_SLIDER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getattributeslider20",
              children: "getAttribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#toggle18",
              children: "Toggle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_NODE_TOGGLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getattributetoggle20",
              children: "getAttribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#progress12",
              children: "Progress"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_NODE_PROGRESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getattributeprogress20",
              children: "getAttribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#loadingprogress12",
              children: "LoadingProgress"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_NODE_LOADING_PROGRESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getattributeloadingprogress20",
              children: "getAttribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#image12",
              children: "Image"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_NODE_IMAGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getattributeimage20",
              children: "getAttribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#xcomponent12",
              children: "XComponent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_NODE_XCOMPONENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getattributexcomponent20",
              children: "getAttribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getController"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#column12",
              children: "Column"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_NODE_COLUMN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getattributecolumn20",
              children: "getAttribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#row12",
              children: "Row"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_NODE_ROW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getattributerow20",
              children: "getAttribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#stack12",
              children: "Stack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_NODE_STACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getattributestack20",
              children: "getAttribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#flex12",
              children: "Flex"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_NODE_FLEX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getattributeflex20",
              children: "getAttribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#relativecontainer12",
              children: "RelativeContainer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_NODE_RELATIVE_CONTAINER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getattributerelativecontainer20",
              children: "getAttribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#swiper12",
              children: "Swiper"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_NODE_SWIPER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getattributeswiper20",
              children: "getAttribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#bindcontrollerswiper20",
              children: "bindController"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#scroll12",
              children: "Scroll"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_NODE_SCROLL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getattributescroll15",
              children: "getAttribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#bindcontrollerscroll15",
              children: "bindController"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#list12",
              children: "List"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_NODE_LIST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getattributelist20",
              children: "getAttribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#bindcontrollerlist20",
              children: "bindController"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#listitem12",
              children: "ListItem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_NODE_LIST_ITEM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getattributelistitem20",
              children: "getAttribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#listitemgroup12",
              children: "ListItemGroup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_NODE_LIST_ITEM_GROUP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getattributelistitemgroup20",
              children: "getAttribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#waterflow12",
              children: "WaterFlow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_NODE_WATER_FLOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getattributewaterflow20",
              children: "getAttribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#bindcontrollerwaterflow20",
              children: "bindController"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#flowitem12",
              children: "FlowItem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_NODE_FLOW_ITEM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getattributeflowitem20",
              children: "getAttribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#grid14",
              children: "Grid"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_NODE_GRID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getattributegrid20",
              children: "getAttribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#bindcontrollergrid20",
              children: "bindController"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#griditem14",
              children: "GridItem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_NODE_GRID_ITEM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getattributegriditem20",
              children: "getAttribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#text12",
              children: "Text"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_NODE_TEXT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getattributetext20",
              children: "getAttribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#bindcontrollertext20",
              children: "bindController"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#textinput12",
              children: "TextInput"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_NODE_TEXT_INPUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getattributetextinput20",
              children: "getAttribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#bindcontrollertextinput20",
              children: "bindController"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#textarea14",
              children: "TextArea"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_NODE_TEXT_AREA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getattributetextarea20",
              children: "getAttribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#bindcontrollertextarea20",
              children: "bindController"
            })
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
301723(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
969607(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478017-72c0d55f08580d5c5cd456af5518d09f.gif");

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