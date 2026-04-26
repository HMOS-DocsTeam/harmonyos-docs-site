"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["119073"], {
161657(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_1_arkts_v_1_component_state_management_arkts_prop_arkts_prop_md_815_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-state-management-v-1-arkts-v-1-component-state-management-arkts-prop-arkts-prop-md-815.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_1_arkts_v_1_component_state_management_arkts_prop_arkts_prop_md_815_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop/arkts-prop","title":"@Prop装饰器：父子单向同步","description":"@Prop装饰的变量可以和父组件建立单向同步关系。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop/arkts-prop.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"@Prop装饰器：父子单向同步","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-prop","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"@State装饰器：组件内状态","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state/"},"next":{"title":"@Link装饰器：父子双向同步","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop/arkts-prop.md


const frontMatter = {
	title: '@Prop装饰器：父子单向同步',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-prop',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '@Prop装饰器：父子单向同步';

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
  "value": "父组件@State到子组件@Prop简单数据类型同步",
  "id": "父组件state到子组件prop简单数据类型同步",
  "level": 3
}, {
  "value": "父组件@State数组项到子组件@Prop简单数据类型同步",
  "id": "父组件state数组项到子组件prop简单数据类型同步",
  "level": 3
}, {
  "value": "从父组件中的@State类对象属性到@Prop简单类型的同步",
  "id": "从父组件中的state类对象属性到prop简单类型的同步",
  "level": 3
}, {
  "value": "从父组件中的@State数组项到@Prop class类型的同步",
  "id": "从父组件中的state数组项到prop-class类型的同步",
  "level": 3
}, {
  "value": "@Prop本地初始化不和父组件同步",
  "id": "prop本地初始化不和父组件同步",
  "level": 3
}, {
  "value": "@Prop嵌套场景",
  "id": "prop嵌套场景",
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
  "value": "Prop支持联合类型实例",
  "id": "prop支持联合类型实例",
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
        id: "prop装饰器父子单向同步",
        children: "@Prop装饰器：父子单向同步"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Prop装饰的变量可以和父组件建立单向同步关系。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在阅读@Prop文档前，建议开发者首先了解", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
        children: "@State"
      }), "的基本用法。最佳实践请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-status-management",
        children: "状态管理最佳实践"
      }), "。常见问题请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-state-management-faq",
        children: "状态管理常见问题"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(193440)/* ["default"] */.A) + "",
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
      children: "@Prop装饰的变量具有以下特性："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Prop装饰的变量允许本地修改，但修改不会同步回父组件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当数据源更改时，@Prop装饰的变量都会更新，并且会覆盖本地所有更改。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "装饰器使用规则说明",
      children: "装饰器使用规则说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "@Prop变量装饰器"
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
            children: "同步类型"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["单向同步。对父组件状态变量值的修改，将同步给子组件@Prop装饰的变量，子组件@Prop装饰的变量的修改不会同步到父组件的状态变量上。  嵌套类型的场景请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%A7%82%E5%AF%9F%E5%8F%98%E5%8C%96",
              children: "观察变化"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "允许装饰的变量类型"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Object、class、string、number、boolean、enum类型，以及这些类型的数组。  API version 10开始支持", (0,jsx_runtime.jsx)(_components.a, {
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
              href: "#prop%E6%94%AF%E6%8C%81%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B%E5%AE%9E%E4%BE%8B",
              children: "Prop支持联合类型实例"
            }), "。  支持类型的场景请参考", (0,jsx_runtime.jsx)(_components.a, {
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
            children: "嵌套传递层数"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在组件复用场景，建议@Prop深度嵌套数据不要超过5层，嵌套太多会导致深拷贝占用的空间过大以及GarbageCollection(垃圾回收)，引起性能问题，此时更建议使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
              children: "@ObjectLink"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "被装饰变量的初始值"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["允许本地初始化。API version 11及以上，如果和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-require",
              children: "@Require"
            }), "结合使用，则必须父组件构造传参。"]
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
            children: "装饰器使用规则"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "从父组件初始化"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["如果本地有初始化，则是可选的，初始化行为和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state#%E5%8F%98%E9%87%8F%E7%9A%84%E4%BC%A0%E9%80%92%E8%AE%BF%E9%97%AE%E8%A7%84%E5%88%99%E8%AF%B4%E6%98%8E",
              children: "@State"
            }), "保持一致。没有的话，则必选，支持父组件中的常规变量（常规变量对@Prop赋值，只是数值的初始化，常规变量的变化不会触发UI刷新。只有状态变量才能触发UI刷新）、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
              children: "@State"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link",
              children: "@Link"
            }), "、@Prop、", (0,jsx_runtime.jsx)(_components.a, {
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
            }), "去初始化子组件中的@Prop装饰的变量。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "用于初始化子组件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop支持初始化子组件中的常规变量、@State、@Link、@Prop、@Provide。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持组件外访问"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop装饰的变量是私有的，只能在组件内访问。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始化规则图示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(143002)/* ["default"] */.A) + "",
        width: "1888",
        height: "273"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "观察变化和行为表现",
      children: "观察变化和行为表现"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "观察变化",
      children: "观察变化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Prop装饰的数据可以观察到以下变化。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当装饰支持类型，可以观察到赋值的变化。简单类型完整示例请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E7%88%B6%E7%BB%84%E4%BB%B6state%E5%88%B0%E5%AD%90%E7%BB%84%E4%BB%B6prop%E7%AE%80%E5%8D%95%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E5%90%8C%E6%AD%A5",
            children: "父组件@State到子组件@Prop简单数据类型同步"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 简单类型\n@Prop count: number;\n// 赋值的变化可以被观察到\nthis.count = 1;\n// 复杂类型\n@Prop title: Model;\n// 可以观察到赋值的变化\nthis.title = new Model('Hi');\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当装饰的类型是Object或者class复杂类型时，可以观察到自身的赋值和第一层的属性的变化，属性即object.keys(observedObject)返回的所有属性。复杂类型完整示例请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E4%BB%8E%E7%88%B6%E7%BB%84%E4%BB%B6%E4%B8%AD%E7%9A%84state%E7%B1%BB%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7%E5%88%B0prop%E7%AE%80%E5%8D%95%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%90%8C%E6%AD%A5",
            children: "从父组件中的@State类对象属性到@Prop简单类型的同步"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 定义嵌套类\nclass Info {\n  public value: string;\n\n  constructor(value: string) {\n    this.value = value;\n  }\n}\n\nclass Model {\n  public value: string;\n  public info: Info;\n\n  constructor(value: string, info: Info) {\n    this.value = value;\n    this.info = info;\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Prop title: Model;\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 可以观察到第一层的变化\nthis.title.value = 'Hi';\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 观察不到第二层的变化\nthis.title.info.value = 'ArkUI';\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["对于嵌套场景，如果class是被@Observed装饰的，可以观察到class属性的变化，示例请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#prop%E5%B5%8C%E5%A5%97%E5%9C%BA%E6%99%AF",
        children: "@Prop嵌套场景"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["当装饰的类型是数组的时候，可以观察到数组本身的赋值和数组项的添加、删除和更新。数组类型完整示例请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E7%88%B6%E7%BB%84%E4%BB%B6state%E6%95%B0%E7%BB%84%E9%A1%B9%E5%88%B0%E5%AD%90%E7%BB%84%E4%BB%B6prop%E7%AE%80%E5%8D%95%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E5%90%8C%E6%AD%A5",
            children: "父组件@State数组项到子组件@Prop简单数据类型同步"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// @Prop装饰的对象为数组时\n@Prop title: string[];\n// 数组自身的赋值可以观察到\nthis.title = ['1'];\n// 数组项的赋值可以观察到\nthis.title[0] = '2';\n// 删除数组项可以观察到\nthis.title.pop();\n// 新增数组项可以观察到\nthis.title.push('3');\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于@State和@Prop的同步场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用父组件中@State变量的值初始化子组件中的@Prop装饰的变量。当@State变量变化时，该变量值也会同步更新至@Prop装饰的变量。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Prop装饰的变量的修改不会影响其数据源@State装饰变量的值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "除了@State，数据源也可以用@Link或@Prop装饰，对@Prop的同步机制是相同的。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "数据源和@Prop装饰的变量的类型需要相同。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当装饰的对象是Date时，可以观察到Date整体的赋值，同时可通过调用Date的接口setFullYear, setMonth, setDate, setHours, setMinutes, setSeconds, setMilliseconds, setTime, setUTCFullYear, setUTCMonth, setUTCDate, setUTCHours, setUTCMinutes, setUTCSeconds, setUTCMilliseconds 更新Date的属性，详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%A3%85%E9%A5%B0date%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
          children: "装饰Date类型变量"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当装饰的变量是Map时，可以观察到Map整体的赋值，同时可通过调用Map的接口set, clear, delete 更新Map的值。详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%A3%85%E9%A5%B0map%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
          children: "装饰Map类型变量"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当装饰的变量是Set时，可以观察到Set整体的赋值，同时可通过调用Set的接口add, clear, delete 更新Set的值。详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%A3%85%E9%A5%B0set%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
          children: "装饰Set类型变量"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "框架行为",
      children: "框架行为"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "理解@Prop装饰的变量值初始化和更新机制，需要了解父组件和子组件的渲染和更新流程。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始渲染："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "执行父组件的build()函数，创建子组件的新实例并传递数据源。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "初始化子组件@Prop装饰的变量。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "更新："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "子组件@Prop更新时，更新仅停留在当前子组件，不会同步回父组件。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "当父组件的数据源更新时，子组件的@Prop装饰的变量将被来自父组件的数据源重置，所有@Prop装饰变量的本地修改将被父组件的更新覆盖。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(836088)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Prop同步数据源依赖于数据源所在组件的刷新，而应用进入后台后无法触发刷新，因此应用进入后台后，@Prop无法从数据源更新。在此场景下，若需即时数据同步，推荐使用@Link代替。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例中，当@State装饰的变量message改变时，Father组件会刷新。由于Son组件使用@Prop接收了该变量，因此Father组件刷新的过程中会使用message的最新值去更新@Prop的值。@Prop更新后，会触发Son组件的刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct Son {\n  @Prop message: string = 'Hi';\n\n  build() {\n    Column() {\n      Text(this.message)\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Father {\n  @State message: string = 'Hello';\n\n  build() {\n    Column() {\n      Text(this.message)\n      Button(`father click`).onClick(() => {\n        this.message += '*';\n      })\n      Son({ message: this.message })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制条件",
      children: "限制条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["@Prop装饰变量时会进行深拷贝，在拷贝的过程中除了基本类型、Map、Set、Date、Array外，都会丢失类型。例如，对于通过NAPI提供的复杂类型（如", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/image-api/image-arkts/js-apis-image/arkts-apis-image-pixelmap/arkts-apis-image-pixelmap",
            children: "PixelMap"
          }), "），由于其部分实现在Native侧，因此无法在ArkTS侧通过深拷贝获得完整的数据；同样，RegExp类型在拷贝过程中会丢失原类型，导致被@Prop装饰后无法调用正则相关函数。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@Prop不支持装饰Function类型的变量，API version 23之前，框架会抛出运行时错误。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从API version 23开始，添加对@Prop装饰Function类型变量的校验，编译期会报错。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "父组件传入undefined时，@Prop装饰的变量仍使用本地默认值进行初始化。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Parent {\n  @State count: number | undefined = undefined;\n\n  build() {\n    Column() {\n      Text(`Parent count value: ${this.count}`)\n        .fontSize(20)\n        .margin(10)\n      Child({ count: this.count })\n    }\n  }\n}\n\n@Component\nstruct Child {\n  @Prop count: number | undefined = 0;\n\n  build() {\n    Column() {\n      Text(`Child count value: ${this.count}`)\n        .fontSize(20)\n        .margin(10)\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "父组件state到子组件prop简单数据类型同步",
      children: "父组件@State到子组件@Prop简单数据类型同步"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例是@State到子组件@Prop简单数据同步，父组件ParentComponent的状态变量countDownStartValue初始化子组件CountDownComponent中@Prop装饰的count，点击“Try again”，count的修改仅保留在CountDownComponent，不会同步给父组件ParentComponent。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ParentComponent的状态变量countDownStartValue的变化将重置CountDownComponent的count。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct CountDownComponent {\n  @Prop count: number = 0;\n  costOfOneAttempt: number = 1;\n\n  build() {\n    Column() {\n      if (this.count > 0) {\n        Text(`You have ${this.count} Nuggets left`)\n      } else {\n        Text('Game over!')\n      }\n      // @Prop装饰的变量不会同步给父组件\n      Button(`Try again`).onClick(() => {\n        this.count -= this.costOfOneAttempt;\n      })\n    }\n  }\n}\n\n@Entry\n@Component\nstruct ParentComponent {\n  @State countDownStartValue: number = 10;\n\n  build() {\n    Column() {\n      Text(`Grant ${this.countDownStartValue} nuggets to play.`)\n      // 父组件的数据源的修改会同步给子组件\n      Button(`+1 - Nuggets in New Game`).onClick(() => {\n        this.countDownStartValue += 1;\n      })\n      // 父组件的修改会同步给子组件\n      Button(`-1  - Nuggets in New Game`).onClick(() => {\n        this.countDownStartValue -= 1;\n      })\n      CountDownComponent({ count: this.countDownStartValue, costOfOneAttempt: 2 })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上面的示例中："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CountDownComponent子组件首次创建时其@Prop装饰的count变量将从父组件@State装饰的countDownStartValue变量初始化。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "按“+1”或“-1”按钮时，父组件的@State装饰的countDownStartValue值会变化，这将触发父组件重新渲染，在父组件重新渲染过程中会刷新使用countDownStartValue状态变量的UI组件，并单向同步更新CountDownComponent子组件中的count值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "更新count状态变量值也会触发CountDownComponent的重新渲染，在重新渲染过程中，评估使用count状态变量的if语句条件（this.count > 0），并执行true分支中的使用count状态变量的UI组件相关描述来更新Text组件的UI显示。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当按下子组件CountDownComponent的“Try again”按钮时，其@Prop装饰的变量count将被更改，但是count值的更改不会影响父组件的countDownStartValue值。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "父组件的countDownStartValue值变化时，父组件的修改将覆盖掉子组件CountDownComponent中count本地的修改。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "父组件state数组项到子组件prop简单数据类型同步",
      children: "父组件@State数组项到子组件@Prop简单数据类型同步"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "父组件中@State如果装饰数组类型的变量，其数组项也可以初始化@Prop。以下示例中，父组件Index中@State装饰数组arr，将其数组项初始化子组件Child中@Prop装饰的value。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct Child {\n  @Prop value: number = 0;\n\n  build() {\n    Text(`${this.value}`)\n      .fontSize(50)\n      .onClick(() => {\n        this.value++;\n      })\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  @State arr: number[] = [1, 2, 3];\n\n  build() {\n    Row() {\n      Column() {\n        Child({ value: this.arr[0] })\n        Child({ value: this.arr[1] })\n        Child({ value: this.arr[2] })\n\n        Divider().height(5)\n\n        ForEach(this.arr,\n          (item: number) => {\n            Child({ value: item })\n          },\n          (item: number) => item.toString()\n        )\n        Text('replace entire arr')\n          .fontSize(50)\n          .onClick(() => {\n            // 两个数组都包含项“3”。\n            this.arr = this.arr[0] == 1 ? [3, 4, 5] : [1, 2, 3];\n          })\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "初始渲染创建6个子组件实例，每个@Prop装饰的变量初始化都在本地拷贝了一份数组项。子组件onClick事件处理程序会更改局部变量值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果点击界面上的“1”六次，“2”五次、“3”四次，将所有变量的本地取值都变为“7”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "7\n7\n7\n——————\n7\n7\n7\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击replace entire arr后，屏幕将显示以下信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "3\n4\n5\n——————\n7\n4\n5\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在子组件Child中做的所有的修改都不会同步回父组件Index组件，所以即使6个组件显示都为7，但在父组件Index中，this.arr保存的值依旧是[1,2,3]。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击replace entire arr，this.arr[0] == 1成立，将this.arr赋值为[3, 4, 5]。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "因为this.arr[0]已更改，Child({value: this.arr[0]})组件将this.arr[0]更新同步到实例@Prop装饰的变量。Child({value: this.arr[1]})和Child({value: this.arr[2]})的情况也类似。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "this.arr的更改触发ForEach更新，this.arr更新的前后都有数值为3的数组项：[3, 4, 5] 和[1, 2, 3]。根据diff算法，数组项“3”将被保留，删除“1”和“2”的数组项，添加为“4”和“5”的数组项。这就意味着，数组项“3”的组件不会重新生成，而是将其移动到第一位。所以“3”对应的组件不会更新，此时“3”对应的组件数值为“7”，ForEach最终的渲染结果是“7”，“4”，“5”。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "从父组件中的state类对象属性到prop简单类型的同步",
      children: "从父组件中的@State类对象属性到@Prop简单类型的同步"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果图书馆有一本图书和两位用户，每位用户都可以将图书标记为已读，此标记行为不会影响其他用户。从代码角度讲，对@Prop图书对象的本地更改不会同步给图书馆组件中的@State图书对象。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在此示例中，图书类可以使用@Observed装饰器，但不是必须的，只有在嵌套结构时需要此装饰器。这一点会在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E4%BB%8E%E7%88%B6%E7%BB%84%E4%BB%B6%E4%B8%AD%E7%9A%84state%E6%95%B0%E7%BB%84%E9%A1%B9%E5%88%B0prop-class%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%90%8C%E6%AD%A5",
        children: "从父组件中的@State数组项到@Prop class类型的同步"
      }), "说明。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Book {\n  public title: string;\n  public pages: number;\n  public readIt: boolean = false;\n\n  constructor(title: string, pages: number) {\n    this.title = title;\n    this.pages = pages;\n  }\n}\n\n@Component\nstruct ReaderComp {\n  @Prop book: Book = new Book('', 0);\n\n  build() {\n    Row() {\n      Text(this.book.title)\n      Text(`...has${this.book.pages} pages!`)\n      Text(`...${this.book.readIt ? 'I have read' : 'I have not read it'}`)\n        .onClick(() => this.book.readIt = true)\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Library {\n  @State book: Book = new Book('100 secrets of C++', 765);\n\n  build() {\n    Column() {\n      ReaderComp({ book: this.book })\n      ReaderComp({ book: this.book })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "从父组件中的state数组项到prop-class类型的同步",
      children: "从父组件中的@State数组项到@Prop class类型的同步"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例中，更改了@State装饰的allBooks数组中Book对象的属性，但点击“Mark read for everyone”时，没有触发UI更新。这是因为该属性是第二层的嵌套属性，@State装饰器只能观察到第一层属性，不会观察到此属性更改，所以框架不会更新ReaderComp。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0001;\nconst TAG: string = '[SampleProp]';\nlet nextId: number = 1;\n\n// @Observed\nclass Book {\n  public id: number;\n  public title: string;\n  public pages: number;\n  public readIt: boolean = false;\n\n  constructor(title: string, pages: number) {\n    this.id = nextId++;\n    this.title = title;\n    this.pages = pages;\n  }\n}\n\n@Component\nstruct ReaderComp {\n  @Prop book: Book = new Book('', 1);\n\n  build() {\n    Row() {\n      Text(` ${this.book ? this.book.title : 'Book is undefined'}`).fontColor('#e6000000')\n      Text(` has ${this.book ? this.book.pages : 'Book is undefined'} pages!`).fontColor('#e6000000')\n      Text(` ${this.book ? this.book.readIt ? 'I have read' : 'I have not read it' : 'Book is undefined'}`)\n        .fontColor('#e6000000')\n        .onClick(() => this.book.readIt = true)\n    }\n  }\n}\n\n@Entry\n@Component\nstruct Library {\n  @State allBooks: Book[] = [new Book('C#', 765), new Book('JS', 652), new Book('TS', 765)];\n\n  build() {\n    Column() {\n      Text('library`s all time favorite')\n        .width(312)\n        .height(40)\n        .backgroundColor('#0d000000')\n        .borderRadius(20)\n        .margin(12)\n        .padding({ left: 20 })\n        .fontColor('#e6000000')\n      ReaderComp({ book: this.allBooks[2] })\n        .backgroundColor('#0d000000')\n        .width(312)\n        .height(40)\n        .padding({ left: 20, top: 10 })\n        .borderRadius(20)\n        .colorBlend('#e6000000')\n      Text('Books on loan to a reader')\n        .width(312)\n        .height(40)\n        .backgroundColor('#0d000000')\n        .borderRadius(20)\n        .margin(12)\n        .padding({ left: 20 })\n        .fontColor('#e6000000')\n      ForEach(this.allBooks, (book: Book) => {\n        ReaderComp({ book: book })\n          .margin(12)\n          .width(312)\n          .height(40)\n          .padding({ left: 20, top: 10 })\n          .backgroundColor('#0d000000')\n          .borderRadius(20)\n      },\n        (book: Book) => book.id.toString())\n      Button('Add new')\n        .width(312)\n        .height(40)\n        .margin(12)\n        .fontColor('#FFFFFF')\n        .onClick(() => {\n          this.allBooks.push(new Book('JA', 512));\n        })\n      Button('Remove first book')\n        .width(312)\n        .height(40)\n        .margin(12)\n        .fontColor('#FFFFFF')\n        .onClick(() => {\n          if (this.allBooks.length > 0) {\n            this.allBooks.shift();\n          } else {\n            hilog.info(DOMAIN, TAG, 'length <= 0');\n          }\n        })\n      Button('Mark read for everyone')\n        .width(312)\n        .height(40)\n        .margin(12)\n        .fontColor('#FFFFFF')\n        .onClick(() => {\n          this.allBooks.forEach((book) => book.readIt = true)\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用@Observed装饰class Book，Book的属性变化将被观察。需要注意的是，@Prop在子组件装饰的状态变量和父组件的数据源是单向同步关系，即ReaderComp中的@Prop book的修改不会同步给父组件Library。而父组件只会在状态变量发生变化的时候，才会触发UI的重新渲染。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Observed\nclass Book {\n  public id: number;\n  public title: string;\n  public pages: number;\n  public readIt: boolean = false;\n\n  constructor(title: string, pages: number) {\n    this.id = nextId++;\n    this.title = title;\n    this.pages = pages;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Observed装饰的类的实例会被不透明的代理对象包装，此代理可以检测到包装对象内的所有属性更改。如果发生这种情况，此时，代理通知@Prop，@Prop对象值被更新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(802875)/* ["default"] */.A) + "",
        width: "348",
        height: "606"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prop本地初始化不和父组件同步",
      children: "@Prop本地初始化不和父组件同步"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了支持@Component装饰的组件复用场景，@Prop支持本地初始化，这样可以让@Prop是否与父组件建立同步关系变得可选。当且仅当@Prop有本地初始化时，从父组件向子组件传递@Prop的数据源才是可选的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面的示例中，子组件包含两个@Prop装饰的变量："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Prop customCounter没有本地初始化，所以需要父组件提供数据源去初始化@Prop，并当父组件的数据源变化时，@Prop也将被更新。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@Prop customCounter2有本地初始化，在这种情况下，@Prop依旧允许但非强制父组件同步数据源给@Prop。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct MyComponent {\n  @Prop customCounter: number;\n  @Prop customCounter2: number = 5;\n\n  build() {\n    Column() {\n      Row() {\n        Text(`From Main: ${this.customCounter}`).fontColor('#ff6b6565').margin({ left: -110, top: 12 })\n      }\n\n      Row() {\n        Button('Click to change locally!')\n          .width(288)\n          .height(40)\n          .margin({ left: 30, top: 12 })\n          .fontColor('#FFFFFF')\n          .onClick(() => {\n            this.customCounter2++;\n          })\n      }\n\n      Row() {\n        Text(`Custom Local: ${this.customCounter2}`).fontColor('#ff6b6565').margin({ left: -110, top: 12 })\n      }\n    }\n  }\n}\n\n@Entry\n@Component\nstruct MainProgram {\n  @State mainCounter: number = 10;\n\n  build() {\n    Column() {\n      Row() {\n        Column() {\n          // customCounter必须从父组件初始化，因为MyComponent的customCounter成员变量缺少本地初始化；此处，customCounter2可以不做初始化\n          MyComponent({ customCounter: this.mainCounter })\n          // customCounter2也可以从父组件初始化，父组件初始化的值会覆盖子组件customCounter2的本地初始化的值\n          MyComponent({ customCounter: this.mainCounter, customCounter2: this.mainCounter })\n        }\n      }\n\n      Row() {\n        Column() {\n          Button('Click to change number')\n            .width(288)\n            .height(40)\n            .margin({ left: 30, top: 12 })\n            .fontColor('#FFFFFF')\n            .onClick(() => {\n              this.mainCounter++;\n            })\n        }\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(807655)/* ["default"] */.A) + "",
        width: "288",
        height: "252"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prop嵌套场景",
      children: "@Prop嵌套场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在嵌套场景下，每一层都要用@Observed装饰，且每一层都要被@Prop接收，这样才能观察到嵌套场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 以下是嵌套类对象的数据结构。\n@Observed\nclass Son {\n  public title: string;\n\n  constructor(title: string) {\n    this.title = title;\n  }\n}\n\n@Observed\nclass Father {\n  public name: string;\n  public son: Son;\n\n  constructor(name: string, son: Son) {\n    this.name = name;\n    this.son = son;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下组件层次结构展示了@Prop嵌套场景的数据结构。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Person {\n  @State person: Father = new Father('Hello', new Son('world'));\n\n  build() {\n    Column() {\n      Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center }) {\n        Button('change Father name')\n          .width(312)\n          .height(40)\n          .margin(12)\n          .fontColor('#FFFFFF')\n          .onClick(() => {\n            this.person.name = 'Hi';\n          })\n        Button('change Son title')\n          .width(312)\n          .height(40)\n          .margin(12)\n          .fontColor('#FFFFFF')\n          .onClick(() => {\n            // person被@State装饰，@State无法观测到嵌套类型的变化，直接点击该按钮，此时title已经发生变化，但是无法被观测到。\n            this.person.son.title = 'ArkUI';\n          })\n        Text(this.person.name)\n          .fontSize(16)\n          .margin(12)\n          .width(312)\n          .height(40)\n          .backgroundColor('#ededed')\n          .borderRadius(20)\n          .textAlign(TextAlign.Center)\n          .fontColor('#e6000000')\n          .onClick(() => {\n            // 点击该按钮，此次变化会被观测到，同时能够观察到Button('change Son title')点击后的效果。\n            this.person.name = 'Bye';\n          })\n        Text(this.person.son.title)\n          .fontSize(16)\n          .margin(12)\n          .width(312)\n          .height(40)\n          .backgroundColor('#ededed')\n          .borderRadius(20)\n          .textAlign(TextAlign.Center)\n          .onClick(() => {\n            this.person.son.title = 'openHarmony';\n          })\n        Child({ child: this.person.son })\n      }\n    }\n  }\n}\n\n\n@Component\nstruct Child {\n  @Prop child: Son = new Son('');\n\n  build() {\n    Column() {\n      Text(this.child.title)\n        .fontSize(16)\n        .margin(12)\n        .width(312)\n        .height(40)\n        .backgroundColor('#ededed')\n        .borderRadius(20)\n        .textAlign(TextAlign.Center)\n        .onClick(() => {\n          this.child.title = 'Bye Bye';\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(966155)/* ["default"] */.A) + "",
        width: "254",
        height: "233"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰array类型变量",
      children: "装饰Array类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，message类型为number[]，点击Button改变message的值，视图会随之刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  @State message: number[] = [0, 1, 2, 3];\n\n  build() {\n    Column() {\n      Child({ message: this.message })\n    }\n  }\n}\n\n@Component\nstruct Child {\n  @Prop message: number[] = [0, 1, 2, 3];\n\n  build() {\n    Row() {\n      Column() {\n        ForEach(this.message, (item: number) => {\n          Text(`${item}`)\n            .fontSize(20)\n            .margin(10)\n        })\n        // 新增数组元素，触发UI刷新\n        Button('Push element')\n          .onClick(() => {\n            this.message.push(4);\n          })\n          .width(300)\n          .margin(10)\n        // 删除数组元素，触发UI刷新\n        Button('Pop element')\n          .onClick(() => {\n            this.message.pop();\n          })\n          .width(300)\n          .margin(10)\n        // 对数组整体重新赋值，触发UI刷新\n        Button('Reset array')\n          .onClick(() => {\n            this.message = [9, 8, 7, 6];\n          })\n          .width(300)\n          .margin(10)\n        // 更新数组元素，触发UI刷新\n        Button('Modify element[0]')\n          .onClick(() => {\n            this.message[0] = 10;\n          })\n          .width(300)\n          .margin(10)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰map类型变量",
      children: "装饰Map类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(506195)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11开始，@Prop支持Map类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，value类型为Map<number, string>，点击Button改变value的值，视图会随之刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct Child {\n  @Prop value: Map<number, string> = new Map([[0, 'a'], [1, 'b'], [3, 'c']]);\n\n  build() {\n    Column() {\n      ForEach(Array.from(this.value.entries()), (item: [number, string]) => {\n        Text(`${item[0]}`).fontSize(30)\n        Text(`${item[1]}`).fontSize(30)\n        Divider()\n      })\n      Button('child init map').onClick(() => {\n        this.value = new Map([[0, 'a'], [1, 'b'], [3, 'c']]);\n      })\n      Button('child set new one').onClick(() => {\n        this.value.set(4, 'd');\n      })\n      Button('child clear').onClick(() => {\n        this.value.clear();\n      })\n      Button('child replace the first one').onClick(() => {\n        this.value.set(0, 'aa');\n      })\n      Button('child delete the first one').onClick(() => {\n        this.value.delete(0);\n      })\n    }\n  }\n}\n\n\n@Entry\n@Component\nstruct MapSample {\n  @State message: Map<number, string> = new Map([[0, 'a'], [1, 'b'], [3, 'c']]);\n\n  build() {\n    Row() {\n      Column() {\n        Child({ value: this.message })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰set类型变量",
      children: "装饰Set类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(517091)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11开始，@Prop支持Set类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，message类型为Set<number>，点击Button改变message的值，视图会随之刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct Child {\n  @Prop message: Set<number> = new Set([0, 1, 2, 3, 4]);\n\n  build() {\n    Column() {\n      ForEach(Array.from(this.message.entries()), (item: [number, number]) => {\n        Text(`${item[0]}`).fontSize(30)\n        Divider()\n      })\n      Button('init set').onClick(() => {\n        this.message = new Set([0, 1, 2, 3, 4]);\n      })\n      Button('set new one').onClick(() => {\n        this.message.add(5);\n      })\n      Button('clear').onClick(() => {\n        this.message.clear();\n      })\n      Button('delete the first one').onClick(() => {\n        this.message.delete(0);\n      })\n    }\n    .width('100%')\n  }\n}\n\n\n@Entry\n@Component\nstruct SetSample {\n  @State message: Set<number> = new Set([0, 1, 2, 3, 4]);\n\n  build() {\n    Row() {\n      Column() {\n        Child({ message: this.message })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰date类型变量",
      children: "装饰Date类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，selectedDate类型为Date，点击Button改变Date的值，视图会随之刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct DateComponent {\n  @Prop selectedDate: Date = new Date('');\n\n  build() {\n    Column() {\n      Button('child update the new date')\n        .margin(10)\n        .onClick(() => {\n          this.selectedDate = new Date('2023-09-09');\n        })\n      Button(`child increase the year by 1`).onClick(() => {\n        this.selectedDate.setFullYear(this.selectedDate.getFullYear() + 1);\n      })\n      DatePicker({\n        start: new Date('1970-1-1'),\n        end: new Date('2100-1-1'),\n        selected: this.selectedDate\n      })\n    }\n  }\n}\n\n@Entry\n@Component\nstruct ParentComponent {\n  @State parentSelectedDate: Date = new Date('2021-08-08');\n\n  build() {\n    Column() {\n      Button('parent update the new date')\n        .margin(10)\n        .onClick(() => {\n          this.parentSelectedDate = new Date('2023-07-07');\n        })\n      Button('parent increase the day by 1')\n        .margin(10)\n        .onClick(() => {\n          this.parentSelectedDate.setDate(this.parentSelectedDate.getDate() + 1);\n        })\n      DatePicker({\n        start: new Date('1970-1-1'),\n        end: new Date('2100-1-1'),\n        selected: this.parentSelectedDate\n      })\n\n      DateComponent({ selectedDate: this.parentSelectedDate })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prop支持联合类型实例",
      children: "Prop支持联合类型实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Prop支持联合类型和undefined和null，在下面的示例中，animal类型为Animals | undefined，点击父组件Zoo中的Button改变animal的属性或者类型，Child中也会对应刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0001;\nconst TAG: string = '[SampleProp]';\n\nclass Animals {\n  public name: string;\n\n  constructor(name: string) {\n    this.name = name;\n  }\n}\n\n@Component\nstruct Child {\n  @Prop animal: Animals | undefined;\n\n  build() {\n    Column() {\n      Text(`Child's animal is  ${this.animal instanceof Animals ? this.animal.name : 'undefined'}`).fontSize(30)\n\n      Button('Child change animals into tigers')\n        .onClick(() => {\n          // 赋值为Animals的实例\n          this.animal = new Animals('Tiger');\n        })\n\n      Button('Child change animal to undefined')\n        .onClick(() => {\n          // 赋值为undefined\n          this.animal = undefined;\n        })\n\n    }.width('100%')\n  }\n}\n\n@Entry\n@Component\nstruct Zoo {\n  @State animal: Animals | undefined = new Animals('lion');\n\n  build() {\n    Column() {\n      Text(`Parents' animals are  ${this.animal instanceof Animals ? this.animal.name : 'undefined'}`).fontSize(30)\n\n      Child({ animal: this.animal })\n\n      Button('Parents change animals into dogs')\n        .onClick(() => {\n          // 判断animal的类型，做属性的更新\n          if (this.animal instanceof Animals) {\n            this.animal.name = 'Dog';\n          } else {\n            hilog.info(DOMAIN, TAG, 'num is undefined, cannot change property');\n          }\n        })\n\n      Button('Parents change animal to undefined')\n        .onClick(() => {\n          // 赋值为undefined\n          this.animal = undefined;\n        })\n    }\n  }\n}\n"
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
193440(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
143002(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797950-ea6ed92c77236ae4350ae302d3eb30d2.png");

},
807655(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957600-771e320e8b66fca92ea470da80c97e8e.gif");

},
802875(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437645-4ec5c0be8f3f669eb53801c0fce22050.gif");

},
966155(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477601-3f7490711d1362fba55c017f4875200e.gif");

},
506195(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
517091(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
836088(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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