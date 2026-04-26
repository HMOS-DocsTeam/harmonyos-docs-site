"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["245947"], {
652100(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_text_and_input_ts_universal_styled_string_ts_universal_styled_string_md_401_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-text-and-input-ts-universal-styled-string-ts-universal-styled-string-md-401.json
var site_docs_ref_arkui_api_arkui_declarative_comp_text_and_input_ts_universal_styled_string_ts_universal_styled_string_md_401_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string","title":"属性字符串","description":"方便灵活应用文本样式的对象，可通过TextController中的setStyledString方法与Text组件绑定，可通过RichEditorStyledStringController中的setStyledString方法与RichEditor组件绑定。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string.md","sourceDirName":"arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string","slug":"/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"属性字符串","sidebar_position":13,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-styled-string","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-universal-styled-string"},"sidebar":"ref","previous":{"title":"RichText","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richtext/ts-basic-components-richtext"},"next":{"title":"输入框类组件通用接口","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-attributes-text-style/ts-universal-attributes-text-style"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string.md


const frontMatter = {
	title: '属性字符串',
	sidebar_position: 13,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-styled-string',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-universal-styled-string'
};
const contentTitle = '属性字符串';

const assets = {

};



const toc = [{
  "value": "规则说明",
  "id": "规则说明",
  "level": 2
}, {
  "value": "StyledString",
  "id": "styledstring",
  "level": 2
}, {
  "value": "constructor",
  "id": "constructor",
  "level": 3
}, {
  "value": "属性",
  "id": "属性",
  "level": 3
}, {
  "value": "getString",
  "id": "getstring",
  "level": 3
}, {
  "value": "equals",
  "id": "equals",
  "level": 3
}, {
  "value": "subStyledString",
  "id": "substyledstring",
  "level": 3
}, {
  "value": "getStyles",
  "id": "getstyles",
  "level": 3
}, {
  "value": "fromHtml",
  "id": "fromhtml",
  "level": 3
}, {
  "value": "toHtml14+",
  "id": "tohtml14",
  "level": 3
}, {
  "value": "MutableStyledString",
  "id": "mutablestyledstring",
  "level": 2
}, {
  "value": "replaceString",
  "id": "replacestring",
  "level": 3
}, {
  "value": "insertString",
  "id": "insertstring",
  "level": 3
}, {
  "value": "removeString",
  "id": "removestring",
  "level": 3
}, {
  "value": "replaceStyle",
  "id": "replacestyle",
  "level": 3
}, {
  "value": "setStyle",
  "id": "setstyle",
  "level": 3
}, {
  "value": "removeStyle",
  "id": "removestyle",
  "level": 3
}, {
  "value": "removeStyles",
  "id": "removestyles",
  "level": 3
}, {
  "value": "clearStyles",
  "id": "clearstyles",
  "level": 3
}, {
  "value": "replaceStyledString",
  "id": "replacestyledstring",
  "level": 3
}, {
  "value": "insertStyledString",
  "id": "insertstyledstring",
  "level": 3
}, {
  "value": "appendStyledString",
  "id": "appendstyledstring",
  "level": 3
}, {
  "value": "StyledStringValue",
  "id": "styledstringvalue",
  "level": 2
}, {
  "value": "StyleOptions对象说明",
  "id": "styleoptions对象说明",
  "level": 2
}, {
  "value": "SpanStyle对象说明",
  "id": "spanstyle对象说明",
  "level": 2
}, {
  "value": "TextStyle",
  "id": "textstyle",
  "level": 2
}, {
  "value": "属性",
  "id": "属性-1",
  "level": 3
}, {
  "value": "constructor",
  "id": "constructor-1",
  "level": 3
}, {
  "value": "TextStyleInterface对象说明",
  "id": "textstyleinterface对象说明",
  "level": 2
}, {
  "value": "GestureStyle",
  "id": "gesturestyle",
  "level": 2
}, {
  "value": "constructor",
  "id": "constructor-2",
  "level": 3
}, {
  "value": "GestureStyleInterface对象说明",
  "id": "gesturestyleinterface对象说明",
  "level": 2
}, {
  "value": "DecorationOptions20+",
  "id": "decorationoptions20",
  "level": 2
}, {
  "value": "DecorationStyle",
  "id": "decorationstyle",
  "level": 2
}, {
  "value": "属性",
  "id": "属性-2",
  "level": 3
}, {
  "value": "constructor",
  "id": "constructor-3",
  "level": 3
}, {
  "value": "constructor20+",
  "id": "constructor20",
  "level": 3
}, {
  "value": "DecorationStyleInterface",
  "id": "decorationstyleinterface",
  "level": 2
}, {
  "value": "BaselineOffsetStyle",
  "id": "baselineoffsetstyle",
  "level": 2
}, {
  "value": "属性",
  "id": "属性-3",
  "level": 3
}, {
  "value": "constructor",
  "id": "constructor-4",
  "level": 3
}, {
  "value": "LetterSpacingStyle",
  "id": "letterspacingstyle",
  "level": 2
}, {
  "value": "属性",
  "id": "属性-4",
  "level": 3
}, {
  "value": "constructor",
  "id": "constructor-5",
  "level": 3
}, {
  "value": "LineHeightStyle",
  "id": "lineheightstyle",
  "level": 2
}, {
  "value": "属性",
  "id": "属性-5",
  "level": 3
}, {
  "value": "constructor",
  "id": "constructor-6",
  "level": 3
}, {
  "value": "TextShadowStyle",
  "id": "textshadowstyle",
  "level": 2
}, {
  "value": "属性",
  "id": "属性-6",
  "level": 3
}, {
  "value": "constructor",
  "id": "constructor-7",
  "level": 3
}, {
  "value": "ImageAttachment",
  "id": "imageattachment",
  "level": 2
}, {
  "value": "属性",
  "id": "属性-7",
  "level": 3
}, {
  "value": "constructor",
  "id": "constructor-8",
  "level": 3
}, {
  "value": "constructor15+",
  "id": "constructor15",
  "level": 3
}, {
  "value": "AttachmentType15+",
  "id": "attachmenttype15",
  "level": 2
}, {
  "value": "ColorFilterType15+",
  "id": "colorfiltertype15",
  "level": 2
}, {
  "value": "ImageAttachmentInterface对象说明",
  "id": "imageattachmentinterface对象说明",
  "level": 2
}, {
  "value": "ImageAttachmentLayoutStyle对象说明",
  "id": "imageattachmentlayoutstyle对象说明",
  "level": 2
}, {
  "value": "ResourceImageAttachmentOptions15+",
  "id": "resourceimageattachmentoptions15",
  "level": 2
}, {
  "value": "CustomSpan",
  "id": "customspan",
  "level": 2
}, {
  "value": "onMeasure",
  "id": "onmeasure",
  "level": 3
}, {
  "value": "onDraw",
  "id": "ondraw",
  "level": 3
}, {
  "value": "invalidate13+",
  "id": "invalidate13",
  "level": 3
}, {
  "value": "CustomSpanMeasureInfo对象说明",
  "id": "customspanmeasureinfo对象说明",
  "level": 2
}, {
  "value": "CustomSpanMetrics对象说明",
  "id": "customspanmetrics对象说明",
  "level": 2
}, {
  "value": "CustomSpanDrawInfo对象说明",
  "id": "customspandrawinfo对象说明",
  "level": 2
}, {
  "value": "ParagraphStyle",
  "id": "paragraphstyle",
  "level": 2
}, {
  "value": "属性",
  "id": "属性-8",
  "level": 3
}, {
  "value": "constructor",
  "id": "constructor-9",
  "level": 3
}, {
  "value": "ParagraphStyleInterface对象说明",
  "id": "paragraphstyleinterface对象说明",
  "level": 2
}, {
  "value": "UserDataSpan",
  "id": "userdataspan",
  "level": 2
}, {
  "value": "LeadingMarginSpan22+",
  "id": "leadingmarginspan22",
  "level": 2
}, {
  "value": "onDraw22+",
  "id": "ondraw22",
  "level": 3
}, {
  "value": "getLeadingMargin22+",
  "id": "getleadingmargin22",
  "level": 3
}, {
  "value": "LeadingMarginSpanDrawInfo22+对象说明",
  "id": "leadingmarginspandrawinfo22对象说明",
  "level": 2
}, {
  "value": "StyledStringKey枚举说明",
  "id": "styledstringkey枚举说明",
  "level": 2
}, {
  "value": "BackgroundColorStyle14+",
  "id": "backgroundcolorstyle14",
  "level": 2
}, {
  "value": "属性",
  "id": "属性-9",
  "level": 3
}, {
  "value": "constructor14+",
  "id": "constructor14",
  "level": 3
}, {
  "value": "UrlStyle14+",
  "id": "urlstyle14",
  "level": 2
}, {
  "value": "属性",
  "id": "属性-10",
  "level": 3
}, {
  "value": "constructor14+",
  "id": "constructor14-1",
  "level": 3
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（属性字符串处理）",
  "id": "示例1属性字符串处理",
  "level": 3
}, {
  "value": "示例2（设置事件）",
  "id": "示例2设置事件",
  "level": 3
}, {
  "value": "示例3（设置文本样式）",
  "id": "示例3设置文本样式",
  "level": 3
}, {
  "value": "示例4（设置图片）",
  "id": "示例4设置图片",
  "level": 3
}, {
  "value": "示例5（设置文本行高和段落样式）",
  "id": "示例5设置文本行高和段落样式",
  "level": 3
}, {
  "value": "示例6（设置自定义绘制Span）",
  "id": "示例6设置自定义绘制span",
  "level": 3
}, {
  "value": "示例7（支持存储自定义扩展信息）",
  "id": "示例7支持存储自定义扩展信息",
  "level": 3
}, {
  "value": "示例8（设置超链接）",
  "id": "示例8设置超链接",
  "level": 3
}, {
  "value": "示例9 （给图片设置colorFilter）",
  "id": "示例9-给图片设置colorfilter",
  "level": 3
}, {
  "value": "示例10（属性字符串的插入、删除、替换）",
  "id": "示例10属性字符串的插入删除替换",
  "level": 3
}, {
  "value": "示例11（属性字符串的文本描边）",
  "id": "示例11属性字符串的文本描边",
  "level": 3
}, {
  "value": "示例12（fromHtml和toHtml互相转换）",
  "id": "示例12fromhtml和tohtml互相转换",
  "level": 3
}, {
  "value": "示例13（多装饰线与加粗装饰线）",
  "id": "示例13多装饰线与加粗装饰线",
  "level": 3
}, {
  "value": "示例14（获取以vp为单位的图片尺寸）",
  "id": "示例14获取以vp为单位的图片尺寸",
  "level": 3
}, {
  "value": "示例15（设置段落自定义缩进）",
  "id": "示例15设置段落自定义缩进",
  "level": 3
}, {
  "value": "示例16（使用supportSvg2属性时，SVG图片的显示效果）",
  "id": "示例16使用supportsvg2属性时svg图片的显示效果",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    b: "b",
    br: "br",
    code: "code",
    del: "del",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    i: "i",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    s: "s",
    span: "span",
    strong: "strong",
    sub: "sub",
    sup: "sup",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    u: "u",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "属性字符串",
        children: "属性字符串"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方便灵活应用文本样式的对象，可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#textcontroller11",
        children: "TextController"
      }), "中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#setstyledstring12",
        children: "setStyledString"
      }), "方法与Text组件绑定，可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#richeditorstyledstringcontroller12",
        children: "RichEditorStyledStringController"
      }), "中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#setstyledstring12",
        children: "setStyledString"
      }), "方法与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor",
        children: "RichEditor"
      }), "组件绑定。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(789708)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，支持通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-measureutils/arkts-apis-uicontext-measureutils#getparagraphs20",
        children: "getParagraphs"
      }), "获取属性字符串的文本布局信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "属性字符串目前不支持在worker线程中使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["属性字符串通过controller绑定时，需要等待布局完成后，绑定生效。当", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#measure12",
        children: "measure"
      }), "和setStyledString同时使用，开发者需要通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-inspector/js-apis-arkui-inspector",
        children: "@ohos.arkui.inspector (布局回调)"
      }), "判断布局完成，再绑定属性字符串。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则说明",
      children: "规则说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当组件样式和属性字符串中的样式冲突时，冲突部分以属性字符串设置的样式为准，未冲突部分则生效组件的样式。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当属性字符串和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
          children: "Text"
        }), "子组件冲突时，属性字符串优先级高，即当Text组件中绑定了属性字符串，忽略Text组件下包含", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-span/ts-basic-components-span",
          children: "Span"
        }), "等子组件的情况。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不支持", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
          children: "@State"
        }), "修饰。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "建议将StyledString定义为成员变量，从而避免应用退后台后被销毁。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["不支持在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#loadcontent9",
          children: "loadContent()"
        }), "之前创建。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "styledstring",
      children: "StyledString"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(value: string | ImageAttachment | CustomSpan, styles?: Array<StyleOptions>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "属性字符串的构造函数。"
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#imageattachment",
              children: "ImageAttachment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#customspan",
              children: "CustomSpan"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "styles"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#styleoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "StyleOptions"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["属性字符串初始化选项。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  start为异常值时，按默认值0处理；  当length为异常值时，length等于属性字符串在start后的实际长度；  当StyledStringKey与StyledStringValue不匹配时，styles不生效。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "属性",
      children: "属性"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["属性字符串字符的长度。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  属性字符串中的ImageAttachment和CustomSpan长度都计为1。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getstring",
      children: "getString"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getString(): string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取字符串信息。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["属性字符串文本内容。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  当属性字符串中包含图片或", (0,jsx_runtime.jsx)(_components.a, {
              href: "#customspan",
              children: "CustomSpan"
            }), "时，其返回的结果用空格表示。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "equals",
      children: "equals"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "equals(other: StyledString): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断两个属性字符串是否相等。"
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
            children: "other"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#styledstring",
              children: "StyledString"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "StyledString类型的比较对象。"
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["两个属性字符串是否相等。  true表示相等，false表示不相等。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  当属性字符串的文本及样式均一致，视为相等。  不比较", (0,jsx_runtime.jsx)(_components.a, {
              href: "#gesturestyle",
              children: "GestureStyle"
            }), "，当属性字符串配置了不同事件，文本和其他样式相同时，亦视为相等。  当比较", (0,jsx_runtime.jsx)(_components.a, {
              href: "#customspan",
              children: "CustomSpan"
            }), "或", (0,jsx_runtime.jsx)(_components.a, {
              href: "#leadingmarginspan22",
              children: "LeadingMarginSpan"
            }), "时，比较的是地址，地址相等，视为相等。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "substyledstring",
      children: "subStyledString"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "subStyledString(start: number, length?: number): StyledString"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取属性字符串的子属性字符串。不能超出属性字符串的长度。"
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
            children: "start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子属性字符串开始位置的下标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "子属性字符串的长度。"
          })]
        })]
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#styledstring",
              children: "StyledString"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["子属性字符串。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  当start为合法入参时，length的默认值是被查询属性字符串对象的长度与start的值的差。  当start和length越界或者必填传入undefined时，会抛出异常。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getstyles",
      children: "getStyles"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getStyles(start: number, length: number, styledKey?: StyledStringKey): Array<SpanStyle>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取指定范围属性字符串的样式集合。不能超出属性字符串的长度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该接口仅返回开发者设置的样式。"
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
            children: "start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定范围属性字符串的下标。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定范围属性字符串的长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "styledKey"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#styledstringkey%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "StyledStringKey"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定范围属性字符串样式的枚举值。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  当不传入该参数时默认获取开发者设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#styledstringkey%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "StyledStringKey"
            }), "所有枚举值样式。"]
          })]
        })]
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
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#spanstyle%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "SpanStyle"
            }), ">"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["各样式对象的数组。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  当指定范围属性字符串未设置任何样式，则返回空数组。  当start和length越界或者必填传入undefined时，会抛出异常；  当styledKey传入异常值或undefined时，会抛出异常。  当styledKey为CustomSpan时，返回的是创建CustomSpan时传入的样式对象，即修改该样式对象也会影响实际的显示效果。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码"
        })
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed."
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fromhtml",
      children: "fromHtml"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static fromHtml(html: string): Promise<StyledString>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将HTML格式字符串转换成属性字符串，当前支持转换的HTML标签范围："
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["、", (0,jsx_runtime.jsxs)(_components.span, {
        children: ["、", (0,jsx_runtime.jsx)(_components.img, {}), "、", (0,jsx_runtime.jsx)(_components.br, {}), "、", (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["、", (0,jsx_runtime.jsxs)(_components.b, {
            children: ["、", (0,jsx_runtime.jsxs)(_components.a, {
              children: ["、", (0,jsx_runtime.jsxs)(_components.i, {
                children: ["、", (0,jsx_runtime.jsxs)(_components.em, {
                  children: ["、", (0,jsx_runtime.jsxs)(_components.s, {
                    children: ["、", (0,jsx_runtime.jsxs)(_components.u, {
                      children: ["、", (0,jsx_runtime.jsxs)(_components.del, {
                        children: ["、", (0,jsx_runtime.jsxs)(_components.sup, {
                          children: ["、", (0,jsx_runtime.jsx)(_components.sub, {
                            children: "。支持将标签中的style属性样式转换成对应的属性字符串样式。"
                          })]
                        })]
                      })]
                    })]
                  })]
                })]
              })]
            })]
          })]
        })]
      })]
    }), (0,jsx_runtime.jsx)(_components.strong, {
      children: (0,jsx_runtime.jsxs)(_components.b, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          children: (0,jsx_runtime.jsx)(_components.i, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.s, {
                children: (0,jsx_runtime.jsx)(_components.u, {
                  children: "\n"
                })
              })
            })
          })
        }), (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.s, {
            children: (0,jsx_runtime.jsxs)(_components.u, {
              children: [(0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.a, {
                  children: "使用方法参考"
                }), (0,jsx_runtime.jsx)(_components.a, {
                  href: "#%E7%A4%BA%E4%BE%8B12fromhtml%E5%92%8Ctohtml%E4%BA%92%E7%9B%B8%E8%BD%AC%E6%8D%A2",
                  children: "示例12（fromHtml和toHtml互相转换）"
                }), "。"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "标签名称"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "说明"
                    })]
                  })
                }), (0,jsx_runtime.jsxs)(_components.tbody, {
                  children: [(0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.p, {})
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "段落，分隔文本段落"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.span, {})
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["行内文本，支持样式设置。API version 17及之前，", (0,jsx_runtime.jsx)(_components.span, {
                        children: "设置的background-color属性转换不生效。"
                      })]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.img, {})
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "插入图片"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {})
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "加粗文本"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsxs)(_components.td, {
                      children: [(0,jsx_runtime.jsx)(_components.br, {}), "20+"]
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "换行"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.b, {
                        children: "20+"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "加粗文本"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        children: "20+"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "超链接"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.i, {
                        children: "20+"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "斜体文本"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.em, {
                        children: "20+"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "斜体文本"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.s, {
                        children: "20+"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "删除线（中划线）"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.u, {
                        children: "20+"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "下划线"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.del, {
                        children: "20+"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "删除线（中划线）"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.sup, {
                        children: "20+"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "上标文本"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.sub, {
                        children: "20+"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "下标文本"
                    })]
                  })]
                })]
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
                      children: "html"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "string"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "html格式的字符串。"
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
                        href: "#styledstring",
                        children: "StyledString"
                      }), ">"]
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "属性字符串。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "错误码"
                  })
                }), "："]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/errorcode-universal/errorcode-universal",
                  children: "通用错误码"
                }), "和", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-arkts-errcode/arkui-ui-arkts-errcode/errorcode-styled-string/errorcode-styled-string",
                  children: "属性字符串错误码"
                }), "。"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "错误码ID"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "错误信息"
                    })]
                  })
                }), (0,jsx_runtime.jsxs)(_components.tbody, {
                  children: [(0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "401"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed."
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "170001"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Convert Error."
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "tohtml14",
                children: "toHtml14+"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "static toHtml(styledString: StyledString): string"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["将属性字符串转换成HTML格式字符串。支持转换的属性字符串", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#styledstringkey%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
                  children: "StyledStringKey"
                }), "包括：StyledStringKey.FONT、StyledStringKey.DECORATION、StyledStringKey.LETTER_SPACING、StyledStringKey.TEXT_SHADOW、StyledStringKey.LINE_HEIGHT、StyledStringKey.IMAGE。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["使用方法参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#%E7%A4%BA%E4%BE%8B12fromhtml%E5%92%8Ctohtml%E4%BA%92%E7%9B%B8%E8%BD%AC%E6%8D%A2",
                  children: "示例12（fromHtml和toHtml互相转换）"
                }), "。"]
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
                      children: "styledString"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "StyledString"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "属性字符串。"
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
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "string"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "HTML格式字符串。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "错误码"
                  })
                }), "："]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/errorcode-universal/errorcode-universal",
                  children: "通用错误码"
                }), "。"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "错误码ID"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "错误信息"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.tbody, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "401"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed."
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "mutablestyledstring",
                children: "MutableStyledString"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["继承于", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#styledstring",
                  children: "StyledString"
                }), "类。"]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.img, {
                  src: (__webpack_require__(94710)/* ["default"] */.A) + "",
                  width: "102",
                  height: "38"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "当start和length越界或者必填传入undefined时，会抛出异常；"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "当styledKey和styledValue传入异常值或者两者对应关系不匹配时，会抛出异常。"
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "replacestring",
                children: "replaceString"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "replaceString(start: number , length: number , other: string): void"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "替换指定范围的字符串。"
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
                      children: "start"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "指定范围的下标。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "length"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "指定范围的长度。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "other"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "string"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["替换的新文本内容。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "说明："
                        })
                      }), "  替换的字符串使用的是start位置字符的样式。"]
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "错误码"
                  })
                }), "："]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/errorcode-universal/errorcode-universal",
                  children: "通用错误码"
                }), "。"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "错误码ID"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "错误信息"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.tbody, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "401"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed."
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "insertstring",
                children: "insertString"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "insertString(start: number , other: string): void"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "插入字符串。"
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
                      children: "start"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "插入位置的下标。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "other"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "string"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["插入的新文本内容。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "说明："
                        })
                      }), "  插入的字符串使用的是start-1位置字符的样式。若start-1位置字符未设置样式，则使用start位置字符样式。"]
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "错误码"
                  })
                }), "："]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/errorcode-universal/errorcode-universal",
                  children: "通用错误码"
                }), "。"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "错误码ID"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "错误信息"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.tbody, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "401"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed."
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "removestring",
                children: "removeString"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "removeString(start: number , length: number): void"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "移除指定范围的字符串。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["当属性字符串中包含图片或", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#customspan",
                  children: "CustomSpan"
                }), "时，同样生效。"]
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
                      children: "start"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "指定范围的下标。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "length"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "指定范围的长度。"
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "错误码"
                  })
                }), "："]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/errorcode-universal/errorcode-universal",
                  children: "通用错误码"
                }), "。"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "错误码ID"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "错误信息"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.tbody, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "401"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed."
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "replacestyle",
                children: "replaceStyle"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "replaceStyle(spanStyle: SpanStyle): void"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "替换指定范围内容为指定类型新样式。"
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
                      children: "spanStyle"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#spanstyle%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
                        children: "SpanStyle"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["样式对象。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "说明："
                        })
                      }), "  默认清空原有样式，替换为新样式。  当SpanStyle的styledKey为IMAGE或CUSTOM_SPAN时，只有当start的位置当前是image或CustomSpan且长度为1，才会生效，其余情况无效果。"]
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "错误码"
                  })
                }), "："]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/errorcode-universal/errorcode-universal",
                  children: "通用错误码"
                }), "。"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "错误码ID"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "错误信息"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.tbody, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "401"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed."
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "setstyle",
                children: "setStyle"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "setStyle(spanStyle: SpanStyle): void"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "为指定范围内容设置指定类型新样式。"
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
                      children: "spanStyle"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#spanstyle%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
                        children: "SpanStyle"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "样式对象。  默认不清空原有样式，叠加新样式。如果StyledStringValue类型相同，则新样式将覆盖旧样式。  当SpanStyle的styledKey为IMAGE或CUSTOM_SPAN时，只有当start的位置当前是image或CustomSpan且长度为1，才会生效，其余情况无效果。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.img, {
                  src: (__webpack_require__(741296)/* ["default"] */.A) + "",
                  width: "102",
                  height: "38"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "样式的最小颗粒度是StyledStringValue，如果设置了多个相同的StyledStringValue，只有最后一次设置会生效。如设置两个属性不同的TextStyle，则只有第二次设置的TextStyle生效。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "错误码"
                  })
                }), "："]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/errorcode-universal/errorcode-universal",
                  children: "通用错误码"
                }), "。"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "错误码ID"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "错误信息"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.tbody, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "401"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "The parameter check failed."
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "removestyle",
                children: "removeStyle"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "removeStyle(start: number , length: number , styledKey: StyledStringKey): void"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "清除指定范围内容的指定类型样式。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["被清空样式类型对象属性使用的是对应", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
                  children: "Text"
                }), "组件属性的设置值，若Text组件未设置值，则使用对应Text组件属性的默认值。"]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "当属性字符串中包含图片时，同样生效。"
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
                      children: "start"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "指定范围开始位置的下标。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "length"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "指定范围的长度。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "styledKey"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#styledstringkey%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
                        children: "StyledStringKey"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "样式类型枚举值。"
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "错误码"
                  })
                }), "："]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/errorcode-universal/errorcode-universal",
                  children: "通用错误码"
                }), "。"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "错误码ID"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "错误信息"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.tbody, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "401"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed."
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "removestyles",
                children: "removeStyles"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "removeStyles(start: number , length: number): void"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "清除指定范围内容的所有样式。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["被清空样式类型对象属性使用的是对应", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
                  children: "Text"
                }), "组件属性的设置值，若Text组件未设置值，则使用对应Text组件属性的默认值。"]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "当属性字符串中包含图片时，同样生效。"
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
                      children: "start"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "指定范围开始位置的下标。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "length"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "指定范围的长度。"
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "错误码"
                  })
                }), "："]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/errorcode-universal/errorcode-universal",
                  children: "通用错误码"
                }), "。"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "错误码ID"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "错误信息"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.tbody, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "401"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed."
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "clearstyles",
                children: "clearStyles"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "clearStyles(): void"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "清除属性字符串对象的所有样式。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["被清空样式类型对象属性使用的是对应", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
                  children: "Text"
                }), "组件属性的设置值，若Text组件未设置值，则使用对应Text组件属性的默认值。"]
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
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "replacestyledstring",
                children: "replaceStyledString"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "replaceStyledString(start: number , length: number , other: StyledString): void"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "替换指定范围为新的属性字符串。"
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
                      children: "start"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "指定范围开始位置的下标。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "length"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "指定范围的长度。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "other"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#styledstring",
                        children: "StyledString"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "新的属性字符串对象。"
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "错误码"
                  })
                }), "："]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/errorcode-universal/errorcode-universal",
                  children: "通用错误码"
                }), "。"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "错误码ID"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "错误信息"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.tbody, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "401"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed."
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "insertstyledstring",
                children: "insertStyledString"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "insertStyledString(start: number , other: StyledString): void"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "在指定位置插入新的属性字符串。"
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
                      children: "start"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "开始插入位置的下标。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "other"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#styledstring",
                        children: "StyledString"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "新的属性字符串对象。"
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "错误码"
                  })
                }), "："]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["以下错误码详细介绍请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/errorcode-universal/errorcode-universal",
                  children: "通用错误码"
                }), "。"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "错误码ID"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "错误信息"
                    })]
                  })
                }), (0,jsx_runtime.jsx)(_components.tbody, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "401"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameters types; 3. Parameter verification failed."
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "appendstyledstring",
                children: "appendStyledString"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "appendStyledString(other: StyledString): void"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "在末尾位置追加新的属性字符串。"
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
                      children: "other"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#styledstring",
                        children: "StyledString"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "新的属性字符串对象。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "styledstringvalue",
                children: "StyledStringValue"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "type StyledStringValue = TextStyle | DecorationStyle | BaselineOffsetStyle | LetterSpacingStyle |"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "TextShadowStyle | GestureStyle | ImageAttachment | ParagraphStyle | LineHeightStyle | UrlStyle | CustomSpan | UserDataSpan | BackgroundColorStyle"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "样式对象类型，用于设置属性字符串的样式。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "元服务API："
                  })
                }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "类型"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "说明"
                    })]
                  })
                }), (0,jsx_runtime.jsxs)(_components.tbody, {
                  children: [(0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#textstyle",
                        children: "TextStyle"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "文本字体样式。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#decorationstyle",
                        children: "DecorationStyle"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "文本装饰线样式。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#baselineoffsetstyle",
                        children: "BaselineOffsetStyle"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "文本基线偏移量样式。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#letterspacingstyle",
                        children: "LetterSpacingStyle"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "文本字符间距样式。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#lineheightstyle",
                        children: "LineHeightStyle"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "文本行高样式。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#textshadowstyle",
                        children: "TextShadowStyle"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "文本阴影样式。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#gesturestyle",
                        children: "GestureStyle"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "事件手势样式。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#paragraphstyle",
                        children: "ParagraphStyle"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "文本段落样式。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#imageattachment",
                        children: "ImageAttachment"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "图片样式。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#customspan",
                        children: "CustomSpan"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "自定义绘制Span样式。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#userdataspan",
                        children: "UserDataSpan"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "UserDataSpan样式。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#urlstyle14",
                        children: "UrlStyle"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "超链接样式。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#backgroundcolorstyle14",
                        children: "BackgroundColorStyle"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "文本背景颜色样式。"
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "styleoptions对象说明",
                children: "StyleOptions对象说明"
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
                      children: "start"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "设置属性字符串样式的开始位置。  当start的值小于0或超出字符串长度时，按0处理。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "length"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "设置属性字符串样式的长度。  当length的值小于0或超出字符串长度与start的差值时，按字符串长度与start的差值处理。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "styledKey"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#styledstringkey%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
                        children: "StyledStringKey"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "样式类型的枚举值。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "styledValue"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#styledstringvalue",
                        children: "StyledStringValue"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "样式对象。"
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "spanstyle对象说明",
                children: "SpanStyle对象说明"
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
                      children: "start"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "匹配属性字符串样式的开始位置。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "length"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "匹配属性字符串样式的长度。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "styledKey"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#styledstringkey%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
                        children: "StyledStringKey"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "样式类型的枚举值。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "styledValue"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#styledstringvalue",
                        children: "StyledStringValue"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "样式对象。"
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "textstyle",
                children: "TextStyle"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "文本字体样式对象说明。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.ArkUI.ArkUI.Full"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "属性-1",
                children: "属性"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.ArkUI.ArkUI.Full"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                      children: "fontColor"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
                        children: "ResourceColor"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["获取属性字符串的文本颜色。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "fontFamily"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "string"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["获取属性字符串的文本字体。  默认返回undefined。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "fontSize"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["获取属性字符串的文本字体大小。  单位：", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-pixel-units/ts-pixel-units",
                        children: "vp"
                      }), "  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "fontWeight"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["获取属性字符串的文本字体粗细。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "fontStyle"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#fontstyle",
                        children: "FontStyle"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["获取属性字符串的文本字体样式。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "strokeWidth20+"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["获取属性字符串的文本描边宽度。  默认返回0，单位为", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-pixel-units/ts-pixel-units",
                        children: "vp"
                      }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 20开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "strokeColor20+"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
                        children: "ResourceColor"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["获取属性字符串的文本描边颜色。  默认返回字体颜色。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 20开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "superscript20+"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#superscriptstyle20%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
                        children: "SuperscriptStyle"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["获取属性字符串的文本上下角标。  默认值：SuperscriptStyle.NORMAL。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 20开始，该接口支持在元服务中使用。"]
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "fontWeight参数与返回值的关系如下："
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "参数"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "返回值"
                    })]
                  })
                }), (0,jsx_runtime.jsxs)(_components.tbody, {
                  children: [(0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "100"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "0"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "200"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "1"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "300"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "2"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "400"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "3"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "500"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "4"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "600"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "5"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "700"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "6"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "800"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "7"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "900"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "8"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "FontWeight.Bold (or 'bold')"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "9"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "FontWeight.Normal (or 'normal')"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "10"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "FontWeight.Bolder (or 'bolder')"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "11"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "FontWeight.Lighter (or 'lighter')"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "12"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "FontWeight.Medium (or 'medium')"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "13"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "FontWeight.Regular (or 'regular')"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "14"
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "constructor-1",
                children: "constructor"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "constructor(value?: TextStyleInterface)"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "文本字体样式的构造函数。"
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
                        href: "#textstyleinterface%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
                        children: "TextStyleInterface"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "字体样式设置项。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "textstyleinterface对象说明",
                children: "TextStyleInterface对象说明"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.ArkUI.ArkUI.Full"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                      children: ["字体颜色。  默认为主题色。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "fontFamily"
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
                      children: ["文本字体。  默认为主题字体。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "fontSize"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
                        children: "LengthMetrics"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["字体大小。  默认字体大小为16fp。  如果LengthMetrics的unit值是percent，当前设置不生效，处理为16fp。  单位：", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-pixel-units/ts-pixel-units",
                        children: "fp"
                      }), "  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "fontWeight"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#fontweight",
                        children: "FontWeight"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "string"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "fontStyle"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#fontstyle",
                        children: "FontStyle"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["字体样式。  默认值：FontStyle.Normal  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "strokeWidth20+"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
                        children: "LengthMetrics"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["文本描边宽度。如果LengthMetrics的unit值是percent，当前设置不生效，处理为0。  设置值小于0时为实心字，大于0时为空心字。  默认值为0。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 20开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "strokeColor20+"
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
                      children: ["文本描边颜色。  默认值为字体颜色，设置异常值时取字体颜色。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 20开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "superscript20+"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#superscriptstyle20%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
                        children: "SuperscriptStyle"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["文本上下角标。  默认值：SuperscriptStyle.NORMAL  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 20开始，该接口支持在元服务中使用。"]
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "gesturestyle",
                children: "GestureStyle"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "事件手势对象说明。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.ArkUI.ArkUI.Full"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "constructor-2",
                children: "constructor"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "constructor(value?: GestureStyleInterface)"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "事件手势的构造函数。"
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
                        href: "#gesturestyleinterface%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
                        children: "GestureStyleInterface"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "事件设置项。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "gesturestyleinterface对象说明",
                children: "GestureStyleInterface对象说明"
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
                      children: "onClick"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-click/ts-universal-events-click#clickevent",
                        children: "ClickEvent"
                      }), ">"]
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["设置点击事件。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "onLongPress"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/ts-gesture-common/ts-gesture-common#gestureevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
                        children: "GestureEvent"
                      }), ">"]
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["设置长按事件。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "onTouch20+"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-touch/ts-universal-events-touch#touchevent%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
                        children: "TouchEvent"
                      }), ">"]
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["设置触摸事件。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 20开始，该接口支持在元服务中使用。"]
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "decorationoptions20",
                children: "DecorationOptions20+"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "文本装饰线样式的额外配置选项对象说明。"
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
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                }), (0,jsx_runtime.jsx)(_components.tbody, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "enableMultiType"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "boolean"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是否开启多装饰线显示。  默认值：undefined。设置为true开启，设置为false/undefined关闭。  所有需要显示的装饰线都必须启用此选项，在这些装饰线的交集区域显示多装饰线效果，样式、颜色和粗细将采用最后设置的装饰线的效果。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "decorationstyle",
                children: "DecorationStyle"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "文本装饰线样式对象说明。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.ArkUI.ArkUI.Full"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "属性-2",
                children: "属性"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.ArkUI.ArkUI.Full"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                      children: "type"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#textdecorationtype",
                        children: "TextDecorationType"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["获取属性字符串的文本装饰线类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["获取属性字符串的文本装饰线颜色。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "style"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#textdecorationstyle12",
                        children: "TextDecorationStyle"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["获取属性字符串的文本装饰线样式。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "thicknessScale20+"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["获取属性字符串的文本装饰线粗细缩放值。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 20开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "options20+"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#decorationoptions20",
                        children: "DecorationOptions"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["获取属性字符串的文本装饰线样式的额外配置选项。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 20开始，该接口支持在元服务中使用。"]
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "constructor-3",
                children: "constructor"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "constructor(value: DecorationStyleInterface)"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "文本装饰线样式的构造函数。"
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
                        href: "#decorationstyleinterface",
                        children: "DecorationStyleInterface"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "文本装饰线设置项。  默认值：  {  type: TextDecorationType.None,  color: Color.Black,  style: TextDecorationStyle.SOLID  }"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "constructor20",
                children: "constructor20+"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "constructor(value: DecorationStyleInterface, options?: DecorationOptions)"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "文本装饰线样式的构造函数，包含额外配置选项。"
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
                        href: "#decorationstyleinterface",
                        children: "DecorationStyleInterface"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "文本装饰线设置项。  默认值：  {  type: TextDecorationType.None,  color: Color.Black,  style: TextDecorationStyle.SOLID,  thicknessScale: 1.0  }"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "options"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#decorationoptions20",
                        children: "DecorationOptions"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "文本装饰线额外配置选项。  默认值：  {  enableMultiType: undefined  }"
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "decorationstyleinterface",
                children: "DecorationStyleInterface"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "文本装饰线样式接口对象说明。"
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
                      children: "type"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#textdecorationtype",
                        children: "TextDecorationType"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["装饰线类型。  默认值：TextDecorationType.None  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
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
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["装饰线颜色。  默认值：Color.Black  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "style"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#textdecorationstyle12",
                        children: "TextDecorationStyle"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["装饰线样式。  默认值：TextDecorationStyle.SOLID  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "thicknessScale20+"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["装饰线粗细缩放。  默认值：1.0  取值范围：[0, +∞)  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "说明："
                        })
                      }), " 负值按默认值处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 20开始，该接口支持在元服务中使用。"]
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.img, {
                  src: (__webpack_require__(571670)/* ["default"] */.A) + "",
                  width: "102",
                  height: "38"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "当文字的下边缘轮廓与装饰线位置相交时，会触发下划线避让规则，下划线将在这些字符处避让文字。常见“gjyqp”等英文字符。"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "当文本装饰线的颜色设置为Color.Transparent时，装饰线颜色设置为跟随每行第一个字的字体颜色。当文本装饰线的颜色设置为透明色16进制对应值“#00FFFFFF”时，装饰线颜色设置为透明色。"
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "baselineoffsetstyle",
                children: "BaselineOffsetStyle"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "文本基线偏移量对象说明。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.ArkUI.ArkUI.Full"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "属性-3",
                children: "属性"
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
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                }), (0,jsx_runtime.jsx)(_components.tbody, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "baselineOffset"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["获取属性字符串的文本基线偏移量。  单位：", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-pixel-units/ts-pixel-units",
                        children: "vp"
                      })]
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "constructor-4",
                children: "constructor"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "constructor(value: LengthMetrics)"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "文本基线偏移的构造函数。"
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
                        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
                        children: "LengthMetrics"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "文本基线偏移量设置项。如果LengthMetrics的unit值是percent，该设置不生效。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "letterspacingstyle",
                children: "LetterSpacingStyle"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "文本字符间距对象说明。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.ArkUI.ArkUI.Full"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "属性-4",
                children: "属性"
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
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                }), (0,jsx_runtime.jsx)(_components.tbody, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "letterSpacing"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["获取属性字符串的文本字符间距。  单位：", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-pixel-units/ts-pixel-units",
                        children: "vp"
                      })]
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "constructor-5",
                children: "constructor"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "constructor(value: LengthMetrics)"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "文本字符间距的构造函数。"
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
                        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
                        children: "LengthMetrics"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "文本字符间距设置项。如果LengthMetrics的unit值是percent，该设置不生效。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "lineheightstyle",
                children: "LineHeightStyle"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "文本行高对象说明。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.ArkUI.ArkUI.Full"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "属性-5",
                children: "属性"
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
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                }), (0,jsx_runtime.jsx)(_components.tbody, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "lineHeight"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["获取属性字符串的文本行高。  单位：", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-pixel-units/ts-pixel-units",
                        children: "vp"
                      })]
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "constructor-6",
                children: "constructor"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "constructor(lineHeight: LengthMetrics)"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "文本行高的构造函数。"
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
                      children: "lineHeight"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
                        children: "LengthMetrics"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "文本行高设置项。如果LengthMetrics的value值不大于0时，不限制文本行高，自适应字体大小。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "textshadowstyle",
                children: "TextShadowStyle"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "文本阴影对象说明。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.ArkUI.ArkUI.Full"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "属性-6",
                children: "属性"
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
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                }), (0,jsx_runtime.jsx)(_components.tbody, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "textShadow"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#shadowoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
                        children: "ShadowOptions"
                      }), ">"]
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "获取属性字符串的文本阴影。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "constructor-7",
                children: "constructor"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "constructor(value: ShadowOptions | Array<ShadowOptions>)"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "文本阴影对象的构造函数。"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "ShadowOptions对象中不支持fill字段。"
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
                        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#shadowoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
                        children: "ShadowOptions"
                      })
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#shadowoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
                        children: "ShadowOptions"
                      }), ">"]
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "imageattachment",
                children: "ImageAttachment"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "图片对象说明。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.ArkUI.ArkUI.Full"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "属性-7",
                children: "属性"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.ArkUI.ArkUI.Full"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                      children: "value"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
                        children: "PixelMap"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["获取属性字符串的图片数据源。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "size"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#sizeoptions",
                        children: "SizeOptions"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["获取属性字符串的图片尺寸。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。  返回number类型值的单位为px。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "sizeInVp21+"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#sizeoptions",
                        children: "SizeOptions"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["获取属性字符串的图片尺寸。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 21开始，该接口支持在元服务中使用。  返回number类型值的单位为vp。  当ImageAttachment尺寸设置为负数值或undefined时，返回为undefined。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "verticalAlign"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#imagespanalignment10",
                        children: "ImageSpanAlignment"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["获取属性字符串的图片对齐方式。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "objectFit"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#imagefit",
                        children: "ImageFit"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["获取属性字符串的图片缩放类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "layoutStyle"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#imageattachmentlayoutstyle%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
                        children: "ImageAttachmentLayoutStyle"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["获取属性字符串的图片布局。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "colorFilter15+"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#colorfiltertype15",
                        children: "ColorFilterType"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["获取属性字符串的图片颜色滤镜效果。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 15开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "supportSvg222+"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "boolean"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["获取属性字符串是否开启", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-image-svg2-capabilities/ts-image-svg2-capabilities",
                        children: "SVG标签解析能力增强功能"
                      }), "。  true：支持SVG解析新能力；false：保持原有SVG解析能力。  默认值：false  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 22开始，该接口支持在元服务中使用。"]
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "constructor-8",
                children: "constructor"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "constructor(value: ImageAttachmentInterface)"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "图片对象的构造函数。"
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
                        href: "#imageattachmentinterface%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
                        children: "ImageAttachmentInterface"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "图片设置项。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "constructor15",
                children: "constructor15+"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "constructor(attachment: Optional<AttachmentType>)"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["图片对象的构造函数。与value类型入参构造函数相比，attachment参数增加了对undefined类型和", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
                  children: "ResourceStr"
                }), "类型图片的支持。"]
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
                      children: "attachment"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["Optional<", (0,jsx_runtime.jsx)(_components.a, {
                        href: "#attachmenttype15",
                        children: "AttachmentType"
                      }), ">"]
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["PixelMap类型或", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
                        children: "ResourceStr"
                      }), "类型图片设置项。"]
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "attachmenttype15",
                children: "AttachmentType15+"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "type AttachmentType = ImageAttachmentInterface | ResourceImageAttachmentOptions"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["图片设置项类型，用于设置属性字符串PixelMap类型或", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
                  children: "ResourceStr"
                }), "类型图片。"]
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
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "类型"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "说明"
                    })]
                  })
                }), (0,jsx_runtime.jsxs)(_components.tbody, {
                  children: [(0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#imageattachmentinterface%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
                        children: "ImageAttachmentInterface"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "PixelMap类型图片设置项。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#resourceimageattachmentoptions15",
                        children: "ResourceImageAttachmentOptions"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "ResourceStr类型图片设置项。"
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "colorfiltertype15",
                children: "ColorFilterType15+"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "type ColorFilterType = ColorFilter | DrawingColorFilter"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "图片颜色滤镜设置项类型。"
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
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                children: [(0,jsx_runtime.jsx)(_components.thead, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.th, {
                      children: "类型"
                    }), (0,jsx_runtime.jsx)(_components.th, {
                      children: "说明"
                    })]
                  })
                }), (0,jsx_runtime.jsxs)(_components.tbody, {
                  children: [(0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#colorfilter9",
                        children: "ColorFilter"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "ColorFilter类型图片颜色滤镜设置项。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-basic-components-image/ts-basic-components-image#drawingcolorfilter12",
                        children: "DrawingColorFilter"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "DrawingColorFilter类型图片颜色滤镜设置项。"
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "imageattachmentinterface对象说明",
                children: "ImageAttachmentInterface对象说明"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.ArkUI.ArkUI.Full"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                      children: "value"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
                        children: "PixelMap"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["设置图片数据源。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "size"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#sizeoptions",
                        children: "SizeOptions"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["设置图片大小，不支持百分比。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。  size的默认值与objectFit的值有关，不同的objectFit的值对应size的默认值不同。比如当objectFit的值为Cover时，图片高度为组件高度减去组件上下的内边距，图片宽度为组件宽度减去组件左右的内边距。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "verticalAlign"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#imagespanalignment10",
                        children: "ImageSpanAlignment"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["设置图片基于文本的对齐方式。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。  默认值：ImageSpanAlignment.BOTTOM"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "objectFit"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#imagefit",
                        children: "ImageFit"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["设置图片的缩放类型，当前枚举类型不支持ImageFit.MATRIX。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。  默认值：ImageFit.Cover"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "layoutStyle"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#imageattachmentlayoutstyle%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
                        children: "ImageAttachmentLayoutStyle"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["设置图片布局。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "colorFilter15+"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#colorfiltertype15",
                        children: "ColorFilterType"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["设置属性字符串的图片颜色滤镜效果。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 15开始，该接口支持在元服务中使用。"]
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "imageattachmentlayoutstyle对象说明",
                children: "ImageAttachmentLayoutStyle对象说明"
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
                      children: "margin"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
                        children: "LengthMetrics"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#margin",
                        children: "Margin"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "padding"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
                        children: "LengthMetrics"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#padding",
                        children: "Padding"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "borderRadius"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
                        children: "LengthMetrics"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#borderradiuses9",
                        children: "BorderRadiuses"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "resourceimageattachmentoptions15",
                children: "ResourceImageAttachmentOptions15+"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "ResourceStr类型图片设置项。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.ArkUI.ArkUI.Full"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                      children: "resourceValue"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["Optional<", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
                        children: "ResourceStr"
                      }), ">"]
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["设置图片数据源。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 15开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "size"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#sizeoptions",
                        children: "SizeOptions"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["设置图片大小。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 15开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "verticalAlign"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#imagespanalignment10",
                        children: "ImageSpanAlignment"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["设置图片基于文本的对齐方式。  默认值：ImageSpanAlignment.BOTTOM  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 15开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "objectFit"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#imagefit",
                        children: "ImageFit"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["设置图片的缩放类型，当前枚举类型不支持ImageFit.MATRIX。  默认值：ImageFit.Cover  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 15开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "layoutStyle"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#imageattachmentlayoutstyle%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
                        children: "ImageAttachmentLayoutStyle"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["设置图片布局。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 15开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "colorFilter"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#colorfiltertype15",
                        children: "ColorFilterType"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["设置属性字符串的图片颜色滤镜效果。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 15开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "syncLoad"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "boolean"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["是否同步加载图片，默认是异步加载。同步加载时阻塞UI线程，不会显示占位图。  true：同步加载；false：异步加载。  默认值：false  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 15开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "supportSvg222+"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "boolean"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["控制是否开启", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-image-svg2-capabilities/ts-image-svg2-capabilities",
                        children: "SVG标签解析能力增强功能"
                      }), "。  true：支持SVG解析新能力；false：保持原有SVG解析能力。  默认值：false  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 22开始，该接口支持在元服务中使用。"]
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "customspan",
                children: "CustomSpan"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "自定义绘制Span，仅提供基类，具体实现由开发者定义。"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "自定义绘制Span拖拽显示的缩略图为空白。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.ArkUI.ArkUI.Full"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "onmeasure",
                children: "onMeasure"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "abstract onMeasure(measureInfo: CustomSpanMeasureInfo): CustomSpanMetrics"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "获取自定义绘制Span的尺寸大小。"
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
                      children: "measureInfo"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#customspanmeasureinfo%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
                        children: "CustomSpanMeasureInfo"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "文本的字体大小。"
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
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#customspanmetrics%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
                        children: "CustomSpanMetrics"
                      })
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["自定义绘制Span的尺寸信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "说明："
                        })
                      }), "  最终的CustomSpan的高度是由当前Text组件的行高所决定的。当height不传值，则默认取Text组件的fontSize的值作为CustomSpan的高度；当height大于当前行的其他子组件的高度时，此时height即为Text组件的行高。"]
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "ondraw",
                children: "onDraw"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "abstract onDraw(context: DrawContext, drawInfo: CustomSpanDrawInfo): void"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "绘制自定义绘制Span。"
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
                      children: "context"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#drawcontext",
                        children: "DrawContext"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["图形绘制上下文。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "说明："
                        })
                      }), "  DrawContext的canvas方法获取的画布是Text组件的画布，绘制时不会超出Text组件的范围。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "drawInfo"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#customspandrawinfo%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
                        children: "CustomSpanDrawInfo"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "自定义绘制Span的绘制信息。"
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "invalidate13",
                children: "invalidate13+"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "invalidate(): void"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "主动刷新使用CustomSpan的Text组件。"
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
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "customspanmeasureinfo对象说明",
                children: "CustomSpanMeasureInfo对象说明"
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
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                }), (0,jsx_runtime.jsx)(_components.tbody, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "fontSize"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["设置文本字体大小。  单位：", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-pixel-units/ts-pixel-units",
                        children: "fp"
                      })]
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "customspanmetrics对象说明",
                children: "CustomSpanMetrics对象说明"
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
                      children: "width"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["自定义绘制Span的宽。  单位：", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-pixel-units/ts-pixel-units",
                        children: "vp"
                      })]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "height"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["自定义绘制Span的高。  单位：", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-pixel-units/ts-pixel-units",
                        children: "vp"
                      })]
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "customspandrawinfo对象说明",
                children: "CustomSpanDrawInfo对象说明"
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
                      children: "x"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["自定义绘制Span相对于挂载组件的偏移。  单位：", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-pixel-units/ts-pixel-units",
                        children: "px"
                      })]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "lineTop"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["自定义绘制Span相对于Text组件的上边距。  单位：", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-pixel-units/ts-pixel-units",
                        children: "px"
                      })]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "lineBottom"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["自定义绘制Span相对于Text组件的下边距。  单位：", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-pixel-units/ts-pixel-units",
                        children: "px"
                      })]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "baseline"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["自定义绘制Span的所在行的基线偏移量。  单位：", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-pixel-units/ts-pixel-units",
                        children: "px"
                      })]
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "paragraphstyle",
                children: "ParagraphStyle"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "文本段落样式对象说明。"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "除首个段落外，后续段落按'\\n'划分。"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "每个段落的段落样式按首个占位设置的段落样式生效，未设置时，段落按被绑定组件的段落样式生效。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.ArkUI.ArkUI.Full"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "属性-8",
                children: "属性"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.ArkUI.ArkUI.Full"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                      children: "textAlign"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#textalign",
                        children: "TextAlign"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["获取属性字符串文本段落在水平方向的对齐方式。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "textIndent"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["获取属性字符串文本段落的首行文本缩进。单位VP  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "maxLines"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["获取属性字符串文本段落的最大行数。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "overflow"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#textoverflow",
                        children: "TextOverflow"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["获取属性字符串文本段落超长时的显示方式。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "wordBreak"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#wordbreak11",
                        children: "WordBreak"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["获取属性字符串文本段落的断行规则。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "leadingMargin"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#leadingmarginplaceholder11",
                        children: "LeadingMarginPlaceholder"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "paragraphSpacing19+"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["获取属性字符串文本段落的段落间距。  单位：vp  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 19开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "textVerticalAlign20+"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#textverticalalign20",
                        children: "TextVerticalAlign"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["获取属性字符串文本段落在垂直方向的对齐方式。  一个段落下使用同一字号必须同时设置行高", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#lineheight",
                        children: "lineHeight"
                      }), "或者同一个段落不同字号文本混排时才有效果差异，否则设置了该属性任意枚举值和未设置该属性都是一样的排版效果。属性字符串", (0,jsx_runtime.jsx)(_components.a, {
                        href: "#textstyle",
                        children: "TextStyle"
                      }), "中的SuperscriptStyle上下角标样式仅在", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#textverticalalign20",
                        children: "TextVerticalAlign"
                      }), "属性值为TextVerticalAlign.BASELINE时生效，其余垂直对齐方式下上下角标文本和普通文本表现一致，无上下角标效果。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 20开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "leadingMarginSpan22+"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#leadingmarginspan22",
                        children: "LeadingMarginSpan"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["获取属性字符串文本段落的自定义缩进信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 22开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "textDirection23+"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#textdirection22",
                        children: "TextDirection"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["获取文本方向。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 23开始，该接口支持在元服务中使用。"]
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.img, {
                  src: (__webpack_require__(124647)/* ["default"] */.A) + "",
                  width: "102",
                  height: "38"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "属性字符串的maxLines和overflow仅在Text中生效，建议在组件侧设置。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["textAlign只能调整文本整体的布局，不影响字符的显示顺序。若需要调整字符的显示顺序，请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/arkui/arkts-ui-development/arkts-internationalization#%E9%95%9C%E5%83%8F%E7%8A%B6%E6%80%81%E5%AD%97%E7%AC%A6%E5%AF%B9%E9%BD%90",
                  children: "镜像状态字符对齐"
                }), "。"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "constructor-9",
                children: "constructor"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "constructor(value?: ParagraphStyleInterface)"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "文本段落样式的构造函数。"
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
                        href: "#paragraphstyleinterface%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
                        children: "ParagraphStyleInterface"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "段落样式设置项。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "paragraphstyleinterface对象说明",
                children: "ParagraphStyleInterface对象说明"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.ArkUI.ArkUI.Full"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                      children: "textAlign"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#textalign",
                        children: "TextAlign"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["设置文本段落在水平方向的对齐方式。  默认值：TextAlign.Start  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "textIndent"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
                        children: "LengthMetrics"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["设置文本段落的首行文本缩进。不支持百分比。  默认值：0  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "maxLines"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["设置文本段落的最大行数，默认不限制。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "overflow"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#textoverflow",
                        children: "TextOverflow"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["设置文本段落超长时的显示方式。  默认值：TextOverflow.None  需配合maxLines使用，单独设置不生效。不支持TextOverflow.MARQUEE。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "wordBreak"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#wordbreak11",
                        children: "WordBreak"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["设置文本段落的断行规则。  默认值：WordBreak.NORMAL  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "leadingMargin"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
                        children: "LengthMetrics"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#leadingmarginplaceholder11",
                        children: "LeadingMarginPlaceholder"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "paragraphSpacing19+"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
                        children: "LengthMetrics"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["设置文本段落的段落间距。  段落间距默认大小为0。不支持百分比。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 19开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "textVerticalAlign20+"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#textverticalalign20",
                        children: "TextVerticalAlign"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["设置文本段落在垂直方向的对齐方式。  默认值：TextVerticalAlign.BASELINE  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 20开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "leadingMarginSpan22+"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#leadingmarginspan22",
                        children: "LeadingMarginSpan"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["设置文本段落的自定义缩进。不支持百分比。  默认值：0  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 22开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "textDirection23+"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#textdirection22",
                        children: "TextDirection"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["设置文本方向。  默认值：TextDirection.DEFAULT  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 23开始，该接口支持在元服务中使用。"]
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "userdataspan",
                children: "UserDataSpan"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "支持存储自定义扩展信息，用于存储和获取用户数据，仅提供基类，具体实现由开发者定义。"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "扩展信息不影响实际显示效果。"
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
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "leadingmarginspan22",
                children: "LeadingMarginSpan22+"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "文本段落的自定义缩进，仅提供基类，具体实现由开发者定义。"
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "ondraw22",
                children: "onDraw22+"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "abstract onDraw(context: DrawContext, drawInfo: LeadingMarginSpanDrawInfo): void"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "绘制自定义图案。段落中的每一行文本都会触发一次onDraw。"
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
                      children: "context"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#drawcontext",
                        children: "DrawContext"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "图形绘制上下文。  DrawContext的canvas方法获取的是组件的画布，绘制时不会超出组件的范围。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "drawInfo"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "#leadingmarginspandrawinfo22%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
                        children: "LeadingMarginSpanDrawInfo"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "自定义绘制信息。"
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "getleadingmargin22",
                children: "getLeadingMargin22+"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "abstract getLeadingMargin(): LengthMetrics"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "返回文本段落的缩进距离。"
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
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
                        children: "LengthMetrics"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "文本段落的缩进。不支持百分比。  默认值：0"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "leadingmarginspandrawinfo22对象说明",
                children: "LeadingMarginSpanDrawInfo22+对象说明"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "自定义绘制信息。"
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
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                      children: "x"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["当前行相对于组件的水平偏移。direction为RTL时，返回当前行右侧与组件右边缘的距离。  单位：", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-pixel-units/ts-pixel-units",
                        children: "px"
                      }), "  取值范围：大于等于0。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "top"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["行顶与组件上边缘的距离。  单位：", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-pixel-units/ts-pixel-units",
                        children: "px"
                      }), "  取值范围：大于等于0。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "bottom"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["行底与组件上边缘的距离。  单位：", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-pixel-units/ts-pixel-units",
                        children: "px"
                      }), "  取值范围：大于等于0。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "baseline"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["当前行的基线与组件上边缘的距离。  单位：", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-pixel-units/ts-pixel-units",
                        children: "px"
                      }), "  取值范围：大于等于0。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "direction"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#textdirection22",
                        children: "TextDirection"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "文本内容的方向。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "start"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "当前行的起始索引。  取值范围：大于等于0。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "end"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "number"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "当前行的结束索引。  取值范围：大于等于0。"
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "first"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "boolean"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "当前行是否是段落的首行。  true：首行；false：非首行。"
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "styledstringkey枚举说明",
                children: "StyledStringKey枚举说明"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "范围属性字符串样式。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.ArkUI.ArkUI.Full"]
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                      children: "FONT"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "0"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["字体样式键。", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#textstyle",
                        children: "TextStyle"
                      }), "所属键。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "DECORATION"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "1"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["文本装饰线样式键。", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#decorationstyle",
                        children: "DecorationStyle"
                      }), "所属键。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "BASELINE_OFFSET"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "2"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["文本基线偏移量样式键。", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#baselineoffsetstyle",
                        children: "BaselineOffsetStyle"
                      }), "所属键。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "LETTER_SPACING"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "3"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["文本字符间距样式键。", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#letterspacingstyle",
                        children: "LetterSpacingStyle"
                      }), "所属键。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "TEXT_SHADOW"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "4"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["文本阴影样式键。", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#textshadowstyle",
                        children: "TextShadowStyle"
                      }), "所属键。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "LINE_HEIGHT"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "5"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["文本行高样式键。", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#lineheightstyle",
                        children: "LineHeightStyle"
                      }), "所属键。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "BACKGROUND_COLOR14+"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "6"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["文本背景色样式键。", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#backgroundcolorstyle14",
                        children: "BackgroundColorStyle"
                      }), "所属键。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 14开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "URL14+"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "7"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["超链接样式键。", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#urlstyle14",
                        children: "UrlStyle"
                      }), "所属键。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 14开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "GESTURE"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "100"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["事件手势键。", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#gesturestyle",
                        children: "GestureStyle"
                      }), "所属键。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "PARAGRAPH_STYLE"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "200"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["段落样式键。", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#paragraphstyle",
                        children: "ParagraphStyle"
                      }), "所属键。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "IMAGE"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "300"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["图片键。", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#imageattachment",
                        children: "ImageAttachment"
                      }), "所属键。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "CUSTOM_SPAN"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "400"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["自定义绘制Span键。", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#customspan",
                        children: "CustomSpan"
                      }), "所属键。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  }), (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "USER_DATA"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "500"
                    }), (0,jsx_runtime.jsxs)(_components.td, {
                      children: ["UserDataSpan键。", (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#userdataspan",
                        children: "UserDataSpan"
                      }), "所属键。  ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 12开始，该接口支持在元服务中使用。"]
                    })]
                  })]
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "backgroundcolorstyle14",
                children: "BackgroundColorStyle14+"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "文本背景颜色对象说明。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.ArkUI.ArkUI.Full"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "属性-9",
                children: "属性"
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
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                }), (0,jsx_runtime.jsx)(_components.tbody, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "textBackgroundStyle"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-span/ts-basic-components-span#textbackgroundstyle11%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
                        children: "TextBackgroundStyle"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "获取属性字符串的文本背景颜色。  默认值：  {  color: Color.Transparent,  radius: 0  }"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "constructor14",
                children: "constructor14+"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "constructor(textBackgroundStyle: TextBackgroundStyle)"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "文本背景颜色的构造函数。"
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
                      children: "textBackgroundStyle"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: (0,jsx_runtime.jsx)(_components.a, {
                        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-span/ts-basic-components-span#textbackgroundstyle11%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
                        children: "TextBackgroundStyle"
                      })
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "文本背景色设置项。  默认值：  {  color: Color.Transparent,  radius: 0  }"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "urlstyle14",
                children: "UrlStyle14+"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "超链接对象说明。"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "默认颜色、字号、字重分别是'#ff0a59f7'、'16fp'、'FontWeight.Regular'，若属性字符串设置TextStyle，则TextStyle优先级更高。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "系统能力："
                  })
                }), " SystemCapability.ArkUI.ArkUI.Full"]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "属性-10",
                children: "属性"
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
              }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                }), (0,jsx_runtime.jsx)(_components.tbody, {
                  children: (0,jsx_runtime.jsxs)(_components.tr, {
                    children: [(0,jsx_runtime.jsx)(_components.td, {
                      children: "url"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "string"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "否"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "获取属性字符串的超链接内容。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "constructor14-1",
                children: "constructor14+"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "constructor(url: string)"
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "超链接对象的构造函数。"
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
                      children: "url"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "string"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "是"
                    }), (0,jsx_runtime.jsx)(_components.td, {
                      children: "超链接设置项。"
                    })]
                  })
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "示例",
                children: "示例"
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "示例1属性字符串处理",
                children: "示例1（属性字符串处理）"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["从API version 12开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#insertstring",
                  children: "insertString"
                }), "、", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#removestyles",
                  children: "removeStyles"
                }), "、", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#replacestyle",
                  children: "replaceStyle"
                }), "、", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#getstyles",
                  children: "getStyles"
                }), "接口实现属性字符串的插入、删除、替换、查看。"]
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "// xxx.ets\n@Entry\n@Component\nstruct styled_string_process_demo {\n  @State height1: number = 450;\n  @State fontSize1: number = 16;\n  @State fontWeight1: number = 400;\n  @State color1: Color = Color.Blue;\n  scroll: Scroller = new Scroller();\n  fontStyleAttr1: TextStyle = new TextStyle({ fontColor: Color.Blue });\n  fontStyleAttr2: TextStyle = new TextStyle({ fontColor: Color.Orange });\n  // 创建可读写属性字符串的对象mutableStyledString1\n  mutableStyledString1: MutableStyledString = new MutableStyledString(\"运动45分钟\");\n  // 创建构造入参有字符串和样式的对象mutableStyledString2\n  mutableStyledString2: MutableStyledString = new MutableStyledString(\"test hello world\", [{\n    start: 0,\n    length: 5,\n    styledKey: StyledStringKey.FONT,\n    styledValue: this.fontStyleAttr1\n  }]);\n  // 创建只读属性字符串对象styledString2\n  styledString2: StyledString = new StyledString(\"运动45分钟\");\n  spanStyle1: SpanStyle = {\n    start: 0,\n    length: 5,\n    styledKey: StyledStringKey.FONT,\n    styledValue: new TextStyle({ fontColor: Color.Pink })\n  };\n  spanStyle2: SpanStyle = {\n    start: 0,\n    length: 2,\n    styledKey: StyledStringKey.FONT,\n    styledValue: new TextStyle({ fontColor: Color.Red })\n  };\n  @State string1: string = '';\n  @State fontColor1: ResourceColor = Color.Red;\n  controller1: TextController = new TextController();\n  controller2: TextController = new TextController();\n  controller3: TextController = new TextController();\n\n  async onPageShow() {\n    this.controller1.setStyledString(this.styledString2);\n    this.controller2.setStyledString(this.mutableStyledString1);\n    this.controller3.setStyledString(this.mutableStyledString2);\n  }\n\n  build() {\n    Column() {\n      Scroll(this.scroll) {\n        Column() {\n          // 显示属性字符串\n          Text(undefined, { controller: this.controller1 })\n          Text(undefined, { controller: this.controller3 }).key('mutableStyledString2')\n          Button('修改string1的值')\n            .onClick(() => {\n              let result = this.mutableStyledString1.equals(this.styledString2);\n              if (result) {\n                this.string1 = this.mutableStyledString1.getString();\n                console.info(\"mutableStyledString1 content:\", this.mutableStyledString1.getString());\n                console.info(\"mutableStyledString1 length:\", this.mutableStyledString1.length);\n              }\n            })\n\n          // 属性字符串与Span冲突时忽略Span,以及样式与Text组件属性未冲突部分生效Text设置的属性\n          Text(undefined, { controller: this.controller2 }) {\n            Span(\"span and styledString test\")\n              .fontColor(Color.Yellow)\n              .decoration({ type: TextDecorationType.LineThrough })\n            // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n            ImageSpan($r('app.media.startIcon'))\n          }\n          .key('styledString2')\n          .fontColor(this.fontColor1)\n          .letterSpacing(10)\n          .fontSize(32)\n          .fontWeight(600)\n          .fontStyle(FontStyle.Italic)\n          .lineHeight(30)\n          .textShadow({\n            radius: 5,\n            color: Color.Blue,\n            offsetX: 5,\n            offsetY: 5\n          })\n          .textCase(TextCase.UpperCase)\n          .decoration({ type: TextDecorationType.LineThrough, color: Color.Yellow })\n          .baselineOffset(2)\n          .copyOption(CopyOptions.InApp)\n          .margin({ top: 10 })\n          .draggable(true)\n\n          // 以上冲突测试对照组\n          Text() {\n            Span(this.string1)\n              .fontColor(this.color1)\n              .decoration({ type: TextDecorationType.LineThrough })\n            // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n            ImageSpan($r('app.media.startIcon'))\n              .width(50).height(50)\n          }\n          .letterSpacing(10)\n          .fontSize(32)\n          .fontWeight(600)\n          .fontStyle(FontStyle.Italic)\n          .lineHeight(30)\n          .textShadow({\n            radius: 5,\n            color: Color.Blue,\n            offsetX: 5,\n            offsetY: 5\n          })\n          .textCase(TextCase.UpperCase)\n          .decoration({ type: TextDecorationType.LineThrough, color: Color.Yellow })\n          .baselineOffset(2)\n\n          Button('设置样式及替换文本')\n            .onClick(() => {\n              this.mutableStyledString1.replaceStyle({\n                start: 2,\n                length: 2,\n                styledKey: StyledStringKey.FONT,\n                styledValue: this.fontStyleAttr1\n              });\n              this.mutableStyledString1.insertString(0, \"压力85偏高，\");\n              this.mutableStyledString1.setStyle({\n                start: 2,\n                length: 2,\n                styledKey: StyledStringKey.FONT,\n                styledValue: this.fontStyleAttr2\n              });\n              this.controller2.setStyledString(this.mutableStyledString1);\n            })\n            .margin({ top: 10 })\n\n          Button('查询样式及清空样式')\n            .onClick(() => {\n              let styles = this.mutableStyledString1.getStyles(0, this.mutableStyledString1.length);\n              if (styles.length == 2) {\n                for (let i = 0; i < styles.length; i++) {\n                  console.info('StyledString style object start:' + styles[i].start);\n                  console.info('StyledString style object length:' + styles[i].length);\n                  console.info('StyledString style object key:' + styles[i].styledKey);\n                  if (styles[i].styledKey === 0) {\n                    let fontAttr = styles[i].styledValue as TextStyle;\n                    console.info('StyledString fontColor:' + fontAttr.fontColor);\n                  }\n                }\n              }\n              if (styles[0] !== undefined) {\n                this.mutableStyledString2.setStyle(styles[0]);\n                this.controller3.setStyledString(this.mutableStyledString2);\n              }\n              this.mutableStyledString1.removeStyles(2, 3);\n              this.controller2.setStyledString(this.mutableStyledString1);\n            })\n            .margin({ top: 10 })\n        }.width('100%')\n\n      }\n      .expandSafeArea([SafeAreaType.KEYBOARD])\n      .scrollable(ScrollDirection.Vertical)\n      .scrollBar(BarState.On)\n      .scrollBarColor(Color.Gray)\n      .scrollBarWidth(10)\n      .edgeEffect(EdgeEffect.None)\n    }\n    .width('100%')\n  }\n}\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.img, {
                  src: (__webpack_require__(429393)/* ["default"] */.A) + "",
                  width: "296",
                  height: "321"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "示例2设置事件",
                children: "示例2（设置事件）"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["从API version 12开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#styleoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
                  children: "StyleOptions"
                }), "中的styledKey、styledValue接口实现属性字符串绑定事件。"]
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "// xxx.ets\n@Entry\n@Component\nstruct styled_string_bind_events_demo {\n  scroll: Scroller = new Scroller();\n  fontStyleAttr1: TextStyle = new TextStyle({ fontColor: Color.Blue });\n  private uiContext: UIContext = this.getUIContext();\n  clickGestureAttr: GestureStyle = new GestureStyle({\n    onClick: () => {\n      this.uiContext.getPromptAction().showToast({ message: 'clickGestureAttr object trigger click event' });\n      this.backgroundColor1 = Color.Yellow;\n    }\n  })\n  gestureStyleAttr: GestureStyle = new GestureStyle({\n    onClick: () => {\n      this.uiContext.getPromptAction().showToast({ message: 'gestureStyleAttr object trigger click event' });\n      this.backgroundColor1 = Color.Green;\n    },\n    onLongPress: () => {\n      this.uiContext.getPromptAction().showToast({ message: 'gestureStyleAttr object trigger long press event' });\n      this.backgroundColor1 = Color.Orange;\n    },\n    onTouch: () => {\n      this.uiContext.getPromptAction().showToast({ message: 'gestureStyleAttr object trigger touch event' });\n      this.backgroundColor1 = Color.Red;\n    }\n  });\n  // 创建事件的对象mutableStyledString3\n  mutableStyledString3: MutableStyledString = new MutableStyledString(\"hello world\", [{\n    start: 0,\n    length: 5,\n    styledKey: StyledStringKey.GESTURE,\n    styledValue: this.clickGestureAttr\n  },\n    {\n      start: 0,\n      length: 5,\n      styledKey: StyledStringKey.FONT,\n      styledValue: this.fontStyleAttr1\n    },\n    {\n      start: 6,\n      length: 5,\n      styledKey: StyledStringKey.GESTURE,\n      styledValue: this.gestureStyleAttr\n    },\n    {\n      start: 6,\n      length: 5,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontColor: Color.Pink })\n    }]);\n  @State backgroundColor1: ResourceColor | undefined = undefined;\n  controller3: TextController = new TextController();\n\n  async onPageShow() {\n    this.controller3.setStyledString(this.mutableStyledString3);\n  }\n\n  build() {\n    Column() {\n      Scroll(this.scroll) {\n        Column({ space: 30 }) {\n          Button(\"响应属性字符串事件改变背景色\").backgroundColor(this.backgroundColor1).width('80%')\n          // 包含事件的属性字符串\n          Text(undefined, { controller: this.controller3 }).fontSize(30)\n            .copyOption(CopyOptions.InApp)\n            .draggable(true)\n            .clip(true)\n        }.width('100%')\n      }\n      .expandSafeArea([SafeAreaType.KEYBOARD])\n      .scrollable(ScrollDirection.Vertical)\n      .scrollBar(BarState.On)\n      .scrollBarColor(Color.Gray)\n      .scrollBarWidth(10)\n      .edgeEffect(EdgeEffect.None)\n    }\n    .width('100%')\n  }\n}\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.img, {
                  src: (__webpack_require__(169749)/* ["default"] */.A) + "",
                  width: "720",
                  height: "234"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "示例3设置文本样式",
                children: "示例3（设置文本样式）"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["从API version 12开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#getstyles",
                  children: "getStyles"
                }), "、", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#setstyle",
                  children: "setStyle"
                }), "接口实现属性字符串查询和设置样式。"]
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "// xxx.ets\nimport { LengthMetrics, LengthUnit } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct styled_string_set_text_style_demo {\n  fontStyleAttr1: TextStyle = new TextStyle({ fontColor: Color.Blue });\n  fontStyleAttr2: TextStyle = new TextStyle({\n    fontColor: Color.Orange,\n    fontSize: LengthMetrics.vp(20),\n    fontWeight: FontWeight.Bolder,\n    fontStyle: FontStyle.Italic,\n    fontFamily: \"Arial\",\n    superscript: SuperscriptStyle.SUPERSCRIPT\n  });\n  fontStyleAttr3: TextStyle = new TextStyle({\n    fontColor: Color.Orange,\n    fontSize: LengthMetrics.vp(20),\n    fontWeight: FontWeight.Lighter,\n    fontStyle: FontStyle.Italic,\n    fontFamily: \"Arial\",\n    superscript: SuperscriptStyle.SUBSCRIPT\n  });\n  // 创建多重TextStyle样式的对象mutableStyledString1\n  mutableStyledString1: MutableStyledString = new MutableStyledString(\"运动45分钟\", [{\n    start: 0,\n    length: 2,\n    styledKey: StyledStringKey.FONT,\n    styledValue: this.fontStyleAttr3\n  }, {\n    start: 2,\n    length: 2,\n    styledKey: StyledStringKey.FONT,\n    styledValue: this.fontStyleAttr2\n  }\n  ]);\n  // 创建有多种样式组合对象mutableStyledString2\n  mutableStyledString2: MutableStyledString = new MutableStyledString(\"test hello world\", [{\n    start: 0,\n    length: 5,\n    styledKey: StyledStringKey.FONT,\n    styledValue: this.fontStyleAttr1\n  }, {\n    start: 0,\n    length: 5,\n    styledKey: StyledStringKey.DECORATION,\n    styledValue: new DecorationStyle({ type: TextDecorationType.LineThrough, color: Color.Blue })\n  }, {\n    start: 0,\n    length: 5,\n    styledKey: StyledStringKey.TEXT_SHADOW,\n    styledValue: new TextShadowStyle({\n      radius: 5,\n      type: ShadowType.COLOR,\n      color: Color.Yellow,\n      offsetX: 10,\n      offsetY: -10\n    })\n  }, {\n    start: 0,\n    length: 5,\n    styledKey: StyledStringKey.BASELINE_OFFSET,\n    styledValue: new BaselineOffsetStyle(LengthMetrics.px(20))\n  }, {\n    start: 0,\n    length: 5,\n    styledKey: StyledStringKey.LETTER_SPACING,\n    styledValue: new LetterSpacingStyle(new LengthMetrics(10, LengthUnit.VP))\n  }, {\n    start: 6,\n    length: 5,\n    styledKey: StyledStringKey.BASELINE_OFFSET,\n    styledValue: new BaselineOffsetStyle(LengthMetrics.fp(10))\n  }\n  ]);\n  @State fontColor1: ResourceColor = Color.Red;\n  controller: TextController = new TextController();\n  options: TextOptions = { controller: this.controller };\n  controller2: TextController = new TextController();\n  spanStyle1: SpanStyle = {\n    start: 0,\n    length: 5,\n    styledKey: StyledStringKey.FONT,\n    styledValue: new TextStyle({ fontColor: Color.Pink })\n  };\n\n  async onPageShow() {\n    this.controller.setStyledString(this.mutableStyledString1);\n    this.controller2.setStyledString(this.mutableStyledString2);\n  }\n\n  build() {\n    Column() {\n      Column({ space: 10 }) {\n        // 显示配了字体各种样式的属性字符串，Text组件亦配置冲突部分生效属性字符串配置，未冲突区间生效Text组件属性设置值\n        Text(undefined, this.options)\n          .fontColor(this.fontColor1)\n          .font({ size: 20, weight: 500, style: FontStyle.Normal })\n        // 显示配置了文本阴影、划线、字符间距、基线偏移量的属性字符串，Text组件亦配置生效属性字符串配置\n        Text(undefined, { controller: this.controller2 })\n          .fontSize(30)\n          .copyOption(CopyOptions.InApp)\n          .draggable(true)\n          .decoration({ type: TextDecorationType.Overline, color: Color.Pink })\n          .textShadow({\n            radius: 10,\n            type: ShadowType.COLOR,\n            color: Color.Green,\n            offsetX: -10,\n            offsetY: 10\n          })\n        Button('查询字体样式')\n          .onClick(() => {\n            let styles = this.mutableStyledString1.getStyles(0, this.mutableStyledString1.length);\n            if (styles.length !== 0) {\n              for (let i = 0; i < styles.length; i++) {\n                console.info('mutableStyledString1 style object start:' + styles[i].start);\n                console.info('mutableStyledString1 style object length:' + styles[i].length);\n                console.info('mutableStyledString1 style object key:' + styles[i].styledKey);\n                if (styles[i].styledKey === 0) {\n                  let fontAttr = styles[i].styledValue as TextStyle;\n                  console.info('mutableStyledString1 fontColor:' + fontAttr.fontColor);\n                  console.info('mutableStyledString1 fontSize:' + fontAttr.fontSize);\n                  console.info('mutableStyledString1 fontWeight:' + fontAttr.fontWeight);\n                  console.info('mutableStyledString1 fontStyle:' + fontAttr.fontStyle);\n                  console.info('mutableStyledString1 fontFamily:' + fontAttr.fontFamily);\n                  console.info('mutableStyledString1 superscript:' + fontAttr.superscript);\n                }\n              }\n            }\n          })\n          .margin({ top: 10 })\n        Button('查询其他文本样式')\n          .onClick(() => {\n            let styles = this.mutableStyledString2.getStyles(0, this.mutableStyledString2.length);\n            if (styles.length !== 0) {\n              for (let i = 0; i < styles.length; i++) {\n                console.info('mutableStyledString2 style object start:' + styles[i].start);\n                console.info('mutableStyledString2 style object length:' + styles[i].length);\n                console.info('mutableStyledString2 style object key:' + styles[i].styledKey);\n                if (styles[i].styledKey === 1) {\n                  let decoAttr = styles[i].styledValue as DecorationStyle;\n                  console.info('mutableStyledString2 decoration type:' + decoAttr.type);\n                  console.info('mutableStyledString2 decoration color:' + decoAttr.color);\n                }\n                if (styles[i].styledKey === 2) {\n                  let baselineAttr = styles[i].styledValue as BaselineOffsetStyle;\n                  console.info('mutableStyledString2 baselineOffset:' + baselineAttr.baselineOffset);\n                }\n                if (styles[i].styledKey === 3) {\n                  let letterAttr = styles[i].styledValue as LetterSpacingStyle;\n                  console.info('mutableStyledString2 letterSpacing:' + letterAttr.letterSpacing);\n                }\n                if (styles[i].styledKey === 4) {\n                  let textShadowAttr = styles[i].styledValue as TextShadowStyle;\n                  let shadowValues = textShadowAttr.textShadow;\n                  if (shadowValues.length > 0) {\n                    for (let j = 0; j < shadowValues.length; j++) {\n                      console.info('mutableStyledString2 textShadow type:' + shadowValues[j].type);\n                      console.info('mutableStyledString2 textShadow radius:' + shadowValues[j].radius);\n                      console.info('mutableStyledString2 textShadow color:' + shadowValues[j].color);\n                      console.info('mutableStyledString2 textShadow offsetX:' + shadowValues[j].offsetX);\n                      console.info('mutableStyledString2 textShadow offsetY:' + shadowValues[j].offsetY);\n                    }\n                  }\n                }\n              }\n            }\n          })\n          .margin({ top: 10 })\n        Button('更新mutableStyledString1样式')\n          .onClick(() => {\n            this.mutableStyledString1.setStyle(this.spanStyle1);\n            this.controller.setStyledString(this.mutableStyledString1);\n          })\n          .margin({ top: 10 })\n      }.width('100%')\n    }\n    .width('100%')\n  }\n}\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.img, {
                  src: (__webpack_require__(199697)/* ["default"] */.A) + "",
                  width: "330",
                  height: "260"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "示例4设置图片",
                children: "示例4（设置图片）"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["从API version 12开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#imageattachmentinterface%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
                  children: "ImageAttachment"
                }), "接口实现属性字符串设置图片。"]
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "// xxx.ets\nimport { image } from '@kit.ImageKit';\nimport { LengthMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct styled_string_set_image_demo {\n  @State message: string = 'Hello World';\n  imagePixelMap: image.PixelMap | undefined = undefined;\n  @State imagePixelMap3: image.PixelMap | undefined = undefined;\n  mutableStr: MutableStyledString = new MutableStyledString('123');\n  controller: TextController = new TextController();\n  private uiContext: UIContext = this.getUIContext();\n  mutableStr2: MutableStyledString = new MutableStyledString('This is set decoration line style to the mutableStr2', [{\n    start: 0,\n    length: 15,\n    styledKey: StyledStringKey.DECORATION,\n    styledValue: new DecorationStyle({\n      type: TextDecorationType.Overline,\n      color: Color.Orange,\n      style: TextDecorationStyle.DOUBLE\n    })\n  }]);\n\n  async aboutToAppear() {\n    console.info(\"aboutToAppear initial imagePixelMap\");\n    // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n    this.imagePixelMap =\n      await this.getPixmapFromMedia($r('app.media.startIcon'));\n  }\n\n  private async getPixmapFromMedia(resource: Resource) {\n    let unit8Array = await this.uiContext.getHostContext()?.resourceManager?.getMediaContent(resource.id);\n    let imageSource = image.createImageSource(unit8Array?.buffer.slice(0, unit8Array.buffer.byteLength));\n    let createPixelMap: image.PixelMap = await imageSource.createPixelMap({\n      desiredPixelFormat: image.PixelMapFormat.RGBA_8888\n    });\n    await imageSource.release();\n    return createPixelMap;\n  }\n\n  build() {\n    Row() {\n      Column({ space: 5 }) {\n        Text(undefined, { controller: this.controller })\n          .copyOption(CopyOptions.InApp)\n          .draggable(true)\n          .fontSize(30)\n        Button('设置图片')\n          .onClick(() => {\n            if (this.imagePixelMap !== undefined) {\n              this.mutableStr = new MutableStyledString(new ImageAttachment({\n                value: this.imagePixelMap,\n                size: { width: 50, height: 50 },\n                layoutStyle: { borderRadius: LengthMetrics.vp(10) },\n                verticalAlign: ImageSpanAlignment.BASELINE,\n                objectFit: ImageFit.Contain\n              }));\n              this.controller.setStyledString(this.mutableStr);\n            }\n          })\n        Button('设置资源类型图片')\n          .onClick(() => {\n            if (this.imagePixelMap !== undefined) {\n              this.mutableStr = new MutableStyledString(new ImageAttachment({\n                // $r('app.media.sky')需要替换为开发者所需的图像资源文件。\n                resourceValue: $r('app.media.sky'),\n                size: { width: 50, height: 50 },\n                layoutStyle: { borderRadius: LengthMetrics.vp(10) },\n                verticalAlign: ImageSpanAlignment.BASELINE,\n                objectFit: ImageFit.Contain,\n                syncLoad: true\n              }));\n              this.controller.setStyledString(this.mutableStr);\n            }\n          })\n        Button('Image之Get')\n          .onClick(() => {\n            let imageArray = this.mutableStr.getStyles(0, 1, StyledStringKey.IMAGE);\n            for (let i = 0; i < imageArray.length; ++i) {\n              console.info('mutableStr start ' + imageArray[i].start + ' length ' + imageArray[i].length + ' type ' +\n              imageArray[i].styledKey);\n              if (imageArray[i].styledKey === 300) {\n                let attachment = imageArray[i].styledValue as ImageAttachment;\n                this.imagePixelMap3 = attachment.value;\n                console.info('mutableStr value ' + JSON.stringify(attachment.value));\n                if (attachment.size !== undefined) {\n                  console.info('mutableStr size width ' + attachment.size.width + ' height ' + attachment.size.height);\n                }\n                console.info('mutableStr vertical ' + attachment.verticalAlign);\n                console.info('mutableStr fit ' + attachment.objectFit);\n                if (attachment.layoutStyle !== undefined) {\n                  let radius = attachment.layoutStyle.borderRadius as BorderRadiuses;\n                  console.info('mutableStr radius ' + JSON.stringify(radius));\n                }\n              }\n            }\n          })\n        Image(this.imagePixelMap3).width(50).height(50)\n        Button('Image之Append')\n          .onClick(() => {\n            let str = new StyledString('123');\n            this.mutableStr.appendStyledString(str);\n            this.controller.setStyledString(this.mutableStr);\n          })\n        Button('Image之Insert 前')\n          .onClick(() => {\n            this.mutableStr.insertString(0, '123');\n            this.controller.setStyledString(this.mutableStr);\n          })\n        Button('Image之Insert 后')\n          .onClick(() => {\n            this.mutableStr.insertString(1, '123');\n            this.controller.setStyledString(this.mutableStr);\n          })\n        Button('Image之replace')\n          .onClick(() => {\n            this.mutableStr.replaceString(2, 5, \"789\");\n            this.controller.setStyledString(this.mutableStr);\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.img, {
                  src: (__webpack_require__(401909)/* ["default"] */.A) + "",
                  width: "342",
                  height: "480"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "示例5设置文本行高和段落样式",
                children: "示例5（设置文本行高和段落样式）"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["从API version 12开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#lineheightstyle",
                  children: "LineHeightStyle"
                }), "、", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#paragraphstyle",
                  children: "ParagraphStyle"
                }), "接口实现属性字符串设置文本行高和段落样式。"]
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "import { LengthMetrics } from '@kit.ArkUI';\n\nconst canvasWidth = 1000;\nconst canvasHeight = 100;\n\nclass LeadingMarginCreator {\n  private settings: RenderingContextSettings = new RenderingContextSettings(true);\n  private offscreenCanvas: OffscreenCanvas = new OffscreenCanvas(canvasWidth, canvasHeight);\n  private offContext: OffscreenCanvasRenderingContext2D = this.offscreenCanvas.getContext(\"2d\", this.settings);\n  public static instance: LeadingMarginCreator = new LeadingMarginCreator();\n\n  public genSquareMark(fontSize: number): PixelMap {\n    this.offContext = this.offscreenCanvas.getContext(\"2d\", this.settings);\n    this.clearCanvas();\n    const coordinate = fontSize * (1 - 1 / 1.5) / 2;\n    const sideLength = fontSize / 1.5;\n    this.offContext.fillRect(coordinate, coordinate, sideLength, sideLength);\n    return this.offContext.getPixelMap(0, 0, fontSize, fontSize);\n  }\n\n  private clearCanvas() {\n    this.offContext.clearRect(0, 0, canvasWidth, canvasHeight);\n  }\n}\n\n@Entry\n@Component\nstruct styled_string_set_lineheight_paragraphstyle_demo {\n  private leadingMarkCreatorInstance = LeadingMarginCreator.instance;\n  leadingMarginPlaceholder1: LeadingMarginPlaceholder = {\n    pixelMap: this.leadingMarkCreatorInstance.genSquareMark(24),\n    size: [15, 15]\n  };\n  titleParagraphStyleAttr: ParagraphStyle =\n    new ParagraphStyle({ textAlign: TextAlign.Center, paragraphSpacing: LengthMetrics.px(10) });\n  // 第一段落首行缩进15vp\n  paragraphStyleAttr1: ParagraphStyle = new ParagraphStyle({ textIndent: LengthMetrics.vp(15) });\n  // 第二段落缩进15vp且首行有placeholder占位显示\n  paragraphStyleAttr2: ParagraphStyle =\n    new ParagraphStyle({ textAlign: TextAlign.Start, leadingMargin: this.leadingMarginPlaceholder1 });\n  // 第三段落不设置缩进配置最大行数及超长显示方式\n  paragraphStyleAttr3: ParagraphStyle = new ParagraphStyle({\n    textAlign: TextAlign.End,\n    textVerticalAlign: TextVerticalAlign.BASELINE,\n    maxLines: 1,\n    wordBreak: WordBreak.BREAK_ALL,\n    overflow: TextOverflow.Ellipsis\n  });\n  // 行高样式对象\n  lineHeightStyle1: LineHeightStyle = new LineHeightStyle(new LengthMetrics(24));\n  // 创建含段落样式的对象paragraphStyledString1\n  paragraphStyledString1: StyledString =\n    new StyledString(\"段落标题\\n正文第一段落开始0123456789正文第一段落结束\\n正文第二段落开始hello world正文第二段落结束\\n正文第三段落ABCDEFGHIJKLMNOPQRSTUVWXYZ。\",\n      [\n        {\n          start: 0,\n          length: 4,\n          styledKey: StyledStringKey.PARAGRAPH_STYLE,\n          styledValue: this.titleParagraphStyleAttr\n        },\n        {\n          start: 0,\n          length: 4,\n          styledKey: StyledStringKey.LINE_HEIGHT,\n          styledValue: new LineHeightStyle(new LengthMetrics(50))\n        }, {\n        start: 0,\n        length: 4,\n        styledKey: StyledStringKey.FONT,\n        styledValue: new TextStyle({ fontSize: LengthMetrics.vp(24), fontWeight: FontWeight.Bolder })\n      },\n        {\n          start: 5,\n          length: 3,\n          styledKey: StyledStringKey.PARAGRAPH_STYLE,\n          styledValue: this.paragraphStyleAttr1\n        },\n        {\n          start: 5,\n          length: 20,\n          styledKey: StyledStringKey.LINE_HEIGHT,\n          styledValue: this.lineHeightStyle1\n        },\n        {\n          start: 32,\n          length: 5,\n          styledKey: StyledStringKey.PARAGRAPH_STYLE,\n          styledValue: this.paragraphStyleAttr2\n        },\n        {\n          start: 32,\n          length: 20,\n          styledKey: StyledStringKey.LINE_HEIGHT,\n          styledValue: this.lineHeightStyle1\n        },\n        {\n          start: 60,\n          length: 5,\n          styledKey: StyledStringKey.PARAGRAPH_STYLE,\n          styledValue: this.paragraphStyleAttr3\n        },\n        {\n          start: 60,\n          length: 5,\n          styledKey: StyledStringKey.LINE_HEIGHT,\n          styledValue: this.lineHeightStyle1\n        }\n      ]);\n  controller: TextController = new TextController();\n\n  async onPageShow() {\n    this.controller.setStyledString(this.paragraphStyledString1);\n  }\n\n  build() {\n    Row() {\n      Column({ space: 5 }) {\n        Text(undefined, { controller: this.controller })\n          .width(240)\n          .borderWidth(1)\n          .copyOption(CopyOptions.InApp)\n          .draggable(true)\n\n        // 查询段落样式\n        Text()\n          .onClick(() => {\n            let styles = this.paragraphStyledString1.getStyles(0, this.paragraphStyledString1.length);\n            if (styles.length !== 0) {\n              for (let i = 0; i < styles.length; i++) {\n                console.info('paragraphStyledString1 style object start:' + styles[i].start);\n                console.info('paragraphStyledString1 style object length:' + styles[i].length);\n                console.info('paragraphStyledString1 style object key:' + styles[i].styledKey);\n                if (styles[i].styledKey === 200) {\n                  let paraAttr = styles[i].styledValue as ParagraphStyle;\n                  console.info('paragraphStyledString1 textAlign:' + paraAttr.textAlign);\n                  console.info('paragraphStyledString1 textIndent:' + paraAttr.textIndent);\n                  console.info('paragraphStyledString1 maxLines:' + paraAttr.maxLines);\n                  console.info('paragraphStyledString1 wordBreak:' + paraAttr.wordBreak);\n                  console.info('paragraphStyledString1 leadingMargin:' + paraAttr.leadingMargin);\n                  console.info('paragraphStyledString1 overflow:' + paraAttr.overflow);\n                }\n              }\n            }\n          })\n          .margin({ top: 10 })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.img, {
                  src: (__webpack_require__(513340)/* ["default"] */.A) + "",
                  width: "568",
                  height: "395"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "示例6设置自定义绘制span",
                children: "示例6（设置自定义绘制Span）"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["从API version 12开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#customspan",
                  children: "CustomSpan"
                }), "接口和", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-measureutils/arkts-apis-uicontext-measureutils#measuretextsize12",
                  children: "measureTextSize"
                }), "实现属性字符串设置自定义绘制Span。"]
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "// xxx.ets\nimport { drawing } from '@kit.ArkGraphics2D';\nimport { LengthMetrics } from '@kit.ArkUI';\n\nlet gUIContext: UIContext;\n\nclass MyCustomSpan extends CustomSpan {\n  constructor(word: string, width: number, height: number) {\n    super();\n    this.word = word;\n    this.width = width;\n    this.height = height;\n  }\n\n  onMeasure(measureInfo: CustomSpanMeasureInfo): CustomSpanMetrics {\n    this.setPx(gUIContext.vp2px(2));\n    let textSize = gUIContext.getMeasureUtils().measureTextSize({ textContent: this.word, fontSize: this.wordFontSize })\n    this.width = textSize.width as number;\n    this.height = textSize.height as number;\n    return {\n      width: gUIContext.px2vp(this.width) + (this.paddingLeft + this.paddingRight) * 2,\n      height: gUIContext.px2vp(this.height) + this.paddingTop + this.paddingBottom\n    };\n  }\n\n  onDraw(context: DrawContext, options: CustomSpanDrawInfo) {\n    let canvas = context.canvas;\n\n    const brush = new drawing.Brush();\n    brush.setColor({\n      alpha: 255,\n      red: 0,\n      green: 74,\n      blue: 175\n    });\n    const font = new drawing.Font();\n    font.setSize(gUIContext.vp2px(this.wordFontSize));\n    const textBlob = drawing.TextBlob.makeFromString(this.word, font, drawing.TextEncoding.TEXT_ENCODING_UTF8);\n    canvas.attachBrush(brush);\n    canvas.drawRect({\n      // 绘制的矩形在Span占位大小的范围里居中\n      left: options.x + gUIContext.vp2px(this.paddingLeft),\n      right: options.x + this.width + 2 * gUIContext.vp2px(this.paddingLeft) + gUIContext.vp2px(this.paddingRight),\n      top: options.lineTop,\n      bottom: options.baseline\n    });\n\n    brush.setColor({\n      alpha: 255,\n      red: 23,\n      green: 169,\n      blue: 141\n    });\n    canvas.attachBrush(brush);\n    // 文字在绘制的矩形里居中\n    canvas.drawTextBlob(textBlob, options.x + 2 * gUIContext.vp2px(this.paddingLeft),\n      options.baseline - gUIContext.vp2px(this.paddingBottom));\n    canvas.detachBrush();\n  }\n\n  setWord(word: string) {\n    this.word = word;\n  }\n\n  setPx(px: number) {\n    this.paddingLeft = px;\n    this.paddingRight = px;\n    this.paddingTop = px;\n    this.paddingBottom = px;\n  }\n\n  width: number = 160;\n  word: string = \"drawing\";\n  height: number = 10;\n  paddingLeft: number = 0;\n  paddingRight: number = 0;\n  paddingTop: number = 0;\n  paddingBottom: number = 0;\n  wordFontSize: number = 20;\n}\n\n@Entry\n@Component\nstruct styled_string_set_customspan_demo {\n  customSpan1: MyCustomSpan = new MyCustomSpan(\"Hello\", 80, 10);\n  customSpan2: MyCustomSpan = new MyCustomSpan(\"World\", 80, 40);\n  style: MutableStyledString = new MutableStyledString(this.customSpan1);\n  textController: TextController = new TextController();\n  isPageShow: boolean = true;\n\n  aboutToAppear() {\n    gUIContext = this.getUIContext();\n  }\n\n  async onPageShow() {\n    if (!this.isPageShow) {\n      return;\n    }\n    this.isPageShow = false;\n\n    this.style.appendStyledString(new MutableStyledString(\"文本绘制 示例代码 CustomSpan\", [\n      {\n        start: 0,\n        length: 5,\n        styledKey: StyledStringKey.FONT,\n        styledValue: new TextStyle({ fontColor: Color.Pink })\n      }, {\n      start: 5,\n      length: 5,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontColor: Color.Orange, fontStyle: FontStyle.Italic })\n    }, {\n      start: 10,\n      length: 500,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontColor: Color.Green, fontWeight: FontWeight.Bold })\n    }\n    ]));\n    this.style.appendStyledString(new StyledString(this.customSpan2));\n    this.style.appendStyledString(new StyledString(\"自定义绘制\", [{\n      start: 0,\n      length: 5,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontColor: Color.Green, fontSize: LengthMetrics.px(50) })\n    }]));\n    this.textController.setStyledString(this.style);\n  }\n\n  build() {\n    Row() {\n      Column() {\n        Text(undefined, { controller: this.textController })\n          .copyOption(CopyOptions.InApp)\n          .fontSize(30)\n\n        Button(\"invalidate\").onClick(() => {\n          this.customSpan1.setWord(\"你好\");\n          this.customSpan1.invalidate();\n        })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.img, {
                  src: (__webpack_require__(621380)/* ["default"] */.A) + "",
                  width: "385",
                  height: "148"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "示例7支持存储自定义扩展信息",
                children: "示例7（支持存储自定义扩展信息）"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["从API version 12开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#userdataspan",
                  children: "UserDataSpan"
                }), "接口实现属性字符串支持存储自定义扩展信息的功能。"]
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "// xxx.ets\nclass MyUserDataSpan extends UserDataSpan {\n  constructor(name: string, age: number) {\n    super();\n    this.name = name;\n    this.age = age;\n  }\n\n  name: string;\n  age: number;\n}\n\n@Entry\n@Component\nstruct styled_string_set_userdataspan_demo {\n  @State name: string = \"world\";\n  @State age: number = 10;\n  controller: TextController = new TextController();\n  styleString: MutableStyledString = new MutableStyledString(\"hello world\", [{\n    start: 0,\n    length: 11,\n    styledKey: StyledStringKey.USER_DATA,\n    styledValue: new MyUserDataSpan(\"hello\", 21)\n  }]);\n\n  onPageShow(): void {\n    this.controller.setStyledString(this.styleString);\n  }\n\n  build() {\n    Column() {\n      Text(undefined, { controller: this.controller })\n      Button(\"get user data\").onClick(() => {\n        let arr = this.styleString.getStyles(0, this.styleString.length);\n        let userDataSpan = arr[0].styledValue as MyUserDataSpan;\n        this.name = userDataSpan.name;\n        this.age = userDataSpan.age;\n      })\n      Text(\"name:\" + this.name + \"  age: \" + this.age)\n    }.width('100%').height(250).padding({ left: 35, right: 35, top: 35 })\n  }\n}\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.img, {
                  src: (__webpack_require__(918450)/* ["default"] */.A) + "",
                  width: "374",
                  height: "170"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "示例8设置超链接",
                children: "示例8（设置超链接）"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["从API version 14开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#urlstyle14",
                  children: "UrlStyle"
                }), "接口，实现了对属性字符串中超链接设置的支持。"]
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "// xxx.ets\n@Entry\n@Component\nstruct styled_string_set_urlstyle_demo {\n  urlString: UrlStyle = new UrlStyle(\"https://www.example.com\");\n  mutableStyledString: MutableStyledString = new MutableStyledString(\"Hello World\", [{\n    start: 0,\n    length: \"Hello\".length,\n    styledKey: StyledStringKey.URL,\n    styledValue: this.urlString\n  }]);\n  controller: TextController = new TextController();\n\n  async onPageShow() {\n    this.controller.setStyledString(this.mutableStyledString);\n  }\n\n  build() {\n    Column() {\n      Column() {\n        Text(undefined, { controller: this.controller }).key('mutableStyledString').fontSize(30)\n      }\n    }.width('100%').height(250).padding({ left: 35, right: 35, top: 35 })\n  }\n}\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.img, {
                  src: (__webpack_require__(28843)/* ["default"] */.A) + "",
                  width: "357",
                  height: "495"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "示例9-给图片设置colorfilter",
                children: "示例9 （给图片设置colorFilter）"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["从API version 15开始，该示例通过给", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#imageattachmentinterface%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
                  children: "ImageAttachment"
                }), "设置colorFilter实现了给图像设置颜色滤镜效果。"]
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "// xxx.ets\nimport { LengthMetrics } from '@kit.ArkUI';\nimport { drawing, common2D } from '@kit.ArkGraphics2D';\n\n@Entry\n@Component\nstruct styled_string_set_image_colorfilter_demo {\n  @State message: string = 'Hello World';\n  mutableStr: MutableStyledString = new MutableStyledString('origin image:');\n  mutableStr2: MutableStyledString = new MutableStyledString('with filter:');\n  controller: TextController = new TextController();\n  controller2: TextController = new TextController();\n  private color: common2D.Color = {\n    alpha: 125,\n    red: 125,\n    green: 125,\n    blue: 255\n  };\n\n  build() {\n    Row() {\n      Column({ space: 5 }) {\n        Text(undefined, { controller: this.controller })\n          .copyOption(CopyOptions.InApp)\n          .draggable(true)\n          .fontSize(30)\n          .onAppear(() => {\n            this.mutableStr = new MutableStyledString(new ImageAttachment({\n              // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n              resourceValue: $r('app.media.startIcon'),\n              size: { width: 50, height: 50 },\n              layoutStyle: { borderRadius: LengthMetrics.vp(10) },\n              verticalAlign: ImageSpanAlignment.BASELINE,\n              objectFit: ImageFit.Contain,\n              syncLoad: true\n            }));\n            this.controller.setStyledString(this.mutableStr);\n          })\n        Text(undefined, { controller: this.controller2 })\n          .copyOption(CopyOptions.InApp)\n          .draggable(true)\n          .fontSize(30)\n        Button('set image color filter')\n          .onClick(() => {\n            this.mutableStr2 = new MutableStyledString(new ImageAttachment({\n              // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n              resourceValue: $r('app.media.startIcon'),\n              size: { width: 50, height: 50 },\n              layoutStyle: { borderRadius: LengthMetrics.vp(10) },\n              verticalAlign: ImageSpanAlignment.BASELINE,\n              objectFit: ImageFit.Contain,\n              colorFilter: drawing.ColorFilter.createBlendModeColorFilter(this.color, drawing.BlendMode.SRC_IN),\n              syncLoad: true\n            }));\n            this.controller2.setStyledString(this.mutableStr2);\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.img, {
                  src: (__webpack_require__(688946)/* ["default"] */.A) + "",
                  width: "502",
                  height: "508"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "示例10属性字符串的插入删除替换",
                children: "示例10（属性字符串的插入、删除、替换）"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["从API version 12开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#substyledstring",
                  children: "subStyledString"
                }), "、", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#removestring",
                  children: "removeString"
                }), "、", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#removestyle",
                  children: "removeStyle"
                }), "、", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#clearstyles",
                  children: "clearStyles"
                }), "、", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#replacestyledstring",
                  children: "replaceStyledString"
                }), "、", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#insertstyledstring",
                  children: "insertStyledString"
                }), "接口实现属性字符串的插入、删除、替换。"]
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "// xxx.ets\n@Entry\n@Component\nstruct styled_string_modify_demo {\n  @State message: string = 'Hello World';\n  mutableStr: MutableStyledString = new MutableStyledString('123456', [{\n    start: 0,\n    length: 2,\n    styledKey: StyledStringKey.FONT,\n    styledValue: new TextStyle({ fontColor: Color.Red })\n  }, {\n    start: 0,\n    length: 3,\n    styledKey: StyledStringKey.DECORATION,\n    styledValue: new DecorationStyle({ type: TextDecorationType.LineThrough })\n  }]);\n  mutableStr2: MutableStyledString = new MutableStyledString('with filter:');\n  controller: TextController = new TextController();\n  controller2: TextController = new TextController();\n\n  build() {\n    Row() {\n      Column({ space: 5 }) {\n        Text(undefined, { controller: this.controller })\n          .copyOption(CopyOptions.InApp)\n          .draggable(true)\n          .fontSize(30)\n          .onAppear(() => {\n            this.controller.setStyledString(this.mutableStr);\n          })\n        Text(undefined, { controller: this.controller2 })\n          .copyOption(CopyOptions.InApp)\n          .draggable(true)\n          .fontSize(30)\n        Button('GetSubStyledString (0,3)').onClick(() => {\n          this.controller2.setStyledString(this.mutableStr.subStyledString(0, 3));\n        })\n        Button('RemoveStyle (0,1,Decoration)').onClick(() => {\n          this.mutableStr.removeStyle(0, 1, StyledStringKey.DECORATION);\n          this.controller.setStyledString(this.mutableStr);\n        })\n        Button('RemoveString (5,1)').onClick(() => {\n          this.mutableStr.removeString(5, 1);\n          this.controller.setStyledString(this.mutableStr);\n        })\n        Button('ClearStyles').onClick(() => {\n          this.mutableStr.clearStyles();\n          this.controller.setStyledString(this.mutableStr);\n        })\n        Button('replaceStyledString').onClick(() => {\n          this.mutableStr.replaceStyledString(3, 1, new StyledString(\"abc\", [{\n            start: 0,\n            length: 3,\n            styledKey: StyledStringKey.FONT,\n            styledValue: new TextStyle({ fontColor: Color.Blue })\n          }]));\n          this.controller.setStyledString(this.mutableStr);\n        })\n        Button('insertStyledString').onClick(() => {\n          this.mutableStr.insertStyledString(4, new StyledString(\"A\"));\n          this.controller.setStyledString(this.mutableStr);\n        })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.img, {
                  src: (__webpack_require__(750576)/* ["default"] */.A) + "",
                  width: "387",
                  height: "536"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "示例11属性字符串的文本描边",
                children: "示例11（属性字符串的文本描边）"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["从API version 20开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#textstyle",
                  children: "TextStyle"
                }), "设置strokeWidth和strokeColor接口实现属性字符串的文本描边。"]
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "// xxx.ets\nimport { LengthMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct styled_string_strokewidth_strokecolor_demo {\n  @State string1: string = \"Hello\";\n  spanStyle: SpanStyle = {\n    start: 0,\n    length: 5,\n    styledKey: StyledStringKey.FONT,\n    styledValue: new TextStyle({\n      fontColor: '#ff2787d9',\n      strokeWidth: LengthMetrics.px(-5),\n      strokeColor: Color.Black,\n      fontWeight: FontWeight.Bolder,\n      fontSize: LengthMetrics.px(100)\n    })\n  };\n  spanStyle1: SpanStyle = {\n    start: 0,\n    length: 5,\n    styledKey: StyledStringKey.FONT,\n    styledValue: new TextStyle({\n      fontColor: '#ff2787d9',\n      strokeWidth: LengthMetrics.px(5),\n      strokeColor: Color.Black,\n      fontWeight: FontWeight.Bolder,\n      fontSize: LengthMetrics.px(100)\n    })\n  };\n\n  mutableStyledString: MutableStyledString = new MutableStyledString(this.string1, []);\n  controller: TextController = new TextController();\n\n  mutableStyledString1: MutableStyledString = new MutableStyledString(this.string1, []);\n  controller1: TextController = new TextController();\n\n  async onPageShow() {\n    this.mutableStyledString.setStyle(this.spanStyle)\n    this.controller.setStyledString(this.mutableStyledString);\n\n    this.mutableStyledString1.setStyle(this.spanStyle1)\n    this.controller1.setStyledString(this.mutableStyledString1);\n  }\n\n  build() {\n    Column() {\n      // 实心字\n      Text(undefined, { controller: this.controller })\n        .margin({ top: 10, bottom: 50 })\n        .draggable(true)\n        .onDragStart(() => {\n        })\n      // 空心字\n      Text(undefined, { controller: this.controller1 })\n        .margin({ top: 10, bottom: 50 })\n        .draggable(true)\n        .onDragStart(() => {\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.img, {
                  src: (__webpack_require__(576863)/* ["default"] */.A) + "",
                  width: "551",
                  height: "234"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "示例12fromhtml和tohtml互相转换",
                children: "示例12（fromHtml和toHtml互相转换）"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#fromhtml",
                  children: "fromHtml"
                }), "（从API version 12开始）、", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#tohtml14",
                  children: "toHtml"
                }), "（从API version 14开始）接口，将HTML中strong、b20+、em20+、i20+、u20+、del20+、s20+、a20+、sub20+、sup20+标签及其style属性中的background-color转换为属性字符串并转回HTML。"]
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "// xxx.ets\n@Entry\n@Component\nstruct styled_string_html_convert_demo {\n  @State html: string = \"<p>This is <b>b</b> <strong>strong</strong> <em>em</em> <i>i</i> <u>u</u> <del>del</del> <s>s</s> <span style = \\\"foreground-color:blue\\\"> <a href='https://www.example.com'>www.example</a> </span> <span style=\\\"background-color: red;\\\">red span</span> <sup>superscript</sup> and <sub>subscript</sub></p>\"; // 从API version 20开始支持b、em、i、u、del、s、a、sup、sub标签\n  @State spanString: StyledString | undefined = undefined;\n  @State resultText: string = \"\"; // 保存结果文本的状态\n  controller: TextController = new TextController;\n\n  build() {\n    Column() {\n      // 显示转换后的spanString\n      Text(undefined, { controller: this.controller }).height(100)\n\n      // TextArea显示每个步骤的结果\n      TextArea({ text: this.html })\n        .width(\"100%\")\n        .height(100)\n        .margin(5)\n\n      // 按钮1:将HTML转换为SpanString\n      Button(\"Convert HTML to SpanString\").onClick(async () => {\n        this.spanString = await StyledString.fromHtml(this.html);\n        this.controller.setStyledString(this.spanString);\n        this.resultText = \"Converted HTML to SpanString successfully.\";\n      }).margin(5)\n\n      // 按钮2:将SpanString转换为HTML\n      Button(\"Convert SpanString to HTML\").onClick(() => {\n        if (this.spanString) {\n          // 将spanString转换为HTML并替换当前的HTML状态\n          const newHtml = StyledString.toHtml(this.spanString);\n          if (newHtml !== this.html) { // 通过检查内容是否已经相同来防止重复\n            this.html = newHtml;\n          }\n          this.resultText = \"Converted SpanString to HTML successfully.\";\n        } else {\n          this.resultText = \"SpanString is undefined.\";\n        }\n      }).margin(5)\n\n      // 按钮3:将HTML转换回SpanString\n      Button(\"Convert HTML to SpanString\").onClick(async () => {\n        this.spanString = await StyledString.fromHtml(this.html);\n        this.controller.setStyledString(this.spanString);\n        this.resultText = \"Converted HTML back to SpanString successfully.\";\n      }).margin(5)\n\n      // 重置：重置HTML和SpanString\n      Button(\"Reset\").onClick(() => {\n        this.html = \"<p>This is <b>b</b> <strong>strong</strong> <em>em</em> <i>i</i> <u>u</u> <del>del</del> <s>s</s> <span style = \\\"foreground-color:blue\\\"> <a href='https://www.example.com'>www.example</a> </span> <span style=\\\"background-color: red;\\\">red span</span> <sup>superscript</sup> and <sub>subscript</sub></p>\";\n        this.spanString = undefined;\n        this.controller.setStyledString(new StyledString(\"\")); // 使用空的StyledString实例\n        this.resultText = \"Reset HTML and SpanString successfully.\";\n      }).margin(5)\n    }.width(\"100%\").padding(20)\n  }\n}\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.img, {
                  src: (__webpack_require__(878630)/* ["default"] */.A) + "",
                  width: "390",
                  height: "369"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "示例13多装饰线与加粗装饰线",
                children: "示例13（多装饰线与加粗装饰线）"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["从API version 20开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#decorationstyle",
                  children: "DecorationStyle"
                }), "中设置enableMultiType、thicknessScale接口，实现多装饰线显示与加粗装饰线的效果。"]
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "// xxx.ets\nimport { LengthMetrics } from '@kit.ArkUI'\n@Entry\n@Component\nstruct styled_string_set_decorationstyle_demo {\n  @State styledString : StyledString | undefined = undefined\n  controller : TextController = new TextController\n  thickness: number = 2.0\n  mutableStyledString1: MutableStyledString = new MutableStyledString(\"1234567890\", [\n    {\n      start: 0,\n      length: 10,\n      styledKey: StyledStringKey.FONT,\n      styledValue: new TextStyle({ fontColor: Color.Orange, fontSize: LengthMetrics.vp(30) })\n    },\n    {\n      start: 0,\n      length: 4,\n      styledKey: StyledStringKey.DECORATION,\n      styledValue: new DecorationStyle({type: TextDecorationType.LineThrough, thicknessScale: this.thickness}, {enableMultiType: true})\n    },\n    {\n      start: 2,\n      length: 5,\n      styledKey: StyledStringKey.DECORATION,\n      styledValue: new DecorationStyle({type: TextDecorationType.Underline, thicknessScale: this.thickness}, {enableMultiType: true})\n    },\n    {\n      start: 0,\n      length: 4,\n      styledKey: StyledStringKey.DECORATION,\n      styledValue: new DecorationStyle({type: TextDecorationType.Overline, thicknessScale: this.thickness}, {enableMultiType: true})\n    },\n    {\n      start: 6,\n      length: 2,\n      styledKey: StyledStringKey.DECORATION,\n      styledValue: new DecorationStyle({type: TextDecorationType.LineThrough})\n    },\n    {\n      start: 7,\n      length: 2,\n      styledKey: StyledStringKey.DECORATION,\n      styledValue: new DecorationStyle({type: TextDecorationType.LineThrough, color: Color.Green}, {enableMultiType: true})\n    },\n    {\n      start: 8,\n      length: 2,\n      styledKey: StyledStringKey.DECORATION,\n      styledValue: new DecorationStyle({type: TextDecorationType.Overline, color: Color.Green}, {enableMultiType: true})\n    }\n  ]);\n  build() {\n    Column({ space:3 }) {\n      Text(undefined, { controller: this.controller })\n        .height(100)\n        .copyOption(CopyOptions.LocalDevice)\n        .onAppear(()=>{\n          this.styledString = this.mutableStyledString1\n          this.controller.setStyledString(this.mutableStyledString1)\n        })\n    }.width(\"100%\")\n  }\n}\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.img, {
                  src: (__webpack_require__(971266)/* ["default"] */.A) + "",
                  width: "312",
                  height: "94"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "示例14获取以vp为单位的图片尺寸",
                children: "示例14（获取以vp为单位的图片尺寸）"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["从API version 21开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#imageattachmentinterface%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
                  children: "ImageAttachmentInterface"
                }), "实现属性字符串设置图片，并且获取该图片以vp为单位的尺寸。"]
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "// xxx.ets\nimport { image } from '@kit.ImageKit';\nimport { LengthMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct styled_string_demo4 {\n  @State message: string = \"Image info: \\n\";\n  imagePixelMap: image.PixelMap | undefined = undefined;\n  @State mutableStr: MutableStyledString = new MutableStyledString(\"\");\n  controller: TextController = new TextController();\n\n  async aboutToAppear() {\n    this.imagePixelMap = await this.getPixmapFromMedia($r('app.media.startIcon'));\n  }\n\n  private async updateImageInfoStr() {\n    this.message = \"Image info: \\n\";\n    let imageArray = this.mutableStr.getStyles(0, this.mutableStr.length, StyledStringKey.IMAGE);\n    for (let i = 0; i < imageArray.length; ++i) {\n      this.message += (' Image ' + i + ':\\n');\n      if (imageArray[i].styledKey === StyledStringKey.IMAGE) {\n        let attachment = imageArray[i].styledValue as ImageAttachment;\n        if (attachment.size !== undefined) {\n          let w: number = attachment.size.width as number;\n          let h: number = attachment.size.height as number;\n          this.message += ('    px size  width = ' + w.toFixed(2) + ' \\theight = ' + h.toFixed(2) + '\\n');\n        }\n        if (attachment.sizeInVp !== undefined) {\n          let w: number = attachment.sizeInVp.width as number;\n          let h: number = attachment.sizeInVp.height as number;\n          this.message += ('    sizeInVp width = ' + w.toFixed(2) + ' \\theight = ' + h.toFixed(2) + '\\n\\n');\n        }\n      }\n    }\n  }\n\n  private async getPixmapFromMedia(resource: Resource) {\n    let unit8Array =\n      await this.getUIContext()?.getHostContext()?.resourceManager?.getMediaContent(resource.id);\n    let imageSource = image.createImageSource(unit8Array?.buffer.slice(0, unit8Array.buffer.byteLength));\n    let createPixelMap: image.PixelMap = await imageSource.createPixelMap({\n      desiredPixelFormat: image.PixelMapFormat.RGBA_8888\n    });\n    await imageSource.release();\n    return createPixelMap;\n  }\n\n  build() {\n    Row() {\n      Column({ space: 5 }) {\n        Text(undefined, { controller: this.controller })\n          .copyOption(CopyOptions.InApp)\n          .draggable(true)\n          .fontSize(30)\n        Button('设置图片 50vp x 50vp')\n          .onClick(() => {\n            if (this.imagePixelMap !== undefined) {\n              this.mutableStr.appendStyledString(new MutableStyledString(new ImageAttachment({\n                value: this.imagePixelMap,\n                size: { width: 50, height: 50 },\n                layoutStyle: { borderRadius: LengthMetrics.vp(10) },\n                verticalAlign: ImageSpanAlignment.BASELINE,\n                objectFit: ImageFit.Contain\n              })));\n              this.controller.setStyledString(this.mutableStr);\n              this.updateImageInfoStr();\n            }\n          }).margin(10)\n        Button('设置图片 70vp x 70vp')\n          .onClick(() => {\n            if (this.imagePixelMap !== undefined) {\n              this.mutableStr.appendStyledString(new MutableStyledString(new ImageAttachment({\n                value: this.imagePixelMap,\n                size: { width: 70, height: 70 },\n                layoutStyle: { borderRadius: LengthMetrics.vp(10) },\n                verticalAlign: ImageSpanAlignment.BASELINE,\n                objectFit: ImageFit.Contain\n              })));\n              this.controller.setStyledString(this.mutableStr);\n              this.updateImageInfoStr();\n            }\n          }).margin(10)\n        Text(this.message).width(\"80%\").padding(30)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.img, {
                  src: (__webpack_require__(732513)/* ["default"] */.A) + "",
                  width: "448",
                  height: "481"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "示例15设置段落自定义缩进",
                children: "示例15（设置段落自定义缩进）"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["从API version 22开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#leadingmarginspan22",
                  children: "LeadingMarginSpan"
                }), "设置段落缩进，并且自定义缩进图案。"]
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "// xxx.ets\nimport { drawing } from '@kit.ArkGraphics2D';\nimport { LengthMetrics } from '@kit.ArkUI';\n\n/**\n * 实现LeadingMarginSpan\n */\nclass MyLeadingMarginSpan extends LeadingMarginSpan {\n  text: string = \"\"\n\n  constructor(text: string) {\n    super()\n    this.text = text\n  }\n\n  getText() {\n    return this.text;\n  }\n\n  // 返回缩进距离\n  getLeadingMargin(): LengthMetrics {\n    console.info(\"getLeadingMargin\")\n    return LengthMetrics.vp(10)\n  }\n\n  // 回调给开发者行信息，用于canvas绘制\n  onDraw(context: DrawContext, options: LeadingMarginSpanDrawInfo) {\n    console.info(\"x = \" + options.x + options.direction + \", top = \" + options.top\n      + \", bottom = \" + options.bottom + \", baseline = \" + options.baseline\n      + \", direction = \" + \", start = \" + options.start + \", end = \" + options.end + \", first = \" + options.first)\n    let canvas = context.canvas;\n    if (!options.first) {\n      return\n    }\n\n    // 绘制文本符号\n    const font = new drawing.Font();\n    font.setSize(20);\n    const textBlob = drawing.TextBlob.makeFromString(this.text, font, drawing.TextEncoding.TEXT_ENCODING_UTF8);\n    canvas.drawTextBlob(textBlob, options.x - 30, options.top + (options.bottom - options.top) / 2);\n  }\n}\n\n@Entry\n@Component\nstruct leadingMarginSpanDemo {\n  controller: RichEditorStyledStringController = new RichEditorStyledStringController();\n  options: RichEditorStyledStringOptions = { controller: this.controller };\n  textController: TextController = new TextController();\n  leadingMarginSpan: LeadingMarginSpan = new MyLeadingMarginSpan(\"●\");\n  paragraphStyleAttr2: ParagraphStyle =\n    new ParagraphStyle({ leadingMarginSpan: this.leadingMarginSpan });\n  style: StyledString = new StyledString(\"段落标题\\n段落内容101234567890123456789012345678901234567890123456789\",\n    [\n      {\n        start: 0,\n        length: 10,\n        styledKey: StyledStringKey.PARAGRAPH_STYLE,\n        styledValue: this.paragraphStyleAttr2\n      }\n    ]\n  );\n\n  build() {\n    Column() {\n      Text(undefined, { controller: this.textController })\n        .width(\"90%\")\n        .height(\"20%\")\n        .margin({ top: 10 })\n        .borderWidth(1)\n        .copyOption(CopyOptions.InApp)\n        .draggable(true)\n\n      RichEditor(this.options)\n        .width(\"90%\")\n        .height(\"20%\")\n        .margin({ top: 10 })\n        .borderWidth(1)\n      Column() {\n        Button('setStyledString')\n          .onClick(() => {\n            this.textController.setStyledString(this.style);\n            this.controller.setStyledString(this.style);\n          }).margin({ top: 10 })\n        // 查询段落样式\n        Button(\"getStyles\")\n          .onClick(() => {\n            let styles = this.style.getStyles(0, this.style.length);\n            if (styles.length == 0) {\n              return\n            }\n            for (let i = 0; i < styles.length; i++) {\n              console.info('getStyles style object start:' + styles[i].start);\n              console.info('getStyles style object length:' + styles[i].length);\n              console.info('getStyles style object key:' + styles[i].styledKey);\n              if (styles[i].styledKey === 200) {\n                let paraAttr = styles[i].styledValue as ParagraphStyle;\n                console.info('getStyles leadingMarginSpan:' + paraAttr.leadingMarginSpan);\n                let leadingMarginSpanClass = paraAttr.leadingMarginSpan as MyLeadingMarginSpan\n                if (leadingMarginSpanClass != null) {\n                  console.info('getStyles leadingMarginSpan getText: ' + leadingMarginSpanClass.getText());\n                }\n              }\n            }\n          }).margin({ top: 10 })\n      }\n    }\n    .width('100%')\n  }\n}\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.img, {
                  src: (__webpack_require__(714204)/* ["default"] */.A) + "",
                  width: "376",
                  height: "444"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                id: "示例16使用supportsvg2属性时svg图片的显示效果",
                children: "示例16（使用supportSvg2属性时，SVG图片的显示效果）"
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["从API version 22开始，该示例通过给", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#resourceimageattachmentoptions15",
                  children: "ResourceImageAttachmentOptions"
                }), "设置supportSvg2属性，使", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/ref/arkui-api/arkui-declarative-comp/images-and-videos/ts-image-svg2-capabilities/ts-image-svg2-capabilities#svg%E6%98%93%E7%94%A8%E6%80%A7%E6%8F%90%E5%8D%87",
                  children: "SVG标签解析能力增强功能"
                }), "的SVG易用性提升能力生效。"]
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "import { drawing } from '@kit.ArkGraphics2D';\nimport { LengthMetrics } from '@kit.ArkUI';\n@Entry\n@Component\nstruct styled_string_process_demo {\n  controller: TextController = new TextController();\n  controller1: TextController = new TextController();\n  imageAttachment: ImageAttachment = new ImageAttachment({\n    // $r(\"app.media.ice\")需要替换为开发者所需的图像资源文件。\n    resourceValue: $r(\"app.media.ice\"),\n    size: { width: 50, height: 50 },\n    layoutStyle: { borderRadius: LengthMetrics.vp(10) },\n    verticalAlign: ImageSpanAlignment.BASELINE,\n    objectFit: ImageFit.Contain,\n    syncLoad: true,\n    supportSvg2: true,\n    colorFilter: drawing.ColorFilter.createBlendModeColorFilter(\n      drawing.Tool.makeColorFromResourceColor(Color.Blue), drawing.BlendMode.SRC_IN)\n  })\n  imageAttachment1: ImageAttachment = new ImageAttachment({\n    // $r(\"app.media.ice\")需要替换为开发者所需的图像资源文件。\n    resourceValue: $r(\"app.media.ice\"),\n    size: { width: 50, height: 50 },\n    layoutStyle: { borderRadius: LengthMetrics.vp(10) },\n    verticalAlign: ImageSpanAlignment.BASELINE,\n    objectFit: ImageFit.Contain,\n    syncLoad: true,\n    supportSvg2: false,\n    colorFilter: drawing.ColorFilter.createBlendModeColorFilter(\n      drawing.Tool.makeColorFromResourceColor(Color.Blue), drawing.BlendMode.SRC_IN)\n  })\n  scroller: Scroller = new Scroller();\n  mutableStr: MutableStyledString = new MutableStyledString('');\n  mutableStr1: MutableStyledString = new MutableStyledString('');\n  aboutToAppear() {\n    this.mutableStr = new MutableStyledString(this.imageAttachment);\n    this.controller.setStyledString(this.mutableStr);\n    this.mutableStr1 = new MutableStyledString(this.imageAttachment1);\n    this.controller1.setStyledString(this.mutableStr1);\n  }\n\n  build() {\n    Column() {\n      Scroll(this.scroller) {\n        Column() {\n          Text('属性字符串不支持svg2')\n          Text(undefined, { controller: this.controller1 })\n            .draggable(true)\n            .fontSize(30)\n          Text('属性字符串支持svg2')\n          Text(undefined, { controller: this.controller })\n            .draggable(true)\n            .fontSize(30)\n        }.width('100%')\n      }\n    }\n    .width('100%')\n  }\n}\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.img, {
                  src: (__webpack_require__(560901)/* ["default"] */.A) + "",
                  width: "411",
                  height: "272"
                })
              }), "\n"]
            })
          })
        })]
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
741296(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
576863(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800176-dfe9b84117c8738669e64da929e9b695.png");

},
429393(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959820-09ae7188fc439b3c66293ad6bcf7abb0.png");

},
560901(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479815-c8af8e5b86d384898eee4f46d7e7cd31.png");

},
28843(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439869-b69373913bbbdf222fd74819809172c9.gif");

},
878630(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439871-7f010caeab429980ac0c48097b1c9630.gif");

},
94710(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
401909(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439867-19e43f653595af0c314716929fb420e2.gif");

},
199697(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800172-23aafc342fc68f98ef91699fb505d1ed.png");

},
750576(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479825-1b7173153eb85cbd3218c84948d5636b.gif");

},
124647(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
513340(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959822-3e3cfe00bbd7685c9547cc97148bac4e.png");

},
169749(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479821-a6521e3da12aeabaf941dce28492b896.png");

},
971266(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959826-3789d3ca8cffcdccb62b6d339dd3e8c6.png");

},
732513(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479827-a783ead36dc44401b965866cda19e7a4.gif");

},
789708(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
621380(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479823-352c0a95357bf3547da077a4e0203817.gif");

},
918450(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800174-2e9ae9ff71858f256e34d7faf84c7a6a.gif");

},
688946(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959824-1a3a2e84e052cd484756d669dcad0235.gif");

},
571670(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
714204(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800178-820bb1b2a5bacb801f6ba741af2fc488.gif");

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