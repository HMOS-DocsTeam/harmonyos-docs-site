"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["616462"], {
356314(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_dialog_arkts_use_dialogs_arkts_embedded_dialog_arkts_embedded_dialog_md_bb4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-dialog-arkts-use-dialogs-arkts-embedded-dialog-arkts-embedded-dialog-md-bb4.json
var site_docs_arkui_arkts_ui_development_arkts_use_dialog_arkts_use_dialogs_arkts_embedded_dialog_arkts_embedded_dialog_md_bb4_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-embedded-dialog/arkts-embedded-dialog","title":"页面级弹出框","description":"ArkUI的弹出框默认设置为全局级别，弹窗节点作为页面根节点的子节点，显示层级高于应用中的所有路由/导航页面。当页面内进行路由跳转时，如果应用未主动调用close方法关闭弹出框，弹出框不会自动关闭，并且会在下一个跳转页面上继续显示。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-embedded-dialog/arkts-embedded-dialog.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-embedded-dialog","slug":"/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-embedded-dialog/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-embedded-dialog/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"页面级弹出框","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-embedded-dialog","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"固定样式弹出框","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-fixes-style-dialog/"},"next":{"title":"弹出框层级管理","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-dialog-levelorder/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-embedded-dialog/arkts-embedded-dialog.md


const frontMatter = {
	title: '页面级弹出框',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-embedded-dialog',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '页面级弹出框';

const assets = {

};



const toc = [{
  "value": "设置参数",
  "id": "设置参数",
  "level": 2
}, {
  "value": "交互说明",
  "id": "交互说明",
  "level": 2
}, {
  "value": "完整示例",
  "id": "完整示例",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "页面级弹出框",
        children: "页面级弹出框"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI的弹出框默认设置为全局级别，弹窗节点作为页面根节点的子节点，显示层级高于应用中的所有路由/导航页面。当页面内进行路由跳转时，如果应用未主动调用close方法关闭弹出框，弹出框不会自动关闭，并且会在下一个跳转页面上继续显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 15开始，如果开发者希望在路由跳转后，弹出框能够随前一个路由页面的切换而消失，并在路由返回后弹出框能够继续正常显示，可以通过页面级弹出框来实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(955146)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当且仅当弹出框为非子窗模式时，页面级能力才会生效。即showInSubWindow参数不设置或设置为false。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["页面级弹出框通常与导航路由能力结合使用，可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-navigation-introduction",
        children: "组件导航和页面路由概述"
      }), "了解相关术语。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["页面级弹出框的使用方式是在当前弹出框的入参之中新增了相关属性能力，使用前可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-use-dialogs/arkts-base-dialog-overview",
        children: "弹出框概述"
      }), "了解基础的弹出框使用方法。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置参数",
      children: "设置参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(250420)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细变量定义请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%AE%8C%E6%95%B4%E7%A4%BA%E4%BE%8B",
        children: "完整示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在弹出框的options入参中设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-promptaction/js-apis-promptaction#levelmode15%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "levelMode"
      }), "属性，值为LevelMode.EMBEDDED表示开启页面级弹出框能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当弹出框弹出时，会自动获取当前显示的Page页面并将弹出框节点挂载在此页面下。此时弹出框的显示层级高于此Page页面下的所有Navigation页面。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "this.getUIContext().getPromptAction().openCustomDialog({\n  builder: () => {\n    this.customDialogComponent();\n  },\n  levelMode: LevelMode.EMBEDDED, // 启用页面级弹出框\n  // ···\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果希望弹出框显示在某个指定页面内，需通过第二个参数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-promptaction/js-apis-promptaction#basedialogoptions11",
        children: "levelUniqueId"
      }), "来实现。此参数接收页面内的节点id，设置后，弹出框显示时会自动查询此id对应的节点所在的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
        children: "Navigation"
      }), "页面，并将其挂载在子页面的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination",
        children: "NavDestination"
      }), "节点下。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(384015)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当levelMode参数设置为LevelMode.EMBEDDED，但是levelUniqueId传入的ID无法正确找到节点时，页面级能力不生效。如果levelUniqueId所映射的节点存在但向上遍历不存在NavDestination节点则会将弹出框节点挂载在Page节点下。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["levelUniqueId必须传入", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#framenode-1",
          children: "FrameNode"
        }), "的uniqueId，建议使用FrameNode的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getuniqueid12",
          children: "getUniqueId"
        }), "方法获取uniqueId。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如下代码示例所示，Text节点为指定页面的节点，设置自定义id后，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getframenodebyid12",
        children: "getFrameNodeById"
      }), "方法获取该节点，再通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-framenode/js-apis-arkui-framenode#getuniqueid12",
        children: "getUniqueId"
      }), "获取节点的内部id，并将其作为levelUniqueId的值传入。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Text(this.message).id('test_text')\n  .onClick(() => {\n    const node: FrameNode | null = this.getUIContext().getFrameNodeById('test_text') || null;\n    this.getUIContext().getPromptAction().openCustomDialog({\n      builder: () => {\n        this.customDialogComponent();\n      },\n      // ···\n      levelMode: LevelMode.EMBEDDED, // 启用页面级弹出框\n      levelUniqueId: node?.getUniqueId(), // 设置页面级弹出框所在页面的任意节点ID\n    })\n      .then((dialogId: number) => {\n        customDialogId = dialogId;\n      });\n  })\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果弹出框配置了蒙层，蒙层的遮盖范围会根据页面层级的变化进行调整，默认遮罩范围为弹出框父节点的显示区域（Page页面或者Navigation页面）。此时，状态栏和导航条不会被蒙层遮挡。若希望遮挡状态栏和导航条，可将", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-promptaction/js-apis-promptaction#immersivemode15%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E",
        children: "immersiveMode"
      }), "参数的值设为ImmersiveMode.EXTEND。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Text(this.message).id('test_text')\n  .fontSize(50)\n  .fontWeight(FontWeight.Bold)\n  .onClick(() => {\n    const node: FrameNode | null = this.getUIContext().getFrameNodeById('test_text') || null;\n    this.getUIContext().getPromptAction().openCustomDialog({\n      builder: () => {\n        this.customDialogComponent();\n      },\n      levelMode: LevelMode.EMBEDDED, // 启用页面级弹出框\n      levelUniqueId: node?.getUniqueId(), // 设置页面级弹出框所在页面的任意节点ID\n      immersiveMode: ImmersiveMode.EXTEND, // 设置页面级弹出框蒙层的显示模式\n    })\n      .then((dialogId: number) => {\n        customDialogId = dialogId;\n      });\n  })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "交互说明",
      children: "交互说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "页面内弹出框在部分交互逻辑上依然遵循部分弹出框指定的交互策略："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "侧滑时先关闭弹出框。通过侧滑手势返回上一页时，如果页面上存在弹出框，弹出框会优先关闭并结束本次手势行为。如果期望返回上一页，需要再次触发侧滑手势。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击弹出框的蒙层，默认会关闭弹出框，点击蒙层以外的区域则不会。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下述示例为基于Router路由模式下的页面级弹出框。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { LevelMode, ImmersiveMode } from '@kit.ArkUI';\n\nlet customDialogId: number = 0;\n\n@Builder\nfunction customDialogBuilder(uiContext: UIContext) {\n  Column() {\n    Text('Custom dialog Message').fontSize(20).height(100)\n    Row() {\n      Button('Next').onClick(() => {\n        // 在弹窗内部进行路由跳转。\n        uiContext.getRouter().pushUrl({ url: 'pages/Next' });\n      })\n      Blank().width(50)\n      Button('Close').onClick(() => {\n        uiContext.getPromptAction().closeCustomDialog(customDialogId);\n      })\n    }\n  }.padding(20)\n}\n\n@Entry\n@Component\nexport struct PageLevelDialogBox {\n  @State message: string = 'Hello World';\n  private uiContext: UIContext = this.getUIContext();\n\n  @Builder\n  customDialogComponent() {\n    customDialogBuilder(this.uiContext);\n  }\n\n  build() {\n    NavDestination() {\n      Row() {\n        Column() {\n          Text(this.message).id('test_text')\n            .fontSize(50)\n            .fontWeight(FontWeight.Bold)\n            .onClick(() => {\n              const node: FrameNode | null = this.getUIContext().getFrameNodeById('test_text') || null;\n              this.getUIContext().getPromptAction().openCustomDialog({\n                builder: () => {\n                  this.customDialogComponent();\n                },\n                levelMode: LevelMode.EMBEDDED, // 启用页面级弹出框\n                levelUniqueId: node?.getUniqueId(), // 设置页面级弹出框所在页面的任意节点ID\n                immersiveMode: ImmersiveMode.EXTEND, // 设置页面级弹出框蒙层的显示模式\n              })\n                .then((dialogId: number) => {\n                  customDialogId = dialogId;\n                });\n            })\n        }\n        .width('100%')\n      }\n      .height('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Next.ets\n@Entry\n@Component\nstruct Next {\n  @State message: string = 'Back';\n\n  build() {\n    Row() {\n      Column() {\n        Button(this.message)\n          .fontSize(20)\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            this.getUIContext().getRouter().back();\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(170485)/* ["default"] */.A) + "",
        width: "480",
        height: "779"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["下述示例为基于Navigation导航模式下的页面级弹出框。使用本示例前需要参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation#%E7%A4%BA%E4%BE%8B16navigation%E4%BD%BF%E7%94%A8navdestination%E4%BD%9C%E4%B8%BA%E5%AF%BC%E8%88%AA%E9%A1%B5",
        children: "Navigation使用NavDestination作为导航页"
      }), "文档完成Index首页和router_map.json的创建与配置。并使用下述示例代码中的PageLevelDialogInNavigation和PageLevelDialogInNavigationTestTwo组件替换Navigation参考文档中的PageHome和PageOne组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { LevelMode, ImmersiveMode } from '@kit.ArkUI';\n     \nlet customDialogId: number = 0;\n\n@Builder\nfunction customDialogBuilder(uiContext: UIContext, stack: NavPathStack | undefined) {\n  Column() {\n    Text('Custom dialog Message').fontSize(20).height(100)\n    Row() {\n      Button('Next').onClick(() => {\n        // 在弹窗内部进行路由跳转。\n        if (stack) {\n          stack.pushPath({ name: 'Custom_ROUTE_PREFIX/PageLevelDialogInNavigationPageTwo'})\n        }\n      })\n      Blank().width(50)\n      Button('Close').onClick(() => {\n        uiContext.getPromptAction().closeCustomDialog(customDialogId);\n      })\n    }\n  }.padding(20)\n}\n\n@Component\nexport struct PageLevelDialogInNavigation {\n  @State info: string = '';\n  private stack: NavPathStack | undefined = undefined;\n  private uiContext: UIContext = this.getUIContext();\n  @State message: string = 'Hello World';\n\n  @Builder\n  customDialogComponent() {\n    customDialogBuilder(this.uiContext, this.stack);\n  }\n\n  build() {\n    NavDestination() {\n      Stack({alignContent: Alignment.Center}) {\n        Column() {\n          Text(this.message).id('test_text')\n            .fontSize(50)\n            .fontWeight(FontWeight.Bold)\n            .onClick(() => {\n              const node: FrameNode | null = this.getUIContext().getFrameNodeById('test_text') || null;\n              this.uiContext.getPromptAction().openCustomDialog({\n                builder: () => {\n                  this.customDialogComponent();\n                },\n                levelMode: LevelMode.EMBEDDED, // 启用页面级弹出框\n                levelUniqueId: node?.getUniqueId(), // 设置页面级弹出框所在页面的任意节点ID\n                immersiveMode: ImmersiveMode.EXTEND, // 设置页面级弹出框蒙层的显示模式\n              }).then((dialogId: number) => {\n                customDialogId = dialogId;\n              })\n            })\n        }\n        .width('100%')\n      }.width('100%').height('100%')\n    }\n    .width('100%').height('100%')\n    .title('PageOne')\n    .onReady((ctx: NavDestinationContext) => {\n      this.stack = ctx.pathStack;\n    })\n  }\n}\n\n@Component\nexport struct PageLevelDialogInNavigationTestTwo {\n  @State message: string = 'Back';\n  private stack: NavPathStack | undefined = undefined;\n\n  build() {\n    NavDestination() {\n      Stack({alignContent: Alignment.Center}) {\n        Column() {\n          Button(this.message)\n            .fontSize(20)\n            .fontWeight(FontWeight.Bold)\n            .onClick(() => {\n              if (this.stack) {\n                this.stack.pop()\n              }\n            })\n        }\n        .width('100%')\n      }.width('100%').height('100%')\n    }\n    .width('100%').height('100%')\n    .title('PageTwo')\n    .onReady((ctx: NavDestinationContext) => {\n      this.stack = ctx.pathStack;\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(161597)/* ["default"] */.A) + "",
        width: "344",
        height: "689"
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
161597(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957908-5675c96118c7c5b814fae2a6d4a6c3c7.gif");

},
250420(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
170485(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437953-f9cb57e67f9341e4709d5767dceaf26a.gif");

},
384015(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
955146(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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