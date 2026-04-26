"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["893654"], {
485539(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_text_arkts_common_components_symbol_arkts_common_components_symbol_md_116_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-text-arkts-common-components-symbol-arkts-common-components-symbol-md-116.json
var site_docs_arkui_arkts_ui_development_arkts_use_text_arkts_common_components_symbol_arkts_common_components_symbol_md_116_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-text/arkts-common-components-symbol/arkts-common-components-symbol","title":"图标小符号 (SymbolGlyph/SymbolSpan)","description":"SymbolGlyph是图标小符号组件，便于使用精美的图标，如渲染多色图标和使用动效图标。SymbolSpan作为Text组件的子组件，可在文本中穿插显示图标小符号。具体用法请参考SymbolGlyph和SymbolSpan组件的API文档。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-symbol/arkts-common-components-symbol.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-text/arkts-common-components-symbol","slug":"/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-symbol/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-symbol/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"图标小符号 (SymbolGlyph/SymbolSpan)","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-symbol","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"富文本编辑（RichEditor）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-richeditor/"},"next":{"title":"属性字符串（StyledString/MutableStyledString）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-text/arkts-styled-string/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-symbol/arkts-common-components-symbol.md


const frontMatter = {
	title: '图标小符号 (SymbolGlyph/SymbolSpan)',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-components-symbol',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '图标小符号 (SymbolGlyph/SymbolSpan)';

const assets = {

};



const toc = [{
  "value": "创建图标",
  "id": "创建图标",
  "level": 2
}, {
  "value": "添加到文本中",
  "id": "添加到文本中",
  "level": 2
}, {
  "value": "自定义图标动效",
  "id": "自定义图标动效",
  "level": 2
}, {
  "value": "设置阴影和渐变色",
  "id": "设置阴影和渐变色",
  "level": 2
}, {
  "value": "添加事件",
  "id": "添加事件",
  "level": 2
}, {
  "value": "场景示例",
  "id": "场景示例",
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
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "图标小符号-symbolglyphsymbolspan",
        children: "图标小符号 (SymbolGlyph/SymbolSpan)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SymbolGlyph是图标小符号组件，便于使用精美的图标，如渲染多色图标和使用动效图标。SymbolSpan作为Text组件的子组件，可在文本中穿插显示图标小符号。具体用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolglyph/ts-basic-components-symbolglyph",
        children: "SymbolGlyph"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolspan/ts-basic-components-symbolspan",
        children: "SymbolSpan"
      }), "组件的API文档。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建图标",
      children: "创建图标"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SymbolGlyph通过$r引用Resource资源来创建，目前仅支持系统预置的Symbol资源名。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["相关资源可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/design-guides/system-icons-0000001929854962",
        children: "系统图标"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SymbolGlyph($r('sys.symbol.ohos_folder_badge_plus'))\n  .fontSize(96)\n  .renderingStrategy(SymbolRenderingStrategy.SINGLE)\n  .fontColor([Color.Black, Color.Green, Color.White])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(607124)/* ["default"] */.A) + "",
        width: "160",
        height: "138"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加到文本中",
      children: "添加到文本中"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolspan/ts-basic-components-symbolspan",
        children: "SymbolSpan"
      }), "可作为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
        children: "Text"
      }), "的子组件用于显示图标小符号。可以在一个Text组件内添加多个SymbolSpan，从而展示一串连续的图标。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建SymbolSpan。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "SymbolSpan组件需嵌入在Text组件中才能显示，单独使用不会呈现任何内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Text() {\n  SymbolSpan($r('sys.symbol.ohos_trash'))\n    .fontWeight(FontWeight.Normal)\n    .fontSize(96)\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(568007)/* ["default"] */.A) + "",
            width: "124",
            height: "130"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolspan/ts-basic-components-symbolspan#fontsize",
            children: "fontSize"
          }), "属性设置SymbolSpan的大小。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Row() {\n  Column() {\n    Text('48')\n    Text() {\n      SymbolSpan($r('sys.symbol.ohos_folder_badge_plus'))\n        .fontSize(48)\n        .renderingStrategy(SymbolRenderingStrategy.SINGLE)\n        .fontColor([Color.Black, Color.Green, Color.White])\n    }\n  }\n\n  Column() {\n    Text('72')\n    Text() {\n      SymbolSpan($r('sys.symbol.ohos_folder_badge_plus'))\n        .fontSize(72)\n        .renderingStrategy(SymbolRenderingStrategy.SINGLE)\n        .fontColor([Color.Black, Color.Green, Color.White])\n    }\n  }\n\n  Column() {\n    Text('96')\n    Text() {\n      SymbolSpan($r('sys.symbol.ohos_folder_badge_plus'))\n        .fontSize(96)\n        .renderingStrategy(SymbolRenderingStrategy.SINGLE)\n        .fontColor([Color.Black, Color.Green, Color.White])\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(526657)/* ["default"] */.A) + "",
            width: "280",
            height: "126"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolspan/ts-basic-components-symbolspan#fontweight",
            children: "fontWeight"
          }), "属性设置SymbolSpan组件的粗细。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Row() {\n  Column() {\n    Text('Light')\n    Text() {\n      SymbolSpan($r('sys.symbol.ohos_trash'))\n        .fontWeight(FontWeight.Lighter)\n        .fontSize(96)\n    }\n  }\n\n  Column() {\n    Text('Normal')\n    Text() {\n      SymbolSpan($r('sys.symbol.ohos_trash'))\n        .fontWeight(FontWeight.Normal)\n        .fontSize(96)\n    }\n  }\n\n  Column() {\n    Text('Bold')\n    Text() {\n      SymbolSpan($r('sys.symbol.ohos_trash'))\n        .fontWeight(FontWeight.Bold)\n        .fontSize(96)\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(654568)/* ["default"] */.A) + "",
            width: "280",
            height: "116"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolspan/ts-basic-components-symbolspan#fontcolor",
            children: "fontColor"
          }), "属性设置SymbolSpan的颜色。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Row() {\n  Column() {\n    Text('Black')\n    Text() {\n      SymbolSpan($r('sys.symbol.ohos_folder_badge_plus'))\n        .fontSize(96)\n        .fontColor([Color.Black])\n    }\n  }\n\n  Column() {\n    Text('Green')\n    Text() {\n      SymbolSpan($r('sys.symbol.ohos_folder_badge_plus'))\n        .fontSize(96)\n        .fontColor([Color.Green])\n    }\n  }\n\n  Column() {\n    Text('Pink')\n    Text() {\n      SymbolSpan($r('sys.symbol.ohos_folder_badge_plus'))\n        .fontSize(96)\n        .fontColor([Color.Pink])\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(991006)/* ["default"] */.A) + "",
            width: "292",
            height: "112"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolspan/ts-basic-components-symbolspan#renderingstrategy",
            children: "renderingStrategy"
          }), "属性设置SymbolSpan的渲染策略。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Row() {\n  Column() {\n    // 请将$r('app.string.single_color')替换为实际资源文件，在本示例中该资源文件的value值为\"单色\"\n    Text($r('app.string.single_color'));\n    Text() {\n      SymbolSpan($r('sys.symbol.ohos_folder_badge_plus'))\n        .fontSize(96)\n        .renderingStrategy(SymbolRenderingStrategy.SINGLE)\n        .fontColor([Color.Black, Color.Green, Color.White])\n    }\n  }\n\n  Column() {\n    // 请将$r('app.string.multi_color')替换为实际资源文件，在本示例中该资源文件的value值为\"多色\"\n    Text($r('app.string.multi_color'));\n    Text() {\n      SymbolSpan($r('sys.symbol.ohos_folder_badge_plus'))\n        .fontSize(96)\n        .renderingStrategy(SymbolRenderingStrategy.MULTIPLE_COLOR)\n        .fontColor([Color.Black, Color.Green, Color.White])\n    }\n  }\n\n  Column() {\n    // 请将$r('app.string.hierarchical')替换为实际资源文件，在本示例中该资源文件的value值为\"分层\"\n    Text($r('app.string.hierarchical'));\n    Text() {\n      SymbolSpan($r('sys.symbol.ohos_folder_badge_plus'))\n        .fontSize(96)\n        .renderingStrategy(SymbolRenderingStrategy.MULTIPLE_OPACITY)\n        .fontColor([Color.Black, Color.Green, Color.White])\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(510378)/* ["default"] */.A) + "",
            width: "294",
            height: "118"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolspan/ts-basic-components-symbolspan#effectstrategy",
            children: "effectStrategy"
          }), "属性设置SymbolSpan的动效策略。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Row() {\n  Column() {\n    // 请将$r('app.string.no_action')替换为实际资源文件，在本示例中该资源文件的value值为\"无动效\"\n    Text($r('app.string.no_action'));\n    Text() {\n      SymbolSpan($r('sys.symbol.ohos_wifi'))\n        .fontSize(96)\n        .effectStrategy(SymbolEffectStrategy.NONE)\n    }\n  }\n\n  Column() {\n    // 请将$r('app.string.overall_scaling_animation_effect')替换为实际资源文件，在本示例中该资源文件的value值为\"整体缩放动效\"\n    Text($r('app.string.overall_scaling_animation_effect'));\n    Text() {\n      SymbolSpan($r('sys.symbol.ohos_wifi'))\n        .fontSize(96)\n        .effectStrategy(SymbolEffectStrategy.SCALE)\n    }\n  }\n\n  Column() {\n    // 请将$r('app.string.hierarchical_animation')替换为实际资源文件，在本示例中该资源文件的value值为\"层级动效\"\n    Text($r('app.string.hierarchical_animation'));\n    Text() {\n      SymbolSpan($r('sys.symbol.ohos_wifi'))\n        .fontSize(96)\n        .effectStrategy(SymbolEffectStrategy.HIERARCHICAL)\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(774242)/* ["default"] */.A) + "",
            width: "317",
            height: "138"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "SymbolSpan不支持通用事件。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义图标动效",
      children: "自定义图标动效"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相较于effectStrategy属性在启动时即触发动效，可以通过以下两种方式来控制动效的播放状态，以及选择更多样化的动效策略。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["关于effectStrategy属性与symbolEffect属性的多种动态属性使用及生效原则，详情请参阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolglyph/ts-basic-components-symbolglyph#symboleffect12-1",
        children: "SymbolGlyph.symbolEffect"
      }), "属性的说明。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过设置SymbolEffect属性，可以同时配置SymbolGlyph的动效策略和播放状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@State isActive: boolean = true;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Column() {\n  // 请将$r('app.string.variable_color_animation')替换为实际资源文件，在本示例中该资源文件的value值为\"可变颜色动效\"\n  Text($r('app.string.variable_color_animation'));\n  SymbolGlyph($r('sys.symbol.ohos_wifi'))\n    .fontSize(96)\n    .symbolEffect(new HierarchicalSymbolEffect(EffectFillStyle.ITERATIVE), this.isActive)\n  // 请将$r('app.string.off')替换为实际资源文件，在本示例中该资源文件的value值为\"关闭\"\n  // 请将$r('app.string.on')替换为实际资源文件，在本示例中该资源文件的value值为\"播放\"\n  Button(this.isActive ? $r('app.string.off') : $r('app.string.on')).onClick(() => {\n    this.isActive = !this.isActive;\n  })\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(776342)/* ["default"] */.A) + "",
            width: "109",
            height: "150"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过设置SymbolEffect属性，可以同时指定SymbolGlyph的动画效果策略及其播放触发条件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@State triggerValueReplace: number = 0;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Column() {\n  // 请将$r('app.string.bounce_animation')替换为实际资源文件，在本示例中该资源文件的value值为\"弹跳动效\"\n  Text($r('app.string.bounce_animation'));\n  SymbolGlyph($r('sys.symbol.ellipsis_message_1'))\n    .fontSize(96)\n    .fontColor([Color.Gray])\n    .symbolEffect(new BounceSymbolEffect(EffectScope.WHOLE, EffectDirection.UP),\n                  this.triggerValueReplace)\n  Button('trigger').onClick(() => {\n    this.triggerValueReplace = this.triggerValueReplace + 1;\n  })\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(230151)/* ["default"] */.A) + "",
            width: "159",
            height: "168"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 20开始，支持通过设置SymbolEffect属性为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolglyph/ts-basic-components-symbolglyph#replacesymboleffect12",
            children: "ReplaceSymbolEffect"
          }), "，设置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolglyph/ts-basic-components-symbolglyph#replaceeffecttype20%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
            children: "ReplaceEffectType"
          }), "为ReplaceEffectType.SLASH_OVERLAY，可以指定SymbolGlyph的禁用动画效果及其播放触发条件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@State triggerValueReplace: number = 0;\nreplaceFlag: boolean = true;\n@State renderMode: number = 1;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Column() {\n  // 请将$r('app.string.disable_animation')替换为实际资源文件，在本示例中该资源文件的value值为\"禁用动效\"\n  Text($r('app.string.disable_animation'));\n  SymbolGlyph(this.replaceFlag ? $r('sys.symbol.eye_slash') : $r('sys.symbol.eye'))\n    .fontSize(96)\n    .renderingStrategy(this.renderMode)\n    .symbolEffect(new ReplaceSymbolEffect(EffectScope.LAYER, ReplaceEffectType.SLASH_OVERLAY),\n                  this.triggerValueReplace)\n  Button('trigger').onClick(() => {\n    this.replaceFlag = !this.replaceFlag;\n    this.triggerValueReplace = this.triggerValueReplace + 1;\n  })\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(907061)/* ["default"] */.A) + "",
            width: "101",
            height: "151"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 20开始，支持通过设置SymbolEffect属性为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolglyph/ts-basic-components-symbolglyph#replacesymboleffect12",
            children: "ReplaceSymbolEffect"
          }), "，设置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolglyph/ts-basic-components-symbolglyph#replaceeffecttype20%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
            children: "ReplaceEffectType"
          }), "为ReplaceEffectType.CROSS_FADE，可以指定SymbolGlyph的快速替换动画效果及其播放触发条件。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@State triggerValueReplace: number = 0;\nreplaceFlag: boolean = true;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Column() {\n  // 请将$r('app.string.quick_replacement_animation')替换为实际资源文件，在本示例中该资源文件的value值为\"快速替换动效\"\n  Text($r('app.string.quick_replacement_animation'));\n  SymbolGlyph(this.replaceFlag ? $r('sys.symbol.checkmark_circle') : $r('sys.symbol.repeat_1'))\n    .fontSize(96)\n    .symbolEffect(new ReplaceSymbolEffect(EffectScope.WHOLE, ReplaceEffectType.CROSS_FADE),\n                  this.triggerValueReplace)\n  Button('trigger').onClick(() => {\n    this.replaceFlag = !this.replaceFlag;\n    this.triggerValueReplace = this.triggerValueReplace + 1;\n  })\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(705542)/* ["default"] */.A) + "",
            width: "106",
            height: "160"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置阴影和渐变色",
      children: "设置阴影和渐变色"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 20开始，支持通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolglyph/ts-basic-components-symbolglyph#symbolshadow20",
            children: "symbolShadow"
          }), "接口实现了symbolGlyph组件显示阴影效果。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@State isActive: boolean = true;\n\noptions: ShadowOptions = {\n  radius: 10.0,\n  color: Color.Blue,\n  offsetX: 10,\n  offsetY: 10,\n};\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Column() {\n  // 请将$r('app.string.shadow_ability')替换为实际资源文件，在本示例中该资源文件的value值为\"阴影能力\"\n  Text($r('app.string.shadow_ability'));\n  SymbolGlyph($r('sys.symbol.ohos_wifi'))\n    .fontSize(96)\n    .symbolEffect(new HierarchicalSymbolEffect(EffectFillStyle.ITERATIVE), !this.isActive)\n    .symbolShadow(this.options)\n  // 请将$r('app.string.off')替换为实际资源文件，在本示例中该资源文件的value值为\"关闭\"\n  // 请将$r('app.string.on')替换为实际资源文件，在本示例中该资源文件的value值为\"播放\"\n  Button(!this.isActive ? $r('app.string.off') : $r('app.string.on')).onClick(() => {\n    this.isActive = !this.isActive;\n  })\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(204855)/* ["default"] */.A) + "",
            width: "98",
            height: "140"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 20开始，支持通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolglyph/ts-basic-components-symbolglyph#shaderstyle20",
            children: "shaderStyle"
          }), "接口实现了symbolGlyph组件显示渐变色效果。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "radialGradientOptions: RadialGradientOptions = {\n  center: ['50%', '50%'],\n  radius: '20%',\n  colors: [[Color.Red, 0.0], [Color.Blue, 0.3], [Color.Green, 0.5]],\n  repeating: true,\n};\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Column() {\n  // 请将$r('app.string.radial_gradient')替换为实际资源文件，在本示例中该资源文件的value值为\"径向渐变\"\n  Text($r('app.string.radial_gradient'))\n    .fontSize(18)\n    .fontColor(0xCCCCCC)\n    .textAlign(TextAlign.Center)\n  SymbolGlyph($r('sys.symbol.ohos_folder_badge_plus'))\n    .fontSize(96)\n    .shaderStyle([new RadialGradientStyle(this.radialGradientOptions)])\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(229281)/* ["default"] */.A) + "",
            width: "119",
            height: "125"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加事件",
      children: "添加事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SymbolGlyph组件可以添加通用事件，例如绑定", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/interaction-events/ts-universal-events-click/ts-universal-events-click#onclick",
        children: "onClick"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-touch/ts-universal-events-touch#ontouch",
        children: "onTouch"
      }), "等事件来响应操作。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@State wifiColor: ResourceColor = Color.Black;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SymbolGlyph($r('sys.symbol.ohos_wifi'))\n  .fontSize(96)\n  .fontColor([this.wifiColor])\n  .onClick(() => {\n    this.wifiColor = Color.Gray;\n  })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(480672)/* ["default"] */.A) + "",
        width: "115",
        height: "87"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景示例",
      children: "场景示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例通过symbolEffect、fontSize、fontColor属性展示了播放列表的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// resourceGetString封装工具，从资源中获取字符串\nimport resourceGetString from '../../common/resource';\n\n@Entry\n@Component\nstruct SymbolMusicDemo {\n  @State triggerValueReplace: number = 0;\n  @State symbolSources: Resource[] =\n    [$r('sys.symbol.repeat'), $r('sys.symbol.repeat_1'), $r('sys.symbol.arrow_left_arrow_right')];\n  @State symbolSourcesIndex: number = 0;\n  @State symbolText: string[] = [\n    // 请将$r('app.string.play_in_order')替换为实际资源文件，在本示例中该资源文件的value值为\"顺序播放\"\n    this.getUIContext()\n      .getHostContext()!.resourceManager.getStringSync($r('app.string.play_in_order').id),\n    // 请将$r('app.string.play_in_single_repeat')替换为实际资源文件，在本示例中该资源文件的value值为\"单曲循环\"\n    this.getUIContext()\n      .getHostContext()!.resourceManager.getStringSync($r('app.string.play_in_single_repeat').id),\n    // 请将$r('app.string.shuffle_play')替换为实际资源文件，在本示例中该资源文件的value值为\"随机播放\"\n    this.getUIContext()\n      .getHostContext()!.resourceManager.getStringSync($r('app.string.shuffle_play').id),\n  ];\n  @State symbolTextIndex: number = 0;\n  @State fontColorValue: ResourceColor = Color.Grey;\n  @State fontColorValue1: ResourceColor = '#E8E8E8';\n\n  build() {\n    Column({ space: 10 }) {\n      Row() {\n        Text() {\n          // 请将$r('app.string.current_playlist')替换为实际资源文件，在本示例中该资源文件的value值为\"当前播放列表\"\n          Span(this.getUIContext()\n            .getHostContext()!.resourceManager.getStringSync($r('app.string.current_playlist').id))\n            .fontSize(20)\n            .fontWeight(FontWeight.Bolder)\n          Span('（101）')\n        }\n      }\n\n      Row() {\n        Row({ space: 5 }) {\n          SymbolGlyph(this.symbolSources[this.symbolSourcesIndex])\n            .symbolEffect(new ReplaceSymbolEffect(EffectScope.WHOLE), this.triggerValueReplace)\n            .fontSize(20)\n            .fontColor([this.fontColorValue])\n          Text(this.symbolText[this.symbolTextIndex])\n            .fontColor(this.fontColorValue)\n        }\n        .onClick(() => {\n          this.symbolTextIndex++;\n          this.symbolSourcesIndex++;\n          this.triggerValueReplace++;\n          if (this.symbolSourcesIndex > (this.symbolSources.length - 1)) {\n            this.symbolSourcesIndex = 0;\n            this.triggerValueReplace = 0;\n          }\n          if (this.symbolTextIndex > (this.symbolText.length - 1)) {\n            this.symbolTextIndex = 0;\n          }\n        })\n        .width('75%')\n\n        Row({ space: 5 }) {\n          Text() {\n            SymbolSpan($r('sys.symbol.arrow_down_circle_badge_vip_circle_filled'))\n              .fontColor([this.fontColorValue])\n              .fontSize(20)\n          }\n\n          Text() {\n            SymbolSpan($r('sys.symbol.heart_badge_plus'))\n              .fontColor([this.fontColorValue])\n              .fontSize(20)\n          }\n\n          Text() {\n            SymbolSpan($r('sys.symbol.ohos_trash'))\n              .fontColor([this.fontColorValue])\n              .fontSize(20)\n          }\n        }\n        .width('25%')\n      }\n\n      Divider().width(5).color(this.fontColorValue1).width('98%')\n      Row() {\n        Row() {\n          // 请将$r('app.string.song')替换为实际资源文件，在本示例中该资源文件的value值为\"歌曲一\"\n          Text($r('app.string.song'))\n        }.width('82%')\n\n        Row({ space: 5 }) {\n          SymbolGlyph($r('sys.symbol.play_arrow_triangle_2_circlepath'))\n            .fontColor([this.fontColorValue])\n            .fontSize(20)\n          SymbolGlyph($r('sys.symbol.trash'))\n            .fontColor([this.fontColorValue])\n            .fontSize(20)\n        }\n      }\n\n      Divider().width(5).color(this.fontColorValue1).width('98%')\n      Row() {\n        Row() {\n          // 请将$r('app.string.song_again')替换为实际资源文件，在本示例中该资源文件的value值为\"歌曲二\"\n          Text($r('app.string.song_again'))\n        }.width('82%')\n\n        Row({ space: 5 }) {\n          SymbolGlyph($r('sys.symbol.play_arrow_triangle_2_circlepath'))\n            .fontColor([this.fontColorValue])\n            .fontSize(20)\n          SymbolGlyph($r('sys.symbol.trash'))\n            .fontColor([this.fontColorValue])\n            .fontSize(20)\n        }\n      }\n\n      Divider().width(5).color(this.fontColorValue1).width('98%')\n      Row() {\n        Row() {\n          // 请将$r('app.string.again_song')替换为实际资源文件，在本示例中该资源文件的value值为\"歌曲三\"\n          Text($r('app.string.again_song'))\n        }.width('82%')\n\n        Row({ space: 5 }) {\n          SymbolGlyph($r('sys.symbol.play_arrow_triangle_2_circlepath'))\n            .fontColor([this.fontColorValue])\n            .fontSize(20)\n          SymbolGlyph($r('sys.symbol.trash'))\n            .fontColor([this.fontColorValue])\n            .fontSize(20)\n        }\n      }\n\n      Divider().width(5).color(this.fontColorValue1).width('98%')\n      Row() {\n        Row() {\n          // 请将$r('app.string.song_repeat')替换为实际资源文件，在本示例中该资源文件的value值为\"歌曲四\"\n          Text($r('app.string.song_repeat'))\n        }.width('82%')\n\n        Row({ space: 5 }) {\n          SymbolGlyph($r('sys.symbol.play_arrow_triangle_2_circlepath'))\n            .fontColor([this.fontColorValue])\n            .fontSize(20)\n          SymbolGlyph($r('sys.symbol.trash'))\n            .fontColor([this.fontColorValue])\n            .fontSize(20)\n        }\n      }\n\n      Divider().width(5).color(this.fontColorValue1).width('98%')\n      Row() {\n        Row() {\n          // 请将$r('app.string.repeat_song')替换为实际资源文件，在本示例中该资源文件的value值为\"歌曲五\"\n          Text($r('app.string.repeat_song'))\n        }.width('82%')\n\n        Row({ space: 5 }) {\n          SymbolGlyph($r('sys.symbol.play_arrow_triangle_2_circlepath'))\n            .fontColor([this.fontColorValue])\n            .fontSize(20)\n          SymbolGlyph($r('sys.symbol.trash'))\n            .fontColor([this.fontColorValue])\n            .fontSize(20)\n        }\n      }\n\n      Divider().width(5).color(this.fontColorValue1).width('98%')\n      Row() {\n        Row() {\n          // 请将$r('app.string.song_play')替换为实际资源文件，在本示例中该资源文件的value值为\"歌曲六\"\n          Text($r('app.string.song_play'))\n        }.width('82%')\n\n        Row({ space: 5 }) {\n          SymbolGlyph($r('sys.symbol.play_arrow_triangle_2_circlepath'))\n            .fontColor([this.fontColorValue])\n            .fontSize(20)\n          SymbolGlyph($r('sys.symbol.trash'))\n            .fontColor([this.fontColorValue])\n            .fontSize(20)\n        }\n      }\n\n      Divider().width(5).color(this.fontColorValue1).width('98%')\n      Row() {\n        Row() {\n          // 请将$r('app.string.play_song')替换为实际资源文件，在本示例中该资源文件的value值为\"歌曲七\"\n          Text($r('app.string.play_song'))\n        }.width('82%')\n\n        Row({ space: 5 }) {\n          SymbolGlyph($r('sys.symbol.play_arrow_triangle_2_circlepath'))\n            .fontColor([this.fontColorValue])\n            .fontSize(20)\n          SymbolGlyph($r('sys.symbol.trash'))\n            .fontColor([this.fontColorValue])\n            .fontSize(20)\n        }\n      }\n\n      Divider().width(5).color(this.fontColorValue1).width('98%')\n      Column() {\n        // 请将$r('app.string.off')替换为实际资源文件，在本示例中该资源文件的value值为\"关闭\"\n        Text($r('app.string.off'))\n      }\n      .alignItems(HorizontalAlign.Center)\n      .width('98%')\n    }\n    .alignItems(HorizontalAlign.Start)\n    .width('100%')\n    .height(400)\n    .padding({\n      left: 10,\n      top: 10\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(977917)/* ["default"] */.A) + "",
        width: "485",
        height: "523"
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
510378(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477837-cec248424efec2d6206b9504fc7e379c.png");

},
526657(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
204855(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437885-526a40681e896b8ce268f492a700d1d5.gif");

},
230151(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957838-c792738fce970218c4a5db1c08f49621.gif");

},
480672(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/gif;base64,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");

},
229281(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957840-7a4c4ca99c729f94c0adba4dc14bc8d2.jpg");

},
776342(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437883-dbe5fcf1811f77964d6955ceaf251b63.gif");

},
991006(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957836-8d16756bc55dde2667dbd242e8f9324f.png");

},
568007(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
654568(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437881-1dff7c26b526efc75c4b1e69b294474f.png");

},
977917(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798192-ee7fa40ce4faadd49692ef9cf95e7fa1.gif");

},
774242(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798188-380539fdbc562e18f60b362e7acb7e71.gif");

},
907061(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477839-cca290b40021a764ae10a407aa4ee2df.gif");

},
705542(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798190-bf8c1fdfc07554cee657911ba4431aff.gif");

},
607124(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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