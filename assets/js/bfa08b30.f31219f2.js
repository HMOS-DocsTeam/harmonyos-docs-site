"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["402140"], {
61292(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_text_arkts_common_components_text_input_arkts_common_components_text_input_md_bfa_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-text-arkts-common-components-text-input-arkts-common-components-text-input-md-bfa.json
var site_docs_arkui_arkts_ui_development_arkts_use_text_arkts_common_components_text_input_arkts_common_components_text_input_md_bfa_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-text/arkts-common-components-text-input/arkts-common-components-text-input","title":"文本输入 (TextInput/TextArea/Search)","description":"TextInput、TextArea是输入框组件，用于响应用户输入，比如评论区的输入、聊天框的输入、表格的输入等，也可以结合其它组件构建功能页面，例如登录注册页面。具体用法请参考TextInput和TextArea组件的API文档。Search是特殊的输入框组件，称为搜索框，默认样式包含搜索图标。具体用法请参考Search组件的API文档。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-text-input/arkts-common-components-text-input.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-text/arkts-common-components-text-input","slug":"/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-text-input/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-text-input/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"文本输入 (TextInput/TextArea/Search)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-text-input","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"文本显示 (Text/Span)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-text-display/"},"next":{"title":"富文本编辑（RichEditor）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-richeditor/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-text-input/arkts-common-components-text-input.md


const frontMatter = {
	title: '文本输入 (TextInput/TextArea/Search)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-text-input',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '文本输入 (TextInput/TextArea/Search)';

const assets = {

};



const toc = [{
  "value": "创建输入框",
  "id": "创建输入框",
  "level": 2
}, {
  "value": "设置输入框类型",
  "id": "设置输入框类型",
  "level": 2
}, {
  "value": "基本输入模式（默认类型）",
  "id": "基本输入模式默认类型",
  "level": 3
}, {
  "value": "密码模式",
  "id": "密码模式",
  "level": 3
}, {
  "value": "邮箱地址输入模式",
  "id": "邮箱地址输入模式",
  "level": 3
}, {
  "value": "纯数字输入模式",
  "id": "纯数字输入模式",
  "level": 3
}, {
  "value": "电话号码输入模式",
  "id": "电话号码输入模式",
  "level": 3
}, {
  "value": "带小数点的数字输入模式",
  "id": "带小数点的数字输入模式",
  "level": 3
}, {
  "value": "带URL的输入模式",
  "id": "带url的输入模式",
  "level": 3
}, {
  "value": "设置输入框多态样式",
  "id": "设置输入框多态样式",
  "level": 2
}, {
  "value": "默认风格",
  "id": "默认风格",
  "level": 3
}, {
  "value": "内联模式",
  "id": "内联模式",
  "level": 3
}, {
  "value": "自定义样式",
  "id": "自定义样式",
  "level": 2
}, {
  "value": "添加事件",
  "id": "添加事件",
  "level": 2
}, {
  "value": "选中菜单",
  "id": "选中菜单",
  "level": 2
}, {
  "value": "禁用系统服务类菜单",
  "id": "禁用系统服务类菜单",
  "level": 2
}, {
  "value": "自动填充",
  "id": "自动填充",
  "level": 2
}, {
  "value": "设置属性",
  "id": "设置属性",
  "level": 2
}, {
  "value": "设置文本行间距",
  "id": "设置文本行间距",
  "level": 2
}, {
  "value": "键盘避让",
  "id": "键盘避让",
  "level": 2
}, {
  "value": "光标避让",
  "id": "光标避让",
  "level": 2
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "如何设置TextArea的文本最少展示行数并自适应高度",
  "id": "如何设置textarea的文本最少展示行数并自适应高度",
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
    img: "img",
    li: "li",
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
        id: "文本输入-textinputtextareasearch",
        children: "文本输入 (TextInput/TextArea/Search)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TextInput、TextArea是输入框组件，用于响应用户输入，比如评论区的输入、聊天框的输入、表格的输入等，也可以结合其它组件构建功能页面，例如登录注册页面。具体用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput",
        children: "TextInput"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textarea/ts-basic-components-textarea",
        children: "TextArea"
      }), "组件的API文档。Search是特殊的输入框组件，称为搜索框，默认样式包含搜索图标。具体用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search/ts-basic-components-search",
        children: "Search"
      }), "组件的API文档。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(93444)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["仅支持单文本样式，若需实现富文本样式，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor",
        children: "RichEditor"
      }), "组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建输入框",
      children: "创建输入框"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TextInput是单行输入框，TextArea是多行输入框，Search是搜索框。通过以下接口创建这些组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TextInput(value?:{placeholder?: ResourceStr, text?: ResourceStr, controller?: TextInputController})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TextArea(value?:{placeholder?: ResourceStr, text?: ResourceStr, controller?: TextAreaController})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Search(options?:{placeholder?: ResourceStr, value?: ResourceStr, controller?: SearchController, icon?: string})\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "单行输入框。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "TextInput()\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(214130)/* ["default"] */.A) + "",
            width: "404",
            height: "78"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "多行输入框。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "TextArea()\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(331497)/* ["default"] */.A) + "",
            width: "407",
            height: "80"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "多行输入框文字超出一行时会自动折行。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/* 请将$r('app.string.CreatTextInput_textContent')替换为实际资源文件，在本示例中该资源文件的value值为\n * \"我是TextArea我是TextArea我是TextArea我是TextArea\"\n */\nTextArea({ text: $r('app.string.CreatTextInput_textContent') })\n  .width(300)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(257094)/* ["default"] */.A) + "",
            width: "404",
            height: "97"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "搜索框。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Search()\n  // 请将$r('app.string.Creat_TextInput_Content')替换为实际资源文件，在本示例中该资源文件的value值为\"搜索\"\n  .searchButton($r('app.string.Creat_TextInput_Content'))\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(488754)/* ["default"] */.A) + "",
            width: "404",
            height: "84"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置输入框类型",
      children: "设置输入框类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TextInput、TextArea和Search都支持设置输入框类型，通过type属性进行设置，但是各组件的枚举值略有不同。下面以单行输入框为例进行说明。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TextInput有以下类型可选择：Normal基本输入模式、Password密码输入模式、Email邮箱地址输入模式、Number纯数字输入模式、PhoneNumber电话号码输入模式、USER_NAME用户名输入模式、NEW_PASSWORD新密码输入模式、NUMBER_PASSWORD纯数字密码输入模式、NUMBER_DECIMAL带小数点的数字输入模式、带URL的输入模式。通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#type",
        children: "type"
      }), "属性进行设置："]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "基本输入模式默认类型",
      children: "基本输入模式（默认类型）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TextInput()\n  .type(InputType.Normal)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(210951)/* ["default"] */.A) + "",
        width: "394",
        height: "81"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "密码模式",
      children: "密码模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "包括Password密码输入模式、NUMBER_PASSWORD纯数字密码模式、NEW_PASSWORD新密码输入模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例是Password密码输入模式的输入框。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TextInput()\n  .type(InputType.Password)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(213948)/* ["default"] */.A) + "",
        width: "411",
        height: "74"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "邮箱地址输入模式",
      children: "邮箱地址输入模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "邮箱地址输入模式的输入框，只能存在一个@符号。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TextInput()\n  .type(InputType.Email)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(3413)/* ["default"] */.A) + "",
        width: "422",
        height: "60"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "纯数字输入模式",
      children: "纯数字输入模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "纯数字输入模式的输入框，只能输入数字[0-9]。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TextInput()\n  .type(InputType.Number)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(438868)/* ["default"] */.A) + "",
        width: "419",
        height: "65"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "电话号码输入模式",
      children: "电话号码输入模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "电话号码输入模式的输入框，支持输入数字、空格、+ 、-、*、#、(、)，长度不限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TextInput()\n  .type(InputType.PhoneNumber)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(581817)/* ["default"] */.A) + "",
        width: "418",
        height: "59"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "带小数点的数字输入模式",
      children: "带小数点的数字输入模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "带小数点的数字输入模式的输入框，只能输入数字[0-9]和小数点，只能存在一个小数点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TextInput()\n  .type(InputType.NUMBER_DECIMAL)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(672343)/* ["default"] */.A) + "",
        width: "413",
        height: "62"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "带url的输入模式",
      children: "带URL的输入模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "带URL的输入模式，无特殊限制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TextInput()\n  .type(InputType.URL)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(532693)/* ["default"] */.A) + "",
        width: "308",
        height: "59"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置输入框多态样式",
      children: "设置输入框多态样式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TextInput、TextArea支持设置输入框多态样式，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textarea/ts-basic-components-textarea#style10",
        children: "style"
      }), "属性进行设置。下面以多行输入框TextArea为例进行说明。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TextArea有以下2种类型可选择：默认风格，入参是TextContentStyle.DEFAULT；内联模式，也称内联输入风格，入参是TextContentStyle.INLINE。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "默认风格",
      children: "默认风格"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "默认风格的输入框，在编辑态和非编辑态，样式没有区别。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TextArea()\n  .style(TextContentStyle.DEFAULT)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(186389)/* ["default"] */.A) + "",
        width: "300",
        height: "70"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "内联模式",
      children: "内联模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内联模式，也称内联输入风格。内联模式的输入框在编辑态和非编辑态样式有明显区分。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TextArea()\n  .style(TextContentStyle.INLINE)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(446090)/* ["default"] */.A) + "",
        width: "300",
        height: "68"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义样式",
      children: "自定义样式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置无输入时的提示文本。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 请将$r('app.string.i_am_placeholder')替换为实际资源文件，在本示例中该资源文件的value值为\"我是提示文本\"\nTextInput({ placeholder: $r('app.string.i_am_placeholder') })\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(399306)/* ["default"] */.A) + "",
            width: "402",
            height: "75"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置输入框当前的文本内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "TextInput({\n  // 请将$r('app.string.i_am_placeholder')替换为实际资源文件，在本示例中该资源文件的value值为\"我是提示文本\"\n  placeholder: $r('app.string.i_am_placeholder'),\n  // 请将$r('app.string.i_am_current_text_content')替换为实际资源文件，在本示例中该资源文件的value值为\"我是当前文本内容\"\n  text: $r('app.string.i_am_current_text_content')\n})\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(395450)/* ["default"] */.A) + "",
            width: "402",
            height: "81"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加backgroundColor改变输入框的背景颜色。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "TextInput({\n  // 请将$r('app.string.i_am_placeholder')替换为实际资源文件，在本示例中该资源文件的value值为\"我是提示文本\"\n  placeholder: $r('app.string.i_am_placeholder'),\n  // 请将$r('app.string.i_am_current_text_content')替换为实际资源文件，在本示例中该资源文件的value值为\"我是当前文本内容\"\n  text: $r('app.string.i_am_current_text_content')\n})\n  .backgroundColor(Color.Pink)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(33898)/* ["default"] */.A) + "",
            width: "401",
            height: "81"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["更丰富的样式可以结合", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/ts-component-general-attributes",
            children: "通用属性"
          }), "实现。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加事件",
      children: "添加事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["文本框主要用于获取用户输入的信息，并将信息处理成数据进行上传，绑定", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#onchange",
        children: "onChange"
      }), "事件可以获取输入框内改变的文本内容，绑定", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#onsubmit",
        children: "onSubmit"
      }), "事件可以获取回车提交的文本信息，绑定", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#ontextselectionchange10",
        children: "onTextSelectionChange"
      }), "事件可以获取文本选中时手柄的位置信息或者编辑时光标的位置信息等等。用户也可以使用通用事件进行相应的交互操作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(242009)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在密码模式下，设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#showpassword12",
        children: "showPassword"
      }), "属性时，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#onsecuritystatechange12",
        children: "onSecurityStateChange"
      }), "回调中，建议增加状态同步，具体详见如下示例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#onwillinsert12",
        children: "onWillInsert"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#ondidinsert12",
        children: "onDidInsert"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#onwilldelete12",
        children: "onWillDelete"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#ondiddelete12",
        children: "onDidDelete"
      }), "回调仅支持系统输入法的场景。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#onwillchange15",
        children: "onWillChange"
      }), "的回调时序晚于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#onwillinsert12",
        children: "onWillInsert"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#onwilldelete12",
        children: "onWillDelete"
      }), "，早于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#ondidinsert12",
        children: "onDidInsert"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#ondiddelete12",
        children: "onDidDelete"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = '[Sample_Textcomponent]';\nconst DOMAIN = 0xF811;\nconst BUNDLE = 'Textcomponent_';\n\n@Entry\n@Component\nstruct TextInputEventAdd {\n  @State text: string = '';\n  @State textStr1: string = '';\n  @State textStr2: string = '';\n  @State textStr3: string = '';\n  @State textStr4: string = '';\n  @State textStr5: string = '';\n  @State textStr6: string = '';\n  @State textStr7: string = '';\n  @State textStr8: string = '';\n  @State textStr9: string = '';\n  @State passwordState: boolean = false;\n  controller: TextInputController = new TextInputController();\n\n  build() {\n    Row() {\n      Column() {\n        Text(`${this.textStr1}\\n${this.textStr2}\\n${this.textStr3}\n          \\n${this.textStr4}\\n${this.textStr5}\\n${this.textStr6}\n          \\n${this.textStr7}\\n${this.textStr8}\\n${this.textStr9}`)\n          .fontSize(20)\n          .width('70%')\n        TextInput({ text: this.text, placeholder: 'input your word...', controller: this.controller })\n          .type(InputType.Password)\n          .showPassword(this.passwordState)\n          .onChange((value: string) => {\n            // 文本内容发生变化时触发该回调\n            hilog.info(DOMAIN, TAG, BUNDLE + 'onChange is triggering: ' + value);\n            this.textStr1 = `onChange is triggering: ${value}`;\n          })\n          .onSubmit((enterKey: EnterKeyType, event: SubmitEvent) => {\n            // 按下输入法回车键时触发该回调\n            hilog.info(DOMAIN, TAG, BUNDLE + 'onSubmit is triggering: ' + enterKey + event.text);\n            this.textStr2 = `onSubmit is triggering: ${enterKey} ${event.text}`;\n          })\n          .onTextSelectionChange((selectionStart: number, selectionEnd: number) => {\n            // 文本选择的位置发生变化或编辑状态下光标位置发生变化时，触发该回调\n            hilog.info(DOMAIN, TAG, BUNDLE + 'onTextSelectionChange is triggering: ' + selectionStart + selectionEnd);\n            this.textStr3 = `onTextSelectionChange is triggering: ${selectionStart} ${selectionEnd}`;\n          })\n          .onSecurityStateChange((isShowPassword: boolean) => {\n            // 密码显隐状态切换时，触发该回调\n            hilog.info(DOMAIN, TAG, BUNDLE + 'onSecurityStateChange is triggering: ' + isShowPassword);\n            this.passwordState = isShowPassword;\n            this.textStr4 = `onSecurityStateChange is triggering: ${isShowPassword}`;\n          })\n          .onWillInsert((info: InsertValue) => {\n            // 在将要输入时，触发该回调\n            hilog.info(DOMAIN, TAG, BUNDLE + 'onWillInsert is triggering: ' + info.insertValue + info.insertOffset);\n            this.textStr5 = `onWillInsert is triggering: ${info.insertValue} ${info.insertOffset}`;\n            return true;\n          })\n          .onDidInsert((info: InsertValue) => {\n            // 在输入完成时，触发该回调\n            hilog.info(DOMAIN, TAG, BUNDLE + 'onDidInsert is triggering: ' + info.insertValue + info.insertOffset);\n            this.textStr6 = `onDidInsert is triggering: ${info.insertValue} ${info.insertOffset}`;\n          })\n          .onWillDelete((info: DeleteValue) => {\n            // 在将要删除时，触发该回调\n            hilog.info(DOMAIN, TAG, BUNDLE + 'onWillDelete is triggering: ' + info.deleteValue + info.deleteOffset);\n            this.textStr7 = `onWillDelete is triggering: ${info.deleteValue} ${info.deleteOffset}`;\n            return true;\n          })\n          .onDidDelete((info: DeleteValue) => {\n            // 在删除完成时，触发该回调\n            hilog.info(DOMAIN, TAG, BUNDLE + 'onDidDelete is triggering: ' + info.deleteValue + info.deleteOffset);\n            this.textStr8 = `onDidDelete is triggering: ${info.deleteValue} ${info.deleteOffset}`;\n          })\n          .onFocus(() => {\n            // 绑定通用事件，输入框获焦时触发该回调\n            hilog.info(DOMAIN, TAG, BUNDLE + 'onFocus is triggering');\n            this.textStr9 = `onFocus is triggering`;\n          })\n      }.width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(440424)/* ["default"] */.A) + "",
        width: "506",
        height: "770"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选中菜单",
      children: "选中菜单"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入框中的文字被选中时会弹出包含剪切、复制、翻译、分享的菜单。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TextInput:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 请将$r('app.string.show_selected_menu')替换为实际资源文件，在本示例中该资源文件的value值为\"这是一段文本，用来展示选中菜单\"\nTextInput({ text: $r('app.string.show_selected_menu') })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(586179)/* ["default"] */.A) + "",
        width: "1056",
        height: "409"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TextArea:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 请将$r('app.string.show_selected_menu')替换为实际资源文件，在本示例中该资源文件的value值为\"这是一段文本，用来展示选中菜单\"\nTextArea({ text: $r('app.string.show_selected_menu') })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(791611)/* ["default"] */.A) + "",
        width: "1062",
        height: "374"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "禁用系统服务类菜单",
      children: "禁用系统服务类菜单"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，支持使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-textmenucontroller/arkts-apis-uicontext-textmenucontroller#disablesystemservicemenuitems20",
        children: "disableSystemServiceMenuItems"
      }), "方法屏蔽文本选择菜单中的所有系统服务菜单项。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { TextMenuController } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct DisableSystemServiceMenuItem {\n  aboutToAppear(): void {\n    // 禁用所有系统服务菜单项\n    TextMenuController.disableSystemServiceMenuItems(true)\n  }\n\n  aboutToDisappear(): void {\n    // 页面消失时恢复系统服务菜单项\n    TextMenuController.disableSystemServiceMenuItems(false)\n  }\n\n  build() {\n    Row() {\n      Column() {\n        // 请将$r('app.string.ProhibitSelectMenu_content')替换为实际资源文件，在本示例中该资源文件的value值为\"这是一个TextInput，长按弹出文本选择菜单\"\n        TextInput({ text: $r('app.string.ProhibitSelectMenu_content') })\n          .height(60)\n          .fontStyle(FontStyle.Italic)\n          .fontWeight(FontWeight.Bold)\n          .textAlign(TextAlign.Center)\n          .caretStyle({ width: '4vp' })\n          .editMenuOptions({\n            onCreateMenu: (menuItems: Array<TextMenuItem>) => {\n              // menuItems不包含被屏蔽的系统菜单项\n              return menuItems\n            },\n            onMenuItemClick: (menuItem: TextMenuItem, textRange: TextRange) => {\n              return false\n            }\n          })\n      }.width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(386716)/* ["default"] */.A) + "",
        width: "315",
        height: "235"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，支持使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-textmenucontroller/arkts-apis-uicontext-textmenucontroller#disablemenuitems20",
        children: "disableMenuItems"
      }), "方法屏蔽文本选择菜单中指定的系统服务菜单项。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { TextMenuController } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct DisableMenuItem {\n  aboutToAppear(): void {\n    // 禁用搜索，翻译和AI帮写\n    TextMenuController.disableMenuItems([TextMenuItemId.SEARCH, TextMenuItemId.TRANSLATE, TextMenuItemId.AI_WRITER])\n  }\n\n  aboutToDisappear(): void {\n    // 页面消失时恢复系统服务菜单项\n    TextMenuController.disableMenuItems([])\n  }\n\n  build() {\n    Row() {\n      Column() {\n        // 请将$r('app.string.ProhibitSelectMenu_content')替换为实际资源文件，在本示例中该资源文件的value值为\"这是一个TextInput，长按弹出文本选择菜单\"\n        TextInput({ text: $r('app.string.ProhibitSelectMenu_content') })\n          .height(60)\n          .fontStyle(FontStyle.Italic)\n          .fontWeight(FontWeight.Bold)\n          .textAlign(TextAlign.Center)\n          .caretStyle({ width: '4vp' })\n          .editMenuOptions({\n            onCreateMenu: (menuItems: Array<TextMenuItem>) => {\n              // menuItems不包含搜索和翻译\n              return menuItems;\n            },\n            onMenuItemClick: (menuItem: TextMenuItem, textRange: TextRange) => {\n              return false\n            }\n          })\n      }.width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(911146)/* ["default"] */.A) + "",
        width: "720",
        height: "175"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自动填充",
      children: "自动填充"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["输入框可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#contenttype12",
        children: "contentType"
      }), "属性设置自动填充类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["支持的类型请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#contenttype12%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "ContentType"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 请将$r('app.string.Auto_Fill_PlaceHolder')替换为实际资源文件，在本示例中该资源文件的value值为\"输入你的邮箱...\"\nTextInput({ placeholder: $r('app.string.Auto_Fill_PlaceHolder') })\n  .width('95%')\n  .height(40)\n  .margin(20)\n  .contentType(ContentType.EMAIL_ADDRESS)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置属性",
      children: "设置属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置省略属性。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["输入框可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#ellipsismode18",
            children: "ellipsisMode"
          }), "属性设置省略位置。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ellipsisMode属性需要配合", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#textoverflow12",
            children: "textOverflow"
          }), "属性设置为TextOverflow.Ellipsis使用，单独设置ellipsisMode属性不生效。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 请将$r('app.string.Set_Omission_Property_textContent')替换为实际资源文件，在本示例中该资源文件的value值为\"这是一段文本，用来展示省略模式\"\nTextInput({ text: $r('app.string.Set_Omission_Property_textContent') })\n  .textOverflow(TextOverflow.Ellipsis)\n  .ellipsisMode(EllipsisMode.END)\n  .style(TextInputStyle.Inline)\n  .fontSize(30)\n  .margin(30)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(881866)/* ["default"] */.A) + "",
            width: "720",
            height: "171"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置文本描边属性。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 20开始，输入框可以通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#strokewidth20",
            children: "strokeWidth"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#strokecolor20",
            children: "strokeColor"
          }), "属性设置文本的描边宽度及颜色。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "TextInput({ text: 'Text with stroke' })\n  .width('100%')\n  .height(60)\n  .borderWidth(1)\n  .fontSize(40)\n  .strokeWidth(LengthMetrics.px(3.0))\n  .strokeColor(Color.Red)\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(895684)/* ["default"] */.A) + "",
            width: "270",
            height: "38"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置文本行间距",
      children: "设置文本行间距"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，支持通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#linespacing20",
        children: "lineSpacing"
      }), "设置文本的行间距。如果不配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#linespacingoptions20%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "LineSpacingOptions"
      }), "时，首行上方和尾行下方默认会有行间距。如果onlyBetweenLines设置为true时，行间距仅适用于行与行之间，首行上方无额外行间距。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TextArea({\n  text: 'The line spacing of this TextArea is set to 20_px, and the spacing is effective only between the lines.'\n})\n  .fontSize(22)\n  .lineSpacing(LengthMetrics.px(20), { onlyBetweenLines: true })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(475820)/* ["default"] */.A) + "",
        width: "278",
        height: "164"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "键盘避让",
      children: "键盘避让"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["键盘抬起后，具有滚动能力的容器组件在横竖屏切换时，才会生效键盘避让，若希望无滚动能力的容器组件也生效键盘避让，建议在组件外嵌套一层具有滚动能力的容器组件，比如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll",
        children: "Scroll"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
        children: "List"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid",
        children: "Grid"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct KeyboardAvoid {\n  placeHolderArr: string[] = ['1', '2', '3', '4', '5', '6', '7'];\n\n  build() {\n    Scroll() {\n      Column() {\n        ForEach(this.placeHolderArr, (placeholder: string) => {\n          TextInput({ placeholder: 'TextInput ' + placeholder })\n            .margin(30)\n            // ···\n        })\n      }\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(222946)/* ["default"] */.A) + "",
        width: "611",
        height: "269"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "光标避让",
      children: "光标避让"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-e/arkts-apis-uicontext-e#keyboardavoidmode11",
        children: "keyBoardAvoidMode"
      }), "枚举中的OFFSET和RESIZE在键盘抬起后，不支持二次避让。如果想要支持光标位置在点击或者通过接口设置变化后发生二次避让，可以考虑使用OFFSET_WITH_CARET和RESIZE_CARET替换原有的OFFSET和RESIZE模式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于滚动容器更推荐使用RESIZE_WITH_CARET，非滚动容器应该使用OFFSET_WITH_CARET。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport { window } from '@kit.ArkUI';\nimport { KeyboardAvoidMode } from '@kit.ArkUI';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Used in UIAbility\nonWindowStageCreate(windowStage: window.WindowStage): void {\n  // Main window is created, set main page for this ability\n  hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');\n\n  windowStage.loadContent('pages/Index', (err, data) => {\n    let keyboardAvoidMode = windowStage.getMainWindowSync().getUIContext().getKeyboardAvoidMode();\n    windowStage.getMainWindowSync().getUIContext().setKeyboardAvoidMode(KeyboardAvoidMode.OFFSET_WITH_CARET);\n    if (err.code) {\n      hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');\n      return;\n    }\n    hilog.info(0x0000, 'testTag', 'Succeeded in loading the content. Data: %{public}s', JSON.stringify(data) ?? '');\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct CursorAvoid {\n  @State caretPosition: number = 600;\n  areaController: TextAreaController = new TextAreaController();\n  text = 'Most of us compare ourselves with anyone we think is happier — a relative, someone we know a lot,' +\n    ' or someone we hardly know. As a result, what we do remember is anything that makes others happy, ' +\n    'anything that makes ourselves unhappy,' +\n    ' totally forgetting that there is something happy in our own life.\\\n    So the best way to destroy happiness is to look at something and focus on even the smallest flaw. ' +\n    'It is the smallest flaw that would make us complain. And it is the complaint that leads to us becoming unhappy.\\\n    If one chooses to be happy, he will be blessed; if he chooses to be unhappy, he will be cursed. ' +\n    'Happiness is just what you think will make you happy.' +\n    'Most of us compare ourselves with anyone we think is happier — a relative, someone we know a lot, ' +\n    'or someone we hardly know. As a result, what we do remember is anything that makes others happy, ' +\n    'anything that makes ourselves unhappy, totally forgetting that there is something happy in our own life.\\\n  ';\n\n  build() {\n    Scroll() {\n      Column() {\n        Row() {\n          Button('CaretPosition++: ' + this.caretPosition).onClick(() => {\n            this.caretPosition += 1;\n          }).fontSize(10)\n          Button('CaretPosition--: ' + this.caretPosition).onClick(() => {\n            this.caretPosition -= 1;\n          }).fontSize(10)\n          Button('SetCaretPosition: ').onClick(() => {\n            this.areaController.caretPosition(this.caretPosition);\n          }).fontSize(10)\n        }\n\n        TextArea({ text: this.text, controller: this.areaController })\n          .width('100%')\n          .fontSize('20fp')\n      }\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(626885)/* ["default"] */.A) + "",
        width: "511",
        height: "822"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "如何设置textarea的文本最少展示行数并自适应高度",
      children: "如何设置TextArea的文本最少展示行数并自适应高度"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "问题现象"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置TextArea的初始高度来控制最少文本展示行数，当输入文本超过初始高度时，TextArea的高度自适应。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "解决措施"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textarea/ts-basic-components-textarea#minlines20",
        children: "minLines"
      }), "（从API version 20开始），或者设置height为\"auto\"，并使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#constraintsize",
        children: "constraintSize"
      }), "自行计算高度。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { MeasureUtils } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct TextExample {\n  private textAreaPadding = 12;\n  private setMaxLines = 3;\n  private resourceManager = this.getUIContext().getHostContext()?.resourceManager;\n  // 请在resources\\base\\element\\string.json文件中配置name为'NormalQuestion_change'，value为非空字符串的资源\n  private changeText = this.resourceManager?.getStringByNameSync('NormalQuestion_change') as string;\n  @State fullText: string = this.changeText;\n  @State originText: string = this.changeText;\n  @State uiContext: UIContext = this.getUIContext();\n  @State uiContextMeasure: MeasureUtils = this.uiContext.getMeasureUtils();\n  textSize: SizeOptions = this.uiContextMeasure.measureTextSize({\n    textContent: this.originText,\n    fontSize: 18\n  });\n\n  build() {\n    Column() {\n      TextArea({ text: 'minLines: ' + this.fullText })\n        .fontSize(18)\n        .width(300)\n        .minLines(3)\n\n      Blank(50)\n\n      TextArea({ text: 'constraintSize: ' + this.fullText })\n        .fontSize(18)\n        .padding({ top: this.textAreaPadding, bottom: this.textAreaPadding })\n        .width(300)\n        .height('auto')\n        .constraintSize({\n          // 结合padding计算，设置至少显示this.setMaxLines行文本\n          // 若涉及适老化字号缩放，需要监听并调整高度\n          minHeight: this.textAreaPadding * 2 +\n            this.setMaxLines * this.getUIContext().px2vp(Number(this.textSize.height))\n        })\n\n      Blank(50)\n      // 请将$r('app.string.NormalQuestion_AddInput')替换为实际资源文件，在本示例中该资源文件的value值为\"增加输入\"\n      Button($r('app.string.NormalQuestion_AddInput'))\n        .onClick(() => {\n          this.fullText += this.changeText;\n        })\n    }\n    .justifyContent(FlexAlign.Center)\n    .width('100%')\n    .padding({ top: 30 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(99373)/* ["default"] */.A) + "",
        width: "392",
        height: "398"
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
386716(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798168-ca11f551212c2a76119af0d00ec0b255.gif");

},
213948(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
895684(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477819-2317fb34ebdb2391a466ce8e9ceacb3c.jpg");

},
626885(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957820-91c56b1d83ae79e24eb9b9f7c61a80ba.gif");

},
911146(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437863-f0a6d940d75ef4721b4e1d63fa4642d9.png");

},
791611(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477817-b6f8a5e6d0b10bded220967648864579.jpg");

},
438868(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
672343(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
210951(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
331497(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZcAAABQCAYAAADV/Di1AAAFB0lEQVR4nO3d23KbShCF4TUHQHr/l41gDvvCezCynaQi9QCy/6/KF1EliPiiFz0nXK21CgAAQ/7oGwAAfD+ECwDAHOECADBHuAAAzBEuAABzhAsAwFw84ktrrXLOabsKun3mnFv/3LTPAOAn+qoellI+1cZWV89QMw8Ll1KKQgh3n+eclXNWKeVT8ADAT7UNC+ecQggKIdw9kEtfB85R3JGbKHPOSikppfTHADnLLwsAjvCn+ui9V4xxDZz294+um4eES85Zv379Us757Sb+T99a6/pL8f59OojOBcBPtg2KnPNdzZTea+QwDJqm6a5+HqV7uJRS1v9oSknzPCvnrBCCSik9vxoAfhTnnEopijFqHMdDO5ldOpdSim63m1JKh7dqAPDdtZAZx1HjOB5Sd7uHy7Ismuf5roORGOoCgB4+TvDHGHW5XL5H59KCZJ5nzfNsfXkAwD9wzulyuSiEoJSSYuy/ULhb50KwAMA51Frlvdc0TbsEi9Rphz7BAgDn4b1XKUXzPGtZln2+0+pCrQEiWADgXNpqsba4qm0D6Tn3bRYu7cb3SkUAwGNaA9Bzkt90WKytCgMAnFdKqXsjYBYuy7KwjwUAXoD3XrfbrWsz8FS4bMfr5nn+dIgaAOB82tEx2/lx6/mXh8OlnWwsvbVYH08yBgCcUzvHcVmWtY5bdzEPh8u2S7ndbuvxzwQMAJxbrVUxRnnv17kX61Gnp4bFvPdKKX35DhYAwHm1mt1GnqxPUn5qWEwSk/gA8MJKKeu+F0tPRxXhAgCvrUe4PHzIDENgAPD62vSG+XUf/YfOuV2OEAAA9PPxbZZWCBcA+OFKKedZiizZr4sGABzjVOGyXsR4CRsAYD/t4GFLpAIAwBzhAgAw91S4sL8FAF6fc+48O/QBAPgdwgUAYO6pcBmGYX03MwDgNTnnFOPDB7Z86ek5F5YhA8Br69EgPH3kPu9wAYDX1t7HZenpHfp0LgDw2kII59tEGWOkcwGAF2Y93yI9ceR+61raDwEDAK+nBctp9rm08blaq4ZhMLshAMB+xnHscgjx0+HinNM4jmvq0cEAwLnVWlVrVYxxHX2yZnZF9rwAwOvw3mscx37Xt7rQMAxM7gPAixiGoetqX9Mrb1OQ/S8AcA6tFreRpRBC97lys3CptSqEoOv1Kom3VALAWbSH/VaXp2nq3gCYhov0tqxtmiY2VwLAycQYdblcFEKQ1HcBllkCbMNkGIb15qW31Gw/AID+PtbcdjjldsNkz5rcpb2otepyuWiapnXJGwDgONfrVcMw3E1Z9AwXVztV/rYseVkWLcuiUgqT/ACwk1ZvY4x3exH30u3bWiIOw7CuSiBYAGAf7QF/HMe7DmWvOtytc2naGWS1VqWUNM+zSikKISjn/H4jzMcAwD/blvBWa51zmqZpnV85YoN793CR7tdY11q1LIvmeV4/5+BLAHjctpZuQ6VNRxzx8L5LuEjvZ9lszyRblkU5Z6WU9rgFAPh22iow7/16DNf2gf6oUaHdwuVvcs4qpSilxAozAPiN9nr5GGOXN0haOU24AAC+D/vXjz3o49k3ZB4AfLatkWftWiQ6FwBABxwABgAwR7gAAMwRLgAAc4QLAMAc4QIAMEe4AADMES4AAHOECwDAHOECADBHuAAAzBEuAABzhAsAwBzhAgAwR7gAAMwRLgAAc4QLAMAc4QIAMEe4AADMES4AAHP/AadMefAw4IhiAAAAAElFTkSuQmCC");

},
99373(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477821-486dd94bb6a4d61182c749f2666f4d40.gif");

},
214130(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
586179(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957816-d1ec420503b9cdeb7a039e9a612a0e32.jpg");

},
242009(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
395450(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
257094(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477809-e8877252caf253c22c48186bc8af4e28.png");

},
33898(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798166-590d15aba4ccee05e163da0fcb63632e.png");

},
532693(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
446090(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437859-0718aff1c621452ef79436b406974f3f.gif");

},
488754(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
475820(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798170-0b736c8580f55c92e06051bf39fd4cef.jpg");

},
3413(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477811-86ab10a94dba149630744b953b9345c8.png");

},
881866(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957818-ce5270c9ed6bbe23927c37fb00b9480c.jpg");

},
440424(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437861-6d26a1deed467df300e108312182f2d6.gif");

},
222946(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437865-06e4b53e0fe7f3fd07d149bfdf1a7eea.gif");

},
399306(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
93444(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
581817(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437857-db71debfdea1b8af15f0235c5bc04d76.png");

},
186389(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798164-68bb0bb4a9d91af3a32dd6c1b83582cb.gif");

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