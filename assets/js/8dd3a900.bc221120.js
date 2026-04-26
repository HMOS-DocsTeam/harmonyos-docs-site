"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["543267"], {
368874(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_use_ndk_arkts_add_event_ndk_inspector_component_observer_ndk_inspector_component_observer_md_8dd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-use-ndk-arkts-add-event-ndk-inspector-component-observer-ndk-inspector-component-observer-md-8dd.json
var site_docs_arkui_arkts_use_ndk_arkts_add_event_ndk_inspector_component_observer_ndk_inspector_component_observer_md_8dd_namespaceObject = JSON.parse('{"id":"arkui/arkts-use-ndk/arkts-add-event/ndk-inspector-component-observer/ndk-inspector-component-observer","title":"监听组件布局和绘制送显事件","description":"从API version 16开始，NDK接口针对UI组件的布局或绘制送显完成，提供了注册与取消监听函数的方式。开发者可使用如下接口监听指定节点布局完成或者绘制送显完成的时机，并注册相应的回调函数。可使用OH\\\\ArkUI\\\\RegisterLayoutCallbackOnNodeHandle注册组件布局完成的回调方法。可使用OH\\\\ArkUI\\\\RegisterDrawCallbackOnNodeHandle注册绘制送显完成的回调方法。可使用OH\\\\ArkUI\\\\UnregisterLayoutCallbackOnNodeHandle取消组件布局完成的回调方法注册。可使用OH\\\\ArkUI\\\\UnregisterDrawCallbackOnNodeHandle取消绘制送显完成的回调方法注册。","source":"@site/docs/arkui/arkts-use-ndk/arkts-add-event/ndk-inspector-component-observer/ndk-inspector-component-observer.md","sourceDirName":"arkui/arkts-use-ndk/arkts-add-event/ndk-inspector-component-observer","slug":"/arkui/arkts-use-ndk/arkts-add-event/ndk-inspector-component-observer/","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/arkts-add-event/ndk-inspector-component-observer/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"监听组件布局和绘制送显事件","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-inspector-component-observer","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"拖拽事件","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/arkts-add-event/ndk-drag-event/"},"next":{"title":"使用动画","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-use-animation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-use-ndk/arkts-add-event/ndk-inspector-component-observer/ndk-inspector-component-observer.md


const frontMatter = {
	title: '监听组件布局和绘制送显事件',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-inspector-component-observer',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '监听组件布局和绘制送显事件';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
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
        id: "监听组件布局和绘制送显事件",
        children: "监听组件布局和绘制送显事件"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 16开始，NDK接口针对UI组件的布局或绘制送显完成，提供了注册与取消监听函数的方式。开发者可使用如下接口监听指定节点布局完成或者绘制送显完成的时机，并注册相应的回调函数。可使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_registerlayoutcallbackonnodehandle",
        children: "OH_ArkUI_RegisterLayoutCallbackOnNodeHandle"
      }), "注册组件布局完成的回调方法。可使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_registerdrawcallbackonnodehandle",
        children: "OH_ArkUI_RegisterDrawCallbackOnNodeHandle"
      }), "注册绘制送显完成的回调方法。可使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_unregisterlayoutcallbackonnodehandle",
        children: "OH_ArkUI_UnregisterLayoutCallbackOnNodeHandle"
      }), "取消组件布局完成的回调方法注册。可使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_unregisterdrawcallbackonnodehandle",
        children: "OH_ArkUI_UnregisterDrawCallbackOnNodeHandle"
      }), "取消绘制送显完成的回调方法注册。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(626770)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_registerlayoutcallbackonnodehandle",
        children: "OH_ArkUI_RegisterLayoutCallbackOnNodeHandle"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_registerdrawcallbackonnodehandle",
        children: "OH_ArkUI_RegisterDrawCallbackOnNodeHandle"
      }), "能够监听组件的布局完成或者绘制送显完成事件触发，但只能传递一个函数指针，多次调用使用最后一次的函数指针进行回调。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下示例基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-use-ndk/ndk-access-the-arkts-page",
        children: "接入ArkTS页面"
      }), "章节，补充相关事件监听。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkUITextNode对象中实现布局或者绘制送显完成事件注册逻辑。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ArkUITextNode.h\n// 实现文本组件的封装类。\n#ifndef MYAPPLICATION_ARKUITEXTNODE_H\n#define MYAPPLICATION_ARKUITEXTNODE_H\n\n#include <arkui/native_type.h>\n#include <arkui/native_node.h>\n#include <hilog/log.h>\n#include \"ArkUINode.h\"\n#include <string>\n\n// ...\nnamespace NativeModule {\nconst unsigned int LOG_PRINT_DOMAIN = 0xFF00;\n// 布局完成的回调方法\nvoid OnLayoutCompleted(void *userData)\n{\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"Callback\", \"the text_node is layout completed\");\n}\n// 绘制送显完成的回调方法\nvoid OnDrawCompleted(void *userData)\n{\n    ArkUI_NodeHandle node = (ArkUI_NodeHandle)userData;\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"Callback\", \"the text_node is draw completed\");\n    ArkUI_NativeNodeAPI_1 *nativeModule = NativeModuleInstance::GetInstance()->GetNativeNodeAPI();\n    ArkUI_AttributeItem item = {nullptr, 0, \"draw callback\"};\n    nativeModule->setAttribute(node, NODE_TEXT_CONTENT, &item);\n}\n// ...\nclass ArkUITextNode : public ArkUINode {\npublic:\n    ArkUITextNode()\n        : ArkUINode((NativeModuleInstance::GetInstance()->GetNativeNodeAPI())->createNode(ARKUI_NODE_TEXT)) {}\n    void SetFontSize(float fontSize)\n    {\n        ArkUI_NumberValue value[] = {{.f32 = fontSize}};\n        ArkUI_AttributeItem item = {value, 1};\n        nativeModule_->setAttribute(handle_, NODE_FONT_SIZE, &item);\n    }\n    void SetFontColor(uint32_t color)\n    {\n        ArkUI_NumberValue value[] = {{.u32 = color}};\n        ArkUI_AttributeItem item = {value, 1};\n        nativeModule_->setAttribute(handle_, NODE_FONT_COLOR, &item);\n    }\n    void SetTextContent(const std::string &content)\n    {\n        ArkUI_AttributeItem item = {nullptr, 0, content.c_str()};\n        nativeModule_->setAttribute(handle_, NODE_TEXT_CONTENT, &item);\n    }\n    void SetTextAlign(ArkUI_TextAlignment align)\n    {\n        ArkUI_NumberValue value[] = {{.i32 = align}};\n        ArkUI_AttributeItem item = {value, 1};\n        nativeModule_->setAttribute(handle_, NODE_TEXT_ALIGN, &item);\n    }\n    void SetLayoutCallBack(int32_t nodeId)\n    {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"Callback\", \"set layout callback\");\n        // 注册布局完成的回调方法\n        OH_ArkUI_RegisterLayoutCallbackOnNodeHandle(handle_, handle_, OnLayoutCompleted);\n    }\n    void ResetLayoutCallBack()\n    {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"Callback\", \"reset layout callback\");\n        // 取消注册布局完成的回调方法\n        OH_ArkUI_UnregisterLayoutCallbackOnNodeHandle(handle_);\n    }\n    void SetDrawCallBack(int32_t nodeId)\n    {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"Callback\", \"set draw callback\");\n        // 注册绘制送显完成的回调方法\n        OH_ArkUI_RegisterDrawCallbackOnNodeHandle(handle_, handle_, OnDrawCompleted);\n    }\n    void ResetDrawCallBack()\n    {\n        OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"Callback\", \"reset draw callback\");\n        // 取消注册绘制送显完成的回调方法\n        OH_ArkUI_UnregisterDrawCallbackOnNodeHandle(handle_);\n    }\n    void SetInspectorId(std::string inspectorId)\n    {\n        ArkUI_AttributeItem item = {nullptr, 0, inspectorId.c_str()};\n        nativeModule_->setAttribute(handle_, NODE_ID, &item);\n    }\n    // ...\n};\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_ARKUITEXTNODE_H\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// NormalTextListExample.h\n// 自定义接入入口函数\n\n#ifndef MYAPPLICATION_NORMALTEXTLISTEXAMPLE_H\n#define MYAPPLICATION_NORMALTEXTLISTEXAMPLE_H\n\n#include \"ArkUIBaseNode.h\"\n#include \"ArkUIListItemNode.h\"\n#include \"ArkUIListNode.h\"\n#include \"ArkUITextNode.h\"\n#include <hilog/log.h>\n#define SIZE_16 16\n#define SIZE_100 100\n#define COLOR_BACKGROUND 0xFFfffacd\n\nnamespace NativeModule {\n\nstd::shared_ptr<ArkUIBaseNode> CreateTextListExample()\n{\n    // 创建组件并挂载\n    // 1：使用智能指针创建List组件。\n    auto list = std::make_shared<ArkUIListNode>();\n    list->SetPercentWidth(1);\n    list->SetPercentHeight(1);\n    // 2：创建ListItem子组件并挂载到List上。\n    for (int32_t i = 0; i < 1; ++i) {\n        auto listItem = std::make_shared<ArkUIListItemNode>();\n        auto textNode = std::make_shared<ArkUITextNode>();\n        textNode->SetTextContent(std::to_string(i));\n        textNode->SetFontSize(SIZE_16);\n        textNode->SetPercentWidth(1);\n        textNode->SetHeight(SIZE_100);\n        textNode->SetBackgroundColor(COLOR_BACKGROUND);\n        textNode->SetTextAlign(ARKUI_TEXT_ALIGNMENT_CENTER);\n        // 在当前节点注册布局回调\n        textNode->SetLayoutCallBack(i);\n        // 在当前节点注册绘制送显回调\n        textNode->SetDrawCallBack(i);\n        listItem->AddChild(textNode);\n        list->AddChild(listItem);\n    }\n    return list;\n}\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_NORMALTEXTLISTEXAMPLE_H\n"
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
626770(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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