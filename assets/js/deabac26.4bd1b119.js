"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["138788"], {
380627(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_v_1_v_2_guide_v_1_v_2_mixing_arkts_v_1_v_2_mixusage_before_api_version_arkts_v_1_v_2_mixusage_before_api_version_md_dea_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-v-1-v-2-guide-v-1-v-2-mixing-arkts-v-1-v-2-mixusage-before-api-version-arkts-v-1-v-2-mixusage-before-api-version-md-dea.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_v_1_v_2_guide_v_1_v_2_mixing_arkts_v_1_v_2_mixusage_before_api_version_arkts_v_1_v_2_mixusage_before_api_version_md_dea_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/v1v2-mixing/arkts-v1-v2-mixusage-before-api-version/arkts-v1-v2-mixusage-before-api-version","title":"状态管理V1和V2混用指导（API version 19前）","description":"概述","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/v1v2-mixing/arkts-v1-v2-mixusage-before-api-version/arkts-v1-v2-mixusage-before-api-version.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/v1v2-mixing/arkts-v1-v2-mixusage-before-api-version","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/v1v2-mixing/arkts-v1-v2-mixusage-before-api-version/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/v1v2-mixing/arkts-v1-v2-mixusage-before-api-version/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"状态管理V1和V2混用指导（API version 19前）","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-v1-v2-mixusage-before-api-version","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"AnimateTo使用迁移","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/arkts-state-management-v1-v2-migration-guide/arkts-v1-v2-migration-animateto/"},"next":{"title":"状态管理V1和V2混用指导（API version 19及之后）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/v1v2-mixing/arkts-v1-v2-mixusage/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/v1v2-mixing/arkts-v1-v2-mixusage-before-api-version/arkts-v1-v2-mixusage-before-api-version.md


const frontMatter = {
	title: '状态管理V1和V2混用指导（API version 19前）',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-v1-v2-mixusage-before-api-version',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '状态管理V1和V2混用指导（API version 19前）';

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
  "value": "V1中使用V2的自定义组件",
  "id": "v1中使用v2的自定义组件",
  "level": 2
}, {
  "value": "不传递变量",
  "id": "不传递变量",
  "level": 3
}, {
  "value": "传递未被装饰的变量",
  "id": "传递未被装饰的变量",
  "level": 3
}, {
  "value": "传递简单类型状态变量",
  "id": "传递简单类型状态变量",
  "level": 3
}, {
  "value": "传递class类型状态变量",
  "id": "传递class类型状态变量",
  "level": 3
}, {
  "value": "传递嵌套对象",
  "id": "传递嵌套对象",
  "level": 3
}, {
  "value": "V2组件使用V1组件",
  "id": "v2组件使用v1组件",
  "level": 2
}, {
  "value": "传递简单类型状态变量",
  "id": "传递简单类型状态变量-1",
  "level": 3
}, {
  "value": "传递class类型",
  "id": "传递class类型",
  "level": 3
}, {
  "value": "传递普通内置类型",
  "id": "传递普通内置类型",
  "level": 3
}, {
  "value": "混用场景总结",
  "id": "混用场景总结",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "状态管理v1和v2混用指导api-version-19前",
        children: "状态管理V1和V2混用指导（API version 19前）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(392803)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文档中使用“->”表示变量的传递，比如“V1->V2”，表示V1状态变量向V2状态变量传递。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在API version 19之前，混用场景有相对严格的校验，状态管理V1与V2的混用规则如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "1. V1->V2规则总结"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "V1的自定义组件中不可以使用V2的装饰器，否则编译报错。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当组件间不传递变量时，V1的自定义组件中可以使用V2的自定义组件，包括导入第三方的@ComponentV2装饰的自定义组件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "组件间存在变量传递时，V1的变量传递给V2的自定义组件，有以下限制："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "V1中未被装饰器装饰的变量（后称普通变量）：V2只能使用@Param接收。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "V1中被装饰器装饰的变量（后称状态变量）：V2只能通过@Param装饰器接收，且仅限于boolean、number、enum、string、undefined、null这些简单类型数据。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "2. V2->V1规则总结"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "V2的自定义组件中不可以使用V1的装饰器，否则编译报错。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "组件间不存在变量传递时，V2自定义组件可以使用V1的自定义组件，包括导入第三方的@Component装饰的自定义组件。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "组件间存在变量传递时，V2的变量传递给V1的自定义组件，有以下限制："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "V2普通变量（未使用状态变量装饰器）传递给V1自定义组件："
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["如果V1使用状态变量接收该数据，只能使用", (0,jsx_runtime.jsx)(_components.a, {
                href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
                children: "@State"
              }), "、", (0,jsx_runtime.jsx)(_components.a, {
                href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop",
                children: "@Prop"
              }), "、", (0,jsx_runtime.jsx)(_components.a, {
                href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume",
                children: "@Provide"
              }), "这三种V1的状态变量装饰器。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "V2状态变量（使用状态变量装饰器）传递给V1自定义组件："
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["如果V1使用状态变量装饰器（同样仅限@State、@Prop、@Provide支持）装饰接收的数据，不支持内置类型数据：Array、Set、Map、Date。需要注意V2状态变量支持Function类型，但是V1的状态变量装饰器均不支持Function类型，传递Function类型会导致运行时校验报错。以@State为例，详情见", (0,jsx_runtime.jsx)(_components.a, {
                href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state#%E9%99%90%E5%88%B6%E6%9D%A1%E4%BB%B6",
                children: "@State限制条件"
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["V1中", (0,jsx_runtime.jsx)(_components.a, {
                href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link",
                children: "@Link"
              }), "遵循其原本初始化规则，只能被V1状态变量初始化，详情见", (0,jsx_runtime.jsx)(_components.a, {
                href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link#%E5%8F%98%E9%87%8F%E7%9A%84%E4%BC%A0%E9%80%92%E8%AE%BF%E9%97%AE%E8%A7%84%E5%88%99%E8%AF%B4%E6%98%8E",
                children: "@Link初始化规则示意图"
              }), "。"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制条件",
      children: "限制条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "V1和V2的装饰器不允许混用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "V1的组件内装饰器不支持在V2的自定义组件中使用，V2的组件内装饰器也不支持在V1的自定义组件中使用，编译会报错。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["V1装饰器不能和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-data-object-state/arkts-new-observedv2-and-trace",
            children: "@ObservedV2"
          }), "一起使用，否则编译报错。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["V2装饰器不能和", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
            children: "@Observed"
          }), "一起使用，否则编译报错。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "V1->V2传递状态变量只支持简单类型，不允许传复杂类型的状态变量。比如传递@Observed装饰的class、装饰器修饰的built-in类型（Array、Map、Set、Date），编译报错。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "V2->V1可以传简单类型状态变量和普通class。如果传递@ObservedV2装饰的class、装饰器修饰的built-in类型（Array、Map、Set、Date），编译报错。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "V1中@ObjectLink只接受@Observed装饰的class初始化。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["V1中", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link",
            children: "@Link"
          }), "遵循其原本初始化规则，只能被V1状态变量初始化，详情见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link#%E5%8F%98%E9%87%8F%E7%9A%84%E4%BC%A0%E9%80%92%E8%AE%BF%E9%97%AE%E8%A7%84%E5%88%99%E8%AF%B4%E6%98%8E",
            children: "@Link初始化规则示意图"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "多个装饰器不允许装饰同一个变量（@Watch、@Once、@Require除外）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@State @Prop message: string = \"\";  // 多个V1的装饰器不可以修饰同一个变量，编译器报错\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Local @Param message: string = 'Hello World'; // 多个V2的装饰器不允许修饰同一个变量，编译器报错\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "除了@Watch、@Once、@Require这些能力扩展装饰器可以与其他装饰器配合使用外，其他装饰器不允许装饰同一个变量。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "v1中使用v2的自定义组件",
      children: "V1中使用V2的自定义组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不传递变量",
      children: "不传递变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在V1中使用V2的自定义组件时，如果不存在变量传递，则不会产生影响。以下示例代码中，ChildSix是不接受参数的V2自定义组件，IndexSix可直接使用ChildSix。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ComponentV2\nstruct ChildSix {\n  @Local message: string = 'hello';\n\n  build() {\n    Column() {\n      Text(this.message)\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n        .onClick(() => {\n          this.message = 'world';\n        })\n    }\n  }\n}\n\n@Entry\n@Component\nstruct IndexSix {\n  @State message: string = 'Hello World';\n\n  build() {\n    Column() {\n      Text(this.message)\n        .fontSize(50)\n        .fontWeight(FontWeight.Bold)\n        .onClick(() => {\n          this.message = 'world hello';\n        })\n      Divider()\n        .color(Color.Blue)\n      // 可以只是使用无参数的V2组件\n      ChildSix()\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "传递未被装饰的变量",
      children: "传递未被装饰的变量"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当变量未被装饰器装饰时，不具备被观测的能力。将该变量传递给V2时，需注意V2组件对数据输入有严格的管理，必须通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-param",
        children: "@Param"
      }), "装饰器接收。V2中接收数据的观测能力为@Param能力，对于接收的Class，需要通过@ObservedV2和@Trace才能观察变化。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下代码示例中，定义了ChildTwo为V2组件，组件接受message、undefinedVal、info等参数。ChildTwo中用@Param接收的简单类型message和undefinedVal，能观测到变化；Class类型变量info未被@ObservedV2和@Trace修饰，无法观测到类属性变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class InfoTwo {\n  public myId: number;\n  public name: string;\n\n  constructor(myId?: number, name?: string) {\n    this.myId = myId || 0;\n    this.name = name || 'aaa';\n  }\n}\n\n@ComponentV2\nstruct ChildTwo {\n  // V2对数据输入有严格的管理，从父组件传入数据时，必须使用@Param装饰器进行数据接收\n  @Param @Once message: string = 'hello'; // 可以观测到变化，同步回父组件依赖@Event，使用了@Once可以修改@Param装饰的变量\n  @Param @Once undefinedVal: string | undefined = undefined; // 使用了@Once可以修改@Param装饰的变量\n  @Param info: InfoTwo = new InfoTwo(); // 观测不到类属性变化\n  @Require @Param set: Set<number>;\n\n  build() {\n    Column() {\n      Text(`child message:${this.message}`) // 显示message变量\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n        .onClick(() => {\n          this.message = 'world'; // 刷新当前组件\n        })\n\n      Divider()\n        .color(Color.Blue)\n      Text(`undefinedVal:${this.undefinedVal}`) // 显示undefinedVal变量\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n        .onClick(() => {\n          this.undefinedVal = 'change to define'; // 刷新当前组件\n        })\n      Divider()\n        .color(Color.Blue)\n      Text(`info id:${this.info.myId}`) // 显示info.myId变量\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n        .onClick(() => {\n          this.info.myId++; // 不刷新\n        })\n      Divider()\n        .color(Color.Blue)\n      ForEach(Array.from(this.set.values()), (item: number) => { // 显示set变量\n        Text(`${item}`)\n          .fontSize(30)\n      })\n    }\n    .margin(5)\n  }\n}\n\n@Entry\n@Component\nstruct IndexTwo {\n  message: string = 'Hello World'; // 简单数据\n  undefinedVal: undefined = undefined; // 简单类型，undefined\n  info: InfoTwo = new InfoTwo(); // Class类型\n  set: Set<number> = new Set([10, 20]); // 内置类型\n\n  build() {\n    Column() {\n      Text(`message:${this.message}`)\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n        .onClick(() => {\n          this.message = 'world hello';\n        })\n      Divider()\n        .color(Color.Blue)\n      ChildTwo({\n        message: this.message,\n        undefinedVal: this.undefinedVal,\n        info: this.info,\n        set: this.set\n      })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "传递简单类型状态变量",
      children: "传递简单类型状态变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在V1中使用V2组件时，V1组件中的装饰器仅支持修饰简单类型数据，包括：boolean、number、string、null、undefined。V2组件使用@Param接收参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若在V1中使用V2组件时，传递了使用@State装饰的Class类型或内置类型（Array、Map、Set、Date），会造成编译报错。以下示例代码中，info和set变量需删除@State装饰器。@Prop、@Link、@ObjectLink、@Provide、@Consume、@StorageProp、@StorageLink、@LocalStorageProp、@LocalStorageLink的行为和@State保持一致。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class InfoFour {\n  public myId: number;\n  public name: string;\n\n  constructor(myId?: number, name?: string) {\n    this.myId = myId || 0;\n    this.name = name || 'aaa';\n  }\n}\n\n@ComponentV2\nstruct ChildFour {\n  // V2对数据输入有严格的管理，从父组件传入数据时，必须使用@Param装饰器进行数据接收\n  @Param @Once message: string = 'hello';\n  @Param @Once undefinedVal: string | undefined = undefined; // 使用了@Once可以修改@Param装饰的变量\n  @Param info: InfoFour = new InfoFour();\n  @Require @Param set: Set<number>;\n\n  build() {\n    Column() {\n      Text(`child message:${this.message}`) // 显示message变量\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n        .onClick(() => {\n          this.message = 'world';\n        })\n      Divider()\n        .color(Color.Blue)\n      Text(`undefinedVal:${this.undefinedVal}`) // 显示undefinedVal变量\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n        .onClick(() => {\n          this.undefinedVal = 'change to define';\n        })\n      Divider()\n        .color(Color.Blue)\n      Text(`info id:${this.info.myId}`) // 显示info.myId变量\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n        .onClick(() => {\n          this.info.myId++;\n        })\n      Divider()\n        .color(Color.Blue)\n      ForEach(Array.from(this.set.values()), (item: number) => { // 显示set变量\n        Text(`${item}`)\n          .fontSize(30)\n      })\n    }\n    .margin(5)\n  }\n}\n\n@Entry\n@Component\nstruct IndexFour {\n  @State message: string = 'Hello World'; // 简单类型数据，支持\n  @State undefinedVal: undefined = undefined; // 简单类型数据，undefined，支持\n  @State info: InfoFour = new InfoFour(); // Class类型，不支持传递，编译器报错；消除编译错误请去掉@State\n  @State set: Set<number> = new Set([10, 20]); // 内置类型，不支持传递，编译器报错；消除编译错误请去掉@State\n\n  build() {\n    Column() {\n      Text(`message:${this.message}`)\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n        .onClick(() => {\n          this.message = 'world hello';\n        })\n      Divider()\n        .color(Color.Blue)\n      ChildFour({\n        message: this.message,\n        undefinedVal: this.undefinedVal,\n        info: this.info,\n        set: this.set\n      })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "传递class类型状态变量",
      children: "传递class类型状态变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由于在V1中使用V2组件传递参数，V1的装饰器仅支持修饰简单类型数据，不支持class类型。以下给出class类型数据传递的场景的迁移方案。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "@Observed装饰的class"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2装饰器不能和@Observed一起使用，V1传递@Observed装饰的class类给V2自定义组件时，不直接用@Param接收数据，如下图所示先定义V1BridgeComponent组件作为桥接层。在桥接层监听V1组件的数据，同步到V2定义的单例数据。V1组件直接使用V1BridgeComponent，在V1BridgeComponent中引入V2自定义组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(866822)/* ["default"] */.A) + "",
        width: "1424",
        height: "642"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "具体实现可参考以下示例代码："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用@ObservedV2装饰class单例ViewModelV2，V2组件V2Comp直接使用单例ViewModelV2实例化进行UI渲染。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "V1组件V1Comp和V2组件V2Comp之间新增@Component修饰的桥接组件V1BridgeComponent，用@Watch监听，将V1中@Observed修饰的class数据赋值给V2中@ObservedV2修饰的class数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "V1组件V1Comp中直接引入桥接组件V1BridgeComponent，桥接组件V1BridgeComponent引入V2组件V2Comp。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Observed\nclass ViewModelV1 {\n  @Track public fontSize: number;\n\n  constructor(fontSize: number) {\n    this.fontSize = fontSize;\n  }\n\n  updateFontSize(fontSize: number) {\n    this.fontSize = fontSize;\n  }\n}\n\n// 存量的V1组件\n@Entry\n@Component\nstruct V1Comp {\n  build() {\n    Column() {\n      // ------------ V1桥接组件 ------------\n      V1BridgeComponent()\n\n      // ....\n\n    }\n  }\n}\n\n// V1桥接组件\n@Component\nstruct V1BridgeComponent {\n  @State @Watch('onDirectionChange') viewModel: ViewModelV1 = new ViewModelV1(20);\n\n  onDirectionChange() {\n    // 将V1的数据转成V2的数据\n    ViewModelV2.instance().fontSize = this.viewModel.fontSize;\n  }\n\n  build() {\n    Column() {\n      Text(`V1组件原始数据fontSize-${this.viewModel.fontSize}`)\n        .fontSize(this.viewModel.fontSize)\n\n      Button('V1组件修改字体大小').onClick(() => {\n        this.viewModel.updateFontSize(10); // V1 V2组件刷新\n      })\n\n      // ------------ V2业务组件 ------------\n      V2Comp()\n    }\n  }\n}\n\n@ObservedV2\nclass ViewModelV2 {\n  // 单例实例\n  private static singleton_: ViewModelV2;\n  @Trace public fontSize: number = 40;\n\n  // 私有构造函数（禁止外部new）\n  private constructor() {\n  }\n\n  static instance(): ViewModelV2 {\n    if (!ViewModelV2.singleton_) {\n      ViewModelV2.singleton_ = new ViewModelV2();\n    }\n    return ViewModelV2.singleton_;\n  }\n}\n\n// 新增V2业务组件\n@ComponentV2\nstruct V2Comp {\n  // 获取V2单例实例（组件内可直接访问）\n  private v2Model = ViewModelV2.instance();\n\n  build() {\n    Column() {\n      Text(`V2组件fontSize-${this.v2Model.fontSize}`)\n        .fontSize(this.v2Model.fontSize)\n\n      Button('V2组件修改字体大小')\n        .onClick(() => {\n          this.v2Model.fontSize = 60; // V2组件刷新\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "@ObservedV2装饰的class"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@ObservedV2+@Trace的观测能力在V1和V2版本中均受支持，但在V1中不支持将V1装饰器与@ObservedV2装饰的实例对象共同使用。以下示例代码中，若info对象被@State修饰，则会导致编译错误，需移除V1的装饰器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass InfoTen {\n  @Trace public myId: number;\n  public name: string;\n\n  constructor(myId?: number, name?: string) {\n    this.myId = myId || 0;\n    this.name = name || 'aaa';\n  }\n}\n\n@ComponentV2\nstruct ChildTen {\n  // V2对数据输入有严格的管理，从父组件传入数据时，必须使用@Param装饰器进行数据接收\n  @Param info: InfoTen = new InfoTen();\n\n  build() {\n    Column() {\n      Text(`Child-V2 info id:${this.info.myId}`)\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n        .onClick(() => {\n          this.info.myId++; // 刷新\n        })\n    }\n  }\n}\n\n@Entry\n@Component\nstruct IndexTen {\n  // @State info: InfoTen = new InfoTen(); // 错误写法。Class类型，不支持传递，编译器报错；消除编译错误请去掉@State\n  info: InfoTen = new InfoTen(); // 正确写法\n\n  build() {\n    Column() {\n      Text(`Parent-V1 info id:${this.info.myId}`)\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n        .onClick(() => {\n          this.info.myId++; // 刷新\n        })\n\n      ChildTen({\n        info: this.info,\n      })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "传递嵌套对象",
      children: "传递嵌套对象"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1装饰器的观测能力是对数据本身做代理，因此当数据存在嵌套时，V1只能通过@Observed+@ObjectLink的方式拆分子组件，观测深层次数据。但V2无法接收@Observed装饰的对象，@ObjectLink也无法在V2中使用。@Observed并没有@ObservedV2+@Trace那样强大的深层次观测能力，这里不再对@Observed的深层次嵌套进行讨论，只讨论@ObservedV2在V1的使用场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "@Observed装饰的class嵌套@ObservedV2装饰的class"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@ObservedV2和@Observed嵌套使用时，类对象能否被V1的装饰器装饰取决于最外层class使用的装饰器。如果最外层是@Observed修饰的类，可以和V2装饰器一起使用，比如@State。@State仅能观察第一层的变化，如果要深度观察，需要传递给@ObjectLink。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例代码中："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "最外层MessageInfoNested1类被@Observed修饰，在V1组件IndexOne中可以被@State修饰。数据源@State的第二层的改变（info和messageId属性），虽不能触发本层的刷新，但会被@ObjectLink和@Param观察到，并触发它们关联组件的刷新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "messageInfo属性传递给V1组件，V1组件ChildOne要用@ObjectLink接收，而传递给V2组件GrandSon1的info属性的class类用@ObservedV2修饰。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Track防止MessageInfo1类中的info因messageId改变而连带刷新，开发者去掉@Track可观测到，当messageId改变时，info的连带刷新，但这并非@ObjectLink的观测能力。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass InfoOne {\n  @Trace public myId: number;\n  public name: string;\n\n  constructor(myId?: number, name?: string) {\n    this.myId = myId || 0;\n    this.name = name || 'aaa';\n  }\n}\n\n@Observed\nclass MessageInfo1 { // 一层嵌套\n  @Track public info: InfoOne; // 防止messageId改变导致info的连带刷新\n  @Track public messageId: number; // 防止messageId改变导致info的连带刷新\n\n  constructor(info?: InfoOne, messageId?: number) {\n    this.info = info || new InfoOne();\n    this.messageId = messageId || 0;\n  }\n}\n\n@Observed\nclass MessageInfoNested1 { // 二层嵌套\n  public messageInfo: MessageInfo1;\n\n  constructor(messageInfo?: MessageInfo1) {\n    this.messageInfo = messageInfo || new MessageInfo1();\n  }\n}\n\n@ComponentV2\nstruct GrandSon1 {\n  @Param info: InfoOne = new InfoOne();\n\n  build() {\n    Column() {\n      Text(`ObjectLink info info.myId:${this.info.myId}`) // myId属性被@Trace装饰，可以观测变化\n        .fontSize(30)\n        .onClick(() => {\n          this.info.myId++; // 当前组件和父组件ChildOne都刷新\n        })\n    }\n  }\n}\n\n@Component\nstruct ChildOne {\n  @ObjectLink messageInfo: MessageInfo1;\n\n  build() {\n    Column() {\n      Text(`ObjectLink MessageInfo messageId:${this.messageInfo.messageId}`) // 经过@ObjectLink拆解之后，可以观测一层类属性变化\n        .fontSize(30)\n        .onClick(() => {\n          this.messageInfo.messageId++; // 当前组件UI刷新\n        })\n      Divider()\n        .color(Color.Blue)\n      Text(`ObjectLink MessageInfo info.myId:${this.messageInfo.info.myId}`) // myId属性被@Trace装饰，可以观测变化\n        .fontSize(30)\n        .onClick(() => {\n          this.messageInfo.info.myId++; // 当前组件和GrandSon1子组件的UI都刷新\n        })\n      GrandSon1({ info: this.messageInfo.info }); // 继续拆解一层子组件\n    }\n  }\n}\n\n@Entry\n@Component\nstruct IndexOne {\n  @State messageInfoNested: MessageInfoNested1 = new MessageInfoNested1(); // 三层嵌套的数据，如何观测内部。\n\n  build() {\n    Column() {\n      // 观察messageInfoNested，@State只有一层观测能力，无法观察到变化\n      Text(`messageInfoNested messageId:${this.messageInfoNested.messageInfo.messageId}`)\n        .fontSize(30)\n        .onClick(() => {\n          this.messageInfoNested.messageInfo.messageId++; // 当前组件不刷新，子组件ChildOne的UI刷新\n        })\n      Divider()\n        .color(Color.Blue)\n      // 通过@ObjectLink嵌套观察 messageInfoId\n      ChildOne({ messageInfo: this.messageInfoNested.messageInfo }) // 经过拆分后，使用@ObjectLink拆分可以观察到深一层的变化\n      Divider()\n        .color(Color.Blue)\n    }\n    .height('100%')\n    .width('100%')\n    .margin(10)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "@ObservedV2+@Trace观察class嵌套类"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@ObservedV2+@Trace将观测能力实现在类属性上，所以当类属性被@Trace标记时，无论嵌套多少层，均能观测到变化。以下示例代码中，MessageInfoNested对象及其属性均被@ObservedV2修饰，在V1组件Index中使用时，不能和V1装饰器一起使用。将messageInfo属性从V1组件传递给V2组件，V2组件Child通过@Param接收，且修改能被观测。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass Info {\n  @Trace public myId: number;\n  public name: string;\n\n  constructor(myId?: number, name?: string) {\n    this.myId = myId || 0;\n    this.name = name || 'aaa';\n  }\n}\n\n@ObservedV2\nclass MessageInfo { // 一层嵌套\n  @Trace public info: Info; // 防止messageId改变导致info的连带刷新\n  @Trace public messageId: number; // 防止info改变导致messageId的连带刷新\n\n  constructor(info?: Info, messageId?: number) {\n    this.info = info || new Info(); // 使用传入的info或创建一个新的Info\n    this.messageId = messageId || 0;\n  }\n}\n\n@ObservedV2\nclass MessageInfoNested { // 二层嵌套，MessageInfoNested如果是被@ObservedV2装饰，则不可以被V1的状态变量更新相关的装饰器装饰，如@State\n  public messageInfo: MessageInfo;\n\n  constructor(messageInfo?: MessageInfo) {\n    this.messageInfo = messageInfo || new MessageInfo();\n  }\n}\n\n@ComponentV2\nstruct Child {\n  @Param messageInfo: MessageInfo =  new MessageInfo();\n\n  build() {\n    Column() {\n      Text(`Child MessageInfo messageId:${this.messageInfo.messageId}`)\n        .fontSize(30)\n        .onClick(() => {\n          this.messageInfo.messageId++; // 刷新\n        })\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  messageInfoNested: MessageInfoNested = new MessageInfoNested(); // 三层嵌套的数据，如何观测内部。\n\n  build() {\n    Column() {\n      Text(`messageInfoNested messageId:${this.messageInfoNested.messageInfo.messageId}`)\n        .fontSize(30)\n        .onClick(() => {\n          this.messageInfoNested.messageInfo.messageId++;\n        })\n      Divider()\n        .color(Color.Blue)\n      Text(`messageInfoNested name:${this.messageInfoNested.messageInfo.info.name}`) // 未被@Trace修饰，无法观测\n        .fontSize(30)\n        .onClick(() => {\n          this.messageInfoNested.messageInfo.info.name += 'a';\n        })\n      Divider()\n        .color(Color.Blue)\n      Text(`messageInfoNested myId:${this.messageInfoNested.messageInfo.info.myId}`) // 被@Trace修饰，无论嵌套多少层都能观测\n        .fontSize(30)\n        .onClick(() => {\n          this.messageInfoNested.messageInfo.info.myId++;\n        })\n      Divider()\n        .color(Color.Blue)\n      // 通过@ObservedV2和@Trace观察messageInfo\n      Child({messageInfo: this.messageInfoNested.messageInfo})\n    }\n    .height('100%')\n    .width('100%')\n    .margin(10)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "v2组件使用v1组件",
      children: "V2组件使用V1组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2的状态变量传递给V1的自定义组件，存在以下限制："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "V1可以不使用装饰器接收数据。V1自定义组件中，不使用装饰器接收的变量被视为普通变量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "V1使用装饰器接收数据时，仅可通过@State、@Prop、@Provide接收。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "V1使用装饰器接收数据时，不支持内置类型的数据，否则编译报错。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "传递简单类型状态变量-1",
      children: "传递简单类型状态变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2向V1自定义组件传递简单类型状态变量时，V1仅能通过@State、@Prop、@Provide装饰器接收数据。以下示例代码中，ThirdPartyComp组件模拟第三方库，接收来自V2组件的布尔值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 模拟三方库导入的V1组件\n@Component\nstruct ThirdPartyComp {\n  // V1从V2接收的状态变量，仅可使用@State、@Prop、@Provide接收\n  @State prop: boolean = true; // 可以观测到变化\n\n  build() {\n    Column() {\n      Text(`ThirdPartyComp：${this.prop}`)\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct V2Comp2 {\n  @Local param: boolean = false;\n\n  build() {\n    Column() {\n      Text(`V2Comp2：${this.param}`)\n\n      // V2组件向V1的三方库传递简单状态变量\n      ThirdPartyComp({ prop: this.param })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "传递class类型",
      children: "传递class类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "定义普通class"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2向V1自定义组件传递数据时，支持普通class类。在以下示例代码中，InfoFive类未被@ObservedV2修饰，传递给V1组件ChildFive时，可以使用@State接收。修改V1组件中的info变量，依赖@State的观测能力刷新UI。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class InfoFive {\n  public myId: number;\n  public name: string;\n\n  constructor(myId?: number, name?: string) {\n    this.myId = myId || 0;\n    this.name = name || 'aaa';\n  }\n}\n\n@Component\nstruct ChildFive {\n  // V1从V2接收的状态变量，仅可使用@State、@Prop、@Provide接收\n  @State info: InfoFive = new InfoFive(); // 可以观测一层类属性变化\n\n  build() {\n    Column() {\n      Text(`info id:${this.info.myId}`)\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n        .onClick(() => {\n          this.info.myId++; // 当前组件UI刷新\n        })\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct IndexFive {\n  @Provider() info: InfoFive = new InfoFive(); // Class类型，支持传递\n\n  build() {\n    Column() {\n      ChildFive({\n        info: this.info,\n      })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "定义@ObserveV2修饰的class"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V1装饰器不能和@ObservedV2一起使用。在以下示例代码中，InfoNine类被@observedV2装饰，V1组件接收变量时，info变量不能被V1装饰器修饰，但通过修改可以刷新UI，依赖的是@ObservedV2+@Trace的观测能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass InfoNine {\n  @Trace public myId: number;\n  public name: string;\n\n  constructor(myId?: number, name?: string) {\n    this.myId = myId || 0;\n    this.name = name || 'aaa';\n  }\n}\n\n@Component\nstruct ChildNine {\n  info: InfoNine = new InfoNine(); // V1装饰器不能和@ObservedV2一起使用\n\n  build() {\n    Column() {\n      Text(`info id:${this.info.myId}`) // 显示info.myId变量\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n        .onClick(() => {\n          this.info.myId++; // 当前组件UI刷新,依赖@ObservedV2+@Trace的能力\n        })\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct IndexNine {\n  @Provider() info: InfoNine = new InfoNine();\n\n  build() {\n    Column() {\n      ChildNine({\n        info: this.info,\n      })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "传递普通内置类型",
      children: "传递普通内置类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V2->V1传递内置类型，V2定义内置类型的装饰器和V1接收内置类型的装饰器是互斥的。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "V1使用装饰器接收数据时，内置类型不支持在V2中用装饰器修饰。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "V1可以不使用装饰器接收数据，接收过来的变量在V1定义组件内也会是普通变量，在V2中可以用装饰器修饰。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在以下示例代码中，V2向V1自定义组件传递set变量，V1组件使用@Provide接收。因此，在V2组件IndexEight中定义set变量时，为避免编译错误，set变量不能用@Local修饰。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct ChildEight {\n  // V1从V2接收的状态变量，仅可使用@State、@Prop、@Provide接收\n  @Provide set: Set<number> = new Set();\n\n  build() {\n    Column() {\n      ForEach(Array.from(this.set.values()), (item: number) => { // 显示set变量\n        Text(`${item}`)\n          .fontSize(30)\n      })\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct IndexEight {\n  // @Local set: Set<number> = new Set([10, 20]); // 错误写法。内置类型状态变量，不支持传递；消除编译错误请去掉@Local\n  set: Set<number> = new Set([10, 20]); // 正确写法。\n\n  build() {\n    Column() {\n      ChildEight({\n        set: this.set\n      })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "混用场景总结",
      children: "混用场景总结"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对V1和V2混用场景进行梳理后，可以总结出："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当V1中混用V2自定义组件时（即V1的组件或者类数据向V2传递），大部分V1的能力在V2都是被禁止的。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当V2中混用V1自定义组件时（即V2的组件或者类数据向V1传递），做了部分功能开放。例如：@ObservedV2和@Trace，这也是对V1嵌套类数据的观测能提供的最大的帮助。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "所以在代码开发过程中，不建议开发者混用V1和V2版本。然而，在代码迁移方面，V1的开发者可以逐步将代码迁移到V2，以稳步替换V1的功能代码。同时，不建议在V2的代码架构中混用V1的代码。"
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
866822(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957632-2334a3554d45650b3d5c1ac7c0352de9.png");

},
392803(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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