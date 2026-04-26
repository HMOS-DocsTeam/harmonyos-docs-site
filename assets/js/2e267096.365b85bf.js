"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["629413"], {
913969(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_use_ndk_ndk_accessibility_xcomponent_ndk_accessibility_xcomponent_md_2e2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-use-ndk-ndk-accessibility-xcomponent-ndk-accessibility-xcomponent-md-2e2.json
var site_docs_arkui_arkts_use_ndk_ndk_accessibility_xcomponent_ndk_accessibility_xcomponent_md_2e2_namespaceObject = JSON.parse('{"id":"arkui/arkts-use-ndk/ndk-accessibility-xcomponent/ndk-accessibility-xcomponent","title":"通过自绘制接入无障碍","description":"通过自定义绘制接入的第三方框架平台，NDK提供了对接无障碍服务的接口函数，使三方框架组件能够支持ArkUI中的基本无障碍功能，包括焦点获取、获取无障碍节点和操作响应。","source":"@site/docs/arkui/arkts-use-ndk/ndk-accessibility-xcomponent/ndk-accessibility-xcomponent.md","sourceDirName":"arkui/arkts-use-ndk/ndk-accessibility-xcomponent","slug":"/arkui/arkts-use-ndk/ndk-accessibility-xcomponent/","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-accessibility-xcomponent/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"通过自绘制接入无障碍","sidebar_position":11,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-accessibility-xcomponent","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"构建渲染节点","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-embed-render-components/"},"next":{"title":"自定义绘制","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/arkts-user-defined-draw/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-use-ndk/ndk-accessibility-xcomponent/ndk-accessibility-xcomponent.md


const frontMatter = {
	title: '通过自绘制接入无障碍',
	sidebar_position: 11,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-accessibility-xcomponent',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '通过自绘制接入无障碍';

const assets = {

};



const toc = [{
  "value": "基于Xcomponent的自绘制接入方式",
  "id": "基于xcomponent的自绘制接入方式",
  "level": 2
}, {
  "value": "基于CustomNode的自绘制接入方式",
  "id": "基于customnode的自绘制接入方式",
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
        id: "通过自绘制接入无障碍",
        children: "通过自绘制接入无障碍"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-use-ndk/arkts-user-defined-draw",
        children: "自定义绘制"
      }), "接入的第三方框架平台，NDK提供了对接无障碍服务的接口函数，使三方框架组件能够支持ArkUI中的基本无障碍功能，包括焦点获取、获取无障碍节点和操作响应。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 13开始，支持基于Xcomponent的自绘制方式接入。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，支持基于CustomNode构建渲染节点树的自绘制方式接入。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["三方框架从绘制容器组件获取到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/pi-arkui-accessibility-arkui-accessibilityprovider/pi-arkui-accessibility-arkui-accessibilityprovider",
        children: "ArkUI_AccessibilityProvider"
      }), "，通过实现其中对接无障碍的回调函数，来适配无障碍系统发出的操作", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_accessibility_actiontype",
        children: "Action"
      }), "，并针对组件交互行为发送无障碍事件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#arkui_accessibilityeventtype",
        children: "Event"
      }), "到无障碍子系统，实现无障碍辅助应用的交互体验。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["基于Xcomponent的自绘制方式接入方式通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-xcomponent-h/capi-native-interface-xcomponent-h#oh_nativexcomponent_getnativeaccessibilityprovider",
        children: "OH_NativeXComponent_GetNativeAccessibilityProvider"
      }), "获得无障碍接入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/pi-arkui-accessibility-arkui-accessibilityprovider/pi-arkui-accessibility-arkui-accessibilityprovider",
        children: "ArkUI_AccessibilityProvider"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["基于CustomNode构建渲染节点树的自绘制方式接入方式通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#oh_arkui_nativemodule_getnativeaccessibilityprovider",
        children: "OH_ArkUI_NativeModule_GetNativeAccessibilityProvider"
      }), "获得无障碍接入", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/pi-arkui-accessibility-arkui-accessibilityprovider/pi-arkui-accessibility-arkui-accessibilityprovider",
        children: "ArkUI_AccessibilityProvider"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果需要支持单实例，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#oh_arkui_accessibilityproviderregistercallback",
        children: "OH_ArkUI_AccessibilityProviderRegisterCallback"
      }), "注册接入无障碍所需的回调函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/accessibility-arkui-accessibilityprovidercallbacks/accessibility-arkui-accessibilityprovidercallbacks",
        children: "ArkUI_AccessibilityProviderCallbacks"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果需要支持多实例，则通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#oh_arkui_accessibilityproviderregistercallbackwithinstance",
        children: "OH_ArkUI_AccessibilityProviderRegisterCallbackWithInstance"
      }), "注册接入无障碍所需的回调函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/y-arkui-accessibilityprovidercallbackswithinstance/y-arkui-accessibilityprovidercallbackswithinstance",
        children: "ArkUI_AccessibilityProviderCallbacksWithInstance"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(111026)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "无障碍能力：指开发者能够创建可访问的应用界面，满足视觉、听觉、运动和认知障碍等用户需求的能力。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["实现", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#oh_arkui_accessibilityproviderregistercallback",
          children: "OH_ArkUI_AccessibilityProviderRegisterCallback"
        }), "或者", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#oh_arkui_accessibilityproviderregistercallbackwithinstance",
          children: "OH_ArkUI_AccessibilityProviderRegisterCallbackWithInstance"
        }), "回调查询接口时，查询到的每个无障碍节点信息通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#oh_arkui_addandgetaccessibilityelementinfo",
          children: "OH_ArkUI_AddAndGetAccessibilityElementInfo"
        }), "创建分配element内存，并将其加入到指定的elementList中。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#oh_arkui_sendaccessibilityasyncevent",
          children: "OH_ArkUI_SendAccessibilityAsyncEvent"
        }), "发送事件时，需要使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#oh_arkui_createaccessibilityeventinfo",
          children: "OH_ArkUI_CreateAccessibilityEventInfo"
        }), "创建", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/i-arkui-accessibility-arkui-accessibilityeventinfo/i-arkui-accessibility-arkui-accessibilityeventinfo",
          children: "ArkUI_AccessibilityEventInfo"
        }), "，使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#oh_arkui_createaccessibilityelementinfo",
          children: "OH_ArkUI_CreateAccessibilityElementInfo"
        }), "创建", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/arkui-accessibility-arkui-accessibilityelementinfo/arkui-accessibility-arkui-accessibilityelementinfo",
          children: "ArkUI_AccessibilityElementInfo"
        }), "，使用结束后，需要调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#oh_arkui_destoryaccessibilityeventinfo",
          children: "OH_ArkUI_DestoryAccessibilityEventInfo"
        }), "以及", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#oh_arkui_destoryaccessibilityelementinfo",
          children: "OH_ArkUI_DestoryAccessibilityElementInfo"
        }), "销毁函数释放内存。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "回调函数打印日志时，携带输入的requestId，用于关联一次交互过程相关的日志，便于索引查询整个流程，协助问题定位。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基于xcomponent的自绘制接入方式",
      children: "基于Xcomponent的自绘制接入方式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下示例提供了对接无障碍能力的实现方法，仅包含主要步骤，完整示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/tree/master/code/DocsSample/ArkUISample/AccessibilityCapi",
        children: "AccessibilityCapiSample"
      }), "。对接完成后，在开启无障碍功能时，可使XComponent中的三方框架绘制组件接入，实现无障碍交互。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["按照自定义渲染（XComponent）的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-add-component/napi-xcomponent-guidelines#%E7%AE%A1%E7%90%86xcomponent%E6%8C%81%E6%9C%89surface%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F",
            children: "使用OH_ArkUI_SurfaceHolder管理Surface生命周期"
          }), "场景创建前置工程。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获得无障碍接入provider并注册回调函数（以多实例场景为例）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <arkui/native_interface_accessibility.h>\n#include <string>\n#include \"common/common.h\"\n// 完整实现请参考AccessibilityCapiSample。\n#include \"fakenode/fake_node.h\"\n// 完整实现请参考AccessibilityCapiSample。\n#include \"AccessibilityManager.h\"\n\n// ...\nAccessibilityManager::AccessibilityManager()\n{\n // 多实例场景\n    accessibilityProviderCallbacksWithInstance_.findAccessibilityNodeInfosById = FindAccessibilityNodeInfosById;\n    accessibilityProviderCallbacksWithInstance_.findAccessibilityNodeInfosByText = FindAccessibilityNodeInfosByText;\n    accessibilityProviderCallbacksWithInstance_.findFocusedAccessibilityNode = FindFocusedAccessibilityNode;\n    accessibilityProviderCallbacksWithInstance_.findNextFocusAccessibilityNode = FindNextFocusAccessibilityNode;\n    accessibilityProviderCallbacksWithInstance_.executeAccessibilityAction = ExecuteAccessibilityAction;\n    accessibilityProviderCallbacksWithInstance_.clearFocusedFocusAccessibilityNode = ClearFocusedFocusAccessibilityNode;\n    accessibilityProviderCallbacksWithInstance_.getAccessibilityNodeCursorPosition = GetAccessibilityNodeCursorPosition;\n // 单实例场景\n    accessibilityProviderCallbacks_.findAccessibilityNodeInfosById = FindAccessibilityNodeInfosById;\n    accessibilityProviderCallbacks_.findAccessibilityNodeInfosByText = FindAccessibilityNodeInfosByText;\n    accessibilityProviderCallbacks_.findFocusedAccessibilityNode = FindFocusedAccessibilityNode;\n    accessibilityProviderCallbacks_.findNextFocusAccessibilityNode = FindNextFocusAccessibilityNode;\n    accessibilityProviderCallbacks_.executeAccessibilityAction = ExecuteAccessibilityAction;\n    accessibilityProviderCallbacks_.clearFocusedFocusAccessibilityNode = ClearFocusedFocusAccessibilityNode;\n    accessibilityProviderCallbacks_.getAccessibilityNodeCursorPosition = GetAccessibilityNodeCursorPosition;\n}\n\nvoid AccessibilityManager::Initialize(const std::string &id, OH_NativeXComponent *nativeXComponent)\n{\n    int32_t ret = OH_NativeXComponent_GetNativeAccessibilityProvider(nativeXComponent, &provider);\n    if (provider == nullptr) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, LOG_PRINT_TEXT, \"get provider is null\");\n        return;\n    }\n    // 2.注册回调函数\n    ret = OH_ArkUI_AccessibilityProviderRegisterCallbackWithInstance(id.c_str(), provider,\n        &accessibilityProviderCallbacksWithInstance_);\n    if (ret != 0) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, LOG_PRINT_TEXT,\n                     \"InterfaceDesignTest OH_ArkUI_AccessibilityProviderRegisterCallback failed\");\n        return;\n    }\n    g_provider = provider;\n}\n\n// ...\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "三方框架需要实现如下回调函数。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "基于指定的节点，查询所需的节点信息"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(999393)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当无障碍系统传入的elementId为-1时，代表其约定的“根节点标识”。三方框架需将该外部标识，映射为自身内部节点树中唯一根节点的ID，以便无障碍系统正确定位到框架的根节点。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "三方框架需要提供一个且仅包含一个根节点。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["根节点的属性中的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#oh_arkui_accessibilityelementinfosetparentid",
              children: "parentId"
            }), "须设置为特殊值-2100000。在无障碍树中，根节点是最顶层节点，没有父节点。这个特殊值-2100000是ArkUI无障碍框架的硬编码约定，用于明确标识 “此节点为根节点，无父节点”。使用一个特殊值而非0或-1，是为了防止与三方框架内部的有效ID产生冲突，确保系统能准确识别根节点。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["根节点的属性中的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#oh_arkui_accessibilityelementinfosetenabled",
              children: "enabled"
            }), "须设置为true。如果设置为false，根节点被禁用，无障碍系统会认为整个控件树都不可交互，从而忽略所有子节点的查询和操作。根节点作为整个控件树的入口，必须处于可用状态，才能保证无障碍服务正常工作。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["根节点的属性中的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#oh_arkui_accessibilityelementinfosetvisible",
              children: "visible"
            }), "须设置为true。无障碍系统只对可见的节点进行遍历和交互。如果设置为false，根节点不可见，整个控件树都会被无障碍服务忽略，导致三方框架的无障碍能力完全失效。确保用户在使用无障碍功能时，能感知到三方框架渲染的所有界面元素。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t AccessibilityManager::FindAccessibilityNodeInfosById(const char* instanceId, int64_t elementId,\n    ArkUI_AccessibilitySearchMode mode, int32_t requestId, ArkUI_AccessibilityElementInfoList *elementList)\n{\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, LOG_PRINT_TEXT,\n                 \"FindAccessibilityNodeInfosById start,instanceId %{public}s elementId: %{public}ld, \"\n                 \"requestId: %{public}d, mode: %{public}d\", instanceId,\n                 elementId, requestId, static_cast<int32_t>(mode));\n    if (elementList == nullptr) {\n        OH_LOG_Print(LOG_APP, LOG_ERROR, LOG_PRINT_DOMAIN, LOG_PRINT_TEXT,\n                     \"FindAccessibilityNodeInfosById elementList is null\");\n        return OH_NATIVEXCOMPONENT_RESULT_FAILED;\n    }\n    int ret = 0;\n    const int parentOfRoot = -2100000;\n    if (elementId == -1) {\n        elementId = 0;\n    }\n    \n    if (mode == ARKUI_ACCESSIBILITY_NATIVE_SEARCH_MODE_PREFETCH_RECURSIVE_CHILDREN) {\n        // 三方框架需要在该方法中实现自己的查找策略，返回无障碍节点信息给无障碍服务，以下逻辑仅为示意过程。\n        // ArkUI框架设计的特殊值，根节点必须设置parentId为这个值。\n        auto rootNode = OH_ArkUI_AddAndGetAccessibilityElementInfo(elementList);\n        if (!rootNode) {\n            return OH_NATIVEXCOMPONENT_RESULT_FAILED;\n        }\n        // 设置根节点信息\n        OH_ArkUI_AccessibilityElementInfoSetElementId(rootNode, 0);\n        OH_ArkUI_AccessibilityElementInfoSetParentId(rootNode, parentOfRoot);\n        FakeWidget::Instance().fillAccessibilityElement(rootNode);\n\n        ArkUI_AccessibleRect rect;\n        rect.leftTopX = NUMBER_ZERO;\n        rect.leftTopY = NUMBER_ZERO;\n        rect.rightBottomX = NUMBER_THIRD;\n        rect.rightBottomY = NUMBER_THIRD;\n        ret = OH_ArkUI_AccessibilityElementInfoSetScreenRect(rootNode, &rect);\n        // 设置根节点不可被无障碍辅助服务所识别。\n        OH_ArkUI_AccessibilityElementInfoSetAccessibilityLevel(rootNode, \"no\");\n        auto objects = FakeWidget::Instance().GetAllObjects(instanceId);\n        int64_t childNodes[1024];\n        for (int i = 0; i < objects.size(); i++) {\n            int elementId = i + 1;\n\n            childNodes[i] = elementId;\n        }\n        for (int i = 0; i < objects.size(); i++) {\n            int elementId = i + 1;\n            childNodes[i] = elementId;\n            auto child = OH_ArkUI_AddAndGetAccessibilityElementInfo(elementList);\n            // 设置子节点信息。\n            OH_ArkUI_AccessibilityElementInfoSetElementId(child, elementId);\n            OH_ArkUI_AccessibilityElementInfoSetParentId(child, 0);\n            // 设置当前组件可被无障碍辅助服务所识别。\n            OH_ArkUI_AccessibilityElementInfoSetAccessibilityLevel(child, \"yes\");\n            objects[i]->fillAccessibilityElement(child);\n\n            ArkUI_AccessibleRect rect;\n            rect.leftTopX = i * NUMBER_FIRST;\n            rect.leftTopY = NUMBER_FIRST;\n            rect.rightBottomX = i * NUMBER_FIRST + NUMBER_FIRST;\n            rect.rightBottomY = NUMBER_SECOND;\n            OH_ArkUI_AccessibilityElementInfoSetScreenRect(child, &rect);\n            if (objects[i]->ObjectType() == \"FakeSlider\") {\n                auto rangeInfo = objects[i]->GetRangeInfo();\n                OH_ArkUI_AccessibilityElementInfoSetRangeInfo(child, &rangeInfo);\n            }\n            if (objects[i]->ObjectType() == \"FakeList\") {\n                auto gridInfo = objects[i]->GetGridInfo();\n                OH_ArkUI_AccessibilityElementInfoSetGridInfo(child, &gridInfo);\n            }\n            if (objects[i]->ObjectType() == \"FakeSwiper\") {\n                auto gridItemInfo = objects[i]->GetGridItemInfo();\n                OH_ArkUI_AccessibilityElementInfoSetGridItemInfo(child, &gridItemInfo);\n            }\n        }\n\n        ret = OH_ArkUI_AccessibilityElementInfoSetChildNodeIds(rootNode, objects.size(), childNodes);\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, LOG_PRINT_TEXT,\n                     \"FindAccessibilityNodeInfosById child count: %{public}ld %{public}d\",\n                     objects.size(), ret);\n    } else if (mode == ARKUI_ACCESSIBILITY_NATIVE_SEARCH_MODE_PREFETCH_CURRENT) {\n        auto &widget = FakeWidget::Instance();\n        AccessibleObject *obj = nullptr;\n        if (elementId == 0) {\n            obj = &widget;\n        } else {\n            obj = widget.GetChild(elementId);\n        }\n        if (!obj) {\n            return OH_NATIVEXCOMPONENT_RESULT_FAILED;\n        }\n        auto node = OH_ArkUI_AddAndGetAccessibilityElementInfo(elementList);\n        OH_ArkUI_AccessibilityElementInfoSetElementId(node, elementId);\n        OH_ArkUI_AccessibilityElementInfoSetParentId(node, elementId == 0 ? parentOfRoot : 0);\n        OH_ArkUI_AccessibilityElementInfoSetAccessibilityLevel(node, elementId == 0 ?  \"no\" : \"yes\");\n        obj->fillAccessibilityElement(node);\n        ArkUI_AccessibleRect rect;\n        if (elementId == 0) {\n            rect.leftTopX = NUMBER_ZERO;\n            rect.leftTopY = NUMBER_ZERO;\n            rect.rightBottomX = NUMBER_THIRD;\n            rect.rightBottomY = NUMBER_THIRD;\n        } else {\n            int i = elementId - 1;\n            rect.leftTopX = i * NUMBER_FIRST;\n            rect.leftTopY = NUMBER_FIRST;\n            rect.rightBottomX = i * NUMBER_FIRST + NUMBER_FIRST;\n            rect.rightBottomY = NUMBER_SECOND;\n        }\n\n        OH_ArkUI_AccessibilityElementInfoSetScreenRect(node, &rect);\n        if (elementId == 0) {\n            auto objects = FakeWidget::Instance().GetAllObjects(instanceId);\n            int64_t childNodes[1024];\n\n            for (int i = 0; i < objects.size(); i++) {\n                int elementId = i + 1;\n\n                childNodes[i] = elementId;\n                auto child = OH_ArkUI_AddAndGetAccessibilityElementInfo(elementList);\n                OH_ArkUI_AccessibilityElementInfoSetElementId(child, elementId);\n                OH_ArkUI_AccessibilityElementInfoSetParentId(child, 0);\n\n                objects[i]->fillAccessibilityElement(child);\n\n                ArkUI_AccessibleRect rect;\n                rect.leftTopX = i * NUMBER_FIRST;\n                rect.leftTopY = NUMBER_ZERO;\n                rect.rightBottomX = i * NUMBER_FIRST + NUMBER_FIRST;\n                rect.rightBottomY = NUMBER_SECOND;\n                OH_ArkUI_AccessibilityElementInfoSetScreenRect(child, &rect);\n            }\n            ret = OH_ArkUI_AccessibilityElementInfoSetChildNodeIds(node, objects.size(), childNodes);\n            OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, LOG_PRINT_TEXT,\n                         \"FindAccessibilityNodeInfosById child2 count: %{public}ld\", objects.size());\n        }\n    }\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, LOG_PRINT_TEXT, \"FindAccessibilityNodeInfosById end\");\n    return OH_NATIVEXCOMPONENT_RESULT_SUCCESS;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "基于指定的节点，查询下一个可聚焦的无障碍节点"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t AccessibilityManager::FindNextFocusAccessibilityNode(const char* instanceId, int64_t elementId,\n    ArkUI_AccessibilityFocusMoveDirection direction, int32_t requestId,\n    ArkUI_AccessibilityElementInfo *elementInfo)\n{\n    // 查找下一个可聚焦的无障碍节点，三方框架需要在该方法中实现自己的查找策略，以下逻辑仅为示意过程。\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, LOG_PRINT_TEXT,\n                 \"FindNextFocusAccessibilityNode instanceId %{public}s \"\n                 \"elementId: %{public}ld, requestId: %{public}d, direction: %{public}d\",\n                 instanceId, elementId, requestId, static_cast<int32_t>(direction));\n    auto objects = FakeWidget::Instance().GetAllObjects(instanceId);\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, LOG_PRINT_TEXT, \"objects.size() %{public}d\", objects.size());\n    // object.size 不包含 root节点\n    if ((elementId < 0) || (elementId > objects.size())) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, LOG_PRINT_TEXT, \"elementId invalid\");\n        return OH_NATIVEXCOMPONENT_RESULT_FAILED;\n    }\n    int64_t nextElementId = -1;\n    if (direction == ARKUI_ACCESSIBILITY_NATIVE_DIRECTION_FORWARD) {\n        nextElementId = elementId + 1;\n    } else {\n        nextElementId = elementId - 1;\n    }\n    \n    // 屏幕朗读约束 如果是根节点 然后backward的话需要回到最后一个节点\n    if ((nextElementId == -1) && (direction == ARKUI_ACCESSIBILITY_NATIVE_DIRECTION_BACKWARD)) {\n        nextElementId = objects.size();\n    }\n    \n    if (nextElementId >  objects.size()) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, LOG_PRINT_TEXT, \"nextElementId invalid\");\n        return OH_NATIVEXCOMPONENT_RESULT_FAILED;\n    }\n    \n    if (nextElementId <=  0) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, LOG_PRINT_TEXT, \"nextElementId less than zero\");\n        return OH_NATIVEXCOMPONENT_RESULT_FAILED;\n    }\n    OH_ArkUI_AccessibilityElementInfoSetElementId(elementInfo, nextElementId);\n    OH_ArkUI_AccessibilityElementInfoSetParentId(elementInfo, 0);\n    // id 比object索引大1\n    objects[nextElementId - 1]->fillAccessibilityElement(elementInfo);\n    ArkUI_AccessibleRect rect;\n    rect.leftTopX = nextElementId * NUMBER_FIRST;\n    rect.leftTopY = NUMBER_ZERO;\n    rect.rightBottomX = nextElementId * NUMBER_FIRST + NUMBER_FIRST;\n    rect.rightBottomY = NUMBER_SECOND;\n    OH_ArkUI_AccessibilityElementInfoSetScreenRect(elementInfo, &rect);\n    auto eventInfo = OH_ArkUI_CreateAccessibilityEventInfo();\n    OH_ArkUI_AccessibilityEventSetRequestFocusId(eventInfo, requestId);\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, LOG_PRINT_TEXT, \"%{public}ld\", nextElementId);\n    return OH_NATIVEXCOMPONENT_RESULT_SUCCESS;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "基于指定的节点，查询满足指定组件文本内容的节点信息"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t AccessibilityManager::FindAccessibilityNodeInfosByText(const char* instanceId, int64_t elementId,\n    const char *text, int32_t requestId, ArkUI_AccessibilityElementInfoList *elementList)\n{\n    // 三方框架需实现根据文本内容查询无障碍节点的逻辑。\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, LOG_PRINT_TEXT,\n                 \"FindAccessibilityNodeInfosByText start,instanceId %{public}s elementId: %{public}ld, \"\n                 \"requestId: %{public}d, text: %{public}s.\", instanceId,\n                 elementId, requestId, text);\n    return OH_NATIVEXCOMPONENT_RESULT_SUCCESS;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "基于指定的节点，查询已经聚焦的节点信息"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t AccessibilityManager::FindFocusedAccessibilityNode(const char* instanceId, int64_t elementId,\n    ArkUI_AccessibilityFocusType focusType, int32_t requestId, ArkUI_AccessibilityElementInfo *elementInfo)\n{\n    // 三方框架需实现基于指定节点获取焦点元素信息的逻辑。\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, LOG_PRINT_TEXT,\n                 \"FindFocusedAccessibilityNode start instanceId %{public}s, \"\n                 \"elementId: %{public}ld, requestId: %{public}d, focusType: %{public}d\",\n                 instanceId, elementId, requestId, static_cast<int32_t>(focusType));\n    return OH_NATIVEXCOMPONENT_RESULT_SUCCESS;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "基于指定的节点，执行指定的操作"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "void FillEvent(ArkUI_AccessibilityEventInfo *eventInfo, ArkUI_AccessibilityElementInfo *elementInfo,\n               ArkUI_AccessibilityEventType eventType, std::string announcedText)\n{\n    if (eventInfo == nullptr) {\n        return;\n    }\n    if (elementInfo == nullptr) {\n        return;\n    }\n    // 设置事件类型\n    OH_ArkUI_AccessibilityEventSetEventType(eventInfo, eventType);\n    // 设置事件对应的元素信息\n    OH_ArkUI_AccessibilityEventSetElementInfo(eventInfo, elementInfo);\n    \n    if (eventType == ARKUI_ACCESSIBILITY_NATIVE_EVENT_TYPE_ANNOUNCE_FOR_ACCESSIBILITY && announcedText.size() > 0) {\n        // 给无障碍节点设置优先播报的无障碍文本\n        OH_ArkUI_AccessibilityEventSetTextAnnouncedForAccessibility(eventInfo, announcedText.data());\n    }\n}\n\n// ...\n\nvoid AccessibilityManager::SendAccessibilityAsyncEvent(ArkUI_AccessibilityElementInfo *elementInfo,\n                                                       ArkUI_AccessibilityEventType eventType,\n                                                       std::string announcedText)\n{\n    auto eventInfo = OH_ArkUI_CreateAccessibilityEventInfo();\n    // 1.填写event内容\n    FillEvent(eventInfo, elementInfo, eventType, announcedText);\n    // 2.callback\n    auto callback = [](int32_t errorCode) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, LOG_PRINT_TEXT, \"result: %{public}d\", errorCode);\n    };\n    // 3. 调用接口发送事件给OH侧\n    OH_ArkUI_SendAccessibilityAsyncEvent(g_provider, eventInfo, callback);\n}\n// ...\n\nint32_t AccessibilityManager::ExecuteAccessibilityAction(const char* instanceId, int64_t elementId,\n    ArkUI_Accessibility_ActionType action, ArkUI_AccessibilityActionArguments *actionArguments, int32_t requestId)\n{\n    // 三方框架需要实现执行无障碍节点行为的逻辑。\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, LOG_PRINT_TEXT,\n                 \"ExecuteAccessibilityAction instanceId %{public}s elementId: %{public}ld, \"\n                 \"action: %{public}d, requestId: %{public}d\",\n                 instanceId, elementId, action, requestId);\n    auto object = FakeWidget::Instance().GetChild(elementId);\n    // 传入的无障碍节点对象可能为空，需要做非空判断。\n    if (!object) {\n        return 0;\n    }\n    // 获取无障碍节点element。\n    auto announcedText = object->GetAnnouncedForAccessibility();\n    auto element = OH_ArkUI_CreateAccessibilityElementInfo();\n    OH_ArkUI_AccessibilityElementInfoSetElementId(element, elementId);\n    const char *actionKey = \"some_key\";\n    char *actionValue = nullptr;\n    OH_ArkUI_FindAccessibilityActionArgumentByKey(actionArguments, actionKey, &actionValue);\n    // 根据action类型执行对应的行为。\n    switch (action) {\n        case ARKUI_ACCESSIBILITY_NATIVE_ACTION_TYPE_CLICK:\n            if (object) {\n                object->OnClick();\n                object->fillAccessibilityElement(element);\n            }\n            // 向无障碍服务发送指定事件。\n            AccessibilityManager::SendAccessibilityAsyncEvent(element,\n                ARKUI_ACCESSIBILITY_NATIVE_EVENT_TYPE_CLICKED, announcedText);\n            break;\n        case ARKUI_ACCESSIBILITY_NATIVE_ACTION_TYPE_GAIN_ACCESSIBILITY_FOCUS:\n            if (object) {\n                object->SetFocus(true);\n\n                object->fillAccessibilityElement(element);\n            }\n            // 向无障碍服务发送指定事件。\n            AccessibilityManager::SendAccessibilityAsyncEvent(element,\n                ARKUI_ACCESSIBILITY_NATIVE_EVENT_TYPE_ACCESSIBILITY_FOCUSED,\n                announcedText);\n            break;\n        case ARKUI_ACCESSIBILITY_NATIVE_ACTION_TYPE_CLEAR_ACCESSIBILITY_FOCUS:\n            if (object) {\n                object->SetFocus(false);\n                object->fillAccessibilityElement(element);\n            }\n            AccessibilityManager::SendAccessibilityAsyncEvent(\n                element, ARKUI_ACCESSIBILITY_NATIVE_EVENT_TYPE_ACCESSIBILITY_FOCUS_CLEARED,\n                announcedText);\n            break;\n        default:\n            // 处理不支持的action行为。\n            break;\n    }\n    OH_ArkUI_DestoryAccessibilityElementInfo(element);\n    return OH_NATIVEXCOMPONENT_RESULT_SUCCESS;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "清除当前获焦的节点"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t AccessibilityManager::ClearFocusedFocusAccessibilityNode(const char* instanceId)\n{\n    // 三方框架需要实现清除当前获焦的节点的行为。\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, LOG_PRINT_TEXT,\n                 \"ClearFocusedFocusAccessibilityNode, instanceId %{public}s\", instanceId);\n    return OH_NATIVEXCOMPONENT_RESULT_SUCCESS;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "基于指定的节点，获取当前文本组件的光标位置"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t AccessibilityManager::GetAccessibilityNodeCursorPosition(const char* instanceId, int64_t elementId,\n    int32_t requestId, int32_t *index)\n{\n    // 三方框架需要实现获取当前组件中（文本组件）光标位置。\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, LOG_PRINT_TEXT,\n                 \"GetAccessibilityNodeCursorPosition, instanceId %{public}s \"\n                 \"elementId: %{public}ld, requestId: %{public}d, index: %{public}d\",\n                 instanceId, elementId, requestId, index);\n    return OH_NATIVEXCOMPONENT_RESULT_SUCCESS;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["provider通过回调函数", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#oh_arkui_accessibilityproviderregistercallback",
          children: "OH_ArkUI_AccessibilityProviderRegisterCallback"
        }), "或者", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-accessibility-h/capi-native-interface-accessibility-h#oh_arkui_accessibilityproviderregistercallbackwithinstance",
          children: "OH_ArkUI_AccessibilityProviderRegisterCallbackWithInstance"
        }), "对接成功后，可开启无障碍功能。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基于customnode的自绘制接入方式",
      children: "基于CustomNode的自绘制接入方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(403183)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["基于CustomNode的自定义绘制容器组件，仅支持类型为", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodetype",
          children: "ARKUI_NODE_CUSTOM"
        }), "且无其他子节点的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-node8h/capi-arkui-nativemodule-arkui-node8h",
          children: "native组件"
        }), "。绘制容器组件的宽和高不能为0，避免被无障碍辅助应用忽略或错误处理子节点树。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下示例提供了对接无障碍能力的实现方法，仅包含主要步骤，完整示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/applications_app_samples/pull/8450",
        children: "AccessibilityCustomCapi"
      }), "。回调函数实现请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%9F%BA%E4%BA%8Excomponent%E7%9A%84%E8%87%AA%E7%BB%98%E5%88%B6%E6%8E%A5%E5%85%A5%E6%96%B9%E5%BC%8F",
        children: "基于Xcomponent的自绘制接入方式"
      }), "。完成回调函数实现后，开启无障碍功能，基于CustomNode构建渲染节点树的三方框架即可接入无障碍服务，实现控件树的无障碍交互与信息查询。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["按照", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-use-ndk/ndk-embed-render-components",
            children: "基于CustomNode构建渲染节点树"
          }), "场景创建前置工程。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取无障碍接入Provider实例，将回调函数与Provider实例绑定并完成注册。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "int32_t AccessibilityMaker::GetAccessibilityProvider(ArkUI_NodeHandle* customNode, const char* id)\n{\n    AccessibilityMaker::accessibilityProviderCallbacksWithInstance_.findAccessibilityNodeInfosById =\n        FindAccessibilityNodeInfosById;\n    AccessibilityMaker::accessibilityProviderCallbacksWithInstance_.findAccessibilityNodeInfosByText =\n        FindAccessibilityNodeInfosByText;\n    AccessibilityMaker::accessibilityProviderCallbacksWithInstance_.findFocusedAccessibilityNode =\n        FindFocusedAccessibilityNode;\n    AccessibilityMaker::accessibilityProviderCallbacksWithInstance_.findNextFocusAccessibilityNode =\n        FindNextFocusAccessibilityNode;\n    AccessibilityMaker::accessibilityProviderCallbacksWithInstance_.executeAccessibilityAction =\n        ExecuteAccessibilityAction;\n    AccessibilityMaker::accessibilityProviderCallbacksWithInstance_.clearFocusedFocusAccessibilityNode =\n        ClearFocusedFocusAccessibilityNode;\n    AccessibilityMaker::accessibilityProviderCallbacksWithInstance_.getAccessibilityNodeCursorPosition =\n        GetAccessibilityNodeCursorPosition;\n\n    // 获取 native 层提供的 accessibility provider，并为其注册回调\n    OH_ArkUI_NativeModule_GetNativeAccessibilityProvider(customNode, &accessibilityProvider_);\n    if (accessibilityProvider_ == nullptr) {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"AccessibilityMaker\", \"accessibilityProvider_ is null\");\n        return 0;\n    }\n\n    int32_t ret = OH_ArkUI_AccessibilityProviderRegisterCallbackWithInstance(id, accessibilityProvider_,\n        &AccessibilityMaker::accessibilityProviderCallbacksWithInstance_);\n    if (ret != 0) {\n        return 0;\n    }\n    return 0;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["三方框架需要实现回调函数。请参考前文的", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%9F%BA%E4%BA%8Excomponent%E7%9A%84%E8%87%AA%E7%BB%98%E5%88%B6%E6%8E%A5%E5%85%A5%E6%96%B9%E5%BC%8F",
            children: "基于Xcomponent的自绘制接入方式"
          }), "。"]
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
111026(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
999393(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
403183(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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