"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["306698"], {
712080(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_v_1_v_2_guide_arkts_state_management_v_1_v_2_migration_guide_arkts_v_1_v_2_migration_inner_object_arkts_v_1_v_2_migration_inner_object_md_fea_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-v-1-v-2-guide-arkts-state-management-v-1-v-2-migration-guide-arkts-v-1-v-2-migration-inner-object-arkts-v-1-v-2-migration-inner-object-md-fea.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_v_1_v_2_guide_arkts_state_management_v_1_v_2_migration_guide_arkts_v_1_v_2_migration_inner_object_arkts_v_1_v_2_migration_inner_object_md_fea_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-object/arkts-v1-v2-migration-inner-object","title":"内置对象的迁移","description":"本文档主要介绍组件内置对象从V1向V2的迁移，涉及如下装饰器。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-object/arkts-v1-v2-migration-inner-object.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-object","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-object/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-object/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"内置对象的迁移","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-v1-v2-migration-inner-object","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"循环渲染迁移","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-rendering-control-repeat/"},"next":{"title":"AnimateTo使用迁移","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-animateto/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-inner-object/arkts-v1-v2-migration-inner-object.md


const frontMatter = {
	title: '内置对象的迁移',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-v1-v2-migration-inner-object',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '内置对象的迁移';

const assets = {

};



const toc = [{
  "value": "滚动组件",
  "id": "滚动组件",
  "level": 2
}, {
  "value": "List",
  "id": "list",
  "level": 3
}, {
  "value": "WaterFlow",
  "id": "waterflow",
  "level": 3
}, {
  "value": "Modifier",
  "id": "modifier",
  "level": 2
}, {
  "value": "attributeModifier",
  "id": "attributemodifier",
  "level": 3
}, {
  "value": "CommonModifier",
  "id": "commonmodifier",
  "level": 3
}, {
  "value": "组件Modifier",
  "id": "组件modifier",
  "level": 3
}, {
  "value": "AttributeUpdater",
  "id": "attributeupdater",
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
        id: "内置对象的迁移",
        children: "内置对象的迁移"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文档主要介绍组件内置对象从V1向V2的迁移，涉及如下装饰器。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "V1装饰器名称/场景"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "V2装饰器名称"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "滚动组件场景"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-makeobserved",
              children: "makeObserved"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-user-defined-modifier",
              children: "Modifier"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-makeobserved",
              children: "makeObserved"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
              children: "@ObservedV2"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
              children: "@Trace"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "滚动组件",
      children: "滚动组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "list",
      children: "List"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list#childrenmainsize12",
        children: "ChildrenMainSize"
      }), "来设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-list/ts-container-list",
        children: "List"
      }), "的子组件在主轴方向的大小信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在状态管理V1中，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
        children: "@State"
      }), "装饰观察其api调用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ListExample {\n  private arr: Array<number> = new Array(10).fill(0);\n  private scroller: ListScroller = new ListScroller();\n  @State listSpace: number = 10;\n  @State listChildrenSize: ChildrenMainSize = new ChildrenMainSize(100);\n\n  build() {\n    Column() {\n      Button('change Default').onClick(() => {\n        this.listChildrenSize.childDefaultSize += 10;\n      })\n\n      Button('splice 5').onClick(() => {\n        this.listChildrenSize.splice(0, 5, [100, 100, 100, 100, 100]);\n      })\n\n      Button('update 5').onClick(() => {\n        this.listChildrenSize.update(0, 200);\n      })\n\n      List({ space: this.listSpace, scroller: this.scroller }) {\n        ForEach(this.arr, (item: number) => {\n          ListItem() {\n            Text(`item-` + item)\n          }.backgroundColor(Color.Pink)\n        })\n      }\n      .childrenMainSize(this.listChildrenSize) // 10\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在状态管理V2中，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local",
        children: "@Local"
      }), "只能观察本身的变化，无法观察第一层的变化，而由于ChildrenMainSize定义在List组件框架中，开发者无法使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
        children: "@Trace"
      }), "来标注ChildrenMainSize属性。可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-makeobserved",
        children: "makeObserved"
      }), "替代。从API version 22开始，可以无需使用makeObserved，直接使用@Local标注的ChildrenMainSize设置List的子组件在主轴方向的大小信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n\n@Entry\n@ComponentV2\nstruct ListExample {\n  private arr: Array<number> = new Array(10).fill(0);\n  private scroller: ListScroller = new ListScroller();\n  listSpace: number = 10;\n  // 使用makeObserved的能力来观测ChildrenMainSize\n  listChildrenSize: ChildrenMainSize = UIUtils.makeObserved(new ChildrenMainSize(100));\n\n  build() {\n    Column() {\n      Button('change Default').onClick(() => {\n        this.listChildrenSize.childDefaultSize += 10;\n      })\n\n      Button('splice 5').onClick(() => {\n        this.listChildrenSize.splice(0, 5, [100, 100, 100, 100, 100]);\n      })\n\n      Button('update 5').onClick(() => {\n        this.listChildrenSize.update(0, 200);\n      })\n\n      List({ space: this.listSpace, scroller: this.scroller }) {\n        ForEach(this.arr, (item: number) => {\n          ListItem() {\n            Text(`item-` + item)\n          }.backgroundColor(Color.Pink)\n        })\n      }\n      .childrenMainSize(this.listChildrenSize) // 10\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "waterflow",
      children: "WaterFlow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/scroll-and-swipe/ts-container-waterflow/ts-container-waterflow#waterflowsections12",
        children: "WaterFlowSections"
      }), "来设置WaterFlow瀑布流分组信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要注意的是，数组arr的长度需要与WaterFlowSections的所有SectionOptions的itemsCount总和一致，否则WaterFlow无法处理，导致UI不刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下两个示例请按照push option -> splice option -> update option的顺序进行点击。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在状态管理V1中，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
        children: "@State"
      }), "装饰观察其api调用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct WaterFlowSample {\n  @State colors: Color[] = [Color.Red, Color.Orange, Color.Yellow, Color.Green, Color.Blue, Color.Pink];\n  @State sections: WaterFlowSections = new WaterFlowSections();\n  scroller: Scroller = new Scroller();\n  @State private arr: Array<number> = new Array(9).fill(0);\n  oneColumnSection: SectionOptions = {\n    itemsCount: 4,\n    crossCount: 1,\n    columnsGap: '5vp',\n    rowsGap: 10,\n  };\n  twoColumnSection: SectionOptions = {\n    itemsCount: 2,\n    crossCount: 2,\n  };\n  lastSection: SectionOptions = {\n    itemsCount: 3,\n    crossCount: 3,\n  };\n\n  aboutToAppear(): void {\n    let sectionOptions: SectionOptions[] = [this.oneColumnSection, this.twoColumnSection, this.lastSection];\n    this.sections.splice(0, 0, sectionOptions);\n  }\n\n  build() {\n    Column() {\n      Text(`${this.arr.length}`)\n\n      Button('push option').onClick(() => {\n        let section: SectionOptions = {\n          itemsCount: 1,\n          crossCount: 1,\n        };\n        this.sections.push(section);\n        this.arr.push(100);\n      })\n\n      Button('splice option').onClick(() => {\n        let section: SectionOptions = {\n          itemsCount: 8,\n          crossCount: 2,\n        };\n        this.sections.splice(0, this.arr.length, [section]);\n        this.arr = new Array(8).fill(10);\n      })\n\n      Button('update option').onClick(() => {\n        let section: SectionOptions = {\n          itemsCount: 8,\n          crossCount: 2,\n        };\n        this.sections.update(1, section);\n        this.arr = new Array(16).fill(1);\n      })\n\n      WaterFlow({ scroller: this.scroller, sections: this.sections }) {\n        ForEach(this.arr, (item: number) => {\n          FlowItem() {\n            Text(`${item}`)\n              .border({ width: 1 })\n              .backgroundColor(this.colors[item % 6])\n              .height(30)\n              .width(50)\n          }\n        })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在状态管理V2中，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local",
        children: "@Local"
      }), "只能观察本身的变化，无法观察第一层的变化，由于WaterFlowSections定义在框架中，开发者无法使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
        children: "@Trace"
      }), "标注其属性，此时可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-makeobserved",
        children: "makeObserved"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n\n@Entry\n@ComponentV2\nstruct WaterFlowSample {\n  colors: Color[] = [Color.Red, Color.Orange, Color.Yellow, Color.Green, Color.Blue, Color.Pink];\n  // 使用makeObserved的能力来观测WaterFlowSections\n  sections: WaterFlowSections = UIUtils.makeObserved(new WaterFlowSections());\n  scroller: Scroller = new Scroller();\n  @Local private arr: Array<number> = new Array(9).fill(0);\n  oneColumnSection: SectionOptions = {\n    itemsCount: 4,\n    crossCount: 1,\n    columnsGap: '5vp',\n    rowsGap: 10,\n  };\n  twoColumnSection: SectionOptions = {\n    itemsCount: 2,\n    crossCount: 2,\n  };\n  lastSection: SectionOptions = {\n    itemsCount: 3,\n    crossCount: 3,\n  };\n\n  aboutToAppear(): void {\n    let sectionOptions: SectionOptions[] = [this.oneColumnSection, this.twoColumnSection, this.lastSection];\n    this.sections.splice(0, 0, sectionOptions);\n  }\n\n  build() {\n    Column() {\n      Text(`${this.arr.length}`)\n\n      Button('push option').onClick(() => {\n        let section: SectionOptions = {\n          itemsCount: 1,\n          crossCount: 1,\n        };\n        this.sections.push(section);\n        this.arr.push(100);\n      })\n\n      Button('splice option').onClick(() => {\n        let section: SectionOptions = {\n          itemsCount: 8,\n          crossCount: 2,\n        };\n        this.sections.splice(0, this.arr.length, [section]);\n        this.arr = new Array(8).fill(10);\n      })\n\n      Button('update option').onClick(() => {\n        let section: SectionOptions = {\n          itemsCount: 8,\n          crossCount: 2,\n        };\n        this.sections.update(1, section);\n        this.arr = new Array(16).fill(1);\n      })\n\n      WaterFlow({ scroller: this.scroller, sections: this.sections }) {\n        ForEach(this.arr, (item: number) => {\n          FlowItem() {\n            Text(`${item}`)\n              .border({ width: 1 })\n              .backgroundColor(this.colors[item % 6])\n              .height(30)\n              .width(50)\n          }\n        })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "modifier",
      children: "Modifier"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "attributemodifier",
      children: "attributeModifier"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#attributemodifier",
        children: "attributeModifier"
      }), "动态设置组件的属性方法。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在状态管理V1中，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
        children: "@State"
      }), "装饰观察其变化。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class MyButtonModifier implements AttributeModifier<ButtonAttribute> {\n  public isDark: boolean = false;\n\n  applyNormalAttribute(instance: ButtonAttribute): void {\n    if (this.isDark) {\n      instance.backgroundColor(Color.Black);\n    } else {\n      instance.backgroundColor(Color.Red);\n    }\n  }\n}\n\n@Entry\n@Component\nstruct AttributeDemo {\n  @State modifier: MyButtonModifier = new MyButtonModifier();\n\n  build() {\n    Row() {\n      Column() {\n        Button('Button')\n          .attributeModifier(this.modifier)\n          .onClick(() => {\n            this.modifier.isDark = !this.modifier.isDark;\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在状态管理V2中，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local",
        children: "@Local"
      }), "只能观察本身的变化，无法观察第一层的变化，如果要观察attributeModifier的属性变化，可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-makeobserved",
        children: "makeObserved"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n\nclass MyButtonModifier implements AttributeModifier<ButtonAttribute> {\n  public isDark: boolean = false;\n\n  applyNormalAttribute(instance: ButtonAttribute): void {\n    if (this.isDark) {\n      instance.backgroundColor(Color.Black);\n    } else {\n      instance.backgroundColor(Color.Red);\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct AttributeDemo {\n  // 使用makeObserved的能力观测attributeModifier的属性this.modifier\n  modifier: MyButtonModifier = UIUtils.makeObserved(new MyButtonModifier());\n\n  build() {\n    Row() {\n      Column() {\n        Button('Button')\n          .attributeModifier(this.modifier)\n          .onClick(() => {\n            this.modifier.isDark = !this.modifier.isDark;\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "commonmodifier",
      children: "CommonModifier"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["动态设置组件的属性类。以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#%E8%87%AA%E5%AE%9A%E4%B9%89modifier",
        children: "CommonModifier"
      }), "为例。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在状态管理V1中，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
        children: "@State"
      }), "装饰观察其变化。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体实例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { CommonModifier } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\nclass MyModifier extends CommonModifier {\n  applyNormalAttribute(instance: CommonAttribute): void {\n    super.applyNormalAttribute?.(instance);\n  }\n\n  public setGroup1(): void {\n    this.borderStyle(BorderStyle.Dotted);\n    this.borderWidth(8);\n  }\n\n  public setGroup2(): void {\n    this.borderStyle(BorderStyle.Dashed);\n    this.borderWidth(8);\n  }\n}\n\n@Component\nstruct MyImage1 {\n  @Link modifier: CommonModifier;\n\n  build() {\n    // 此处'app.media.app_icon'仅作示例，请开发者自行替换，否则imageSource创建失败会导致后续无法正常执行。\n    Image($r('app.media.app_icon'))\n      .attributeModifier(this.modifier as MyModifier)\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State myModifier: CommonModifier = new MyModifier().width(100).height(100).margin(10);\n  index: number = 0;\n\n  build() {\n    Column() {\n      Button($r('app.string.EntryAbility_label'))\n        .margin(10)\n        .onClick(() => {\n          hilog.info(DOMAIN, 'testTag', 'Modifier', 'onClick');\n          this.index++;\n          if (this.index % 2 === 1) {\n            (this.myModifier as MyModifier).setGroup1();\n            hilog.info(DOMAIN, 'testTag', 'Modifier', 'setGroup1');\n          } else {\n            (this.myModifier as MyModifier).setGroup2();\n            hilog.info(DOMAIN, 'testTag', 'Modifier', 'setGroup2');\n          }\n        })\n\n      MyImage1({ modifier: this.myModifier })\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在状态管理V2中，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local",
        children: "@Local"
      }), "只能观察本身的变化，无法观察第一层的变化，又因为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-attribute-modifier/ts-universal-attributes-attribute-modifier#%E8%87%AA%E5%AE%9A%E4%B9%89modifier",
        children: "CommonModifier"
      }), "在框架内是通过其属性触发刷新，此时可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-makeobserved",
        children: "makeObserved"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils, CommonModifier } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\nclass MyModifier extends CommonModifier {\n  applyNormalAttribute(instance: CommonAttribute): void {\n    super.applyNormalAttribute?.(instance);\n  }\n\n  public setGroup1(): void {\n    this.borderStyle(BorderStyle.Dotted);\n    this.borderWidth(8);\n  }\n\n  public setGroup2(): void {\n    this.borderStyle(BorderStyle.Dashed);\n    this.borderWidth(8);\n  }\n}\n\n@ComponentV2\nstruct MyImage1 {\n  @Param @Require modifier: CommonModifier;\n\n  build() {\n    // 此处'app.media.app_icon'仅作示例，请开发者自行替换，否则imageSource创建失败会导致后续无法正常执行。\n    Image($r('app.media.app_icon'))\n      .attributeModifier(this.modifier as MyModifier)\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  // 使用makeObserved的能力来观测CommonModifier\n  @Local myModifier: CommonModifier = UIUtils.makeObserved(new MyModifier().width(100).height(100).margin(10));\n  index: number = 0;\n\n  build() {\n    Column() {\n      Button($r('app.string.EntryAbility_label'))\n        .margin(10)\n        .onClick(() => {\n          hilog.info(DOMAIN, 'testTag', 'Modifier', 'onClick');\n          this.index++;\n          if (this.index % 2 === 1) {\n            (this.myModifier as MyModifier).setGroup1();\n            hilog.info(DOMAIN, 'testTag', 'Modifier', 'setGroup1');\n          } else {\n            (this.myModifier as MyModifier).setGroup2();\n            hilog.info(DOMAIN, 'testTag', 'Modifier', 'setGroup2');\n          }\n        })\n\n      MyImage1({ modifier: this.myModifier })\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "组件modifier",
      children: "组件Modifier"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动态设置组件的属性类。以Text组件为例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在状态管理V1中，可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
        children: "@State"
      }), "装饰观察其变化。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { TextModifier } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\nclass MyModifier extends TextModifier {\n  applyNormalAttribute(instance: TextModifier): void {\n    super.applyNormalAttribute?.(instance);\n  }\n\n  public setGroup1(): void {\n    this.fontSize(50);\n    this.fontColor(Color.Pink);\n  }\n\n  public setGroup2(): void {\n    this.fontSize(50);\n    this.fontColor(Color.Gray);\n  }\n}\n\n@Component\nstruct MyImage1 {\n  @Link modifier: TextModifier;\n  index: number = 0;\n\n  build() {\n    Column() {\n      Text('Test')\n        .attributeModifier(this.modifier as MyModifier)\n\n      Button($r('app.string.EntryAbility_label'))\n        .margin(10)\n        .onClick(() => {\n          hilog.info(DOMAIN, 'testTag', 'Modifier', 'onClick');\n          this.index++;\n          if (this.index % 2 === 1) {\n            (this.modifier as MyModifier).setGroup1();\n            hilog.info(DOMAIN, 'testTag', 'Modifier', 'setGroup1');\n          } else {\n            (this.modifier as MyModifier).setGroup2();\n            hilog.info(DOMAIN, 'testTag', 'Modifier', 'setGroup2');\n          }\n        })\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State myModifier: TextModifier = new MyModifier().width(100).height(100).margin(10);\n  index: number = 0;\n\n  build() {\n    Column() {\n      MyImage1({ modifier: this.myModifier })\n\n      Button('replace whole')\n        .margin(10)\n        .onClick(() => {\n          this.myModifier = new MyModifier().backgroundColor(Color.Orange);\n        })\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["但在状态管理V2中，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local",
        children: "@Local"
      }), "只能观察本身的变化，无法观察第一层的变化，此时可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-makeobserved",
        children: "makeObserved"
      }), "替代。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils, TextModifier } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\nclass MyModifier extends TextModifier {\n  applyNormalAttribute(instance: TextModifier): void {\n    super.applyNormalAttribute?.(instance);\n  }\n\n  public setGroup1(): void {\n    this.fontSize(50);\n    this.fontColor(Color.Pink);\n  }\n\n  public setGroup2(): void {\n    this.fontSize(50);\n    this.fontColor(Color.Gray);\n  }\n}\n\n@ComponentV2\nstruct MyImage1 {\n  @Param @Require modifier: TextModifier;\n  index: number = 0;\n\n  build() {\n    Column() {\n      Text('Test')\n        .attributeModifier(this.modifier as MyModifier)\n\n      Button($r('app.string.EntryAbility_label'))\n        .margin(10)\n        .onClick(() => {\n          hilog.info(DOMAIN, 'testTag', 'Modifier', 'onClick');\n          this.index++;\n          if (this.index % 2 === 1) {\n            (this.modifier as MyModifier).setGroup1();\n            hilog.info(DOMAIN, 'testTag', 'Modifier', 'setGroup1');\n          } else {\n            (this.modifier as MyModifier).setGroup2();\n            hilog.info(DOMAIN, 'testTag', 'Modifier', 'setGroup2');\n          }\n        })\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  // 使用makeObserved的能力观测TextModifier\n  @Local myModifier: TextModifier = UIUtils.makeObserved(new MyModifier().width(100).height(100).margin(10));\n  index: number = 0;\n\n  build() {\n    Column() {\n      MyImage1({ modifier: this.myModifier })\n\n      Button('replace whole')\n        .margin(10)\n        .onClick(() => {\n          this.myModifier = UIUtils.makeObserved(new MyModifier().backgroundColor(Color.Orange));\n        })\n    }\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "attributeupdater",
      children: "AttributeUpdater"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-user-defined-extension-attributeupdater",
        children: "AttributeUpdater"
      }), "可以将属性直接设置给组件，无需标记为状态变量即可直接触发UI更新。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在状态管理V1中，开发者希望通过修改MyButtonModifier的flag来改变绑定在Button上的属性。由于状态管理V1的@State装饰器支持自身及第一层对象属性的观察能力，因此只需用@State装饰AttributeUpdater，即可监听其变化并触发属性更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { AttributeUpdater } from '@kit.ArkUI';\n\nclass MyButtonModifier extends AttributeUpdater<ButtonAttribute> {\n  public flag: boolean = false;\n\n  initializeModifier(instance: ButtonAttribute): void {\n    instance.backgroundColor('#ff2787d9')\n      .width('50%')\n      .height(30)\n  }\n\n  applyNormalAttribute(instance: ButtonAttribute): void {\n    if (this.flag) {\n      instance.borderWidth(2);\n    } else {\n      instance.borderWidth(10);\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State modifier: MyButtonModifier = new MyButtonModifier();\n\n  build() {\n    Row() {\n      Column() {\n        Button('Button')\n          .attributeModifier(this.modifier)\n        Button('Update')\n          .onClick(() => {\n            this.modifier.flag = !this.modifier.flag;\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "与状态管理V1不同，状态管理V2的@Local仅观察自身变化，因此MyButtonModifier需添加@ObservedV2装饰器，flag需要被@Trace装饰，并且需要在组件创建过程中读取flag以建立其与Button组件的联系。在AttributeUpdater场景中，需在initializeModifier中读取flag（如示例所示），否则无法建立关联。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { AttributeUpdater } from '@kit.ArkUI';\n\n@ObservedV2\nclass MyButtonModifier extends AttributeUpdater<ButtonAttribute> {\n  @Trace public flag: boolean = false;\n\n  initializeModifier(instance: ButtonAttribute): void {\n    // initializeModifier会在组件初始化阶段回调，需要在这个地方触发下flag的读，使其建立Button组件的关联。\n    this.flag;\n    instance.backgroundColor('#ff2787d9')\n      .width('50%')\n      .height(30)\n  }\n\n  applyNormalAttribute(instance: ButtonAttribute): void {\n    if (this.flag) {\n      instance.borderWidth(2);\n    } else {\n      instance.borderWidth(10);\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  // 状态管理V2装饰器仅观察本层，即当前可以观察到modifier整体赋值的变化。\n  @Local modifier: MyButtonModifier = new MyButtonModifier();\n\n  build() {\n    Row() {\n      Column() {\n        Button('Button')\n          .attributeModifier(this.modifier)\n        Button('Update')\n          .onClick(() => {\n            this.modifier.flag = !this.modifier.flag;\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
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