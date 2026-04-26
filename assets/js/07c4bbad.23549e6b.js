"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["212915"], {
962265(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_themes_ts_container_with_theme_ts_container_with_theme_md_07c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-themes-ts-container-with-theme-ts-container-with-theme-md-07c.json
var site_docs_ref_arkui_api_arkui_declarative_comp_themes_ts_container_with_theme_ts_container_with_theme_md_07c_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/themes/ts-container-with-theme/ts-container-with-theme","title":"WithTheme","description":"WithTheme组件用于设置应用局部页面自定义主题风格，可设置子组件深浅色模式和自定义配色。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/themes/ts-container-with-theme/ts-container-with-theme.md","sourceDirName":"arkui-api/arkui-declarative-comp/themes/ts-container-with-theme","slug":"/arkui-api/arkui-declarative-comp/themes/ts-container-with-theme/ts-container-with-theme","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/themes/ts-container-with-theme/ts-container-with-theme","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"WithTheme","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-with-theme","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-container-with-theme"},"sidebar":"ref","previous":{"title":"SaveButton","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/arkui-security/ts-security-components-savebutton/ts-security-components-savebutton"},"next":{"title":"AtomicServiceNavigation","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/atomic-services/ohos-atomicservice-atomicservicenavigation/ohos-atomicservice-atomicservicenavigation"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/themes/ts-container-with-theme/ts-container-with-theme.md


const frontMatter = {
	title: 'WithTheme',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-with-theme',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-container-with-theme'
};
const contentTitle = 'WithTheme';

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
  "value": "事件",
  "id": "事件",
  "level": 2
}, {
  "value": "WithThemeOptions",
  "id": "withthemeoptions",
  "level": 2
}, {
  "value": "CustomTheme",
  "id": "customtheme",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（指定局部深浅色模式）",
  "id": "示例1指定局部深浅色模式",
  "level": 3
}, {
  "value": "示例2（自定义WithTheme作用域内组件缺省配色）",
  "id": "示例2自定义withtheme作用域内组件缺省配色",
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
        id: "withtheme",
        children: "WithTheme"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WithTheme组件用于设置应用局部页面自定义主题风格，可设置子组件深浅色模式和自定义配色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(281391)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该组件从API version 12开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["WithTheme支持的系统组件如下：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput",
        children: "TextInput"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-search/ts-basic-components-search",
        children: "Search"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button",
        children: "Button"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-container-badge/ts-container-badge",
        children: "Badge"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-swiper/ts-container-swiper",
        children: "Swiper"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-text/ts-basic-components-text",
        children: "Text"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-select/ts-basic-components-select",
        children: "Select"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/menus/ts-basic-components-menu/ts-basic-components-menu",
        children: "Menu"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-timepicker/ts-basic-components-timepicker",
        children: "TimePicker"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-datepicker/ts-basic-components-datepicker",
        children: "DatePicker"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-textpicker/ts-basic-components-textpicker",
        children: "TextPicker"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkbox/ts-basic-components-checkbox",
        children: "Checkbox"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkboxgroup/ts-basic-components-checkboxgroup",
        children: "CheckboxGroup"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-radio/ts-basic-components-radio",
        children: "Radio"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-slider/ts-basic-components-slider",
        children: "Slider"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-progress/ts-basic-components-progress",
        children: "Progress"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-qrcode/ts-basic-components-qrcode",
        children: "QRCode"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-toggle/ts-basic-components-toggle",
        children: "Toggle"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-patternlock/ts-basic-components-patternlock",
        children: "PatternLock"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/blank-and-divider/ts-basic-components-divider/ts-basic-components-divider",
        children: "Divider"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["WithTheme相关使用指导请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-theme/theme_skinning",
        children: "设置应用内主题换肤"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件",
      children: "子组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持单个子组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口",
      children: "接口"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WithTheme(options: WithThemeOptions)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置应用局部页面自定义主题风格。"
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
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#withthemeoptions",
              children: "WithThemeOptions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置作用域内组件配色。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "属性",
      children: "属性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-attributes",
        children: "通用属性"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "事件",
      children: "事件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-component-general-events",
        children: "通用事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "withthemeoptions",
      children: "WithThemeOptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置WithTheme作用域内组件缺省样式及深浅色模式。"
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
            children: "theme"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "#customtheme",
              children: "CustomTheme"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用于自定义WithTheme作用域内组件缺省配色。  默认值：undefined，缺省样式跟随系统", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-theme/theme_skinning#%E7%B3%BB%E7%BB%9F%E7%BC%BA%E7%9C%81token%E8%89%B2%E5%80%BC",
              children: "token默认样式"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "colorMode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-foreground-blur-style/ts-universal-attributes-foreground-blur-style#themecolormode%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
              children: "ThemeColorMode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于指定WithTheme作用域内组件配色深浅色模式。  默认值：ThemeColorMode.SYSTEM"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "customtheme",
      children: "CustomTheme"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type CustomTheme = CustomTheme"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义配色。"
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
              href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-theme/js-apis-arkui-theme#customtheme",
              children: "CustomTheme"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义WithTheme作用域内组件缺省配色。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置局部深浅色时，需要添加dark.json资源文件，深浅色模式才会生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(492901)/* ["default"] */.A) + "",
        width: "250",
        height: "124"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dark.json数据示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  {\n    \"color\": [\n      {\n        \"name\": \"start_window_background\",\n        \"value\": \"#000000\"\n      }\n    ]\n  }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1指定局部深浅色模式",
      children: "示例1（指定局部深浅色模式）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 指定局部深浅色模式\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column() {\n    // 系统默认\n      Column() {\n        Text('无WithTheme')\n          .fontSize(40)\n          .fontWeight(FontWeight.Bold)\n      }\n      .justifyContent(FlexAlign.Center)\n      .width('100%')\n      .height('33%')\n      .backgroundColor($r('app.color.start_window_background'))\n      // 设置组件为深色模式\n      WithTheme({ colorMode: ThemeColorMode.DARK }) {\n        Column() {\n          Text('WithTheme')\n            .fontSize(40)\n            .fontWeight(FontWeight.Bold)\n          Text('DARK')\n            .fontSize(40)\n            .fontWeight(FontWeight.Bold)\n        }\n        .justifyContent(FlexAlign.Center)\n        .width('100%')\n        .height('33%')\n        .backgroundColor($r('sys.color.background_primary'))\n      }\n      // 设置组件为浅色模式\n      WithTheme({ colorMode: ThemeColorMode.LIGHT }) {\n        Column() {\n          Text('WithTheme')\n            .fontSize(40)\n            .fontWeight(FontWeight.Bold)\n          Text('LIGHT')\n            .fontSize(40)\n            .fontWeight(FontWeight.Bold)\n        }\n        .justifyContent(FlexAlign.Center)\n        .width('100%')\n        .height('33%')\n        .backgroundColor($r('sys.color.background_primary'))\n      }\n    }\n    .height('100%')\n    .expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP, SafeAreaEdge.END, SafeAreaEdge.BOTTOM, SafeAreaEdge.START])\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(485789)/* ["default"] */.A) + "",
        width: "322",
        height: "621"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2自定义withtheme作用域内组件缺省配色",
      children: "示例2（自定义WithTheme作用域内组件缺省配色）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 自定义WithTheme作用域内组件缺省配色\nimport { CustomTheme, CustomColors } from '@kit.ArkUI';\n\nclass GreenColors implements CustomColors {\n  fontPrimary = '#ff049404';\n  fontEmphasize = '#FF00541F';\n  fontOnPrimary = '#FFFFFFFF';\n  compBackgroundTertiary = '#1111FF11';\n  backgroundEmphasize = '#FF00541F';\n  compEmphasizeSecondary = '#3322FF22';\n}\n\nclass RedColors implements CustomColors {\n  fontPrimary = '#fff32b3c';\n  fontEmphasize = '#FFD53032';\n  fontOnPrimary = '#FFFFFFFF';\n  compBackgroundTertiary = '#44FF2222';\n  backgroundEmphasize = '#FFD00000';\n  compEmphasizeSecondary = '#33FF1111';\n}\n\nclass PageCustomTheme implements CustomTheme {\n  colors?: CustomColors\n\n  constructor(colors: CustomColors) {\n    this.colors = colors\n  }\n}\n\n@Entry\n@Component\nstruct IndexPage {\n  static readonly themeCount = 3;\n  themeNames: string[] = ['System', 'Custom (green)', 'Custom (red)'];\n  themeArray: (CustomTheme | undefined)[] = [\n    undefined, // System\n    new PageCustomTheme(new GreenColors()),\n    new PageCustomTheme(new RedColors())\n  ]\n  @State themeIndex: number = 0;\n\n  build() {\n    Column() {\n      Column({ space: '8vp' }) {\n        Text(`未使用WithTheme`)\n        // 点击按钮切换局部换肤\n        Button(`切换theme配色：${this.themeNames[this.themeIndex]}`)\n          .onClick(() => {\n            this.themeIndex = (this.themeIndex + 1) % IndexPage.themeCount;\n          })\n\n        // 系统默认按钮配色\n        Button('Button.style(NORMAL) with System Theme')\n          .buttonStyle(ButtonStyleMode.NORMAL)\n        Button('Button.style(EMP..ED) with System Theme')\n          .buttonStyle(ButtonStyleMode.EMPHASIZED)\n        Button('Button.style(TEXTUAL) with System Theme')\n          .buttonStyle(ButtonStyleMode.TEXTUAL)\n      }\n      .margin({\n        top: '50vp'\n      })\n\n      WithTheme({ theme: this.themeArray[this.themeIndex] }) {\n        // WithTheme作用域\n        Column({ space: '8vp' }) {\n          Text(`使用WithTheme`)\n          Button('Button.style(NORMAL) with Custom Theme')\n            .buttonStyle(ButtonStyleMode.NORMAL)\n          Button('Button.style(EMP..ED) with Custom Theme')\n            .buttonStyle(ButtonStyleMode.EMPHASIZED)\n          Button('Button.style(TEXTUAL) with Custom Theme')\n            .buttonStyle(ButtonStyleMode.TEXTUAL)\n        }\n        .width('100%')\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(884418)/* ["default"] */.A) + "",
        width: "294",
        height: "334"
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
281391(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
884418(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552960078-9131349e89b3d71edb1fbae2996e9d47.gif");

},
485789(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583440123-974bcc49ecf81e52020189466dc9953d.png");

},
492901(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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