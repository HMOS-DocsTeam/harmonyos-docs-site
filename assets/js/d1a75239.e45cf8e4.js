"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["208044"], {
848159(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_faq_arkts_state_management_faq_inner_class_arkts_state_management_faq_inner_class_md_d1a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-state-management-faq-arkts-state-management-faq-inner-class-arkts-state-management-faq-inner-class-md-d1a.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_faq_arkts_state_management_faq_inner_class_arkts_state_management_faq_inner_class_md_d1a_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/arkts-state-management-faq-inner-class/arkts-state-management-faq-inner-class","title":"数据对象状态管理常见问题","description":"大型应用中需要封装大量的数据对象，数据对象内部状态变量的使用极大地影响开发者的开发效率，本文将介绍数据对象状态管理的常见问题及解决方案。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/arkts-state-management-faq-inner-class/arkts-state-management-faq-inner-class.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/arkts-state-management-faq-inner-class","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/arkts-state-management-faq-inner-class/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/arkts-state-management-faq-inner-class/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"数据对象状态管理常见问题","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state-management-faq-inner-class","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"组件内状态管理常见问题","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/arkts-state-management-faq-inner-component/"},"next":{"title":"应用内状态管理和其他常见问题","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/arkts-state-management-faq-application-and-others/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/arkts-state-management-faq-inner-class/arkts-state-management-faq-inner-class.md


const frontMatter = {
	title: '数据对象状态管理常见问题',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state-management-faq-inner-class',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '数据对象状态管理常见问题';

const assets = {

};



const toc = [{
  "value": "类的构造函数中通过捕获this修改变量无法观察",
  "id": "类的构造函数中通过捕获this修改变量无法观察",
  "level": 2
}, {
  "value": "使用箭头函数改变状态变量未生效",
  "id": "使用箭头函数改变状态变量未生效",
  "level": 2
}, {
  "value": "冗余刷新",
  "id": "冗余刷新",
  "level": 2
}, {
  "value": "使用简单属性数组导致冗余刷新",
  "id": "使用简单属性数组导致冗余刷新",
  "level": 3
}, {
  "value": "使用多属性类对象导致冗余刷新",
  "id": "使用多属性类对象导致冗余刷新",
  "level": 3
}, {
  "value": "数据重置导致UI不刷新",
  "id": "数据重置导致ui不刷新",
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
        id: "数据对象状态管理常见问题",
        children: "数据对象状态管理常见问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "大型应用中需要封装大量的数据对象，数据对象内部状态变量的使用极大地影响开发者的开发效率，本文将介绍数据对象状态管理的常见问题及解决方案。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在状态管理中，类会被一层“代理”包装。当修改类的成员变量时，代理会拦截该操作并完成两项任务："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同步更新数据源：确保原始数据被正确修改；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "触发UI刷新：通知所有依赖此变量的组件重新渲染。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-gettarget",
        children: "getTarget接口"
      }), "获取原始对象，并使用下面的方法可以判断对象是否被状态管理包装。当表达式结果为false时，表示value是状态管理包装过的对象；否则，表示value不是状态管理包装过的对象。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "UIUtils.getTarget(value) === value\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "类的构造函数中通过捕获this修改变量无法观察",
      children: "类的构造函数中通过捕获this修改变量无法观察"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当在构造函数中初始化修改success的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/learning-arkts/introduction-to-arkts#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E5%8F%88%E5%90%8Dlambda%E5%87%BD%E6%95%B0",
        children: "箭头函数"
      }), "时，TestModel实例尚未被代理封装，this指向TestModel实例本身。因此，后续触发query事件时，状态管理无法观测到变化。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当开发者将修改success的箭头函数放在query中时，已完成TestModel对象初始化和代理封装。通过this.viewModel.query()调用query时，query函数中的this指向viewModel代理对象，对代理对象成员属性isSuccess的更改能够被观测到，因此触发query事件可以被状态管理观测到变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nstruct Index {\n  @State viewModel: TestModel = new TestModel();\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.viewModel.isSuccess ? 'success' : 'failed')\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            this.viewModel.query();\n          })\n      }.width('100%')\n    }.height('100%')\n  }\n}\n\nexport class TestModel {\n  public isSuccess: boolean = false;\n  public model: Model\n\n  constructor() {\n    this.model = new Model(() => {\n      this.isSuccess = true;\n      hilog.info(0xFF00, 'testTag', '%{public}s', `this.isSuccess: ${this.isSuccess}`);\n    })\n  }\n\n  query() {\n    this.model.query();\n  }\n}\n\nexport class Model {\n  public callback: () => void\n\n  constructor(cb: () => void) {\n    this.callback = cb;\n  }\n\n  query() {\n    this.callback();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述示例代码中，状态变量的修改在构造函数内。界面刚开始时显示“failed”，点击后日志打印“this.isSuccess: true”，表明修改成功，但界面仍然显示“failed”，这说明UI未刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  @State viewModel: TestModel = new TestModel();\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.viewModel.isSuccess ? 'success' : 'failed')\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            this.viewModel.query();\n          })\n      }.width('100%')\n    }.height('100%')\n  }\n}\n\nexport class TestModel {\n  public isSuccess: boolean = false;\n  public model: Model = new Model(() => {\n  })\n\n  query() {\n    this.model.callback = () => {\n      this.isSuccess = true;\n    }\n    this.model.query();\n  }\n}\n\nexport class Model {\n  public callback: () => void\n\n  constructor(cb: () => void) {\n    this.callback = cb;\n  }\n\n  query() {\n    this.callback();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上文示例代码将状态变量的修改放在类的普通方法中，界面开始时显示“failed”，点击后显示“success”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用箭头函数改变状态变量未生效",
      children: "使用箭头函数改变状态变量未生效"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在箭头函数中改变状态变量不会触发UI刷新，这是因为箭头函数体内的this对象是定义该函数时所在的作用域指向的对象，而不是调用时所在的作用域指向的对象。所以在该场景下，changeCoverUrl的this指向PlayDetailViewModel，而不是状态变量本身。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export default class PlayDetailViewModel {\n  public coverUrl: string = '#00ff00';\n  public changeCoverUrl = () => {\n    this.coverUrl = '#00F5FF';\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import PlayDetailViewModel from './PlayDetailViewModel';\n\n@Entry\n@Component\nstruct PlayDetailPage {\n  @State vm: PlayDetailViewModel = new PlayDetailViewModel();\n\n  build() {\n    Stack() {\n      Text(this.vm.coverUrl)\n        .width(100)\n        .height(100)\n        .backgroundColor(this.vm.coverUrl)\n      Row() {\n        Button('Change Color')\n          .onClick(() => {\n            this.vm.changeCoverUrl();\n          })\n      }\n    }\n    .width('100%')\n    .height('100%')\n    .alignContent(Alignment.Top)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解决方案：将状态变量的代理对象传入箭头函数，调用代理的属性赋值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export default class PlayDetailViewModel {\n  public coverUrl: string = '#00ff00';\n  public changeCoverUrl = (model: PlayDetailViewModel) => {\n    model.coverUrl = '#00F5FF';\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import PlayDetailViewModel from './PlayDetailViewModel';\n\n@Entry\n@Component\nstruct PlayDetailPage {\n  @State vm: PlayDetailViewModel = new PlayDetailViewModel();\n\n  build() {\n    Stack() {\n      Text(this.vm.coverUrl)\n        .width(100)\n        .height(100)\n        .backgroundColor(this.vm.coverUrl)\n      Row() {\n        Button('Change Color')\n          .onClick(() => {\n            let self = this.vm;\n            this.vm.changeCoverUrl(self);\n          })\n      }\n    }\n    .width('100%')\n    .height('100%')\n    .alignContent(Alignment.Top)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "冗余刷新",
      children: "冗余刷新"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用简单属性数组导致冗余刷新",
      children: "使用简单属性数组导致冗余刷新"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在开发过程中，我们经常会需要设置多个组件的同一种属性，比如Text组件的内容、组件的宽度、高度等样式信息等。将这些属性保存在一个数组中，配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach",
        children: "ForEach"
      }), "进行使用是一种简单且方便的方法。但这种使用方式会导致属性元素的冗余刷新，修改数组中一个属性元素，数组中所有元素绑定的组件都会被刷新。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN_NUMBER: number = 0XFF00;\nconst TAG: string = '[Sample_StateManagement]';\n\n@Entry\n@Component\nstruct Index {\n  @State items: string[] = [];\n  @State ids: string[] = [];\n  @State age: number[] = [];\n  @State gender: string[] = [];\n\n  aboutToAppear() {\n    this.items.push('Head');\n    this.items.push('List');\n    for (let i = 0; i < 20; i++) {\n      this.ids.push('id: ' + Math.floor(Math.random() * 1000));\n      this.age.push(Math.floor(Math.random() * 100 % 40));\n      this.gender.push(Math.floor(Math.random() * 100) % 2 == 0 ? 'Male' : 'Female');\n    }\n  }\n\n  isRenderText(index: number): number {\n    hilog.info(DOMAIN_NUMBER, TAG, `index ${index} is rendered`);\n    return 1;\n  }\n\n  build() {\n    Row() {\n      Column() {\n        ForEach(this.items, (item: string) => {\n          if (item == 'Head') {\n            Text('Personal Info')\n              .fontSize(40)\n          } else if (item == 'List') {\n            List() {\n              ForEach(this.ids, (id: string, index) => {\n                ListItem() {\n                  Row() {\n                    Text(id)\n                      .fontSize(20)\n                      .margin({\n                        left: 30,\n                        right: 5\n                      })\n                    Text('age: ' + this.age[index as number])\n                      .fontSize(20)\n                      .margin({\n                        left: 5,\n                        right: 5\n                      })\n                      .position({ x: 100 })\n                      .opacity(this.isRenderText(index))\n                      .onClick(() => {\n                        this.age[index]++;\n                      })\n                    Text('gender: ' + this.gender[index as number])\n                      .margin({\n                        left: 5,\n                        right: 5\n                      })\n                      .position({ x: 180 })\n                      .fontSize(20)\n                  }\n                }\n                .margin({\n                  top: 5,\n                  bottom: 5\n                })\n              })\n            }\n          }\n        })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述代码运行效果如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(716955)/* ["default"] */.A) + "",
        width: "1905",
        height: "901"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "页面内通过ForEach显示了20条信息，当点击某一条信息中age的Text组件时，可以通过日志发现其他的19条信息中age的Text组件也进行了刷新(这体现在日志上，所有的age的Text组件都打出了日志)，但实际上其他19条信息的age的数值并没有改变，也就是说其他19个Text组件并不需要刷新。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["这是因为当前状态管理的一个特性。假设存在一个被", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
        children: "@State"
      }), "修饰的number类型的数组Num[]，其中有20个元素，值分别为0到19。这20个元素分别绑定了一个Text组件，当改变其中一个元素，例如第0号元素的值从0改成1，除了0号元素绑定的Text组件会刷新之外，其他的19个Text组件也会刷新，即使1到19号元素的值并没有改变。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["这个特性普遍的出现在简单类型数组的场景中，当数组中的元素够多时，会对UI的刷新性能有很大的负面影响。这种“不需要刷新的组件被刷新”的现象即是“冗余刷新”，当“冗余刷新”的节点过多时，UI的刷新效率会大幅度降低，因此需要减少“冗余刷新”，也就是做到", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "精准控制组件的更新范围"
        })
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了减少由简单的属性相关的数组引起的“冗余刷新”，需要将属性数组转变为对象数组，配合自定义组件，实现精准控制更新范围。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN_NUMBER: number = 0XFF00;\nconst TAG: string = '[Sample_StateManagement]';\n\n@Observed\nclass InfoList extends Array<Info> {\n};\n\n@Observed\nclass Info {\n  public ids: number;\n  public age: number;\n  public gender: string;\n\n  constructor() {\n    this.ids = Math.floor(Math.random() * 1000);\n    this.age = Math.floor(Math.random() * 100 % 40);\n    this.gender = Math.floor(Math.random() * 100) % 2 == 0 ? 'Male' : 'Female';\n  }\n}\n\n@Component\nstruct Information {\n  @ObjectLink info: Info;\n  @State index: number = 0;\n\n  isRenderText(index: number): number {\n    hilog.info(DOMAIN_NUMBER, TAG, `index ${index} is rendered`);\n    return 1;\n  }\n\n  build() {\n    Row() {\n      Text('id: ' + this.info.ids)\n        .fontSize(20)\n        .margin({\n          left: 30,\n          right: 5\n        })\n      Text('age: ' + this.info.age)\n        .fontSize(20)\n        .margin({\n          left: 5,\n          right: 5\n        })\n        .position({ x: 100 })\n        .opacity(this.isRenderText(this.index))\n        .onClick(() => {\n          this.info.age++;\n        })\n      Text('gender: ' + this.info.gender)\n        .margin({\n          left: 5,\n          right: 5\n        })\n        .position({ x: 180 })\n        .fontSize(20)\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Page {\n  @State infoList: InfoList = new InfoList();\n  @State items: string[] = [];\n\n  aboutToAppear() {\n    this.items.push('Head');\n    this.items.push('List');\n    for (let i = 0; i < 20; i++) {\n      this.infoList.push(new Info()); // 使用对象数组代替了原有的多个属性数组\n    }\n  }\n\n  build() {\n    Row() {\n      Column() {\n        ForEach(this.items, (item: string) => {\n          if (item == 'Head') {\n            Text('Personal Info')\n              .fontSize(40)\n          } else if (item == 'List') {\n            List() {\n              ForEach(this.infoList, (info: Info, index) => {\n                ListItem() {\n                  Information({\n                    info: info,\n                    index: index\n                  })\n                }\n                .margin({\n                  top: 5,\n                  bottom: 5\n                })\n              })\n            }\n          }\n        })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述代码的运行效果如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(229629)/* ["default"] */.A) + "",
        width: "1905",
        height: "901"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["修改后的代码使用对象数组代替了原有的多个属性数组，能够避免数组的“冗余刷新”的情况。这是因为对于数组来说，对象内的变化是无法感知的，数组只能观测数组项层级的变化，例如新增数据项，修改数据项（普通数组是直接修改数据项的值，在对象数组的场景下是整个对象被重新赋值，改变某个数据项对象中的属性不会被观测到）、删除数据项等。这意味着当改变对象内的某个属性时，对于数组来说，对象是没有变化的，也就不会去刷新。在当前状态管理的观测能力中，除了数组嵌套对象的场景外，对象嵌套对象的场景也是无法观测到变化的，这一部分内容将在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E4%BD%BF%E7%94%A8%E5%A4%9A%E5%B1%9E%E6%80%A7%E7%B1%BB%E5%AF%B9%E8%B1%A1%E5%AF%BC%E8%87%B4%E5%86%97%E4%BD%99%E5%88%B7%E6%96%B0",
        children: "使用多属性类对象导致冗余刷新"
      }), "中讲到。同时修改代码时使用了自定义组件与ForEach的结合，这一部分内容将在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/arkts-state-management-faq-inner-component#foreach%E5%92%8C%E5%AF%B9%E8%B1%A1%E6%95%B0%E7%BB%84%E7%BB%93%E5%90%88%E4%BD%BF%E7%94%A8%E5%AF%BC%E8%87%B4ui%E4%B8%8D%E5%88%B7%E6%96%B0",
        children: "ForEach和对象数组结合使用导致UI不刷新"
      }), "讲到。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用多属性类对象导致冗余刷新",
      children: "使用多属性类对象导致冗余刷新"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(993377)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 11开始，推荐优先使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-data-object-state-management/arkts-track",
        children: "@Track装饰器"
      }), "解决该场景的问题。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发过程中，我们有时会定义一个大的对象，其中包含了很多样式相关的属性，并且在父子组件间传递这个对象，将其中的属性绑定在组件上。这种使用方式会导致类属性的冗余刷新，修改一个类属性，类内所有属性绑定的组件都会被刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN_NUMBER: number = 0XFF00;\nconst TAG: string = '[Sample_StateManagement]';\n\n@Observed\nclass UiStyle {\n  public translateX: number = 0;\n  public translateY: number = 0;\n  public scaleX: number = 0.3;\n  public scaleY: number = 0.3;\n  public width: number = 336;\n  public height: number = 178;\n  public posX: number = 10;\n  public posY: number = 50;\n  public alpha: number = 0.5;\n  public borderRadius: number = 24;\n  public imageWidth: number = 78;\n  public imageHeight: number = 78;\n  public translateImageX: number = 0;\n  public translateImageY: number = 0;\n  public fontSize: number = 20;\n}\n\n@Component\nstruct SpecialImage {\n  @ObjectLink uiStyle: UiStyle;\n\n  private isRenderSpecialImage(): number { // 显示组件是否渲染的函数\n    hilog.info(DOMAIN_NUMBER, TAG, 'SpecialImage is rendered');\n    return 1;\n  }\n\n  build() {\n    Image($r('app.media.icon')) // 此处'app.media.icon'仅作示例，请开发者自行替换，否则imageSource创建失败会导致后续无法正常执行。\n      .width(this.uiStyle.imageWidth)\n      .height(this.uiStyle.imageHeight)\n      .margin({ top: 20 })\n      .translate({\n        x: this.uiStyle.translateImageX,\n        y: this.uiStyle.translateImageY\n      })\n      .opacity(this.isRenderSpecialImage()) // 如果Image重新渲染，该函数将被调用\n  }\n}\n\n@Component\nstruct PageChild {\n  @ObjectLink uiStyle: UiStyle;\n\n  // 下面的函数用于显示组件是否被渲染\n  private isRenderColumn(): number {\n    hilog.info(DOMAIN_NUMBER, TAG, 'Column is rendered');\n    return 1;\n  }\n\n  private isRenderStack(): number {\n    hilog.info(DOMAIN_NUMBER, TAG, 'Stack is rendered');\n    return 1;\n  }\n\n  private isRenderImage(): number {\n    hilog.info(DOMAIN_NUMBER, TAG, 'Image is rendered');\n    return 1;\n  }\n\n  private isRenderText(): number {\n    hilog.info(DOMAIN_NUMBER, TAG, 'Text is rendered');\n    return 1;\n  }\n\n  build() {\n    Column() {\n      SpecialImage({\n        uiStyle: this.uiStyle\n      })\n      Stack() {\n        Column() {\n          Image($r('app.media.icon')) // 此处'app.media.icon'仅作示例，请开发者自行替换，否则imageSource创建失败会导致后续无法正常执行。\n            .opacity(this.uiStyle.alpha)\n            .scale({\n              x: this.uiStyle.scaleX,\n              y: this.uiStyle.scaleY\n            })\n            .padding(this.isRenderImage())\n            .width(300)\n            .height(300)\n        }\n        .width('100%')\n        .position({ y: -80 })\n\n        Stack() {\n          Text('Hello World')\n            .fontColor('#182431')\n            .fontWeight(FontWeight.Medium)\n            .fontSize(this.uiStyle.fontSize)\n            .opacity(this.isRenderText())\n            .margin({ top: 12 })\n        }\n        .opacity(this.isRenderStack())\n        .position({\n          x: this.uiStyle.posX,\n          y: this.uiStyle.posY\n        })\n        .width('100%')\n        .height('100%')\n      }\n      .margin({ top: 50 })\n      .borderRadius(this.uiStyle.borderRadius)\n      .opacity(this.isRenderStack())\n      .backgroundColor('#FFFFFF')\n      .width(this.uiStyle.width)\n      .height(this.uiStyle.height)\n      .translate({\n        x: this.uiStyle.translateX,\n        y: this.uiStyle.translateY\n      })\n\n      Column() {\n        Button('Move')\n          .width(312)\n          .fontSize(20)\n          .backgroundColor('#FF007DFF')\n          .margin({ bottom: 10 })\n          .onClick(() => {\n            this.getUIContext().animateTo({\n              duration: 500\n            }, () => {\n              this.uiStyle.translateY = (this.uiStyle.translateY + 180) % 250;\n            });\n          })\n        Button('Scale')\n          .borderRadius(20)\n          .backgroundColor('#FF007DFF')\n          .fontSize(20)\n          .width(312)\n          .onClick(() => {\n            this.uiStyle.scaleX = (this.uiStyle.scaleX + 0.6) % 0.8;\n          })\n      }\n      .position({\n        y: 666\n      })\n      .height('100%')\n      .width('100%')\n\n    }\n    .opacity(this.isRenderColumn())\n    .width('100%')\n    .height('100%')\n\n  }\n}\n\n@Entry\n@Component\nstruct Page {\n  @State uiStyle: UiStyle = new UiStyle();\n\n  build() {\n    Stack() {\n      PageChild({\n        uiStyle: this.uiStyle\n      })\n    }\n    .backgroundColor('#F1F3F5')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述代码的运行效果如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(530849)/* ["default"] */.A) + "",
        width: "1905",
        height: "901"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["优化前点击move按钮的脏节点更新", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/ui-debug-optimize/ui-inspector-profiler#trace%E8%B0%83%E8%AF%95%E8%83%BD%E5%8A%9B",
        children: "耗时"
      }), "如下图："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(148725)/* ["default"] */.A) + "",
        width: "1438",
        height: "560"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上面的示例中，UiStyle定义了多个属性，并且这些属性分别被多个组件关联。当点击任意一个按钮更改其中的某些属性时，会导致所有这些关联uiStyle的组件进行刷新，虽然它们其实并不需要进行刷新（因为组件的属性都没有改变）。通过定义的一系列isRender函数，可以观察到这些组件的刷新。当点击“move”按钮进行平移动画时，由于translateY的值的多次改变，会导致每一次都存在“冗余刷新”的问题，这对应用的性能有着很大的负面影响。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这是因为当前状态管理的一个刷新机制，假设定义了一个有20个属性的类，创建类的对象实例，将20个属性绑定到组件上，这时修改其中的某个属性，除了这个属性关联的组件会刷新之外，其他的19个属性关联的组件也都会刷新，即使这些属性本身并没有发生变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这个机制会导致在使用一个复杂大对象与多个组件关联时，刷新性能的下降。对此，推荐将一个复杂大对象拆分成多个小对象的集合，在保留原有代码结构的基础上，减少“冗余刷新”，实现精准控制组件的更新范围。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN_NUMBER: number = 0XFF00;\nconst TAG: string = '[Sample_StateManagement]';\n\n@Observed\nclass NeedRenderImage { // 在同一组件中使用的属性可以划分为相同的类\n  public translateImageX: number = 0;\n  public translateImageY: number = 0;\n  public imageWidth: number = 78;\n  public imageHeight: number = 78;\n}\n\n@Observed\nclass NeedRenderScale { // 在一起使用的属性可以划分为相同的类\n  public scaleX: number = 0.3;\n  public scaleY: number = 0.3;\n}\n\n@Observed\nclass NeedRenderAlpha { // 在不同地方使用的属性可以划分为相同的类\n  public alpha: number = 0.5;\n}\n\n@Observed\nclass NeedRenderSize { // 在一起使用的属性可以划分为相同的类\n  public width: number = 336;\n  public height: number = 178;\n}\n\n@Observed\nclass NeedRenderPos { // 在一起使用的属性可以划分为相同的类\n  public posX: number = 10;\n  public posY: number = 50;\n}\n\n@Observed\nclass NeedRenderBorderRadius { // 在不同地方使用的属性可以划分为相同的类\n  public borderRadius: number = 24;\n}\n\n@Observed\nclass NeedRenderFontSize { // 在不同地方使用的属性可以划分为相同的类\n  public fontSize: number = 20;\n}\n\n@Observed\nclass NeedRenderTranslate { // 在一起使用的属性可以划分为相同的类\n  public translateX: number = 0;\n  public translateY: number = 0;\n}\n\n@Observed\nclass UiStyle {\n  // 使用NeedRenderxxx类\n  public needRenderTranslate: NeedRenderTranslate = new NeedRenderTranslate();\n  public needRenderFontSize: NeedRenderFontSize = new NeedRenderFontSize();\n  public needRenderBorderRadius: NeedRenderBorderRadius = new NeedRenderBorderRadius();\n  public needRenderPos: NeedRenderPos = new NeedRenderPos();\n  public needRenderSize: NeedRenderSize = new NeedRenderSize();\n  public needRenderAlpha: NeedRenderAlpha = new NeedRenderAlpha();\n  public needRenderScale: NeedRenderScale = new NeedRenderScale();\n  public needRenderImage: NeedRenderImage = new NeedRenderImage();\n}\n\n@Component\nstruct SpecialImage {\n  @ObjectLink uiStyle: UiStyle;\n  @ObjectLink needRenderImage: NeedRenderImage; // 从其父组件接收新类\n\n  private isRenderSpecialImage(): number { // 显示组件是否渲染的函数\n    hilog.info(DOMAIN_NUMBER, TAG, 'SpecialImage is rendered');\n    return 1;\n  }\n\n  build() {\n    Image($r('app.media.icon')) // 此处'app.media.icon'仅作示例，请开发者自行替换，否则imageSource创建失败会导致后续无法正常执行。\n      .width(this.needRenderImage.imageWidth) // 使用this.needRenderImage.xxx\n      .height(this.needRenderImage.imageHeight)\n      .margin({ top: 20 })\n      .translate({\n        x: this.needRenderImage.translateImageX,\n        y: this.needRenderImage.translateImageY\n      })\n      .opacity(this.isRenderSpecialImage()) // 如果Image重新渲染，该函数将被调用\n  }\n}\n\n@Component\nstruct PageChild {\n  @ObjectLink uiStyle: UiStyle;\n  @ObjectLink needRenderTranslate: NeedRenderTranslate; // 从其父组件接收新定义的NeedRenderxxx类的实例\n  @ObjectLink needRenderFontSize: NeedRenderFontSize;\n  @ObjectLink needRenderBorderRadius: NeedRenderBorderRadius;\n  @ObjectLink needRenderPos: NeedRenderPos;\n  @ObjectLink needRenderSize: NeedRenderSize;\n  @ObjectLink needRenderAlpha: NeedRenderAlpha;\n  @ObjectLink needRenderScale: NeedRenderScale;\n\n  // 下面的函数用于显示组件是否被渲染\n  private isRenderColumn(): number {\n    hilog.info(DOMAIN_NUMBER, TAG, 'Column is rendered');\n    return 1;\n  }\n\n  private isRenderStack(): number {\n    hilog.info(DOMAIN_NUMBER, TAG, 'Stack is rendered');\n    return 1;\n  }\n\n  private isRenderImage(): number {\n    hilog.info(DOMAIN_NUMBER, TAG, 'Image is rendered');\n    return 1;\n  }\n\n  private isRenderText(): number {\n    hilog.info(DOMAIN_NUMBER, TAG, 'Text is rendered');\n    return 1;\n  }\n\n  build() {\n    Column() {\n      SpecialImage({\n        uiStyle: this.uiStyle,\n        needRenderImage: this.uiStyle.needRenderImage // 传递给子组件\n      })\n      Stack() {\n        Column() {\n          Image($r('app.media.icon')) // 此处'app.media.icon'仅作示例，请开发者自行替换，否则imageSource创建失败会导致后续无法正常执行。\n            .opacity(this.needRenderAlpha.alpha)\n            .scale({\n              x: this.needRenderScale.scaleX, // 使用this.needRenderXxx.xxx\n              y: this.needRenderScale.scaleY\n            })\n            .padding(this.isRenderImage())\n            .width(300)\n            .height(300)\n        }\n        .width('100%')\n        .position({ y: -80 })\n\n        Stack() {\n          Text('Hello World')\n            .fontColor('#182431')\n            .fontWeight(FontWeight.Medium)\n            .fontSize(this.needRenderFontSize.fontSize)\n            .opacity(this.isRenderText())\n            .margin({ top: 12 })\n        }\n        .opacity(this.isRenderStack())\n        .position({\n          x: this.needRenderPos.posX,\n          y: this.needRenderPos.posY\n        })\n        .width('100%')\n        .height('100%')\n      }\n      .margin({ top: 50 })\n      .borderRadius(this.needRenderBorderRadius.borderRadius)\n      .opacity(this.isRenderStack())\n      .backgroundColor('#FFFFFF')\n      .width(this.needRenderSize.width)\n      .height(this.needRenderSize.height)\n      .translate({\n        x: this.needRenderTranslate.translateX,\n        y: this.needRenderTranslate.translateY\n      })\n\n      Column() {\n        Button('Move')\n          .width(312)\n          .fontSize(20)\n          .backgroundColor('#FF007DFF')\n          .margin({ bottom: 10 })\n          .onClick(() => {\n            this.getUIContext().animateTo({\n              duration: 500\n            }, () => {\n              this.needRenderTranslate.translateY = (this.needRenderTranslate.translateY + 180) % 250;\n            });\n          })\n        Button('Scale')\n          .borderRadius(20)\n          .backgroundColor('#FF007DFF')\n          .fontSize(20)\n          .width(312)\n          .margin({ bottom: 10 })\n          .onClick(() => {\n            this.needRenderScale.scaleX = (this.needRenderScale.scaleX + 0.6) % 0.8;\n          })\n        Button('Change Image')\n          .borderRadius(20)\n          .backgroundColor('#FF007DFF')\n          .fontSize(20)\n          .width(312)\n          .onClick(() => { // 在父组件中，仍使用 this.uiStyle.endRenderXxx.xxx 更改属性\n            this.uiStyle.needRenderImage.imageWidth = (this.uiStyle.needRenderImage.imageWidth + 30) % 160;\n            this.uiStyle.needRenderImage.imageHeight = (this.uiStyle.needRenderImage.imageHeight + 30) % 160;\n          })\n      }\n      .position({\n        y: 616\n      })\n      .height('100%')\n      .width('100%')\n    }\n    .opacity(this.isRenderColumn())\n    .width('100%')\n    .height('100%')\n  }\n}\n\n@Entry\n@Component\nstruct Page {\n  @State uiStyle: UiStyle = new UiStyle();\n\n  build() {\n    Stack() {\n      PageChild({\n        uiStyle: this.uiStyle,\n        needRenderTranslate: this.uiStyle.needRenderTranslate, // 传递needRenderxxx类给子组件\n        needRenderFontSize: this.uiStyle.needRenderFontSize,\n        needRenderBorderRadius: this.uiStyle.needRenderBorderRadius,\n        needRenderPos: this.uiStyle.needRenderPos,\n        needRenderSize: this.uiStyle.needRenderSize,\n        needRenderAlpha: this.uiStyle.needRenderAlpha,\n        needRenderScale: this.uiStyle.needRenderScale\n      })\n    }\n    .backgroundColor('#F1F3F5')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["上述代码的运行效果如下。", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(695692)/* ["default"] */.A) + "",
        width: "1905",
        height: "901"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "优化后点击move按钮的脏节点更新耗时如下图："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(446941)/* ["default"] */.A) + "",
        width: "1146",
        height: "459"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "修改后的代码将原来的大类中的十五个属性拆成了八个小类，并且在绑定的组件上也做了相应的适配。属性拆分遵循以下几点原则："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "只作用在同一个组件上的多个属性可以被拆分进同一个新类，即示例中的NeedRenderImage。适用于组件经常被不关联的属性改变而引起刷新的场景，这个时候就要考虑拆分属性，或者重新考虑ViewModel设计是否合理。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "经常被同时使用的属性可以被拆分进同一个新类，即示例中的NeedRenderScale、NeedRenderTranslate、NeedRenderPos、NeedRenderSize。适用于属性经常成对出现，或者被作用在同一个样式上的情况，例如.translate、.position、.scale等（这些样式通常会接收一个对象作为参数）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可能被用在多个组件上或相对较独立的属性应该被单独拆分进一个新类，即示例中的NeedRenderAlpha，NeedRenderBorderRadius、NeedRenderFontSize。适用于一个属性作用在多个组件上或者与其他属性没有联系的情况，例如.opacity、.borderRadius等（这些样式通常相对独立）。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["属性拆分的原理和属性合并类似，都是在嵌套场景下，状态管理无法观测二层以上的属性变化，所以不会因为二层的数据变化导致一层关联的其他属性被刷新，同时利用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
        children: "@Observed"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
        children: "@ObjectLink"
      }), "在父子节点间传递二层的对象，从而在子组件中正常的观测二层的数据变化，实现精准刷新。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-data-object-state-management/arkts-track",
        children: "@Track"
      }), "是类属性装饰器。当一个类对象是状态变量时，@Track装饰的属性发生变化，只会触发该属性关联的UI更新，所以使用@Track装饰器则无需做属性拆分，也能达到同样控制组件更新范围的作用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN_NUMBER: number = 0XFF00;\nconst TAG: string = '[Sample_StateManagement]';\n\n@Observed\nclass UiStyle {\n  @Track public translateX: number = 0;\n  @Track public translateY: number = 0;\n  @Track public scaleX: number = 0.3;\n  @Track public scaleY: number = 0.3;\n  @Track public width: number = 336;\n  @Track public height: number = 178;\n  @Track public posX: number = 10;\n  @Track public posY: number = 50;\n  @Track public alpha: number = 0.5;\n  @Track public borderRadius: number = 24;\n  @Track public imageWidth: number = 78;\n  @Track public imageHeight: number = 78;\n  @Track public translateImageX: number = 0;\n  @Track public translateImageY: number = 0;\n  @Track public fontSize: number = 20;\n}\n\n@Component\nstruct SpecialImage {\n  @ObjectLink uiStyle: UiStyle;\n\n  private isRenderSpecialImage(): number { // 显示组件是否渲染的函数\n    hilog.info(DOMAIN_NUMBER, TAG, 'SpecialImage is rendered');\n    return 1;\n  }\n\n  build() {\n    Image($r('app.media.icon')) // 此处'app.media.icon'仅作示例，请开发者自行替换，否则imageSource创建失败会导致后续无法正常执行。\n      .width(this.uiStyle.imageWidth)\n      .height(this.uiStyle.imageHeight)\n      .margin({ top: 20 })\n      .translate({\n        x: this.uiStyle.translateImageX,\n        y: this.uiStyle.translateImageY\n      })\n      .opacity(this.isRenderSpecialImage()) // 如果Image重新渲染，该函数将被调用\n  }\n}\n\n@Component\nstruct PageChild {\n  @ObjectLink uiStyle: UiStyle;\n\n  // 下面的函数用于显示组件是否被渲染\n  private isRenderColumn(): number {\n    hilog.info(DOMAIN_NUMBER, TAG, 'Column is rendered');\n    return 1;\n  }\n\n  private isRenderStack(): number {\n    hilog.info(DOMAIN_NUMBER, TAG, 'Stack is rendered');\n    return 1;\n  }\n\n  private isRenderImage(): number {\n    hilog.info(DOMAIN_NUMBER, TAG, 'Image is rendered');\n    return 1;\n  }\n\n  private isRenderText(): number {\n    hilog.info(DOMAIN_NUMBER, TAG, 'Text is rendered');\n    return 1;\n  }\n\n  build() {\n    Column() {\n      SpecialImage({\n        uiStyle: this.uiStyle\n      })\n      Stack() {\n        Column() {\n          Image($r('app.media.icon')) // 此处'app.media.icon'仅作示例，请开发者自行替换，否则imageSource创建失败会导致后续无法正常执行。\n            .opacity(this.uiStyle.alpha)\n            .scale({\n              x: this.uiStyle.scaleX,\n              y: this.uiStyle.scaleY\n            })\n            .padding(this.isRenderImage())\n            .width(300)\n            .height(300)\n        }\n        .width('100%')\n        .position({ y: -80 })\n\n        Stack() {\n          Text('Hello World')\n            .fontColor('#182431')\n            .fontWeight(FontWeight.Medium)\n            .fontSize(this.uiStyle.fontSize)\n            .opacity(this.isRenderText())\n            .margin({ top: 12 })\n        }\n        .opacity(this.isRenderStack())\n        .position({\n          x: this.uiStyle.posX,\n          y: this.uiStyle.posY\n        })\n        .width('100%')\n        .height('100%')\n      }\n      .margin({ top: 50 })\n      .borderRadius(this.uiStyle.borderRadius)\n      .opacity(this.isRenderStack())\n      .backgroundColor('#FFFFFF')\n      .width(this.uiStyle.width)\n      .height(this.uiStyle.height)\n      .translate({\n        x: this.uiStyle.translateX,\n        y: this.uiStyle.translateY\n      })\n\n      Column() {\n        Button('Move')\n          .width(312)\n          .fontSize(20)\n          .backgroundColor('#FF007DFF')\n          .margin({ bottom: 10 })\n          .onClick(() => {\n            this.getUIContext().animateTo({\n              duration: 500\n            }, () => {\n              this.uiStyle.translateY = (this.uiStyle.translateY + 180) % 250;\n            });\n          })\n        Button('Scale')\n          .borderRadius(20)\n          .backgroundColor('#FF007DFF')\n          .fontSize(20)\n          .width(312)\n          .onClick(() => {\n            this.uiStyle.scaleX = (this.uiStyle.scaleX + 0.6) % 0.8;\n          })\n      }\n      .position({\n        y: 666\n      })\n      .height('100%')\n      .width('100%')\n\n    }\n    .opacity(this.isRenderColumn())\n    .width('100%')\n    .height('100%')\n\n  }\n}\n\n@Entry\n@Component\nstruct Page {\n  @State uiStyle: UiStyle = new UiStyle();\n\n  build() {\n    Stack() {\n      PageChild({\n        uiStyle: this.uiStyle\n      })\n    }\n    .backgroundColor('#F1F3F5')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "数据重置导致ui不刷新",
      children: "数据重置导致UI不刷新"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在开发过程中，会有“重置数据”的场景，将一个新创建的对象赋值给原有的状态变量，实现数据的刷新。如果不注意新创建对象的类型，可能会出现UI不刷新的现象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN_NUMBER: number = 0XFF00;\nconst TAG: string = '[Sample_StateManagement]';\n\n@Observed\nclass Child {\n  public count: number;\n\n  constructor(count: number) {\n    this.count = count;\n  }\n}\n\n@Observed\nclass ChildList extends Array<Child> {\n}\n\n@Observed\nclass Ancestor {\n  public childList: ChildList;\n\n  constructor(childList: ChildList) {\n    this.childList = childList;\n  }\n\n  public loadData() {\n    let tempList = [new Child(1), new Child(2), new Child(3), new Child(4), new Child(5)];\n    this.childList = tempList;\n  }\n\n  public clearData() {\n    this.childList = [];\n  }\n}\n\n@Component\nstruct CompChild {\n  @Link childList: ChildList;\n  @ObjectLink child: Child;\n\n  build() {\n    Row() {\n      Text(this.child.count + '')\n        .height(70)\n        .fontSize(20)\n        .borderRadius({\n          topLeft: 6,\n          topRight: 6\n        })\n        .margin({ left: 50 })\n      Button('X')\n        .backgroundColor(Color.Red)\n        .onClick(() => {\n          let index = this.childList.findIndex((item) => {\n            return item.count === this.child.count;\n          });\n          if (index !== -1) {\n            this.childList.splice(index, 1);\n          }\n        })\n        .margin({\n          left: 200,\n          right: 30\n        })\n    }\n    .margin({\n      top: 15,\n      left: 15,\n      right: 10,\n      bottom: 15\n    })\n    .borderRadius(6)\n    .backgroundColor(Color.Grey)\n  }\n}\n\n@Component\nstruct CompList {\n  @ObjectLink @Watch('changeChildList') childList: ChildList;\n\n  changeChildList() {\n    hilog.info(DOMAIN_NUMBER, TAG, 'CompList ChildList change');\n  }\n\n  isRenderCompChild(index: number): number {\n    hilog.info(DOMAIN_NUMBER, TAG, 'Comp Child is render' + index);\n    return 1;\n  }\n\n  build() {\n    Column() {\n      List() {\n        ForEach(this.childList, (item: Child, index) => {\n          ListItem() {\n            CompChild({\n              childList: this.childList,\n              child: item\n            })\n              .opacity(this.isRenderCompChild(index))\n          }\n        })\n      }\n      .height('70%')\n    }\n  }\n}\n\n@Component\nstruct CompAncestor {\n  @ObjectLink ancestor: Ancestor;\n\n  build() {\n    Column() {\n      CompList({ childList: this.ancestor.childList })\n      Row() {\n        Button('Clear')\n          .onClick(() => {\n            this.ancestor.clearData();\n          })\n          .width(100)\n          .margin({ right: 50 })\n        Button('Recover')\n          .onClick(() => {\n            this.ancestor.loadData();\n          })\n          .width(100)\n      }\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Page {\n  @State childList: ChildList = [new Child(1), new Child(2), new Child(3), new Child(4), new Child(5)];\n  @State ancestor: Ancestor = new Ancestor(this.childList);\n\n  build() {\n    Column() {\n      CompAncestor({ ancestor: this.ancestor })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述代码运行效果如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(110542)/* ["default"] */.A) + "",
        width: "1905",
        height: "901"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述代码维护了一个ChildList类型的数据源，点击\"X\"按钮删除一些数据后再点击Recover进行恢复ChildList，发现再次点击\"X\"按钮进行删除时，UI并没有刷新，同时也没有打印出“CompList ChildList change”的日志。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "代码中对数据源childList重新赋值时，是通过Ancestor对象的方法loadData。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "public loadData() {\n  let tempList = [new Child(1), new Child(2), new Child(3), new Child(4), new Child(5)];\n  this.childList = tempList;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在loadData方法中，创建了一个临时的Child类型的数组tempList，并且将Ancestor对象的成员变量的childList指向了tempList。但是这里创建的Child[]类型的数组tempList其实并没有能被观测的能力（也就说它的变化无法主动触发UI刷新）。当它被赋值给childList之后，触发了ForEach的刷新，使得界面完成了重建，但是再次点击删除时，由于此时的childList已经指向了新的tempList代表的数组，并且这个数组并没有被观测的能力，是个静态的量，所以它的更改不会被观测到，也就不会引起UI的刷新。实际上这个时候childList里的数据已经减少了，只是UI没有刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "有些开发者会注意到，在Page中初始化定义childList的时候，也是以这样一种方法去进行初始化的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@State childList: ChildList = [new Child(1), new Child(2), new Child(3), new Child(4), new Child(5)];\n@State ancestor: Ancestor = new Ancestor(this.childList);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "但是由于这里的childList实际上是被@State装饰了，根据当前状态管理的观测能力，尽管右边赋值的是一个Child[]类型的数据，它并没有被@Observed装饰，这里的childList却依然具备了被观测的能力，所以能够正常的触发UI的刷新。当去掉childList的@State的装饰器后，不去重置数据源，也无法通过点击“X”按钮触发刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因此，需要将具有观测能力的类对象绑定组件，来确保当改变这些类对象的内容时，UI能够正常的刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN_NUMBER: number = 0XFF00;\nconst TAG: string = '[Sample_StateManagement]';\n\n@Observed\nclass Child {\n  public count: number;\n\n  constructor(count: number) {\n    this.count = count;\n  }\n}\n\n@Observed\nclass ChildList extends Array<Child> {\n}\n\n@Observed\nclass Ancestor {\n  public childList: ChildList;\n\n  constructor(childList: ChildList) {\n    this.childList = childList;\n  }\n\n  public loadData() {\n    let tempList = new ChildList();\n    for (let i = 1; i < 6; i++) {\n      tempList.push(new Child(i));\n    }\n    this.childList = tempList;\n  }\n\n  public clearData() {\n    this.childList = [];\n  }\n}\n\n@Component\nstruct CompChild {\n  @Link childList: ChildList;\n  @ObjectLink child: Child;\n\n  build() {\n    Row() {\n      Text(this.child.count + '')\n        .height(70)\n        .fontSize(20)\n        .borderRadius({\n          topLeft: 6,\n          topRight: 6\n        })\n        .margin({ left: 50 })\n      Button('X')\n        .backgroundColor(Color.Red)\n        .onClick(() => {\n          let index = this.childList.findIndex((item) => {\n            return item.count === this.child.count;\n          });\n          if (index !== -1) {\n            this.childList.splice(index, 1);\n          }\n        })\n        .margin({\n          left: 200,\n          right: 30\n        })\n    }\n    .margin({\n      top: 15,\n      left: 15,\n      right: 10,\n      bottom: 15\n    })\n    .borderRadius(6)\n    .backgroundColor(Color.Grey)\n  }\n}\n\n@Component\nstruct CompList {\n  @ObjectLink @Watch('changeChildList') childList: ChildList;\n\n  changeChildList() {\n    hilog.info(DOMAIN_NUMBER, TAG, 'CompList ChildList change');\n  }\n\n  isRenderCompChild(index: number): number {\n    hilog.info(DOMAIN_NUMBER, TAG, 'Comp Child is render' + index);\n    return 1;\n  }\n\n  build() {\n    Column() {\n      List() {\n        ForEach(this.childList, (item: Child, index) => {\n          ListItem() {\n            CompChild({\n              childList: this.childList,\n              child: item\n            })\n              .opacity(this.isRenderCompChild(index))\n          }\n        })\n      }\n      .height('70%')\n    }\n  }\n}\n\n@Component\nstruct CompAncestor {\n  @ObjectLink ancestor: Ancestor;\n\n  build() {\n    Column() {\n      CompList({ childList: this.ancestor.childList })\n      Row() {\n        Button('Clear')\n          .onClick(() => {\n            this.ancestor.clearData();\n          })\n          .width(100)\n          .margin({ right: 50 })\n        Button('Recover')\n          .onClick(() => {\n            this.ancestor.loadData();\n          })\n          .width(100)\n      }\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Page {\n  @State childList: ChildList = [new Child(1), new Child(2), new Child(3), new Child(4), new Child(5)];\n  @State ancestor: Ancestor = new Ancestor(this.childList);\n\n  build() {\n    Column() {\n      CompAncestor({ ancestor: this.ancestor })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述代码运行效果如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(873510)/* ["default"] */.A) + "",
        width: "1905",
        height: "901"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "核心的修改点是将原本Child[]类型的tempList修改为具有被观测能力的ChildList类。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "public loadData() {\n  let tempList = new ChildList();\n  for (let i = 1; i < 6; i++) {\n    tempList.push(new Child(i));\n  }\n  this.childList = tempList;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ChildList类型在定义的时候使用了@Observed进行装饰，所以用new创建的对象tempList具有被观测的能力，因此在点击“X”按钮删除其中一条内容时，变量childList就能够观测到变化，所以触发了ForEach的刷新，最终UI渲染刷新。"
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
110542(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797990-dc1051d0d10f561c1adb87309bab7d3a.gif");

},
148725(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437683-a51b5ef2b2a99ceb92a854f8b2c87b82.png");

},
446941(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477639-d6a9eded2704487d5363a8f06a07f78e.png");

},
993377(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
229629(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477637-1d004acd64e589e8cad4b029c56fc407.gif");

},
716955(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957636-594bba98fd1f1a0239021f7f0be26c81.gif");

},
530849(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797988-34d5f556b348d979f8b2c8858f0f3938.gif");

},
695692(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957638-7ae6cbc64eec6dee8f805800c9e945e4.gif");

},
873510(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437685-01aac7a3f2098d50fb42aeb9823c42d6.gif");

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