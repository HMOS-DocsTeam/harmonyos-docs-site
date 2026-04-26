"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["135589"], {
887140(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_text_arkts_common_components_richeditor_arkts_common_components_richeditor_md_85b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-text-arkts-common-components-richeditor-arkts-common-components-richeditor-md-85b.json
var site_docs_arkui_arkts_ui_development_arkts_use_text_arkts_common_components_richeditor_arkts_common_components_richeditor_md_85b_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-text/arkts-common-components-richeditor/arkts-common-components-richeditor","title":"富文本编辑（RichEditor）","description":"RichEditor是支持图文混排和文本交互式编辑的组件，通常用于响应用户对图文混合内容的输入操作，例如可以输入图文的评论区。具体用法参考RichEditor组件的API文档。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-richeditor/arkts-common-components-richeditor.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-text/arkts-common-components-richeditor","slug":"/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-richeditor/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-richeditor/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"富文本编辑（RichEditor）","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-richeditor","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"文本输入 (TextInput/TextArea/Search)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-text-input/"},"next":{"title":"图标小符号 (SymbolGlyph/SymbolSpan)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-symbol/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-richeditor/arkts-common-components-richeditor.md


const frontMatter = {
	title: '富文本编辑（RichEditor）',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-richeditor',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '富文本编辑（RichEditor）';

const assets = {

};



const toc = [{
  "value": "组件构成",
  "id": "组件构成",
  "level": 2
}, {
  "value": "创建RichEditor组件",
  "id": "创建richeditor组件",
  "level": 2
}, {
  "value": "创建基于属性字符串进行内容管理的RichEditor组件",
  "id": "创建基于属性字符串进行内容管理的richeditor组件",
  "level": 3
}, {
  "value": "创建基于Span进行内容管理的RichEditor组件",
  "id": "创建基于span进行内容管理的richeditor组件",
  "level": 3
}, {
  "value": "添加内容",
  "id": "添加内容",
  "level": 2
}, {
  "value": "添加文本内容",
  "id": "添加文本内容",
  "level": 3
}, {
  "value": "添加图片内容",
  "id": "添加图片内容",
  "level": 3
}, {
  "value": "添加@Builder装饰器修饰的内容",
  "id": "添加builder装饰器修饰的内容",
  "level": 3
}, {
  "value": "添加SymbolSpan内容",
  "id": "添加symbolspan内容",
  "level": 3
}, {
  "value": "管理内容",
  "id": "管理内容",
  "level": 2
}, {
  "value": "获取组件内图文信息",
  "id": "获取组件内图文信息",
  "level": 3
}, {
  "value": "设置无输入时的提示文本",
  "id": "设置无输入时的提示文本",
  "level": 3
}, {
  "value": "设置最大长度",
  "id": "设置最大长度",
  "level": 3
}, {
  "value": "事件回调",
  "id": "事件回调",
  "level": 2
}, {
  "value": "添加图文变化前和图文变化后可触发的回调",
  "id": "添加图文变化前和图文变化后可触发的回调",
  "level": 3
}, {
  "value": "添加输入法输入内容前和完成输入后可触发的回调",
  "id": "添加输入法输入内容前和完成输入后可触发的回调",
  "level": 3
}, {
  "value": "添加完成粘贴前可触发的回调",
  "id": "添加完成粘贴前可触发的回调",
  "level": 3
}, {
  "value": "添加完成剪切前可触发的回调",
  "id": "添加完成剪切前可触发的回调",
  "level": 3
}, {
  "value": "添加完成复制前可触发的回调",
  "id": "添加完成复制前可触发的回调",
  "level": 3
}, {
  "value": "组件交互",
  "id": "组件交互",
  "level": 2
}, {
  "value": "设置输入框光标和手柄的颜色",
  "id": "设置输入框光标和手柄的颜色",
  "level": 3
}, {
  "value": "添加组件内容选择区域或编辑状态下光标位置改变时可触发的回调",
  "id": "添加组件内容选择区域或编辑状态下光标位置改变时可触发的回调",
  "level": 3
}, {
  "value": "设置内容选中区范围",
  "id": "设置内容选中区范围",
  "level": 3
}, {
  "value": "菜单配置",
  "id": "菜单配置",
  "level": 2
}, {
  "value": "管理选中菜单项",
  "id": "管理选中菜单项",
  "level": 3
}, {
  "value": "屏蔽系统服务类菜单项",
  "id": "屏蔽系统服务类菜单项",
  "level": 3
}, {
  "value": "设置自定义选择菜单",
  "id": "设置自定义选择菜单",
  "level": 3
}, {
  "value": "布局配置",
  "id": "布局配置",
  "level": 2
}, {
  "value": "设置最大行数",
  "id": "设置最大行数",
  "level": 3
}, {
  "value": "样式设置",
  "id": "样式设置",
  "level": 2
}, {
  "value": "设置用户预设的文本样式",
  "id": "设置用户预设的文本样式",
  "level": 3
}, {
  "value": "设置装饰线",
  "id": "设置装饰线",
  "level": 3
}, {
  "value": "设置垂直居中",
  "id": "设置垂直居中",
  "level": 3
}, {
  "value": "设置中西文自动间距",
  "id": "设置中西文自动间距",
  "level": 3
}, {
  "value": "示例代码",
  "id": "示例代码",
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
        id: "富文本编辑richeditor",
        children: "富文本编辑（RichEditor）"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["RichEditor是支持图文混排和文本交互式编辑的组件，通常用于响应用户对图文混合内容的输入操作，例如可以输入图文的评论区。具体用法参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor",
        children: "RichEditor"
      }), "组件的API文档。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于仅需图文展示而不需要编辑的场景，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
        children: "Text"
      }), "组件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于需要大量展示Html格式内容的场景，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richtext/ts-basic-components-richtext",
        children: "RichText"
      }), "组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "组件构成",
      children: "组件构成"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下图展示了组件元素的构成。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(211581)/* ["default"] */.A) + "",
        width: "1695",
        height: "401"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件的元素构成包括："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "元素"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "内容区"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内容可显示的区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "光标"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于指明当前输入位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "手柄"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分为左手柄和右手柄，可分别进行拖动，用于调整文本选择区域范围。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "菜单"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中内容后弹出，其中包含复制、粘贴等内容操作按钮。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建richeditor组件",
      children: "创建RichEditor组件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%88%9B%E5%BB%BA%E5%9F%BA%E4%BA%8E%E5%B1%9E%E6%80%A7%E5%AD%97%E7%AC%A6%E4%B8%B2%E8%BF%9B%E8%A1%8C%E5%86%85%E5%AE%B9%E7%AE%A1%E7%90%86%E7%9A%84richeditor%E7%BB%84%E4%BB%B6",
        children: "创建基于属性字符串进行内容管理的RichEditor组件"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%88%9B%E5%BB%BA%E5%9F%BA%E4%BA%8Espan%E8%BF%9B%E8%A1%8C%E5%86%85%E5%AE%B9%E7%AE%A1%E7%90%86%E7%9A%84richeditor%E7%BB%84%E4%BB%B6",
        children: "创建基于Span进行内容管理的RichEditor组件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建基于属性字符串进行内容管理的richeditor组件",
      children: "创建基于属性字符串进行内容管理的RichEditor组件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用RichEditor(options: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#richeditorstyledstringoptions12",
        children: "RichEditorStyledStringOptions"
      }), ")接口可以创建基于属性字符串（", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-text/arkts-styled-string",
        children: "StyledString/MutableStyledString"
      }), "）进行内容管理的RichEditor组件。这种构建方式开发者可以通过在应用侧持有属性字符串对象来管理数据，通过修改属性字符串对象的内容、样式，再传递给组件，即可实现对富文本组件内容的更新。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相比于使用controller提供的接口进行内容样式更新，使用起来更加灵活便捷。同时属性字符串对象可以设置到各类支持属性字符串的文本组件中，可以快速实现内容的迁移。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct CreateRichEditor {\n  // ...\n  fontStyle: TextStyle = new TextStyle({\n    fontColor: Color.Pink\n  })\n  // 定义字体样式对象\n  mutableStyledString: MutableStyledString =\n    // 请将$r('app.string.CreateRichEditor_Text_1')替换为实际资源文件，在本示例中该资源文件的value值为\"创建使用属性字符串构建的RichEditor组件。\"\n    new MutableStyledString(this.getUIContext().getHostContext()!.resourceManager.getStringSync($r('app.string.CreateRichEditor_Text_1').id),\n    [{\n      start: 0,\n      length: 5,\n      styledKey: StyledStringKey.FONT,\n      styledValue: this.fontStyle\n    }])\n  // 创建属性字符串\n\n  controller: RichEditorStyledStringController = new RichEditorStyledStringController();\n  options: RichEditorStyledStringOptions = { controller: this.controller };\n  build() {\n    NavDestination() {\n      Column({ space: 12 }) {\n        Column({ space: 3 }) {\n          // ...\n          RichEditor(this.options)\n            .onReady(() => {\n              this.controller.setStyledString(this.mutableStyledString);\n            })\n        }\n        // ...\n      }\n      .width('100%')\n      .height('100%')\n      .padding({ left: 12, right: 12 })\n    }\n    .backgroundColor('#f1f2f3')\n    // 请将$r('app.string.Create_RichEditor_Component_title')替换为实际资源文件，在本示例中该资源文件的value值为\"创建RichEditor组件\"\n    .title($r('app.string.Create_RichEditor_Component_title'))\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(343622)/* ["default"] */.A) + "",
        width: "431",
        height: "131"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "创建基于span进行内容管理的richeditor组件",
      children: "创建基于Span进行内容管理的RichEditor组件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用RichEditor(value: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#richeditoroptions",
        children: "RichEditorOptions"
      }), ")接口可以创建基于Span进行内容管理的RichEditor组件，通常用于复杂内容场景，开发者通过RichEditorController提供的接口实现内容、样式的管理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct CreateRichEditor {\n  controllerNoStyledString: RichEditorController = new RichEditorController();\n  optionsNoStyledString: RichEditorOptions = { controller: this.controllerNoStyledString };\n  // ...\n  build() {\n    NavDestination() {\n      Column({ space: 12 }) {\n        // ...\n        Column({ space: 3 }) {\n          // ...\n          RichEditor(this.optionsNoStyledString)\n            .onReady(() => {\n              this.controllerNoStyledString.addTextSpan(\n                /**\n                 * 请将$r('app.string.CreateRichEditor_Text_2')替换为实际资源文件，\n                 * 在本示例中该资源文件的value值为\"创建不使用属性字符串构建的RichEditor组件。\"\n                 */\n                $r('app.string.CreateRichEditor_Text_2'), {\n                style: {\n                  fontColor: Color.Black,\n                  fontSize: 15\n                }\n              })\n            })\n        }\n        // ...\n      }\n      .width('100%')\n      .height('100%')\n      .padding({ left: 12, right: 12 })\n    }\n    .backgroundColor('#f1f2f3')\n    // 请将$r('app.string.Create_RichEditor_Component_title')替换为实际资源文件，在本示例中该资源文件的value值为\"创建RichEditor组件\"\n    .title($r('app.string.Create_RichEditor_Component_title'))\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(552575)/* ["default"] */.A) + "",
        width: "431",
        height: "103"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加内容",
      children: "添加内容"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "富文本组件可以通过不同的接口添加多种形式的内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加文本内容",
      children: "添加文本内容"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除了直接在组件内输入内容，也可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#addtextspan",
        children: "addTextSpan"
      }), "添加文本内容。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此接口可以实现文本样式多样化，例如创建混合样式文本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果组件是获焦状态并且光标在闪烁，那么通过addTextSpan添加文本内容后，光标位置会更新，在新添加文本内容的右侧闪烁。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nexport struct AddTextContent {\n  controller: RichEditorController = new RichEditorController();\n  options: RichEditorOptions = { controller: this.controller };\n\n  build() {\n    // ...\n            RichEditor(this.options)\n              .onReady(() => {\n                // 请将$r('app.string.AddTextContent_Text_1')替换为实际资源文件，在本示例中该资源文件的value值为\"点击按钮在此处添加text。\"\n                this.controller.addTextSpan(resource.resourceToString($r('app.string.AddTextContent_Text_1')), {\n                  style: {\n                    fontColor: Color.Black,\n                    fontSize: 15\n                  }\n                })\n              })\n              .border({ width: 1, color: Color.Gray })\n              .constraintSize({\n                maxHeight: 100\n              })\n              .width(300)\n              .margin(10)\n            // 请将$r('app.string.AddTextContent_Button_1')替换为实际资源文件，在本示例中该资源文件的value值为\"addTextSpan\"\n            Button($r('app.string.AddTextContent_Button_1'), {\n              buttonStyle: ButtonStyleMode.NORMAL\n            })\n              .height(30)\n              .fontSize(13)\n              .onClick(() => {\n                // 请将$r('app.string.AddTextContent_Text_2')替换为实际资源文件，在本示例中该资源文件的value值为\"新添加一段文字。\"\n                this.controller.addTextSpan(resource.resourceToString($r('app.string.AddTextContent_Text_2')))\n              })\n            // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(317345)/* ["default"] */.A) + "",
        width: "462",
        height: "290"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加图片内容",
      children: "添加图片内容"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#addimagespan",
        children: "addImageSpan"
      }), "添加图片内容。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此接口可用于内容丰富与可视化展示，例如在新闻中加入图片，在文档中加入数据可视化图形等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果组件是获焦状态并且光标在闪烁，那么通过addImageSpan添加图片内容后，光标位置会更新，在新添加图片内容的右侧闪烁。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "controller: RichEditorController = new RichEditorController();\noptions: RichEditorOptions = { controller: this.controller };\n// ...\n         RichEditor(this.options)\n            .onReady(() => {\n              // 请将$r('app.string.AddImageContent_Text_1')替换为实际资源文件，在本示例中该资源文件的value值为\"点击按钮在此处添加image。\"\n              this.controller.addTextSpan(resource.resourceToString($r('app.string.AddImageContent_Text_1')), {\n                style: {\n                  fontColor: Color.Black,\n                  fontSize: 15\n                }\n              })\n            })\n            .width(300)\n            .height(100)\n          // 请将$r('app.string.AddImageContent_Button_1')替换为实际资源文件，在本示例中该资源文件的value值为\"addImageSpan\"\n          Button($r('app.string.AddImageContent_Button_1'), {\n            buttonStyle: ButtonStyleMode.NORMAL\n          })\n            .height(30)\n            .fontSize(13)\n            .onClick(() => {\n              // 请将$r('app.media.xxx')替换为实际资源文件\n              this.controller.addImageSpan($r('app.media.startIcon'), {\n                imageStyle: {\n                  size: ['57px', '57px']\n                }\n              })\n            })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(159465)/* ["default"] */.A) + "",
        width: "398",
        height: "265"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加builder装饰器修饰的内容",
      children: "添加@Builder装饰器修饰的内容"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#addbuilderspan11",
        children: "addBuilderSpan"
      }), "添加@Builder装饰器修饰的内容。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此接口可用于自定义复杂组件的嵌入，例如在组件内加入自定义图表。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该接口内可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#richeditorbuilderspanoptions11",
        children: "RichEditorBuilderSpanOptions"
      }), "设置在组件中添加builder的位置，省略或者为异常值时，则添加builder到所有内容的最后位置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "controller: RichEditorController = new RichEditorController();\noptions: RichEditorOptions = { controller: this.controller };\nprivate myBuilder: CustomBuilder = undefined;\n\n@Builder\nTextBuilder() {\n  Row() {\n    Image($r('app.media.startIcon')).width(50).height(50).margin(16)\n    Column() {\n      // 请将$r('app.string.AddBuilderDecoratorContent_Text_1')替换为实际资源文件，在本示例中该资源文件的value值为\"文本文档.txt\"\n      Text($r('app.string.AddBuilderDecoratorContent_Text_1')).fontWeight(FontWeight.Bold).fontSize(16)\n      // 请将$r('app.string.AddBuilderDecoratorContent_Text_2')替换为实际资源文件，在本示例中该资源文件的value值为\"123.45KB\"\n      Text($r('app.string.AddBuilderDecoratorContent_Text_2')).fontColor('#8a8a8a').fontSize(12)\n    }.alignItems(HorizontalAlign.Start)\n  }.backgroundColor('#f4f4f4')\n  .borderRadius('20')\n  .width(220)\n}\nbuild() {\n  // ...\n    Column({ space: 12 }) {\n      RichEditor(this.options)\n        .onReady(() => {\n          this.controller.addTextSpan(\n            /*\n             * 请将$r('app.string.AddBuilderDecoratorContent_Text_3')替换为实际资源文件，\n             * 在本示例中该资源文件的value值为\"点击按钮在此处添加builderspan。\"\n             */\n            $r('app.string.AddBuilderDecoratorContent_Text_3'), {\n            style: {\n              fontColor: Color.Black,\n              fontSize: 15\n            }\n          })\n        })\n      Row() {\n        /*\n         * 请将$r('app.string.AddBuilderDecoratorContent_Button_1')替换为实际资源文件，\n         * 在本示例中该资源文件的value值为\"addBuilderSpan\"\n         */\n        Button($r('app.string.AddBuilderDecoratorContent_Button_1'), {\n          buttonStyle: ButtonStyleMode.NORMAL\n        })\n          .height(30)\n          .fontSize(13)\n          .onClick(() => {\n            this.myBuilder = () => {\n              this.TextBuilder()\n            }\n            this.controller.addBuilderSpan(this.myBuilder)\n          })\n      }.justifyContent(FlexAlign.Center).width('100%')\n    }\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(437273)/* ["default"] */.A) + "",
        width: "431",
        height: "309"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加symbolspan内容",
      children: "添加SymbolSpan内容"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#addsymbolspan11",
        children: "addSymbolSpan"
      }), "添加Symbol内容。此接口可用于特殊符号的添加，例如在编辑学术论文时，此接口可用于添加各种数学符号。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加Symbol内容时，如果组件是获焦状态并且光标在闪烁，那么添加Symbol后，光标将移动到新插入Symbol的右侧。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Symbol内容暂不支持手势、复制、拖拽处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "controller: RichEditorController = new RichEditorController();\noptions: RichEditorOptions = { controller: this.controller };\n// ...\n          RichEditor(this.options)\n            .onReady(() => {\n              // 请将$r('app.string.AddSymbolSpanContent_Text_1')替换为实际资源文件，在本示例中该资源文件的value值为\"点击按钮在此处添加symbol。\"\n              this.controller.addTextSpan(resource.resourceToString($r('app.string.AddSymbolSpanContent_Text_1')), {\n                style: {\n                  fontColor: Color.Black,\n                  fontSize: 15\n                }\n              })\n            })\n            .width(300)\n            .height(100)\n          // 请将$r('app.string.AddSymbolSpanContent_Button_1')替换为实际资源文件，在本示例中该资源文件的value值为\"addSymbolSpan\"\n          Button($r('app.string.AddSymbolSpanContent_Button_1'), {\n            buttonStyle: ButtonStyleMode.NORMAL\n          })\n            .height(30)\n            .fontSize(13)\n            .onClick(() => {\n              // 请将$r('sys.symbol.basketball_fill')替换为开发者所需的资源文件\n              this.controller.addSymbolSpan($r('sys.symbol.basketball_fill'), {\n                style: {\n                  fontSize: 30\n                }\n              })\n            })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(136072)/* ["default"] */.A) + "",
        width: "469",
        height: "215"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "管理内容",
      children: "管理内容"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["富文本组件可以通过接口对内容进行管理，例如", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%8E%B7%E5%8F%96%E7%BB%84%E4%BB%B6%E5%86%85%E5%9B%BE%E6%96%87%E4%BF%A1%E6%81%AF",
        children: "获取组件内的图文信息"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%AE%BE%E7%BD%AE%E6%97%A0%E8%BE%93%E5%85%A5%E6%97%B6%E7%9A%84%E6%8F%90%E7%A4%BA%E6%96%87%E6%9C%AC",
        children: "设置无输入时的提示文本"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%AE%BE%E7%BD%AE%E6%9C%80%E5%A4%A7%E9%95%BF%E5%BA%A6",
        children: "设置组件内容的最大字符数"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取组件内图文信息",
      children: "获取组件内图文信息"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#getspans",
        children: "getSpans"
      }), "获取组件内所有图文内容的信息，包括图文的内容、id、样式、位置等信息。获取内容位置信息后，可对指定范围内容进行样式的更新。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此接口适用于已有的内容样式获取与检查，例如在模板应用场景下，可利用此接口获取文本样式。此外，它还适用于内容解析与处理，例如在文本分析应用中，此接口能够获取特定范围内的文本信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "controller: RichEditorController = new RichEditorController();\noptions: RichEditorOptions = { controller: this.controller };\ninfoShowController: RichEditorController = new RichEditorController();\ninfoShowOptions: RichEditorOptions = { controller: this.infoShowController };\n// 创建两个富文本组件\n// ...\n          RichEditor(this.options)\n            .onReady(() => {\n              this.controller.addTextSpan(\n                // 请将$r('app.string.GetGraphicInfoInComponent_Text_1')替换为实际资源文件，在本示例中该资源文件的value值为\"点击按钮获取此处span信息。\"\n                resource.resourceToString($r('app.string.GetGraphicInfoInComponent_Text_1')), {\n                style: {\n                  fontColor: Color.Black,\n                  fontSize: 15\n                }\n              })\n            })\n            .width(300)\n            .height(50)\n          // 请将$r('app.string.GetGraphicInfoInComponent_Text_1')替换为实际资源文件，在本示例中该资源文件的value值为\"点击按钮获取此处span信息。\"\n          Text($r('app.string.GetGraphicInfoInComponent_Text_1')).fontSize(10).fontColor(Color.Gray).width(300);\n          RichEditor(this.infoShowOptions)\n            .width(300)\n            .height(50)\n          // 请将$r('app.string.GetGraphicInfoInComponent_Button_1')替换为实际资源文件，在本示例中该资源文件的value值为\"getSpans\"\n          Button($r('app.string.GetGraphicInfoInComponent_Button_1'), {\n            buttonStyle: ButtonStyleMode.NORMAL\n            })\n            .height(30)\n            .fontSize(13)\n            .onClick(() => {\n              this.infoShowController.addTextSpan(JSON.stringify(this.controller.getSpans()), {\n                style: {\n                  fontColor: Color.Gray,\n                  fontSize: 10\n                }\n              })\n            })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(452901)/* ["default"] */.A) + "",
        width: "566",
        height: "315"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置无输入时的提示文本",
      children: "设置无输入时的提示文本"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#placeholder12",
        children: "placeholder"
      }), "设置无输入时的提示文本。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，在用户登录界面采用提示文本，有助于用户区分用户名与密码的输入框。又如，在文本编辑框中，使用提示文本明确输入要求，如“限输入100字以内”，以此指导用户正确操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "controller: RichEditorController = new RichEditorController();\noptions: RichEditorOptions = { controller: this.controller };\n// ...\n      RichEditor(this.options)\n        // 请将$r('app.string.SetAttributes_Text_6')替换为实际资源文件，在本示例中该资源文件的value值为\"此处为提示文本...\"\n        .placeholder(resource.resourceToString($r('app.string.SetAttributes_Text_6')), {\n          fontColor: Color.Gray,\n          font: {\n            size: 15,\n            weight: FontWeight.Normal,\n            family: 'HarmonyOS Sans',\n            style: FontStyle.Normal\n          }\n        })\n        .width(300)\n        .height(50)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(919248)/* ["default"] */.A) + "",
        width: "430",
        height: "201"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置最大长度",
      children: "设置最大长度"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#maxlength18",
        children: "maxLength"
      }), "可以设置富文本的最大可输入字符数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "controller: RichEditorController = new RichEditorController();\noptions: RichEditorOptions = { controller: this.controller };\n// ...\n      RichEditor(this.options)\n        // 请将$r('app.string.SetAttributes_Text_8')替换为实际资源文件，在本示例中该资源文件的value值为\"组件设置了最大字符数：7\"\n        .placeholder(resource.resourceToString($r('app.string.SetAttributes_Text_8')))\n        .maxLength(7)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(78156)/* ["default"] */.A) + "",
        width: "362",
        height: "467"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件回调",
      children: "事件回调"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以通过注册事件回调，感知组件事件的触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加图文变化前和图文变化后可触发的回调",
      children: "添加图文变化前和图文变化后可触发的回调"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#onwillchange12",
        children: "onWillChange"
      }), "添加图文变化前可触发的回调。此回调适用于用户实时数据校验与提醒，例如在用户输入文本时，可在回调内实现对输入内容的检测，若检测到敏感词汇，应立即弹出提示框。此外，它还适用于实时字数统计与限制，对于有字数限制的输入场景，可在回调中实时统计用户输入的字数，并在接近字数上限时提供相应的提示。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#ondidchange12",
        children: "onDidChange"
      }), "添加图文变化后可触发的回调。此回调适用于内容保存与同步，例如在用户完成内容编辑后，可使用该回调自动将最新内容保存至本地或同步至服务器。此外，它还适用于内容状态更新与渲染，例如在待办事项列表应用中，用户编辑富文本格式的待办事项描述后，可使用该回调更新待办事项在列表中的显示样式。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#richeditorstyledstringoptions12",
        children: "RichEditorStyledStringOptions"
      }), "构建的RichEditor组件不支持上述两种回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "controller: RichEditorController = new RichEditorController();\noptions: RichEditorOptions = { controller: this.controller };\n\ninfoShowController: RichEditorController = new RichEditorController();\ninfoShowOptions: RichEditorOptions = { controller: this.infoShowController };\n// ...\n        RichEditor(this.options)\n          .onReady(() => {\n            // 请将$r('app.string.AddEvent_Text_5')替换为实际资源文件，在本示例中该资源文件的value值为\"组件内图文变化前，触发回调。\\n图文变化后，触发回调。\"\n            this.controller.addTextSpan(resource.resourceToString($r('app.string.AddEvent_Text_5')), {\n              style: {\n                fontColor: Color.Black,\n                fontSize: 15\n              }\n            })\n          })\n          .onWillChange((value: RichEditorChangeValue) => {\n            // 请将$r('app.string.AddEvent_Text_6')替换为实际资源文件，在本示例中该资源文件的value值为\"组件内图文变化前，触发回调：\\\"\n            this.infoShowController.addTextSpan(resource.resourceToString($r('app.string.AddEvent_Text_6')) +\n            JSON.stringify(value), {\n              style: {\n                fontColor: Color.Gray,\n                fontSize: 10\n              }\n            })\n            return true;\n          })\n          .onDidChange((rangeBefore: TextRange, rangeAfter: TextRange) => {\n            // 请将$r('app.string.AddEvent_Text_7')替换为实际资源文件，在本示例中该资源文件的value值为\"\\n图文变化后，触发回调：\\n rangeBefore\"\n            this.infoShowController.addTextSpan(resource.resourceToString($r('app.string.AddEvent_Text_7')) +\n            JSON.stringify(rangeBefore) + '\\nrangeAfter: ' + JSON.stringify(rangeBefore), {\n              style: {\n                fontColor: Color.Gray,\n                fontSize: 10\n              }\n            })\n          })\n          .width(300)\n          .height(50);\n        // 请将$r('app.string.AddEvent_Text_4')替换为实际资源文件，在本示例中该资源文件的value值为\"查看回调内容：\"\n        Text(resource.resourceToString($r('app.string.AddEvent_Text_4'))).fontSize(10).fontColor(Color.Gray).width(300);\n        RichEditor(this.infoShowOptions)\n          .width(300)\n          .height(70);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(302840)/* ["default"] */.A) + "",
        width: "359",
        height: "164"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加输入法输入内容前和完成输入后可触发的回调",
      children: "添加输入法输入内容前和完成输入后可触发的回调"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "添加输入法输入内容前和完成输入后可触发的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在添加输入法输入内容前，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#abouttoimeinput",
        children: "aboutToIMEInput"
      }), "触发回调。在输入法完成输入后，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#ondidimeinput12",
        children: "onDidIMEInput"
      }), "触发回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这两种回调机制适用于文本上屏过程的业务逻辑处理。例如：在用户输入的文本上屏前，利用回调提供联想词汇，在用户完成输入后，执行自动化纠错或格式转换。两种回调的时序依次为：aboutToIMEInput、onDidIMEInput。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#richeditorstyledstringoptions12",
        children: "RichEditorStyledStringOptions"
      }), "构建的组件不支持上述两种回调功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "controller: RichEditorController = new RichEditorController();\noptions: RichEditorOptions = { controller: this.controller };\n\ninfoShowController: RichEditorController = new RichEditorController();\ninfoShowOptions: RichEditorOptions = { controller: this.infoShowController };\n// ...\n        // 请将$r('app.string.xxx')替换为开发者所需的资源文件\n        RichEditor(this.options)\n          .onReady(() => {\n            this.controller.addTextSpan(resource.resourceToString($r('app.string.AddEvent_Text_8')), {\n              style: {\n                fontColor: Color.Black,\n                fontSize: 15\n              }\n            })\n          })\n          .aboutToIMEInput((value: RichEditorInsertValue) => {\n            this.infoShowController.addTextSpan(resource.resourceToString($r('app.string.AddEvent_Text_9')) +\n            JSON.stringify(value), {\n              style: {\n                fontColor: Color.Gray,\n                fontSize: 10\n              }\n            })\n            return true;\n          })\n          .onDidIMEInput((value: TextRange) => {\n            this.infoShowController.addTextSpan(resource.resourceToString($r('app.string.AddEvent_Text_10')) +\n            JSON.stringify(value), {\n              style: {\n                fontColor: Color.Gray,\n                fontSize: 10\n              }\n            })\n          })\n          .width(300)\n          .height(50)\n        Text(resource.resourceToString($r('app.string.AddEvent_Text_4'))).fontSize(10).fontColor(Color.Gray).width(300)\n        RichEditor(this.infoShowOptions)\n          .width(300)\n          .height(70)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(48059)/* ["default"] */.A) + "",
        width: "448",
        height: "302"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加完成粘贴前可触发的回调",
      children: "添加完成粘贴前可触发的回调"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#onpaste11",
        children: "onPaste"
      }), "回调，来添加粘贴前要处理的流程。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此回调适用于内容格式的处理。例如，当用户复制包含HTML标签的文本时，可在回调中编写代码，将其转换为富文本组件所支持的格式，同时剔除不必要的标签或仅保留纯文本内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于组件默认的粘贴行为仅限于纯文本，无法处理图片粘贴，开发者可利用此方法实现图文并茂的粘贴功能，从而替代组件原有的粘贴行为。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { pasteboard } from '@kit.BasicServicesKit';\n// ...\n@Component\nstruct on_cut_copy_paste {\n  controller: RichEditorController = new RichEditorController();\n  options: RichEditorOptions = { controller: this.controller };\n  infoShowController: RichEditorController = new RichEditorController();\n  infoShowOptions: RichEditorOptions = { controller: this.infoShowController };\n\n  PopDataFromPasteboard() {\n    let selection = this.controller.getSelection();\n    let start = selection.selection[0];\n    let end = selection.selection[1];\n    if (start == end) {\n      start = this.controller.getCaretOffset();\n      end = this.controller.getCaretOffset();\n    }\n    let moveOffset = 0;\n    let sysBoard = pasteboard.getSystemPasteboard();\n    sysBoard.getData((err, data) => {\n      if (err) {\n        return;\n      }\n      if (start != end) {\n        this.controller.deleteSpans({ start: start, end: end });\n      }\n      let count = data.getRecordCount();\n      for (let i = 0; i < count; i++) {\n        const element = data.getRecord(i);\n        if (element && element.plainText && element.mimeType === pasteboard.MIMETYPE_TEXT_PLAIN) {\n          this.controller.addTextSpan(element.plainText,\n            {\n              style: { fontSize: 26, fontColor: Color.Red },\n              offset: start + moveOffset\n            }\n          )\n          moveOffset += element.plainText.length;\n        }\n      }\n      this.controller.setCaretOffset(start + moveOffset);\n    });\n  }\n\n  build() {\n    Column() {\n      ComponentCard({\n        // 请将$r('app.string.Add_Event_title_5')替换为实际资源文件，在本示例中该资源文件的value值为\"添加完成粘贴前可触发的回调\"\n        title: $r('app.string.Add_Event_title_5'),\n        // 请将$r('app.string.Add_Event_title_5_desc')替换为实际资源文件，在本示例中该资源文件的value值为\"通过onPaste回调，来添加粘贴前要处理的流程\"\n        description: $r('app.string.Add_Event_title_5_desc')\n      }) {\n        Column({ space: 3 }) {\n          RichEditor(this.options)\n            .onReady(() => {\n              // 请将$r('app.string.AddEvent_Text_11')替换为实际资源文件，在本示例中该资源文件的value值为\"对此处文本进行复制粘贴操作可触发对应回调。\"\n              this.controller.addTextSpan(resource.resourceToString($r('app.string.AddEvent_Text_11')),\n                { style: { fontColor: Color.Black, fontSize: 15 } })\n            })\n            .onPaste((event) => {\n              // 请将$r('app.string.AddEvent_Text_12')替换为实际资源文件，在本示例中该资源文件的value值为\"触发onPaste回调\\n\"\n              this.infoShowController.addTextSpan(resource.resourceToString($r('app.string.AddEvent_Text_12')),\n                { style: { fontColor: Color.Gray, fontSize: 10 } })\n              if (event != undefined && event.preventDefault) {\n                event.preventDefault();\n              }\n              this.PopDataFromPasteboard()\n            })\n            .width(300)\n            .height(50);\n          // 请将$r('app.string.AddEvent_Text_4')替换为实际资源文件，在本示例中该资源文件的value值为\"查看回调内容：\"\n          Text(resource.resourceToString($r('app.string.AddEvent_Text_4'))).fontSize(10).fontColor(Color.Gray).width(300);\n          RichEditor(this.infoShowOptions)\n            .width(300)\n            .height(70);\n        }.width('100%').alignItems(HorizontalAlign.Start);\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加完成剪切前可触发的回调",
      children: "添加完成剪切前可触发的回调"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#oncut12",
        children: "onCut"
      }), "回调，来添加剪切前要处理的流程。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此回调功能适用于数据处理与存储。例如，当用户从富文本组件中剪切内容时，可在回调中临时存储被剪切的内容，确保后续的粘贴操作能够准确无误地还原内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于组件默认的剪切行为仅限于纯文本，无法处理图片剪切，开发者可利用此方法实现图文并茂的剪切功能，从而替代组件原有的剪切行为。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "controller: RichEditorController = new RichEditorController();\noptions: RichEditorOptions = { controller: this.controller };\n\ninfoShowController: RichEditorController = new RichEditorController();\ninfoShowOptions: RichEditorOptions = { controller: this.infoShowController };\n// ...\n        RichEditor(this.options)\n          .onReady(() => {\n            // 请将$r('app.string.AddEvent_Text_13')替换为实际资源文件，在本示例中该资源文件的value值为\"对此处文本进行复制粘贴操作可触发对应回调。\"\n            this.controller.addTextSpan(resource.resourceToString($r('app.string.AddEvent_Text_13')), {\n              style: {\n                fontColor: Color.Black,\n                fontSize: 15\n              }\n            })\n          })\n          .onCut(() => {\n            // 请将$r('app.string.AddEvent_Text_14')替换为实际资源文件，在本示例中该资源文件的value值为\"触发onCut回调\\n\"\n            this.infoShowController.addTextSpan(resource.resourceToString($r('app.string.AddEvent_Text_14')), {\n              style: {\n                fontColor: Color.Gray,\n                fontSize: 10\n              }\n            })\n          })\n          .width(300)\n          .height(70)\n        RichEditor(this.infoShowOptions)\n          .width(300)\n          .height(70)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加完成复制前可触发的回调",
      children: "添加完成复制前可触发的回调"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#oncopy12",
        children: "onCopy"
      }), "回调，来添加复制前要处理的流程。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此回调适用于内容的备份与共享，例如在用户复制内容时，可在回调中执行以下操作：将复制的内容及其格式信息保存至本地备份文件夹，或自动生成一段包含复制内容及产品购买链接的分享文案，以方便用户进行粘贴和分享。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件默认的复制行为仅限于纯文本，无法处理图片。开发者可利用此方法实现图文并茂的复制功能，替代组件的默认行为。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "controller: RichEditorController = new RichEditorController();\noptions: RichEditorOptions = { controller: this.controller };\n\ninfoShowController: RichEditorController = new RichEditorController();\ninfoShowOptions: RichEditorOptions = { controller: this.infoShowController };\n// ...\n        RichEditor(this.options)\n          .onReady(() => {\n            // 请将$r('app.string.AddEvent_Text_15')替换为实际资源文件，在本示例中该资源文件的value值为\"对此处文本进行复制粘贴操作可触发对应回调。\"\n            this.controller.addTextSpan(resource.resourceToString($r('app.string.AddEvent_Text_15')), {\n              style: {\n                fontColor: Color.Black,\n                fontSize: 15\n              }\n            })\n          })\n          .onCopy(() => {\n            // 请将$r('app.string.AddEvent_Text_16')替换为实际资源文件，在本示例中该资源文件的value值为\"触发onCopy回调\\n\"\n            this.infoShowController.addTextSpan(resource.resourceToString($r('app.string.AddEvent_Text_16')), {\n              style: {\n                fontColor: Color.Gray,\n                fontSize: 10\n              }\n            })\n          })\n          .width(300)\n          .height(50)\n        RichEditor(this.infoShowOptions)\n          .width(300)\n          .height(70)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(706613)/* ["default"] */.A) + "",
        width: "500",
        height: "288"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["更多事件使用请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#%E4%BA%8B%E4%BB%B6",
        children: "RichEditor事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "组件交互",
      children: "组件交互"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以通过接口配置交互元素属性，感知交互元素变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置输入框光标和手柄的颜色",
      children: "设置输入框光标和手柄的颜色"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#caretcolor12",
        children: "caretColor"
      }), "设置输入框光标和手柄的颜色。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置不同颜色的光标和手柄可以提高视觉辨识度，特别是在包含多个输入区域的复杂界面中，独特的光标颜色能帮助快速定位当前操作的输入区域。这一特性也可以提升用户体验，使光标颜色与应用页面整体的风格相协调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "controller: RichEditorController = new RichEditorController();\noptions: RichEditorOptions = { controller: this.controller };\n// ...\n      RichEditor(this.options)\n        .onReady(() => {\n          // 请将$r('app.string.SetAttributes_Text_5')替换为实际资源文件，在本示例中该资源文件的value值为\"组件设置了光标手柄颜色。\"\n          this.controller.addTextSpan(resource.resourceToString($r('app.string.SetAttributes_Text_5')), {\n            style: {\n              fontColor: Color.Black,\n              fontSize: 15\n            }\n          })\n        })\n        .caretColor(Color.Orange)\n        .width(300)\n        .height(300)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(658783)/* ["default"] */.A) + "",
        width: "463",
        height: "228"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加组件内容选择区域或编辑状态下光标位置改变时可触发的回调",
      children: "添加组件内容选择区域或编辑状态下光标位置改变时可触发的回调"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#onselectionchange12",
        children: "onSelectionChange"
      }), "来添加组件内容选择区域或编辑状态下光标位置改变时可触发的回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该回调可用于实时监听组件内容选中区域变化，例如实现实时更新工具栏状态（显示字体、段落格式等）、统计选中内容长度或生成选中内容摘要。实时响应选中状态，动态联动交互元素，提升富文本编辑的操作反馈体验和功能的灵活性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "controller: RichEditorController = new RichEditorController();\noptions: RichEditorOptions = { controller: this.controller };\n\ninfoShowController: RichEditorController = new RichEditorController();\ninfoShowOptions: RichEditorOptions = { controller: this.infoShowController };\n// ...\n        // 请将$r('app.string.xxx')替换为实际资源文件\n        RichEditor(this.options)\n          .onReady(() => {\n            this.controller.addTextSpan(resource.resourceToString($r('app.string.AddEvent_Text_2')), {\n              style: {\n                fontColor: Color.Black,\n                fontSize: 15\n              }\n            })\n          })\n          .onSelectionChange((value: RichEditorRange) => {\n            this.infoShowController.addTextSpan('\\n' + resource.resourceToString($r('app.string.AddEvent_Text_3')) +\n            value.start + ',' + value.end + ')', {\n              style: {\n                fontColor: Color.Gray,\n                fontSize: 10\n              }\n            })\n          })\n          .width(300)\n          .height(50)\n        Text(resource.resourceToString($r('app.string.AddEvent_Text_4'))).fontSize(10).fontColor(Color.Gray).width(300)\n        RichEditor(this.infoShowOptions)\n          .width(300)\n          .height(70)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(863542)/* ["default"] */.A) + "",
        width: "452",
        height: "365"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置内容选中区范围",
      children: "设置内容选中区范围"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#setselection11",
        children: "setSelection"
      }), "设置组件内的内容选中时部分背板高亮。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此接口可用于实现文本聚焦效果，例如当用户点击某个文本段落的标题或摘要时，可通过该接口自动选中并高亮出对应正文内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当组件内未获焦出现光标时，调用该接口不产生选中效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "controller: RichEditorController = new RichEditorController();\noptions: RichEditorOptions = { controller: this.controller };\n// ...\n          RichEditor(this.options)\n            .onReady(() => {\n              // 请将$r('app.string.BackplaneHighlighting_Text_1')替换为实际资源文件，在本示例中该资源文件的value值为\"点击按钮在此处选中0-2位置的文本。\"\n              this.controller.addTextSpan(resource.resourceToString($r('app.string.BackplaneHighlighting_Text_1')), {\n                style: {\n                  fontColor: Color.Black,\n                  fontSize: 15\n                }\n              })\n            })\n            .width(300)\n            .height(60)\n          // 请将$r('app.string.BackplaneHighlighting_Button_1')替换为实际资源文件，在本示例中该资源文件的value值为\"setSelection(0,2)\"\n          Button($r('app.string.BackplaneHighlighting_Button_1'), {\n            buttonStyle: ButtonStyleMode.NORMAL\n          })\n            .height(30)\n            .fontSize(13)\n            .onClick(() => {\n              this.controller.setSelection(0, 2)\n            })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(325669)/* ["default"] */.A) + "",
        width: "431",
        height: "170"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "菜单配置",
      children: "菜单配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过接口可以对文本选择菜单进行配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "管理选中菜单项",
      children: "管理选中菜单项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当富文本选择区域变化后显示菜单之前触发", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#%E5%B1%9E%E6%80%A7-1",
        children: "onPrepareMenu"
      }), "回调，可在该回调中进行菜单数据设置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct PrepareMenu {\n  controller: RichEditorController = new RichEditorController();\n  options: RichEditorOptions = { controller: this.controller };\n  @State endIndex: number | undefined = 0;\n  onCreateMenu = (menuItems: Array<TextMenuItem>) => {\n    const idsToFilter = [\n      TextMenuItemId.TRANSLATE,\n      TextMenuItemId.SHARE,\n      TextMenuItemId.SEARCH,\n      TextMenuItemId.AI_WRITER\n    ]\n    const items = menuItems.filter(item => !idsToFilter.some(id => id.equals(item.id)));\n    // 请将$r('app.media.xxx')替换为实际资源文件\n    let item1: TextMenuItem = {\n      content: 'create1',\n      icon: $r('app.media.startIcon'),\n      id: TextMenuItemId.of('create1'),\n    }\n    let item2: TextMenuItem = {\n      content: 'create2',\n      id: TextMenuItemId.of('create2'),\n      icon: $r('app.media.startIcon'),\n    }\n    items.push(item1);\n    items.unshift(item2);\n    return items;\n  }\n\n  onMenuItemClick = (menuItem: TextMenuItem, textRange: TextRange) => {\n    if (menuItem.id.equals(TextMenuItemId.of('create2'))) {\n      return true;\n    }\n    if (menuItem.id.equals(TextMenuItemId.of('prepare1'))) {\n      return true;\n    }\n    if (menuItem.id.equals(TextMenuItemId.COPY)) {\n      return true;\n    }\n    if (menuItem.id.equals(TextMenuItemId.SELECT_ALL)) {\n      return false;\n    }\n    return false;\n  }\n\n  onPrepareMenu = (menuItems: Array<TextMenuItem>) => {\n    // 请将$r('app.media.xxx')替换为实际资源文件\n    let item1: TextMenuItem = {\n      content: 'prepare1_' + this.endIndex,\n      icon: $r('app.media.startIcon'),\n      id: TextMenuItemId.of('prepare1'),\n    };\n    menuItems.unshift(item1);\n    return menuItems;\n  }\n\n  @State editMenuOptions: EditMenuOptions = {\n    onCreateMenu: this.onCreateMenu,\n    onMenuItemClick: this.onMenuItemClick,\n    onPrepareMenu: this.onPrepareMenu\n  };\n\n  build() {\n    Column() {\n      // ...\n      RichEditor(this.options)\n        .onReady(() => {\n          this.controller.addTextSpan('RichEditor editMenuOptions');\n        })\n        .editMenuOptions(this.editMenuOptions)\n        .onSelectionChange((range: RichEditorRange) => {\n          this.endIndex = range.end;\n        })\n        .height(50)\n        .margin({ top: 100 })\n        .borderWidth(1)\n        .borderColor(Color.Red)\n      // ...\n    }.alignItems(HorizontalAlign.Start)\n    .backgroundColor('#fff')\n    .borderRadius(12)\n    .padding(12)\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(631297)/* ["default"] */.A) + "",
        width: "301",
        height: "225"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "屏蔽系统服务类菜单项",
      children: "屏蔽系统服务类菜单项"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-textmenucontroller/arkts-apis-uicontext-textmenucontroller#disablesystemservicemenuitems20",
        children: "disableSystemServiceMenuItems"
      }), "屏蔽富文本选择菜单内所有系统服务菜单项。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此接口保护内容安全，适用于限制文本操作的场景，例如展示保密内容或禁止复制的版权文本。屏蔽系统服务菜单项，防止用户通过系统服务菜单复制、分享文本，降低内容泄露风险。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { TextMenuController } from '@kit.ArkUI';\n\n@Entry\n@Component\nexport struct DisableSystemServiceMenu {\n  controller: RichEditorController = new RichEditorController();\n  options: RichEditorOptions = { controller: this.controller };\n\n  aboutToAppear(): void {\n    // 禁用所有系统服务菜单\n    TextMenuController.disableSystemServiceMenuItems(true);\n  }\n\n  aboutToDisappear(): void {\n    // 页面消失恢复系统服务菜单\n    TextMenuController.disableSystemServiceMenuItems(false);\n  }\n\n  build() {\n    // ...\n          RichEditor(this.options).onReady(() => {\n            // 请将$r('app.string.Demo_richEditor')替换为实际资源文件，在本示例中该资源文件的value值为\"这是一个RichEditor\"\n            this.controller.addTextSpan($r('app.string.Demo_richEditor'),\n              {\n                style:\n                {\n                  fontSize: 30\n                }\n              })\n          })\n            .height(60)\n            .editMenuOptions({\n              onCreateMenu: (menuItems: Array<TextMenuItem>) => {\n                // menuItems不包含被屏蔽的系统菜单项\n                return menuItems;\n              },\n              onMenuItemClick: (menuItem: TextMenuItem, textRange: TextRange) => {\n                return false;\n              }\n            })\n          // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(827824)/* ["default"] */.A) + "",
        width: "281",
        height: "159"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-textmenucontroller/arkts-apis-uicontext-textmenucontroller#disablemenuitems20",
        children: "disableMenuItems"
      }), "可以屏蔽富文本选择菜单内指定的系统服务菜单项。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此接口可精确屏蔽指定的系统服务菜单项，保留应用所需的系统菜单功能，使菜单更贴合实际交互设计。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { TextMenuController } from '@kit.ArkUI';\n\n\n@Entry\n@Component\nexport struct DisableMenuItem {\n  controller: RichEditorController = new RichEditorController();\n  options: RichEditorOptions = { controller: this.controller };\n\n  aboutToAppear(): void {\n    // 禁用搜索和翻译菜单\n    TextMenuController.disableMenuItems([TextMenuItemId.SEARCH, TextMenuItemId.TRANSLATE]);\n  }\n\n  aboutToDisappear(): void {\n    // 恢复系统服务菜单\n    TextMenuController.disableMenuItems([]);\n  }\n\n  build() {\n    // ...\n          RichEditor(this.options)\n            .onReady(() => {\n              // 请将$r('app.string.Demo_richEditor')替换为实际资源文件，在本示例中该资源文件的value值为\"这是一个RichEditor\"\n              this.controller.addTextSpan($r('app.string.Demo_richEditor'), {\n                style: {\n                  fontSize: 30\n                }\n              })\n            })\n            .height(60)\n            .editMenuOptions({\n              onCreateMenu: (menuItems: Array<TextMenuItem>) => {\n                // menuItems不包含搜索和翻译\n                return menuItems;\n              },\n              onMenuItemClick: (menuItem: TextMenuItem, textRange: TextRange) => {\n                return false;\n              }\n            })\n          // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(650776)/* ["default"] */.A) + "",
        width: "324",
        height: "235"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置自定义选择菜单",
      children: "设置自定义选择菜单"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#bindselectionmenu",
        children: "bindSelectionMenu"
      }), "设置自定义选择菜单。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件原本具有默认的文本选择菜单，包含复制、剪切和全选的功能。用户可使用该属性设定自定义菜单，例如翻译英文、加粗字体等丰富的菜单功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当自定义菜单超长时，建议内部嵌套Scroll组件使用，避免键盘被遮挡。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "controller: RichEditorController = new RichEditorController();\noptions: RichEditorOptions = { controller: this.controller };\nsliderShow: boolean = false;\nprivate theme: SelectionMenuTheme = defaultTheme;\n\nbuild() {\n  Column() {\n    ComponentCard({\n      // 请将$r('app.string.Set_Attributes_title_1')替换为实际资源文件，在本示例中该资源文件的value值为\"设置自定义选择菜单\"\n      title: $r('app.string.Set_Attributes_title_1'),\n      // 请将$r('app.string.Set_Attributes_title_1_desc')替换为实际资源文件，在本示例中该资源文件的value值为\"通过bindSelectionMenu设置自定义选择菜单\"\n      description: $r('app.string.Set_Attributes_title_1_desc'),\n    }) {\n      RichEditor(this.options)\n        .onReady(() => {\n          // 请将$r('app.string.SetAttributes_Text_4')替换为实际资源文件，在本示例中该资源文件的value值为\"组件设置了自定义菜单，长按可触发。\"\n          this.controller.addTextSpan(resource.resourceToString($r('app.string.SetAttributes_Text_4')), {\n            style: {\n              fontColor: Color.Black,\n              fontSize: 18\n            }\n          })\n        })\n        .bindSelectionMenu(RichEditorSpanType.TEXT, this.SystemMenu, ResponseType.LongPress, {\n          onDisappear: () => {\n            this.sliderShow = false\n          }\n        })\n        // 绑定自定义菜单\n        .width(300)\n        .height(300)\n    }\n  }\n}\n\n@Builder\nSystemMenu() {\n  Column() {\n    Menu() {\n      if (this.controller) {\n        MenuItemGroup() {\n          MenuItem({\n            startIcon: this.theme.cutIcon,\n            // 请将$r('app.string.SetAttributes_Text_1')替换为实际资源文件，在本示例中该资源文件的value值为\"剪切\"\n            content: resource.resourceToString($r('app.string.SetAttributes_Text_1')),\n            labelInfo: 'Ctrl+X'\n          })\n          MenuItem({\n            startIcon: this.theme.copyIcon,\n            // 请将$r('app.string.SetAttributes_Text_2')替换为实际资源文件，在本示例中该资源文件的value值为\"复制\"\n            content: resource.resourceToString($r('app.string.SetAttributes_Text_2')),\n            labelInfo: 'Ctrl+C'\n          })\n          MenuItem({\n            startIcon: this.theme.pasteIcon,\n            // 请将$r('app.string.SetAttributes_Text_3')替换为实际资源文件，在本示例中该资源文件的value值为\"粘贴\"\n            content: resource.resourceToString($r('app.string.SetAttributes_Text_3')),\n            labelInfo: 'Ctrl+V'\n          })\n        }\n      }\n    }\n    .radius(this.theme.containerBorderRadius)\n    .clip(true)\n    .backgroundColor(Color.White)\n    .width(this.theme.defaultMenuWidth)\n  }\n  .width(this.theme.defaultMenuWidth)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(652465)/* ["default"] */.A) + "",
        width: "436",
        height: "339"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "布局配置",
      children: "布局配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件支持通过接口配置布局规则，开发者可以根据业务场景定制合适的布局规则。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置最大行数",
      children: "设置最大行数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#maxlines18",
        children: "maxLines"
      }), "可以设置富文本组件内可显示文本的最大行数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此接口控制组件内文本的显示范围，防止文本过长影响页面布局，确保不同设备和场景下的文本显示效果一致，提升界面兼容性和美观度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "controller: RichEditorController = new RichEditorController();\noptions: RichEditorOptions = { controller: this.controller };\n\nbuild() {\n  Column() {\n    // ...\n    /*\n     * 请将$r('app.string.SetAttributes_Text_7')替换为实际资源文件，在本示例中该资源文件的\n     * value值为\"组件设置了最大行数\\n超出内容将会以滚动显示\\n超出1行\\n超出2行\\n超出3行\\n超出4行\"\n     */\n    RichEditor(this.options)\n      .onReady(() => {\n        this.controller.addTextSpan(resource.resourceToString($r('app.string.SetAttributes_Text_7')),\n          {\n            style: {\n              fontColor: Color.Black,\n              fontSize: 15\n            }\n          })\n      })\n      .maxLines(2)\n    // ...\n  }.alignItems(HorizontalAlign.Start)\n  .backgroundColor('#fff')\n  .borderRadius(12)\n  .padding(12)\n  .width('100%')\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(358657)/* ["default"] */.A) + "",
        width: "407",
        height: "118"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "样式设置",
      children: "样式设置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件支持对内容设置复杂的样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置用户预设的文本样式",
      children: "设置用户预设的文本样式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#settypingstyle11",
        children: "setTypingStyle"
      }), "可以设置用户预设的文本样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此接口可用于个性化的写作体验，例如可以使用此接口让输入的不同层级标题自动应用相应格式（如一级、二级标题）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "controller: RichEditorController = new RichEditorController();\noptions: RichEditorOptions = { controller: this.controller };\n// ...\n          RichEditor(this.options)\n            .onReady(() => {\n              // 请将$r('app.string.SetUserPresetTextStyles_Text_1')替换为实际资源文件，在本示例中该资源文件的value值为\"点击按钮，改变预设文本样式。\"\n              this.controller.addTextSpan(resource.resourceToString($r('app.string.SetUserPresetTextStyles_Text_1')),\n                {\n                  style: {\n                    fontColor: Color.Black,\n                    fontSize: 15\n                  }\n                })\n            })\n            .width(300)\n            .height(60)\n          // 请将$r('app.string.SetUserPresetTextStyles_Button_1')替换为实际资源文件，在本示例中该资源文件的value值为\"setTypingStyle\"\n          Button($r('app.string.SetUserPresetTextStyles_Button_1'), {\n            buttonStyle: ButtonStyleMode.NORMAL\n          })\n            .height(30)\n            .fontSize(13)\n            .onClick(() => {\n              this.controller.setTypingStyle({\n                fontWeight: 'medium',\n                fontColor: Color.Pink,\n                fontSize: 15,\n                fontStyle: FontStyle.Italic,\n                decoration: {\n                  type: TextDecorationType.Underline,\n                  color: Color.Gray\n                }\n              })\n            })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(525621)/* ["default"] */.A) + "",
        width: "483",
        height: "254"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置装饰线",
      children: "设置装饰线"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-span/ts-basic-components-span#decoration",
        children: "decoration"
      }), "设置富文本组件中文本装饰线的样式、颜色和粗细。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本装饰线可突出关键信息、区分文本状态、增强视觉层次。例如，为重要标题或关键词添加装饰线，帮助用户快速获取信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "controller: RichEditorController = new RichEditorController();\noptions: RichEditorOptions = { controller: this.controller };\n// ...\n      RichEditor(this.options)\n        .onReady(() => {\n          // 请将$r('app.string.Demo_oneText')替换为实际资源文件，在本示例中该资源文件的value值为\"一段预置的文本\"\n          this.controller.addTextSpan($r('app.string.Demo_oneText'), {\n            style: {\n              fontSize: 25,\n              decoration: {\n                type: TextDecorationType.LineThrough,\n                color: Color.Blue,\n                // 设置装饰线粗细比例为6\n                thicknessScale: 6\n              }\n            }\n          })\n        })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(758641)/* ["default"] */.A) + "",
        width: "240",
        height: "73"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#decorationoptions20",
        children: "DecorationOptions"
      }), "中的enableMultiType设置多装饰线，比如同时设置下划线和中划线。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此接口适用于复杂业务场景，满足文本装饰的多样化需求。在文档协作过程中，多人编辑时，可以通过使用不同的装饰线组合来区分文本状态，从而提高协作效率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "RichEditor({ controller: this.styledStringController });\n// 请将$r('app.string.Demo_SetStyledStringButton')替换为实际资源文件，在本示例中该资源文件的value值为\"多装饰线文本\"\nButton($r('app.string.Demo_SetStyledStringButton'))\n  .fontSize(20)\n  .onClick(() => {\n    let mutString: MutableStyledString = new MutableStyledString(\n      // 请将$r('app.string.Demo_styledString')替换为实际资源文件，在本示例中该资源文件的value值为\"需设置富文本多装饰线\"\n      resource.resourceToString($r('app.string.Demo_styledString')), [\n      {\n        start: 0,\n        length: 9,\n        styledKey: StyledStringKey.FONT,\n        styledValue: new TextStyle({ fontSize: LengthMetrics.vp(25) })\n      },\n      {\n        start: 0,\n        length: 5,\n        styledKey: StyledStringKey.DECORATION,\n        styledValue: new DecorationStyle(\n          {\n            type: TextDecorationType.Underline,\n          },\n          {\n            // 开启多装饰线\n            enableMultiType: true\n          })\n      },\n      {\n        start: 2,\n        length: 4,\n        styledKey: StyledStringKey.DECORATION,\n        styledValue: new DecorationStyle(\n          {\n            type: TextDecorationType.LineThrough,\n          },\n          {\n            // 开启多装饰线\n            enableMultiType: true\n          })\n      }\n    ])\n    this.styledStringController.setStyledString(mutString);\n  })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(900882)/* ["default"] */.A) + "",
        width: "290",
        height: "71"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置垂直居中",
      children: "设置垂直居中"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#textverticalalign20",
        children: "textVerticalAlign"
      }), "设置文本段落在垂直方向的对齐方式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此接口优化多元素排版，使组件内容与图片、图标等在垂直方向对齐时，整体布局更协调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "controller: RichEditorController = new RichEditorController();\noptions: RichEditorOptions = { controller: this.controller };\n// ...\n      RichEditor(this.options)\n        .onReady(() => {\n          // 请将$r('app.media.startIcon')替换为实际资源文件\n          this.controller.addImageSpan($r('app.media.startIcon'), {\n            imageStyle: {\n              size: [100, 100]\n            }\n          })\n          // 请将$r('app.string.Demo_verticalAlignString')替换为实际资源文件，在本示例中该资源文件的value值为\"这是一段富文本，展示了文本垂直居中的效果。\"\n          this.controller.addTextSpan($r('app.string.Demo_verticalAlignString'), {\n            style: {\n              fontColor: Color.Pink,\n              fontSize: '32'\n            },\n            paragraphStyle: {\n              textAlign: TextAlign.Start,\n              textVerticalAlign: TextVerticalAlign.CENTER,\n              leadingMargin: 16\n            }\n          })\n        })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(70045)/* ["default"] */.A) + "",
        width: "398",
        height: "157"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置中西文自动间距",
      children: "设置中西文自动间距"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#enableautospacing20",
        children: "enableAutoSpacing"
      }), "设置是否开启中文与西文的自动间距。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此接口优化文本排版，提升组件内文本的可读性。设置自动间距后，中文与西文间产生适当空隙，便于区分不同语种，减少视觉干扰。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "controller: RichEditorController = new RichEditorController();\noptions: RichEditorOptions = { controller: this.controller };\n// ...\n        RichEditor(this.options)\n          .onReady(() => {\n            // 请将$r('app.string.Demo_autoSpacingString')替换为实际资源文件，在本示例中该资源文件的value值为\"中西文Auto Spacing自动间距\"\n            this.controller.addTextSpan($r('app.string.Demo_autoSpacingString'),\n              {\n                style:\n                {\n                  fontColor: Color.Orange,\n                  fontSize: 20\n                }\n              })\n          })\n          .enableAutoSpacing(this.enableAutoSpace)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(229874)/* ["default"] */.A) + "",
        width: "331",
        height: "172"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/content-publisher",
          children: "内容发布器"
        })
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
631297(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798180-b539b9357d82c3f34b4df3908d11c1b0.gif");

},
919248(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,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");

},
70045(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798184-e750c5c04c736f2400c5236582281836.jpg");

},
758641(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/jpeg;base64,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");

},
652465(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477831-2a50706048bb82918032381eda62e95a.gif");

},
48059(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477827-2fe01bec45cef29604ede1b9577e1631.gif");

},
552575(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,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");

},
325669(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477829-efd4078e724419d322e323a113b1138c.gif");

},
317345(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477823-92e01e989d298f6ad34a140a6a98e0ae.gif");

},
302840(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957826-f10d8f5f9968fdd712c2f78ab4a3acea.gif");

},
358657(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798182-77256092550c02bfee57c469b2e6c3a2.gif");

},
658783(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437873-88a6630fcae6dcfb3e39a2fe55e32008.gif");

},
827824(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437875-3b89d87f8b483e0e2c42cb4ab30fccd9.gif");

},
650776(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957830-9b1ceaeacdd14b7c0f21f048ec0ea91d.gif");

},
863542(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957828-5564c16dceb8c961360aa592a7e7887d.gif");

},
437273(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437869-4a213be45014f8dce398a7f6ea32577f.gif");

},
229874(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437879-7efd5ccdbb5b71540f9be9152d29c9c4.gif");

},
136072(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957824-b6626b33f2caac9a078d45314ef70479.gif");

},
78156(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437871-4ac2bf008a008f40019ff4bdf6b56f37.gif");

},
900882(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477833-e8727af00bdbd505589c03ede18a2151.jpg");

},
343622(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,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");

},
211581(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798172-c2a64527c123ba91dfe65f6c09f77428.jpg");

},
706613(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798178-0cce31dfcb2d5e61b06b3eb43fac5ae5.gif");

},
525621(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437877-77ffd3c05338d4aa3e68b78ab53d4d24.gif");

},
452901(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477825-47509b1f34a8cd15b476b0728b9b3745.gif");

},
159465(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798174-535d47f6d897641691e194fb00c243ab.gif");

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