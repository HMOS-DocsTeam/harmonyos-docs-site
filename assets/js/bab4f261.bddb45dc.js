"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["876630"], {
204078(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_transition_arkts_modal_transition_arkts_modal_transition_md_bab_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-animation-arkts-animation-transition-arkts-modal-transition-arkts-modal-transition-md-bab.json
var site_docs_arkui_arkts_ui_development_arkts_use_animation_arkts_animation_transition_arkts_modal_transition_arkts_modal_transition_md_bab_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-modal-transition/arkts-modal-transition","title":"模态转场","description":"模态转场是新的界面覆盖在旧的界面上，旧的界面不消失的一种转场方式。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-modal-transition/arkts-modal-transition.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-modal-transition","slug":"/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-modal-transition/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-modal-transition/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"模态转场","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-modal-transition","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"出现/消失转场","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-enter-exit-transition/"},"next":{"title":"共享元素转场 (一镜到底)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-shared-element-transition/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-modal-transition/arkts-modal-transition.md


const frontMatter = {
	title: '模态转场',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-modal-transition',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '模态转场';

const assets = {

};



const toc = [{
  "value": "使用bindContentCover构建全屏模态转场效果",
  "id": "使用bindcontentcover构建全屏模态转场效果",
  "level": 2
}, {
  "value": "使用bindSheet构建半模态转场效果",
  "id": "使用bindsheet构建半模态转场效果",
  "level": 2
}, {
  "value": "使用bindMenu实现菜单弹出效果",
  "id": "使用bindmenu实现菜单弹出效果",
  "level": 2
}, {
  "value": "使用bindContextMenu实现菜单弹出效果",
  "id": "使用bindcontextmenu实现菜单弹出效果",
  "level": 2
}, {
  "value": "使用bindPopup实现气泡弹窗效果",
  "id": "使用bindpopup实现气泡弹窗效果",
  "level": 2
}, {
  "value": "使用if实现模态转场",
  "id": "使用if实现模态转场",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "模态转场",
        children: "模态转场"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "模态转场是新的界面覆盖在旧的界面上，旧的界面不消失的一种转场方式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 模态转场接口"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "使用场景"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-modal-transition/ts-universal-attributes-modal-transition#bindcontentcover",
              children: "bindContentCover"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弹出全屏的模态组件。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于自定义全屏的模态展示界面，结合转场动画和共享元素动画可实现复杂转场动画效果，如缩略图片点击后查看大图。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-sheet-transition/ts-universal-attributes-sheet-transition#bindsheet",
              children: "bindSheet"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弹出半模态组件。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于半模态展示界面，如分享框。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#bindmenu11",
              children: "bindMenu"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弹出菜单，点击组件后弹出。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要Menu菜单的场景，如一般应用的“+”号键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#bindcontextmenu12",
              children: "bindContextMenu"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弹出菜单，长按或者右键点击后弹出。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "长按浮起效果，一般结合拖拽框架使用，如桌面图标长按浮起。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-popup/ts-universal-attributes-popup#bindpopup",
              children: "bindPopup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "弹出Popup弹框。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Popup弹框场景，如点击后对某个组件进行临时说明。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-ifelse",
              children: "if"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过if新增或删除组件。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用来在某个状态下临时显示一个界面，这种方式的返回导航需要由开发者监听接口实现。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用bindcontentcover构建全屏模态转场效果",
      children: "使用bindContentCover构建全屏模态转场效果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-modal-transition/ts-universal-attributes-modal-transition#bindcontentcover",
        children: "bindContentCover"
      }), "接口用于为组件绑定全屏模态页面，在组件出现和消失时可通过设置转场参数ModalTransition添加过渡动效。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["定义全屏模态转场效果", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-modal-transition/ts-universal-attributes-modal-transition#bindcontentcover",
            children: "bindContentCover"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义模态展示界面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 通过@Builder构建模态展示界面\n@Builder MyBuilder() {\n  Column() {\n    Text('my model view')\n  }\n  // 通过转场动画实现出现消失转场动画效果，transition需要加在builder下的第一个组件\n  .transition(TransitionEffect.translate({ y: 1000 }).animation({ curve: curves.springMotion(0.6, 0.8) }))\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过模态接口调起模态展示界面，通过转场动画或者共享元素动画去实现对应的动画效果。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 模态转场控制变量\n@State isPresent: boolean = false;\n\nButton('Click to present model view')\n  // 通过选定的模态接口，绑定模态展示界面，ModalTransition是内置的ContentCover转场动画类型，这里选择None代表系统不加默认动画，通过onDisappear控制状态变量变换\n  .bindContentCover(this.isPresent, this.MyBuilder(), {\n            modalTransition: ModalTransition.NONE,\n            onDisappear: () => {\n              if (this.isPresent) {\n                this.isPresent = !this.isPresent;\n              }\n            }\n          })\n  .onClick(() => {\n    // 改变状态变量，显示模态界面\n    this.isPresent = !this.isPresent;\n  })\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "完整示例代码和效果如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { curves } from '@kit.ArkUI';\nimport { common } from '@kit.AbilityKit';\n\ninterface PersonList {\n  name: Resource,\n  cardNum: string\n}\n\n@Entry\n@Component\nstruct BindContentCoverDemo {\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  private personList: Array<PersonList> = [\n    // 请将$r('app.string.modal_transition_text1')替换为实际资源文件，在本示例中该资源文件的value值为\"王**\"\n    { name: $r('app.string.modal_transition_text1'), cardNum: '1234***********789' },\n    // 请将$r('app.string.modal_transition_text2')替换为实际资源文件，在本示例中该资源文件的value值为\"宋*\"\n    { name: $r('app.string.modal_transition_text2'), cardNum: '2345***********789' },\n    // 请将$r('app.string.modal_transition_text3')替换为实际资源文件，在本示例中该资源文件的value值为\"许**\"\n    { name: $r('app.string.modal_transition_text3'), cardNum: '3456***********789' },\n    // 请将$r('app.string.modal_transition_text4')替换为实际资源文件，在本示例中该资源文件的value值为\"唐*\"\n    { name: $r('app.string.modal_transition_text4'), cardNum: '4567***********789' }\n  ];\n  // 第一步：定义全屏模态转场效果bindContentCover\n  // 模态转场控制变量\n  @State isPresent: boolean = false;\n\n  // 第二步：定义模态展示界面\n  // 通过@Builder构建模态展示界面\n  @Builder\n  MyBuilder() {\n    Column() {\n      Row() {\n        // 请将$r('app.string.modal_transition_text5')替换为实际资源文件，在本示例中该资源文件的value值为\"选择乘车人\"\n        Text($r('app.string.modal_transition_text5'))\n          .fontSize(20)\n          .fontColor(Color.White)\n          .width('100%')\n          .textAlign(TextAlign.Center)\n          .padding({ top: 30, bottom: 15 })\n      }\n      .backgroundColor(0x007dfe)\n\n      Row() {\n        // 请将$r('app.string.modal_transition_text6')替换为实际资源文件，在本示例中该资源文件的value值为\"+ 添加乘车人\"\n        Text($r('app.string.modal_transition_text6'))\n          .fontSize(16)\n          .fontColor(0x333333)\n          .margin({ top: 10 })\n          .padding({ top: 20, bottom: 20 })\n          .width('92%')\n          .borderRadius(10)\n          .textAlign(TextAlign.Center)\n          .backgroundColor(Color.White)\n      }\n\n      Column() {\n        ForEach(this.personList, (item: PersonList, index: number) => {\n          Row() {\n            Column() {\n              if (index % 2 === 0) {\n                Column()\n                  .width(20)\n                  .height(20)\n                  .border({ width: 1, color: 0x007dfe })\n                  .backgroundColor(0x007dfe)\n              } else {\n                Column()\n                  .width(20)\n                  .height(20)\n                  .border({ width: 1, color: 0x007dfe })\n              }\n            }\n            .width('20%')\n\n            Column() {\n              Text(item.name)\n                .fontColor(0x333333)\n                .fontSize(18)\n              Text(item.cardNum)\n                .fontColor(0x666666)\n                .fontSize(14)\n            }\n            .width('60%')\n            .alignItems(HorizontalAlign.Start)\n\n            Column() {\n              // 请将$r('app.string.modal_transition_text7')替换为实际资源文件，在本示例中该资源文件的value值为\"编辑\"\n              Text($r('app.string.modal_transition_text7'))\n                .fontColor(0x007dfe)\n                .fontSize(16)\n            }\n            .width('20%')\n          }\n          .padding({ top: 10, bottom: 10 })\n          .border({ width: { bottom: 1 }, color: 0xf1f1f1 })\n          .width('92%')\n          .backgroundColor(Color.White)\n        })\n      }\n      .padding({ top: 20, bottom: 20 })\n      // 请将$r('app.string.modal_transition_text8')替换为实际资源文件，在本示例中该资源文件的value值为“确认”\n      Text($r('app.string.modal_transition_text8'))\n        .width('90%')\n        .height(40)\n        .textAlign(TextAlign.Center)\n        .borderRadius(10)\n        .fontColor(Color.White)\n        .backgroundColor(0x007dfe)\n        .onClick(() => {\n          this.isPresent = !this.isPresent;\n        })\n    }\n    .size({ width: '100%', height: '100%' })\n    .backgroundColor(0xf5f5f5)\n    // 通过转场动画实现出现消失转场动画效果\n    .transition(TransitionEffect.translate({ y: 1000 }).animation({ curve: curves.springMotion(0.6, 0.8) }))\n  }\n\n  build() {\n    Column() {\n      Row() {\n        // 请将$r('app.string.modal_transition_text9')替换为实际资源文件，在本示例中该资源文件的value值为\"确认订单\"\n        Text($r('app.string.modal_transition_text9'))\n          .fontSize(20)\n          .fontColor(Color.White)\n          .width('100%')\n          .textAlign(TextAlign.Center)\n          .padding({ top: 30, bottom: 60 })\n      }\n      .backgroundColor(0x007dfe)\n\n      Column() {\n        Row() {\n          Column() {\n            Text('00:25')\n            // 请将$r('app.string.modal_transition_text10')替换为实际资源文件，在本示例中该资源文件的value值为\"始发站\"\n            Text($r('app.string.modal_transition_text10'))\n          }\n          .width('30%')\n\n          Column() {\n            Text('G1234')\n            // 请将$r('app.string.modal_transition_text11')替换为实际资源文件，在本示例中该资源文件的value值为\"8时1分\"\n            Text($r('app.string.modal_transition_text11'))\n          }\n          .width('30%')\n\n          Column() {\n            Text('08:26')\n            // 请将$r('app.string.modal_transition_text12')替换为实际资源文件，在本示例中该资源文件的value值为\"终点站\"\n            Text($r('app.string.modal_transition_text12'))\n          }\n          .width('30%')\n        }\n      }\n      .width('92%')\n      .padding(15)\n      .margin({ top: -30 })\n      .backgroundColor(Color.White)\n      .shadow({ radius: 30, color: '#aaaaaa' })\n      .borderRadius(10)\n\n      Column() {\n        // 请将$r('app.string.modal_transition_text13')替换为实际资源文件，在本示例中该资源文件的value值为\"+ 选择乘车人\"\n        Text($r('app.string.modal_transition_text13'))\n          .fontSize(18)\n          .fontColor(Color.Orange)\n          .fontWeight(FontWeight.Bold)\n          .padding({ top: 10, bottom: 10 })\n          .width('60%')\n          .textAlign(TextAlign.Center)\n          .borderRadius(15)\n          // 通过选定的模态接口，绑定模态展示界面，ModalTransition是内置的ContentCover转场动画类型，\n          // 这里选择DEFAULT代表设置上下切换动画效果，通过onDisappear控制状态变量变换。\n          .bindContentCover(this.isPresent, this.MyBuilder(), {\n            modalTransition: ModalTransition.DEFAULT,\n            onDisappear: () => {\n              if (this.isPresent) {\n                this.isPresent = !this.isPresent;\n              }\n            }\n          })\n          .onClick(() => {\n            // 第三步：通过模态接口调起模态展示界面，通过转场动画或者共享元素动画去实现对应的动画效果\n            // 改变状态变量，显示模态界面\n            this.isPresent = !this.isPresent;\n          })\n      }\n      .padding({ top: 60 })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(788790)/* ["default"] */.A) + "",
        width: "353",
        height: "757"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用bindsheet构建半模态转场效果",
      children: "使用bindSheet构建半模态转场效果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-sheet-transition/ts-universal-attributes-sheet-transition#bindsheet",
        children: "bindSheet"
      }), "属性可为组件绑定半模态页面，在组件出现时可通过设置自定义或默认的内置高度确定半模态大小。构建半模态转场动效的步骤基本与使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-modal-transition/ts-universal-attributes-modal-transition#bindcontentcover",
        children: "bindContentCover"
      }), "构建全屏模态转场动效相同。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "完整示例和效果如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct BindSheetDemo {\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  // 半模态转场显示隐藏控制\n  @State isShowSheet: boolean = false;\n  // 请将$r('app.string.modal_transition_text14')替换为实际资源文件，在本示例中该资源文件的value值为\"不要辣\"\n  private menuList: Resource[] = [$r('app.string.modal_transition_text14'),\n    // 请将$r('app.string.modal_transition_text15')替换为实际资源文件，在本示例中该资源文件的value值为\"少放辣\"\n    $r('app.string.modal_transition_text15'),\n    // 请将$r('app.string.modal_transition_text16')替换为实际资源文件，在本示例中该资源文件的value值为\"多放辣\"\n    $r('app.string.modal_transition_text16'),\n    // 请将$r('app.string.modal_transition_text17')替换为实际资源文件，在本示例中该资源文件的value值为\"不要香菜\"\n    $r('app.string.modal_transition_text17'),\n    // 请将$r('app.string.modal_transition_text18')替换为实际资源文件，在本示例中该资源文件的value值为\"不要香葱\"\n    $r('app.string.modal_transition_text18'),\n    // 请将$r('app.string.modal_transition_text19')替换为实际资源文件，在本示例中该资源文件的value值为\"不要一次性餐具\"\n    $r('app.string.modal_transition_text19'),\n    // 请将$r('app.string.modal_transition_text20')替换为实际资源文件，在本示例中该资源文件的value值为\"需要一次性餐具\"\n    $r('app.string.modal_transition_text20')];\n\n  // 通过@Builder构建半模态展示界面\n  @Builder\n  mySheet() {\n    Column() {\n      Flex({ direction: FlexDirection.Row, wrap: FlexWrap.Wrap }) {\n        ForEach(this.menuList, (item: string) => {\n          Text(item)\n            .fontSize(16)\n            .fontColor(0x333333)\n            .backgroundColor(0xf1f1f1)\n            .borderRadius(8)\n            .margin(10)\n            .padding(15)\n        })\n      }\n      .padding({ top: 18 })\n    }\n    .width('100%')\n    .height('100%')\n    .backgroundColor(Color.White)\n  }\n\n  build() {\n    Column() {\n      // 请将$r('app.string.modal_transition_text21')替换为实际资源文件，在本示例中该资源文件的value值为\"口味与餐具\"\n      Text($r('app.string.modal_transition_text21'))\n        .fontSize(28)\n        .padding({ top: 30, bottom: 30 })\n      Column() {\n        Row() {\n          Row()\n            .width(10)\n            .height(10)\n            .backgroundColor('#a8a8a8')\n            .margin({ right: 12 })\n            .borderRadius(20)\n\n          Column() {\n            // 请将$r('app.string.modal_transition_text22')替换为实际资源文件，在本示例中该资源文件的value值为\"选择点餐口味和餐具\"\n            Text($r('app.string.modal_transition_text22'))\n              .fontSize(16)\n              .fontWeight(FontWeight.Medium)\n          }\n          .alignItems(HorizontalAlign.Start)\n\n          Blank()\n\n          Row()\n            .width(12)\n            .height(12)\n            .margin({ right: 15 })\n            .border({\n              width: { top: 2, right: 2 },\n              color: 0xcccccc\n            })\n            .rotate({ angle: 45 })\n        }\n        .borderRadius(15)\n        .shadow({ radius: 100, color: '#ededed' })\n        .width('90%')\n        .alignItems(VerticalAlign.Center)\n        .padding({ left: 15, top: 15, bottom: 15 })\n        .backgroundColor(Color.White)\n        // 通过选定的半模态接口，绑定模态展示界面，style中包含两个参数，一个是设置半模态的高度，不设置时默认高度是Large，\n        // 一个是是否显示控制条DragBar，默认是true显示控制条，通过onDisappear控制状态变量变换。\n        .bindSheet(this.isShowSheet, this.mySheet(), {\n          height: 300,\n          dragBar: false,\n          onDisappear: () => {\n            this.isShowSheet = !this.isShowSheet;\n          }\n        })\n        .onClick(() => {\n          this.isShowSheet = !this.isShowSheet;\n        })\n      }\n      .width('100%')\n    }\n    .width('100%')\n    .height('100%')\n    .backgroundColor(0xf1f1f1)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(378059)/* ["default"] */.A) + "",
        width: "354",
        height: "679"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用bindmenu实现菜单弹出效果",
      children: "使用bindMenu实现菜单弹出效果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#bindmenu",
        children: "bindMenu"
      }), "为组件绑定弹出式菜单，通过点击触发。完整示例和效果如下。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0xF811;\nconst TAG = '[Sample_Animation]';\n\nclass BMD {\n  public value: ResourceStr = '';\n  public action: () => void = () => {\n  };\n}\n\n@Entry\n@Component\nstruct BindMenuDemo {\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  // 第一步: 定义一组数据用来表示菜单按钮项\n  @State items: BMD[] = [\n    {\n      // 请将$r('app.string.modal_transition_text23')替换为实际资源文件，在本示例中该资源文件的value值为\"菜单项1\"\n      value: $r('app.string.modal_transition_text23'),\n      action: () => {\n        hilog.info(DOMAIN, TAG, 'handle Menu1 select');\n      }\n    },\n    {\n      // 请将$r('app.string.modal_transition_text24')替换为实际资源文件，在本示例中该资源文件的value值为\"菜单项2\"\n      value: $r('app.string.modal_transition_text24'),\n      action: () => {\n        hilog.info(DOMAIN, TAG, 'handle Menu2 select');\n      }\n    },\n  ]\n\n  build() {\n    Column() {\n      Button('click')\n        .backgroundColor(0x409eff)\n        // 第二步: 通过bindMenu接口将菜单数据绑定给元素\n        .bindMenu(this.items)\n    }\n    .justifyContent(FlexAlign.Center)\n    .width('100%')\n    .height(437)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(296761)/* ["default"] */.A) + "",
        width: "370",
        height: "275"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用bindcontextmenu实现菜单弹出效果",
      children: "使用bindContextMenu实现菜单弹出效果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-menu/ts-universal-attributes-menu#bindcontextmenu8",
        children: "bindContextMenu"
      }), "为组件绑定弹出式菜单，通过长按或右键点击触发。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "完整示例和效果如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct BindContextMenuDemo {\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  // 请将$r('app.string.modal_transition_text25')替换为实际资源文件，在本示例中该资源文件的value值为\"保存图片\"\n  private menu: Resource[] = [$r('app.string.modal_transition_text25'),\n    // 请将$r('app.string.modal_transition_text26')替换为实际资源文件，在本示例中该资源文件的value值为\"收藏\"\n    $r('app.string.modal_transition_text26'),\n    // 请将$r('app.string.modal_transition_text27')替换为实际资源文件，在本示例中该资源文件的value值为\"搜一搜\"\n    $r('app.string.modal_transition_text27')];\n  // 请将$r('app.media.icon_2')替换为实际资源文件\n  private pics: Resource[] = [$r('app.media.icon_1'), $r('app.media.icon_2')];\n\n  // 通过@Builder构建自定义菜单项\n  @Builder\n  myMenu() {\n    Column() {\n      ForEach(this.menu, (item: string) => {\n        Row() {\n          Text(item)\n            .fontSize(18)\n            .width('100%')\n            .textAlign(TextAlign.Center)\n        }\n        .padding(15)\n        .border({ width: { bottom: 1 }, color: 0xcccccc })\n      })\n    }\n    .width(140)\n    .borderRadius(15)\n    .shadow({ radius: 15, color: 0xf1f1f1 })\n    .backgroundColor(0xf1f1f1)\n  }\n\n  build() {\n    Column() {\n      Row() {\n        // 请将$r('app.string.modal_transition_text28')替换为实际资源文件，在本示例中该资源文件的value值为\"查看图片\"\n        Text($r('app.string.modal_transition_text28'))\n          .fontSize(20)\n          .fontColor(Color.White)\n          .width('100%')\n          .textAlign(TextAlign.Center)\n          .padding({ top: 20, bottom: 20 })\n      }\n      .backgroundColor(0x007dfe)\n\n      Column() {\n        ForEach(this.pics, (item: Resource) => {\n          Row() {\n            Image(item)\n              .width('100%')\n              .draggable(false)\n          }\n          .padding({\n            top: 20,\n            bottom: 20,\n            left: 10,\n            right: 10\n          })\n          .bindContextMenu(this.myMenu, ResponseType.LongPress)\n        })\n      }\n    }\n    .width('100%')\n    .alignItems(HorizontalAlign.Center)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(549220)/* ["default"] */.A) + "",
        width: "336",
        height: "618"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用bindpopup实现气泡弹窗效果",
      children: "使用bindPopup实现气泡弹窗效果"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/popup-property/ts-universal-attributes-popup/ts-universal-attributes-popup#bindpopup",
        children: "bindPopup"
      }), "属性可为组件绑定弹窗，并设置弹窗内容，交互逻辑和显示状态。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "完整示例和代码如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct BindPopupDemo {\n  // 第一步：定义变量控制弹窗显示\n  @State customPopup: boolean = false;\n\n  // 第二步：popup构造器定义弹框内容\n  @Builder\n  popupBuilder() {\n    Column({ space: 2 }) {\n      Row().width(64)\n        .height(64)\n        .backgroundColor(0x409eff)\n      Text('Popup')\n        .fontSize(10)\n        .fontColor(Color.White)\n    }\n    .justifyContent(FlexAlign.SpaceAround)\n    .width(100)\n    .height(100)\n    .padding(5)\n  }\n\n  build() {\n    Column() {\n\n      Button('click')\n      // 第四步：创建点击事件，控制弹窗显隐\n        .onClick(() => {\n          this.customPopup = !this.customPopup;\n        })\n        .backgroundColor(0xf56c6c)\n        // 第三步：使用bindPopup接口将弹窗内容绑定给元素\n        .bindPopup(this.customPopup, {\n          builder: this.popupBuilder,\n          placement: Placement.Top,\n          maskColor: 0x33000000,\n          popupColor: 0xf56c6c,\n          enableArrow: true,\n          onStateChange: (e) => {\n            if (!e.isVisible) {\n              this.customPopup = false;\n            }\n          }\n        })\n    }\n    .justifyContent(FlexAlign.Center)\n    .width('100%')\n    .height(437)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(887983)/* ["default"] */.A) + "",
        width: "368",
        height: "270"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用if实现模态转场",
      children: "使用if实现模态转场"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述模态转场接口需要绑定到其他组件上，通过监听状态变量改变调起模态界面。同时，也可以通过if范式，通过新增/删除组件实现模态转场效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "完整示例和代码如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct ModalTransitionWithIf {\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  // 请在resources\\base\\element\\string.json文件中配置name为'modal_transition_text29'，value为非空字符串的资源\n  private listArr: ResourceStr[] = ['WLAN', this.context.resourceManager.getStringByNameSync('modal_transition_text29'),\n    // 请在resources\\base\\element\\string.json文件中配置name为'modal_transition_text30'，value为非空字符串的资源\n    this.context.resourceManager.getStringByNameSync('modal_transition_text30'),\n    // 请在resources\\base\\element\\string.json文件中配置name为'modal_transition_text31'，value为非空字符串的资源\n    this.context.resourceManager.getStringByNameSync('modal_transition_text31')];\n  // 请在resources\\base\\element\\string.json文件中配置name为'modal_transition_text32'，value为非空字符串的资源\n  private shareArr: ResourceStr[] = [this.context.resourceManager.getStringByNameSync('modal_transition_text32'),\n    // 请在resources\\base\\element\\string.json文件中配置name为'modal_transition_text33'，value为非空字符串的资源\n    this.context.resourceManager.getStringByNameSync('modal_transition_text33'), 'VPN',\n    // 请在resources\\base\\element\\string.json文件中配置name为'modal_transition_text34'，value为非空字符串的资源\n    this.context.resourceManager.getStringByNameSync('modal_transition_text34'), 'NFC'];\n  // 第一步：定义状态变量控制页面显示\n  @State isShowShare: boolean = false;\n\n  private shareFunc(): void {\n    this.getUIContext()?.animateTo({ duration: 500 }, () => {\n      this.isShowShare = !this.isShowShare;\n    })\n  }\n\n  build() {\n    // 第二步：定义Stack布局显示当前页面和模态页面\n    Stack() {\n      Column() {\n        Column() {\n          // 请将$r('app.string.modal_transition_text35')替换为实际资源文件，在本示例中该资源文件的value值为“设置”\n          Text($r('app.string.modal_transition_text35'))\n            .fontSize(28)\n            .fontColor(0x333333)\n        }\n        .width('90%')\n        .padding({ top: 30, bottom: 15 })\n        .alignItems(HorizontalAlign.Start)\n        // 请将$r('app.string.modal_transition_text36')替换为实际资源文件，在本示例中该资源文件的value值为“输入关键字搜索”\n        TextInput({ placeholder: $r('app.string.modal_transition_text36') })\n          .width('90%')\n          .height(40)\n          .margin({ bottom: 10 })\n          .focusable(false)\n\n        List({ space: 12, initialIndex: 0 }) {\n          ForEach(this.listArr, (item: string, index: number) => {\n            ListItem() {\n              Row() {\n                Row() {\n                  Text(`${item.slice(0, 1)}`)\n                    .fontColor(Color.White)\n                    .fontSize(14)\n                    .fontWeight(FontWeight.Bold)\n                }\n                .width(30)\n                .height(30)\n                .backgroundColor('#a8a8a8')\n                .margin({ right: 12 })\n                .borderRadius(20)\n                .justifyContent(FlexAlign.Center)\n\n                Column() {\n                  Text(item)\n                    .fontSize(16)\n                    .fontWeight(FontWeight.Medium)\n                }\n                .alignItems(HorizontalAlign.Start)\n\n                Blank()\n\n                Row()\n                  .width(12)\n                  .height(12)\n                  .margin({ right: 15 })\n                  .border({\n                    width: { top: 2, right: 2 },\n                    color: 0xcccccc\n                  })\n                  .rotate({ angle: 45 })\n              }\n              .borderRadius(15)\n              .shadow({ radius: 100, color: '#ededed' })\n              .width('90%')\n              .alignItems(VerticalAlign.Center)\n              .padding({ left: 15, top: 15, bottom: 15 })\n              .backgroundColor(Color.White)\n            }\n            .width('100%')\n            .onClick(() => {\n              // 第五步：改变状态变量，显示模态页面\n              // 请在resources\\base\\element\\string.json文件中配置name为'modal_transition_text37'，value为非空字符串的资源\n              if (item.slice(-2) === this.context.resourceManager.getStringByNameSync('modal_transition_text37')) {\n                this.shareFunc();\n              }\n            })\n          }, (item: string): string => item)\n        }\n        .width('100%')\n      }\n      .width('100%')\n      .height('100%')\n      .backgroundColor(0xfefefe)\n\n      // 第三步：在if中定义模态页面，显示在最上层，通过if控制模态页面出现消失\n      if (this.isShowShare) {\n        Column() {\n          Column() {\n            Row() {\n              Row() {\n                Row()\n                  .width(16)\n                  .height(16)\n                  .border({\n                    width: { left: 2, top: 2 },\n                    color: 0x333333\n                  })\n                  .rotate({ angle: -45 })\n              }\n              .padding({ left: 15, right: 10 })\n              .onClick(() => {\n                this.shareFunc();\n              })\n              // 请将$r('app.string.modal_transition_text31')替换为实际资源文件，在本示例中该资源文件的value值为“连接与共享”\n              Text($r('app.string.modal_transition_text31'))\n                .fontSize(28)\n                .fontColor(0x333333)\n            }\n            .padding({ top: 30 })\n          }\n          .width('90%')\n          .padding({ bottom: 15 })\n          .alignItems(HorizontalAlign.Start)\n\n          List({ space: 12, initialIndex: 0 }) {\n            ForEach(this.shareArr, (item: string) => {\n              ListItem() {\n                Row() {\n                  Row() {\n                    Text(`${item.slice(0, 1)}`)\n                      .fontColor(Color.White)\n                      .fontSize(14)\n                      .fontWeight(FontWeight.Bold)\n                  }\n                  .width(30)\n                  .height(30)\n                  .backgroundColor('#a8a8a8')\n                  .margin({ right: 12 })\n                  .borderRadius(20)\n                  .justifyContent(FlexAlign.Center)\n\n                  Column() {\n                    Text(item)\n                      .fontSize(16)\n                      .fontWeight(FontWeight.Medium)\n                  }\n                  .alignItems(HorizontalAlign.Start)\n\n                  Blank()\n\n                  Row()\n                    .width(12)\n                    .height(12)\n                    .margin({ right: 15 })\n                    .border({\n                      width: { top: 2, right: 2 },\n                      color: 0xcccccc\n                    })\n                    .rotate({ angle: 45 })\n                }\n                .borderRadius(15)\n                .shadow({ radius: 100, color: '#ededed' })\n                .width('90%')\n                .alignItems(VerticalAlign.Center)\n                .padding({ left: 15, top: 15, bottom: 15 })\n                .backgroundColor(Color.White)\n              }\n              .width('100%')\n            }, (item: string): string => item)\n          }\n          .width('100%')\n        }\n        .width('100%')\n        .height('100%')\n        .backgroundColor(0xffffff)\n        // 第四步：定义模态页面出现消失转场方式\n        .transition(TransitionEffect.OPACITY\n          .combine(TransitionEffect.translate({ x: '100%' }))\n          .combine(TransitionEffect.scale({ x: 0.95, y: 0.95 })))\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(357022)/* ["default"] */.A) + "",
        width: "353",
        height: "757"
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
887983(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438031-0da9f1ddbda8716b36d99126ec490ffb.gif");

},
788790(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438029-6b644c304daffae9b7230c13dff33628.gif");

},
378059(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957984-0381a91ae180708882f42c10d1f02f95.gif");

},
549220(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798336-ec95ec76fdc7f56a26005d2e883813ff.gif");

},
357022(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957986-d94bbef1e171752d017bf2abe0ee12a3.gif");

},
296761(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477985-1721c8316d6be42245c0b06a9d88341a.gif");

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