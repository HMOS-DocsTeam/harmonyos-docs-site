"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["905322"], {
903761(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_1_arkts_v_1_component_state_management_arkts_link_arkts_link_md_ea3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-state-management-v-1-arkts-v-1-component-state-management-arkts-link-arkts-link-md-ea3.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_1_arkts_v_1_component_state_management_arkts_link_arkts_link_md_ea3_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link/arkts-link","title":"@Link装饰器：父子双向同步","description":"子组件中被@Link装饰的变量与其父组件中对应的数据源建立双向数据绑定。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link/arkts-link.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"@Link装饰器：父子双向同步","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-link","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"@Prop装饰器：父子单向同步","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop/"},"next":{"title":"@Provide装饰器和@Consume装饰器：与后代组件双向同步","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link/arkts-link.md


const frontMatter = {
	title: '@Link装饰器：父子双向同步',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-link',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '@Link装饰器：父子双向同步';

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
  "value": "简单类型和类对象类型的@Link",
  "id": "简单类型和类对象类型的link",
  "level": 3
}, {
  "value": "数组类型的@Link",
  "id": "数组类型的link",
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
  "value": "使用双向同步机制更改本地其他变量",
  "id": "使用双向同步机制更改本地其他变量",
  "level": 3
}, {
  "value": "Link支持联合类型实例",
  "id": "link支持联合类型实例",
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
        id: "link装饰器父子双向同步",
        children: "@Link装饰器：父子双向同步"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "子组件中被@Link装饰的变量与其父组件中对应的数据源建立双向数据绑定。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在阅读@Link文档前，建议先熟悉", (0,jsx_runtime.jsx)(_components.a, {
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
        src: (__webpack_require__(919069)/* ["default"] */.A) + "",
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
      children: "@Link装饰的变量与其父组件中的数据源共享相同的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "装饰器使用规则说明",
      children: "装饰器使用规则说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "@Link变量装饰器"
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
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "双向同步。  父组件状态变量与子组件@Link建立双向同步，当其中一方改变时，另一方也会同步更新。"
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
              href: "#link%E6%94%AF%E6%8C%81%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B%E5%AE%9E%E4%BE%8B",
              children: "Link支持联合类型实例"
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
            children: "被装饰变量的初始值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "禁止本地初始化。"
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
            children: "从父组件初始化和更新"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["必选。  允许父组件中", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
              children: "@State"
            }), "、@Link、", (0,jsx_runtime.jsx)(_components.a, {
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
            }), "装饰变量初始化子组件@Link，并建立双向绑定。  - 从API version 9开始，@Link子组件从父组件初始化@State的语法为Comp({ aLink: this.aState })，同样支持Comp({aLink: $aState})。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "用于初始化子组件"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "允许，可用于初始化常规变量、@State、@Link、@Prop、@Provide。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持组件外访问"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "私有，只能在所属组件内访问。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 初始化规则示意图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(140341)/* ["default"] */.A) + "",
        width: "1741",
        height: "273"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "观察变化和行为表现",
      children: "观察变化和行为表现"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "观察变化",
      children: "观察变化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当装饰的数据类型为boolean、string、number类型时，可以同步观察到数值的变化，示例请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E7%AE%80%E5%8D%95%E7%B1%BB%E5%9E%8B%E5%92%8C%E7%B1%BB%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B%E7%9A%84link",
          children: "简单类型和类对象类型的@Link"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当装饰的数据类型为class或者Object时，可以观察到赋值和属性赋值的变化，即Object.keys(observedObject)返回的所有属性，示例请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E7%AE%80%E5%8D%95%E7%B1%BB%E5%9E%8B%E5%92%8C%E7%B1%BB%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B%E7%9A%84link",
          children: "简单类型和类对象类型的@Link"
        }), "。@Link仅能观察对象本身及其一层属性的变化，无法观察嵌套场景（如嵌套对象、对象数组）内层数据的变化，该场景请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink#%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF",
          children: "@Observed装饰器与@ObjectLink装饰器的使用场景"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当装饰的对象是Array时，可以观察到数组添加、删除、更新数组单元的变化，示例请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%95%B0%E7%BB%84%E7%B1%BB%E5%9E%8B%E7%9A%84link",
          children: "数组类型的@Link"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当装饰的对象是Date时，可以观察到Date的整体赋值，以及通过调用setFullYear, setMonth, setDate, setHours, setMinutes, setSeconds, setMilliseconds, setTime, setUTCFullYear, setUTCMonth, setUTCDate, setUTCHours, setUTCMinutes, setUTCSeconds, setUTCMilliseconds方法更新其属性，示例请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%A3%85%E9%A5%B0date%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
          children: "装饰Date类型变量"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当装饰的变量是Map时，可以观察到Map整体的赋值，以及可通过调用Map的set、clear、delete接口更新Map的值，示例请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%A3%85%E9%A5%B0map%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
          children: "装饰Map类型变量"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当装饰的变量是Set时，可以观察Set整体的赋值，以及通过调用Set的add、clear、delete接口更新其值，示例请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%A3%85%E9%A5%B0set%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
          children: "装饰Set类型变量"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "框架行为",
      children: "框架行为"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Link装饰的变量和所属的自定义组件共享生命周期。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了了解@Link变量的初始化和更新机制，有必要先了解父组件和拥有@Link变量的子组件的关系，以及初始渲染和双向更新的流程（以父组件为@State为例）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "初始渲染：执行父组件的 build() 函数，创建子组件的新实例。初始化过程如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "指定父组件中的@State变量用于初始化子组件的@Link变量。子组件的@Link变量值与其父组件的数据源变量保持双向数据同步。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "父组件的@State状态变量包装类通过构造函数传给子组件，子组件的@Link包装类拿到父组件的@State的状态变量后，将当前@Link包装类实例注册给父组件的@State变量。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@Link的数据源的更新：即父组件中状态变量更新，引起相关子组件的@Link的更新。处理步骤："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通过初始渲染的步骤可知，子组件@Link包装类把当前this指针注册给父组件。父组件@State变量变更后，会遍历更新所有依赖它的系统组件和状态变量（例如：@Link包装类）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通知@Link包装类更新后，子组件中所有依赖@Link状态变量的系统组件都会被通知更新。以此实现父组件对子组件的状态数据同步。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@Link的更新：当子组件中@Link更新后，处理步骤如下（以父组件为@State为例）："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "@Link更新后，调用父组件的@State包装类的set方法，将数值同步回父组件。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "子组件@Link和父组件@State分别遍历依赖的系统组件，更新对应的UI。从而实现子组件@Link与父组件@State的同步。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制条件",
      children: "限制条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["@Link装饰器不建议在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#entry",
            children: "@Entry"
          }), "装饰的自定义组件中使用，否则编译时会抛出警告；若该自定义组件作为页面根节点使用，则会抛出运行时错误。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@Link装饰的变量禁止本地初始化，否则编译期会报错。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 错误写法，编译报错\n@Link count: number = 10;\n\n// 正确写法\n@Link count: number;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@Link装饰的变量的类型要和数据源类型保持一致，否则编译期会报错。同时，数据源必须是状态变量，否则框架会抛出运行时错误。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(624292)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 23开始，添加对@Link数据源错误的校验，运行时错误变为编译期报错。详情参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/ui-debug-optimize/ui-stability/arkts-stability-crash-issues",
            children: "UI相关应用崩溃常见问题"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "【反例】"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class Info {\n  value: string = 'Hello';\n}\n\nclass Cousin {\n  name: string = 'Hello';\n}\n\n@Component\nstruct Child {\n  // 错误写法1：@Link装饰的变量与@State装饰的变量类型不一致\n  @Link test: Cousin;\n  // 错误写法2：数据源非状态变量\n  @Link testStr: string;\n\n  build() {\n    Column() {\n      Text(this.test.name)\n      Text(this.testStr)\n    }\n  }\n}\n\n@Entry\n@Component\nstruct LinkExample {\n  @State info: Info = new Info();\n\n  build() {\n    Column() {\n      Child({\n        // 错误写法1：@Link装饰的变量与@State装饰的变量类型不一致\n        test: this.info,\n        // 错误写法2：数据源非状态变量\n        testStr: this.info.value\n      })\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "【正例】"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class LinkInfo {\n  public value: string = 'Hello';\n}\n\n@Component\nstruct LinkChild {\n  // 在子组件中，使用@Link装饰LinkInfo类型的test变量\n  @Link test: LinkInfo;\n\n  build() {\n    Text(this.test.value)\n  }\n}\n\n@Entry\n@Component\nstruct LinkExample {\n  @State info: LinkInfo = new LinkInfo();\n\n  build() {\n    Column() {\n      // 在父组件中，使用@State装饰的info变量初始化LinkChild组件的test变量\n      LinkChild({test: this.info})\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@Link装饰的变量仅能被状态变量初始化，不能使用常规变量初始化，否则编译期会给出告警，并在运行时崩溃。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "【反例】"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class Info {\n  info: string = 'Hello';\n}\n\n@Component\nstruct Child {\n  @Link msg: string;\n  @Link info: string;\n\n  build() {\n    Text(this.msg + this.info)\n  }\n}\n\n@Entry\n@Component\nstruct LinkExample {\n  @State message: string = 'Hello';\n  @State info: Info = new Info();\n\n  build() {\n    Column() {\n      // 错误写法，常规变量不能初始化@Link\n      Child({msg: 'World', info: this.info.info})\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "【正例】"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "class LinkInfo2 {\n  public info: string = 'Hello';\n}\n\n@Component\nstruct LinkChild2 {\n  @Link msg: string;\n  @Link info: LinkInfo2;\n\n  build() {\n    Text(this.msg + this.info.info)\n  }\n}\n\n@Entry\n@Component\nstruct LinkExample2 {\n  @State message: string = 'Hello';\n  @State info: LinkInfo2 = new LinkInfo2();\n\n  build() {\n    Column() {\n      // 正确写法\n      LinkChild2({msg: this.message, info: this.info})\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@Link不支持装饰Function类型的变量，API version 23之前，框架会抛出运行时错误。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从API version 23开始，添加对@Link装饰Function类型变量的校验，编译期会报错。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "简单类型和类对象类型的link",
      children: "简单类型和类对象类型的@Link"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例中，点击父组件ShufflingContainer中的“Parent View: Set yellowButton”和“Parent View: Set GreenButton”，可以从父组件将变化同步给子组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.点击子组件GreenButton和YellowButton中的Button，子组件会发生相应变化，将变化同步给父组件。因为@Link是双向同步，会将变化同步给@State。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.当点击父组件ShufflingContainer中的Button时，@State会发生变化，并同步给@Link，子组件也会进行对应的刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class GreenButtonState {\n  public width: number = 0;\n\n  constructor(width: number) {\n    this.width = width;\n  }\n}\n\n@Component\nstruct GreenButton {\n  @Link greenButtonState: GreenButtonState;\n\n  build() {\n    Button('Green Button')\n      .width(this.greenButtonState.width)\n      .height(40)\n      .backgroundColor('#64bb5c')\n      .fontColor('#FFFFFF')\n      .onClick(() => {\n        if (this.greenButtonState.width < 700) {\n          // 更新class的属性，变化可以被观察到同步回父组件\n          this.greenButtonState.width += 60;\n        } else {\n          // 更新class，变化可以被观察到同步回父组件\n          this.greenButtonState = new GreenButtonState(180);\n        }\n      })\n  }\n}\n\n@Component\nstruct YellowButton {\n  @Link yellowButtonState: number;\n\n  build() {\n    Button('Yellow Button')\n      .width(this.yellowButtonState)\n      .height(40)\n      .backgroundColor('#f7ce00')\n      .fontColor('#FFFFFF')\n      .onClick(() => {\n        // 子组件的简单类型可以同步回父组件\n        this.yellowButtonState += 40.0;\n      })\n  }\n}\n\n@Entry\n@Component\nstruct ShufflingContainer {\n  @State greenButtonState: GreenButtonState = new GreenButtonState(180);\n  @State yellowButtonProp: number = 180;\n\n  build() {\n    Column() {\n      Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Center }) {\n        // 简单类型从父组件@State向子组件@Link数据同步\n        Button('Parent View: Set yellowButton')\n          .width(this.yellowButtonProp)\n          .height(40)\n          .margin(12)\n          .fontColor('#FFFFFF')\n          .onClick(() => {\n            this.yellowButtonProp = (this.yellowButtonProp < 700) ? this.yellowButtonProp + 40 : 100;\n          })\n        // class类型从父组件@State向子组件@Link数据同步\n        Button('Parent View: Set GreenButton')\n          .width(this.greenButtonState.width)\n          .height(40)\n          .margin(12)\n          .fontColor('#FFFFFF')\n          .onClick(() => {\n            this.greenButtonState.width = (this.greenButtonState.width < 700) ? this.greenButtonState.width + 100 : 100;\n          })\n        // class类型初始化@Link\n        GreenButton({ greenButtonState: this.greenButtonState }).margin(12)\n        // 简单类型初始化@Link\n        YellowButton({ yellowButtonState: this.yellowButtonProp }).margin(12)\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(159615)/* ["default"] */.A) + "",
        width: "348",
        height: "376"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "数组类型的link",
      children: "数组类型的@Link"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct ArrayTypesChild {\n  @Link items: number[];\n\n  build() {\n    Column() {\n      Button(`Button1: push`)\n        .margin(12)\n        .width(312)\n        .height(40)\n        .fontColor('#FFFFFF')\n        .onClick(() => {\n          this.items.push(this.items.length + 1);\n        })\n      Button(`Button2: replace whole item`)\n        .margin(12)\n        .width(312)\n        .height(40)\n        .fontColor('#FFFFFF')\n        .onClick(() => {\n          this.items = [100, 200, 300];\n        })\n    }\n  }\n}\n\n@Entry\n@Component\nstruct ArrayTypes {\n  @State arr: number[] = [1, 2, 3];\n\n  build() {\n    Column() {\n      ArrayTypesChild({ items: $arr })\n        .margin(12)\n      ForEach(this.arr,\n        (item: number) => {\n          Button(`${item}`)\n            .margin(12)\n            .width(312)\n            .height(40)\n            .backgroundColor('#11a2a2a2')\n            .fontColor('#e6000000')\n        },\n        (item: ForEachInterface) => item.toString()\n      )\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(591167)/* ["default"] */.A) + "",
        width: "304",
        height: "356"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["状态管理框架可以观察到数组元素的添加、删除和替换。在该示例中，@State和@Link的类型均为number[]，不支持将@Link定义成number类型（@Link item : number），并用@State数组中的每个数据项在父组件中创建子组件。如需使用这种场景，可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop",
        children: "@Prop"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink",
        children: "@Observed"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰map类型变量",
      children: "装饰Map类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(43388)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11开始，@Link支持Map类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，value类型为Map<number, string>，点击Button改变message的值，视图会随之刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct MapSampleChild {\n  @Link value: Map<number, string>;\n\n  build() {\n    Column() {\n      ForEach(Array.from(this.value.entries()), (item: [number, string]) => {\n        Text(`${item[0]}`).fontSize(30)\n        Text(`${item[1]}`).fontSize(30)\n        Divider()\n      })\n      Button('child init map').onClick(() => {\n        this.value = new Map([[0, 'a'], [1, 'b'], [3, 'c']]);\n      })\n      Button('child set new one').onClick(() => {\n        this.value.set(4, 'd');\n      })\n      Button('child clear').onClick(() => {\n        this.value.clear();\n      })\n      Button('child replace the first one').onClick(() => {\n        this.value.set(0, 'aa');\n      })\n      Button('child delete the first one').onClick(() => {\n        this.value.delete(0);\n      })\n    }\n  }\n}\n\n\n@Entry\n@Component\nstruct MapSample {\n  @State message: Map<number, string> = new Map([[0, 'a'], [1, 'b'], [3, 'c']]);\n\n  build() {\n    Row() {\n      Column() {\n        MapSampleChild({ value: this.message })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰set类型变量",
      children: "装饰Set类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(704307)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11开始，@Link支持Set类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，message类型为Set<number>，点击Button改变message的值，视图会随之刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct SetSampleChild {\n  @Link message: Set<number>;\n\n  build() {\n    Column() {\n      ForEach(Array.from(this.message.entries()), (item: [number, number]) => {\n        Text(`${item[0]}`).fontSize(30)\n        Divider()\n      })\n      Button('init set').onClick(() => {\n        this.message = new Set([0, 1, 2, 3, 4]);\n      })\n      Button('set new one').onClick(() => {\n        this.message.add(5);\n      })\n      Button('clear').onClick(() => {\n        this.message.clear();\n      })\n      Button('delete the first one').onClick(() => {\n        this.message.delete(0);\n      })\n    }\n    .width('100%')\n  }\n}\n\n\n@Entry\n@Component\nstruct SetSample {\n  @State message: Set<number> = new Set([0, 1, 2, 3, 4]);\n\n  build() {\n    Row() {\n      Column() {\n        SetSampleChild({ message: this.message })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰date类型变量",
      children: "装饰Date类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，selectedDate类型为Date，点击Button改变selectedDate的值，视图会随之刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct DateComponent {\n  @Link selectedDate: Date;\n\n  build() {\n    Column() {\n      Button(`child increase the year by 1`)\n        .onClick(() => {\n          this.selectedDate.setFullYear(this.selectedDate.getFullYear() + 1);\n        })\n      Button('child update the new date')\n        .margin(10)\n        .onClick(() => {\n          this.selectedDate = new Date('2023-09-09');\n        })\n      DatePicker({\n        start: new Date('1970-1-1'),\n        end: new Date('2100-1-1'),\n        selected: this.selectedDate\n      })\n    }\n  }\n}\n\n@Entry\n@Component\nstruct ParentComponent {\n  @State parentSelectedDate: Date = new Date('2021-08-08');\n\n  build() {\n    Column() {\n      Button('parent increase the month by 1')\n        .margin(10)\n        .onClick(() => {\n          this.parentSelectedDate.setMonth(this.parentSelectedDate.getMonth() + 1);\n        })\n      Button('parent update the new date')\n        .margin(10)\n        .onClick(() => {\n          this.parentSelectedDate = new Date('2023-07-07');\n        })\n      DatePicker({\n        start: new Date('1970-1-1'),\n        end: new Date('2100-1-1'),\n        selected: this.parentSelectedDate\n      })\n\n      DateComponent({ selectedDate:this.parentSelectedDate })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用双向同步机制更改本地其他变量",
      children: "使用双向同步机制更改本地其他变量"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-watch",
        children: "@Watch"
      }), "可以在双向同步时更改本地变量。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下示例中，在@Link的@Watch里面修改了一个@State装饰的变量memberMessage，实现父子组件间的变量同步。但是@State装饰的变量memberMessage在本地修改不会影响到父组件中的变量改变。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ChangeVariables {\n  @State sourceNumber: number = 0;\n\n  build() {\n    Column() {\n      Text(`sourceNumber of the parent component:` + this.sourceNumber)\n      ChangeVariablesChild({ sourceNumber: this.sourceNumber })\n      Button('Change sourceNumber in Parent Component')\n        .onClick(() => {\n          this.sourceNumber++;\n        })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n\n@Component\nstruct ChangeVariablesChild {\n  @State memberMessage: string = 'Hello World';\n  @Link @Watch('onSourceChange') sourceNumber: number;\n\n  onSourceChange() {\n    this.memberMessage = this.sourceNumber.toString();\n  }\n\n  build() {\n    Column() {\n      Text(this.memberMessage)\n      Text(`sourceNumber of the child component:` + this.sourceNumber.toString())\n      Button('Change memberMessage in Child Component')\n        .onClick(() => {\n          this.memberMessage = 'Hello memberMessage';\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "link支持联合类型实例",
      children: "Link支持联合类型实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Link支持联合类型、undefined和null。在以下示例中，name类型为string | undefined。点击父组件UnionTypes中的按钮可以改变name的属性或类型，UnionChild组件也会相应刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct UnionChild {\n  @Link name: string | undefined;\n\n  build() {\n    Column() {\n\n      Button('Child change name to Bob')\n        .onClick(() => {\n          this.name = 'Bob';\n        })\n\n      Button('Child change name to undefined')\n        .onClick(() => {\n          this.name = undefined;\n        })\n\n    }.width('100%')\n  }\n}\n\n@Entry\n@Component\nstruct UnionTypes {\n  @State name: string | undefined = 'mary';\n\n  build() {\n    Column() {\n      Text(`The name is  ${this.name}`).fontSize(30)\n\n      UnionChild({ name: this.name })\n\n      Button('Parents change name to Peter')\n        .onClick(() => {\n          this.name = 'Peter';\n        })\n\n      Button('Parents change name to undefined')\n        .onClick(() => {\n          this.name = undefined;\n        })\n    }\n  }\n}\n"
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
591167(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957602-d2f66227089d3a63c5bc2564d31fba1a.gif");

},
704307(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
159615(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437647-539429dc356c2ed05230b4e51dcea2ac.gif");

},
624292(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
919069(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
43388(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
140341(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797952-d6c3c3d013b7a152ee1098a579fd5b8b.png");

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