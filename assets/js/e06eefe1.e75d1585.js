"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["610789"], {
820730(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_list_and_grid_arkts_layout_development_create_arclist_arkts_layout_development_create_arclist_md_e06_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-list-and-grid-arkts-layout-development-create-arclist-arkts-layout-development-create-arclist-md-e06.json
var site_docs_arkui_arkts_ui_development_arkts_list_and_grid_arkts_layout_development_create_arclist_arkts_layout_development_create_arclist_md_e06_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-arclist/arkts-layout-development-create-arclist","title":"弧形列表 (ArcList)（圆形屏幕推荐使用）","description":"从API version 18开始支持弧形列表。弧形列表是一种专为圆形屏幕设备设计的特殊列表，它能够以结构化、可滚动的形式高效展示信息。具体用法可参考ArcList。","source":"@site/docs/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-arclist/arkts-layout-development-create-arclist.md","sourceDirName":"arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-arclist","slug":"/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-arclist/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-arclist/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"弧形列表 (ArcList)（圆形屏幕推荐使用）","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-create-arclist","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"创建列表 (List)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-list/"},"next":{"title":"创建网格 (Grid/GridItem)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-grid/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-arclist/arkts-layout-development-create-arclist.md


const frontMatter = {
	title: '弧形列表 (ArcList)（圆形屏幕推荐使用）',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-create-arclist',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '弧形列表 (ArcList)（圆形屏幕推荐使用）';

const assets = {

};



const toc = [{
  "value": "创建弧形列表",
  "id": "创建弧形列表",
  "level": 2
}, {
  "value": "在弧形列表中显示数据",
  "id": "在弧形列表中显示数据",
  "level": 2
}, {
  "value": "迭代弧形列表内容",
  "id": "迭代弧形列表内容",
  "level": 2
}, {
  "value": "自定义弧形列表样式",
  "id": "自定义弧形列表样式",
  "level": 2
}, {
  "value": "自定义弧形列表标题",
  "id": "自定义弧形列表标题",
  "level": 3
}, {
  "value": "设置弧形列表项间距",
  "id": "设置弧形列表项间距",
  "level": 3
}, {
  "value": "列表项关闭自动缩放",
  "id": "列表项关闭自动缩放",
  "level": 3
}, {
  "value": "添加内置滚动条",
  "id": "添加内置滚动条",
  "level": 3
}, {
  "value": "添加外置滚动条ArcScrollBar",
  "id": "添加外置滚动条arcscrollbar",
  "level": 2
}, {
  "value": "与弧形索引条ArcAlphabetIndexer联动",
  "id": "与弧形索引条arcalphabetindexer联动",
  "level": 2
}, {
  "value": "响应列表项侧滑",
  "id": "响应列表项侧滑",
  "level": 2
}, {
  "value": "处理长列表",
  "id": "处理长列表",
  "level": 2
}, {
  "value": "响应旋转表冠",
  "id": "响应旋转表冠",
  "level": 2
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "弧形列表-arclist圆形屏幕推荐使用",
        children: "弧形列表 (ArcList)（圆形屏幕推荐使用）"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 18开始支持弧形列表。弧形列表是一种专为圆形屏幕设备设计的特殊列表，它能够以结构化、可滚动的形式高效展示信息。具体用法可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist",
        children: "ArcList"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用弧形列表可以通过在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist",
        children: "ArcList"
      }), "组件中按垂直方向线性排列子组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclistitem/ts-container-arclistitem",
        children: "ArcListItem"
      }), "，可以为弧形列表中的每一项提供独立视图。此外，可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach",
        children: "循环渲染"
      }), "来迭代一组列表项，或结合任意数量的单个视图与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach",
        children: "ForEach"
      }), "结构，构建复杂的弧形列表。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist",
        children: "ArcList"
      }), "组件支持多种", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-overview",
        children: "渲染控制"
      }), "方式，包括条件渲染、循环渲染和懒加载，以生成子组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建弧形列表",
      children: "创建弧形列表"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist",
        children: "ArcList"
      }), "可通过调用以下接口来创建。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArcList({\n  initialIndex: 2\n}) {\n  ArcListItem() {\n    // ···\n  }\n  ArcListItem() {\n    // ···\n  }\n// ···\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(264965)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist",
        children: "ArcList"
      }), "的子组件必须是", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclistitem/ts-container-arclistitem",
        children: "ArcListItem"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclistitem/ts-container-arclistitem",
        children: "ArcListItem"
      }), "必须配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist",
        children: "ArcList"
      }), "来使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在弧形列表中显示数据",
      children: "在弧形列表中显示数据"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["弧形列表视图垂直展示项目集合，当列表项超出屏幕范围时，提供滚动功能，这使得它非常适合展示大型数据集合。在最简单的弧形列表形式中，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist",
        children: "ArcList"
      }), "静态创建其列表项", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclistitem/ts-container-arclistitem",
        children: "ArcListItem"
      }), "的内容。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ArcList, ArcListItem, ArcListAttribute, ArcListItemAttribute, LengthMetrics } from '@kit.ArkUI';\n\n@Entry\n@Component\nexport struct ArcListShow {\n  build() {\n    NavDestination() {\n      Column({ space: 12 }) {\n        // ...\n          ArcList({ initialIndex: 2 }) {\n            ArcListItem() {\n              Row() {\n                Image($r('app.media.wlan')).width('99px').height('99px')\n                  .borderRadius('50px').margin({ left: 7 })\n                Column() {\n                  Text($r('app.string.ArcListStyles_waln')).fontSize('38px').fontColor('#FFFFFFFF')\n                  Text($r('app.string.ArcListStyles_open')).fontSize('20px').fontColor('#FFFFFFFF')\n                }.width('190px')\n\n                Image($r('app.media.ic_settings_arrow')).width('92px').height('92px')\n                  .borderRadius('50px')\n              }\n            }\n            .borderRadius('65px')\n            .width('414px')\n            .height('129px')\n            .backgroundColor('#26FFFFFF')\n\n            ArcListItem() {\n              Row() {\n                Image($r('app.media.blueTooth')).width('99px').height('99px')\n                  .borderRadius('50px').margin({ left: 7 })\n                Column() {\n                  Text($r('app.string.ArcListStyles_blue')).fontSize('38px').fontColor('#FFFFFFFF')\n                  Text($r('app.string.ArcListStyles_open')).fontSize('20px').fontColor('#FFFFFFFF')\n                }.width('190px')\n\n                Image($r('app.media.ic_settings_arrow')).width('92px').height('92px')\n                  .borderRadius('50px')\n              }\n            }\n            .borderRadius('65px')\n            .width('414px')\n            .height('129px')\n            .backgroundColor('#26FFFFFF')\n\n            ArcListItem() {\n              Row() {\n                Image($r('app.media.mobileData')).width('99px').height('99px')\n                  .borderRadius('50px').margin({ left: 7 })\n                Column() {\n                  Text($r('app.string.ArcListStyles_net')).fontSize('38px').fontColor('#FFFFFFFF')\n                }.width('190px')\n\n                Image($r('app.media.ic_settings_arrow')).width('92px').height('92px')\n                  .borderRadius('50px')\n              }\n            }\n            .borderRadius('65px')\n            .width('414px')\n            .height('129px')\n            .backgroundColor('#26FFFFFF')\n\n            ArcListItem() {\n              Row() {\n                Image($r('app.media.ic_settings_more_connections')).width('99px').height('99px')\n                  .borderRadius('50px').margin({ left: 7 })\n                Column() {\n                  Text($r('app.string.ArcListStyles_connect')).fontSize('38px').fontColor('#FFFFFFFF')\n                }.width('190px')\n\n                Image($r('app.media.ic_settings_arrow')).width('92px').height('92px')\n                  .borderRadius('50px')\n              }\n            }\n            .borderRadius('65px')\n            .width('414px')\n            .height('129px')\n            .backgroundColor('#26FFFFFF')\n\n            ArcListItem() {\n              Row() {\n                Image($r('app.media.displayAndBrightness')).width('99px').height('99px')\n                  .borderRadius('50px').margin({ left: 7 })\n                Column() {\n                  Text($r('app.string.ArcListStyles_light')).fontSize('38px').fontColor('#FFFFFFFF')\n                }.width('190px')\n\n                Image($r('app.media.ic_settings_arrow')).width('92px').height('92px')\n                  .borderRadius('50px')\n              }\n            }\n            .borderRadius('65px')\n            .width('414px')\n            .height('129px')\n            .backgroundColor('#26FFFFFF')\n          }\n          .width('466px')\n          .height('466px')\n          .space(LengthMetrics.px(10))\n          .borderRadius('233px')\n          .backgroundColor(Color.Black)\n        }\n      // ...\n    }\n    .backgroundColor('#f1f2f3')\n    // 请将$r('app.string.ArcListShow_title')替换为实际资源文件，在本示例中该资源文件的value值为\"在弧形列表中显示数据\"\n    .title($r('app.string.ArcListShow_title'))\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 显示弧形列表数据"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(604728)/* ["default"] */.A) + "",
        width: "266",
        height: "270"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "迭代弧形列表内容",
      children: "迭代弧形列表内容"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通常，应用会通过数据集合动态创建列表。采用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach",
        children: "循环渲染"
      }), "的方式，可以从数据源中迭代获取数据，在每次迭代过程中创建相应的组件，从而降低代码的复杂度。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach",
        children: "ForEach"
      }), "提供了组件的循环渲染能力。以简单的联系人列表为例，将联系人名称和头像数据以Contact类结构存储到contacts数组中，使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach",
        children: "ForEach"
      }), "中嵌套的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclistitem/ts-container-arclistitem",
        children: "ArcListItem"
      }), "来代替多个平铺的、内容相似的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclistitem/ts-container-arclistitem",
        children: "ArcListItem"
      }), "，从而减少重复代码，使代码更加简洁高效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ArcList, ArcListAttribute, ArcListItemAttribute, ArcListItem, LengthMetrics } from '@kit.ArkUI';\nimport { util } from '@kit.ArkTS';\nimport { common } from '@kit.AbilityKit';\n\nclass Contact {\n  key: string = util.generateRandomUUID(true);\n  name: ResourceStr;\n  icon: Resource;\n\n  constructor(name: ResourceStr, icon: Resource) {\n    this.name = name;\n    this.icon = icon;\n  }\n}\n\n@Entry\n@Component\nexport struct ArcListContents {\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  @State private contacts: Array<object> = [\n    // 请将$r('app.string.xxx')替换为实际资源文件\n    new Contact($r('app.string.name_xiaohong'), $r('app.media.ic_contact')),\n    new Contact($r('app.string.name_xiaolan'), $r('app.media.ic_contact')),\n    new Contact($r('app.string.name_xiaowang'), $r('app.media.ic_contact')),\n    new Contact($r('app.string.name_xiaoli'), $r('app.media.ic_contact')),\n    new Contact($r('app.string.name_xiaoming'), $r('app.media.ic_contact'))\n  ];\n\n  build() {\n    NavDestination() {\n      Column({ space: 12 }) {\n        // ...\n          ArcList({ initialIndex: 2 }) {\n            ForEach(this.contacts, (item: Contact) => {\n              ArcListItem() {\n                Row() {\n                  Image(item.icon)\n                    .width(40)\n                    .height(40)\n                    .margin(10)\n                    .backgroundColor('#FF9CC998')\n                    .borderRadius(20)\n                  Text(item.name).fontSize('38px').fontColor('#FFFFFFFF')\n                }\n                .width('100%')\n                .justifyContent(FlexAlign.Start)\n              }\n              .borderRadius('65px')\n              .width('410px')\n              .height('130px')\n              .backgroundColor('#26FFFFFF')\n            }, (item: Contact) => JSON.stringify(item))\n          }\n          .space(LengthMetrics.px(10))\n          .width('466px')\n          .height('466px')\n          .borderRadius('233px')\n          .backgroundColor(Color.Black)\n        }\n        // ...\n    }\n    .backgroundColor('#f1f2f3')\n    // 请将$r('app.string.ArcListContents_title')替换为实际资源文件，在本示例中该资源文件的value值为\"迭代弧形列表内容\"\n    .title($r('app.string.ArcListContents_title'))\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 迭代弧形列表内容"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(768457)/* ["default"] */.A) + "",
        width: "277",
        height: "268"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "自定义弧形列表样式",
      children: "自定义弧形列表样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自定义弧形列表标题",
      children: "自定义弧形列表标题"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist#arklistoptions",
        children: "header"
      }), "参数为弧形列表添加自定义标题。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "首先，需要构造自定义标题组件customHeader。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Builder\nfunction customHeader() {\n  Column() {\n    Text($r('app.string.ArcListCrown_set'))\n      .fontColor('#FFFFFFFF')\n      .fontSize('19fp')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["由于", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist#arklistoptions",
            children: "header"
          }), "参数的类型是", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-componentcontent/js-apis-arkui-componentcontent",
            children: "ComponentContent"
          }), "，所以需要对自定义标题组件进行封装。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "context: UIContext = this.getUIContext();\narcListHeader: ComponentContent<Object> = new ComponentContent(this.context, wrapBuilder(customHeader));\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["最后，通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist#arklistoptions",
            children: "header"
          }), "参数将arcListHeader设置到弧形列表中。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "ArcList({ header: this.arcListHeader }) {\n  ArcListItem() {\n  // ···\n  }\n  // ···\n\n  ArcListItem() {\n  // ···\n  }\n  // ···\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), " 自定义弧形列表标题"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(293841)/* ["default"] */.A) + "",
        width: "273",
        height: "272"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置弧形列表项间距",
      children: "设置弧形列表项间距"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在初始化列表时，若需在列表项之间添加间距，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist#space",
        children: "space"
      }), "属性实现。例如，为在每个列表项的垂直方向上增加30px的间距。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArcList({ initialIndex: 2 }) {\n  // ···\n}\n.space(LengthMetrics.px(30))\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图4"
        })
      }), " 设置弧形列表项间距"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(795393)/* ["default"] */.A) + "",
        width: "267",
        height: "274"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "列表项关闭自动缩放",
      children: "列表项关闭自动缩放"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在弧形列表中，列表项默认具有在接近上下两端时自动缩放的效果。然而，在某些情况下，可能不希望有这种缩放效果。此时，可以通过设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclistitem/ts-container-arclistitem",
        children: "ArcListItem"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclistitem/ts-container-arclistitem#autoscale",
        children: "autoScale"
      }), "属性为false来禁用该效果。例如，如图5所示，“网络”和“显示”两个列表项，在关闭了自动缩放属性后，无论它们所处的位置如何，都不会出现缩放效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArcListItem() {\n  // ...\n}\n.autoScale(false)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图5"
        })
      }), " 列表项关闭自动缩放"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(812746)/* ["default"] */.A) + "",
        width: "278",
        height: "265"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "添加内置滚动条",
      children: "添加内置滚动条"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当列表项的高度超过屏幕高度时，弧形列表能够沿垂直方向滚动。若用户需要快速定位，可拖动滚动条以迅速滑动列表，如图6所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist",
        children: "ArcList"
      }), "组件时，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist#scrollbar",
        children: "scrollBar"
      }), "属性来控制弧形列表滚动条的显示。scrollBar的取值类型为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#barstate",
        children: "BarState"
      }), "，当设置为BarState.Auto时，表示滚动条将按需显示。在这种模式下，当用户触摸到滚动条区域时，滚动条会显示出来，支持上下拖拽以快速浏览内容，且在拖拽过程中滚动条会变粗。若用户不进行任何操作，滚动条将在2秒后自动消失。此外，还可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist#scrollbarwidth",
        children: "scrollBarWidth"
      }), "属性来设置滚动条在按压状态下的宽度，以及通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist#scrollbarcolor",
        children: "scrollBarColor"
      }), "属性来设置滚动条的颜色。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArcList({ header: this.arcListHeader }) {\n  // ···\n}\n.scrollBar(BarState.Auto)\n.scrollBarWidth(LengthMetrics.px(10))\n.scrollBarColor(ColorMetrics.resourceColor(Color.White))\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图6"
        })
      }), " 弧形列表的内置滚动条"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(710875)/* ["default"] */.A) + "",
        width: "278",
        height: "278"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加外置滚动条arcscrollbar",
      children: "添加外置滚动条ArcScrollBar"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["弧形列表", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist",
        children: "ArcList"
      }), "可与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-basic-components-arcscrollbar/ts-basic-components-arcscrollbar",
        children: "ArcScrollBar"
      }), "组件配合使用，为弧形列表添加外置滚动条。两者通过绑定同一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scroller",
        children: "Scroller"
      }), "滚动控制器对象实现联动。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["首先，需要创建一个", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scroller",
            children: "Scroller"
          }), "类型的对象arcListScroller。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "private arcListScroller: Scroller = new Scroller();\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["然后，弧形列表通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist#arklistoptions",
            children: "scroller"
          }), "参数绑定滚动控制器。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 将arcListScroller用于初始化ArcList组件的scroller参数，完成arcListScroller与弧形列表的绑定。\nArcList({ scroller: this.arcListScroller, header: this.arcListHeader }) {\n  // ···\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["最后，弧形滚动条通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-basic-components-arcscrollbar/ts-basic-components-arcscrollbar#arcscrollbaroptions",
            children: "scroller"
          }), "参数绑定滚动控制器。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 将arcListScroller用于初始化ArcScrollBar组件的scroller参数，完成arcListScroller与滚动条的绑定。\nArcScrollBar({ scroller: this.arcListScroller })\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图7"
        })
      }), " 弧形列表的外置滚动条"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(39526)/* ["default"] */.A) + "",
        width: "278",
        height: "278"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(555591)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["弧形滚动条组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-basic-components-arcscrollbar/ts-basic-components-arcscrollbar",
        children: "ArcScrollBar"
      }), "，还可配合其他可滚动组件使用，如", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
        children: "List"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-grid/ts-container-grid",
        children: "Grid"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll",
        children: "Scroll"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow",
        children: "WaterFlow"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "与弧形索引条arcalphabetindexer联动",
      children: "与弧形索引条ArcAlphabetIndexer联动"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["许多应用需要监测列表的滚动位置变动并作出响应，或通过调整滚动位置实现列表的快速定位。例如，在联系人列表滚动时，当列表滚动至不同首字母开头的联系人，外部索引条应更新至相应的字母位置。当用户选择外部索引条上的索引项时，列表应跳转至对应位置。为此，需使用弧形索引条组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-container-arc-alphabet-indexer/ts-container-arc-alphabet-indexer",
        children: "ArcAlphabetIndexer"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如图8所示，当列表从联系人A滚动到联系人B时，外侧索引条也需要同步从选中A状态变成选中B状态，此场景可以通过监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist",
        children: "ArcList"
      }), "组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist#onscrollindex",
        children: "onScrollIndex"
      }), "事件来实现；当点击索引项C时，列表也需要跳转到联系人C，此场景可以通过监听", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-container-arc-alphabet-indexer/ts-container-arc-alphabet-indexer",
        children: "ArcAlphabetIndexer"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-container-arc-alphabet-indexer/ts-container-arc-alphabet-indexer#onselect",
        children: "onSelect"
      }), "事件来实现。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在列表滚动时，根据列表此时所在的索引值位置firstIndex，重新计算字母索引条对应字母的位置selectedIndex。由于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-container-arc-alphabet-indexer/ts-container-arc-alphabet-indexer",
        children: "ArcAlphabetIndexer"
      }), "组件通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-container-arc-alphabet-indexer/ts-container-arc-alphabet-indexer#selected",
        children: "selected"
      }), "属性设置了选中项索引值，当selectedIndex变化时会触发", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-container-arc-alphabet-indexer/ts-container-arc-alphabet-indexer",
        children: "ArcAlphabetIndexer"
      }), "组件重新渲染，从而显示为选中对应字母的状态。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在选中索引项时，根据此时选中项的索引值index，重新计算列表联系人对应的位置，然后通过列表绑定的滚动控制器arcListScroller的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scrolltoindex",
        children: "scrollToIndex"
      }), "方法控制列表跳转到对应的联系人位置。弧形列表", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist",
        children: "ArcList"
      }), "可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist#arklistoptions",
        children: "scroller"
      }), "参数绑定", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-scroll/ts-container-scroll#scroller",
        children: "Scroller"
      }), "（滚动控制器）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ArcList, ArcListAttribute, ArcListItemAttribute, ArcListItem, LengthMetrics } from '@kit.ArkUI';\nimport { common } from '@kit.AbilityKit';\n\n// ...\nconst alphabets: string[] = [\n  '#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N',\n  'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'\n];\n\n@Entry\n@Component\nexport struct ArcListArcIndexerBar {\n\n  // ...\n  // 索引条选中项索引\n  @State indexerIndex: number = 0;\n  // 列表绑定的滚动控制器\n  private arcListScroller: Scroller = new Scroller();\n\n  // ...\n\n  build() {\n    // ...\n          Stack({alignContent: Alignment.End}) {\n            ArcList({ initialIndex: 0, header:this.tabBar1, scroller:this.arcListScroller }) {\n              // ...\n            }\n            // ...\n            .onScrollIndex((firstIndex: number, lastIndex: number, centerIndex: number) => {\n              // 根据列表滚动到的索引值，重新计算对应索引条的位置this.selectedIndex\n              this.indexerIndex = centerIndex + 1;\n            })\n            // ...\n            // 弧形索引条组件\n            ArcAlphabetIndexer({ arrayValue: alphabets, selected: this.indexerIndex})\n              .selected(this.indexerIndex!!)\n              .onSelect((index: number) => {\n                // 选中索引项后，列表跳转到相应位置\n                this.indexerIndex = index\n                this.arcListScroller.scrollToIndex(this.indexerIndex - 1)\n              })\n              // ...\n          }\n          // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图8"
        })
      }), " 弧形列表与弧形索引条联动"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(435529)/* ["default"] */.A) + "",
        width: "278",
        height: "278"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "响应列表项侧滑",
      children: "响应列表项侧滑"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclistitem/ts-container-arclistitem",
        children: "ArcListItem"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclistitem/ts-container-arclistitem#swipeaction",
        children: "swipeAction"
      }), "属性可用于实现列表项的左右滑动功能。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclistitem/ts-container-arclistitem#swipeaction",
        children: "swipeAction"
      }), "属性方法初始化时存在必填", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-listitem/ts-container-listitem#swipeactionoptions9%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E",
        children: "SwipeActionOptions"
      }), "参数start和end。其中，start表示设置列表项右滑时起始端滑出的组件，end表示设置列表项左滑时尾端滑出的组件。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在联系人列表中，end参数表示设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclistitem/ts-container-arclistitem",
        children: "ArcListItem"
      }), "左滑时尾端划出自定义组件，即删除按钮。在初始化end方法时，将滑动列表项的索引传入删除按钮组件，当用户点击删除按钮时，可以根据数据索引来删除列表项对应的数据，从而实现侧滑删除功能。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "首先，实现尾端滑出组件的构建。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Builder\nitemEnd(item: Contact) {\n  // 构建尾端滑出组件\n  Button({ type: ButtonType.Circle }) {\n    Image($r('app.media.ic_public_delete_filled'))\n      .width(20)\n      .height(20)\n  }\n  .width(20)\n  .height(20)\n  .backgroundColor(Color.Black)\n  .onClick(() => {\n    this.getUIContext()?.animateTo({\n      duration: 1000,\n      curve: Curve.Smooth,\n      iterations: 1,\n      playMode: PlayMode.Normal,\n    }, () => {\n      // this.contacts为列表数据源，可根据实际场景构造，indexOf方法可获取将被删除数据在数据源中的索引\n      let index = this.contacts.indexOf(item);\n      // 从数据源删除指定数据项\n      this.contacts.splice(index, 1);\n    })\n  })\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["然后，绑定", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclistitem/ts-container-arclistitem#swipeaction",
            children: "swipeAction"
          }), "属性到可左滑的ArcListItem上。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 构建ArcList时，通过ForEach基于数据源this.contacts循环渲染ArcListItem\nArcListItem() {\n// ···\n}\n.swipeAction({\n  end: {\n    // index为该ArcListItem在ArcList中的索引值。\n    builder: () => {\n      this.itemEnd(item);\n    },\n  }\n}) // 设置侧滑属性.\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图9"
        })
      }), " 侧滑删除列表项"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(402845)/* ["default"] */.A) + "",
        width: "278",
        height: "278"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "处理长列表",
      children: "处理长列表"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach",
        children: "循环渲染"
      }), "适用于短列表，当构建具有大量列表项的长列表时，如果直接采用循环渲染方式，会一次性加载所有的列表元素，会导致页面启动时间过长，影响用户体验。因此，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
        children: "数据懒加载"
      }), "（LazyForEach）方式实现按需迭代加载数据，从而提升列表性能。关于长列表按需加载优化的具体实现可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
        children: "数据懒加载"
      }), "章节中的示例。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当使用懒加载方式渲染列表时，为了减少列表滑动时出现白块，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist",
        children: "ArcList"
      }), "组件提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist#cachedcount",
        children: "cachedCount"
      }), "属性，该属性用于设置列表项缓存数，只在懒加载", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
        children: "LazyForEach"
      }), "中生效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArcList() {\n  // ···\n}.cachedCount(3)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(91307)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cachedCount的增加会增大UI的CPU、内存开销。使用时需要根据实际情况，综合性能和用户体验进行调整。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "列表使用数据懒加载时，除了显示区域的列表项和前后缓存的列表项，其他列表项会被销毁。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "响应旋转表冠",
      children: "响应旋转表冠"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["手表设备上弧形列表在获焦的情况下可对旋转表冠做出响应，用户可通过旋转表冠的操作滑动列表，浏览列表项数据。弧形列表可通过下列", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-focus/ts-universal-attributes-focus",
        children: "焦点控制"
      }), "相关属性成为所在页面的默认焦点。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArcList({\n  initialIndex: 2,\n}) {\n// ···\n}\n// 设置弧形列表支持获焦\n.focusable(true)\n// 设置弧形列表支持点击获焦\n.focusOnTouch(true)\n// 设置弧形列表为所在页面上的默认焦点\n.defaultFocus(true)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["还可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-arclist/ts-container-arclist#digitalcrownsensitivity",
        children: "digitalCrownSensitivity"
      }), "属性设置表冠响应事件的灵敏度，以应对不同量级的列表项数据。列表项数据较多时可以设置更高的响应事件灵敏度，数据较少时可以设置较低的响应事件灵敏度。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ArcList({\n  initialIndex: 2,\n}) {\n// ···\n}\n// ···\n.digitalCrownSensitivity(CrownSensitivity.MEDIUM)\n"
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
39526(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437827-f95e8fd13da46f18f22561fc4f9ef4d7.gif");

},
768457(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798130-347cab598a3f01ae20e7908ea31ae16c.png");

},
264965(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
604728(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477765-995a798d2fbc9bf42f1a24ac98b483d7.png");

},
435529(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957782-b8bfb6d190c2dfd8c924f74aab5a05c6.gif");

},
812746(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477781-73e493c95072e6090837737a6aeda75a.png");

},
795393(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957780-ed6c68962b31b6f5c25f3c812ca44df7.png");

},
402845(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477783-9a8f17ef0da46698453e9478f83cef24.gif");

},
710875(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798132-bca09a6c51cec99e71cb15a0845dc569.gif");

},
91307(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
293841(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437825-f91f9dc0113a0d2cfb930a4704e5506d.png");

},
555591(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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