"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["375176"], {
274468(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_2_arkts_v_2_manage_data_object_state_arkts_new_computed_arkts_new_computed_md_84e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-state-management-v-2-arkts-v-2-manage-data-object-state-arkts-new-computed-arkts-new-computed-md-84e.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_2_arkts_v_2_manage_data_object_state_arkts_new_computed_arkts_new_computed_md_84e_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-computed/arkts-new-computed","title":"@Computed装饰器：计算属性","description":"当开发者使用相同的计算逻辑重复绑定在UI上时，为了防止重复计算，可以使用@Computed计算属性。计算属性中依赖的状态变量变化时，只会计算一次。这解决了UI多次重用该属性导致的重复计算和性能问题。如下面例子。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-computed/arkts-new-computed.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-computed","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-computed/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-computed/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"@Computed装饰器：计算属性","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-computed","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"@Monitor装饰器：状态变量修改异步监听","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-monitor/"},"next":{"title":"@Type装饰器：标记类属性的类型","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-type/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-computed/arkts-new-computed.md


const frontMatter = {
	title: '@Computed装饰器：计算属性',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-computed',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '@Computed装饰器：计算属性';

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
  "value": "使用限制",
  "id": "使用限制",
  "level": 2
}, {
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "当被计算的属性变化时，@Computed装饰的getter访问器只会被求解一次",
  "id": "当被计算的属性变化时computed装饰的getter访问器只会被求解一次",
  "level": 3
}, {
  "value": "@Computed装饰的属性可以被@Monitor监听变化",
  "id": "computed装饰的属性可以被monitor监听变化",
  "level": 3
}, {
  "value": "@Computed装饰的属性可以初始化@Param",
  "id": "computed装饰的属性可以初始化param",
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
        id: "computed装饰器计算属性",
        children: "@Computed装饰器：计算属性"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当开发者使用相同的计算逻辑重复绑定在UI上时，为了防止重复计算，可以使用@Computed计算属性。计算属性中依赖的状态变量变化时，只会计算一次。这解决了UI多次重用该属性导致的重复计算和性能问题。如下面例子。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Computed\nget sum() {\n  return this.count1 + this.count2 + this.count3;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Text(`${this.count1 + this.count2 + this.count3}`) // 计算this.count1 + this.count2 + this.count3\nText(`${this.count1 + this.count2 + this.count3}`) // 重复计算this.count1 + this.count2 + this.count3\nText(`${this.sum}`) // 读取@Computed sum的缓存值，节省上述重复计算\nText(`${this.sum}`) // 读取@Computed sum的缓存值，节省上述重复计算\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在阅读本文档前，建议提前阅读：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#componentv2",
        children: "@ComponentV2"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
        children: "@ObservedV2和@Trace"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local",
        children: "@Local"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(857731)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Computed装饰器从API version 12开始支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始，该装饰器支持在元服务中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，该装饰器支持在ArkTS卡片中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@Computed为方法装饰器，装饰getter方法。@Computed会检测被计算的属性变化，当被计算的属性变化时，@Computed只会被求解一次。不建议在@Computed中修改变量，错误的使用会导致数据无法被追踪或appfreeze等问题，详情见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E4%BD%BF%E7%94%A8%E9%99%90%E5%88%B6",
        children: "使用限制"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "但需要注意，对于简单计算，不建议使用计算属性，因为计算属性本身也有开销。对于复杂的计算，@Computed能带来性能收益。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "装饰器说明",
      children: "装饰器说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Computed语法："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Computed\nget varName(): T {\n    return value;\n}\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "@Computed方法装饰器"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "支持类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getter访问器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "从父组件初始化"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "禁止。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "可初始化子组件"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-param",
              children: "@Param"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "被执行的时机"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@ComponentV2中的@Computed会在自定义组件创建的时候初始化，触发@Computed计算。  @ObservedV2装饰的类中的@Computed，会在@ObservedV2装饰的类实例创建后，异步初始化，触发@Computed计算。  在@Computed中计算的状态变量被改变时，计算属性会重新计算。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "是否允许赋值"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["@Computed装饰的属性是只读的，不允许赋值，详情见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E4%BD%BF%E7%94%A8%E9%99%90%E5%88%B6",
              children: "使用限制"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用限制",
      children: "使用限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@Computed为方法装饰器，仅能装饰getter方法。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Computed\nget fullName() { // 正确用法\n  return this.firstName + ' ' + this.lastName;\n}\n@Computed val: number = 0; // 错误用法，编译时报错\n@Computed\nfunc() { // 错误用法，编译时报错\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@Computed装饰的方法只有在初始化，或者其被计算的状态变量改变时，才会发生重新计算。不建议开发者在@Computed装饰的getter方法中做除获取数据外其余的逻辑操作，如下面例子。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@ComponentV2\nstruct Page {\n  @Local firstName: string = 'Hua';\n  @Local lastName: string = 'Li';\n  @Local showFullNameRequestCount: number = 0;\n  private fullNameRequestCount: number = 0;\n\n  @Computed\n  get fullName() {\n    console.info('fullName');\n    // 不建议在@Computed的计算中做赋值逻辑，因为@Computed本质是一个getter访问器，用来节约重复计算\n    // 在这个例子中，fullNameRequestCount仅代表@Computed计算次数，不能代表fullName被访问的次数\n    this.fullNameRequestCount++;\n    return this.firstName + ' ' + this.lastName;\n  }\n\n  build() {\n    Column() {\n      Text(`${this.fullName}`) // 获取一次fullName\n      Text(`${this.fullName}`) // 获取一次fullName，累计获取两次fullName，但是fullName不会重新计算，读取缓存值\n\n      // 点击Button，获取fullNameRequestCount次数\n      Text(`count ${this.showFullNameRequestCount}`)\n      Button('get fullName').onClick(() => {\n        this.showFullNameRequestCount = this.fullNameRequestCount;\n      })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在@Computed装饰的getter方法中，不能改变参与计算的属性，以防止重复执行计算属性导致的appfreeze。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在下面例子中，计算fullName1时触发了this.lastName的改变，this.lastName的改变，触发fullName2的计算，在fullName2的计算中，改变了this.firstName，再次触发fullName1的重新计算，从而导致循环计算，最终引起appfreeze。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@ComponentV2\nstruct Page {\n  @Local firstName: string = 'Hua';\n  @Local lastName: string = 'Li';\n\n  @Computed\n  get fullName1() {\n    console.info('fullName1');\n    this.lastName += 'a'; // 错误，不能改变参与计算的属性\n    return this.firstName + ' ' + this.lastName;\n  }\n\n  @Computed\n  get fullName2() {\n    console.info('fullName2');\n    this.firstName += 'a'; // 错误，不能改变参与计算的属性\n    return this.firstName + ' ' + this.lastName;\n  }\n\n  build() {\n    Column() {\n      Text(`${this.fullName1}`)\n      Text(`${this.fullName2}`)\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["@Computed不能和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-syntactic-sugar/arkts-new-binding#%E6%A6%82%E8%BF%B0",
            children: "双向绑定!!"
          }), "连用，@Computed装饰的是getter访问器，不会被子组件同步，也不能被赋值。开发者自己实现的计算属性的setter不生效，且产生编译时报错。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@ComponentV2\nstruct Child {\n  @Param double: number = 100;\n  @Event $double: (val: number) => void;\n\n  build() {\n    Button('ChildChange')\n      .onClick(() => {\n        this.$double(200);\n      })\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local count: number = 100;\n\n  @Computed\n  get double() {\n    return this.count * 2;\n  }\n\n  // @Computed装饰的属性是只读的，开发者自己实现的setter不生效，编译时报错。\n  set double(newValue : number) {\n    this.count = newValue / 2;\n  }\n\n  build() {\n    Scroll() {\n      Column({ space: 3 }) {\n        Text(`${this.count}`)\n        // 错误写法，@Computed装饰的属性是只读的，无法与双向绑定连用，编译时报错。\n        Child({ double: this.double!! })\n      }\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@Computed为状态管理V2提供的能力，只能在@ComponentV2和@ObservedV2中使用。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "多个@Computed一起使用时，警惕循环求解，以防止计算过程中的死循环。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Local a : number = 1;\n@Computed\nget b() {\n  return this.a + ' ' + this.c;  // 错误写法，存在循环b -> c -> b\n}\n@Computed\nget c() {\n  return this.a + ' ' + this.b; // 错误写法，存在循环c -> b -> c\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "当被计算的属性变化时computed装饰的getter访问器只会被求解一次",
      children: "当被计算的属性变化时，@Computed装饰的getter访问器只会被求解一次"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在自定义组件中使用计算属性。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "点击第一个Button改变lastName，触发@Computed fullName重新计算。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "this.fullName被绑定在两个Text组件上，观察fullName日志，可以发现，计算只发生了一次。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "对于前两个Text组件，this.lastName + ' '+ this.firstName这段逻辑被求解了两次。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果UI中有多处需要使用this.lastName + ' '+ this.firstName这段计算逻辑，可以使用计算属性，减少计算次数。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "点击第二个Button，age自增，UI无变化。因为age非状态变量，只有被观察到的变化才会触发@Computed fullName重新计算。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = '[Sample_Textcomponent]';\nconst DOMAIN = 0xF811;\nconst BUNDLE = 'Textcomponent_';\n\n@Entry\n@ComponentV2\nstruct CustomComponentUse {\n  @Local firstName: string = 'Li';\n  @Local lastName: string = 'Hua';\n  age: number = 20; // 无法触发Computed\n\n  @Computed\n  get fullName() {\n    hilog.info(DOMAIN, TAG, BUNDLE + '---------Computed----------');\n    return this.firstName + ' ' + this.lastName + this.age;\n  }\n\n  build() {\n    Column() {\n      Text(this.lastName + ' ' + this.firstName)\n      Text(this.lastName + ' ' + this.firstName)\n      Divider()\n      Text(this.fullName)\n      Text(this.fullName)\n      Button('changed lastName')\n        .onClick(() => {\n          this.lastName += 'a';\n        })\n\n      Button('changed age')\n        .onClick(() => {\n          this.age++;  // 无法触发Computed\n        })\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "计算属性本身会带来性能开销，在实际应用开发中需要注意："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "对于简单的计算逻辑，可以不使用计算属性。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果计算逻辑在视图中仅使用一次，则不使用计算属性，直接求解。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在@ObservedV2装饰的类中使用计算属性。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击Button改变lastName，触发@Computed fullName重新计算，且只被计算一次。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = '[Sample_Textcomponent]';\nconst DOMAIN = 0xF811;\nconst BUNDLE = 'Textcomponent_';\n\n@ObservedV2\nclass Name {\n  @Trace public firstName: string = 'Hua';\n  @Trace public lastName: string = 'Li';\n\n  @Computed\n  get fullName() {\n    hilog.info(DOMAIN, TAG, BUNDLE + '---------Computed----------');\n    return this.firstName + ' ' + this.lastName;\n  }\n}\n\nconst name: Name = new Name();\n\n@Entry\n@ComponentV2\nstruct ObservedV2ClassUser {\n  name1: Name = name;\n\n  build() {\n    Column() {\n      Text(this.name1.fullName)\n      Text(this.name1.fullName)\n      Button('changed lastName').onClick(() => {\n        this.name1.lastName += 'a';\n      })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "computed装饰的属性可以被monitor监听变化",
      children: "@Computed装饰的属性可以被@Monitor监听变化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如何使用计算属性求解fahrenheit和kelvin。示例如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击“-”，celsius-- -> fahrenheit -> kelvin --> kelvin变化时调用onKelvinMonitor。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击“+”，celsius++ -> fahrenheit -> kelvin --> kelvin变化时调用onKelvinMonitor。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst TAG = '[Sample_Textcomponent]';\nconst DOMAIN = 0xF811;\nconst BUNDLE = 'Textcomponent_';\n\n@Entry\n@ComponentV2\nstruct ComputedPropertyResolution {\n  @Local celsius: number = 20;\n\n  @Computed\n  get fahrenheit(): number {\n    return this.celsius * 9 / 5 + 32; // C -> F\n  }\n\n  @Computed\n  get kelvin(): number {\n    return (this.fahrenheit - 32) * 5 / 9 + 273.15; // F -> K\n  }\n\n  @Monitor('kelvin')\n  onKelvinMonitor(mon: IMonitor) {\n    hilog.info(DOMAIN, TAG, BUNDLE + 'kelvin changed from' + mon.value()?.before + ' to ' + mon.value()?.now);\n  }\n\n  build() {\n    Column({ space: 20 }) {\n      Row({ space: 20 }) {\n        Button('-')\n          .onClick(() => {\n            this.celsius--;\n          })\n\n        Text(`Celsius ${this.celsius.toFixed(1)}`).fontSize(40)\n\n        Button('+')\n          .onClick(() => {\n            this.celsius++;\n          })\n      }\n\n      Text(`Fahrenheit ${this.fahrenheit.toFixed(2)}`).fontSize(40)\n      Text(`Kelvin ${this.kelvin.toFixed(2)}`).fontSize(40)\n    }\n    .width('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "computed装饰的属性可以初始化param",
      children: "@Computed装饰的属性可以初始化@Param"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面的例子使用@Computed初始化@Param。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击Button('-')和Button('+')改变商品数量，quantity是被@Trace装饰的，其改变时可以被观察到的。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "quantity的改变会触发total和qualifiesForDiscount重新计算，计算商品总价和是否可以享有优惠。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "total和qualifiesForDiscount的改变会触发子组件Child对应Text组件刷新。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@ObservedV2\nclass Article {\n  @Trace public quantity: number = 0;\n  public unitPrice: number = 0;\n\n  constructor(quantity: number, unitPrice: number) {\n    this.quantity = quantity;\n    this.unitPrice = unitPrice;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct ComputingInitParam {\n  @Local shoppingBasket: Article[] = [new Article(1, 20), new Article(5, 2)];\n\n  @Computed\n  get total(): number {\n    return this.shoppingBasket.reduce((acc: number, item: Article) => acc + (item.quantity * item.unitPrice), 0);\n  }\n\n  @Computed\n  get qualifiesForDiscount(): boolean {\n    return this.total >= 100;\n  }\n\n  build() {\n    Column() {\n      Text(`Shopping List: `)\n        .fontSize(30)\n      ForEach(this.shoppingBasket, (item: Article) => {\n        Row() {\n          Text(`unitPrice: ${item.unitPrice}`)\n          Button('-')\n            .onClick(() => {\n              if (item.quantity > 0) {\n                item.quantity--;\n              }\n            })\n          Text(`quantity: ${item.quantity}`)\n          Button('+')\n            .onClick(() => {\n              item.quantity++;\n            })\n        }\n\n        Divider()\n      })\n      Child({ total: this.total, qualifiesForDiscount: this.qualifiesForDiscount })\n    }.alignItems(HorizontalAlign.Start)\n  }\n}\n\n@ComponentV2\nstruct Child {\n  @Param total: number = 0;\n  @Param qualifiesForDiscount: boolean = false;\n\n  build() {\n    Row() {\n      Text(`Total: ${this.total} `)\n        .fontSize(30)\n      Text(`Discount: ${this.qualifiesForDiscount} `)\n        .fontSize(30)\n    }\n  }\n}\n"
          })
        }), "\n"]
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
857731(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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