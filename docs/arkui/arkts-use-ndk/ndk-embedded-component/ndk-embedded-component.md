---
title: "通过EmbeddedComponent拉起EmbeddedUIExtensionAbility"
sidebar_position: 14
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-embedded-component
kit: application-framework
last_updated: "2026-04-22"
---

# 通过EmbeddedComponent拉起EmbeddedUIExtensionAbility

ArkUI在Native侧提供的能力是ArkTS的子集，某些能力不会在Native侧提供，例如声明式UI语法、自定义struct组件及UI系统预置UI组件库。

从API version 20开始，ArkUI开发框架提供了Native侧嵌入EmbeddedComponent组件的能力，此能力依赖于[EmbeddedComponent](/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-container-embedded-component/ts-container-embedded-component)机制。EmbeddedComponent用于支持在当前页面嵌入同一应用内其他[EmbeddedUIExtensionAbility](/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-embeddeduiextensionability/js-apis-app-ability-embeddeduiextensionability)提供的UI。EmbeddedUIExtensionAbility在独立进程中运行，负责页面布局和渲染。此功能主要用于有进程隔离需求的模块化开发场景。

![](../../../images/903ef066/note_3.0-zh-cn.png) 

- 使用[OH\_ArkUI\_EmbeddedComponentOption\_Create](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#oh_arkui_embeddedcomponentoption_create)获取[ArkUI\_EmbeddedComponentOption](/ref/arkui-api/arkui-c/arkui-struct/i-arkui-nativemodule-arkui-embeddedcomponentoption/i-arkui-nativemodule-arkui-embeddedcomponentoption)后，可以使用[OH\_ArkUI\_EmbeddedComponentOption\_SetOnError](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#oh_arkui_embeddedcomponentoption_setonerror)设置onError回调，使用[OH\_ArkUI\_EmbeddedComponentOption\_SetOnTerminated](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#oh_arkui_embeddedcomponentoption_setonterminated)设置onTerminated回调。可以使用[OH\_ArkUI\_NodeUtils\_MoveTo](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodeutils_moveto)迁移节点。
- 使用[OH\_ArkUI\_EmbeddedComponentOption\_SetOnTerminated](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#oh_arkui_embeddedcomponentoption_setonterminated)设置onTerminated回调时，返回的want参数，只支持提供方返回的want参数的key，value解析，不支持嵌套解析。
- 在EmbeddedComponent销毁时，调用[OH\_ArkUI\_EmbeddedComponentOption\_Dispose](/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#oh_arkui_embeddedcomponentoption_dispose)释放内存。
- EmbeddedComponent组件需要使用[setAttribute](/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#setattribute)设置宽高才能显示。

本示例展示EmbeddedComponent组件NDK的基础使用方式，ability相关使用请参考[EmbeddedComponent](/ref/arkui-api/arkui-declarative-comp/rendering-drawing/ts-container-embedded-component/ts-container-embedded-component)。示例应用的bundleName为"com.example.embeddeddemo"，同一应用下被拉起的EmbeddedUIExtensionAbility为"ExampleEmbeddedAbility"。本示例仅支持在具有多进程权限的设备上运行，例如PC/2in1。

```
#include <arkui/native_node.h>
#include <arkui/native_type.h>
#include <AbilityKit/ability_base/want.h> //引用元能力want头文件

// 注册事件
void onError(int32_t code, const char *name, const char *message) {}
void onTerminated(int32_t code, AbilityBase_Want *want) {}
const unsigned int LOG_PRINT_DOMAIN = 0xFF00;
#define SIZE_300 300
#define SIZE_401 401
#define SIZE_480 480
// ···
    // 创建节点
    ArkUI_NodeHandle embeddedNode = nodeAPI->createNode(ARKUI_NODE_EMBEDDED_COMPONENT);
    // 设置属性
    AbilityBase_Element Element = {.bundleName = "com.example.uiextensionandaccessibility",
                                   .abilityName = "ExampleEmbeddedAbility",
                                   .moduleName = "entry"};       // 由元能力提供接口
    AbilityBase_Want *want = OH_AbilityBase_CreateWant(Element); // 由元能力提供接口
    if (want == nullptr) {
        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, "AbilityBase_Want", "~PluginManager");
    }
    ArkUI_AttributeItem itemobjwant = {.object = want};
    nodeAPI->setAttribute(embeddedNode, NODE_EMBEDDED_COMPONENT_WANT, &itemobjwant);

    auto embeddedNode_option = OH_ArkUI_EmbeddedComponentOption_Create();
    auto onErrorCallback = onError;
    auto onTerminatedCallback = onTerminated;
    OH_ArkUI_EmbeddedComponentOption_SetOnError(embeddedNode_option, onErrorCallback);
    OH_ArkUI_EmbeddedComponentOption_SetOnTerminated(embeddedNode_option, onTerminatedCallback);

    ArkUI_AttributeItem itemobjembeddedNode = {.object = embeddedNode_option};
    nodeAPI->setAttribute(embeddedNode, NODE_EMBEDDED_COMPONENT_OPTION, &itemobjembeddedNode);

    // 设置基本属性，如宽高
    ArkUI_NumberValue value[] = {SIZE_480};
    ArkUI_AttributeItem item = {value, sizeof(value) / sizeof(ArkUI_NumberValue)};
    value[0].f32 = SIZE_300;
    nodeAPI->setAttribute(embeddedNode, NODE_WIDTH, &item);
    nodeAPI->setAttribute(embeddedNode, NODE_HEIGHT, &item);

    // 创建Column
    ArkUI_NodeHandle column = nodeAPI->createNode(ARKUI_NODE_COLUMN);
    nodeAPI->setAttribute(column, NODE_WIDTH, &item);
    ArkUI_NumberValue column_bc[] = {{.u32 = 0xFFF00BB}};
    ArkUI_AttributeItem column_item = {column_bc, 1};
    nodeAPI->setAttribute(column, NODE_BACKGROUND_COLOR, &column_item);
    ArkUI_AttributeItem column_id = {.string = "Column_CAPI"};
    nodeAPI->setAttribute(column, NODE_ID, &column_id);

    // 上树
    nodeAPI->addChild(column, embeddedNode);
```
