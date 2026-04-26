"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["6957"], {
482007(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_arkts_arkui_arkts_dep_js_apis_prompt_js_apis_prompt_md_432_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-arkts-arkui-arkts-dep-js-apis-prompt-js-apis-prompt-md-432.json
var site_docs_ref_arkui_api_arkui_arkts_arkui_arkts_dep_js_apis_prompt_js_apis_prompt_md_432_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-arkts/arkui-arkts-dep/js-apis-prompt/js-apis-prompt","title":"@ohos.prompt (弹窗)","description":"创建并显示文本提示框、对话框和操作菜单。","source":"@site/docs-ref/arkui-api/arkui-arkts/arkui-arkts-dep/js-apis-prompt/js-apis-prompt.md","sourceDirName":"arkui-api/arkui-arkts/arkui-arkts-dep/js-apis-prompt","slug":"/arkui-api/arkui-arkts/arkui-arkts-dep/js-apis-prompt/js-apis-prompt","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/arkui-arkts-dep/js-apis-prompt/js-apis-prompt","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"@ohos.prompt (弹窗)","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-prompt","kit":"应用框架","last_updated":"2026-04-22","slug":"js-apis-prompt"},"sidebar":"ref","previous":{"title":"@ohos.screenshot (屏幕截图)","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/display-manager-api/js-apis-screenshot/js-apis-screenshot"},"next":{"title":"@system.app (应用上下文)","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/arkui-arkts-dep/js-apis-system-app/js-apis-system-app"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-arkts/arkui-arkts-dep/js-apis-prompt/js-apis-prompt.md


const frontMatter = {
	title: '@ohos.prompt (弹窗)',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-prompt',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-apis-prompt'
};
const contentTitle = '@ohos.prompt (弹窗)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "prompt.showToast",
  "id": "promptshowtoast",
  "level": 2
}, {
  "value": "ShowToastOptions",
  "id": "showtoastoptions",
  "level": 2
}, {
  "value": "prompt.showDialog",
  "id": "promptshowdialog",
  "level": 2
}, {
  "value": "prompt.showDialog",
  "id": "promptshowdialog-1",
  "level": 2
}, {
  "value": "ShowDialogOptions",
  "id": "showdialogoptions",
  "level": 2
}, {
  "value": "ShowDialogSuccessResponse",
  "id": "showdialogsuccessresponse",
  "level": 2
}, {
  "value": "prompt.showActionMenu",
  "id": "promptshowactionmenu",
  "level": 2
}, {
  "value": "prompt.showActionMenu",
  "id": "promptshowactionmenu-1",
  "level": 2
}, {
  "value": "ActionMenuOptions",
  "id": "actionmenuoptions",
  "level": 2
}, {
  "value": "ActionMenuSuccessResponse",
  "id": "actionmenusuccessresponse",
  "level": 2
}, {
  "value": "Button",
  "id": "button",
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
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ohosprompt-弹窗",
        children: "@ohos.prompt (弹窗)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建并显示文本提示框、对话框和操作菜单。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(343679)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 9 开始，该接口不再维护，推荐使用新接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-promptaction/js-apis-promptaction",
        children: "@ohos.promptAction (弹窗)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 8开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import prompt from '@ohos.prompt'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "promptshowtoast",
      children: "prompt.showToast"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "showToast(options: ShowToastOptions): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建并显示文本提示框。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#showtoastoptions",
              children: "ShowToastOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本弹窗选项。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import prompt from '@ohos.prompt'\nprompt.showToast({\n  message: 'Message Info',\n    duration: 2000\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(767797)/* ["default"] */.A) + "",
        width: "275",
        height: "361"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "showtoastoptions",
      children: "ShowToastOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文本提示框的选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "message"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "显示的文本信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "duration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认值1500ms，取值区间：1500ms-10000ms。若小于1500ms则取默认值，若大于10000ms则取上限值10000ms。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bottom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "promptshowdialog",
      children: "prompt.showDialog"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "showDialog(options: ShowDialogOptions): Promise<ShowDialogSuccessResponse>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建并显示对话框，对话框响应后同步返回结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#showdialogoptions",
              children: "ShowDialogOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对话框选项。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#showdialogsuccessresponse",
              children: "ShowDialogSuccessResponse"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对话框响应结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import prompt from '@ohos.prompt'\nprompt.showDialog({\n  title: 'Title Info',\n  message: 'Message Info',\n  buttons: [\n    {\n      text: 'button1',\n      color: '#000000'\n    },\n    {\n      text: 'button2',\n      color: '#000000'\n    }\n  ],\n})\n  .then(data => {\n    console.info('showDialog success, click button: ' + data.index);\n  })\n  .catch((err:Error) => {\n    console.info('showDialog error: ' + err);\n  })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(88372)/* ["default"] */.A) + "",
        width: "338",
        height: "744"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "promptshowdialog-1",
      children: "prompt.showDialog"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "showDialog(options: ShowDialogOptions, callback: AsyncCallback<ShowDialogSuccessResponse>):void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建并显示对话框，对话框响应结果异步返回。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#showdialogoptions",
              children: "ShowDialogOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面显示对话框信息描述。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AsyncCallback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#showdialogsuccessresponse",
              children: "ShowDialogSuccessResponse"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对话框响应结果回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import prompt from '@ohos.prompt'\nprompt.showDialog({\n  title: 'showDialog Title Info',\n  message: 'Message Info',\n  buttons: [\n    {\n      text: 'button1',\n      color: '#000000'\n    },\n    {\n      text: 'button2',\n      color: '#000000'\n    }\n  ]\n}, (err, data) => {\n  if (err) {\n    console.info('showDialog err: ' + err);\n    return;\n  }\n  console.info('showDialog success callback, click button: ' + data.index);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(148690)/* ["default"] */.A) + "",
        width: "510",
        height: "743"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "showdialogoptions",
      children: "ShowDialogOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对话框的选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "title"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标题文本。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "message"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内容文本。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buttons"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["[", (0,jsx_runtime.jsx)(_components.a, {
              href: "#button",
              children: "Button"
            }), ",", (0,jsx_runtime.jsx)(_components.a, {
              href: "#button",
              children: "Button"
            }), "?,", (0,jsx_runtime.jsx)(_components.a, {
              href: "#button",
              children: "Button"
            }), "?]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对话框中按钮的数组，结构为：{text:'button', color: '#666666'}，支持1-3个按钮。其中第一个为positiveButton，第二个为negativeButton，第三个为neutralButton。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "showdialogsuccessresponse",
      children: "ShowDialogSuccessResponse"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对话框的响应结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中按钮在buttons数组中的索引。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "promptshowactionmenu",
      children: "prompt.showActionMenu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "showActionMenu(options: ActionMenuOptions, callback: AsyncCallback<ActionMenuSuccessResponse>):void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建并显示操作菜单，菜单响应结果异步返回。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " 以下各项对应的系统能力均为SystemCapability.ArkUI.ArkUI.Full。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#actionmenuoptions",
              children: "ActionMenuOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作菜单选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AsyncCallback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#actionmenusuccessresponse",
              children: "ActionMenuSuccessResponse"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "菜单响应结果回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import prompt from '@ohos.prompt'\nprompt.showActionMenu({\n  title: 'Title Info',\n  buttons: [\n    {\n      text: 'item1',\n      color: '#666666'\n    },\n    {\n      text: 'item2',\n      color: '#000000'\n    },\n  ]\n}, (err, data) => {\n  if (err) {\n    console.info('showActionMenu err: ' + err);\n    return;\n  }\n  console.info('showActionMenu success callback, click button: ' + data.index);\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(52297)/* ["default"] */.A) + "",
        width: "338",
        height: "744"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "promptshowactionmenu-1",
      children: "prompt.showActionMenu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "showActionMenu(options: ActionMenuOptions): Promise<ActionMenuSuccessResponse>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建并显示操作菜单，菜单响应后同步返回结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#actionmenuoptions",
              children: "ActionMenuOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "操作菜单选项。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#actionmenusuccessresponse",
              children: "ActionMenuSuccessResponse"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "菜单响应结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import prompt from '@ohos.prompt'\nprompt.showActionMenu({\n  title: 'showActionMenu Title Info',\n  buttons: [\n    {\n      text: 'item1',\n      color: '#666666'\n    },\n    {\n      text: 'item2',\n      color: '#000000'\n    },\n  ]\n})\n  .then(data => {\n    console.info('showActionMenu success, click button: ' + data.index);\n  })\n  .catch((err:Error) => {\n    console.info('showActionMenu error: ' + err);\n  })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(837246)/* ["default"] */.A) + "",
        width: "338",
        height: "744"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "actionmenuoptions",
      children: "ActionMenuOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "操作菜单的选项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "title"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标题文本。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buttons"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["[", (0,jsx_runtime.jsx)(_components.a, {
              href: "#button",
              children: "Button"
            }), ",", (0,jsx_runtime.jsx)(_components.a, {
              href: "#button",
              children: "Button"
            }), "?,", (0,jsx_runtime.jsx)(_components.a, {
              href: "#button",
              children: "Button"
            }), "?,", (0,jsx_runtime.jsx)(_components.a, {
              href: "#button",
              children: "Button"
            }), "?,", (0,jsx_runtime.jsx)(_components.a, {
              href: "#button",
              children: "Button"
            }), "?,", (0,jsx_runtime.jsx)(_components.a, {
              href: "#button",
              children: "Button"
            }), "?]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "菜单中菜单项按钮的数组，结构为：{text:'button', color: '#666666'}，支持1-6个按钮。大于6个按钮时弹窗不显示。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "actionmenusuccessresponse",
      children: "ActionMenuSuccessResponse"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "操作菜单的响应结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中按钮在buttons数组中的索引，从0开始。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "button",
      children: "Button"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "菜单中的菜单项按钮。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按钮文本内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "按钮文本颜色。"
          })]
        })]
      })]
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
88372(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799776-4a6d76555609701e8d9e7bc9fcfbba97.gif");

},
767797(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,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");

},
52297(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799778-585c89a523625d4496b0430229ab1f39.gif");

},
148690(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439471-6dd166686c2e4fc46d9ca5409d4a6dd3.gif");

},
343679(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
837246(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959428-76fd49f519928913bac639c24784ff51.gif");

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