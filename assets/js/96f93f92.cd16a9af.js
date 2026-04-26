"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["126608"], {
52684(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_uiutils_arkts_new_gettarget_arkts_new_gettarget_md_96f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-state-management-uiutils-arkts-new-gettarget-arkts-new-gettarget-md-96f.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_uiutils_arkts_new_gettarget_arkts_new_gettarget_md_96f_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-gettarget/arkts-new-gettarget","title":"getTarget接口：获取状态管理框架代理前的原始对象","description":"为了获取状态管理框架代理前的原始对象，开发者可以使用getTarget接口。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-gettarget/arkts-new-gettarget.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-gettarget","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-gettarget/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-gettarget/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"getTarget接口：获取状态管理框架代理前的原始对象","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-gettarget","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"PersistenceV2: 持久化存储UI状态","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-application-state/arkts-new-persistencev2/"},"next":{"title":"makeObserved接口：将非观察数据变为可观察数据","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-makeobserved/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-gettarget/arkts-new-gettarget.md


const frontMatter = {
	title: 'getTarget接口：获取状态管理框架代理前的原始对象',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-gettarget',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'getTarget接口：获取状态管理框架代理前的原始对象';

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
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "获取状态管理V1代理前的原始对象",
  "id": "获取状态管理v1代理前的原始对象",
  "level": 3
}, {
  "value": "获取状态管理V2代理前的原始对象",
  "id": "获取状态管理v2代理前的原始对象",
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
        id: "gettarget接口获取状态管理框架代理前的原始对象",
        children: "getTarget接口：获取状态管理框架代理前的原始对象"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了获取状态管理框架代理前的原始对象，开发者可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#gettarget",
        children: "getTarget接口"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在阅读本文档前，建议提前阅读：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
        children: "@Observed"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
        children: "@ObservedV2"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(870813)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始，开发者可以使用UIUtils中的getTarget接口获取状态管理框架代理前的原始对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "状态管理框架会对class、Date、Map、Set、Array类型的原始对象添加代理，用于观测属性变化与API调用。这一层代理会使得变量类型改变，在类型判断、NAPI调用等场景，会由于类型并非原始对象的类型产生预料之外的结果。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用getTarget接口需要导入UIUtils工具。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIUtils } from '@kit.ArkUI';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["状态管理V1中，会给@Observed装饰的类对象以及使用状态变量装饰器如", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
            children: "@State"
          }), "装饰的class、Date、Map、Set、Array添加一层代理用于观测一层属性或API调用产生的变化。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["状态管理V2中，会给使用状态变量装饰器如", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
            children: "@Trace"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local",
            children: "@Local"
          }), "装饰的Date、Map、Set、Array添加一层代理用于观测API调用产生的变化。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用getTarget接口可以获取这些代理对象的原始对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制条件",
      children: "限制条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "getTarget仅支持对象类型传参。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIUtils } from '@kit.ArkUI';\nlet resNumber = UIUtils.getTarget(2); // 非对象类型入参，编译时报错\nlet resObject = UIUtils.getTarget(2 as Object); // 非对象类型入参，绕过编译拦截，直接返回传入值，错误用法\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIUtils } from '@kit.ArkUI';\n@Observed\nclass Info {\n  public name: string = 'Tom';\n}\nlet info: Info = new Info();\nlet rawInfo: Info = UIUtils.getTarget(info); // 正确用法\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "更改getTarget获取的原始对象中的内容不会被观察到变化，也不会触发UI刷新。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIUtils } from '@kit.ArkUI';\n@Observed\nclass Info {\n  public name: string = 'Tom';\n}\n@Entry\n@Component\nstruct GetTargetObject {\n  @State info: Info = new Info();\n\n  build() {\n    Column() {\n      Text(`info.name: ${this.info.name}`)\n      Button('Change Proxy Object Properties')\n        .onClick(() => {\n          this.info.name = 'Alice'; // Text组件能够刷新\n        })\n      Button('Change Original Object Properties')\n        .onClick(() => {\n          let rawInfo: Info = UIUtils.getTarget(this.info);\n          rawInfo.name = 'Bob'; // Text组件不能刷新\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取状态管理v1代理前的原始对象",
      children: "获取状态管理V1代理前的原始对象"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "状态管理V1有两种场景会给对象增加代理："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【1】@Observed装饰的类实例。在创建@Observed装饰的类实例时，会给该实例添加代理。该过程发生在new对象的过程中，以下示例中，没有被@Observed装饰的类是不被代理的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Observed\nclass ObservedClass {\n  public name: string = 'Tom';\n}\nclass NonObservedClass {\n  public name: string = 'Tom';\n}\nlet observedClass: ObservedClass = new ObservedClass(); // 被代理\nlet nonObservedClass: NonObservedClass = new NonObservedClass(); // 不被代理\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["【2】状态变量装饰器装饰的复杂类型对象。使用@State、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop",
        children: "@Prop"
      }), "等状态变量装饰器装饰Class、Map、Set、Date、Array时，会添加代理。若该对象已经是代理对象，则不会重复创建代理。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Observed\nclass ObservedClassOne {\n  public name: string = 'Tom';\n}\nclass NonObservedClassOne {\n  public name: string = 'Tom';\n}\nlet observedClass: ObservedClassOne = new ObservedClassOne(); // 被代理\nlet nonObservedClass: NonObservedClassOne = new NonObservedClassOne(); // 不被代理\n@Entry\n@Component\nstruct GetTargetNoChange {\n  @State observedObject: ObservedClassOne = observedClass; // 已被代理数据不会重复创建代理\n  @State nonObservedObject: NonObservedClassOne = nonObservedClass; // 创建代理\n  @State numberList: number[] = [1, 2, 3]; // Array类型创建代理\n  @State sampleMap: Map<number, string> = new Map([[0, 'a'], [1, 'b'], [3, 'c']]); // Map类型创建代理\n  @State sampleSet: Set<number> = new Set([0, 1, 2, 3, 4]); // Set类型创建代理\n  @State sampleDate: Date = new Date(); // Date类型创建代理\n\n  build() {\n    Column() {\n      Text(`this.observedObject === observedClass: ${this.observedObject === observedClass}`) // true\n      Text(`this.nonObservedObject === nonObservedClass: ${this.nonObservedObject === nonObservedClass}`) // false\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用UIUtils.getTarget接口可以获取代理前的原始对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n@Observed\nclass ObservedClass {\n  public name: string = 'Tom';\n}\nclass NonObservedClass {\n  public name: string = 'Tom';\n}\nlet observedClass: ObservedClass = new ObservedClass(); // 被代理\nlet nonObservedClass: NonObservedClass = new NonObservedClass(); // 不被代理\nlet globalNumberList: number[] = [1, 2, 3]; // 不被代理\nlet globalSampleMap: Map<number, string> = new Map([[0, 'a'], [1, 'b'], [3, 'c']]); // 不被代理\nlet globalSampleSet: Set<number> = new Set([0, 1, 2, 3, 4]); // 不被代理\nlet globalSampleDate: Date = new Date(); // 不被代理\n@Entry\n@Component\nstruct GetTargetAgent {\n  @State observedObject: ObservedClass = observedClass; // 已被代理数据不会重复创建代理\n  @State nonObservedObject: NonObservedClass = nonObservedClass; // 创建代理\n  @State numberList: number[] = globalNumberList; // Array类型创建代理\n  @State sampleMap: Map<number, string> = globalSampleMap; // Map类型创建代理\n  @State sampleSet: Set<number> = globalSampleSet; // Set类型创建代理\n  @State sampleDate: Date = globalSampleDate; // Date类型创建代理\n\n  build() {\n    Column() {\n      Text(`this.observedObject === observedClass: ${this.observedObject ===\n        observedClass}`) // true\n      Text(`UIUtils.getTarget(this.nonObservedObject) === nonObservedClass: ${UIUtils.getTarget(this.nonObservedObject) ===\n        nonObservedClass}`) // true\n      Text(`UIUtils.getTarget(this.numberList) === globalNumberList: ${UIUtils.getTarget(this.numberList) ===\n        globalNumberList}`) // true\n      Text(`UIUtils.getTarget(this.sampleMap) === globalSampleMap: ${UIUtils.getTarget(this.sampleMap) ===\n        globalSampleMap}`) // true\n      Text(`UIUtils.getTarget(this.sampleSet) === globalSampleSet: ${UIUtils.getTarget(this.sampleSet) ===\n        globalSampleSet}`) // true\n      Text(`UIUtils.getTarget(this.sampleDate) === globalSampleDate: ${UIUtils.getTarget(this.sampleDate) ===\n        globalSampleDate}`) // true\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "获取状态管理v2代理前的原始对象",
      children: "获取状态管理V2代理前的原始对象"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "状态管理V2会给状态变量装饰器如@Trace、@Local装饰的Map、Set、Date、Array添加一层代理。和V1不同的是，状态管理V2不会对类对象实例进行代理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass ObservedClassTwo {\n  @Trace public name: string = 'Tom';\n}\nlet globalObservedObject: ObservedClassTwo = new ObservedClassTwo(); // 不被代理\nlet globalNumberList: number[] = [1, 2, 3]; // 不被代理\nlet globalSampleMap: Map<number, string> = new Map([[0, 'a'], [1, 'b'], [3, 'c']]); // 不被代理\nlet globalSampleSet: Set<number> = new Set([0, 1, 2, 3, 4]); // 不被代理\nlet globalSampleDate: Date = new Date(); // 不被代理\n@Entry\n@ComponentV2\nstruct GetAgentObject {\n  @Local observedObject: ObservedClassTwo = globalObservedObject; // V2中对象不被代理\n  @Local numberList: number[] = globalNumberList; // Array类型创建代理\n  @Local sampleMap: Map<number, string> = globalSampleMap; // Map类型创建代理\n  @Local sampleSet: Set<number> = globalSampleSet; // Set类型创建代理\n  @Local sampleDate: Date = globalSampleDate; // Date类型创建代理\n\n  build() {\n    Column() {\n      Text(`this.observedObject === globalObservedObject ${this.observedObject === globalObservedObject}`) // true\n      Text(`this.numberList === globalNumberList ${this.numberList === globalNumberList}`) // false\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用UIUtils.getTarget接口可以获取代理前的原始对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n@ObservedV2\nclass ObservedClassThree {\n  @Trace public name: string = 'Tom';\n}\nlet globalObservedObject: ObservedClassThree = new ObservedClassThree(); // 不被代理\nlet globalNumberList: number[] = [1, 2, 3]; // 不被代理\nlet globalSampleMap: Map<number, string> = new Map([[0, 'a'], [1, 'b'], [3, 'c']]); // 不被代理\nlet globalSampleSet: Set<number> = new Set([0, 1, 2, 3, 4]); // 不被代理\nlet globalSampleDate: Date = new Date(); // 不被代理\n@Entry\n@ComponentV2\nstruct GetBeforeAgent {\n  @Local observedObject: ObservedClassThree = globalObservedObject; // V2中对象不被代理\n  @Local numberList: number[] = globalNumberList; // Array类型创建代理\n  @Local sampleMap: Map<number, string> = globalSampleMap; // Map类型创建代理\n  @Local sampleSet: Set<number> = globalSampleSet; // Set类型创建代理\n  @Local sampleDate: Date = globalSampleDate; // Date类型创建代理\n\n  build() {\n    Column() {\n      Text(`this.observedObject === globalObservedObject ${this.observedObject ===\n        globalObservedObject}`) // true\n      Text(`UIUtils.getTarget(this.numberList) === globalNumberList: ${UIUtils.getTarget(this.numberList) ===\n        globalNumberList}`) // true\n      Text(`UIUtils.getTarget(this.sampleMap) === globalSampleMap: ${UIUtils.getTarget(this.sampleMap) ===\n        globalSampleMap}`) // true\n      Text(`UIUtils.getTarget(this.sampleSet) === globalSampleSet: ${UIUtils.getTarget(this.sampleSet) ===\n        globalSampleSet}`) // true\n      Text(`UIUtils.getTarget(this.sampleDate) === globalSampleDate: ${UIUtils.getTarget(this.sampleDate) ===\n        globalSampleDate}`) // true\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "状态管理V2装饰器会为装饰的变量生成getter和setter方法，同时为原有变量名添加\"__ob_\"的前缀。出于性能考虑，getTarget接口不会对V2装饰器生成的前缀进行处理，因此向getTarget接口传入@ObservedV2装饰的类对象实例时，返回的对象依旧为对象本身，且被@Trace装饰的属性名仍有\"__ob_\"前缀。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该前缀会导致某些NAPI接口无法按预期处理对象的属性，以下面的对象为例，目前已知影响的NAPI接口如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass Info {\n  @Trace public name: string = 'Tom';\n  @Trace public age: number = 24;\n}\nlet info: Info = new Info(); // NAPI接口传入info实例\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "影响接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "影响结果"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-property#napi_get_property_names",
              children: "napi_get_property_names"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回值为\"__ob_name\"，\"__ob_age\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-property#napi_set_property",
              children: "napi_set_property"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用\"name\"，\"__ob_name\"均能赋值成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-property#napi_get_property",
              children: "napi_get_property"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用\"name\"，\"__ob_name\"均能获取到值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-property#napi_has_property",
              children: "napi_has_property"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用\"name\"，\"__ob_name\"均返回true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-property#napi_delete_property",
              children: "napi_delete_property"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除属性时需要加上\"__ob_\"前缀才能删除成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-property#napi_has_own_property",
              children: "napi_has_own_property"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用\"name\"，\"__ob_name\"均返回true。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-property#napi_set_named_property",
              children: "napi_set_named_property"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用\"name\"，\"__ob_name\"均能赋值成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-property#napi_get_named_property",
              children: "napi_get_named_property"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用\"name\"，\"__ob_name\"均能获取到值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-property#napi_has_named_property",
              children: "napi_has_named_property"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用\"name\"，\"__ob_name\"均返回true。"
          })]
        })]
      })]
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
870813(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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