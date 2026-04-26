"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["283268"], {
596265(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_use_ndk_ndk_build_pop_up_window_ndk_build_pop_up_window_md_c9d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-use-ndk-ndk-build-pop-up-window-ndk-build-pop-up-window-md-c9d.json
var site_docs_arkui_arkts_use_ndk_ndk_build_pop_up_window_ndk_build_pop_up_window_md_c9d_namespaceObject = JSON.parse('{"id":"arkui/arkts-use-ndk/ndk-build-pop-up-window/ndk-build-pop-up-window","title":"构建弹窗","description":"可以通过创建弹窗控制器和创建自定义弹窗的内容对象两种方法显示自定义弹窗，设置其样式和内容。","source":"@site/docs/arkui/arkts-use-ndk/ndk-build-pop-up-window/ndk-build-pop-up-window.md","sourceDirName":"arkui/arkts-use-ndk/ndk-build-pop-up-window","slug":"/arkui/arkts-use-ndk/ndk-build-pop-up-window/","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-build-pop-up-window/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"构建弹窗","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-build-pop-up-window","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"监听输入框事件","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/arkts-build-text-ndk/ndk-textarea-event/"},"next":{"title":"构建自定义组件","permalink":"/harmonyos-docs-site/arkui/arkts-use-ndk/ndk-build-custom-components/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-use-ndk/ndk-build-pop-up-window/ndk-build-pop-up-window.md


const frontMatter = {
	title: '构建弹窗',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-build-pop-up-window',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '构建弹窗';

const assets = {

};



const toc = [{
  "value": "创建和销毁自定义弹窗",
  "id": "创建和销毁自定义弹窗",
  "level": 2
}, {
  "value": "通过创建弹窗控制器显示自定义弹窗",
  "id": "通过创建弹窗控制器显示自定义弹窗",
  "level": 3
}, {
  "value": "通过创建自定义弹窗的内容对象显示自定义弹窗",
  "id": "通过创建自定义弹窗的内容对象显示自定义弹窗",
  "level": 3
}, {
  "value": "设置弹窗样式",
  "id": "设置弹窗样式",
  "level": 2
}, {
  "value": "弹窗的交互",
  "id": "弹窗的交互",
  "level": 2
}, {
  "value": "弹窗的生命周期",
  "id": "弹窗的生命周期",
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
        id: "构建弹窗",
        children: "构建弹窗"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以通过创建弹窗控制器和创建自定义弹窗的内容对象两种方法显示自定义弹窗，设置其样式和内容。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%80%9A%E8%BF%87%E5%88%9B%E5%BB%BA%E5%BC%B9%E7%AA%97%E6%8E%A7%E5%88%B6%E5%99%A8%E6%98%BE%E7%A4%BA%E8%87%AA%E5%AE%9A%E4%B9%89%E5%BC%B9%E7%AA%97",
        children: "通过创建弹窗控制器显示自定义弹窗"
      }), "：在命名为ArkUI_NativeDialogAPI_x （x表示版本）的结构体中，定义了弹窗接口集合，用于实现各种弹窗控制。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%80%9A%E8%BF%87%E5%88%9B%E5%BB%BA%E8%87%AA%E5%AE%9A%E4%B9%89%E5%BC%B9%E7%AA%97%E7%9A%84%E5%86%85%E5%AE%B9%E5%AF%B9%E8%B1%A1%E6%98%BE%E7%A4%BA%E8%87%AA%E5%AE%9A%E4%B9%89%E5%BC%B9%E7%AA%97",
        children: "通过创建自定义弹窗的内容对象显示自定义弹窗"
      }), "：该方式下的弹窗接口在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-dialog-h/capi-native-dialog-h#%E5%87%BD%E6%95%B0",
        children: "native_dialog.h"
      }), "的函数中定义。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(748021)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过创建弹窗控制器来显示自定义弹窗，使用方式可以参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-promptaction/arkts-apis-uicontext-promptaction#opencustomdialogwithcontroller18",
          children: "openCustomDialogWithController"
        }), "接口。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过创建自定义弹窗的内容对象来显示自定义弹窗，使用方式可以参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-promptaction/arkts-apis-uicontext-promptaction#opencustomdialog12",
          children: "openCustomDialog"
        }), "接口。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-interface-h/capi-native-interface-h#oh_arkui_querymoduleinterfacebyname",
          children: "OH_ArkUI_QueryModuleInterfaceByName"
        }), "用于获取指定类型的Native模块接口集合，可以通过其返回ArkUI_NativeDialogHandle类型的数据调用Native模块中的接口。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建和销毁自定义弹窗",
      children: "创建和销毁自定义弹窗"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通过创建弹窗控制器显示自定义弹窗",
      children: "通过创建弹窗控制器显示自定义弹窗"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建弹窗控制器："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialog8h/capi-arkui-nativemodule-arkui-nativedialog8h",
            children: "ArkUI_NativeDialogHandle"
          }), "表示指向弹窗控制器的指针，可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-1/capi-arkui-nativemodule-arkui-nativedialogapi-1",
            children: "ArkUI_NativeDialogAPI_x"
          }), "的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-1/capi-arkui-nativemodule-arkui-nativedialogapi-1#create",
            children: "create"
          }), "接口创建一个弹窗控制器。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该方法返回ArkUI_NativeDialogHandle类型的数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ArkUI_NativeDialogHandle g_dialogController = nullptr;\n// ···\n    ArkUI_NativeDialogAPI_1 *dialogAPI = reinterpret_cast<ArkUI_NativeDialogAPI_1 *>(\n        OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_DIALOG, \"ArkUI_NativeDialogAPI_1\"));\n    if (!g_dialogController) {\n        g_dialogController = dialogAPI->create();\n    }\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当不再需要弹窗操作时，需要主动调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-1/capi-arkui-nativemodule-arkui-nativedialogapi-1#dispose",
            children: "dispose"
          }), "接口销毁弹窗控制器对象。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ArkUI_NativeDialogAPI_1 *dialogAPI = reinterpret_cast<ArkUI_NativeDialogAPI_1 *>(\n    OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_DIALOG, \"ArkUI_NativeDialogAPI_1\"));\ndialogAPI->dispose(g_dialogController);\ng_dialogController = nullptr;\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通过创建自定义弹窗的内容对象显示自定义弹窗",
      children: "通过创建自定义弹窗的内容对象显示自定义弹窗"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建弹窗的内容对象："
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-customdialogoptions/capi-arkui-nativemodule-arkui-customdialogoptions",
            children: "ArkUI_CustomDialogOptions"
          }), "自定义弹窗的内容对象，可以通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-dialog-h/capi-native-dialog-h#oh_arkui_customdialog_createoptions",
            children: "OH_ArkUI_CustomDialog_CreateOptions"
          }), "接口创建一个自定义弹窗的内容对象。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "该方法返回ArkUI_CustomDialogOptions类型的指针。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ArkUI_CustomDialogOptions* g_dialogOptions = nullptr;\n// ···\n    auto textNode = std::make_shared<NativeModule::ArkUITextNode>();\n    if (!g_dialogOptions) {\n        g_dialogOptions = OH_ArkUI_CustomDialog_CreateOptions(textNode->GetHandle());\n    }\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(512508)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ArkUITextNode的声明方式可以查看", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-use-ndk/ndk-access-the-arkts-page#%E7%A4%BA%E4%BE%8B",
            children: "ArkUINode.h"
          }), "文件中的实现文本组件。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当不再需要弹窗操作时，需要主动调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-dialog-h/capi-native-dialog-h#oh_arkui_customdialog_disposeoptions",
            children: "OH_ArkUI_CustomDialog_DisposeOptions"
          }), "接口销毁弹窗控制器对象。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OH_ArkUI_CustomDialog_DisposeOptions(g_dialogOptions);\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置弹窗样式",
      children: "设置弹窗样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以设置弹窗对齐方式、偏移量，弹窗背板圆角弧度、背景色、蒙层颜色以及区域等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建弹窗内容节点。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(335312)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["此示例的资源不在src > main > resource目录下，从DevEco Studio 6.0.0 Beta2开始，新建工程或者模块时，默认创建的模块不会对非resources目录下的资源进行打包，需使能相关开关：模块的build-profile.json5中buildOptions > resOptions > copyCodeResource > enable设置为true，详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile#table1476161719356",
            children: "resOptions"
          }), "中相关介绍。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ArkUI_NodeHandle CreateDialogContent()\n{\n    ArkUI_NativeNodeAPI_1 *nodeAPI = reinterpret_cast<ArkUI_NativeNodeAPI_1 *>(\n        OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_NODE, \"ArkUI_NativeNodeAPI_1\"));\n    ArkUI_NodeHandle text = nodeAPI->createNode(ARKUI_NODE_TEXT);\n    ArkUI_NumberValue textWidthValue[] = {{.f32 = 300}};\n    ArkUI_AttributeItem textWidthItem = {.value = textWidthValue,\n                                         .size = sizeof(textWidthValue) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(text, NODE_WIDTH, &textWidthItem);\n    ArkUI_NumberValue textHeightValue[] = {{.f32 = 300}};\n    ArkUI_AttributeItem textHeightItem = {.value = textHeightValue,\n                                          .size = sizeof(textWidthValue) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(text, NODE_HEIGHT, &textHeightItem);\n    ArkUI_NodeHandle span = nodeAPI->createNode(ARKUI_NODE_SPAN);\n    ArkUI_AttributeItem spanItem = {.string = \"This is a dialog box\"};\n    nodeAPI->setAttribute(span, NODE_SPAN_CONTENT, &spanItem);\n    ArkUI_NodeHandle imageSpan = nodeAPI->createNode(ARKUI_NODE_IMAGE_SPAN);\n    // 图片src/main/ets/pages/common/sky.jpg需要替换为开发者所需的资源文件\n    ArkUI_AttributeItem imageSpanItem = {.string = \"/pages/common/sky.jpg\"};\n    nodeAPI->setAttribute(imageSpan, NODE_IMAGE_SPAN_SRC, &imageSpanItem);\n    ArkUI_NumberValue imageSpanWidthValue[] = {{.f32 = 300}};\n    ArkUI_AttributeItem imageSpanWidthItem = {.value = imageSpanWidthValue,\n                                              .size = sizeof(textWidthValue) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(imageSpan, NODE_WIDTH, &imageSpanWidthItem);\n    ArkUI_NumberValue imageSpanHeightValue[] = {{.f32 = 200}};\n    ArkUI_AttributeItem imageSpanHeightItem = {.value = imageSpanHeightValue,\n                                               .size = sizeof(textWidthValue) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(imageSpan, NODE_HEIGHT, &imageSpanHeightItem);\n    nodeAPI->addChild(text, span);\n    nodeAPI->addChild(text, imageSpan);\n    return text;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["以下介绍两种控制弹窗样式的方式，弹窗接口请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-c/arkui-headerfile/capi-native-dialog-h/capi-native-dialog-h",
            children: "native_dialog.h"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通过controller控制弹窗样式。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "void ShowDialog()\n{\n    ArkUI_NativeDialogAPI_1 *dialogAPI = reinterpret_cast<ArkUI_NativeDialogAPI_1 *>(\n        OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_DIALOG, \"ArkUI_NativeDialogAPI_1\"));\n    if (!g_dialogController) {\n        g_dialogController = dialogAPI->create();\n    }\n    auto contentNode = CreateDialogContent();\n    dialogAPI->setContent(g_dialogController, contentNode);\n    dialogAPI->setContentAlignment(g_dialogController, static_cast<int32_t>(ARKUI_ALIGNMENT_BOTTOM), 0, 0);\n    dialogAPI->setBackgroundColor(g_dialogController, 0xffffffff);\n    dialogAPI->setCornerRadius(g_dialogController, 6.0f, 6.0f, 6.0f, 6.0f);\n    dialogAPI->setModalMode(g_dialogController, false);\n    dialogAPI->setAutoCancel(g_dialogController, true);\n    dialogAPI->show(g_dialogController, false);\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通过dialogOptions控制弹窗样式。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "int32_t g_id = 0;\nvoid OpenDialogCallBack(int32_t dialogId)\n{\n    g_id = dialogId;\n}\n\nvoid OpenCustomDialog()\n{\n    auto contentNode = CreateDialogContent();\n    if (!g_dialogOptions) {\n        g_dialogOptions = OH_ArkUI_CustomDialog_CreateOptions(contentNode);\n    }\n    OH_ArkUI_CustomDialog_SetAlignment(g_dialogOptions, static_cast<int32_t>(ARKUI_ALIGNMENT_BOTTOM), 0, 0);\n    OH_ArkUI_CustomDialog_SetBackgroundColor(g_dialogOptions, 0xffffffff);\n    OH_ArkUI_CustomDialog_SetCornerRadius(g_dialogOptions, 6.0f, 6.0f, 6.0f, 6.0f);\n    OH_ArkUI_CustomDialog_SetModalMode(g_dialogOptions, false);\n    OH_ArkUI_CustomDialog_SetAutoCancel(g_dialogOptions, true);\n    OH_ArkUI_CustomDialog_SetBorderStyle(g_dialogOptions, ARKUI_BORDER_STYLE_SOLID,\n                                         ARKUI_BORDER_STYLE_SOLID, ARKUI_BORDER_STYLE_SOLID, ARKUI_BORDER_STYLE_SOLID);\n    OH_ArkUI_CustomDialog_OpenDialog(g_dialogOptions, OpenDialogCallBack);\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "弹窗关闭方式。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通过controller关闭弹窗。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "void CloseDialog()\n{\n    ArkUI_NativeDialogAPI_1 *dialogAPI = reinterpret_cast<ArkUI_NativeDialogAPI_1 *>(\n        OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_DIALOG, \"ArkUI_NativeDialogAPI_1\"));\n    dialogAPI->close(g_dialogController);\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通过dialogOptions关闭弹窗。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "void CloseCustomDialog()\n{\n    OH_ArkUI_CustomDialog_CloseDialog(g_id);\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "弹窗的交互",
      children: "弹窗的交互"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可创建交互页面，打开或关闭弹窗。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["创建可交互界面，点击Button后弹窗。其中获取与使用ArkUI_NodeContentHandle类型节点可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-use-ndk/ndk-access-the-arkts-page",
            children: "接入ArkTS页面"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "constexpr int32_t BUTTON_CLICK_ID = 1;\nArkUI_NodeHandle g_buttonNode = nullptr;\n\nvoid MainViewMethod(ArkUI_NodeContentHandle handle)\n{\n    ArkUI_NativeNodeAPI_1 *nodeAPI = reinterpret_cast<ArkUI_NativeNodeAPI_1 *>(\n        OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_NODE, \"ArkUI_NativeNodeAPI_1\"));\n    ArkUI_NodeHandle column = nodeAPI->createNode(ARKUI_NODE_COLUMN);\n    ArkUI_NumberValue widthValue[] = {{.f32 = 300}};\n    ArkUI_AttributeItem widthItem = {.value = widthValue, .size = sizeof(widthValue) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(column, NODE_WIDTH, &widthItem);\n    ArkUI_NumberValue heightValue[] = {{.f32 = 300}};\n    ArkUI_AttributeItem heightItem = {.value = heightValue, .size = sizeof(heightValue) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(column, NODE_HEIGHT, &heightItem);\n    \n    g_buttonNode = nodeAPI->createNode(ARKUI_NODE_BUTTON);\n    ArkUI_NumberValue buttonWidthValue[] = {{.f32 = 200}};\n    ArkUI_AttributeItem buttonWidthItem = {.value = buttonWidthValue,\n                                           .size = sizeof(buttonWidthValue) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(g_buttonNode, NODE_WIDTH, &buttonWidthItem);\n    ArkUI_NumberValue buttonHeightValue[] = {{.f32 = 50}};\n    ArkUI_AttributeItem buttonHeightItem = {.value = buttonHeightValue,\n                                            .size = sizeof(buttonHeightValue) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(g_buttonNode, NODE_HEIGHT, &buttonHeightItem);\n    ArkUI_AttributeItem labelItem = {.string = \"Click Dialog Box\"};\n    nodeAPI->setAttribute(g_buttonNode, NODE_BUTTON_LABEL, &labelItem);\n    ArkUI_NumberValue buttonTypeValue[] = {{.i32 = static_cast<int32_t>(ARKUI_BUTTON_TYPE_NORMAL)}};\n    ArkUI_AttributeItem buttonTypeItem = {.value = buttonTypeValue,\n                                          .size = sizeof(buttonTypeValue) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(g_buttonNode, NODE_BUTTON_TYPE, &buttonTypeItem);\n    nodeAPI->registerNodeEvent(g_buttonNode, NODE_ON_CLICK, BUTTON_CLICK_ID, nullptr);\n    nodeAPI->addNodeEventReceiver(g_buttonNode, OnButtonClicked);\n    nodeAPI->addChild(column, g_buttonNode);\n    OH_ArkUI_NodeContent_AddNode(handle, column);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建Button事件的回调函数，当Button被点击时触发弹窗显示或关闭。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "触发controller弹窗。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "bool g_isShown = false;\n\nvoid OnButtonClicked(ArkUI_NodeEvent *event)\n{\n    if (!event || !g_buttonNode) {\n        return;\n    }\n    auto eventId = OH_ArkUI_NodeEvent_GetTargetId(event);\n    if (eventId == BUTTON_CLICK_ID) {\n        ArkUI_NativeNodeAPI_1 *nodeAPI = reinterpret_cast<ArkUI_NativeNodeAPI_1 *>(\n            OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_NODE, \"ArkUI_NativeNodeAPI_1\"));\n        if (g_isShown) {\n            g_isShown = false;\n            ArkUI_AttributeItem labelItem = {.string = \"Show Dialog Box\"};\n            nodeAPI->setAttribute(g_buttonNode, NODE_BUTTON_LABEL, &labelItem);\n            CloseDialog();\n        } else {\n            g_isShown = true;\n            ArkUI_AttributeItem labelItem = {.string = \"Close Dialog Box\"};\n            nodeAPI->setAttribute(g_buttonNode, NODE_BUTTON_LABEL, &labelItem);\n            ShowDialog();\n        }\n    }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "触发dialogOptions弹窗。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "void OnButtonClicked(ArkUI_NodeEvent *event)\n{\n    if (!event || !g_buttonNode) {\n        return;\n    }\n    auto eventId = OH_ArkUI_NodeEvent_GetTargetId(event);\n    if (eventId == BUTTON_CLICK_ID) {\n        ArkUI_NativeNodeAPI_1 *nodeAPI = reinterpret_cast<ArkUI_NativeNodeAPI_1 *>(\n            OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_NODE, \"ArkUI_NativeNodeAPI_1\"));\n        if (g_isShown) {\n            g_isShown = false;\n            ArkUI_AttributeItem labelItem = {.string = \"Show Dialog Box\"};\n            nodeAPI->setAttribute(g_buttonNode, NODE_BUTTON_LABEL, &labelItem);\n            CloseCustomDialog();\n        } else {\n            g_isShown = true;\n            ArkUI_AttributeItem labelItem = {.string = \"Close Dialog Box\"};\n            nodeAPI->setAttribute(g_buttonNode, NODE_BUTTON_LABEL, &labelItem);\n            OpenCustomDialog();\n        }\n    }\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(925675)/* ["default"] */.A) + "",
        width: "337",
        height: "435"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "弹窗的生命周期",
      children: "弹窗的生命周期"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 19开始，弹窗显示和关闭前后，存在四个生命周期：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-3/capi-arkui-nativemodule-arkui-nativedialogapi-3#registeronwillappear",
        children: "registerOnWillAppear"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-3/capi-arkui-nativemodule-arkui-nativedialogapi-3#registerondidappear",
        children: "registerOnDidAppear"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-3/capi-arkui-nativemodule-arkui-nativedialogapi-3#registeronwilldisappear",
        children: "registerOnWillDisappear"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-c/arkui-struct/capi-arkui-nativemodule-arkui-nativedialogapi-3/capi-arkui-nativemodule-arkui-nativedialogapi-3#registerondiddisappear",
        children: "registerOnDidDisappear"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这些生命周期方法需要在调用show方法之前调用，生命周期的时序如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "registerOnWillAppear -> 弹窗显示动画开始 -> 弹窗显示动画结束 -> registerOnDidAppear -> 弹窗显示完成 ->registerOnWillDisappear -> 弹窗关闭动画开始 -> 弹窗关闭动画结束 -> registerOnDidDisappear -> 弹窗关闭完成。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建一个弹窗，弹窗显示和关闭时会触发生命周期的回调函数。其中 ArkUI_NodeContentHandle 类型节点的获取与使用可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-use-ndk/ndk-access-the-arkts-page",
        children: "接入ArkTS页面"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(325567)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此示例的资源不在src > main > resource目录下，从DevEco Studio 6.0.0 Beta2开始，新建工程或者模块时，默认创建的模块不会对非resources目录下的资源进行打包，需使能相关开关：模块的build-profile.json5中buildOptions > resOptions > copyCodeResource > enable设置为true，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile#table1476161719356",
        children: "resOptions"
      }), "中相关介绍。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArkUI_NodeHandle CreateDialogContent()\n{\n    ArkUI_NativeNodeAPI_1 *nodeAPI = reinterpret_cast<ArkUI_NativeNodeAPI_1 *>(\n        OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_NODE, \"ArkUI_NativeNodeAPI_1\"));\n    ArkUI_NodeHandle text = nodeAPI->createNode(ARKUI_NODE_TEXT);\n    ArkUI_NumberValue textWidthValue[] = {{.f32 = 300}};\n    ArkUI_AttributeItem textWidthItem = {.value = textWidthValue,\n                                         .size = sizeof(textWidthValue) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(text, NODE_WIDTH, &textWidthItem);\n    ArkUI_NumberValue textHeightValue[] = {{.f32 = 300}};\n    ArkUI_AttributeItem textHeightItem = {.value = textHeightValue,\n                                          .size = sizeof(textWidthValue) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(text, NODE_HEIGHT, &textHeightItem);\n    ArkUI_NodeHandle span = nodeAPI->createNode(ARKUI_NODE_SPAN);\n    ArkUI_AttributeItem spanItem = {.string = \"This is a dialog box\"};\n    nodeAPI->setAttribute(span, NODE_SPAN_CONTENT, &spanItem);\n    ArkUI_NodeHandle imageSpan = nodeAPI->createNode(ARKUI_NODE_IMAGE_SPAN);\n    // 图片src/main/ets/pages/common/sky.jpg需要替换为开发者所需的资源文件\n    ArkUI_AttributeItem imageSpanItem = {.string = \"/pages/common/sky.jpg\"};\n    nodeAPI->setAttribute(imageSpan, NODE_IMAGE_SPAN_SRC, &imageSpanItem);\n    ArkUI_NumberValue imageSpanWidthValue[] = {{.f32 = 300}};\n    ArkUI_AttributeItem imageSpanWidthItem = {.value = imageSpanWidthValue,\n                                              .size = sizeof(textWidthValue) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(imageSpan, NODE_WIDTH, &imageSpanWidthItem);\n    ArkUI_NumberValue imageSpanHeightValue[] = {{.f32 = 200}};\n    ArkUI_AttributeItem imageSpanHeightItem = {.value = imageSpanHeightValue,\n                                               .size = sizeof(textWidthValue) / sizeof(ArkUI_NumberValue)};\n    nodeAPI->setAttribute(imageSpan, NODE_HEIGHT, &imageSpanHeightItem);\n    nodeAPI->addChild(text, span);\n    nodeAPI->addChild(text, imageSpan);\n    return text;\n}\n\nvoid OnWillAppearCallBack(void* userdata)\n{\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"CustomDialogContentTest\", \"OnWillAppearCallBack\");\n}\n\nvoid OnDidAppearCallBack(void* userdata)\n{\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"CustomDialogContentTest\", \"OnDidAppearCallBack\");\n}\n\nvoid OnWillDisappearCallBack(void* userdata)\n{\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"CustomDialogContentTest\", \"OnWillDisappearCallBack\");\n}\n\nvoid OnDidDisappearCallBack(void* userdata)\n{\n    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, \"CustomDialogContentTest\", \"OnDidDisappearCallBack\");\n}\n\nvoid ShowDialog()\n{\n    ArkUI_NativeDialogAPI_3 *dialogAPI = reinterpret_cast<ArkUI_NativeDialogAPI_3 *>(\n        OH_ArkUI_QueryModuleInterfaceByName(ARKUI_NATIVE_DIALOG, \"ArkUI_NativeDialogAPI_3\"));\n    if (!g_dialogController) {\n        g_dialogController = dialogAPI->nativeDialogAPI1.create();\n    }\n    auto contentNode = CreateDialogContent();\n    dialogAPI->nativeDialogAPI1.setContent(g_dialogController, contentNode);\n    dialogAPI->nativeDialogAPI1.setAutoCancel(g_dialogController, true);\n    dialogAPI->registerOnWillAppear(g_dialogController, nullptr, OnWillAppearCallBack);\n    dialogAPI->registerOnDidAppear(g_dialogController, nullptr, OnDidAppearCallBack);\n    dialogAPI->registerOnWillDisappear(g_dialogController, nullptr, OnWillDisappearCallBack);\n    dialogAPI->registerOnDidDisappear(g_dialogController, nullptr, OnDidDisappearCallBack);\n    dialogAPI->nativeDialogAPI1.show(g_dialogController, false);\n}\n"
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
512508(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
748021(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
325567(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
925675(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438113-2f2c76c515ea768ab5b5b83e1f0d064d.gif");

},
335312(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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