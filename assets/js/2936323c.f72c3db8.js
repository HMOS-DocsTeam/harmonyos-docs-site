"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["704123"], {
73448(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_ui_paradigm_basic_syntax_arkts_custom_components_arkts_component_freeze_arkts_custom_components_freezev_2_arkts_custom_components_freezev_2_md_293_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-ui-paradigm-basic-syntax-arkts-custom-components-arkts-component-freeze-arkts-custom-components-freezev-2-arkts-custom-components-freezev-2-md-293.json
var site_docs_arkui_arkts_ui_development_arkts_ui_paradigm_basic_syntax_arkts_custom_components_arkts_component_freeze_arkts_custom_components_freezev_2_arkts_custom_components_freezev_2_md_293_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-freeze/arkts-custom-components-freezev2/arkts-custom-components-freezev2","title":"自定义组件冻结功能（V2）","description":"当@ComponentV2装饰的自定义组件处于非激活状态时，状态变量将不响应更新，即@Monitor不会调用，状态变量关联的节点不会刷新。该冻结机制在复杂UI场景下能显著优化性能，避免非激活组件因状态变量更新进行无效刷新，从而减少资源消耗。通过freezeWhenInactive属性来决定是否使用冻结功能，不传参数时默认不使用。支持的场景有：页面路由、TabContent、Navigation、Repeat。","source":"@site/docs/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-freeze/arkts-custom-components-freezev2/arkts-custom-components-freezev2.md","sourceDirName":"arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-freeze/arkts-custom-components-freezev2","slug":"/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-freeze/arkts-custom-components-freezev2/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-freeze/arkts-custom-components-freezev2/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"自定义组件冻结功能（V2）","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-custom-components-freezev2","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自定义组件冻结功能（V1）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-freeze/arkts-custom-components-freeze/"},"next":{"title":"组件扩展概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-extend-components-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-freeze/arkts-custom-components-freezev2/arkts-custom-components-freezev2.md


const frontMatter = {
	title: '自定义组件冻结功能（V2）',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-custom-components-freezev2',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '自定义组件冻结功能（V2）';

const assets = {

};



const toc = [{
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
  "value": "Navigation",
  "id": "navigation",
  "level": 3
}, {
  "value": "Repeat",
  "id": "repeat",
  "level": 3
}, {
  "value": "仅子组件开启组件冻结",
  "id": "仅子组件开启组件冻结",
  "level": 3
}, {
  "value": "混用场景",
  "id": "混用场景",
  "level": 3
}, {
  "value": "限制条件",
  "id": "限制条件",
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
        id: "自定义组件冻结功能v2",
        children: "自定义组件冻结功能（V2）"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当@ComponentV2装饰的自定义组件处于非激活状态时，状态变量将不响应更新，即", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-monitor",
        children: "@Monitor"
      }), "不会调用，状态变量关联的节点不会刷新。该冻结机制在复杂UI场景下能显著优化性能，避免非激活组件因状态变量更新进行无效刷新，从而减少资源消耗。通过freezeWhenInactive属性来决定是否使用冻结功能，不传参数时默认不使用。支持的场景有：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-router/js-apis-router",
        children: "页面路由"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-container-tabcontent/ts-container-tabcontent",
        children: "TabContent"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
        children: "Navigation"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-repeat/ts-rendering-control-repeat",
        children: "Repeat"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在阅读本文档前，开发者需要了解@ComponentV2基本语法。建议提前阅读：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#componentv2",
        children: "@ComponentV2"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(808190)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始，支持@ComponentV2装饰的自定义组件冻结功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 18开始，支持自定义组件冻结混用场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 22开始，通过将", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode",
        children: "BuilderNode"
      }), "的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode#inheritfreezeoptions20",
        children: "inheritFreezeOptions"
      }), "配置为true，可实现如下场景：当父组件启用组件冻结，且组件树的中间层级启用了BuilderNode时，BuilderNode的子组件能够被冻结。具体可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode#%E8%AE%BE%E7%BD%AEbuildernode%E7%BB%A7%E6%89%BF%E5%86%BB%E7%BB%93%E8%83%BD%E5%8A%9B",
        children: "设置BuilderNode继承冻结能力"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["与@Component的组件冻结不同，@ComponentV2装饰的自定义组件不支持在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
        children: "LazyForEach"
      }), "场景下缓存节点组件冻结。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "当前支持的场景",
      children: "当前支持的场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "页面路由",
      children: "页面路由"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(154424)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本示例使用了router进行页面跳转，建议开发者使用组件导航(Navigation)代替页面路由(router)来实现页面切换。Navigation提供了更多的功能和更灵活的自定义能力。请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#navigation",
        children: "使用Navigation的组件冻结用例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当页面1调用this.getUIContext().getRouter().pushUrl()接口跳转到页面2时，页面1为隐藏不可见状态，此时如果更新页面1中的状态变量，不会触发页面1刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图示如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(579373)/* ["default"] */.A) + "",
        width: "371",
        height: "351"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "页面1："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\nconst BOOK_INITIAL_NAME = '100';\n\n@ObservedV2\nexport class Book {\n  @Trace public name: string = BOOK_INITIAL_NAME;\n\n  constructor(page: string) {\n    this.name = page;\n  }\n}\n\n@Entry\n@ComponentV2({ freezeWhenInactive: true })\nexport struct Page1 {\n  @Local bookTest: Book = new Book(`A Midsummer Night's Dream`);\n\n  @Monitor('bookTest.name')\n  onMessageChange(monitor: IMonitor) {\n    hilog.info(DOMAIN, 'testTag', `The book name change from ${monitor.value()?.before} to ${monitor.value()?.now}`);\n  }\n\n  build() {\n    Column() {\n      Text(`Book name is  ${this.bookTest.name}`).fontSize(25)\n      Button('changeBookName').fontSize(25)\n        .onClick(() => {\n          this.bookTest.name = 'The Old Man and the Sea';\n        })\n      Button('go to next page').fontSize(25)\n        .onClick(() => {\n          this.getUIContext().getRouter().pushUrl({ url: 'pages/freeze/template1/Page2' });\n          setTimeout(() => {\n            this.bookTest = new Book(`Jane Austen's Pride and Prejudice`);\n          }, 1000)\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "页面2："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct Page2 {\n  build() {\n    Column() {\n      Text('This is the page2').fontSize(25)\n      Button('Back')\n        .onClick(() => {\n          this.getUIContext().getRouter().back();\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上面的示例中："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.在页面1中点击changeBookName，bookTest变量的name属性改变，@Monitor中注册的方法onMessageChange会被调用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["2.在页面1中点击go to next page，跳转到页面2，然后延迟1s更新状态变量bookTest。在更新bookTest的时候，已经跳转到页面2，页面1处于inactive状态，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local",
        children: "@Local"
      }), "装饰的状态变量bookTest将不响应更新，其@Monitor不会调用，关联的节点不会刷新。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trace如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(237299)/* ["default"] */.A) + "",
        width: "1140",
        height: "419"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.点击Back，页面2被销毁，页面1的状态由inactive变为active。状态变量bookTest的更新被观察到，@Monitor中注册的方法onMessageChange被调用，对应的Text显示内容改变。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(12834)/* ["default"] */.A) + "",
        width: "1836",
        height: "632"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tabcontent",
      children: "TabContent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对Tabs中当前不可见的TabContent进行冻结，修改状态变量不会触发冻结组件的更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要注意的是：在首次渲染时，Tabs只会创建当前正在显示的TabContent，当切换全部的TabContent后，TabContent才会被全部创建。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图示如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(179032)/* ["default"] */.A) + "",
        width: "451",
        height: "271"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\n@Entry\n@ComponentV2\nstruct TabContentTest {\n  @Local message: number = 0;\n  @Local data: number[] = [0, 1];\n\n  build() {\n    Row() {\n      Column() {\n        Button('change message').onClick(() => {\n          this.message++;\n        })\n\n        Tabs() {\n          ForEach(this.data, (item: number) => {\n            TabContent() {\n              FreezeChild({ message: this.message, index: item })\n            }.tabBar(`tab${item}`)\n          }, (item: number) => item.toString())\n        }\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n\n@ComponentV2({ freezeWhenInactive: true })\nstruct FreezeChild {\n  @Param message: number = 0;\n  @Param index: number = 0;\n\n  @Monitor('message')\n  onMessageUpdated(mon: IMonitor) {\n    hilog.info(DOMAIN, 'testTag', `FreezeChild message callback func ${this.message}, index: ${this.index}`);\n  }\n\n  build() {\n    Text('message' + `${this.message}, index: ${this.index}`)\n      .fontSize(50)\n      .fontWeight(FontWeight.Bold)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上面的示例中："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.点击change message更改message的值，当前正在显示的TabContent组件中@Monitor注册的方法onMessageUpdated被触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.点击tab1切换到另外的TabContent，该TabContent的状态由inactive变为active，对应的@Monitor注册的方法onMessageUpdated被触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.再次点击change message更改message的值，仅当前显示的TabContent子组件中@Monitor注册的方法onMessageUpdated被触发。其他inactive的TabContent组件不会触发@Monitor。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(276126)/* ["default"] */.A) + "",
        width: "1469",
        height: "595"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "navigation",
      children: "Navigation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当NavDestination不可见时，会将其子自定义组件设置成非激活态，修改状态变量不会触发冻结组件的刷新。当返回该页面时，其子自定义组件重新恢复成激活态，触发@Monitor回调进行刷新。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要注意：本文档里说的“激活（active）/非激活（inactive）”是指组件冻结的激活/非激活状态，和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination",
        children: "NavDestination"
      }), "组件中的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination#onactive17",
        children: "onActive"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navdestination/ts-basic-components-navdestination#oninactive17",
        children: "onInactive"
      }), "不同。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\nconst PAGE_ONE_INDEX = 1;\nconst PAGE_TWO_INDEX = 2;\nconst PAGE_THREE_INDEX = 3;\n\n@Entry\n@ComponentV2\nstruct MyNavigationTestStack {\n  @Provider('pageInfo') pageInfo: NavPathStack = new NavPathStack();\n  @Local message: number = 0;\n\n  @Monitor('message')\n  info() {\n    hilog.info(DOMAIN, 'testTag', `freeze-test MyNavigation message callback ${this.message}`);\n  }\n\n  @Builder\n  PageMap(name: string) {\n    if (name === 'pageOne') {\n      PageOneStack({ message: this.message })\n    } else if (name === 'pageTwo') {\n      PageTwoStack({ message: this.message })\n    } else if (name === 'pageThree') {\n      PageThreeStack({ message: this.message })\n    }\n  }\n\n  build() {\n    Column() {\n      Button('change message')\n        .onClick(() => {\n          this.message++;\n        })\n      Navigation(this.pageInfo) {\n        Column() {\n          Button('Next Page', { stateEffect: true, type: ButtonType.Capsule })\n            .onClick(() => {\n              this.pageInfo.pushPath({ name: 'pageOne' }); // 将name指定的NavDestination页面信息入栈\n            })\n        }\n      }.title('NavIndex')\n      .navDestination(this.PageMap)\n      .mode(NavigationMode.Stack)\n    }\n  }\n}\n\n@ComponentV2\nstruct PageOneStack {\n  @Consumer('pageInfo') pageInfo: NavPathStack = new NavPathStack();\n  @Local index: number = PAGE_ONE_INDEX;\n  @Param message: number = 0;\n\n  build() {\n    NavDestination() {\n      Column() {\n        NavigationContentMsgStack({ message: this.message, index: this.index })\n        Text('cur stack size:' + `${this.pageInfo.size()}`)\n          .fontSize(30)\n        Button('Next Page', { stateEffect: true, type: ButtonType.Capsule })\n          .onClick(() => {\n            this.pageInfo.pushPathByName('pageTwo', null);\n          })\n        Button('Back Page', { stateEffect: true, type: ButtonType.Capsule })\n          .onClick(() => {\n            this.pageInfo.pop();\n          })\n      }.width('100%').height('100%')\n    }.title('pageOne')\n    .onBackPressed(() => {\n      this.pageInfo.pop();\n      return true;\n    })\n  }\n}\n\n@ComponentV2\nstruct PageTwoStack {\n  @Consumer('pageInfo') pageInfo: NavPathStack = new NavPathStack();\n  @Local index: number = PAGE_TWO_INDEX;\n  @Param message: number = 0;\n\n  build() {\n    NavDestination() {\n      Column() {\n        NavigationContentMsgStack({ message: this.message, index: this.index })\n        Text('cur stack size:' + `${this.pageInfo.size()}`)\n          .fontSize(30)\n        Button('Next Page', { stateEffect: true, type: ButtonType.Capsule })\n          .onClick(() => {\n            this.pageInfo.pushPathByName('pageThree', null);\n          })\n        Button('Back Page', { stateEffect: true, type: ButtonType.Capsule })\n          .onClick(() => {\n            this.pageInfo.pop();\n          })\n      }\n    }.title('pageTwo')\n    .onBackPressed(() => {\n      this.pageInfo.pop();\n      return true;\n    })\n  }\n}\n\n@ComponentV2\nstruct PageThreeStack {\n  @Consumer('pageInfo') pageInfo: NavPathStack = new NavPathStack();\n  @Local index: number = PAGE_THREE_INDEX;\n  @Param message: number = 0;\n\n  build() {\n    NavDestination() {\n      Column() {\n        NavigationContentMsgStack({ message: this.message, index: this.index })\n        Text('cur stack size:' + `${this.pageInfo.size()}`)\n          .fontSize(30)\n        Button('Next Page', { stateEffect: true, type: ButtonType.Capsule })\n          .height(40)\n          .onClick(() => {\n            this.pageInfo.pushPathByName('pageOne', null);\n          })\n        Button('Back Page', { stateEffect: true, type: ButtonType.Capsule })\n          .height(40)\n          .onClick(() => {\n            this.pageInfo.pop();\n          })\n      }\n    }.title('pageThree')\n    .onBackPressed(() => {\n      this.pageInfo.pop();\n      return true;\n    })\n  }\n}\n\n@ComponentV2({ freezeWhenInactive: true })\nstruct NavigationContentMsgStack {\n  @Param message: number = 0;\n  @Param index: number = 0;\n\n  @Monitor('message')\n  info() {\n    hilog.info(DOMAIN, 'testTag', `freeze-test NavigationContent message callback ${this.message}`);\n    hilog.info(DOMAIN, 'testTag', `freeze-test ---- called by content ${this.index}`);\n  }\n\n  build() {\n    Column() {\n      Text('msg:' + `${this.message}`)\n        .fontSize(30)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上面的示例中："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.点击change message更改message的值，当前正在显示的MyNavigationTestStack组件中@Monitor注册的方法info被触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.点击Next Page切换到PageOne，创建PageOneStack节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.再次点击change message更改message的值，仅PageOneStack中的NavigationContentMsgStack子组件中@Monitor注册的方法info被触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4.再次点击Next Page切换到PageTwo，创建PageTwoStack节点。PageOneStack节点状态由active变为inactive。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "5.再次点击change message更改message的值，仅PageTwoStack中的NavigationContentMsgStack子组件中@Monitor注册的方法info被触发。Navigation路由栈中非栈顶的NavDestination中的子自定义组件是inactive状态，@Monitor方法不会触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "6.再次点击Next Page切换到PageThree，创建PageThreeStack节点。PageTwoStack节点状态由active变为inactive。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "7.再次点击change message更改message的值，仅PageThreeStack中的NavigationContentMsgStack子组件中@Monitor注册的方法info被触发。Navigation路由栈中非栈顶的NavDestination中的子自定义组件是inactive状态，@Monitor方法不会触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "8.点击Back Page回到PageTwo，此时，PageTwoStack节点状态由inactive变为active，其NavigationContentMsgStack子组件中@Monitor注册的方法info被触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "9.再次点击Back Page回到PageOne，此时，PageOneStack节点状态由inactive变为active，其NavigationContentMsgStack子组件中@Monitor注册的方法info被触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "10.再次点击Back Page回到初始页，此时，无任何触发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(726854)/* ["default"] */.A) + "",
        width: "1468",
        height: "572"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "repeat",
      children: "Repeat"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(346414)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Repeat从API version 18开始支持自定义组件冻结。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对Repeat缓存池中的自定义组件进行冻结，避免不必要的组件刷新。建议提前阅读", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-new-rendering-control-repeat#%E8%8A%82%E7%82%B9%E6%9B%B4%E6%96%B0%E5%A4%8D%E7%94%A8%E8%83%BD%E5%8A%9B%E8%AF%B4%E6%98%8E",
        children: "Repeat节点更新/复用能力说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\n@Entry\n@ComponentV2\nstruct RepeatVirtualScrollFreeze {\n  @Local simpleList: Array<string> = [];\n  @Local bgColor: Color = Color.Pink;\n\n  aboutToAppear(): void {\n    for (let i = 0; i < 7; i++) {\n      this.simpleList.push(`item${i}`);\n    }\n  }\n\n  build() {\n    Column() {\n      Row() {\n        Button('Reduce length to 5')\n          .onClick(() => {\n            this.simpleList = this.simpleList.slice(0, 5);\n          })\n        Button('Change bgColor')\n          .onClick(() => {\n            this.bgColor = this.bgColor == Color.Pink ? Color.Blue : Color.Pink;\n          })\n      }\n\n      List() {\n        Repeat(this.simpleList)\n          .each((obj: RepeatItem<string>) => {\n          })\n          .key((item: string, index: number) => item)\n          .virtualScroll({ totalCount: this.simpleList.length })\n          .templateId(() => 'a')\n          .template('a', (ri) => {\n            ChildComponent({\n              message: ri.item,\n              bgColor: this.bgColor\n            })\n          }, { cachedCount: 2 })\n      }\n      .cachedCount(0)\n      .height(500)\n    }\n    .height('100%')\n  }\n}\n\n// 开启组件冻结\n@ComponentV2({ freezeWhenInactive: true })\nstruct ChildComponent {\n  @Param @Require message: string = '';\n  @Param @Require bgColor: Color = Color.Pink;\n\n  @Monitor('bgColor')\n  onBgColorChange(monitor: IMonitor) {\n    // bgColor改变时，缓存池中组件不刷新，不会打印日志\n    hilog.info(DOMAIN, 'testTag', `repeat---bgColor change from ${monitor.value()?.before} to ${monitor.value()?.now}`);\n  }\n\n  build() {\n    Text(`[a]: ${this.message}`)\n      .fontSize(50)\n      .backgroundColor(this.bgColor)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上面的示例中："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击Reduce length to 5后，被移除的两个组件会进入Repeat缓存池，然后点击Change bgColor更改bgColor的值触发节点刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开启组件冻结（freezeWhenInactive: true），只有剩余节点中@Monitor装饰的方法onBgColorChange被触发，如示例中屏上的5个节点会刷新并打印5条日志，缓存池中的节点则不会。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(543365)/* ["default"] */.A) + "",
        width: "1836",
        height: "632"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n// ...\n// 关闭组件冻结\n@ComponentV2({ freezeWhenInactive: false })\nstruct ChildComponent1 {\n  @Param @Require message: string = '';\n  @Param @Require bgColor: Color = Color.Pink;\n\n  @Monitor('bgColor')\n  onBgColorChange(monitor: IMonitor) {\n    // bgColor改变时，缓存池组件也会刷新，并打印日志\n    hilog.info(DOMAIN, 'testTag', `repeat---bgColor change from ${monitor.value()?.before} to ${monitor.value()?.now}`);\n  }\n\n  build() {\n    Text(`[a]: ${this.message}`)\n      .fontSize(50)\n      .backgroundColor(this.bgColor)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不开启组件冻结（freezeWhenInactive: false，当未指定freezeWhenInactive参数时默认不开启组件冻结），剩余节点和缓存池节点中@Monitor装饰的方法onBgColorChange都会被触发，即会有7个节点会刷新并打印7条日志。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(625690)/* ["default"] */.A) + "",
        width: "1836",
        height: "632"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "仅子组件开启组件冻结",
      children: "仅子组件开启组件冻结"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果开发者只想冻结某个子组件，可以选择只在子组件设置freezeWhenInactive为true。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/pages/freeze/template5/PageA.ets\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\n@ObservedV2\nclass Book {\n  @Trace public name: string = 'TS';\n\n  constructor(name: string) {\n    this.name = name;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct PageA {\n  pageInfo: NavPathStack = new NavPathStack();\n\n  build() {\n    Column() {\n      Navigation(this.pageInfo) {\n        Child()\n\n        Button('Go to next page').fontSize(30)\n          .onClick(() => {\n            this.pageInfo.pushPathByName('PageB', null);\n          })\n      }\n    }\n  }\n}\n\n@ComponentV2({ freezeWhenInactive: true })\nexport struct Child {\n  @Local bookTest: Book = new Book(`A Midsummer Night's Dream`);\n\n  @Monitor('bookTest.name')\n  onMessageChange(monitor: IMonitor) {\n    hilog.info(DOMAIN, 'testTag', `The book name change from ${monitor.value()?.before} to ${monitor.value()?.now}`);\n  }\n\n  textUpdate(): number {\n    hilog.info(DOMAIN, 'testTag', 'The text is update');\n    return 25;\n  }\n\n  build() {\n    Column() {\n      Text(`The book name is ${this.bookTest.name}`).fontSize(this.textUpdate())\n\n      Button('change BookName')\n        .onClick(() => {\n          setTimeout(() => {\n            this.bookTest = new Book(`Jane Austen's Pride and Prejudice`);\n          }, 3000);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// src/main/ets/pages/freeze/template5/PageB.ets\n@Builder\nfunction pageBBuilder() {\n  PageB()\n}\n\n@ComponentV2\nstruct PageB {\n  pathStack: NavPathStack = new NavPathStack();\n\n  build() {\n    NavDestination() {\n      Column() {\n        Text('This is the PageB')\n\n        Button('Back').fontSize(30)\n          .onClick(() => {\n            this.pathStack.pop();\n          })\n      }\n    }.onReady((context: NavDestinationContext) => {\n      this.pathStack = context.pathStack;\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Navigation时，需要添加配置系统路由表文件src/main/resources/base/profile/route_map.json，并替换pageSourceFile为PageB页面的路径，并且在module.json5中添加：\"routerMap\": \"$profile:route_map\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"routerMap\": [\n    {\n      \"name\": \"PageB\",\n      \"pageSourceFile\": \"src/main/ets/pages/freeze/template5/PageB.ets\",\n      \"buildFunction\": \"pageBBuilder\",\n      \"data\": {\n        \"description\" : \"This is the PageB\"\n      }\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上面的示例中："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PageA的子组件Child，设置freezeWhenInactive: true, 开启了组件冻结功能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击change BookName，然后3s内点击Go to next page。在更新bookTest的时候，已经跳转到PageB，PageA的组件处于inactive状态，又因为Child组件开启了组件冻结，状态变量@Local bookTest将不响应更新，其@Monitor装饰的回调方法不会被调用，状态变量关联的组件不会刷新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击Back回到前一个页面，调用@Monitor装饰的回调方法，状态变量关联的组件刷新。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "混用场景",
      children: "混用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当支持组件冻结的场景彼此之间组合使用时，对于不同的API版本，冻结行为会有不同。给父组件设置组件冻结标志，在API version 17及以下，当父组件解冻时，会解冻其子组件所有的节点；从API version 18开始，父组件解冻时，只会解冻子组件的屏上节点，详细说明见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-freeze/arkts-custom-components-freeze#%E7%BB%84%E4%BB%B6%E6%B7%B7%E7%94%A8",
        children: "@Component的自定义组件冻结的混用场景"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Navigation和TabContent的混用"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\nconst TAB_STATE_INITIAL_VALUE = 47;\n\n@ComponentV2\nstruct ChildOfParamComponent {\n  @Require @Param childVal: number;\n\n  @Monitor('childVal')\n  onChange(m: IMonitor) {\n    hilog.info(DOMAIN, 'testTag',\n      `Appmonitor ChildOfParamComponent: changed ${m.dirty[0]}: ${m.value()?.before} -> ${m.value()?.now}`);\n  }\n\n  build() {\n    Column() {\n      Text(`Child Param： ${this.childVal}`)\n    }\n  }\n}\n\n@ComponentV2\nstruct ParamComponent {\n  @Require @Param val: number;\n\n  @Monitor('val')\n  onChange(m: IMonitor) {\n    hilog.info(DOMAIN, 'testTag',\n      `Appmonitor ParamComponent: changed ${m.dirty[0]}: ${m.value()?.before} -> ${m.value()?.now}`);\n  }\n\n  build() {\n    Column() {\n      Text(`val： ${this.val}`)\n      ChildOfParamComponent({ childVal: this.val })\n    }\n  }\n}\n\n@ComponentV2\nstruct DelayComponent {\n  @Require @Param delayVal1: number;\n\n  @Monitor('delayVal1')\n  onChange(m: IMonitor) {\n    hilog.info(DOMAIN, 'testTag',\n      `Appmonitor DelayComponent: changed ${m.dirty[0]}: ${m.value()?.before} -> ${m.value()?.now}`);\n  }\n\n  build() {\n    Column() {\n      Text(`Delay Param： ${this.delayVal1}`)\n    }\n  }\n}\n\n@ComponentV2({ freezeWhenInactive: true })\nstruct TabsComponent {\n  private controller: TabsController = new TabsController();\n  @Local tabState: number = TAB_STATE_INITIAL_VALUE;\n\n  @Monitor('tabState')\n  onChange(m: IMonitor) {\n    hilog.info(DOMAIN, 'testTag',\n      `Appmonitor TabsComponent: changed ${m.dirty[0]}: ${m.value()?.before} -> ${m.value()?.now}`);\n  }\n\n  build() {\n    Column({ space: 10 }) {\n      Button(`Incr state ${this.tabState}`)\n        .fontSize(25)\n        .onClick(() => {\n          hilog.info(DOMAIN, 'testTag', 'Button increment state value');\n          this.tabState = this.tabState + 1;\n        })\n      Tabs({ barPosition: BarPosition.Start, index: 0, controller: this.controller }) {\n        TabContent() {\n          ParamComponent({ val: this.tabState })\n        }.tabBar('Update')\n        TabContent() {\n          DelayComponent({ delayVal1: this.tabState })\n        }.tabBar('DelayUpdate')\n      }\n      .vertical(false)\n      .scrollable(true)\n      .barMode(BarMode.Fixed)\n      .barWidth(400)\n      .barHeight(150)\n      .animationDuration(400)\n      .width('100%')\n      .height(200)\n      .backgroundColor(0xF5F5F5)\n    }\n  }\n}\n\n@Entry\n@Component\nstruct MyNavigationTestStack1 {\n  @Provide('pageInfo') pageInfo: NavPathStack = new NavPathStack();\n\n  @Builder\n  PageMap(name: string) {\n    if (name === 'pageOne') {\n      PageOneStack1()\n    } else if (name === 'pageTwo') {\n      PageTwoStack2()\n    }\n  }\n\n  build() {\n    Column() {\n      Navigation(this.pageInfo) {\n        Column() {\n          Button('Next Page', { stateEffect: true, type: ButtonType.Capsule })\n            .width('80%')\n            .height(40)\n            .margin(20)\n            .onClick(() => {\n              this.pageInfo.pushPath({ name: 'pageOne' }); // 将name指定的NavDestination页面信息入栈\n            })\n        }\n      }.title('NavIndex')\n      .navDestination(this.PageMap)\n      .mode(NavigationMode.Stack)\n    }\n  }\n}\n\n@Component\nstruct PageOneStack1 {\n  @Consume('pageInfo') pageInfo: NavPathStack;\n\n  build() {\n    NavDestination() {\n      Column() {\n        TabsComponent()\n\n        Button('Next Page', { stateEffect: true, type: ButtonType.Capsule })\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pushPathByName('pageTwo', null);\n          })\n      }.width('100%').height('100%')\n    }.title('pageOne')\n    .onBackPressed(() => {\n      this.pageInfo.pop();\n      return true;\n    })\n  }\n}\n\n@Component\nstruct PageTwoStack2 {\n  @Consume('pageInfo') pageInfo: NavPathStack;\n\n  build() {\n    NavDestination() {\n      Column() {\n        Button('Back Page', { stateEffect: true, type: ButtonType.Capsule })\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pop();\n          })\n      }.width('100%').height('100%')\n    }.title('pageTwo')\n    .onBackPressed(() => {\n      this.pageInfo.pop();\n      return true;\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在API version 17及以下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击Next page进入下一个页面并返回，会解冻Tabcontent所有的标签。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在API version 18及以上："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击Next page进入下一个页面并返回，只会解冻对应标签的节点。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制条件",
      children: "限制条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["API version 21及之前版本，如下面示例所示，FreezeBuildNode中使用了自定义节点", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/ui-interface-arkui/js-apis-arkui-buildernode/js-apis-arkui-buildernode",
        children: "BuilderNode"
      }), "。BuilderNode可以通过命令式动态挂载组件，而组件冻结又是强依赖父子关系来通知是否开启组件冻结。如果父组件使用组件冻结，且组件树的中间层级上又启用了BuilderNode，则BuilderNode的子组件将无法被冻结。从API version 22开始，可以", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-nodes/arkts-user-defined-arktsnode-buildernode#%E8%AE%BE%E7%BD%AEbuildernode%E7%BB%A7%E6%89%BF%E5%86%BB%E7%BB%93%E8%83%BD%E5%8A%9B",
        children: "设置BuilderNode继承冻结能力"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { BuilderNode, FrameNode, NodeController, UIContext } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\n// 定义一个Params类，用于传递参数\n@ObservedV2\nclass Params {\n  // 单例模式，确保只有一个Params实例\n  public static singleton_: Params;\n\n  // 获取Params实例的方法\n  public static instance() {\n    if (!Params.singleton_) {\n      Params.singleton_ = new Params(0);\n    }\n    return Params.singleton_;\n  }\n\n  // 使用@Trace装饰器装饰message属性，以便跟踪其变化\n  @Trace public message: string = 'Hello';\n  public index: number = 0;\n\n  constructor(index: number) {\n    this.index = index;\n  }\n}\n\n// 定义一个BuildNodeChild组件，它包含一个storage属性和一个index属性\n@ComponentV2\nstruct BuildNodeChild {\n  // 使用Params实例作为storage属性\n  storage: Params = Params.instance();\n  @Param index: number = 0;\n\n  // 使用@Monitor装饰器监听storage.message的变化\n  @Monitor('storage.message')\n  onMessageChange(monitor: IMonitor) {\n    hilog.info(DOMAIN, 'onMessageChange',\n      `FreezeBuildNode BuildNodeChild message callback func ${this.storage.message}, index:${this.index}`);\n  }\n\n  build() {\n    Text(`buildNode Child message: ${this.storage.message}`).fontSize(30)\n  }\n}\n\n// 定义一个buildText函数，它接收一个Params参数并构建一个Column组件\n@Builder\nfunction buildText(params: Params) {\n  Column() {\n    BuildNodeChild({ index: params.index })\n  }\n}\n\nclass TextNodeController extends NodeController {\n  private textNode: BuilderNode<[Params]> | null = null;\n  private index: number = 0;\n\n  // 构造函数接收一个index参数\n  constructor(index: number) {\n    super();\n    this.index = index;\n  }\n\n  // 创建并返回一个FrameNode\n  makeNode(context: UIContext): FrameNode | null {\n    this.textNode = new BuilderNode(context);\n    this.textNode.build(wrapBuilder<[Params]>(buildText), new Params(this.index));\n    return this.textNode.getFrameNode();\n  }\n}\n\n// 定义一个Index组件，它包含一个message属性和一个data数组\n@Entry\n@ComponentV2\nstruct Index {\n  // 使用Params实例作为storage属性\n  storage: Params = Params.instance();\n  private data: number[] = [0, 1];\n\n  build() {\n    Row() {\n      Column() {\n        Button('change').fontSize(30)\n          .onClick(() => {\n            this.storage.message += 'a';\n          })\n\n        Tabs() {\n          // 使用Repeat重复渲染TabContent组件\n          Repeat<number>(this.data)\n            .each((obj: RepeatItem<number>) => {\n              TabContent() {\n                FreezeBuildNode({ index: obj.item })\n                  .margin({ top: 20 })\n              }.tabBar(`tab${obj.item}`)\n            })\n            .key((item: number) => item.toString())\n        }\n      }\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n\n// 定义一个FreezeBuildNode组件，它包含一个message属性和一个index属性\n@ComponentV2({ freezeWhenInactive: true })\nstruct FreezeBuildNode {\n  // 使用Params实例作为storage属性\n  storage: Params = Params.instance();\n  @Param index: number = 0;\n\n  // 使用@Monitor装饰器监听storage.message的变化\n  @Monitor('storage.message')\n  onMessageChange(monitor: IMonitor) {\n    hilog.info(DOMAIN, 'onMessageChange',\n      `FreezeBuildNode message callback func ${this.storage.message}, index: ${this.index}`);\n  }\n\n  build() {\n    NodeContainer(new TextNodeController(this.index))\n      .width('100%')\n      .height('100%')\n      .backgroundColor('#FFF0F0F0')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击change，改变message的值，当前正在显示的TabContent组件中@Monitor注册的方法onMessageChange被触发。未显示的TabContent中的BuilderNode节点下组件的@Monitor方法onMessageChange也被触发，并没有被冻结。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(997073)/* ["default"] */.A) + "",
        width: "1658",
        height: "593"
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
346414(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
726854(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957562-25d05378a483d374f71bbaa425a51ace.gif");

},
237299(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437615-bda8cef11ab98967d59b6ea5d05df772.png");

},
179032(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477561-65e3d5ade6f97ed9f176754966e47912.png");

},
625690(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797922-51a2bd80acd233a3256100c91bce967d.gif");

},
276126(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797912-083ebdcb593cd36100a78c6a6c57ffa3.gif");

},
543365(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477571-6e8170a55d165097c31ad6538b0e92b6.gif");

},
997073(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797920-ec6f620da8a3c87451ef214a41330939.gif");

},
12834(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957570-b34a6ac4f5bd53469ef20d03964b0a5f.gif");

},
579373(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957560-c9a79ef7931bd183f8b6518fda171470.png");

},
154424(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
808190(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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