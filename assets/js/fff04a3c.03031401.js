"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["885731"], {
599316(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_use_ndk_ndk_embed_render_components_ndk_embed_render_components_md_fff_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-use-ndk-ndk-embed-render-components-ndk-embed-render-components-md-fff.json
var site_docs_arkui_arkts_use_ndk_ndk_embed_render_components_ndk_embed_render_components_md_fff_namespaceObject = JSON.parse('{"id":"arkui/arkts-use-ndk/ndk-embed-render-components/ndk-embed-render-components","title":"构建渲染节点","description":"从API version 20开始，ArkUI开发框架针对NDK接口，提供了直接构建渲染节点的能力，包括节点树操作、属性设置及含动画的自定义绘制。开发者通过调用渲染节点相关能力，可以绕过registerNodeCustomEvent的测量布局过程，直接对节点进行绘制并调整其大小和位置。","source":"@site/docs/arkui/arkts-use-ndk/ndk-embed-render-components/ndk-embed-render-components.md","sourceDirName":"arkui/arkts-use-ndk/ndk-embed-render-components","slug":"/arkui/arkts-use-ndk/ndk-embed-render-components/","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-embed-render-components/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"构建渲染节点","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-embed-render-components","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"嵌入ArkTS组件","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-embed-arkts-components/"},"next":{"title":"通过自绘制接入无障碍","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-accessibility-xcomponent/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-use-ndk/ndk-embed-render-components/ndk-embed-render-components.md


const frontMatter = {
	title: '构建渲染节点',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-embed-render-components',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '构建渲染节点';

const assets = {

};



const toc = [{
  "value": "节点挂载与基础属性设置",
  "id": "节点挂载与基础属性设置",
  "level": 2
}, {
  "value": "自定义绘制及动画",
  "id": "自定义绘制及动画",
  "level": 2
}, {
  "value": "混排挂载原生组件与渲染节点",
  "id": "混排挂载原生组件与渲染节点",
  "level": 2
}, {
  "value": "接纳子节点为附属节点",
  "id": "接纳子节点为附属节点",
  "level": 3
}, {
  "value": "获取附属节点的渲染节点",
  "id": "获取附属节点的渲染节点",
  "level": 3
}, {
  "value": "操作来自附属节点的渲染节点",
  "id": "操作来自附属节点的渲染节点",
  "level": 3
}, {
  "value": "创建并接纳Web组件以实现混排挂载",
  "id": "创建并接纳web组件以实现混排挂载",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
        id: "构建渲染节点",
        children: "构建渲染节点"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，ArkUI开发框架针对NDK接口，提供了直接构建渲染节点的能力，包括节点树操作、属性设置及含动画的自定义绘制。开发者通过调用渲染节点相关能力，可以绕过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#registernodecustomevent",
        children: "registerNodeCustomEvent"
      }), "的测量布局过程，直接对节点进行绘制并调整其大小和位置。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "渲染节点树操作相关的能力"
          })
        }), " ，例如", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-render-h/capi-native-render-h#oh_arkui_rendernodeutils_addrendernode",
          children: "OH_ArkUI_RenderNodeUtils_AddRenderNode"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-render-h/capi-native-render-h#oh_arkui_rendernodeutils_addchild",
          children: "OH_ArkUI_RenderNodeUtils_AddChild"
        }), "等接口用于编辑渲染节点树的结构。仅类型为ARKUI_NODE_CUSTOM且无其他子节点的自定义节点（加超链接到nativeNode）能够挂载渲染节点，且最多挂载一个渲染节点。即渲染节点以子树形式挂载在类型为ARKUI_NODE_CUSTOM的叶子自定义节点上。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "渲染节点属性设置的能力"
          })
        }), " ，详情请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-render-h/capi-native-render-h#%E5%87%BD%E6%95%B0",
          children: "函数"
        }), "，查看当前渲染节点支持的属性能力。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "自定义绘制能力"
          })
        }), "，参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-render-h/capi-native-render-h#oh_arkui_rendernodeutils_setcontentmodifierondraw",
          children: "OH_ArkUI_RenderNodeUtils_SetContentModifierOnDraw"
        }), "及其相关接口，同时可以通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-render-h/capi-native-render-h#oh_arkui_rendernodeutils_setfloatpropertyvalue",
          children: "OH_ArkUI_RenderNodeUtils_SetFloatPropertyValue"
        }), "这一类绑定在ContentModifier的接口对自定义绘制的内容进行动态修改。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "节点挂载与基础属性设置",
      children: "节点挂载与基础属性设置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例创建了一个渲染节点，并进行了基础的节点挂载和属性设置操作。"
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
          children: "创建渲染节点能力对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// NativeEntry.cpp\n// 自定义容器组件示例。\n#include <arkui/native_animate.h>\n#include <arkui/native_render.h>\n#include <arkui/native_type.h>\n#include <arkui/native_node_napi.h>\n#include <bits/alltypes.h>\n\n#include <string>\n\n#include <arkui/native_interface.h>\n#include <arkui/native_node.h>\n#include <native_drawing/drawing_canvas.h>\n#include <native_drawing/drawing_color.h>\n#include <native_drawing/drawing_path.h>\n#include <native_drawing/drawing_pen.h>\n\nArkUI_NodeHandle testRenderNode(ArkUI_NativeNodeAPI_1 *nodeAPI) {\n    // 创建NDK原有容器逻辑。\n    ArkUI_NodeHandle scroll = nodeAPI->createNode(ARKUI_NODE_SCROLL);\n    ArkUI_NumberValue valueWidth[] = {400};\n    ArkUI_AttributeItem itemWidth = {valueWidth, sizeof(valueWidth) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(scroll, NODE_WIDTH, &itemWidth);\n    ArkUI_NumberValue valueHeight[] = {600};\n    ArkUI_AttributeItem itemHeight = {valueHeight, sizeof(valueHeight) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(scroll, NODE_HEIGHT, &itemHeight);\n    ArkUI_NodeHandle column = nodeAPI->createNode(ARKUI_NODE_COLUMN);\n    nodeAPI->setAttribute(column, NODE_WIDTH, &itemWidth);\n    nodeAPI->setAttribute(column, NODE_HEIGHT, &itemHeight);\n    ArkUI_NodeHandle text = nodeAPI->createNode(ARKUI_NODE_TEXT);\n    ArkUI_AttributeItem content = {.string = \"黄色背景是C-API页面\"};\n    nodeAPI->setAttribute(text, NODE_TEXT_CONTENT, &content);\n    nodeAPI->addChild(column, text);\n\n    // 创建RenderNode容器 -- NDK侧的Custom组件。\n    ArkUI_NodeHandle Custom = nodeAPI->createNode(ARKUI_NODE_CUSTOM);\n    valueWidth[0].f32 = 400;\n    nodeAPI->setAttribute(Custom, NODE_WIDTH, &itemWidth);\n    nodeAPI->setAttribute(Custom, NODE_HEIGHT, &itemWidth);\n    nodeAPI->addChild(column, Custom);\n\n    // 节点操作类接口 创建 - 挂载 - 构建树。\n    // 创建部分。\n    auto renderRootNode = OH_ArkUI_RenderNodeUtils_CreateNode();\n    auto firstChildRenderNode = OH_ArkUI_RenderNodeUtils_CreateNode();\n    auto secondChildRenderNode = OH_ArkUI_RenderNodeUtils_CreateNode();\n    auto thirdChildRenderNode = OH_ArkUI_RenderNodeUtils_CreateNode();\n\n    auto result = OH_ArkUI_RenderNodeUtils_AddRenderNode(Custom, renderRootNode);\n    if (result != ARKUI_ERROR_CODE_NO_ERROR) {\n        // 通过错误码判断根节点是否挂载成功。\n        return scroll;\n    }\n    \n    OH_ArkUI_RenderNodeUtils_AddChild(renderRootNode, firstChildRenderNode);\n    OH_ArkUI_RenderNodeUtils_AddChild(renderRootNode, secondChildRenderNode);\n    OH_ArkUI_RenderNodeUtils_AddChild(renderRootNode, thirdChildRenderNode);\n    \n    // 设置节点尺寸与位置。\n    OH_ArkUI_RenderNodeUtils_SetSize(renderRootNode, 500, 500);\n    OH_ArkUI_RenderNodeUtils_SetSize(firstChildRenderNode, 120, 120);\n    OH_ArkUI_RenderNodeUtils_SetSize(secondChildRenderNode, 120, 120);\n    OH_ArkUI_RenderNodeUtils_SetSize(thirdChildRenderNode, 120, 120);\n\n    OH_ArkUI_RenderNodeUtils_SetPosition(renderRootNode, 300, 100);\n    OH_ArkUI_RenderNodeUtils_SetPosition(firstChildRenderNode, 0, 0);\n    OH_ArkUI_RenderNodeUtils_SetPosition(secondChildRenderNode, 140, 140);\n    OH_ArkUI_RenderNodeUtils_SetPosition(thirdChildRenderNode, 280, 280);\n    \n    // 设置颜色，方便通过颜色观察到节点的显示范围。\n    OH_ArkUI_RenderNodeUtils_SetBackgroundColor(renderRootNode, 0xFFFFFFFF);\n    OH_ArkUI_RenderNodeUtils_SetBackgroundColor(firstChildRenderNode, 0xFFFF0000); // R\n    OH_ArkUI_RenderNodeUtils_SetBackgroundColor(secondChildRenderNode, 0xFF00FF00); // G\n    OH_ArkUI_RenderNodeUtils_SetBackgroundColor(thirdChildRenderNode, 0xFF0000FF); // B\n    \n    // 简单的属性设置示例。\n    OH_ArkUI_RenderNodeUtils_SetRotation(secondChildRenderNode, 45, 45, 0); // xy轴旋转45度，z轴旋转0度\n\n    // 边框属性实例。\n    auto styleOption = OH_ArkUI_RenderNodeUtils_CreateNodeBorderStyleOption();\n    OH_ArkUI_RenderNodeUtils_SetNodeBorderStyleOptionEdgeStyle(styleOption, ArkUI_BorderStyle::ARKUI_BORDER_STYLE_SOLID,\n                                                               ArkUI_EdgeDirection::ARKUI_EDGE_DIRECTION_ALL);\n    OH_ArkUI_RenderNodeUtils_SetBorderStyle(firstChildRenderNode, styleOption);\n    // 结构体使用完成后，销毁释放内存。\n    OH_ArkUI_RenderNodeUtils_DisposeNodeBorderStyleOption(styleOption);\n    styleOption = nullptr;\n    \n    auto widthOption = OH_ArkUI_RenderNodeUtils_CreateNodeBorderWidthOption();\n    OH_ArkUI_RenderNodeUtils_SetNodeBorderWidthOptionEdgeWidth(widthOption, 5,\n                                                               ArkUI_EdgeDirection::ARKUI_EDGE_DIRECTION_ALL);\n    OH_ArkUI_RenderNodeUtils_SetBorderWidth(firstChildRenderNode, widthOption);\n    // 结构体使用完成后，销毁释放内存。\n    OH_ArkUI_RenderNodeUtils_DisposeNodeBorderWidthOption(widthOption);\n    widthOption = nullptr;\n\n    auto colorOption = OH_ArkUI_RenderNodeUtils_CreateNodeBorderColorOption();\n    OH_ArkUI_RenderNodeUtils_SetNodeBorderColorOptionEdgeColor(colorOption, 0xFF000000,\n                                                               ArkUI_EdgeDirection::ARKUI_EDGE_DIRECTION_ALL);\n    result = OH_ArkUI_RenderNodeUtils_SetBorderColor(firstChildRenderNode, colorOption);\n    // 结构体使用完成后，销毁释放内存。\n    OH_ArkUI_RenderNodeUtils_DisposeNodeBorderColorOption(colorOption);\n    colorOption = nullptr;\n\n    nodeAPI->addChild(scroll, column);\n    return scroll;\n}\n\n napi_value CreateNativeRoot(napi_env env, napi_callback_info info) {\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    auto *nodeAPI = reinterpret_cast<ArkUI_NativeNodeAPI_1 *>(\n        OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_NODE, \"ArkUI_NativeNodeAPI_1\"));\n    if (nodeAPI != nullptr) {\n         ArkUI_NodeHandle testNode;\n         testNode = testRenderNode(nodeAPI);\n    }\n\n    NativeEntry::GetInstance()->SetRootNode(testNode);\n    return nullptr;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义绘制及动画",
      children: "自定义绘制及动画"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例创建了一个渲染节点，调用自定义绘制能力并附加动画功能。"
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
          children: "创建渲染节点能力对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// NativeEntry.cpp\n// 自定义容器组件示例。\n#include <arkui/native_animate.h>\n#include <arkui/native_render.h>\n#include <arkui/native_type.h>\n#include <arkui/native_node_napi.h>\n#include <bits/alltypes.h>\n\n#include <string>\n\n#include <arkui/native_interface.h>\n#include <arkui/native_node.h>\n#include <native_drawing/drawing_canvas.h>\n#include <native_drawing/drawing_color.h>\n#include <native_drawing/drawing_path.h>\n#include <native_drawing/drawing_pen.h>\n\nArkUI_NodeHandle testRenderNode2(ArkUI_NativeNodeAPI_1 *nodeAPI, ArkUI_ContextHandle context) {\n\n    ArkUI_NodeHandle scroll = nodeAPI->createNode(ARKUI_NODE_COLUMN);\n    ArkUI_NumberValue valueWidth[] = {400};\n    ArkUI_AttributeItem itemWidth = {valueWidth, sizeof(valueWidth) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(scroll, NODE_WIDTH, &itemWidth);\n    ArkUI_NumberValue valueHeight[] = {600};\n    ArkUI_AttributeItem itemHeight = {valueHeight, sizeof(valueHeight) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(scroll, NODE_HEIGHT, &itemHeight);\n    valueHeight[0].u32 = 0xff00F100;\n    nodeAPI->setAttribute(scroll, NODE_BACKGROUND_COLOR, &itemHeight);\n\n    ArkUI_NodeHandle column = nodeAPI->createNode(ARKUI_NODE_COLUMN);\n    ArkUI_NodeHandle text = nodeAPI->createNode(ARKUI_NODE_TEXT);\n    ArkUI_AttributeItem content = {.string = \"这是C-API页面\"};\n\n    nodeAPI->setAttribute(text, NODE_TEXT_CONTENT, &content);\n\n    ArkUI_NodeHandle Custom = nodeAPI->createNode(ARKUI_NODE_CUSTOM);\n    auto renderNode = OH_ArkUI_RenderNodeUtils_CreateNode();\n    OH_ArkUI_RenderNodeUtils_AddRenderNode(Custom, renderNode);\n    OH_ArkUI_RenderNodeUtils_SetSize(renderNode, 1000, 1000);\n\n    // Property的作用是触发set更新，同步更新modifier的Draw方法。\n    struct AnimatableUserData {\n        ArkUI_FloatAnimatablePropertyHandle width;\n        ArkUI_FloatAnimatablePropertyHandle height;\n        ArkUI_Vector2AnimatablePropertyHandle v2;\n        ArkUI_ColorAnimatablePropertyHandle color;\n    };\n\n    // 设置基础值。\n    AnimatableUserData *userData1 = new AnimatableUserData;\n    auto widthAnimProperty = OH_ArkUI_RenderNodeUtils_CreateFloatAnimatableProperty(1000);\n    userData1->width = widthAnimProperty;\n    auto heightAnimProperty = OH_ArkUI_RenderNodeUtils_CreateFloatAnimatableProperty(1000);\n    userData1->height = heightAnimProperty;\n    auto vectorAnimP = OH_ArkUI_RenderNodeUtils_CreateVector2AnimatableProperty(1000, 1000);\n    userData1->v2 = vectorAnimP;\n    auto colorAnimP = OH_ArkUI_RenderNodeUtils_CreateColorAnimatableProperty(0xFFFF11FF);\n    userData1->color = colorAnimP;\n\n    // 关联组件和多个modifier。\n    auto animModifier = OH_ArkUI_RenderNodeUtils_CreateContentModifier();\n    OH_ArkUI_RenderNodeUtils_AttachContentModifier(renderNode, animModifier);\n    // 关联modifier和property。\n    OH_ArkUI_RenderNodeUtils_AttachFloatAnimatableProperty(animModifier, widthAnimProperty);\n    OH_ArkUI_RenderNodeUtils_AttachFloatAnimatableProperty(animModifier, heightAnimProperty);\n    OH_ArkUI_RenderNodeUtils_AttachVector2AnimatableProperty(animModifier, vectorAnimP);\n    OH_ArkUI_RenderNodeUtils_AttachColorAnimatableProperty(animModifier, colorAnimP);\n\n    // 设置自定义绘制内容。\n    OH_ArkUI_RenderNodeUtils_SetContentModifierOnDraw(\n        animModifier, userData1, [](ArkUI_DrawContext *context, void *userData) {\n            AnimatableUserData *data = (AnimatableUserData *)userData;\n            float width = 0;\n            float height = 0;\n            uint32_t color = 0;\n            ArkUI_Vector2AnimatablePropertyHandle v2 = data->v2;\n            // property主要为传值用，这里用x,y来替代width，实际使用时可以通过property来自定义所需参数。\n            OH_ArkUI_RenderNodeUtils_GetVector2AnimatablePropertyValue(v2, &width, &height);\n            ArkUI_ColorAnimatablePropertyHandle cp = data->color;\n            OH_ArkUI_RenderNodeUtils_GetColorAnimatablePropertyValue(cp, &color);\n\n\n            auto *canvas1 = OH_ArkUI_DrawContext_GetCanvas(context);\n            OH_Drawing_Canvas *canvas = reinterpret_cast<OH_Drawing_Canvas *>(canvas1);\n            auto path = OH_Drawing_PathCreate();\n            OH_Drawing_PathMoveTo(path, width / 4, height / 4);\n            OH_Drawing_PathLineTo(path, width * 3 / 4, height / 4);\n            OH_Drawing_PathLineTo(path, width * 3 / 4, height * 3 / 4);\n            OH_Drawing_PathLineTo(path, width / 4, height * 3 / 4);\n            OH_Drawing_PathLineTo(path, width / 4, height / 4);\n            OH_Drawing_PathClose(path);\n            auto pen = OH_Drawing_PenCreate();\n            OH_Drawing_PenSetWidth(pen, 10);\n            OH_Drawing_PenSetColor(pen, color);\n            OH_Drawing_CanvasAttachPen(canvas, pen);\n            OH_Drawing_CanvasDrawPath(canvas, path);\n        });\n\n    // 用户自定义参数。\n    ArkUI_ContextCallback *update = new ArkUI_ContextCallback;\n    update->userData = userData1;\n    update->callback = [](void *user) {\n        AnimatableUserData *data = (AnimatableUserData *)user;\n        OH_ArkUI_RenderNodeUtils_SetFloatAnimatablePropertyValue(data->width, 100);\n        OH_ArkUI_RenderNodeUtils_SetFloatAnimatablePropertyValue(data->height, 100);\n        OH_ArkUI_RenderNodeUtils_SetVector2AnimatablePropertyValue(data->v2, 100, 100);\n        OH_ArkUI_RenderNodeUtils_SetColorAnimatablePropertyValue(data->color, 0xFF0011FF);\n    };\n    // 执行对应的动画。\n    ArkUI_NativeAnimateAPI_1 *animateApi = nullptr;\n    OH_ArkUI_GetModuleInterface(ARKUI_NATIVE_ANIMATE, ArkUI_NativeAnimateAPI_1, animateApi);\n\n    ArkUI_AnimateCompleteCallback *completeCallback = new ArkUI_AnimateCompleteCallback;\n    completeCallback->userData = userData1;\n    completeCallback->type = ARKUI_FINISH_CALLBACK_REMOVED;\n    completeCallback->callback = [](void *userData) {\n        AnimatableUserData *data = (AnimatableUserData *)userData;\n    };\n\n    ArkUI_AnimateOption *option = OH_ArkUI_AnimateOption_Create();\n    OH_ArkUI_AnimateOption_SetDuration(option, 2000);\n    OH_ArkUI_AnimateOption_SetTempo(option, 1.1);\n    OH_ArkUI_AnimateOption_SetCurve(option, ARKUI_CURVE_EASE);\n    OH_ArkUI_AnimateOption_SetDelay(option, 20);\n    OH_ArkUI_AnimateOption_SetIterations(option, 1);\n    OH_ArkUI_AnimateOption_SetPlayMode(option, ARKUI_ANIMATION_PLAY_MODE_REVERSE);\n    ArkUI_ExpectedFrameRateRange *range = new ArkUI_ExpectedFrameRateRange;\n    range->min = 10;\n    range->max = 120;\n    range->expected = 60;\n    OH_ArkUI_AnimateOption_SetExpectedFrameRateRange(option, range);\n        animateApi->animateTo(context, option, update, completeCallback);\n\n\n    nodeAPI->setAttribute(Custom, NODE_WIDTH, &itemWidth);\n    nodeAPI->setAttribute(Custom, NODE_HEIGHT, &itemHeight);\n\n    nodeAPI->addChild(column, text);\n    nodeAPI->addChild(column, Custom);\n    nodeAPI->addChild(scroll, column);\n    return scroll;\n}\n\n napi_value CreateNativeRoot(napi_env env, napi_callback_info info) {\n    size_t argc = 2;\n    napi_value args[2] = {nullptr, nullptr};\n\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    auto *nodeAPI = reinterpret_cast<ArkUI_NativeNodeAPI_1 *>(\n        OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_NODE, \"ArkUI_NativeNodeAPI_1\"));\n    if (nodeAPI != nullptr) {\n         ArkUI_NodeHandle testNode;\n         // 获取ets侧传入的context。\n         ArkUI_ContextHandle context = nullptr;\n         // 通过code判断是否获取成功。\n         auto code = OH_ArkUI_GetContextFromNapiValue(env, args[1], &context);\n         testNode = testRenderNode2(nodeAPI, context);\n    }\n\n    NativeEntry::GetInstance()->SetRootNode(testNode);\n    return nullptr;\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "混排挂载原生组件与渲染节点",
      children: "混排挂载原生组件与渲染节点"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 22开始，开发者可以高效地混排挂载原生组件与渲染节点。具体操作为：获取原生组件对应的渲染节点，并将其挂载至非原生组件的渲染节点下，从而实现原生组件的渲染节点与非原生组件的渲染节点混排。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进行混排挂载前，需要对原生组件进行接纳操作。父节点接纳目标子节点后，子节点会成为父节点的附属节点，只有附属节点能够获取渲染节点，并将这个渲染节点挂载至渲染节点树的其他位置上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "接纳子节点为附属节点",
      children: "接纳子节点为附属节点"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["满足以下条件的节点，可以作为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nativemodule_adoptchild",
        children: "OH_ArkUI_NativeModule_AdoptChild"
      }), "接口中的父节点接纳其他节点："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "父节点是CAPI侧创建的命令式节点。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "父节点是ArkTS侧创建的命令式节点。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "满足以下条件的节点，可以作为OH_ArkUI_NativeModule_AdoptChild接口中的子节点被其他父节点接纳："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "子节点是CAPI侧创建的命令式节点。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "子节点是ArkTS侧创建的命令式节点。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "子节点是BuilderNode下的根节点。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["子节点被接纳为附属节点后，不允许再作为常规子节点挂载至其他节点，否则会抛出相应的错误码。但允许该子节点被其他父节点再次接纳，此时该子节点将会成为其他父节点的新附属节点。被接纳的子节点不是其父节点的真实子节点，不在子组件查询接口的查询范围，也不支持像常规子节点那样被操作，同时不接受父节点的测量布局和事件传递，仅接收父节点的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-lifecycle#%E6%A6%82%E8%BF%B0",
        children: "生命周期"
      }), "传递。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取附属节点的渲染节点",
      children: "获取附属节点的渲染节点"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["节点处于被接纳的附属节点状态下，允许调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-render-h/capi-native-render-h#oh_arkui_rendernodeutils_getrendernode",
        children: "OH_ArkUI_RenderNodeUtils_GetRenderNode"
      }), "获取它对应的RenderNode。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1",
        children: "ArkUI_NativeNodeAPI_1"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#disposenode",
        children: "disposeNode"
      }), "接口主动销毁父节点时，需要额外调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-render-h/capi-native-render-h#oh_arkui_rendernodeutils_disposenode",
        children: "OH_ArkUI_RenderNodeUtils_DisposeNode"
      }), "释放该渲染节点，否则会发生内存泄漏。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "操作来自附属节点的渲染节点",
      children: "操作来自附属节点的渲染节点"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从被接纳的附属节点中获取渲染节点后，即可使用该渲染节点进行布局，约束与限制如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将来自附属节点的渲染节点挂载至其他渲染节点下。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "来自附属节点的渲染节点只能作为子节点挂载至其他渲染节点下，或者从其他渲染节点下取消挂载，除此之外的任何操作都会执行失败并返回错误码。完成渲染节点挂载后，附属节点将会被绘制在该渲染节点对应的目标位置上。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "附属节点的渲染节点依赖离屏挂载状态。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果该附属节点被它的父节点调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nativemodule_removeadoptedchild",
            children: "OH_ArkUI_NativeModule_RemoveAdoptedChild"
          }), "接口取消离屏挂载状态，那么该渲染节点也会随之一同从渲染节点树上被移除。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "来自附属节点的渲染节点，如果它对应的附属节点已不处于离屏挂载状态，不允许重新将它挂载至其他渲染节点上。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建并接纳web组件以实现混排挂载",
      children: "创建并接纳Web组件以实现混排挂载"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在进行如下代码开发前，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-use-ndk/ndk-access-the-arkts-page",
        children: "接入ArkTS页面"
      }), "，创建前置工程。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/NativeRenderNodeSample",
        children: "native_render_node_sample"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "NDK初始化组件环境，并创建对应的渲染节点根节点。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "std::shared_ptr<ArkUIBaseNode> custom_ = nullptr;\nstd::shared_ptr<ArkUIRenderNode> render_ = nullptr;\n\nstd::shared_ptr<ArkUIBaseNode> testGetRenderNodeDemo()\n{\n    auto scroll = std::make_shared<ArkUIScrollNode>();\n    scroll->SetWidth(g_contentWidth);\n    scroll->SetHeight(g_contentHeight);\n    scroll->SetBackgroundColor(0xff00F100);\n\n    auto column = std::make_shared<ArkUIColumnNode>();\n    column->SetWidth(g_contentWidth);\n    column->SetHeight(g_contentHeight);\n    auto text = std::make_shared<ArkUITextNode>();\n    text->SetTextContent(\"挂载从frameNode获取的renderNode示例，点击下方挂载按钮\");\n    text->SetWidth(g_num300);\n    text->SetHeight(g_num100);\n\n    auto Custom = std::make_shared<ArkUICustomNode>();\n    Custom->SetWidth(g_contentWidth);\n    Custom->SetHeight(g_num100);\n    column->AddChild(text);\n    column->AddChild(Custom);\n    custom_ = Custom;\n    \n    // 布置可挂载环境，将renderNode作为Custom的根节点挂载。\n    auto renderNode = std::make_shared<ArkUIRenderNode>();\n    Custom->AddRenderNode(renderNode);\n    renderNode->SetSize(g_num300, g_num300);\n    Custom->AddRenderNode(renderNode);\n    render_ = renderNode;\n\n    scroll->AddChild(column);\n    return scroll;\n}\n\nnapi_value CreateRenderNodeGetNodeExample(napi_env env, napi_callback_info info)\n{\n    size_t argc = 2;\n    napi_value args[2] = {nullptr, nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 获取ArkTS侧组件挂载点。\n    ArkUI_NodeContentHandle contentHandle;\n    int32_t result = OH_ArkUI_GetNodeContentFromNapiValue(env, args[0], &contentHandle);\n    if (result != ARKUI_ERROR_CODE_NO_ERROR) {\n        return nullptr;\n    }\n\n    // 创建Native侧组件树根节点。\n    auto scrollNode = std::make_shared<ArkUIScrollNode>();\n    // 将Native侧组件树根节点挂载到UI主树上。\n    result = OH_ArkUI_NodeContent_AddNode(contentHandle, scrollNode->GetHandle());\n    if (result != ARKUI_ERROR_CODE_NO_ERROR) {\n        OH_LOG_ERROR(LOG_APP, \"OH_ArkUI_NodeContent_AddNode Failed %{public}d\", result);\n        return nullptr;\n    }\n    // 保存Native侧组件树。\n    g_nodeMap[contentHandle] = scrollNode;\n    auto rootNode = testGetRenderNodeDemo();\n    scrollNode->AddChild(rootNode);\n    return nullptr;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkTS侧创建节点并传递该节点至CAPI。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BuilderNode, FrameNode, NodeContent, NodeController, typeNode } from '@kit.ArkUI';\nimport entry from 'libentry.so';\nimport { webview } from '@kit.ArkWeb';\n\n// 定义传递参数的接口\ninterface ParamsInterface {\n  text: string;\n  func: Function;\n}\nclass MyNodeController extends NodeController {\n  private imperativeNode: FrameNode | null = null;\n  public rootNode: typeNode.Column |null = null;\n  private buildNode: FrameNode | null = null;\n\n  makeNode(uiContext: UIContext): FrameNode {\n    this.rootNode = typeNode.createNode(uiContext, 'Column');\n\n    this.imperativeNode = new FrameNode(uiContext);\n    this.rootNode?.appendChild(this.imperativeNode);\n    return this.rootNode;\n  }\n\n  adoptNode(uiContext:UIContext, message:string):void {\n    let buildNode = new BuilderNode<[ParamsInterface]>(uiContext);\n    // 创建节点树\n    buildNode.build(wrapBuilder<[ParamsInterface]>(buildText), {\n      text: message, func: () => {\n        return 'FUNCTION';\n      }\n    }, { nestingBuilderSupported: true });\n    this.buildNode = buildNode.getFrameNode();\n    entry.adopt(buildNode);\n  }\n  removeAdoptedNode(uiContext:UIContext):void {\n    entry.removeAdopt();\n  }\n}\n\n@Builder\nfunction buildTextWithFunc(fun: Function) {\n  Web({ src: 'https://www.example.com', controller: new webview.WebviewController() })\n}\n\n@Builder\nfunction buildText(params: ParamsInterface) {\n  Column() {\n    buildTextWithFunc(params.func)\n  }\n}\n\n@Component\nstruct CAPIComponent {\n  private rootSlot = new NodeContent();\n\n  aboutToAppear(): void {\n    entry.createRenderNodeGetNodeExample(this.rootSlot, this.getUIContext())\n  }\n\n  aboutToDisappear(): void {\n    // 页面销毁前释放已创建的Native组件。\n    entry.disposeNodeTree(this.rootSlot)\n  }\n\n  build() {\n    Column() {\n      // Native组件挂载点。\n      ContentSlot(this.rootSlot)\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State isShow: boolean = false;\n  @State isAdopt: boolean = false;\n  @State message: string = 'CreateNodeTree';\n  @State adoptmsg: string = 'adopt web component';\n\n  private myNodeController: MyNodeController = new MyNodeController();\n  build() {\n    Flex() {\n      Column() {\n        Text('create CustomDrawNode，')\n          .fontSize(18)\n          .fontWeight(FontWeight.Bold)\n        Button(this.message)\n          .onClick(() => {\n            this.isShow = !this.isShow;\n          })\n        if (this.isShow) {\n          CAPIComponent()\n\n          Button(this.adoptmsg)\n            .onClick(() => {\n              if (this.isAdopt) {\n                this.myNodeController.removeAdoptedNode(this.getUIContext());\n                this.adoptmsg = 'adopt web component';\n              } else {\n                this.myNodeController.adoptNode(this.getUIContext(),this.message);\n                this.adoptmsg = 'remove adopt web';\n              }\n              this.isAdopt = !this.isAdopt;\n            })\n\n          NodeContainer(this.myNodeController)\n        }\n      }.width('100%')\n    }.width('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "C-API侧获取该节点，接纳节点并获取对应的渲染节点。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "napi_value Adopt(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 获取ArkTS侧组件挂载点。\n    int32_t result = OH_ArkUI_GetNodeHandleFromNapiValue(env, args[0], &nodeHandle_);\n    if (result != ARKUI_ERROR_CODE_NO_ERROR) {\n        return nullptr;\n    }\n    result = OH_ArkUI_NativeModule_AdoptChild(custom_->GetHandle(), nodeHandle_);\n    OH_ArkUI_RenderNodeUtils_GetRenderNode(nodeHandle_, &renderHandle_);\n    OH_ArkUI_RenderNodeUtils_AddChild(render_->GetHandle(), renderHandle_);\n    return nullptr;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "C-API侧解除已被接纳节点的接纳状态，释放其对应的渲染节点。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "napi_value RemoveAdopt(napi_env env, napi_callback_info info)\n{\n    OH_ArkUI_NativeModule_RemoveAdoptedChild(custom_->GetHandle(), nodeHandle_);\n    // 解除节点的接纳状态后，需要额外调用OH_ArkUI_RenderNodeUtils_DisposeNode释放对应的渲染节点，否则会导致内存泄漏。\n    OH_ArkUI_RenderNodeUtils_DisposeNode(renderHandle_);\n    nodeHandle_ = nullptr;\n    renderHandle_ = nullptr;\n    return nullptr;\n}\n"
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