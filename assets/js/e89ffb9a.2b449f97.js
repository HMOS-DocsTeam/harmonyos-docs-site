"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["720548"], {
117434(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_1_arkts_v_1_component_state_management_arkts_watch_arkts_watch_md_e89_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-state-management-v-1-arkts-v-1-component-state-management-arkts-watch-arkts-watch-md-e89.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_1_arkts_v_1_component_state_management_arkts_watch_arkts_watch_md_e89_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-watch/arkts-watch","title":"@Watch装饰器：状态变量更改通知","description":"@Watch应用于对状态变量的监听。如果开发者需要关注某个状态变量的值是否改变，可以使用@Watch为状态变量设置回调函数。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-watch/arkts-watch.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-watch","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-watch/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-watch/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"@Watch装饰器：状态变量更改通知","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-watch","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"@Observed装饰器和@ObjectLink装饰器：嵌套类对象属性变化","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink/"},"next":{"title":"@Track装饰器：class对象属性级更新","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-data-object-state-management/arkts-track/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-watch/arkts-watch.md


const frontMatter = {
	title: '@Watch装饰器：状态变量更改通知',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-watch',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '@Watch装饰器：状态变量更改通知';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "装饰器说明",
  "id": "装饰器说明",
  "level": 2
}, {
  "value": "语法说明",
  "id": "语法说明",
  "level": 2
}, {
  "value": "观察变化和行为表现",
  "id": "观察变化和行为表现",
  "level": 2
}, {
  "value": "限制条件",
  "id": "限制条件",
  "level": 2
}, {
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "@Watch和自定义组件更新",
  "id": "watch和自定义组件更新",
  "level": 3
}, {
  "value": "@Watch与@Link组合使用",
  "id": "watch与link组合使用",
  "level": 3
}, {
  "value": "@Watch的触发时机",
  "id": "watch的触发时机",
  "level": 3
}, {
  "value": "使用changedPropertyName进行不同的逻辑处理",
  "id": "使用changedpropertyname进行不同的逻辑处理",
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
        id: "watch装饰器状态变量更改通知",
        children: "@Watch装饰器：状态变量更改通知"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Watch应用于对状态变量的监听。如果开发者需要关注某个状态变量的值是否改变，可以使用@Watch为状态变量设置回调函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Watch提供了状态变量的监听能力，@Watch仅能监听到可以观察到的变化。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在阅读本文档前，建议开发者对状态管理基本观察能力有基本的了解。建议提前阅读：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
        children: "@State"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(93075)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 9开始，该装饰器支持在ArkTS卡片中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11开始，该装饰器支持在元服务中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Watch用于监听状态变量的变化，当状态变量变化时，@Watch的回调方法将被调用。@Watch在ArkUI框架内部判断数值有无更新使用的是严格相等（===），遵循严格相等规范。当严格相等判断的结果是false（即不相等）的情况下，就会触发@Watch的回调。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "装饰器说明",
      children: "装饰器说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "@Watch补充变量装饰器"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "装饰器参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必填。常量字符串，字符串需要有引号。是(string) => void自定义成员函数的方法的引用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "可装饰的自定义组件变量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可监听所有装饰器装饰的状态变量。不允许监听常规变量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "装饰器的顺序"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["装饰器顺序不影响实际功能，开发者可以根据自己的需要决定装饰器顺序的先后。建议", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
              children: "@State"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop",
              children: "@Prop"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link",
              children: "@Link"
            }), "等装饰器在@Watch装饰器之前，以保持整体风格的一致。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@Watch触发时机"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用@Watch来监听状态变量变化时，回调触发时间是变量真正变化、被赋值的时间。详细示例请参考使用场景中的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#watch%E7%9A%84%E8%A7%A6%E5%8F%91%E6%97%B6%E6%9C%BA",
              children: "@Watch的触发时机"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "语法说明",
      children: "语法说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(changedPropertyName? : string) => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "该函数是自定义组件的成员函数，changedPropertyName是被watch的属性名。  在多个状态变量绑定同一个@Watch的回调方法的时候，可以通过changedPropertyName进行不同的逻辑处理  将属性名作为字符串输入参数，不返回任何内容。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "观察变化和行为表现",
      children: "观察变化和行为表现"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当观察到状态变量的变化（包括双向绑定的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage",
          children: "AppStorage"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
          children: "LocalStorage"
        }), "中对应的key发生的变化）的时候，对应的@Watch的回调方法将被触发；"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Watch方法在自定义组件的属性变更之后同步执行；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果在@Watch的方法里改变了其他的状态变量，也会引起状态变更和@Watch的执行；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在第一次初始化的时候，@Watch装饰的方法不会被调用，即认为初始化不是状态变量的改变。只有在后续状态改变时，才会调用@Watch回调方法。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制条件",
      children: "限制条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "建议开发者避免无限循环。循环可能是因为在@Watch的回调方法里直接或者间接地修改了同一个状态变量引起的。为了避免循环的产生，建议不要在@Watch的回调方法里修改当前装饰的状态变量；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者应关注性能，属性值更新函数会延迟组件的重新渲染（具体请见上面的行为表现），因此，回调函数应仅执行快速运算；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不建议在@Watch函数中调用async await，因为@Watch设计的用途是为了快速的计算，异步行为可能会导致重新渲染速度的性能问题。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Watch参数为必选，且参数类型必须是string，否则编译期会报错。不建议开发者传入undefined，传入后编译不会报错，相当于传入“undefined”。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 错误写法，编译报错\n@State @Watch() num: number = 10;\n@State @Watch(change) num: number = 10;\n\n// 正确写法\n@State @Watch('change') num: number = 10;\nchange() {\n  console.info(`xxx`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Watch内的参数必须是声明的方法名，否则编译期会报错。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 错误写法，没有对应名称的函数，编译报错\n@State @Watch('change') num: number = 10;\nonChange() {\n  console.info(`xxx`);\n}\n\n// 正确写法\n@State @Watch('change') num: number = 10;\nchange() {\n  console.info(`xxx`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "常规变量不能被@Watch装饰，否则编译期会报错。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 错误写法\n@Watch('change') num: number = 10;\nchange() {\n  console.info(`xxx`);\n}\n\n// 正确写法\n@State @Watch('change') num: number = 10;\nchange() {\n  console.info(`xxx`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "watch和自定义组件更新",
      children: "@Watch和自定义组件更新"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例展示组件更新和@Watch的处理步骤。count在CountModifier中由@State装饰，在TotalView中由@Prop装饰。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct TotalView {\n  @Prop @Watch('onCountUpdated') count: number = 0;\n  @State total: number = 0;\n\n  // @Watch 回调\n  onCountUpdated(propName: string): void {\n    this.total += this.count;\n  }\n\n  build() {\n    Text(`Total: ${this.total}`)\n  }\n}\n\n@Entry\n@Component\nstruct CountModifier {\n  @State count: number = 0;\n\n  build() {\n    Column() {\n      Button('add to basket')\n        .onClick(() => {\n          this.count++;\n        })\n      TotalView({ count: this.count })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "处理步骤："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CountModifier自定义组件的Button.onClick点击事件自增count。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "由于@State count变量更改，子组件TotalView中的@Prop被更新，其@Watch('onCountUpdated')方法被调用，更新了子组件TotalView 中的total变量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "子组件TotalView中的Text重新渲染。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "watch与link组合使用",
      children: "@Watch与@Link组合使用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例说明了如何在子组件中观察@Link变量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class PurchaseItem {\n  public static nextId: number = 0;\n  public id: number;\n  public price: number;\n\n  constructor(price: number) {\n    this.id = PurchaseItem.nextId++;\n    this.price = price;\n  }\n}\n\n@Component\nstruct BasketViewer {\n  @Link @Watch('onBasketUpdated') shopBasket: PurchaseItem[];\n  @State totalPurchase: number = 0;\n\n  updateTotal(): number {\n    let total = this.shopBasket.reduce((sum, i) => sum + i.price, 0);\n    // 超过100欧元可享受折扣\n    if (total >= 100) {\n      total = 0.9 * total;\n    }\n    return total;\n  }\n\n  // @Watch 回调\n  onBasketUpdated(propName: string): void {\n    this.totalPurchase = this.updateTotal();\n  }\n\n  build() {\n    Column() {\n      ForEach(this.shopBasket,\n        (item: PurchaseItem) => {\n          Text(`Price: ${item.price.toFixed(2)} €`)\n        },\n        (item: PurchaseItem) => item.id.toString()\n      )\n      Text(`Total: ${this.totalPurchase.toFixed(2)} €`)\n    }\n  }\n}\n\n@Entry\n@Component\nstruct BasketModifier {\n  @State shopBasket: PurchaseItem[] = [];\n\n  build() {\n    Column() {\n      Button('Add to basket')\n        .onClick(() => {\n          this.shopBasket.push(new PurchaseItem(Math.round(100 * Math.random())));\n        })\n      BasketViewer({ shopBasket: $shopBasket })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "处理步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BasketModifier组件的Button.onClick向BasketModifier shopBasket中添加条目；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Link装饰的BasketViewer shopBasket值发生变化；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "状态管理框架调用@Watch函数BasketViewer onBasketUpdated 更新BasketViewer TotalPurchase的值；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Link shopBasket的改变，新增了数组项，ForEach组件会执行item Builder，渲染构建新的Item项；@State totalPurchase改变，对应的Text组件也重新渲染；重新渲染是异步发生的。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "效果图如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(873719)/* ["default"] */.A) + "",
        width: "348",
        height: "324"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "watch的触发时机",
      children: "@Watch的触发时机"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了展示@Watch回调触发时间是根据状态变量真正变化的时间，本示例在子组件中同时使用@Link和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
        children: "@ObjectLink"
      }), "装饰器，分别观察不同的状态对象。通过在父组件中更改状态变量并观察@Watch回调的先后顺序，来表明@Watch触发的时机与赋值、同步的关系。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport { common } from '@kit.AbilityKit';\n\n@Observed\nclass Task {\n  public isFinished: boolean = false;\n\n  constructor(isFinished: boolean) {\n    this.isFinished = isFinished;\n  }\n}\n\nconst DOMAIN = 0x0000;\n\n@Entry\n@Component\nstruct ParentComponent {\n  @State @Watch('onTaskAChanged') taskA: Task = new Task(false);\n  @State @Watch('onTaskBChanged') taskB: Task = new Task(false);\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  // 请将$r('app.string.watch_text5')替换为实际资源文件，在本示例中该资源文件的value值为\"父组件任务A状态:\"\n  @State type1: string = this.context!.resourceManager.getStringSync($r('app.string.watch_text5').id);\n  // 请将$r('app.string.watch_text6')替换为实际资源文件，在本示例中该资源文件的value值为\"父组件任务B状态:\"\n  @State type2: string = this.context!.resourceManager.getStringSync($r('app.string.watch_text6').id);\n\n  onTaskAChanged(changedPropertyName: string): void {\n    // 请将$r('app.string.watch_text12')替换为实际资源文件，在本示例中该资源文件的value值为\"观测到父组件任务属性变化:\"\n    hilog.info(DOMAIN, this.getUIContext()\n      .getHostContext()!.resourceManager.getStringSync($r('app.string.watch_text12').id), changedPropertyName);\n  }\n\n  onTaskBChanged(changedPropertyName: string): void {\n    // 请将$r('app.string.watch_text12')替换为实际资源文件，在本示例中该资源文件的value值为\"观测到父组件任务属性变化:\"\n    hilog.info(DOMAIN, this.getUIContext()\n      .getHostContext()!.resourceManager.getStringSync($r('app.string.watch_text12').id), changedPropertyName);\n  }\n\n  build() {\n    Column() {\n      // 请将$r('app.string.watch_text7')替换为实际资源文件，在本示例中该资源文件的value值为\"已完成\"\n      // 请将$r('app.string.watch_text8')替换为实际资源文件，在本示例中该资源文件的value值为\"未完成\"\n      Text(`${this.type1} ${this.taskA.isFinished ? this.getUIContext()\n        .getHostContext()!.resourceManager.getStringSync($r('app.string.watch_text7').id) :\n        this.getUIContext()\n          .getHostContext()!.resourceManager.getStringSync($r('app.string.watch_text8').id)}`)\n      Text(`${this.type2} ${this.taskB.isFinished ? this.getUIContext()\n        .getHostContext()!.resourceManager.getStringSync($r('app.string.watch_text7').id) :\n        this.getUIContext()\n          .getHostContext()!.resourceManager.getStringSync($r('app.string.watch_text8').id)}`)\n      ChildComponent({ taskA: this.taskA, taskB: this.taskB })\n      // 请将$r('app.string.watch_text9')替换为实际资源文件，在本示例中该资源文件的value值为\"切换任务状态\"\n      Button(this.getUIContext()\n        .getHostContext()!.resourceManager.getStringSync($r('app.string.watch_text9').id))\n        .onClick(() => {\n          this.taskB = new Task(!this.taskB.isFinished);\n          this.taskA = new Task(!this.taskA.isFinished);\n        })\n    }\n  }\n}\n\n@Component\nstruct ChildComponent {\n  @ObjectLink @Watch('onObjectLinkTaskChanged') taskB: Task;\n  @Link @Watch('onLinkTaskChanged') taskA: Task;\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  // 请将$r('app.string.watch_text10')替换为实际资源文件，在本示例中该资源文件的value值为\"子组件任务A状态:\"\n  @State type1: string = this.context!.resourceManager.getStringSync($r('app.string.watch_text10').id);\n  // 请将$r('app.string.watch_text11')替换为实际资源文件，在本示例中该资源文件的value值为\"子组件任务B状态:\"\n  @State type2: string = this.context!.resourceManager.getStringSync($r('app.string.watch_text11').id);\n\n  onObjectLinkTaskChanged(changedPropertyName: string): void {\n    // 请将$r('app.string.watch_text13')替换为实际资源文件，在本示例中该资源文件的value值为\"观测到子组件@ObjectLink关联的任务属性变化:\"\n    hilog.info(DOMAIN, this.getUIContext()\n      .getHostContext()!.resourceManager.getStringSync($r('app.string.watch_text13').id), changedPropertyName);\n  }\n\n  onLinkTaskChanged(changedPropertyName: string): void {\n    // 请将$r('app.string.watch_text14')替换为实际资源文件，在本示例中该资源文件的value值为\"观测到子组件@Link关联的任务属性变化:\"\n    hilog.info(DOMAIN, this.getUIContext()\n      .getHostContext()!.resourceManager.getStringSync($r('app.string.watch_text14').id), changedPropertyName);\n  }\n\n  build() {\n    Column() {\n      // 请将$r('app.string.watch_text7')替换为实际资源文件，在本示例中该资源文件的value值为\"已完成\"\n      // 请将$r('app.string.watch_text8')替换为实际资源文件，在本示例中该资源文件的value值为\"未完成\"\n      Text(`${this.type1} ${this.taskA.isFinished ? this.getUIContext()\n        .getHostContext()!.resourceManager.getStringSync($r('app.string.watch_text7').id) :\n        this.getUIContext()\n          .getHostContext()!.resourceManager.getStringSync($r('app.string.watch_text8').id)}`)\n      Text(`${this.type2} ${this.taskB.isFinished ? this.getUIContext()\n        .getHostContext()!.resourceManager.getStringSync($r('app.string.watch_text7').id) :\n        this.getUIContext()\n          .getHostContext()!.resourceManager.getStringSync($r('app.string.watch_text8').id)}`)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "处理步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当点击按钮切换任务状态时，父组件首先更新了被@ObjectLink关联的taskB，然后更新了被@Link关联的taskA。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "观察到日志依次显示："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "观测到父组件任务属性变化: taskB\n观测到父组件任务属性变化: taskA\n观测到子组件@Link关联的任务属性变化: taskA\n观测到子组件@ObjectLink关联的任务属性变化: taskB\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过日志可以看到，父组件的回调顺序和修改顺序一致，而子组件中@Link和@ObjectLink的回调触发顺序与父组件中变量更新的顺序不同。这是因为父组件的变量更新是即时的，但子组件中@Link和@ObjectLink获取更新数据的时机不同。@Link的状态更新是同步的，状态变化会立刻触发@Watch回调。而@ObjectLink的更新依赖于父组件的同步，当父组件刷新并将更新后的变量传递给子组件时，@Watch回调才会触发，因此触发顺序略晚于@Link。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "这是符合预期的行为，展示了@Watch回调的触发时机是根据状态变量真正变化的时间。因为@Link直接同步，而@ObjectLink需要等父组件更新子组件变量。类似地，@Prop也可能表现出与@ObjectLink类似的行为，其回调触发时间也会略晚。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用changedpropertyname进行不同的逻辑处理",
      children: "使用changedPropertyName进行不同的逻辑处理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例说明了如何在@Watch函数中使用changedPropertyName进行不同的逻辑处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct UsePropertyName {\n  @State @Watch('countUpdated') apple: number = 0;\n  @State @Watch('countUpdated') cabbage: number = 0;\n  @State fruit: number = 0;\n\n  // @Watch 回调\n  countUpdated(propName: string): void {\n    if (propName === 'apple') {\n      this.fruit = this.apple;\n    }\n  }\n\n  build() {\n    Column() {\n      Text(`Number of apples: ${this.apple.toString()}`).fontSize(30)\n      Text(`Number of cabbages: ${this.cabbage.toString()}`).fontSize(30)\n      Text(`Total number of fruits: ${this.fruit.toString()}`).fontSize(30)\n      Button('Add apples')\n        .onClick(() => {\n          this.apple++;\n        })\n      Button('Add cabbages')\n        .onClick(() => {\n          this.cabbage++;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "处理步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击Button('Add apples')时，apple的值发生变化。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "状态管理框架调用@Watch函数countUpdated，发生变化的状态变量名为apple，满足if逻辑条件，fruit的值被改变。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "绑定了apple，fruit状态变量的Text重新渲染。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击Button('Add cabbages')时，cabbage的值发生变化。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "状态管理框架调用@Watch函数countUpdated，发生变化的状态变量名为cabbage，不满足if逻辑条件，fruit的值不发生变化。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "绑定了cabbage状态变量的Text重新渲染。"
      }), "\n"]
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
873719(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797960-ca5a5436cf573c7839f514928f315c2f.gif");

},
93075(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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