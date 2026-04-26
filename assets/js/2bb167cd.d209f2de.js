"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["761645"], {
871383(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_v_1_v_2_guide_arkts_state_management_v_1_v_2_migration_guide_arkts_v_1_v_2_migration_rendering_control_repeat_arkts_v_1_v_2_migration_rendering_control_repeat_md_2bb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-v-1-v-2-guide-arkts-state-management-v-1-v-2-migration-guide-arkts-v-1-v-2-migration-rendering-control-repeat-arkts-v-1-v-2-migration-rendering-control-repeat-md-2bb.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_v_1_v_2_guide_arkts_state_management_v_1_v_2_migration_guide_arkts_v_1_v_2_migration_rendering_control_repeat_arkts_v_1_v_2_migration_rendering_control_repeat_md_2bb_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-rendering-control-repeat/arkts-v1-v2-migration-rendering-control-repeat","title":"循环渲染迁移","description":"本文档主要介绍组件循环渲染从V1向V2的迁移，涉及如下渲染控制组件。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-rendering-control-repeat/arkts-v1-v2-migration-rendering-control-repeat.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-rendering-control-repeat","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-rendering-control-repeat/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-rendering-control-repeat/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"循环渲染迁移","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-v1-v2-migration-rendering-control-repeat","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"组件复用迁移","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-reusable/"},"next":{"title":"内置对象的迁移","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-object/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-rendering-control-repeat/arkts-v1-v2-migration-rendering-control-repeat.md


const frontMatter = {
	title: '循环渲染迁移',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-v1-v2-migration-rendering-control-repeat',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '循环渲染迁移';

const assets = {

};



const toc = [{
  "value": "ForEach迁移Repeat",
  "id": "foreach迁移repeat",
  "level": 2
}, {
  "value": "LazyForEach迁移Repeat",
  "id": "lazyforeach迁移repeat",
  "level": 2
}, {
  "value": "数据首次渲染",
  "id": "数据首次渲染",
  "level": 3
}, {
  "value": "数据更新操作",
  "id": "数据更新操作",
  "level": 3
}, {
  "value": "修改数据子属性",
  "id": "修改数据子属性",
  "level": 3
}, {
  "value": "状态管理V2观测组件内部状态",
  "id": "状态管理v2观测组件内部状态",
  "level": 3
}, {
  "value": "状态管理V2观测组件外部输入",
  "id": "状态管理v2观测组件外部输入",
  "level": 3
}, {
  "value": "拖拽排序",
  "id": "拖拽排序",
  "level": 3
}, {
  "value": "组件复用",
  "id": "组件复用",
  "level": 3
}, {
  "value": "模板渲染",
  "id": "模板渲染",
  "level": 3
}, {
  "value": "BasicDataSource示例代码",
  "id": "basicdatasource示例代码",
  "level": 2
}, {
  "value": "string类型数组的BasicDataSource代码",
  "id": "string类型数组的basicdatasource代码",
  "level": 3
}, {
  "value": "StringData类型数组的BasicDataSource代码",
  "id": "stringdata类型数组的basicdatasource代码",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "循环渲染迁移",
        children: "循环渲染迁移"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文档主要介绍组件循环渲染从V1向V2的迁移，涉及如下渲染控制组件。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "迁移前渲染控制组件名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "迁移后渲染控制组件名称"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach",
              children: "ForEach"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-new-rendering-control-repeat",
              children: "Repeat"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
              children: "LazyForEach"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-new-rendering-control-repeat",
              children: "Repeat"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "foreach迁移repeat",
      children: "ForEach迁移Repeat"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "状态管理V2推荐使用Repeat替代ForEach。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ForEach使用示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach#%E6%95%B0%E6%8D%AE%E6%BA%90%E6%95%B0%E7%BB%84%E9%A1%B9%E5%AD%90%E5%B1%9E%E6%80%A7%E5%8F%98%E5%8C%96",
        children: "数据源数组项子属性变化"
      }), "。对应在V2中，ForEach迁移Repeat示例代码参考如下。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Repeat需要和状态管理V2一起使用，状态管理V2提供了@ObservedV2和@Trace装饰器对子属性进行深度观测。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "V1的@Observed替换成@ObservedV2+@Trace进行深度观测。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "其余V1装饰器遵循迁移规则，替换成V2相关装饰器。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "直接把ForEach的循环结构替换成Repeat结构。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass ArticleChangeChild {\n  public id: string;\n  public title: string;\n  public brief: string;\n  @Trace public isLiked: boolean;\n  @Trace public likesCount: number;\n\n  constructor(id: string, title: string, brief: string, isLiked: boolean, likesCount: number) {\n    this.id = id;\n    this.title = title;\n    this.brief = brief;\n    this.isLiked = isLiked;\n    this.likesCount = likesCount;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct ArticleListChangeView {\n  @Local articleList: Array<ArticleChangeChild> = [\n    new ArticleChangeChild('001', 'Article 0', 'Abstract', false, 100),\n    new ArticleChangeChild('002', 'Article 1', 'Abstract', false, 100),\n    new ArticleChangeChild('003', 'Article 2', 'Abstract', false, 100),\n    new ArticleChangeChild('004', 'Article 4', 'Abstract', false, 100),\n    new ArticleChangeChild('005', 'Article 5', 'Abstract', false, 100),\n    new ArticleChangeChild('006', 'Article 6', 'Abstract', false, 100),\n  ];\n\n  build() {\n    List() {\n      // Repeat结构体\n      Repeat(this.articleList)\n        .each((obj: RepeatItem<ArticleChangeChild>) => {\n          ListItem() {\n            ArticleCardChangeChild({ article: obj.item })\n              .margin({ top: 20 })\n          }\n        })\n        .key(item => item.id)\n    }\n    .padding(20)\n    .scrollBar(BarState.Off)\n    .backgroundColor(0xF1F3F5)\n  }\n}\n\n@ComponentV2\nstruct ArticleCardChangeChild {\n  @Require @Param article: ArticleChangeChild;\n\n  handleLiked() {\n    this.article.isLiked = !this.article.isLiked;\n    this.article.likesCount = this.article.isLiked ? this.article.likesCount + 1 : this.article.likesCount - 1;\n  }\n\n  build() {\n    Row() {\n      // 此处'app.media.startIcon'仅作示例，请开发者自行替换，否则imageSource创建失败会导致后续无法正常执行。\n      Image($r('app.media.startIcon'))\n        .width(80)\n        .height(80)\n        .margin({ right: 20 })\n\n      Column() {\n        Text(this.article.title)\n          .fontSize(20)\n          .margin({ bottom: 8 })\n        Text(this.article.brief)\n          .fontSize(16)\n          .fontColor(Color.Gray)\n          .margin({ bottom: 8 })\n\n        Row() {\n          // 此处app.media.iconLiked'，'app.media.iconUnLiked'仅作示例，请开发者自行替换，否则imageSource创建失败会导致后续无法正常执行。\n          Image(this.article.isLiked ? $r('app.media.iconLiked') : $r('app.media.iconUnLiked'))\n            .width(24)\n            .height(24)\n            .margin({ right: 8 })\n          Text(this.article.likesCount.toString())\n            .fontSize(16)\n        }\n        .onClick(() => this.handleLiked())\n        .justifyContent(FlexAlign.Center)\n      }\n      .alignItems(HorizontalAlign.Start)\n      .width('80%')\n      .height('100%')\n    }\n    .padding(20)\n    .borderRadius(12)\n    .backgroundColor('#FFECECEC')\n    .height(120)\n    .width('100%')\n    .justifyContent(FlexAlign.SpaceBetween)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "lazyforeach迁移repeat",
      children: "LazyForEach迁移Repeat"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据首次渲染",
      children: "数据首次渲染"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "LazyForEach示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LazyForEach根据数据源循环渲染子组件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["示例1中，在容器组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-list-and-grid/arkts-layout-development-create-list",
        children: "List"
      }), "中使用LazyForEach，并基于数据源循环渲染出了一系列", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-use-text/arkts-common-components-text-display",
        children: "Text"
      }), "子组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例1 - 迁移前"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* BasicDataSource代码见文档末尾BasicDataSource示例代码: string类型数组的BasicDataSource代码 */\n\nclass MyDataSource extends BasicDataSource {\n  private dataArray: string[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: string): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n\n@Entry\n@Component\nstruct MyComponent {\n  private data: MyDataSource = new MyDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i <= 20; i++) {\n      this.data.pushData(`Hello ${i}`);\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      LazyForEach(this.data, (item: string) => {\n        ListItem() {\n          Row() {\n            Text(item).fontSize(50)\n              .onAppear(() => {\n                console.info(`appear: ${item}`);\n              })\n          }.margin({ left: 10, right: 10 })\n        }\n      }, (item: string) => item)\n    }.cachedCount(5)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上是一个典型的使用LazyForEach循环渲染子组件的场景，下面将介绍如何将此示例迁移至Repeat。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "迁移步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用状态管理V2装饰器。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Repeat推荐和状态管理V2装饰器配合使用（", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-new-rendering-control-repeat#%E6%87%92%E5%8A%A0%E8%BD%BD%E8%83%BD%E5%8A%9B%E8%AF%B4%E6%98%8E",
            children: "懒加载"
          }), "模式下只支持和状态管理V2装饰器配合使用）。如果之前使用的是状态管理V1装饰器，需要修改为状态管理V2装饰器。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 迁移前 - LazyForEach\n@Component // 状态管理V1\nstruct MyComponent {\n  build() {\n    // ...\n    LazyForEach(...)\n    // ...\n  }\n  // ...其他属性、方法\n}\n  \n// 迁移后 - Repeat\n@ComponentV2 // 状态管理V2\nstruct MyComponent {\n  build() {\n    // ...\n    Repeat(...)\n    // ...\n  }\n  // ...其他属性、方法\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "迁移数据源。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["LazyForEach使用专用的数据结构", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-lazyforeach/ts-rendering-control-lazyforeach#idatasource",
            children: "IDataSource"
          }), "作为数据源。迁移至Repeat后，不再使用IDataSource作为数据源，而是使用状态管理V2装饰的数组作为数据源。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 迁移前 - LazyForEach\nclass MyDataSource implements IDataSource {\n  private dataArray: string[] = [];\n  \n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n  \n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n  \n  // ...其他方法\n}\n\n// 迁移后 - Repeat\n@Local data: Array<string> = [];\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "迁移组件生成函数和键值生成函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "LazyForEach与Repeat均通过组件生成函数，为每一项数据创建一个子组件；通过键值生成函数，为每一项数据生成一个唯一的键值。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从LazyForEach迁移至Repeat时，两者的语法存在差异。Repeat需要在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-repeat/ts-rendering-control-repeat#each",
            children: ".each()"
          }), "或", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-repeat/ts-rendering-control-repeat#template",
            children: ".template()"
          }), "中设置组件生成函数，在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-repeat/ts-rendering-control-repeat#key",
            children: ".key()"
          }), "中设置键值生成函数。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 迁移前 - LazyForEach\nList() {\n  LazyForEach(\n    this.data, // 数据源\n    (item: string, index: number) => { // 组件生成函数\n      ListItem() {\n        Text(item)\n      }\n    },\n    (item: string, index: number) => item // 键值生成函数\n  )\n}\n\n// 迁移后 - Repeat\nList() {\n  Repeat<string>(this.data) // 数据源\n    .each((repeatItem: RepeatItem<string>) => { // 组件生成函数\n      ListItem() {\n        Text(repeatItem.item)\n      }\n    })\n    .key((item: string, index: number) => item) // 键值生成函数\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置懒加载功能。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Repeat具有", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-new-rendering-control-repeat#%E6%87%92%E5%8A%A0%E8%BD%BD%E8%83%BD%E5%8A%9B%E8%AF%B4%E6%98%8E",
            children: "懒加载和全量加载"
          }), "两种模式。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["全量加载模式渲染所有子节点（对标", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach",
              children: "ForEach"
            }), "）。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "懒加载模式动态渲染屏幕区域和预加载区域内的子节点（需要与容器组件配合使用，对标LazyForEach）。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从LazyForEach迁移至Repeat时，需要调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-repeat/ts-rendering-control-repeat#virtualscroll",
            children: "virtualScroll"
          }), "属性，使能懒加载。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 迁移前 - LazyForEach\nLazyForEach(data, (item) => {...}, (item) => item)\n\n// 迁移后 - Repeat\nRepeat(data)\n  .virtualScroll() // 使能懒加载\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "迁移后代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过以上步骤，可以将示例1从LazyForEach迁移至Repeat，迁移后的完整示例如下所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例1 - 迁移后"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2 // 使用状态管理V2\nstruct MyComponent {\n  @Local data: Array<string> = []; // 数据源为状态管理V2装饰的数组\n\n  aboutToAppear() {\n    for (let i = 0; i <= 20; i++) {\n      this.data.push(`Hello ${i}`);\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      Repeat(this.data) // 使用Repeat\n        .each((repeatItem: RepeatItem<string>) => { // 组件生成函数\n          ListItem() {\n            Row() {\n              Text(repeatItem.item).fontSize(50)\n                .onAppear(() => {\n                  console.info(`appear: ${repeatItem.item}`);\n                })\n            }.margin({ left: 10, right: 10 })\n          }\n        })\n        .key((item: string) => item) // 键值生成函数\n        .virtualScroll() // 使能懒加载\n    }.cachedCount(5)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行后界面如下图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(128338)/* ["default"] */.A) + "",
        width: "350",
        height: "700"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数据更新操作",
      children: "数据更新操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "LazyForEach示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当LazyForEach的数据源发生变化时，开发者需要根据数据源的变化情况调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-lazyforeach/ts-rendering-control-lazyforeach#datachangelistener",
        children: "DataChangeListener"
      }), "对应的接口，通知LazyForEach做相应的更新。主要的数据操作包括：添加数据、删除数据、交换数据、修改单个数据、修改多个数据、精准批量修改数据。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例2演示了主要的数据操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例2 - 迁移前"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* BasicDataSource代码见文档末尾BasicDataSource示例代码: string类型数组的BasicDataSource代码 */\n\nclass MyDataSource extends BasicDataSource {\n  private dataArray: string[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n\n  // 添加数据\n  public pushData(data: string): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n\n  // 删除数据\n  public deleteData(index: number): void {\n    this.dataArray.splice(index, 1);\n    this.notifyDataDelete(index);\n  }\n\n  // 交换数据\n  public moveData(from: number, to: number): void {\n    let temp: string = this.dataArray[from];\n    this.dataArray[from] = this.dataArray[to];\n    this.dataArray[to] = temp;\n    this.notifyDataMove(from, to);\n  }\n\n  // 修改单个数据\n  public changeData(index: number, data: string): void {\n    this.dataArray.splice(index, 1, data);\n    this.notifyDataChange(index);\n  }\n\n  // 修改多个数据\n  public modifyAllData(): void {\n    this.dataArray = this.dataArray.map((item: string) => {\n        return 'Changed ' + item;\n    });\n    this.notifyDataReload();\n  }\n}\n\n@Entry\n@Component\nstruct MyComponent {\n  private data: MyDataSource = new MyDataSource();\n  private count: number = 0;\n\n  aboutToAppear() {\n    for (let i = 0; i <= 10; i++) {\n      this.data.pushData(`Hello ${i}`);\n    }\n  }\n\n  build() {\n    Column({ space: 3 }) {\n      // 点击追加子组件\n      Button('Add new item')\n        .onClick(() => {\n          this.data.pushData(`New item ${this.count++}`);\n        })\n      // 点击删除子组件\n      Button('Delete item 0')\n        .onClick(() => {\n          this.data.deleteData(0);\n        })\n      // 点击交换子组件\n      Button('Swap item 0 and item 1')\n        .onClick(() => {\n          this.data.moveData(0, 1);\n        })\n      // 点击修改单个子组件\n      Button('Change item 0')\n        .onClick(() => {\n          this.data.changeData(0, `Changed item ${this.count++}`);\n        })\n      // 点击修改多个子组件\n      Button('Change all items')\n        .onClick(() => {\n          this.data.modifyAllData();\n        })\n      List({ space: 3 }) {\n        LazyForEach(this.data, (item: string) => {\n          ListItem() {\n            Row() {\n              Text(item).fontSize(25)\n            }\n          }\n        }, (item: string) => item)\n      }.cachedCount(5)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上是一个典型的更新数据后LazyForEach重新渲染子组件的场景，下面将介绍如何将此示例迁移至Repeat。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "迁移步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "迁移准备。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["根据", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E6%95%B0%E6%8D%AE%E9%A6%96%E6%AC%A1%E6%B8%B2%E6%9F%93",
            children: "数据首次渲染"
          }), "小节中的步骤，将LazyForEach替换为Repeat。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "使用状态管理V2装饰器。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "迁移数据源。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "迁移组件生成函数与键值生成函数。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "使能懒加载。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "迁移数据源修改方式。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "对于LazyForEach，在修改数据源后需要调用对应的接口通知其更新。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "对于Repeat，由状态管理V2监听其数据源变化，并触发更新。因此，开发者直接修改数据源即可，无需其他额外操作。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 以修改单个数据为例\n// 迁移前 - LazyForEach\nclass MyDataSource implements IDataSource {\n  private dataArray: string[] = [];\n  \n  public changeData(index: number, newData: string): void {\n    this.dataArray.splice(index, 1, data);\n    this.notifyDataChange(index);\n  }\n  \n  // ...其他方法\n}\n\n// 迁移后 - Repeat\nthis.data.splice(index, 1, data);\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其他数据更新操作，如添加数据、删除数据、交换数据等，与以上方法类似，可通过直接修改数据源数组实现。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "迁移后代码"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "迁移后的完整示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例2 - 迁移后"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct MyComponent {\n  @Local data: Array<string> = [];\n  private count: number = 0;\n\n  aboutToAppear() {\n    for (let i = 0; i <= 10; i++) {\n      this.data.push(`Hello ${i}`);\n    }\n  }\n\n  build() {\n    Column({ space: 3 }) {\n      // 点击追加子组件\n      Button('Add new item')\n        .onClick(() => { this.data.push(`New item ${this.count++}`); })\n      // 点击删除子组件\n      Button('Delete item 0')\n        .onClick(() => { this.data.splice(0, 1); })\n      // 点击交换子组件\n      Button('Swap item 0 and item 1')\n        .onClick(() => { let temp: string = this.data[0];\n                         this.data[0] = this.data[1];\n                         this.data[1] = temp; })\n      // 点击修改单个子组件\n      Button('Change item 0')\n        .onClick(() => { this.data.splice(0, 1, `Changed item ${this.count++}`); })\n      // 点击修改多个子组件\n      Button('Change all items')\n        .onClick(() => { this.data = this.data.map((item: string) => { return 'Changed ' + item; }); })\n      List({ space: 3 }) {\n        Repeat(this.data)\n          .each((repeatItem: RepeatItem<string>) => {\n            ListItem() {\n              Row() {\n                Text(repeatItem.item).fontSize(25)\n              }\n            }\n          })\n          .key((item: string) => item)\n          .virtualScroll()\n      }.cachedCount(5)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行后界面如下图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(845826)/* ["default"] */.A) + "",
        width: "350",
        height: "585"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "修改数据子属性",
      children: "修改数据子属性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "LazyForEach示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LazyForEach可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
        children: "@Observed与@ObjectLink"
      }), "装饰器实现对数据子属性的观测。当有数据子属性发生变化时，仅更新使用了该子属性的组件，从而提高性能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例3演示了对子属性的观测。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例3 - 迁移前"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* BasicDataSource代码见文档末尾BasicDataSource示例代码: StringData类型数组的BasicDataSource代码 */\n\nclass MyDataSource extends BasicDataSource {\n  private dataArray: StringData[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): StringData {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: StringData): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n\n@Observed\nclass StringData {\n  message: string;\n\n  constructor(message: string) {\n    this.message = message;\n  }\n}\n\n@Entry\n@Component\nstruct MyComponent {\n  private data: MyDataSource = new MyDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i <= 20; i++) {\n      this.data.pushData(new StringData(`Hello ${i}`));\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      LazyForEach(this.data, (item: StringData, index: number) => {\n        ListItem() {\n          ChildComponent({ data: item })\n        }\n        .onClick(() => {\n          item.message += '0';\n        })\n      }, (item: StringData, index: number) => index.toString())\n    }.cachedCount(5)\n  }\n}\n\n@Component\nstruct ChildComponent {\n  @ObjectLink data: StringData;\n\n  build() {\n    Row() {\n      Text(this.data.message).fontSize(50)\n        .onAppear(() => {\n          console.info(`appear: ${this.data.message}`);\n        })\n    }.margin({ left: 10, right: 10 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "迁移Repeat"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Repeat需要和状态管理V2一起使用，状态管理V2提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
        children: "@ObservedV2和@Trace"
      }), "装饰器对子属性进行深度观测。迁移时，需要将@Observe和@ObjectLink装饰器迁移至@ObserveV2和@Trace装饰器。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "迁移后的示例如下所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例3 - 迁移后"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass StringData {\n  @Trace message: string; // 观测子属性\n\n  constructor(message: string) {\n    this.message = message;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct MyComponent {\n  @Local data: StringData[] = [];\n\n  aboutToAppear() {\n    for (let i = 0; i <= 20; i++) {\n      this.data.push(new StringData(`Hello ${i}`));\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      Repeat(this.data)\n        .each((repeatItem) => {\n          ListItem() {\n            Text(repeatItem.item.message).fontSize(50)\n              .onAppear(() => {\n                console.info(`appear: ${repeatItem.item.message}`);\n              })\n          }\n          .onClick(() => {\n            repeatItem.item.message += '0';\n          })\n        })\n        .key((item: StringData, index: number) => index.toString())\n        .virtualScroll()\n    }.cachedCount(5)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行后界面如下图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(993115)/* ["default"] */.A) + "",
        width: "350",
        height: "715"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "状态管理v2观测组件内部状态",
      children: "状态管理V2观测组件内部状态"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "LazyForEach示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["状态管理V2的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local",
        children: "@Local"
      }), "装饰器提供了观测自定义组件内部变量的能力。被@Local装饰的变量发生变化时，会通知LazyForEach更新对应的组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例4演示了在LazyForEach中使用@Local装饰器观测数据变化，触发组件更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例4 - 迁移前"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* BasicDataSource代码见文档末尾BasicDataSource示例代码: StringData类型数组的BasicDataSource代码 */\n\nclass MyDataSource extends BasicDataSource {\n  private dataArray: StringData[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): StringData {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: StringData): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n\n@ObservedV2\nclass StringData {\n  @Trace message: string;\n\n  constructor(message: string) {\n    this.message = message;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct MyComponent {\n  data: MyDataSource = new MyDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i <= 20; i++) {\n      this.data.pushData(new StringData(`Hello ${i}`));\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      LazyForEach(this.data, (item: StringData, index: number) => {\n        ListItem() {\n          Row() {\n            Text(item.message).fontSize(50)\n              .onClick(() => {\n                // 修改@ObservedV2装饰类中@Trace装饰的变量，触发刷新此处Text组件\n                item.message += '!';\n              })\n            ChildComponent()\n          }\n        }\n      }, (item: StringData, index: number) => index.toString())\n    }.cachedCount(5)\n  }\n}\n\n@ComponentV2\nstruct ChildComponent {\n  @Local message: string = '?';\n\n  build() {\n    Row() {\n      Text(this.message).fontSize(50)\n        .onClick(() => {\n          // 修改@Local装饰的变量，触发刷新此处Text组件\n          this.message += '?';\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "迁移Repeat"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Repeat本身支持与状态管理V2联合使用，将LazyForEach相关代码修改为Repeat后，即可实现对组件内部状态变量的观测。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "迁移后的示例如下所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例4 - 迁移后"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass StringData {\n  @Trace message: string;\n\n  constructor(message: string) {\n    this.message = message;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct MyComponent {\n  @Local data: StringData[] = [];\n\n  aboutToAppear() {\n    for (let i = 0; i <= 20; i++) {\n      this.data.push(new StringData(`Hello ${i}`));\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      Repeat(this.data)\n        .each((repeatItem) => {\n          ListItem() {\n            Row() {\n              Text(repeatItem.item.message).fontSize(50)\n                .onClick(() => {\n                  // 修改@ObservedV2装饰类中@Trace装饰的变量，触发刷新此处Text组件\n                  repeatItem.item.message += '!';\n                })\n              ChildComponent()\n            }\n          }\n        })\n        .key((item: StringData, index: number) => index.toString())\n        .virtualScroll()\n    }.cachedCount(5)\n  }\n}\n\n@ComponentV2\nstruct ChildComponent {\n  @Local message: string = '?';\n\n  build() {\n    Row() {\n      Text(this.message).fontSize(50)\n        .onClick(() => {\n          // 修改@Local装饰的变量，触发刷新此处Text组件\n          this.message += '?';\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行后界面如下图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(693724)/* ["default"] */.A) + "",
        width: "350",
        height: "715"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "状态管理v2观测组件外部输入",
      children: "状态管理V2观测组件外部输入"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "LazyForEach示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["状态管理V2的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-param",
        children: "@Param"
      }), "装饰器提供了观测自定义组件外部输入变量的能力，可以实现父子组件间的数据同步。将父组件的变量传递给子组件，并用@Param装饰，当父组件变量发生变化时，会通知对应的组件更新。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例5演示了在LazyForEach中使用@Param装饰器观测数据变化，触发组件更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例5 - 迁移前"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* BasicDataSource代码见文档末尾BasicDataSource示例代码: StringData类型数组的BasicDataSource代码 */\n\nclass MyDataSource extends BasicDataSource {\n  private dataArray: StringData[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): StringData {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: StringData): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n\n@ObservedV2\nclass StringData {\n  @Trace message: string;\n\n  constructor(message: string) {\n    this.message = message;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct MyComponent {\n  data: MyDataSource = new MyDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i <= 20; i++) {\n      this.data.pushData(new StringData(`Hello ${i}`));\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      LazyForEach(this.data, (item: StringData, index: number) => {\n        ListItem() {\n          ChildComponent({ data: item.message }) // 向自定义组件内传入变量\n            .onClick(() => {\n              item.message += '!';\n            })\n        }\n      }, (item: StringData, index: number) => index.toString())\n    }.cachedCount(5)\n  }\n}\n\n@ComponentV2\nstruct ChildComponent {\n  @Param @Require data: string = ''; // 接收来自外部的变量\n\n  build() {\n    Row() {\n      Text(this.data).fontSize(50)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "迁移Repeat"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Repeat本身支持与状态管理V2联合使用，将LazyForEach相关代码修改为Repeat后，即可实现对组件外部输入状态变量的观测。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "迁移后的示例如下所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例5 - 迁移后"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass StringData {\n  @Trace message: string;\n\n  constructor(message: string) {\n    this.message = message;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct MyComponent {\n  @Local data: StringData[] = [];\n\n  aboutToAppear() {\n    for (let i = 0; i <= 20; i++) {\n      this.data.push(new StringData(`Hello ${i}`));\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      Repeat(this.data)\n        .each((repeatItem) => {\n          ListItem() {\n            ChildComponent({ data: repeatItem.item.message }) // 向自定义组件内传入变量\n              .onClick(() => {\n                repeatItem.item.message += '!';\n              })\n          }\n        })\n        .key((item: StringData, index: number) => index.toString())\n        .virtualScroll()\n    }.cachedCount(5)\n  }\n}\n\n@ComponentV2\nstruct ChildComponent {\n  @Param @Require data: string = ''; // 接收来自外部的变量\n\n  build() {\n    Row() {\n      Text(this.data).fontSize(50)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行后界面如下图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(318502)/* ["default"] */.A) + "",
        width: "350",
        height: "715"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "拖拽排序",
      children: "拖拽排序"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "LazyForEach示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LazyForEach的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/interaction-property/ts-universal-attributes-drag-sorting/ts-universal-attributes-drag-sorting#onmove",
        children: "onMove"
      }), "属性提供了拖拽排序能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例6为典型用例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例6 - 迁移前"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* BasicDataSource代码见文档末尾BasicDataSource示例代码: string类型数组的BasicDataSource代码 */\n\nclass MyDataSource extends BasicDataSource {\n  private dataArray: string[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n\n  public moveDataWithoutNotify(from: number, to: number): void {\n    let tmp = this.dataArray.splice(from, 1);\n    this.dataArray.splice(to, 0, tmp[0]);\n  }\n\n  public pushData(data: string): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n\n@Entry\n@Component\nstruct Parent {\n  private data: MyDataSource = new MyDataSource();\n\n  aboutToAppear(): void {\n    for (let i = 0; i < 100; i++) {\n      this.data.pushData(i.toString());\n    }\n  }\n\n  build() {\n    Row() {\n      List() {\n        LazyForEach(this.data, (item: string) => {\n          ListItem() {\n            Text(item.toString())\n              .fontSize(16)\n              .textAlign(TextAlign.Center)\n              .size({ height: 100, width: '100%' })\n          }.margin(10)\n          .borderRadius(10)\n          .backgroundColor('#FFFFFFFF')\n        }, (item: string) => item)\n          .onMove((from: number, to: number) => { // 实现拖拽排序\n            this.data.moveDataWithoutNotify(from, to);\n          })\n      }\n      .width('100%')\n      .height('100%')\n      .backgroundColor('#FFDCDCDC')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "迁移Repeat"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Repeat具有与LazyForEach相同的onMove属性。将LazyForEach相关代码修改为Repeat后，即可实现拖拽排序。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "迁移后的示例如下所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例6 - 迁移后"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct Parent {\n  @Local data: string[] = [];\n\n  aboutToAppear(): void {\n    for (let i = 0; i < 100; i++) {\n      this.data.push(i.toString());\n    }\n  }\n\n  moveData(from: number, to: number) {\n    let tmp = this.data.splice(from, 1);\n    this.data.splice(to, 0, tmp[0]);\n  }\n\n  build() {\n    Row() {\n      List() {\n        Repeat(this.data)\n          .each((repeatItem) => {\n            ListItem() {\n              Text(repeatItem.item.toString())\n                .fontSize(16)\n                .textAlign(TextAlign.Center)\n                .size({ height: 100, width: '100%' })\n            }.margin(10)\n            .borderRadius(10)\n            .backgroundColor('#FFFFFFFF')\n          })\n          .key((item: string) => item)\n          .virtualScroll()\n          .onMove((from: number, to: number) => { // 实现拖拽排序\n            this.moveData(from, to);\n          })\n      }\n      .width('100%')\n      .height('100%')\n      .backgroundColor('#FFDCDCDC')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行后界面如下图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(132955)/* ["default"] */.A) + "",
        width: "350",
        height: "715"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "组件复用",
      children: "组件复用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "LazyForEach示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LazyForEach自身并不具备组件复用能力，为实现组件复用，需要与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable",
        children: "@Reusable"
      }), "装饰器配合使用（被@Reusable装饰的自定义组件具有复用能力）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例7演示了组件复用的典型场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例7 - 迁移前"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* BasicDataSource代码见文档末尾BasicDataSource示例代码: StringData类型数组的BasicDataSource代码 */\n\nclass MyDataSource extends BasicDataSource {\n  private dataArray: StringData[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): StringData {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: StringData): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n\nclass StringData {\n  message: string;\n\n  constructor(message: string) {\n    this.message = message;\n  }\n}\n\n@Entry\n@Component\nstruct MyComponent {\n  data: MyDataSource = new MyDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i <= 30; i++) {\n      this.data.pushData(new StringData(`Hello${i}`));\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      LazyForEach(this.data, (item: StringData, index: number) => {\n        ListItem() {\n          ChildComponent({ data: item })\n            .onAppear(() => {\n              console.info(`onAppear: ${item.message}`);\n            })\n        }\n      }, (item: StringData, index: number) => index.toString())\n    }.cachedCount(5)\n  }\n}\n\n@Reusable\n@Component\nstruct ChildComponent {\n  @State data: StringData = new StringData('');\n\n  aboutToAppear(): void {\n    console.info(`aboutToAppear: ${this.data.message}`);\n  }\n\n  aboutToRecycle(): void {\n    console.info(`aboutToRecycle: ${this.data.message}`);\n  }\n\n  // 对复用的组件进行数据更新\n  aboutToReuse(params: Record<string, ESObject>): void {\n    this.data = params.data as StringData;\n    console.info(`aboutToReuse: ${this.data.message}`);\n  }\n\n  build() {\n    Row() {\n      Text(this.data.message).fontSize(50)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "迁移Repeat"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Repeat本身具备组件复用能力，同时也支持与状态管理V2的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-new-reusablev2",
        children: "@ReusableV2"
      }), "装饰器联合使用。因此，迁移至Repeat后，其组件复用具有两种实现方案。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "直接使用Repeat自身的复用能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用@ReusableV2装饰器提供的复用能力。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要注意的是，Repeat默认启用自身的复用能力，且优先级高于@ReusableV2装饰器。若要使用@ReusableV2装饰器，必须先手动关闭Repeat自身的复用能力，即Repeat中", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-repeat/ts-rendering-control-repeat#virtualscrolloptions",
        children: "VirtualScrollOptions"
      }), "的reusable属性设置为false（@ReusableV2装饰器从API version 18开始支持，Repeat从API version 18开始支持关闭自身复用能力）。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例7 - 迁移方案1：使用Repeat自身的复用能力"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Repeat本身具备复用能力，且默认开启。将LazyForEach相关代码迁移至Repeat后，便已经具备了复用能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改后的示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class StringData {\n  message: string;\n\n  constructor(message: string) {\n    this.message = message;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct MyComponent {\n  @Local data: StringData[] = [];\n\n  aboutToAppear() {\n    for (let i = 0; i <= 30; i++) {\n      this.data.push(new StringData(`Hello${i}`));\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      Repeat(this.data) // Repeat自身具备复用功能\n        .each((repeatItem) => {\n          ListItem() {\n            Text(repeatItem.item.message).fontSize(50)\n          }\n        })\n        .key((item: StringData, index: number) => index.toString())\n        .virtualScroll()\n    }.cachedCount(5)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例7 - 迁移方案2：使用@ReusableV2装饰器"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若要使用@ReusableV2装饰器，首先需要通过.virtualScroll({ reusable: false })关闭Repeat自身的复用功能，再用@ReusableV2装饰需要复用的自定义组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相较于Repeat自身的复用，@ReusableV2装饰的自定义组件在回收和复用时，会触发aboutToRecycle和aboutToReuse两个生命周期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用@ReusableV2装饰器的迁移示例如下所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class StringData {\n  message: string;\n\n  constructor(message: string) {\n    this.message = message;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct MyComponent {\n  @Local data: StringData[] = [];\n\n  aboutToAppear() {\n    for (let i = 0; i <= 30; i++) {\n      this.data.push(new StringData(`Hello${i}`));\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      Repeat(this.data)\n        .each((repeatItem) => {\n          ListItem() {\n            ChildComponent({ data: repeatItem.item })\n              .onAppear(() => {\n                console.info(`onAppear: ${repeatItem.item.message}`);\n              })\n          }\n        })\n        .key((item: StringData, index: number) => index.toString())\n        .virtualScroll({ reusable: false }) // 关闭Repeat自身的复用功能（API 19）\n    }.cachedCount(5)\n  }\n}\n\n// 使用@ReusableV2实现组件复用（API 18）\n@ReusableV2\n@ComponentV2\nstruct ChildComponent {\n  @Param data: StringData = new StringData('');\n\n  aboutToAppear(): void {\n    console.info(`aboutToAppear: ${this.data.message}`);\n  }\n\n  aboutToRecycle(): void {\n    console.info(`aboutToRecycle: ${this.data.message}`);\n  }\n\n  aboutToReuse(): void {\n    console.info(`aboutToReuse: ${this.data.message}`);\n  }\n\n  build() {\n    Row() {\n      Text(this.data.message).fontSize(50)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行后界面如下图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(14557)/* ["default"] */.A) + "",
        width: "350",
        height: "715"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "模板渲染",
      children: "模板渲染"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "LazyForEach示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LazyForEach自身并不具备模板渲染能力。为实现模板渲染能力，需要开发者自己实现逻辑判断，为不同的数据项选择不同的渲染模板。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例8演示了模板渲染的典型场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例8 - 迁移前"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* BasicDataSource代码见文档末尾BasicDataSource示例代码: StringData类型数组的BasicDataSource代码 */\n\nclass MyDataSource extends BasicDataSource {\n  private dataArray: StringData[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): StringData {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: StringData): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n\nclass StringData {\n  message: string;\n  type: number;\n\n  constructor(message: string, type: number) {\n    this.message = message;\n    this.type = type;\n  }\n\n  getType(): number {\n    if (this.type >= 1) {\n      return 1;\n    } else {\n      return 0;\n    }\n  }\n}\n\n@Entry\n@Component\nstruct MyComponent {\n  data: MyDataSource = new MyDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i <= 200; i++) {\n      this.data.pushData(new StringData(`Hello${i}`, i % 2));\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      LazyForEach(this.data, (item: StringData, index: number) => {\n        ListItem() {\n          // 开发者自己实现逻辑判断，为不同的数据项选择不同的渲染模板\n          if (item.getType() == 0) {\n            // 模板A\n            ChildComponentA({ data: item })\n              .onAppear(() => {\n                console.info(`type A onAppear: ${item.message}`);\n              })\n          } else {\n            // 模板B\n            ChildComponentB({ data: item })\n              .onAppear(() => {\n                console.info(`type B onAppear: ${item.message}`);\n              })\n          }\n        }\n      }, (item: StringData, index: number) => index.toString())\n    }.cachedCount(5)\n  }\n}\n\n// 使用@Reusable实现组件复用\n@Reusable\n@Component\nstruct ChildComponentA {\n  @State data: StringData = new StringData('', 0);\n\n  aboutToAppear(): void {\n    console.info(`type A aboutToAppear: ${this.data.message}`);\n  }\n\n  aboutToRecycle(): void {\n    console.info(`type A aboutToRecycle: ${this.data.message}`);\n  }\n\n  aboutToReuse(params: Record<string, ESObject>): void {\n    this.data = params.data as StringData;\n    console.info(`type A aboutToReuse: ${this.data.message}`);\n  }\n\n  build() {\n    Row() {\n      Text(this.data.message).fontSize(50)\n      Button('Type A')\n    }\n  }\n}\n\n@Reusable\n@Component\nstruct ChildComponentB {\n  @State data: StringData = new StringData('', 0);\n\n  aboutToAppear(): void {\n    console.info(`type B aboutToAppear: ${this.data.message}`);\n  }\n\n  aboutToRecycle(): void {\n    console.info(`type B aboutToRecycle: ${this.data.message}`);\n  }\n\n  aboutToReuse(params: Record<string, ESObject>): void {\n    this.data = params.data as StringData;\n    console.info(`type B aboutToReuse: ${this.data.message}`);\n  }\n\n  build() {\n    Row() {\n      Text(this.data.message).fontSize(50).fontColor(Color.Gray)\n      Text('Type B')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "迁移Repeat"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Repeat本身具备模板渲染能力，开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-repeat/ts-rendering-control-repeat#templateid",
        children: "templateId"
      }), "方法为不同的数据项选择不同的模板，再通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-repeat/ts-rendering-control-repeat#template",
        children: "template"
      }), "方法为不同的模板配置不同的组件生成函数。同时，开发者仍然可以选择自己实现逻辑判断，为不同的数据项分配不同的模板。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要注意的是，如果开发者选择自己实现模板渲染，则需要关闭Repeat自身的复用功能。否则，Repeat在复用子组件时无法选择正确的模板，会导致渲染异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例8 - 迁移方案1：使用Repeat自身的模板渲染能力"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class StringData {\n  message: string;\n  type: number;\n\n  constructor(message: string, type: number) {\n    this.message = message;\n    this.type = type;\n  }\n\n  getType(): number {\n    if (this.type >= 1) {\n      return 1;\n    } else {\n      return 0;\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct MyComponent {\n  data: StringData[] = [];\n\n  aboutToAppear() {\n    for (let i = 0; i <= 200; i++) {\n      this.data.push(new StringData(`Hello${i}`, i % 2));\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      Repeat(this.data)\n        .each((repeatItem) => {\n          ListItem() {\n            Text('Default item')\n          }\n        })\n        .template('A', (repeatItem) => { // 模板A\n          ListItem() {\n            Row() {\n              Text(repeatItem.item.message).fontSize(50)\n              Button('Type A')\n            }\n          }\n        })\n        .template('B', (repeatItem) => { // 模板B\n          ListItem() {\n            Row() {\n              Text(repeatItem.item.message).fontSize(50).fontColor(Color.Gray)\n              Text('Type B')\n            }\n          }\n        })\n        .templateId((item: StringData) => { // 为不同的数据项选择不同的模板\n          if (item.getType() == 0) {\n            return 'A';\n          } else {\n            return 'B';\n          }\n        })\n        .key((item: StringData, index: number) => index.toString())\n        .virtualScroll()\n    }.cachedCount(5)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例8 - 迁移方案2：由开发者实现模板渲染能力"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class StringData {\n  message: string;\n  type: number;\n\n  constructor(message: string, type: number) {\n    this.message = message;\n    this.type = type;\n  }\n\n  getType(): number {\n    if (this.type >= 1) {\n      return 1;\n    } else {\n      return 0;\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct MyComponent {\n  data: StringData[] = [];\n\n  aboutToAppear() {\n    for (let i = 0; i <= 200; i++) {\n      this.data.push(new StringData(`Hello${i}`, i % 2));\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      Repeat(this.data)\n        .each((repeatItem) => {\n          ListItem() {\n            // 开发者自己实现逻辑判断，为不同的数据项选择不同的渲染模板\n            if (repeatItem.item.getType() == 0) {\n              ChildComponentA({ data: repeatItem.item }) // 模板A\n                .onAppear(() => {\n                  console.info(`type A onAppear: ${repeatItem.item.message}`);\n                })\n            } else {\n              ChildComponentB({ data: repeatItem.item }) // 模板B\n                .onAppear(() => {\n                  console.info(`type B onAppear: ${repeatItem.item.message}`);\n                })\n            }\n          }\n        })\n        .key((item: StringData, index: number) => index.toString())\n        .virtualScroll({ reusable: false }) // 关闭Repeat自身的复用功能（API 19），避免渲染异常\n    }.cachedCount(5)\n  }\n}\n\n// 使用@ReusableV2实现组件复用（API version 18开始支持使用）\n@ReusableV2\n@ComponentV2\nstruct ChildComponentA {\n  @Param data: StringData = new StringData('', 0);\n\n  aboutToAppear(): void {\n    console.info(`type A aboutToAppear: ${this.data.message}`);\n  }\n\n  aboutToRecycle(): void {\n    console.info(`type A aboutToRecycle: ${this.data.message}`);\n  }\n\n  aboutToReuse(): void {\n    console.info(`type A aboutToReuse: ${this.data.message}`);\n  }\n\n  build() {\n    Row() {\n      Text(this.data.message).fontSize(50)\n      Button('Type A')\n    }\n  }\n}\n\n@ReusableV2\n@ComponentV2\nstruct ChildComponentB {\n  @Param data: StringData = new StringData('', 0);\n\n  aboutToAppear(): void {\n    console.info(`type B aboutToAppear: ${this.data.message}`);\n  }\n\n  aboutToRecycle(): void {\n    console.info(`type B aboutToRecycle: ${this.data.message}`);\n  }\n\n  aboutToReuse(): void {\n    console.info(`type B aboutToReuse: ${this.data.message}`);\n  }\n\n  build() {\n    Row() {\n      Text(this.data.message).fontSize(50).fontColor(Color.Gray)\n      Text('Type B')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行后界面如下图所示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(550216)/* ["default"] */.A) + "",
        width: "350",
        height: "715"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "basicdatasource示例代码",
      children: "BasicDataSource示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "string类型数组的basicdatasource代码",
      children: "string类型数组的BasicDataSource代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// BasicDataSource实现了IDataSource接口，用于管理listener监听，以及通知LazyForEach数据更新\nclass BasicDataSource implements IDataSource {\n  private listeners: DataChangeListener[] = [];\n  private originDataArray: string[] = [];\n\n  public totalCount(): number {\n    return this.originDataArray.length;\n  }\n\n  public getData(index: number): string {\n    return this.originDataArray[index];\n  }\n\n  // 该方法为框架侧调用，为LazyForEach组件向其数据源处添加listener监听\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      console.info('add listener');\n      this.listeners.push(listener);\n    }\n  }\n\n  // 该方法为框架侧调用，为对应的LazyForEach组件在数据源处去除listener监听\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      console.info('remove listener');\n      this.listeners.splice(pos, 1);\n    }\n  }\n\n  // 通知LazyForEach组件需要重载所有子组件\n  notifyDataReload(): void {\n    this.listeners.forEach(listener => {\n      listener.onDataReloaded();\n    });\n  }\n\n  // 通知LazyForEach组件需要在index对应索引处添加子组件\n  notifyDataAdd(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index);\n      // 写法2：listener.onDatasetChange([{type: DataOperationType.ADD, index: index}]);\n    });\n  }\n\n  // 通知LazyForEach组件在index对应索引处数据有变化，需要重建该子组件\n  notifyDataChange(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataChange(index);\n      // 写法2：listener.onDatasetChange([{type: DataOperationType.CHANGE, index: index}]);\n    });\n  }\n\n  // 通知LazyForEach组件需要在index对应索引处删除该子组件\n  notifyDataDelete(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataDelete(index);\n      // 写法2：listener.onDatasetChange([{type: DataOperationType.DELETE, index: index}]);\n    });\n  }\n\n  // 通知LazyForEach组件将from索引和to索引处的子组件进行交换\n  notifyDataMove(from: number, to: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataMove(from, to);\n      // 写法2：listener.onDatasetChange(\n      // [{type: DataOperationType.EXCHANGE, index: {start: from, end: to}}]);\n    });\n  }\n\n  notifyDatasetChange(operations: DataOperation[]): void {\n    this.listeners.forEach(listener => {\n      listener.onDatasetChange(operations);\n    });\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stringdata类型数组的basicdatasource代码",
      children: "StringData类型数组的BasicDataSource代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class BasicDataSource implements IDataSource {\n  private listeners: DataChangeListener[] = [];\n  private originDataArray: StringData[] = [];\n\n  public totalCount(): number {\n    return this.originDataArray.length;\n  }\n\n  public getData(index: number): StringData {\n    return this.originDataArray[index];\n  }\n\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      console.info('add listener');\n      this.listeners.push(listener);\n    }\n  }\n\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      console.info('remove listener');\n      this.listeners.splice(pos, 1);\n    }\n  }\n\n  notifyDataReload(): void {\n    this.listeners.forEach(listener => {\n      listener.onDataReloaded();\n    });\n  }\n\n  notifyDataAdd(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index);\n    });\n  }\n\n  notifyDataChange(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataChange(index);\n    });\n  }\n\n  notifyDataDelete(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataDelete(index);\n    });\n  }\n\n  notifyDataMove(from: number, to: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataMove(from, to);\n    });\n  }\n\n  notifyDatasetChange(operations: DataOperation[]): void {\n    this.listeners.forEach(listener => {\n      listener.onDatasetChange(operations);\n    });\n  }\n}\n"
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
845826(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477629-9ca06b6c37da91c6f20a1115184ed8c0.gif");

},
128338(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957628-b64ac62e834313d9b9a711ffda2eb8d4.gif");

},
318502(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957630-a44d321f4ee3cd76a0a51806f6aa6dc6.gif");

},
693724(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437675-80c1634ebe627a371b4a1fa1787b3d96.gif");

},
550216(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437677-9b2919276a11e8ff6392c5778fe17459.gif");

},
132955(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477631-cdb048235175d99db32fba14381fc704.gif");

},
14557(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797982-f703c9be367d38e729c0e4f998568b42.gif");

},
993115(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797980-4b142b5fca2354bef825cb688a455bd0.gif");

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