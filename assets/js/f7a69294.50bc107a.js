"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["14830"], {
755624(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_2_arkts_v_2_manage_component_state_arkts_new_param_arkts_new_param_md_f7a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-state-management-v-2-arkts-v-2-manage-component-state-arkts-new-param-arkts-new-param-md-f7a.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_2_arkts_v_2_manage_component_state_arkts_new_param_arkts_new_param_md_f7a_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-param/arkts-new-param","title":"@Param：组件外部输入","description":"为了增强子组件接受外部参数输入的能力，开发者可以使用@Param装饰器。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-param/arkts-new-param.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-param","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-param/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-param/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"@Param：组件外部输入","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-param","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"@Local装饰器：组件内部状态","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local/"},"next":{"title":"@Once：初始化同步一次","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-once/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-param/arkts-new-param.md


const frontMatter = {
	title: '@Param：组件外部输入',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-param',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '@Param：组件外部输入';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "状态管理V1版本接受外部传入的装饰器的局限性",
  "id": "状态管理v1版本接受外部传入的装饰器的局限性",
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
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "从父组件到子组件变量传递与同步",
  "id": "从父组件到子组件变量传递与同步",
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
        id: "param组件外部输入",
        children: "@Param：组件外部输入"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了增强子组件接受外部参数输入的能力，开发者可以使用@Param装饰器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["@Param不仅可以接受组件外部输入，还可以接受@Local的同步变化。在阅读本文档前，建议提前阅读：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local",
        children: "@Local"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(818369)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始，在@ComponentV2装饰的自定义组件中支持使用@Param装饰器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始，该装饰器支持在元服务中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 23开始，该装饰器支持在ArkTS卡片中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Param表示组件从外部传入的状态，使得父子组件之间的数据能够进行同步："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Param装饰的变量支持本地初始化，但不允许在组件内部直接修改。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "被@Param装饰的变量能够在初始化自定义组件时从外部传入，当数据源也是状态变量时，数据源的修改会同步给@Param。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Param可以接受任意类型的数据源，包括普通变量、状态变量、常量、函数返回值等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Param装饰的变量变化时，会刷新该变量关联的组件。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["@Param支持对基本类型（如number、boolean、string、Object、class）、内嵌类型（如", (0,jsx_runtime.jsx)(_components.a, {
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
        }), "），以及null、undefined和", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B",
          children: "联合类型"
        }), "进行观测。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "对于复杂类型如类对象，@Param会接受数据源的引用。在组件内可以修改类对象中的属性，该修改会同步到数据源。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["@Param的观测能力仅限于被装饰的变量本身。详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%A7%82%E5%AF%9F%E5%8F%98%E5%8C%96",
          children: "观察变化"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "状态管理v1版本接受外部传入的装饰器的局限性",
      children: "状态管理V1版本接受外部传入的装饰器的局限性"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["状态管理V1存在多种可接受外部传入的装饰器，常用的有", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
        children: "@State"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop",
        children: "@Prop"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link",
        children: "@Link"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
        children: "@ObjectLink"
      }), "。这些装饰器使用有限制且不易区分，不当使用会导致性能问题。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Observed\nclass Region {\n  public x: number;\n  public y: number;\n\n  constructor(x: number, y: number) {\n    this.x = x;\n    this.y = y;\n  }\n}\n\n@Observed\nclass Info {\n  public region: Region;\n\n  constructor(x: number, y: number) {\n    this.region = new Region(x, y);\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State info: Info = new Info(0, 0);\n\n  build() {\n    Column() {\n      Button('change Info')\n        .onClick(() => {\n          this.info = new Info(100, 100);\n        })\n      Child({\n        region: this.info.region,\n        regionProp: this.info.region,\n        infoProp: this.info,\n        infoLink: this.info,\n        infoState: this.info\n      })\n    }\n  }\n}\n\n@Component\nstruct Child {\n  @ObjectLink region: Region;\n  @Prop regionProp: Region;\n  @Prop infoProp: Info;\n  @Link infoLink: Info;\n  @State infoState: Info = new Info(1, 1);\n\n  build() {\n    Column() {\n      Text(`ObjectLink region: ${this.region.x}-${this.region.y}`)\n      Text(`Prop regionProp: ${this.regionProp.x}-${this.regionProp.y}`)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上面的示例中，@State仅能在初始化时接收info的引用，改变info之后无法同步。@Prop虽然能够进行单向同步，但是对于较复杂的类型来说，深拷贝性能较差。@Link能够接受传入的引用进行双向同步，但它必须要求数据源也是状态变量，因此无法接受info中的成员属性region。@ObjectLink能够接受类成员属性，但是要求该属性类型必须为@Observed装饰的类。装饰器的不同限制使得父子组件之间的传值规则复杂、不易使用。因此推出@Param装饰器，表示组件从外部传入的状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "装饰器说明",
      children: "装饰器说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "@Param变量装饰器"
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
            children: "能否本地修改"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["否。若需要修改值，可使用@Param搭配", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-once",
              children: "@Once"
            }), "修改子组件的本地值。或通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-event",
              children: "@Event"
            }), "装饰器，修改@Param数据源的值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "同步类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "由父到子单向同步。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "允许装饰的变量类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object、class、string、number、boolean、enum等基本类型以及Array、Date、Map、Set等内嵌类型。支持null、undefined以及联合类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "被装饰变量的初始值"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["允许本地初始化，若不在本地初始化，则需要和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-require",
              children: "@Require"
            }), "装饰器一起使用，要求必须从外部传入初始化。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "变量传递",
      children: "变量传递"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "@Param装饰的变量允许本地初始化，若无本地初始化则必须从外部传入初始化。当同时存在本地初始值与外部传入值时，优先使用外部传入值进行初始化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "初始化子组件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param装饰的变量可以初始化子组件中@Param装饰的变量。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "同步"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Param可以和父组件传入的状态变量数据源（即@Local或@Param装饰的变量）进行同步，当数据源发生变化时，会将修改同步给子组件的@Param。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "观察变化",
      children: "观察变化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用@Param装饰的变量具有被观测变化的能力。当装饰的变量发生变化时，会触发该变量绑定的UI组件刷新。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当装饰的变量类型为boolean、string、number类型时，可观察数据源同步变化。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@ComponentV2\nstruct Index {\n  // 点击的次数\n  @Local count: number = 0;\n  @Local message: string = 'Hello';\n  @Local flag: boolean = false;\n\n  build() {\n    Column() {\n      Text(`Local ${this.count}`)\n      Text(`Local ${this.message}`)\n      Text(`Local ${this.flag}`)\n      Button('change Local')\n        .onClick(() => {\n          // 对数据源的更改会同步给子组件\n          this.count++;\n          this.message += ' World';\n          this.flag = !this.flag;\n        })\n      Child({\n        count: this.count,\n        message: this.message,\n        flag: this.flag\n      })\n    }\n  }\n}\n\n@ComponentV2\nstruct Child {\n  @Require @Param count: number;\n  @Require @Param message: string;\n  @Require @Param flag: boolean;\n\n  build() {\n    Column() {\n      Text(`Param ${this.count}`)\n      Text(`Param ${this.message}`)\n      Text(`Param ${this.flag}`)\n    }\n  }\n}\n"
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
          }), "将该对象变为可观察对象。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class RawObject {\n  public name: string;\n\n  constructor(name: string) {\n    this.name = name;\n  }\n}\n\n@ObservedV2\nclass ObservedObject {\n  @Trace public name: string;\n\n  constructor(name: string) {\n    this.name = name;\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local rawObject: RawObject = new RawObject('rawObject');\n  @Local observedObject: ObservedObject = new ObservedObject('observedObject');\n\n  build() {\n    Column() {\n      Text(`${this.rawObject.name}`)\n      Text(`${this.observedObject.name}`)\n      Button('change object')\n        .onClick(() => {\n          // 对类对象整体的修改均能观察到\n          this.rawObject = new RawObject('new rawObject');\n          this.observedObject = new ObservedObject('new observedObject');\n        })\n      Button('change name')\n        .onClick(() => {\n          // @Local与@Param均不具备观察类对象属性的能力，因此对rawObject.name的修改无法观察到\n          this.rawObject.name = 'new rawObject name';\n          // 由于ObservedObject的name属性被@Trace装饰，因此对observedObject.name的修改能被观察到\n          this.observedObject.name = 'new observedObject name';\n        })\n      Child({\n        rawObject: this.rawObject,\n        observedObject: this.observedObject\n      })\n    }\n  }\n}\n\n@ComponentV2\nstruct Child {\n  @Require @Param rawObject: RawObject;\n  @Require @Param observedObject: ObservedObject;\n\n  build() {\n    Column() {\n      Text(`${this.rawObject.name}`)\n      Text(`${this.observedObject.name}`)\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "装饰的变量为简单类型数组时，可观察数组整体或数组项变化。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@ComponentV2\nstruct Index {\n  @Local numArr: number[] = [1, 2, 3, 4, 5];\n  @Local dimensionTwo: number[][] = [[1, 2, 3], [4, 5, 6]];\n\n  build() {\n    Column() {\n      Text(`${this.numArr[0]}`)\n      Text(`${this.numArr[1]}`)\n      Text(`${this.numArr[2]}`)\n      Text(`${this.dimensionTwo[0][0]}`)\n      Text(`${this.dimensionTwo[1][1]}`)\n      Button('change array item')\n        .onClick(() => {\n          this.numArr[0]++;\n          this.numArr[1] += 2;\n          this.dimensionTwo[0][0] = 0;\n          this.dimensionTwo[1][1] = 0;\n        })\n      Button('change whole array')\n        .onClick(() => {\n          this.numArr = [5, 4, 3, 2, 1];\n          this.dimensionTwo = [[7, 8, 9], [0, 1, 2]];\n        })\n      Child({\n        numArr: this.numArr,\n        dimensionTwo: this.dimensionTwo\n      })\n    }\n  }\n}\n\n@ComponentV2\nstruct Child {\n  @Require @Param numArr: number[];\n  @Require @Param dimensionTwo: number[][];\n\n  build() {\n    Column() {\n      Text(`${this.numArr[0]}`)\n      Text(`${this.numArr[1]}`)\n      Text(`${this.numArr[2]}`)\n      Text(`${this.dimensionTwo[0][0]}`)\n      Text(`${this.dimensionTwo[1][1]}`)\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当装饰的变量是嵌套类或对象数组时，@Param无法观察深层对象属性的变化。对深层对象属性的观测依赖@ObservedV2与@Trace装饰器。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@ObservedV2\nclass Region {\n  @Trace public x: number;\n  @Trace public y: number;\n\n  constructor(x: number, y: number) {\n    this.x = x;\n    this.y = y;\n  }\n}\n\n@ObservedV2\nclass Info {\n  @Trace public region: Region;\n  @Trace public name: string;\n\n  constructor(name: string, x: number, y: number) {\n    this.name = name;\n    this.region = new Region(x, y);\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  @Local infoArr: Info[] = [new Info('Ocean', 28, 120), new Info('Mountain', 26, 20)];\n  @Local originInfo: Info = new Info('Origin', 0, 0);\n\n  build() {\n    Column() {\n      ForEach(this.infoArr, (info: Info) => {\n        Row() {\n          Text(`name: ${info.name}`)\n          Text(`region: ${info.region.x}-${info.region.y}`)\n        }\n      })\n      Row() {\n        Text(`Origin name: ${this.originInfo.name}`)\n        Text(`Origin region: ${this.originInfo.region.x}-${this.originInfo.region.y}`)\n      }\n\n      Button('change infoArr item')\n        .onClick(() => {\n          // 由于属性name被@Trace装饰，所以能够观察到\n          this.infoArr[0].name = 'Win';\n        })\n      Button('change originInfo')\n        .onClick(() => {\n          // 由于变量originInfo被@Local装饰，所以能够观察到\n          this.originInfo = new Info('Origin', 100, 100);\n        })\n      Button('change originInfo region')\n        .onClick(() => {\n          // 由于属性x、y被@Trace装饰，所以能够观察到\n          this.originInfo.region.x = 25;\n          this.originInfo.region.y = 25;\n        })\n      Child({\n        infoArr: this.infoArr,\n        originInfo: this.originInfo\n      })\n    }\n  }\n}\n\n@ComponentV2\nstruct Child {\n  @Param infoArr: Info[] = [];\n  @Param originInfo: Info = new Info('O', 0, 0);\n\n  build() {\n    Column() {\n      ForEach(this.infoArr, (info: Info) => {\n        Row() {\n          Text(`name: ${info.name}`)\n          Text(`region: ${info.region.x}-${info.region.y}`)\n        }\n      })\n      Row() {\n        Text(`Origin name: ${this.originInfo.name}`)\n        Text(`Origin region: ${this.originInfo.region.x}-${this.originInfo.region.y}`)\n      }\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "装饰的变量为内置类型时，可观察变量整体赋值和API调用的变化。"
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
      children: "@Param装饰器存在以下使用限制："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["@Param装饰器只能在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#componentv2",
            children: "@ComponentV2"
          }), "装饰器的自定义组件中使用。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@ComponentV2\nstruct MyComponent {\n  @Param message: string = 'Hello World'; // 正确用法\n  build() {\n  }\n}\n@Component\nstruct TestComponent {\n  @Param message: string = 'Hello World'; // 错误用法，编译时报错\n  build() {\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@Param装饰的变量表示组件外部输入，需要初始化。支持使用本地初始值或外部传入值进行初始化。当存在外部传入值时，优先使用外部传入值。不允许既不使用本地初始值，也不使用外部传入值。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@ComponentV2\nstruct ChildComponent {\n  @Param param1: string = 'Initialize local';\n  @Param param2: string = 'Initialize local and put in';\n  @Require @Param param3: string;\n  @Param param4: string; // 错误用法，外部未传入初始化且本地也无初始值，编译报错\n  build() {\n    Column() {\n      Text(`${this.param1}`) // 本地初始化，显示Initialize local\n      Text(`${this.param2}`) // 外部传入初始化，显示Put in\n      Text(`${this.param3}`) // 外部传入初始化，显示Put in\n    }\n  }\n}\n@Entry\n@ComponentV2\nstruct MyComponent {\n  @Local message: string = 'Put in';\n  build() {\n    Column() {\n      ChildComponent({\n        param2: this.message,\n        param3: this.message\n      })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用@Param装饰的变量在子组件中无法被直接修改。但是，如果装饰的变量是对象类型，在子组件中可以修改对象的属性。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@ObservedV2\nclass Info {\n  @Trace name: string;\n  constructor(name: string) {\n    this.name = name;\n  }\n}\n@Entry\n@ComponentV2\nstruct Index {\n  @Local info: Info = new Info('Tom');\n  build() {\n    Column() {\n      Text(`Parent info.name ${this.info.name}`)\n      Button('Parent change info')\n        .onClick(() => {\n          // 父组件更改@Local变量，会同步子组件对应@Param变量\n          this.info = new Info('Lucy');\n      })\n      Child({ info: this.info })\n    }\n  }\n}\n@ComponentV2\nstruct Child {\n  @Require @Param info: Info;\n  build() {\n    Column() {\n      Text(`info.name: ${this.info.name}`)\n      Button('change info')\n        .onClick(() => {\n          // 错误用法，不允许在子组件中更改@Param变量，编译时会报错\n          this.info = new Info('Jack');\n        })\n      Button('Child change info.name')\n        .onClick(() => {\n          // 允许在子组件中更改对象中属性，该修改会同步到父组件数据源上，当属性被@Trace装饰时，可观测到对应UI刷新\n          this.info.name = 'Jack';\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "从父组件到子组件变量传递与同步",
      children: "从父组件到子组件变量传递与同步"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Param能够接受父组件@Local或@Param传递的数据并与之变化同步。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ObservedV2\nclass Region {\n  @Trace public x: number;\n  @Trace public y: number;\n\n  constructor(x: number, y: number) {\n    this.x = x;\n    this.y = y;\n  }\n}\n\n@ObservedV2\nclass Info {\n  @Trace public name: string;\n  @Trace public age: number;\n  @Trace public region: Region;\n\n  constructor(name: string, age: number, x: number, y: number) {\n    this.name = name;\n    this.age = age;\n    this.region = new Region(x, y);\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  // 使用@Local装饰infoList数组，作为数据源传递给子组件的@Param。\n  @Local infoList: Info[] = [new Info('Alice', 8, 0, 0), new Info('Barry', 10, 1, 20), new Info('Cindy', 18, 24, 40)];\n\n  build() {\n    Column() {\n      ForEach(this.infoList, (info: Info) => {\n        MiddleComponent({ info: info })\n      })\n      // 修改数组元素及对象属性，触发MiddleComponent和SubComponent更新。\n      Button('change')\n        .onClick(() => {\n          this.infoList[0] = new Info('Atom', 40, 27, 90);\n          this.infoList[1].name = 'Bob';\n          this.infoList[2].region = new Region(7, 9);\n        })\n    }\n  }\n}\n\n@ComponentV2\nstruct MiddleComponent {\n  // 使用@Param接收父组件传入的Info对象，数据源变化时触发子组件更新。\n  @Require @Param info: Info;\n\n  build() {\n    Column() {\n      Text(`name: ${this.info.name}`)\n      Text(`age: ${this.info.age}`)\n      // 将Region对象继续传递给子组件的@Param。\n      SubComponent({ region: this.info.region })\n    }\n  }\n}\n\n@ComponentV2\nstruct SubComponent {\n  // @Param接收父组件传入的Region对象，数据源变化时触发子组件更新。\n  @Require @Param region: Region;\n\n  build() {\n    Column() {\n      Text(`region: ${this.region.x}-${this.region.y}`)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰array类型变量",
      children: "装饰Array类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Param装饰Array类型变量，可以观察到数据源对Array整体的赋值，以及调用Array的接口push, pop, shift, unshift, splice, copyWithin, fill, reverse, sort带来的变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ComponentV2\nstruct Child {\n  // 使用@Param接收父组件传入的Array类型变量。\n  @Require @Param count: number[];\n\n  build() {\n    Column() {\n      ForEach(this.count, (item: number) => {\n        Text(`${item}`).fontSize(30)\n        Divider()\n      })\n    }\n    .width('100%')\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  // 使用@Local装饰Array类型变量，作为数据源传递给子组件的@Param。\n  @Local count: number[] = [1, 2, 3];\n\n  build() {\n    Row() {\n      Column() {\n        Child({ count: this.count })\n        // 对数组整体重新赋值，触发子组件更新。\n        Button('init array').onClick(() => {\n          this.count = [9, 8, 7];\n        })\n        // 新增数组元素，触发子组件更新。\n        Button('push').onClick(() => {\n          this.count.push(0);\n        })\n        // 翻转数组元素，触发子组件更新。\n        Button('reverse').onClick(() => {\n          this.count.reverse();\n        })\n        // 使用同一元素填充数组，触发子组件更新。\n        Button('fill').onClick(() => {\n          this.count.fill(6);\n        })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰date类型变量",
      children: "装饰Date类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Param装饰Date类型变量，可以观察到数据源对Date整体的赋值，以及调用Date的接口setFullYear, setMonth, setDate, setHours, setMinutes, setSeconds, setMilliseconds, setTime, setUTCFullYear, setUTCMonth, setUTCDate, setUTCHours, setUTCMinutes, setUTCSeconds, setUTCMilliseconds带来的变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ComponentV2\nstruct DateComponent {\n  // 使用@Param接收父组件传入的Date类型变量。\n  @Param selectedDate: Date = new Date('2024-01-01');\n\n  build() {\n    Column() {\n      DatePicker({\n        start: new Date('1970-1-1'),\n        end: new Date('2100-1-1'),\n        selected: this.selectedDate\n      })\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  // 使用@Local装饰Date类型变量，作为数据源传递给子组件的@Param。\n  @Local parentSelectedDate: Date = new Date('2021-08-08');\n\n  build() {\n    Column() {\n      // 对Date类型变量整体重新赋值，触发子组件更新。\n      Button('parent update the new date')\n        .margin(10)\n        .onClick(() => {\n          this.parentSelectedDate = new Date('2023-07-07');\n        })\n      // 调用Date的setFullYear方法修改年份，触发子组件更新。\n      Button('increase the year by 1')\n        .margin(10)\n        .onClick(() => {\n          this.parentSelectedDate.setFullYear(this.parentSelectedDate.getFullYear() + 1);\n        })\n      // 调用Date的setMonth方法修改月份，触发子组件更新。\n      Button('increase the month by 1')\n        .margin(10)\n        .onClick(() => {\n          this.parentSelectedDate.setMonth(this.parentSelectedDate.getMonth() + 1);\n        })\n      // 调用Date的setDate方法修改日期，触发子组件更新。\n      Button('parent increase the day by 1')\n        .margin(10)\n        .onClick(() => {\n          this.parentSelectedDate.setDate(this.parentSelectedDate.getDate() + 1);\n        })\n      DateComponent({ selectedDate: this.parentSelectedDate })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰map类型变量",
      children: "装饰Map类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Param装饰Map类型变量，可以观察到数据源对Map整体的赋值，以及调用Map的接口set, clear, delete带来的变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ComponentV2\nstruct Child {\n  // 使用@Param接收父组件传入的Map类型变量。\n  @Param value: Map<number, string> = new Map();\n\n  build() {\n    Column() {\n      ForEach(Array.from(this.value.entries()), (item: [number, string]) => {\n        Text(`${item[0]}`).fontSize(30)\n        Text(`${item[1]}`).fontSize(30)\n        Divider()\n      })\n    }\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  // 使用@Local装饰Map类型变量，作为数据源传递给子组件的@Param。\n  @Local message: Map<number, string> = new Map([[0, 'a'], [1, 'b'], [3, 'c']]);\n\n  build() {\n    Row() {\n      Column() {\n        Child({ value: this.message })\n        // 对Map整体重新赋值，触发子组件更新。\n        Button('init map').onClick(() => {\n          this.message = new Map([[0, 'a'], [1, 'b'], [3, 'c']]);\n        })\n        // 新增键值对，触发子组件更新。\n        Button('set new one').onClick(() => {\n          this.message.set(4, 'd');\n        })\n        // 清空Map，触发子组件更新。\n        Button('clear').onClick(() => {\n          this.message.clear();\n        })\n        // 更新键值对，触发子组件更新。\n        Button('replace the first one').onClick(() => {\n          this.message.set(0, 'aa');\n        })\n        // 删除键值对，触发子组件更新。\n        Button('delete the first one').onClick(() => {\n          this.message.delete(0);\n        })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰set类型变量",
      children: "装饰Set类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Param装饰Set类型变量，可以观察到数据源对Set整体的赋值，以及调用Set的接口add, clear, delete带来的变化。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@ComponentV2\nstruct Child {\n  // 使用@Param接收父组件传入的Set类型变量。\n  @Param message: Set<number> = new Set();\n\n  build() {\n    Column() {\n      ForEach(Array.from(this.message.entries()), (item: [number, number]) => {\n        Text(`${item[0]}`).fontSize(30)\n        Divider()\n      })\n    }\n    .width('100%')\n  }\n}\n\n@Entry\n@ComponentV2\nstruct Index {\n  // 使用@Local装饰Set类型变量，作为数据源传递给子组件的@Param。\n  @Local message: Set<number> = new Set([0, 1, 2, 3, 4]);\n\n  build() {\n    Row() {\n      Column() {\n        Child({ message: this.message })\n        // 对Set整体重新赋值，触发子组件更新。\n        Button('init set').onClick(() => {\n          this.message = new Set([0, 1, 2, 3, 4]);\n        })\n        // 新增元素，触发子组件更新。\n        Button('set new one').onClick(() => {\n          this.message.add(5);\n        })\n        // 清空Set，触发子组件更新。\n        Button('clear').onClick(() => {\n          this.message.clear();\n        })\n        // 删除元素，触发子组件更新。\n        Button('delete the first one').onClick(() => {\n          this.message.delete(0);\n        })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "联合类型",
      children: "联合类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Param支持null、undefined以及联合类型。以下示例中，count类型为number | undefined，点击改变count的类型时，UI会自动刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@ComponentV2\nstruct Index {\n  // 使用@Local装饰联合类型变量，作为数据源传递给子组件的@Param。\n  @Local count: number | undefined = 0;\n\n  build() {\n    Column() {\n      MyComponent({ count: this.count })\n      // 修改联合类型值，触发子组件更新。\n      Button('change')\n        .onClick(() => {\n          this.count = undefined;\n        })\n    }\n  }\n}\n\n@ComponentV2\nstruct MyComponent {\n  // 使用@Param接收父组件传入的联合类型变量。\n  @Param count: number | undefined = 0;\n\n  build() {\n    Column() {\n      Text(`count(${this.count})`)\n    }\n  }\n}\n"
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
818369(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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