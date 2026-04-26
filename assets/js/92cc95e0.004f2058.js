"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["62534"], {
476684(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_uiutils_arkts_new_makeobserved_arkts_new_makeobserved_md_92c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-state-management-uiutils-arkts-new-makeobserved-arkts-new-makeobserved-md-92c.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_uiutils_arkts_new_makeobserved_arkts_new_makeobserved_md_92c_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-makeobserved/arkts-new-makeobserved","title":"makeObserved接口：将非观察数据变为可观察数据","description":"为了将普通不可观察数据变为可观察数据，开发者可以使用makeObserved接口。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-makeobserved/arkts-new-makeobserved.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-makeobserved","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-makeobserved/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-makeobserved/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"makeObserved接口：将非观察数据变为可观察数据","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-makeobserved","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"getTarget接口：获取状态管理框架代理前的原始对象","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-gettarget/"},"next":{"title":"addMonitor/clearMonitor接口：动态添加/取消监听","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-addmonitor-clearmonitor/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-makeobserved/arkts-new-makeobserved.md


const frontMatter = {
	title: 'makeObserved接口：将非观察数据变为可观察数据',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-makeobserved',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'makeObserved接口：将非观察数据变为可观察数据';

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
  "value": "makeObserved仅对入参对象进行深度观察",
  "id": "makeobserved仅对入参对象进行深度观察",
  "level": 3
}, {
  "value": "支持类型和观察变化",
  "id": "支持类型和观察变化",
  "level": 2
}, {
  "value": "支持类型",
  "id": "支持类型",
  "level": 3
}, {
  "value": "观察变化",
  "id": "观察变化",
  "level": 3
}, {
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "makeObserved和@Sendable装饰的class配合使用",
  "id": "makeobserved和sendable装饰的class配合使用",
  "level": 3
}, {
  "value": "makeObserved和collections.Array/Set/Map配合使用",
  "id": "makeobserved和collectionsarraysetmap配合使用",
  "level": 3
}, {
  "value": "makeObserved的入参为JSON.parse的返回值",
  "id": "makeobserved的入参为jsonparse的返回值",
  "level": 3
}, {
  "value": "makeObserved和V2装饰器配合使用",
  "id": "makeobserved和v2装饰器配合使用",
  "level": 3
}, {
  "value": "makeObserved在@Component内使用",
  "id": "makeobserved在component内使用",
  "level": 3
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "getTarget后的数据可以正常赋值，但是无法触发UI刷新",
  "id": "gettarget后的数据可以正常赋值但是无法触发ui刷新",
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
        id: "makeobserved接口将非观察数据变为可观察数据",
        children: "makeObserved接口：将非观察数据变为可观察数据"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了将普通不可观察数据变为可观察数据，开发者可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-statemanagement/js-apis-statemanagement#makeobserved",
        children: "makeObserved接口"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["makeObserved可以在@Trace无法标记的情况下使用。在阅读本文档前，建议提前阅读：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
        children: "@Trace"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(782027)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始，开发者可以使用UIUtils中的makeObserved接口将普通不可观察数据变为可观察数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["状态管理框架已提供", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
            children: "@ObservedV2/@Trace"
          }), "用于观察类属性变化，makeObserved接口提供主要应用于@ObservedV2/@Trace无法涵盖的场景："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "class的定义在三方包中：开发者无法手动对class中需要观察的属性加上@Trace标签，可以使用makeObserved使得当前对象可以被观察。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["当前类的成员属性不能被修改：因为@Trace观察类属性会动态修改类的属性，这个行为在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable#sendable%E8%A3%85%E9%A5%B0%E5%99%A8",
              children: "@Sendable"
            }), "装饰的class中是不被允许的，此时可以使用makeObserved。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "interface或者JSON.parse返回的匿名对象：这类场景往往没有明确的class声明，开发者无法使用@Trace标记当前属性可以被观察，此时可以使用makeObserved。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用makeObserved接口需要导入UIUtils。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIUtils } from '@kit.ArkUI';\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制条件",
      children: "限制条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "makeObserved仅支持非空的对象类型传参。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "不支持undefined和null：返回自身，不做任何处理。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "非Object类型：编译拦截报错。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIUtils } from '@kit.ArkUI';\nlet res1 = UIUtils.makeObserved(2); // 非法类型入参，错误用法，编译报错\nlet res2 = UIUtils.makeObserved(undefined); // 非法类型入参，错误用法，返回自身，res2 === undefined\nlet res3 = UIUtils.makeObserved(null); // 非法类型入参，错误用法，返回自身，res3 === null\n\nclass Info {\n  id: number = 0;\n}\nlet rawInfo: Info = UIUtils.makeObserved(new Info()); // 正确用法\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["makeObserved不支持传入被", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
            children: "@ObservedV2"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
            children: "@Observed"
          }), "装饰的类的实例和被makeObserved封装过的代理数据。为了防止数据被双重代理，makeObserved发现入参为上述情况时则直接返回，不做处理。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIUtils } from '@kit.ArkUI';\n@ObservedV2\nclass Info {\n  @Trace id: number = 0;\n}\n// 错误用法：makeObserved发现传入的实例是@ObservedV2装饰的类的实例，则返回传入对象自身\nlet observedInfo: Info = UIUtils.makeObserved(new Info());\n\nclass Info2 {\n  id: number = 0;\n}\n// 正确用法：传入对象既不是@ObservedV2/@Observed装饰的类的实例，也不是makeObserved封装过的代理数据\n// 返回可观察数据\nlet observedInfo1: Info2 = UIUtils.makeObserved(new Info2());\n// 错误用法：传入对象为makeObserved封装过的代理数据，此次makeObserved不做处理\nlet observedInfo2: Info2 = UIUtils.makeObserved(observedInfo1);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["makeObserved可以用在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#component",
            children: "@Component"
          }), "装饰的自定义组件中，但不能和状态管理V1的状态变量装饰器配合使用，如果一起使用，则会抛出运行时异常。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 错误写法，运行时异常\n@State message: Info = UIUtils.makeObserved(new Info(20));\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注意：下面message2的写法不会抛异常。原因是："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["this.message是", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
              children: "@State"
            }), "装饰的，其实现等同于@Observed。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "UIUtils.makeObserved的入参如果是@Observed装饰的class的实例，会直接返回自身。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "因此message2的初始值不是makeObserved返回的代理对象，而是@State装饰的this.message。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { UIUtils } from '@kit.ArkUI';\nclass Person {\n  public age: number = 10;\n}\nclass Info {\n  public id: number = 0;\n  public person: Person = new Person();\n}\n@Entry\n@Component\nstruct Page1 {\n  @State message: Info = new Info();\n  @State message2: Info = UIUtils.makeObserved(this.message); // 不会抛异常\n  build() {\n    Column() {\n      Text(`${this.message2.person.age}`)\n        .onClick(() => {\n          // UI不会刷新，因为State只能观察到第一层的变化\n          this.message2.person.age++;\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "makeobserved仅对入参对象进行深度观察",
      children: "makeObserved仅对入参对象进行深度观察"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["message被", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local",
          children: "@Local"
        }), "装饰，本身具有观察自身赋值的能力。其初始值为makeObserved的返回值，具有深度观察能力。需要注意，makeObserved仅对message进行深度观察，而message自身赋值的变化，则是由@Local观察的。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击change id可以触发UI刷新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击change Info，将this.message重新赋值为不可观察数据后，再次点击change id，无法触发UI刷新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "再次点击change Info1，将this.message重新赋值为可观察数据，再次点击change id，可以触发UI刷新。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\nclass Info {\n  public id: number = 0;\n  constructor(id: number) {\n    this.id = id;\n  }\n}\n@Entry\n@ComponentV2\nstruct Page2 {\n  @Local message: Info = UIUtils.makeObserved(new Info(20));\n  build() {\n    Column() {\n      Button(`change id`).onClick(() => {\n        this.message.id++;\n      })\n      Button(`change Info ${this.message.id}`).onClick(() => {\n        this.message = new Info(30);\n      })\n      Button(`change Info1 ${this.message.id}`).onClick(() => {\n        this.message = UIUtils.makeObserved(new Info(30));\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持类型和观察变化",
      children: "支持类型和观察变化"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持类型",
      children: "支持类型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["支持未被", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
          children: "@Observed"
        }), "或", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
          children: "@ObservedV2"
        }), "装饰的类。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持Array、Map、Set和Date。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["支持", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-array/arkts-apis-arkts-collections-array",
          children: "collections.Array"
        }), ", ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-set/arkts-apis-arkts-collections-set",
          children: "collections.Set"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections-map/arkts-apis-arkts-collections-map",
          children: "collections.Map"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JSON.parse返回的Object。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Sendable装饰的类。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "观察变化",
      children: "观察变化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "makeObserved传入内置类型或collections类型的实例时，可以观测其API带来的变化："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "可观测变化的API"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Array"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "push、pop、shift、unshift、splice、copyWithin、fill、reverse、sort"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "collections.Array"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "push、pop、shift、unshift、splice、fill、reverse、sort、shrinkTo、extendTo"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Map/collections.Map"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "set、clear、delete"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Set/collections.Set"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "add、clear、delete"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Date"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "setFullYear、setMonth、setDate、setHours、setMinutes、setSeconds、setMilliseconds、setTime、setUTCFullYear、setUTCMonth、setUTCDate、setUTCHours、setUTCMinutes、setUTCSeconds、setUTCMilliseconds"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "makeobserved和sendable装饰的class配合使用",
      children: "makeObserved和@Sendable装饰的class配合使用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/interthread-communication/interthread-communication-object/sendable-object/arkts-sendable",
        children: "@Sendable"
      }), "主要是为了处理应用场景中的并发任务。将makeObserved和@Sendable配合使用，可以满足一般应用开发中，在子线程做大数据处理，在UI线程做ViewModel的显示和观察数据的需求。@Sendable具体内容可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-concurrency/multi-thread-concurrency-overview",
        children: "并发任务文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节将说明下面的场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "makeObserved在传入@Sendable类型的数据后有观察能力，且其变化可以触发UI刷新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从子线程中获取一个整体数据，然后对UI线程的可观察数据做整体替换。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从子线程获取的数据重新执行makeObserved，将数据变为可观察数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将数据从主线程传递回子线程时，仅传递不可观察的数据。makeObserved的返回值不可直接传给子线程。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例子如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Sendable\nexport class SendableData  {\n  public name: string = 'Tom';\n  public age: number = 20;\n  public gender: number = 1;\n  // ....更多其他属性\n  public likes: number = 1;\n  public follow: boolean = false;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { taskpool } from '@kit.ArkTS';\nimport { SendableData } from '../Model/modelView';\nimport { UIUtils } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Concurrent\nfunction threadGetData(param: string): SendableData {\n  const DOMAIN = 0xF811;\n  const TAG = '[Sample_MakeObserved]';\n  // 在子线程处理数据\n  let ret = new SendableData();\n  hilog.info(DOMAIN, TAG, `Concurrent threadGetData, param ${param}`);\n  ret.name = param + '-o';\n  ret.age = Math.floor(Math.random() * 40);\n  ret.likes = Math.floor(Math.random() * 100);\n  return ret;\n}\n\n@Entry\n@ComponentV2\nstruct Page3 {\n  // 通过makeObserved给普通对象或是SendableData对象添加可观察能力\n  @Local send: SendableData = UIUtils.makeObserved(new SendableData());\n\n  build() {\n    Column() {\n      Text(this.send.name)\n      Button('change name').onClick(() => {\n        // ok 可以观察到属性的改变\n        this.send.name += '0';\n      })\n\n      Button('task').onClick(() => {\n        // 将待执行的函数放入taskpool内部任务队列等待，等待分发到工作线程执行。\n        taskpool.execute(threadGetData, this.send.name).then(val => {\n          // 和@Local一起使用，可以观察this.send的变化\n          this.send = UIUtils.makeObserved(val as SendableData);\n        })\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要注意：数据的构建和处理可以在子线程中完成，但有观察能力的数据不能传给子线程，只有在主线程里才可以操作可观察的数据。所以上述例子中只是将this.send的属性name传给子线程操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "makeobserved和collectionsarraysetmap配合使用",
      children: "makeObserved和collections.Array/Set/Map配合使用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["collections提供ArkTS容器集，可用于并发场景下的高性能数据传递。详情见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-collections/arkts-apis-arkts-collections/arkts-apis-arkts-collections",
        children: "@arkts.collections (ArkTS容器集)"
      }), "相关文档。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["makeObserved可以在ArkUI中导入可观察的collections容器，但makeObserved不能和状态管理V1的状态变量装饰器如@State和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop",
        children: "@Prop"
      }), "等配合使用，否则会抛出运行时异常。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "collections.Array"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "collections.Array可以触发UI刷新的API有："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "改变数组长度：push、pop、shift、unshift、splice、shrinkTo、extendTo"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "改变数组项本身：sort、fill"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其他API不会改变原始数组，所以不会触发UI刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { collections } from '@kit.ArkTS';\nimport { UIUtils } from '@kit.ArkUI';\n\n@Sendable\nclass Info {\n  public id: number = 0;\n  public name: string = 'cc';\n\n  constructor(id: number) {\n    this.id = id;\n  }\n}\n\n\n@Entry\n@ComponentV2\nstruct Page4 {\n  scroller: Scroller = new Scroller();\n  @Local arrCollect: collections.Array<Info> =\n    UIUtils.makeObserved(new collections.Array<Info>(new Info(1), new Info(2)));\n\n  build() {\n    Column() {\n      // ForEach接口仅支持Array<any>，不支持collections.Array<any>。\n      // 但ForEach的实现用到的Array的API，collections.Array都有提供。所以可以使用as类型断言Array。\n      // 需要注意断言并不会改变原本的数据类型。\n      ForEach(this.arrCollect as object as Array<Info>, (item: Info) => {\n        Text(`${item.id}`)\n          .margin(5)\n          .onClick(() => {\n            item.id++;\n          })\n      }, (item: Info, index) => item.id.toString() + index.toString())\n      Divider()\n        .color('blue')\n        .margin(5)\n      if (this.arrCollect.length > 0) {\n        Text(`the first one ${this.arrCollect[0].id}`)\n          .margin(5)\n        Text(`the last one ${this.arrCollect[this.arrCollect.length - 1].id}`)\n          .margin(5)\n      }\n      Divider()\n        .color('blue')\n        .margin(5)\n\n      // 改变数据长度的API\n      Scroll(this.scroller) {\n        Column({ space: 10 }) {\n          // push: 新增新元素\n          Button('push')\n            .width('50%')\n            .onClick(() => {\n              this.arrCollect.push(new Info(30));\n            })\n          // pop: 删除最后一个\n          Button('pop')\n            .width('50%')\n            .onClick(() => {\n              this.arrCollect.pop();\n            })\n          // shift: 删除第一个\n          Button('shift')\n            .width('50%')\n            .onClick(() => {\n              this.arrCollect.shift();\n            })\n          // unshift: 在数组的开头插入新项\n          Button('unshift')\n            .width('50%')\n            .onClick(() => {\n              this.arrCollect.unshift(new Info(50));\n            })\n          // splice: 从数组的指定位置删除元素\n          Button('splice')\n            .width('50%')\n            .onClick(() => {\n              this.arrCollect.splice(1);\n            })\n\n          // shrinkTo: 将数组长度缩小到给定的长度\n          Button('shrinkTo')\n            .width('50%')\n            .onClick(() => {\n              this.arrCollect.shrinkTo(1);\n            })\n          // extendTo: 将数组长度扩展到给定的长度\n          Button('extendTo')\n            .width('50%')\n            .onClick(() => {\n              this.arrCollect.extendTo(6, new Info(20));\n            })\n\n          Divider()\n            .color('blue')\n\n          // 改变数组item本身\n          // sort：从大到小排序\n          Button('sort')\n            .width('50%')\n            .onClick(() => {\n              this.arrCollect.sort((a: Info, b: Info) => b.id - a.id);\n            })\n          // fill: 用值填充指定部分\n          Button('fill')\n            .width('50%')\n            .onClick(() => {\n              this.arrCollect.fill(new Info(5), 0, 2);\n            })\n\n          // 不会改变数组本身的API\n          // slice：返回新的数组，根据start end对原数组的拷贝，不会改变原数组，所以直接调用slice不会触发UI刷新\n          // 可以构建用例为返回的浅拷贝的数据赋值给this.arrCollect,需要注意这里依然要调用makeObserved，否则this.arrCollect被普通变量赋值后，会丧失观察能力\n          Button('slice')\n            .width('50%')\n            .onClick(() => {\n              this.arrCollect = UIUtils.makeObserved(this.arrCollect.slice(0, 1));\n            })\n          // map：原理同上\n          Button('map')\n            .width('50%')\n            .onClick(() => {\n              this.arrCollect = UIUtils.makeObserved(this.arrCollect.map((value) => {\n                value.id += 10;\n                return value;\n              }))\n            })\n          // filter：原理同上\n          Button('filter')\n            .width('50%')\n            .onClick(() => {\n              this.arrCollect = UIUtils.makeObserved(this.arrCollect.filter((value: Info) => value.id % 2 === 0));\n            })\n          // concat：原理同上\n          Button('concat')\n            .width('50%')\n            .onClick(() => {\n              let array1 = new collections.Array(new Info(100))\n              this.arrCollect = UIUtils.makeObserved(this.arrCollect.concat(array1));\n            })\n        }\n        .height('200%')\n      }\n      .height('100%')\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(721203)/* ["default"] */.A) + "",
        width: "313",
        height: "651"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "collections.Map"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "collections.Map可以触发UI刷新的API有：set、clear、delete。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { collections } from '@kit.ArkTS';\nimport { UIUtils } from '@kit.ArkUI';\n\n@Sendable\nclass Info {\n  public id: number = 0;\n\n  constructor(id: number) {\n    this.id = id;\n  }\n}\n\n\n@Entry\n@ComponentV2\nstruct Page5 {\n  mapCollect: collections.Map<string, Info> =\n    UIUtils.makeObserved(new collections.Map<string, Info>([['a', new Info(10)], ['b', new Info(20)]]));\n\n  build() {\n    Column() {\n      // this.mapCollect.keys()返回迭代器。Foreach不支持迭代器，所以要Array.from浅拷贝生成数据。\n      ForEach(Array.from(this.mapCollect.keys()), (item: string) => {\n        Text(`${this.mapCollect.get(item)?.id}`)\n          .margin(5)\n          .onClick(() => {\n            let value: Info | undefined = this.mapCollect.get(item);\n            if (value) {\n              value.id++;\n            }\n          })\n      }, (item: string, index) => item + index.toString())\n\n      // set c\n      Button('set c')\n        .width('50%')\n        .margin(5)\n        .onClick(() => {\n          this.mapCollect.set('c', new Info(30));\n        })\n      // delete c\n      Button('delete c')\n        .width('50%')\n        .margin(5)\n        .onClick(() => {\n          if (this.mapCollect.has('c')) {\n            this.mapCollect.delete('c');\n          }\n        })\n      // clear\n      Button('clear')\n        .width('50%')\n        .margin(5)\n        .onClick(() => {\n          this.mapCollect.clear();\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(948011)/* ["default"] */.A) + "",
        width: "313",
        height: "221"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "collections.Set"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "collections.Set可以触发UI刷新的API有：add、clear、delete。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { collections } from '@kit.ArkTS';\nimport { UIUtils } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0xF811;\nconst TAG = '[Sample_MakeObserved]';\n\n@Sendable\nclass Info {\n  public id: number = 0;\n\n  constructor(id: number) {\n    this.id = id;\n  }\n}\n\n\n@Entry\n@ComponentV2\nstruct Page6 {\n  set: collections.Set<Info> = UIUtils.makeObserved(new collections.Set<Info>([new Info(10), new Info(20)]));\n\n  build() {\n    Column() {\n      // 因为ForEach不支持迭代器，所以需要使用Array.from浅拷贝生成数组。\n      // 但是浅拷贝生成的新的数组没有观察能力，为了ForEach组件在访问item的时候是可观察的数据，所以需要重新调用makeObserved。\n      ForEach((UIUtils.makeObserved(Array.from(this.set.values()))), (item: Info) => {\n        Text(`${item.id}`)\n          .margin(5)\n          .onClick(() => {\n            item.id++;\n          })\n      }, (item: Info, index) => item.id + index.toString())\n\n      Button('add')\n        .margin(5)\n        .width('50%')\n        .onClick(() => {\n          this.set.add(new Info(30));\n          hilog.info(DOMAIN, TAG, ('size:' + this.set.size));\n        })\n      Button('delete')\n        .margin(5)\n        .width('50%')\n        .onClick(() => {\n          let iterator = this.set.keys();\n          this.set.delete(iterator.next().value);\n        })\n      Button('clear')\n        .margin(5)\n        .width('50%')\n        .onClick(() => {\n          this.set.clear();\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(432813)/* ["default"] */.A) + "",
        width: "313",
        height: "221"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "makeobserved的入参为jsonparse的返回值",
      children: "makeObserved的入参为JSON.parse的返回值"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSON.parse返回Object，无法使用@Trace装饰其属性，可以使用makeObserved使其变为可观察数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { JSON } from '@kit.ArkTS';\nimport { UIUtils } from '@kit.ArkUI';\n\nclass Info {\n  public id: number = 0;\n\n  constructor(id: number) {\n    this.id = id;\n  }\n}\n\nlet test: Record<string, number> = { 'a': 123 };\nlet testJsonStr: string = JSON.stringify(test);\nlet test2: Record<string, Info> = { 'a': new Info(20) };\nlet test2JsonStr: string = JSON.stringify(test2);\n\n@Entry\n@ComponentV2\nstruct Page7 {\n  message: Record<string, number> =\n        UIUtils.makeObserved<Record<string, number>>(JSON.parse(testJsonStr) as Record<string, number>);\n  message2: Record<string, Info> =\n        UIUtils.makeObserved<Record<string, Info>>(JSON.parse(test2JsonStr) as Record<string, Info>);\n\n  build() {\n    Column() {\n      Text(`${this.message.a}`)\n        .id('textId1')\n        .fontSize(50)\n        .onClick(() => {\n          this.message.a++;\n        })\n      Text(`${this.message2.a.id}`)\n        .id('textId2')\n        .fontSize(50)\n        .onClick(() => {\n          this.message2.a.id++;\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "makeobserved和v2装饰器配合使用",
      children: "makeObserved和V2装饰器配合使用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["makeObserved可以和V2的装饰器一起使用。对于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-monitor",
        children: "@Monitor"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-computed",
        children: "@Computed"
      }), "，因为makeObserved传入@Observed或ObservedV2装饰的类实例会返回其自身，所以@Monitor或者@Computed不能定义在class中，只能定义在自定义组件里。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例子如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0xF811;\nconst TAG = '[Sample_MakeObserved]';\n\nclass Info {\n  public id: number = 0;\n  public age: number = 20;\n\n  constructor(id: number) {\n    this.id = id;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Page8 {\n  @Local message: Info = UIUtils.makeObserved(new Info(20));\n\n  // 当message.id发生变化时，触发该函数调用\n  @Monitor('message.id')\n  onStrChange(monitor: IMonitor) {\n    hilog.info(DOMAIN, TAG, `name change from ${monitor.value()?.before} to ${monitor.value()?.now}`);\n  }\n\n  // 当message.id和message.age发生变化，需要重新计算时，触发该函数调用\n  @Computed\n  get ageId() {\n    hilog.info(DOMAIN, TAG, '---------Computed----------');\n    return this.message.id + ' ' + this.message.age;\n  }\n\n  build() {\n    Column() {\n      Text(`id: ${this.message.id}`)\n        .id('textIdMessage')\n        .fontSize(30)\n        .margin(5)\n        .onClick(() => {\n          this.message.id++;\n        })\n      Text(`age: ${this.message.age}`)\n        .id('textAgeMessageAge')\n        .fontSize(30)\n        .margin(5)\n        .onClick(() => {\n          this.message.age++;\n        })\n      Text(`Computed age + id: ${this.ageId}`)\n        .fontSize(30)\n        .margin(5)\n      Button('change Info')\n        .id('buttonChangeInfo')\n        .fontSize(30)\n        .margin(5)\n        .onClick(() => {\n          // 返回类实例本身，并赋值给message，触发@Computed和@Monitor\n          this.message = UIUtils.makeObserved(new Info(200));\n        })\n      Child({ message: this.message })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n\n@ComponentV2\nstruct Child {\n  @Param @Require message: Info;\n\n  build() {\n    Text(`Child id: ${this.message.id}`)\n      .fontSize(30)\n      .margin(5)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(907263)/* ["default"] */.A) + "",
        width: "313",
        height: "221"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "makeobserved在component内使用",
      children: "makeObserved在@Component内使用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "makeObserved不能和V1的状态变量装饰器一起使用，但可以在@Component装饰的自定义组件里使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\nclass Info {\n  public id: number = 0;\n\n  constructor(id: number) {\n    this.id = id;\n  }\n}\n\n\n@Entry\n@Component\nstruct Page9 {\n  // 如果和@State一起使用会抛出运行时异常\n  message: Info = UIUtils.makeObserved(new Info(20));\n\n  build() {\n    RelativeContainer() {\n      Text(`${this.message.id}`)\n        .id('textNumber')\n        .onClick(() => {\n          this.message.id++;\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gettarget后的数据可以正常赋值但是无法触发ui刷新",
      children: "getTarget后的数据可以正常赋值，但是无法触发UI刷新"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-gettarget",
        children: "getTarget"
      }), "可以获取状态管理框架代理前的原始对象。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "makeObserved封装的观察对象，可以通过getTarget获取到其原始对象，对原始对象的赋值不会触发UI刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下面例子："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "先点击第一个Text组件，通过getTarget获取其原始对象，此时修改原始对象的属性不会触发UI刷新，但数据会正常赋值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "再点击第二个Text组件，此时修改this.observedObj的属性会触发UI刷新，Text显示21。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\nclass Info {\n  public id: number = 0;\n}\n\n@Entry\n@Component\nstruct Page10 {\n  observedObj: Info = UIUtils.makeObserved(new Info());\n  build() {\n    Column() {\n      Text(`${this.observedObj.id}`)\n        .id('textobservedObj1')\n        .fontSize(50)\n        .onClick(() => {\n          // 通过getTarget获取其原始对象，将this.observedObj赋值为不可观察的数据\n          let rawObj: Info= UIUtils.getTarget(this.observedObj);\n          // 不会触发UI刷新，但数据会正常赋值\n          rawObj.id = 20;\n        })\n\n      Text(`${this.observedObj.id}`)\n        .id('textobservedObj2')\n        .fontSize(50)\n        .onClick(() => {\n          // 触发UI刷新，Text显示21\n          this.observedObj.id++;\n        })\n    }\n  }\n}\n"
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
721203(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477619-92906dbac24621a9c850ecc3fbca27c8.gif");

},
782027(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
907263(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957620-cd0f8f4777fbc7e38e91905eb8237dd2.gif");

},
432813(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437665-0fef1eb6b8e167e2632dfd645c05f819.gif");

},
948011(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797970-d2ddfc2bb506866accceb3568dfd7a1c.gif");

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