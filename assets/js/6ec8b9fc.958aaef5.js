"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["25580"], {
290028(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_text_and_input_ts_basic_components_search_ts_basic_components_search_md_6ec_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-text-and-input-ts-basic-components-search-ts-basic-components-search-md-6ec.json
var site_docs_ref_arkui_api_arkui_declarative_comp_text_and_input_ts_basic_components_search_ts_basic_components_search_md_6ec_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search/ts-basic-components-search","title":"Search","description":"搜索框组件，适用于浏览器的搜索内容输入框等应用场景。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search/ts-basic-components-search.md","sourceDirName":"arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search","slug":"/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search/ts-basic-components-search","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search/ts-basic-components-search","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Search","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-search","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-basic-components-search"},"sidebar":"ref","previous":{"title":"RichEditor","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor"},"next":{"title":"Span","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-span/ts-basic-components-span"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search/ts-basic-components-search.md


const frontMatter = {
	title: 'Search',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-search',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-basic-components-search'
};
const contentTitle = 'Search';

const assets = {

};



const toc = [{
  "value": "子组件",
  "id": "子组件",
  "level": 2
}, {
  "value": "接口",
  "id": "接口",
  "level": 2
}, {
  "value": "SearchOptions18+对象说明",
  "id": "searchoptions18对象说明",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "searchButton",
  "id": "searchbutton",
  "level": 3
}, {
  "value": "placeholderColor",
  "id": "placeholdercolor",
  "level": 3
}, {
  "value": "placeholderFont",
  "id": "placeholderfont",
  "level": 3
}, {
  "value": "textFont",
  "id": "textfont",
  "level": 3
}, {
  "value": "textAlign9+",
  "id": "textalign9",
  "level": 3
}, {
  "value": "textDirection23+",
  "id": "textdirection23",
  "level": 3
}, {
  "value": "copyOption9+",
  "id": "copyoption9",
  "level": 3
}, {
  "value": "searchIcon10+",
  "id": "searchicon10",
  "level": 3
}, {
  "value": "cancelButton10+",
  "id": "cancelbutton10",
  "level": 3
}, {
  "value": "fontColor10+",
  "id": "fontcolor10",
  "level": 3
}, {
  "value": "caretStyle10+",
  "id": "caretstyle10",
  "level": 3
}, {
  "value": "enableKeyboardOnFocus10+",
  "id": "enablekeyboardonfocus10",
  "level": 3
}, {
  "value": "selectionMenuHidden10+",
  "id": "selectionmenuhidden10",
  "level": 3
}, {
  "value": "customKeyboard10+",
  "id": "customkeyboard10",
  "level": 3
}, {
  "value": "type11+",
  "id": "type11",
  "level": 3
}, {
  "value": "maxLength11+",
  "id": "maxlength11",
  "level": 3
}, {
  "value": "enterKeyType12+",
  "id": "enterkeytype12",
  "level": 3
}, {
  "value": "enableSelectedDataDetector22+",
  "id": "enableselecteddatadetector22",
  "level": 3
}, {
  "value": "lineHeight12+",
  "id": "lineheight12",
  "level": 3
}, {
  "value": "decoration12+",
  "id": "decoration12",
  "level": 3
}, {
  "value": "letterSpacing12+",
  "id": "letterspacing12",
  "level": 3
}, {
  "value": "fontFeature12+",
  "id": "fontfeature12",
  "level": 3
}, {
  "value": "selectedBackgroundColor12+",
  "id": "selectedbackgroundcolor12",
  "level": 3
}, {
  "value": "inputFilter12+",
  "id": "inputfilter12",
  "level": 3
}, {
  "value": "textIndent12+",
  "id": "textindent12",
  "level": 3
}, {
  "value": "minFontSize12+",
  "id": "minfontsize12",
  "level": 3
}, {
  "value": "maxFontSize12+",
  "id": "maxfontsize12",
  "level": 3
}, {
  "value": "halfLeading18+",
  "id": "halfleading18",
  "level": 3
}, {
  "value": "minFontScale18+",
  "id": "minfontscale18",
  "level": 3
}, {
  "value": "maxFontScale18+",
  "id": "maxfontscale18",
  "level": 3
}, {
  "value": "editMenuOptions12+",
  "id": "editmenuoptions12",
  "level": 3
}, {
  "value": "enablePreviewText12+",
  "id": "enablepreviewtext12",
  "level": 3
}, {
  "value": "enableHapticFeedback13+",
  "id": "enablehapticfeedback13",
  "level": 3
}, {
  "value": "autoCapitalizationMode20+",
  "id": "autocapitalizationmode20",
  "level": 3
}, {
  "value": "keyboardAppearance15+",
  "id": "keyboardappearance15",
  "level": 3
}, {
  "value": "strokeWidth20+",
  "id": "strokewidth20",
  "level": 3
}, {
  "value": "strokeColor20+",
  "id": "strokecolor20",
  "level": 3
}, {
  "value": "stopBackPress15+",
  "id": "stopbackpress15",
  "level": 3
}, {
  "value": "enableAutoSpacing20+",
  "id": "enableautospacing20",
  "level": 3
}, {
  "value": "selectedDragPreviewStyle23+",
  "id": "selecteddragpreviewstyle23",
  "level": 3
}, {
  "value": "dividerColor23+",
  "id": "dividercolor23",
  "level": 3
}, {
  "value": "compressLeadingPunctuation23+",
  "id": "compressleadingpunctuation23",
  "level": 3
}, {
  "value": "includeFontPadding23+",
  "id": "includefontpadding23",
  "level": 3
}, {
  "value": "fallbackLineSpacing23+",
  "id": "fallbacklinespacing23",
  "level": 3
}, {
  "value": "IconOptions10+对象说明",
  "id": "iconoptions10对象说明",
  "level": 2
}, {
  "value": "SearchButtonOptions10+对象说明",
  "id": "searchbuttonoptions10对象说明",
  "level": 2
}, {
  "value": "CancelButtonStyle10+枚举说明",
  "id": "cancelbuttonstyle10枚举说明",
  "level": 2
}, {
  "value": "SearchType11+枚举说明",
  "id": "searchtype11枚举说明",
  "level": 2
}, {
  "value": "CancelButtonOptions12+对象说明",
  "id": "cancelbuttonoptions12对象说明",
  "level": 2
}, {
  "value": "CancelButtonSymbolOptions12+对象说明",
  "id": "cancelbuttonsymboloptions12对象说明",
  "level": 2
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "onSubmit",
  "id": "onsubmit",
  "level": 3
}, {
  "value": "onSubmit14+",
  "id": "onsubmit14",
  "level": 3
}, {
  "value": "onChange",
  "id": "onchange",
  "level": 3
}, {
  "value": "onCopy",
  "id": "oncopy",
  "level": 3
}, {
  "value": "onCut",
  "id": "oncut",
  "level": 3
}, {
  "value": "onPaste",
  "id": "onpaste",
  "level": 3
}, {
  "value": "onTextSelectionChange10+",
  "id": "ontextselectionchange10",
  "level": 3
}, {
  "value": "onContentScroll10+",
  "id": "oncontentscroll10",
  "level": 3
}, {
  "value": "onEditChange12+",
  "id": "oneditchange12",
  "level": 3
}, {
  "value": "onWillInsert12+",
  "id": "onwillinsert12",
  "level": 3
}, {
  "value": "onDidInsert12+",
  "id": "ondidinsert12",
  "level": 3
}, {
  "value": "onWillDelete12+",
  "id": "onwilldelete12",
  "level": 3
}, {
  "value": "onDidDelete12+",
  "id": "ondiddelete12",
  "level": 3
}, {
  "value": "onWillChange15+",
  "id": "onwillchange15",
  "level": 3
}, {
  "value": "onWillAttachIME20+",
  "id": "onwillattachime20",
  "level": 3
}, {
  "value": "SearchController",
  "id": "searchcontroller",
  "level": 2
}, {
  "value": "导入对象",
  "id": "导入对象",
  "level": 3
}, {
  "value": "constructor",
  "id": "constructor",
  "level": 3
}, {
  "value": "caretPosition",
  "id": "caretposition",
  "level": 3
}, {
  "value": "stopEditing10+",
  "id": "stopediting10",
  "level": 3
}, {
  "value": "setTextSelection12+",
  "id": "settextselection12",
  "level": 3
}, {
  "value": "SearchSubmitCallback14+",
  "id": "searchsubmitcallback14",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（设置与获取光标位置）",
  "id": "示例1设置与获取光标位置",
  "level": 3
}, {
  "value": "示例2（设置搜索和删除图标）",
  "id": "示例2设置搜索和删除图标",
  "level": 3
}, {
  "value": "示例3（设置自定义键盘）",
  "id": "示例3设置自定义键盘",
  "level": 3
}, {
  "value": "示例4（设置输入法回车键类型）",
  "id": "示例4设置输入法回车键类型",
  "level": 3
}, {
  "value": "示例5（设置文本样式）",
  "id": "示例5设置文本样式",
  "level": 3
}, {
  "value": "示例6（设置文字特性效果）",
  "id": "示例6设置文字特性效果",
  "level": 3
}, {
  "value": "示例7（自定义键盘避让）",
  "id": "示例7自定义键盘避让",
  "level": 3
}, {
  "value": "示例8（设置文本自适应）",
  "id": "示例8设置文本自适应",
  "level": 3
}, {
  "value": "示例9（支持插入和删除回调）",
  "id": "示例9支持插入和删除回调",
  "level": 3
}, {
  "value": "示例10（文本扩展自定义菜单）",
  "id": "示例10文本扩展自定义菜单",
  "level": 3
}, {
  "value": "示例11（设置symbol类型清除按钮）",
  "id": "示例11设置symbol类型清除按钮",
  "level": 3
}, {
  "value": "示例12（设置文本是否可复制）",
  "id": "示例12设置文本是否可复制",
  "level": 3
}, {
  "value": "示例13（设置文本水平对齐/光标样式/选中背景色）",
  "id": "示例13设置文本水平对齐光标样式选中背景色",
  "level": 3
}, {
  "value": "示例14（设置默认获焦并拉起软键盘）",
  "id": "示例14设置默认获焦并拉起软键盘",
  "level": 3
}, {
  "value": "示例15（关闭系统文本选择菜单）",
  "id": "示例15关闭系统文本选择菜单",
  "level": 3
}, {
  "value": "示例16（对输入的文本进行过滤）",
  "id": "示例16对输入的文本进行过滤",
  "level": 3
}, {
  "value": "示例17（设置选中指定区域的文本内容）",
  "id": "示例17设置选中指定区域的文本内容",
  "level": 3
}, {
  "value": "示例18（设置文本滚动事件）",
  "id": "示例18设置文本滚动事件",
  "level": 3
}, {
  "value": "示例19（设置最小字体范围与最大字体范围）",
  "id": "示例19设置最小字体范围与最大字体范围",
  "level": 3
}, {
  "value": "示例20（设置文本描边）",
  "id": "示例20设置文本描边",
  "level": 3
}, {
  "value": "示例21（设置中西文自动间距）",
  "id": "示例21设置中西文自动间距",
  "level": 3
}, {
  "value": "示例22（设置placeholder富文本样式）",
  "id": "示例22设置placeholder富文本样式",
  "level": 3
}, {
  "value": "示例23（设置输入法扩展信息）",
  "id": "示例23设置输入法扩展信息",
  "level": 3
}, {
  "value": "示例24（设置输入框分割线颜色）",
  "id": "示例24设置输入框分割线颜色",
  "level": 3
}, {
  "value": "示例25（设置行首标点压缩）",
  "id": "示例25设置行首标点压缩",
  "level": 3
}, {
  "value": "示例26（设置自适应间距）",
  "id": "示例26设置自适应间距",
  "level": 3
}, {
  "value": "示例27（设置文本拖拽时的背板样式）",
  "id": "示例27设置文本拖拽时的背板样式",
  "level": 3
}, {
  "value": "示例28（删除文本框内的最后一个字符）",
  "id": "示例28删除文本框内的最后一个字符",
  "level": 3
}, {
  "value": "示例29（设置文本排版方向）",
  "id": "示例29设置文本排版方向",
  "level": 3
}, {
  "value": "示例30（将指定范围的文字滚动到可视区内）",
  "id": "示例30将指定范围的文字滚动到可视区内",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    boolean: "boolean",
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
        id: "search",
        children: "Search"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "搜索框组件，适用于浏览器的搜索内容输入框等应用场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(278034)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该组件从API version 8开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该组件仅支持单文本样式，若需实现富文本样式，建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor",
        children: "RichEditor"
      }), "组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Search(options?: SearchOptions)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
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
              href: "#searchoptions18%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "SearchOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "搜索框组件初始化选项"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "searchoptions18对象说明",
      children: "SearchOptions18+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Search初始化参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(951143)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value8+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置当前显示的搜索文本内容。  从API version 10开始，该参数支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-two-way-sync",
              children: "$$"
            }), "双向绑定变量。  从API version 18开始，该参数支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-new-binding#%E7%B3%BB%E7%BB%9F%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A",
              children: "!!"
            }), "双向绑定变量。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。  从API version 20开始，支持Resource类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "placeholder8+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置无输入时的提示文本。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "icon8+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置搜索图标路径，默认使用系统搜索图标。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  icon的数据源支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image#%E7%A4%BA%E4%BE%8B25%E4%BD%BF%E7%94%A8%E7%9B%B8%E5%AF%B9%E8%B7%AF%E5%BE%84%E6%98%BE%E7%A4%BA%E5%9B%BE%E7%89%87",
              children: "使用相对路径显示图片"
            }), "和网络图片。  - 支持的图片格式包括png、jpg、bmp、svg、gif、pixelmap和heif。  - 支持Base64字符串。格式data:image/[png"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "controller8+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#searchcontroller",
              children: "SearchController"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置Search组件控制器。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
        children: "通用属性"
      }), "外，还支持以下属性："]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "searchbutton",
      children: "searchButton"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "searchButton(value: ResourceStr, option?: SearchButtonOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置搜索框末尾搜索按钮。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击搜索按钮，同时触发onSubmit与onClick回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Wearable设备上默认字体大小为18fp。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "搜索框末尾搜索按钮文本内容。  从API version 20开始，支持Resource类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "option"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#searchbuttonoptions10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "SearchButtonOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置搜索框末尾搜索按钮文本样式。  默认值：  {  fontSize: '16fp',  fontColor: '#ff3f97e9'  }"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "placeholdercolor",
      children: "placeholderColor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "placeholderColor(value: ResourceColor)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置placeholder文本颜色，Wearable设备上默认值为'#99ffffff'。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "placeholder文本颜色。  默认值：'#99182431'。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "placeholderfont",
      children: "placeholderFont"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "placeholderFont(value?: Font)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置placeholder文本样式，包括字体大小、字体粗细、字体族、字体风格。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#font",
              children: "Font"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "placeholder文本样式。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(122312)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-text/js-apis-graphics-text#loadfontsync",
        children: "loadFontSync"
      }), "注册自定义字体。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "textfont",
      children: "textFont"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "textFont(value?: Font)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置搜索框内输入文本样式，包括字体大小、字体粗细、字体族、字体风格。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Wearable设备上默认字体大小为18fp。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#font",
              children: "Font"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "搜索框内输入文本样式。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "textalign9",
      children: "textAlign9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "textAlign(value: TextAlign)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本在搜索框中的对齐方式。目前支持的对齐方式有：TextAlign.Start、TextAlign.Center、TextAlign.End、TextAlign.LEFT、TextAlign.RIGHT。TextAlign.JUSTIFY的对齐方式按照TextAlign.Start处理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#textalign",
              children: "TextAlign"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本在搜索框中的对齐方式。  默认值：TextAlign.Start"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(998716)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["textAlign只能调整文本整体的布局，不影响字符的显示顺序。若需要调整字符的显示顺序，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-internationalization#%E9%95%9C%E5%83%8F%E7%8A%B6%E6%80%81%E5%AD%97%E7%AC%A6%E5%AF%B9%E9%BD%90",
        children: "镜像状态字符对齐"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "textdirection23",
      children: "textDirection23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "textDirection(direction: TextDirection | undefined)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指定文本排版方向，未通过该接口设置时，默认文本排版方向遵循组件布局方向。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
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
            children: "direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#textdirection22",
              children: "TextDirection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "copyoption9",
      children: "copyOption9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "copyOption(value: CopyOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置输入的文本是否可复制。设置CopyOptions.None时，当前Search中的文字无法被复制、剪切、翻译、分享、搜索和帮写，支持粘贴和全选。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置CopyOptions.None时，不允许拖拽。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#copyoptions9",
              children: "CopyOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入的文本是否可复制。  默认值：CopyOptions.LocalDevice，支持设备内复制。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "searchicon10",
      children: "searchIcon10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "searchIcon(value: IconOptions | SymbolGlyphModifier)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置左侧搜索图标样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Wearable设备上默认图标大小为16vp。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#iconoptions10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "IconOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-attributes-text-style/ts-universal-attributes-text-style#symbolglyphmodifier12",
              children: "SymbolGlyphModifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cancelbutton10",
      children: "cancelButton10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cancelButton(value: CancelButtonOptions | CancelButtonSymbolOptions)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置右侧清除按钮样式。示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B2%E8%AE%BE%E7%BD%AE%E6%90%9C%E7%B4%A2%E5%92%8C%E5%88%A0%E9%99%A4%E5%9B%BE%E6%A0%87",
        children: "示例2（设置搜索和删除图标）"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B11%E8%AE%BE%E7%BD%AEsymbol%E7%B1%BB%E5%9E%8B%E6%B8%85%E9%99%A4%E6%8C%89%E9%92%AE",
        children: "示例11（设置symbol类型清除按钮）"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Wearable设备上默认图标大小为18fp。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#cancelbuttonoptions12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "CancelButtonOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#cancelbuttonsymboloptions12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "CancelButtonSymbolOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fontcolor10",
      children: "fontColor10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fontColor(value: ResourceColor)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置输入文本的字体颜色。fontSize、fontStyle、fontWeight和fontFamily在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#textfont",
        children: "textFont"
      }), "属性中设置。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入文本的字体颜色。  默认值：'#FF182431'  Wearable设备上默认值为：'#dbffffff'"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "caretstyle10",
      children: "caretStyle10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "caretStyle(value: CaretStyle)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置光标样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#caretstyle10",
              children: "CaretStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "光标样式。  默认值：  {  width: '2.0vp',  color: '#007DFF'  }"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(689502)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始，此接口支持设置文本手柄颜色，光标和文本手柄颜色保持一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enablekeyboardonfocus10",
      children: "enableKeyboardOnFocus10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enableKeyboardOnFocus(value: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置Search通过点击以外的方式获焦时，是否主动拉起软键盘。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 10开始，获焦默认绑定输入法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search获焦时，是否主动拉起软键盘。  true表示主动拉起，false表示不主动拉起。  默认值：true"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "selectionmenuhidden10",
      children: "selectionMenuHidden10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "selectionMenuHidden(value: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否不弹出系统文本选择菜单。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否不弹出系统文本选择菜单。  设置为true时，单击输入框光标、长按输入框、双击输入框、三击输入框或者右键输入框，不弹出系统文本选择菜单。  设置为false时，弹出系统文本选择菜单。  默认值：false"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "customkeyboard10",
      children: "customKeyboard10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "customKeyboard(value: CustomBuilder | ComponentContent | undefined, options?: KeyboardOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置自定义键盘。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当设置自定义键盘时，输入框激活后不会打开系统输入法，而是加载指定的自定义组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义键盘的高度可以通过自定义组件根节点的height属性设置，宽度不可设置，使用系统默认值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义键盘采用覆盖原始界面的方式呈现，当没有开启避让模式或者输入框不需要避让的场景不会对应用原始界面产生压缩或者上提。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义键盘无法获取焦点，但是会拦截手势事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["默认在输入控件失去焦点时，关闭自定义键盘，开发者也可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#stopediting10",
        children: "stopEditing"
      }), "方法控制键盘关闭。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当设置自定义键盘时，可以通过绑定", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-key/ts-universal-events-key#onkeypreime12",
        children: "onKeyPreIme"
      }), "事件规避物理键盘的输入。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 23开始，自定义键盘可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#setcustomkeyboardcontinuefeature23",
        children: "setCustomKeyboardContinueFeature"
      }), "开启接续，在切换至其他自定义键盘时，会直接切换，不会触发键盘关闭和拉起动画。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(411685)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该接口不支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
              children: "CustomBuilder"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent#componentcontent-1",
              children: "ComponentContent"
            }), "22+"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined22+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#keyboardoptions12",
              children: "KeyboardOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置自定义键盘是否支持避让功能。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "type11",
      children: "type11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type(value: SearchType)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置输入框类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不同的SearchType会拉起对应类型的键盘，同时限制输入。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#searchtype11%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "SearchType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入框类型。  默认值：SearchType.NORMAL"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "maxlength11",
      children: "maxLength11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "maxLength(value: number)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本的最大输入字符数。默认不设置最大输入字符数限制。到达文本最大字符限制，将无法继续输入字符。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本的最大输入字符数。  当value<0时，按照默认值处理，不设限制。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enterkeytype12",
      children: "enterKeyType12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enterKeyType(value: EnterKeyType)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置输入法回车键类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#enterkeytype%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "EnterKeyType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输入法回车键类型。  默认值：EnterKeyType.Search"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enableselecteddatadetector22",
      children: "enableSelectedDataDetector22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enableSelectedDataDetector(enable: boolean | undefined)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否对选中文本进行实体识别。该接口依赖设备底层应具有文本识别能力，否则设置不会生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当enableSelectedDataDetector设置为true时，默认识别所有类型的实体。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#copyoptions9",
        children: "CopyOptions"
      }), "为CopyOptions.LocalDevice或CopyOptions.CROSS_DEVICE时，本功能生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 22开始，该接口支持在元服务中使用。"]
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
            children: "enable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lineheight12",
      children: "lineHeight12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "lineHeight(value: number | string | Resource)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本的文本行高，设置值不大于0时，不限制文本行高，自适应字体大小，number类型时单位为fp。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(706959)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "特殊字符字体高度远超出同行的其他字符高度时，文本框出现截断、遮挡、内容相对位置发生变化等不符合预期的显示异常，需要开发者调整组件高度、行高等属性，修改对应的页面布局。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "decoration12",
      children: "decoration12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "decoration(value: TextDecorationOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本装饰线类型样式及其颜色。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-attributes-text-style/ts-universal-attributes-text-style#textdecorationoptions12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TextDecorationOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本装饰线对象。  默认值：{  type: TextDecorationType.None,  color: Color.Black,  style: TextDecorationStyle.SOLID  }"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(853706)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当文字的下边缘轮廓与装饰线位置相交时，会触发下划线避让规则，下划线将在这些字符处避让文字。常见“gjyqp”等英文字符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当文本装饰线的颜色设置为Color.Transparent时，装饰线颜色设置为跟随每行第一个字的字体颜色。当文本装饰线的颜色设置为透明色16进制对应值“#00FFFFFF”时，装饰线颜色设置为透明色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "letterspacing12",
      children: "letterSpacing12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "letterSpacing(value: number | string | Resource)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本字符间距。设置该值为百分比时，按默认值显示。设置该值为0时，按默认值显示。string类型支持number类型取值的字符串形式，可以附带单位，例如\"10\"、\"10fp\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当取值为负值时，文字会发生压缩，负值过小时会将组件内容区大小压缩为0，导致无内容显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对每个字符生效，包括行尾字符。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fontfeature12",
      children: "fontFeature12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fontFeature(value: string)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文字特性效果，比如数字等宽的特性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "格式为：normal | <feature-tag-value>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "<feature-tag-value>的格式为：<string> [ <integer> | on | off ]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "<feature-tag-value>的个数可以有多个，中间用','隔开。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，使用等宽数字的输入格式为：\"ss01\" on。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文字特性效果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Font Feature当前支持的属性见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#fontfeature12",
        children: "fontFeature属性列表"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置Font Feature属性，Font Feature是OpenType字体的高级排版能力，如支持连字、数字等宽等特性，一般用在自定义字体中，其能力需要字体本身支持。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["更多Font Feature能力介绍可参考", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://www.w3.org/TR/css-fonts-3/#font-feature-settings-prop和https://sparanoid.com/lab/opentype-features/"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "selectedbackgroundcolor12",
      children: "selectedBackgroundColor12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "selectedBackgroundColor(value: ResourceColor)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本选中底板颜色。如果未设置不透明度，默认为20%不透明度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本选中底板颜色。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inputfilter12",
      children: "inputFilter12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "inputFilter(value: ResourceStr, error?: Callback< string >)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过正则表达式设置输入过滤器。匹配表达式的输入允许显示，不匹配的输入将被过滤。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单字符输入场景仅支持单字符匹配，多字符输入场景支持字符串匹配，例如粘贴。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置inputFilter且输入的字符不为空字符，会导致设置输入框类型(即type接口)附带的文本过滤效果失效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "正则表达式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback< string >"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "正则匹配失败时，返回被过滤的内容。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "textindent12",
      children: "textIndent12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "textIndent(value: Dimension)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置首行文本缩进。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#dimension10",
              children: "Dimension"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "首行文本缩进。  默认值：0"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "minfontsize12",
      children: "minFontSize12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "minFontSize(value: number | string | Resource)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本最小显示字号。string类型支持number类型取值的字符串形式，可以附带单位，例如\"10\"、\"10fp\"。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "#maxfontsize12",
        children: "maxFontSize"
      }), "以及布局大小限制使用，单独设置不生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自适应字号生效时，fontSize设置不生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["minFontSize小于或等于0时，自适应字号不生效，此时按照", (0,jsx_runtime.jsx)(_components.a, {
        href: "#textfont",
        children: "textFont"
      }), "属性里面size的取值生效，未设置时按照其默认值生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "maxfontsize12",
      children: "maxFontSize12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "maxFontSize(value: number | string | Resource)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本最大显示字号。string类型支持number类型取值的字符串形式，可以附带单位，例如\"10\"、\"10fp\"。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "#minfontsize12",
        children: "minFontSize"
      }), "以及布局大小限制使用，单独设置不生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自适应字号生效时，fontSize设置不生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["maxFontSize小于等于0或者maxFontSize小于minFontSize时，自适应字号不生效，此时按照", (0,jsx_runtime.jsx)(_components.a, {
        href: "#textfont",
        children: "textFont"
      }), "属性里面size的取值生效，未设置时按照其默认值生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "halfleading18",
      children: "halfLeading18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "halfLeading(halfLeading: Optional<boolean>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本在行内垂直居中，将行间距平分至行的顶部与底部。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
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
            children: "halfLeading"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.boolean, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本是否垂直居中。  true表示将行间距平分至行的顶部与底部，false则不平分。  默认值：false"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "minfontscale18",
      children: "minFontScale18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "minFontScale(scale: Optional<number | Resource>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本最小的字体缩放倍数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
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
            children: "scale"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<number"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "maxfontscale18",
      children: "maxFontScale18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "maxFontScale(scale: Optional<number | Resource>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本最大的字体缩放倍数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
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
            children: "scale"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<number"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "editmenuoptions12",
      children: "editMenuOptions12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "editMenuOptions(editMenu: EditMenuOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置自定义菜单扩展项，允许用户设置扩展项的文本内容、图标、回调方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-textmenucontroller/arkts-apis-uicontext-textmenucontroller#disablemenuitems20",
        children: "disableMenuItems"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-textmenucontroller/arkts-apis-uicontext-textmenucontroller#disablesystemservicemenuitems20",
        children: "disableSystemServiceMenuItems"
      }), "接口屏蔽文本选择菜单内的系统服务菜单项时，editMenuOptions接口内回调方法", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#oncreatemenu12",
        children: "onCreateMenu"
      }), "的入参列表中不包含被屏蔽的菜单选项。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
            children: "editMenu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#editmenuoptions",
              children: "EditMenuOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "扩展菜单选项。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enablepreviewtext12",
      children: "enablePreviewText12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enablePreviewText(enable: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否开启输入预上屏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预上屏内容定义为文字暂存态，目前不支持文字拦截功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
            children: "enable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否开启输入预上屏。  true表示开启输入预上屏，false表示不开启输入预上屏。  默认值：true"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(190368)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "“预上屏”描述的是一种文字暂存状态。需要在输入法中开启预上屏功能，在输入文本过程中，未确认输入候选词时，文本框中显示标记文本。例如，通过拼音输入中文时，未确定候选词之前，在输入框中显示拼音字母，该状态称为文字预上屏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enablehapticfeedback13",
      children: "enableHapticFeedback13+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enableHapticFeedback(isEnabled: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否开启触控反馈。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开启触控反馈时，需要在工程的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-stage/module-configuration-file",
        children: "module.json5"
      }), "中配置requestPermissions字段以开启振动权限，配置如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"requestPermissions\": [\n {\n    \"name\": \"ohos.permission.VIBRATE\",\n }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 13开始，该接口支持在元服务中使用。"]
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
            children: "isEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否开启触控反馈。  true表示开启触控反馈，false表示不开启触控反馈。  默认值：true"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "autocapitalizationmode20",
      children: "autoCapitalizationMode20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "autoCapitalizationMode(mode: AutoCapitalizationMode)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置自动大小写模式的文本模式，只提供接口能力，具体实现以输入法应用为主。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
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
            children: "mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#autocapitalizationmode20%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "AutoCapitalizationMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自动大小写模式，默认状态无效。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "keyboardappearance15",
      children: "keyboardAppearance15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "keyboardAppearance(appearance: Optional<KeyboardAppearance>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置输入框拉起的键盘样式，需要输入法适配后生效。具体参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ime-kit/inputmethod-immersive-mode-guide",
        children: "输入法应用沉浸模式"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 15开始，该接口支持在元服务中使用。"]
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
            children: "appearance"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#keyboardappearance15%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "KeyboardAppearance"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键盘样式。  默认值：KeyboardAppearance.NONE_IMMERSIVE"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "strokewidth20",
      children: "strokeWidth20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "strokeWidth(width: Optional<LengthMetrics>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本描边的宽度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
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
            children: "width"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本描边的宽度。当LengthMetrics的单位为px时，  若设置值小于0，显示实心字；若大于0，显示空心字。  默认值为0，不做描边处理。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "strokecolor20",
      children: "strokeColor20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "strokeColor(color: Optional<ResourceColor>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本描边的颜色。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
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
            children: "color"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描边颜色。默认值为字体颜色，设置异常值时取默认值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stopbackpress15",
      children: "stopBackPress15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stopBackPress(isStopped: Optional<boolean>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否阻止返回键传递。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 15开始，该接口支持在元服务中使用。"]
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
            children: "isStopped"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.boolean, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否阻止返回键。  true表示阻止，false表示不阻止。  默认值：true。异常值取默认值。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enableautospacing20",
      children: "enableAutoSpacing20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enableAutoSpacing(enabled: Optional<boolean>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否开启中文与西文的自动间距。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
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
            children: "enabled"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.boolean, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否开启中文与西文的自动间距。  true为开启自动间距，false为不开启。  默认值：false"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "selecteddragpreviewstyle23",
      children: "selectedDragPreviewStyle23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置搜索框内文本拖拽时的背板样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#selecteddragpreviewstyle23%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "SelectedDragPreviewStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dividercolor23",
      children: "dividerColor23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dividerColor(color: Optional<ColorMetrics>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置输入框分割线颜色。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
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
            children: "color"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#colormetrics12",
              children: "ColorMetrics"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置分割线颜色。  默认使用系统的主题色：浅色模式下为0x33000000，显示为浅黑色，深色模式下为0x33FFFFFF，显示为浅白色。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "compressleadingpunctuation23",
      children: "compressLeadingPunctuation23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "compressLeadingPunctuation(enabled: Optional<boolean>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否开启行首标点符号压缩。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(489378)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "行首标点符号默认不压缩。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["支持压缩的标点符号，请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-text/js-apis-graphics-text#paragraphstyle",
          children: "ParagraphStyle"
        }), "的行首压缩的标点范围。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
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
            children: "enabled"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.boolean, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否开启行首标点符号压缩。  true表示开启行首标点符号压缩；false表示不开启行首标点符号压缩。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "includefontpadding23",
      children: "includeFontPadding23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "includeFontPadding(include: Optional<boolean>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否在首行和尾行增加间距以避免文字截断。不通过该接口设置，默认不增加间距。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
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
            children: "include"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.boolean, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否在首行和尾行增加间距以避免文字截断。  true表示在首行和尾行增加间距；false表示在首行和尾行不增加间距。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fallbacklinespacing23",
      children: "fallbackLineSpacing23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fallbackLineSpacing(enabled: Optional<boolean>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对多行文字叠加，支持行高基于文字实际高度自适应。此接口仅当行高小于文字实际高度时生效。不通过该接口设置，默认行高不基于文字实际高度自适应。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 23开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
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
            children: "enabled"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.boolean, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "行高是否基于文字实际高度自适应。  true表示行高基于文字实际高度自适应；false表示行高不基于文字实际高度自适应。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "iconoptions10对象说明",
      children: "IconOptions10+对象说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图标尺寸，不支持百分比。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图标颜色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "src"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "图标/图片源。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "searchbuttonoptions10对象说明",
      children: "SearchButtonOptions10+对象说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文本按钮字体大小，不支持百分比。", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文本按钮字体颜色。", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "autoDisable18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Search无文本内容时按钮置灰且不可点击。  默认值：false  true表示开启按钮置灰功能，false表示不开启。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cancelbuttonstyle10枚举说明",
      children: "CancelButtonStyle10+枚举说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CONSTANT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清除按钮常显样式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INVISIBLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清除按钮常隐样式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "INPUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清除按钮输入样式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "searchtype11枚举说明",
      children: "SearchType11+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "搜索输入框类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NORMAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["基本输入模式，无特殊限制。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NUMBER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["纯数字输入模式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PHONE_NUMBER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["电话号码输入模式。  支持输入数字、空格、+ 、-、*、#、(、)，长度不限。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EMAIL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "邮箱地址输入模式。  支持数字，字母，下划线、小数点、!、#、$、%、&、'、*、+、-、/、=、?、^、`、{、"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NUMBER_DECIMAL12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["带小数点的数字输入模式。  支持数字，小数点（只能存在一个小数点）。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "URL12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["带URL的输入模式，无特殊限制。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ONE_TIME_CODE20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["验证码输入模式，无特殊限制。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 20开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cancelbuttonoptions12对象说明",
      children: "CancelButtonOptions12+对象说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "style"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#cancelbuttonstyle10%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "CancelButtonStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右侧清除按钮显示状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "icon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#iconoptions10%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "IconOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右侧清除按钮图标。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cancelbuttonsymboloptions12对象说明",
      children: "CancelButtonSymbolOptions12+对象说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "只读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "style"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#cancelbuttonstyle10%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "CancelButtonStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右侧清除按钮显示状态。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "icon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-attributes-text-style/ts-universal-attributes-text-style#symbolglyphmodifier12",
              children: "SymbolGlyphModifier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "右侧清除按钮Symbol图标。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["除支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
        children: "通用事件"
      }), "外，还支持以下事件："]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onsubmit",
      children: "onSubmit"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onSubmit(callback: Callback<string>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击搜索图标、搜索按钮或者按下软键盘搜索按钮时触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "搜索提交回调，其返回值为当前搜索框中输入的文本内容。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onsubmit14",
      children: "onSubmit14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onSubmit(callback: SearchSubmitCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击搜索图标、搜索按钮或者按下软键盘搜索按钮时触发该回调事件，提交事件时提供保持Search编辑状态的方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
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
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#searchsubmitcallback14",
              children: "SearchSubmitCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "点击搜索图标、搜索按钮或者按下软键盘搜索按钮时的回调事件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onchange",
      children: "onChange"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onChange(callback: EditableTextOnChangeCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入内容发生变化时，触发该回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在本回调中，若执行了光标操作，需要开发者在预上屏场景下依据previewText参数调整光标逻辑，以适应预上屏场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#editabletextonchangecallback12",
              children: "EditableTextOnChangeCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前输入文本内容变化时的回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oncopy",
      children: "onCopy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onCopy(callback:Callback<string>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进行复制操作时，触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "复制回调，其返回值为复制的文本内容。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oncut",
      children: "onCut"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onCut(callback:Callback<string>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进行剪切操作时，触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback<string>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "剪切回调，其返回值为剪切的文本内容。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onpaste",
      children: "onPaste"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onPaste(callback:OnPasteCallback )"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "进行粘贴操作时，触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#onpastecallback18",
              children: "OnPasteCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "粘贴回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ontextselectionchange10",
      children: "onTextSelectionChange10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onTextSelectionChange(callback: OnTextSelectionChangeCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文本选择的位置或编辑状态下光标位置发生变化时，触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#ontextselectionchangecallback18",
              children: "OnTextSelectionChangeCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本选择变化回调或光标位置变化回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oncontentscroll10",
      children: "onContentScroll10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onContentScroll(callback: OnContentScrollCallback)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文本内容滚动时，触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#oncontentscrollcallback18",
              children: "OnContentScrollCallback"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本内容滚动回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oneditchange12",
      children: "onEditChange12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onEditChange(callback: Callback< boolean >)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "输入状态变化时，触发该回调。有光标时为编辑态，无光标时为非编辑态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Callback< boolean >"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "编辑状态改变回调，其返回值为true表示正在输入，false表示无焦点，无法输入文字。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onwillinsert12",
      children: "onWillInsert12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onWillInsert(callback: Callback<InsertValue, boolean>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在将要输入时，触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#insertvalue12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "InsertValue"
            }), ", boolean>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在将要输入时调用的回调。  在返回true时，表示正常插入，返回false时，表示不插入。  在预上屏和候选词操作时，该回调不触发。  仅支持系统输入法输入的场景。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ondidinsert12",
      children: "onDidInsert12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onDidInsert(callback: Callback<InsertValue>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在输入完成时，触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#insertvalue12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "InsertValue"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在输入完成时调用的回调。  仅支持系统输入法输入的场景。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onwilldelete12",
      children: "onWillDelete12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onWillDelete(callback: Callback<DeleteValue, boolean>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在将要删除时，触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#deletevalue12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "DeleteValue"
            }), ", boolean>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在将要删除时调用的回调。  在返回true时，表示正常删除，返回false时，表示不删除。  在预上屏删除操作时，该回调不触发。  仅支持系统输入法输入的场景。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ondiddelete12",
      children: "onDidDelete12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onDidDelete(callback: Callback<DeleteValue>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在删除完成时，触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#deletevalue12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "DeleteValue"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在删除完成时调用的回调。  仅支持系统输入法输入的场景。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(392496)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击清除按钮不触发onDidDelete回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onwillchange15",
      children: "onWillChange15+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onWillChange(callback: Callback<EditableTextChangeValue, boolean>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在文本内容将要发生变化时，触发该回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onWillChange的回调时序晚于onWillInsert、onWillDelete，早于onDidInsert、onDidDelete。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 15开始，该接口支持在元服务中使用。"]
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
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#editabletextchangevalue15",
              children: "EditableTextChangeValue"
            }), ", boolean>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在文本内容将要发生变化时的回调。  返回true时，表示正常修改。返回false时，表示拦截此次触发。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onwillattachime20",
      children: "onWillAttachIME20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onWillAttachIME(callback: Callback<IMEClient>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在搜索框将要绑定输入法前触发该回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 22开始，调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#imeclient20%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "IMEClient"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#setextraconfig22",
        children: "setExtraConfig"
      }), "方法可以设置输入法扩展信息。在绑定输入法成功后，输入法会收到扩展信息，输入法可以依据此信息实现自定义功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IMEClient仅在onWillAttachIME执行期间有效，不可进行异步调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(493003)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该接口不支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 20开始，该接口支持在元服务中使用。"]
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
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#imeclient20%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "IMEClient"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在搜索框将要绑定输入法前触发该回调。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "searchcontroller",
      children: "SearchController"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Search组件的控制器继承自", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-attributes-text-style/ts-universal-attributes-text-style#textcontentcontrollerbase",
        children: "TextContentControllerBase"
      }), "，涉及的接口有", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-attributes-text-style/ts-universal-attributes-text-style#gettextcontentrect",
        children: "getTextContentRect"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-attributes-text-style/ts-universal-attributes-text-style#gettextcontentlinecount",
        children: "getTextContentLineCount"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-attributes-text-style/ts-universal-attributes-text-style#getcaretoffset11",
        children: "getCaretOffset"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-attributes-text-style/ts-universal-attributes-text-style#addtext15",
        children: "addText"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-attributes-text-style/ts-universal-attributes-text-style#deletetext15",
        children: "deleteText"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-attributes-text-style/ts-universal-attributes-text-style#getselection15",
        children: "getSelection"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-attributes-text-style/ts-universal-attributes-text-style#clearpreviewtext17",
        children: "clearPreviewText"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-attributes-text-style/ts-universal-attributes-text-style#setstyledplaceholder22",
        children: "setStyledPlaceholder"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-attributes-text-style/ts-universal-attributes-text-style#deletebackward23",
        children: "deleteBackward"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "导入对象",
      children: "导入对象"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "controller: SearchController = new SearchController();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SearchController的构造函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "caretposition",
      children: "caretPosition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "caretPosition(value: number): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置输入光标的位置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "从字符串开始到光标所在位置的长度。  当value<0时，按照0处理。当value>字符串长度时，按照字符串长度处理。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stopediting10",
      children: "stopEditing10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "stopEditing(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "退出编辑态。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "settextselection12",
      children: "setTextSelection12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setTextSelection(selectionStart: number, selectionEnd: number, options?: SelectionOptions): void;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件在获焦状态下，调用该接口设置文本选择区域并高亮显示，且只有在selectionStart小于selectionEnd时，文字才会被选取并高亮显示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "selectionStart"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本选择区域起始位置，文本框中文字的起始位置为0。  当selectionStart小于0时、按照0处理；当selectionStart大于文字最大长度时、按照文字最大长度处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selectionEnd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本选择区域结束位置。  当selectionEnd小于0时、按照0处理；当selectionEnd大于文字最大长度时、按照文字最大长度处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-attributes-text-style/ts-universal-attributes-text-style#selectionoptions12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "SelectionOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选中文字时的配置。  默认值：MenuPolicy.DEFAULT。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(512084)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果selectionStart或selectionEnd被赋值为undefined时，当作0处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果selectionMenuHidden被赋值为true或设备为2in1时，即使options被赋值为MenuPolicy.SHOW，调用setTextSelection也不弹出菜单。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果选中的文本含有emoji表情时，表情的起始位置包含在设置的文本选中区域内就会被选中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "searchsubmitcallback14",
      children: "SearchSubmitCallback14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type SearchSubmitCallback = (searchContent: string, event?: SubmitEvent) => void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击搜索图标、搜索按钮或者按下软键盘搜索按钮时的回调事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 14开始，该接口支持在元服务中使用。"]
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
            children: "searchContent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前搜索框中输入的文本内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#submitevent11",
              children: "SubmitEvent"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提交事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1设置与获取光标位置",
      children: "示例1（设置与获取光标位置）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 8开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#searchcontroller",
        children: "controller"
      }), "实现了光标位置的设置与获取的功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct SearchExample {\n  @State changeValue: string = '';\n  @State submitValue: string = '';\n  @State positionInfo: CaretOffset = { index: 0, x: 0, y: 0 };\n  controller: SearchController = new SearchController();\n\n  build() {\n    Column({space: 10}) {\n      Text('onSubmit:' + this.submitValue).fontSize(18).margin(15)\n      Text('onChange:' + this.changeValue).fontSize(18).margin(15)\n      Search({ value: this.changeValue, placeholder: 'Type to search...', controller: this.controller })\n        .searchButton('SEARCH')\n        .width('95%')\n        .height(40)\n        .backgroundColor('#F5F5F5')\n        .placeholderColor(Color.Grey)\n        .placeholderFont({ size: 14, weight: 400 })\n        .textFont({ size: 14, weight: 400 })\n        .onSubmit((value: string) => {\n          this.submitValue = value;\n        })\n        .onChange((value: string) => {\n          this.changeValue = value;\n        })\n        .margin(20)\n      Button('Set caretPosition 1')\n        .onClick(() => {\n          // 设置光标位置到输入的第一个字符后\n          this.controller.caretPosition(1);\n        })\n      Button('Get CaretOffset')\n        .onClick(() => {\n          this.positionInfo = this.controller.getCaretOffset();\n        })\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(678097)/* ["default"] */.A) + "",
        width: "388",
        height: "341"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2设置搜索和删除图标",
      children: "示例2（设置搜索和删除图标）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#searchbutton",
        children: "searchButton"
      }), "（从API version 8开始）、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#searchicon10",
        children: "searchIcon"
      }), "（从API version 10开始）、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#cancelbutton10",
        children: "cancelButton"
      }), "（从API version 10开始）属性展示了设置搜索和删除图标的效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct SearchExample {\n  @State changeValue: string = '';\n  @State submitValue: string = '';\n\n  build() {\n    Column() {\n      Text('onSubmit:' + this.submitValue).fontSize(18).margin(15)\n      Search({ value: this.changeValue, placeholder: 'Type to search...' })\n        .searchButton('SEARCH')\n        .searchIcon({\n          src: $r('sys.media.ohos_ic_public_search_filled')\n        })\n        .cancelButton({\n          style: CancelButtonStyle.CONSTANT,\n          icon: {\n            src: $r('sys.media.ohos_ic_public_cancel_filled')\n          }\n        })\n        .width('90%')\n        .height(40)\n        .maxLength(20)\n        .backgroundColor('#F5F5F5')\n        .placeholderColor(Color.Grey)\n        .placeholderFont({ size: 14, weight: 400 })\n        .textFont({ size: 14, weight: 400 })\n        .onSubmit((value: string) => {\n          this.submitValue = value;\n        })\n        .onChange((value: string) => {\n          this.changeValue = value;\n        })\n        .margin(20)\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(515596)/* ["default"] */.A) + "",
        width: "364",
        height: "191"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3设置自定义键盘",
      children: "示例3（设置自定义键盘）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#customkeyboard10",
        children: "customKeyboard"
      }), "（从API version 10开始）属性分别将value中的入参类型设置为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
        children: "CustomBuilder"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent#componentcontent-1",
        children: "ComponentContent"
      }), "，实现了自定义键盘的功能。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 22开始", (0,jsx_runtime.jsx)(_components.a, {
        href: "#customkeyboard10",
        children: "customKeyboard"
      }), "属性新增了入参类型", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent#componentcontent-1",
        children: "ComponentContent"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { ComponentContent } from '@kit.ArkUI';\nclass BuilderParams {\n  inputValue: string;\n  controller: SearchController;\n\n  constructor(inputValue: string, controller: SearchController) {\n    this.inputValue = inputValue;\n    this.controller = controller;\n  }\n}\n@Builder\nfunction CustomKeyboardBuilder(builderParams: BuilderParams) {\n  Column() {\n    Row() {\n      Button('x').onClick(() => {\n        // 关闭自定义键盘\n        builderParams.controller.stopEditing();\n      }).margin(10)\n    }\n\n    Grid() {\n      ForEach([1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'], (item: number | string) => {\n        GridItem() {\n          Button(item + \"\")\n            .width(110).onClick(() => {\n            builderParams.inputValue += item;\n          })\n        }\n      })\n    }.maxCount(3).columnsGap(10).rowsGap(10).padding(5)\n  }.backgroundColor(Color.Gray)\n}\n@Entry\n@Component\nstruct SearchExample {\n  controller: SearchController = new SearchController();\n  @State inputValue: string = \"\";\n  @State componentContent ?: ComponentContent<BuilderParams> = undefined;\n  @State builderParam: BuilderParams = new BuilderParams(this.inputValue, this.controller);\n  @State supportAvoidance: boolean = true;\n\n  aboutToAppear(): void {\n    // 创建ComponentContent\n    this.componentContent = new ComponentContent(this.getUIContext(), wrapBuilder(CustomKeyboardBuilder), this.builderParam);\n  }\n  build(){\n    Column() {\n      Text('Builder').margin(10).border({ width: 1 })\n      Search({ controller: this.builderParam.controller, value: this.builderParam.inputValue })\n        .customKeyboard(this.componentContent, { supportAvoidance: this.supportAvoidance })\n        .margin(10).border({ width: 1 }).height('48vp')\n\n      Text('ComponentContent').margin(10).border({ width: 1 })\n      Search({ controller: this.builderParam.controller, value: this.builderParam.inputValue })\n        .customKeyboard(CustomKeyboardBuilder(this.builderParam), { supportAvoidance: this.supportAvoidance })\n        .margin(10).border({ width: 1 }).height('48vp')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(84359)/* ["default"] */.A) + "",
        width: "267",
        height: "561"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4设置输入法回车键类型",
      children: "示例4（设置输入法回车键类型）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#enterkeytype12",
        children: "enterKeyType"
      }), "（从API version 12开始）属性实现了动态切换输入法回车键的效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct SearchExample {\n  @State text: string = '';\n  @State enterTypes: Array<EnterKeyType> = [EnterKeyType.Go, EnterKeyType.Search, EnterKeyType.Send, EnterKeyType.Done, EnterKeyType.Next, EnterKeyType.PREVIOUS, EnterKeyType.NEW_LINE];\n  @State index: number = 0;\n  build() {\n    Column({ space: 20 }) {\n      Search({ placeholder: '请输入文本', value: this.text })\n        .width(380)\n        .enterKeyType(this.enterTypes[this.index])\n        .onChange((value: string) => {\n          this.text = value;\n        })\n        .onSubmit((value: string) => {\n          console.info(\"trigger search onsubmit\" + value);\n        })\n\n      Button('改变EnterKeyType').onClick(() => {\n        this.index = (this.index + 1) % this.enterTypes.length;\n      })\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(786553)/* ["default"] */.A) + "",
        width: "334",
        height: "601"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5设置文本样式",
      children: "示例5（设置文本样式）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#lineheight12",
        children: "lineHeight"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#letterspacing12",
        children: "letterSpacing"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#decoration12",
        children: "decoration"
      }), "属性展示了不同样式的文本效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct SearchExample {\n  build() {\n    Row() {\n      Column() {\n        Text('lineHeight').fontSize(9).fontColor(0xCCCCCC)\n        Search({value: 'lineHeight unset'})\n          .border({ width: 1 }).padding(10)\n        Search({value: 'lineHeight 15'})\n          .border({ width: 1 }).padding(10).lineHeight(15)\n        Search({value: 'lineHeight 30'})\n          .border({ width: 1 }).padding(10).lineHeight(30)\n\n        Text('letterSpacing').fontSize(9).fontColor(0xCCCCCC)\n        Search({value: 'letterSpacing 0'})\n          .border({ width: 1 }).padding(5).letterSpacing(0)\n        Search({value: 'letterSpacing 3'})\n          .border({ width: 1 }).padding(5).letterSpacing(3)\n        Search({value: 'letterSpacing -1'})\n          .border({ width: 1 }).padding(5).letterSpacing(-1)\n\n        Text('decoration').fontSize(9).fontColor(0xCCCCCC)\n        Search({value: 'LineThrough, Red'})\n          .border({ width: 1 }).padding(5)\n          .decoration({type: TextDecorationType.LineThrough, color: Color.Red})\n        Search({value: 'Overline, Red, DOTTED'})\n          .border({ width: 1 }).padding(5)\n          .decoration({type: TextDecorationType.Overline, color: Color.Red, style: TextDecorationStyle.DOTTED})\n        Search({value: 'Underline, Red, WAVY'})\n          .border({ width: 1 }).padding(5)\n          .decoration({type: TextDecorationType.Underline, color: Color.Red, style: TextDecorationStyle.WAVY})\n      }.height('90%')\n    }\n    .width('90%')\n    .margin(10)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(805437)/* ["default"] */.A) + "",
        width: "338",
        height: "707"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6设置文字特性效果",
      children: "示例6（设置文字特性效果）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fontfeature12",
        children: "fontFeature"
      }), "（从API version 12开始）属性实现了文本在不同文字特性下的展示效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct SearchExample {\n  @State text1: string = 'This is ss01 on : 0123456789';\n  @State text2: string = 'This is ss01 off: 0123456789';\n\n  build() {\n    Column(){\n      Search({value: this.text1})\n        .margin({top:200})\n        .fontFeature(\"\\\"ss01\\\" on\")\n      Search({value: this.text2})\n        .margin({top:10})\n        .fontFeature(\"\\\"ss01\\\" off\")\n    }\n    .width(\"90%\")\n    .margin(\"5%\")\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(486886)/* ["default"] */.A) + "",
        width: "556",
        height: "184"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例7自定义键盘避让",
      children: "示例7（自定义键盘避让）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#customkeyboard10",
        children: "customKeyboard"
      }), "（从API version 10开始）属性配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#keyboardoptions12",
        children: "KeyboardOptions"
      }), "（从API version 12开始）接口实现了自定义键盘避让的效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct SearchExample {\n  controller: SearchController = new SearchController();\n  @State inputValue: string = \"\";\n  @State height1: string | number = '80%';\n  @State supportAvoidance: boolean = true;\n\n  // 自定义键盘组件\n  @Builder\n  CustomKeyboardBuilder() {\n    Column() {\n      Row() {\n        Button('x').onClick(() => {\n          // 关闭自定义键盘\n          this.controller.stopEditing();\n        }).margin(10)\n      }\n\n      Grid() {\n        ForEach([1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'], (item: number | string) => {\n          GridItem() {\n            Button(item + \"\")\n              .width(110).onClick(() => {\n              this.inputValue += item;\n            })\n          }\n        })\n      }.maxCount(3).columnsGap(10).rowsGap(10).padding(5)\n    }\n    .backgroundColor(Color.Gray)\n  }\n\n  build() {\n    Column() {\n      Row() {\n        Button(\"20%\")\n          .fontSize(24)\n          .onClick(() => {\n            this.height1 = \"20%\";\n          })\n        Button(\"80%\")\n          .fontSize(24)\n          .margin({ left: 20 })\n          .onClick(() => {\n            this.height1 = \"80%\";\n          })\n      }\n      .justifyContent(FlexAlign.Center)\n      .alignItems(VerticalAlign.Bottom)\n      .height(this.height1)\n      .width(\"100%\")\n      .padding({ bottom: 50 })\n\n      Search({ controller: this.controller, value: this.inputValue })// 绑定自定义键盘\n        .customKeyboard(this.CustomKeyboardBuilder(), { supportAvoidance: this.supportAvoidance })\n        .margin(10)\n        .border({ width: 1 })\n        .onChange((value: string) => {\n          this.inputValue = value;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(450270)/* ["default"] */.A) + "",
        width: "294",
        height: "477"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例8设置文本自适应",
      children: "示例8（设置文本自适应）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#minfontsize12",
        children: "minFontSize"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#maxfontsize12",
        children: "maxFontSize"
      }), "属性展示了文本自适应字号的效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct SearchExample {\n  build() {\n    Row() {\n      Column() {\n        Text('adaptive font').fontSize(9).fontColor(0xCCCCCC)\n\n        Search({value: 'This is the text without the adaptive font'})\n          .width('80%').height(90).borderWidth(1)\n        Search({value: 'This is the text without the adaptive font'})\n          .width('80%').height(90).borderWidth(1)\n          .minFontSize(4)\n          .maxFontSize(40)\n      }.height('90%')\n    }\n    .width('90%')\n    .margin(10)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(565897)/* ["default"] */.A) + "",
        width: "397",
        height: "334"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例9支持插入和删除回调",
      children: "示例9（支持插入和删除回调）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onwillinsert12",
        children: "onWillInsert"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ondidinsert12",
        children: "onDidInsert"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onwilldelete12",
        children: "onWillDelete"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ondiddelete12",
        children: "onDidDelete"
      }), "接口实现了插入和删除的效果。从API version 15开始，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onwillchange15",
        children: "onWillChange"
      }), "接口展示了文本内容将要发生变化时的具体信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nclass ChangeState {\n  changeContent: string = \"\";\n  changePreviewOffset: number | undefined = 0;\n  changePreviewValue: string | undefined = \"\";\n  changeTextChangeRangeBeforeX: number | undefined = 0;\n  changeTextChangeRangeBeforeY: number | undefined = 0;\n  changeTextChangeRangeAfterX: number | undefined = 0;\n  changeTextChangeRangeAfterY: number | undefined = 0;\n  changeTextChangeOldContent: string | undefined = \"\";\n  changeTextChangechangePreviewOffset: number | undefined = 0;\n  changeTextChangechangePreviewValue: string | undefined = \"\";\n\n  SetInfo(info: EditableTextChangeValue) {\n    this.changeContent = info.content;\n    this.changePreviewOffset = info.previewText?.offset;\n    this.changePreviewValue = info.previewText?.value;\n    this.changeTextChangeRangeBeforeX = info.options?.rangeBefore.start;\n    this.changeTextChangeRangeBeforeY = info.options?.rangeBefore.end;\n    this.changeTextChangeRangeAfterX = info.options?.rangeAfter.start;\n    this.changeTextChangeRangeAfterY = info.options?.rangeAfter.end;\n    this.changeTextChangeOldContent = info.options?.oldContent;\n    this.changeTextChangechangePreviewOffset = info.options?.oldPreviewText.offset;\n    this.changeTextChangechangePreviewValue = info.options?.oldPreviewText.value;\n  }\n}\n\n@Entry\n@Component\nstruct SearchExample {\n  @State insertValue: string = \"\";\n  @State deleteValue: string = \"\";\n  @State insertOffset: number = 0;\n  @State deleteOffset: number = 0;\n  @State deleteDirection: number = 0;\n  @State changeState1: ChangeState = new ChangeState();\n  @State changeState2: ChangeState = new ChangeState();\n\n  build() {\n    Row() {\n      Column() {\n        Search({ value: \"Search支持插入回调文本\" })\n          .height(60)\n          .onWillInsert((info: InsertValue) => {\n            this.insertValue = info.insertValue;\n            return true;\n          })\n          .onWillChange((info: EditableTextChangeValue) => {\n            this.changeState1.SetInfo(info);\n            return true;\n          })\n          .onDidInsert((info: InsertValue) => {\n            this.insertOffset = info.insertOffset;\n          })\n\n        Text(\"insertValue:\" + this.insertValue + \"  insertOffset:\" + this.insertOffset).height(20)\n\n        Blank(30)\n\n        Text(\"context:\" + this.changeState1.changeContent).height(20)\n        Text(\"previewText-offset:\" + this.changeState1.changePreviewOffset).height(20)\n        Text(\"previewText-value:\" + this.changeState1.changePreviewValue).height(20)\n        Text(\"options-rangeBefore-start:\" + this.changeState1.changeTextChangeRangeBeforeX).height(20)\n        Text(\"options-rangeBefore-end:\" + this.changeState1.changeTextChangeRangeBeforeY).height(20)\n        Text(\"options-rangeAfter-start:\" + this.changeState1.changeTextChangeRangeAfterX).height(20)\n        Text(\"options-rangeAfter-end:\" + this.changeState1.changeTextChangeRangeAfterY).height(20)\n        Text(\"options-oldContent:\" + this.changeState1.changeTextChangeOldContent).height(20)\n        Text(\"options-oldPreviewText-offset:\" + this.changeState1.changeTextChangechangePreviewOffset).height(20)\n        Text(\"options-oldPreviewText-value:\" + this.changeState1.changeTextChangechangePreviewValue).height(20)\n\n        Search({ value: \"Search支持删除回调文本b\" })\n          .height(60)\n          .onWillDelete((info: DeleteValue) => {\n            this.deleteValue = info.deleteValue;\n            this.deleteDirection = info.direction;\n            return true;\n          })\n          .onWillChange((info: EditableTextChangeValue) => {\n            this.changeState2.SetInfo(info);\n            return true;\n          })\n          .onDidDelete((info: DeleteValue) => {\n            this.deleteOffset = info.deleteOffset;\n            this.deleteDirection = info.direction;\n          })\n\n        Text(\"deleteValue:\" + this.deleteValue + \"  deleteOffset:\" + this.deleteOffset).height(20)\n        Text(\"deleteDirection:\" + (this.deleteDirection == 0 ? \"BACKWARD\" : \"FORWARD\")).height(20)\n\n        Blank(30)\n\n        Text(\"context:\" + this.changeState2.changeContent).height(20)\n        Text(\"previewText-offset:\" + this.changeState2.changePreviewOffset).height(20)\n        Text(\"previewText-value:\" + this.changeState2.changePreviewValue).height(20)\n        Text(\"options-rangeBefore-start:\" + this.changeState2.changeTextChangeRangeBeforeX).height(20)\n        Text(\"options-rangeBefore-end:\" + this.changeState2.changeTextChangeRangeBeforeY).height(20)\n        Text(\"options-rangeAfter-start:\" + this.changeState2.changeTextChangeRangeAfterX).height(20)\n        Text(\"options-rangeAfter-end:\" + this.changeState2.changeTextChangeRangeAfterY).height(20)\n        Text(\"options-oldContent:\" + this.changeState2.changeTextChangeOldContent).height(20)\n        Text(\"options-oldPreviewText-offset:\" + this.changeState2.changeTextChangechangePreviewOffset).height(20)\n        Text(\"options-oldPreviewText-value:\" + this.changeState2.changeTextChangechangePreviewValue).height(20)\n\n      }.width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(109928)/* ["default"] */.A) + "",
        width: "381",
        height: "662"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例10文本扩展自定义菜单",
      children: "示例10（文本扩展自定义菜单）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#editmenuoptions12",
        children: "editMenuOptions"
      }), "接口实现了文本设置自定义菜单扩展项的文本内容、图标以及回调的功能，同时，可以在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#%E5%B1%9E%E6%80%A7-1",
        children: "onPrepareMenu"
      }), "（从API version 20开始）回调中，进行菜单数据的设置。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct SearchExample {\n  @State text: string = 'Search editMenuOptions';\n  @State endIndex: number = 0;\n  onCreateMenu = (menuItems: Array<TextMenuItem>) => {\n    // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n    let item1: TextMenuItem = {\n      content: 'create1',\n      icon: $r('app.media.startIcon'),\n      id: TextMenuItemId.of('create1'),\n    };\n    let item2: TextMenuItem = {\n      content: 'create2',\n      id: TextMenuItemId.of('create2'),\n      icon: $r('app.media.startIcon'),\n    };\n    menuItems.push(item1);\n    menuItems.unshift(item2);\n    let targetIndex = menuItems.findIndex(item => item.id.equals(TextMenuItemId.AI_WRITER));\n    if (targetIndex !== -1) {\n      menuItems.splice(targetIndex, 1); // 从目标索引删除1个元素\n    }\n    // 从API version 23开始支持TextMenuItemId.autoFill\n    targetIndex = menuItems.findIndex(item => item.id.equals(TextMenuItemId.autoFill));\n    if (targetIndex !== -1) {\n      menuItems.splice(targetIndex, 1); // 从目标索引删除1个元素\n    }\n    return menuItems;\n  }\n  onMenuItemClick = (menuItem: TextMenuItem, textRange: TextRange) => {\n    if (menuItem.id.equals(TextMenuItemId.of(\"create2\"))) {\n      console.info(\"拦截 id: create2 start:\" + textRange.start + \"; end:\" + textRange.end);\n      return true;\n    }\n    if (menuItem.id.equals(TextMenuItemId.of(\"prepare1\"))) {\n      console.info(\"拦截 id: prepare1 start:\" + textRange.start + \"; end:\" + textRange.end);\n      return true;\n    }\n    if (menuItem.id.equals(TextMenuItemId.COPY)) {\n      console.info(\"拦截 COPY start:\" + textRange.start + \"; end:\" + textRange.end);\n      return true;\n    }\n    if (menuItem.id.equals(TextMenuItemId.SELECT_ALL)) {\n      console.info(\"不拦截 SELECT_ALL start:\" + textRange.start + \"; end:\" + textRange.end);\n      return false;\n    }\n    return false;\n  }\n  // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n  onPrepareMenu = (menuItems: Array<TextMenuItem>) => {\n    let item1: TextMenuItem = {\n      content: 'prepare1_' + this.endIndex,\n      icon: $r('app.media.startIcon'),\n      id: TextMenuItemId.of('prepare1'),\n    };\n    menuItems.unshift(item1);\n    return menuItems;\n  }\n  @State editMenuOptions: EditMenuOptions = {\n    onCreateMenu: this.onCreateMenu,\n    onMenuItemClick: this.onMenuItemClick,\n    onPrepareMenu: this.onPrepareMenu\n  };\n\n  build() {\n    Column() {\n      Search({ value: this.text })\n        .width('95%')\n        .editMenuOptions(this.editMenuOptions)\n        .margin({ top: 100 })\n        .onTextSelectionChange((selectionStart: number, selectionEnd: number) => {\n          this.endIndex = selectionEnd;\n        })\n    }\n    .width(\"90%\")\n    .margin(\"5%\")\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(567043)/* ["default"] */.A) + "",
        width: "1398",
        height: "744"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例11设置symbol类型清除按钮",
      children: "示例11（设置symbol类型清除按钮）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 10开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#searchicon10",
        children: "searchIcon"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#cancelbutton10",
        children: "cancelButton"
      }), "属性展示了自定义右侧symbol类型清除按钮样式的效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { SymbolGlyphModifier } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct SearchExample {\n  controller: SearchController = new SearchController();\n  @State changeValue: string = '';\n  @State submitValue: string = '';\n\n  build() {\n    Column() {\n      Search({ value: this.changeValue, placeholder: 'Type to search...', controller: this.controller })\n        .searchIcon(new SymbolGlyphModifier($r('sys.symbol.magnifyingglass')).fontColor([Color.Red]))\n        .cancelButton({\n          style: CancelButtonStyle.CONSTANT,\n          icon: new SymbolGlyphModifier($r('sys.symbol.xmark')).fontColor([Color.Green])\n        })\n        .searchButton('SEARCH')\n        .width('95%')\n        .height(40)\n        .backgroundColor('#F5F5F5')\n        .placeholderColor(Color.Grey)\n        .placeholderFont({ size: 14, weight: 400 })\n        .textFont({ size: 14, weight: 400 })\n        .margin(10)\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(482766)/* ["default"] */.A) + "",
        width: "952",
        height: "146"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例12设置文本是否可复制",
      children: "示例12（设置文本是否可复制）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 9开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#copyoption9",
        children: "copyOption"
      }), "属性展示如何设置文本是否可复制。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n\n@Entry\n@Component\nstruct SearchExample {\n  controller: SearchController = new SearchController();\n  @State copyValue: string = '';\n  @State cutValue: string = '';\n\n  build() {\n    Column({ space: 3 }) {\n      Text(\"copy: \" + this.copyValue)\n      Text(\"cut:\" + this.cutValue)\n      Search({ value: 'Search CopyOption:None', controller: this.controller })\n        .width('95%')\n        .height(40)\n        .copyOption(CopyOptions.None)\n        .onCopy((value: string) => {\n          this.copyValue = value;\n        })\n        .onCut((value: string) => {\n          this.cutValue = value;\n        })\n      Search({ value: 'Search CopyOption:InApp', controller: this.controller })\n        .width('95%')\n        .height(40)\n        .copyOption(CopyOptions.InApp)\n        .onCopy((value: string) => {\n          this.copyValue = value;\n        })\n        .onCut((value: string) => {\n          this.cutValue = value;\n        })\n      Search({ value: 'Search CopyOption:LocalDevice', controller: this.controller })\n        .width('95%')\n        .height(40)\n        .copyOption(CopyOptions.LocalDevice)\n        .onCopy((value: string) => {\n          this.copyValue = value;\n        })\n        .onCut((value: string) => {\n          this.cutValue = value;\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(130275)/* ["default"] */.A) + "",
        width: "556",
        height: "380"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例13设置文本水平对齐光标样式选中背景色",
      children: "示例13（设置文本水平对齐/光标样式/选中背景色）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#textalign9",
        children: "textAlign"
      }), "（从API version 9开始）、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#caretstyle10",
        children: "caretStyle"
      }), "（从API version 10开始）、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#selectedbackgroundcolor12",
        children: "selectedBackgroundColor"
      }), "（从API version 12开始）属性展示如何设置文本的水平对齐、光标样式和选中背景色。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n\n@Entry\n@Component\nstruct SearchExample {\n  controller: SearchController = new SearchController();\n\n  build() {\n    Column({ space: 3 }) {\n      Search({ value: 'Search textAlign sample', controller: this.controller })\n        .width('95%')\n        .height(40)\n        .stopBackPress(true)\n        .textAlign(TextAlign.Center)\n        .caretStyle({ width: 3, color: Color.Green })\n        .selectedBackgroundColor(Color.Gray)\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(686112)/* ["default"] */.A) + "",
        width: "557",
        height: "116"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例14设置默认获焦并拉起软键盘",
      children: "示例14（设置默认获焦并拉起软键盘）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-focus/ts-universal-attributes-focus#defaultfocus9",
        children: "defaultFocus"
      }), "（从API version 9开始）、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#enablekeyboardonfocus10",
        children: "enableKeyboardOnFocus"
      }), "（从API version 10开始）属性展示如何设置默认获焦并拉起软键盘。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n\n@Entry\n@Component\nstruct SearchExample {\n  controller: SearchController = new SearchController();\n  @State value: string = 'false';\n\n  build() {\n    Column({ space: 3 }) {\n      Text('editing: ' + this.value)\n      Search({ placeholder: 'please enter...', controller: this.controller })\n        .width('95%')\n        .height(40)\n        .defaultFocus(true)\n        .enableKeyboardOnFocus(true)\n        .enablePreviewText(true)\n        .enableHapticFeedback(true)\n        .onEditChange((data: boolean) => {\n          this.value = data ? 'true' : 'false';\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(218899)/* ["default"] */.A) + "",
        width: "704",
        height: "707"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例15关闭系统文本选择菜单",
      children: "示例15（关闭系统文本选择菜单）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#selectionmenuhidden10",
        children: "selectionMenuHidden"
      }), "（从API version 10开始）属性展示如何关闭系统文本选择菜单。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n\n@Entry\n@Component\nstruct SearchExample {\n  controller: SearchController = new SearchController();\n\n  build() {\n    Column({ space: 3 }) {\n      Search({ value: '123456', controller: this.controller })\n        .width('95%')\n        .height(40)\n        .type(SearchType.NUMBER)\n        .selectionMenuHidden(true)\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(275336)/* ["default"] */.A) + "",
        width: "563",
        height: "112"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例16对输入的文本进行过滤",
      children: "示例16（对输入的文本进行过滤）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#inputfilter12",
        children: "inputFilter"
      }), "属性展示如何对输入的文本进行内容的过滤，以限制输入内容。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n\n@Entry\n@Component\nstruct SearchExample {\n  controller: SearchController = new SearchController();\n  @State filterValue: string = '';\n\n  build() {\n    Column({ space: 3 }) {\n      Text('Filter:' + this.filterValue)\n      Search({ placeholder: 'please enter...', controller: this.controller })\n        .width('95%')\n        .height(40)\n        .textIndent(5)\n        .halfLeading(true)\n        .inputFilter('[a-z]', (filterValue: string) => {\n          this.filterValue = filterValue;\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(68904)/* ["default"] */.A) + "",
        width: "566",
        height: "142"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例17设置选中指定区域的文本内容",
      children: "示例17（设置选中指定区域的文本内容）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#settextselection12",
        children: "setTextSelection"
      }), "（从API version 12开始）方法展示如何设置选中指定区域的文本内容以及菜单的显隐策略。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n\n@Entry\n@Component\nstruct SearchExample {\n  controller: SearchController = new SearchController();\n  @State startIndex: number = 0;\n  @State endIndex: number = 0;\n\n  build() {\n    Column({ space: 3 }) {\n      Text('Selection start:' + this.startIndex + ' end:' + this.endIndex)\n      Search({ value: 'Hello World', controller: this.controller })\n        .width('95%')\n        .height(40)\n        .minFontScale(1)\n        .maxFontScale(1.5)\n        .defaultFocus(true)\n        .onTextSelectionChange((selectionStart: number, selectionEnd: number) => {\n          this.startIndex = selectionStart;\n          this.endIndex = selectionEnd;\n        })\n\n      Button('Selection [0,3]')\n        .onClick(() => {\n          this.controller.setTextSelection(0, 3, { menuPolicy: MenuPolicy.SHOW });\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(936831)/* ["default"] */.A) + "",
        width: "720",
        height: "261"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例18设置文本滚动事件",
      children: "示例18（设置文本滚动事件）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 10开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oncontentscroll10",
        children: "onContentScroll"
      }), "事件展示如何设置文本滚动事件的回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n\n@Entry\n@Component\nstruct SearchExample {\n  controller: SearchController = new SearchController();\n  @State offsetX: number = 0;\n  @State offsetY: number = 0;\n\n  build() {\n    Column({ space: 3 }) {\n      Text('offset x:' + this.offsetX + ' y:' + this.offsetY)\n      Search({ value: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', controller: this.controller })\n        .width(200)\n        .height(40)\n        .onContentScroll((totalOffsetX: number, totalOffsetY: number) => {\n          this.offsetX = totalOffsetX;\n          this.offsetY = totalOffsetY;\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(619199)/* ["default"] */.A) + "",
        width: "432",
        height: "145"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例19设置最小字体范围与最大字体范围",
      children: "示例19（设置最小字体范围与最大字体范围）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 18开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#minfontscale18",
        children: "minFontScale"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#maxfontscale18",
        children: "maxFontScale"
      }), "设置字体显示最小与最大范围。调整系统字体大小后，文本字体大小不会超过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#minfontscale18",
        children: "minFontScale"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#maxfontscale18",
        children: "maxFontScale"
      }), "设置的范围。如下示例展示了Search组件在不同的字体大小限制条件下，调整系统字体后的放大缩小效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 开启应用缩放跟随系统\n// AppScope/resources/base，新建文件夹profile。\n// AppScope/resources/base/profile，新建文件configuration.json。\n// AppScope/resources/base/profile/configuration.json，增加如下代码。\n{\n  \"configuration\": {\n    \"fontSizeScale\": \"followSystem\",\n    \"fontSizeMaxScale\": \"3.2\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// AppScope/app.json5，修改如下代码。\n{\n  \"app\": {\n    \"bundleName\": \"com.example.myapplication\",\n    \"vendor\": \"example\",\n    \"versionCode\": 1000000,\n    \"versionName\": \"1.0.0\",\n    \"icon\": \"$media:app_icon\",\n    \"label\": \"$string:app_name\",\n    \"configuration\": \"$profile:configuration\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct SearchExample {\n  @State minFontScale: number = 1.0;\n  @State maxFontScale: number = 1.0;\n  @State minFontScale2: number = 0.5;\n  @State maxFontScale2: number = 2.0;\n\n  build() {\n    Column() {\n      Column() {\n        Text(\"系统字体变大变小，变大变小aaaaaaaAAAAAA\")\n        Blank(30)\n        Text(\"minFontScale = \" + this.minFontScale)\n        Text(\"maxFontScale = \" + this.maxFontScale)\n        Search({\n          placeholder: 'The text area can hold an unlimited amount of text. input your word...',\n        })\n          .minFontScale(this.minFontScale) // 设置最小字体缩放倍数，参数为undefined则跟随系统默认倍数缩放\n          .maxFontScale(this.maxFontScale) // 设置最大字体缩放倍数，参数为undefined则跟随系统默认倍数缩放\n\n        Blank(30)\n\n        Text(\"minFontScale = \" + this.minFontScale2)\n        Text(\"maxFontScale = \" + this.maxFontScale2)\n        Search({\n          placeholder: 'The text area can hold an unlimited amount of text. input your word...',\n        })\n          .minFontScale(this.minFontScale2) // 设置最小字体缩放倍数，参数为undefined则跟随系统默认倍数缩放\n          .maxFontScale(this.maxFontScale2) // 设置最大字体缩放倍数，参数为undefined则跟随系统默认倍数缩放\n      }.width('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(266890)/* ["default"] */.A) + "",
        width: "366",
        height: "339"
      }), " ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(956873)/* ["default"] */.A) + "",
        width: "370",
        height: "247"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例20设置文本描边",
      children: "示例20（设置文本描边）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#strokewidth20",
        children: "strokeWidth"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#strokecolor20",
        children: "strokeColor"
      }), "属性设置文本的描边宽度及颜色。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { LengthMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct SearchExample {\n  build() {\n    Row() {\n      Column() {\n        Text('stroke feature').fontSize(9).fontColor(0xCCCCCC)\n\n        Search({ value: 'Text without stroke' })\n          .width('100%')\n          .height(60)\n          .borderWidth(1)\n          .minFontSize(40)\n          .maxFontSize(40)\n        Search({ value: 'Text with stroke' })\n          .width('100%')\n          .height(60)\n          .borderWidth(1)\n          .minFontSize(40)\n          .maxFontSize(40)\n          .strokeWidth(LengthMetrics.px(-3.0))\n          .strokeColor(Color.Red)\n        Search({ value: 'Text with stroke' })\n          .width('100%')\n          .height(60)\n          .borderWidth(1)\n          .minFontSize(40)\n          .maxFontSize(40)\n          .strokeWidth(LengthMetrics.px(3.0))\n          .strokeColor(Color.Red)\n      }.height('90%')\n    }\n    .width('90%')\n    .margin(10)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(170608)/* ["default"] */.A) + "",
        width: "374",
        height: "206"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例21设置中西文自动间距",
      children: "示例21（设置中西文自动间距）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#enableautospacing20",
        children: "enableAutoSpacing"
      }), "属性设置中西文自动间距。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct SearchExample {\n  build() {\n    Row() {\n      Column() {\n        Text('开启中西文自动间距').margin(5)\n        Search({value: '中西文Auto Spacing自动间距'})\n          .enableAutoSpacing(true)\n        Text('关闭中西文自动间距').margin(5)\n        Search({value: '中西文Auto Spacing自动间距'})\n          .enableAutoSpacing(false)\n      }.height('100%')\n    }\n    .width('60%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(267219)/* ["default"] */.A) + "",
        width: "410",
        height: "225"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例22设置placeholder富文本样式",
      children: "示例22（设置placeholder富文本样式）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 22开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-attributes-text-style/ts-universal-attributes-text-style#setstyledplaceholder22",
        children: "setStyledPlaceholder"
      }), "接口设置placeholder富文本样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { LengthMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct SearchExample {\n  styledString: MutableStyledString =\n    new MutableStyledString(\"输入框富文本：文本\",\n      [\n        {\n          start: 0,\n          length: 7,\n          styledKey: StyledStringKey.FONT,\n          styledValue: new TextStyle({\n            fontColor: Color.Orange,\n            fontSize: LengthMetrics.fp(24)\n          })\n        },\n        {\n          start: 7,\n          length: 4,\n          styledKey: StyledStringKey.FONT,\n          styledValue: new TextStyle({\n            fontColor: Color.Gray,\n            fontSize: LengthMetrics.fp(20),\n            strokeWidth: LengthMetrics.px(-5),\n            strokeColor: Color.Black,\n          })\n        },\n        {\n          start: 0,\n          length: 1,\n          styledKey: StyledStringKey.PARAGRAPH_STYLE,\n          styledValue: new ParagraphStyle({\n            textVerticalAlign: TextVerticalAlign.CENTER\n          })\n        }\n      ]);\n  controller: SearchController = new SearchController();\n\n  aboutToAppear() {\n    this.controller.setStyledPlaceholder(this.styledString)\n  }\n\n  build() {\n    Scroll() {\n      Column() {\n        Text(\"Search placeholder富文本\")\n          .fontSize(8)\n        Search({\n          controller: this.controller\n        })\n          .textFont({ size: 24 })\n          .margin(10)\n      }\n      .width('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(388907)/* ["default"] */.A) + "",
        width: "842",
        height: "181"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例23设置输入法扩展信息",
      children: "示例23（设置输入法扩展信息）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 22开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#imeclient20%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "IMEClient"
      }), "的setExtraConfig设置输入法扩展信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct SearchExample {\n  build() {\n    Column() {\n      Search({ value: '拉起输入法前执行onWillAttachIME回调' })\n        .onWillAttachIME((client: IMEClient) => {\n          client.setExtraConfig({\n            customSettings: {\n              name: \"Search\", // 自定义属性\n              id: client.nodeId // 自定义属性\n            }\n          })\n        })\n    }.height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例24设置输入框分割线颜色",
      children: "示例24（设置输入框分割线颜色）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 23开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#dividercolor23",
        children: "dividerColor"
      }), "接口设置输入框分割线颜色。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { ColorMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct SearchExample {\n  @State colorTypeRGB: ColorMetrics = ColorMetrics.numeric(0x00FF00);\n  @State colorTypeARGB: ColorMetrics = ColorMetrics.numeric(0x3300FF00);\n  @State colorTypeColorWithSpace: ColorMetrics = ColorMetrics.colorWithSpace(ColorSpace.DISPLAY_P3, 0, 1.0, 0, 1.0);\n  @State colorTypeRGBA: ColorMetrics = ColorMetrics.rgba(255, 0, 0, 1.0);\n  // 需要替换为开发者所需的资源文件\n  @State colorTypeRes: ColorMetrics = ColorMetrics.resourceColor($r('app.color.color'));\n  @State colorType: ColorMetrics[] =\n    [this.colorTypeRGB, this.colorTypeARGB, this.colorTypeColorWithSpace, this.colorTypeRGBA, this.colorTypeRes];\n  @State colorTypeName: string[] =\n    [\"colorTypeRGB\", \"colorTypeARGB\", \"colorTypeColorWithSpace\", \"colorTypeRGBA\", \"colorTypeRes\"];\n  @State count: number = 0;\n\n  build() {\n    Column() {\n      Blank(30)\n      Search({ value: \"Input search text\" })\n        .searchButton(\"SEARCH\", { fontSize: '14vp' })\n        .dividerColor(this.colorType[this.count])\n      Button(\"Change ColorType: \" + this.colorTypeName[this.count]).onClick(() => {\n        this.count = (this.count + 1) % (this.colorType.length)\n      })\n        .fontSize('14vp')\n        .width('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(864697)/* ["default"] */.A) + "",
        width: "360",
        height: "99"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例25设置行首标点压缩",
      children: "示例25（设置行首标点压缩）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#compressleadingpunctuation23",
        children: "compressLeadingPunctuation"
      }), "接口设置行首标点压缩，左侧有间距的标点符号位于行首时，标点会直接压缩间距至左侧边界。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，支持compressLeadingPunctuation接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column(){\n      Search({ value: \"\\u300C行首标点压缩打开\" })\n        .compressLeadingPunctuation(true)\n        .margin(5)\n        .textFont({size:30})\n        .width(\"90%\")\n      Search({ value: \"\\u300C行首标点压缩关闭\" })\n        .compressLeadingPunctuation(false)\n        .textFont({size:30})\n        .width(\"90%\")\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(471011)/* ["default"] */.A) + "",
        width: "379",
        height: "101"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例26设置自适应间距",
      children: "示例26（设置自适应间距）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#includefontpadding23",
        children: "includeFontPadding"
      }), "接口增加首行尾行间距和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fallbacklinespacing23",
        children: "fallbackLineSpacing"
      }), "接口设置自适应行间距。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 23开始，新增", (0,jsx_runtime.jsx)(_components.a, {
        href: "#includefontpadding23",
        children: "includeFontPadding"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fallbacklinespacing23",
        children: "fallbackLineSpacing"
      }), "接口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n\nconst UYGHUR_TEXT: string = 'ياخشىمۇسەنياخشىمۇسەنياخشىمۇسەنياخشىمۇسەنياخشىمۇسەنياخشىمۇسەنياخشىمۇسەن';\n@Entry\n@Component\nstruct Index {\n  @State include: boolean | null | undefined = false;\n  @State fallback: boolean | null | undefined = false;\n  @State displayText: string = UYGHUR_TEXT;\n\n  build() {\n    Column() {\n      Search({\n        value: this.displayText,\n        placeholder: '请输入内容...'\n      })\n        .includeFontPadding(this.include)\n        .fallbackLineSpacing(this.fallback)\n        .lineHeight(5)\n        .width('100%')\n        .height(100)\n        .backgroundColor('#eee')\n        .borderWidth(1)\n        .borderColor('#dddddd')\n\n      Scroll() {\n        Column() {\n          // --- IncludeFontPadding相关按钮 ---\n          Button('设置includePadding: ' + this.include)\n            .onClick(() => {\n              this.include = this.include === false ? true : false;\n            })\n            .margin({ bottom: 10 })\n\n          // --- FallbackLineSpacing相关按钮 ---\n          Button('设置fallbackLineSpacing: ' + this.fallback)\n            .onClick(() => {\n              this.fallback = this.fallback === false ? true : false;\n            })\n            .margin({ bottom: 10 })\n\n        }\n        .width('100%')\n        .padding(5)\n      }\n      .height(250)\n      .backgroundColor('transparent')\n      .scrollBarWidth(2)\n      .scrollBarColor('#888')\n\n    }\n    .width('100%')\n    .height('100%')\n    .padding(20)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(951004)/* ["default"] */.A) + "",
        width: "490",
        height: "326"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例27设置文本拖拽时的背板样式",
      children: "示例27（设置文本拖拽时的背板样式）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#selecteddragpreviewstyle23",
        children: "selectedDragPreviewStyle"
      }), "接口设置文本拖拽时的背板样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，新增selectedDragPreviewStyle接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct SearchTest {\n  build() {\n    Column() {\n      Search({ value: 'HelloWorld', placeholder: 'please input words' })\n        .copyOption(CopyOptions.InApp)\n        .width(200)\n        .height(50)\n        .margin(150)\n        .draggable(true)\n        .selectedDragPreviewStyle({color: 'rgba(227, 248, 249, 1)'})\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(958448)/* ["default"] */.A) + "",
        width: "467",
        height: "279"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例28删除文本框内的最后一个字符",
      children: "示例28（删除文本框内的最后一个字符）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-attributes-text-style/ts-universal-attributes-text-style#deletebackward23",
        children: "deleteBackward"
      }), "接口删除文本框内最后一个字符。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 23开始，新增", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-attributes-text-style/ts-universal-attributes-text-style#deletebackward23",
        children: "deleteBackward"
      }), "接口。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Page {\n  controller: SearchController = new SearchController();\n\n  build() {\n    Column() {\n      Search({ placeholder: '搜索框示例', controller: this.controller })\n      Button('Delete backward')\n        .onClick(() => {\n          this.controller.deleteBackward();\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(854802)/* ["default"] */.A) + "",
        width: "503",
        height: "105"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例29设置文本排版方向",
      children: "示例29（设置文本排版方向）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#textdirection23",
        children: "textDirection"
      }), "接口设置文本排版方向。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，新增textDirection接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct SearchExample {\n  @State text: string = 'Search文本排版方向示例';\n\n  build() {\n    Column({ space: 3 }) {\n      Text('Search文本排版方向RTL，布局方向default')\n        .fontSize(12).width('90%').margin(5)\n      Search({ value: this.text })\n        .width('95%')\n        .height(40)\n        .textDirection(TextDirection.RTL)\n      Text('Search文本排版方向RTL，布局方向default，文本水平方向对齐方式LEFT')\n        .fontSize(12).width('90%').margin(5)\n      Search({ value: this.text })\n        .width('95%')\n        .height(40)\n        .textDirection(TextDirection.RTL)\n        .textAlign(TextAlign.LEFT)\n      Text('Search文本排版方向LTR，布局方向RTL')\n        .fontSize(12).width('90%').margin(5)\n      Search({ value: this.text })\n        .width('95%')\n        .height(40)\n        .textDirection(TextDirection.LTR)\n        .direction(Direction.Rtl)\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(388699)/* ["default"] */.A) + "",
        width: "529",
        height: "396"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例30将指定范围的文字滚动到可视区内",
      children: "示例30（将指定范围的文字滚动到可视区内）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-attributes-text-style/ts-universal-attributes-text-style#scrolltovisible23",
        children: "scrollToVisible"
      }), "将可视区外的文本滚动到可视区内。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，新增scrollToVisible接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct SearchExample {\n  @State text: string = '12345678912345678912346789123456789123456789012121214521';\n  controller: SearchController = new SearchController();\n\n  build() {\n    Column() {\n      Search({ value: this.text, controller: this.controller })\n        .width(336)\n        .height(56)\n      Button(\"滚动文本到可视区\").onClick(()=> {\n        this.controller.scrollToVisible({ start: 22, end: 30})\n      })\n    }.width('100%').height('100%').backgroundColor('#F1F3F5')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(827275)/* ["default"] */.A) + "",
        width: "525",
        height: "147"
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
619199(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800154-e65672f18e4302fcf7c6bb6130549962.gif");

},
489378(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
515596(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800146-9c6c2fc48a5846a49b71dd94e970bcb7.gif");

},
267219(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800156-f99ec81274e6fdd2e9a35ec63d82621d.png");

},
936831(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479803-2e496e3f0c92876ce9fc34146ed06fac.png");

},
956873(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959804-a4f2192a0134e1568313981b1fc61542.png");

},
266890(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439849-59d6833db394995aceb5238c592a37db.png");

},
471011(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479807-eee1f62b8bd61d33e0b9aac782db7b47.gif");

},
853706(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
854802(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959808-793e0c44f67df4e32ba30bbdd3755d63.gif");

},
278034(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
786553(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959796-9102cc6b00f54cd4313f3e03cc4a926a.gif");

},
218899(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800152-ec957502aeb0e23980347b756fb43f9c.gif");

},
493003(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
130275(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959800-f49dbdb9d7bdb1328c2dd9574473d61c.gif");

},
686112(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479801-bc384bc8cdfed708c16696b6e8cd331b.gif");

},
678097(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479795-18be2578705e21017bb9f677a435f805.gif");

},
482766(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439845-6dca90810e4019b26450c41aa67e2987.png");

},
951004(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800158-585e8ead580158c92a840b5c1e257589.gif");

},
567043(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800150-baa1660cca2a81a5b1aafecc30c3456f.png");

},
109928(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479799-1632269845d2aefcc87685fb628760c9.png");

},
84359(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439841-c0f89e90a9c32f9a3bfe072b51f8c91a.gif");

},
388907(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439851-5af748ebb7318ee237568e9d7688f673.jpg");

},
190368(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
998716(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
450270(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439843-603bad5b3d3f08031038e08ab3d82bb5.gif");

},
951143(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
68904(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959802-573edcad2d2d59ab373ebd7b769b44cf.gif");

},
122312(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
275336(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439847-e725d9a077875cf2bd4f9512f34fd999.gif");

},
388699(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479809-b81c9f84218c25bd482d649e8015a18e.png");

},
392496(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
864697(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959806-5420a0ae04bcb19abef8208758fbfad4.jpg");

},
827275(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800160-31fb972fecb6a184ca8a41fbf2958ac6.gif");

},
411685(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
565897(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959798-43ae4bd2b151023983d0dea2336f32dd.png");

},
958448(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439853-279b6d5f65202d6b3737226ffa549e24.png");

},
512084(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
486886(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800148-41112a8b19e79020d3fa4e3af6276b93.png");

},
170608(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479805-d15c87ba65a22eb707d5c88622a20043.png");

},
689502(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
805437(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479797-622caa2e7a2a57a1f137dce73970f327.png");

},
706959(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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