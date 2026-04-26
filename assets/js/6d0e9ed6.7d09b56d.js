"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["216301"], {
968698(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_2_arkts_v_2_manage_component_state_arkts_new_local_arkts_new_local_md_6d0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-state-management-v-2-arkts-v-2-manage-component-state-arkts-new-local-arkts-new-local-md-6d0.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_2_arkts_v_2_manage_component_state_arkts_new_local_arkts_new_local_md_6d0_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local/arkts-new-local","title":"@Local装饰器：组件内部状态","description":"为了实现对@ComponentV2装饰的自定义组件中变量变化的观测，开发者可以使用@Local装饰器装饰变量。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local/arkts-new-local.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"@Local装饰器：组件内部状态","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-local","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Environment：设备环境查询","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-environment/"},"next":{"title":"@Param：组件外部输入","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-param/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local/arkts-new-local.md


const frontMatter = {
	title: '@Local装饰器：组件内部状态',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-local',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '@Local装饰器：组件内部状态';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "状态管理V1版本@State装饰器的局限性",
  "id": "状态管理v1版本state装饰器的局限性",
  "level": 2
}, {
  "value": "装饰器说明",
  "id": "装饰器说明",
  "level": 2
}, {
  "value": "变量传递",
  "id": "变量传递",
  "level": 2
}, {
  "value": "观察变化",
  "id": "观察变化",
  "level": 2
}, {
  "value": "限制条件",
  "id": "限制条件",
  "level": 2
}, {
  "value": "@Local与@State对比",
  "id": "local与state对比",
  "level": 2
}, {
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "观测对象整体变化",
  "id": "观测对象整体变化",
  "level": 3
}, {
  "value": "装饰Array类型变量",
  "id": "装饰array类型变量",
  "level": 3
}, {
  "value": "装饰Date类型变量",
  "id": "装饰date类型变量",
  "level": 3
}, {
  "value": "装饰Map类型变量",
  "id": "装饰map类型变量",
  "level": 3
}, {
  "value": "装饰Set类型变量",
  "id": "装饰set类型变量",
  "level": 3
}, {
  "value": "联合类型",
  "id": "联合类型",
  "level": 3
}, {
  "value": "常见问题",
  "id": "常见问题",
  "level": 2
}, {
  "value": "在状态管理V2中使用animateTo动画效果异常",
  "id": "在状态管理v2中使用animateto动画效果异常",
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
        id: "local装饰器组件内部状态",
        children: "@Local装饰器：组件内部状态"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了实现对@ComponentV2装饰的自定义组件中变量变化的观测，开发者可以使用@Local装饰器装饰变量。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在阅读本文档前，建议提前阅读：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#componentv2",
        children: "@ComponentV2"
      }), "。常见问题请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/arkts-state-management-faq-inner-component",
        children: "组件内状态变量常见问题"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(824701)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始，在@ComponentV2装饰的自定义组件中支持使用@Local装饰器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始，该装饰器支持在元服务中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，该装饰器支持在ArkTS卡片中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Local表示组件内部的状态，使得自定义组件内部的变量具有观察变化的能力："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "被@Local装饰的变量无法从外部初始化，因此必须在组件内部进行初始化。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当被@Local装饰的变量变化时，会刷新使用该变量的组件。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["@Local支持观测number、boolean、string、Object、class等基本类型以及", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%A3%85%E9%A5%B0array%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
          children: "Array"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%A3%85%E9%A5%B0set%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
          children: "Set"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%A3%85%E9%A5%B0map%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
          children: "Map"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%A3%85%E9%A5%B0date%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
          children: "Date"
        }), "等内置类型。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["@Local的观测能力仅限于被装饰的变量本身。当装饰简单类型时，能够观测到对变量的赋值；当装饰对象类型时，仅能观测到对对象整体的赋值；当装饰数组类型时，能观测到数组整体以及数组元素项的变化；当装饰Array、Set、Map、Date等内置类型时，可以观测到通过API调用带来的变化。详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%A7%82%E5%AF%9F%E5%8F%98%E5%8C%96",
          children: "观察变化"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["@Local支持null、undefined以及", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B",
          children: "联合类型"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "状态管理v1版本state装饰器的局限性",
      children: "状态管理V1版本@State装饰器的局限性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["状态管理V1使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
        children: "@State装饰器"
      }), "定义组件中的基础状态变量，该状态变量常用来作为组件内部状态，在组件内使用。但由于@State装饰器又能够从外部初始化，因此无法确保@State装饰变量的初始值一定为组件内部定义的值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class ComponentInfo {\n  public name: string;\n  public count: number;\n  public message: string;\n\n  constructor(name: string, count: number, message: string) {\n    this.name = name;\n    this.count = count;\n    this.message = message;\n  }\n}\n\n@Component\nstruct Child {\n  @State componentInfo: ComponentInfo = new ComponentInfo('Child', 1, 'Hello World'); // 父组件传递的componentInfo会覆盖初始值\n\n  build() {\n    Column() {\n      Text(`componentInfo.message is ${this.componentInfo.message}`)\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Column() {\n      Child({ componentInfo: new ComponentInfo('Unknown', 0, 'Error') })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述代码中，可以通过在初始化Child自定义组件时传入新的值来覆盖作为内部状态变量使用的componentInfo。但Child自定义组件并不能感知到componentInfo从外部进行了初始化，这不利于自定义组件内部状态的管理。因此推出@Local装饰器表示组件的内部状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "装饰器说明",
      children: "装饰器说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "@Local变量装饰器"
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
            children: "可装饰的变量类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object、class、string、number、boolean、enum等基本类型以及Array、Date、Map、Set等内置类型。支持null、undefined以及联合类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "装饰变量的初始值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须本地初始化，不允许外部传入初始化。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "变量传递",
      children: "变量传递"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "传递规则"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "从父组件初始化"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Local装饰的变量仅允许本地初始化，无法从外部传入初始化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "初始化子组件"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["@Local装饰的变量可以初始化子组件中", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-param",
              children: "@Param"
            }), "装饰的变量。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "观察变化",
      children: "观察变化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用@Local装饰的变量具有观察变化的能力。当装饰的变量发生变化时，会触发该变量绑定的UI组件刷新。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当装饰的变量类型为boolean、string、number时，可以观察到对变量赋值的变化。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@ComponentV2\nstruct Index {\n  // 点击的次数\n  @Local count: number = 0;\n  @Local message: string = 'Hello';\n  @Local flag: boolean = false;\n\n  build() {\n    Column() {\n      Text(`${this.count}`)\n      Text(`${this.message}`)\n      Text(`${this.flag}`)\n      Button('change Local')\n        .onClick(() => {\n          // 当@Local装饰简单类型时，能够观测到对变量的赋值\n          this.count++;\n          this.message += ' World';\n          this.flag = !this.flag;\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当装饰的变量类型为类对象时，仅可以观察到对类对象整体赋值的变化，无法直接观察到对类成员属性赋值的变化，对类成员属性的观察依赖", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
            children: "@ObservedV2"
          }), "和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
            children: "@Trace"
          }), "装饰器，也可以使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-makeobserved",
            children: "makeObserved"
          }), "将该对象变为可观察对象。注意，API version 19之前，@Local无法和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
            children: "@Observed"
          }), "装饰的类实例对象混用。API version 19及以后，支持部分状态管理V1V2混用能力，允许@Local和@Observed同时使用，详情见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/v1v2-mixing/arkts-v1-v2-mixusage",
            children: "状态管理V1和V2混用指导（API version 19及之后）"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class RawObject {\n  public name: string;\n\n  constructor(name: string) {\n    this.name = name;\n  }\n}\n\n@ObservedV2\nclass ObservedObject {\n  @Trace public name: string;\n\n  constructor(name: string) {\n    this.name = name;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local rawObject: RawObject = new RawObject('rawObject');\n  @Local observedObject: ObservedObject = new ObservedObject('observedObject');\n\n  build() {\n    Column() {\n      Text(`${this.rawObject.name}`)\n      Text(`${this.observedObject.name}`)\n      Button('change object')\n        .onClick(() => {\n          // 对类对象整体的修改均能观察到\n          this.rawObject = new RawObject('new rawObject');\n          this.observedObject = new ObservedObject('new observedObject');\n        })\n      Button('change name')\n        .onClick(() => {\n          // @Local不具备观察类对象属性的能力，因此对rawObject.name的修改无法观察到\n          this.rawObject.name = 'new rawObject name';\n          // 由于ObservedObject的name属性被@Trace装饰，因此对observedObject.name的修改能被观察到\n          this.observedObject.name = 'new observedObject name';\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当装饰简单类型数组时，可以观察到数组整体或数组项的变化。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@ComponentV2\nstruct Index {\n  @Local numArr: number[] = [1, 2, 3, 4, 5]; // 使用@Local装饰一维数组变量\n  @Local dimensionTwo: number[][] = [[1, 2, 3], [4, 5, 6]]; // 使用@Local装饰二维数组变量\n\n  build() {\n    Column() {\n      Text(`${this.numArr[0]}`)\n      Text(`${this.numArr[1]}`)\n      Text(`${this.numArr[2]}`)\n      Text(`${this.dimensionTwo[0][0]}`)\n      Text(`${this.dimensionTwo[1][1]}`)\n      Button('change array item') // 按钮1：修改数组中的特定元素\n        .onClick(() => {\n          this.numArr[0]++;\n          this.numArr[1] += 2;\n          this.dimensionTwo[0][0] = 0;\n          this.dimensionTwo[1][1] = 0;\n        })\n      Button('change whole array') // 按钮2：替换整个数组\n        .onClick(() => {\n          this.numArr = [5, 4, 3, 2, 1];\n          this.dimensionTwo = [[7, 8, 9], [0, 1, 2]];\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当装饰的变量是嵌套类或对象数组时，@Local无法观察深层对象属性的变化。对深层对象属性的观测依赖@ObservedV2与@Trace装饰器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@ObservedV2\nclass Region {\n  @Trace public x: number;\n  @Trace public y: number;\n\n  constructor(x: number, y: number) {\n    this.x = x;\n    this.y = y;\n  }\n}\n\n@ObservedV2\nclass Info {\n  @Trace public region: Region;\n  @Trace public name: string;\n\n  constructor(name: string, x: number, y: number) {\n    this.name = name;\n    this.region = new Region(x, y);\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local infoArr: Info[] = [new Info('Ocean', 28, 120), new Info('Mountain', 26, 20)];\n  @Local originInfo: Info = new Info('Origin', 0, 0);\n\n  build() {\n    Column() {\n      ForEach(this.infoArr, (info: Info) => {\n        Row() {\n          Text(`name: ${info.name}`)\n          Text(`region: ${info.region.x}-${info.region.y}`)\n        }\n      })\n      Row() {\n        Text(`Origin name: ${this.originInfo.name}`)\n        Text(`Origin region: ${this.originInfo.region.x}-${this.originInfo.region.y}`)\n      }\n\n      Button('change infoArr item')\n        .onClick(() => {\n          // 由于属性name被@Trace装饰，所以能够观察到\n          this.infoArr[0].name = 'Win';\n        })\n      Button('change originInfo')\n        .onClick(() => {\n          // 由于变量originInfo被@Local装饰，所以能够观察到\n          this.originInfo = new Info('Origin', 100, 100);\n        })\n      Button('change originInfo region')\n        .onClick(() => {\n          // 由于属性x、y被@Trace装饰，所以能够观察到\n          this.originInfo.region.x = 25;\n          this.originInfo.region.y = 25;\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当装饰内置类型时，可以观察到变量整体赋值及API调用带来的变化。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "可观察变化的API"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Array"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "push, pop, shift, unshift, splice, copyWithin, fill, reverse, sort"
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
      id: "限制条件",
      children: "限制条件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Local装饰器存在以下使用限制："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["@Local装饰器只能在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#componentv2",
            children: "@ComponentV2"
          }), "装饰的自定义组件中使用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@ComponentV2\nstruct MyComponent {\n  @Local message: string = 'Hello World'; // 正确用法\n  build() {\n  }\n}\n@Component\nstruct TestComponent {\n  @Local message: string = 'Hello World'; // 错误用法，编译时报错\n  build() {\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@Local装饰的变量表示组件内部状态，不允许从外部传入初始化。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@ComponentV2\nstruct ChildComponent {\n  @Local message: string = 'Hello World';\n  build() {\n  }\n}\n@ComponentV2\nstruct MyComponent {\n  build() {\n    ChildComponent({ message: 'Hello' }) // 错误用法，编译时报错\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "local与state对比",
      children: "@Local与@State对比"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Local与@State的用法、功能对比如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "用法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "@State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "@Local"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "从父组件初始化"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可选。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不允许外部初始化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "观察能力"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "能观测变量本身以及一层的成员属性，无法深度观测。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "能观测变量本身，深度观测依赖@Trace装饰器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "数据传递"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可以作为数据源和子组件中状态变量同步。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可以作为数据源和子组件中状态变量同步。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "观测对象整体变化",
      children: "观测对象整体变化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "被@ObservedV2与@Trace装饰的类对象实例，具有深度观测对象属性的能力。但当对对象整体赋值时，UI却无法刷新。使用@Local装饰对象，可以达到观测对象本身变化的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass Info {\n  @Trace public name: string;\n  @Trace public age: number;\n\n  constructor(name: string, age: number) {\n    this.name = name;\n    this.age = age;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  info: Info = new Info('Tom', 25);\n  @Local localInfo: Info = new Info('Tom', 25);\n\n  build() {\n    Row() {\n      Column() {\n        Text(`info: ${this.info.name}-${this.info.age}`) // Text1\n          .margin(10)\n        Text(`localInfo: ${this.localInfo.name}-${this.localInfo.age}`) // Text2\n          .margin(10)\n        Button('change info&localInfo')\n          .onClick(() => {\n            this.info = new Info('Lucy', 18); // Text1不会刷新\n            this.localInfo = new Info('Lucy', 18); // Text2会刷新\n          })\n          .margin(10)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(298964)/* ["default"] */.A) + "",
        width: "420",
        height: "215"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰array类型变量",
      children: "装饰Array类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当装饰的对象是Array时，可以观察到Array整体的赋值，同时可以通过调用Array的接口push, pop, shift, unshift, splice, copyWithin, fill, reverse, sort更新Array中的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Fruit {\n  public name: string;\n\n  constructor(name: string) {\n    this.name = name;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local fruits: Fruit[] = [new Fruit('apple'), new Fruit('banana')]; // 使用@Local装饰Array类型变量\n\n  build() {\n    Row() {\n      Column() {\n        ForEach(this.fruits, (item: Fruit) => {\n          Text(`${item.name}`)\n            .fontSize(20)\n            .margin(10)\n        })\n        // 对数组整体重新赋值，触发UI刷新\n        Button('Reset array')\n          .onClick(() => {\n            this.fruits = [new Fruit('strawberry'), new Fruit('blueberry')];\n          })\n          .width(300)\n          .margin(10)\n        // 新增数组元素，触发UI刷新\n        Button('Push element')\n          .onClick(() => {\n            this.fruits.push(new Fruit('cherry'));\n          })\n          .width(300)\n          .margin(10)\n        // 翻转数组元素，触发UI刷新\n        Button('Reverse array')\n          .onClick(() => {\n            this.fruits.reverse();\n          })\n          .width(300)\n          .margin(10)\n        // 使用同一元素填充数组，触发UI刷新\n        Button('Fill array')\n          .onClick(() => {\n            this.fruits.fill(new Fruit('apple'));\n          })\n          .width(300)\n          .margin(10)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(727888)/* ["default"] */.A) + "",
        width: "324",
        height: "373"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰date类型变量",
      children: "装饰Date类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当装饰的对象是Date时，可以观察到Date整体的赋值，同时可通过调用Date的接口setFullYear, setMonth, setDate, setHours, setMinutes, setSeconds, setMilliseconds, setTime, setUTCFullYear, setUTCMonth, setUTCDate, setUTCHours, setUTCMinutes, setUTCSeconds, setUTCMilliseconds更新Date的属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct DatePickerExample {\n  @Local selectedDate: Date = new Date('2021-08-08'); // 使用@Local装饰Date类型变量\n\n  build() {\n    Row() {\n      Column() {\n        // 通过给selectedDate重新赋值新的Date实例，触发UI刷新\n        Button('set selectedDate to 2023-07-08')\n          .onClick(() => {\n            this.selectedDate = new Date('2023-07-08');\n          })\n          .margin(10)\n          .width(300)\n        // 调用Date的setFullYear接口修改年份，触发UI刷新\n        Button('increase the year by 1')\n          .onClick(() => {\n            this.selectedDate.setFullYear(this.selectedDate.getFullYear() + 1);\n          })\n          .margin(10)\n          .width(300)\n        // 调用Date的setMonth接口修改月份，触发UI刷新\n        Button('increase the month by 1')\n          .onClick(() => {\n            this.selectedDate.setMonth(this.selectedDate.getMonth() + 1);\n          })\n          .margin(10)\n          .width(300)\n        // 调用Date的setDate接口修改日期，触发UI刷新\n        Button('increase the day by 1')\n          .onClick(() => {\n            this.selectedDate.setDate(this.selectedDate.getDate() + 1);\n          })\n          .margin(10)\n          .width(300)\n        DatePicker({\n          start: new Date('1970-1-1'),\n          end: new Date('2100-1-1'),\n          selected: this.selectedDate\n        }).margin(20)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(882690)/* ["default"] */.A) + "",
        width: "380",
        height: "530"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰map类型变量",
      children: "装饰Map类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当装饰的对象是Map时，可以观察到对Map整体的赋值，同时可以通过调用Map的接口set, clear, delete更新Map中的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct MapSample {\n  @Local fruits: Map<string, number> = new Map([['apple', 1], ['banana', 2]]); // 使用@Local装饰Map类型变量\n\n  build() {\n    Row() {\n      Column() {\n        ForEach(Array.from(this.fruits.entries()), (item: [string, number]) => {\n          Text(`key: ${item[0]}, value: ${item[1]}`)\n            .fontSize(20)\n            .margin(10)\n        })\n        // 新增键值对，触发UI刷新\n        Button('Set entry cherry')\n          .onClick(() => {\n            this.fruits.set('cherry', 3);\n          })\n          .width(300)\n          .margin(10)\n        // 更新键值对，触发UI刷新\n        Button('Update entry apple')\n          .onClick(() => {\n            this.fruits.set('apple', 4);\n          })\n          .width(300)\n          .margin(10)\n        // 删除键值对，触发UI刷新\n        Button('Delete entry apple')\n          .onClick(() => {\n            this.fruits.delete('apple');\n          })\n          .width(300)\n          .margin(10)\n        // 对Map整体重新赋值，触发UI刷新\n        Button('Reset map')\n          .onClick(() => {\n            this.fruits = new Map([['strawberry', 9], ['blueberry', 8]]);\n          })\n          .width(300)\n          .margin(10)\n        // 清空Map，触发UI刷新\n        Button('Clear map')\n          .onClick(() => {\n            this.fruits.clear();\n          })\n          .width(300)\n          .margin(10)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(506282)/* ["default"] */.A) + "",
        width: "420",
        height: "539"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰set类型变量",
      children: "装饰Set类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当装饰的对象是Set时，可以观察到对Set整体的赋值，同时可以通过调用Set的接口add, clear, delete更新Set中的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct SetSample {\n  @Local fruits: Set<string> = new Set(['apple', 'banana']); // 使用@Local装饰Set类型变量\n\n  build() {\n    Row() {\n      Column() {\n        ForEach(Array.from(this.fruits.entries()), (item: [number, number]) => {\n          Text(`${item[0]}`)\n            .fontSize(20)\n            .margin(10)\n        })\n        // 新增元素，触发UI刷新\n        Button('Add element')\n          .onClick(() => {\n            this.fruits.add('cherry');\n          })\n          .width(300)\n          .margin(10)\n        // 删除元素，触发UI刷新\n        Button('Delete element apple')\n          .onClick(() => {\n            this.fruits.delete('apple');\n          })\n          .width(300)\n          .margin(10)\n        // 对Set整体重新赋值，触发UI刷新\n        Button('Reset set')\n          .onClick(() => {\n            this.fruits = new Set(['strawberry', 'blueberry']);\n          })\n          .width(300)\n          .margin(10)\n        // 清空Set，触发UI刷新\n        Button('Clear set')\n          .onClick(() => {\n            this.fruits.clear();\n          })\n          .width(300)\n          .margin(10)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(467266)/* ["default"] */.A) + "",
        width: "420",
        height: "459"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "联合类型",
      children: "联合类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Local支持null、undefined以及联合类型。在下面的示例中，count类型为number | undefined，点击改变count的类型，UI会随之刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct Index {\n  @Local count: number | undefined = 10; // 使用@Local装饰联合类型变量\n\n  build() {\n    Row() {\n      Column() {\n        Text(`count: ${this.count}`)\n        // 将联合类型变量从number切换为undefined，触发UI刷新\n        Button('change to undefined')\n          .onClick(() => {\n            this.count = undefined;\n          })\n          .width(300)\n          .margin(10)\n        // 将联合类型变量从undefined切换为number，触发UI刷新\n        Button('change to number')\n          .onClick(() => {\n            this.count = 10;\n          })\n          .width(300)\n          .margin(10)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(774488)/* ["default"] */.A) + "",
        width: "420",
        height: "206"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "常见问题",
      children: "常见问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "在状态管理v2中使用animateto动画效果异常",
      children: "在状态管理V2中使用animateTo动画效果异常"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在下面的场景中，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#animateto",
        children: "animateTo"
      }), "暂不支持直接在状态管理V2中使用。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct Index {\n  @Local w: number = 50; // 宽度\n  @Local h: number = 50; // 高度\n  @Local message: string = 'Hello';\n\n  build() {\n    Column() {\n      Button('change size')\n        .margin(20)\n        .onClick(() => {\n          // 在执行动画前，存在额外的修改\n          this.w = 100;\n          this.h = 100;\n          this.message = 'Hello World';\n          this.getUIContext().animateTo({\n            duration: 1000\n          }, () => {\n            this.w = 200;\n            this.h = 200;\n            this.message = 'Hello ArkUI';\n          })\n        })\n      Column() {\n        Text(`${this.message}`)\n      }\n      .backgroundColor('#ff17a98d')\n      .width(this.w)\n      .height(this.h)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述代码中，开发者预期的动画效果是：绿色矩形从长宽100变为200，字符串从Hello World变为Hello ArkUI。但由于当前animateTo与V2的刷新机制不兼容，执行动画前的额外修改未生效，实际显示的动画效果是：绿色矩形从长宽50变为200，字符串从Hello变为Hello ArkUI。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(199313)/* ["default"] */.A) + "",
        width: "275",
        height: "314"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 22开始，可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-uiutils/arkts-new-applysync-flushupdates-flushuiupdates",
        children: "applySync接口"
      }), "实现预期的显示效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIUtils } from '@kit.ArkUI';\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local w: number = 50; // 宽度\n  @Local h: number = 50; // 高度\n  @Local message: string = 'Hello';\n\n  build() {\n    Column() {\n      Button('change size')\n        .margin(20)\n        .onClick(() => {\n          // 在执行动画前，存在额外的修改\n          UIUtils.applySync(() => {\n            this.w = 100;\n            this.h = 100;\n            this.message = 'Hello World';\n          })\n          this.getUIContext().animateTo({\n            duration: 1000\n          }, () => {\n            this.w = 200;\n            this.h = 200;\n            this.message = 'Hello ArkUI';\n          })\n        })\n      Column() {\n        Text(`${this.message}`)\n      }\n      .backgroundColor('#ff17a98d')\n      .width(this.w)\n      .height(this.h)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "原理为使用applySync接口同步刷新闭包函数内的状态变量变化，再执行原来的动画达成预期的效果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(955305)/* ["default"] */.A) + "",
        width: "275",
        height: "314"
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
199313(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957616-c0eff502b65d06cb2c01ecccc3a8fbe0.gif");

},
506282(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477615-e75490de24c8e23c86e303ad676e07b2.gif");

},
824701(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
467266(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797966-a211135b26a8fb0c3f4be170af1f90fc.gif");

},
727888(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437659-34238550229c58bd28b37dc2545d355e.gif");

},
955305(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477617-7c9d4055b8aa9c487454a67edb9f55d9.gif");

},
882690(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957614-c74352c48395d8e24cb5d019878fc0f8.gif");

},
774488(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437661-63761f827cb050c1d5650826f04fba7c.gif");

},
298964(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797964-dc1da779e637562f343825e3de1cb865.gif");

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