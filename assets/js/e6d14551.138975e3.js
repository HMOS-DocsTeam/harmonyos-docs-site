"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["956049"], {
653527(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_1_arkts_v_1_component_state_management_arkts_state_arkts_state_md_e6d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-state-management-v-1-arkts-v-1-component-state-management-arkts-state-arkts-state-md-e6d.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_1_arkts_v_1_component_state_management_arkts_state_arkts_state_md_e6d_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state/arkts-state","title":"@State装饰器：组件内状态","description":"被状态变量装饰器装饰的变量称为状态变量，使普通变量具备状态属性。当状态变量改变时，会触发其直接绑定的UI组件渲染更新。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state/arkts-state.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"@State装饰器：组件内状态","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"MVVM模式（V2）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-mvvm-v2/"},"next":{"title":"@Prop装饰器：父子单向同步","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state/arkts-state.md


const frontMatter = {
	title: '@State装饰器：组件内状态',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '@State装饰器：组件内状态';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "装饰器使用规则说明",
  "id": "装饰器使用规则说明",
  "level": 2
}, {
  "value": "变量的传递/访问规则说明",
  "id": "变量的传递访问规则说明",
  "level": 2
}, {
  "value": "观察变化和行为表现",
  "id": "观察变化和行为表现",
  "level": 2
}, {
  "value": "观察变化",
  "id": "观察变化",
  "level": 3
}, {
  "value": "框架行为",
  "id": "框架行为",
  "level": 3
}, {
  "value": "限制条件",
  "id": "限制条件",
  "level": 2
}, {
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "装饰简单类型的变量",
  "id": "装饰简单类型的变量",
  "level": 3
}, {
  "value": "装饰class对象类型的变量",
  "id": "装饰class对象类型的变量",
  "level": 3
}, {
  "value": "装饰Array类型变量",
  "id": "装饰array类型变量",
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
  "value": "装饰Date类型变量",
  "id": "装饰date类型变量",
  "level": 3
}, {
  "value": "State支持联合类型实例",
  "id": "state支持联合类型实例",
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
        id: "state装饰器组件内状态",
        children: "@State装饰器：组件内状态"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "被状态变量装饰器装饰的变量称为状态变量，使普通变量具备状态属性。当状态变量改变时，会触发其直接绑定的UI组件渲染更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在状态变量相关装饰器中，@State是最基础的装饰器，也是大部分状态变量的数据源。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在阅读@State文档前，建议开发者对状态管理框架有基本的了解。建议提前阅读：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview",
        children: "状态管理概述"
      }), "。最佳实践请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-status-management",
        children: "状态管理最佳实践"
      }), "。常见问题请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state-management-faq",
        children: "状态管理常见问题"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(384685)/* ["default"] */.A) + "",
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
      children: "@State装饰的变量与声明式范式中的其他被装饰变量一样，是私有的，只能从组件内部访问，在声明时必须指定其类型并完成本地初始化；若需从父组件初始化，也可选择使用命名参数机制完成赋值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@State装饰的变量拥有以下特性："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@State装饰的变量生命周期与其所属自定义组件的生命周期相同。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "装饰器使用规则说明",
      children: "装饰器使用规则说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "@State变量装饰器"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "装饰器参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "无"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "同步类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不与父组件中任何类型的变量同步。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "允许装饰的变量类型"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["object、class、string、number、boolean、enum类型，以及这些类型的数组。  API version 10开始支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%A3%85%E9%A5%B0date%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
              children: "Date类型"
            }), "。  API version 11及以上支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%A3%85%E9%A5%B0map%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
              children: "Map"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%A3%85%E9%A5%B0set%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
              children: "Set"
            }), "类型、undefined和null类型、ArkUI框架定义的联合类型", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#length",
              children: "Length"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcestr",
              children: "ResourceStr"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            }), "类型以及这些类型的联合类型，示例见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#state%E6%94%AF%E6%8C%81%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B%E5%AE%9E%E4%BE%8B",
              children: "@State支持联合类型实例"
            }), "。  支持类型的场景见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%A7%82%E5%AF%9F%E5%8F%98%E5%8C%96",
              children: "观察变化"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "不允许装饰的变量类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持装饰Function类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "被装饰变量的初始值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须本地初始化。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "变量的传递访问规则说明",
      children: "变量的传递/访问规则说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "传递/访问"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "从父组件初始化"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["可以从父组件或本地初始化。  父组件传入非undefined值时覆盖本地初始值，否则使用@State的本地初始值。  支持父组件中的常规变量以及装饰器装饰的状态变量：@State、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link",
              children: "@Link"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop",
              children: "@Prop"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume",
              children: "@Provide"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume",
              children: "@Consume"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
              children: "@ObjectLink"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#storagelink",
              children: "@StorageLink"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#storageprop",
              children: "@StorageProp"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#localstoragelink",
              children: "@LocalStorageLink"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#localstorageprop",
              children: "@LocalStorageProp"
            }), "，初始化@State。需要注意：父组件传入的外部变量对@State初始化时，仅作为初始值，后续变量的变化不会同步至@State。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "用于初始化子组件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@State装饰的变量支持初始化子组件的常规变量、@State、@Link、@Prop、@Provide。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持组件外访问"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持，只能在组件内访问。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 初始化规则图示"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(404386)/* ["default"] */.A) + "",
        width: "1897",
        height: "273"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "观察变化和行为表现",
      children: "观察变化和行为表现"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "并不是状态变量的所有更改都会引起UI的刷新，只有可以被框架观察到的修改才会引起UI刷新。本小节将介绍什么样的修改才能被观察到，以及观察到变化后，框架是怎么引起UI刷新的，即框架的行为表现是什么。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "观察变化",
      children: "观察变化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当装饰的数据类型为boolean、string、number类型时，可以观察到数值的变化。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 简单类型\n@State count: number = 0;\n// 可以观察到值的变化\nthis.count = 1;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当装饰的数据类型为class或Object时，可以观察到自身的赋值和属性赋值的变化，即Object.keys(observedObject)返回的所有属性。示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "声明Person和Model类。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class Person {\n  public value: string;\n\n  constructor(value: string) {\n    this.value = value;\n  }\n}\n\nclass Model {\n  public value: string;\n  public name: Person;\n\n  constructor(value: string, person: Person) {\n    this.value = value;\n    this.name = person;\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@State装饰的类型是Model。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// class类型\n@State title: Model = new Model('Hello', new Person('World'));\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对@State装饰变量的赋值。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// class类型赋值\nthis.title = new Model('Hi', new Person('ArkUI'));\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对@State装饰变量的属性赋值。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// class属性的赋值\nthis.title.value = 'Hi';\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对嵌套对象的属性直接赋值无法被框架观察到，因此不会触发UI刷新。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 嵌套的属性赋值观察不到\nthis.title.name.value = 'ArkUI';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当装饰的对象是Array时，可以观察到Array整体的赋值及数组元素的赋值，同时可以通过调用Array的接口push, pop, shift, unshift, splice, copyWithin, fill, reverse, sort更新Array中的数据。数组项中嵌套的属性赋值无法观察。详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E8%A3%85%E9%A5%B0array%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
            children: "装饰Array类型变量"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当装饰的对象是Date时，可以观察到Date的赋值，以及通过调用Date的接口setFullYear, setMonth, setDate, setHours, setMinutes, setSeconds, setMilliseconds, setTime, setUTCFullYear, setUTCMonth, setUTCDate, setUTCHours, setUTCMinutes, setUTCSeconds, setUTCMilliseconds更新Date的属性，详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E8%A3%85%E9%A5%B0date%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
            children: "装饰Date类型变量"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当装饰的变量是Map时，可以观察到Map整体的赋值，以及通过调用Map的接口set, clear, delete更新Map的值。详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E8%A3%85%E9%A5%B0map%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
            children: "装饰Map类型变量"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当装饰的变量是Set时，可以观察到Set整体的赋值，以及通过调用Set的接口add, clear, delete更新Set的值。详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E8%A3%85%E9%A5%B0set%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
            children: "装饰Set类型变量"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "框架行为",
      children: "框架行为"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当状态变量改变时，查询依赖该状态变量的组件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "执行依赖该状态变量的组件更新方法，实现组件更新渲染。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制条件",
      children: "限制条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@State装饰的变量必须初始化，否则编译期会报错。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 错误写法，编译报错\n@State count: number;\n\n// 正确写法\n@State count: number = 10;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@State不支持装饰Function类型的变量，API version 23之前，框架会抛出运行时错误。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从API version 23开始，添加对@State装饰Function类型变量的校验，编译期会报错。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "父组件传入undefined时，@State装饰的变量仍使用本地默认值进行初始化。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Parent {\n  @State count: number | undefined = undefined;\n\n  build() {\n    Column() {\n      Text(`Parent count value: ${this.count}`)\n        .fontSize(20)\n        .margin(10)\n      Child({ count: this.count })\n    }\n  }\n}\n\n@Component\nstruct Child {\n  @State count: number | undefined = 0;\n\n  build() {\n    Column() {\n      Text(`Child count value: ${this.count}`)\n        .fontSize(20)\n        .margin(10)\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰简单类型的变量",
      children: "装饰简单类型的变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例为@State装饰的简单类型，count被@State装饰成为状态变量，count的改变引起Button组件的刷新："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当状态变量count改变时，只能查询到Button组件与之关联。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "执行Button组件的更新方法，实现按需刷新。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct MyComponent {\n  @State count: number = 0; // 使用@State装饰简单类型变量\n\n  build() {\n    Row() {\n      Column() {\n        Button(`click times: ${this.count}`)\n          .onClick(() => {\n            this.count += 1;\n          })\n          .width(300)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(435387)/* ["default"] */.A) + "",
        width: "331",
        height: "125"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰class对象类型的变量",
      children: "装饰class对象类型的变量"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "自定义组件MyComponent定义了被@State装饰的状态变量count和title，其中title的类型为自定义类Model。如果count或title的值发生变化，则查询MyComponent中使用该状态变量的UI组件，并进行重新渲染。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "EntryComponent中有多个MyComponent组件实例，第一个MyComponent内部状态的更改不会影响第二个MyComponent。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class Model {\n  public value: string;\n\n  constructor(value: string) {\n    this.value = value;\n  }\n}\n\n@Entry\n@Component\nstruct EntryComponent {\n  build() {\n    Column() {\n      // 此处指定的参数都将在初始渲染时覆盖本地定义的默认值，并不是所有的参数都需要从父组件初始化\n      MyComponent({ count: 1, increaseBy: 2 })\n        .width(300)\n      MyComponent({ title: new Model('Hello World 2'), count: 7 })\n    }\n  }\n}\n\n@Component\nstruct MyComponent {\n  @State title: Model = new Model('Hello World');\n  @State count: number = 0;\n  increaseBy: number = 1;\n\n  build() {\n    Column() {\n      Text(`${this.title.value}`)\n        .margin(10)\n      Button(`Click to change title`)\n        .onClick(() => {\n          // @State变量的更新将触发上面的Text组件内容更新\n          this.title.value = this.title.value === 'Hello ArkUI' ? 'Hello World' : 'Hello ArkUI';\n        })\n        .width(300)\n        .margin(10)\n\n      Button(`Click to increase count = ${this.count}`)\n        .onClick(() => {\n          // @State变量的更新将触发该Button组件的内容更新\n          this.count += this.increaseBy;\n        })\n        .width(300)\n        .margin(10)\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(145046)/* ["default"] */.A) + "",
        width: "294",
        height: "291"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从上述示例中，我们可以了解到@State变量的初始化机制："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "上述示例中，在没有外部传入的情况下，使用默认的值进行本地初始化："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// title没有外部传入，使用本地的值new Model('Hello World')进行初始化\nMyComponent({ count: 1, increaseBy: 2 })\n// increaseBy没有外部传入，使用本地的值1进行初始化\nMyComponent({ title: new Model('Hello World 2'), count: 7 })\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "上述示例中，在有外部传入的情况下，使用外部传入的值进行初始化："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// count和increaseBy均有外部传入，分别使用传入的1和2进行初始化\nMyComponent({ count: 1, increaseBy: 2 })\n// title和count均有外部传入，分别使用传入的new Model('Hello World 2')和7进行初始化\nMyComponent({ title: new Model('Hello World 2'), count: 7 })\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰array类型变量",
      children: "装饰Array类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，@State装饰的变量fruits的类型为Array<Fruit>，点击Button改变fruits的值，视图会随之刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Fruit {\n  public name: string;\n\n  constructor(name: string) {\n    this.name = name;\n  }\n}\n\n@Entry\n@Component\nstruct ArraySample {\n  @State fruits: Fruit[] = [new Fruit('apple'), new Fruit('banana')]; // 使用@State装饰Array类型变量\n\n  build() {\n    Row() {\n      Column() {\n        ForEach(this.fruits, (item: Fruit) => {\n          Text(`${item.name}`)\n            .fontSize(20)\n            .margin(10)\n        })\n        // 对数组元素重新赋值，触发UI刷新\n        Button('Set element at index 0')\n          .onClick(() => {\n            this.fruits[0] = new Fruit('orange');\n          })\n          .width(300)\n          .margin(10)\n        // 新增数组元素，触发UI刷新\n        Button('Push element')\n          .onClick(() => {\n            this.fruits.push(new Fruit('cherry'));\n          })\n          .width(300)\n          .margin(10)\n        // 删除数组元素，触发UI刷新\n        Button('Pop element')\n          .onClick(() => {\n            this.fruits.pop();\n          })\n          .width(300)\n          .margin(10)\n        // 对数组整体重新赋值，触发UI刷新\n        Button('Reset array')\n          .onClick(() => {\n            this.fruits = [new Fruit('strawberry'), new Fruit('blueberry')];\n          })\n          .width(300)\n          .margin(10)\n        // 修改嵌套的属性，无法触发UI刷新\n        Button('Modify element[0] property')\n          .onClick(() => {\n            this.fruits[0].name = 'pineapple';\n          })\n          .width(300)\n          .margin(10)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(171142)/* ["default"] */.A) + "",
        width: "327",
        height: "411"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰map类型变量",
      children: "装饰Map类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(732791)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11开始，@State支持Map类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，@State装饰的变量fruits的类型为Map<string, number>，点击Button改变fruits的值，视图会随之刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct MapSample {\n  @State fruits: Map<string, number> = new Map([['apple', 1], ['banana', 2]]); // 使用@State装饰Map类型变量\n\n  build() {\n    Row() {\n      Column() {\n        ForEach(Array.from(this.fruits.entries()), (item: [string, number]) => {\n          Text(`key: ${item[0]}, value: ${item[1]}`)\n            .fontSize(20)\n            .margin(10)\n        })\n        // 新增键值对，触发UI刷新\n        Button('Set entry cherry')\n          .onClick(() => {\n            this.fruits.set('cherry', 3);\n          })\n          .width(300)\n          .margin(10)\n        // 更新键值对，触发UI刷新\n        Button('Update entry apple')\n          .onClick(() => {\n            this.fruits.set('apple', 4);\n          })\n          .width(300)\n          .margin(10)\n        // 删除键值对，触发UI刷新\n        Button('Delete entry apple')\n          .onClick(() => {\n            this.fruits.delete('apple');\n          })\n          .width(300)\n          .margin(10)\n        // 对Map整体重新赋值，触发UI刷新\n        Button('Reset map')\n          .onClick(() => {\n            this.fruits = new Map([['strawberry', 9], ['blueberry', 8]]);\n          })\n          .width(300)\n          .margin(10)\n        // 清空Map，触发UI刷新\n        Button('Clear map')\n          .onClick(() => {\n            this.fruits.clear();\n          })\n          .width(300)\n          .margin(10)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(852664)/* ["default"] */.A) + "",
        width: "327",
        height: "418"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰set类型变量",
      children: "装饰Set类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(662349)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11开始，@State支持Set类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，@State装饰的变量fruits的类型为Set<string>，点击Button改变fruits的值，视图会随之刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct SetSample {\n  @State fruits: Set<string> = new Set(['apple', 'banana']); // 使用@State装饰Set类型变量\n\n  build() {\n    Row() {\n      Column() {\n        ForEach(Array.from(this.fruits.entries()), (item: [string, string]) => {\n          Text(`${item[0]}`)\n            .fontSize(20)\n            .margin(10)\n        })\n        // 新增元素，触发UI刷新\n        Button('Add element')\n          .onClick(() => {\n            this.fruits.add('cherry');\n          })\n          .width(300)\n          .margin(10)\n        // 删除元素，触发UI刷新\n        Button('Delete element apple')\n          .onClick(() => {\n            this.fruits.delete('apple');\n          })\n          .width(300)\n          .margin(10)\n        // 对Set整体重新赋值，触发UI刷新\n        Button('Reset set')\n          .onClick(() => {\n            this.fruits = new Set(['strawberry', 'blueberry']);\n          })\n          .width(300)\n          .margin(10)\n        // 清空Set，触发UI刷新\n        Button('Clear set')\n          .onClick(() => {\n            this.fruits.clear();\n          })\n          .width(300)\n          .margin(10)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(364844)/* ["default"] */.A) + "",
        width: "327",
        height: "381"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰date类型变量",
      children: "装饰Date类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，@State装饰的变量selectedDate的类型为Date，点击Button改变selectedDate的值，视图会随之刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct DatePickerExample {\n  @State selectedDate: Date = new Date('2021-08-08'); // 使用@State装饰Date类型变量\n\n  build() {\n    Row() {\n      Column() {\n        // 通过给selectedDate重新赋值新的Date实例，触发UI刷新\n        Button('set selectedDate to 2023-07-08')\n          .onClick(() => {\n            this.selectedDate = new Date('2023-07-08');\n          })\n          .margin(10)\n          .width(300)\n        // 调用Date的setFullYear接口修改年份，触发UI刷新\n        Button('increase the year by 1')\n          .onClick(() => {\n            this.selectedDate.setFullYear(this.selectedDate.getFullYear() + 1);\n          })\n          .margin(10)\n          .width(300)\n        // 调用Date的setMonth接口修改月份，触发UI刷新\n        Button('increase the month by 1')\n          .onClick(() => {\n            this.selectedDate.setMonth(this.selectedDate.getMonth() + 1);\n          })\n          .margin(10)\n          .width(300)\n        // 调用Date的setDate接口修改日期，触发UI刷新\n        Button('increase the day by 1')\n          .onClick(() => {\n            this.selectedDate.setDate(this.selectedDate.getDate() + 1);\n          })\n          .margin(10)\n          .width(300)\n        DatePicker({\n          start: new Date('1970-1-1'),\n          end: new Date('2100-1-1'),\n          selected: this.selectedDate\n        }).margin(20)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(628025)/* ["default"] */.A) + "",
        width: "380",
        height: "530"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "state支持联合类型实例",
      children: "State支持联合类型实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@State支持联合类型和undefined和null，在下面的示例中，count类型为number | undefined，点击Button改变count的值，视图会随之刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct UnionTypeSample {\n  @State count: number | undefined = 0; // 使用@State装饰联合类型变量\n\n  build() {\n    Row() {\n      Column() {\n        Text(`count: ${this.count}`)\n        // 将联合类型变量从number切换为undefined，触发UI刷新\n        Button('change to undefined')\n          .onClick(() => {\n            this.count = undefined;\n          })\n          .width(300)\n          .margin(10)\n        // 将联合类型变量从undefined切换为number，触发UI刷新\n        Button('change to number')\n          .onClick(() => {\n            this.count = 10;\n          })\n          .width(300)\n          .margin(10)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(998983)/* ["default"] */.A) + "",
        width: "420",
        height: "215"
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
435387(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437641-fa5e04b047b8fc3852d052a9d60e7fcd.gif");

},
628025(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957598-c74352c48395d8e24cb5d019878fc0f8.gif");

},
852664(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797948-e2dd4f4d75c4ab1e6ea79b0ff862902f.gif");

},
404386(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797946-aaabd09c14c33c96a93605a2ad03eaba.png");

},
364844(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437643-4b97464e7605cf82a188f8d3e8a60aa9.gif");

},
998983(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477599-b0443025c7572b769a9cab07a7a3bf94.gif");

},
171142(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477597-bb496ee55408be8dd06758cc475b92b2.gif");

},
732791(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
662349(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
384685(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
145046(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957596-9adafa51ee8c989b1dec71ea9cbb2df8.gif");

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