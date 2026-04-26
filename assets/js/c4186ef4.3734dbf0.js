"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["323181"], {
455730(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_use_ndk_arkts_build_layout_ndk_ndk_loading_long_list_ndk_loading_long_list_md_c41_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-use-ndk-arkts-build-layout-ndk-ndk-loading-long-list-ndk-loading-long-list-md-c41.json
var site_docs_arkui_arkts_use_ndk_arkts_build_layout_ndk_ndk_loading_long_list_ndk_loading_long_list_md_c41_namespaceObject = JSON.parse('{"id":"arkui/arkts-use-ndk/arkts-build-layout-ndk/ndk-loading-long-list/ndk-loading-long-list","title":"使用列表","description":"ArkUI开发框架在NDK接口提供了列表组件，使用列表可以轻松高效地显示结构化、可滚动的信息。列表组件支持控制滚动位置、支持分组显示内容、支持使用NodeAdapter实现懒加载以提升列表创建性能。","source":"@site/docs/arkui/arkts-use-ndk/arkts-build-layout-ndk/ndk-loading-long-list/ndk-loading-long-list.md","sourceDirName":"arkui/arkts-use-ndk/arkts-build-layout-ndk/ndk-loading-long-list","slug":"/arkui/arkts-use-ndk/arkts-build-layout-ndk/ndk-loading-long-list/","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/arkts-build-layout-ndk/ndk-loading-long-list/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"使用列表","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-loading-long-list","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用动画","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-use-animation/"},"next":{"title":"使用瀑布流","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/arkts-build-layout-ndk/ndk-waterflow/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-use-ndk/arkts-build-layout-ndk/ndk-loading-long-list/ndk-loading-long-list.md


const frontMatter = {
	title: '使用列表',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-loading-long-list',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用列表';

const assets = {

};



const toc = [{
  "value": "创建列表",
  "id": "创建列表",
  "level": 2
}, {
  "value": "监听滚动事件",
  "id": "监听滚动事件",
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
  "value": "在列表中应用懒加载适配器",
  "id": "在列表中应用懒加载适配器",
  "level": 3
}, {
  "value": "控制列表滚动位置",
  "id": "控制列表滚动位置",
  "level": 2
}, {
  "value": "ListItem横划删除",
  "id": "listitem横划删除",
  "level": 2
}, {
  "value": "使用分组列表",
  "id": "使用分组列表",
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
        id: "使用列表",
        children: "使用列表"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkUI开发框架在NDK接口提供了列表组件，使用列表可以轻松高效地显示结构化、可滚动的信息。列表组件支持控制滚动位置、支持分组显示内容、支持使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#nodeadapter%E4%BB%8B%E7%BB%8D",
        children: "NodeAdapter"
      }), "实现懒加载以提升列表创建性能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建列表",
      children: "创建列表"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-use-ndk/ndk-access-the-arkts-page",
        children: "接入ArkTS页面"
      }), "章节实现列表创建。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "监听滚动事件",
      children: "监听滚动事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-use-ndk/arkts-add-event/ndk-listen-to-component-events",
        children: "监听组件事件"
      }), "章节实现列表滚动事件监听。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用懒加载",
      children: "使用懒加载"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nodeadapter介绍",
      children: "NodeAdapter介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["NDK提供了NodeAdapter对象替代ArkTS侧的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-lazyforeach/ts-rendering-control-lazyforeach",
        children: "LazyForEach"
      }), "功能，用于按需生成子组件，NodeAdapter支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
        children: "List"
      }), "/", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitemgroup/ts-container-listitemgroup",
        children: "ListItemGroup"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid",
        children: "Grid"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow",
        children: "WaterFlow"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper",
        children: "Swiper"
      }), "组件中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["设置了NodeAdapter属性的节点，不支持直接通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#addchild",
            children: "addChild"
          }), "等接口添加子组件。子组件完全由NodeAdapter管理，使用属性方法设置NodeAdapter时，会判断父组件是否已经存在子节点，如果父组件已经存在子节点，则设置NodeAdapter操作失败，返回错误码。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["NodeAdapter通过相关事件通知开发者按需生成组件，类似组件事件机制，开发者使用NodeAdapter时要注册", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodeadapter_registereventreceiver",
            children: "事件监听器"
          }), "，在监听器事件中处理逻辑，相关事件通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeadaptereventtype",
            children: "ArkUI_NodeAdapterEventType"
          }), "定义。另外NodeAdapter不会主动释放不在屏幕内显示的组件对象，开发者需要在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeadaptereventtype",
            children: "NODE_ADAPTER_EVENT_ON_REMOVE_NODE_FROM_ADAPTER"
          }), "事件中进行组件对象的释放，或者进行缓存复用。下图展示了典型列表滑动场景下的事件触发机制："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(94333)/* ["default"] */.A) + "",
            width: "808",
            height: "523"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下示例提供了懒加载适配器的实现方法，仅包含主要步骤，完整代码请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/DocsSample/ArkUISample/NativeType/NdkCreateList",
        children: "NdkCreateList"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实现懒加载适配器",
      children: "实现懒加载适配器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用ArkUIListItemAdapter类来管理懒加载适配器，在类的构造中创建NodeAdapter对象，并给NodeAdapter对象设置事件监听器，在类的析构函数中，销毁NodeAdapter对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUIListItemAdapter类为自定义的通用模板类，模板参数类型可按业务数据和节点模型进行自定义。该模板对外开放“创建子组件”回调，用于按需创建并挂载每个ListItem对应的子组件。该模板还提供“复用ListItem”回调，用于在节点回收后执行状态重置与复用逻辑。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ArkUIListItemAdapter.h\n// 用于文本列表懒加载功能代码。\n\n#ifndef MYAPPLICATION_ARKUILISTITEMADAPTER_H\n#define MYAPPLICATION_ARKUILISTITEMADAPTER_H\n\n#include <algorithm>\n#include <arkui/native_node.h>\n#include <cstddef>\n#include <cstdint>\n#include <functional>\n#include <memory>\n#include <stack>\n#include <string>\n#include <unordered_map>\n#include <vector>\n\n#include \"ArkUIListItemNode.h\"\n#include \"ArkUITextNode.h\"\n#include \"NativeModule.h\"\n\nnamespace NativeModule {\n\nclass IArkUIListItemAdapter {\npublic:\n    virtual ~IArkUIListItemAdapter() = default;\n    virtual ArkUI_NodeAdapterHandle GetHandle() const = 0;\n};\ntemplate <typename ItemType> class ArkUIListItemAdapterT : public IArkUIListItemAdapter {\npublic:\n    // 创建列表项节点的回调类型。\n    using CreateChildCallback = std::function<std::shared_ptr<ArkUIListItemNode>(const ItemType &item, int32_t index)>;\n    // 复用列表项节点时更新内容的回调类型。\n    using ReuseListItemCallback =\n        std::function<void(const std::shared_ptr<ArkUIListItemNode> &listItem, const ItemType &item, int32_t index)>;\n    // 生成节点唯一标识的回调类型。\n    using NodeIdCallback = std::function<int64_t(const ItemType &item, int32_t index)>;\n\n    // 创建NodeAdapter并初始化数据及各类回调。\n    explicit ArkUIListItemAdapterT(std::vector<ItemType> data, CreateChildCallback createChildCallback,\n                                   ReuseListItemCallback reuseListItemCallback, NodeIdCallback nodeIdCallback = nullptr)\n        : handle_(OH_ArkUI_NodeAdapter_Create()), data_(std::move(data)),\n          createChildCallback_(std::move(createChildCallback)),\n          reuseListItemCallback_(std::move(reuseListItemCallback)), nodeIdCallback_(std::move(nodeIdCallback)) {\n        // 设置懒加载数据。\n        OH_ArkUI_NodeAdapter_SetTotalNodeCount(handle_, data_.size());\n        // 设置懒加载回调事件。\n        OH_ArkUI_NodeAdapter_RegisterEventReceiver(handle_, this, OnStaticAdapterEvent);\n    }\n\n    ~ArkUIListItemAdapterT() override\n    {\n        // 释放创建的组件。\n        while (!cachedItems_.empty()) {\n            cachedItems_.pop();\n        }\n        items_.clear();\n        // 释放Adapter相关资源。\n        OH_ArkUI_NodeAdapter_UnregisterEventReceiver(handle_);\n        OH_ArkUI_NodeAdapter_Dispose(handle_);\n    }\n\n    ArkUI_NodeAdapterHandle GetHandle() const override { return handle_; }\n\n    const std::vector<ItemType> &GetData() const { return data_; }\n\n    void SetData(std::vector<ItemType> data)\n    {\n        data_ = std::move(data);\n        OH_ArkUI_NodeAdapter_SetTotalNodeCount(handle_, data_.size());\n        OH_ArkUI_NodeAdapter_ReloadAllItems(handle_);\n    }\n\n    void SetNodeIdCallback(NodeIdCallback callback) { nodeIdCallback_ = std::move(callback); }\n\n    void RemoveItem(size_t index)\n    {\n        // 删除第index个数据。\n        if (index >= data_.size()) {\n            return;\n        }\n        data_.erase(data_.begin() + static_cast<std::ptrdiff_t>(index));\n        // 如果index会导致可视区域元素发生可见性变化，则会回调NODE_ADAPTER_EVENT_ON_REMOVE_NODE_FROM_ADAPTER事件删除元素，\n        // 根据是否有新增元素回调NODE_ADAPTER_EVENT_ON_GET_NODE_ID和NODE_ADAPTER_EVENT_ON_ADD_NODE_TO_ADAPTER事件。\n        OH_ArkUI_NodeAdapter_RemoveItem(handle_, index, 1);\n        // 更新新的数量。\n        OH_ArkUI_NodeAdapter_SetTotalNodeCount(handle_, data_.size());\n    }\n\n    void InsertItem(int32_t index, const ItemType &value)\n    {\n        int32_t safeIndex = std::max(0, std::min(index, static_cast<int32_t>(data_.size())));\n        data_.insert(data_.begin() + safeIndex, value);\n        // 如果index会导致可视区域元素发生可见性变化，则会回调NODE_ADAPTER_EVENT_ON_GET_NODE_ID和NODE_ADAPTER_EVENT_ON_ADD_NODE_TO_ADAPTER事件，\n        // 根据是否有删除元素回调NODE_ADAPTER_EVENT_ON_REMOVE_NODE_FROM_ADAPTER事件。\n        OH_ArkUI_NodeAdapter_InsertItem(handle_, safeIndex, 1);\n        // 更新新的数量。\n        OH_ArkUI_NodeAdapter_SetTotalNodeCount(handle_, data_.size());\n    }\n\n    void MoveItem(int32_t oldIndex, int32_t newIndex)\n    {\n        if (!IsValidIndex(oldIndex) || !IsValidIndex(newIndex) || oldIndex == newIndex) {\n            return;\n        }\n        auto temp = data_[oldIndex];\n        data_.insert(data_.begin() + newIndex, temp);\n        int32_t removeIndex = oldIndex;\n        if (newIndex < oldIndex) {\n            removeIndex += 1;\n        }\n        data_.erase(data_.begin() + removeIndex);\n        // 移到位置如果未发生可视区域内元素的可见性变化，则不回调事件，反之根据新增和删除场景回调对应的事件。\n        OH_ArkUI_NodeAdapter_MoveItem(handle_, oldIndex, newIndex);\n    }\n\n    void ReloadItem(int32_t index, const ItemType &value)\n    {\n        if (!IsValidIndex(index)) {\n            return;\n        }\n        data_[index] = value;\n        // 如果index位于可视区域内，先回调NODE_ADAPTER_EVENT_ON_REMOVE_NODE_FROM_ADAPTER删除老元素，\n        // 再回调NODE_ADAPTER_EVENT_ON_GET_NODE_ID和NODE_ADAPTER_EVENT_ON_ADD_NODE_TO_ADAPTER事件。\n        OH_ArkUI_NodeAdapter_ReloadItem(handle_, index, 1);\n    }\n\n    void ReloadAllItem()\n    {\n        // 全部重新加载场景下，会回调NODE_ADAPTER_EVENT_ON_GET_NODE_ID接口获取新的组件ID，\n        // 根据新的组件ID进行对比，ID不发生变化的进行复用，\n        // 针对新增ID的元素，调用NODE_ADAPTER_EVENT_ON_ADD_NODE_TO_ADAPTER事件创建新的组件，\n        // 然后判断老数据中遗留的未使用ID，调用NODE_ADAPTER_EVENT_ON_REMOVE_NODE_FROM_ADAPTER删除老元素。\n        OH_ArkUI_NodeAdapter_ReloadAllItems(handle_);\n    }\n\nprivate:\n    struct ItemEntry {\n        std::shared_ptr<ArkUIListItemNode> listItem = nullptr;\n    };\n\n    static void OnStaticAdapterEvent(ArkUI_NodeAdapterEvent *event)\n    {\n        // 获取实例对象，回调实例事件。\n        auto *itemAdapter = reinterpret_cast<ArkUIListItemAdapterT *>(OH_ArkUI_NodeAdapterEvent_GetUserData(event));\n        if (itemAdapter != nullptr) {\n            itemAdapter->OnAdapterEvent(event);\n        }\n    }\n\n    void OnAdapterEvent(ArkUI_NodeAdapterEvent *event)\n    {\n        // 获取事件类型\n        auto type = OH_ArkUI_NodeAdapterEvent_GetType(event);\n        switch (type) {\n            // Adapter需要添加新元素时获取新元素的唯一标识符\n            case NODE_ADAPTER_EVENT_ON_GET_NODE_ID:\n                OnNewItemIdCreated(event);\n                break;\n            // Adapter需要添加新元素时获取新元素的内容\n            case NODE_ADAPTER_EVENT_ON_ADD_NODE_TO_ADAPTER:\n                OnNewItemAttached(event);\n                break;\n            // Adapter将元素移除\n            case NODE_ADAPTER_EVENT_ON_REMOVE_NODE_FROM_ADAPTER:\n                OnItemDetached(event);\n                break;\n            default:\n                break;\n        }\n    }\n\n    // 分配ID给需要显示的Item，用于ReloadAllItems场景的元素diff。\n    void OnNewItemIdCreated(ArkUI_NodeAdapterEvent *event)\n    {\n        auto index = OH_ArkUI_NodeAdapterEvent_GetItemIndex(event);\n        if (!IsValidIndex(index)) {\n            return;\n        }\n        int64_t id = nodeIdCallback_ ? nodeIdCallback_(data_[index], index) : static_cast<int64_t>(index);\n        OH_ArkUI_NodeAdapterEvent_SetNodeId(event, id);\n    }\n\n    // 需要新的Item显示在可见区域。\n    void OnNewItemAttached(ArkUI_NodeAdapterEvent *event)\n    {\n        auto index = OH_ArkUI_NodeAdapterEvent_GetItemIndex(event);\n        if (!IsValidIndex(index)) {\n            return;\n        }\n\n        ItemEntry itemEntry;\n        if (!cachedItems_.empty()) {\n            // 使用并更新回收复用的缓存。\n            itemEntry = cachedItems_.top();\n            // 释放缓存池的引用。\n            cachedItems_.pop();\n            reuseListItemCallback_(itemEntry.listItem, data_[index], index);\n        } else {\n            // 创建新的元素。\n            itemEntry.listItem = createChildCallback_(data_[index], index);\n        }\n        if (itemEntry.listItem == nullptr) {\n            itemEntry.listItem = std::make_shared<ArkUIListItemNode>();\n        }\n\n        auto handle = itemEntry.listItem->GetHandle();\n        items_[handle] = itemEntry;\n        // 设置需要展示的元素。\n        OH_ArkUI_NodeAdapterEvent_SetItem(event, handle);\n    }\n    // Item从可见区域移除。\n    void OnItemDetached(ArkUI_NodeAdapterEvent *event)\n    {\n        auto item = OH_ArkUI_NodeAdapterEvent_GetRemovedNode(event);\n        auto iter = items_.find(item);\n        if (iter != items_.end()) {\n            // 放置到缓存池中进行回收复用。\n            cachedItems_.push(iter->second);\n            items_.erase(iter);\n        }\n    }\n\n    bool IsValidIndex(int32_t index) const { return index >= 0 && index < static_cast<int32_t>(data_.size()); }\n\n    // NodeAdapter实例句柄。\n    ArkUI_NodeAdapterHandle handle_ = nullptr;\n    // 列表数据源。\n    std::vector<ItemType> data_;\n    // 创建列表项节点回调。\n    CreateChildCallback createChildCallback_ = nullptr;\n    // 复用列表项节点回调。\n    ReuseListItemCallback reuseListItemCallback_ = nullptr;\n    // 节点ID生成回调。\n    NodeIdCallback nodeIdCallback_ = nullptr;\n    // 管理NodeAdapter生成的元素。\n    std::unordered_map<ArkUI_NodeHandle, ItemEntry> items_;\n\n    // 管理回收复用组件池。\n    std::stack<ItemEntry> cachedItems_;\n};\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_ARKUILISTITEMADAPTER_H\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在列表中应用懒加载适配器",
      children: "在列表中应用懒加载适配器"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在ArkUIListNode中添加SetLazyAdapter函数，给列表节点设置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeattributetype",
            children: "NODE_LIST_NODE_ADAPTER"
          }), "属性，并将NodeAdapter作为属性入参传入。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ArkUIListNode.h\n// 提供列表组件的封装。\n#ifndef MYAPPLICATION_ARKUILISTNODE_H\n#define MYAPPLICATION_ARKUILISTNODE_H\n\n#include \"ArkUINode.h\"\n#include \"ArkUIListItemAdapter.h\"\nnamespace NativeModule {\nclass ArkUIListNode : public ArkUINode {\npublic:\n    ArkUIListNode() // 创建ArkUI的列表组件。\n        : ArkUINode((NativeModuleInstance::GetInstance()->GetNativeNodeAPI())->createNode(ARKUI_NODE_LIST)) {}\n\n    ~ArkUIListNode() override\n    {\n        if (nativeModule_) {\n            nativeModule_->unregisterNodeEvent(handle_, NODE_LIST_ON_SCROLL_INDEX);\n            if (adapter_) {\n            // 析构的时候卸载adapter下的UI组件。\n                nativeModule_->resetAttribute(handle_, NODE_LIST_NODE_ADAPTER);\n                adapter_.reset();\n            }\n        }\n    }\n    // List组件的属性接口封装。\n    void SetScrollBarState(bool isShow)\n    {\n        ArkUI_ScrollBarDisplayMode displayMode =\n            isShow ? ARKUI_SCROLL_BAR_DISPLAY_MODE_ON : ARKUI_SCROLL_BAR_DISPLAY_MODE_OFF;\n        ArkUI_NumberValue value[] = {{.i32 = displayMode}};\n        ArkUI_AttributeItem item = {value, 1};\n        nativeModule_->setAttribute(handle_, NODE_SCROLL_BAR_DISPLAY_MODE, &item);\n    }\n\n    void RegisterOnScrollIndex(const std::function<void(int32_t index)> &onScrollIndex)\n    {\n        onScrollIndex_ = onScrollIndex;\n        nativeModule_->registerNodeEvent(handle_, NODE_LIST_ON_SCROLL_INDEX, 0, nullptr);\n    }\n    // 引入懒加载模块。\n    void SetLazyAdapter(const std::shared_ptr<IArkUIListItemAdapter> &adapter)\n    {\n        if (!adapter) {\n            nativeModule_->resetAttribute(handle_, NODE_LIST_NODE_ADAPTER);\n            adapter_.reset();\n            return;\n        }\n        ArkUI_AttributeItem item{nullptr, 0, nullptr, adapter->GetHandle()};\n        nativeModule_->setAttribute(handle_, NODE_LIST_NODE_ADAPTER, &item);\n        adapter_ = adapter;\n    }\n    // ...\nprotected:\n    void OnNodeEvent(ArkUI_NodeEvent *event) override\n    {\n        auto eventType = OH_ArkUI_NodeEvent_GetEventType(event);\n        switch (eventType) {\n            case NODE_LIST_ON_SCROLL_INDEX: {\n                auto index = OH_ArkUI_NodeEvent_GetNodeComponentEvent(event)->data[0];\n                if (onScrollIndex_) {\n                    onScrollIndex_(index.i32);\n                }\n                break;\n            }\n            default: {\n                break;\n            }\n        }\n    }\n\nprivate:\n    std::function<void(int32_t index)> onScrollIndex_;\n\n    std::shared_ptr<IArkUIListItemAdapter> adapter_;\n};\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_ARKUILISTNODE_H\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建List使用懒加载的示例代码，调用List节点的SetLazyAdapter接口设置懒加载适配器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// LazyTextListExample\n// 懒加载列表示例代码。\n\n#ifndef MYAPPLICATION_LAZYTEXTLISTEXAMPLE1_H\n#define MYAPPLICATION_LAZYTEXTLISTEXAMPLE1_H\n\n#include \"ArkUIBaseNode.h\"\n#include \"ArkUIListNode.h\"\n#include \"ArkUITextNode.h\"\n\n#include <algorithm>\n#include <memory>\n#include <string>\n#include <vector>\n\nnamespace NativeModule {\n// ...\nstd::shared_ptr<ArkUIBaseNode> CreateLazyTextListExample1()\n{\n    // 创建组件并挂载。\n    // 1：创建List组件。\n    auto list = std::make_shared<ArkUIListNode>();\n    list->SetPercentWidth(1); // 1：宽度\n    list->SetPercentHeight(1); // 1：高度\n    auto data = BuildSampleData();\n\n    auto adapterWeakHolder = std::make_shared<std::weak_ptr<StringAdapter>>();\n    // 2：创建ListItem及其子组件的回调。\n    auto createChildCallback = [adapterWeakHolder](const std::string &item,\n                                                   int32_t index) -> std::shared_ptr<ArkUIListItemNode> {\n        (void)index;\n        return BuildListItemNode(item, adapterWeakHolder);\n    };\n    // 3：复用ListItem的回调。\n    auto reuseListItemCallback = [adapterWeakHolder](const std::shared_ptr<ArkUIListItemNode> &listItem,\n                                                     const std::string &item, int32_t index) {\n        (void)index;\n        ReuseListItemNode(listItem, item, adapterWeakHolder);\n    };\n\n    auto adapter = std::make_shared<StringAdapter>(data, createChildCallback, reuseListItemCallback);\n    *adapterWeakHolder = adapter;\n    // 4：创建ListItem懒加载组件并挂载到List中。\n    list->SetLazyAdapter(adapter);\n    return list;\n}\n\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_LAZYTEXTLISTEXAMPLE1_H\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在NativeEntry.cpp中调用List使用懒加载的示例代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// NDK接口入口挂载文件。\n\n#include \"NativeEntry.h\"\n\n#include \"LazyTextListExample.h\"\n#include \"LazyTextListExample1.h\"\n\n#include <arkui/native_node_napi.h>\n#include <arkui/native_type.h>\n#include <js_native_api.h>\n#include <algorithm>\n#include <memory>\n#include <string>\n#include <uv.h>\n#include <vector>\n\nnamespace NativeModule {\n\n// ...\n\nnapi_value CreateNativeRoot(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    // 获取NodeContent。\n    ArkUI_NodeContentHandle contentHandle;\n    OH_ArkUI_GetNodeContentFromNapiValue(env, args[0], &contentHandle);\n    NativeEntry::GetInstance()->SetContentHandle(contentHandle);\n\n    // 创建懒加载文本列表。\n    auto node = CreateLazyTextListExample();\n\n    // 保存Native侧对象到管理类中，维护生命周期。\n    NativeEntry::GetInstance()->SetRootNode(node);\n    return nullptr;\n}\n\nnapi_value DestroyNativeRoot(napi_env env, napi_callback_info info)\n{\n    // 从管理类中释放Native侧对象。\n    NativeEntry::GetInstance()->DisposeRootNode();\n    return nullptr;\n}\n\n} // namespace NativeModule\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "控制列表滚动位置",
      children: "控制列表滚动位置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "控制列表滚动到指定偏移量位置。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ArkUIListNode.h\n// 提供列表组件的封装。\n// ...\nclass ArkUIListNode : public ArkUINode {\npublic:\n    // ...\n    void ScrollTo(float offset)\n    {\n        ArkUI_NumberValue value[] = {{.f32 = 0}, {.f32 = offset}, {.f32 = 0}};\n        ArkUI_AttributeItem Item = {.value = value, .size = 3};\n        nativeModule_->setAttribute(handle_, NODE_SCROLL_OFFSET, &Item);\n    }\n    // ...\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "控制列表滚动到指定元素。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ArkUIListNode.h\n// 提供列表组件的封装。\n// ...\nclass ArkUIListNode : public ArkUINode {\npublic:\n    // ...\n    void ScrollToIndex(int32_t index)\n    {\n        ArkUI_NumberValue value[] = {{.i32 = index}};\n        ArkUI_AttributeItem Item = {.value = value, .size = 1};\n        nativeModule_->setAttribute(handle_, NODE_LIST_SCROLL_TO_INDEX, &Item);\n    }\n    // ...\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "控制列表滚动指定偏移量。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ArkUIListNode.h\n// 提供列表组件的封装。\n// ...\nclass ArkUIListNode : public ArkUINode {\npublic:\n    // ...\n    void ScrollBy(float offset)\n    {\n        ArkUI_NumberValue value[] = {{.f32 = 0}, {.f32 = offset}};\n        ArkUI_AttributeItem Item = {.value = value, .size = 2};\n        nativeModule_->setAttribute(handle_, NODE_SCROLL_BY, &Item);\n    }\n    // ...\n};\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "listitem横划删除",
      children: "ListItem横划删除"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem",
            children: "ListItem"
          }), "设置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeattributetype",
            children: "NODE_LIST_ITEM_SWIPE_ACTION"
          }), "属性，将", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-nativemodule-arkui-listitemswipeactionoption/arkui-nativemodule-arkui-listitemswipeactionoption",
            children: "ArkUI_ListItemSwipeActionOption"
          }), "对象作为属性参数传入。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ArkUIListItemNode.h\n// 提供列表项的封装类。\n#ifndef MYAPPLICATION_ARKUILISTITEMNODE_H\n#define MYAPPLICATION_ARKUILISTITEMNODE_H\n#include \"ArkUINode.h\"\nnamespace NativeModule {\nclass ArkUIListItemNode : public ArkUINode {\npublic:\n    ArkUIListItemNode()\n        : ArkUINode((NativeModuleInstance::GetInstance()->GetNativeNodeAPI())->createNode(ARKUI_NODE_LIST_ITEM)) {}\n    ~ArkUIListItemNode() override\n    {\n        // 销毁ListItemSwipeActionOption实例\n        if (swipeAction_) {\n            OH_ArkUI_ListItemSwipeActionOption_Dispose(swipeAction_);\n        }\n        // 销毁ListItemSwipeActionItem实例\n        if (swipeItem_) {\n            OH_ArkUI_ListItemSwipeActionItem_Dispose(swipeItem_);\n        }\n    }\n    void SetSwiperAction(std::shared_ptr<ArkUINode> node)\n    {\n        swipeContent_ = node;\n        // 创建ListItemSwipeActionItem接口设置的配置项\n        swipeItem_ = OH_ArkUI_ListItemSwipeActionItem_Create();\n        // 设置ListItemSwipeActionItem的布局内容\n        OH_ArkUI_ListItemSwipeActionItem_SetContent(swipeItem_, node->GetHandle());\n        // 创建ListItemSwipeActionOption接口设置的配置项\n        swipeAction_ = OH_ArkUI_ListItemSwipeActionOption_Create();\n        // 设置ListItemSwipeActionItem的右侧（垂直布局）或下方（横向布局）布局内容\n        OH_ArkUI_ListItemSwipeActionOption_SetEnd(swipeAction_, swipeItem_);\n        ArkUI_AttributeItem Item = {.object = swipeAction_};\n        nativeModule_->setAttribute(handle_, NODE_LIST_ITEM_SWIPE_ACTION, &Item);\n    }\n    std::shared_ptr<ArkUINode> GetSwipeContent() const { return swipeContent_; }\n\nprivate:\n    ArkUI_ListItemSwipeActionOption *swipeAction_ = nullptr;\n    ArkUI_ListItemSwipeActionItem *swipeItem_ = nullptr;\n    std::shared_ptr<ArkUINode> swipeContent_ = nullptr;\n};\n} // namespace NativeModule\n#endif // MYAPPLICATION_ARKUILISTITEMNODE_H\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["设置创建ListItem和复用ListItem的回调函数。当创建", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem",
            children: "ListItem"
          }), "时，创建ListItem的划出组件，并绑定点击事件，在点击事件中执行删除数据源操作。ListItem复用时，更新划出组件的绑定事件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// LazyTextListExample\n// 懒加载列表示例代码。\n\n#ifndef MYAPPLICATION_LAZYTEXTLISTEXAMPLE1_H\n#define MYAPPLICATION_LAZYTEXTLISTEXAMPLE1_H\n\n#include \"ArkUIBaseNode.h\"\n#include \"ArkUIListNode.h\"\n#include \"ArkUITextNode.h\"\n\n#include <algorithm>\n#include <memory>\n#include <string>\n#include <vector>\n\nnamespace NativeModule {\nusing StringAdapter = ArkUIListItemAdapterT<std::string>;\nusing AdapterWeakHolder = std::shared_ptr<std::weak_ptr<StringAdapter>>;\n\nstd::vector<std::string> BuildSampleData()\n{\n    std::vector<std::string> data;\n    data.reserve(1000); // 每个分组预分配1000条数据空间。\n    for (int32_t i = 0; i < 1000; i++) { // 1000：1000条数据空间\n        data.emplace_back(std::to_string(i));\n    }\n    return data;\n}\n\nvoid RegisterDeleteClick(const std::shared_ptr<ArkUINode> &target, const AdapterWeakHolder &adapterWeakHolder,\n    const std::string &item)\n{\n    // 为删除区域注册点击事件：通过弱引用获取适配器，避免回调长期持有强引用。\n    target->RegisterOnClick([adapterWeakHolder, item](ArkUI_NodeEvent *event) {\n        (void)event;\n        auto adapter = adapterWeakHolder->lock();\n        if (!adapter) {\n            return;\n        }\n        // 基于当前数据查找当前 item，确保复用场景下删除的是最新绑定项。\n        const auto &currentData = adapter->GetData();\n        auto it = std::find(currentData.begin(), currentData.end(), item);\n        if (it != currentData.end()) {\n            // RemoveItem 需要索引，这里把迭代器位置转换为 size_t。\n            auto removeIndex = static_cast<size_t>(std::distance(currentData.begin(), it));\n            adapter->RemoveItem(removeIndex);\n        }\n    });\n}\n\nstd::shared_ptr<ArkUIListItemNode> BuildListItemNode(const std::string &item,\n    const AdapterWeakHolder &adapterWeakHolder)\n{\n    // 构建一个 ListItem：主文本区域 + 右滑删除操作区。\n    auto listItem = std::make_shared<ArkUIListItemNode>();\n\n    // 主内容文本，展示当前数据项。\n    auto textNode = std::make_shared<ArkUITextNode>();\n    textNode->SetTextContent(item);\n    // ...\n    listItem->AddChild(textNode);\n\n    // 右滑动作区文本，点击后触发删除当前 item。\n    auto swipeNode = std::make_shared<ArkUITextNode>();\n    swipeNode->SetTextContent(\"del\");\n    // ...\n    RegisterDeleteClick(swipeNode, adapterWeakHolder, item);\n    listItem->SetSwiperAction(swipeNode);\n    return listItem;\n}\n\nvoid ReuseListItemNode(const std::shared_ptr<ArkUIListItemNode> &listItem, const std::string &item,\n    const AdapterWeakHolder &adapterWeakHolder)\n{\n    auto &children = listItem->GetChildren();\n    if (children.empty()) {\n        return;\n    }\n    auto textNode = std::dynamic_pointer_cast<ArkUITextNode>(children.front());\n    if (textNode) {\n        textNode->SetTextContent(item);\n        textNode->SetBackgroundColor(0xFFfffacd);\n    }\n    auto swipeContent = listItem->GetSwipeContent();\n    if (swipeContent) {\n        RegisterDeleteClick(swipeContent, adapterWeakHolder, item);\n    }\n}\n\n// ...\n\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_LAZYTEXTLISTEXAMPLE1_H\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["添加新的ListItem时，优先复用已缓存的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem",
            children: "ListItem"
          }), "实例，并更新其内容；若无可用缓存，则创建新的ListItem。当回调返回空时，创建一个默认的ListItem作为兜底方案。最后，将生成的节点句柄回填至", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodeadapterevent_setitem",
            children: "OH_ArkUI_NodeAdapterEvent_SetItem"
          }), "事件中，完成绑定。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ArkUIListItemAdapter.h\n// ...\ntemplate <typename ItemType> class ArkUIListItemAdapterT : public IArkUIListItemAdapter {\n    // ...\n    // 需要新的Item显示在可见区域。\n    void OnNewItemAttached(ArkUI_NodeAdapterEvent *event)\n    {\n        auto index = OH_ArkUI_NodeAdapterEvent_GetItemIndex(event);\n        if (!IsValidIndex(index)) {\n            return;\n        }\n\n        ItemEntry itemEntry;\n        if (!cachedItems_.empty()) {\n            // 使用并更新回收复用的缓存。\n            itemEntry = cachedItems_.top();\n            // 释放缓存池的引用。\n            cachedItems_.pop();\n            reuseListItemCallback_(itemEntry.listItem, data_[index], index);\n        } else {\n            // 创建新的元素。\n            itemEntry.listItem = createChildCallback_(data_[index], index);\n        }\n        if (itemEntry.listItem == nullptr) {\n            itemEntry.listItem = std::make_shared<ArkUIListItemNode>();\n        }\n\n        auto handle = itemEntry.listItem->GetHandle();\n        items_[handle] = itemEntry;\n        // 设置需要展示的元素。\n        OH_ArkUI_NodeAdapterEvent_SetItem(event, handle);\n    }\n    // ...\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ArkUIListItemAdapter中新增RemoveItem，用于删除数据源并且调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodeadapter_removeitem",
            children: "OH_ArkUI_NodeAdapter_RemoveItem"
          }), "接口通知框架刷新UI。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ArkUIListItemAdapter.h\n// ...\ntemplate <typename ItemType> class ArkUIListItemAdapterT : public IArkUIListItemAdapter {\n    // ...\n    void RemoveItem(size_t index)\n    {\n        // 删除第index个数据。\n        if (index >= data_.size()) {\n            return;\n        }\n        data_.erase(data_.begin() + static_cast<std::ptrdiff_t>(index));\n        // 如果index会导致可视区域元素发生可见性变化，则会回调NODE_ADAPTER_EVENT_ON_REMOVE_NODE_FROM_ADAPTER事件删除元素，\n        // 根据是否有新增元素回调NODE_ADAPTER_EVENT_ON_GET_NODE_ID和NODE_ADAPTER_EVENT_ON_ADD_NODE_TO_ADAPTER事件。\n        OH_ArkUI_NodeAdapter_RemoveItem(handle_, index, 1);\n        // 更新新的数量。\n        OH_ArkUI_NodeAdapter_SetTotalNodeCount(handle_, data_.size());\n    }\n\n    // ...\n};\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用分组列表",
      children: "使用分组列表"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["分组列表使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitemgroup/ts-container-listitemgroup",
            children: "ListItemGroup"
          }), "组件实现，ListItemGroup支持添加", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitemgroup/ts-container-listitemgroup#listitemgroupoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
            children: "header"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitemgroup/ts-container-listitemgroup#listitemgroupoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
            children: "footer"
          }), "设置函数，支持使用懒加载。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ArkUIListItemGroupNode.h\n\n#ifndef MYAPPLICATION_ARKUILISTITEMGROUPNODE_H\n#define MYAPPLICATION_ARKUILISTITEMGROUPNODE_H\n\n#include \"ArkUINode.h\"\n#include \"ArkUIListItemAdapter.h\"\n\nnamespace NativeModule {\n\nclass ArkUIListItemGroupNode : public ArkUINode {\npublic:\n    ArkUIListItemGroupNode()\n        : ArkUINode((NativeModuleInstance::GetInstance()->GetNativeNodeAPI())->createNode(ARKUI_NODE_LIST_ITEM_GROUP))\n    {\n    }\n\n    void SetHeader(const std::shared_ptr<ArkUINode> &node)\n    {\n        if (node) {\n            // 创建一个属性项，把节点的句柄放进去，并设置头部\n            ArkUI_AttributeItem item = {.object = node->GetHandle()};\n            nativeModule_->setAttribute(handle_, NODE_LIST_ITEM_GROUP_SET_HEADER, &item);\n            header_ = node;\n        } else {\n            // 如果传入的是空指针（nullptr），说明要移除已有的头部\n            nativeModule_->resetAttribute(handle_, NODE_LIST_ITEM_GROUP_SET_HEADER);\n            header_.reset();\n        }\n    }\n\n    void SetFooter(const std::shared_ptr<ArkUINode> &node)\n    {\n        if (node) {\n            // 创建一个属性项，把节点的句柄放进去，并设置尾部\n            ArkUI_AttributeItem item = {.object = node->GetHandle()};\n            nativeModule_->setAttribute(handle_, NODE_LIST_ITEM_GROUP_SET_FOOTER, &item);\n            footer_ = node;\n        } else {\n            // 如果传入的是空指针（nullptr），说明要移除已有的尾部\n            nativeModule_->resetAttribute(handle_, NODE_LIST_ITEM_GROUP_SET_FOOTER);\n            footer_.reset();\n        }\n    }\n\n    std::shared_ptr<ArkUINode> GetHeader() const\n    {\n        return header_;\n    }\n\n    std::shared_ptr<ArkUINode> GetFooter() const\n    {\n        return footer_;\n    }\n\n    // 引入懒加载模块。\n    void SetLazyAdapter(const std::shared_ptr<IArkUIListItemAdapter> &adapter)\n    {\n        if (!adapter) {\n            nativeModule_->resetAttribute(handle_, NODE_LIST_ITEM_GROUP_NODE_ADAPTER);\n            adapter_.reset();\n            return;\n        }\n        ArkUI_AttributeItem item{nullptr, 0, nullptr, adapter->GetHandle()};\n        nativeModule_->setAttribute(handle_, NODE_LIST_ITEM_GROUP_NODE_ADAPTER, &item);\n        adapter_ = adapter;\n    }\nprivate:\n    std::shared_ptr<ArkUINode> header_;\n    std::shared_ptr<ArkUINode> footer_;\n    std::shared_ptr<IArkUIListItemAdapter> adapter_;\n};\n}\n#endif // MYAPPLICATION_ARKUILISTITEMGROUPNODE_H\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
            children: "List"
          }), "组件设置吸顶。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ArkUIListNode.h\n// 提供列表组件的封装。\n// ...\nclass ArkUIListNode : public ArkUINode {\n    // ...\n    void SetSticky(ArkUI_StickyStyle style)\n    {\n        ArkUI_NumberValue value[] = {{.i32 = style}};\n        ArkUI_AttributeItem item = {value, 1};\n        nativeModule_->setAttribute(handle_, NODE_LIST_STICKY, &item);\n    }\n    // ...\n};\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
            children: "List"
          }), "组件下使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitemgroup/ts-container-listitemgroup",
            children: "ListItemGroup"
          }), "实现分组列表界面。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// LazyTextListExample.h\n// 懒加载列表示例代码。\n\n#ifndef MYAPPLICATION_LAZYTEXTLISTEXAMPLE_H\n#define MYAPPLICATION_LAZYTEXTLISTEXAMPLE_H\n\n#include \"ArkUIBaseNode.h\"\n#include \"ArkUIListItemAdapter.h\"\n#include \"ArkUIListItemGroupNode.h\"\n#include \"ArkUIListNode.h\"\n#include \"ArkUITextNode.h\"\n\n#include <string>\n#include <vector>\n\nnamespace NativeModule {\n// ...\nstd::shared_ptr<ArkUIListItemGroupNode> CreateListItemGroup()\n{\n    auto header = std::make_shared<ArkUITextNode>();\n    header->SetTextContent(\"header\");\n    header->SetFontSize(16); // 16：字体大小\n    header->SetPercentWidth(1); // 1：宽度\n    header->SetHeight(50); // 50：高度\n    header->SetBackgroundColor(0xFFDCDCDC);\n    header->SetTextAlign(ARKUI_TEXT_ALIGNMENT_CENTER);\n\n    auto listItemGroup = std::make_shared<ArkUIListItemGroupNode>();\n    listItemGroup->SetHeader(header);\n\n    auto groupData = BuildGroupData();\n    auto createChildCallback = [](const std::string &item, int32_t index) -> std::shared_ptr<ArkUIListItemNode> {\n        return BuildListItemNode(item, index);\n    };\n    auto reuseListItemCallback = [](const std::shared_ptr<ArkUIListItemNode> &listItem, const std::string &item,\n                                    int32_t index) {\n        ReuseListItemNode(listItem, item, index);\n    };\n\n    auto adapter = std::make_shared<ArkUIListItemAdapterT<std::string>>(groupData, createChildCallback,\n                                                                         reuseListItemCallback);\n    listItemGroup->SetLazyAdapter(adapter);\n    return listItemGroup;\n}\n\nstd::shared_ptr<ArkUIBaseNode> CreateLazyTextListExample()\n{\n    // 创建组件并挂载。\n    // 1：创建List组件。\n    auto list = std::make_shared<ArkUIListNode>();\n    list->SetPercentWidth(1); // 1：宽度\n    list->SetPercentHeight(1); // 1：高度\n    list->SetSticky(ARKUI_STICKY_STYLE_BOTH);\n\n    // 2：创建ListItemGroup并挂载到List上。\n    for (int32_t i = 0; i < 3; i++) { // 3：分组数\n        list->AddChild(CreateListItemGroup());\n    }\n    return list;\n}\n\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_LAZYTEXTLISTEXAMPLE_H\n"
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
94333(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958064-b2bc7d5b0715b4c94ee00b5eb8195593.png");

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