"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["601603"], {
887873(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_ui_paradigm_basic_syntax_arkts_custom_components_arkts_component_freeze_arkts_custom_components_freeze_arkts_custom_components_freeze_md_2f6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-ui-paradigm-basic-syntax-arkts-custom-components-arkts-component-freeze-arkts-custom-components-freeze-arkts-custom-components-freeze-md-2f6.json
var site_docs_arkui_arkts_ui_development_arkts_ui_paradigm_basic_syntax_arkts_custom_components_arkts_component_freeze_arkts_custom_components_freeze_arkts_custom_components_freeze_md_2f6_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-freeze/arkts-custom-components-freeze/arkts-custom-components-freeze","title":"自定义组件冻结功能（V1）","description":"自定义组件冻结功能专为优化复杂UI页面的性能而设计，尤其适用于包含多个页面栈、长列表或宫格布局的场景。当状态变量绑定多个UI组件时，其变化易触发大量组件刷新，导致界面卡顿与响应延迟。为提升这类高负载UI界面的刷新性能，建议开发者使用自定义组件冻结功能。","source":"@site/docs/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-freeze/arkts-custom-components-freeze/arkts-custom-components-freeze.md","sourceDirName":"arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-freeze/arkts-custom-components-freeze","slug":"/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-freeze/arkts-custom-components-freeze/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-freeze/arkts-custom-components-freeze/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"自定义组件冻结功能（V1）","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-custom-components-freeze","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"@ReusableV2装饰器：V2组件复用","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-new-reusablev2/"},"next":{"title":"自定义组件冻结功能（V2）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-freeze/arkts-custom-components-freezev2/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-freeze/arkts-custom-components-freeze/arkts-custom-components-freeze.md


const frontMatter = {
	title: '自定义组件冻结功能（V1）',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-custom-components-freeze',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '自定义组件冻结功能（V1）';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "当前支持的场景",
  "id": "当前支持的场景",
  "level": 2
}, {
  "value": "页面路由",
  "id": "页面路由",
  "level": 3
}, {
  "value": "TabContent",
  "id": "tabcontent",
  "level": 3
}, {
  "value": "LazyForEach",
  "id": "lazyforeach",
  "level": 3
}, {
  "value": "Navigation",
  "id": "navigation",
  "level": 3
}, {
  "value": "组件复用",
  "id": "组件复用",
  "level": 3
}, {
  "value": "组件混用",
  "id": "组件混用",
  "level": 3
}, {
  "value": "限制条件",
  "id": "限制条件",
  "level": 2
}, {
  "value": "BuilderNode无法继承父组件冻结",
  "id": "buildernode无法继承父组件冻结",
  "level": 3
}, {
  "value": "组件冻结与组件复用混用时解冻不会触发Watch",
  "id": "组件冻结与组件复用混用时解冻不会触发watch",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "自定义组件冻结功能v1",
        children: "自定义组件冻结功能（V1）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义组件冻结功能专为优化复杂UI页面的性能而设计，尤其适用于包含多个页面栈、长列表或宫格布局的场景。当状态变量绑定多个UI组件时，其变化易触发大量组件刷新，导致界面卡顿与响应延迟。为提升这类高负载UI界面的刷新性能，建议开发者使用自定义组件冻结功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件冻结功能是一种性能优化机制，它会冻结非激活状态下的组件的刷新能力。当组件处于非激活状态时，即使其绑定的状态变量发生变化，也不会触发该组件的UI重新渲染，从而降低复杂UI场景下的刷新负载。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在阅读本文档前，开发者需要了解自定义组件基本语法。建议提前阅读：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components",
        children: "自定义组件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(540612)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11开始，支持自定义组件冻结功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，支持自定义组件冻结混用场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，通过配置", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode",
        children: "BuilderNode"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#inheritfreezeoptions20",
        children: "inheritFreezeOptions"
      }), "接口为true，实现BuilderNode继承冻结的能力。具体示例见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#inheritfreezeoptions20",
        children: "BuilderNode对象继承组件冻结"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件冻结的工作原理是："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者通过设置", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-parameter/ts-custom-component-parameter#componentoptions",
          children: "freezeWhenInactive"
        }), "属性，即可激活组件冻结机制。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "启用后，系统将仅对处于激活状态的自定义组件进行更新，这使得UI框架可以尽量缩小更新范围，仅限于用户可见范围内（激活状态）的自定义组件，从而提高复杂UI场景下的刷新效率。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当之前处于inactive状态的自定义组件重新变为active状态时，状态管理框架会对其执行必要的刷新操作，确保UI的正确展示。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "简而言之，组件冻结旨在优化复杂界面下的UI刷新性能。在存在多个不可见自定义组件的情况下，如多页面栈、长列表或宫格，通过组件冻结可以实现按需刷新，即仅刷新当前可见的自定义组件，而将不可见自定义组件的刷新延迟至它们变为可见时。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要注意，组件active/inactive并不等同于其可见性。组件冻结目前仅适用于以下场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-router/js-apis-router",
          children: "页面路由"
        }), "：当前栈顶页面为active状态，非栈顶不可见页面为inactive状态。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent",
          children: "TabContent"
        }), "：只有当前显示的TabContent中的自定义组件处于active状态，其余则为inactive。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-lazyforeach/ts-rendering-control-lazyforeach",
          children: "LazyForEach"
        }), "：仅当前显示的LazyForEach中的自定义组件为active状态，而缓存节点的组件则为inactive状态。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
          children: "Navigation"
        }), "：当前显示的NavDestination中的自定义组件为active状态，而其他未显示的NavDestination组件则为inactive状态。需要注意，本文档中涉及的“激活（active）/非激活（inactive）”是指组件冻结的激活/非激活状态，和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination",
          children: "NavDestination"
        }), "组件中的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination#onactive17",
          children: "onActive"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination#oninactive17",
          children: "onInactive"
        }), "不同。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "组件复用：进入复用池的组件为inactive状态，从复用池上树的节点为active状态。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "混用场景：对于以上场景的组合使用，例如TabContent下面使用LazyForEach，切换Tab时，API version 17及以下，LazyForEach中的所有节点都会被设置为active状态，而从API version 18开始，只有LazyForEach的屏上节点会被设置为active状态，其余则为inactive状态。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "当前支持的场景",
      children: "当前支持的场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "页面路由",
      children: "页面路由"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(533808)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本示例使用了router进行页面跳转，建议开发者使用组件导航(Navigation)代替页面路由(router)来实现页面切换。Navigation提供了更多的功能和更灵活的自定义能力。请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#navigation",
        children: "使用Navigation的组件冻结用例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当页面1调用router.pushUrl接口跳转到页面2时，页面1为隐藏不可见状态，此时如果更新页面1中的状态变量，不会触发页面1刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图示如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(96001)/* ["default"] */.A) + "",
        width: "371",
        height: "351"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "页面1："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN = 0x0001;\nconst TAG = 'FreezeChild';\nconst STORAGE_LINK_INITIAL_VALUE = 47;\n\n@Entry\n@Component({ freezeWhenInactive: true })\nstruct PageOne {\n  @StorageLink('PropA') @Watch('first') storageLink: number = STORAGE_LINK_INITIAL_VALUE;\n\n  first() {\n    hilog.info(DOMAIN, TAG, 'first page ' + `${this.storageLink}`);\n  }\n\n  build() {\n    Column() {\n      Text(`From first Page ${this.storageLink}`).fontSize(50)\n      Button('first page storageLink + 1').fontSize(30)\n        .onClick(() => {\n          this.storageLink += 1;\n        })\n      Button('go to next page').fontSize(30)\n        .onClick(() => {\n          // 此处传入的url，需要开发者自行替换。\n          this.getUIContext().getRouter().pushUrl({ url: 'View/PageTwo' }, (err: Error) => {\n            if (err) {\n              hilog.error(DOMAIN, TAG, 'pushUrl failed. Cause: %{public}s', JSON.stringify(err));\n            }\n          });\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "页面2："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN = 0x0001;\nconst TAG = 'FreezeChild';\n\n@Entry\n@Component({ freezeWhenInactive: true })\nstruct PageTwo {\n  @StorageLink('PropA') @Watch('second') storageLink: number = 1;\n\n  second() {\n    hilog.info(DOMAIN, TAG, 'second page: ' + `${this.storageLink}`);\n  }\n\n  build() {\n    Column() {\n      Text(`second Page ${this.storageLink}`).fontSize(50)\n      Button('back')\n        .onClick(() => {\n          this.getUIContext().getRouter().back();\n        })\n      Button('second page storageLink + 2').fontSize(30)\n        .onClick(() => {\n          this.storageLink += 2;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上面的示例中："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1.在页面1中点击first page storageLink + 1，storageLink状态变量改变，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-watch",
        children: "@Watch"
      }), "注册的方法first会被调用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.在页面1中点击go to next page，跳转到页面2，页面1隐藏，状态由active变为inactive。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.在页面2中点击this.storageLink2 += 2，只会回调页面2中@Watch注册的方法second，因为页面1的状态变量此时已被冻结。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4.在页面2中点击back，页面2被销毁，页面1的状态由inactive变为active，重新刷新在inactive时被冻结的状态变量，页面1中@Watch注册的方法first被再次调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tabcontent",
      children: "TabContent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对Tabs中当前不可见的TabContent进行冻结，修改状态变量不会触发冻结组件的更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要注意的是：在首次渲染的时候，Tabs只会创建当前正在显示的TabContent，当切换全部的TabContent后，TabContent才会被全部创建。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图示如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(13726)/* ["default"] */.A) + "",
        width: "451",
        height: "271"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN = 0x0001;\nconst TAG = 'FreezeChild';\n\n@Entry\n@Component\nstruct TabContentTest {\n  @State @Watch('onMessageUpdated') message: number = 0;\n  private data: number[] = [0, 1];\n\n  onMessageUpdated() {\n    hilog.info(DOMAIN, TAG, `TabContent message callback func ${this.message}`);\n  }\n\n  build() {\n    Row() {\n      Column() {\n        Button('change message').onClick(() => {\n          this.message++;\n        })\n        Tabs() {\n          ForEach(this.data, (item: number) => {\n            TabContent() {\n              FreezeChild({ message: this.message, index: item })\n            }.tabBar(`tab${item}`)\n          }, (item: number) => item.toString())\n        }\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n\n@Component({ freezeWhenInactive: true })\nstruct FreezeChild {\n  @Link @Watch('onMessageUpdated') message: number;\n  index: number = 0;\n\n  onMessageUpdated() {\n    hilog.info(DOMAIN, TAG, `FreezeChild message callback func ${this.message}, index: ${this.index}`);\n  }\n\n  build() {\n    Text('message' + `${this.message}, index: ${this.index}`)\n      .fontSize(50)\n      .fontWeight(FontWeight.Bold)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上面的示例中："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.点击change message更改message的值，当前正在显示的TabContent组件中的@Watch注册的方法onMessageUpdated被触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.点击tab1切换到另外的TabContent，该TabContent的状态由inactive变为active，对应的@Watch注册的方法onMessageUpdated被触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.再次点击change message更改message的值，仅当前显示的TabContent子组件中的@Watch注册的方法onMessageUpdated被触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(367688)/* ["default"] */.A) + "",
        width: "1469",
        height: "595"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lazyforeach",
      children: "LazyForEach"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对LazyForEach中缓存的自定义组件进行冻结，修改状态变量不会触发缓存组件的更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN = 0x0001;\nconst TAG = 'FreezeChild';\n\n// 用于处理数据监听的IDataSource的基本实现\nclass BasicDataSource implements IDataSource {\n  private listeners: DataChangeListener[] = [];\n  private originDataArray: string[] = [];\n\n  public totalCount(): number {\n    return 0;\n  }\n\n  public getData(index: number): string {\n    return this.originDataArray[index];\n  }\n\n  // 该方法为框架侧调用，为LazyForEach组件向其数据源处添加listener监听\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      hilog.info(DOMAIN, TAG, 'add listener');\n      this.listeners.push(listener);\n    }\n  }\n\n  // 该方法为框架侧调用，为对应的LazyForEach组件在数据源处去除listener监听\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      hilog.info(DOMAIN, TAG, 'remove listener');\n      this.listeners.splice(pos, 1);\n    }\n  }\n\n  // 通知LazyForEach组件需要重载所有子组件\n  notifyDataReload(): void {\n    this.listeners.forEach(listener => {\n      listener.onDataReloaded();\n    })\n  }\n\n  // 通知LazyForEach组件需要在index对应索引处添加子组件\n  notifyDataAdd(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index);\n    })\n  }\n\n  // 通知LazyForEach组件在index对应索引处数据有变化，需要重建该子组件\n  notifyDataChange(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataChange(index);\n    })\n  }\n\n  // 通知LazyForEach组件需要在index对应索引处删除该子组件\n  notifyDataDelete(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataDelete(index);\n    })\n  }\n}\n\nclass MyDataSource extends BasicDataSource {\n  private dataArray: string[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n\n  public addData(index: number, data: string): void {\n    this.dataArray.splice(index, 0, data);\n    this.notifyDataAdd(index);\n  }\n\n  public pushData(data: string): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n\n@Entry\n@Component\nstruct LazyforEachTest {\n  private data: MyDataSource = new MyDataSource();\n  @State @Watch('onMessageUpdated') message: number = 0;\n\n  onMessageUpdated() {\n    hilog.info(DOMAIN, TAG, `LazyforEach message callback func ${this.message}`);\n  }\n\n  aboutToAppear() {\n    for (let i = 0; i <= 20; i++) {\n      this.data.pushData(`Hello ${i}`);\n    }\n  }\n\n  build() {\n    Column() {\n      Button('change message').onClick(() => {\n        this.message++;\n      })\n      List({ space: 3 }) {\n        LazyForEach(this.data, (item: string) => {\n          ListItem() {\n            FreezeChild({ message: this.message, index: item })\n          }\n        }, (item: string) => item)\n      }.cachedCount(5).height(500)\n    }\n  }\n}\n\n@Component({ freezeWhenInactive: true })\nstruct FreezeChild {\n  @Link @Watch('onMessageUpdated') message: number;\n  index: string = '';\n\n  aboutToAppear() {\n    hilog.info(DOMAIN, TAG, `FreezeChild aboutToAppear index: ${this.index}`);\n  }\n\n  onMessageUpdated() {\n    hilog.info(DOMAIN, TAG, `FreezeChild message callback func ${this.message}, index: ${this.index}`);\n  }\n\n  build() {\n    Text('message' + `${this.message}, index: ${this.index}`)\n      .width('90%')\n      .height(160)\n      .backgroundColor(0xAFEEEE)\n      .textAlign(TextAlign.Center)\n      .fontSize(30)\n      .fontWeight(FontWeight.Bold)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上面的示例中："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.点击change message更改message的值，当前正在显示的ListItem中的子组件@Watch注册的方法onMessageUpdated被触发。缓存节点中@Watch注册的方法不会被触发。（如果不加组件冻结，当前正在显示的ListItem和cachecount缓存节点中@Watch注册的方法onMessageUpdated都会被触发。）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.List区域外的ListItem滑动到List区域内，状态由inactive变为active，对应的@Watch注册的方法onMessageUpdated被触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.再次点击change message更改message的值，仅有当前显示的ListItem中的子组件@Watch注册的方法onMessageUpdated被触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(729803)/* ["default"] */.A) + "",
        width: "1570",
        height: "755"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "navigation",
      children: "Navigation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当NavDestination不可见时，会将其子自定义组件设置成非激活态，修改状态变量不会触发冻结组件的刷新。当返回该页面时，其子自定义组件重新恢复成激活态，触发@Watch回调进行刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面例子中，NavigationContentMsgStack会被设置成非激活态，将不再响应状态变量的变化，也不会触发组件刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN = 0x0001;\nconst TAG = 'FreezeChild';\nconst PAGE_ONE_INDEX = 1;\nconst PAGE_TWO_INDEX = 2;\nconst PAGE_THREE_INDEX = 3;\n\n@Entry\n@Component\nstruct MyNavigationTestStack {\n  @Provide('pageInfo') pageInfo: NavPathStack = new NavPathStack();\n  @State @Watch('info') message: number = 0;\n  @State logNumber: number = 0;\n\n  info() {\n    hilog.info(DOMAIN, TAG, `freeze-test MyNavigation message callback ${this.message}`);\n  }\n\n  @Builder\n  PageMap(name: string) {\n    if (name === 'pageOne') {\n      PageOneStack({ message: this.message, logNumber: this.logNumber })\n    } else if (name === 'pageTwo') {\n      PageTwoStack({ message: this.message, logNumber: this.logNumber })\n    } else if (name === 'pageThree') {\n      PageThreeStack({ message: this.message, logNumber: this.logNumber })\n    }\n  }\n\n  build() {\n    Column() {\n      Button('change message')\n        .onClick(() => {\n          this.message++;\n        })\n      Navigation(this.pageInfo) {\n        Column() {\n          Button('Next Page', { stateEffect: true, type: ButtonType.Capsule })\n            .width('80%')\n            .height(40)\n            .margin(20)\n            .onClick(() => {\n              this.pageInfo.pushPath({ name: 'pageOne' }); // 将name指定的NavDestination页面信息入栈\n            })\n        }\n      }.title('NavIndex')\n      .navDestination(this.PageMap)\n      .mode(NavigationMode.Stack)\n    }\n  }\n}\n\n@Component\nstruct PageOneStack {\n  @Consume('pageInfo') pageInfo: NavPathStack;\n  @State index: number = PAGE_ONE_INDEX;\n  @Link message: number;\n  @Link logNumber: number;\n\n  build() {\n    NavDestination() {\n      Column() {\n        NavigationContentMsgStack({ message: this.message, index: this.index, logNumber: this.logNumber })\n        Text('cur stack size:' + `${this.pageInfo.size()}`)\n          .fontSize(30)\n          .fontWeight(FontWeight.Bold)\n        Button('Next Page', { stateEffect: true, type: ButtonType.Capsule })\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pushPathByName('pageTwo', null);\n          })\n        Button('Back Page', { stateEffect: true, type: ButtonType.Capsule })\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pop();\n          })\n      }.width('100%').height('100%')\n    }.title('pageOne')\n    .onBackPressed(() => {\n      this.pageInfo.pop();\n      return true;\n    })\n  }\n}\n\n@Component\nstruct PageTwoStack {\n  @Consume('pageInfo') pageInfo: NavPathStack;\n  @State index: number = PAGE_TWO_INDEX;\n  @Link message: number;\n  @Link logNumber: number;\n\n  build() {\n    NavDestination() {\n      Column() {\n        NavigationContentMsgStack({ message: this.message, index: this.index, logNumber: this.logNumber })\n        Text('cur stack size:' + `${this.pageInfo.size()}`)\n          .fontSize(30)\n          .fontWeight(FontWeight.Bold)\n        Button('Next Page', { stateEffect: true, type: ButtonType.Capsule })\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pushPathByName('pageThree', null);\n          })\n        Button('Back Page', { stateEffect: true, type: ButtonType.Capsule })\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pop();\n          })\n      }.width('100%').height('100%')\n    }.title('pageTwo')\n    .onBackPressed(() => {\n      this.pageInfo.pop();\n      return true;\n    })\n  }\n}\n\n@Component\nstruct PageThreeStack {\n  @Consume('pageInfo') pageInfo: NavPathStack;\n  @State index: number = PAGE_THREE_INDEX;\n  @Link message: number;\n  @Link logNumber: number;\n\n  build() {\n    NavDestination() {\n      Column() {\n        NavigationContentMsgStack({ message: this.message, index: this.index, logNumber: this.logNumber })\n        Text('cur stack size:' + `${this.pageInfo.size()}`)\n          .fontSize(30)\n          .fontWeight(FontWeight.Bold)\n        Button('Next Page', { stateEffect: true, type: ButtonType.Capsule })\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pushPathByName('pageOne', null);\n          })\n        Button('Back Page', { stateEffect: true, type: ButtonType.Capsule })\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pop();\n          })\n      }.width('100%').height('100%')\n    }.title('pageThree')\n    .onBackPressed(() => {\n      this.pageInfo.pop();\n      return true;\n    })\n  }\n}\n\n@Component({ freezeWhenInactive: true })\nstruct NavigationContentMsgStack {\n  @Link @Watch('info') message: number;\n  @Link index: number;\n  @Link logNumber: number;\n\n  info() {\n    hilog.info(DOMAIN, TAG, `freeze-test NavigationContent message callback ${this.message}`);\n    hilog.info(DOMAIN, TAG, `freeze-test ---- called by content ${this.index}`);\n    this.logNumber++;\n  }\n\n  build() {\n    Column() {\n      Text('msg:' + `${this.message}`)\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n      Text('log number:' + `${this.logNumber}`)\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上面的示例中："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.点击change message更改message的值，当前正在显示的MyNavigationTestStack组件中的@Watch注册的方法info被触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.点击Next Page切换到PageOne，创建PageOneStack节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.再次点击change message更改message的值，仅PageOneStack中的NavigationContentMsgStack子组件中@Watch注册的方法info被触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4.再次点击Next Page切换到PageTwo，创建PageTwoStack节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "5.再次点击change message更改message的值，仅PageTwoStack中的NavigationContentMsgStack子组件中@Watch注册的方法info被触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "6.再次点击Next Page切换到PageThree，创建PageThreeStack节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "7.再次点击change message更改message的值，仅PageThreeStack中的NavigationContentMsgStack子组件中@Watch注册的方法info被触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "8.点击Back Page回到PageTwo，此时，仅PageTwoStack中的NavigationContentMsgStack子组件中@Watch注册的方法info被触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "9.再次点击Back Page回到PageOne，此时，仅PageOneStack中的NavigationContentMsgStack子组件中@Watch注册的方法info被触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "10.再次点击Back Page回到初始页，此时，无任何触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(533561)/* ["default"] */.A) + "",
        width: "1468",
        height: "572"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "组件复用",
      children: "组件复用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable",
        children: "组件复用"
      }), "通过重利用缓存池中已存在的节点，而非创建新节点，来优化UI性能并提升应用流畅度。复用池中的节点尽管未在UI组件树上展示，但是状态变量的更改仍会触发UI刷新。为了解决复用池中组件异常刷新问题，可以使用组件冻结避免复用池中的组件刷新。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "组件复用、if和组件冻结混用场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面是组件复用、if组件和组件冻结混合使用场景的例子，if组件绑定的状态变量变化成false时，触发子组件ChildComponent的下树，由于ChildComponent被标记了组件复用，所以不会被销毁，而是进入复用池，这个时候如果同时开启了组件冻结，则可以使在复用池里不再刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN = 0x0001;\nconst TAG = 'FreezeChild';\n\n@Reusable\n@Component({ freezeWhenInactive: true })\nstruct ChildComponent {\n  @Link @Watch('descChange') desc: string;\n  @State count: number = 0;\n\n  descChange() {\n    hilog.info(DOMAIN, TAG, `ChildComponent messageChange ${this.desc}`);\n  }\n\n  aboutToReuse(params: Record<string, ESObject>): void {\n    this.count = params.count as number;\n  }\n\n  aboutToRecycle(): void {\n    hilog.info(DOMAIN, TAG, `ChildComponent has been recycled`);\n  }\n\n  build() {\n    Column() {\n      Text(`ChildComponent desc: ${this.desc}`)\n        .fontSize(20)\n      Text(`ChildComponent count ${this.count}`)\n        .fontSize(20)\n    }.border({ width: 2, color: Color.Pink })\n  }\n}\n\n@Entry\n@Component\nstruct Page {\n  @State desc: string = 'Hello World';\n  @State flag: boolean = true;\n  @State count: number = 0;\n\n  build() {\n    Column() {\n      Button(`change desc`).onClick(() => {\n        this.desc += '!';\n      })\n      Button(`change flag`).onClick(() => {\n        this.count++;\n        this.flag = !this.flag;\n      })\n      if (this.flag) {\n        ChildComponent({ desc: this.desc, count: this.count })\n      }\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上面的示例中："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["点击change flag，改变flag为false：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "被标记@Reusable的ChildComponent组件在下树时，不会被销毁，而是进入复用池，触发aboutToRecycle生命周期，同时设置状态为inactive。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ChildComponent同时也开启了组件冻结，当其状态为inactive时，不会响应任何状态变量变化带来的UI刷新。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["点击change desc，触发Page的成员变量desc的变化：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["desc是@State装饰的，其变化会通知给其子组件ChildComponent", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link",
              children: "@Link"
            }), "装饰的desc。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "但因为ChildComponent是inactive状态，且开启了组件冻结，所以这次变化并不会触发@Watch('descChange')的回调和ChildComponentUI刷新。如果没有开启组件冻结，当前@Watch('descChange')会立即回调，且复用池内的ChildComponent组件也会对应刷新。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["再次点击change flag，改变flag为true：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ChildComponent从复用池中重新加入到组件树上。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["回调aboutToReuse生命周期，将当前最新的count值同步给子组件。desc是通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
              children: "@State"
            }), "到@Link同步的，所以无需开发者手动在aboutToReuse中赋值。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "设置ChildComponent为active状态，并且刷新在inactive时没有刷新的组件，在当前例子中，就是Text(ChildComponent desc: ${this.desc})。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "LazyForEach、组件复用和组件冻结混用场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在数据很多的长列表滑动场景下，开发者会使用LazyForEach来按需创建组件，同时配合组件复用降低在滑动过程中因创建和销毁组件带来的开销。但是开发者如果根据其复用类型不同，设置了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/other-property/ts-universal-attributes-reuse-id/ts-universal-attributes-reuse-id#reuseid",
        children: "reuseId"
      }), "，或者为了保证滑动性能设置了较大的cacheCount，这就可能使复用池或者LazyForEach缓存较多的节点。在这种情况下，如果开发者触发List下所有子节点的刷新，就会带来节点刷新数量过多的问题，这个时候，可以考虑搭配组件冻结使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog, hiTraceMeter } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN = 0x0001;\nconst TAG = 'FreezeChild';\n\n// 用于处理数据监听的IDataSource的基本实现\nclass BasicDataSource implements IDataSource {\n  private listeners: DataChangeListener[] = [];\n  private originDataArray: string[] = [];\n\n  public totalCount(): number {\n    return 0;\n  }\n\n  public getData(index: number): string {\n    return this.originDataArray[index];\n  }\n\n  // 该方法为框架侧调用，为LazyForEach组件向其数据源处添加listener监听\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      hilog.info(DOMAIN, TAG, 'add listener');\n      this.listeners.push(listener);\n    }\n  }\n\n  // 该方法为框架侧调用，为对应的LazyForEach组件在数据源处去除listener监听\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      hilog.info(DOMAIN, TAG, 'remove listener');\n      this.listeners.splice(pos, 1);\n    }\n  }\n\n  // 通知LazyForEach组件需要重载所有子组件\n  notifyDataReload(): void {\n    this.listeners.forEach(listener => {\n      listener.onDataReloaded();\n    });\n  }\n\n  // 通知LazyForEach组件需要在index对应索引处添加子组件\n  notifyDataAdd(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index);\n    });\n  }\n\n  // 通知LazyForEach组件在index对应索引处数据有变化，需要重建该子组件\n  notifyDataChange(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataChange(index);\n    });\n  }\n\n  // 通知LazyForEach组件需要在index对应索引处删除该子组件\n  notifyDataDelete(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataDelete(index);\n    });\n  }\n\n  // 通知LazyForEach组件将from索引和to索引处的子组件进行交换\n  notifyDataMove(from: number, to: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataMove(from, to);\n    });\n  }\n}\n\nclass MyDataSource extends BasicDataSource {\n  private dataArray: string[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n\n  public addData(index: number, data: string): void {\n    this.dataArray.splice(index, 0, data);\n    this.notifyDataAdd(index);\n  }\n\n  public pushData(data: string): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n\n@Reusable\n@Component({freezeWhenInactive: true})\nstruct ChildComponent {\n  @Link @Watch('descChange') desc: string;\n  @State item: string = '';\n  @State index: number = 0;\n\n  descChange() {\n    hilog.info(DOMAIN, TAG, `ChildComponent messageChange ${this.desc}`);\n  }\n\n  aboutToReuse(params: Record<string, ESObject>): void {\n    this.item = params.item;\n    this.index = params.index;\n  }\n\n  aboutToRecycle(): void {\n    hilog.info(DOMAIN, TAG, `ChildComponent has been recycled`);\n  }\n\n  build() {\n    Column() {\n      Text(`ChildComponent index: ${this.index} item: ${this.item}`)\n        .fontSize(20)\n      Text(`desc: ${this.desc}`)\n        .fontSize(20)\n    }.border({width: 2, color: Color.Pink})\n  }\n}\n\n@Entry\n@Component\nstruct Page {\n  @State desc: string = 'Hello World';\n  private data: MyDataSource = new MyDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i < 50; i++) {\n      this.data.pushData(`Hello ${i}`);\n    }\n  }\n\n  build() {\n    Column() {\n      Button(`change desc`).onClick(() => {\n        hiTraceMeter.startTrace('change desc', 1);\n        this.desc += '!';\n        hiTraceMeter.finishTrace('change desc', 1);\n      })\n      List({ space: 3 }) {\n        LazyForEach(this.data, (item: string, index: number) => {\n          ListItem() {\n            ChildComponent({index: index, item: item, desc: this.desc}).reuseId(index % 10 < 5 ? '1': '0')\n          }\n        }, (item: string) => item)\n      }.cachedCount(5)\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上面的示例中："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "滑动到index为14的位置，当前屏幕上可见区域内有15个ChildComponent。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在滑动过程中：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "列表上端的ChildComponent滑出可视区域外，此时先进入LazyForEach的缓存区域内，被设置inactive。在滑出LazyForEach缓存区域外后，因为标记了组件复用，所以并不会被析构，而是会进入复用池，此时再次被设置inactive。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "列表下端LazyForEach的缓存节点会进入List范围内，此时会试图请求创建新的节点进入LazyForEach的缓存，发现有可复用的节点时，从复用池中拿出已有节点，触发aboutToReuse生命周期回调，此时因为节点进入的是LazyForEach的缓存区域，所以其状态依旧是inactive。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["点击change desc，触发Page的成员变量desc的变化：\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "desc是@State装饰的，其变化会通知给其子组件ChildComponent@Link装饰的desc。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "非可视区域内的ChildComponent是inactive状态，且开启了组件冻结，所以这次变化只触发可视区域内的15个节点的@Watch('descChange')回调，并只刷新对应可视区域内的15个节点。LazyForEach和复用池中的节点并不会刷新，也不会触发@Watch回调。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图示如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(100763)/* ["default"] */.A) + "",
        width: "1141",
        height: "1029"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可通过trace观察，仅触发了15个ChildComponent节点的刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(425099)/* ["default"] */.A) + "",
        width: "1573",
        height: "614"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "LazyForEach、if、组件复用和组件冻结混用场景"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面的场景中展示了LazyForEach、if、组件复用和组件冻结混用场景。在同一个父自定义组件下，可复用的节点可能通过不同的方式进入复用池，比如："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "通过滑动从LazyForEach的缓存区域下树，进入复用池。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "if条件切换通知子节点下树，进入复用池。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog, hiTraceMeter } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN = 0x0001;\nconst TAG = 'FreezeChild';\n\nclass BasicDataSource implements IDataSource {\n  private listeners: DataChangeListener[] = [];\n  private originDataArray: string[] = [];\n\n  public totalCount(): number {\n    return 0;\n  }\n\n  public getData(index: number): string {\n    return this.originDataArray[index];\n  }\n\n  // 该方法为框架侧调用，为LazyForEach组件向其数据源处添加listener监听\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      hilog.info(DOMAIN, TAG, 'add listener');\n      this.listeners.push(listener);\n    }\n  }\n\n  // 该方法为框架侧调用，为对应的LazyForEach组件在数据源处去除listener监听\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      hilog.info(DOMAIN, TAG, 'remove listener');\n      this.listeners.splice(pos, 1);\n    }\n  }\n\n  // 通知LazyForEach组件需要重载所有子组件\n  notifyDataReload(): void {\n    this.listeners.forEach(listener => {\n      listener.onDataReloaded();\n    });\n  }\n\n  // 通知LazyForEach组件需要在index对应索引处添加子组件\n  notifyDataAdd(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index);\n    });\n  }\n\n  // 通知LazyForEach组件在index对应索引处数据有变化，需要重建该子组件\n  notifyDataChange(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataChange(index);\n    });\n  }\n\n  // 通知LazyForEach组件需要在index对应索引处删除该子组件\n  notifyDataDelete(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataDelete(index);\n    });\n  }\n\n  // 通知LazyForEach组件将from索引和to索引处的子组件进行交换\n  notifyDataMove(from: number, to: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataMove(from, to);\n    });\n  }\n}\n\nclass MyDataSource extends BasicDataSource {\n  private dataArray: string[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n\n  public addData(index: number, data: string): void {\n    this.dataArray.splice(index, 0, data);\n    this.notifyDataAdd(index);\n  }\n\n  public pushData(data: string): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n\n@Reusable\n@Component({ freezeWhenInactive: true })\nstruct ChildComponent {\n  @Link @Watch('descChange') desc: string;\n  @State item: string = '';\n  @State index: number = 0;\n\n  descChange() {\n    hilog.info(DOMAIN, TAG, `ChildComponent messageChange ${this.desc}`);\n  }\n\n  aboutToReuse(params: Record<string, ESObject>): void {\n    this.item = params.item;\n    this.index = params.index;\n  }\n\n  aboutToRecycle(): void {\n    hilog.info(DOMAIN, TAG, `ChildComponent has been recycled`);\n  }\n\n  build() {\n    Column() {\n      Text(`ChildComponent index: ${this.index} item: ${this.item}`)\n        .fontSize(20)\n      Text(`desc: ${this.desc}`)\n        .fontSize(20)\n    }.border({ width: 2, color: Color.Pink })\n  }\n}\n\n@Entry\n@Component\nstruct Page {\n  @State desc: string = 'Hello World';\n  @State flag: boolean = true;\n  private data: MyDataSource = new MyDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i < 50; i++) {\n      this.data.pushData(`Hello ${i}`);\n    }\n  }\n\n  build() {\n    Column() {\n      Button(`change desc`).onClick(() => {\n        hiTraceMeter.startTrace('change desc', 1);\n        this.desc += '!';\n        hiTraceMeter.finishTrace('change desc', 1);\n      })\n      Button(`change flag`).onClick(() => {\n        hiTraceMeter.startTrace('change flag', 1);\n        this.flag = !this.flag;\n        hiTraceMeter.finishTrace('change flag', 1);\n      })\n      List({ space: 3 }) {\n        LazyForEach(this.data, (item: string, index: number) => {\n          ListItem() {\n            ChildComponent({ index: index, item: item, desc: this.desc }).reuseId(index % 10 < 5 ? '1' : '0')\n          }\n        }, (item: string) => item)\n      }\n      .cachedCount(5)\n      .height('60%')\n      if (this.flag) {\n        ChildComponent({ index: -1, item: 'Hello', desc: this.desc }).reuseId('1')\n      }\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上面的示例中："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当滑动到index为14的位置，屏幕上可见区域内有10个ChildComponent，9个是LazyForEach的子节点，1个是if的子节点。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击change flag，if的条件变成false，其子节点ChildComponent进入复用池。当前屏幕显示9个节点。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "此时不管是通过LazyForEach还是if下树的节点都会进入Page节点下的复用池。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击change desc，仅更新屏幕上的9个ChildComponent节点，具体可参考下面的trace。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "再次点击change flag，if的条件变成true，ChildComponent从复用池中重新加入到组件树上，其状态变成active。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "再次点击change desc，从复用池中通过if和LazyForEach上树的节点都可正常刷新。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启组件冻结trace："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(43274)/* ["default"] */.A) + "",
        width: "1562",
        height: "630"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "没有开启组件冻结trace："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(444139)/* ["default"] */.A) + "",
        width: "1573",
        height: "788"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "组件混用",
      children: "组件混用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当支持组件冻结的场景彼此之间组合使用时，对于不同的API版本，冻结行为会有不同。给父组件设置组件冻结标志，在API version 17及以下，当父组件解冻时，会解冻自己子组件所有的节点；从API version 18开始，父组件解冻时，只会解冻子组件的屏上节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Navigation和TabContent的混用"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "代码示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.ets\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN = 0x0001;\nconst TAG = 'FreezeChild';\nconst TAB_STATE_INITIAL_VALUE = 47;\n\n@Component\nstruct ChildOfParamComponent {\n  @Prop @Watch('onChange') childVal: number;\n\n  onChange() {\n    hilog.info(DOMAIN, TAG, `Appmonitor ChildOfParamComponent: childVal changed:${this.childVal}`);\n  }\n\n  build() {\n    Column() {\n      Text(`Child Param: ${this.childVal}`)\n    }\n  }\n}\n\n@Component\nstruct ParamComponent {\n  @Prop @Watch('onChange') paramVal: number;\n\n  onChange() {\n    hilog.info(DOMAIN, TAG, `Appmonitor ParamComponent: paramVal changed:${this.paramVal}`);\n  }\n\n  build() {\n    Column() {\n      Text(`val: ${this.paramVal}`)\n      ChildOfParamComponent({ childVal: this.paramVal })\n    }\n  }\n}\n\n@Component\nstruct DelayComponent {\n  @Prop @Watch('onChange') delayVal: number;\n\n  onChange() {\n    hilog.info(DOMAIN, TAG, `Appmonitor ParamComponent: delayVal changed:${this.delayVal}`);\n  }\n\n  build() {\n    Column() {\n      Text(`Delay Param: ${this.delayVal}`)\n    }\n  }\n}\n\n@Component({ freezeWhenInactive: true })\nstruct TabsComponent {\n  private controller: TabsController = new TabsController();\n  @State @Watch('onChange') tabState: number = TAB_STATE_INITIAL_VALUE;\n\n  onChange() {\n    hilog.info(DOMAIN, TAG, `Appmonitor TabsComponent: tabState changed:${this.tabState}`);\n  }\n\n  build() {\n    Column({ space: 10 }) {\n      Button(`Incr state ${this.tabState}`)\n        .fontSize(25)\n        .onClick(() => {\n          hilog.info(DOMAIN, TAG, 'Button increment state value');\n          this.tabState = this.tabState + 1;\n        })\n      Tabs({ barPosition: BarPosition.Start, index: 0, controller: this.controller }) {\n        TabContent() {\n          ParamComponent({ paramVal: this.tabState })\n        }.tabBar('Update')\n        TabContent() {\n          DelayComponent({ delayVal: this.tabState })\n        }.tabBar('DelayUpdate')\n      }\n      .vertical(false)\n      .scrollable(true)\n      .barMode(BarMode.Fixed)\n      .barWidth(400)\n      .barHeight(150)\n      .animationDuration(400)\n      .width('100%')\n      .height(200)\n      .backgroundColor(0xF5F5F5)\n    }\n  }\n}\n\n@Entry\n@Component\nstruct MyNavigationTestStack {\n  @Provide('pageInfo') pageInfo: NavPathStack = new NavPathStack();\n\n  @Builder\n  PageMap(name: string) {\n    if (name === 'pageOne') {\n      PageOneStack()\n    } else if (name === 'pageTwo') {\n      PageTwoStack()\n    }\n  }\n\n  build() {\n    Column() {\n      Navigation(this.pageInfo) {\n        Column() {\n          Button('Next Page', { stateEffect: true, type: ButtonType.Capsule })\n            .width('80%')\n            .height(40)\n            .margin(20)\n            .onClick(() => {\n              this.pageInfo.pushPath({ name: 'pageOne' }); // 将name指定的NavDestination页面信息入栈\n            })\n        }\n      }.title('NavIndex')\n      .navDestination(this.PageMap)\n      .mode(NavigationMode.Stack)\n    }\n  }\n}\n\n@Component\nstruct PageOneStack {\n  @Consume('pageInfo') pageInfo: NavPathStack;\n\n  build() {\n    NavDestination() {\n      Column() {\n        TabsComponent()\n        Button('Next Page', { stateEffect: true, type: ButtonType.Capsule })\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pushPathByName('pageTwo', null);\n          })\n      }.width('100%').height('100%')\n    }.title('pageOne')\n    .onBackPressed(() => {\n      this.pageInfo.pop();\n      return true;\n    })\n  }\n}\n\n@Component\nstruct PageTwoStack {\n  @Consume('pageInfo') pageInfo: NavPathStack;\n\n  build() {\n    NavDestination() {\n      Column() {\n        Button('Back Page', { stateEffect: true, type: ButtonType.Capsule })\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pop();\n          })\n      }.width('100%').height('100%')\n    }.title('pageTwo')\n    .onBackPressed(() => {\n      this.pageInfo.pop();\n      return true;\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "代码运行结果图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(503031)/* ["default"] */.A) + "",
        width: "397",
        height: "357"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击Next Page，进入pageOne页面，页面中存在两个tab标签，默认在Update标签，开启组件冻结功能，Tabcontent的标签如果未被选中，状态变量不会刷新，如以下操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击Incr state，日志中查询Appmonitor，存在3个打印。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(437523)/* ["default"] */.A) + "",
        width: "1223",
        height: "80"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "切换到DelayUpdate标签，点击Incr state，日志中查询Appmonitor，存在2个打印。DelayUpdate中状态变量不会刷新与Update标签中相关的状态变量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(785517)/* ["default"] */.A) + "",
        width: "1159",
        height: "52"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在API version 17及以下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击Next page进入下一个页面并返回，标签默认在DelayUpdate，再次点击Incr state，日志中查询Appmonitor，存在4个打印，页面路由返回时，会解冻Tabcontent所有的标签。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(248152)/* ["default"] */.A) + "",
        width: "1199",
        height: "96"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在API version 18及以上："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击Next page进入下一个页面并返回，标签默认在DelayUpdate，再次点击Incr state，日志中查询Appmonitor，存在2个打印，页面路由返回时，只会解冻对应标签的节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(544077)/* ["default"] */.A) + "",
        width: "1163",
        height: "47"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "页面和LazyForEach"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Navigation和TabContent混用时，之所以会解锁TabContent标签的子节点，是因为回到前一个页面时会从父组件开始递归解冻子组件，与此行为类似的还有页面生命周期：OnPageShow。OnPageShow会将当前Page中的根节点设置为active状态，TabContent作为页面的子节点，也会被设置为active状态。在屏幕灭屏和屏幕亮屏时会分别触发页面的生命周期：OnPageHide和OnPageShow，因此页面中使用LazyForEach时，手动灭屏和亮屏也能实现页面路由一样的效果，如以下示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN = 0x0001;\nconst TAG = 'FreezeChild';\n\n// 用于处理数据监听的IDataSource的基本实现\nclass BasicDataSource implements IDataSource {\n  private listeners: DataChangeListener[] = [];\n  private originDataArray: string[] = [];\n\n  public totalCount(): number {\n    return 0;\n  }\n\n  public getData(index: number): string {\n    return this.originDataArray[index];\n  }\n\n  // 该方法为框架侧调用，为LazyForEach组件向其数据源处添加listener监听\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      hilog.info(DOMAIN, TAG, 'add listener');\n      this.listeners.push(listener);\n    }\n  }\n\n  // 该方法为框架侧调用，为对应的LazyForEach组件在数据源处去除listener监听\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      hilog.info(DOMAIN, TAG, 'remove listener');\n      this.listeners.splice(pos, 1);\n    }\n  }\n\n  // 通知LazyForEach组件需要重载所有子组件\n  notifyDataReload(): void {\n    this.listeners.forEach(listener => {\n      listener.onDataReloaded();\n    });\n  }\n\n  // 通知LazyForEach组件需要在index对应索引处添加子组件\n  notifyDataAdd(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index);\n    });\n  }\n\n  // 通知LazyForEach组件在index对应索引处数据有变化，需要重建该子组件\n  notifyDataChange(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataChange(index);\n    });\n  }\n\n  // 通知LazyForEach组件需要在index对应索引处删除该子组件\n  notifyDataDelete(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataDelete(index);\n    });\n  }\n\n  // 通知LazyForEach组件将from索引和to索引处的子组件进行交换\n  notifyDataMove(from: number, to: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataMove(from, to);\n    });\n  }\n}\n\nclass MyDataSource extends BasicDataSource {\n  private dataArray: string[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): string {\n    return this.dataArray[index];\n  }\n\n  public addData(index: number, data: string): void {\n    this.dataArray.splice(index, 0, data);\n    this.notifyDataAdd(index);\n  }\n\n  public pushData(data: string): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n\n@Reusable\n@Component({ freezeWhenInactive: true })\nstruct ChildComponent {\n  @State desc: string = '';\n  @Link @Watch('sumChange') sum: number;\n\n  sumChange() {\n    hilog.info(DOMAIN, TAG, `sum: Change ${this.sum}`);\n  }\n\n  aboutToReuse(params: Record<string, Object>): void {\n    this.desc = params.desc as string;\n    this.sum = params.sum as number;\n  }\n\n  aboutToRecycle(): void {\n    hilog.info(DOMAIN, TAG, `ChildComponent has been recycled`);\n  }\n\n  build() {\n    Column() {\n      Divider()\n        .color('#ff11acb8')\n      Text(`subcomponent: ${this.desc}`)\n        .fontSize(30)\n        .fontWeight(30)\n      Text(`${this.sum}`)\n        .fontSize(30)\n        .fontWeight(30)\n    }\n  }\n}\n\n@Entry\n@Component({ freezeWhenInactive: true })\nstruct Page {\n  private data: MyDataSource = new MyDataSource();\n  @State sum: number = 0;\n  @State desc: string = '';\n\n  aboutToAppear() {\n    for (let index = 0; index < 20; index++) {\n      this.data.pushData(index.toString());\n    }\n  }\n\n  build() {\n    Column() {\n      Button(`add sum`).onClick(() => {\n        this.sum++;\n      })\n        .fontSize(30)\n        .margin(20)\n      List() {\n        LazyForEach(this.data, (item: string) => {\n          ListItem() {\n            ChildComponent({ desc: item, sum: this.sum })\n          }\n          .width('100%')\n          .height(100)\n        }, (item: string) => item)\n      }.cachedCount(5)\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在组件复用场景中，已经对LazyForEach的节点进行了详细说明，分为屏上节点和cachedCount节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(671594)/* ["default"] */.A) + "",
        width: "312",
        height: "620"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "向下滑动LazyForEach，让cachedCount补充节点，点击add sum，搜索打印日志：sum: Change，出现了8条打印。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(206797)/* ["default"] */.A) + "",
        width: "881",
        height: "179"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在API version 17及以下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "灭屏之后亮屏，触发OnPageShow，点击add sum，打印数量为屏上节点与cachedCount数量的总和。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(550747)/* ["default"] */.A) + "",
        width: "878",
        height: "419"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "灭屏之后亮屏，触发OnPageShow，点击add sum，只会打印屏上节点数量，不会再解冻cachedCount中的节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(625334)/* ["default"] */.A) + "",
        width: "915",
        height: "201"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制条件",
      children: "限制条件"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "buildernode无法继承父组件冻结",
      children: "BuilderNode无法继承父组件冻结"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在API version 20之前，BuilderNode无法继承父组件冻结。如下面的例子所示，FreezeBuildNode中使用了自定义节点", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode",
        children: "BuilderNode"
      }), "。BuilderNode可以通过命令式动态挂载组件，而组件冻结又是强依赖父子关系来通知是否开启组件冻结。如果父组件使用组件冻结，且组件树的中间层级上又启用了BuilderNode，则BuilderNode的子组件将无法被冻结。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在API version 20及以后，开发者可以通过配置BuilderNode的inheritFreezeOptions接口为true，实现BuilderNode继承冻结的能力。具体示例见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#inheritfreezeoptions20",
        children: "BuilderNode对象继承组件冻结"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BuilderNode, FrameNode, NodeController, UIContext } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nconst DOMAIN = 0x0001;\nconst TAG = 'FreezeChild';\n\n// 定义一个Params类，用于传递参数\nclass Params {\n  public index: number = 0;\n\n  constructor(index: number) {\n    this.index = index;\n  }\n}\n\n// 定义一个BuildNodeChild组件，它包含一个message属性和一个index属性\n@Component\nstruct BuildNodeChild {\n  @StorageProp('buildNodeTest') @Watch('onMessageUpdated') message: string = 'hello world';\n  @State index: number = 0;\n\n  // 当message更新时，调用此方法\n  onMessageUpdated() {\n    hilog.info(DOMAIN, TAG, `FreezeBuildNode builderNodeChild message callback func ${this.message},index:${this.index}`);\n  }\n\n  build() {\n    Text(`buildNode Child message: ${this.message}`).fontSize(30)\n  }\n}\n\n// 定义一个buildText函数，它接收一个Params参数并构建一个Column组件\n@Builder\nfunction buildText(params: Params) {\n  Column() {\n    BuildNodeChild({ index: params.index })\n  }\n}\n\n// 定义一个TextNodeController类，继承自NodeController\nclass TextNodeController extends NodeController {\n  private textNode: BuilderNode<[Params]> | null = null;\n  private index: number = 0;\n\n  // 构造函数接收一个index参数\n  constructor(index: number) {\n    super();\n    this.index = index;\n  }\n\n  // 创建并返回一个FrameNode\n  makeNode(context: UIContext): FrameNode | null {\n    this.textNode = new BuilderNode(context);\n    this.textNode.build(wrapBuilder<[Params]>(buildText), new Params(this.index));\n    return this.textNode.getFrameNode();\n  }\n}\n\n// 定义一个Index组件，它包含一个message属性和一个data数组\n@Entry\n@Component\nstruct Index {\n  @StorageLink('buildNodeTest') message: string = 'hello';\n  private data: number[] = [0, 1];\n\n  build() {\n    Row() {\n      Column() {\n        Button('change').fontSize(30)\n          .onClick(() => {\n            this.message += 'a';\n          })\n        Tabs() {\n          ForEach(this.data, (item: number) => {\n            TabContent() {\n              FreezeBuildNode({ index: item })\n            }.tabBar(`tab${item}`)\n          }, (item: number) => item.toString())\n        }\n      }\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n\n// 定义一个FreezeBuildNode组件，它包含一个message属性和一个index属性\n@Component({ freezeWhenInactive: true })\nstruct FreezeBuildNode {\n  @StorageProp('buildNodeTest') @Watch('onMessageUpdated') message: string = '1111';\n  @State index: number = 0;\n\n  // 当message更新时，调用此方法\n  onMessageUpdated() {\n    hilog.info(DOMAIN, TAG, `FreezeBuildNode message callback func ${this.message}, index: ${this.index}`);\n  }\n\n  build() {\n    NodeContainer(new TextNodeController(this.index))\n      .width('100%')\n      .height('100%')\n      .backgroundColor('#FFF0F0F0')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上面的示例中："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击change，改变message的值，当前正在显示的TabContent组件中@Watch注册的方法onMessageUpdated被触发。未显示的TabContent中的BuilderNode节点下组件的@Watch方法onMessageUpdated也被触发，并没有被冻结。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(470482)/* ["default"] */.A) + "",
        width: "1658",
        height: "593"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "组件冻结与组件复用混用时解冻不会触发watch",
      children: "组件冻结与组件复用混用时解冻不会触发Watch"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在以下示例中，子组件ChildComponent开启了组件冻结且被标记了组件复用，当if组件绑定的状态变量condition修改为false时，子组件ChildComponent下树并进入复用池。由于子组件开启了组件冻结，所以进入复用池时，该组件也会被冻结。在复用池内，若修改状态变量count，该组件因处于inactive状态，即不会刷新也不会触发Watch回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当if组件绑定的状态变量condition修改为true时，子组件ChildComponent出复用池并被标记为active状态，但不会触发状态变量count绑定的Watch回调。这是因为组件复用的执行逻辑早于组件解冻的执行逻辑。子组件被复用时会将", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-introduce#%E8%A7%A6%E5%8F%91%E6%9B%B4%E6%96%B0",
        children: "脏节点刷新"
      }), "（包括在冻结期间需要延迟刷新的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-introduce#%E6%94%B6%E9%9B%86%E4%BE%9D%E8%B5%96",
        children: "变量绑定的系统组件"
      }), "），并清空脏节点列表。在子组件被复用后，重新被标记为active状态，此时子组件执行解冻逻辑，由于复用时清空了脏节点列表，所以此时判断冻结期间无变量改变，不会触发Watch回调。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0001;\nconst TAG = 'FreezeChild';\n\n@Reusable\n@Component({ freezeWhenInactive: true })\nstruct ChildComponent {\n  @Link @Watch('onChange') count: number;\n\n  onChange() {\n    hilog.info(DOMAIN, TAG, `ChildComponent messageChange ${this.count}`);\n  }\n\n  aboutToReuse(params: Record<string, ESObject>): void {\n    // 在aboutToReuse中改值，解冻时同样不会触发Watch回调\n    this.count++;\n    hilog.info(DOMAIN, TAG, `ChildComponent has been reused`);\n  }\n\n  aboutToRecycle(): void {\n    hilog.info(DOMAIN, TAG, `ChildComponent has been recycled`);\n  }\n\n  build() {\n    Column() {\n      Text(`ChildComponent count: ${this.count}`)\n        .fontSize(20)\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State flag: boolean = true;\n  @State count: number = 0;\n\n  build() {\n    Column() {\n      Button(`change flag`)\n        .onClick(() => {\n          this.flag = !this.flag;\n        })\n        .margin(10)\n        .width('50%')\n      Button(`change count`)\n        .onClick(() => {\n          this.count++;\n        })\n        .margin(10)\n        .width('50%')\n      if (this.flag) {\n        ChildComponent({ count: this.count })\n      }\n    }\n    .height('100%')\n  }\n}\n"
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
470482(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797920-ec6f620da8a3c87451ef214a41330939.gif");

},
671594(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797918-7384177fbe1d2f4918bba7352031401f.png");

},
533808(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
43274(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437609-c028a1fb5731a98e5c1d9cb65822d183.png");

},
540612(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
248152(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957566-113f7f57b3aec2ec038339a40387a0f0.png");

},
550747(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957568-f185ebeff1a97213d50bf457a0bb24a4.png");

},
425099(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797914-22a10e2e1c1806c7baaf49abb3bdd8c8.png");

},
544077(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477567-63873f1be157254bfc043b28a53fd8dd.png");

},
96001(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957560-c9a79ef7931bd183f8b6518fda171470.png");

},
625334(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477569-95e537ce19b5686e666df7f66547f649.png");

},
206797(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437613-a8966c4de9e5a2a1675fb64d538fb4a5.png");

},
100763(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477563-db8b6767227359bf393d1007817cd13a.png");

},
533561(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957562-25d05378a483d374f71bbaa425a51ace.gif");

},
503031(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477565-ec4c1d934bc35ac829e524fa38667b4b.gif");

},
444139(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957564-d02dfdce6fd07aee985192b163a3d4e0.png");

},
13726(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477561-65e3d5ade6f97ed9f176754966e47912.png");

},
729803(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437607-e3b55dc5e9e4831b5fc4b220166974c6.gif");

},
367688(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797912-083ebdcb593cd36100a78c6a6c57ffa3.gif");

},
785517(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437611-b2b925098ace9ebf2d0b3bebcf6b1c04.png");

},
437523(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797916-702c207d45b926012e864b1126751a6f.png");

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