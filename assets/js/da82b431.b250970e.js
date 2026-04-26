"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["599371"], {
524806(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_use_ndk_arkts_build_text_ndk_ndk_styled_string_ndk_styled_string_md_da8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-use-ndk-arkts-build-text-ndk-ndk-styled-string-ndk-styled-string-md-da8.json
var site_docs_arkui_arkts_use_ndk_arkts_build_text_ndk_ndk_styled_string_ndk_styled_string_md_da8_namespaceObject = JSON.parse('{"id":"arkui/arkts-use-ndk/arkts-build-text-ndk/ndk-styled-string/ndk-styled-string","title":"Text组件的文本绘制与显示","description":"部分框架或应用具备自研的文字排版能力，在移植时，这些能力会被对接到方舟2D图形服务的文本引擎。为了避免开发者重复开发文本组件，Text组件提供了接口NODE\\\\TEXT\\\\CONTENT\\\\WITH\\\\STYLED\\\\STRING，可以直接渲染方舟文本引擎生成的文本。","source":"@site/docs/arkui/arkts-use-ndk/arkts-build-text-ndk/ndk-styled-string/ndk-styled-string.md","sourceDirName":"arkui/arkts-use-ndk/arkts-build-text-ndk/ndk-styled-string","slug":"/arkui/arkts-use-ndk/arkts-build-text-ndk/ndk-styled-string/","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/arkts-build-text-ndk/ndk-styled-string/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Text组件的文本绘制与显示","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-styled-string","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用瀑布流","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/arkts-build-layout-ndk/ndk-waterflow/"},"next":{"title":"监听输入框事件","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/arkts-build-text-ndk/ndk-textarea-event/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-use-ndk/arkts-build-text-ndk/ndk-styled-string/ndk-styled-string.md


const frontMatter = {
	title: 'Text组件的文本绘制与显示',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-styled-string',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'Text组件的文本绘制与显示';

const assets = {

};



const toc = [{
  "value": "创建Text组件",
  "id": "创建text组件",
  "level": 2
}, {
  "value": "设置段落与文本样式",
  "id": "设置段落与文本样式",
  "level": 2
}, {
  "value": "添加占位",
  "id": "添加占位",
  "level": 2
}, {
  "value": "文本布局与绘制",
  "id": "文本布局与绘制",
  "level": 2
}, {
  "value": "销毁对象",
  "id": "销毁对象",
  "level": 2
}, {
  "value": "完整示例",
  "id": "完整示例",
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
        id: "text组件的文本绘制与显示",
        children: "Text组件的文本绘制与显示"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["部分框架或应用具备自研的文字排版能力，在移植时，这些能力会被对接到", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkgraphics-2d/text/draw-text-display/complex-text-c",
        children: "方舟2D图形服务的文本引擎"
      }), "。为了避免开发者重复开发文本组件，Text组件提供了接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeattributetype",
        children: "NODE_TEXT_CONTENT_WITH_STYLED_STRING"
      }), "，可以直接渲染方舟文本引擎生成的文本。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下场景基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-use-ndk/ndk-access-the-arkts-page",
        children: "接入ArkTS页面章节"
      }), "，阐述了如何创建字体引擎文本，并利用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodetype",
        children: "Text组件"
      }), "进行渲染显示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(774117)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "涉及字体引擎的接口，需在CMakeLists.txt中添加target_link_libraries(entry PUBLIC libnative_drawing.so)，否则链接阶段会报错。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下图展示了 NODE_TEXT_CONTENT_WITH_STYLED_STRING 接口的主要使用流程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(236795)/* ["default"] */.A) + "",
        width: "376",
        height: "460"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建text组件",
      children: "创建Text组件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建文本组件时，无需配置文字颜色、字体大小等样式属性，因为这些属性通过字体引擎接口设置。但仍需设置基础的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-node-h/capi-native-node-h#arkui_nodeattributetype",
        children: "通用属性"
      }), "，如宽度和高度。如果不指定，组件自动适应文本的宽度和高度。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArkUI_NativeNodeAPI_1 *nodeApi = reinterpret_cast<ArkUI_NativeNodeAPI_1 *>(\n    OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_NODE, \"ArkUI_NativeNodeAPI_1\"));\nif (nodeApi == nullptr) {\n    return;\n}\n// ···\n// 创建Text组件\nArkUI_NodeHandle text = nodeApi->createNode(ARKUI_NODE_TEXT);\nArkUI_NumberValue textWidth[] = {{.f32 = 300}};\nArkUI_AttributeItem textWidthItem = {.value = textWidth, .size = 1};\nnodeApi->setAttribute(text, NODE_WIDTH, &textWidthItem);\nArkUI_NumberValue textHeight[] = {{.f32 = 100}};\nArkUI_AttributeItem textHeightItem = {.value = textHeight, .size = 1};\nnodeApi->setAttribute(text, NODE_HEIGHT, &textHeightItem);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置段落与文本样式",
      children: "设置段落与文本样式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置段落样式"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "段落样式定义了一段文字的整体属性，例如最大显示行数、文字方向等。以下代码示例设置了文字居中，最大行数限制为10。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(249024)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["OH_Drawing_前缀的接口由方舟字体引擎提供，参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkgraphics-2d/text/draw-text-display/simple-text-c",
            children: "简单文本绘制与显示（C/C++)"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkgraphics-2d/text/draw-text-display/complex-text-c",
            children: "复杂文本绘制与显示（C/C++）"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_Drawing_TypographyStyle *typographyStyle = OH_Drawing_CreateTypographyStyle();\nOH_Drawing_SetTypographyTextAlign(typographyStyle, OH_Drawing_TextAlign::TEXT_ALIGN_CENTER);\nOH_Drawing_SetTypographyTextMaxLines(typographyStyle, NUM_10);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置文本样式"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "不同内容的文本可以设置不同的文本样式，但必须按照以下三个接口的逻辑调用顺序进行设置，否则将无法生效。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-styled-string-h/capi-styled-string-h#oh_arkui_styledstring_pushtextstyle",
              children: "OH_ArkUI_StyledString_PushTextStyle"
            }), "：将文字样式推入栈中。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-styled-string-h/capi-styled-string-h#oh_arkui_styledstring_addtext",
              children: "OH_ArkUI_StyledString_AddText"
            }), "：添加要修改样式的文字内容。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-styled-string-h/capi-styled-string-h#oh_arkui_styledstring_poptextstyle",
              children: "OH_ArkUI_StyledString_PopTextStyle"
            }), "：将文字样式弹出栈。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(223245)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "OH_ArkUI_StyledString_前缀的接口由Text组件提供。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["OH_Drawing_前缀的接口由方舟字体引擎提供，参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkgraphics-2d/text/draw-text-display/simple-text-c",
            children: "简单文本绘制与显示（C/C++)"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkgraphics-2d/text/draw-text-display/complex-text-c",
            children: "复杂文本绘制与显示（C/C++）"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-typography-h/capi-drawing-text-typography-h#oh_drawing_createtextstyle",
            children: "OH_Drawing_CreateTextStyle"
          }), "创建文本样式。设置“Hello”字体大小28px，颜色为0xFF707070。设置“World!”字体大小为28px，颜色为0xFF2787D9。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ArkUI_StyledString *styledString = OH_ArkUI_StyledString_Create(typographyStyle, OH_Drawing_CreateFontCollection());\n// 创建文本样式，设置字体和颜色。\nOH_Drawing_TextStyle *textStyle = OH_Drawing_CreateTextStyle();\nOH_Drawing_SetTextStyleFontSize(textStyle, NUM_28);\nOH_Drawing_SetTextStyleColor(textStyle, OH_Drawing_ColorSetArgb(0xFF, 0x70, 0x70, 0x70));\n// 文本样式的设置顺序push -> add -> pop.\nOH_ArkUI_StyledString_PushTextStyle(styledString, textStyle);\nOH_ArkUI_StyledString_AddText(styledString, \"Hello\");\nOH_ArkUI_StyledString_PopTextStyle(styledString);\n// ···\n// 设置不同样式的文字\nOH_Drawing_TextStyle *worldTextStyle = OH_Drawing_CreateTextStyle();\nOH_Drawing_SetTextStyleFontSize(worldTextStyle, NUM_28);\nOH_Drawing_SetTextStyleColor(worldTextStyle, OH_Drawing_ColorSetArgb(0xFF, 0x27, 0x87, 0xD9));\nOH_ArkUI_StyledString_PushTextStyle(styledString, worldTextStyle);\nOH_ArkUI_StyledString_AddText(styledString, \"World!\");\nOH_ArkUI_StyledString_PopTextStyle(styledString);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加占位",
      children: "添加占位"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "占位保留指定大小的空白区域，此区域不绘制文字，但参与布局测量，影响文字排版。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "行高是文字高度与占位高度中的较大值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例展示在Hello与World!中间插入占位。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_Drawing_TextStyle *textStyle = OH_Drawing_CreateTextStyle();\nOH_Drawing_SetTextStyleFontSize(textStyle, NUM_28);\nOH_Drawing_SetTextStyleColor(textStyle, OH_Drawing_ColorSetArgb(0xFF, 0x70, 0x70, 0x70));\n// 文本样式的设置顺序push -> add -> pop.\nOH_ArkUI_StyledString_PushTextStyle(styledString, textStyle);\nOH_ArkUI_StyledString_AddText(styledString, \"Hello\");\nOH_ArkUI_StyledString_PopTextStyle(styledString);\n// 添加占位，此区域内不会绘制文字，可以在此位置挂载Image组件实现图文混排。\nOH_Drawing_PlaceholderSpan placeHolder{.width = 100, .height = 100};\nOH_ArkUI_StyledString_AddPlaceholder(styledString, &placeHolder);\n// 设置不同样式的文字\nOH_Drawing_TextStyle *worldTextStyle = OH_Drawing_CreateTextStyle();\nOH_Drawing_SetTextStyleFontSize(worldTextStyle, NUM_28);\nOH_Drawing_SetTextStyleColor(worldTextStyle, OH_Drawing_ColorSetArgb(0xFF, 0x27, 0x87, 0xD9));\nOH_ArkUI_StyledString_PushTextStyle(styledString, worldTextStyle);\nOH_ArkUI_StyledString_AddText(styledString, \"World!\");\nOH_ArkUI_StyledString_PopTextStyle(styledString);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "文本布局与绘制",
      children: "文本布局与绘制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "文本布局"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["文字样式和内容设置完成后，调用字体引擎接口", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-typography-h/capi-drawing-text-typography-h#oh_drawing_typographylayout",
            children: "OH_Drawing_TypographyLayout"
          }), "对文本进行布局，传入最大宽度。超过此宽度的文字会自动换行。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(48514)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "未经过布局的文本无法显示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_Drawing_Typography *typography = OH_ArkUI_StyledString_CreateTypography(styledString);\n// 字体引擎布局方法，需传入一个宽度，此宽度需与Text组件宽度匹配。\n// 布局宽度 = Text组件宽度 - (左padding + 右padding)\nOH_Drawing_TypographyLayout(typography, NUM_400);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "文本绘制"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "文本绘制由字体引擎与图形交互完成，无需额外设置。Text组件会在ArkUI渲染机制下，在组件触发绘制时调用字体引擎绘制接口。此处仅需将已创建的StyledString对象传递给已创建的Text组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ArkUI_AttributeItem styledStringItem = {.object = styledString};\n// 布局完成后，通过NODE_TEXT_CONTENT_WITH_STYLED_STRING设置给Text组件。\nnodeApi->setAttribute(text, NODE_TEXT_CONTENT_WITH_STYLED_STRING, &styledStringItem);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "销毁对象",
      children: "销毁对象"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Text组件不对本文涉及的任何对象的生命周期进行管理，需由开发者自行负责。字体引擎接口均配有相应的销毁方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_Drawing_DestroyTextStyle(OH_Drawing_TextStyle *style)：销毁文本样式对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_Drawing_DestroyTypographyStyle(OH_Drawing_TypographyStyle *style)：销毁段落样式对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当Text组件仍在界面上显示时，此时释放会导致文字无法绘制。在实际业务场景下需确保Text组件不再使用时才释放。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["相关字体引擎销毁的接口请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-typography-h/capi-drawing-text-typography-h#oh_drawing_destroytextstyle",
        children: "OH_Drawing_DestroyTextStyle"
      }), " 和 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-c/arkgraphics-headerfile/capi-drawing-text-typography-h/capi-drawing-text-typography-h#oh_drawing_destroytypographystyle",
        children: "OH_Drawing_DestroyTypographyStyle"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Text组件提供", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-styled-string-h/capi-styled-string-h#oh_arkui_styledstring_destroy",
        children: "OH_ArkUI_StyledString_Destroy"
      }), "，用于销毁属性字符串对象。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本篇示例仅提供核心接口的调用方法，完整的示例工程请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/StyledStringNDK",
        children: "StyledStringNDK"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"manager.h\"\n#include <sstream>\n#include <arkui/native_interface.h>\n#include <arkui/styled_string.h>\n// ···\n#include <native_drawing/drawing_font_collection.h>\n#include <native_drawing/drawing_text_declaration.h>\n\nnamespace NativeNode::Manager {\nconstexpr int32_t NUM_10 = 10;\nconstexpr int32_t NUM_28 = 28;\nconstexpr int32_t NUM_400 = 400;\n// ···\nvoid NodeManager::CreateNativeNode()\n{\n    // ···\n    ArkUI_NativeNodeAPI_1 *nodeApi = reinterpret_cast<ArkUI_NativeNodeAPI_1 *>(\n        OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_NODE, \"ArkUI_NativeNodeAPI_1\"));\n    if (nodeApi == nullptr) {\n        return;\n    }\n    // 创建一个Column容器组件\n    ArkUI_NodeHandle column = nodeApi->createNode(ARKUI_NODE_COLUMN);\n    ArkUI_NumberValue colWidth[] = {{.f32 = 300}};\n    ArkUI_AttributeItem widthItem = {.value = colWidth, .size = 1};\n    nodeApi->setAttribute(column, NODE_WIDTH, &widthItem);\n    // 创建Text组件\n    ArkUI_NodeHandle text = nodeApi->createNode(ARKUI_NODE_TEXT);\n    ArkUI_NumberValue textWidth[] = {{.f32 = 300}};\n    ArkUI_AttributeItem textWidthItem = {.value = textWidth, .size = 1};\n    nodeApi->setAttribute(text, NODE_WIDTH, &textWidthItem);\n    ArkUI_NumberValue textHeight[] = {{.f32 = 100}};\n    ArkUI_AttributeItem textHeightItem = {.value = textHeight, .size = 1};\n    nodeApi->setAttribute(text, NODE_HEIGHT, &textHeightItem);\n    ArkUI_NumberValue borderWidth[] = {{.f32 = 1}};\n    ArkUI_AttributeItem borderWidthItem = {.value = borderWidth, .size = 1};\n    nodeApi->setAttribute(text, NODE_BORDER_WIDTH, &borderWidthItem);\n    \n    // OH_Drawing_开头的API是字体引擎提供的，typographyStyle表示段落样式。\n    OH_Drawing_TypographyStyle *typographyStyle = OH_Drawing_CreateTypographyStyle();\n    OH_Drawing_SetTypographyTextAlign(typographyStyle, OH_Drawing_TextAlign::TEXT_ALIGN_CENTER);\n    OH_Drawing_SetTypographyTextMaxLines(typographyStyle, NUM_10);\n    // 创建 ArkUI_StyledString。\n    ArkUI_StyledString *styledString = OH_ArkUI_StyledString_Create(typographyStyle, OH_Drawing_CreateFontCollection());\n    // 创建文本样式，设置字体和颜色。\n    OH_Drawing_TextStyle *textStyle = OH_Drawing_CreateTextStyle();\n    OH_Drawing_SetTextStyleFontSize(textStyle, NUM_28);\n    OH_Drawing_SetTextStyleColor(textStyle, OH_Drawing_ColorSetArgb(0xFF, 0x70, 0x70, 0x70));\n    // 文本样式的设置顺序push -> add -> pop.\n    OH_ArkUI_StyledString_PushTextStyle(styledString, textStyle);\n    OH_ArkUI_StyledString_AddText(styledString, \"Hello\");\n    OH_ArkUI_StyledString_PopTextStyle(styledString);\n    // 添加占位，此区域内不会绘制文字，可以在此位置挂载Image组件实现图文混排。\n    OH_Drawing_PlaceholderSpan placeHolder{.width = 100, .height = 100};\n    OH_ArkUI_StyledString_AddPlaceholder(styledString, &placeHolder);\n    // 设置不同样式的文字\n    OH_Drawing_TextStyle *worldTextStyle = OH_Drawing_CreateTextStyle();\n    OH_Drawing_SetTextStyleFontSize(worldTextStyle, NUM_28);\n    OH_Drawing_SetTextStyleColor(worldTextStyle, OH_Drawing_ColorSetArgb(0xFF, 0x27, 0x87, 0xD9));\n    OH_ArkUI_StyledString_PushTextStyle(styledString, worldTextStyle);\n    OH_ArkUI_StyledString_AddText(styledString, \"World!\");\n    OH_ArkUI_StyledString_PopTextStyle(styledString);\n    // 依赖StyledString对象创建字体引擎的Typography，此时它已经包含了设置的文本及其样式。\n    OH_Drawing_Typography *typography = OH_ArkUI_StyledString_CreateTypography(styledString);\n    // 字体引擎布局方法，需传入一个宽度，此宽度需与Text组件宽度匹配。\n    // 布局宽度 = Text组件宽度 - (左padding + 右padding)\n    OH_Drawing_TypographyLayout(typography, NUM_400);\n    ArkUI_AttributeItem styledStringItem = {.object = styledString};\n    // 布局完成后，通过NODE_TEXT_CONTENT_WITH_STYLED_STRING设置给Text组件。\n    nodeApi->setAttribute(text, NODE_TEXT_CONTENT_WITH_STYLED_STRING, &styledStringItem);\n\n    // 资源释放，应用侧可以自由决定何时释放。\n    OH_ArkUI_StyledString_Destroy(styledString);\n    // Text作为Column子组件\n    nodeApi->addChild(column, text);\n    // Column作为XComponent子组件\n    OH_NativeXComponent_AttachNativeRootNode(xComponent_, column);\n}\n} // namespace NativeNode::Manager\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(148524)/* ["default"] */.A) + "",
        width: "480",
        height: "480"
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
774117(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
148524(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478067-d08a074609f6290fcc4ca02c287d8a41.png");

},
48514(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
249024(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
236795(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958066-2e4d9a717203dd595d60a001d46c7eeb.png");

},
223245(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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