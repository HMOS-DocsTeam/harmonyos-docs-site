"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["284613"], {
957138(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_text_and_input_ts_basic_components_text_ts_basic_components_text_md_1be_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-text-and-input-ts-basic-components-text-ts-basic-components-text-md-1be.json
var site_docs_ref_arkui_api_arkui_declarative_comp_text_and_input_ts_basic_components_text_ts_basic_components_text_md_1be_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text","title":"Text","description":"显示一段文本的组件。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text.md","sourceDirName":"arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text","slug":"/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Text","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-basic-components-text"},"sidebar":"ref","previous":{"title":"选择器（Picker）公共接口","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-picker-common/ts-picker-common"},"next":{"title":"TextArea","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textarea/ts-basic-components-textarea"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text.md


const frontMatter = {
	title: 'Text',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-text',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-basic-components-text'
};
const contentTitle = 'Text';

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
  "value": "属性",
  "id": "属性",
  "level": 2
}, {
  "value": "baselineOffset",
  "id": "baselineoffset",
  "level": 3
}, {
  "value": "bindSelectionMenu11+",
  "id": "bindselectionmenu11",
  "level": 3
}, {
  "value": "caretColor14+",
  "id": "caretcolor14",
  "level": 3
}, {
  "value": "contentTransition20+",
  "id": "contenttransition20",
  "level": 3
}, {
  "value": "copyOption9+",
  "id": "copyoption9",
  "level": 3
}, {
  "value": "dataDetectorConfig11+",
  "id": "datadetectorconfig11",
  "level": 3
}, {
  "value": "decoration",
  "id": "decoration",
  "level": 3
}, {
  "value": "draggable9+",
  "id": "draggable9",
  "level": 3
}, {
  "value": "editMenuOptions12+",
  "id": "editmenuoptions12",
  "level": 3
}, {
  "value": "ellipsisMode11+",
  "id": "ellipsismode11",
  "level": 3
}, {
  "value": "enableAutoSpacing20+",
  "id": "enableautospacing20",
  "level": 3
}, {
  "value": "enableDataDetector11+",
  "id": "enabledatadetector11",
  "level": 3
}, {
  "value": "enableHapticFeedback13+",
  "id": "enablehapticfeedback13",
  "level": 3
}, {
  "value": "enableSelectedDataDetector22+",
  "id": "enableselecteddatadetector22",
  "level": 3
}, {
  "value": "font10+",
  "id": "font10",
  "level": 3
}, {
  "value": "font12+",
  "id": "font12",
  "level": 3
}, {
  "value": "fontColor",
  "id": "fontcolor",
  "level": 3
}, {
  "value": "fontFamily",
  "id": "fontfamily",
  "level": 3
}, {
  "value": "fontFeature12+",
  "id": "fontfeature12",
  "level": 3
}, {
  "value": "fontSize",
  "id": "fontsize",
  "level": 3
}, {
  "value": "fontStyle",
  "id": "fontstyle",
  "level": 3
}, {
  "value": "fontWeight",
  "id": "fontweight",
  "level": 3
}, {
  "value": "fontWeight12+",
  "id": "fontweight12",
  "level": 3
}, {
  "value": "halfLeading12+",
  "id": "halfleading12",
  "level": 3
}, {
  "value": "heightAdaptivePolicy10+",
  "id": "heightadaptivepolicy10",
  "level": 3
}, {
  "value": "letterSpacing",
  "id": "letterspacing",
  "level": 3
}, {
  "value": "lineBreakStrategy12+",
  "id": "linebreakstrategy12",
  "level": 3
}, {
  "value": "lineHeight",
  "id": "lineheight",
  "level": 3
}, {
  "value": "lineHeightMultiple22+",
  "id": "lineheightmultiple22",
  "level": 3
}, {
  "value": "lineSpacing12+",
  "id": "linespacing12",
  "level": 3
}, {
  "value": "lineSpacing20+",
  "id": "linespacing20",
  "level": 3
}, {
  "value": "marqueeOptions18+",
  "id": "marqueeoptions18",
  "level": 3
}, {
  "value": "maxFontScale12+",
  "id": "maxfontscale12",
  "level": 3
}, {
  "value": "maxFontSize",
  "id": "maxfontsize",
  "level": 3
}, {
  "value": "maxLineHeight22+",
  "id": "maxlineheight22",
  "level": 3
}, {
  "value": "selectedDragPreviewStyle23+",
  "id": "selecteddragpreviewstyle23",
  "level": 3
}, {
  "value": "maxLines",
  "id": "maxlines",
  "level": 3
}, {
  "value": "minFontScale12+",
  "id": "minfontscale12",
  "level": 3
}, {
  "value": "minFontSize",
  "id": "minfontsize",
  "level": 3
}, {
  "value": "minLineHeight22+",
  "id": "minlineheight22",
  "level": 3
}, {
  "value": "minLines22+",
  "id": "minlines22",
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
  "value": "optimizeTrailingSpace20+",
  "id": "optimizetrailingspace20",
  "level": 3
}, {
  "value": "compressLeadingPunctuation23+",
  "id": "compressleadingpunctuation23",
  "level": 3
}, {
  "value": "privacySensitive12+",
  "id": "privacysensitive12",
  "level": 3
}, {
  "value": "selectedBackgroundColor14+",
  "id": "selectedbackgroundcolor14",
  "level": 3
}, {
  "value": "selection11+",
  "id": "selection11",
  "level": 3
}, {
  "value": "shaderStyle20+",
  "id": "shaderstyle20",
  "level": 3
}, {
  "value": "textAlign",
  "id": "textalign",
  "level": 3
}, {
  "value": "textCase",
  "id": "textcase",
  "level": 3
}, {
  "value": "textContentAlign21+",
  "id": "textcontentalign21",
  "level": 3
}, {
  "value": "textDirection23+",
  "id": "textdirection23",
  "level": 3
}, {
  "value": "textIndent10+",
  "id": "textindent10",
  "level": 3
}, {
  "value": "textOverflow",
  "id": "textoverflow",
  "level": 3
}, {
  "value": "textSelectable12+",
  "id": "textselectable12",
  "level": 3
}, {
  "value": "textShadow10+",
  "id": "textshadow10",
  "level": 3
}, {
  "value": "textVerticalAlign20+",
  "id": "textverticalalign20",
  "level": 3
}, {
  "value": "wordBreak11+",
  "id": "wordbreak11",
  "level": 3
}, {
  "value": "TextSpanType11+枚举说明",
  "id": "textspantype11枚举说明",
  "level": 2
}, {
  "value": "TextResponseType11+枚举说明",
  "id": "textresponsetype11枚举说明",
  "level": 2
}, {
  "value": "TextOverflowOptions18+对象说明",
  "id": "textoverflowoptions18对象说明",
  "level": 2
}, {
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "onCopy11+",
  "id": "oncopy11",
  "level": 3
}, {
  "value": "onTextSelectionChange11+",
  "id": "ontextselectionchange11",
  "level": 3
}, {
  "value": "onMarqueeStateChange18+",
  "id": "onmarqueestatechange18",
  "level": 3
}, {
  "value": "TextOptions11+",
  "id": "textoptions11",
  "level": 2
}, {
  "value": "TextController11+",
  "id": "textcontroller11",
  "level": 2
}, {
  "value": "导入对象",
  "id": "导入对象",
  "level": 3
}, {
  "value": "closeSelectionMenu11+",
  "id": "closeselectionmenu11",
  "level": 3
}, {
  "value": "setStyledString12+",
  "id": "setstyledstring12",
  "level": 3
}, {
  "value": "getLayoutManager12+",
  "id": "getlayoutmanager12",
  "level": 3
}, {
  "value": "setTextSelection23+",
  "id": "settextselection23",
  "level": 3
}, {
  "value": "TextMarqueeOptions18+对象说明",
  "id": "textmarqueeoptions18对象说明",
  "level": 2
}, {
  "value": "MarqueeStartPolicy18+枚举说明",
  "id": "marqueestartpolicy18枚举说明",
  "level": 2
}, {
  "value": "MarqueeUpdatePolicy23+枚举说明",
  "id": "marqueeupdatepolicy23枚举说明",
  "level": 2
}, {
  "value": "MarqueeState18+枚举说明",
  "id": "marqueestate18枚举说明",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（设置文本布局）",
  "id": "示例1设置文本布局",
  "level": 3
}, {
  "value": "示例2（设置文本样式）",
  "id": "示例2设置文本样式",
  "level": 3
}, {
  "value": "示例3（设置文本超长省略）",
  "id": "示例3设置文本超长省略",
  "level": 3
}, {
  "value": "示例4（设置文本断行及折行）",
  "id": "示例4设置文本断行及折行",
  "level": 3
}, {
  "value": "示例5（设置文本选中和复制）",
  "id": "示例5设置文本选中和复制",
  "level": 3
}, {
  "value": "示例6（设置文本自适应和缩放倍数限制范围）",
  "id": "示例6设置文本自适应和缩放倍数限制范围",
  "level": 3
}, {
  "value": "示例7（设置文本识别）",
  "id": "示例7设置文本识别",
  "level": 3
}, {
  "value": "示例8（文本绑定自定义菜单）",
  "id": "示例8文本绑定自定义菜单",
  "level": 3
}, {
  "value": "示例9（设置文本特性与行间距）",
  "id": "示例9设置文本特性与行间距",
  "level": 3
}, {
  "value": "示例10（获取文本信息）",
  "id": "示例10获取文本信息",
  "level": 3
}, {
  "value": "示例11（实现键盘框选文本）",
  "id": "示例11实现键盘框选文本",
  "level": 3
}, {
  "value": "示例12（文本扩展自定义菜单）",
  "id": "示例12文本扩展自定义菜单",
  "level": 3
}, {
  "value": "示例13（配置隐私隐藏）",
  "id": "示例13配置隐私隐藏",
  "level": 3
}, {
  "value": "示例14（设置中西文自动间距）",
  "id": "示例14设置中西文自动间距",
  "level": 3
}, {
  "value": "示例15（文本颜色按线性或径向渐变）",
  "id": "示例15文本颜色按线性或径向渐变",
  "level": 3
}, {
  "value": "示例16（配置除去行尾空格）",
  "id": "示例16配置除去行尾空格",
  "level": 3
}, {
  "value": "示例17（文本垂直对齐）",
  "id": "示例17文本垂直对齐",
  "level": 3
}, {
  "value": "示例18（文本翻牌动效）",
  "id": "示例18文本翻牌动效",
  "level": 3
}, {
  "value": "示例19（文本内容区垂直对齐）",
  "id": "示例19文本内容区垂直对齐",
  "level": 3
}, {
  "value": "示例20（倍数行高和最大最小行高）",
  "id": "示例20倍数行高和最大最小行高",
  "level": 3
}, {
  "value": "示例21（文本设置显示最小行数）",
  "id": "示例21文本设置显示最小行数",
  "level": 3
}, {
  "value": "示例22（设置文本选择区域并高亮显示）",
  "id": "示例22设置文本选择区域并高亮显示",
  "level": 3
}, {
  "value": "示例23（设置行首标点压缩）",
  "id": "示例23设置行首标点压缩",
  "level": 3
}, {
  "value": "示例24（设置自适应间距）",
  "id": "示例24设置自适应间距",
  "level": 3
}, {
  "value": "示例25（设置文本拖拽时的背板样式）",
  "id": "示例25设置文本拖拽时的背板样式",
  "level": 3
}, {
  "value": "示例26（设置文本排版方向）",
  "id": "示例26设置文本排版方向",
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
    number: "number",
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
        id: "text",
        children: "Text"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "显示一段文本的组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(830986)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该组件从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["文本在组件区域显示效果与字体资源相关，默认字体排印可见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/design-guides/font-0000001828772001",
        children: "字体排印视觉指引"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以包含", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-span/ts-basic-components-span",
        children: "Span"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-imagespan/ts-basic-components-imagespan",
        children: "ImageSpan"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolspan/ts-basic-components-symbolspan",
        children: "SymbolSpan"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-containerspan/ts-basic-components-containerspan",
        children: "ContainerSpan"
      }), "子组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(828558)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%AD%90%E7%BB%84%E4%BB%B6",
        children: "子组件"
      }), "实现", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-text/arkts-text-image-layout",
        children: "图文混排"
      }), "场景。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Text(content?: string | Resource , value?: TextOptions)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#textoptions11",
              children: "TextOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本组件初始化选项。"
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
      }), "，还支持以下属性："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "布局与对齐"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "baselineOffset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本基线的偏移量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "halfLeading12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本是否垂直居中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textAlign"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本段落在水平方向的对齐方式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textContentAlign21+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本内容区在组件内的垂直对齐方式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textVerticalAlign20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本段落在垂直方向的对齐方式。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "字体样式"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "decoration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本装饰线样式及其颜色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "font10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本样式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "font12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本样式，支持设置字体配置项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontColor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置字体颜色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontFamily"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置字体族。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontFeature12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文字特性效果，比如数字等宽的特性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置字体大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontStyle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置字体样式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontWeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本的字体粗细。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fontWeight12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本字重，支持设置字体配置项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "letterSpacing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本字符间距。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "shaderStyle20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本渐变或纯色效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textCase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本大小写。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textShadow10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文字阴影效果。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "文本溢出、断行与折行"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ellipsisMode11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置省略位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lineBreakStrategy12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置折行规则。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "marqueeOptions18+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本跑马灯模式的配置项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textOverflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本超长时的显示方式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "wordBreak11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置断行规则。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "行与段落"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableAutoSpacing20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否开启中文与西文的自动间距。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lineHeight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本的文本行高。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lineHeightMultiple22+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本的行高倍数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lineSpacing12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本的行间距。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lineSpacing20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本的行间距。当不配置LineSpacingOptions时，首行上方和尾行下方默认会有行间距。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxLineHeight22+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本的最大行高。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxLines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本的最大行数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minLineHeight22+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本的最小行高。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minLines22+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本显示的最小行数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "optimizeTrailingSpace20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "优化行尾空格。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textIndent10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置首行文本缩进。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "字体自适应"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "heightAdaptivePolicy10+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本自适应布局调整字号的方式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxFontScale12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本最大的字体缩放倍数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxFontSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本最大显示字号。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minFontScale12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本最小的字体缩放倍数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minFontSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本最小显示字号。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "文本选择与复制"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "caretColor14+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本框选中区域手柄颜色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "copyOption9+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置组件是否支持文本可复制粘贴。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "draggable9+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置选中文本拖拽效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selectedBackgroundColor14+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本选中底板颜色。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selection11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置选中区域。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textSelectable12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否支持文本可选择、可获焦。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "文本识别"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dataDetectorConfig11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本识别配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableDataDetector11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否进行文本特殊实体识别。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableSelectedDataDetector22+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否对选中文本进行实体识别。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "自定义菜单"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bindSelectionMenu11+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置自定义选择菜单。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "editMenuOptions12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置自定义菜单扩展项。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "其他功能"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "contentTransition20+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本动效属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "enableHapticFeedback13+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否开启触控反馈。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "privacySensitive12+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置是否支持卡片敏感隐私信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下是详细的接口说明："
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "baselineoffset",
      children: "baselineOffset"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "baselineOffset(value: number | ResourceStr)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本基线的偏移量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置该值为百分比时，按默认值显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "正数内容向上偏移，负数向下偏移。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bindselectionmenu11",
      children: "bindSelectionMenu11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bindSelectionMenu(spanType: TextSpanType, content: CustomBuilder, responseType: TextResponseType, options?: SelectionMenuOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置自定义选择菜单。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["bindSelectionMenu的长按响应时长为600ms，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#bindcontextmenu8",
        children: "bindContextMenu"
      }), "的长按响应时长为800ms，当两者同时绑定且触发方式均为长按时，优先响应bindSelectionMenu。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["自定义菜单超长时，建议内部嵌套使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll",
        children: "Scroll"
      }), "组件，避免键盘被遮挡。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(511799)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该接口不支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#editmenuoptions12",
        children: "editMenuOptions"
      }), "设置文本选择菜单时，保留系统默认的风格，触发菜单弹出的条件不变。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#bindselectionmenu11",
        children: "bindSelectionMenu"
      }), "设置文本选择菜单时，风格由开发者定义，触发菜单弹出的条件由开发者定义。"]
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "spanType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#textspantype11%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "TextSpanType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选择菜单的类型。  默认值：TextSpanType.TEXT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "content"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#custombuilder8",
              children: "CustomBuilder"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选择菜单的内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "responseType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#textresponsetype11%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "TextResponseType"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选择菜单的响应类型。  默认值：TextResponseType.LONG_PRESS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-richeditor/ts-basic-components-richeditor#selectionmenuoptions",
              children: "SelectionMenuOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "选择菜单的选项。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "caretcolor14",
      children: "caretColor14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "caretColor(color: ResourceColor)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本框选中区域手柄颜色。"
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
            children: "color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本选中手柄颜色。  默认值：'#007DFF'"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "contenttransition20",
      children: "contentTransition20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "contentTransition(transition: Optional<ContentTransition>)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以设置为数字翻牌动效", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#numerictexttransition20",
        children: "NumericTextTransition"
      }), "。"]
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
            children: "transition"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Optional<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#contenttransition20",
              children: "ContentTransition"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本动效属性。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "copyoption9",
      children: "copyOption9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "copyOption(value: CopyOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件是否支持文本可复制粘贴。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，当Text组件执行复制操作时，会将HTML格式的内容添加到剪贴板中。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当Text组件包含子组件时，仅支持", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-span/ts-basic-components-span",
          children: "Span"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-imagespan/ts-basic-components-imagespan",
          children: "ImageSpan"
        }), "子组件向剪贴板中添加HTML格式的内容。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["设置Text组件的属性字符串时，请参考属性字符串", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#tohtml14",
          children: "toHtml"
        }), "接口文档，以了解支持转换为HTML的范围。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置copyOption为CopyOptions.InApp或者CopyOptions.LocalDevice时："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "长按文本，会弹出文本选择菜单，可选中文本并进行复制、全选操作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "默认情况下，长按选中文本可拖拽。若要取消此功能，可将 draggable 设置为 false。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若需要支持Ctrl+C复制，需同时设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "#textselectable12",
          children: "textSelectable"
        }), "为TextSelectableMode.SELECTABLE_FOCUSABLE。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此时Text会监听onClick事件，手势事件为非冒泡事件，若需要点击Text组件区域响应父组件的点击手势事件，建议在父组件上使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/gesture-handling/gesture-binding/ts-gesture-settings/ts-gesture-settings#parallelgesture",
        children: "parallelGesture"
      }), "绑定手势识别，也可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%A4%BA%E4%BE%8B7%E8%AE%BE%E7%BD%AE%E6%96%87%E6%9C%AC%E8%AF%86%E5%88%AB",
        children: "示例7设置文本识别"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于卡片没有长按事件，此场景下长按文本，不会弹出文本选择菜单。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "组件是否支持文本可复制粘贴。  默认值：CopyOptions.None"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "datadetectorconfig11",
      children: "dataDetectorConfig11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dataDetectorConfig(config: TextDataDetectorConfig)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本识别配置，可配置识别类型、实体显示样式，以及是否开启长按预览等。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "#enabledatadetector11",
        children: "enableDataDetector"
      }), "一起使用，设置enableDataDetector为true时，dataDetectorConfig的配置才能生效。"]
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
            children: "config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#textdatadetectorconfig11%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TextDataDetectorConfig"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本识别配置。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "decoration",
      children: "decoration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "decoration(value: DecorationStyleInterface)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本装饰线样式及其颜色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(228769)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当文字的下边缘轮廓与装饰线位置相交时，会触发下划线避让规则，下划线将在这些字符处避让文字。常见\"gjyqp\"等英文字符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当文本装饰线的颜色设置为Color.Transparent时，装饰线颜色设置为跟随每行第一个字的字体颜色。当文本装饰线的颜色设置为透明色16进制对应值\"#00FFFFFF\"时，装饰线颜色设置为透明色。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#decorationstyleinterface",
              children: "DecorationStyleInterface12+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文本装饰线样式对象。  默认值：  {  type: TextDecorationType.None,  color: Color.Black,  style: TextDecorationStyle.SOLID  }  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  style参数不支持卡片能力。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "draggable9",
      children: "draggable9+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "draggable(value: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置选中文本拖拽效果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不能和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-drag-drop/ts-universal-events-drag-drop#ondragstart",
        children: "onDragStart"
      }), "事件同时使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当draggable设置为true时，需配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#copyoptions9",
        children: "CopyOptions"
      }), "使用，设置copyOptions为CopyOptions.InApp或者CopyOptions.LocalDevice，支持对选中文本的拖拽及复制到输入框。"]
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
            children: "选中文本拖拽效果。  true表示选中文本可拖拽，false表示不可拖拽。  默认值：false"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(912817)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#editmenuoptions12",
        children: "editMenuOptions"
      }), "设置文本选择菜单时，保留系统默认的风格，触发菜单弹出的条件不变。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#bindselectionmenu11",
        children: "bindSelectionMenu"
      }), "设置文本选择菜单时，风格由开发者定义，触发菜单弹出的条件由开发者定义。"]
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
      id: "ellipsismode11",
      children: "ellipsisMode11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ellipsisMode(value: EllipsisMode)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置省略位置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ellipsisMode属性需要与overflow设置为TextOverflow.Ellipsis以及maxLines使用，单独设置ellipsisMode属性不生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "EllipsisMode.START和EllipsisMode.CENTER仅在单行超长文本生效。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#ellipsismode11",
              children: "EllipsisMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "省略位置。  默认值：EllipsisMode.END"
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
      id: "enabledatadetector11",
      children: "enableDataDetector11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "enableDataDetector(enable: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否进行文本特殊实体识别。当enableDataDetector设置为true时，识别特殊实体。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "所识别实体的样式如下，即字体颜色改为蓝色、并添加蓝色下划线。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "color: '#ff007dff'\ndecoration:{\n  type: TextDecorationType.Underline,\n  color: '#ff007dff',\n  style: TextDecorationStyle.SOLID\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(460890)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设备底层需要具备文本识别能力，该接口才能生效。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当", (0,jsx_runtime.jsx)(_components.a, {
            href: "#textoverflow",
            children: "textOverflow"
          }), "设置为TextOverflow.MARQUEE时，不进行文本特殊实体识别。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当", (0,jsx_runtime.jsx)(_components.a, {
            href: "#copyoption9",
            children: "copyOption"
          }), "设置不为CopyOptions.None且", (0,jsx_runtime.jsx)(_components.a, {
            href: "#textselectable12",
            children: "textSelectable"
          }), "设置为TextSelectableMode.UNSELECTABLE时，仍然具有通过菜单复制特殊实体的能力，但不具备选择文本的能力。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "手势点击和鼠标右键点击实体，会根据实体类型弹出对应的实体操作菜单，鼠标左键点击实体会直接响应菜单的第一个选项。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当copyOption设置为CopyOptions.None时，点击实体弹出的菜单不包含翻译、分享和搜索选项。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 20开始，支持选中文本后识别实体，在文本选择菜单与鼠标右键菜单中显示对应菜单选项。菜单选项包括", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#textmenuitemid12",
            children: "TextMenuItemId"
          }), "中的url（打开链接）、email（新建邮件）、phoneNumber（呼叫）、address（导航至该位置）、dateTime（新建日程提醒）。选中文本后识别实体弹出对应菜单选项，要求在选中范围内包括一个完整的AI实体，才能展示对应的选项。例如，实体是", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://developer.huawei.com时，只选中com，菜单不会显示打开链接选项"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从API version 20开始，支持在文本选择菜单中显示“问问小艺”选项。当copyOption设置为CopyOptions.LocalDevice或CopyOptions.CROSS_DEVICE(deprecated)时，选中文本后："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果enableDataDetector设置为false，显示问问小艺选项。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果enableDataDetector设置为true，此时选中范围内，没有一个AI实体，显示问问小艺选项。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果enableDataDetector设置为true，此时选中范围内，有一个以上的AI实体，显示问问小艺选项。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["如果enableDataDetector设置为true，此时选中范围内，恰好有一个AI实体，展示", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#textmenuitemid12",
              children: "TextMenuItemId"
            }), "中的对应的选项，此时不显示问问小艺选项。"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
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
            children: "使能文本识别。  true表示文本可实体识别，false表示不可识别。  默认值：false"
          })]
        })
      })]
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
        children: "module.json5配置文件"
      }), "中配置requestPermissions字段开启振动权限，配置如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"requestPermissions\": [\n {\n    \"name\": \"ohos.permission.VIBRATE\",\n }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(650141)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 18开始，该接口支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "中调用。"]
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
            children: "是否开启触控反馈。  true表示开启，false表示不开启。  默认值：true"
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
      id: "font10",
      children: "font10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "font(value: Font)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "包括字体大小、字体粗细、字体族和字体风格。"
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
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本样式。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "font12",
      children: "font12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "font(fontValue: Font, options?: FontSettingOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本样式，支持设置字体配置项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "仅Text组件生效，其子组件不生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 12开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "fontValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#font",
              children: "Font"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本样式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#fontsettingoptions12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "FontSettingOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置字体配置项。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fontcolor",
      children: "fontColor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fontColor(value: ResourceColor)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置字体颜色。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "字体颜色。  默认值：'#e6182431'  Wearable设备上默认值为：'#c5ffffff'"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fontfamily",
      children: "fontFamily"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fontFamily(value: string | Resource)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置字体族。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(684475)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkgraphics-api/arkgraphics-arkts/js-apis-graphics-text/js-apis-graphics-text#loadfontsync",
        children: "loadFontSync"
      }), "注册自定义字体。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(105805)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不支持Text内同时存在文本内容和Span或ImageSpan子组件。如果同时存在，只显示Span或ImageSpan内的内容。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["字体排版引擎会对开发者传入的宽度", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#width",
        children: "width"
      }), "进行向下取整，保证是整型像素后进行排版。如果向上取整，可能会出现文字右侧被截断。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当多个Text组件在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/rows-columns-and-stacking/ts-container-row/ts-container-row",
        children: "Row"
      }), "容器内布局且没有设置具体的布局分配信息时，Text会以Row的最大尺寸进行布局。如果需要子组件主轴累加的尺寸不超过Row容器主轴的尺寸，可以设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#layoutweight",
        children: "layoutWeight"
      }), "或者是以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-flex-layout/ts-universal-attributes-flex-layout",
        children: "Flex"
      }), "布局来约束子组件的主轴尺寸。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统默认字体支持的liga连字：Th fb ff fb ffb ffh ffi ffk ffl fh fi fk fl rf rt rv rx ry。常导致Span、属性字符串的效果不符合预期，关闭liga连字特性可以规避。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文字特性效果与使用的字体文件密切相关。例如，8标点挤压功能在当前系统默认字体中仅对左侧标点符号生效，而右侧标点符号及感叹号、顿号、问号均不生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 12开始，该接口支持在ArkTS卡片中使用。"]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fontFeature属性列表："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(183083)/* ["default"] */.A) + "",
        width: "594",
        height: "766"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置fontFeature属性，fontFeature是OpenType字体的高级排版能力，如支持连字、数字等宽等特性，一般用在自定义字体中，其能力需要字体本身支持。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["更多fontFeature能力介绍可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.w3.org/TR/css-fonts-3/#font-feature-settings-prop",
        children: "font-feature-settings property"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://sparanoid.com/lab/opentype-features/",
        children: "OpenType Features"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fontsize",
      children: "fontSize"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fontSize(value: number | string | Resource)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置字体大小。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
      id: "fontstyle",
      children: "fontStyle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fontStyle(value: FontStyle)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置字体样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#fontstyle",
              children: "FontStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字体样式。  默认值：FontStyle.Normal"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fontweight",
      children: "fontWeight"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fontWeight(value: number | FontWeight | ResourceStr)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本的字体粗细，设置过大可能会在不同字体下有截断。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#fontweight",
              children: "FontWeight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fontweight12",
      children: "fontWeight12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fontWeight(weight: number | FontWeight | ResourceStr, options?: FontSettingOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本字重，支持设置字体配置项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["仅Text组件生效，其子组件不生效。常见问题参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/ui-debug-optimize/ui-development-faq/arkts-text-faq#%E8%AE%BE%E7%BD%AEenablevariablefontweight%E4%B8%BAtrue%E5%90%8E%E5%AD%97%E9%87%8D%E4%B8%8D%E8%83%BD%E8%B7%9F%E9%9A%8F%E8%AE%BE%E7%BD%AE%E8%B0%83%E8%8A%82",
        children: "设置enableVariableFontWeight为true后字重不能跟随设置调节"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 12开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "weight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#fontweight",
              children: "FontWeight"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#fontsettingoptions12%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "FontSettingOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置字体配置项。  当options的参数enableVariableFontWeight取值false时，禁用可变字重调节，weight取值为[100, 900]范围内的整百数值时，字重取值为weight。weight是非整百数值时，字重取默认值400。  当options的参数enableVariableFontWeight取值true时，启用可变字重调节，weight取值为[100, 900]范围内任意整数时，字重取值为weight。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "halfleading12",
      children: "halfLeading12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "halfLeading(halfLeading: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本是否垂直居中。"
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
            children: "halfLeading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置文本是否垂直居中。  true表示将行间距平分至行的顶部与底部，false则不平分。  默认值：false"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "heightadaptivepolicy10",
      children: "heightAdaptivePolicy10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "heightAdaptivePolicy(value: TextHeightAdaptivePolicy)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本自适应布局调整字号的方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "规则如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["MAX_LINES_FIRST模式：优先使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "#maxlines",
          children: "maxLines"
        }), "属性来调整文本高度。如果使用maxLines属性的布局大小超过了布局约束，则尝试在", (0,jsx_runtime.jsx)(_components.a, {
          href: "#minfontsize",
          children: "minFontSize"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "#maxfontsize",
          children: "maxFontSize"
        }), "的范围内缩小字体以显示更多文本。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MIN_FONT_SIZE_FIRST模式：优先使用minFontSize属性来调整文本高度。如果使用minFontSize属性可以将文本布局在一行中，则尝试在minFontSize和maxFontSize的范围内增大字体并使用最大限度的字体大小在一行内显示，否则按minFontSize显示。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LAYOUT_CONSTRAINT_FIRST模式：优先使用布局约束来调整文本高度。如果布局大小超过布局约束，则尝试在minFontSize和maxFontSize的范围内缩小字体以满足布局约束。如果将字体大小缩小到minFontSize后，布局大小仍然超过布局约束，则删除超过布局约束的行。"
      }), "\n"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#textheightadaptivepolicy10",
              children: "TextHeightAdaptivePolicy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本自适应高度的方式。  默认值：TextHeightAdaptivePolicy.MAX_LINES_FIRST"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "letterspacing",
      children: "letterSpacing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "letterSpacing(value: number | ResourceStr)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本字符间距。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置该值为百分比时，按默认值显示。设置该值为0时，按默认值显示。string类型支持number类型取值的字符串形式，可以附带单位，例如\"10\"、\"10fp\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当取值为负值时，文字会被压缩。负值过小时会将组件内容区大小压缩为0，导致内容无法显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对每个字符生效，包括行尾字符。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "linebreakstrategy12",
      children: "lineBreakStrategy12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "lineBreakStrategy(strategy: LineBreakStrategy)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置折行规则。该属性在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#wordbreak11",
        children: "wordBreak"
      }), "不等于WordBreak.BREAK_ALL的时候生效，且不支持连词符。"]
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
            children: "strategy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#linebreakstrategy12",
              children: "LineBreakStrategy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本的折行规则。  默认值：LineBreakStrategy.GREEDY"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lineheight",
      children: "lineHeight"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "lineHeight(value: number | string | Resource)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本的文本行高。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置值不大于0时，不限制文本行高，自适应字体大小，number类型时单位为fp。string类型支持number类型取值的字符串形式，可以附带单位，例如\"10\"、\"10fp\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(437020)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "特殊字符字体高度远超出同行的其他字符高度时，文本框出现截断、遮挡、内容相对位置发生变化等不符合预期的显示异常，需要开发者调整组件高度、行高等属性，修改对应的页面布局。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
      id: "lineheightmultiple22",
      children: "lineHeightMultiple22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "lineHeightMultiple(value: number | undefined)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用倍数模式设置文本的行高。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置行高为入参（value）与字高（fontHeight）的乘积。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(401890)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text#lineheight",
        children: "lineHeight"
      }), "同时设置时，仅lineHeightMultiple生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 22开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "linespacing12",
      children: "lineSpacing12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "lineSpacing(value: LengthMetrics)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本的行间距，设置值不大于0时，取默认值0。"
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
            children: "文本的行间距。默认值：0"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "linespacing20",
      children: "lineSpacing20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "lineSpacing(value: LengthMetrics, options?: LineSpacingOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本的行间距。当不配置LineSpacingOptions时，首行上方和尾行下方默认会有行间距。"
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
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本的行间距。设置值不大于0时，取默认值0。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#linespacingoptions20%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "LineSpacingOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置行间距配置项。  默认值：{ onlyBetweenLines: false }"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "marqueeoptions18",
      children: "marqueeOptions18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "marqueeOptions(options: Optional<TextMarqueeOptions>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本跑马灯模式的配置项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当textOverflow设置为TextOverflow.MARQUEE时，marqueeOptions的设置才能生效。"
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
            children: "options"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#textmarqueeoptions18%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TextMarqueeOptions"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当Text组件的textOverflow属性设置为MARQUEE时，可通过marqueeOptions设置跑马灯动效具体的属性，如开关、步长、循环次数、方向等。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "maxfontscale12",
      children: "maxFontScale12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "maxFontScale(scale: number | Resource)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本最大的字体缩放倍数。"
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
            children: "scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "maxfontsize",
      children: "maxFontSize"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "maxFontSize(value: number | string | Resource)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本最大显示字号。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "string类型支持number类型取值的字符串形式，可以附带单位，例如\"10\"、\"10fp\"。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "#minfontsize",
        children: "minFontSize"
      }), "以及", (0,jsx_runtime.jsx)(_components.a, {
        href: "#maxlines",
        children: "maxLines"
      }), "或布局大小限制使用，单独设置不生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自适应字号生效时，fontSize设置不生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["maxFontSize小于等于0或者maxFontSize小于minFontSize时，自适应字号不生效，此时按照", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fontsize",
        children: "fontSize"
      }), "属性的值生效，未设置时按照其默认值生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始支持在子组件和属性字符串上生效，未设置字号的部分会自适应。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
      id: "maxlineheight22",
      children: "maxLineHeight22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "maxLineHeight(value: LengthMetrics | undefined)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本的最大行高，设置值不大于0时，最大行高不受限制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "maxLineHeight小于minLineHeight时，maxLineHeight按照minLineHeight属性的值生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 22开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "selecteddragpreviewstyle23",
      children: "selectedDragPreviewStyle23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本拖拽时的背板样式。"
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
      id: "maxlines",
      children: "maxLines"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "maxLines(value: number)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本的最大行数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["默认情况下，文本是自动折行的，如果指定此属性，则文本最多不会超过指定的行数。如果有多余的文本，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#textoverflow",
        children: "textOverflow"
      }), "来指定截断方式。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文本的最大行数。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  取值范围：[0, INT32_MAX]  设置为0时，不显示文本内容。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "minfontscale12",
      children: "minFontScale12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "minFontScale(scale: number | Resource)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本最小的字体缩放倍数。"
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
            children: "scale"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "minfontsize",
      children: "minFontSize"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "minFontSize(value: number | string | Resource)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本最小显示字号。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "string类型支持number类型取值的字符串形式，可以附带单位，例如\"10\"、\"10fp\"。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "#maxfontsize",
        children: "maxFontSize"
      }), "以及", (0,jsx_runtime.jsx)(_components.a, {
        href: "#maxlines",
        children: "maxLines"
      }), "或布局大小限制使用，单独设置不生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自适应字号生效时，fontSize设置不生效。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["minFontSize小于或等于0时，自适应字号不生效，此时按照", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fontsize",
        children: "fontSize"
      }), "属性的值生效，未设置时按照其默认值生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，支持在子组件和属性字符串上生效，未设置字号的部分会自适应。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
      id: "minlineheight22",
      children: "minLineHeight22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "minLineHeight(value: LengthMetrics | undefined)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本的最小行高，设置值不大于0时，取默认值0。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 22开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-graphics/js-apis-arkui-graphics#lengthmetrics12",
              children: "LengthMetrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "minlines22",
      children: "minLines22+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "minLines(minLines: Optional<number>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本显示的最小行数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果实际文本高度小于最小行数对应的高度，最后显示高度为最小行数对应的高度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#maxlines",
        children: "maxLines"
      }), "同时配置时，最小行高显示范围不会超过最大行高限制。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果文本设置了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#constraintsize",
        children: "constraintSize"
      }), "，那么组件最后显示高度会在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-size/ts-universal-attributes-size#constraintsize",
        children: "constraintSize"
      }), "约束内。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 22开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "minLines"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.number, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本最小行数。  取值范围：[0, INT32_MAX]  设置的值小于0时按0处理。"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "optimizetrailingspace20",
      children: "optimizeTrailingSpace20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "optimizeTrailingSpace(optimize: Optional<boolean>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否在文本布局过程中优化每行末尾的空格，可解决行尾空格影响对齐显示效果问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置Text.optimizeTrailingSpace为true时："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多行、单行、图文混排等多种情况下均会优化行尾空格（TextAlign.Center或TextAlign.End时，优化效果明显）；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "纯空格文本时，修饰线、阴影、背景色跟随空格文本显示；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "行首空格不在优化范围内，行尾文本强制换行，每行行尾空格根据组件宽度优化行尾空格。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当纯空格文本设置优化行尾空格", (0,jsx_runtime.jsx)(_components.a, {
        href: "#optimizetrailingspace20",
        children: "optimizeTrailingSpace"
      }), "为true时，不允许同时设置文本背景色", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-background/ts-universal-attributes-background#backgroundcolor",
        children: "backgroundColor"
      }), "、空格装饰线", (0,jsx_runtime.jsx)(_components.a, {
        href: "#decoration",
        children: "decoration"
      }), "和对齐", (0,jsx_runtime.jsx)(_components.a, {
        href: "#textalign",
        children: "textAlign"
      }), "三个属性。"]
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
            children: "optimize"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), (0,jsx_runtime.jsx)(_components.boolean, {})]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是否优化每行末尾的空格。  true表示优化末尾空格，false则不优化。  默认值：false"
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
        src: (__webpack_require__(89953)/* ["default"] */.A) + "",
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
      id: "privacysensitive12",
      children: "privacySensitive12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "privacySensitive(supported: boolean)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否支持卡片敏感隐私信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 12开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["是否支持卡片敏感隐私信息。  默认值为false，当设置为true时，隐私模式下文字将被遮罩为横杠“-”样式。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  设置为null则表示不敏感。  进入隐私模式需要卡片框架支持。隐私遮罩的类型可以通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-obscured/ts-universal-attributes-obscured#obscured",
              children: "obscured"
            }), "配置。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "selectedbackgroundcolor14",
      children: "selectedBackgroundColor14+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "selectedBackgroundColor(color: ResourceColor)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本选中底板颜色。如果未设置不透明度，默认为20%不透明度。"
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
            children: "color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本选中底板颜色。  默认值：'#007DFF'"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "selection11",
      children: "selection11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "selection(selectionStart: number, selectionEnd: number)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置选中区域。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "选中区域高亮且显示手柄和文本选择菜单。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#copyoption9",
        children: "copyOption"
      }), "设置为CopyOptions.None时，设置selection属性不生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#textoverflow",
        children: "textOverflow"
      }), "设置为TextOverflow.MARQUEE时，设置selection属性不生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当selectionStart大于等于selectionEnd时不选中。可选范围为[0, textSize]，其中textSize为文本内容最大字符数，入参小于0时处理为0，大于textSize时处理为textSize。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当selectionStart或selectionEnd位于截断的不可见区域时，文本不选中。当", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-sharp-clipping/ts-universal-attributes-sharp-clipping#clip12",
        children: "clip"
      }), "设置为false时，超出父组件的文本可以被选中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ontextselectionchange11",
        children: "onTextSelectionChange"
      }), "接口获取选中区域位置变化结果。"]
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
            children: "selectionStart"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所选文本的起始位置。  默认值：-1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selectionEnd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所选文本的结束位置。  默认值：-1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shaderstyle20",
      children: "shaderStyle20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "shaderStyle(shader: ShaderStyle)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以显示为径向渐变", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#radialgradientstyle20",
        children: "RadialGradientStyle"
      }), "或线性渐变", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#lineargradientstyle20",
        children: "LinearGradientStyle"
      }), "或纯色", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#colorshaderstyle20",
        children: "ColorShaderStyle"
      }), "的效果，shaderStyle的优先级高于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolspan/ts-basic-components-symbolspan#fontcolor",
        children: "fontColor"
      }), "和AI识别，纯色建议使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolspan/ts-basic-components-symbolspan#fontcolor",
        children: "fontColor"
      }), "。"]
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
            children: "shader"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#shaderstyle20",
              children: "ShaderStyle"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["径向渐变或线性渐变或纯色。  根据传入的参数区分处理径向渐变", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#radialgradientstyle20",
              children: "RadialGradientStyle"
            }), "或线性渐变", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#lineargradientstyle20",
              children: "LinearGradientStyle"
            }), "或纯色", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#colorshaderstyle20",
              children: "ColorShaderStyle"
            }), "，最终设置到Text文本上显示为渐变色效果。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  当设置为径向渐变", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#radialgradientstyle20",
              children: "RadialGradientStyle"
            }), "时，若", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-gradient-color/ts-universal-attributes-gradient-color#radialgradientoptions18%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "RadialGradientOptions"
            }), "的center参数设置到组件范围外时，可将repeating参数设置为true，此时渐变效果会更明显。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "textalign",
      children: "textAlign"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "textAlign(value: TextAlign)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本段落在水平方向的对齐方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文本段落宽度占满Text组件宽度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/layout-property/ts-universal-attributes-location/ts-universal-attributes-location#align",
        children: "align"
      }), "属性控制文本段落在垂直方向上的位置，此组件中不可通过align属性控制文本段落在水平方向上的位置，具体效果如下："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alignment.TopStart、Alignment.Top、Alignment.TopEnd：内容顶部对齐。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alignment.Start、Alignment.Center、Alignment.End：内容垂直居中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alignment.BottomStart、Alignment.Bottom、Alignment.BottomEnd：内容底部对齐。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当textAlign属性设置为TextAlign.JUSTIFY时，需要根据文本内容设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#wordbreak11",
        children: "wordBreak"
      }), "属性，且最后一行文本水平对齐首部，不参与两端对齐。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(874966)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["textAlign只能调整文本整体的布局，不影响字符的显示顺序。若需要调整字符的显示顺序，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-internationalization#%E9%95%9C%E5%83%8F%E7%8A%B6%E6%80%81%E5%AD%97%E7%AC%A6%E5%AF%B9%E9%BD%90",
        children: "镜像状态字符对齐"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "文本段落在水平方向的对齐方式。  默认值：TextAlign.Start  Wearable设备上默认值为：TextAlign.Center"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "textcase",
      children: "textCase"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "textCase(value: TextCase)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本大小写。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#textcase",
              children: "TextCase"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本大小写。  默认值：TextCase.Normal"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "textcontentalign21",
      children: "textContentAlign21+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "textContentAlign(textContentAlign: Optional<TextContentAlign>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本内容区在组件内的垂直对齐方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此接口可以在文本内容区高度大于组件高度时生效，确保文本内容区的对齐方式正确显示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 21开始，该接口支持在元服务中使用。"]
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
            children: "textContentAlign"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#textcontentalign21",
              children: "TextContentAlign"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本段落在垂直方向的对齐方式。  默认(undefined和异常值情况下)和align属性设置为Center效果一致。"
          })]
        })
      })]
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
      id: "textindent10",
      children: "textIndent10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "textIndent(value: Length)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置首行文本缩进。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["首行文本缩进。  默认值：0  单位：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-pixel-units/ts-pixel-units",
              children: "fp"
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "textoverflow",
      children: "textOverflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "textOverflow(options: TextOverflowOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本超长时的显示方式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#textoverflowoptions18%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "TextOverflowOptions"
      }), "设置为TextOverflow.None、TextOverflow.Clip或TextOverflow.Ellipsis时："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置为TextOverflow.None、TextOverflow.Clip，文本超长时按最大行截断显示。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设置为TextOverflow.Ellipsis，文本超长时显示不下的文本用省略号代替。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["需配合", (0,jsx_runtime.jsx)(_components.a, {
          href: "#maxlines",
          children: "maxLines"
        }), "使用，单独设置不生效。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["断行规则参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#wordbreak11",
          children: "wordBreak"
        }), "。默认情况下参考WordBreak.BREAK_WORD的截断方式，文本截断按字进行。例如，英文以单词为最小单位进行截断。若需要以字母为单位进行截断，可设置wordBreak属性为WordBreak.BREAK_ALL。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["折行规则参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#linebreakstrategy12",
          children: "lineBreakStrategy"
        }), "。该属性在", (0,jsx_runtime.jsx)(_components.a, {
          href: "#wordbreak11",
          children: "wordBreak"
        }), "不等于WordBreak.BREAK_ALL的时候生效，不支持连词符。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从API version 11开始，建议优先组合", (0,jsx_runtime.jsx)(_components.a, {
          href: "#textoverflow",
          children: "textOverflow"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "#wordbreak11",
          children: "wordBreak"
        }), "属性来设置截断方式，具体详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E7%A4%BA%E4%BE%8B4%E8%AE%BE%E7%BD%AE%E6%96%87%E6%9C%AC%E6%96%AD%E8%A1%8C%E5%8F%8A%E6%8A%98%E8%A1%8C",
          children: "示例4设置文本断行及折行"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-347",
          children: "如何解决Text组件文本为中文、数字、英文混合时显示省略号截断异常的问题"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当TextOverflowOptions设置为TextOverflow.MARQUEE时："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "文本在一行内滚动显示。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "#maxlines",
          children: "maxLines"
        }), "及", (0,jsx_runtime.jsx)(_components.a, {
          href: "#copyoption9",
          children: "copyOption"
        }), "属性均不生效。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Text组件", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-sharp-clipping/ts-universal-attributes-sharp-clipping#clip12",
          children: "clip"
        }), "属性默认为true。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["属性字符串的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#customspan",
          children: "CustomSpan"
        }), "不支持跑马灯模式。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#textalign",
          children: "textAlign"
        }), "属性的生效规则：当文本不可滚动时，textAlign属性生效；当文本可滚动时，textAlign属性不生效。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从API version 12开始，当TextOverflowOptions设置为TextOverflow.MARQUEE时，支持ImageSpan组件，文本和图片可在一行内滚动显示。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#textoverflowoptions18%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "TextOverflowOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本超长显示方式对象"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "textselectable12",
      children: "textSelectable12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "textSelectable(mode: TextSelectableMode)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置是否支持文本可选择、可获焦。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "#copyoption9",
        children: "copyOption"
      }), "使用。"]
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
            children: "mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#textselectablemode12",
              children: "TextSelectableMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本是否支持可选择、可获焦。  默认值：TextSelectableMode.SELECTABLE_UNFOCUSABLE"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "textshadow10",
      children: "textShadow10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "textShadow(value: ShadowOptions | Array<ShadowOptions>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文字阴影效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不支持ShadowOptions对象中的type、fill字段和color字段的智能取色模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11开始，该接口支持以数组形式入参，实现多重文字阴影。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 10开始，该接口支持在ArkTS卡片中使用。"]
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
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#shadowoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ShadowOptions"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-image-effect/ts-universal-attributes-image-effect#shadowoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
              children: "ShadowOptions"
            }), ">11+"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "textverticalalign20",
      children: "textVerticalAlign20+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "textVerticalAlign(textVerticalAlign: Optional<TextVerticalAlign>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本段落在垂直方向的对齐方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(836260)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["与", (0,jsx_runtime.jsx)(_components.a, {
          href: "#halfleading12",
          children: "halfLeading"
        }), "同时配置时，halfLeading不生效。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["一个段落下使用同一字号必须同时设置行高", (0,jsx_runtime.jsx)(_components.a, {
          href: "#lineheight",
          children: "lineHeight"
        }), "或者同一个段落不同字号文本混排时才有效果差异，否则设置了该属性任意枚举值和未设置该属性都是一样的排版效果。属性字符串", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#textstyle",
          children: "TextStyle"
        }), "中的SuperscriptStyle上下角标样式仅在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#textverticalalign20",
          children: "TextVerticalAlign"
        }), "属性值为TextVerticalAlign.BASELINE时生效，其余垂直对齐方式下上下角标文本和普通文本表现一致，无上下角标效果。"]
      }), "\n"]
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
            children: "textVerticalAlign"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#textverticalalign20",
              children: "TextVerticalAlign"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本段落在垂直方向的对齐方式。  默认值：TextVerticalAlign.BASELINE"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wordbreak11",
      children: "wordBreak11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "wordBreak(value: WordBreak)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置断行规则。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "默认情况下，不调用wordBreak或者设置WordBreak.BREAK_WORD时，文本截断按字进行。例如，英文以单词为最小单位进行截断。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WordBreak.BREAK_ALL与{overflow: TextOverflow.Ellipsis}、maxLines组合使用，可实现英文单词按字母截断，超出部分以省略号显示。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#wordbreak11",
              children: "WordBreak"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "断行规则。  默认值：WordBreak.BREAK_WORD"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "textspantype11枚举说明",
      children: "TextSpanType11+枚举说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-span/ts-basic-components-span",
        children: "Span"
      }), "类型信息。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "TEXT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Span为文字类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMAGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Span为图像类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MIXED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Span为图文混合类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEFAULT15+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["注册此类型菜单但未注册TEXT、IMAGE、MIXED菜单时，文字类型、图片类型、图文混合类型都会触发并显示此类型对应的菜单。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 15开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(898295)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "菜单类型的匹配顺序如下。例如，用户长按文本时，根据以下规则查找："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查找是否注册了TextSpanType.TEXT、TextResponseType.LONG_PRESS菜单"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查找是否注册了TextSpanType.TEXT、TextResponseType.DEFAULT菜单"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查找是否注册了TextSpanType.DEFAULT、TextResponseType.LONG_PRESS菜单"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查找是否注册了TextSpanType.DEFAULT、TextResponseType.DEFAULT菜单"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "textresponsetype11枚举说明",
      children: "TextResponseType11+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "选择菜单的响应类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "RIGHT_CLICK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过鼠标右键触发菜单弹出。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LONG_PRESS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过长按触发菜单弹出。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SELECT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过鼠标选中触发菜单弹出。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 12开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DEFAULT15+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["注册此类型的菜单，但未注册RIGHT_CLICK、LONG_PRESS、SELECT时，右键、长按、鼠标、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#selection11",
              children: "selection"
            }), "选中均会触发并显示此类型对应的菜单。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 15开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(564201)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "菜单类型的匹配顺序如下。例如，用户长按文本时，根据以下规则查找："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查找是否注册了TextSpanType.TEXT、TextResponseType.LONG_PRESS菜单"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查找是否注册了TextSpanType.TEXT、TextResponseType.DEFAULT菜单"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查找是否注册了TextSpanType.DEFAULT、TextResponseType.LONG_PRESS菜单"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "查找是否注册了TextSpanType.DEFAULT、TextResponseType.DEFAULT菜单"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "textoverflowoptions18对象说明",
      children: "TextOverflowOptions18+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文本超长显示方式对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(538932)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "卡片能力："
        })
      }), " 从API version 18开始，该接口支持在ArkTS卡片中使用。"]
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
            children: "overflow7+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#textoverflow",
              children: "TextOverflow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["文本超长时的显示方式。  默认值：TextOverflow.Clip  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "卡片能力："
              })
            }), " 从API version 9开始，该接口支持在ArkTS卡片中使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 11开始，该接口支持在元服务中使用。"]
          })]
        })
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
      id: "oncopy11",
      children: "onCopy11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onCopy(callback:(value: string) => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "长按文本内部区域弹出剪贴板后，点击剪贴板复制按钮，触发该回调。目前只有文本可以复制。"
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
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "复制的文本内容。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ontextselectionchange11",
      children: "onTextSelectionChange11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onTextSelectionChange(callback: (selectionStart: number, selectionEnd: number) => void)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文本选择的位置发生变化时，触发该回调。"
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
            children: "selectionStart"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所选文本的起始位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selectionEnd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "所选文本的结束位置。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onmarqueestatechange18",
      children: "onMarqueeStateChange18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "onMarqueeStateChange(callback: Callback<MarqueeState>)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "跑马灯动画进行到特定的阶段时，触发该回调。"
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
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#marqueestate18%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "MarqueeState"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过callback参数指定触发回调的状态，状态由MarqueeState枚举定义，例如开始滚动、滚动一次、滚动完成。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "textoptions11",
      children: "TextOptions11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Text初始化参数。"
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
            children: "controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#textcontroller11",
              children: "TextController"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本控制器。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "textcontroller11",
      children: "TextController11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Text组件的控制器。"
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
      id: "导入对象",
      children: "导入对象"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "controller: TextController = new TextController()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "closeselectionmenu11",
      children: "closeSelectionMenu11+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "closeSelectionMenu(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关闭自定义选择菜单或系统默认选择菜单。"
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
      id: "setstyledstring12",
      children: "setStyledString12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setStyledString(value: StyledString): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "触发绑定或更新属性字符串。"
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
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#styledstring",
              children: "StyledString"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["属性字符串。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  StyledString的子类", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-universal-styled-string/ts-universal-styled-string#mutablestyledstring",
              children: "MutableStyledString"
            }), "也可以作为入参值。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(708044)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多次调用setStyledString，会用新的入参覆盖已绑定的属性字符串，而不是叠加新的入参。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["属性字符串通过controller绑定时，需要等待布局完成后，绑定生效。当", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#measure12",
        children: "measure"
      }), "和setStyledString同时使用，开发者需要通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-inspector/js-apis-arkui-inspector",
        children: "@ohos.arkui.inspector (布局回调)"
      }), "判断布局完成，再绑定属性字符串。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在API version 14及以下版本，开发者调用TextController的setStyledString接口设置属性字符串，如果调用时TextController还未绑定对应的Text，则此次设置无效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 15开始，TextController会保存设置的属性字符串。当TextController已经和Text绑定，则Text会自动设置属性字符串，显示对应的样式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["这一区别体现在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttoappear",
        children: "aboutToAppear"
      }), "中设置属性字符串，API 14及以下版本不生效，API 15及以上版本生效，推荐用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-text/arkts-styled-string#%E5%88%9B%E5%BB%BA%E5%B9%B6%E5%BA%94%E7%94%A8styledstring%E5%92%8Cmutablestyledstring",
        children: "创建并应用StyledString和MutableStyledString"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getlayoutmanager12",
      children: "getLayoutManager12+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "getLayoutManager(): LayoutManager"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取布局管理器对象。"
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
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#layoutmanager12",
              children: "LayoutManager"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布局管理器对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "settextselection23",
      children: "setTextSelection23+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "setTextSelection(selectionStart: number | undefined, selectionEnd: number | undefined, options?: SelectionOptions): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置文本选择区域并高亮显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(273378)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#copyoption9",
        children: "copyOption"
      }), "设置为CopyOptions.None时，设置setTextSelection不生效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#textoverflow",
        children: "textOverflow"
      }), "设置为TextOverflow.MARQUEE时，设置setTextSelection不生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当selectionStart大于等于selectionEnd时不选中。可选范围为[0, textSize]，其中textSize为文本内容最大字符数，入参小于0时处理为0，大于textSize时处理为textSize。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当selectionStart或selectionEnd位于截断的不可见区域时，文本不选中。截断为false时，超出父组件的文本选中区域生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果设备为PC/2in1，即使options被赋值为MenuPolicy.SHOW，调用setTextSelection也不弹出菜单。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当emoji表情被选中区域截断时，若表情的起始位置包含在设置的文本选中区域内，该表情就会被选中。"
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
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "selectionEnd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
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
            children: "选中文字时的配置。  默认值：SelectionOptions中MenuPolicy.DEFAULT"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "textmarqueeoptions18对象说明",
      children: "TextMarqueeOptions18+对象说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Marquee初始化参数。"
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["控制跑马灯进入播放状态。  true表示播放，false表示不播放。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "step"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["滚动动画文本滚动步长。  默认值：4.0vp  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "spacing23+"
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
            children: ["两轮跑马灯之间的间距。如果LengthMetrics的unit值是PERCENT，当前设置不生效，按默认值处理。  默认值：48.0vp  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 23开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置重复滚动的次数，小于等于零时无限循环。  默认值：-1  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fromStart"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置文本从头开始滚动或反向滚动。  true表示从头开始滚动，false表示反向滚动。  默认值：true  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "delay"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置每次滚动的时间间隔。  默认值：0  单位：毫秒  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fadeout"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置文字超长时的渐隐效果。  true表示支持渐隐效果，false表示不支持渐隐效果。  当Text内容超出显示范围时，未完全展现的文字边缘将应用渐隐效果。若两端均有文字未完全显示，则两端同时应用渐隐效果。在渐隐效果开启状态下，clip属性将自动锁定为true，不允许设置为false。  默认值：false  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "marqueeStartPolicy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#marqueestartpolicy18%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "MarqueeStartPolicy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["设置跑马灯启动策略，该属性值生效需将start设置为true。  默认值：MarqueeStartPolicy.DEFAULT  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 18开始，该接口支持在元服务中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "marqueeUpdatePolicy23+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#marqueeupdatepolicy23%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "MarqueeUpdatePolicy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["跑马灯组件属性更新后，跑马灯的滚动策略。  当跑马灯为播放状态，且文本内容宽度超过跑马灯组件宽度时，该属性生效。  默认值：MarqueeUpdatePolicy.DEFAULT  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "元服务API："
              })
            }), " 从API version 23开始，该接口支持在元服务中使用。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "marqueestartpolicy18枚举说明",
      children: "MarqueeStartPolicy18+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Marquee的滚动方式，可选择默认持续滚动或条件触发滚动。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "DEFAULT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认持续滚动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ON_FOCUS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获焦以及鼠标悬浮时开始滚动。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "marqueeupdatepolicy23枚举说明",
      children: "MarqueeUpdatePolicy23+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "跑马灯组件属性更新后，跑马灯的滚动策略。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "DEFAULT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跑马灯组件属性更新后，从开始位置，运行跑马灯效果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PRESERVE_POSITION"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跑马灯组件属性更新后，保持当前位置，运行跑马灯效果。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "marqueestate18枚举说明",
      children: "MarqueeState18+枚举说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Marquee状态回调的返回值。"
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "START"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跑马灯滚动开始。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "BOUNCE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "完成一次跑马灯滚动，如果循环次数不是1，将会多次返回。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FINISH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跑马灯全部循环次数完成。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1设置文本布局",
      children: "示例1（设置文本布局）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#textalign",
        children: "textAlign"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#lineheight",
        children: "lineHeight"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#baselineoffset",
        children: "baselineOffset"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#halfleading12",
        children: "halfLeading"
      }), "（从API version 12开始）属性展示了文本布局的效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Extend(Text)\nfunction style(TextAlign: TextAlign) {\n  .textAlign(TextAlign)\n  .fontSize(12)\n  .border({ width: 1 })\n  .padding(10)\n  .width('100%')\n  .margin(5)\n}\n\n@Entry\n@Component\nstruct TextExample1 {\n  @State changeTextAlignIndex: number = 0;\n  @State changeDecorationIndex: number = 0;\n  @State textAlign: TextAlign[] = [TextAlign.Start, TextAlign.Center, TextAlign.End];\n  @State textAlignStr: string[] = ['Start', 'Center', 'End'];\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center }) {\n      // 设置文本水平方向对齐方式\n      // 单行文本\n      Text('textAlign').fontSize(9).fontColor(0xCCCCCC)\n      Text(`TextAlign set to ${this.textAlignStr[this.changeTextAlignIndex]}.`)\n        .style(this.textAlign[this.changeTextAlignIndex])\n\n      // 多行文本\n      Text(`This is the text content with textAlign set to ${this.textAlignStr[this.changeTextAlignIndex]}.`)\n        .style(this.textAlign[this.changeTextAlignIndex])\n        .margin(5)\n\n      Row() {\n        Button('当前TextAlign类型：' + this.textAlignStr[this.changeTextAlignIndex]).onClick(() => {\n          this.changeTextAlignIndex++;\n          if (this.changeTextAlignIndex > (this.textAlignStr.length - 1)) {\n            this.changeTextAlignIndex = 0;\n          }\n        })\n      }.justifyContent(FlexAlign.Center).width('100%')\n\n      // 设置文本行高\n      Text('lineHeight').fontSize(9).fontColor(0xCCCCCC)\n      Text('This is the text with the line height set. This is the text with the line height set.')\n        .style(TextAlign.Start)\n      Text('This is the text with the line height set. This is the text with the line height set.')\n        .style(TextAlign.Start)\n        .lineHeight(20)\n\n      // 设置文本基线偏移\n      Text('baselineOffset').fontSize(9).fontColor(0xCCCCCC)\n      Text('This is the text content with baselineOffset 0.')\n        .baselineOffset(0)\n        .style(TextAlign.Start)\n      Text('This is the text content with baselineOffset 30.')\n        .baselineOffset(30)\n        .style(TextAlign.Start)\n      Text('This is the text content with baselineOffset -20.')\n        .baselineOffset(-20)\n        .style(TextAlign.Start)\n\n      // 设置文本是否居中对齐\n      Text('halfLeading').fontSize(9).fontColor(0xCCCCCC)\n      Text(\"This is the text with the halfLeading set.\")\n        .lineHeight(60)\n        .halfLeading(true)\n        .style(TextAlign.Start)\n      Text(\"This is the text without the halfLeading set.\")\n        .lineHeight(60)\n        .halfLeading(false)\n        .style(TextAlign.Start)\n    }.height(600).width('100%').padding({ left: 35, right: 35, top: 35 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(470594)/* ["default"] */.A) + "",
        width: "473",
        height: "845"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2设置文本样式",
      children: "示例2（设置文本样式）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#decoration",
        children: "decoration"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#letterspacing",
        children: "letterSpacing"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#textcase",
        children: "textCase"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fontfamily",
        children: "fontFamily"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#textshadow10",
        children: "textShadow"
      }), "（从API version 10开始）、fontStyle、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#textindent10",
        children: "textIndent"
      }), "（从API version 10开始）、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fontweight12",
        children: "fontWeight"
      }), "（从API version 12开始，支持设置字重无极调节配置项）属性展示了不同样式的文本效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Extend(Text)\nfunction style() {\n  .font({ size: 12 }, { enableVariableFontWeight: true })\n  .border({ width: 1 })\n  .padding(10)\n  .width('100%')\n  .margin(5)\n}\n\n@Entry\n@Component\nstruct TextExample2 {\n  @State changeDecorationIndex: number = 0;\n  @State textDecorationType: TextDecorationType[] =\n    [TextDecorationType.LineThrough, TextDecorationType.Overline, TextDecorationType.Underline];\n  @State textDecorationTypeStr: string[] = ['LineThrough', 'Overline', 'Underline'];\n  @State textDecorationStyle: TextDecorationStyle[] =\n    [TextDecorationStyle.SOLID, TextDecorationStyle.DOTTED, TextDecorationStyle.WAVY];\n  @State textDecorationStyleStr: string[] = ['SOLID', 'DOTTED', 'WAVY'];\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center }) {\n      Text('decoration').fontSize(9).fontColor(0xCCCCCC)\n      Text('This is the text content with the decoration set to LineThrough and the color set to Red.')\n        .decoration({\n          type: this.textDecorationType[this.changeDecorationIndex],\n          color: Color.Red,\n          style: this.textDecorationStyle[this.changeDecorationIndex]\n        })\n        .style()\n        .margin(5)\n\n      Row() {\n        Button('decoration type：' + this.textDecorationTypeStr[this.changeDecorationIndex] + ' & ' +\n        this.textDecorationStyleStr[this.changeDecorationIndex]).onClick(() => {\n          this.changeDecorationIndex++;\n          if (this.changeDecorationIndex > (this.textDecorationTypeStr.length - 1)) {\n            this.changeDecorationIndex = 0;\n          }\n        })\n      }.justifyContent(FlexAlign.Center).width('100%')\n\n      // 文本字符间距\n      Text('letterSpacing').fontSize(9).fontColor(0xCCCCCC)\n      Text('This is the text content with letterSpacing 0.')\n        .letterSpacing(0)\n        .style()\n      Text('This is the text content with letterSpacing 3.')\n        .letterSpacing(3)\n        .style()\n      Text('This is the text content with letterSpacing -1.')\n        .letterSpacing(-1)\n        .style()\n\n      Text('textCase').fontSize(9).fontColor(0xCCCCCC)\n      Text('This is the text content with textCase set to Normal.')\n        .textCase(TextCase.Normal)\n        .style()\n      // 文本全小写展示\n      Text('This is the text content with textCase set to LowerCase.')\n        .textCase(TextCase.LowerCase)\n        .style()\n      // 文本全大写展示\n      Text('This is the text content with textCase set to UpperCase.')\n        .textCase(TextCase.UpperCase)\n        .style()\n\n      Text('fontFamily').fontSize(9).fontColor(0xCCCCCC)\n      // 设置字体列表\n      Text('This is the text content with fontFamily')\n        .style()\n        .fontFamily('HarmonyOS Sans')\n\n      Text('textShadow').fontSize(9).fontColor(0xCCCCCC)\n      // 设置文字阴影效果\n      Text('textShadow')\n        .style()\n        .textAlign(TextAlign.Center)\n        .fontSize(40)\n        .textShadow({\n          radius: 10,\n          color: Color.Black,\n          offsetX: 0,\n          offsetY: 0\n        })\n\n      Text('fontStyle').fontSize(9).fontColor(0xCCCCCC)\n      // 设置字体样式\n      Text('This is the text content with fontStyle set to Italic')\n        .style()\n        .fontStyle(FontStyle.Italic)\n      Text('This is the text content with fontStyle set to Normal')\n        .style()\n        .fontStyle(FontStyle.Normal)\n\n      Text('textIndent').fontSize(9).fontColor(0xCCCCCC)\n      // 设置文字缩进\n      Text('This is the text content with textIndent 30')\n        .style()\n        .textIndent(30)\n\n      Text('fontWeight').fontSize(9).fontColor(0xCCCCCC)\n      // 设置文本的字体粗细\n      Text('This is the text content with fontWeight 800')\n        .style()\n        .fontWeight('800', { enableVariableFontWeight: true })\n\n    }.width('100%').padding({ left: 35, right: 35 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(393543)/* ["default"] */.A) + "",
        width: "460",
        height: "1085"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3设置文本超长省略",
      children: "示例3（设置文本超长省略）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#maxlines",
        children: "maxLines"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#textoverflow",
        children: "textOverflow"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ellipsismode11",
        children: "ellipsisMode"
      }), "（从API version 11开始）属性展示了文本超长省略以及调整省略位置的效果，同时，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#marqueeoptions18",
        children: "marqueeOptions"
      }), "（从API version 18开始）配置跑马灯模式下的配置项以及跑马灯动画进行到特定的阶段时，触发的回调", (0,jsx_runtime.jsx)(_components.a, {
        href: "#onmarqueestatechange18",
        children: "onMarqueeStateChange"
      }), "（从API version 18开始）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { LengthMetrics } from '@kit.ArkUI';\n\n@Extend(Text)\nfunction style() {\n  .textAlign(TextAlign.Center)\n  .fontSize(12)\n  .border({ width: 1 })\n  .padding(10)\n  .width('100%')\n  .margin(5)\n}\n\n@Entry\n@Component\nstruct TextExample3 {\n  @State text: string =\n    'The text component is used to display a piece of textual information.Support universal attributes and universal text attributes.';\n  @State ellipsisModeIndex: number = 0;\n  @State ellipsisMode: EllipsisMode[] = [EllipsisMode.START, EllipsisMode.CENTER, EllipsisMode.END];\n  @State ellipsisModeStr: string[] = ['START', 'CENTER', 'END'];\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center }) {\n      // 文本超长时显示方式\n      Text('TextOverflow+maxLines').fontSize(9).fontColor(0xCCCCCC)\n      // 超出maxLines截断内容展示\n      Text('This is the setting of textOverflow to Clip text content This is the setting of textOverflow to None text content. This is the setting of textOverflow to Clip text content This is the setting of textOverflow to None text content.')\n        .textOverflow({ overflow: TextOverflow.Clip })\n        .maxLines(1)\n        .style()\n\n      // 超出maxLines展示省略号\n      Text('This is set textOverflow to Ellipsis text content This is set textOverflow to Ellipsis text content.')\n        .textOverflow({ overflow: TextOverflow.Ellipsis })\n        .maxLines(1)\n        .style()\n\n      Text('marquee').fontSize(9).fontColor(0xCCCCCC)\n      // 设置文本超长时以跑马灯的方式展示\n      Text('This is the text with the text overflow set marquee')\n        .textOverflow({ overflow: TextOverflow.MARQUEE })\n        .style()\n        .marqueeOptions({\n          start: true,\n          fromStart: true,\n          step: 6,\n          spacing: LengthMetrics.vp(48), // 从API version 23开始新增\n          loop: -1,\n          delay: 0,\n          fadeout: false,\n          marqueeStartPolicy: MarqueeStartPolicy.DEFAULT,\n          marqueeUpdatePolicy: MarqueeUpdatePolicy.DEFAULT // 从API version 23开始新增\n        })\n        .onMarqueeStateChange((state: MarqueeState) => {\n          if (state == MarqueeState.START) {\n            // \"收到状态: START\";\n          } else if (state == MarqueeState.BOUNCE) {\n            // \"收到状态: BOUNCE\";\n          } else if (state == MarqueeState.FINISH) {\n            // \"收到状态: FINISH\";\n          }\n        })\n\n      Text('ellipsisMode').fontSize(9).fontColor(0xCCCCCC)\n      // 设置文本超长时省略号的位置\n      Text(this.text)\n        .textOverflow({ overflow: TextOverflow.Ellipsis })\n        .ellipsisMode(this.ellipsisMode[this.ellipsisModeIndex])\n        .maxLines(1)\n        .style()\n\n      Row() {\n        Button('更改省略号位置：' + this.ellipsisModeStr[this.ellipsisModeIndex]).onClick(() => {\n          this.ellipsisModeIndex++;\n          if (this.ellipsisModeIndex > (this.ellipsisModeStr.length - 1)) {\n            this.ellipsisModeIndex = 0;\n          }\n        })\n      }\n    }.height(600).width('100%').padding({ left: 35, right: 35, top: 35 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(422802)/* ["default"] */.A) + "",
        width: "461",
        height: "402"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例4设置文本断行及折行",
      children: "示例4（设置文本断行及折行）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#wordbreak11",
        children: "wordBreak"
      }), "（从API version 11开始）、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#linebreakstrategy12",
        children: "lineBreakStrategy"
      }), "（从API version 12开始）、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-sharp-clipping/ts-universal-attributes-sharp-clipping#clip12",
        children: "clip"
      }), "属性展示了文本在不同断行、折行规则下的效果以及文本超长时是否截断。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Extend(Text)\nfunction style() {\n  .fontSize(12)\n  .border({ width: 1 })\n  .padding(10)\n  .width('100%')\n  .margin(5)\n}\n\n@Entry\n@Component\nstruct TextExample4 {\n  @State text: string =\n    'The text component is used to display a piece of textual information.Support universal attributes and universal text attributes.';\n  @State text2: string =\n    \"They can be classified as built-in components–those directly provided by the ArkUI framework and custom components – those defined by developers\" +\n      \"The built-in components include buttons radio buttons progress indicators and text You can set the rendering effect of these components in method chaining mode,\" +\n      \"page components are divided into independent UI units to implement independent creation development and reuse of different units on pages making pages more engineering-oriented.\";\n  @State textClip: boolean = false;\n  @State wordBreakIndex: number = 0;\n  @State wordBreak: WordBreak[] = [WordBreak.NORMAL, WordBreak.BREAK_ALL, WordBreak.BREAK_WORD];\n  @State wordBreakStr: string[] = ['NORMAL', 'BREAK_ALL', 'BREAK_WORD'];\n  @State lineBreakStrategyIndex: number = 0;\n  @State lineBreakStrategy: LineBreakStrategy[] =\n    [LineBreakStrategy.GREEDY, LineBreakStrategy.HIGH_QUALITY, LineBreakStrategy.BALANCED];\n  @State lineBreakStrategyStr: string[] = ['GREEDY', 'HIGH_QUALITY', 'BALANCED'];\n\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center }) {\n      Text('wordBreak').fontSize(9).fontColor(0xCCCCCC)\n      // 设置文本断行规则\n      Text(this.text)\n        .maxLines(2)\n        .textOverflow({ overflow: TextOverflow.Ellipsis })\n        .wordBreak(this.wordBreak[this.wordBreakIndex])\n        .style()\n\n      Row() {\n        Button('当前wordBreak模式：' + this.wordBreakStr[this.wordBreakIndex]).onClick(() => {\n          this.wordBreakIndex++;\n          if (this.wordBreakIndex > (this.wordBreakStr.length - 1)) {\n            this.wordBreakIndex = 0;\n          }\n        })\n      }\n\n      Text('clip').fontSize(9).fontColor(0xCCCCCC)\n      // 设置文本是否超长截断\n      Text('This is set wordBreak to WordBreak text Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu.')\n        .wordBreak(WordBreak.NORMAL)\n        .maxLines(2)\n        .clip(this.textClip)\n        .style()\n      Row() {\n        Button('切换clip：' + this.textClip).onClick(() => {\n          this.textClip = !this.textClip;\n        })\n      }\n\n      Text('lineBreakStrategy').fontSize(9).fontColor(0xCCCCCC)\n      // 设置文本折行规则\n      Text(this.text2)\n        .lineBreakStrategy(this.lineBreakStrategy[this.lineBreakStrategyIndex])\n        .style()\n      Row() {\n        Button('当前lineBreakStrategy模式：' + this.lineBreakStrategyStr[this.lineBreakStrategyIndex]).onClick(() => {\n          this.lineBreakStrategyIndex++;\n          if (this.lineBreakStrategyIndex > (this.lineBreakStrategyStr.length - 1)) {\n            this.lineBreakStrategyIndex = 0;\n          }\n        })\n      }\n    }.height(600).width('100%').padding({ left: 35, right: 35, top: 35 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(973041)/* ["default"] */.A) + "",
        width: "461",
        height: "716"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例5设置文本选中和复制",
      children: "示例5（设置文本选中和复制）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#selection11",
        children: "selection"
      }), "（从API version 11开始）、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#oncopy11",
        children: "onCopy"
      }), "（从API version 11开始）、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#draggable9",
        children: "draggable"
      }), "（从API version 9开始）、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#caretcolor14",
        children: "caretColor"
      }), "（从API version 14开始）、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#selectedbackgroundcolor14",
        children: "selectedBackgroundColor"
      }), "（从API version 14开始）接口展示了文本选中、触发复制回调、设置文本选中可拖拽以及修改手柄和选中颜色的效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TextExample5 {\n  @State onCopy: string = '';\n  @State text: string =\n    'This is set selection to Selection text content This is set selection to Selection text content.';\n  @State start: number = 0;\n  @State end: number = 20;\n\n  build() {\n    Column() {\n      Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Start }) {\n        Text(this.text)\n          .fontSize(12)\n          .border({ width: 1 })\n          .lineHeight(20)\n          .margin(30)\n          .copyOption(CopyOptions.InApp)\n          .selection(this.start, this.end)\n          .onCopy((value: string) => {\n            this.onCopy = value;\n          })\n          .draggable(true)\n          .caretColor(Color.Red)\n          .selectedBackgroundColor(Color.Grey)\n          .enableHapticFeedback(true)\n        Button('Set text selection')\n          .onClick(() => {\n            // 变更文本选中起始点、终点\n            this.start = 10;\n            this.end = 30;\n          })\n        Text(this.onCopy).fontSize(12).margin(10).key('copy')\n      }.height(600).width(335).padding({ left: 35, right: 35, top: 35 })\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(185336)/* ["default"] */.A) + "",
        width: "397",
        height: "241"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例6设置文本自适应和缩放倍数限制范围",
      children: "示例6（设置文本自适应和缩放倍数限制范围）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#heightadaptivepolicy10",
        children: "heightAdaptivePolicy"
      }), "（从API version 10开始）属性展示文本自适应效果以及通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#minfontscale12",
        children: "minFontScale"
      }), "（从API version 12开始）、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#maxfontscale12",
        children: "maxFontScale"
      }), "（从API version 12开始）展示设置字体缩放倍数限制范围。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Extend(Text)\nfunction style(HeightAdaptivePolicy: TextHeightAdaptivePolicy) {\n  .width('80%')\n  .height(90)\n  .borderWidth(1)\n  .minFontSize(10)\n  .maxFontSize(30)\n  .maxLines(2)\n  .margin(5)\n  .textOverflow({ overflow: TextOverflow.Ellipsis })\n  .heightAdaptivePolicy(HeightAdaptivePolicy)\n}\n\n@Entry\n@Component\nstruct TextExample6 {\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center }) {\n      // 设置文本自适应高度的方式\n      Text('heightAdaptivePolicy').fontSize(9).fontColor(0xCCCCCC)\n      Text('This is the text with the height adaptive policy set.')\n        .style(TextHeightAdaptivePolicy.MAX_LINES_FIRST)\n      Text('This is the text with the height adaptive policy set.')\n        .style(TextHeightAdaptivePolicy.MIN_FONT_SIZE_FIRST)\n      Text('This is the text with the height adaptive policy set.')\n        .style(TextHeightAdaptivePolicy.LAYOUT_CONSTRAINT_FIRST)\n\n      Text('fontScale').fontSize(9).fontColor(0xCCCCCC)\n      Text('This is the text content with minFontScale set to 1 and maxFontScale set to 1.2')\n        .style(TextHeightAdaptivePolicy.MAX_LINES_FIRST)\n        .minFontScale(1)\n        .maxFontScale(1.2)\n    }.height(600).width('100%').padding({ left: 35, right: 35, top: 35 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(24434)/* ["default"] */.A) + "",
        width: "385",
        height: "653"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例7设置文本识别",
      children: "示例7（设置文本识别）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 11开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#enabledatadetector11",
        children: "enableDataDetector"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#datadetectorconfig11",
        children: "dataDetectorConfig"
      }), "接口实现了文本识别的功能。当", (0,jsx_runtime.jsx)(_components.a, {
        href: "#enabledatadetector11",
        children: "enableDataDetector"
      }), "设为true且不设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#datadetectorconfig11",
        children: "dataDetectorConfig"
      }), "时，系统会识别所有实体类型，并将识别实体的字体颜色改为蓝色、添加蓝色下划线。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TextExample7 {\n  @State phoneNumber: string = '(86) (755) ********';\n  @State url: string = 'www.********.com';\n  @State email: string = '***@example.com';\n  @State address: string = 'XX省XX市XX区XXXX';\n  @State datetime: string = 'XX年XX月XX日XXXX';\n  @State enableDataDetector: boolean = true;\n  @State types: TextDataDetectorType[] = [];\n\n  build() {\n    Row() {\n      Column() {\n        Text(\n          '电话号码：' + this.phoneNumber + '\\n' +\n            '链接：' + this.url + '\\n' +\n            '邮箱：' + this.email + '\\n' +\n            '地址：' + this.address + '\\n' +\n            '时间：' + this.datetime\n        )\n          .fontSize(16)\n          .copyOption(CopyOptions.InApp)\n          .enableDataDetector(this.enableDataDetector)\n          .dataDetectorConfig({\n            types: this.types, onDetectResultUpdate: (result: string) => {\n            }\n          })\n          .textAlign(TextAlign.Center)\n          .borderWidth(1)\n          .padding(10)\n          .width('100%')\n        Text(\n          '电话号码：' + this.phoneNumber + '\\n' +\n            '时间：' + this.datetime\n        )\n          .fontSize(16)\n          .copyOption(CopyOptions.LocalDevice)\n          .textAlign(TextAlign.Center)\n          .borderWidth(1)\n          .padding(10)\n          .width('100%')\n        TextInput({ text: 'TextInput这个是输入框内容' })\n          .copyOption(CopyOptions.LocalDevice)\n        TextArea({ text: 'TextArea这个是输入框内容' })\n          .copyOption(CopyOptions.LocalDevice)\n        Search()\n          .copyOption(CopyOptions.LocalDevice)\n      }\n      .width('100%')\n      // 使用parallelGesture中的TapGesture替代onClick属性，达到非冒泡事件类似冒泡\n      // 的效果，点击Text组件区域Column上的点击事件正常响应\n      .parallelGesture(TapGesture().onAction((event: GestureEvent) => {\n        console.info('test column onClick timestamp:' + event.timestamp);\n      }), GestureMask.Normal)\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(698450)/* ["default"] */.A) + "",
        width: "527",
        height: "161"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例8文本绑定自定义菜单",
      children: "示例8（文本绑定自定义菜单）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 11开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#bindselectionmenu11",
        children: "bindSelectionMenu"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#ontextselectionchange11",
        children: "onTextSelectionChange"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#closeselectionmenu11",
        children: "closeSelectionMenu"
      }), "接口实现了文本绑定自定义菜单的功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TextExample8 {\n  controller: TextController = new TextController();\n  options: TextOptions = { controller: this.controller };\n\n  build() {\n    Column() {\n      Column() {\n        Text(undefined, this.options) {\n          Span('Hello World')\n          // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n          ImageSpan($r('app.media.startIcon'))\n            .width(50)\n            .height(50)\n            .objectFit(ImageFit.Fill)\n            .verticalAlign(ImageSpanAlignment.CENTER)\n        }\n        .copyOption(CopyOptions.InApp)\n        .bindSelectionMenu(TextSpanType.IMAGE, this.LongPressImageCustomMenu, TextResponseType.LONG_PRESS, {\n          onDisappear: () => {\n            console.info(`自定义选择菜单关闭时回调`);\n          },\n          onAppear: () => {\n            console.info(`自定义选择菜单弹出时回调`);\n          },\n          onMenuShow: () => {\n            console.info(`自定义选择菜单显示时回调`);\n          },\n          onMenuHide: () => {\n            console.info(`自定义选择菜单隐藏时回调`);\n          }\n        })\n        .bindSelectionMenu(TextSpanType.TEXT, this.RightClickTextCustomMenu, TextResponseType.RIGHT_CLICK)\n        .bindSelectionMenu(TextSpanType.MIXED, this.SelectMixCustomMenu, TextResponseType.SELECT)\n        .onTextSelectionChange((selectionStart: number, selectionEnd: number) => {\n          console.info(`文本选中区域变化回调, selectionStart: ${selectionStart}, selectionEnd: ${selectionEnd}`);\n        })\n        .borderWidth(1)\n        .borderColor(Color.Red)\n        .width(200)\n        .height(100)\n      }\n      .width('100%')\n      .backgroundColor(Color.White)\n      .alignItems(HorizontalAlign.Start)\n      .padding(25)\n    }\n    .height('100%')\n  }\n\n  @Builder\n  RightClickTextCustomMenu() {\n    Column() {\n      Menu() {\n        MenuItemGroup() {\n          // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n          MenuItem({ startIcon: $r('app.media.startIcon'), content: \"Right Click Menu 1\", labelInfo: \"\" })\n            .onClick((event) => {\n              this.controller.closeSelectionMenu();\n            })\n          MenuItem({ startIcon: $r('app.media.startIcon'), content: \"Right Click Menu 2\", labelInfo: \"\" })\n          MenuItem({ startIcon: $r('app.media.startIcon'), content: \"Right Click Menu 3\", labelInfo: \"\" })\n        }\n      }\n      .MenuStyles()\n    }\n  }\n\n  @Builder\n  LongPressImageCustomMenu() {\n    Column() {\n      Menu() {\n        MenuItemGroup() {\n          // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n          MenuItem({ startIcon: $r('app.media.startIcon'), content: \"Long Press Image Menu 1\", labelInfo: \"\" })\n            .onClick((event) => {\n              this.controller.closeSelectionMenu();\n            })\n          MenuItem({ startIcon: $r('app.media.startIcon'), content: \"Long Press Image Menu 2\", labelInfo: \"\" })\n          MenuItem({ startIcon: $r('app.media.startIcon'), content: \"Long Press Image Menu 3\", labelInfo: \"\" })\n        }\n      }\n      .MenuStyles()\n    }\n  }\n\n  @Builder\n  SelectMixCustomMenu() {\n    Column() {\n      Menu() {\n        MenuItemGroup() {\n          // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n          MenuItem({ startIcon: $r('app.media.startIcon'), content: \"Select Mixed Menu 1\", labelInfo: \"\" })\n            .onClick((event) => {\n              this.controller.closeSelectionMenu();\n            })\n          MenuItem({ startIcon: $r('app.media.startIcon'), content: \"Select Mixed Menu 2\", labelInfo: \"\" })\n          MenuItem({ startIcon: $r('app.media.startIcon'), content: \"Select Mixed Menu 3\", labelInfo: \"\" })\n        }\n      }\n      .MenuStyles()\n    }\n  }\n}\n\n@Extend(Menu)\nfunction MenuStyles() {\n  .radius($r('sys.float.ohos_id_corner_radius_card'))\n  .clip(true)\n  .backgroundColor('#F0F0F0')\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(655565)/* ["default"] */.A) + "",
        width: "417",
        height: "294"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例9设置文本特性与行间距",
      children: "示例9（设置文本特性与行间距）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#fontfeature12",
        children: "fontFeature"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "#linespacing12",
        children: "lineSpacing"
      }), "接口展示了设置文本特性与行间距的效果，同时，配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#linespacingoptions20%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "LineSpacingOptions"
      }), "中的onlyBetweenLines（从API version 20开始）属性，可以设置文本的行间距，是否仅在行与行之间生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { LengthMetrics } from '@kit.ArkUI';\n\n@Extend(Text)\nfunction style() {\n  .fontSize(12)\n  .border({ width: 1 })\n  .width('100%')\n}\n\n@Entry\n@Component\nstruct TextExample9 {\n  build() {\n    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.SpaceBetween }) {\n      Text('lineSpacing').fontSize(9).fontColor(0xCCCCCC)\n      // 设置文本行间距\n      Text('This is a context with no lineSpacing set.')\n        .lineSpacing(undefined)\n        .style()\n      Text('This is a context with lineSpacing set to 20_px.')\n        .lineSpacing(LengthMetrics.px(20))\n        .style()\n      Text('This is the context with lineSpacing set to 20_vp.')\n        .lineSpacing(LengthMetrics.vp(20))\n        .style()\n      Text('This is the context with lineSpacing set to 20_fp.')\n        .lineSpacing(LengthMetrics.fp(20))\n        .style()\n      Text('This is the context with lineSpacing set to 20_lpx.')\n        .lineSpacing(LengthMetrics.lpx(20))\n        .style()\n      Text('This is the context with lineSpacing set to 100%.')\n        .lineSpacing(LengthMetrics.percent(1))\n        .style()\n      Text('The line spacing of this context is set to 20_px, and the spacing is effective only between the lines.')\n        .lineSpacing(LengthMetrics.px(20), { onlyBetweenLines: true })\n        .style()\n\n      Text('fontFeature').fontSize(9).fontColor(0xCCCCCC)\n      // 设置文本特性\n      Text('This is frac on : 1/2 2/3 3/4')\n        .fontFeature(\"\\\"frac\\\" on\")\n        .style()\n      Text('This is frac off: 1/2 2/3 3/4')\n        .fontFeature(\"\\\"frac\\\" off\")\n        .style()\n    }.height(300).width(350).padding({ left: 35, right: 35, top: 35 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(95024)/* ["default"] */.A) + "",
        width: "295",
        height: "270"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例10获取文本信息",
      children: "示例10（获取文本信息）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#getlayoutmanager12",
        children: "getLayoutManager"
      }), "接口调用文本的布局管理对象获取文本信息，同时，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#layoutmanager12",
        children: "LayoutManager"
      }), "中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-text-common/ts-text-common#getrectsforrange14",
        children: "getRectsForRange"
      }), "（从API version 14开始）接口可以获取指定矩形宽度和高度下，文本中任意区间范围内字符或占位符的绘制区域信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { text } from '@kit.ArkGraphics2D';\n\n@Entry\n@Component\nstruct TextExample10 {\n  @State lineCount: string = \"\";\n  @State glyphPositionAtCoordinate: string = \"\";\n  @State lineMetrics: string = \"\";\n  @State rectsForRangeStr: string = \"\";\n  controller: TextController = new TextController();\n  @State textStr: string =\n    'Hello World! 您好，世界！';\n\n  build() {\n    Scroll() {\n      Column() {\n        Text('Text组件getLayoutManager接口获取段落相对组件的信息')\n          .fontSize(15)\n          .fontColor(0xCCCCCC)\n          .width('90%')\n          .padding(10)\n        Text(this.textStr, { controller: this.controller })\n          .fontSize(25)\n          .borderWidth(1)\n          .onAreaChange(() => {\n            let layoutManager: LayoutManager = this.controller.getLayoutManager();\n            this.lineCount = \"LineCount: \" + layoutManager.getLineCount();\n          })\n\n        Text('LineCount').fontSize(15).fontColor(0xCCCCCC).width('90%').padding(10)\n        Text(this.lineCount)\n\n        Text('GlyphPositionAtCoordinate').fontSize(15).fontColor(0xCCCCCC).width('90%').padding(10)\n        Button(\"相对组件坐标[150,50]字形信息\")\n          .onClick(() => {\n            let layoutManager: LayoutManager = this.controller.getLayoutManager();\n            let position: PositionWithAffinity = layoutManager.getGlyphPositionAtCoordinate(150, 50);\n            this.glyphPositionAtCoordinate =\n              \"相对组件坐标[150,50] glyphPositionAtCoordinate position: \" + position.position + \" affinity: \" +\n              position.affinity;\n          })\n          .margin({ bottom: 20, top: 10 })\n        Text(this.glyphPositionAtCoordinate)\n\n        Text('LineMetrics').fontSize(15).fontColor(0xCCCCCC).width('90%').padding(10)\n        Button(\"首行行信息、文本样式信息、以及字体属性信息\")\n          .onClick(() => {\n            let layoutManager: LayoutManager = this.controller.getLayoutManager();\n            let lineMetrics: LineMetrics = layoutManager.getLineMetrics(0);\n            this.lineMetrics = \"lineMetrics is \" + JSON.stringify(lineMetrics) + \"\\n\\n\";\n            let runMetrics = lineMetrics.runMetrics;\n            runMetrics.forEach((value, key) => {\n              this.lineMetrics += \"runMetrics key is \" + key + \" \" + JSON.stringify(value) + \"\\n\\n\";\n            })\n          })\n          .margin({ bottom: 20, top: 10 })\n        Text(this.lineMetrics)\n\n        Text('getRectsForRange').fontSize(15).fontColor(0xCCCCCC).width('90%').padding(10)\n        Button(\"获取指定矩形宽度和高度下，文本中任意区间范围内字符或占位符的绘制区域信息\")\n          .onClick(() => {\n            let layoutManager: LayoutManager = this.controller.getLayoutManager();\n            let range: TextRange = { start: 0, end: 1 };\n            let rectsForRangeInfo: text.TextBox[] =\n              layoutManager.getRectsForRange(range, text.RectWidthStyle.TIGHT, text.RectHeightStyle.TIGHT);\n            this.rectsForRangeStr = \"getRectsForRange result is \" + \"\\n\\n\";\n            rectsForRangeInfo.forEach((value, key) => {\n              this.rectsForRangeStr += \"rectsForRange key is \" + key + \" \" + JSON.stringify(value) + \"\\n\\n\";\n            })\n          })\n          .margin({ bottom: 20, top: 10 })\n        Text(this.rectsForRangeStr)\n      }\n      .margin({ top: 100, left: 8, right: 8 })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(703992)/* ["default"] */.A) + "",
        width: "506",
        height: "824"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例11实现键盘框选文本",
      children: "示例11（实现键盘框选文本）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#textselectable12",
        children: "textSelectable"
      }), "属性实现了设置TextSelectMode.SELECTABLE_FOCUSABLE时能够触发键盘框选文本功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TextExample11 {\n  @State message: string =\n    'TextTextTextTextTextTextTextText' + 'TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText';\n\n  build() {\n    Column() {\n      Text(this.message)\n        .width(300)\n        .height(100)\n        .maxLines(5)\n        .fontColor(Color.Black)\n        .copyOption(CopyOptions.InApp)\n        .selection(3, 8)\n        .textSelectable(TextSelectableMode.SELECTABLE_FOCUSABLE)\n    }.width('100%').margin({ top: 100 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(858731)/* ["default"] */.A) + "",
        width: "375",
        height: "167"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例12文本扩展自定义菜单",
      children: "示例12（文本扩展自定义菜单）"
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
        children: "// xxx.ets\n@Entry\n@Component\nstruct TextExample12 {\n  @State text: string = 'Text editMenuOptions'\n  @State endIndex: number = 0;\n  onCreateMenu = (menuItems: Array<TextMenuItem>) => {\n    // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n    let item1: TextMenuItem = {\n      content: 'create1',\n      icon: $r('app.media.startIcon'),\n      id: TextMenuItemId.of('create1'),\n    };\n    let item2: TextMenuItem = {\n      content: 'create2',\n      id: TextMenuItemId.of('create2'),\n      icon: $r('app.media.startIcon'),\n    };\n    menuItems.push(item1);\n    menuItems.unshift(item2);\n    let targetIndex = menuItems.findIndex(item => item.id.equals(TextMenuItemId.askAI));\n    if (targetIndex !== -1) {\n      menuItems.splice(targetIndex, 1); // 从目标索引删除1个元素\n    }\n    targetIndex = menuItems.findIndex(item => item.id.equals(TextMenuItemId.TRANSLATE));\n    if (targetIndex !== -1) {\n      menuItems.splice(targetIndex, 1);\n    }\n    return menuItems;\n  }\n  onMenuItemClick = (menuItem: TextMenuItem, textRange: TextRange) => {\n    if (menuItem.id.equals(TextMenuItemId.of(\"create2\"))) {\n      console.info(\"拦截 id: create2 start:\" + textRange.start + \"; end:\" + textRange.end);\n      return true;\n    }\n    if (menuItem.id.equals(TextMenuItemId.of(\"prepare1\"))) {\n      console.info(\"拦截 id: prepare1 start:\" + textRange.start + \"; end:\" + textRange.end);\n      return true;\n    }\n    if (menuItem.id.equals(TextMenuItemId.COPY)) {\n      console.info(\"拦截 COPY start:\" + textRange.start + \"; end:\" + textRange.end);\n      return true;\n    }\n    if (menuItem.id.equals(TextMenuItemId.SELECT_ALL)) {\n      console.info(\"不拦截 SELECT_ALL start:\" + textRange.start + \"; end:\" + textRange.end);\n      return false;\n    }\n    return false;\n  }\n  // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n  onPrepareMenu = (menuItems: Array<TextMenuItem>) => {\n    let item1: TextMenuItem = {\n      content: 'prepare1_' + this.endIndex,\n      icon: $r('app.media.startIcon'),\n      id: TextMenuItemId.of('prepare1'),\n    };\n    menuItems.unshift(item1);\n    return menuItems;\n  }\n  @State editMenuOptions: EditMenuOptions = {\n    onCreateMenu: this.onCreateMenu,\n    onMenuItemClick: this.onMenuItemClick,\n    onPrepareMenu: this.onPrepareMenu\n  };\n\n  build() {\n    Column() {\n      Text(this.text)\n        .fontSize(20)\n        .copyOption(CopyOptions.LocalDevice)\n        .editMenuOptions(this.editMenuOptions)\n        .margin({ top: 100 })\n        .onTextSelectionChange((selectionStart: number, selectionEnd: number) => {\n          this.endIndex = selectionEnd;\n        })\n    }\n    .width(\"90%\")\n    .margin(\"5%\")\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(210898)/* ["default"] */.A) + "",
        width: "364",
        height: "272"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例13配置隐私隐藏",
      children: "示例13（配置隐私隐藏）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 12开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#privacysensitive12",
        children: "privacySensitive"
      }), "属性展示了文本如何配置隐私隐藏的效果，实际显示需要卡片框架支持。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TextExample13 {\n  build() {\n    Column({ space: 10 }) {\n      Text(\"privacySensitive\")\n        .privacySensitive(true)\n        .margin({ top: 30 })\n    }\n    .alignItems(HorizontalAlign.Center)\n    .width(\"100%\")\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(329920)/* ["default"] */.A) + "",
        width: "162",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例14设置中西文自动间距",
      children: "示例14（设置中西文自动间距）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#enableautospacing20",
        children: "enableAutoSpacing"
      }), "属性设置中西文自动间距。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TextExample {\n  build() {\n    Row() {\n      Column() {\n        Text('开启中西文自动间距').margin(5)\n        Text('中西文Auto Spacing自动间距')\n          .enableAutoSpacing(true)\n        Text('关闭中西文自动间距').margin(5)\n        Text('中西文Auto Spacing自动间距')\n          .enableAutoSpacing(false)\n      }.height('100%')\n    }\n    .width('60%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(485364)/* ["default"] */.A) + "",
        width: "312",
        height: "135"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例15文本颜色按线性或径向渐变",
      children: "示例15（文本颜色按线性或径向渐变）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#shaderstyle20",
        children: "shaderStyle"
      }), "接口实现了对Text组件显示为渐变色和纯色的功能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ShaderColorStyle {\n  @State message: string = 'Hello World';\n  @State linearGradientOptions1: LinearGradientOptions =\n    {\n      angle: 45,\n      colors: [[Color.Red, 0.0], [Color.Blue, 0.3], [Color.Green, 0.5]]\n    };\n  @State linearGradientOptions2: LinearGradientOptions =\n    {\n      direction: GradientDirection.LeftTop,\n      colors: [[Color.Red, 0.0], [Color.Blue, 0.3], [Color.Green, 0.5]],\n      repeating: true,\n    };\n  @State radialGradientOptions: RadialGradientOptions =\n    {\n      center: [50, 50],\n      radius: 20,\n      colors: [[Color.Red, 0.0], [Color.Blue, 0.3], [Color.Green, 0.5]],\n      repeating: true,\n    };\n  @State colorShaderStyle: ColorShaderStyle =\n    {\n      color: Color.Blue\n    };\n  build() {\n    Column({ space: 5 }) {\n      Text('angle为45°的线性渐变').fontSize(18).width('90%').fontColor(0xCCCCCC)\n        .margin({ top: 40, left: 40 })\n      Text(this.message)\n        .fontSize(50)\n        .width('80%')\n        .height(50)\n        .shaderStyle(this.linearGradientOptions1)\n      Text('direction为LeftTop的线性渐变').fontSize(18).width('90%').fontColor(0xCCCCCC)\n        .margin({ top: 40, left: 40 })\n      Text(this.message)\n        .fontSize(50)\n        .width('80%')\n        .height(50)\n        .shaderStyle(this.linearGradientOptions2)\n      Text('径向渐变').fontSize(18).width('90%').fontColor(0xCCCCCC)\n        .margin({ top: 40, left: 40 })\n      Text(this.message)\n        .fontSize(50)\n        .width('80%')\n        .height(50)\n        .shaderStyle(this.radialGradientOptions)\n      Text('纯色').fontSize(18).width('90%').fontColor(0xCCCCCC)\n        .margin({ top: 40, left: 40 })\n      Text(this.message)\n        .fontSize(50)\n        .width('80%')\n        .height(50)\n        .shaderStyle(this.colorShaderStyle)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(535274)/* ["default"] */.A) + "",
        width: "295",
        height: "410"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例16配置除去行尾空格",
      children: "示例16（配置除去行尾空格）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#optimizetrailingspace20",
        children: "optimizeTrailingSpace"
      }), "属性展示了文本如何配置除去行尾空格的效果，一般需要与对齐功能搭配使用，实际显示需要字体引擎支持。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TextExample16 {\n  build() {\n    Column() {\n      Text(\"Trimmed space enabled     \")\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n        .margin({ top: 20 })\n        .optimizeTrailingSpace(true)\n        .textAlign(TextAlign.Center)\n      Text(\"Trimmed space disabled     \")\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n        .margin({ top: 20 })\n        .optimizeTrailingSpace(false)\n        .textAlign(TextAlign.Center)\n    }\n    .width(\"100%\")\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(843374)/* ["default"] */.A) + "",
        width: "404",
        height: "144"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例17文本垂直对齐",
      children: "示例17（文本垂直对齐）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#textverticalalign20",
        children: "textVerticalAlign"
      }), "属性展示了文本如何设置文本垂直对齐效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TextExample14 {\n  build() {\n    Column({ space: 10 }) {\n      Text() {\n        Span(\"Hello\")\n          .fontSize(50)\n        // $r('app.media.startIcon')需要替换为开发者所需的图像资源文件。\n        ImageSpan($r('app.media.startIcon'))\n          .width(30).height(30)\n          .verticalAlign(ImageSpanAlignment.FOLLOW_PARAGRAPH)// 从API version 20开始，支持ImageSpanAlignment.FOLLOW_PARAGRAPH\n        Span(\"World\")\n      }\n      .textVerticalAlign(TextVerticalAlign.CENTER)\n      .borderWidth(1)\n    }\n    .alignItems(HorizontalAlign.Center)\n    .width(\"100%\")\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(599230)/* ["default"] */.A) + "",
        width: "315",
        height: "110"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例18文本翻牌动效",
      children: "示例18（文本翻牌动效）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#contenttransition20",
        children: "contentTransition"
      }), "属性展示了数字翻牌效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TextNumberTransition {\n  @State number: number = 98;\n  @State numberTransition: NumericTextTransition =\n    new NumericTextTransition({ flipDirection: FlipDirection.DOWN, enableBlur: false });\n\n  build() {\n    Column() {\n      Text(this.number + \"\")\n        .borderWidth(1)\n        .fontSize(40)\n        .contentTransition(this.numberTransition)\n      Button(\"change number\")\n        .onClick(() => {\n          this.number++;\n        })\n        .margin(10)\n    }\n    .justifyContent(FlexAlign.Center)\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(60742)/* ["default"] */.A) + "",
        width: "228",
        height: "134"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例19文本内容区垂直对齐",
      children: "示例19（文本内容区垂直对齐）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 21开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#textcontentalign21",
        children: "textContentAlign"
      }), "属性展示了当文本内容区高度大于组件高度时文本内容区的垂直对齐。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct TextContentAlignExample {\n\n  build() {\n    Column() {\n      Row() {\n        Text('这是一段展示文字')\n          .fontSize(30)\n          .backgroundColor(Color.Gray)\n          .width('80%')\n          .height(20)\n          .textContentAlign(TextContentAlign.CENTER)\n      }.height('60%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(796946)/* ["default"] */.A) + "",
        width: "573",
        height: "143"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例20倍数行高和最大最小行高",
      children: "示例20（倍数行高和最大最小行高）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 22开始，该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#lineheightmultiple22",
        children: "lineHeightMultiple"
      }), "属性展示了使用倍数模式设置行高，同时通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#minlineheight22",
        children: "minLineHeight"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#maxlineheight22",
        children: "maxLineHeight"
      }), "来设置最小和最大行高值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { LengthUnit } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'hello';\n\n  build() {\n    Scroll() {\n      Column() {\n        Row() {\n          Text(this.message)\n            .lineHeight(176)\n            .backgroundColor(0xffc0c0c0)\n            .fontSize(50)\n          Text(this.message)\n            .lineHeightMultiple(3)\n            .backgroundColor(0xffc0c0c0)\n            .fontSize(50)\n          Text(this.message)\n            .lineHeight(300)\n            .maxLineHeight({value:176,unit:LengthUnit.FP})\n            .backgroundColor(0xffc0c0c0)\n            .fontSize(50)\n          Text(this.message)\n            .lineHeight(10)\n            .minLineHeight({value:176,unit:LengthUnit.FP})\n            .backgroundColor(0xffc0c0c0)\n            .fontSize(50)\n        }\n      }\n    }.height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(5337)/* ["default"] */.A) + "",
        width: "720",
        height: "397"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例21文本设置显示最小行数",
      children: "示例21（文本设置显示最小行数）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 22开始，该示例使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#minlines22",
        children: "minLines"
      }), "属性设置文本显示的最小行数。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct TextExample1 {\n  @State message1: string = 'Hello world!';\n  @State message2: string = 'The minimum number of lines displayed for this text setting is 1';\n\n  build() {\n    Column() {\n      Text(this.message1)\n        .minLines(3)\n        .fontSize(20)\n        .margin(10)\n        .width('95%')\n        .border({ width: 1 })\n      Text(this.message2)\n        .minLines(1)\n        .fontSize(20)\n        .margin(10)\n        .width('95%')\n        .border({ width: 1 })\n    }.height(100).width('90%').margin(10)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(853956)/* ["default"] */.A) + "",
        width: "720",
        height: "269"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例22设置文本选择区域并高亮显示",
      children: "示例22（设置文本选择区域并高亮显示）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 23开始，该示例使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#textcontroller11",
        children: "TextController"
      }), "中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#settextselection23",
        children: "setTextSelection"
      }), "设置文本选择区域并高亮显示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  controller: TextController = new TextController();\n  @State textStr: string = 'Hello World! 你好，世界！';\n\n  build() {\n    Scroll() {\n      Column() {\n        Text(this.textStr, { controller: this.controller })\n          .fontSize(25)\n          .borderWidth(1)\n          .copyOption(CopyOptions.LocalDevice)\n        Button(\"setTextSelection\")\n          .onClick(() => {\n            this.controller.setTextSelection(1, 6, { menuPolicy: MenuPolicy.HIDE })\n          })\n          .margin({ bottom: 20, top: 10 } as Margin)\n      }\n      .margin({ top: 100, left: 8, right: 8 } as Margin)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(573518)/* ["default"] */.A) + "",
        width: "266",
        height: "98"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例23设置行首标点压缩",
      children: "示例23（设置行首标点压缩）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#compressleadingpunctuation23",
        children: "compressLeadingPunctuation"
      }), "接口设置行首标点压缩，左侧有间距的标点符号位于行首时，标点会直接压缩间距至左侧边界。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，支持compressLeadingPunctuation接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column(){\n      Text(\"\\u300C行首标点压缩打开\")\n        .compressLeadingPunctuation(true)\n        .margin(5)\n        .border({ width: 1 })\n        .fontSize(30)\n        .width(\"90%\")\n      Text(\"\\u300C行首标点压缩关闭\")\n        .compressLeadingPunctuation(false)\n        .border({ width: 1 })\n        .fontSize(30)\n        .width(\"90%\")\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(816924)/* ["default"] */.A) + "",
        width: "379",
        height: "85"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例24设置自适应间距",
      children: "示例24（设置自适应间距）"
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
        children: "// xxx.ets\n\nconst UYGHUR_TEXT: string = 'ياخشىمۇسەنياخشىمۇسەنياخشىمۇسەنياخشىمۇسەنياخشىمۇسەنياخشىمۇسەنياخشىمۇسەن';\n@Entry\n@Component\nstruct Index {\n  @State include: boolean | null | undefined = false;\n  @State fallback: boolean | null | undefined = false;\n  @State displayText: string = UYGHUR_TEXT;\n\n  build() {\n    Column() {\n      Text(this.displayText)\n        .includeFontPadding(this.include)\n        .fallbackLineSpacing(this.fallback)\n        .lineHeight(5)\n        .width('100%')\n        .height(100)\n        .backgroundColor('#eee')\n        .borderWidth(1)\n        .borderColor('#dddddd')\n\n      Scroll() {\n        Column() {\n          // --- IncludeFontPadding相关按钮 ---\n          Button('设置includePadding: ' + this.include)\n            .onClick(() => {\n              this.include = this.include === false ? true : false;\n            })\n            .margin({ bottom: 10 })\n\n          // --- FallbackLineSpacing相关按钮 ---\n          Button('设置fallbackLineSpacing: ' + this.fallback)\n            .onClick(() => {\n              this.fallback = this.fallback === false ? true : false;\n            })\n            .margin({ bottom: 10 })\n\n        }\n        .width('100%')\n        .padding(5)\n      }\n      .height(250)\n      .backgroundColor('transparent')\n      .scrollBarWidth(2)\n      .scrollBarColor('#888')\n\n    }\n    .width('100%')\n    .height('100%')\n    .padding(20)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(450830)/* ["default"] */.A) + "",
        width: "489",
        height: "317"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例25设置文本拖拽时的背板样式",
      children: "示例25（设置文本拖拽时的背板样式）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#selecteddragpreviewstyle23",
        children: "selectedDragPreviewStyle"
      }), "接口设置文本拖拽时的背板样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，新增selectedDragPreviewStyle接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct TextTest {\n  build() {\n    Column() {\n      Text('This is drag text')\n        .copyOption(CopyOptions.InApp)\n        .width(200)\n        .height(100)\n        .margin(150)\n        .draggable(true)\n        .selectedDragPreviewStyle({color: 'rgba(227, 248, 249, 1)'})\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(721375)/* ["default"] */.A) + "",
        width: "386",
        height: "217"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例26设置文本排版方向",
      children: "示例26（设置文本排版方向）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#textdirection23",
        children: "textDirection"
      }), "接口设置文本排版方向。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，新增textDirection接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct TextExample {\n  @State text: string = 'Text文本排版方向示例';\n\n  build() {\n    Column({ space: 3 }) {\n      Text('Text文本排版方向DEFAULT')\n        .fontSize(12).width('90%').margin(5)\n      Text(this.text)\n        .width('95%')\n        .borderWidth(1)\n      Text('Text文本排版方向RTL')\n        .fontSize(12).width('90%').margin(5)\n      Text(this.text)\n        .width('95%')\n        .borderWidth(1)\n        .textDirection(TextDirection.RTL)\n      Text('Text文本排版方向RTL，文本水平方向对齐方式LEFT')\n        .fontSize(12).width('90%').margin(5)\n      Text(this.text)\n        .width('95%')\n        .borderWidth(1)\n        .textDirection(TextDirection.RTL)\n        .textAlign(TextAlign.LEFT)\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(894785)/* ["default"] */.A) + "",
        width: "533",
        height: "231"
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
698450(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479737-c054c423dc87119285d30c6c0516bcd4.png");

},
95024(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439783-ffa0e0f4da9d38b0127be5f53cd69078.png");

},
24434(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959736-8533ade9e873fdda460743ad39379245.png");

},
858731(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479739-29fb9357b0dd68d245af1ef0c4768fbc.gif");

},
816924(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,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");

},
898295(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
89953(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
393543(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959734-2ebb8d37f9687c362c6b30b588545584.gif");

},
684475(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
485364(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959740-b8175c3f62dd85af7d84fa2bbfb40dfc.png");

},
912817(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
894785(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959746-04f392cf4d28cdc2bbe6ccec49eb9be5.png");

},
511799(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
60742(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959742-c9cd31bb28352cc0a2e7016c4b2ceae1.gif");

},
721375(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439791-466f9cecfbc5f8d90dbdbf3dda7a02ea.png");

},
105805(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
401890(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
573518(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,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");

},
853956(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439789-529b00835f427a98e8aa57b5cc66a19c.png");

},
273378(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
874966(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
703992(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959738-3d6123671b7c8045fd951c686ab2e6a1.gif");

},
460890(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
538932(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
210898(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800090-57575aa69b340bcba76d74a0f38f2e22.gif");

},
422802(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479735-2fb9170dec52d4fd9726299884ddadc1.gif");

},
450830(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800096-8eaa413f862eeedf53bb1d6691d7b96f.gif");

},
843374(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800092-7b9ba7727662c4b5d12803dd9af54af7.png");

},
185336(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439781-41ec5dd0988e1d784e441dee97ad67f3.gif");

},
564201(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
828558(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
5337(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800094-f13086fc6974b3206eb0bad28e12c1d3.png");

},
650141(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
796946(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCACPAj0DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9U6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoooo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AOIr9J9o9KNo9KAPzY/4VP42/wChO8Qf+Cu4/wDiKP8AhU/jb/oTvEH/AIK7j/4iv0n2j0o2j0oA/Nj/AIVP42/6E7xB/wCCu4/+Io/4VP42/wChO8Qf+Cu4/wDiK/SfaPSjaPSgD82P+FT+Nv8AoTvEH/gruP8A4ij/AIVP42/6E7xB/wCCu4/+Ir9J9o9KNo9KAPzY/wCFT+Nv+hO8Qf8AgruP/iKP+FT+Nv8AoTvEH/gruP8A4iv0n2j0o2j0oA/Nj/hU/jb/AKE7xB/4K7j/AOIo/wCFT+Nv+hO8Qf8AgruP/iK/SfaPSjaPSgD82P8AhU/jb/oTvEH/AIK7j/4ij/hU/jb/AKE7xB/4K7j/AOIr9J9o9KNo9KAPzY/4VP42/wChO8Qf+Cu4/wDiKP8AhU/jb/oTvEH/AIK7j/4iv0n2j0o2j0oA/Nj/AIVP42/6E7xB/wCCu4/+Io/4VP42/wChO8Qf+Cu4/wDiK/SfaPSjaPSgD82P+FT+Nv8AoTvEH/gruP8A4ij/AIVP42/6E7xB/wCCu4/+Ir9J9o9KNo9KAPzY/wCFT+Nv+hO8Qf8AgruP/iKP+FT+Nv8AoTvEH/gruP8A4iv0n2j0o2j0oAWiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/2Q==");

},
329920(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,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");

},
708044(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
535274(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479741-94456e9dbbc3577351f85902d18c2747.png");

},
228769(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
655565(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800088-579ebdc6497b7b847237c45b6a676f9b.gif");

},
973041(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800086-53e2e5fff7d608fa31583fb699f2fb29.gif");

},
470594(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439779-7f2172a4d1d67ef33fb6e4f761222333.gif");

},
836260(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
437020(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
830986(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
599230(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439787-cb3eb3803307b8ac7968af58f9e7336e.png");

},
183083(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800084-24912a02fff2fd65b319a6029016b495.png");

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