"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["421498"], {
283190(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_dialog_arkts_bind_modal_arkts_sheet_page_arkts_sheet_page_md_c00_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-dialog-arkts-bind-modal-arkts-sheet-page-arkts-sheet-page-md-c00.json
var site_docs_arkui_arkts_ui_development_arkts_use_dialog_arkts_bind_modal_arkts_sheet_page_arkts_sheet_page_md_c00_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-dialog/arkts-bind-modal/arkts-sheet-page/arkts-sheet-page","title":"绑定半模态页面（bindSheet）","description":"半模态页面（bindSheet）默认是模态形式的非全屏弹窗式交互页面，允许部分底层父视图可见，帮助用户在与半模态交互时保留其父视图环境。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-dialog/arkts-bind-modal/arkts-sheet-page/arkts-sheet-page.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-dialog/arkts-bind-modal/arkts-sheet-page","slug":"/arkui/arkts-ui-development/arkts-use-dialog/arkts-bind-modal/arkts-sheet-page/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-bind-modal/arkts-sheet-page/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"绑定半模态页面（bindSheet）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-sheet-page","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"绑定模态页面概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-bind-modal/arkts-modal-overview/"},"next":{"title":"绑定全模态页面（bindContentCover）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-bind-modal/arkts-contentcover-page/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-dialog/arkts-bind-modal/arkts-sheet-page/arkts-sheet-page.md


const frontMatter = {
	title: '绑定半模态页面（bindSheet）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-sheet-page',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '绑定半模态页面（bindSheet）';

const assets = {

};



const toc = [{
  "value": "使用约束",
  "id": "使用约束",
  "level": 2
}, {
  "value": "生命周期",
  "id": "生命周期",
  "level": 2
}, {
  "value": "使用嵌套滚动交互",
  "id": "使用嵌套滚动交互",
  "level": 2
}, {
  "value": "二次确认能力",
  "id": "二次确认能力",
  "level": 2
}, {
  "value": "屏蔽部分关闭行为",
  "id": "屏蔽部分关闭行为",
  "level": 2
}, {
  "value": "半模态支持避让中轴",
  "id": "半模态支持避让中轴",
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
        id: "绑定半模态页面bindsheet",
        children: "绑定半模态页面（bindSheet）"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-sheet-transition/ts-universal-attributes-sheet-transition#bindsheet",
        children: "半模态页面（bindSheet）"
      }), "默认是模态形式的非全屏弹窗式交互页面，允许部分底层父视图可见，帮助用户在与半模态交互时保留其父视图环境。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "半模态页面适用于展示简单的任务或信息面板，例如，个人信息、文本简介、分享面板、创建日程、添加内容等。若需展示可能影响父视图的半模态页面，半模态支持配置为非模态交互形式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["半模态在不同宽度的设备上存在不同的形态能力，开发者对不同宽度的设备上有不同的形态诉求请参考(", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-sheet-transition/ts-universal-attributes-sheet-transition#sheetoptions",
        children: "preferType"
      }), ")属性。可以使用bindSheet构建半模态转场效果，详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-modal-transition#%E4%BD%BF%E7%94%A8bindsheet%E6%9E%84%E5%BB%BA%E5%8D%8A%E6%A8%A1%E6%80%81%E8%BD%AC%E5%9C%BA%E6%95%88%E6%9E%9C",
        children: "模态转场"
      }), "。对于复杂或者冗长的用户流程，建议考虑其他的转场方式替代半模态。如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-dialog/arkts-bind-modal/arkts-contentcover-page",
        children: "全模态转场"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-navigation-animation",
        children: "Navigation转场"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用约束",
      children: "使用约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["半模态内嵌", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uiextension/js-apis-arkui-uiextension",
          children: "UIExtension"
        }), "时，不支持再在UIExtension内拉起半模态/弹窗。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["若无二次确认或者自定义关闭行为的场景，不建议使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-sheet-transition/ts-universal-attributes-sheet-transition#sheetoptions",
          children: "shouldDismiss/onWillDismiss"
        }), "接口。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "生命周期",
      children: "生命周期"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "半模态页面提供了生命周期函数，用于通知用户该弹窗的生命周期状态。生命周期的触发顺序依次为：onWillAppear -> onAppear -> onWillDisappear -> onDisappear。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onWillAppear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "半模态页面显示（动画开始前）回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onAppear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "半模态页面显示（动画结束后）回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onWillDisappear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "半模态页面回退（动画开始前）回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onDisappear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "半模态页面回退（动画结束后）回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用嵌套滚动交互",
      children: "使用嵌套滚动交互"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在半模态面板内容区域滑动时的操作优先级："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "内容处于最顶部（内容不可滚动时以此状态处理）"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "上滑时，优先向上扩展面板挡位，如无挡位可扩展，则滚动内容"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "下滑时，优先向下收缩面板挡位，如无挡位可收缩，则关闭面板"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "内容处于中间位置（可上下滚动）"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "上/下滑时，优先滚动内容，直至页面内容到达底部/顶部"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "内容处于底部位置（内容可滚动时）"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "上滑时，呈现内容区域回弹效果，不切换挡位"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "下滑时，滚动内容直到到达顶部"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "半模态上述交互默认的嵌套模式为：{Forward：PARENT_FIRST，Backward：SELF_FIRST}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果开发者希望在面板内容的builder中定义滚动容器，如List、Scroll，并结合半模态的上述交互能力，那么需要在垂直方向上为滚动容器设置嵌套滚动属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: ".nestedScroll({\n    // 可滚动组件往末尾端滚动时的嵌套滚动选项，手势向上\n    scrollForward: NestedScrollMode.PARENT_FIRST,\n    // 可滚动组件往起始端滚动时的嵌套滚动选项，手势向下\n    scrollBackward: NestedScrollMode.SELF_FIRST,\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "完整示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct SheetDemo {\n  @State isShowSheet: boolean = false;\n  private items: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];\n\n  @Builder\n  SheetBuilder() {\n    Column() {\n      // 第一步：自定义滚动容器\n      List({ space: '10vp' }) {\n        ForEach(this.items, (item: number) => {\n          ListItem() {\n            Text(String(item)).fontSize(16).fontWeight(FontWeight.Bold)\n          }.width('90%').height('80vp').backgroundColor('#ff53ecd9').borderRadius(10)\n        })\n      }\n      .alignListItem(ListItemAlign.Center)\n      .margin({ top: '10vp' })\n      .width('100%')\n      .height('900px')\n      // 第二步：设置滚动组件的嵌套滚动属性\n      .nestedScroll({\n        scrollForward: NestedScrollMode.PARENT_FIRST,\n        scrollBackward: NestedScrollMode.SELF_FIRST,\n      })\n\n      // 请将$r('app.string.tSheetBuilder_text1')替换为实际资源文件，在本示例中该资源文件的value值为\"非滚动区域\"\n      Text($r('app.string.tSheetBuilder_text1'))\n        .width('100%')\n        .backgroundColor(Color.Gray)\n        .layoutWeight(1)\n        .textAlign(TextAlign.Center)\n        .align(Alignment.Top)\n    }.width('100%').height('100%')\n  }\n\n  build() {\n    Column() {\n      Button('Open Sheet').width('90%').height('80vp')\n        .onClick(() => {\n          this.isShowSheet = !this.isShowSheet;\n        })\n        .bindSheet($$this.isShowSheet, this.SheetBuilder(), {\n          detents: [SheetSize.MEDIUM, SheetSize.LARGE, 600],\n          preferType: SheetType.BOTTOM,\n          // 请将$r('app.string.tSheetBuilder_text2')替换为实际资源文件，在本示例中该资源文件的value值为\"嵌套滚动场景\"\n          title: { title: $r('app.string.tSheetBuilder_text2') },\n        })\n    }.width('100%').height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(28762)/* ["default"] */.A) + "",
        width: "345",
        height: "695"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "二次确认能力",
      children: "二次确认能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "推荐使用onWillDismiss接口，此接口支持在回调中处理二次确认，或自定义关闭行为。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(610933)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "声明onWillDismiss接口后，半模态页面的所有关闭操作，包括侧滑、点击关闭按钮、点击蒙层和下拉关闭，都需通过调用dismiss方法来实现。若未实现此逻辑，半模态页面将无法响应上述关闭操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = '[Sample_SupportingAgingFriendly]';\nconst DOMAIN = 0xF811;\nconst BUNDLE = 'SupportingAgingFriendly_';\n\n@Entry\n@Component\nstruct OnWillDismiss_Dismiss {\n  @State isShow: Boolean = false;\n\n  @Builder\n  myBuilder() {\n    Column() {\n      Button('Button')\n    }\n  }\n\n  build() {\n    Button('OpenBindSheet')\n      .onClick(() => {\n        this.isShow = true\n      })\n      .margin(120)\n      .bindSheet($$this.isShow, this.myBuilder(), {\n        height: SheetSize.MEDIUM,\n        blurStyle: BlurStyle.Thick,\n        dragBar: true,\n        detents: [SheetSize.MEDIUM, SheetSize.LARGE],\n        title: { title: 'title', subtitle: 'subtitle' },\n        enableOutsideInteractive: false,\n        onWillDismiss: ((dismissSheetAction: DismissSheetAction) => {\n          // 第二步：确认二次回调交互能力，此处用AlertDialog提示 \"是否需要关闭半模态\"\n          this.getUIContext().showAlertDialog(\n            {\n              // 请将$r('app.string.bindContentCover_label2')替换为实际资源文件，在本示例中该资源文件的value值为\"示例2（自定义转场动画）\"\n              message: $r('app.string.bindContentCover_label2'),\n              autoCancel: true,\n              alignment: DialogAlignment.Bottom,\n              gridCount: 4,\n              offset: { dx: 0, dy: -20 },\n              primaryButton: {\n                value: 'cancel',\n                action: () => {\n                  hilog.info(DOMAIN, TAG, 'Callback when the cancel button is clicked');\n                }\n              },\n              secondaryButton: {\n                enabled: true,\n                defaultFocus: true,\n                style: DialogButtonStyle.HIGHLIGHT,\n                value: 'ok',\n                // 第三步：确认关闭半模态逻辑所在，此处为AlertDialog的Button回调\n                action: () => {\n                  // 第四步：上述第三步逻辑触发的时候，调用dismiss()关闭半模态\n                  dismissSheetAction.dismiss();\n                  hilog.info(DOMAIN, TAG, 'Callback when the ok button is clicked');\n                }\n              },\n              cancel: () => {\n                hilog.info(DOMAIN, TAG, BUNDLE + 'onWillDismiss_Dismiss:' + 'AlertDialog Closed callbacks');\n              }\n            }\n          )\n        })\n      })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(954590)/* ["default"] */.A) + "",
        width: "351",
        height: "690"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "屏蔽部分关闭行为",
      children: "屏蔽部分关闭行为"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于声明了onWillDismiss接口，半模态的关闭行为都需要dismiss处理。可以通过if等逻辑自定义处理关闭逻辑。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下述示例显示半模态页面只在下滑的时候关闭。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "onWillDismiss: ((DismissSheetAction: DismissSheetAction) => {\n  if (DismissSheetAction.reason === DismissReason.SLIDE_DOWN) {\n    DismissSheetAction.dismiss();// 注册dismiss行为\n  }\n}),\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同理可以结合onWillSpringBackWhenDismiss接口实现更好的下滑体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "类比onWillDismiss，在声明了onWillSpringBackWhenDismiss后，半模态下滑时的回弹操作需要使用 SpringBackAction.springBack()处理，无此逻辑则不会回弹。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体代码如下，在半模态下滑的时候无需回弹。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "onWillDismiss: ((DismissSheetAction: DismissSheetAction) => {\n  if (DismissSheetAction.reason === DismissReason.SLIDE_DOWN) {\n    DismissSheetAction.dismiss();// 注册dismiss行为\n  }\n}),\n\nonWillSpringBackWhenDismiss: ((SpringBackAction: SpringBackAction) => {\n// 没有注册springBack，下拉半模态页面无回弹行为\n}),\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "半模态支持避让中轴",
      children: "半模态支持避让中轴"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["半模态从API version 14开始支持中轴避让，当前在2in1设备默认开启（仅窗口处于瀑布模式时产生避让）中轴避让能力，且在2in1设备默认避让区域为上半屏。开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-sheet-transition/ts-universal-attributes-sheet-transition#sheetoptions",
        children: "SheetOptions"
      }), "的enableHoverMode主动设置是否避让中轴，及", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-sheet-transition/ts-universal-attributes-sheet-transition#sheetoptions",
        children: "SheetOptions"
      }), "的hoverModeArea设置避让中轴后显示区域。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["半模态中轴避让不支持控件子窗能力，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-sheet-transition/ts-universal-attributes-sheet-transition#sheetoptions",
          children: "SheetOptions"
        }), "中的showInSubWindow为true的场景。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "2in1设备上需同时满足窗口处于瀑布模式才会产生避让。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "完整示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct SheetTransitionExample {\n  @State isShow: boolean = false;\n  @State enableHoverMode: boolean = true;\n  @State hoverModeArea: HoverModeAreaType = HoverModeAreaType.TOP_SCREEN;\n\n  @Builder\n  myBuilder() {\n    Column() {\n      // 请将$r('app.string.bindSheetCmd_label10')替换为实际资源文件，在本示例中该资源文件的value值为\"enableHoverMode切换\"\n      Button($r('app.string.bindSheetCmd_label10'))\n        .margin(10)\n        .fontSize(20)\n        .onClick(() => {\n          this.enableHoverMode = !this.enableHoverMode;\n        })\n\n      // 请将$r('app.string.bindSheetCmd_label11')替换为实际资源文件，在本示例中该资源文件的value值为\"hoverModeArea切换\"\n      Button($r('app.string.bindSheetCmd_label11'))\n        .margin(10)\n        .fontSize(20)\n        .onClick(() => {\n          this.hoverModeArea = this.hoverModeArea === HoverModeAreaType.TOP_SCREEN ?\n            HoverModeAreaType.BOTTOM_SCREEN : HoverModeAreaType.TOP_SCREEN;\n        })\n\n      Button('close modal')\n        .margin(10)\n        .fontSize(20)\n        .onClick(() => {\n          this.isShow = false;\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n\n  build() {\n    Column() {\n      // 请将$r('app.string.bindSheetCmd_label9')替换为实际资源文件，在本示例中该资源文件的value值为\"拉起半模态\"\n      Button($r('app.string.bindSheetCmd_label9'))\n        .onClick(() => {\n          this.isShow = true;\n        })\n        .fontSize(20)\n        .margin(10)\n        .bindSheet($$this.isShow, this.myBuilder(), {\n          height: 300,\n          backgroundColor: Color.Green,\n          preferType: SheetType.CENTER,\n          enableHoverMode: this.enableHoverMode,\n          hoverModeArea: this.hoverModeArea\n        })\n    }\n    .justifyContent(FlexAlign.Center)\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(856459)/* ["default"] */.A) + "",
        width: "353",
        height: "512"
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
610933(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
28762(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477923-ebd8000c92a692387a8a6be217464127.png");

},
856459(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437969-ac6399d584f63dada88f252e6b49c95a.png");

},
954590(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798274-c4faa6378e9db4e69a1c9093f3c95f2d.png");

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