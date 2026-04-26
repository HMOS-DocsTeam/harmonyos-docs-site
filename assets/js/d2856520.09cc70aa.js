"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["563434"], {
837822(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_use_ndk_ndk_build_custom_components_ndk_build_custom_components_md_d28_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-use-ndk-ndk-build-custom-components-ndk-build-custom-components-md-d28.json
var site_docs_arkui_arkts_use_ndk_ndk_build_custom_components_ndk_build_custom_components_md_d28_namespaceObject = JSON.parse('{"id":"arkui/arkts-use-ndk/ndk-build-custom-components/ndk-build-custom-components","title":"构建自定义组件","description":"ArkUI开发框架在NDK接口提供了自定义UI组件的能力，这些能力包括自定义测算，自定义布局和自定义绘制。开发者通过注册相关自定义回调事件接入ArkUI开发框架的布局渲染流程，这些事件需要使用registerNodeCustomEvent来进行声明，并通过addNodeCustomEventReceiver函数添加组件自定义事件的监听器，在该监听器的回调函数中处理相关自定义测算，自定义布局和自定义绘制逻辑。","source":"@site/docs/arkui/arkts-use-ndk/ndk-build-custom-components/ndk-build-custom-components.md","sourceDirName":"arkui/arkts-use-ndk/ndk-build-custom-components","slug":"/arkui/arkts-use-ndk/ndk-build-custom-components/","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-build-custom-components/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"构建自定义组件","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-build-custom-components","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"构建弹窗","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-build-pop-up-window/"},"next":{"title":"嵌入ArkTS组件","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-embed-arkts-components/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-use-ndk/ndk-build-custom-components/ndk-build-custom-components.md


const frontMatter = {
	title: '构建自定义组件',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-build-custom-components',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '构建自定义组件';

const assets = {

};



const toc = [{
  "value": "自定义布局容器",
  "id": "自定义布局容器",
  "level": 2
}, {
  "value": "自定义绘制组件",
  "id": "自定义绘制组件",
  "level": 2
}, {
  "value": "不规则网格布局示例",
  "id": "不规则网格布局示例",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "构建自定义组件",
        children: "构建自定义组件"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkUI开发框架在NDK接口提供了自定义UI组件的能力，这些能力包括自定义测算，自定义布局和自定义绘制。开发者通过注册相关自定义回调事件接入ArkUI开发框架的布局渲染流程，这些事件需要使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#registernodecustomevent",
        children: "registerNodeCustomEvent"
      }), "来进行声明，并通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#addnodecustomeventreceiver",
        children: "addNodeCustomEventReceiver"
      }), "函数添加组件自定义事件的监听器，在该监听器的回调函数中处理相关自定义测算，自定义布局和自定义绘制逻辑。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(446472)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["自定义组件事件注册需要", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#addnodecustomeventreceiver",
          children: "addNodeCustomEventReceiver"
        }), "声明监听器注册和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#registernodecustomevent",
          children: "registerNodeCustomEvent"
        }), "声明需要的自定义事件类型，监听器只能监听已声明的事件。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["需要关注事件的反注册逻辑，如在组件销毁前调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#removenodecustomeventreceiver",
          children: "removeNodeCustomEventReceiver"
        }), "移除事件监听器，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#unregisternodecustomevent",
          children: "unregisterNodeCustomEvent"
        }), "通知ArkUI框架已监听的自定义组件事件不再需要监听。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#addnodecustomeventreceiver",
          children: "addNodeCustomEventReceiver"
        }), "可以添加多个函数指针，每个函数指针都会在对应事件触发时触发，对应的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#removenodecustomeventreceiver",
          children: "removeNodeCustomEventReceiver"
        }), "需要传递对应的函数指针用于移除监听。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#registernodecustomeventreceiver",
          children: "registerNodeCustomEventReceiver"
        }), "是全局监听函数，不同于", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#addnodecustomeventreceiver",
          children: "addNodeCustomEventReceiver"
        }), "，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#registernodecustomeventreceiver",
          children: "registerNodeCustomEventReceiver"
        }), "能够监听所有Native组件的自定义事件触发，但只能传递一个函数指针，多次调用使用最后一次的函数指针进行回调，释放时使用unregisterNodeCustomEventReceiver进行反注册。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["自定义组件相关接口（", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#measurenode",
          children: "measureNode"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#layoutnode",
          children: "layoutNode"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#setmeasuredsize",
          children: "setMeasuredSize"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#setlayoutposition",
          children: "setLayoutPosition"
        }), "）仅允许在对应的自定义事件（", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodecustomeventtype",
          children: "ARKUI_NODE_CUSTOM_EVENT_ON_MEASURE、ARKUI_NODE_CUSTOM_EVENT_ON_LAYOUT"
        }), "）回调中使用。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义布局容器",
      children: "自定义布局容器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例创建了一个自定义容器，该容器将子组件最大值加上额外边距作为自身大小，同时对子组件进行居中排布。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 自定义容器组件"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(332131)/* ["default"] */.A) + "",
        width: "347",
        height: "671"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["按照", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-use-ndk/ndk-access-the-arkts-page",
            children: "接入ArkTS页面"
          }), "创建前置工程。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建自定义容器组件封装对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ArkUICustomContainerNode.h\n// 自定义容器组件示例\n\n#ifndef MYAPPLICATION_ARKUICUSTOMCONTAINERNODE_H\n#define MYAPPLICATION_ARKUICUSTOMCONTAINERNODE_H\n\n#include \"ArkUINode.h\"\n\nnamespace NativeModule {\n\n    class ArkUICustomContainerNode : public ArkUINode {\n    public:\n        // 使用自定义组件类型ARKUI_NODE_CUSTOM创建组件。\n        ArkUICustomContainerNode()\n            : ArkUINode((NativeModuleInstance::GetInstance()->GetNativeNodeAPI())->createNode(ARKUI_NODE_CUSTOM))\n        {\n            // 注册自定义事件监听器。\n            nativeModule_->addNodeCustomEventReceiver(handle_, OnStaticCustomEvent);\n            // 声明自定义事件并传递自身作为自定义数据。\n            nativeModule_->registerNodeCustomEvent(handle_, ARKUI_NODE_CUSTOM_EVENT_ON_MEASURE, 0, this);\n            nativeModule_->registerNodeCustomEvent(handle_, ARKUI_NODE_CUSTOM_EVENT_ON_LAYOUT, 0, this);\n        }\n\n        ~ArkUICustomContainerNode() override\n        {\n            // 反注册自定义事件监听器。\n            nativeModule_->removeNodeCustomEventReceiver(handle_, OnStaticCustomEvent);\n            // 取消声明自定义事件。\n            nativeModule_->unregisterNodeCustomEvent(handle_, ARKUI_NODE_CUSTOM_EVENT_ON_MEASURE);\n            nativeModule_->unregisterNodeCustomEvent(handle_, ARKUI_NODE_CUSTOM_EVENT_ON_LAYOUT);\n        }\n\n        void SetPadding(int32_t padding)\n        {\n            padding_ = padding;\n            // 自定义属性事件更新需要主动调用标记脏区接口。\n            nativeModule_->markDirty(handle_, NODE_NEED_MEASURE);\n        }\n\n    private:\n        static void OnStaticCustomEvent(ArkUI_NodeCustomEvent *event)\n        {\n            // 获取组件实例对象，调用相关实例方法。\n            auto customNode = reinterpret_cast<ArkUICustomContainerNode *>(OH_ArkUI_NodeCustomEvent_GetUserData(event));\n            auto type = OH_ArkUI_NodeCustomEvent_GetEventType(event);\n            switch (type) {\n                case ARKUI_NODE_CUSTOM_EVENT_ON_MEASURE:\n                    customNode->OnMeasure(event);\n                    break;\n                case ARKUI_NODE_CUSTOM_EVENT_ON_LAYOUT:\n                    customNode->OnLayout(event);\n                    break;\n                default:\n                    break;\n            }\n        }\n\n        // 自定义测算逻辑。\n        void OnMeasure(ArkUI_NodeCustomEvent *event)\n        {\n            auto layoutConstrain = OH_ArkUI_NodeCustomEvent_GetLayoutConstraintInMeasure(event);\n            // 创建子节点布局限制，复用父组件布局中的百分比参考值。\n            auto childLayoutConstrain = OH_ArkUI_LayoutConstraint_Copy(layoutConstrain);\n            int32_t maxConstrain = 1000;\n            OH_ArkUI_LayoutConstraint_SetMaxHeight(childLayoutConstrain, maxConstrain);\n            OH_ArkUI_LayoutConstraint_SetMaxWidth(childLayoutConstrain, maxConstrain);\n            OH_ArkUI_LayoutConstraint_SetMinHeight(childLayoutConstrain, 0);\n            OH_ArkUI_LayoutConstraint_SetMinWidth(childLayoutConstrain, 0);\n\n            // 测算子节点获取子节点最大值。\n            auto totalSize = nativeModule_->getTotalChildCount(handle_);\n            int32_t maxWidth = 0;\n            int32_t maxHeight = 0;\n            for (uint32_t i = 0; i < totalSize; i++) {\n                auto child = nativeModule_->getChildAt(handle_, i);\n                // 调用测算接口测算Native组件。\n                nativeModule_->measureNode(child, childLayoutConstrain);\n                auto size = nativeModule_->getMeasuredSize(child);\n                if (size.width > maxWidth) {\n                    maxWidth = size.width;\n                }\n                if (size.height > maxHeight) {\n                    maxHeight = size.height;\n                }\n            }\n            // 自定义测算为所有子节点大小加固定边距。该自定义节点最终的尺寸以此处设置的值为准。\n            const int paddingMultiplier = 2;\n            nativeModule_->setMeasuredSize(handle_, maxWidth + paddingMultiplier * padding_,\n                                           maxHeight + paddingMultiplier * padding_);\n        }\n\n        void OnLayout(ArkUI_NodeCustomEvent *event)\n        {\n            // 获取父组件期望位置并设置。\n            auto position = OH_ArkUI_NodeCustomEvent_GetPositionInLayout(event);\n            nativeModule_->setLayoutPosition(handle_, position.x, position.y);\n\n            // 设置子组件居中对齐。\n            auto totalSize = nativeModule_->getTotalChildCount(handle_);\n            auto selfSize = nativeModule_->getMeasuredSize(handle_);\n            for (uint32_t i = 0; i < totalSize; i++) {\n                auto child = nativeModule_->getChildAt(handle_, i);\n                // 获取子组件大小。\n                auto childSize = nativeModule_->getMeasuredSize(child);\n                // 布局子组件位置。\n                int32_t horizontalMargin = (selfSize.width - childSize.width) / 2;\n                int32_t verticalMargin = (selfSize.height - childSize.height) / 2;\n                nativeModule_->layoutNode(child, horizontalMargin, verticalMargin);\n            }\n        }\n\n        int32_t padding_ = 100;\n    };\n\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_ARKUICUSTOMCONTAINERNODE_H\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用自定义容器创建带文本的示例界面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"NativeEntry.h\"\n\n#include \"ArkUICustomContainerNode.h\"\n#include \"ArkUITextNode.h\"\n#include \"UITimer.h\"\n\n#include <arkui/native_node_napi.h>\n#include <arkui/native_type.h>\n#include <js_native_api.h>\n\nnamespace NativeModule {\n    namespace {\n        napi_env g_env;\n    } // namespace\n\n    napi_value CreateNativeRoot(napi_env env, napi_callback_info info)\n    {\n        size_t argc = 1;\n        napi_value args[1] = {nullptr};\n\n        napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n        ArkUI_NodeContentHandle contentHandle;\n        OH_ArkUI_GetNodeContentFromNapiValue(env, args[0], &contentHandle);\n        NativeEntry::GetInstance()->SetContentHandle(contentHandle);\n\n        // 创建自定义容器和文本组件。\n        auto node = std::make_shared<ArkUICustomContainerNode>();\n        node->SetBackgroundColor(0xFFE0FFFF);\n        auto textNode = std::make_shared<ArkUITextNode>();\n        textNode->SetTextContent(\"CustomContainer Example\");\n        const int32_t fontSize = 16;\n        textNode->SetFontSize(fontSize);\n        textNode->SetBackgroundColor(0xFFfffacd);\n        textNode->SetTextAlign(ARKUI_TEXT_ALIGNMENT_CENTER);\n        node->AddChild(textNode);\n        auto onClick = [](ArkUI_NodeEvent *event) {\n            auto textNode = (ArkUITextNode *)OH_ArkUI_NodeEvent_GetUserData(event);\n            textNode->SetFontColor(0xFF00FF7F);\n        };\n        textNode->RegisterOnClick(onClick, textNode.get());\n\n        // 保持Native侧对象到管理类中，维护生命周期。\n        NativeEntry::GetInstance()->SetRootNode(node);\n        g_env = env;\n        return nullptr;\n    }\n\n    napi_value DestroyNativeRoot(napi_env env, napi_callback_info info)\n    {\n        // 从管理类中释放Native侧对象。\n        NativeEntry::GetInstance()->DisposeRootNode();\n        return nullptr;\n    }\n\n} // namespace NativeModule\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "修改CMakeLists.txt，添加链接库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "  # CMakeLists.txt\n\n  # the minimum version of CMake.\n  cmake_minimum_required(VERSION 3.4.1)\n  project(testndk)\n\n  set(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})\n\n  include_directories(${NATIVERENDER_ROOT_PATH}\n                       ${NATIVERENDER_ROOT_PATH}/include)\n\n  add_library(entry SHARED NativeEntry.cpp napi_init.cpp)\n  # target_link_libraries(entry PUBLIC libace_napi.z.so, libace_ndk.z.so, libhilog_ndk.z.so)\n\n  find_library(\n       # Sets the name of the path variable.\n       hilog-lib\n       # Specifies the name of the NDK library that\n       # you want CMake to locate.\n       hilog_ndk.z\n   )\n\n  find_library(\n       # Sets the name of the path variable.\n       libace-lib\n       # Specifies the name of the NDK library that\n       # you want CMake to locate.\n       ace_ndk.z\n   )\n\n  find_library(\n       # Sets the name of the path variable.\n       libnapi-lib\n       # Specifies the name of the NDK library that\n       # you want CMake to locate.\n       ace_napi.z\n   )\n\n   find_library(\n        # Sets the name of the path variable.\n        libuv-lib\n        uv\n    )\n\n  target_link_libraries(entry PUBLIC\n       ${hilog-lib} ${libace-lib} ${libnapi-lib} ${libuv-lib} )\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义绘制组件",
      children: "自定义绘制组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例创建了一个自定义绘制组件，该绘制组件能够绘制自定义矩形，并使用上述自定义容器进行布局排布。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 自定义绘制组件"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(182318)/* ["default"] */.A) + "",
        width: "335",
        height: "664"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["按照", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B8%83%E5%B1%80%E5%AE%B9%E5%99%A8",
            children: "自定义布局容器"
          }), "章节准备前置工程。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建自定义绘制组件封装对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ArkUICustomNode.h\n// 自定义绘制组件示例\n\n#ifndef MYAPPLICATION_ARKUICUSTOMNODE_H\n#define MYAPPLICATION_ARKUICUSTOMNODE_H\n\n#include <native_drawing/drawing_brush.h>\n#include <native_drawing/drawing_canvas.h>\n#include <native_drawing/drawing_path.h>\n\n#include \"ArkUINode.h\"\n\nnamespace NativeModule {\n\n    class ArkUICustomNode : public ArkUINode {\n    public:\n        // 使用自定义组件类型ARKUI_NODE_CUSTOM创建组件。\n        ArkUICustomNode()\n            : ArkUINode((NativeModuleInstance::GetInstance()->GetNativeNodeAPI())->createNode(ARKUI_NODE_CUSTOM))\n        {\n            // 注册自定义事件监听器。\n            nativeModule_->addNodeCustomEventReceiver(handle_, OnStaticCustomEvent);\n            // 声明自定义事件并传递自身作为自定义数据。\n            nativeModule_->registerNodeCustomEvent(handle_, ARKUI_NODE_CUSTOM_EVENT_ON_DRAW, 0, this);\n        }\n\n        ~ArkUICustomNode() override\n        {\n            // 反注册自定义事件监听器。\n            nativeModule_->removeNodeCustomEventReceiver(handle_, OnStaticCustomEvent);\n            // 取消声明自定义事件。\n            nativeModule_->unregisterNodeCustomEvent(handle_, ARKUI_NODE_CUSTOM_EVENT_ON_DRAW);\n        }\n\n        void SetRectColor(uint32_t color)\n        {\n            color_ = color;\n            // 自定义绘制属性变更需要主动通知框架。\n            nativeModule_->markDirty(handle_, NODE_NEED_RENDER);\n        }\n\n    private:\n        static void OnStaticCustomEvent(ArkUI_NodeCustomEvent *event)\n        {\n            // 获取组件实例对象，调用相关实例方法。\n            auto customNode = reinterpret_cast<ArkUICustomNode *>(OH_ArkUI_NodeCustomEvent_GetUserData(event));\n            auto type = OH_ArkUI_NodeCustomEvent_GetEventType(event);\n            switch (type) {\n                case ARKUI_NODE_CUSTOM_EVENT_ON_DRAW:\n                    customNode->OnDraw(event);\n                    break;\n                default:\n                    break;\n            }\n        }\n\n        // 自定义绘制逻辑。\n        void OnDraw(ArkUI_NodeCustomEvent *event)\n        {\n            auto drawContext = OH_ArkUI_NodeCustomEvent_GetDrawContextInDraw(event);\n            // 获取图形绘制对象。\n            auto drawCanvas = reinterpret_cast<OH_Drawing_Canvas *>(OH_ArkUI_DrawContext_GetCanvas(drawContext));\n            // 获取组件大小。\n            auto size = OH_ArkUI_DrawContext_GetSize(drawContext);\n            // 绘制自定义内容。\n            auto path = OH_Drawing_PathCreate();\n            const float kQuarter = 0.25f;\n            const float kThreeQuarters = 0.75f;\n            OH_Drawing_PathMoveTo(path, size.width * kQuarter, size.height * kQuarter);\n            OH_Drawing_PathLineTo(path, size.width * kThreeQuarters, size.height * kQuarter);\n            OH_Drawing_PathLineTo(path, size.width * kThreeQuarters, size.height * kThreeQuarters);\n            OH_Drawing_PathLineTo(path, size.width * kQuarter, size.height * kThreeQuarters);\n            OH_Drawing_PathLineTo(path, size.width * kQuarter, size.height * kQuarter);\n            OH_Drawing_PathClose(path);\n            auto brush = OH_Drawing_BrushCreate();\n            OH_Drawing_BrushSetColor(brush, color_);\n            OH_Drawing_CanvasAttachBrush(drawCanvas, brush);\n            OH_Drawing_CanvasDrawPath(drawCanvas, path);\n            // 释放资源\n            OH_Drawing_BrushDestroy(brush);\n            OH_Drawing_PathDestroy(path);\n        }\n\n        uint32_t color_ = 0xFFFFE4B5;\n    };\n\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_ARKUICUSTOMNODE_H\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用自定义绘制组件和自定义容器创建示例界面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"NativeEntry.h\"\n\n#include \"ArkUICustomContainerNode.h\"\n#include \"ArkUICustomNode.h\"\n\n#include <arkui/native_node_napi.h>\n#include <arkui/native_type.h>\n#include <js_native_api.h>\n#include \"UITimer.h\"\n\nnamespace NativeModule {\n    namespace {\n        napi_env g_env;\n    } // namespace\n\n    napi_value CreateNativeRoot(napi_env env, napi_callback_info info)\n    {\n        size_t argc = 1;\n        napi_value args[1] = {nullptr};\n\n        napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n        // 获取NodeContent\n        ArkUI_NodeContentHandle contentHandle;\n        OH_ArkUI_GetNodeContentFromNapiValue(env, args[0], &contentHandle);\n        NativeEntry::GetInstance()->SetContentHandle(contentHandle);\n\n        // 创建自定义容器和自定义绘制组件。\n        auto node = std::make_shared<ArkUICustomContainerNode>();\n        node->SetBackgroundColor(0xFFE0FFFF);\n        auto customNode = std::make_shared<ArkUICustomNode>();\n        customNode->SetBackgroundColor(0xFFD3D3D3);\n        const int width = 150;\n        const int height = 150;\n        customNode->SetWidth(width);\n        customNode->SetHeight(height);\n        node->AddChild(customNode);\n        auto onClick = [](ArkUI_NodeEvent *event) {\n            auto customNode = (ArkUICustomNode *)OH_ArkUI_NodeEvent_GetUserData(event);\n            customNode->SetRectColor(0xFF00FF7F);\n        };\n        customNode->RegisterOnClick(onClick, customNode.get());\n\n        // 保持Native侧对象到管理类中，维护生命周期。\n        NativeEntry::GetInstance()->SetRootNode(node);\n        g_env = env;\n        return nullptr;\n    }\n\n    napi_value DestroyNativeRoot(napi_env env, napi_callback_info info)\n    {\n        // 从管理类中释放Native侧对象。\n        NativeEntry::GetInstance()->DisposeRootNode();\n        return nullptr;\n    }\n\n} // namespace NativeModule\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "修改CMakeLists.txt，添加链接库。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "  # CMakeLists.txt\n\n  # the minimum version of CMake.\n  cmake_minimum_required(VERSION 3.4.1)\n  project(testndk)\n\n  set(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})\n\n  include_directories(${NATIVERENDER_ROOT_PATH}\n                       ${NATIVERENDER_ROOT_PATH}/include)\n\n  add_library(entry SHARED NativeEntry.cpp napi_init.cpp)\n  # target_link_libraries(entry PUBLIC libace_napi.z.so, libace_ndk.z.so, libhilog_ndk.z.so)\n\n  find_library(\n       # Sets the name of the path variable.\n       hilog-lib\n       # Specifies the name of the NDK library that\n       # you want CMake to locate.\n       hilog_ndk.z\n   )\n\n  find_library(\n       # Sets the name of the path variable.\n       libace-lib\n       # Specifies the name of the NDK library that\n       # you want CMake to locate.\n       ace_ndk.z\n   )\n\n  find_library(\n       # Sets the name of the path variable.\n       libnapi-lib\n       # Specifies the name of the NDK library that\n       # you want CMake to locate.\n       ace_napi.z\n   )\n\n   find_library(\n        # Sets the name of the path variable.\n        libuv-lib\n        uv\n    )\n\n  target_link_libraries(entry PUBLIC\n       ${hilog-lib} ${libace-lib} ${libnapi-lib} ${libuv-lib} libnative_drawing.so)\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "不规则网格布局示例",
      children: "不规则网格布局示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下示例创建了一个不规则网格布局容器，支持不同大小的网格单元，实现类似瀑布流的布局效果。完整示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/NativeType/CustomDrawIrregularSample",
        children: "CustomDrawIrregularSample"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), " 不规则网格布局效果"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(740587)/* ["default"] */.A) + "",
        width: "470",
        height: "371"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["按照", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B8%83%E5%B1%80%E5%AE%B9%E5%99%A8",
            children: "自定义布局容器"
          }), "章节准备前置工程。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建不规则网格布局容器组件封装对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// ArkUIIrregularGridNode.h\n// 不规则网格布局容器示例\n\n#ifndef MYAPPLICATION_ARKUIIRREGULARGRIDNODE_H\n#define MYAPPLICATION_ARKUIIRREGULARGRIDNODE_H\n\n#include \"ArkUINode.h\"\n#include <vector>\n#include <map>\n\nnamespace NativeModule {\n\n// 网格单元配置\nstruct GridItemConfig {\n    int32_t rowSpan = 1;    // 占据的行数\n    int32_t columnSpan = 1; // 占据的列数\n};\n\nclass ArkUIIrregularGridNode : public ArkUINode {\npublic:\n    // 使用自定义组件类型ARKUI_NODE_CUSTOM创建组件\n    ArkUIIrregularGridNode()\n        : ArkUINode((NativeModuleInstance::GetInstance()->GetNativeNodeAPI())->createNode(ARKUI_NODE_CUSTOM))\n    {\n        // 注册自定义事件监听器\n        nativeModule_->addNodeCustomEventReceiver(handle_, OnStaticCustomEvent);\n        // 声明自定义事件并传递自身作为自定义数据\n        nativeModule_->registerNodeCustomEvent(handle_, ARKUI_NODE_CUSTOM_EVENT_ON_MEASURE, 0, this);\n        nativeModule_->registerNodeCustomEvent(handle_, ARKUI_NODE_CUSTOM_EVENT_ON_LAYOUT, 0, this);\n    }\n\n    ~ArkUIIrregularGridNode() override\n    {\n        // 反注册自定义事件监听器\n        nativeModule_->removeNodeCustomEventReceiver(handle_, OnStaticCustomEvent);\n        // 取消声明自定义事件\n        nativeModule_->unregisterNodeCustomEvent(handle_, ARKUI_NODE_CUSTOM_EVENT_ON_MEASURE);\n        nativeModule_->unregisterNodeCustomEvent(handle_, ARKUI_NODE_CUSTOM_EVENT_ON_LAYOUT);\n    }\n\n    // 设置列数\n    void SetColumnCount(int32_t count)\n    {\n        columnCount_ = count;\n        nativeModule_->markDirty(handle_, NODE_NEED_MEASURE);\n    }\n\n    // 设置网格间距\n    void SetGap(int32_t gap)\n    {\n        gap_ = gap;\n        nativeModule_->markDirty(handle_, NODE_NEED_MEASURE);\n    }\n\n    // 设置子组件的网格配置\n    void SetItemConfig(ArkUI_NodeHandle child, int32_t rowSpan, int32_t columnSpan)\n    {\n        GridItemConfig config;\n        config.rowSpan = rowSpan;\n        config.columnSpan = columnSpan;\n        itemConfigs_[child] = config;\n        nativeModule_->markDirty(handle_, NODE_NEED_MEASURE);\n    }\n\nprivate:\n    static void OnStaticCustomEvent(ArkUI_NodeCustomEvent *event)\n    {\n        // 获取组件实例对象，调用相关实例方法\n        auto customNode = reinterpret_cast<ArkUIIrregularGridNode *>(OH_ArkUI_NodeCustomEvent_GetUserData(event));\n        auto type = OH_ArkUI_NodeCustomEvent_GetEventType(event);\n        switch (type) {\n            case ARKUI_NODE_CUSTOM_EVENT_ON_MEASURE:\n                customNode->OnMeasure(event);\n                break;\n            case ARKUI_NODE_CUSTOM_EVENT_ON_LAYOUT:\n                customNode->OnLayout(event);\n                break;\n            default:\n                break;\n        }\n    }\n\n    // 测算单个子组件并更新列高信息\n    void MeasureChild(ArkUI_NodeHandle child, int32_t cellWidth,\n        ArkUI_LayoutConstraint *childConstraint, std::vector<int32_t> &columnHeights)\n    {\n        GridItemConfig config = {1, 1};\n        auto it = itemConfigs_.find(child);\n        if (it != itemConfigs_.end()) {\n            config = it->second;\n        }\n        if (config.columnSpan > columnCount_) {\n            config.columnSpan = columnCount_;\n        }\n\n        int32_t startColumn = FindLowestColumn(columnHeights, config.columnSpan);\n        int32_t startY = 0;\n        for (int32_t col = startColumn; col < startColumn + config.columnSpan && col < columnCount_; col++) {\n            if (columnHeights[col] > startY) {\n                startY = columnHeights[col];\n            }\n        }\n\n        int32_t itemWidth = cellWidth * config.columnSpan + gap_ * (config.columnSpan - 1);\n        OH_ArkUI_LayoutConstraint_SetMaxWidth(childConstraint, itemWidth);\n        OH_ArkUI_LayoutConstraint_SetMinWidth(childConstraint, itemWidth);\n        nativeModule_->measureNode(child, childConstraint);\n        auto size = nativeModule_->getMeasuredSize(child);\n\n        LayoutItemInfo info;\n        info.x = startColumn * (cellWidth + gap_);\n        info.y = startY;\n        info.width = size.width;\n        info.height = size.height;\n        layoutInfo_.push_back(info);\n\n        int32_t newHeight = startY + size.height + gap_;\n        for (int32_t col = startColumn; col < startColumn + config.columnSpan && col < columnCount_; col++) {\n            columnHeights[col] = newHeight;\n        }\n    }\n\n    // 自定义测算逻辑：不规则网格布局\n    void OnMeasure(ArkUI_NodeCustomEvent *event)\n    {\n        auto layoutConstrain = OH_ArkUI_NodeCustomEvent_GetLayoutConstraintInMeasure(event);\n        int32_t maxWidth = OH_ArkUI_LayoutConstraint_GetMaxWidth(layoutConstrain);\n\n        int32_t totalGap = gap_ * (columnCount_ - 1);\n        int32_t cellWidth = (maxWidth - totalGap) / columnCount_;\n\n        auto childConstraint = OH_ArkUI_LayoutConstraint_Copy(layoutConstrain);\n        std::vector<int32_t> columnHeights(columnCount_, 0);\n        layoutInfo_.clear();\n\n        auto totalSize = nativeModule_->getTotalChildCount(handle_);\n        for (uint32_t i = 0; i < totalSize; i++) {\n            auto child = nativeModule_->getChildAt(handle_, i);\n            MeasureChild(child, cellWidth, childConstraint, columnHeights);\n        }\n\n        int32_t maxHeight = 0;\n        for (int32_t height : columnHeights) {\n            if (height > maxHeight) {\n                maxHeight = height;\n            }\n        }\n        if (maxHeight > gap_) {\n            maxHeight -= gap_;\n        }\n\n        nativeModule_->setMeasuredSize(handle_, maxWidth, maxHeight);\n        OH_ArkUI_LayoutConstraint_Dispose(childConstraint);\n    }\n\n    void OnLayout(ArkUI_NodeCustomEvent *event)\n    {\n        // 获取父组件期望位置并设置\n        auto position = OH_ArkUI_NodeCustomEvent_GetPositionInLayout(event);\n        nativeModule_->setLayoutPosition(handle_, position.x, position.y);\n\n        // 布局子组件\n        auto totalSize = nativeModule_->getTotalChildCount(handle_);\n        for (uint32_t i = 0; i < totalSize && i < layoutInfo_.size(); i++) {\n            auto child = nativeModule_->getChildAt(handle_, i);\n            nativeModule_->layoutNode(child, layoutInfo_[i].x, layoutInfo_[i].y);\n        }\n    }\n\n    // 找到最矮的列，确保可以放下指定列跨度的项\n    int32_t FindLowestColumn(const std::vector<int32_t>& columnHeights, int32_t columnSpan)\n    {\n        int32_t lowestColumn = 0;\n        int32_t lowestHeight = INT32_MAX;\n\n        // 遍历所有可能的起始列\n        for (int32_t col = 0; col <= columnCount_ - columnSpan; col++) {\n            // 找到这个范围内最高的列\n            int32_t maxHeightInRange = 0;\n            for (int32_t i = col; i < col + columnSpan; i++) {\n                if (columnHeights[i] > maxHeightInRange) {\n                    maxHeightInRange = columnHeights[i];\n                }\n            }\n\n            // 如果这个范围的最高点比当前最低点还低，更新最低列\n            if (maxHeightInRange < lowestHeight) {\n                lowestHeight = maxHeightInRange;\n                lowestColumn = col;\n            }\n        }\n\n        return lowestColumn;\n    }\n\n    struct LayoutItemInfo {\n        int32_t x;\n        int32_t y;\n        int32_t width;\n        int32_t height;\n    };\n\n    int32_t columnCount_ = 3;\n    int32_t gap_ = 10;\n    std::map<ArkUI_NodeHandle, GridItemConfig> itemConfigs_;\n    std::vector<LayoutItemInfo> layoutInfo_;\n};\n\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_ARKUIIRREGULARGRIDNODE_H\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用不规则网格布局容器创建示例界面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"NativeEntry.h\"\n\n#include \"ArkUIIrregularGridNode.h\"\n#include \"ArkUINode.h\"\n\n#include <arkui/native_node_napi.h>\n#include <arkui/native_type.h>\n#include <js_native_api.h>\n#include <utility>\n#include <vector>\n\nnamespace NativeModule {\nnamespace {\nnapi_env g_env = nullptr;\n\nconstexpr uint32_t GRID_BACKGROUND_COLOR = 0xFFF5F5F5;\nconstexpr int32_t GRID_COLUMN_COUNT = 4;\nconstexpr int32_t GRID_GAP = 8;\nconstexpr float GRID_ITEM_RADIUS = 8.0f;\nconstexpr float GRID_ITEM_BORDER_WIDTH = 1.0f;\nconstexpr uint32_t GRID_ITEM_BORDER_COLOR = 0xFFCCCCCC;\nconstexpr float GRID_ITEM_BASE_HEIGHT = 60.0f;\nconstexpr float GRID_ITEM_HEIGHT_STEP = 40.0f;\n\nusing GridItemSize = std::pair<int32_t, int32_t>;\n\nconst std::vector<GridItemSize>& GetGridItemSizes()\n{\n    static const std::vector<GridItemSize> itemSizes = {\n        {1, 1}, // 小方块\n        {2, 1}, // 竖长条\n        {1, 3}, // 横长条\n        {2, 2}, // 大方块\n        {1, 1}, // 小方块\n        {1, 2}, // 横条\n        {3, 1}, // 很长的竖条\n    };\n    return itemSizes;\n}\n\nconst std::vector<uint32_t>& GetGridItemColors()\n{\n    static const std::vector<uint32_t> colors = {\n        0xFF64B5F6, // 蓝色\n        0xFFE57373, // 红色\n        0xFF81C784, // 绿色\n        0xFFFFB74D, // 橙色\n        0xFF9575CD, // 紫色\n        0xFF4DB6AC, // 青色\n        0xFFFFD54F, // 黄色\n        0xFFF06292, // 粉色\n        0xFF7986CB, // 靛蓝\n        0xFFA1887F, // 棕色\n    };\n    return colors;\n}\n\nvoid SetNodeColorAttribute(ArkUI_NativeNodeAPI_1* nodeAPI, ArkUI_NodeHandle node, uint32_t color)\n{\n    ArkUI_NumberValue bgColor[] = {{.u32 = color}};\n    ArkUI_AttributeItem bgColorItem = {bgColor, 1};\n    nodeAPI->setAttribute(node, NODE_BACKGROUND_COLOR, &bgColorItem);\n}\n\nvoid SetNodeBorderRadiusAttribute(ArkUI_NativeNodeAPI_1* nodeAPI, ArkUI_NodeHandle node, float radius)\n{\n    ArkUI_NumberValue radiusValue[] = {{.f32 = radius}};\n    ArkUI_AttributeItem radiusItem = {radiusValue, 1};\n    nodeAPI->setAttribute(node, NODE_BORDER_RADIUS, &radiusItem);\n}\n\nvoid SetNodeBorderStyle(ArkUI_NativeNodeAPI_1* nodeAPI, ArkUI_NodeHandle node)\n{\n    ArkUI_NumberValue borderWidth[] = {{.f32 = GRID_ITEM_BORDER_WIDTH}};\n    ArkUI_AttributeItem borderWidthItem = {borderWidth, 1};\n    nodeAPI->setAttribute(node, NODE_BORDER_WIDTH, &borderWidthItem);\n\n    ArkUI_NumberValue borderColor[] = {{.u32 = GRID_ITEM_BORDER_COLOR}};\n    ArkUI_AttributeItem borderColorItem = {borderColor, 1};\n    nodeAPI->setAttribute(node, NODE_BORDER_COLOR, &borderColorItem);\n}\n\nvoid SetNodeHeightByRowSpan(ArkUI_NativeNodeAPI_1* nodeAPI, ArkUI_NodeHandle node, int32_t rowSpan)\n{\n    float minHeight = GRID_ITEM_BASE_HEIGHT + (rowSpan - 1) * GRID_ITEM_HEIGHT_STEP;\n    ArkUI_NumberValue minHeightValue[] = {{.f32 = minHeight}};\n    ArkUI_AttributeItem minHeightItem = {minHeightValue, 1};\n    nodeAPI->setAttribute(node, NODE_HEIGHT, &minHeightItem);\n}\n\nvoid AddGridItems(\n    ArkUI_NativeNodeAPI_1* nodeAPI,\n    const std::shared_ptr<ArkUIIrregularGridNode>& gridNode,\n    const std::vector<GridItemSize>& itemSizes,\n    const std::vector<uint32_t>& colors)\n{\n    for (size_t i = 0; i < itemSizes.size(); ++i) {\n        auto itemNode = nodeAPI->createNode(ARKUI_NODE_STACK);\n        SetNodeColorAttribute(nodeAPI, itemNode, colors[i % colors.size()]);\n        SetNodeBorderRadiusAttribute(nodeAPI, itemNode, GRID_ITEM_RADIUS);\n        SetNodeBorderStyle(nodeAPI, itemNode);\n        SetNodeHeightByRowSpan(nodeAPI, itemNode, itemSizes[i].first);\n        gridNode->SetItemConfig(itemNode, itemSizes[i].first, itemSizes[i].second);\n        nodeAPI->addChild(gridNode->GetHandle(), itemNode);\n    }\n}\n} // namespace\n\nnapi_value CreateNativeRoot(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    ArkUI_NodeContentHandle contentHandle;\n    OH_ArkUI_GetNodeContentFromNapiValue(env, args[0], &contentHandle);\n    NativeEntry::GetInstance()->SetContentHandle(contentHandle);\n\n    auto gridNode = std::make_shared<ArkUIIrregularGridNode>();\n    gridNode->SetBackgroundColor(GRID_BACKGROUND_COLOR);\n    gridNode->SetColumnCount(GRID_COLUMN_COUNT);\n    gridNode->SetGap(GRID_GAP);\n\n    auto* nodeAPI = NativeModuleInstance::GetInstance()->GetNativeNodeAPI();\n    AddGridItems(nodeAPI, gridNode, GetGridItemSizes(), GetGridItemColors());\n\n    // 保持Native侧对象到管理类中，维护生命周期\n    NativeEntry::GetInstance()->SetRootNode(gridNode);\n    g_env = env;\n    return nullptr;\n}\n\nnapi_value DestroyNativeRoot(napi_env env, napi_callback_info info)\n{\n    // 从管理类中释放Native侧对象\n    NativeEntry::GetInstance()->DisposeRootNode();\n    return nullptr;\n}\n\n} // namespace NativeModule\n"
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
182318(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478069-91739216e209ccda55ab2696e189374a.png");

},
332131(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958068-75b319738b4e2cbd931023de25f8bc2d.png");

},
446472(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
740587(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798420-167f71d329cbad31687b06585c67b981.jpg");

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