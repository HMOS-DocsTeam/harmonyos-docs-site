"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["297445"], {
846640(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_ui_paradigm_basic_syntax_arkts_custom_components_arkts_component_reusable_arkts_reusable_arkts_reusable_md_8d6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-ui-paradigm-basic-syntax-arkts-custom-components-arkts-component-reusable-arkts-reusable-arkts-reusable-md-8d6.json
var site_docs_arkui_arkts_ui_development_arkts_ui_paradigm_basic_syntax_arkts_custom_components_arkts_component_reusable_arkts_reusable_arkts_reusable_md_8d6_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable/arkts-reusable","title":"@Reusable装饰器：V1组件复用","description":"@Reusable装饰的自定义组件支持组件复用。当自定义组件从组件树上移除时，会被存入缓存池，后续在创建相同类型的组件节点时，将优先复用缓存池中的组件对象，从而避免重复创建和销毁，提升性能。","source":"@site/docs/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable/arkts-reusable.md","sourceDirName":"arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable","slug":"/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"@Reusable装饰器：V1组件复用","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-reusable","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自定义组件成员属性访问限定符使用限制","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-custom-components-access-restrictions/"},"next":{"title":"@ReusableV2装饰器：V2组件复用","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-new-reusablev2/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable/arkts-reusable.md


const frontMatter = {
	title: '@Reusable装饰器：V1组件复用',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-reusable',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '@Reusable装饰器：V1组件复用';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "限制条件",
  "id": "限制条件",
  "level": 2
}, {
  "value": "仅用于自定义组件",
  "id": "仅用于自定义组件",
  "level": 3
}, {
  "value": "状态变量更新限制",
  "id": "状态变量更新限制",
  "level": 3
}, {
  "value": "组件结构需一致",
  "id": "组件结构需一致",
  "level": 3
}, {
  "value": "不支持ComponentContent",
  "id": "不支持componentcontent",
  "level": 3
}, {
  "value": "不建议嵌套使用",
  "id": "不建议嵌套使用",
  "level": 3
}, {
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "动态布局更新",
  "id": "动态布局更新",
  "level": 3
}, {
  "value": "列表滚动配合LazyForEach使用",
  "id": "列表滚动配合lazyforeach使用",
  "level": 3
}, {
  "value": "列表滚动-if使用场景",
  "id": "列表滚动-if使用场景",
  "level": 3
}, {
  "value": "列表滚动-Foreach使用场景",
  "id": "列表滚动-foreach使用场景",
  "level": 3
}, {
  "value": "Grid使用场景",
  "id": "grid使用场景",
  "level": 3
}, {
  "value": "WaterFlow使用场景",
  "id": "waterflow使用场景",
  "level": 3
}, {
  "value": "Swiper使用场景",
  "id": "swiper使用场景",
  "level": 3
}, {
  "value": "列表滚动-ListItemGroup使用场景",
  "id": "列表滚动-listitemgroup使用场景",
  "level": 3
}, {
  "value": "多种条目类型使用场景",
  "id": "多种条目类型使用场景",
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
        id: "reusable装饰器v1组件复用",
        children: "@Reusable装饰器：V1组件复用"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Reusable装饰的自定义组件支持组件复用。当自定义组件从组件树上移除时，会被存入缓存池，后续在创建相同类型的组件节点时，将优先复用缓存池中的组件对象，从而避免重复创建和销毁，提升性能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(262876)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "API version 10开始支持@Reusable，支持在ArkTS中使用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["关于组件复用的原理与使用、优化方法、适用场景，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-component-reuse",
        children: "组件复用最佳实践"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Reusable用于装饰自定义组件，表示该自定义组件具有被复用的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发复杂界面时，UI渲染效率是一个需要考虑的问题。例如在长列表快速滑动时，大量列表项的创建和销毁可能导致界面卡顿。组件复用是一种优化UI性能的重要方法。通过复用先前创建并且已经下树的组件对象，降低组件创建和销毁的频率，从而减小计算开销，提升UI渲染效率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(432087)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Reusable装饰的自定义组件在从组件树中移除时，自定义组件（包含视图节点、组件实例和状态上下文）将被放入其父自定义组件的缓存池中。后续创建新自定义组件节点时，将优先复用缓存池中的节点，从而节约组件重新创建的时间。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["@Reusable提供了", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttorecycle10",
          children: "aboutToRecycle"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttoreuse10",
          children: "aboutToReuse"
        }), "两个生命周期，在组件被回收时调用aboutToRecycle，在组件被复用时调用aboutToReuse。开发者可以在这两个生命周期中实现组件回收、复用相关的业务逻辑。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Reusable装饰的自定义组件下有子组件时，会在回收和复用时递归调用子组件的aboutToRecycle和aboutToReuse（与子组件是否被@Reusable标记无关），直到遍历完所有子组件。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["组件复用前后应保持组件结构不变。针对组件结构存在差异的场景，可以使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/other-property/ts-universal-attributes-reuse-id/ts-universal-attributes-reuse-id",
          children: "reuseId"
        }), "来区分不同结构的复用组件。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制条件",
      children: "限制条件"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "仅用于自定义组件",
      children: "仅用于自定义组件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@Reusable装饰器仅用于自定义组件", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#component",
        children: "@Component"
      }), "，不可与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builder",
        children: "@Builder"
      }), "搭配使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@Reusable不支持跟", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#componentv2",
        children: "@ComponentV2"
      }), "搭配使用，@ComponentV2组件复用推荐", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-new-reusablev2",
        children: "@ReusableV2装饰器"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ComponentContent } from '@kit.ArkUI';\n\n// @Builder不能与@Reusable搭配使用。\n// @Reusable\n@Builder\nfunction buildCreativeLoadingDialog(closedClick: () => void) {\n  Crash();\n}\n\n@Component\nexport struct Crash {\n  build() {\n    Column() {\n      Text('Crash')\n        .fontSize(12)\n        .lineHeight(18)\n        .fontColor(Color.Blue)\n        .margin({\n          left: 6\n        })\n    }.width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n  private uiContext = this.getUIContext();\n\n  build() {\n    RelativeContainer() {\n      Text(this.message)\n        .id('Index')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n        .onClick(() => {\n          let contentNode = new ComponentContent(this.uiContext, wrapBuilder(buildCreativeLoadingDialog), () => {\n          });\n          this.uiContext.getPromptAction().openCustomDialog(contentNode);\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "状态变量更新限制",
      children: "状态变量更新限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "被@Reusable装饰的自定义组件在复用时，会递归调用该自定义组件及其所有子组件的aboutToReuse回调函数。若在子组件的aboutToReuse函数中修改了父组件的状态变量，此次修改将不会生效，请避免此类用法。若需设置父组件的状态变量，可使用setTimeout设置延迟执行，将任务移出组件复用的作用范围，使修改生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在子组件的aboutToReuse中，直接修改父组件的状态变量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class IncorrectBasicDataSource implements IDataSource {\n  private listener: DataChangeListener | undefined = undefined;\n  public dataArray: number[] = [];\n\n  totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  getData(index: number): number {\n    return this.dataArray[index];\n  }\n\n  registerDataChangeListener(listener: DataChangeListener): void {\n    this.listener = listener;\n  }\n\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    this.listener = undefined;\n  }\n}\n\n@Entry\n@Component\nstruct IncorrectIndex {\n  private data: IncorrectBasicDataSource = new IncorrectBasicDataSource();\n\n  aboutToAppear(): void {\n    for (let index = 1; index < 20; index++) {\n      this.data.dataArray.push(index);\n    }\n  }\n\n  build() {\n    List() {\n      LazyForEach(this.data, (item: number, index: number) => {\n        ListItem() {\n          IncorrectReuseComponent({ num: item });\n        }\n      }, (item: number, index: number) => index.toString())\n    }.cachedCount(0)\n  }\n}\n\n@Reusable\n@Component\nstruct IncorrectReuseComponent {\n  @State num: number = 0;\n\n  aboutToReuse(params: ESObject): void {\n    this.num = params.num;\n  }\n\n  build() {\n    Column() {\n      Text('ReuseComponent num:' + this.num.toString())\n      IncorrectReuseComponentChild({ num: this.num })\n      Button('plus')\n        .onClick(() => {\n          this.num += 10;\n        })\n    }\n    .height(200)\n  }\n}\n\n@Component\nstruct IncorrectReuseComponentChild {\n  @Link num: number;\n\n  aboutToReuse(params: ESObject): void {\n    this.num = -1 * params.num;\n  }\n\n  build() {\n    Text('ReuseComponentChild num:' + this.num.toString())\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在子组件的aboutToReuse中，使用setTimeout，将修改移出组件复用的作用范围。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class BasicDataSource implements IDataSource {\n  private listener: DataChangeListener | undefined = undefined;\n  public dataArray: number[] = [];\n\n  totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  getData(index: number): number {\n    return this.dataArray[index];\n  }\n\n  registerDataChangeListener(listener: DataChangeListener): void {\n    this.listener = listener;\n  }\n\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    this.listener = undefined;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private data: BasicDataSource = new BasicDataSource();\n\n  aboutToAppear(): void {\n    for (let index = 1; index <= 20; index++) { // 循环20次\n      this.data.dataArray.push(index);\n    }\n  }\n\n  build() {\n    List() {\n      LazyForEach(this.data, (item: number, index: number) => {\n        ListItem() {\n          ReuseComponent({ num: item })\n        }\n      }, (item: number, index: number) => index.toString())\n    }.cachedCount(0)\n  }\n}\n\n@Reusable\n@Component\nstruct ReuseComponent {\n  @State num: number = 0;\n\n  aboutToReuse(params: ESObject): void {\n    this.num = params.num;\n  }\n\n  build() {\n    Column() {\n      Text('ReuseComponent num:' + this.num.toString())\n      ReuseComponentChild({ num: this.num })\n      Button('plus')\n        .onClick(() => {\n          this.num += 10; // 每次点击增加10\n        })\n    }\n    .height(200)\n  }\n}\n\n@Component\nstruct ReuseComponentChild {\n  @Link num: number;\n\n  aboutToReuse(params: ESObject): void {\n    setTimeout(() => {\n      this.num = -1 * params.num;\n    }, 1)\n  }\n\n  build() {\n    Text('ReuseComponentChild num:' + this.num.toString());\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "组件结构需一致",
      children: "组件结构需一致"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "被@Reusable装饰的自定义组件在复用前后，应保持组件的结构不变。否则，会在复用过程中创建或销毁子组件，降低复用效率和性能，甚至造成应用行为异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于复用过程中创建的子组件，框架会在其创建后依次调用aboutToReuse方法和aboutToAppear方法。在调用aboutToReuse方法时，由于其aboutToAppear方法还未执行，且内部子组件还未创建，因此aboutToReuse方法中依赖aboutToAppear方法执行结果，或依赖内部子组件状态的相关操作会引起预期外的行为。在调用aboutToReuse方法后，框架会再调用aboutToAppear方法并初始化组件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["针对组件结构存在差异的场景，开发者需要通过设定不同的reuseId来进行区分，具体方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%A4%9A%E7%A7%8D%E6%9D%A1%E7%9B%AE%E7%B1%BB%E5%9E%8B%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF",
        children: "多种条目类型使用场景"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件结构存在差异，但未通过reuseId进行区分。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例中，先点击“show/hide branch A”按钮，组件被回收，再点击“show/hide branch B”按钮，组件被复用。子组件ReusableChildB在复用过程中被创建，aboutToReuse方法和aboutToAppear方法被依次调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = '[Sample_ReusableComponent]';\nconst DOMAIN = 0xF811;\nconst BUNDLE = 'ReusableComponent_';\n\n@Entry\n@Component\nstruct Index {\n  @State showBranchA: boolean = true;\n  @State showBranchB: boolean = false;\n\n  build() {\n    Column({ space: 5 }) {\n      Button('show/hide branch A')\n        .onClick(() => {\n          this.showBranchA = !this.showBranchA;\n        })\n      if (this.showBranchA) {\n        ReusableComponent({ flag: true })\n      }\n      Button('show/hide branch B')\n        .onClick(() => {\n          this.showBranchB = !this.showBranchB;\n        })\n      if (this.showBranchB) {\n        ReusableComponent({ flag: false })\n      }\n    }\n  }\n}\n\n@Reusable\n@Component\nstruct ReusableComponent {\n  @Require @Prop flag: boolean = true;\n\n  aboutToAppear() {\n    hilog.info(DOMAIN, TAG, BUNDLE + 'ReusableComponent aboutToAppear');\n  }\n\n  aboutToReuse(params: ESObject) {\n    hilog.info(DOMAIN, TAG, BUNDLE + 'ReusableComponent aboutToReuse');\n    this.flag = params.flag;\n  }\n\n  build() {\n    Column({ space: 5 }) {\n      Text('ReusableComponent')\n      if (this.flag) {\n        ReusableChildA()\n      } else {\n        ReusableChildB()\n      }\n    }.border({ width: 1 })\n  }\n}\n\n@Component\nstruct ReusableChildA {\n  aboutToAppear() {\n    hilog.info(DOMAIN, TAG, BUNDLE + 'ReusableChildA aboutToAppear');\n  }\n\n  aboutToReuse() {\n    hilog.info(DOMAIN, TAG, BUNDLE + 'ReusableChildA aboutToReuse');\n  }\n\n  build() {\n    Text('ReusableChildA')\n      .border({ width: 1 })\n  }\n}\n\n@Component\nstruct ReusableChildB {\n  aboutToAppear() {\n    hilog.info(DOMAIN, TAG, BUNDLE + 'ReusableChildB aboutToAppear');\n  }\n\n  aboutToReuse() {\n    hilog.info(DOMAIN, TAG, BUNDLE + 'ReusableChildB aboutToReuse');\n  }\n\n  build() {\n    Text('ReusableChildB')\n      .border({ width: 1 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件结构存在差异，通过reuseId进行区分。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = '[Sample_ReusableComponent]';\nconst DOMAIN = 0xF811;\nconst BUNDLE = 'ReusableComponent_';\n\n@Entry\n@Component\nstruct Index {\n  @State showBranchA: boolean = true;\n  @State showBranchB: boolean = false;\n\n  build() {\n    Column({ space: 5 }) {\n      Button('show/hide branch A')\n        .onClick(() => {\n          this.showBranchA = !this.showBranchA;\n        })\n      if (this.showBranchA) {\n        ReusableComponent({ flag: true })\n          .reuseId('ReuseA') // 通过reuseId区分不同结构的复用组件\n      }\n      Button('show/hide branch B')\n        .onClick(() => {\n          this.showBranchB = !this.showBranchB;\n        })\n      if (this.showBranchB) {\n        ReusableComponent({ flag: false })\n          .reuseId('ReuseB') // 通过reuseId区分不同结构的复用组件\n      }\n    }\n  }\n}\n\n@Reusable\n@Component\nstruct ReusableComponent {\n  @Require @Prop flag: boolean = true;\n\n  aboutToAppear() {\n    hilog.info(DOMAIN, TAG, BUNDLE + 'ReusableComponent aboutToAppear');\n  }\n\n  aboutToReuse(params: ESObject) {\n    hilog.info(DOMAIN, TAG, BUNDLE + 'ReusableComponent aboutToReuse');\n    this.flag = params.flag;\n  }\n\n  build() {\n    Column({ space: 5 }) {\n      Text('ReusableComponent')\n      if (this.flag) {\n        ReusableChildA()\n      } else {\n        ReusableChildB()\n      }\n    }.border({ width: 1 })\n  }\n}\n\n@Component\nstruct ReusableChildA {\n  aboutToAppear() {\n    hilog.info(DOMAIN, TAG, BUNDLE + 'ReusableChildA aboutToAppear');\n  }\n\n  aboutToReuse() {\n    hilog.info(DOMAIN, TAG, BUNDLE + 'ReusableChildA aboutToReuse');\n  }\n\n  build() {\n    Text('ReusableChildA')\n      .border({ width: 1 })\n  }\n}\n\n@Component\nstruct ReusableChildB {\n  aboutToAppear() {\n    hilog.info(DOMAIN, TAG, BUNDLE + 'ReusableChildB aboutToAppear');\n  }\n\n  aboutToReuse() {\n    hilog.info(DOMAIN, TAG, BUNDLE + 'ReusableChildB aboutToReuse');\n  }\n\n  build() {\n    Text('ReusableChildB')\n      .border({ width: 1 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不支持componentcontent",
      children: "不支持ComponentContent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ComponentContent不支持传入@Reusable装饰器装饰的自定义组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { ComponentContent } from '@kit.ArkUI';\n\n@Builder\nfunction buildCreativeLoadingDialog(closedClick: () => void) {\n  Crash();\n}\n\n// 如果注释掉就可以正常弹出弹窗，如果加上@Reusable就直接crash。\n@Reusable\n@Component\nexport struct Crash {\n  build() {\n    Column() {\n      Text('Crash')\n        .fontSize(12)\n        .lineHeight(18)\n        .fontColor(Color.Blue)\n        .margin({\n          left: 6\n        })\n    }.width('100%')\n    .height('100%')\n    .justifyContent(FlexAlign.Center)\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World';\n  private uiContext = this.getUIContext();\n\n  build() {\n    RelativeContainer() {\n      Text(this.message)\n        .id('Index')\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n        .alignRules({\n          center: { anchor: '__container__', align: VerticalAlign.Center },\n          middle: { anchor: '__container__', align: HorizontalAlign.Center }\n        })\n        .onClick(() => {\n          // ComponentContent底层是BuilderNode，BuilderNode不支持传入@Reusable注解的自定义组件。\n          let contentNode = new ComponentContent(this.uiContext, wrapBuilder(buildCreativeLoadingDialog), () => {\n          });\n          this.uiContext.getPromptAction().openCustomDialog(contentNode);\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不建议嵌套使用",
      children: "不建议嵌套使用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Reusable装饰器不建议嵌套使用，会增加内存，降低复用效率，加大维护难度。嵌套使用会导致额外缓存池的生成，各缓存池拥有相同树状结构，复用效率低下。此外，嵌套使用会使生命周期管理复杂，资源和变量共享困难。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "动态布局更新",
      children: "动态布局更新"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重复创建与移除视图可能引起频繁的布局计算，从而影响帧率。采用组件复用可以避免不必要的视图创建与布局计算，提升性能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例中，将Child自定义组件标记为复用组件，通过Button点击更新Child，触发复用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nexport class Message {\n  public value: string | undefined;\n\n  constructor(value: string) {\n    this.value = value;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State switch: boolean = true;\n\n  build() {\n    Column() {\n      Button('Hello')\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n        .onClick(() => {\n          this.switch = !this.switch;\n        })\n      if (this.switch) {\n        // 如果只有一个复用的组件，可以不用设置reuseId。\n        Child({ message: new Message('Child') })\n          .reuseId('Child');\n      }\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n\n@Reusable\n@Component\nstruct Child {\n  @State message: Message = new Message('AboutToReuse');\n\n  aboutToReuse(params: Record<string, ESObject>) {\n    this.message = params.message as Message;\n  }\n\n  build() {\n    Column() {\n      Text(this.message.value)\n        .fontSize(30)\n    }\n    .borderWidth(1)\n    .height(100)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "列表滚动配合lazyforeach使用",
      children: "列表滚动配合LazyForEach使用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用展示大量数据的列表并进行滚动操作时，频繁创建和销毁列表项视图可能导致卡顿和性能问题。使用列表组件的组件复用机制可以重用已创建的列表项视图，提高滚动流畅度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例代码将CardView自定义组件标记为复用组件，List上下滑动，触发CardView复用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class MyDataSource implements IDataSource {\n  private dataArray: string[] = [];\n  private listener: DataChangeListener | undefined;\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: string): void {\n    this.dataArray.push(data);\n  }\n\n  public reloadListener(): void {\n    this.listener?.onDataReloaded();\n  }\n\n  public registerDataChangeListener(listener: DataChangeListener): void {\n    this.listener = listener;\n  }\n\n  public unregisterDataChangeListener(listener: DataChangeListener): void {\n    this.listener = undefined;\n  }\n}\n\n@Entry\n@Component\nstruct ReuseDemo {\n  private data: MyDataSource = new MyDataSource();\n\n  aboutToAppear() {\n    for (let i = 1; i <= 1000; i++) { // 循环1000次\n      this.data.pushData(i + '');\n    }\n  }\n\n  build() {\n    Column() {\n      List() {\n        LazyForEach(this.data, (item: string) => {\n          ListItem() {\n            CardView({ item: item });\n          }\n        }, (item: string) => item)\n      }\n    }\n  }\n}\n\n// 复用组件\n@Reusable\n@Component\nexport struct CardView {\n  // 被@State修饰的变量item才能更新，未被@State修饰的变量不会更新。\n  @State item: string = '';\n\n  aboutToReuse(params: Record<string, Object>): void {\n    this.item = params.item as string;\n  }\n\n  build() {\n    Column() {\n      Text(this.item)\n        .fontSize(30)\n    }\n    .borderWidth(1)\n    .height(100)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "列表滚动-if使用场景",
      children: "列表滚动-if使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例代码将OneMoment自定义组件标记为复用组件。当List上下滑动时，会触发OneMoment的复用。设置reuseId可为复用组件分配复用组，相同reuseId的组件将在同一复用组中复用。单个复用组件无需设置reuseId。使用reuseId标识复用组件，可避免重复执行if语句的删除和重新创建逻辑，提高复用效率和性能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = '[Sample_ReusableComponent]';\nconst DOMAIN = 0xF811;\nconst BUNDLE = 'ReusableComponent_';\n\n@Entry\n@Component\nstruct Index {\n  private dataSource = new MyDataSource<FriendMoment>();\n\n  aboutToAppear(): void {\n    for (let i = 0; i < 20; i++) { // 循环20次\n      let title = i + 1 + 'test_if';\n      // 请开发者自行在src/main/resources/base/media路径下添加app.media.app_icon图片，否则运行时会因资源缺失而Image空白。\n      this.dataSource.pushData(new FriendMoment(i.toString(), title, 'app.media.app_icon'));\n    }\n\n    for (let i = 0; i < 50; i++) { // 循环50次\n      let title = i + 1 + 'test_if';\n      this.dataSource.pushData(new FriendMoment(i.toString(), title, ''));\n    }\n  }\n\n  build() {\n    Column() {\n      // TopBar()\n      List({ space: 3 }) {\n        LazyForEach(this.dataSource, (moment: FriendMoment) => {\n          ListItem() {\n            // 使用reuseId进行组件复用的控制。\n            OneMoment({ moment: moment })\n              .reuseId((moment.image !== '') ? 'withImage' : 'noImage');\n          }\n        }, (moment: FriendMoment) => moment.id)\n      }\n      .cachedCount(0)\n    }\n  }\n}\n\nclass FriendMoment {\n  public id: string = '';\n  public text: string = '';\n  public title: string = '';\n  public image: string = '';\n  public answers: Array<ResourceStr> = [];\n\n  constructor(id: string, title: string, image: string) {\n    this.text = id;\n    this.title = title;\n    this.image = image;\n  }\n}\n\n@Reusable\n@Component\nexport struct OneMoment {\n  @Prop moment: FriendMoment;\n\n  // 复用id相同的组件才能触发复用。\n  aboutToReuse(params: ESObject): void {\n    hilog.info(DOMAIN, TAG, BUNDLE + '=====aboutToReuse====OneMoment==复用了==' + this.moment.text);\n  }\n\n  build() {\n    Column() {\n      Text(this.moment.text)\n      // if分支判断。\n      if (this.moment.image !== '') {\n        Flex({ wrap: FlexWrap.Wrap }) {\n          Image($r(this.moment.image)).height(50).width(50);\n          Image($r(this.moment.image)).height(50).width(50);\n          Image($r(this.moment.image)).height(50).width(50);\n          Image($r(this.moment.image)).height(50).width(50);\n        }\n      }\n    }\n  }\n}\n\nclass BasicDataSource<T> implements IDataSource {\n  private listeners: DataChangeListener[] = [];\n  private originDataArray: T[] = [];\n\n  public totalCount(): number {\n    return 0;\n  }\n\n  public getData(index: number): T {\n    return this.originDataArray[index];\n  }\n\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      this.listeners.push(listener);\n    }\n  }\n\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      this.listeners.splice(pos, 1);\n    }\n  }\n\n  notifyDataAdd(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index);\n    });\n  }\n}\n\nexport class MyDataSource<T> extends BasicDataSource<T> {\n  private dataArray: T[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): T {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: T): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "列表滚动-foreach使用场景",
      children: "列表滚动-Foreach使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Foreach创建可复用的自定义组件，由于Foreach渲染控制语法的全展开属性，导致复用组件无法复用。示例中点击update，数据刷新成功，但滑动列表时，ListItemView无法复用。点击clear，再次点击update，ListItemView复用成功，因为一帧内重复创建多个已被销毁的自定义组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = '[Sample_ReusableComponent]';\nconst DOMAIN = 0xF811;\nconst BUNDLE = 'ReusableComponent_';\n\nclass MyDataSource implements IDataSource {\n  private dataArray: string[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: string): void {\n    this.dataArray.push(data);\n  }\n\n  public registerDataChangeListener(listener: DataChangeListener): void {\n  }\n\n  public unregisterDataChangeListener(listener: DataChangeListener): void {\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private data: MyDataSource = new MyDataSource();\n  private data02: MyDataSource = new MyDataSource();\n  @State isShow: boolean = true;\n  @State dataSource: ListItemObject[] = [];\n\n  aboutToAppear() {\n    for (let i = 0; i < 100; i++) { // 循环100次\n      this.data.pushData(i.toString());\n    }\n\n    for (let i = 30; i <= 80; i++) { // 循环50次\n      this.data02.pushData(i.toString());\n    }\n  }\n\n  build() {\n    Column() {\n      Row() {\n        Button('clear').onClick(() => {\n          for (let i = 1; i <= 50; i++) { // 循环50次\n            this.dataSource.pop();\n          }\n        }).height(40)\n\n        Button('update').onClick(() => {\n          for (let i = 1; i <= 50; i++) { // 循环50次\n            let obj = new ListItemObject();\n            obj.id = i;\n            obj.uuid = Math.random().toString();\n            obj.isExpand = false;\n            this.dataSource.push(obj);\n          }\n        }).height(40)\n      }\n\n      List({ space: 10 }) {\n        ForEach(this.dataSource, (item: ListItemObject) => {\n          ListItem() {\n            ListItemView({\n              obj: item\n            })\n          }\n        }, (item: ListItemObject) => {\n          return item.uuid.toString();\n        })\n\n      }.cachedCount(0)\n      .width('100%')\n      .height('100%')\n    }\n  }\n}\n\n@Reusable\n@Component\nstruct ListItemView {\n  @ObjectLink obj: ListItemObject;\n  @State item: string = '';\n\n  aboutToAppear(): void {\n    // 点击 update，首次进入，上下滑动，由于Foreach折叠展开属性，无法复用。\n    hilog.info(DOMAIN, TAG, BUNDLE + '=====aboutToAppear=====ListItemView==创建了==' + this.item);\n  }\n\n  aboutToReuse(params: ESObject) {\n    this.item = params.item;\n    // 点击clear，再次update，复用成功。\n    // 符合一帧内重复创建多个已被销毁的自定义组件。\n    hilog.info(DOMAIN, TAG, BUNDLE + '=====aboutToReuse====ListItemView==复用了==' + this.item);\n  }\n\n  build() {\n    Column({ space: 10 }) {\n      Text(`${this.obj.id}.标题`)\n        .fontSize(16)\n        .fontColor('#000000')\n        .padding({\n          top: 20,\n          bottom: 20,\n        })\n\n      if (this.obj.isExpand) {\n        Text('')\n          .fontSize(14)\n          .fontColor('#999999')\n      }\n    }\n    .width('100%')\n    .borderRadius(10)\n    .backgroundColor(Color.White)\n    .padding(15)\n    .onClick(() => {\n      this.obj.isExpand = !this.obj.isExpand;\n    })\n  }\n}\n\n@Observed\nclass ListItemObject {\n  public uuid: string = '';\n  public id: number = 0;\n  public isExpand: boolean = false;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "grid使用场景",
      children: "Grid使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例中使用@Reusable装饰器修饰GridItem中的自定义组件ReusableChildComponent，即表示其具备组件复用的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用aboutToReuse可以在Grid滑动时，从复用缓存中加入到组件树之前触发，从而更新组件状态变量，展示正确内容。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要注意的是无需在aboutToReuse中对", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link",
        children: "@Link"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#storagelink",
        children: "@StorageLink"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
        children: "@ObjectLink"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume",
        children: "@Consume"
      }), "等自动更新值的状态变量进行更新，可能触发不必要的组件刷新。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// MyDataSource类实现IDataSource接口。\nclass MyDataSource implements IDataSource {\n  private dataArray: number[] = [];\n\n  public pushData(data: number): void {\n    this.dataArray.push(data);\n  }\n\n  // 数据源的数据总量。\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  // 返回指定索引位置的数据。\n  public getData(index: number): number {\n    return this.dataArray[index];\n  }\n\n  registerDataChangeListener(listener: DataChangeListener): void {\n  }\n\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n  }\n}\n\n@Entry\n@Component\nstruct MyComponent {\n  // 数据源。\n  private data: MyDataSource = new MyDataSource();\n\n  aboutToAppear() {\n    for (let i = 1; i <= 1000; i++) { // 循环1000次\n      this.data.pushData(i);\n    }\n  }\n\n  build() {\n    Column({ space: 5 }) {\n      Grid() {\n        LazyForEach(this.data, (item: number) => {\n          GridItem() {\n            // 使用可复用自定义组件。\n            ReusableChildComponent({ item: item });\n          }\n        }, (item: string) => item)\n      }\n      .cachedCount(2) // 设置GridItem的缓存数量。\n      .columnsTemplate('1fr 1fr 1fr')\n      .columnsGap(10)\n      .rowsGap(10)\n      .margin(10)\n      .height(500)\n      .backgroundColor(0xFAEEE0)\n    }\n  }\n}\n\n@Reusable\n@Component\nstruct ReusableChildComponent {\n  @State item: number = 0;\n\n  // aboutToReuse从复用缓存中加入到组件树之前调用，可在此处更新组件的状态变量以展示正确的内容。\n  // aboutToReuse参数类型已不支持any，这里使用Record指定明确的数据类型。Record用于构造一个对象类型，其属性键为Keys，属性值为Type。\n  aboutToReuse(params: Record<string, number>) {\n    this.item = params.item;\n  }\n\n  build() {\n    Column() {\n      // 请开发者自行在src/main/resources/base/media路径下添加app.media.app_icon图片，否则运行时会因资源缺失而报错。\n      Image($r('app.media.app_icon'))\n        .objectFit(ImageFit.Fill)\n        .layoutWeight(1)\n      Text(`图片${this.item}`)\n        .fontSize(16)\n        .textAlign(TextAlign.Center)\n    }\n    .width('100%')\n    .height(120)\n    .backgroundColor(0xF9CF93)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "waterflow使用场景",
      children: "WaterFlow使用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在WaterFlow滑动场景中，FlowItem及其子组件频繁创建和销毁。可以将FlowItem中的组件封装成自定义组件，并使用@Reusable装饰器修饰，实现组件复用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = '[Sample_ReusableComponent]';\nconst DOMAIN = 0xF811;\nconst BUNDLE = 'ReusableComponent_';\n\nclass WaterFlowDataSource implements IDataSource {\n  private dataArray: number[] = [];\n  private listeners: DataChangeListener[] = [];\n\n  constructor() {\n    for (let i = 0; i < 60; i++) { // 循环60次\n      this.dataArray.push(i);\n    }\n  }\n\n  // 获取索引对应的数据。\n  public getData(index: number): number {\n    return this.dataArray[index];\n  }\n\n  // 通知控制器增加数据。\n  notifyDataAdd(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index);\n    });\n  }\n\n  // 获取数据总数。\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  // 注册改变数据的控制器。\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      this.listeners.push(listener);\n    }\n  }\n\n  // 注销改变数据的控制器。\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      this.listeners.splice(pos, 1);\n    }\n  }\n\n  // 在数据尾部增加一个元素。\n  public addLastItem(): void {\n    this.dataArray.splice(this.dataArray.length, 0, this.dataArray.length);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n\n@Reusable\n@Component\nstruct ReusableFlowItem {\n  @State item: number = 0;\n\n  // 从复用缓存中加入到组件树之前调用，可在此处更新组件的状态变量以展示正确的内容。\n  aboutToReuse(params: ESObject) {\n    this.item = params.item;\n    hilog.info(DOMAIN, TAG, BUNDLE + '=====aboutToReuse====FlowItem==复用了==' + this.item);\n  }\n\n  aboutToRecycle(): void {\n    hilog.info(DOMAIN, TAG, BUNDLE + '=====aboutToRecycle====FlowItem==回收了==' + this.item);\n  }\n\n  build() {\n    // 请开发者自行在src/main/resources/base/media路径下添加app.media.app_icon图片，否则运行时会因资源缺失而报错。\n    Column() {\n      Text('N' + this.item).fontSize(24).height('26').margin(10);\n      Image($r('app.media.app_icon'))\n        .objectFit(ImageFit.Cover)\n        .width(50)\n        .height(50);\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State minSize: number = 50; // 最小值50\n  @State maxSize: number = 80; // 最大值80\n  @State fontSize: number = 24; // 字体大小为24\n  @State colors: number[] = [0xFFC0CB, 0xDA70D6, 0x6B8E23, 0x6A5ACD, 0x00FFFF, 0x00FF7F];\n  scroller: Scroller = new Scroller();\n  dataSource: WaterFlowDataSource = new WaterFlowDataSource();\n  private itemWidthArray: number[] = [];\n  private itemHeightArray: number[] = [];\n\n  // 计算flow item宽/高。\n  getSize() {\n    let ret = Math.floor(Math.random() * this.maxSize);\n    return (ret > this.minSize ? ret : this.minSize);\n  }\n\n  // 保存flow item宽/高。\n  getItemSizeArray() {\n    for (let i = 0; i < 100; i++) { // 循环100次\n      this.itemWidthArray.push(this.getSize());\n      this.itemHeightArray.push(this.getSize());\n    }\n  }\n\n  aboutToAppear() {\n    this.getItemSizeArray();\n  }\n\n  build() {\n    Stack({ alignContent: Alignment.TopStart }) {\n      Column({ space: 2 }) {\n        Button('back top')\n          .height('5%')\n          .onClick(() => {\n            // 点击后回到顶部。\n            this.scroller.scrollEdge(Edge.Top);\n          })\n        WaterFlow({ scroller: this.scroller }) {\n          LazyForEach(this.dataSource, (item: number) => {\n            FlowItem() {\n              ReusableFlowItem({ item: item })\n            }.onAppear(() => {\n              if (item + 20 == this.dataSource.totalCount()) { // 阈值为20\n                for (let i = 0; i < 50; i++) { // 循环50次\n                  this.dataSource.addLastItem();\n                }\n              }\n            })\n\n          })\n        }\n      }\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "swiper使用场景",
      children: "Swiper使用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在Swiper滑动场景中，条目中的子组件频繁创建和销毁。可以将这些子组件封装成自定义组件，并使用@Reusable装饰器修饰，以实现组件复用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Index {\n  private dataSource = new MyDataSource<Question>();\n\n  aboutToAppear(): void {\n    for (let i = 0; i < 1000; i++) { // 循环1000次\n      let title = i + 1 + 'test_swiper';\n      let answers = ['test1', 'test2', 'test3', 'test4'];\n      // 请开发者自行在src/main/resources/base/media路径下添加app.media.app_icon图片，否则运行时会因资源缺失而报错。\n      this.dataSource.pushData(new Question(i.toString(), title, $r('app.media.app_icon'), answers));\n    }\n  }\n\n  build() {\n    Column({ space: 5 }) {\n      Swiper() {\n        LazyForEach(this.dataSource, (item: Question) => {\n          QuestionSwiperItem({ itemData: item });\n        }, (item: Question) => item.id)\n      }\n    }\n    .width('100%')\n    .margin({ top: 5 })\n  }\n}\n\nclass Question {\n  public id: string = '';\n  public title: ResourceStr = '';\n  public image: ResourceStr = '';\n  public answers: Array<ResourceStr> = [];\n\n  constructor(id: string, title: ResourceStr, image: ResourceStr, answers: Array<ResourceStr>) {\n    this.id = id;\n    this.title = title;\n    this.image = image;\n    this.answers = answers;\n  }\n}\n\n@Reusable\n@Component\nstruct QuestionSwiperItem {\n  @State itemData: Question | null = null;\n\n  aboutToReuse(params: Record<string, Object>): void {\n    this.itemData = params.itemData as Question;\n  }\n\n  build() {\n    Column() {\n      Text(this.itemData?.title)\n        .fontSize(18)\n        .fontColor($r('sys.color.ohos_id_color_primary'))\n        .alignSelf(ItemAlign.Start)\n        .margin({\n          top: 10,\n          bottom: 16\n        })\n        \n      Image(this.itemData?.image)\n        .width('100%')\n        .borderRadius(12)\n        .objectFit(ImageFit.Contain)\n        .margin({\n          bottom: 16\n        })\n        .height(80)\n        .width(80)\n\n      Column({ space: 16 }) {\n        ForEach(this.itemData?.answers, (item: Resource) => {\n          Text(item)\n            .fontSize(16)\n            .fontColor($r('sys.color.ohos_id_color_primary'))\n        }, (item: ResourceStr) => JSON.stringify(item))\n      }\n      .width('100%')\n      .alignItems(HorizontalAlign.Start)\n    }\n    .width('100%')\n    .padding({\n      left: 16,\n      right: 16\n    })\n  }\n}\n\nclass BasicDataSource<T> implements IDataSource {\n  private listeners: DataChangeListener[] = [];\n  private originDataArray: T[] = [];\n\n  public totalCount(): number {\n    return 0;\n  }\n\n  public getData(index: number): T {\n    return this.originDataArray[index];\n  }\n\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      this.listeners.push(listener);\n    }\n  }\n\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      this.listeners.splice(pos, 1);\n    }\n  }\n\n  notifyDataAdd(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index);\n    });\n  }\n}\n\nexport class MyDataSource<T> extends BasicDataSource<T> {\n  private dataArray: T[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): T {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: T): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "列表滚动-listitemgroup使用场景",
      children: "列表滚动-ListItemGroup使用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可以视作特殊List滑动场景，将ListItem需要移除重建的子组件封装成自定义组件，并使用@Reusable装饰器修饰，使其具备组件复用能力。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct ListItemGroupAndReusable {\n  data: DataSrc2 = new DataSrc2();\n\n  @Builder\n  itemHead(text: string) {\n    Text(text)\n      .fontSize(20)\n      .backgroundColor(0xAABBCC)\n      .width('100%')\n      .padding(10)\n  }\n\n  aboutToAppear() {\n    for (let i = 0; i < 10000; i++) { // 循环10000次\n      let data1 = new DataSrc1();\n      for (let j = 0; j < 12; j++) { // 循环12次\n        data1.data.push(`测试条目数据: ${i} - ${j}`);\n      }\n      this.data.data.push(data1);\n    }\n  }\n\n  build() {\n    Stack() {\n      List() {\n        LazyForEach(this.data, (item: DataSrc1, index: number) => {\n          ListItemGroup({ header: this.itemHead(index.toString()) }) {\n            LazyForEach(item, (ii: string, index: number) => {\n              ListItem() {\n                Inner({ str: ii });\n              }\n            })\n          }\n          .width('100%')\n          .height('60vp')\n        })\n      }\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n\n@Reusable\n@Component\nstruct Inner {\n  @State str: string = '';\n\n  aboutToReuse(param: ESObject) {\n    this.str = param.str;\n  }\n\n  build() {\n    Text(this.str);\n  }\n}\n\nclass DataSrc1 implements IDataSource {\n  public listeners: DataChangeListener[] = [];\n  public data: string[] = [];\n\n  public totalCount(): number {\n    return this.data.length;\n  }\n\n  public getData(index: number): string {\n    return this.data[index];\n  }\n\n  // 该方法为框架侧调用，为LazyForEach组件向其数据源处添加listener监听。\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      this.listeners.push(listener);\n    }\n  }\n\n  // 该方法为框架侧调用，为对应的LazyForEach组件在数据源处去除listener监听。\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      this.listeners.splice(pos, 1);\n    }\n  }\n\n  // 通知LazyForEach组件需要重载所有子组件。\n  notifyDataReload(): void {\n    this.listeners.forEach(listener => {\n      listener.onDataReloaded();\n    });\n  }\n\n  // 通知LazyForEach组件需要在index对应索引处添加子组件。\n  notifyDataAdd(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index);\n    });\n  }\n\n  // 通知LazyForEach组件在index对应索引处数据有变化，需要重建该子组件。\n  notifyDataChange(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataChange(index);\n    });\n  }\n\n  // 通知LazyForEach组件需要在index对应索引处删除该子组件。\n  notifyDataDelete(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataDelete(index);\n    });\n  }\n\n  // 通知LazyForEach组件将from索引和to索引处的子组件进行交换。\n  notifyDataMove(from: number, to: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataMove(from, to);\n    });\n  }\n}\n\nclass DataSrc2 implements IDataSource {\n  public listeners: DataChangeListener[] = [];\n  public data: DataSrc1[] = [];\n\n  public totalCount(): number {\n    return this.data.length;\n  }\n\n  public getData(index: number): DataSrc1 {\n    return this.data[index];\n  }\n\n  // 该方法为框架侧调用，为LazyForEach组件向其数据源处添加listener监听。\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      this.listeners.push(listener);\n    }\n  }\n\n  // 该方法为框架侧调用，为对应的LazyForEach组件在数据源处去除listener监听。\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      this.listeners.splice(pos, 1);\n    }\n  }\n\n  // 通知LazyForEach组件需要重载所有子组件。\n  notifyDataReload(): void {\n    this.listeners.forEach(listener => {\n      listener.onDataReloaded();\n    });\n  }\n\n  // 通知LazyForEach组件需要在index对应索引处添加子组件。\n  notifyDataAdd(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index);\n    });\n  }\n\n  // 通知LazyForEach组件在index对应索引处数据有变化，需要重建该子组件。\n  notifyDataChange(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataChange(index);\n    });\n  }\n\n  // 通知LazyForEach组件需要在index对应索引处删除该子组件。\n  notifyDataDelete(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataDelete(index);\n    });\n  }\n\n  // 通知LazyForEach组件将from索引和to索引处的子组件进行交换。\n  notifyDataMove(from: number, to: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataMove(from, to);\n    });\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "多种条目类型使用场景",
      children: "多种条目类型使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "标准型"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "复用组件的布局相同，示例参见本文列表滚动部分的描述。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "有限变化型"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "复用组件间存在差异，但类型有限。例如，可以通过显式设置两个reuseId或使用两个自定义组件来实现复用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class LimitedMyDataSource implements IDataSource {\n  private dataArray: string[] = [];\n  private listener: DataChangeListener | undefined;\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: string): void {\n    this.dataArray.push(data);\n  }\n\n  public reloadListener(): void {\n    this.listener?.onDataReloaded();\n  }\n\n  public registerDataChangeListener(listener: DataChangeListener): void {\n    this.listener = listener;\n  }\n\n  public unregisterDataChangeListener(listener: DataChangeListener): void {\n    this.listener = undefined;\n  }\n}\n\n@Entry\n@Component\nstruct LimitedIndex {\n  private data: LimitedMyDataSource = new LimitedMyDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i < 1000; i++) { // 循环1000次\n      this.data.pushData(i + '');\n    }\n  }\n\n  build() {\n    Column() {\n      List({ space: 10 }) {\n        LazyForEach(this.data, (item: number) => {\n          ListItem() {\n            ReusableComponent({ item: item })\n            // 设置两种有限变化的reuseId\n              .reuseId(item % 2 === 0 ? 'ReusableComponentOne' : 'ReusableComponentTwo')\n          }\n          .backgroundColor(Color.Orange)\n          .width('100%')\n        }, (item: number) => item.toString())\n      }\n      .cachedCount(2)\n    }\n  }\n}\n\n@Reusable\n@Component\nstruct ReusableComponent {\n  @State item: number = 0;\n\n  aboutToReuse(params: ESObject) {\n    this.item = params.item;\n  }\n\n  build() {\n    Column() {\n      // 组件内部根据类型差异渲染\n      if (this.item % 2 === 0) {\n        Text(`Item ${this.item} ReusableComponentOne`)\n          .fontSize(20)\n          .margin({ left: 10 })\n      } else {\n        Text(`Item ${this.item} ReusableComponentTwo`)\n          .fontSize(20)\n          .margin({ left: 10 })\n      }\n    }.margin({ left: 10, right: 10 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "组合型"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "复用组件间存在多种差异，但通常具备共同的子组件。将三种复用组件以组合型方式转换为Builder函数后，内部的共享子组件将统一置于父组件MyComponent之下。复用这些子组件时，缓存池在父组件层面实现共享，减少组件创建过程中的资源消耗。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = '[Sample_ReusableComponent]';\nconst DOMAIN = 0xF811;\nconst BUNDLE = 'ReusableComponent_';\nconst NUMBER3 = 3;\nconst NUMBER5 = 5;\n\nclass MyDataSource implements IDataSource {\n  private dataArray: string[] = [];\n  private listener: DataChangeListener | undefined;\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n\n  public pushData(data: string): void {\n    this.dataArray.push(data);\n  }\n\n  public reloadListener(): void {\n    this.listener?.onDataReloaded();\n  }\n\n  public registerDataChangeListener(listener: DataChangeListener): void {\n    this.listener = listener;\n  }\n\n  public unregisterDataChangeListener(listener: DataChangeListener): void {\n    this.listener = undefined;\n  }\n}\n\n@Entry\n@Component\nstruct MyComponent {\n  private data: MyDataSource = new MyDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i < 1000; i++) { // 循环1000次\n      this.data.pushData(i.toString());\n    }\n  }\n\n  // itemBuilderOne作为复用组件的写法未展示，以下为转为Builder之后的写法。\n  @Builder\n  itemBuilderOne(item: string) {\n    Column() {\n      ChildComponentA({ item: item });\n      ChildComponentB({ item: item });\n      ChildComponentC({ item: item });\n    }\n  }\n\n  // itemBuilderTwo转为Builder之后的写法。\n  @Builder\n  itemBuilderTwo(item: string) {\n    Column() {\n      ChildComponentA({ item: item });\n      ChildComponentC({ item: item });\n      ChildComponentD({ item: item });\n    }\n  }\n\n  // itemBuilderThree转为Builder之后的写法。\n  @Builder\n  itemBuilderThree(item: string) {\n    Column() {\n      ChildComponentA({ item: item });\n      ChildComponentB({ item: item });\n      ChildComponentD({ item: item });\n    }\n  }\n\n  build() {\n    List({ space: 40 }) {\n      LazyForEach(this.data, (item: string, index: number) => {\n        ListItem() {\n          if (index % NUMBER3 === 0) {\n            this.itemBuilderOne(item);\n          } else if (index % NUMBER5 === 0) {\n            this.itemBuilderTwo(item);\n          } else {\n            this.itemBuilderThree(item);\n          }\n        }\n        .backgroundColor('#cccccc')\n        .width('100%')\n        .onAppear(() => {\n          hilog.info(DOMAIN, TAG, BUNDLE + `ListItem ${index} onAppear`);\n        })\n      }, (item: number) => item.toString())\n    }\n    .width('100%')\n    .height('100%')\n    .cachedCount(0)\n  }\n}\n\n@Reusable\n@Component\nstruct ChildComponentA {\n  @State item: string = '';\n\n  aboutToReuse(params: ESObject) {\n    hilog.info(DOMAIN, TAG, BUNDLE + `ChildComponentA ${params.item} Reuse ${this.item}`);\n    this.item = params.item;\n  }\n\n  aboutToRecycle(): void {\n    hilog.info(DOMAIN, TAG, BUNDLE + `ChildComponentA ${this.item} Recycle`);\n  }\n\n  build() {\n    Column() {\n      Text(`Item ${this.item} Child Component A`)\n        .fontSize(20)\n        .margin({ left: 10 })\n        .fontColor(Color.Blue)\n      Grid() {\n        ForEach((new Array(20)).fill(''), (item: string, index: number) => {\n          GridItem() {\n            // 请开发者自行在src/main/resources/base/media路径下添加app.media.startIcon图片，否则运行时会因资源缺失而报错。\n            Image($r('app.media.startIcon'))\n              .height(20)\n          }\n        })\n      }\n      .columnsTemplate('1fr 1fr 1fr 1fr 1fr')\n      .rowsTemplate('1fr 1fr 1fr 1fr')\n      .columnsGap(10)\n      .width('90%')\n      .height(160)\n    }\n    .margin({ left: 10, right: 10 })\n    .backgroundColor(0xFAEEE0)\n  }\n}\n\n@Reusable\n@Component\nstruct ChildComponentB {\n  @State item: string = '';\n\n  aboutToReuse(params: ESObject) {\n    this.item = params.item;\n  }\n\n  build() {\n    Row() {\n      Text(`Item ${this.item} Child Component B`)\n        .fontSize(20)\n        .margin({ left: 10 })\n        .fontColor(Color.Red)\n    }.margin({ left: 10, right: 10 })\n  }\n}\n\n@Reusable\n@Component\nstruct ChildComponentC {\n  @State item: string = '';\n\n  aboutToReuse(params: ESObject) {\n    this.item = params.item;\n  }\n\n  build() {\n    Row() {\n      Text(`Item ${this.item} Child Component C`)\n        .fontSize(20)\n        .margin({ left: 10 })\n        .fontColor(Color.Green)\n    }.margin({ left: 10, right: 10 })\n  }\n}\n\n@Reusable\n@Component\nstruct ChildComponentD {\n  @State item: string = '';\n\n  aboutToReuse(params: ESObject) {\n    this.item = params.item;\n  }\n\n  build() {\n    Row() {\n      Text(`Item ${this.item} Child Component D`)\n        .fontSize(20)\n        .margin({ left: 10 })\n        .fontColor(Color.Orange)\n    }.margin({ left: 10, right: 10 })\n  }\n}\n"
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
262876(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
432087(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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