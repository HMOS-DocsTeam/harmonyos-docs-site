"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["117969"], {
331708(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_use_ndk_arkts_build_layout_ndk_ndk_waterflow_ndk_waterflow_md_f2e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-use-ndk-arkts-build-layout-ndk-ndk-waterflow-ndk-waterflow-md-f2e.json
var site_docs_arkui_arkts_use_ndk_arkts_build_layout_ndk_ndk_waterflow_ndk_waterflow_md_f2e_namespaceObject = JSON.parse('{"id":"arkui/arkts-use-ndk/arkts-build-layout-ndk/ndk-waterflow/ndk-waterflow","title":"使用瀑布流","description":"ArkUI开发框架在NDK接口提供了瀑布流容器组件，通过瀑布流自身的排列规则，将不同大小的\\"项目\\"自上而下如瀑布般紧密布局。","source":"@site/docs/arkui/arkts-use-ndk/arkts-build-layout-ndk/ndk-waterflow/ndk-waterflow.md","sourceDirName":"arkui/arkts-use-ndk/arkts-build-layout-ndk/ndk-waterflow","slug":"/arkui/arkts-use-ndk/arkts-build-layout-ndk/ndk-waterflow/","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/arkts-build-layout-ndk/ndk-waterflow/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用瀑布流","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-waterflow","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用列表","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/arkts-build-layout-ndk/ndk-loading-long-list/"},"next":{"title":"Text组件的文本绘制与显示","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/arkts-build-text-ndk/ndk-styled-string/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-use-ndk/arkts-build-layout-ndk/ndk-waterflow/ndk-waterflow.md


const frontMatter = {
	title: '使用瀑布流',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-waterflow',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用瀑布流';

const assets = {

};



const toc = [{
  "value": "接入ArkTS页面",
  "id": "接入arkts页面",
  "level": 2
}, {
  "value": "使用懒加载",
  "id": "使用懒加载",
  "level": 2
}, {
  "value": "NodeAdapter介绍",
  "id": "nodeadapter介绍",
  "level": 3
}, {
  "value": "实现懒加载适配器",
  "id": "实现懒加载适配器",
  "level": 3
}, {
  "value": "创建分组",
  "id": "创建分组",
  "level": 2
}, {
  "value": "创建瀑布流",
  "id": "创建瀑布流",
  "level": 2
}, {
  "value": "使用瀑布流",
  "id": "使用瀑布流-1",
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
    img: "img",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用瀑布流",
        children: "使用瀑布流"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI开发框架在NDK接口提供了瀑布流容器组件，通过瀑布流自身的排列规则，将不同大小的\"项目\"自上而下如瀑布般紧密布局。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接入arkts页面",
      children: "接入ArkTS页面"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了使用NDK接口构建UI界面，参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-use-ndk/ndk-access-the-arkts-page",
        children: "接入ArkTS页面章节"
      }), "，在ArkTS页面上创建用于Native页面挂载的占位组件，并实现ArkTS侧的NativeNode模块接口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用懒加载",
      children: "使用懒加载"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nodeadapter介绍",
      children: "NodeAdapter介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["NDK中提供了NodeAdapter对象替代ArkTS侧的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-lazyforeach/ts-rendering-control-lazyforeach",
        children: "LazyForEach"
      }), "功能，用于按需生成子组件。详情请参阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-use-ndk/arkts-build-layout-ndk/ndk-loading-long-list#nodeadapter%E4%BB%8B%E7%BB%8D",
        children: "NodeAdapter介绍"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实现懒加载适配器",
      children: "实现懒加载适配器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用FlowItemAdapter类管理懒加载适配器。在类的构造函数中创建NodeAdapter对象，并给NodeAdapter对象设置事件监听器，在类的析构函数中，销毁NodeAdapter对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// FlowItemAdapter.h\n// 懒加载功能代码。\n\n#ifndef MYAPPLICATION_FLOWITEMADAPTER_H\n#define MYAPPLICATION_FLOWITEMADAPTER_H\n\n#include <arkui/native_node.h>\n#include <stack>\n#include <string>\n#include <unordered_set>\n#include <arkui/native_interface.h>\n\nnamespace NativeModule {\nconst int NUM = 100;\nclass FlowItemAdapter {\npublic:\n    FlowItemAdapter()\n    {\n        // 初始化函数指针结构体\n        OH_ArkUI_GetModuleInterface(ARKUI_NATIVE_NODE, ArkUI_NativeNodeAPI_1, nodeApi_);\n        // 创建Adapter对象\n        adapter_ = OH_ArkUI_NodeAdapter_Create();\n        \n        // 初始化懒加载数据。\n        for (int32_t i = 0; i < NUM; i++) {\n            data_.emplace_back(std::to_string(i));\n        }\n        // 设置懒加载数据。\n        OH_ArkUI_NodeAdapter_SetTotalNodeCount(adapter_, data_.size());\n        // 设置事件监听器。\n        OH_ArkUI_NodeAdapter_RegisterEventReceiver(adapter_, this, OnStaticAdapterEvent);\n    }\n\n    ~FlowItemAdapter()\n    {\n        // 释放创建的组件。\n        while (!cachedItems_.empty()) {\n            cachedItems_.pop();\n        }\n        // 释放Adapter相关资源。\n        OH_ArkUI_NodeAdapter_UnregisterEventReceiver(adapter_);\n        OH_ArkUI_NodeAdapter_Dispose(adapter_);\n    }\n\n    ArkUI_NodeAdapterHandle GetAdapter() const { return adapter_; }\n\n    void RemoveItem(int32_t index)\n    {\n        // 删除第index个数据。\n        data_.erase(data_.begin() + index);\n        // 如果index会导致可视区域元素发生可见性变化，则会回调NODE_ADAPTER_EVENT_ON_REMOVE_NODE_FROM_ADAPTER事件删除元素，\n        // 根据是否有新增元素回调NODE_ADAPTER_EVENT_ON_GET_NODE_ID和NODE_ADAPTER_EVENT_ON_ADD_NODE_TO_ADAPTER事件。\n        OH_ArkUI_NodeAdapter_RemoveItem(adapter_, index, 1);\n        // 更新新的数量。\n        OH_ArkUI_NodeAdapter_SetTotalNodeCount(adapter_, data_.size());\n    }\n\n    void InsertItem(int32_t index, const std::string &value)\n    {\n        data_.insert(data_.begin() + index, value);\n        // 如果index会导致可视区域元素发生可见性变化，则会回调NODE_ADAPTER_EVENT_ON_GET_NODE_ID和NODE_ADAPTER_EVENT_ON_ADD_NODE_TO_ADAPTER事件，\n        // 根据是否有删除元素回调NODE_ADAPTER_EVENT_ON_REMOVE_NODE_FROM_ADAPTER事件。\n        OH_ArkUI_NodeAdapter_InsertItem(adapter_, index, 1);\n        // 更新新的数量。\n        OH_ArkUI_NodeAdapter_SetTotalNodeCount(adapter_, data_.size());\n    }\n\n    void MoveItem(int32_t oldIndex, int32_t newIndex)\n    {\n        auto temp = data_[oldIndex];\n        data_.insert(data_.begin() + newIndex, temp);\n        data_.erase(data_.begin() + oldIndex);\n        // 移到位置如果未发生可视区域内元素的可见性变化，则不回调事件，反之根据新增和删除场景回调对应的事件。\n        OH_ArkUI_NodeAdapter_MoveItem(adapter_, oldIndex, newIndex);\n    }\n\n    void ReloadItem(int32_t index, const std::string &value)\n    {\n        data_[index] = value;\n        // 如果index位于可视区域内，先回调NODE_ADAPTER_EVENT_ON_REMOVE_NODE_FROM_ADAPTER删除老元素，\n        // 再回调NODE_ADAPTER_EVENT_ON_GET_NODE_ID和NODE_ADAPTER_EVENT_ON_ADD_NODE_TO_ADAPTER事件。\n        OH_ArkUI_NodeAdapter_ReloadItem(adapter_, index, 1);\n    }\n\n    void ReloadAllItem()\n    {\n        std::reverse(data_.begin(), data_.end());\n        // 全部重新加载场景下，会回调NODE_ADAPTER_EVENT_ON_GET_NODE_ID接口获取新的组件ID，\n        // 根据新的组件ID进行对比，ID不发生变化的进行复用，\n        // 针对新增ID的元素，调用NODE_ADAPTER_EVENT_ON_ADD_NODE_TO_ADAPTER事件创建新的组件，\n        // 然后判断老数据中遗留的未使用ID，调用NODE_ADAPTER_EVENT_ON_REMOVE_NODE_FROM_ADAPTER删除老元素。\n        OH_ArkUI_NodeAdapter_ReloadAllItems(adapter_);\n    }\n\nprivate:\n    static void OnStaticAdapterEvent(ArkUI_NodeAdapterEvent *event)\n    {\n        // 获取实例对象，回调实例事件。\n        auto itemAdapter = reinterpret_cast<FlowItemAdapter *>(OH_ArkUI_NodeAdapterEvent_GetUserData(event));\n        itemAdapter->OnAdapterEvent(event);\n    }\n\n    void OnAdapterEvent(ArkUI_NodeAdapterEvent *event)\n    {\n        auto type = OH_ArkUI_NodeAdapterEvent_GetType(event);\n        switch (type) {\n            case NODE_ADAPTER_EVENT_ON_GET_NODE_ID:\n                OnGetChildId(event);\n                break;\n            case NODE_ADAPTER_EVENT_ON_ADD_NODE_TO_ADAPTER:\n                OnCreateNewChild(event);\n                break;\n            case NODE_ADAPTER_EVENT_ON_REMOVE_NODE_FROM_ADAPTER:\n                OnDisposeChild(event);\n                break;\n            default:\n                break;\n        }\n    }\n    \n    void OnGetChildId(ArkUI_NodeAdapterEvent *event)\n    {\n        auto index = OH_ArkUI_NodeAdapterEvent_GetItemIndex(event);\n        // 设置生成组件的唯一标识符。\n        auto hash = std::hash<std::string>();\n        OH_ArkUI_NodeAdapterEvent_SetNodeId(event, hash(data_[index]));\n    }\n    \n    void OnCreateNewChild(ArkUI_NodeAdapterEvent *event)\n    {\n        auto index = OH_ArkUI_NodeAdapterEvent_GetItemIndex(event);\n        ArkUI_NodeHandle flowItem = nullptr;\n        if (!cachedItems_.empty()) {\n            // 复用缓存\n            flowItem = cachedItems_.top();\n            cachedItems_.pop();\n            // 更新数据\n            auto *text = nodeApi_->getFirstChild(flowItem);\n            ArkUI_AttributeItem item{nullptr, 0, data_[index].c_str()};\n            nodeApi_->setAttribute(text, NODE_TEXT_CONTENT, &item);\n        } else {\n            // 重新创建。\n            auto *text = nodeApi_->createNode(ARKUI_NODE_TEXT);\n            ArkUI_AttributeItem item{nullptr, 0, data_[index].c_str()};\n            nodeApi_->setAttribute(text, NODE_TEXT_CONTENT, &item);\n            flowItem = nodeApi_->createNode(ARKUI_NODE_FLOW_ITEM);\n            ArkUI_NumberValue value[] = {100};\n            ArkUI_AttributeItem height{value, 1};\n            nodeApi_->setAttribute(flowItem, NODE_HEIGHT, &height);\n            value[0] = {1};\n            ArkUI_AttributeItem width{value, 1};\n            nodeApi_->setAttribute(flowItem, NODE_WIDTH_PERCENT, &width);\n            value[0] = {.u32 = 0xFFD3D3D3};\n            ArkUI_AttributeItem backgroundColor{value, 1};\n\n            nodeApi_->setAttribute(flowItem, NODE_BACKGROUND_COLOR, &backgroundColor);\n            nodeApi_->addChild(flowItem, text);\n        }\n        OH_ArkUI_NodeAdapterEvent_SetItem(event, flowItem);\n    }\n    \n    void OnDisposeChild(ArkUI_NodeAdapterEvent *event)\n    {\n        auto *node = OH_ArkUI_NodeAdapterEvent_GetRemovedNode(event);\n        // 缓存节点\n        cachedItems_.emplace(node);\n    }\n\n    std::vector<std::string> data_;\n    ArkUI_NativeNodeAPI_1 *nodeApi_ = nullptr;\n    ArkUI_NodeAdapterHandle adapter_ = nullptr;\n\n    // 管理回收复用组件池。\n    std::stack<ArkUI_NodeHandle> cachedItems_;\n};\n\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_FLOWITEMADAPTER_H\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建分组",
      children: "创建分组"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用WaterflowSection类管理", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow",
        children: "WaterFlow"
      }), "中的分组，其中SectionOption用于描述一个分段的各项配置信息。在类的构造函数中创建", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/pi-arkui-nativemodule-arkui-waterflowsectionoption/pi-arkui-nativemodule-arkui-waterflowsectionoption",
        children: "ArkUI_WaterFlowSectionOption"
      }), "对象，在析构函数中将其销毁。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// WaterflowSection.h\n\n#ifndef MYAPPLICATION_WATERFLOWSECTION_H\n#define MYAPPLICATION_WATERFLOWSECTION_H\n\n#include <arkui/native_node.h>\n#include <hilog/log.h>\n\nnamespace NativeModule {\n\nstruct SectionOption {\n    int32_t itemsCount = 0;\n    int32_t crossCount;\n    float columnsGap;\n    float rowsGap;\n    // {上外边距，右外边距，下外边距，左外边距}\n    ArkUI_Margin margin{0, 0, 0, 0};\n    float (*onGetItemMainSizeByIndex)(int32_t itemIndex);\n    void *userData;\n};\n\nclass WaterflowSection {\npublic:\n    WaterflowSection() : sectionOptions_(OH_ArkUI_WaterFlowSectionOption_Create()){};\n    \n    ~WaterflowSection()\n    {\n        OH_ArkUI_WaterFlowSectionOption_Dispose(sectionOptions_);\n    }\n\n    void SetSection(ArkUI_WaterFlowSectionOption *sectionOptions, int32_t index, SectionOption section)\n    {\n        OH_ArkUI_WaterFlowSectionOption_SetItemCount(sectionOptions, index, section.itemsCount);\n        OH_ArkUI_WaterFlowSectionOption_SetCrossCount(sectionOptions, index, section.crossCount);\n        OH_ArkUI_WaterFlowSectionOption_SetColumnGap(sectionOptions, index, section.columnsGap);\n        OH_ArkUI_WaterFlowSectionOption_SetRowGap(sectionOptions, index, section.rowsGap);\n        OH_ArkUI_WaterFlowSectionOption_SetMargin(sectionOptions, index, section.margin.top, section.margin.right,\n                                                  section.margin.bottom, section.margin.left);\n        OH_ArkUI_WaterFlowSectionOption_RegisterGetItemMainSizeCallbackByIndex(sectionOptions, index,\n                                                                               section.onGetItemMainSizeByIndex);\n    }\n    \n    ArkUI_WaterFlowSectionOption *GetSectionOptions() const\n    {\n        return sectionOptions_;\n    }\n    \n    void PrintSectionOptions()\n    {\n        int32_t sectionCnt = OH_ArkUI_WaterFlowSectionOption_GetSize(sectionOptions_);\n        for (int32_t i = 0; i < sectionCnt; i++) {\n            ArkUI_Margin margin = OH_ArkUI_WaterFlowSectionOption_GetMargin(sectionOptions_, i);\n            OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, \"CreateWaterflowExample\",\n                         \"Section[%{public}d].margin:{%{public}f, %{public}f, %{public}f, %{public}f}\", i, margin.top,\n                         margin.right, margin.bottom, margin.left);\n        }\n    }\n\nprivate:\n    ArkUI_WaterFlowSectionOption *sectionOptions_ = nullptr;\n};\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_WATERFLOWSECTION_H\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建瀑布流",
      children: "创建瀑布流"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用ArkUIWaterflowNode类管理Waterflow。支持通过SetLazyAdapter为其设置一个FlowItemAdapter，通过SetSection为其设置分段。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// waterflow.h\n#ifndef MYAPPLICATION_WATERFLOW_H\n#define MYAPPLICATION_WATERFLOW_H\n  \n#include \"FlowItemAdapter.h\"\n#include \"WaterflowSection.h\"\n#include \"ArkUINode.h\"\n  \nnamespace NativeModule {\n  \nclass ArkUIWaterflowNode : public ArkUINode {\npublic:\n    ArkUIWaterflowNode()\n        : ArkUINode(CreateWaterflowNode()) {}\n  \n    ~ArkUIWaterflowNode() override\n    {\n        // 先卸载 adapter\n        if (adapter_ && nativeModule_) {\n            nativeModule_->resetAttribute(handle_, NODE_WATER_FLOW_NODE_ADAPTER);\n            adapter_.reset();\n        }\n        // 销毁分段\n        section_.reset();\n        // 基类会自动 dispose handle_\n    }\n\n    void SetLazyAdapter(const std::shared_ptr<FlowItemAdapter> &adapter)\n    {\n        ArkUI_AttributeItem item{nullptr, 0, nullptr, adapter->GetAdapter()};\n        nativeModule_->setAttribute(handle_, NODE_WATER_FLOW_NODE_ADAPTER, &item);\n        adapter_ = adapter;\n    }\n  \n    void SetSection(const std::shared_ptr<WaterflowSection> &section)\n    {\n        if (!section->GetSectionOptions()) {\n            return;\n        }\n        ArkUI_NumberValue start[] = {{.i32 = 0}};\n        ArkUI_AttributeItem optionsItem = {start, 1, nullptr, section->GetSectionOptions()};\n        nativeModule_->setAttribute(handle_, NODE_WATER_FLOW_SECTION_OPTION, &optionsItem);\n        section_ = section;\n    }\n  \n    std::shared_ptr<WaterflowSection> GetWaterflowSection() { return section_; }\n  \nprivate:\n    static ArkUI_NodeHandle CreateWaterflowNode()\n    {\n        ArkUI_NativeNodeAPI_1* api = nullptr;\n        OH_ArkUI_GetModuleInterface(ARKUI_NATIVE_NODE, ArkUI_NativeNodeAPI_1, api);\n        if (!api) {\n            return nullptr;\n        }\n        return api->createNode(ARKUI_NODE_WATER_FLOW);\n    }\n  \n    std::shared_ptr<WaterflowSection> section_ = nullptr;\n    std::shared_ptr<FlowItemAdapter> adapter_;\n};\n  \n} // namespace NativeModule\n  \n#endif // MYAPPLICATION_WATERFLOW_H\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用瀑布流-1",
      children: "使用瀑布流"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个ArkUIWaterflowNode类的实例，设置其宽高，并绑定NodeAdapter和分段。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// CreateWaterflowExample.h\n\n#ifndef MYAPPLICATION_CREATEWATERFLOWEXAMPLE_H\n#define MYAPPLICATION_CREATEWATERFLOWEXAMPLE_H\n#include \"waterflow.h\"\n\nnamespace NativeModule {\nconst int UI_WIDTH = 400;\nconst int UI_HEIGHT = 600;\nconst int SECTION_COUNT = 10;\nconst int SECTION_2_ID = 2;\n\ninline void SetupSections(std::shared_ptr<WaterflowSection> sections)\n{\n    SectionOption MARGIN_GAP_SECTION_1 = {10, 2, 10, 10, {20, 30, 40, 50}, nullptr, nullptr};\n    SectionOption MARGIN_GAP_SECTION_2 = {10, 4, 10, 10, {20, 30, 40, 50}, nullptr, nullptr};\n    for (int i = 0; i < SECTION_COUNT; i++) {\n        sections->SetSection(sections->GetSectionOptions(), i,\n                             i % SECTION_2_ID ? MARGIN_GAP_SECTION_1 : MARGIN_GAP_SECTION_2);\n    }\n}\n\ninline std::shared_ptr<ArkUIWaterflowNode> CreateWaterflowExample(napi_env env)\n{\n    auto waterflow = std::make_shared<ArkUIWaterflowNode>();\n    waterflow->SetHeight(UI_HEIGHT);\n    waterflow->SetWidth(UI_WIDTH);\n    waterflow->SetLazyAdapter(std::make_shared<FlowItemAdapter>());\n    auto sections = std::make_shared<WaterflowSection>();\n    SetupSections(sections);\n    waterflow->SetSection(sections);\n    return waterflow;\n}\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_CREATEWATERFLOWEXAMPLE_H\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(515862)/* ["default"] */.A) + "",
        width: "324",
        height: "627"
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
515862(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478065-92659965acc1399b6a3050d2605d2a85.gif");

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