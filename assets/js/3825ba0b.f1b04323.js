"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["290857"], {
751423(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_2_arkts_v_2_manage_data_object_state_arkts_new_observedv_2_and_trace_arkts_new_observedv_2_and_trace_md_382_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-state-management-v-2-arkts-v-2-manage-data-object-state-arkts-new-observedv-2-and-trace-arkts-new-observedv-2-and-trace-md-382.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_2_arkts_v_2_manage_data_object_state_arkts_new_observedv_2_and_trace_arkts_new_observedv_2_and_trace_md_382_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace/arkts-new-observedv2-and-trace","title":"@ObservedV2装饰器和@Trace装饰器：类属性变化观测","description":"为了增强状态管理框架对类对象中属性的观测能力，开发者可以使用@ObservedV2装饰器和@Trace装饰器装饰类以及类中的属性。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace/arkts-new-observedv2-and-trace.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"@ObservedV2装饰器和@Trace装饰器：类属性变化观测","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-observedv2-and-trace","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"@Provider装饰器和@Consumer装饰器：跨组件层级双向同步","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-provider-and-consumer/"},"next":{"title":"@Monitor装饰器：状态变量修改异步监听","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-monitor/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace/arkts-new-observedv2-and-trace.md


const frontMatter = {
	title: '@ObservedV2装饰器和@Trace装饰器：类属性变化观测',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-observedv2-and-trace',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '@ObservedV2装饰器和@Trace装饰器：类属性变化观测';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "状态管理V1版本对嵌套类对象属性变化直接观测的局限性",
  "id": "状态管理v1版本对嵌套类对象属性变化直接观测的局限性",
  "level": 2
}, {
  "value": "装饰器说明",
  "id": "装饰器说明",
  "level": 2
}, {
  "value": "观察变化",
  "id": "观察变化",
  "level": 2
}, {
  "value": "使用限制",
  "id": "使用限制",
  "level": 2
}, {
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "嵌套类场景",
  "id": "嵌套类场景",
  "level": 3
}, {
  "value": "继承类场景",
  "id": "继承类场景",
  "level": 3
}, {
  "value": "@Trace装饰基础类型的数组",
  "id": "trace装饰基础类型的数组",
  "level": 3
}, {
  "value": "@Trace装饰对象数组",
  "id": "trace装饰对象数组",
  "level": 3
}, {
  "value": "@Trace装饰Map类型",
  "id": "trace装饰map类型",
  "level": 3
}, {
  "value": "@Trace装饰Set类型",
  "id": "trace装饰set类型",
  "level": 3
}, {
  "value": "@Trace装饰Date类型",
  "id": "trace装饰date类型",
  "level": 3
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "@ObservedV2装饰对象的序列化与反序列化",
  "id": "observedv2装饰对象的序列化与反序列化",
  "level": 3
}, {
  "value": "router传递的@ObservedV2类型显示异常",
  "id": "router传递的observedv2类型显示异常",
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
        id: "observedv2装饰器和trace装饰器类属性变化观测",
        children: "@ObservedV2装饰器和@Trace装饰器：类属性变化观测"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了增强状态管理框架对类对象中属性的观测能力，开发者可以使用@ObservedV2装饰器和@Trace装饰器装饰类以及类中的属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@ObservedV2和@Trace提供了对嵌套类对象属性变化直接观测的能力，是状态管理V2中相对核心的能力之一。在阅读本文档前，建议提前阅读：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview",
        children: "状态管理概述"
      }), "来了解状态管理V2整体的能力架构。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(202418)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@ObservedV2与@Trace装饰器从API version 12开始支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始，@ObservedV2与@Trace装饰器支持在ArkTS卡片中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始，@ObservedV2与@Trace装饰器支持在元服务中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@ObservedV2装饰器与@Trace装饰器用于装饰类以及类中的属性，使得被装饰的类和属性具有深度观测的能力："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@ObservedV2装饰器与@Trace装饰器需要配合使用，单独使用@ObservedV2装饰器或@Trace装饰器没有任何作用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "被@Trace装饰器装饰的属性property变化时，仅会通知property关联的组件进行刷新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在嵌套类中，嵌套类中的属性property被@Trace装饰且嵌套类被@ObservedV2装饰时，才具有触发UI刷新的能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在继承类中，父类或子类中的属性property被@Trace装饰且该property所在类被@ObservedV2装饰时，才具有触发UI刷新的能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "未被@Trace装饰的属性用在UI中无法感知到变化，也无法触发UI刷新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用@ObservedV2与@Trace装饰器的类，需通过new操作符实例化后，才具备被观测变化的能力。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "状态管理v1版本对嵌套类对象属性变化直接观测的局限性",
      children: "状态管理V1版本对嵌套类对象属性变化直接观测的局限性"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "现有状态管理V1版本无法实现对嵌套类对象属性变化的直接观测。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Observed\nclass Father {\n  public son: Son;\n\n  constructor(name: string, age: number) {\n    this.son = new Son(name, age);\n  }\n}\n\n@Observed\nclass Son {\n  public name: string;\n  public age: number;\n\n  constructor(name: string, age: number) {\n    this.name = name;\n    this.age = age;\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State father: Father = new Father('John', 8);\n\n  build() {\n    Row() {\n      Column() {\n        Text(`name: ${this.father.son.name} age: ${this.father.son.age}`)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            this.father.son.age++;\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在上述代码中，点击Text组件增加age的值时，不会触发UI刷新。原因在于现有的状态管理框架无法观测到嵌套类中属性age的值变化。V1版本的解决方案是使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
        children: "@ObjectLink装饰器"
      }), "与自定义组件来实现观测。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Observed\nclass Father {\n  public son: Son;\n\n  constructor(name: string, age: number) {\n    this.son = new Son(name, age);\n  }\n}\n\n@Observed\nclass Son {\n  public name: string;\n  public age: number;\n\n  constructor(name: string, age: number) {\n    this.name = name;\n    this.age = age;\n  }\n}\n\n@Component\nstruct Child {\n  @ObjectLink son: Son;\n\n  build() {\n    Row() {\n      Column() {\n        Text(`name: ${this.son.name} age: ${this.son.age}`)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n          .onClick(() => {\n            this.son.age++;\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State father: Father = new Father('John', 8);\n\n  build() {\n    Column() {\n      Child({ son: this.father.son })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过这种方式虽然能够实现对嵌套类中属性变化的观测，但是当嵌套层级较深时，代码将会变得十分复杂，易用性差。因此推出类装饰器@ObservedV2与成员变量装饰器@Trace，增强对嵌套类中属性变化的观测能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "装饰器说明",
      children: "装饰器说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "@ObservedV2类装饰器"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "装饰器参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "类装饰器"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "装饰class。需要放在class的定义前，使用new创建类对象。"
          })]
        })]
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "@Trace成员变量装饰器"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "装饰器参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "可装饰的变量"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["class中成员属性。属性的类型可以为number、string、boolean、class、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#trace%E8%A3%85%E9%A5%B0%E5%9F%BA%E7%A1%80%E7%B1%BB%E5%9E%8B%E7%9A%84%E6%95%B0%E7%BB%84",
              children: "Array"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#trace%E8%A3%85%E9%A5%B0date%E7%B1%BB%E5%9E%8B",
              children: "Date"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#trace%E8%A3%85%E9%A5%B0map%E7%B1%BB%E5%9E%8B",
              children: "Map"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#trace%E8%A3%85%E9%A5%B0set%E7%B1%BB%E5%9E%8B",
              children: "Set"
            }), "等类型。@Trace不支持观察Function类型的数据，修改@Trace装饰的Function类型的数据，UI不会刷新。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "观察变化",
      children: "观察变化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用@ObservedV2装饰的类中被@Trace装饰的属性具有被观测变化的能力，当该属性值变化时，会触发该属性绑定的UI组件刷新。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在嵌套类中使用@Trace装饰的属性具有被观测变化的能力。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass Son {\n  @Trace public age: number = 100;\n}\n\nclass Father {\n  public son: Son = new Son();\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  father: Father = new Father();\n\n  build() {\n    Column() {\n      // 当点击改变age时，Text组件会刷新\n      Text(`${this.father.son.age}`)\n        .onClick(() => {\n          this.father.son.age++;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在继承类中使用@Trace装饰的属性具有被观测变化的能力。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass Father {\n  @Trace public name: string = 'Tom';\n}\n\nclass Son extends Father {\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  son: Son = new Son();\n\n  build() {\n    Column() {\n      // 当点击改变name时，Text组件会刷新\n      Text(`${this.son.name}`)\n        .onClick(() => {\n          this.son.name = 'Jack';\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "类中使用@Trace装饰的静态属性具有被观测变化的能力。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass Manager {\n  @Trace public static count: number = 1;\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  build() {\n    Column() {\n      // 当点击改变count时，Text组件会刷新\n      Text(`${Manager.count}`)\n        .onClick(() => {\n          Manager.count++;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@Trace装饰内置类型时，可以观测各自API导致的变化："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
                children: "Date"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "setFullYear, setMonth, setDate, setHours, setMinutes, setSeconds, setMilliseconds, setTime, setUTCFullYear, setUTCMonth, setUTCDate, setUTCHours, setUTCMinutes, setUTCSeconds, setUTCMilliseconds"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Map"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "set, clear, delete"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Set"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "add, clear, delete"
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用限制",
      children: "使用限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@ObservedV2与@Trace装饰器存在以下使用限制："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "非@Trace装饰的成员属性用在UI上无法触发UI刷新。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass Person {\n  public id: number = 0;\n  @Trace public age: number = 8;\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  person: Person = new Person();\n\n  build() {\n    Column() {\n      // age被@Trace装饰，用在UI中可以触发UI刷新\n      Text(`${this.person.age}`)\n        .onClick(() => {\n          this.person.age++; // 点击会触发UI刷新\n        })\n      // id未被@Trace装饰，用在UI中不会触发UI刷新\n      Text(`${this.person.id}`) // 当id变化时不会刷新\n        .onClick(() => {\n          this.person.id++; // 点击不会触发UI刷新\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@ObservedV2仅能装饰class，无法装饰自定义组件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2 // 错误用法，编译时报错\nstruct Index {\n  build() {\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Trace不能用在没有被@ObservedV2装饰的class上。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class User {\n  id: number = 0;\n  @Trace name: string = 'Tom'; // 错误用法，编译时报错\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Trace是class中属性的装饰器，不能用在struct中。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ComponentV2\nstruct Comp {\n  @Trace message: string = 'Hello World'; // 错误用法，编译时报错\n\n  build() {\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["@ObservedV2、@Trace不能与", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
          children: "@Observed"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-data-object-state-management/arkts-track",
          children: "@Track"
        }), "混合使用。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Observed\nclass User {\n  @Trace name: string = 'Tom'; // 错误用法，编译时报错\n}\n\n@ObservedV2\nclass Person {\n  @Track name: string = 'Jack'; // 错误用法，编译时报错\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用@ObservedV2与@Trace装饰的类不能和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
          children: "@State"
        }), "等V1的装饰器混合使用，编译时报错。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 以@State装饰器为例\n@ObservedV2\nclass Job {\n  @Trace public jobName: string = 'Teacher';\n}\n\n@ObservedV2\nclass Info {\n  @Trace public name: string = 'Tom';\n  @Trace public age: number = 25;\n  public job: Job = new Job();\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  // @State info: Info = new Info(); 无法混用，编译时报错\n  @Local info: Info = new Info();\n\n  build() {\n    Column() {\n      Text(`name: ${this.info.name}`)\n      Text(`age: ${this.info.age}`)\n      Text(`jobName: ${this.info.job.jobName}`)\n      Button('change age')\n        .onClick(() => {\n          this.info.age++;\n        })\n      Button('Change job')\n        .onClick(() => {\n          this.info.job.jobName = 'Doctor';\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "继承自@ObservedV2的类无法和@State等V1的装饰器混用，运行时报错。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 以@State装饰器为例\n@ObservedV2\nclass Job {\n  @Trace public jobName: string = 'Teacher';\n}\n\n@ObservedV2\nclass Info {\n  @Trace public name: string = 'Tom';\n  @Trace public age: number = 25;\n  public job: Job = new Job();\n}\n\nclass Message extends Info {\n  constructor() {\n    super();\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  // @State message: Message = new Message();  无法混用，运行时报错\n  message: Message = new Message();\n\n  build() {\n    Column() {\n      Text(`name: ${this.message.name}`)\n      Text(`age: ${this.message.age}`)\n      Text(`jobName: ${this.message.job.jobName}`)\n      Button('change age')\n        .onClick(() => {\n          this.message.age++;\n        })\n      Button('Change job')\n        .onClick(() => {\n          this.message.job.jobName = 'Doctor';\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用@ObservedV2与@Trace装饰器的类，需通过new操作符实例化后，才具备被观测变化的能力。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["@ObservedV2的类实例无法直接使用JSON.parse反序列化获得（直接使用JSON.parse反序列化获得的对象无法观察属性变化），可搭配三方库", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/openharmony-tpc/openharmony_tpc_samples/tree/master/class-transformer",
          children: "class-transformer"
        }), "实现反序列化后可观察，示例请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#observedv2%E8%A3%85%E9%A5%B0%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%BA%8F%E5%88%97%E5%8C%96%E4%B8%8E%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96",
          children: "@ObservedV2装饰对象的序列化与反序列化"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "嵌套类场景",
      children: "嵌套类场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的嵌套类场景中，Pencil类是Son类中最里层的类，Pencil类被@ObservedV2装饰且属性length被@Trace装饰，此时length的变化能够被观测到。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@Trace装饰器与现有状态管理框架的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-data-object-state-management/arkts-track",
        children: "@Track"
      }), "与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
        children: "@State"
      }), "装饰器的能力不同，@Track使class具有属性级更新的能力，但并不具备深度观测的能力；而@State只能观测到对象本身以及第一层的变化，对于多层嵌套场景只能通过封装自定义组件，搭配", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
        children: "@Observed"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
        children: "@ObjectLink"
      }), "来实现观测。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击Button('change length')，length是被@Trace装饰的属性，它的变化可以触发关联的UI组件，即UINode (1)的刷新，并输出\"id: 1 renderTimes: x\"的日志，其中x根据点击次数依次增长。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自定义组件Page中的son是常规变量，因此点击Button('assign Son')并不会观测到变化。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当点击Button('assign Son')后，再点击Button('change length')并不会引起UI刷新。因为此时son的地址改变，其关联的UI组件并没有关联到最新的son。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0001;\nconst TAG = 'ArktsObservedV2AndTrace';\n\n@ObservedV2\nclass Pencil {\n  @Trace public length: number = 21; // 当length变化时，会刷新关联的组件\n}\n\nclass Bag {\n  public width: number = 50;\n  public height: number = 60;\n  public pencil: Pencil = new Pencil();\n}\n\nclass Son {\n  public age: number = 5;\n  public school: string = 'some';\n  public bag: Bag = new Bag();\n}\n\n@Entry\n@ComponentV2\nstruct Page {\n  son: Son = new Son();\n  renderTimes: number = 0;\n\n  isRender(id: number): number {\n    hilog.info(DOMAIN, TAG, `id: ${id} renderTimes: ${this.renderTimes}`);\n    this.renderTimes++;\n    return 40;\n  }\n\n  build() {\n    Column() {\n      Text('pencil length' + this.son.bag.pencil.length)\n        .fontSize(this.isRender(1)) // UINode (1)\n      Button('change length')\n        .onClick(() => {\n          // 点击更改length值，UINode（1）会刷新\n          this.son.bag.pencil.length += 100;\n        })\n      Button('assign Son')\n        .onClick(() => {\n          // 由于变量son非状态变量，因此无法刷新UINode（1）\n          this.son = new Son();\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "继承类场景",
      children: "继承类场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Trace支持在类的继承场景中使用，无论是在基类还是继承类中，只有被@Trace装饰的属性才具有被观测变化的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下例子中，声明class GrandFather、Father、Uncle、Son、Cousin，继承关系如下图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(93778)/* ["default"] */.A) + "",
        width: "677",
        height: "626"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建类Son和类Cousin的实例，点击Button('change Son age')和Button('change Cousin age')可以触发UI的刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0001;\nconst TAG = 'ArktsObservedV2AndTrace';\n\n@ObservedV2\nclass GrandFather {\n  @Trace public age: number = 0;\n\n  constructor(age: number) {\n    this.age = age;\n  }\n}\n\nclass Father extends GrandFather {\n  constructor(father: number) {\n    super(father);\n  }\n}\n\nclass Uncle extends GrandFather {\n  constructor(uncle: number) {\n    super(uncle);\n  }\n}\n\nclass Son extends Father {\n  constructor(son: number) {\n    super(son);\n  }\n}\n\nclass Cousin extends Uncle {\n  constructor(cousin: number) {\n    super(cousin);\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  son: Son = new Son(0);\n  cousin: Cousin = new Cousin(0);\n  renderTimes: number = 0;\n\n  isRender(id: number): number {\n    hilog.info(DOMAIN, TAG, `id: ${id} renderTimes: ${this.renderTimes}`);\n    this.renderTimes++;\n    return 40;\n  }\n\n  build() {\n    Row() {\n      Column() {\n        Text(`Son ${this.son.age}`)\n          .fontSize(this.isRender(1))\n          .fontWeight(FontWeight.Bold)\n        Text(`Cousin ${this.cousin.age}`)\n          .fontSize(this.isRender(2))\n          .fontWeight(FontWeight.Bold)\n        Button('change Son age')\n          .onClick(() => {\n            this.son.age++;\n          })\n        Button('change Cousin age')\n          .onClick(() => {\n            this.cousin.age++;\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "trace装饰基础类型的数组",
      children: "@Trace装饰基础类型的数组"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@Trace装饰数组时，使用支持的API能够观测到变化。支持的API见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E8%A7%82%E5%AF%9F%E5%8F%98%E5%8C%96",
        children: "观察变化"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中@ObservedV2装饰的Arr类中的属性numberArr是@Trace装饰的数组，当使用数组API操作numberArr时，可以观测到对应的变化。注意使用数组长度进行判断以防越界访问。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let nextId: number = 0;\n\n@ObservedV2\nclass Arr {\n  public id: number = 0;\n  @Trace public numberArr: number[] = [];\n\n  constructor() {\n    this.id = nextId++;\n    this.numberArr = [0, 1, 2];\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  arr: Arr = new Arr();\n\n  build() {\n    Column() {\n      Text(`length: ${this.arr.numberArr.length}`)\n        .fontSize(40)\n      Divider()\n      if (this.arr.numberArr.length >= 3) {\n        Text(`${this.arr.numberArr[0]}`)\n          .fontSize(40)\n          .onClick(() => {\n            this.arr.numberArr[0]++;\n          })\n        Text(`${this.arr.numberArr[1]}`)\n          .fontSize(40)\n          .onClick(() => {\n            this.arr.numberArr[1]++;\n          })\n        Text(`${this.arr.numberArr[2]}`)\n          .fontSize(40)\n          .onClick(() => {\n            this.arr.numberArr[2]++;\n          })\n      }\n\n      Divider()\n\n      ForEach(this.arr.numberArr, (item: number, index: number) => {\n        Text(`${index} ${item}`)\n          .fontSize(40)\n      })\n\n      Button('push')\n        .onClick(() => {\n          this.arr.numberArr.push(50);\n        })\n\n      Button('pop')\n        .onClick(() => {\n          this.arr.numberArr.pop();\n        })\n\n      Button('shift')\n        .onClick(() => {\n          this.arr.numberArr.shift();\n        })\n\n      Button('splice')\n        .onClick(() => {\n          this.arr.numberArr.splice(1, 0, 60);\n        })\n\n\n      Button('unshift')\n        .onClick(() => {\n          this.arr.numberArr.unshift(100);\n        })\n\n      Button('copywithin')\n        .onClick(() => {\n          this.arr.numberArr.copyWithin(0, 1, 2);\n        })\n\n      Button('fill')\n        .onClick(() => {\n          this.arr.numberArr.fill(0, 2, 4);\n        })\n\n      Button('reverse')\n        .onClick(() => {\n          this.arr.numberArr.reverse();\n        })\n\n      Button('sort')\n        .onClick(() => {\n          this.arr.numberArr.sort();\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "trace装饰对象数组",
      children: "@Trace装饰对象数组"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Trace装饰对象数组personList以及Person类中的age属性，因此当personList、age改变时均可以观测到变化。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击Text组件更改age时，Text组件会刷新。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let nextId: number = 0;\n\n@ObservedV2\nclass Person {\n  @Trace public age: number = 0;\n\n  constructor(age: number) {\n    this.age = age;\n  }\n}\n\n@ObservedV2\nclass Info {\n  public id: number = 0;\n  @Trace public personList: Person[] = [];\n\n  constructor() {\n    this.id = nextId++;\n    this.personList = [new Person(0), new Person(1), new Person(2)];\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  info: Info = new Info();\n\n  build() {\n    Column() {\n      Text(`length: ${this.info.personList.length}`)\n        .fontSize(40)\n      Divider()\n      if (this.info.personList.length >= 3) {\n        Text(`${this.info.personList[0].age}`)\n          .fontSize(40)\n          .onClick(() => {\n            this.info.personList[0].age++;\n          })\n\n        Text(`${this.info.personList[1].age}`)\n          .fontSize(40)\n          .onClick(() => {\n            this.info.personList[1].age++;\n          })\n\n        Text(`${this.info.personList[2].age}`)\n          .fontSize(40)\n          .onClick(() => {\n            this.info.personList[2].age++;\n          })\n      }\n\n      Divider()\n\n      ForEach(this.info.personList, (item: Person, index: number) => {\n        Text(`${index} ${item.age}`)\n          .fontSize(40)\n      })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "trace装饰map类型",
      children: "@Trace装饰Map类型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "被@Trace装饰的Map类型属性可以观测到调用API带来的变化，包括 set、clear、delete。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "因为Info类被@ObservedV2装饰且属性memberMap被@Trace装饰，点击Button('init map')对memberMap赋值也可以观测到变化。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass Info {\n  @Trace public memberMap: Map<number, string> = new Map([[0, 'a'], [1, 'b'], [3, 'c']]);\n}\n\n@Entry\n@ComponentV2\nstruct MapSample {\n  info: Info = new Info();\n\n  build() {\n    Row() {\n      Column() {\n        ForEach(Array.from(this.info.memberMap.entries()), (item: [number, string]) => {\n          Text(`${item[0]}`)\n            .fontSize(30)\n          Text(`${item[1]}`)\n            .fontSize(30)\n          Divider()\n        })\n        Button('init map')\n          .onClick(() => {\n            this.info.memberMap = new Map([[0, 'a'], [1, 'b'], [3, 'c']]);\n          })\n        Button('set new one')\n          .onClick(() => {\n            this.info.memberMap.set(4, 'd');\n          })\n        Button('clear')\n          .onClick(() => {\n            this.info.memberMap.clear();\n          })\n        Button('set the key: 0')\n          .onClick(() => {\n            this.info.memberMap.set(0, 'aa');\n          })\n        Button('delete the first one')\n          .onClick(() => {\n            this.info.memberMap.delete(0);\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "trace装饰set类型",
      children: "@Trace装饰Set类型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "被@Trace装饰的Set类型属性可以观测到调用API带来的变化，包括 add、clear和delete。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "因为Info类被@ObservedV2装饰且属性memberSet被@Trace装饰，点击Button('init set')对memberSet赋值也可以观测到变化。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass Info {\n  @Trace public memberSet: Set<number> = new Set([0, 1, 2, 3, 4]);\n}\n\n@Entry\n@ComponentV2\nstruct SetSample {\n  info: Info = new Info();\n\n  build() {\n    Row() {\n      Column() {\n        ForEach(Array.from(this.info.memberSet.entries()), (item: [number, number]) => {\n          Text(`${item[0]}`)\n            .fontSize(30)\n          Divider()\n        })\n        Button('init set')\n          .onClick(() => {\n            this.info.memberSet = new Set([0, 1, 2, 3, 4]);\n          })\n        Button('set new one')\n          .onClick(() => {\n            this.info.memberSet.add(5);\n          })\n        Button('clear')\n          .onClick(() => {\n            this.info.memberSet.clear();\n          })\n        Button('delete the first one')\n          .onClick(() => {\n            this.info.memberSet.delete(0);\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "trace装饰date类型",
      children: "@Trace装饰Date类型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Trace装饰的Date类型属性可以观测调用API带来的变化，包括 setFullYear、setMonth、setDate、setHours、setMinutes、setSeconds、setMilliseconds、setTime、setUTCFullYear、setUTCMonth、setUTCDate、setUTCHours、setUTCMinutes、setUTCSeconds、setUTCMilliseconds。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "因为Info类被@ObservedV2装饰且属性selectedDate被@Trace装饰，点击Button('set selectedDate to 2023-07-08')对selectedDate赋值也可以观测到变化。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass Info {\n  @Trace public selectedDate: Date = new Date('2021-08-08');\n}\n\n@Entry\n@ComponentV2\nstruct DateSample {\n  info: Info = new Info();\n\n  build() {\n    Column() {\n      Button('set selectedDate to 2023-07-08')\n        .margin(10)\n        .onClick(() => {\n          this.info.selectedDate = new Date('2023-07-08');\n        })\n      Button('increase the year by 1')\n        .margin(10)\n        .onClick(() => {\n          this.info.selectedDate.setFullYear(this.info.selectedDate.getFullYear() + 1);\n        })\n      Button('increase the month by 1')\n        .margin(10)\n        .onClick(() => {\n          this.info.selectedDate.setMonth(this.info.selectedDate.getMonth() + 1);\n        })\n      Button('increase the day by 1')\n        .margin(10)\n        .onClick(() => {\n          this.info.selectedDate.setDate(this.info.selectedDate.getDate() + 1);\n        })\n      DatePicker({\n        start: new Date('1970-1-1'),\n        end: new Date('2100-1-1'),\n        selected: this.info.selectedDate\n      })\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "observedv2装饰对象的序列化与反序列化",
      children: "@ObservedV2装饰对象的序列化与反序列化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@ObservedV2装饰的对象序列化后会为@Trace装饰的属性添加__ob_前缀。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass Info {\n  @Trace name: string = 'Tom';\n  @Trace age: number = 24;\n}\n\nlet realInfo: Info = new Info();\nlet jsonResult: string = JSON.stringify(realInfo); // '{\"__ob_name\":\"Tom\",\"__ob_age\":24}'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将@ObservedV2装饰的对象通过JSON.stringify序列化后，再通过JSON.parse反序列化，将失去观察能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass Info {\n  @Trace name: string = 'Tom';\n  @Trace age: number = 24;\n}\n\nlet realInfo: Info = new Info();\nlet jsonResult: string = JSON.stringify(realInfo); // '{\"__ob_name\":\"Tom\",\"__ob_age\":24}'\nlet parseInfo: Info = JSON.parse(jsonResult);\n\n// 与直接通过new操作符创建的对象不同，JSON.parse获得的对象实际并不是Info的实例，所以无属性观察能力\nlet isInfoByNew: boolean = realInfo instanceof Info; // true\nlet isInfoByParse: boolean = parseInfo instanceof Info; // false\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以配合三方库", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony-tpc/openharmony_tpc_samples/tree/master/class-transformer",
        children: "class-transformer"
      }), "实现反序列化后可观察。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class-transformer可以通过如下命令安装。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm install class-transformer\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { plainToInstance } from 'class-transformer'; // 导入三方库\n@ObservedV2\nclass Info {\n  @Trace name: string = 'Tom';\n  @Trace age: number = 24;\n}\nlet realInfo: Info = new Info();\nlet jsonResult: string = JSON.stringify(realInfo); // '{\"__ob_name\":\"Tom\",\"__ob_age\":24}'\nlet parseInfo: Info = JSON.parse(jsonResult);\n\nlet transformedInfo: Info = plainToInstance(Info, parseInfo);\nlet isInfoByTransformed: boolean = transformedInfo instanceof Info; // true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若为多层对象嵌套场景，需要进行额外处理，包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "去除序列化结果中的__ob_前缀，否则内层对象无法被正确转换。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用class-transformer库中提供的@Type装饰器（为与状态管理V2的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-type",
          children: "@Type装饰器"
        }), "区分，示例中重命名为TypeFromLibrary）标记里层对象的类型。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用三方库的@Type装饰器需要安装", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/openharmony-tpc/openharmony_tpc_samples/tree/master/reflect-metadata",
        children: "reflect-metadata"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "reflect-metadata可以通过如下命令安装。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ohpm install reflect-metadata@0.2.1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { plainToInstance, Type as TypeFromLibrary} from 'class-transformer'; // 导入三方库\nimport 'reflect-metadata'; // 三方库的@Type装饰器需要使用\n@ObservedV2\nclass Info {\n  @Trace name: string = 'Tom';\n  @Trace age: number = 24;\n}\n@ObservedV2\nclass InfoWrapper {\n  // 使用三方库的@Type装饰器（重命名为TypeFromLibrary）标记内层属性的类型\n  @TypeFromLibrary(() => Info)\n  @Trace info: Info = new Info();\n}\nlet realWrapper: InfoWrapper = new InfoWrapper();\nlet infoWrapperJson: string = JSON.stringify(realWrapper); // '{\"__ob_info\":{\"__ob_name\":\"Tom\",\"__ob_age\":24}}'\n// 去除属性key的'__ob_'前缀，此处仅做演示，开发者需根据实际类型定义情况完成去除key中的'__ob_'前缀\nlet jsonHandled = infoWrapperJson.replaceAll('__ob_', ''); // '{\"info\":{\"name\":\"Tom\",\"age\":24}}'\nlet wrapperHandled = plainToInstance(InfoWrapper, JSON.parse(jsonHandled));\n\nlet isWrapper: boolean = wrapperHandled instanceof InfoWrapper; // true\nlet isInfo: boolean = (wrapperHandled.info) instanceof Info; // true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在UI中使用的完整示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { plainToInstance, Type as TypeFromLibrary } from 'class-transformer'; // 导入三方库\nimport 'reflect-metadata'; // 三方库的@Type装饰器需要使用\n\n// 模拟json键值对对象\nlet testJSON: Record<string, ESObject> = {\n  'id': 1,\n  'info': {\n    'name': 'Tom',\n    'age': 24\n  },\n  'friends': [\n    {\n      'name': 'John',\n      'age': 23\n    },\n    {\n      'name': 'Mary',\n      'age': 24\n    }\n  ]\n}\n\n@ObservedV2\nclass Info {\n  @Trace public name?: string;\n  @Trace public age?: number;\n}\n\n@ObservedV2\nclass Person {\n  public id?: number;\n  // 使用三方库的@Type装饰器（重命名为TypeFromLibrary）标记内层属性的类型\n  @TypeFromLibrary(() => Info)\n  @Trace public info?: Info;\n  // 使用三方库的@Type装饰器（重命名为TypeFromLibrary）标记内层属性的类型\n  @TypeFromLibrary(() => Info)\n  @Trace public friends?: Info[];\n}\n\n@Entry\n@ComponentV2\nstruct SerializationAndDeserialization {\n  @Local person: Person | undefined = undefined;\n  aboutToAppear(): void {\n    this.person = plainToInstance(Person, testJSON); // 直接将对象通过plainToInstance转为Person实例\n  }\n\n  build() {\n    Column() {\n      Text(`name: ${this.person?.info?.name}, age: ${this.person?.info?.age}`)\n        .onClick(() => {\n          if (this.person?.info?.age) {\n            this.person!.info!.age++; // 修改可观察\n          }\n        })\n      ForEach(this.person?.friends, (item: Info) => {\n        Text(`friend name: ${item.name}, age: ${item.age}`)\n          .onClick(() => {\n            if (item.age) {\n              item.age++; // 修改可观察\n            }\n          })\n      })\n\n      Button('Refresh Info')\n        .onClick(() => {\n          let json: string =\n            `{\n              \"id\":12,\n                \"__ob_info\":\n                  {\n                    \"__ob_name\":\"Jimmy\",\n                    \"__ob_age\":35\n                   },\n              \"__ob_friends\":[\n                {\n                  \"__ob_name\":\"Bob\",\n                  \"__ob_age\":30\n                },\n                {\n                  \"__ob_name\":\"Kevin\",\n                  \"__ob_age\":33\n                }\n              ]\n            }`;\n          // 去除'__ob_'前缀后通过JSON.parse与plainToInstance将json字符串转化成Person对象\n          this.person = plainToInstance(Person, JSON.parse(json.replaceAll('__ob_', '')));\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "router传递的observedv2类型显示异常",
      children: "router传递的@ObservedV2类型显示异常"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用router传递的@ObservedV2类，由于经过序列化生成的属性名称与类中的原始属性名称不一致，不能直接通过as类型转换成@ObservedV2的实例，需要反序列化重新生成@ObservedV2实例。反序列化相关内容请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#observedv2%E8%A3%85%E9%A5%B0%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%BA%8F%E5%88%97%E5%8C%96%E4%B8%8E%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96",
        children: "@ObservedV2装饰对象的序列化与反序列化"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【反例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 文件pages/faqs/RouterIndex.ets内容\n\n@ObservedV2\nexport class RouterModel {\n  @Trace id: number = -1;\n  @Trace info: string = 'default';\n}\n\n@Entry\n@ComponentV2\nstruct RouterIndex {\n  @Local paramsInfo: RouterModel = new RouterModel();\n  onJumpClick(): void {\n    this.paramsInfo.id = 0;\n    this.paramsInfo.info = 'RouterModel';\n    this.getUIContext().getRouter().pushUrl({\n      url: 'pages/faqs/ChildPage',\n      params: this.paramsInfo // 传递@ObservedV2实例到子页面\n    }, (err) => {\n      if (err) {\n        console.error(`Invoke pushUrl failed, code is ${err.code}, message is ${err.message}`);\n        return;\n      }\n      console.info('Invoke pushUrl succeeded.');\n    })\n  }\n\n  build() {\n    Column() {\n      Text('Parent page')\n      Button('Jump')\n        .onClick(() => {\n          this.onJumpClick();\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 文件pages/faqs/ChildPage.ets内容\n\nimport { RouterModel } from './RouterIndex';\n\n@Entry\n@ComponentV2\nstruct Detail {\n  @Local params?: RouterModel\n  aboutToAppear(): void {\n    // 错误使用方式！@ObservedV2类型通过router传递无法直接类型转换\n    this.params = this.getUIContext().getRouter().getParams() as RouterModel;\n  }\n  build() {\n    Column() {\n      Text(`Detail Page: ${this.params?.id} ${this.params?.info}`) // 由于传递数据失败，这里会显示undefined\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "【正例】"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nexport class RouterModel {\n  @Trace public id: number = -1;\n  @Trace public info: string = 'default';\n}\n\n@Entry\n@ComponentV2\nstruct RouterIndex {\n  @Local paramsInfo: RouterModel = new RouterModel();\n  onJumpClick(): void {\n    this.paramsInfo.id = 0;\n    this.paramsInfo.info = 'RouterModel';\n    this.getUIContext().getRouter().pushUrl({\n      url: 'pages/faqs/ChildPage',\n      params: this.paramsInfo // 传递@ObservedV2实例到子页面\n    }, (err) => {\n      if (err) {\n        console.error(`Invoke pushUrl failed, code is ${err.code}, message is ${err.message}`);\n        return;\n      }\n      console.info('Invoke pushUrl succeeded.');\n    })\n  }\n\n  build() {\n    Column() {\n      Text('Parent page')\n      Button('Jump')\n        .onClick(() => {\n          this.onJumpClick();\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { RouterModel } from './RouterIndex';\nimport { plainToInstance } from 'class-transformer'; // 导入三方库\n\n@Entry\n@ComponentV2\nstruct Detail {\n  @Local params?: RouterModel\n  aboutToAppear(): void {\n    this.params =\n      plainToInstance(RouterModel, JSON.parse(JSON.stringify(this.getUIContext().getRouter().getParams())));\n  }\n  build() {\n    Column() {\n      Text(`Detail Page: ${this.params?.id} ${this.params?.info}`)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(396471)/* ["default"] */.A) + "",
        width: "744",
        height: "282"
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
202418(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
396471(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957618-079db40ea87c06599ab9294c36a15ed5.gif");

},
93778(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437663-8aa35bee7f4f04eda914cc40d96d123b.png");

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