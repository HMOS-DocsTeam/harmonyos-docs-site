"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["966306"], {
295050(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_faq_arkts_state_management_faq_inner_component_arkts_state_management_faq_inner_component_md_2cc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-state-management-faq-arkts-state-management-faq-inner-component-arkts-state-management-faq-inner-component-md-2cc.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_faq_arkts_state_management_faq_inner_component_arkts_state_management_faq_inner_component_md_2cc_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/arkts-state-management-faq-inner-component/arkts-state-management-faq-inner-component","title":"组件内状态管理常见问题","description":"在ArkUI应用开发中，组件内状态管理的合理使用直接影响应用的性能和开发效率。然而，开发者在实践中常因更新机制理解不足，导致组件行为异常或渲染效率下降。本文将介绍组件内状态管理的常见问题与解决方案。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/arkts-state-management-faq-inner-component/arkts-state-management-faq-inner-component.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/arkts-state-management-faq-inner-component","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/arkts-state-management-faq-inner-component/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/arkts-state-management-faq-inner-component/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"组件内状态管理常见问题","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state-management-faq-inner-component","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"状态管理V1和V2混用指导（API version 19及之后）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/v1v2-mixing/arkts-v1-v2-mixusage/"},"next":{"title":"数据对象状态管理常见问题","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/arkts-state-management-faq-inner-class/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/arkts-state-management-faq-inner-component/arkts-state-management-faq-inner-component.md


const frontMatter = {
	title: '组件内状态管理常见问题',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state-management-faq-inner-component',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '组件内状态管理常见问题';

const assets = {

};



const toc = [{
  "value": "build函数中更改状态变量导致appfreeze",
  "id": "build函数中更改状态变量导致appfreeze",
  "level": 2
}, {
  "value": "注册回调中更改状态变量未解注册导致内存泄漏",
  "id": "注册回调中更改状态变量未解注册导致内存泄漏",
  "level": 2
}, {
  "value": "使用a.b(this.object)形式调用，不会触发UI刷新",
  "id": "使用abthisobject形式调用不会触发ui刷新",
  "level": 2
}, {
  "value": "复杂类型常量重复赋值给状态变量触发不必要的刷新",
  "id": "复杂类型常量重复赋值给状态变量触发不必要的刷新",
  "level": 2
}, {
  "value": "状态管理V1",
  "id": "状态管理v1",
  "level": 3
}, {
  "value": "状态管理V2",
  "id": "状态管理v2",
  "level": 3
}, {
  "value": "子组件无需修改状态变量时，使用@Prop导致不必要的深拷贝",
  "id": "子组件无需修改状态变量时使用prop导致不必要的深拷贝",
  "level": 2
}, {
  "value": "状态变量关联的组件数过多导致性能下降",
  "id": "状态变量关联的组件数过多导致性能下降",
  "level": 2
}, {
  "value": "在for、while等循环逻辑中频繁读取状态变量导致性能下降",
  "id": "在forwhile等循环逻辑中频繁读取状态变量导致性能下降",
  "level": 2
}, {
  "value": "频繁修改状态变量导致性能下降",
  "id": "频繁修改状态变量导致性能下降",
  "level": 2
}, {
  "value": "使用LazyForEach的重建机制刷新UI导致性能下降",
  "id": "使用lazyforeach的重建机制刷新ui导致性能下降",
  "level": 2
}, {
  "value": "ForEach和对象数组结合使用导致UI不刷新",
  "id": "foreach和对象数组结合使用导致ui不刷新",
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
        id: "组件内状态管理常见问题",
        children: "组件内状态管理常见问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在ArkUI应用开发中，组件内状态管理的合理使用直接影响应用的性能和开发效率。然而，开发者在实践中常因更新机制理解不足，导致组件行为异常或渲染效率下降。本文将介绍组件内状态管理的常见问题与解决方案。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "build函数中更改状态变量导致appfreeze",
      children: "build函数中更改状态变量导致appfreeze"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不允许在build里改变状态变量，状态管理框架会在运行时报出Error级别日志。通过事件回调或异步回调更新状态变量，例如在onClick中修改@State，是允许的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面的示例，渲染的流程是："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建Index自定义组件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行Index的build方法："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "创建Column组件。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "创建Text组件。创建Text组件的过程中，触发this.count++。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "count的改变再次触发Text组件的刷新。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "刷新过程中组件不会再标脏自己。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Text最终显示为2。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  @State count: number = 1;\n\n  build() {\n    Column() {\n      // 应避免直接在Text组件内改变count的值\n      Text(`${this.count++}`)\n        .width(50)\n        .height(50)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在首次创建的过程中，Text组件被多渲染了一次，最终显示为2。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "框架识别到在build里改变状态变量会打error日志，error日志为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FIX THIS APPLICATION ERROR: @Component 'Index': State variable 'count' has changed during render! It's illegal to change @Component state while build (initial render or re-render) is on-going. Application error!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上述示例中，Text组件多渲染了一次。这个错误行为不会造成严重的后果，所以许多开发者忽略了这个日志。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "但是，此行为是严重错误的，随着工程的复杂度升级，隐患将逐渐增大。见下一个例子。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  @State message: number = 20;\n\n  build() {\n    Column() {\n      Text(`${this.message++}`)\n      Text(`${this.message++}`)\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上面示例的渲染过程为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["创建第一个Text组件，触发this.message改变，", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-glossary#%E6%A0%87%E8%84%8Fmark-dirty",
          children: "标脏"
        }), "第一个Text组件。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建第二个Text组件，触发this.message改变，标脏两个Text组件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "下一帧到来时，刷新脏系统组件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "刷新第一个Text组件，触发this.message改变，不会标脏自己，仅标脏第二个Text组件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "刷新第二个Text组件，触发this.message改变，不会标脏自己，仅标脏第一个Text组件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "上述4、5步骤循环。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统长时间无响应，appfreeze。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因此，在build方法中改变状态变量是完全错误的。当发现“FIX THIS APPLICATION ERROR: @Component ... has changed during render! It's illegal to change @Component state while build (initial render or re-render) is on-going. Application error!”日志时，即使当前没有带来严重后果，也应该警惕并修改错误写法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "注册回调中更改状态变量未解注册导致内存泄漏",
      children: "注册回调中更改状态变量未解注册导致内存泄漏"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者可以在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttoappear",
        children: "aboutToAppear"
      }), "中注册箭头函数，以此改变组件中的状态变量。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(82233)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-lifecycle/ts-custom-component-lifecycle#abouttodisappear",
        children: "aboutToDisappear"
      }), "中将注册的函数置空，以避免箭头函数捕获自定义组件的this实例，导致自定义组件无法被释放，从而造成内存泄漏。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { common } from '@kit.AbilityKit';\n\nclass Model {\n  private callback: (() => void) | undefined = () => {\n  };\n\n  add(callback: () => void): void {\n    this.callback = callback;\n  }\n\n  delete(): void {\n    this.callback = undefined;\n  }\n\n  call(): void {\n    if (this.callback) {\n      this.callback();\n    }\n  }\n}\n\nlet model: Model = new Model();\n\n@Entry\n@Component\nstruct Test {\n  @State count: number = 10;\n  private context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n\n  aboutToAppear(): void {\n    model.add(() => {\n      this.count++;\n    })\n  }\n\n  build() {\n    Column() {\n      // 请在resources\\base\\element\\string.json文件中配置name为'state_countvalue_text1' ，value为非空字符串的资源\n      Text(resource.resourceToString($r('app.string.state_countvalue_text1')) + `${this.count}`)\n      Button('change')\n        .onClick(() => {\n          model.call();\n        })\n    }\n  }\n\n  aboutToDisappear(): void {\n    model.delete();\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["此外，也可以使用 LocalStorage在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E5%A4%96%E6%94%B9%E5%8F%98%E7%8A%B6%E6%80%81%E5%8F%98%E9%87%8F",
        children: "自定义组件外改变状态变量"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用abthisobject形式调用不会触发ui刷新",
      children: "使用a.b(this.object)形式调用，不会触发UI刷新"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在build方法内，当@State装饰的变量是Object类型，且通过a.b(this.object)形式调用时，b方法内传入的是this.object的原始对象，修改其属性，无法触发UI刷新。如下例中，通过静态方法Balloon.increaseVolume或者this.reduceVolume修改balloon的volume时，UI不会刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Balloon {\n  public volume: number;\n\n  constructor(volume: number) {\n    this.volume = volume;\n  }\n\n  static increaseVolume(balloon: Balloon) {\n    balloon.volume += 2;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State balloon: Balloon = new Balloon(10);\n\n  reduceVolume(balloon: Balloon) {\n    balloon.volume -= 1;\n  }\n\n  build() {\n    Column({ space: 8 }) {\n      Text(`The volume of the balloon is ${this.balloon.volume} cubic centimeters.`)\n        .fontSize(30)\n      Button(`increaseVolume`)\n        .onClick(() => {\n          // 通过静态方法调用，无法触发UI刷新\n          Balloon.increaseVolume(this.balloon);\n        })\n      Button(`reduceVolume`)\n        .onClick(() => {\n          // 使用this通过自定义组件内部方法调用，无法触发UI刷新\n          this.reduceVolume(this.balloon);\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "状态变量观察类属性变化是通过代理捕获其变化的，当使用a.b(this.object)调用时，框架会将代理对象转换为原始对象。修改原始对象属性，无法观察，因此UI不会刷新。开发者可以使用如下方法修改："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "先将this.balloon赋值给临时变量。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "再使用临时变量完成原本的调用逻辑。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "具体见正例。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Balloon {\n  public volume: number;\n\n  constructor(volume: number) {\n    this.volume = volume;\n  }\n\n  static increaseVolume(balloon: Balloon) {\n    balloon.volume += 2;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State balloon: Balloon = new Balloon(10);\n\n  reduceVolume(balloon: Balloon) {\n    balloon.volume -= 1;\n  }\n\n  build() {\n    Column({ space: 8 }) {\n      Text(`The volume of the balloon is ${this.balloon.volume} cubic centimeters.`)\n        .fontSize(30)\n      Button(`increaseVolume`)\n        .onClick(() => {\n          // 通过赋值给临时变量保留Proxy代理\n          let balloon1 = this.balloon;\n          Balloon.increaseVolume(balloon1);\n        })\n      Button(`reduceVolume`)\n        .onClick(() => {\n          // 通过赋值给临时变量保留Proxy代理\n          let balloon2 = this.balloon;\n          this.reduceVolume(balloon2);\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "复杂类型常量重复赋值给状态变量触发不必要的刷新",
      children: "复杂类型常量重复赋值给状态变量触发不必要的刷新"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "状态管理v1",
      children: "状态管理V1"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在状态管理V1中，会给被@Observed装饰的类对象以及使用状态变量装饰器如@State装饰的Class、Date、Map、Set、Array类型的对象添加一层代理，用于观测一层属性或API调用产生的变化。当复杂类型常量重复赋值给状态变量时，可能会由于加了代理而判断为新旧值不相等，导致不必要的刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nclass DataObj {\n  public name: string = 'default name';\n\n  constructor(name: string) {\n    this.name = name;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  list: DataObj[] = [new DataObj('a'), new DataObj('b'), new DataObj('c')];\n  @State dataObjFromList: DataObj = this.list[0];\n\n  build() {\n    Column() {\n      ConsumerChild({ dataObj: this.dataObjFromList })\n      Button('change to self').onClick(() => {\n        this.dataObjFromList = this.list[0];\n      })\n    }\n  }\n}\n\n@Component\nstruct ConsumerChild {\n  @Link @Watch('onDataObjChange') dataObj: DataObj;\n\n  onDataObjChange() {\n    hilog.info(0xFF00, 'testTag', '%{public}s', 'dataObj changed');\n  }\n\n  getContent() {\n    hilog.info(0xFF00, 'testTag', '%{public}s', `this.dataObj.name change: ${this.dataObj.name}`);\n    return this.dataObj.name;\n  }\n\n  build() {\n    Column() {\n      Text(this.getContent()).fontSize(30)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上示例每次点击Button('change to self')，把相同的类实例赋值给一个Class类型的状态变量，会触发刷新并输出this.dataObj.name change: a日志。这是因为当再次赋值list[0]时，dataObjFromList已经是Proxy类型，而list[0]是Object类型，因此判断两者不相等，会触发赋值和刷新。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了避免这种不必要的赋值和刷新，可以通过用@Observed装饰类，或者使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-gettarget",
        children: "UIUtils.getTarget()"
      }), "获取原始对象，提前进行新旧值的判断，如果相同则不执行赋值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方法一：增加@Observed"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Observed\nclass DataObj {\n  public name: string = 'default name';\n\n  constructor(name: string) {\n    this.name = name;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  list: DataObj[] = [new DataObj('a'), new DataObj('b'), new DataObj('c')];\n  @State dataObjFromList: DataObj = this.list[0];\n\n  build() {\n    Column() {\n      ConsumerChild({ dataObj: this.dataObjFromList })\n      Button('change to self').onClick(() => {\n        this.dataObjFromList = this.list[0];\n      })\n    }\n  }\n}\n\n@Component\nstruct ConsumerChild {\n  @Link @Watch('onDataObjChange') dataObj: DataObj;\n\n  onDataObjChange() {\n    hilog.info(0xFF00, 'testTag', '%{public}s', 'dataObj changed');\n  }\n\n  build() {\n    Column() {\n      Text(this.dataObj.name).fontSize(30)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上示例，给对应的类增加了@Observed装饰器后，list[0]已经是Proxy类型了，这样再次赋值时，相同的对象，就不会触发刷新。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["方法二：使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-gettarget",
        children: "UIUtils.getTarget()"
      }), "获取原始对象"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nclass DataObj {\n  public name: string = 'default name';\n\n  constructor(name: string) {\n    this.name = name;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  list: DataObj[] = [new DataObj('a'), new DataObj('b'), new DataObj('c')];\n  @State dataObjFromList: DataObj = this.list[0];\n\n  build() {\n    Column() {\n      ConsumerChild({ dataObj: this.dataObjFromList })\n      Button('change to self').onClick(() => {\n        // 获取原始对象来和新值做对比\n        if (UIUtils.getTarget(this.dataObjFromList) !== this.list[0]) {\n          this.dataObjFromList = this.list[0];\n        }\n      })\n    }\n  }\n}\n\n@Component\nstruct ConsumerChild {\n  @Link @Watch('onDataObjChange') dataObj: DataObj;\n\n  onDataObjChange() {\n    hilog.info(0xFF00, 'testTag', '%{public}s', 'dataObj changed');\n  }\n\n  build() {\n    Column() {\n      Text(this.dataObj.name).fontSize(30)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上示例，在赋值前，使用getTarget获取了对应状态变量的原始对象，经过对比后，如果和当前对象一样，就不赋值，不触发刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "状态管理v2",
      children: "状态管理V2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在状态管理V2中，会给使用状态变量装饰器如@Trace、@Local装饰的Date、Map、Set、Array添加一层代理用于观测API调用产生的变化。当复杂类型常量重复赋值给状态变量时，可能会由于加了代理而判断为新旧值不相等，导致不必要的刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@ComponentV2\nstruct Index {\n  list: string[][] = [['a'], ['b'], ['c']];\n  @Local dataObjFromList: string[] = this.list[0];\n\n  @Monitor('dataObjFromList')\n  onStrChange(monitor: IMonitor) {\n    hilog.info(0xFF00, 'testTag', '%{public}s', 'dataObjFromList has changed');\n  }\n\n  build() {\n    Column() {\n      Button('change to self').onClick(() => {\n        // 新值和本地初始化的值相同\n        this.dataObjFromList = this.list[0];\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上示例每次点击Button('change to self')，把相同的Array类型常量赋值给一个Array类型的状态变量，都会触发刷新。这是因为当再次赋值list[0]时，dataObjFromList已经是Proxy类型，而list[0]是Array类型。由于类型不相等，会触发赋值和刷新。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了避免这种不必要的赋值和刷新，可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-gettarget",
        children: "UIUtils.getTarget()"
      }), "获取原始对象提前进行新旧值的判断，当两者相同时不执行赋值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用UIUtils.getTarget()方法示例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0000;\n\n@Entry\n@ComponentV2\nstruct Index {\n  list: string[][] = [['a'], ['b'], ['c']];\n  @Local dataObjFromList: string[] = this.list[0];\n\n  @Monitor('dataObjFromList')\n  onStrChange(monitor: IMonitor) {\n    hilog.info(DOMAIN, 'testTag', '%{public}s', 'dataObjFromList has changed');\n  }\n\n  build() {\n    Column() {\n      Button('change to self').onClick(() => {\n        // 获取原始对象来和新值做对比\n        if (UIUtils.getTarget(this.dataObjFromList) !== this.list[0]) {\n          this.dataObjFromList = this.list[0];\n        }\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "子组件无需修改状态变量时使用prop导致不必要的深拷贝",
      children: "子组件无需修改状态变量时，使用@Prop导致不必要的深拷贝"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在应用开发中，父组件常向子组件传值。如果子组件不需要修改该状态变量，子组件使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop",
        children: "@Prop"
      }), "装饰器会增加组件创建时间并影响性能，此时建议改用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
        children: "@ObjectLink"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Observed\nclass DeepReMyClass {\n  public num: number = 0;\n\n  constructor(num: number) {\n    this.num = num;\n  }\n}\n\n@Component\nstruct DeepRePropChild {\n  @Prop testClass: DeepReMyClass; // @Prop装饰状态变量会深拷贝。\n\n  build() {\n    Text(`PropChild testNum ${this.testClass.num}`)\n  }\n}\n\n@Entry\n@Component\nstruct DeepReParent {\n  @State testClass: DeepReMyClass[] = [new DeepReMyClass(1)];\n\n  build() {\n    Column() {\n      Text(`DeepReParent testNum ${this.testClass[0].num}`)\n        .onClick(() => {\n          this.testClass[0].num += 1;\n        })\n\n      // DeepRePropChild没有改变@Prop testClass: DeepReMyClass的值，所以这时最优的选择是使用@ObjectLink。\n      DeepRePropChild({ testClass: this.testClass[0] })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在以上示例中，DeepRePropChild组件没有改变@Prop testClass: MyClass的值，因此使用@ObjectLink更为合适。因为@Prop会深拷贝数据带来性能开销，所以@ObjectLink是比@Prop更优的选择。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Observed\nclass MyClass {\n  public num: number = 0;\n\n  constructor(num: number) {\n    this.num = num;\n  }\n}\n\n@Component\nstruct PropChild {\n  @ObjectLink testClass: MyClass; // @ObjectLink装饰状态变量不会深拷贝。\n\n  build() {\n    Text(`PropChild testNum ${this.testClass.num}`)\n  }\n}\n\n@Entry\n@Component\nstruct Parent {\n  @State testClass: MyClass[] = [new MyClass(1)];\n\n  build() {\n    Column() {\n      Text(`Parent testNum ${this.testClass[0].num}`)\n        .onClick(() => {\n          this.testClass[0].num += 1;\n        })\n\n      // 当子组件不需要本地修改状态时，应优先使用@ObjectLink，因为@Prop会执行深拷贝并带来性能开销，此时@ObjectLink是比@Link和@Prop更优的选择。\n      PropChild({ testClass: this.testClass[0] })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "状态变量关联的组件数过多导致性能下降",
      children: "状态变量关联的组件数过多导致性能下降"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["建议每个状态变量关联的组件数少于20个。精准控制状态变量关联的组件数量可减少不必要的组件刷新，提升刷新效率。有时开发者会将同一状态变量绑定于多个同级组件属性，状态变化时将导致这些组件同步更新，产生不必要的刷新，当组件复杂度较高时会显著影响整体性能。相反，将该状态变量绑定在这些组件的父组件上，可以减少需要刷新的组件数，提高性能。在应用开发中，可以通过HiDumper查看状态变量关联的组件数。具体可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony/docs/blob/master/zh-cn/application-dev/performance/state_variable_dfx_pratice.md",
        children: "状态变量组件定位工具实践"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Observed\nclass Translate {\n  public translateX: number = 20;\n}\n\n@Component\nstruct Title {\n  @ObjectLink translateObj: Translate;\n\n  build() {\n    Row() {\n      // $r('app.media.background')需要替换为开发者所需的资源文件。\n      Image($r('app.media.background'))\n        .width(50)\n        .height(50)\n        .translate({\n          x: this.translateObj.translateX // this.translateObj.translateX 绑定在Image和Text组件上。\n        })\n      Text('Title')\n        .fontSize(20)\n        .translate({\n          x: this.translateObj.translateX\n        })\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Page {\n  @State translateObj: Translate = new Translate();\n\n  build() {\n    Column() {\n      Title({\n        translateObj: this.translateObj\n      })\n      Stack() {\n      }\n      .backgroundColor('black')\n      .width(200)\n      .height(400)\n      .translate({\n        x: this.translateObj.translateX // this.translateObj.translateX 绑定在Stack和Button组件上。\n      })\n      Button('move')\n        .translate({\n          x: this.translateObj.translateX\n        })\n        .onClick(() => {\n          this.getUIContext().animateTo({\n            duration: 50\n          }, () => {\n            this.translateObj.translateX = (this.translateObj.translateX + 50) % 150;\n          });\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上面的示例中，状态变量this.translateObj.translateX被用在多个同级的子组件下，当this.translateObj.translateX变化时，会导致所有关联它的组件一起刷新，但实际上由于这些组件的变化是相同的，因此可以将这个属性绑定到他们共同的父组件上，来实现减少组件的刷新数量。经过分析，所有子组件均位于Page组件的Column下，因此将所有子组件相同的translate属性统一到Column上，来实现精准控制状态变量关联的组件数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Observed\nclass PageTranslate {\n  public translateX: number = 20;\n}\n\n@Component\nstruct PageTitle {\n  build() {\n    Row() {\n      // $r('app.media.background')需要替换为开发者所需的图像资源文件。\n      Image($r('app.media.background'))\n        .width(50)\n        .height(50)\n      Text('Title')\n        .fontSize(20)\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Page1 {\n  @State translateObj: PageTranslate = new PageTranslate();\n\n  build() {\n    Column() {\n      PageTitle()\n      Stack() {\n      }\n      .backgroundColor('black')\n      .width(200)\n      .height(400)\n      Button('move')\n        .onClick(() => {\n          this.getUIContext().animateTo({\n            duration: 50\n          }, () => {\n            this.translateObj.translateX = (this.translateObj.translateX + 50) % 150;\n          });\n        })\n    }\n    .translate({\n      // 子组件Stack和Button设置了同一个translate属性，可以统一到Column上设置。\n      x: this.translateObj.translateX\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在forwhile等循环逻辑中频繁读取状态变量导致性能下降",
      children: "在for、while等循环逻辑中频繁读取状态变量导致性能下降"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用开发中，应避免在循环逻辑中频繁读取状态变量，而是应该放在循环外面读取。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = '';\n\n  build() {\n    Column() {\n      Button('Click to print log')\n        .onClick(() => {\n          for (let i = 0; i < 10; i++) {\n            hilog.info(0x0000, 'TAG', '%{public}s', this.message);\n          }\n        })\n        .width('90%')\n        .backgroundColor(Color.Blue)\n        .fontColor(Color.White)\n        .margin({\n          top: 10\n        })\n    }\n    .justifyContent(FlexAlign.Start)\n    .alignItems(HorizontalAlign.Center)\n    .margin({\n      top: 15\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = '';\n\n  build() {\n    Column() {\n      Button('Click to print log')\n        .onClick(() => {\n          let logMessage: string = this.message;\n          for (let i = 0; i < 10; i++) {\n            hilog.info(0x0000, 'TAG', '%{public}s', logMessage);\n          }\n        })\n        .width('90%')\n        .backgroundColor(Color.Blue)\n        .fontColor(Color.White)\n        .margin({\n          top: 10\n        })\n    }\n    .justifyContent(FlexAlign.Start)\n    .alignItems(HorizontalAlign.Center)\n    .margin({\n      top: 15\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "频繁修改状态变量导致性能下降",
      children: "频繁修改状态变量导致性能下降"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用开发中，应尽量减少对状态变量的直接赋值，通过临时变量完成数据计算操作。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["状态变量发生变化时，ArkUI会查询依赖该状态变量的组件并执行该组件的更新方法，完成组件渲染。通过使用临时变量的计算代替直接操作状态变量，可以使ArkUI仅在最后一次状态变量变更时查询并渲染组件，减少不必要的操作，从而提高应用性能。状态变量行为可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
        children: "@State装饰器：组件内状态"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hiTraceMeter } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = '';\n\n  appendMsg(newMsg: string) {\n    // 性能打点\n    hiTraceMeter.startTrace('StateVariable', 1);\n    this.message += newMsg;\n    this.message += ';';\n    this.message += '<br/>';\n    hiTraceMeter.finishTrace('StateVariable', 1);\n  }\n\n  build() {\n    Column() {\n      Button('Click to print log')\n        .onClick(() => {\n          this.appendMsg('Operating state variable');\n        })\n        .width('90%')\n        .backgroundColor(Color.Blue)\n        .fontColor(Color.White)\n        .margin({\n          top: 10\n        })\n    }\n    .justifyContent(FlexAlign.Start)\n    .alignItems(HorizontalAlign.Center)\n    .margin({\n      top: 15\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["直接操作状态变量，三次触发计算函数，运行", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/ui-debug-optimize/ui-inspector-profiler#trace%E8%B0%83%E8%AF%95%E8%83%BD%E5%8A%9B",
        children: "耗时"
      }), "结果如下："]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(605761)/* ["default"] */.A) + "",
        width: "1502",
        height: "479"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hiTraceMeter } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = '';\n\n  appendMsg(newMsg: string) {\n    // 性能打点。\n    hiTraceMeter.startTrace('TemporaryVariable', 2);\n    let message = this.message;\n    message += newMsg;\n    message += ';';\n    message += '<br/>';\n    this.message = message;\n    hiTraceMeter.finishTrace('TemporaryVariable', 2);\n  }\n\n  build() {\n    Column() {\n      Button('Click to print log')\n        .onClick(() => {\n          this.appendMsg('Operating temporary variable');\n        })\n        .width('90%')\n        .backgroundColor(Color.Blue)\n        .fontColor(Color.White)\n        .margin({\n          top: 10\n        })\n    }\n    .justifyContent(FlexAlign.Start)\n    .alignItems(HorizontalAlign.Center)\n    .margin({\n      top: 15\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用临时变量取代状态变量的计算，三次触发计算函数，运行耗时结果如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(801112)/* ["default"] */.A) + "",
        width: "1505",
        height: "461"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【总结】"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "计算方式"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "耗时(局限不同设备和场景，数据仅供参考)"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "直接操作状态变量"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.01ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "增加了ArkUI不必要的查询和渲染行为，导致性能劣化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "使用临时变量计算"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.63ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "减少了ArkUI不必要的行为，优化性能。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用lazyforeach的重建机制刷新ui导致性能下降",
      children: "使用LazyForEach的重建机制刷新UI导致性能下降"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发过程中通常会将", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-lazyforeach",
        children: "LazyForEach"
      }), "和状态变量结合起来使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN_NUMBER: number = 0XFF00;\nconst TAG: string = '[Sample_StateManagement]';\n\nclass BasicDataSource implements IDataSource {\n  private listeners: DataChangeListener[] = [];\n  private originDataArray: StringData[] = [];\n\n  public totalCount(): number {\n    return 0;\n  }\n\n  public getData(index: number): StringData {\n    return this.originDataArray[index];\n  }\n\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      hilog.info(DOMAIN_NUMBER, TAG, 'add listener');\n      this.listeners.push(listener);\n    }\n  }\n\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      hilog.info(DOMAIN_NUMBER, TAG, 'remove listener');\n      this.listeners.splice(pos, 1);\n    }\n  }\n\n  notifyDataReload(): void {\n    this.listeners.forEach(listener => {\n      listener.onDataReloaded();\n    })\n  }\n\n  notifyDataAdd(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index);\n    })\n  }\n\n  notifyDataChange(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataChange(index);\n    })\n  }\n\n  notifyDataDelete(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataDelete(index);\n    })\n  }\n\n  notifyDataMove(from: number, to: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataMove(from, to);\n    })\n  }\n}\n\nclass MyDataSource extends BasicDataSource {\n  private dataArray: StringData[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): StringData {\n    return this.dataArray[index];\n  }\n\n  public addData(index: number, data: StringData): void {\n    this.dataArray.splice(index, 0, data);\n    this.notifyDataAdd(index);\n  }\n\n  public pushData(data: StringData): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n\n  public reloadData(): void {\n    this.notifyDataReload();\n  }\n}\n\nclass StringData {\n  public message: string;\n  public imgSrc: Resource;\n\n  constructor(message: string, imgSrc: Resource) {\n    this.message = message;\n    this.imgSrc = imgSrc;\n  }\n}\n\n@Entry\n@Component\nstruct MyComponent {\n  private data: MyDataSource = new MyDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i <= 9; i++) {\n      // 此处'app.media.icon'仅作示例，请开发者自行替换，否则imageSource创建失败会导致后续无法正常执行。\n      this.data.pushData(new StringData(`Click to add ${i}`, $r('app.media.icon')));\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      LazyForEach(this.data, (item: StringData, index: number) => {\n        ListItem() {\n          Column() {\n            Text(item.message).fontSize(20)\n              .onAppear(() => {\n                hilog.info(DOMAIN_NUMBER, TAG, 'text appear:' + item.message);\n              })\n            Image(item.imgSrc)\n              .width(100)\n              .height(100)\n              .onAppear(() => {\n                hilog.info(DOMAIN_NUMBER, TAG, 'image appear');\n              })\n          }.margin({ left: 10, right: 10 })\n        }\n        .onClick(() => {\n          item.message += '0';\n          this.data.reloadData();\n        })\n      }, (item: StringData, index: number) => JSON.stringify(item))\n    }.cachedCount(5)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述代码运行效果如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(381050)/* ["default"] */.A) + "",
        width: "1720",
        height: "808"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以观察到在点击更改message之后，图片“闪烁”了一下，同时输出了组件的onAppear日志，这说明组件进行了重建。这是因为在更改message之后，导致LazyForEach中这一项的key值发生了变化，使得LazyForEach在reloadData的时候将这一项ListItem进行了重建。Text组件仅仅更改显示的内容却发生了重建，而不是更新。而尽管Image组件没有需要重新绘制的内容，但是因为触发LazyForEach的重建，会使得同样位于ListItem下的Image组件重新创建。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前LazyForEach与状态变量都能触发UI的刷新，两者的性能开销是不一样的。使用LazyForEach刷新会对组件进行重建，如果包含了多个组件，则会产生比较大的性能开销。使用状态变量刷新会对组件进行刷新，具体到状态变量关联的组件上，相对于LazyForEach的重建来说，范围更小更精确。因此，推荐使用状态变量来触发LazyForEach中的组件刷新，这就需要使用自定义组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN_NUMBER: number = 0XFF00;\nconst TAG: string = '[Sample_StateManagement]';\n\nclass BasicDataSource implements IDataSource {\n  private listeners: DataChangeListener[] = [];\n  private originDataArray: StringData[] = [];\n\n  public totalCount(): number {\n    return 0;\n  }\n\n  public getData(index: number): StringData {\n    return this.originDataArray[index];\n  }\n\n  registerDataChangeListener(listener: DataChangeListener): void {\n    if (this.listeners.indexOf(listener) < 0) {\n      hilog.info(DOMAIN_NUMBER, TAG, 'add listener');\n      this.listeners.push(listener);\n    }\n  }\n\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n    const pos = this.listeners.indexOf(listener);\n    if (pos >= 0) {\n      hilog.info(DOMAIN_NUMBER, TAG, 'remove listener');\n      this.listeners.splice(pos, 1);\n    }\n  }\n\n  notifyDataReload(): void {\n    this.listeners.forEach(listener => {\n      listener.onDataReloaded();\n    })\n  }\n\n  notifyDataAdd(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataAdd(index);\n    })\n  }\n\n  notifyDataChange(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataChange(index);\n    })\n  }\n\n  notifyDataDelete(index: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataDelete(index);\n    })\n  }\n\n  notifyDataMove(from: number, to: number): void {\n    this.listeners.forEach(listener => {\n      listener.onDataMove(from, to);\n    })\n  }\n}\n\nclass MyDataSource extends BasicDataSource {\n  private dataArray: StringData[] = [];\n\n  public totalCount(): number {\n    return this.dataArray.length;\n  }\n\n  public getData(index: number): StringData {\n    return this.dataArray[index];\n  }\n\n  public addData(index: number, data: StringData): void {\n    this.dataArray.splice(index, 0, data);\n    this.notifyDataAdd(index);\n  }\n\n  public pushData(data: StringData): void {\n    this.dataArray.push(data);\n    this.notifyDataAdd(this.dataArray.length - 1);\n  }\n}\n\n@Observed\nclass StringData {\n  @Track public message: string;\n  @Track public imgSrc: Resource;\n\n  constructor(message: string, imgSrc: Resource) {\n    this.message = message;\n    this.imgSrc = imgSrc;\n  }\n}\n\n@Entry\n@Component\nstruct MyComponent {\n  @State data: MyDataSource = new MyDataSource();\n\n  aboutToAppear() {\n    for (let i = 0; i <= 9; i++) {\n      // 此处'app.media.icon'仅作示例，请开发者自行替换，否则imageSource创建失败会导致后续无法正常执行。\n      this.data.pushData(new StringData(`Click to add ${i}`, $r('app.media.icon')));\n    }\n  }\n\n  build() {\n    List({ space: 3 }) {\n      LazyForEach(this.data, (item: StringData, index: number) => {\n        ListItem() {\n          ChildComponent({ data: item })\n        }\n        .onClick(() => {\n          item.message += '0';\n        })\n      }, (item: StringData, index: number) => index.toString())\n    }.cachedCount(5)\n  }\n}\n\n@Component\nstruct ChildComponent {\n  @ObjectLink data: StringData;\n\n  build() {\n    Column() {\n      Text(this.data.message).fontSize(20)\n        .onAppear(() => {\n          hilog.info(DOMAIN_NUMBER, TAG, 'text appear:' + this.data.message);\n        })\n      Image(this.data.imgSrc)\n        .width(100)\n        .height(100)\n    }.margin({ left: 10, right: 10 })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述代码运行效果如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(398571)/* ["default"] */.A) + "",
        width: "1905",
        height: "901"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以观察到UI能够正常刷新，图片没有“闪烁”，且没有输出日志信息，说明没有对Text组件和Image组件进行重建。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["这是因为使用自定义组件之后，可以通过@Observed和@ObjectLink配合去直接更改自定义组件内的状态变量实现刷新，而不需要利用LazyForEach进行重建。使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-data-object-state-management/arkts-track",
        children: "@Track装饰器"
      }), "分别装饰StringData类型中的message和imgSrc属性可以使更新范围进一步缩小到指定的Text组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "foreach和对象数组结合使用导致ui不刷新",
      children: "ForEach和对象数组结合使用导致UI不刷新"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发过程中经常会使用对象数组和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-foreach",
        children: "ForEach"
      }), "结合起来使用，但是写法不当的话会出现UI不刷新的情况。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN_NUMBER: number = 0XFF00;\nconst TAG: string = '[Sample_StateManagement]';\n\n@Observed\nclass StyleList extends Array<TextStyles> {\n}\n\n@Observed\nclass TextStyles {\n  public fontSize: number;\n\n  constructor(fontSize: number) {\n    this.fontSize = fontSize;\n  }\n}\n\n@Entry\n@Component\nstruct Page {\n  @State styleList: StyleList = new StyleList();\n\n  aboutToAppear() {\n    for (let i = 15; i < 50; i++) {\n      this.styleList.push(new TextStyles(i));\n    }\n  }\n\n  build() {\n    Column() {\n      Text('Font Size List')\n        .fontSize(50)\n        .onClick(() => {\n          for (let i = 0; i < this.styleList.length; i++) {\n            this.styleList[i].fontSize++;\n          }\n          hilog.info(DOMAIN_NUMBER, TAG, 'change font size');\n        })\n      List() {\n        ForEach(this.styleList, (item: TextStyles) => {\n          ListItem() {\n            Text('Hello World')\n              .fontSize(item.fontSize)\n          }\n        })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述代码运行效果如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(865749)/* ["default"] */.A) + "",
        width: "1905",
        height: "901"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于ForEach中生成的item是一个常量，因此当点击改变item中的内容时，没有办法观测到UI刷新，尽管日志表明item的值已改变（这体现在打印了“change font size”的日志）。因此，需要使用自定义组件，配合@ObjectLink来实现观测的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN_NUMBER: number = 0XFF00;\nconst TAG: string = '[Sample_StateManagement]';\n\n@Observed\nclass StyleList extends Array<TextStyles> {\n}\n\n@Observed\nclass TextStyles {\n  public fontSize: number;\n\n  constructor(fontSize: number) {\n    this.fontSize = fontSize;\n  }\n}\n\n@Component\nstruct TextComponent {\n  @ObjectLink textStyle: TextStyles;\n\n  build() {\n    Text('Hello World')\n      .fontSize(this.textStyle.fontSize)\n  }\n}\n\n@Entry\n@Component\nstruct Page {\n  @State styleList: StyleList = new StyleList();\n\n  aboutToAppear() {\n    for (let i = 15; i < 50; i++) {\n      this.styleList.push(new TextStyles(i));\n    }\n  }\n\n  build() {\n    Column() {\n      Text('Font Size List')\n        .fontSize(50)\n        .onClick(() => {\n          for (let i = 0; i < this.styleList.length; i++) {\n            this.styleList[i].fontSize++;\n          }\n          hilog.info(DOMAIN_NUMBER, TAG, 'change font size');\n        })\n      List() {\n        ForEach(this.styleList, (item: TextStyles) => {\n          ListItem() {\n            TextComponent({ textStyle: item })\n          }\n        })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述代码的运行效果如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(54827)/* ["default"] */.A) + "",
        width: "1905",
        height: "901"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用@ObjectLink接受传入的item后，使得TextComponent组件内的textStyle变量具有了被观测的能力。在父组件更改styleList中的值时，由于@ObjectLink是引用传递，所以会观测到styleList每一个数据项的地址指向的对应item的fontSize的值被改变，因此触发UI的刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这是一个较为实用的使用状态管理进行刷新的开发方式。"
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
605761(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797984-5eca1a4eb64219a610e2286e8f457e17.png");

},
398571(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477635-54fe6aaf1917d4738b8dbb72160b7328.gif");

},
865749(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797986-35462026607c4b9aeecd3f85ff51a227.gif");

},
801112(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437679-35fae1c05486ec7d53f860bff9203c34.png");

},
82233(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
381050(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957634-aeecb00cbb34a2ceeb90079ef3d74ebd.gif");

},
54827(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437681-f129e76126beffb5ab8c8b213d8c080e.gif");

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