"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["829468"], {
619824(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_manage_page_interaction_web_docking_softkeyboard_web_docking_softkeyboard_md_2ac_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-manage-page-interaction-web-docking-softkeyboard-web-docking-softkeyboard-md-2ac.json
var site_docs_arkweb_web_manage_page_interaction_web_docking_softkeyboard_web_docking_softkeyboard_md_2ac_namespaceObject = JSON.parse('{"id":"arkweb/web-manage-page-interaction/web-docking-softkeyboard/web-docking-softkeyboard","title":"Web组件对接软键盘","description":"开发者能够通过Web组件对接软键盘，来处理系统软键盘的显示与交互问题，同时实现软键盘的自定义功能。主要有以下场景：","source":"@site/docs/arkweb/web-manage-page-interaction/web-docking-softkeyboard/web-docking-softkeyboard.md","sourceDirName":"arkweb/web-manage-page-interaction/web-docking-softkeyboard","slug":"/arkweb/web-manage-page-interaction/web-docking-softkeyboard/","permalink":"/harmonyos-docs-site/arkweb/web-manage-page-interaction/web-docking-softkeyboard/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Web组件对接软键盘","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-docking-softkeyboard","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Web页面显示内容滚动","permalink":"/harmonyos-docs-site/arkweb/web-manage-page-interaction/web-content-scrolling/"},"next":{"title":"Web组件焦点管理","permalink":"/harmonyos-docs-site/arkweb/web-manage-page-interaction/web-focus/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-manage-page-interaction/web-docking-softkeyboard/web-docking-softkeyboard.md


const frontMatter = {
	title: 'Web组件对接软键盘',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-docking-softkeyboard',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'Web组件对接软键盘';

const assets = {

};



const toc = [{
  "value": "Web页面输入框输入与软键盘交互的W3C标准支持",
  "id": "web页面输入框输入与软键盘交互的w3c标准支持",
  "level": 2
}, {
  "value": "软键盘自动弹出",
  "id": "软键盘自动弹出",
  "level": 2
}, {
  "value": "设置软键盘避让模式",
  "id": "设置软键盘避让模式",
  "level": 2
}, {
  "value": "拦截系统软键盘与自定义软键盘输入",
  "id": "拦截系统软键盘与自定义软键盘输入",
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
        id: "web组件对接软键盘",
        children: "Web组件对接软键盘"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者能够通过Web组件对接软键盘，来处理系统软键盘的显示与交互问题，同时实现软键盘的自定义功能。主要有以下场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "拉起系统软键盘输入文字：点击网页输入框时，屏幕下方将弹出系统默认的软键盘。开发者可以通过软键盘输入文字，输入的内容会显示在输入框中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自定义系统软键盘的回车键类型：设置不同的回车键类型，例如：确认、下一个和提交。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "软键盘避让：在移动设备上，由于输入法通常显示在屏幕下方区域，应用可设置不同的Web页面软键盘避让模式，来避让软键盘。例如：平移、调整大小和不避让。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自定义软键盘输入：在移动设备上，可以使用自绘制输入法在Web页面输入，以此替代系统软键盘。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "web页面输入框输入与软键盘交互的w3c标准支持",
      children: "Web页面输入框输入与软键盘交互的W3C标准支持"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为支持Web页面与系统软键盘、自定义软键盘等的良好交互，ArkWeb遵循并实现了W3C规范中的以下输入控制属性："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "type属性"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "type属性定义了input元素的类型，影响输入的验证、显示方式和键盘类型。常见的type值包括："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "type值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "text"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "默认值。普通文本输入"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "number"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "数字输入"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "email"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "电子邮件地址输入"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "password"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "密码输入"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "tel"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "电话号码输入"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "url"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "URL输入"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "date"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "日期选择器"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "time"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "时间选择器"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "checkbox"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "复选框"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "radio"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "单选按钮"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "file"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "文件上传"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "submit"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "提交按钮"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "reset"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "重置按钮"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "button"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "普通按钮"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "inputmode属性"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "inputmode属性用于配置输入法类型，默认值：text。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "inputmode"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "decimal"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "只显示数字键盘，通常还有一个逗号键。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "email"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "文本键盘，键通常用于电子邮件地址，如[@]。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "none"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "不应出现键盘。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "numeric"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "只显示数字键盘。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "search"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "文本键盘，[enter]键通常显示为[go]。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "tel"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "只显示数字键盘，通常还有[+]、[*]和[#]键。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "text"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "默认文本键盘。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "url"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "文本键盘，键通常用于网址，如[.]和[/]，以及特殊的[.com]键，或者其他通常用于本地设置的域名结束符。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "enterkeyhint属性"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "enterkeyhint属性用于指定移动设备虚拟键盘上回车键的显示方式。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "enterkeyhint值"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "enter"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "显示默认的回车键"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "done"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示输入完成"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "go"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "表示跳转或执行"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "next"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "进入下一个输入字段"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "previous"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "返回上一个输入字段"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "search"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "执行搜索"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "send"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "发送信息"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(983762)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击网页输入框时，屏幕下方将弹出系统默认的软键盘，用户可以进行文字输入。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type属性影响键盘显示、输入验证和元素外观。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "inputmode优化移动设备键盘输入体验，不影响基本行为或验证。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "软键盘自动弹出",
      children: "软键盘自动弹出"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为提升用户体验，可以在页面完成加载后，输入框自动获焦并弹出软键盘。通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ime-api/ime-arkts/js-apis-inputmethod/js-apis-inputmethod#showtextinput10",
        children: "showTextInput()"
      }), "设置软键盘自动弹出功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.html -->\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>测试网页</title>\n  </head>\n  <body>\n    <h1>DEMO</h1>\n    <input type=\"text\" id=\"input_a\">\n  </body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { webview } from '@kit.ArkWeb';\nimport { inputMethod } from '@kit.IMEKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  build() {\n    Column() {\n      Web({ src: $rawfile(\"index.html\"), controller: this.controller})\n        .onPageEnd(() => {\n          this.controller.runJavaScript(`document.getElementById('input_a').focus()`).then(() => {\n            setTimeout(() => {\n              inputMethod.getController().showTextInput();\n            }, 10);\n          });\n        });\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置软键盘避让模式",
      children: "设置软键盘避让模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在移动设备上，支持设置Web页面的软键盘避让模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在应用代码中设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext",
          children: "UIContext"
        }), "的软键盘避让模式", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-expand-safe-area/ts-universal-attributes-expand-safe-area#setkeyboardavoidmode11",
          children: "setKeyboardAvoidMode()"
        }), "。ArkWeb组件支持Resize和Offset两种模式。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resize模式下，应用窗口高度可缩小避开软键盘，ArkWeb组件跟随ArkUI重新布局。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Offset模式下（以及默认模式），应用窗口高度不变，ArkWeb组件根据自身的避让模式进行避让。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（1）设置UIContext的软键盘避让模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { KeyboardAvoidMode } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n// ···\nonWindowStageCreate(windowStage: window.WindowStage) {\n  hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');\n\n  windowStage.loadContent('pages/Index', (err, data) => {\n    let keyboardAvoidMode = windowStage.getMainWindowSync().getUIContext().getKeyboardAvoidMode();\n    // 设置虚拟键盘抬起时压缩页面大小为减去键盘的高度\n  windowStage.getMainWindowSync().getUIContext().setKeyboardAvoidMode(KeyboardAvoidMode.RESIZE);\n    if (err.code) {\n      hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');\n      return;\n    }\n    hilog.info(0x0000, 'testTag', 'Succeeded in loading the content. Data: %{public}s', JSON.stringify(data) ?? '');\n  });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（2）在Web组件中调起软键盘。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.html -->\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>测试网页</title>\n  </head>\n  <body>\n    <h1>DEMO</h1>\n    <input type=\"text\" id=\"input_a\">\n  </body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct KeyboardAvoidExample {\n  controller: webview.WebviewController = new webview.WebviewController();\n  build() {\n    Column() {\n      Row().height(\"50%\").width(\"100%\").backgroundColor(Color.Gray)\n      Web({ src: $rawfile(\"index.html\"),controller: this.controller})\n      Text(\"I can see the bottom of the page\").width(\"100%\").textAlign(TextAlign.Center).backgroundColor(Color.Pink).layoutWeight(1)\n    }.width('100%').height(\"100%\")\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkWeb组件将跟随ArkUI重新布局，效果如图1和图2所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " Web组件网页默认软键盘避让模式"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(886966)/* ["default"] */.A) + "",
        width: "271",
        height: "597"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " Web组件网页跟随ArkUI软键盘避让模式"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(924265)/* ["default"] */.A) + "",
        width: "273",
        height: "598"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["2.在UIContext的键盘避让模式为Offset模式时，应用可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-e/arkts-basic-components-web-e#webkeyboardavoidmode12",
        children: "WebKeyboardAvoidMode()"
      }), "设置ArkWeb组件的键盘避让模式。Web组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-e/arkts-basic-components-web-e#webkeyboardavoidmode12",
        children: "WebKeyboardAvoidMode()"
      }), "接口优先级高于W3C侧virtualKeyboard.overlayContent。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RESIZE_VISUAL：仅调整可视视口的大小，而不调整布局视口的大小。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RESIZE_CONTENT：调整可视视口和布局视口的大小。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OVERLAYS_CONTENT：不调整任何视口的大小，获焦input元素没有滚动到可视区域的行为。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(318265)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可视视口指用户正在看到的网站的区域，该区域的宽度等于移动设备的浏览器窗口的宽度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "布局视口指网页本身的宽度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用代码中设置ArkWeb的软键盘避让模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Index.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct KeyboardAvoidExample {\n  controller: webview.WebviewController = new webview.WebviewController();\n  build() {\n    Column() {\n      Row().height('50%').width('100%').backgroundColor(Color.Gray)\n      Web({ src: $rawfile('index.html'),controller: this.controller})\n        .keyboardAvoidMode(WebKeyboardAvoidMode.OVERLAYS_CONTENT) // 此时ArkWeb组件不会调整任何视口的大小。\n      Text('I can see the bottom of the page')\n        .width('100%')\n        .textAlign(TextAlign.Center)\n        .backgroundColor(Color.Pink)\n        .layoutWeight(1)\n    }.width('100%').height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkWeb组件根据避让模式进行避让，效果见图3。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), " Web组件网页自身软键盘避让模式"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(650976)/* ["default"] */.A) + "",
        width: "271",
        height: "601"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["3.在软键盘弹出时，为使Web组件不发生避让行为，可通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-expand-safe-area/ts-universal-attributes-expand-safe-area#expandsafearea",
        children: "expandSafeArea()"
      }), "设置Web组件扩展安全区域。更多详细示例可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkweb/web-process-page-content/web-safe-area-insets",
        children: "网页中安全区域计算和避让适配"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .width('100%').height('100%')\n        .expandSafeArea([SafeAreaType.KEYBOARD, SafeAreaType.SYSTEM])\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "与其他Web组件行为的交互场景："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "交叉场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "规格"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "同层渲染"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同层Web：软键盘避让方式与普通场景相同。  同层系统组件：由ArkUI负责软键盘避让模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "离屏创建组件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认使用与非离屏创建一致的软键盘避让模式，在添加至组件树前设置其他避让模式即可生效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "customDialog"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "customDialog自身避让。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "折叠屏"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "软键盘避让行为与普通场景行为一致。屏幕软键盘将根据屏幕开合状态进行调整。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "软键盘托管"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "软键盘避让行为与普通场景行为一致。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web嵌套滚动"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在嵌套滚动场景下，建议不要使用Web软键盘避让，包括RESIZE_VISUAL和RESIZE_CONTENT。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "拦截系统软键盘与自定义软键盘输入",
      children: "拦截系统软键盘与自定义软键盘输入"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用可以通过监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#oninterceptkeyboardattach12",
        children: "onInterceptKeyboardAttach"
      }), "回调，在软键盘拉起前，控制软键盘的显示，包括系统默认软键盘、带有特定Enter键的软键盘，或完全自定义软键盘。借助这一功能，开发者能够实现对软键盘的灵活管理。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用系统默认软键盘"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用带有定制Enter键的系统软键盘"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用完全由应用程序自定义的软键盘"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  // Index.ets\n  import { webview } from '@kit.ArkWeb';\n  import { inputMethodEngine } from '@kit.IMEKit';\n\n  @Entry\n  @Component\n  struct WebComponent {\n    controller: webview.WebviewController = new webview.WebviewController();\n    webKeyboardController: WebKeyboardController = new WebKeyboardController();\n    inputAttributeMap: Map<string, number> = new Map([\n        ['UNSPECIFIED', inputMethodEngine.ENTER_KEY_TYPE_UNSPECIFIED],\n        ['GO', inputMethodEngine.ENTER_KEY_TYPE_GO],\n        ['SEARCH', inputMethodEngine.ENTER_KEY_TYPE_SEARCH],\n        ['SEND', inputMethodEngine.ENTER_KEY_TYPE_SEND],\n        ['NEXT', inputMethodEngine.ENTER_KEY_TYPE_NEXT],\n        ['DONE', inputMethodEngine.ENTER_KEY_TYPE_DONE],\n        ['PREVIOUS', inputMethodEngine.ENTER_KEY_TYPE_PREVIOUS]\n      ])\n\n      /**\n       * 自定义键盘组件Builder\n       */\n      @Builder\n      customKeyboardBuilder() {\n          // 这里实现自定义键盘组件，对接WebKeyboardController实现输入、删除、关闭等操作。\n        Row() {\n          Text(\"完成\")\n            .fontSize(20)\n            .fontColor(Color.Blue)\n            .onClick(() => {\n              this.webKeyboardController.close();\n            })\n          // 插入字符。\n          Button(\"insertText\").onClick(() => {\n            this.webKeyboardController.insertText('insert ');\n          }).margin({\n            bottom: 200,\n          })\n          // 从后往前删除length参数指定长度的字符。\n          Button(\"deleteForward\").onClick(() => {\n            this.webKeyboardController.deleteForward(1);\n          }).margin({\n            bottom: 200,\n          })\n          // 从前往后删除length参数指定长度的字符。\n          Button(\"deleteBackward\").onClick(() => {\n            this.webKeyboardController.deleteBackward(1);\n          }).margin({\n            left: -220,\n          })\n          // 插入功能按键。\n          Button(\"sendFunctionKey\").onClick(() => {\n            this.webKeyboardController.sendFunctionKey(6);\n          })\n        }\n      }\n\n    build() {\n      Column() {\n        Web({ src: $rawfile('index.html'), controller: this.controller })\n        .onInterceptKeyboardAttach((KeyboardCallbackInfo) => {\n          // option初始化，默认使用系统默认键盘\n          let option: WebKeyboardOptions = {\n            useSystemKeyboard: true,\n          };\n          if (!KeyboardCallbackInfo) {\n            return option;\n          }\n\n          // 保存WebKeyboardController，使用自定义键盘时候，需要使用该handler控制输入、删除、软键盘关闭等行为\n          this.webKeyboardController = KeyboardCallbackInfo.controller;\n          let attributes: Record<string, string> = KeyboardCallbackInfo.attributes;\n          // 遍历attributes\n          let attributeKeys = Object.keys(attributes);\n          for (let i = 0; i < attributeKeys.length; i++) {\n            console.info('WebCustomKeyboard key = ' + attributeKeys[i] + ', value = ' + attributes[attributeKeys[i]]);\n          }\n\n          if (attributes) {\n            if (attributes['data-keyboard'] == 'customKeyboard') {\n              // 根据html可编辑元素的属性，判断使用不同的软键盘，例如这里如果属性包含有data-keyboard，且值为customKeyboard，则使用自定义键盘\n              console.info('WebCustomKeyboard use custom keyboard');\n              option.useSystemKeyboard = false;\n              // 设置自定义键盘builder\n              option.customKeyboard = () => {\n                this.customKeyboardBuilder()\n              }\n              return option;\n            }\n\n            if (attributes['keyboard-return'] != undefined) {\n              // 根据html可编辑元素的属性，判断使用不同的软键盘，例如这里如果属性包含有keyboard-return，使用系统键盘，并且指定系统软键盘enterKey类型\n              option.useSystemKeyboard = true;\n              let enterKeyType: number | undefined = this.inputAttributeMap.get(attributes['keyboard-return']);\n              if (enterKeyType != undefined) {\n                option.enterKeyType = enterKeyType;\n              }\n              return option;\n            }\n          }\n\n          return option;\n        })\n      }\n    }\n  }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.html -->\n    <!DOCTYPE html>\n    <html>\n\n    <head>\n        <meta charset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width,minimum-scale=1.0,maximum-scale=1.0\">\n    </head>\n\n    <body>\n\n    <p style=\"font-size:12px\">input标签，原有默认行为：</p>\n    <input type=\"text\" style=\"width: 300px; height: 20px\"><br>\n    <hr style=\"height:2px;border-width:0;color:gray;background-color:gray\">\n\n    <p style=\"font-size:12px\">input标签，系统键盘自定义enterKeyType属性 enter key UNSPECIFIED：</p>\n    <input type=\"text\" keyboard-return=\"UNSPECIFIED\" style=\"width: 300px; height: 20px\"><br>\n    <hr style=\"height:2px;border-width:0;color:gray;background-color:gray\">\n\n    <p style=\"font-size:12px\">input标签，系统键盘自定义enterKeyType属性 enter key GO：</p>\n    <input type=\"text\" keyboard-return=\"GO\" style=\"width: 300px; height: 20px\"><br>\n    <hr style=\"height:2px;border-width:0;color:gray;background-color:gray\">\n\n    <p style=\"font-size:12px\">input标签，系统键盘自定义enterKeyType属性 enter key SEARCH：</p>\n    <input type=\"text\" keyboard-return=\"SEARCH\" style=\"width: 300px; height: 20px\"><br>\n    <hr style=\"height:2px;border-width:0;color:gray;background-color:gray\">\n\n    <p style=\"font-size:12px\">input标签，系统键盘自定义enterKeyType属性 enter key SEND：</p>\n    <input type=\"text\" keyboard-return=\"SEND\" style=\"width: 300px; height: 20px\"><br>\n    <hr style=\"height:2px;border-width:0;color:gray;background-color:gray\">\n\n    <p style=\"font-size:12px\">input标签，系统键盘自定义enterKeyType属性 enter key NEXT：</p>\n    <input type=\"text\" keyboard-return=\"NEXT\" style=\"width: 300px; height: 20px\"><br>\n    <hr style=\"height:2px;border-width:0;color:gray;background-color:gray\">\n\n    <p style=\"font-size:12px\">input标签，系统键盘自定义enterKeyType属性 enter key DONE：</p>\n    <input type=\"text\" keyboard-return=\"DONE\" style=\"width: 300px; height: 20px\"><br>\n    <hr style=\"height:2px;border-width:0;color:gray;background-color:gray\">\n\n    <p style=\"font-size:12px\">input标签，系统键盘自定义enterKeyType属性 enter key PREVIOUS：</p>\n    <input type=\"text\" keyboard-return=\"PREVIOUS\" style=\"width: 300px; height: 20px\"><br>\n    <hr style=\"height:2px;border-width:0;color:gray;background-color:gray\">\n\n    <p style=\"font-size:12px\">input标签，应用自定义键盘：</p>\n    <input type=\"text\" data-keyboard=\"customKeyboard\" style=\"width: 300px; height: 20px\"><br>\n\n    </body>\n\n    </html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkWeb自定义键盘的示例效果如图4、图5和图6所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图4"
        })
      }), " ArkWeb自定义键盘数字键盘"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(983430)/* ["default"] */.A) + "",
        width: "270",
        height: "603"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图5"
        })
      }), " ArkWeb自定义键盘字母键盘"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(479869)/* ["default"] */.A) + "",
        width: "272",
        height: "602"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图6"
        })
      }), " ArkWeb自定义键盘符号键盘"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(182445)/* ["default"] */.A) + "",
        width: "272",
        height: "598"
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
650976(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798568-0720410b26e103809be395b1d18dbc18.png");

},
318265(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
924265(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478217-cfc3ecce8151fc7db753c2bf1aefbaac.png");

},
182445(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478219-45c0ffa6b18c24680cae08f55cd51df7.png");

},
886966(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958216-45bfaa70286554ed2e3da7a0a96417be.png");

},
983430(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438263-b274d1ad0f378726fabcaa21c74f014a.png");

},
983762(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
479869(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958218-785dc9711701309c3ddad2fb8535bd36.png");

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