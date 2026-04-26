"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["4674"], {
929374(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_use_ndk_arkts_build_text_ndk_ndk_textarea_event_ndk_textarea_event_md_321_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-use-ndk-arkts-build-text-ndk-ndk-textarea-event-ndk-textarea-event-md-321.json
var site_docs_arkui_arkts_use_ndk_arkts_build_text_ndk_ndk_textarea_event_ndk_textarea_event_md_321_namespaceObject = JSON.parse('{"id":"arkui/arkts-use-ndk/arkts-build-text-ndk/ndk-textarea-event/ndk-textarea-event","title":"监听输入框事件","description":"输入框包含多种交互行为，开发者可注册事件监听并获取状态。","source":"@site/docs/arkui/arkts-use-ndk/arkts-build-text-ndk/ndk-textarea-event/ndk-textarea-event.md","sourceDirName":"arkui/arkts-use-ndk/arkts-build-text-ndk/ndk-textarea-event","slug":"/arkui/arkts-use-ndk/arkts-build-text-ndk/ndk-textarea-event/","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/arkts-build-text-ndk/ndk-textarea-event/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"监听输入框事件","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-textarea-event","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Text组件的文本绘制与显示","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/arkts-build-text-ndk/ndk-styled-string/"},"next":{"title":"构建弹窗","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-build-pop-up-window/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-use-ndk/arkts-build-text-ndk/ndk-textarea-event/ndk-textarea-event.md


const frontMatter = {
	title: '监听输入框事件',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-textarea-event',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '监听输入框事件';

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
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "监听输入框事件",
        children: "监听输入框事件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入框包含多种交互行为，开发者可注册事件监听并获取状态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["要实现实时搜索功能，可注册", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeeventtype",
        children: "NODE_TEXT_AREA_ON_CHANGE"
      }), "事件，输入框文本发生变化时会收到通知，并能获取当前文本内容。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["要实现文字过滤功能，可注册", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeeventtype",
        children: "NODE_TEXT_AREA_ON_WILL_INSERT"
      }), "事件，在文字即将插入前会收到通知，通过返回值控制文字是否插入。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["要实现用户编辑文字前后页面布局的不同，可注册", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeeventtype",
        children: "NODE_TEXT_AREA_ON_EDIT_CHANGE"
      }), "事件，输入框编辑状态切换时会收到通知。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下示例基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-use-ndk/ndk-access-the-arkts-page",
        children: "接入ArkTS页面章节"
      }), "，说明如何监听输入框的事件及数据解析。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册事件"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["事件注册有统一接口，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#registernodeevent",
            children: "registerNodeEvent"
          }), "。输入框支持的事件类型，请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeeventtype",
            children: "NativeNode组件支持的事件类型定义"
          }), "，搜索前缀NODE_TEXT_AREA_。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ArkUI_NodeHandle text = nodeApi->createNode(ARKUI_NODE_TEXT);\nArkUI_NumberValue textWidth[] = {{.f32 = 300}};\nArkUI_AttributeItem textWidthItem = {.value = textWidth, .size = 1};\nnodeApi->setAttribute(text, NODE_WIDTH, &textWidthItem);\n// ···\nArkUI_NodeHandle selectionText = nodeApi->createNode(ARKUI_NODE_TEXT);\nArkUI_NumberValue selectionTextWidth[] = {{.f32 = 300}};\nArkUI_AttributeItem selectionTextWidthItem = {.value = selectionTextWidth, .size = 1};\nnodeApi->setAttribute(selectionText, NODE_WIDTH, &selectionTextWidthItem);\n// ···\nconst ArkUI_AttributeItem *attributeItem = nodeApi->getAttribute(textArea, NODE_UNIQUE_ID);\nauto id = attributeItem->value[0].i32;\nnodeApi->registerNodeEvent(textArea, NODE_TEXT_AREA_ON_CHANGE, id, text);\nnodeApi->registerNodeEvent(textArea, NODE_TEXT_AREA_ON_PASTE, id, text);\nnodeApi->registerNodeEvent(textArea, NODE_TEXT_AREA_ON_TEXT_SELECTION_CHANGE, id, selectionText);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册事件回调"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["事件回调注册有统一接口，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#registernodeeventreceiver",
            children: "registerNodeEventReceiver"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "nodeApi->registerNodeEventReceiver([](ArkUI_NodeEvent *event) {\n    ArkUI_NodeEventType eventType = OH_ArkUI_NodeEvent_GetEventType(event);\n    ArkUI_AttributeItem content;\n    if (eventType == NODE_TEXT_AREA_ON_CHANGE || eventType == NODE_TEXT_AREA_ON_PASTE) {\n        ArkUI_StringAsyncEvent *stringEvent = OH_ArkUI_NodeEvent_GetStringAsyncEvent(event);\n        content = {.string = stringEvent->pStr };\n    } else if (eventType == NODE_TEXT_AREA_ON_TEXT_SELECTION_CHANGE) {\n        ArkUI_NodeComponentEvent *componentEvent = OH_ArkUI_NodeEvent_GetNodeComponentEvent(event);\n        std::stringstream selectContent;\n        selectContent << \"start: \" << componentEvent->data[0].i32 << \" , end: \" << componentEvent->data[1].i32;\n        content = {.string = selectContent.str().c_str() };\n    } else {\n        return;\n    }\n    ArkUI_NodeHandle textNode = reinterpret_cast<ArkUI_NodeHandle>(OH_ArkUI_NodeEvent_GetUserData(event));\n    if (textNode) {\n        ArkUI_NativeNodeAPI_1 *nodeApi = reinterpret_cast<ArkUI_NativeNodeAPI_1 *>(\n            OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_NODE, \"ArkUI_NativeNodeAPI_1\"));\n        nodeApi->setAttribute(textNode, NODE_TEXT_CONTENT, &content);\n    }\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "完整示例"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["本篇示例仅提供核心接口的调用方法，完整的示例工程请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/TextAreaEventNDK",
            children: "TextAreaEventNDK"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"manager.h\"\n#include <sstream>\n#include <arkui/native_interface.h>\n#include <arkui/styled_string.h>\n\nnamespace NativeNode::Manager {\nconstexpr int32_t NUM_10 = 10;\nconstexpr int32_t NUM_28 = 28;\nconstexpr int32_t NUM_400 = 400;\nNodeManager &NodeManager::GetInstance()\n{\n    static NodeManager instance;\n    return instance;\n}\n\nvoid NodeManager::SetXComponent(OH_NativeXComponent *xComponent) { xComponent_ = xComponent; }\n\nvoid NodeManager::CreateTextAreaNode()\n{\n    if (!xComponent_) {\n        return;\n    }\n    ArkUI_NativeNodeAPI_1 *nodeApi = reinterpret_cast<ArkUI_NativeNodeAPI_1 *>(\n        OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_NODE, \"ArkUI_NativeNodeAPI_1\"));\n    if (nodeApi == nullptr) {\n        return;\n    }\n    ArkUI_NodeHandle column = nodeApi->createNode(ARKUI_NODE_COLUMN);\n    ArkUI_NumberValue colWidth[] = {{.f32 = 300}};\n    ArkUI_AttributeItem widthItem = {.value = colWidth, .size = 1};\n    nodeApi->setAttribute(column, NODE_WIDTH, &widthItem);\n\n    ArkUI_NodeHandle text = nodeApi->createNode(ARKUI_NODE_TEXT);\n    ArkUI_NumberValue textWidth[] = {{.f32 = 300}};\n    ArkUI_AttributeItem textWidthItem = {.value = textWidth, .size = 1};\n    nodeApi->setAttribute(text, NODE_WIDTH, &textWidthItem);\n    ArkUI_NumberValue textHeight[] = {{.f32 = 100}};\n    ArkUI_AttributeItem textHeightItem = {.value = textHeight, .size = 1};\n    nodeApi->setAttribute(text, NODE_HEIGHT, &textHeightItem);\n    \n    nodeApi->addChild(column, text);\n    \n    ArkUI_NodeHandle selectionText = nodeApi->createNode(ARKUI_NODE_TEXT);\n    ArkUI_NumberValue selectionTextWidth[] = {{.f32 = 300}};\n    ArkUI_AttributeItem selectionTextWidthItem = {.value = selectionTextWidth, .size = 1};\n    nodeApi->setAttribute(selectionText, NODE_WIDTH, &selectionTextWidthItem);\n    nodeApi->addChild(column, selectionText);\n    ArkUI_NodeHandle textArea = nodeApi->createNode(ARKUI_NODE_TEXT_AREA);\n    ArkUI_NumberValue textAreaWidth[] = {{.f32 = 300}};\n    ArkUI_AttributeItem textAreaWidthItem = {.value = textAreaWidth, .size = 1};\n    nodeApi->setAttribute(textArea, NODE_WIDTH, &textAreaWidthItem);\n\n    ArkUI_NumberValue borderWidth[] = {{.f32 = 1}};\n    ArkUI_AttributeItem borderWidthItem = {.value = borderWidth, .size = 1};\n    nodeApi->setAttribute(textArea, NODE_BORDER_WIDTH, &borderWidthItem);\n\n    const ArkUI_AttributeItem *attributeItem = nodeApi->getAttribute(textArea, NODE_UNIQUE_ID);\n    auto id = attributeItem->value[0].i32;\n    nodeApi->registerNodeEvent(textArea, NODE_TEXT_AREA_ON_CHANGE, id, text);\n    nodeApi->registerNodeEvent(textArea, NODE_TEXT_AREA_ON_PASTE, id, text);\n    nodeApi->registerNodeEvent(textArea, NODE_TEXT_AREA_ON_TEXT_SELECTION_CHANGE, id, selectionText);\n    TextAreaNodeEventReceiver(nodeApi);\n    nodeApi->addChild(column, textArea);\n    OH_NativeXComponent_AttachNativeRootNode(xComponent_, column);\n}\n\nvoid NodeManager::TextAreaNodeEventReceiver(ArkUI_NativeNodeAPI_1* nodeApi)\n{\n    nodeApi->registerNodeEventReceiver([](ArkUI_NodeEvent *event) {\n        ArkUI_NodeEventType eventType = OH_ArkUI_NodeEvent_GetEventType(event);\n        ArkUI_AttributeItem content;\n        if (eventType == NODE_TEXT_AREA_ON_CHANGE || eventType == NODE_TEXT_AREA_ON_PASTE) {\n            ArkUI_StringAsyncEvent *stringEvent = OH_ArkUI_NodeEvent_GetStringAsyncEvent(event);\n            content = {.string = stringEvent->pStr };\n        } else if (eventType == NODE_TEXT_AREA_ON_TEXT_SELECTION_CHANGE) {\n            ArkUI_NodeComponentEvent *componentEvent = OH_ArkUI_NodeEvent_GetNodeComponentEvent(event);\n            std::stringstream selectContent;\n            selectContent << \"start: \" << componentEvent->data[0].i32 << \" , end: \" << componentEvent->data[1].i32;\n            content = {.string = selectContent.str().c_str() };\n        } else {\n            return;\n        }\n        ArkUI_NodeHandle textNode = reinterpret_cast<ArkUI_NodeHandle>(OH_ArkUI_NodeEvent_GetUserData(event));\n        if (textNode) {\n            ArkUI_NativeNodeAPI_1 *nodeApi = reinterpret_cast<ArkUI_NativeNodeAPI_1 *>(\n                OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_NODE, \"ArkUI_NativeNodeAPI_1\"));\n            nodeApi->setAttribute(textNode, NODE_TEXT_CONTENT, &content);\n        }\n    });\n}\n} // namespace NativeNode::Manager\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(978331)/* ["default"] */.A) + "",
        width: "407",
        height: "537"
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
978331(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798418-2b896bf5526d1fa2b129310c2910e885.gif");

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