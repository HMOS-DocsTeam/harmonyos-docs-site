"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["891186"], {
671715(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_use_dialog_arkts_bind_modal_arkts_contentcover_page_arkts_contentcover_page_md_487_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-use-dialog-arkts-bind-modal-arkts-contentcover-page-arkts-contentcover-page-md-487.json
var site_docs_arkui_arkts_ui_development_arkts_use_dialog_arkts_bind_modal_arkts_contentcover_page_arkts_contentcover_page_md_487_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-use-dialog/arkts-bind-modal/arkts-contentcover-page/arkts-contentcover-page","title":"绑定全模态页面（bindContentCover）","description":"全模态页面（bindContentCover）是全屏模态形式的弹窗交互页面，完全覆盖底层父视图。适用于查看大图，全屏查看文稿等场景。","source":"@site/docs/arkui/arkts-ui-development/arkts-use-dialog/arkts-bind-modal/arkts-contentcover-page/arkts-contentcover-page.md","sourceDirName":"arkui/arkts-ui-development/arkts-use-dialog/arkts-bind-modal/arkts-contentcover-page","slug":"/arkui/arkts-ui-development/arkts-use-dialog/arkts-bind-modal/arkts-contentcover-page/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-bind-modal/arkts-contentcover-page/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"绑定全模态页面（bindContentCover）","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-contentcover-page","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"绑定半模态页面（bindSheet）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-bind-modal/arkts-sheet-page/"},"next":{"title":"即时反馈（Toast）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-use-dialog/arkts-create-toast/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-use-dialog/arkts-bind-modal/arkts-contentcover-page/arkts-contentcover-page.md


const frontMatter = {
	title: '绑定全模态页面（bindContentCover）',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-contentcover-page',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '绑定全模态页面（bindContentCover）';

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
  "value": "使用bindContentCover构建全屏模态内容覆盖半模态",
  "id": "使用bindcontentcover构建全屏模态内容覆盖半模态",
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
        id: "绑定全模态页面bindcontentcover",
        children: "绑定全模态页面（bindContentCover）"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/transition/ts-universal-attributes-modal-transition/ts-universal-attributes-modal-transition#bindcontentcover",
        children: "全模态页面（bindContentCover）"
      }), "是全屏模态形式的弹窗交互页面，完全覆盖底层父视图。适用于查看大图，全屏查看文稿等场景。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用约束",
      children: "使用约束"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "全模态页面本质上是弹窗类组件，其交互层级默认为应用内顶层。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
        children: "Navigation"
      }), "导航转场时，新push的页面层级无法超出全模态，其效果仍然显示在模态页面之下。针对此类场景，建议将模态页面的内容迁移至转场页面中实现。例如，在上述情况下，可以使用NavDestination来替代拉起的模态页面，新push的页面层级低于全模态。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "生命周期",
      children: "生命周期"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "全模态页面提供了生命周期函数，用于通知应用程序该弹窗的生命周期状态。生命周期的触发顺序依次为：onWillAppear -> onAppear -> onWillDisappear -> onDisappear。"
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
            children: "全模态页面显示（动画开始前）回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onAppear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "全模态页面显示（动画结束后）回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onWillDisappear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "全模态页面回退（动画开始前）回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onDisappear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "全模态页面回退（动画结束后）回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用bindcontentcover构建全屏模态内容覆盖半模态",
      children: "使用bindContentCover构建全屏模态内容覆盖半模态"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "全模态与半模态之间存在弹窗式的层级交互。后拉起的模态页面能够覆盖先前的模态页面。若开发者期望实现全屏转场，以覆盖半模态，并在全屏页面侧滑退出后，半模态页面仍保持显示，使用bindSheet结合bindContentCover将满足这一场景诉求。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-transition/arkts-modal-transition#%E4%BD%BF%E7%94%A8bindcontentcover%E6%9E%84%E5%BB%BA%E5%85%A8%E5%B1%8F%E6%A8%A1%E6%80%81%E8%BD%AC%E5%9C%BA%E6%95%88%E6%9E%9C",
        children: "模态转场"
      }), "章节，了解使用bindContentCover构建全屏模态转场效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { curves } from '@kit.ArkUI';\nimport { common } from '@kit.AbilityKit';\n\ninterface PersonList {\n  name: string,\n  cardNum: string\n}\n\n@Entry\n@Component\nstruct BindContentCoverDemo {\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  private manager = this.context.resourceManager;\n  private personList: Array<PersonList> = [\n    // 'Person_example1'资源文件中的value值为'王**'\n    { name: this.manager.getStringByNameSync('Person_example1'), cardNum: '1234***********789' },\n    // 'Person_example2'资源文件中的value值为'宋*'\n    { name: this.manager.getStringByNameSync('Person_example2'), cardNum: '2345***********789' },\n    // 'Person_example3'资源文件中的value值为'许**'\n    { name: this.manager.getStringByNameSync('Person_example3'), cardNum: '3456***********789' },\n    // 'Person_example4'资源文件中的value值为'唐*'\n    { name: this.manager.getStringByNameSync('Person_example4'), cardNum: '4567***********789' }\n  ];\n  // 半模态转场控制变量\n  @State isSheetShow: boolean = false;\n  // 全模态转场控制变量\n  @State isPresent: boolean = false;\n\n  @Builder\n  MyContentCoverBuilder() {\n    Column() {\n      Row() {\n        // 请将$r('app.string.Text_choose_person')替换为实际资源文件，在本示例中该资源文件的value值为\"选择乘车人\"\n        Text($r('app.string.Text_choose_person'))\n          .fontSize(20)\n          .fontColor(Color.White)\n          .width('100%')\n          .textAlign(TextAlign.Center)\n          .padding({ top: 30, bottom: 15 })\n      }\n      .backgroundColor(0x007dfe)\n\n      Row() {\n        // 请将$r('app.string.Text_add_person')替换为实际资源文件，在本示例中该资源文件的value值为\"+ 添加乘车人\"\n        Text($r('app.string.Text_add_person'))\n          .fontSize(16)\n          .fontColor(0x333333)\n          .margin({ top: 10 })\n          .padding({ top: 20, bottom: 20 })\n          .width('92%')\n          .borderRadius(10)\n          .textAlign(TextAlign.Center)\n          .backgroundColor(Color.White)\n      }\n\n      Column() {\n        ForEach(this.personList, (item: PersonList, index: number) => {\n          Row() {\n            Column() {\n              if (index % 2 == 0) {\n                Column()\n                  .width(20)\n                  .height(20)\n                  .border({ width: 1, color: 0x007dfe })\n                  .backgroundColor(0x007dfe)\n              } else {\n                Column()\n                  .width(20)\n                  .height(20)\n                  .border({ width: 1, color: 0x007dfe })\n              }\n            }\n            .width('20%')\n\n            Column() {\n              Text(item.name)\n                .fontColor(0x333333)\n                .fontSize(18)\n              Text(item.cardNum)\n                .fontColor(0x666666)\n                .fontSize(14)\n            }\n            .width('60%')\n            .alignItems(HorizontalAlign.Start)\n\n            Column() {\n              // 请将$r('app.string.Text_edit')替换为实际资源文件，在本示例中该资源文件的value值为\"编辑\"\n              Text($r('app.string.Text_edit'))\n                .fontColor(0x007dfe)\n                .fontSize(16)\n            }\n            .width('20%')\n          }\n          .padding({ top: 10, bottom: 10 })\n          .border({ width: { bottom: 1 }, color: 0xf1f1f1 })\n          .width('92%')\n          .backgroundColor(Color.White)\n        })\n      }\n      .padding({ top: 20, bottom: 20 })\n\n      // 请将$r('app.string.Text_confirm')替换为实际资源文件，在本示例中该资源文件的value值为\"确认\"\n      Text($r('app.string.Text_confirm'))\n        .width('90%')\n        .height(40)\n        .textAlign(TextAlign.Center)\n        .borderRadius(10)\n        .fontColor(Color.White)\n        .backgroundColor(0x007dfe)\n        .onClick(() => {\n          this.isPresent = !this.isPresent;\n        })\n    }\n    .size({ width: '100%', height: '100%' })\n    .backgroundColor(0xf5f5f5)\n  }\n\n  @Builder\n  TripInfo() {\n    Row() {\n      Column() {\n        Text('00:25')\n        // 请将$r('app.string.Label_origin_station')替换为实际资源文件，在本示例中该资源文件的value值为\"始发站\"\n        Text($r('app.string.Label_origin_station'))\n      }\n      .width('25%')\n\n      Column() {\n        Text('G1234')\n        // 请将$r('app.string.Label_start_time')替换为实际资源文件，在本示例中该资源文件的value值为\"8时1分\"\n        Text($r('app.string.Label_start_time'))\n      }\n      .width('25%')\n\n      Column() {\n        Text('08:26')\n        // 请将$r('app.string.Label_destination_station')替换为实际资源文件，在本示例中该资源文件的value值为\"终点站\"\n        Text($r('app.string.Label_destination_station'))\n      }\n      .width('25%')\n    }\n  }\n\n  // 第二步：定义半模态展示界面\n  // 通过@Builder构建模态展示界面\n  @Builder\n  MySheetBuilder() {\n    Column() {\n      Column() {\n        this.TripInfo()\n      }\n      .width('92%')\n      .margin(15)\n      .backgroundColor(Color.White)\n      .shadow({ radius: 30, color: '#aaaaaa' })\n      .borderRadius(10)\n\n      Column() {\n        // 请将$r('app.string.Sheet_choose_person')替换为实际资源文件，在本示例中该资源文件的value值为\"+ 选择乘车人\"\n        Text($r('app.string.Sheet_choose_person'))\n          .fontSize(18)\n          .fontColor(Color.Orange)\n          .fontWeight(FontWeight.Bold)\n          .padding({ top: 10, bottom: 10 })\n          .width('60%')\n          .textAlign(TextAlign.Center)\n          .borderRadius(15)\n          .onClick(() => {\n            // 第三步：通过全模态接口调起全模态展示界面，新拉起的模态面板默认显示在最上层\n            this.isPresent = !this.isPresent;\n          })\n          // 通过全模态接口，绑定模态展示界面MyContentCoverBuilder。transition属性支持自定义转场效果，此处定义了x轴横向入场\n          .bindContentCover($$this.isPresent, this.MyContentCoverBuilder(), {\n            transition: TransitionEffect.translate({ x: 500 }).animation({ curve: curves.springMotion(0.6, 0.8) })\n          })\n      }\n      .padding({ top: 60 })\n    }\n  }\n\n  build() {\n    Column() {\n      Row() {\n        this.TripInfo()\n        // 请将$r('app.string.Sheet_tickets_available')替换为实际资源文件，在本示例中该资源文件的value值为\"有票\"\n        Text($r('app.string.Sheet_tickets_available'))\n          .fontColor(Color.Blue)\n          .width('25%')\n      }\n      .width('100%')\n      .margin({top: 200, bottom: 30})\n      .borderRadius(10)\n      .backgroundColor(Color.White)\n      .onClick(()=>{\n        this.isSheetShow = !this.isSheetShow;\n      })\n      // 第一步：定义半模态转场效果\n      .bindSheet($$this.isSheetShow, this.MySheetBuilder(), {\n        height: SheetSize.MEDIUM,\n        // 请将$r('app.string.Text_confirm_order')替换为实际资源文件，在本示例中该资源文件的value值为\"确认订单\"\n        title: {title: $r('app.string.Text_confirm_order')},\n      })\n    }\n    .width('100%')\n    .height('100%')\n    .backgroundColor('#30aaaaaa')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(119460)/* ["default"] */.A) + "",
        width: "308",
        height: "603"
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
119460(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957924-fbd2913b8423470b769b4a4f59dfdb75.gif");

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