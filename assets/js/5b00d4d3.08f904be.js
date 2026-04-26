"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["955630"], {
48251(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_use_ndk_arkts_user_defined_draw_arkts_user_defined_draw_md_5b0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-use-ndk-arkts-user-defined-draw-arkts-user-defined-draw-md-5b0.json
var site_docs_arkui_arkts_use_ndk_arkts_user_defined_draw_arkts_user_defined_draw_md_5b0_namespaceObject = JSON.parse('{"id":"arkui/arkts-use-ndk/arkts-user-defined-draw/arkts-user-defined-draw","title":"自定义绘制","description":"概述","source":"@site/docs/arkui/arkts-use-ndk/arkts-user-defined-draw/arkts-user-defined-draw.md","sourceDirName":"arkui/arkts-use-ndk/arkts-user-defined-draw","slug":"/arkui/arkts-use-ndk/arkts-user-defined-draw/","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/arkts-user-defined-draw/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"自定义绘制","sidebar_position":12,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-user-defined-draw","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通过自绘制接入无障碍","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-accessibility-xcomponent/"},"next":{"title":"查询和操作自定义节点","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-node-query-operate/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-use-ndk/arkts-user-defined-draw/arkts-user-defined-draw.md


const frontMatter = {
	title: '自定义绘制',
	sidebar_position: 12,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-user-defined-draw',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '自定义绘制';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "自定义绘制层级",
  "id": "自定义绘制层级",
  "level": 2
}, {
  "value": "内容层自定义绘制示例",
  "id": "内容层自定义绘制示例",
  "level": 3
}, {
  "value": "多层级绘制示例",
  "id": "多层级绘制示例",
  "level": 3
}, {
  "value": "通过前景绘制实现消息蒙层",
  "id": "通过前景绘制实现消息蒙层",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "自定义绘制",
        children: "自定义绘制"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当某些组件本身的绘制内容不满足需求时，可使用组件自定义绘制功能，在原有组件基础上部分绘制、或者全部自行绘制，以达到预期效果。例如：独特的按钮形状、文字和图像混合的图标等。NDK提供了自定义绘制节点的能力，通过自定义绘制事件，开发者可以实现基于NDK侧", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodetype",
        children: "ArkUI_NodeType"
      }), "中ARKUI_NODE_CUSTOM类型节点的自绘制能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(598921)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ArkTS的自定义绘制能力和示例请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-draw/arkts-user-defined-extension-drawmodifier",
          children: "自定义绘制修改器 (DrawModifier)"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义绘制层级",
      children: "自定义绘制层级"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义绘制提供了五个绘制层级，从低到高依次为：内容背景层（drawBehind）、内容层（drawContent）、内容前景层（drawFront）、前景层（drawForeground）和浮层（drawOverlay）。开发者可以根据需求选择合适的层级进行绘制。自定义绘制层级图如下所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(999272)/* ["default"] */.A) + "",
        width: "900",
        height: "573"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以通过注册相应的事件类型来实现不同层级的自定义绘制，不同层级对应的枚举如下，NDK接口支持的事件类型范围请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodecustomeventtype",
        children: "ArkUI_NodeCustomEventType"
      }), "枚举值。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "事件类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_NODE_CUSTOM_EVENT_ON_DRAW_BEHIND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义内容背景层绘制类型，从API version 20开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_NODE_CUSTOM_EVENT_ON_DRAW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义内容层绘制类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_NODE_CUSTOM_EVENT_ON_DRAW_FRONT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义内容前景层绘制类型，从API version 20开始支持。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_NODE_CUSTOM_EVENT_ON_FOREGROUND_DRAW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义前景层绘制类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ARKUI_NODE_CUSTOM_EVENT_ON_OVERLAY_DRAW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义浮层绘制类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "内容层自定义绘制示例",
      children: "内容层自定义绘制示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例通过注册内容层绘制事件ARKUI_NODE_CUSTOM_EVENT_ON_DRAW在节点内容层绘制一条从左上区域到右下区域的对角线段，效果图如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下场景基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-use-ndk/ndk-access-the-arkts-page",
        children: "接入ArkTS页面"
      }), "章节，创建前置工程。内容绘制的完整示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/NativeType/NativeDrawPageSample",
        children: "NativeDrawPageSample"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(543994)/* ["default"] */.A) + "",
        width: "630",
        height: "490"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1",
            children: "ArkUI_NativeNodeAPI_1"
          }), "的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativenodeapi-1/capi-arkui-nativemodule-arkui-nativenodeapi-1#createnode",
            children: "createNode"
          }), "接口，传入", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodecustomeventtype",
            children: "ArkUI_NodeType"
          }), "中的ARKUI_NODE_CUSTOM枚举值创建自定义节点。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "auto customNode = nodeAPI->createNode(ARKUI_NODE_CUSTOM);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "事件注册时将自定义节点、事件类型、事件ID和UserData作为参数传入。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// UserData\nstruct A {\n    int32_t a = 6;\n    bool flag = true;\n    ArkUI_NodeHandle node;\n};\nA *a = new A;\na->node = customNode;\n// ...\nnodeAPI->registerNodeCustomEvent(customNode, ARKUI_NODE_CUSTOM_EVENT_ON_FOREGROUND_DRAW, 1, a);\n// 事件回调函数的编写\nnodeAPI->registerNodeCustomEventReceiver([](ArkUI_NodeCustomEvent *event) {\n    // 事件回调函数逻辑\n    // ...\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在回调函数中，通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodecustomevent_geteventtype",
            children: "OH_ArkUI_NodeCustomEvent_GetEventType"
          }), "获取自定义事件的事件类型，通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodecustomevent_geteventtargetid",
            children: "OH_ArkUI_NodeCustomEvent_GetEventTargetId"
          }), "获取事件ID，通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodecustomevent_getuserdata",
            children: "OH_ArkUI_NodeCustomEvent_GetUserData"
          }), "获取UserData，再根据事件类型和事件ID判断当前触发的是哪个绘制事件，从而执行对应的逻辑。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "auto type = OH_ArkUI_NodeCustomEvent_GetEventType(event);\nauto targetId = OH_ArkUI_NodeCustomEvent_GetEventTargetId(event);\nauto userData = reinterpret_cast<A *>(OH_ArkUI_NodeCustomEvent_GetUserData(event));\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#oh_arkui_nodecustomevent_getdrawcontextindraw",
            children: "OH_ArkUI_NodeCustomEvent_GetDrawContextInDraw"
          }), "通过自定义组件事件获取绘制上下文，并将其传入", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-type-h/capi-native-type-h#oh_arkui_drawcontext_getcanvas",
            children: "OH_ArkUI_DrawContext_GetCanvas"
          }), "以获取Canvas画布指针，该指针随后将转换为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-struct/capi-drawing-oh-drawing-canvas/capi-drawing-oh-drawing-canvas",
            children: "OH_Drawing_Canvas"
          }), "指针进行绘制。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取自定义事件绘制的上下文。\nauto *drawContext = OH_ArkUI_NodeCustomEvent_GetDrawContextInDraw(event);\n// 获取Canvas指针。\nauto *canvas1 = OH_ArkUI_DrawContext_GetCanvas(drawContext);\n// 转换为OH_Drawing_Canvas指针进行绘制。\nOH_Drawing_Canvas *canvas = reinterpret_cast<OH_Drawing_Canvas *>(canvas1);\n// 绘制逻辑。\nint32_t width = SIZE_1000;  // SIZE_1000 = 1000\nint32_t height = SIZE_1000; // SIZE_1000 = 1000\nauto path = OH_Drawing_PathCreate();\nOH_Drawing_PathMoveTo(path, width / SIZE_4, height / SIZE_4);                   // SIZE_4 = 4\nOH_Drawing_PathLineTo(path, width * SIZE_3 / SIZE_4, height * SIZE_3 / SIZE_4); // SIZE_3 = 3,SIZE_4 = 4\nOH_Drawing_PathClose(path);\nauto pen = OH_Drawing_PenCreate();\nOH_Drawing_PenSetWidth(pen, SIZE_10); // SIZE_10 = 10\nOH_Drawing_PenSetColor(pen, OH_Drawing_ColorSetArgb(0xFF, 0x00, 0x4A, 0x4F));\nOH_Drawing_CanvasAttachPen(canvas, pen);\nOH_Drawing_CanvasDrawPath(canvas, path);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "多层级绘制示例",
      children: "多层级绘制示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下示例创建了一个自定义绘制组件，实现自定义矩形绘制、自定义绘制内容前景层和内容背景层，并支持使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-use-ndk/ndk-build-custom-components#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B8%83%E5%B1%80%E5%AE%B9%E5%99%A8",
        children: "自定义布局容器"
      }), "进行布局排布。完整示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/NativeType/NativeNodeUtilsSample",
        children: "NativeNodeUtilsSample"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(111908)/* ["default"] */.A) + "",
        width: "479",
        height: "635"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图中深蓝矩形为drawFront内容前景层，浅蓝色矩形为drawContent内容层，白色矩形为drawBehind内容背景层。三层的叠加关系用于验证多层级绘制顺序是否符合预期。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["按照", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-use-ndk/ndk-build-custom-components#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B8%83%E5%B1%80%E5%AE%B9%E5%99%A8",
            children: "自定义布局容器"
          }), "章节准备前置工程。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建自定义绘制组件封装对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#ifndef MYAPPLICATION_ARKUICUSTOMNODE_H\n#define MYAPPLICATION_ARKUICUSTOMNODE_H\n\n#include <native_drawing/drawing_brush.h>\n#include <native_drawing/drawing_canvas.h>\n#include <native_drawing/drawing_path.h>\n\n#include \"ArkUINode.h\"\n\nnamespace NativeModule {\nclass ArkUICustomNode : public ArkUINode {\npublic:\n    // 使用自定义组件类型ARKUI_NODE_CUSTOM创建组件。\n    ArkUICustomNode()\n        : ArkUINode((NativeModuleInstance::GetInstance()->GetNativeNodeAPI())->createNode(ARKUI_NODE_CUSTOM))\n    {\n        // 注册自定义事件监听器。\n        nativeModule_->addNodeCustomEventReceiver(handle_, OnStaticCustomEvent);\n        // 声明自定义事件并转递自身作为自定义数据。\n        nativeModule_->registerNodeCustomEvent(handle_, ARKUI_NODE_CUSTOM_EVENT_ON_DRAW_FRONT, 0, this);\n        nativeModule_->registerNodeCustomEvent(handle_, ARKUI_NODE_CUSTOM_EVENT_ON_DRAW, 0, this);\n        nativeModule_->registerNodeCustomEvent(handle_, ARKUI_NODE_CUSTOM_EVENT_ON_DRAW_BEHIND, 0, this);\n        // 绘制完成事件通知。\n        OH_ArkUI_RegisterDrawCallbackOnNodeHandle(handle_, nullptr, [](void* userData) {});\n    }\n\n    ~ArkUICustomNode() override\n    {\n        // 反注册自定义事件监听器。\n        nativeModule_->removeNodeCustomEventReceiver(handle_, OnStaticCustomEvent);\n        // 取消声明自定义事件。\n        nativeModule_->unregisterNodeCustomEvent(handle_, ARKUI_NODE_CUSTOM_EVENT_ON_DRAW_FRONT);\n        nativeModule_->unregisterNodeCustomEvent(handle_, ARKUI_NODE_CUSTOM_EVENT_ON_DRAW);\n        nativeModule_->unregisterNodeCustomEvent(handle_, ARKUI_NODE_CUSTOM_EVENT_ON_DRAW_BEHIND);\n        OH_ArkUI_UnregisterDrawCallbackOnNodeHandle(handle_);\n    }\n\nprivate:\n    int32_t NUM_2 = 2;\n    int32_t NUM_3 = 3;\n    int32_t NUM_4 = 4;\n    int32_t NUM_5 = 5;\n    static void OnStaticCustomEvent(ArkUI_NodeCustomEvent *event)\n    {\n        // 获取组件实例对象，调用相关实例方法。\n        // ...\n        auto customNode = reinterpret_cast<ArkUICustomNode *>(OH_ArkUI_NodeCustomEvent_GetUserData(event));\n        auto type = OH_ArkUI_NodeCustomEvent_GetEventType(event);\n        switch (type) {\n            // 绘制层级由低到高。\n            case ARKUI_NODE_CUSTOM_EVENT_ON_DRAW_BEHIND:\n                customNode->OnDrawBehind(event);\n                break;\n            case ARKUI_NODE_CUSTOM_EVENT_ON_DRAW:\n                customNode->OnDraw(event);\n                break;\n            case ARKUI_NODE_CUSTOM_EVENT_ON_DRAW_FRONT:\n                customNode->OnDrawFront(event);\n                break;\n            // ...\n            default:\n                break;\n        }\n    }\n\n    // 自定义绘制逻辑。\n    void OnDrawBehind(ArkUI_NodeCustomEvent *event)\n    {\n        auto drawContext = OH_ArkUI_NodeCustomEvent_GetDrawContextInDraw(event);\n        // 获取图形绘制对象。\n        auto drawCanvas = reinterpret_cast<OH_Drawing_Canvas *>(OH_ArkUI_DrawContext_GetCanvas(drawContext));\n        // 获取组件大小。\n        auto size = OH_ArkUI_DrawContext_GetSize(drawContext);\n        // 绘制自定义内容。\n        auto path = OH_Drawing_PathCreate();\n        OH_Drawing_PathMoveTo(path, size.width / NUM_5, size.height / NUM_5);\n        OH_Drawing_PathLineTo(path, size.width * NUM_4 / NUM_5, size.height / NUM_5);\n        OH_Drawing_PathLineTo(path, size.width * NUM_4 / NUM_5, size.height * NUM_4 / NUM_5);\n        OH_Drawing_PathLineTo(path, size.width / NUM_5, size.height * NUM_4 / NUM_5);\n        OH_Drawing_PathLineTo(path, size.width / NUM_5, size.height / NUM_5);\n        OH_Drawing_PathClose(path);\n        auto brush = OH_Drawing_BrushCreate();\n        OH_Drawing_BrushSetColor(brush, 0xFFF0FAFF); // 蓝白色\n        OH_Drawing_CanvasAttachBrush(drawCanvas, brush);\n        OH_Drawing_CanvasDrawPath(drawCanvas, path);\n        // 释放资源\n        OH_Drawing_BrushDestroy(brush);\n        OH_Drawing_PathDestroy(path);\n    }\n\n    void OnDraw(ArkUI_NodeCustomEvent *event)\n    {\n        auto drawContext = OH_ArkUI_NodeCustomEvent_GetDrawContextInDraw(event);\n        // 获取图形绘制对象。\n        auto drawCanvas = reinterpret_cast<OH_Drawing_Canvas *>(OH_ArkUI_DrawContext_GetCanvas(drawContext));\n        // 获取组件大小。\n        auto size = OH_ArkUI_DrawContext_GetSize(drawContext);\n        // 绘制自定义内容。\n        auto path = OH_Drawing_PathCreate();\n        OH_Drawing_PathMoveTo(path, size.width / NUM_4, size.height / NUM_4);\n        OH_Drawing_PathLineTo(path, size.width * NUM_3 / NUM_4, size.height / NUM_4);\n        OH_Drawing_PathLineTo(path, size.width * NUM_3 / NUM_4, size.height * NUM_3 / NUM_4);\n        OH_Drawing_PathLineTo(path, size.width / NUM_4, size.height * NUM_3 / NUM_4);\n        OH_Drawing_PathLineTo(path, size.width / NUM_4, size.height / NUM_4);\n        OH_Drawing_PathClose(path);\n        auto brush = OH_Drawing_BrushCreate();\n        OH_Drawing_BrushSetColor(brush, 0xff2787D9); // 浅蓝色\n        OH_Drawing_CanvasAttachBrush(drawCanvas, brush);\n        OH_Drawing_CanvasDrawPath(drawCanvas, path);\n        // 释放资源\n        OH_Drawing_BrushDestroy(brush);\n        OH_Drawing_PathDestroy(path);\n    }\n\n    void OnDrawFront(ArkUI_NodeCustomEvent *event)\n    {\n        auto drawContext = OH_ArkUI_NodeCustomEvent_GetDrawContextInDraw(event);\n        // 获取图形绘制对象。\n        auto drawCanvas = reinterpret_cast<OH_Drawing_Canvas *>(OH_ArkUI_DrawContext_GetCanvas(drawContext));\n        // 获取组件大小。\n        auto size = OH_ArkUI_DrawContext_GetSize(drawContext);\n        // 绘制自定义内容。\n        auto path = OH_Drawing_PathCreate();\n        OH_Drawing_PathMoveTo(path, size.width / NUM_3, size.height / NUM_3);\n        OH_Drawing_PathLineTo(path, size.width * NUM_2 / NUM_3, size.height / NUM_3);\n        OH_Drawing_PathLineTo(path, size.width * NUM_2 / NUM_3, size.height * NUM_2 / NUM_3);\n        OH_Drawing_PathLineTo(path, size.width / NUM_3, size.height * NUM_2 / NUM_3);\n        OH_Drawing_PathLineTo(path, size.width / NUM_3, size.height / NUM_3);\n        OH_Drawing_PathClose(path);\n        auto brush = OH_Drawing_BrushCreate();\n        OH_Drawing_BrushSetColor(brush, 0xFF004AAF); // 深蓝色\n        OH_Drawing_CanvasAttachBrush(drawCanvas, brush);\n        OH_Drawing_CanvasDrawPath(drawCanvas, path);\n        // 释放资源\n        OH_Drawing_BrushDestroy(brush);\n        OH_Drawing_PathDestroy(path);\n    }\n    // ...\n};\n\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_ARKUICUSTOMNODE_H\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用自定义绘制组件和自定义容器创建示例界面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <arkui/native_node_napi.h>\n#include <arkui/native_type.h>\n#include <js_native_api.h>\n\n#include \"NativeEntry.h\"\n#include \"ArkUICustomContainerNode.h\"\n#include \"ArkUICustomNode.h\"\n#include \"ArkUIMessageMaskNode.h\"\n\n// 全局环境变量声明\nstatic napi_env g_env = nullptr;\n// ...\nnamespace NativeModule {\n// ...\n#define SIZE_150 150\n// ...\nnapi_value CreateNativeRoot(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    // 获取NodeContent。\n    ArkUI_NodeContentHandle contentHandle;\n    OH_ArkUI_GetNodeContentFromNapiValue(env, args[0], &contentHandle);\n    NativeEntry::GetInstance()->SetContentHandle(contentHandle);\n\n    // 创建自定义容器和自定义绘制组件。\n    auto node = std::make_shared<ArkUICustomContainerNode>();\n    node->SetBackgroundColor(0xFFD5D5D5); // 浅灰色。\n    auto customNode = std::make_shared<ArkUICustomNode>();\n    customNode->SetBackgroundColor(0xFF707070); // 深灰色。\n    customNode->SetWidth(SIZE_150);\n    customNode->SetHeight(SIZE_150);\n    node->AddChild(customNode);\n\n    // 保持Native侧对象到管理类中，维护生命周期。\n    NativeEntry::GetInstance()->SetRootNode(node);\n    g_env = env;\n    return nullptr;\n}\n\nnapi_value DestroyNativeRoot(napi_env env, napi_callback_info info)\n{\n    // 从管理类中释放Native侧对象。\n    NativeEntry::GetInstance()->DisposeRootNode();\n    return nullptr;\n}\n} // namespace NativeModule\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过前景绘制实现消息蒙层",
      children: "通过前景绘制实现消息蒙层"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下示例创建了一个消息提示组件，通过内容层绘制消息气泡与文本，并在前景层叠加星标装饰，实现消息高亮提示效果，常用于消息提醒和引导标记等场景。完整示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/NativeType/NativeNodeUtilsSample",
        children: "NativeNodeUtilsSample"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "未添加消息蒙层，未添加蒙层，没有前景层叠加星标装饰效果："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(305677)/* ["default"] */.A) + "",
        width: "360",
        height: "330"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加消息蒙层，添加后有前景层叠加星标装饰效果："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(167666)/* ["default"] */.A) + "",
        width: "360",
        height: "330"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["按照", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%A4%9A%E5%B1%82%E7%BA%A7%E7%BB%98%E5%88%B6%E7%A4%BA%E4%BE%8B",
            children: "多层级绘制示例"
          }), "章节准备前置工程。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建消息蒙层组件封装对象。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#ifndef MYAPPLICATION_ARKUIMESSAGEMASKNODE_H\n#define MYAPPLICATION_ARKUIMESSAGEMASKNODE_H\n\n#include <cmath>\n#include <native_drawing/drawing_brush.h>\n#include <native_drawing/drawing_canvas.h>\n#include <native_drawing/drawing_color_filter.h>\n#include <native_drawing/drawing_font.h>\n#include <native_drawing/drawing_font_collection.h>\n#include <native_drawing/drawing_path.h>\n#include <native_drawing/drawing_pen.h>\n#include <native_drawing/drawing_point.h>\n#include <native_drawing/drawing_rect.h>\n#include <native_drawing/drawing_round_rect.h>\n#include <native_drawing/drawing_text_typography.h>\n\n#include <string>\n\n#include \"ArkUINode.h\"\n\nnamespace NativeModule {\nclass ArkUIMessageMaskNode : public ArkUINode {\npublic:\n    // 使用自定义组件类型ARKUI_NODE_CUSTOM创建组件\n    ArkUIMessageMaskNode()\n        : ArkUINode(\n              (NativeModuleInstance::GetInstance()->GetNativeNodeAPI())->createNode(ARKUI_NODE_CUSTOM))\n    {\n        // 注册自定义事件监听器\n        nativeModule_->addNodeCustomEventReceiver(handle_, OnStaticCustomEvent);\n        // 声明自定义事件并转递自身作为自定义数据\n        nativeModule_->registerNodeCustomEvent(handle_, ARKUI_NODE_CUSTOM_EVENT_ON_DRAW_FRONT, 0, this);\n        nativeModule_->registerNodeCustomEvent(handle_, ARKUI_NODE_CUSTOM_EVENT_ON_DRAW, 0, this);\n        nativeModule_->registerNodeCustomEvent(handle_, ARKUI_NODE_CUSTOM_EVENT_ON_DRAW_BEHIND, 0, this);\n    }\n\n    ~ArkUIMessageMaskNode() override\n    {\n        // 反注册自定义事件监听器\n        nativeModule_->removeNodeCustomEventReceiver(handle_, OnStaticCustomEvent);\n        // 取消声明自定义事件\n        nativeModule_->unregisterNodeCustomEvent(handle_, ARKUI_NODE_CUSTOM_EVENT_ON_DRAW_FRONT);\n        nativeModule_->unregisterNodeCustomEvent(handle_, ARKUI_NODE_CUSTOM_EVENT_ON_DRAW);\n        nativeModule_->unregisterNodeCustomEvent(handle_, ARKUI_NODE_CUSTOM_EVENT_ON_DRAW_BEHIND);\n    }\n\n    // 设置消息文本\n    void SetMessage(const std::string& message)\n    {\n        message_ = message;\n        nativeModule_->markDirty(handle_, NODE_NEED_RENDER);\n    }\n\n    // 设置是否显示蒙层\n    void SetMaskVisible(bool visible)\n    {\n        maskVisible_ = visible;\n        nativeModule_->markDirty(handle_, NODE_NEED_RENDER);\n    }\n\nprivate:\n    static constexpr int starDecorationCount = 3;\n    static constexpr int starPointCount = 5;\n    static constexpr float starStartAngleDegrees = -90.0f;\n    static constexpr float starAngleStepDegrees = 72.0f;\n    static constexpr float starInnerAngleOffsetDegrees = 36.0f;\n    static constexpr float starInnerRadiusRatio = 0.4f;\n    static constexpr float degreeToRadian = 3.14159265f / 180.0f;\n    static constexpr float messageTextFontSize = 23.0f;\n\n    static void OnStaticCustomEvent(ArkUI_NodeCustomEvent* event)\n    {\n        auto customNode = reinterpret_cast<ArkUIMessageMaskNode*>(OH_ArkUI_NodeCustomEvent_GetUserData(event));\n        auto type = OH_ArkUI_NodeCustomEvent_GetEventType(event);\n        switch (type) {\n            case ARKUI_NODE_CUSTOM_EVENT_ON_DRAW_BEHIND:\n                customNode->OnDrawBehind(event);\n                break;\n            case ARKUI_NODE_CUSTOM_EVENT_ON_DRAW:\n                customNode->OnDraw(event);\n                break;\n            case ARKUI_NODE_CUSTOM_EVENT_ON_DRAW_FRONT:\n                customNode->OnDrawFront(event);\n                break;\n            default:\n                break;\n        }\n    }\n\n    // 自定义内容背景层：绘制聊天界面背景\n    void OnDrawBehind(ArkUI_NodeCustomEvent* event)\n    {\n        auto drawContext = OH_ArkUI_NodeCustomEvent_GetDrawContextInDraw(event);\n        auto canvas = reinterpret_cast<OH_Drawing_Canvas*>(OH_ArkUI_DrawContext_GetCanvas(drawContext));\n        auto size = OH_ArkUI_DrawContext_GetSize(drawContext);\n\n        // 绘制浅灰色背景\n        auto bgRect = OH_Drawing_RectCreate(0, 0, size.width, size.height);\n        auto brush = OH_Drawing_BrushCreate();\n        OH_Drawing_BrushSetColor(brush, 0xFFF5F5F5);\n        OH_Drawing_CanvasAttachBrush(canvas, brush);\n        OH_Drawing_CanvasDrawRect(canvas, bgRect);\n        OH_Drawing_CanvasDetachBrush(canvas);\n        OH_Drawing_BrushDestroy(brush);\n        OH_Drawing_RectDestroy(bgRect);\n    }\n\n    // 自定义内容层\n    void OnDraw(ArkUI_NodeCustomEvent* event)\n    {\n        auto drawContext = OH_ArkUI_NodeCustomEvent_GetDrawContextInDraw(event);\n        auto canvas = reinterpret_cast<OH_Drawing_Canvas*>(OH_ArkUI_DrawContext_GetCanvas(drawContext));\n        auto size = OH_ArkUI_DrawContext_GetSize(drawContext);\n\n        float padding = 50.0f;\n        float bubbleWidth = size.width - 2 * padding;\n        float bubbleHeight = size.height - 2 * padding;\n        float cornerRadius = 8.0f;\n        float textX = padding + 15.0f;\n        float textY = padding + 20.0f;\n        float textMaxWidth = bubbleWidth - 30.0f;\n\n        // 绘制气泡阴影\n        auto shadowRect = OH_Drawing_RectCreate(\n            padding + 2, padding + 2, padding + bubbleWidth + 2, padding + bubbleHeight + 2);\n        auto* shadowRoundRect = OH_Drawing_RoundRectCreate(shadowRect, cornerRadius, cornerRadius);\n        auto shadowBrush = OH_Drawing_BrushCreate();\n        OH_Drawing_BrushSetColor(shadowBrush, 0x30000000);\n        OH_Drawing_CanvasAttachBrush(canvas, shadowBrush);\n        OH_Drawing_CanvasDrawRoundRect(canvas, shadowRoundRect);\n        OH_Drawing_CanvasDetachBrush(canvas);\n        OH_Drawing_BrushDestroy(shadowBrush);\n        OH_Drawing_RoundRectDestroy(shadowRoundRect);\n        OH_Drawing_RectDestroy(shadowRect);\n\n        // 绘制绿色气泡背景\n        auto bubbleRect = OH_Drawing_RectCreate(padding, padding, padding + bubbleWidth, padding + bubbleHeight);\n        auto* bubbleRoundRect = OH_Drawing_RoundRectCreate(bubbleRect, cornerRadius, cornerRadius);\n        auto bubbleBrush = OH_Drawing_BrushCreate();\n        OH_Drawing_BrushSetColor(bubbleBrush, 0xFF95EC69);\n        OH_Drawing_CanvasAttachBrush(canvas, bubbleBrush);\n        OH_Drawing_CanvasDrawRoundRect(canvas, bubbleRoundRect);\n        OH_Drawing_CanvasDetachBrush(canvas);\n        OH_Drawing_BrushDestroy(bubbleBrush);\n\n        // 绘制气泡边框\n        auto pen = OH_Drawing_PenCreate();\n        OH_Drawing_PenSetWidth(pen, 1.0f);\n        OH_Drawing_PenSetColor(pen, 0xFF7FD65A);\n        OH_Drawing_CanvasAttachPen(canvas, pen);\n        OH_Drawing_CanvasDrawRoundRect(canvas, bubbleRoundRect);\n        OH_Drawing_CanvasDetachPen(canvas);\n        OH_Drawing_PenDestroy(pen);\n        OH_Drawing_RoundRectDestroy(bubbleRoundRect);\n        OH_Drawing_RectDestroy(bubbleRect);\n\n        // 绘制消息文本\n        DrawMessageText(canvas, textX, textY, textMaxWidth);\n    }\n\n    // 自定义内容前景层：绘制装饰性蒙层\n    void OnDrawFront(ArkUI_NodeCustomEvent* event)\n    {\n        if (!maskVisible_) {\n            return;\n        }\n\n        auto drawContext = OH_ArkUI_NodeCustomEvent_GetDrawContextInDraw(event);\n        auto canvas = reinterpret_cast<OH_Drawing_Canvas*>(OH_ArkUI_DrawContext_GetCanvas(drawContext));\n\n        float padding = 50.0f;\n\n        auto starBrush = OH_Drawing_BrushCreate();\n        OH_Drawing_BrushSetColor(starBrush, 0x88FFFFFF);\n        OH_Drawing_CanvasAttachBrush(canvas, starBrush);\n\n        const float starRadius = 13.0f;\n        const float textLeftX = padding + 26.0f;\n        const float textRightX = padding + 146.0f;\n        const float starBottomY = padding + 50.0f;\n        const float starTopY = padding + 10.0f;\n        for (int i = 0; i < starDecorationCount; ++i) {\n            float t = static_cast<float>(i) / static_cast<float>(starDecorationCount - 1);\n            float starX = textLeftX + (textRightX - textLeftX) * t;\n            float starY = starBottomY + (starTopY - starBottomY) * t;\n            DrawStar(canvas, starX, starY, starRadius);\n        }\n\n        OH_Drawing_CanvasDetachBrush(canvas);\n        OH_Drawing_BrushDestroy(starBrush);\n    }\n\n    // 绘制五角星\n    void DrawStar(OH_Drawing_Canvas* canvas, float cx, float cy, float radius)\n    {\n        auto path = OH_Drawing_PathCreate();\n        for (int i = 0; i < starPointCount; ++i) {\n            float angle = starStartAngleDegrees + i * starAngleStepDegrees;\n            float rad = angle * degreeToRadian;\n            float x = cx + radius * std::cos(rad);\n            float y = cy + radius * std::sin(rad);\n            if (i == 0) {\n                OH_Drawing_PathMoveTo(path, x, y);\n            } else {\n                OH_Drawing_PathLineTo(path, x, y);\n            }\n\n            // 内角点\n            float innerAngle = angle + starInnerAngleOffsetDegrees;\n            float innerRad = innerAngle * degreeToRadian;\n            float innerX = cx + radius * starInnerRadiusRatio * std::cos(innerRad);\n            float innerY = cy + radius * starInnerRadiusRatio * std::sin(innerRad);\n            OH_Drawing_PathLineTo(path, innerX, innerY);\n        }\n\n        OH_Drawing_PathClose(path);\n        OH_Drawing_CanvasDrawPath(canvas, path);\n        OH_Drawing_PathDestroy(path);\n    }\n\n    // 绘制消息文本\n    void DrawMessageText(OH_Drawing_Canvas* canvas, float x, float y, float maxWidth)\n    {\n        // 创建字体集合\n        auto* fontCollection = OH_Drawing_CreateFontCollection();\n\n        // 创建排版样式\n        auto* typographyStyle = OH_Drawing_CreateTypographyStyle();\n        OH_Drawing_SetTypographyTextAlign(typographyStyle, TEXT_ALIGN_LEFT);\n\n        // 创建排版处理器\n        auto* typographyHandler = OH_Drawing_CreateTypographyHandler(typographyStyle, fontCollection);\n\n        // 创建文本样式\n        auto* textStyle = OH_Drawing_CreateTextStyle();\n        OH_Drawing_SetTextStyleColor(textStyle, 0xFF000000); // 纯黑\n        OH_Drawing_SetTextStyleFontSize(textStyle, messageTextFontSize);\n        OH_Drawing_SetTextStyleFontWeight(textStyle, FONT_WEIGHT_400);\n        auto textBrush = OH_Drawing_BrushCreate();\n        OH_Drawing_BrushSetColor(textBrush, 0xFF000000);\n        OH_Drawing_SetTextStyleForegroundBrush(textStyle, textBrush);\n\n        // 添加文本\n        OH_Drawing_TypographyHandlerPushTextStyle(typographyHandler, textStyle);\n        OH_Drawing_TypographyHandlerAddText(typographyHandler, message_.c_str());\n        OH_Drawing_TypographyHandlerPopTextStyle(typographyHandler);\n\n        // 创建排版对象并绘制\n        auto* typography = OH_Drawing_CreateTypography(typographyHandler);\n        OH_Drawing_TypographyLayout(typography, maxWidth);\n        OH_Drawing_TypographyPaint(typography, canvas, x, y);\n\n        // 释放资源\n        OH_Drawing_DestroyTextStyle(textStyle);\n        OH_Drawing_DestroyTypography(typography);\n        OH_Drawing_DestroyTypographyHandler(typographyHandler);\n        OH_Drawing_DestroyTypographyStyle(typographyStyle);\n        OH_Drawing_DestroyFontCollection(fontCollection);\n        OH_Drawing_BrushDestroy(textBrush);\n    }\n\n    std::string message_ = \"\";\n    bool maskVisible_ = false;\n};\n} // namespace NativeModule\n\n#endif // MYAPPLICATION_ARKUIMESSAGEMASKNODE_H\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用消息蒙层组件创建示例界面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <arkui/native_node_napi.h>\n#include <arkui/native_type.h>\n#include <js_native_api.h>\n\n#include \"NativeEntry.h\"\n#include \"ArkUICustomContainerNode.h\"\n#include \"ArkUICustomNode.h\"\n#include \"ArkUIMessageMaskNode.h\"\n\n// 全局环境变量声明\nstatic napi_env g_env = nullptr;\n// ...\nnamespace NativeModule {\n// ...\nnapi_value CreateNativeMessageRoot(napi_env env, napi_callback_info info)\n{\n    constexpr int32_t messageMaskWidth = 400;\n    constexpr int32_t messageMaskHeight = 200;\n\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    // 避免重复创建导致的重复挂载\n    NativeEntry::GetInstance()->DisposeRootNode();\n\n    // 获取NodeContent\n    ArkUI_NodeContentHandle contentHandle;\n    OH_ArkUI_GetNodeContentFromNapiValue(env, args[0], &contentHandle);\n    NativeEntry::GetInstance()->SetContentHandle(contentHandle);\n\n    auto nodeAPI = NativeModuleInstance::GetInstance()->GetNativeNodeAPI();\n    auto rootColumn = std::make_shared<ArkUIColumnNode>();\n    auto rootColumnHandle = rootColumn->GetHandle();\n    \n    // 设置根容器样式\n    ArkUI_NumberValue paddingValue[] = {{.f32 = 20.0f}};\n    ArkUI_AttributeItem paddingItem = {paddingValue, 1};\n    nodeAPI->setAttribute(rootColumnHandle, NODE_PADDING, &paddingItem);\n\n    ArkUI_NumberValue bgColorValue[] = {{.u32 = 0xFFFFFFFF}};\n    ArkUI_AttributeItem bgColorItem = {bgColorValue, 1};\n    nodeAPI->setAttribute(rootColumnHandle, NODE_BACKGROUND_COLOR, &bgColorItem);\n    \n    // 创建消息气泡组件\n    auto maskNode = std::make_shared<ArkUIMessageMaskNode>();\n    maskNode->SetWidth(messageMaskWidth);\n    maskNode->SetHeight(messageMaskHeight);\n    maskNode->SetMessage(\"您有一条新消息\");\n    maskNode->SetMaskVisible(false);  // 初始不显示蒙层\n    \n    // 创建按钮用于切换蒙层效果\n    auto buttonNode = std::make_shared<ArkUINode>(nodeAPI->createNode(ARKUI_NODE_BUTTON));\n    auto buttonHandle = buttonNode->GetHandle();\n    \n    // 设置按钮文本\n    ArkUI_AttributeItem labelItem;\n    const char* buttonLabel = \"切换蒙层效果\";\n    labelItem.string = buttonLabel;\n    nodeAPI->setAttribute(buttonHandle, NODE_BUTTON_LABEL, &labelItem);\n    \n    // 设置按钮样式\n    ArkUI_NumberValue marginValue[] = {{.f32 = 20.0f}};\n    ArkUI_AttributeItem marginItem = {marginValue, 1};\n    nodeAPI->setAttribute(buttonHandle, NODE_MARGIN, &marginItem);\n    \n    ArkUI_NumberValue btnBgColorValue[] = {{.u32 = 0xFF2787D9}};\n    ArkUI_AttributeItem btnBgColorItem = {btnBgColorValue, 1};\n    nodeAPI->setAttribute(buttonHandle, NODE_BACKGROUND_COLOR, &btnBgColorItem);\n\n    // 设置按钮点击事件\n    auto onClick = [](ArkUI_NodeEvent *event) {\n        auto maskNode = (ArkUIMessageMaskNode *)OH_ArkUI_NodeEvent_GetUserData(event);\n        static bool highlighted = false;\n        highlighted = !highlighted;\n        maskNode->SetMaskVisible(highlighted);\n    };\n    buttonNode->RegisterOnClick(onClick, maskNode.get());\n    \n    // 将组件添加到根容器\n    rootColumn->AddChild(buttonNode);\n    rootColumn->AddChild(maskNode);\n\n    // 保持Native侧对象到管理类中，维护生命周期\n    NativeEntry::GetInstance()->SetRootNode(rootColumn);\n    return nullptr;\n}\n\nnapi_value DestroyNativeRoot(napi_env env, napi_callback_info info)\n{\n    // 从管理类中释放Native侧对象。\n    NativeEntry::GetInstance()->DisposeRootNode();\n    return nullptr;\n}\n} // namespace NativeModule\n"
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
999272(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798376-95f0c58506fa60cfa3a3fb7f0ba8a643.png");

},
598921(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
111908(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478071-722f9361f78a9b142cffd553903338a0.jpg");

},
305677(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798422-540c7c19221e6602bc185ed2f9bd9383.jpg");

},
167666(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438117-fd2e7319a1503b21559f3963e4a29c44.jpg");

},
543994(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958070-450dbb70031a6a3e7479cd7eb1872c79.jpg");

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