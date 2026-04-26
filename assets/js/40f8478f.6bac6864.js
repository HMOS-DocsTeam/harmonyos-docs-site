"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["724721"], {
439140(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_theme_theme_skinning_theme_skinning_md_40f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-theme-theme-skinning-theme-skinning-md-40f.json
var site_docs_arkui_arkts_ui_development_arkts_theme_theme_skinning_theme_skinning_md_40f_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-theme/theme_skinning/theme_skinning","title":"设置应用内主题换肤","description":"概述","source":"@site/docs/arkui/arkts-ui-development/arkts-theme/theme_skinning/theme_skinning.md","sourceDirName":"arkui/arkts-ui-development/arkts-theme/theme_skinning","slug":"/arkui/arkts-ui-development/arkts-theme/theme_skinning/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-theme/theme_skinning/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"设置应用内主题换肤","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/theme_skinning","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用深浅色适配","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-theme/ui-dark-light-color-adaptation/"},"next":{"title":"使用UI上下文接口操作界面（UIContext）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-global-interface/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-theme/theme_skinning/theme_skinning.md


const frontMatter = {
	title: '设置应用内主题换肤',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/theme_skinning',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '设置应用内主题换肤';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "自定义主题色",
  "id": "自定义主题色",
  "level": 2
}, {
  "value": "设置应用内组件自定义主题色",
  "id": "设置应用内组件自定义主题色",
  "level": 2
}, {
  "value": "设置应用局部页面自定义主题风格",
  "id": "设置应用局部页面自定义主题风格",
  "level": 2
}, {
  "value": "设置应用页面局部深浅色",
  "id": "设置应用页面局部深浅色",
  "level": 2
}, {
  "value": "系统缺省token色值",
  "id": "系统缺省token色值",
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
        id: "设置应用内主题换肤",
        children: "设置应用内主题换肤"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于采用ArkTS开发的应用，提供了应用内组件的主题换肤功能，支持局部的深浅色切换及动态换肤。目前，该功能只支持设置应用内主题换肤，暂不支持在UIAbility或窗口层面进行主题设置，同时也不支持C-API和Node-API。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义主题色",
      children: "自定义主题色"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当应用需要使用换肤功能时，应自定义主题颜色。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-theme/js-apis-arkui-theme#customtheme",
        children: "CustomTheme"
      }), "用于自定义主题色的内容，其属性可选，仅需对需要修改的token字段赋值，其余token将继承系统默认颜色值，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E7%B3%BB%E7%BB%9F%E7%BC%BA%E7%9C%81token%E8%89%B2%E5%80%BC",
        children: "系统默认的token颜色值"
      }), "。请参照以下示例自定义主题色："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { CustomColors, CustomTheme } from '@kit.ArkUI';\n\nexport class AppColors implements CustomColors {\n  // 自定义主题色\n  public brand: ResourceColor = '#FF75D9';\n  // 使用$r，让一级警示色在深色和浅色模式下，设置为不同的颜色\n  public warning: ResourceColor = $r('sys.color.ohos_id_color_warning');\n}\n\nexport class AppTheme implements CustomTheme {\n  public colors: AppColors = new AppColors();\n}\n\nexport let gAppTheme: CustomTheme = new AppTheme();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置应用内组件自定义主题色",
      children: "设置应用内组件自定义主题色"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若在页面入口处设置应用内组件自定义主题色，需确保在页面build前执行", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-theme/js-apis-arkui-theme#themecontrol",
            children: "ThemeControl"
          }), ".", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-theme/js-apis-arkui-theme#setdefaulttheme",
            children: "setDefaultTheme"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["示例代码中，", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#onwillapplytheme12",
            children: "onWillApplyTheme"
          }), "回调函数用于使自定义组件获取当前生效的Theme对象。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Index.ets\nimport { Theme, ThemeControl } from '@kit.ArkUI';\nimport { gAppTheme } from './AppTheme';\n\n//在页面build前执行ThemeControl\nThemeControl.setDefaultTheme(gAppTheme);\n\n@Entry\n@Component\nstruct DisplayPage {\n  @State menuItemColor: ResourceColor = $r('sys.color.background_primary');\n\n  onWillApplyTheme(theme: Theme) {\n    this.menuItemColor = theme.colors.backgroundPrimary;\n  }\n\n  build() {\n    Column() {\n      List({ space: 10 }) {\n        ListItem() {\n          Column({ space: '5vp' }) {\n            Text('Color mode')\n              .margin({ top: '5vp', left: '14fp' })\n              .width('100%')\n            Row() {\n              Column() {\n                Text('Light')\n                  .fontSize('16fp')\n                  .textAlign(TextAlign.Start)\n                  .alignSelf(ItemAlign.Center)\n                Radio({ group: 'light or dark', value: 'light' })\n                  .checked(true)\n              }\n              .width('50%')\n\n              Column() {\n                Text('Dark')\n                  .fontSize('16fp')\n                  .textAlign(TextAlign.Start)\n                  .alignSelf(ItemAlign.Center)\n                Radio({ group: 'light or dark', value: 'dark' })\n              }\n              .width('50%')\n            }\n          }\n          .width('100%')\n          .height('90vp')\n          .borderRadius('10vp')\n          .backgroundColor(this.menuItemColor)\n        }\n\n        ListItem() {\n          Column() {\n            Text('Brightness')\n              .width('100%')\n              .margin({ top: '5vp', left: '14fp' })\n            Slider({ value: 40, max: 100 })\n          }\n          .width('100%')\n          .height('70vp')\n          .borderRadius('10vp')\n          .backgroundColor(this.menuItemColor)\n        }\n\n        ListItem() {\n          Column() {\n            Row() {\n              Column({ space: '5vp' }) {\n                Text('Touch sensitivity')\n                  .fontSize('16fp')\n                  .textAlign(TextAlign.Start)\n                  .width('100%')\n                Text('Increase the touch sensitivity of your screen' +\n                  ' for use with screen protectors')\n                  .fontSize('12fp')\n                  .fontColor(Color.Blue)\n                  .textAlign(TextAlign.Start)\n                  .width('100%')\n              }\n              .alignSelf(ItemAlign.Center)\n              .margin({ left: '14fp' })\n              .width('75%')\n\n              Toggle({ type: ToggleType.Switch, isOn: true })\n                .margin({ right: '14fp' })\n                .alignSelf(ItemAlign.Center)\n            }\n            .width('100%')\n            .height('80vp')\n          }\n          .width('100%')\n          .borderRadius('10vp')\n          .backgroundColor(this.menuItemColor)\n        }\n        ListItem() {\n          Column() {\n            Text('Warning')\n              .width('100%')\n              .margin({ top: '5vp', left: '14fp' })\n            Button('Text')\n              .type(ButtonType.Capsule)\n              .role(ButtonRole.ERROR)\n              .width('40%')\n          }\n          .width('100%')\n          .height('70vp')\n          .borderRadius('10vp')\n          .backgroundColor(this.menuItemColor)\n        }\n      }\n    }\n    .padding('10vp')\n    .backgroundColor('#dcdcdc')\n    .width('100%')\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若在UIAbility中设置应用内组件自定义主题色，需在onWindowStageCreate()方法的windowStage.", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#loadcontent9",
            children: "loadContent"
          }), "的完成时回调中调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-theme/js-apis-arkui-theme#themecontrol",
            children: "ThemeControl"
          }), ".", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-theme/js-apis-arkui-theme#setdefaulttheme",
            children: "setDefaultTheme"
          }), "，设置应用内组件的自定义主题色。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// EntryAbility.ets\nimport {AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { window, CustomColors, ThemeControl } from '@kit.ArkUI';\n\nclass AppColors implements CustomColors {\n  fontPrimary = 0xFFD53032;\n  iconOnPrimary = 0xFFD53032;\n  iconFourth = 0xFFD53032;\n}\n\nconst abilityThemeColors = new AppColors();\n\nexport default class EntryAbility extends UIAbility {\n  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');\n  }\n\n  onDestroy() {\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onDestroy');\n  }\n\n  onWindowStageCreate(windowStage: window.WindowStage) {\n    // Main window is created, set main page for this ability\n    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');\n\n    windowStage.loadContent('pages/Index', (err, data) => {\n      if (err.code) {\n        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');\n        return;\n      }\n      hilog.info(0x0000, 'testTag', 'Succeeded in loading the content. Data: %{public}s', JSON.stringify(data) ?? '');\n      // 在onWindowStageCreate()方法中setDefaultTheme\n      ThemeControl.setDefaultTheme({ colors: abilityThemeColors });\n      hilog.info(0x0000, 'testTag', '%{public}s', 'ThemeControl.setDefaultTheme done');\n    });\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(937758)/* ["default"] */.A) + "",
            width: "397",
            height: "415"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(402496)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["当setDefaultTheme的参数为undefined时，会清除先前设置的自定义主题，默认token值对应的色值参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E7%B3%BB%E7%BB%9F%E7%BC%BA%E7%9C%81token%E8%89%B2%E5%80%BC",
              children: "系统缺省token色值"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "setDefaultTheme需要在ArkUI初始化后即windowStage.loadContent的完成时回调中使用。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置应用局部页面自定义主题风格",
      children: "设置应用局部页面自定义主题风格"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/themes/ts-container-with-theme/ts-container-with-theme",
        children: "WithTheme"
      }), "，将自定义主题Theme的配色应用于内部组件的默认样式。在WithTheme的作用范围内，组件的配色会根据Theme的配色进行调整。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(906932)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在自定义节点", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode",
        children: "BuilderNode"
      }), "中使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/themes/ts-container-with-theme/ts-container-with-theme",
        children: "WithTheme"
      }), "，为了确保显示效果正确，需手动传递系统环境变化事件，触发节点的全量更新，详细请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#updateconfiguration12",
        children: "BuilderNode系统环境变化更新"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如示例所示，使用WithTheme({ theme: this.CustomTheme })可将作用域内组件的配色设置为自定义主题风格。后续可以通过更新this.CustomTheme来更换主题风格。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#onwillapplytheme12",
        children: "onWillApplyTheme"
      }), "回调函数用于使自定义组件能够获取当前生效的Theme对象。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { CustomColors, CustomTheme, Theme } from '@kit.ArkUI';\nimport { common } from '@kit.AbilityKit';\n//请将$r('app.color.xxx')替换为实际资源文件\nclass AppColors implements CustomColors {\n  public fontPrimary: ResourceColor = $r('app.color.brand_purple');\n  public backgroundEmphasize: ResourceColor = $r('app.color.brand_purple');\n}\n\nclass AppColorsSec implements CustomColors {\n  public fontPrimary: ResourceColor = $r('app.color.brand');\n  public backgroundEmphasize: ResourceColor = $r('app.color.brand');\n}\n\nclass AppTheme implements CustomTheme {\n  public colors: AppColors = new AppColors();\n}\n\nclass AppThemeSec implements CustomTheme {\n  public colors: AppColors = new AppColorsSec();\n}\n\n@Entry\n@Component\nstruct DisplayPage1 {\n  @State customTheme: CustomTheme = new AppTheme();\n  // 请将$r('app.string.SetCustomThemeStyle')替换为实际资源文件，在本示例中该资源文件的value值为\"设置应用局部页面自定义主题风格\"\n  @State message: ResourceStr = $r('app.string.SetCustomThemeStyle');\n  count = 0;\n\n  build() {\n    WithTheme({ theme: this.customTheme }) {\n      Row(){\n        Column() {\n          Text('WithTheme')\n            .fontSize(30)\n            .margin({bottom: 10})\n          Text(this.message)\n            .margin({bottom: 10})\n          Button('change theme').onClick(() => {\n            this.count++;\n            if (this.count > 1) {\n              this.count = 0;\n            }\n            switch (this.count) {\n              case 0:\n                this.customTheme = new AppTheme();\n                break;\n              case 1:\n                this.customTheme = new AppThemeSec();\n                break;\n              default:\n                break;\n            }\n          })\n        }\n        .width('100%')\n      }\n      .height('100%')\n      .width('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(501716)/* ["default"] */.A) + "",
        width: "287",
        height: "619"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置应用页面局部深浅色",
      children: "设置应用页面局部深浅色"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/themes/ts-container-with-theme/ts-container-with-theme",
        children: "WithTheme"
      }), "可以设置三种颜色模式，跟随系统模式，浅色模式和深色模式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在WithTheme的作用范围内，组件的样式资源值会根据指定的模式，读取对应的深浅色模式系统和应用资源值。这意味着，在WithTheme作用范围内，组件的配色会根据所指定的深浅模式进行调整。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下面的示例所示，通过WithTheme({ colorMode: ThemeColorMode.DARK })，可以将作用范围内的组件设置为深色模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置局部深浅色时，需要添加dark.json资源文件，深浅色模式才会生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(804338)/* ["default"] */.A) + "",
        width: "250",
        height: "124"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dark.json数据示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "  {\n    \"color\": [\n      {\n        \"name\": \"start_window_background\",\n        \"value\": \"#000000\"\n      }\n    ]\n  }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ThemeControl } from '@kit.ArkUI';\n\nThemeControl.setDefaultTheme(undefined);\n\n@Entry\n@Component\nstruct DisplayPage3 {\n  @State message: string = 'Hello World';\n  @State colorMode: ThemeColorMode = ThemeColorMode.DARK;\n\n  build() {\n    WithTheme({ colorMode: this.colorMode }) {\n      Row() {\n        Column() {\n          Text(this.message)\n            .fontSize(50)\n            .fontWeight(FontWeight.Bold)\n          Button('Switch ColorMode').onClick(() => {\n            if (this.colorMode === ThemeColorMode.LIGHT) {\n              this.colorMode = ThemeColorMode.DARK;\n            } else if (this.colorMode === ThemeColorMode.DARK) {\n              this.colorMode = ThemeColorMode.LIGHT;\n            }\n          })\n        }\n        .width('100%')\n      }\n      .backgroundColor($r('sys.color.background_primary'))\n      .height('100%')\n      // 扩展安全区，实现沉浸式深浅色变更效果\n      .expandSafeArea(\n        [SafeAreaType.SYSTEM], [SafeAreaEdge.TOP, SafeAreaEdge.END, SafeAreaEdge.BOTTOM, SafeAreaEdge.START])\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(223683)/* ["default"] */.A) + "",
        width: "338",
        height: "708"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "系统缺省token色值",
      children: "系统缺省token色值"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Token"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "场景类别"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Light"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dark"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.brand"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "品牌色"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ff0a59f7"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ff317af7"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.warning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一级警示色"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ffe84026"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ffd94838"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.alert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "二级警示色"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ffed6f21"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ffdb6b42"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.confirm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "确认色"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ff64bb5c"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ff5be854"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.fontPrimary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一级文本"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#e5000000"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#e5ffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.fontSecondary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "二级文本"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#99000000"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#99ffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.fontTertiary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "三级文本"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#66000000"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#66ffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.fontFourth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "四级文本"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#33000000"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#33ffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.fontEmphasize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高亮文本"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ff0a59f7"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ff317af7"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.fontOnPrimary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一级文本反色"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ffffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ff000000"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.fontOnSecondary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "二级文本反色"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#99ffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#99000000"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.fontOnTertiary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "三级文本反色"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#66ffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#66000000"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.fontOnFourth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "四级文本反色"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#33ffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#33000000"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.iconPrimary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一级图标"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#e5000000"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#e5ffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.iconSecondary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "二级图标"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#99000000"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#99ffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.iconTertiary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "三级图标"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#66000000"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#66ffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.iconFourth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "四级图标"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#33000000"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#33ffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.iconEmphasize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高亮图标"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ff0a59f7"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ff317af7"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.iconSubEmphasize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高亮辅助图标"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#660a59f7"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#66317af7"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.iconOnPrimary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一级图标反色"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ffffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ff000000"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.iconOnSecondary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "二级图标反色"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#99ffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#99000000"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.iconOnTertiary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "三级图标反色"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#66ffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#66000000"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.iconOnFourth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "四级图标反色"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#33ffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#33000000"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.backgroundPrimary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一级背景（实色/不透明色）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ffffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ffe5e5e5"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.backgroundSecondary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "二级背景（实色/不透明色）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#fff1f3f5"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ff191a1c"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.backgroundTertiary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "三级背景（实色/不透明色）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ffe5e5ea"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ff202224"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.backgroundFourth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "四级背景（实色/不透明色）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ffd1d1d6"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ff2e3033"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.backgroundEmphasize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高亮背景（实色/不透明色）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ff0a59f7"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ff317af7"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.compForegroundPrimary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "前背景"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ff000000"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ffe5e5e5"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.compBackgroundPrimary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "白色背景"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ffffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ffffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.compBackgroundPrimaryTran"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "白色透明背景"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ffffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#33ffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.compBackgroundPrimaryContrary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "常亮背景"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ffffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ffe5e5e5"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.compBackgroundGray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "灰色背景"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#fff1f3f5"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ffe5e5ea"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.compBackgroundSecondary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "二级背景"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#19000000"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#19ffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.compBackgroundTertiary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "三级背景"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#0c000000"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#0cffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.compBackgroundEmphasize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高亮背景"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ff0a59f7"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ff317af7"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.compBackgroundNeutral"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "黑色中性高亮背景"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ff000000"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ffffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.compEmphasizeSecondary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20%高亮背景"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#330a59f7"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#33317af7"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.compEmphasizeTertiary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10%高亮背景"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#190a59f7"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#19317af7"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.compDivider"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "分割线颜色"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#33000000"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#33ffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.compCommonContrary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通用反色"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ffffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ff000000"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.compBackgroundFocus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获焦态背景色"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#fff1f3f5"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ff000000"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.compFocusedPrimary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获焦态一级反色"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#e5000000"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#e5ffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.compFocusedSecondary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获焦态二级反色"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#99000000"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#99ffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.compFocusedTertiary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获焦态三级反色"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#66000000"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#66ffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.interactiveHover"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通用悬停交互式颜色"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#0c000000"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#0cffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.interactivePressed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通用按压交互式颜色"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#19000000"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#19ffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.interactiveFocus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通用获焦交互式颜色"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ff0a59f7"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ff317af7"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.interactiveActive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通用激活交互式颜色"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ff0a59f7"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#ff317af7"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.interactiveSelect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通用选择交互式颜色"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#33000000"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#33ffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "theme.colors.interactiveClick"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通用点击交互式颜色"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "#19000000"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "#19ffffff"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["各个token色值可影响的组件可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-theme/js-apis-arkui-theme#colors",
        children: "Colors"
      }), "接口说明。"]
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
402496(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
906932(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
223683(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958038-8af3e308d77156a66906f0e6393b4e01.png");

},
501716(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798388-6aa0c8b4288fafa09a5d605514cb6584.gif");

},
937758(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478037-3b9423b6db3adc9bc129b399b911215d.png");

},
804338(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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