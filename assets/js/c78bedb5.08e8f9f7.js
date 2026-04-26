"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["260716"], {
992556(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_1_arkts_v_1_application_state_management_arkts_appstorage_arkts_appstorage_md_c78_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-state-management-v-1-arkts-v-1-application-state-management-arkts-appstorage-arkts-appstorage-md-c78.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_1_arkts_v_1_application_state_management_arkts_appstorage_arkts_appstorage_md_c78_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage/arkts-appstorage","title":"AppStorage：应用全局的UI状态存储","description":"在阅读本文档前，建议提前阅读：状态管理概述，从而对状态管理框架中AppStorage的定位有一个宏观了解。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage/arkts-appstorage.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"AppStorage：应用全局的UI状态存储","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-appstorage","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"LocalStorage：页面级UI状态存储","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage/"},"next":{"title":"PersistentStorage：持久化存储UI状态","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-persiststorage/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage/arkts-appstorage.md


const frontMatter = {
	title: 'AppStorage：应用全局的UI状态存储',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-appstorage',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'AppStorage：应用全局的UI状态存储';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "@StorageProp",
  "id": "storageprop",
  "level": 2
}, {
  "value": "装饰器使用规则说明",
  "id": "装饰器使用规则说明",
  "level": 3
}, {
  "value": "变量的传递/访问规则说明",
  "id": "变量的传递访问规则说明",
  "level": 3
}, {
  "value": "观察变化和行为表现",
  "id": "观察变化和行为表现",
  "level": 3
}, {
  "value": "@StorageLink",
  "id": "storagelink",
  "level": 2
}, {
  "value": "装饰器使用规则说明",
  "id": "装饰器使用规则说明-1",
  "level": 3
}, {
  "value": "变量的传递/访问规则说明",
  "id": "变量的传递访问规则说明-1",
  "level": 3
}, {
  "value": "观察变化和行为表现",
  "id": "观察变化和行为表现-1",
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
  "value": "从应用逻辑使用AppStorage和LocalStorage",
  "id": "从应用逻辑使用appstorage和localstorage",
  "level": 3
}, {
  "value": "从UI内部使用AppStorage",
  "id": "从ui内部使用appstorage",
  "level": 3
}, {
  "value": "AppStorage支持联合类型",
  "id": "appstorage支持联合类型",
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
  "value": "AppStorage在多页面中共享使用",
  "id": "appstorage在多页面中共享使用",
  "level": 3
}, {
  "value": "AppStorage使用建议",
  "id": "appstorage使用建议",
  "level": 2
}, {
  "value": "不建议借助@StorageLink的双向同步机制实现事件通知",
  "id": "不建议借助storagelink的双向同步机制实现事件通知",
  "level": 3
}, {
  "value": "@StorageProp和AppStorage接口配合使用时，需要注意更新规则",
  "id": "storageprop和appstorage接口配合使用时需要注意更新规则",
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
        id: "appstorage应用全局的ui状态存储",
        children: "AppStorage：应用全局的UI状态存储"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在阅读本文档前，建议提前阅读：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview",
        children: "状态管理概述"
      }), "，从而对状态管理框架中AppStorage的定位有一个宏观了解。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AppStorage是与应用进程绑定的全局UI状态存储中心，由UI框架在应用启动时创建，将UI状态数据存储于运行内存，实现应用级全局状态共享。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["作为应用的“中枢”，AppStorage是", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-persiststorage",
        children: "持久化数据PersistentStorage"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-environment",
        children: "环境变量Environment"
      }), "与UI交互的中转桥梁。其核心价值在于为开发者提供跨ability的大范围UI状态数据共享能力。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AppStorage提供了API接口，允许开发者在自定义组件外手动触发AppStorage对应属性的增、删、改、查操作。建议配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-state-management/ts-state-management#appstorage",
        children: "AppStorage API文档"
      }), "阅读。最佳实践请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-status-management",
        children: "状态管理最佳实践"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(282865)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["多组件间状态共享和同步、状态管理和UI解耦，可以参考解决方案", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-global-state-management-state-store",
        children: "基于StateStore的全局状态管理开发实践"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["不涉及UI组件同步的数据处理工作，建议", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkdata/app-data-persistence/data-persistence-by-preferences",
        children: "通过用户首选项实现数据持久化"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AppStorage是在应用启动时创建的单例，用于提供应用状态数据的中心存储。这些状态数据在应用级别可访问。AppStorage在应用运行过程中保留其属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AppStorage中的属性通过唯一的字符串类型属性名（key）访问，支持与UI组件同步，并可在应用业务逻辑中被访问。其支持应用的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/thread-model-stage",
        children: "主线程"
      }), "内多个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "实例间的UI状态数据共享。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AppStorage中的属性可以被双向同步，并具有不同的功能，比如数据持久化（详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-persiststorage",
        children: "PersistentStorage"
      }), "）。这些UI状态是通过业务逻辑实现，与UI解耦，如果希望这些UI状态在UI中使用，需要用到", (0,jsx_runtime.jsx)(_components.a, {
        href: "#storageprop",
        children: "@StorageProp"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "#storagelink",
        children: "@StorageLink"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "storageprop",
      children: "@StorageProp"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@StorageProp与AppStorage中对应的属性建立单向数据同步。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(357950)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11开始，该装饰器支持在元服务中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰器使用规则说明",
      children: "装饰器使用规则说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "@StorageProp变量装饰器"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "装饰器参数"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["常量字符串，必填（字符串需要有引号）。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  使用null和undefined作为key时，会隐式转换为对应的字符串，不建议该用法。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "允许装饰的变量类型"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Object、class、string、number、boolean、enum类型，以及这些类型的数组。  API Version 12及以上支持Map、Set、Date、undefined和null类型以及这些类型的联合类型，示例见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#appstorage%E6%94%AF%E6%8C%81%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B",
              children: "AppStorage支持联合类型"
            }), "。  嵌套类型的场景请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%A7%82%E5%AF%9F%E5%8F%98%E5%8C%96%E5%92%8C%E8%A1%8C%E4%B8%BA%E8%A1%A8%E7%8E%B0",
              children: "观察变化和行为表现"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  变量类型必须被指定，建议和AppStorage中对应属性类型相同，否则会发生类型隐式转换，从而导致应用行为异常。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "不允许装饰的变量类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持装饰Function类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "同步类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单向同步：从AppStorage的对应属性到组件的状态变量。  组件本地的修改是允许的，但是AppStorage中给定的属性一旦发生变化，将覆盖本地的修改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "被装饰变量的初始值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须本地初始化，如果AppStorage实例中不存在属性，则用该初始值初始化该属性，并存入AppStorage中。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
            children: "从父节点初始化和更新"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "禁止从父节点初始化和更新@StorageProp。仅支持使用AppStorage中对应key的属性进行初始化，如果不存在对应key，则使用本地默认值进行初始化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "初始化子节点"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["支持，可用于初始化", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state",
              children: "@State"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link",
              children: "@Link"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop",
              children: "@Prop"
            }), "、", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume",
              children: "@Provide"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持组件外访问"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " @StorageProp初始化规则图示"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(889070)/* ["default"] */.A) + "",
        width: "662",
        height: "596"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "观察变化和行为表现",
      children: "观察变化和行为表现"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "观察变化"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当装饰的类型为boolean、string、number时，可以观察到数值的变化。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当装饰的数据类型为class或者Object时，可以观察到对象整体赋值和属性变化（详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E4%BB%8Eui%E5%86%85%E9%83%A8%E4%BD%BF%E7%94%A8appstorage",
          children: "从ui内部使用appstorage"
        }), "）。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当装饰的对象是数组时，可以观察到数组添加、删除、更新数组单元的变化。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当装饰的对象是Date时，可以观察到Date整体的赋值，以及通过调用Date的接口setFullYear、setMonth、setDate、setHours、setMinutes、setSeconds、setMilliseconds、setTime、setUTCFullYear、setUTCMonth、setUTCDate、setUTCHours、setUTCMinutes、setUTCSeconds、setUTCMilliseconds更新Date的属性。详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%A3%85%E9%A5%B0date%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
          children: "装饰Date类型变量"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当装饰的变量是Map时，可以观察到Map整体的赋值，以及通过调用Map的接口set、clear、delete更新Map的值。详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%A3%85%E9%A5%B0map%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
          children: "装饰Map类型变量"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当装饰的变量是Set时，可以观察到Set整体的赋值，以及通过调用Set的接口add、clear、delete更新Set的值。详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%A3%85%E9%A5%B0set%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
          children: "装饰Set类型变量"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "框架行为"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@StorageProp(key)装饰的数值发生变化，不会同步写回AppStorage对应的属性；变化会触发自定义组件重新渲染，并且该变动仅作用于当前组件的私有成员变量，其他绑定该key的数据不会同步改变。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当AppStorage中对应key的属性发生改变时，所有@StorageProp(key)装饰的变量都会同步更新，本地的修改将被覆盖。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "storagelink",
      children: "@StorageLink"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@StorageLink与AppStorage中对应的属性建立双向数据同步。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(204834)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11开始，该装饰器支持在元服务中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰器使用规则说明-1",
      children: "装饰器使用规则说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "@StorageLink变量装饰器"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "装饰器参数"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["key：常量字符串，必填（字符串需要有引号）。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "注意："
              })
            }), "  使用null和undefined作为key时，会隐式转换为对应的字符串，不建议该用法。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "允许装饰的变量类型"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Object、class、string、number、boolean、enum类型，以及这些类型的数组。  API Version 12及以上支持Map、Set、Date、undefined和null类型以及这些类型的联合类型，示例见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#appstorage%E6%94%AF%E6%8C%81%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B",
              children: "AppStorage支持联合类型"
            }), "。  嵌套类型的场景请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%A7%82%E5%AF%9F%E5%8F%98%E5%8C%96%E5%92%8C%E8%A1%8C%E4%B8%BA%E8%A1%A8%E7%8E%B0-1",
              children: "观察变化和行为表现"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "注意："
              })
            }), "  变量类型必须被指定，建议和AppStorage中对应属性类型相同，否则会发生类型隐式转换，从而导致应用行为异常。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "不允许装饰的变量类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持装饰Function类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "同步类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "双向同步：从AppStorage的对应属性到自定义组件，从自定义组件到AppStorage对应属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "被装饰变量的初始值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须本地初始化，如果AppStorage实例中不存在属性，则用该初始值初始化该属性，并存入AppStorage中。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "变量的传递访问规则说明-1",
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
            children: "从父节点初始化和更新"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "禁止。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "初始化子节点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持，可用于初始化常规变量、@State、@Link、@Prop、@Provide。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持组件外访问"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " @StorageLink初始化规则图示"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(385721)/* ["default"] */.A) + "",
        width: "723",
        height: "615"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "观察变化和行为表现-1",
      children: "观察变化和行为表现"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "观察变化"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "装饰的数据类型为boolean、string、number时，可以观察到数值变化。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["装饰的数据类型为class或Object时，可以观察到对象整体赋值和属性变化。（详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E4%BB%8Eui%E5%86%85%E9%83%A8%E4%BD%BF%E7%94%A8appstorage",
          children: "从ui内部使用appstorage"
        }), "）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当装饰的对象是数组时，可以观察到数组添加、删除、更新数组单元的变化。详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%A3%85%E9%A5%B0array%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
          children: "装饰Array类型变量"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当装饰的对象是Date时，可以观察到Date整体的赋值，以及通过调用Date的接口setFullYear, setMonth, setDate, setHours, setMinutes, setSeconds, setMilliseconds, setTime, setUTCFullYear, setUTCMonth, setUTCDate, setUTCHours, setUTCMinutes, setUTCSeconds, setUTCMilliseconds 更新Date的属性。详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%A3%85%E9%A5%B0date%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
          children: "装饰Date类型变量"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当装饰的变量是Map时，可以观察到Map整体的赋值，以及通过调用Map的接口set、clear、delete更新Map的值。详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%A3%85%E9%A5%B0map%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
          children: "装饰Map类型变量"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当装饰的变量是Set时，可以观察到Set的整体赋值，以及通过调用Set的接口add、clear、delete更新Set的值。详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%A3%85%E9%A5%B0set%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
          children: "装饰Set类型变量"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "框架行为"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当@StorageLink(key)装饰的数值发生变化时，修改将被同步回AppStorage对应key的属性中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AppStorage中key对应的数据一旦改变，其绑定的所有的数据（包括双向@StorageLink和单向@StorageProp）都将被同步修改。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@StorageLink(key)装饰的数据是状态变量，其变化不仅会同步到AppStorage，还会触发自定义组件的重新渲染。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制条件",
      children: "限制条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@StorageProp/@StorageLink的参数必须为string类型，否则编译期会报错。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "AppStorage.setOrCreate('propA', 47);\n\n// 错误写法，编译报错\n@StorageProp() storageProp: number = 1;\n@StorageLink() storageLink: number = 2;\n \n// 正确写法\n@StorageProp('propA') storageProp: number = 1;\n@StorageLink('propA') storageLink: number = 2;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@StorageProp与@StorageLink不支持装饰Function类型的变量，API version 23之前，框架会抛出运行时错误。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从API version 23开始，添加对@StorageProp与@StorageLink装饰Function类型变量的校验，编译期会报错。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["AppStorage与", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-persiststorage",
            children: "PersistentStorage"
          }), "以及", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-environment",
            children: "Environment"
          }), "配合使用时，需要注意以下几点："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["a. 在AppStorage中创建属性后，调用PersistentStorage.", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-state-management/ts-state-management#persistprop10",
            children: "persistProp"
          }), "接口时，会使用AppStorage中已存在的值，并覆盖PersistentStorage中的同名属性。因此，建议使用相反的调用顺序。反例可见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-persiststorage#%E5%9C%A8persistentstorage%E4%B9%8B%E5%89%8D%E8%AE%BF%E9%97%AEappstorage%E4%B8%AD%E7%9A%84%E5%B1%9E%E6%80%A7",
            children: "在PersistentStorage之前访问AppStorage中的属性"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["b. 如果在AppStorage中已创建属性，再调用Environment.", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-state-management/ts-state-management#envprop10",
            children: "envProp"
          }), "创建同名属性，会调用失败。因为AppStorage已有同名属性，Environment环境变量不会再写入AppStorage中，所以建议不要在AppStorage中使用Environment预置环境变量名。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "AppStorage.setOrCreate('languageCode', 'en');\n// result结果为false\nlet result = Environment.envProp('languageCode','en');\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["状态装饰器装饰的变量，改变会引起UI的渲染更新。如果改变的变量仅用于消息传递，不用于UI更新，推荐使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/system-basicfun-api/basic-services-api/basic-services-arkts/process-thread-communi-arkts/js-apis-emitter/js-apis-emitter",
            children: "emitter"
          }), "方式。具体示例可见", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E4%B8%8D%E5%BB%BA%E8%AE%AE%E5%80%9F%E5%8A%A9storagelink%E7%9A%84%E5%8F%8C%E5%90%91%E5%90%8C%E6%AD%A5%E6%9C%BA%E5%88%B6%E5%AE%9E%E7%8E%B0%E4%BA%8B%E4%BB%B6%E9%80%9A%E7%9F%A5",
            children: "不建议借助@StorageLink的双向同步机制实现事件通知"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "AppStorage同一进程内共享，UIAbility和UIExtensionAbility是两个进程，所以在UIExtensionAbility中不共享主进程的AppStorage。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "从应用逻辑使用appstorage和localstorage",
      children: "从应用逻辑使用AppStorage和LocalStorage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["AppStorage是单例，其所有API均为静态方法，使用方法类似于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage",
        children: "LocalStorage"
      }), "中对应的非静态方法。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AppStorage.setOrCreate('propA', 47);\n\nlet storage: LocalStorage = new LocalStorage();\nstorage.setOrCreate('propA',17);\nlet propA: number | undefined = AppStorage.get('propA'); // propA in AppStorage == 47, propA in LocalStorage == 17\nlet link1: SubscribedAbstractProperty<number> = AppStorage.link('propA'); // link1.get() == 47\nlet link2: SubscribedAbstractProperty<number> = AppStorage.link('propA'); // link2.get() == 47\nlet prop: SubscribedAbstractProperty<number> = AppStorage.prop('propA'); // prop.get() == 47\n\nlink1.set(48); // 双向同步: link1.get() == link2.get() == prop.get() == 48\nprop.set(1); // 单向同步: prop.get() == 1; 但 link1.get() == link2.get() == 48\nlink1.set(49); // 双向同步: link1.get() == link2.get() == prop.get() == 49\n\nstorage.get<number>('propA') // == 17\nstorage.set('propA', 101);\nstorage.get<number>('propA') // == 101\n\nAppStorage.get<number>('propA') // == 49\nlink1.get() // == 49\nlink2.get() // == 49\nprop.get() // == 49\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "从ui内部使用appstorage",
      children: "从UI内部使用AppStorage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@StorageLink与AppStorage配合使用，通过AppStorage中的属性创建双向数据同步。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@StorageProp与AppStorage配合使用，通过AppStorage中的属性创建单向数据同步。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0001;\nconst TAG: string = '[SampleAppStorage]';\n\nclass Data {\n  public code: number;\n\n  constructor(code: number) {\n    this.code = code;\n  }\n}\n\nAppStorage.setOrCreate('propA', 47);\nAppStorage.setOrCreate('propB', new Data(50));\nlet storage = new LocalStorage();\nstorage.setOrCreate('linkA', 48);\nstorage.setOrCreate('linkB', new Data(100));\n\n@Entry(storage)\n@Component\nstruct TestStorageProp {\n  @StorageLink('propA') storageLink: number = 1;\n  @StorageProp('propA') storageProp: number = 1;\n  @StorageLink('propB') storageLinkObject: Data = new Data(1);\n  @StorageProp('propB') storagePropObject: Data = new Data(1);\n\n  build() {\n    Column({ space: 20 }) {\n      // @StorageLink与AppStorage建立双向联系，更改数据会同步回AppStorage中key为'propA'的值\n      Text(`storageLink ${this.storageLink}`)\n        .onClick(() => {\n          this.storageLink += 1;\n        })\n\n      // @StorageProp与AppStorage建立单向联系，更改数据不会同步回AppStorage中key为'propA'的值\n      // 但能被AppStorage的set/setorCreate更新值\n      Text(`storageProp ${this.storageProp}`)\n        .onClick(() => {\n          this.storageProp += 1;\n        })\n\n      // AppStorage的API虽然能获取值，但是不具有刷新UI的能力，日志能看到数值更改\n      // 依赖@StorageLink/@StorageProp才能建立起与自定义组件的联系，刷新UI\n      Text(`change by AppStorage: ${AppStorage.get<number>('propA')}`)\n        .onClick(() => {\n          hilog.info(DOMAIN, TAG, `Appstorage.get: ${AppStorage.get<number>('propA')}`);\n          AppStorage.set<number>('propA', 100);\n        })\n\n      Text(`storageLinkObject ${this.storageLinkObject.code}`)\n        .onClick(() => {\n          this.storageLinkObject.code += 1;\n        })\n\n      Text(`storagePropObject ${this.storagePropObject.code}`)\n        .onClick(() => {\n          this.storagePropObject.code += 1;\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "appstorage支持联合类型",
      children: "AppStorage支持联合类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，变量linkA的类型为number | null，变量linkB的类型为number | undefined。Text组件初始化分别显示为null和undefined，点击切换为数字，再次点击切换回null和undefined。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct StorageLinkComponent {\n  @StorageLink('linkA') linkA: number | null = null;\n  @StorageLink('linkB') linkB: number | undefined = undefined;\n\n  build() {\n    Column() {\n      Text('@StorageLink接口初始化，@StorageLink取值')\n      Text(`${this.linkA}`).fontSize(20).onClick(() => {\n        this.linkA ? this.linkA = null : this.linkA = 1;\n      })\n      Text(`${this.linkB}`).fontSize(20).onClick(() => {\n        this.linkB ? this.linkB = undefined : this.linkB = 1;\n      })\n    }\n    .borderWidth(3).borderColor(Color.Red)\n  }\n}\n\n@Component\nstruct StoragePropComponent {\n  @StorageProp('propA') propA: number | null = null;\n  @StorageProp('propB') propB: number | undefined = undefined;\n\n  build() {\n    Column() {\n      Text('@StorageProp接口初始化，@StorageProp取值')\n      Text(`${this.propA}`).fontSize(20).onClick(() => {\n        this.propA ? this.propA = null : this.propA = 1;\n      })\n      Text(`${this.propB}`).fontSize(20).onClick(() => {\n        this.propB ? this.propB = undefined : this.propB = 1;\n      })\n    }\n    .borderWidth(3).borderColor(Color.Blue)\n  }\n}\n\n@Entry\n@Component\nstruct TestPageStorageLink {\n  build() {\n    Row() {\n      Column() {\n        StorageLinkComponent()\n        StoragePropComponent()\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰array类型变量",
      children: "装饰Array类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，@StorageLink装饰的message类型为number[]，点击Button改变message的值，视图会随之刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ArraySample {\n  @StorageLink('array') message: number[] = [0, 1, 2, 3];\n\n  build() {\n    Column() {\n      ForEach(this.message, (item: number) => {\n        Text(`${item}`)\n          .fontSize(20)\n          .margin(10)\n      })\n      // 新增数组元素，触发UI刷新\n      Button('Push element')\n        .onClick(() => {\n          this.message.push(4);\n        })\n        .width(300)\n        .margin(10)\n      // 删除数组元素，触发UI刷新\n      Button('Pop element')\n        .onClick(() => {\n          this.message.pop();\n        })\n        .width(300)\n        .margin(10)\n      // 对数组整体重新赋值，触发UI刷新\n      Button('Reset array')\n        .onClick(() => {\n          this.message = [9, 8, 7, 6];\n        })\n        .width(300)\n        .margin(10)\n      // 更新数组元素，触发UI刷新\n      Button('Modify element[0]')\n        .onClick(() => {\n          this.message[0] = 10;\n        })\n        .width(300)\n        .margin(10)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰date类型变量",
      children: "装饰Date类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(816951)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始，AppStorage支持Date类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，@StorageLink装饰的selectedDate类型为Date。点击Button改变selectedDate的值，视图会随之刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct DateSample {\n  @StorageLink('date') selectedDate: Date = new Date('2021-08-08');\n\n  build() {\n    Column() {\n      Button('set selectedDate to 2023-07-08')\n        .margin(10)\n        .onClick(() => {\n          AppStorage.setOrCreate('date', new Date('2023-07-08'));\n        })\n      Button('increase the year by 1')\n        .margin(10)\n        .onClick(() => {\n          this.selectedDate.setFullYear(this.selectedDate.getFullYear() + 1);\n        })\n      Button('increase the month by 1')\n        .margin(10)\n        .onClick(() => {\n          this.selectedDate.setMonth(this.selectedDate.getMonth() + 1);\n        })\n      Button('increase the day by 1')\n        .margin(10)\n        .onClick(() => {\n          this.selectedDate.setDate(this.selectedDate.getDate() + 1);\n        })\n      DatePicker({\n        start: new Date('1970-1-1'),\n        end: new Date('2100-1-1'),\n        selected: $$this.selectedDate\n      })\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰map类型变量",
      children: "装饰Map类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(97141)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始，AppStorage支持Map类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，@StorageLink装饰的message类型为Map<number, string>，点击Button改变message的值，视图会随之刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct MapSample {\n  @StorageLink('map') message: Map<number, string> = new Map([[0, 'a'], [1, 'b'], [3, 'c']]);\n\n  build() {\n    Row() {\n      Column() {\n        ForEach(Array.from(this.message.entries()), (item: [number, string]) => {\n          Text(`${item[0]}`).fontSize(30)\n          Text(`${item[1]}`).fontSize(30)\n          Divider()\n        })\n        Button('init map').onClick(() => {\n          this.message = new Map([[0, 'a'], [1, 'b'], [3, 'c']]);\n        })\n        Button('set new one').onClick(() => {\n          this.message.set(4, 'd');\n        })\n        Button('clear').onClick(() => {\n          this.message.clear();\n        })\n        Button('replace the existing one').onClick(() => {\n          this.message.set(0, 'aa');\n        })\n        Button('delete the existing one').onClick(() => {\n          AppStorage.get<Map<number, string>>('map')?.delete(0);\n        })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰set类型变量",
      children: "装饰Set类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(24169)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始，AppStorage支持Set类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，@StorageLink装饰的memberSet类型为Set<number>，点击Button改变memberSet的值，视图会随之刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct SetSample {\n  @StorageLink('set') memberSet: Set<number> = new Set([0, 1, 2, 3, 4]);\n\n  build() {\n    Row() {\n      Column() {\n        ForEach(Array.from(this.memberSet.entries()), (item: [number, number]) => {\n          Text(`${item[0]}`)\n            .fontSize(30)\n          Divider()\n        })\n        Button('init set')\n          .onClick(() => {\n            this.memberSet = new Set([0, 1, 2, 3, 4]);\n          })\n        Button('set new one')\n          .onClick(() => {\n            AppStorage.get<Set<number>>('set')?.add(5);\n          })\n        Button('clear')\n          .onClick(() => {\n            this.memberSet.clear();\n          })\n        Button('delete the first one')\n          .onClick(() => {\n            this.memberSet.delete(0);\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "appstorage在多页面中共享使用",
      children: "AppStorage在多页面中共享使用"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面示例中，Index和Page页面通过同一个全局AppStorage对象共享linkA数据。在一处修改其值，另一处也能获取到更新后的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AppStorage.setOrCreate('linkA', 47)\nAppStorage.setOrCreate('propB', 48)\n\n@Entry\n@Component\nstruct Index {\n  @StorageLink('linkA') linkA: number = 1; // 与AppStorage进行双向数据同步\n  @StorageProp('propB') propB: number = 1; // 与AppStorage进行单向数据同步\n  pageStack: NavPathStack = new NavPathStack();\n\n  build() {\n    Navigation(this.pageStack) {\n      Row() {\n        Column({ space: 5 }) {\n          Text(`${this.linkA}`)\n            .fontSize(50)\n            .fontWeight(FontWeight.Bold)\n          Text(`${this.propB}`)\n            .fontSize(50)\n            .fontWeight(FontWeight.Bold)\n          Button('Change linkA')\n            .onClick(() => {\n              // 刷新UI，修改将会被同步回AppStorage\n              this.linkA++;\n            })\n          Button('Change propB')\n            .onClick(() => {\n              // 刷新UI，修改不会被同步回AppStorage\n              this.propB++;\n            })\n          Button('To Page')\n            .onClick(() => {\n              this.pageStack.pushPathByName('Page', null);\n            })\n        }\n        .width('100%')\n      }\n      .height('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\nexport function PageBuilder() {\n  Page()\n}\n\n// 应用全局共享一个AppStorage\n@Component\nstruct Page {\n  @StorageLink('linkA') linkA: number = 2; // 与AppStorage进行双向数据同步\n  @StorageProp('propB') propB: number = 2; // 与AppStorage进行单向数据同步\n  pageStack: NavPathStack = new NavPathStack();\n\n  build() {\n    NavDestination() {\n      Row() {\n        Column({ space: 5 }) {\n          Text(`${this.linkA}`)\n            .fontSize(50)\n            .fontWeight(FontWeight.Bold)\n          Text(`${this.propB}`)\n            .fontSize(50)\n            .fontWeight(FontWeight.Bold)\n          Button('Change linkA')\n            .onClick(() => {\n              // 刷新UI，修改将会被同步回AppStorage\n              this.linkA++;\n            })\n          Button('Change propB')\n            .onClick(() => {\n              // 刷新UI，修改不会被同步回AppStorage\n              this.propB++;\n            })\n          Button('Back Index')\n            .onClick(() => {\n              this.pageStack.pop();\n            })\n        }\n        .width('100%')\n      }\n    }\n    .onReady((context: NavDestinationContext) => {\n      this.pageStack = context.pathStack;\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Navigation时，需要手动添加系统路由表文件src/main/resources/base/profile/router_map.json，并在module.json5中添加:\"routerMap\": \"$profile:router_map\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"routerMap\": [\n    {\n      \"name\": \"Page\",\n      \"pageSourceFile\": \"src/main/ets/pages/Page.ets\",\n      \"buildFunction\": \"PageBuilder\",\n      \"data\": {\n        \"description\": \"AppStorage example\"\n      }\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "appstorage使用建议",
      children: "AppStorage使用建议"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "不建议借助storagelink的双向同步机制实现事件通知",
      children: "不建议借助@StorageLink的双向同步机制实现事件通知"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "不建议使用@StorageLink和AppStorage的双向同步机制来实现事件通知。AppStorage中的变量可能绑定在多个页面的组件中，但事件通知不一定需要通知到所有这些组件。此外，当这些@StorageLink装饰的变量在UI中使用时，会触发UI刷新，造成不必要的性能影响。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码中，TapImage中的点击事件会触发AppStorage中tapIndex对应属性的改变。由于@StorageLink是双向同步的，修改会同步回AppStorage中，因此所有绑定AppStorage的tapIndex自定义组件都能感知到tapIndex的变化。使用@Watch监听到tapIndex的变化后，修改状态变量tapColor，从而触发UI刷新（此处tapIndex未直接绑定在UI上，因此tapIndex的变化不会直接触发UI刷新）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用该机制实现事件通知时，应确保AppStorage中的变量不直接被绑定到UI上，同时控制", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-watch",
        children: "@Watch"
      }), "函数的复杂度。如果@Watch函数执行时间过长，会影响UI刷新效率。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0001;\nconst TAG: string = '[SampleAppStorage]';\n\nclass ViewData {\n  public title: string;\n  public uri: Resource;\n  public color: Color = Color.Black;\n\n  constructor(title: string, uri: Resource) {\n    this.title = title;\n    this.uri = uri;\n  }\n}\n\n@Entry\n@Component\nstruct Gallery {\n  // 请将$r('app.media.startIcon')替换为实际资源文件\n  dataList: Array<ViewData> =\n    [new ViewData('flower', $r('app.media.startIcon')), new ViewData('OMG', $r('app.media.startIcon')),\n      new ViewData('OMG', $r('app.media.startIcon'))];\n  scroller: Scroller = new Scroller();\n\n  build() {\n    Column() {\n      Grid(this.scroller) {\n        ForEach(this.dataList, (item: ViewData, index?: number) => {\n          GridItem() {\n            TapImage({\n              uri: item.uri,\n              index: index\n            })\n          }.aspectRatio(1)\n\n        }, (item: ViewData, index?: number) => {\n          return JSON.stringify(item) + index;\n        })\n      }.columnsTemplate('1fr 1fr')\n    }\n\n  }\n}\n\n@Component\nexport struct TapImage {\n  @StorageLink('tapIndex') @Watch('onTapIndexChange') tapIndex: number = -1;\n  @State tapColor: Color = Color.Black;\n  index: number = 0;\n  uri: Resource = {\n    id: 0,\n    type: 0,\n    moduleName: '',\n    bundleName: ''\n  };\n\n  // 判断是否被选中\n  onTapIndexChange() {\n    if (this.tapIndex >= 0 && this.index === this.tapIndex) {\n      hilog.info(DOMAIN, TAG, `tapindex: ${this.tapIndex}, index: ${this.index}, red`);\n      this.tapColor = Color.Red;\n    } else {\n      hilog.info(DOMAIN, TAG, `tapindex: ${this.tapIndex}, index: ${this.index}, black`);\n      this.tapColor = Color.Black;\n    }\n  }\n\n  build() {\n    Column() {\n      Image(this.uri)\n        .objectFit(ImageFit.Cover)\n        .onClick(() => {\n          this.tapIndex = this.index;\n        })\n        .border({ width: 5, style: BorderStyle.Dotted, color: this.tapColor })\n    }\n\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相比借助@StorageLink的双向同步机制实现事件通知，开发者可以使用emit订阅某个事件并接收事件回调的方式来减少开销，增强代码的可读性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(502815)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "emit接口不支持在Previewer预览器中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { emitter } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0001;\nconst TAG: string = '[SampleAppStorage]';\n\nlet nextId: number = 0;\n\nclass ViewData {\n  public title: string;\n  public uri: Resource;\n  public color: Color = Color.Black;\n  public id: number;\n\n  constructor(title: string, uri: Resource) {\n    this.title = title;\n    this.uri = uri;\n    this.id = nextId++;\n  }\n}\n\n@Entry\n@Component\nstruct Gallery {\n  // 请将$r('app.media.startIcon')替换为实际资源文件\n  dataList: Array<ViewData> =\n    [new ViewData('flower', $r('app.media.startIcon')), new ViewData('OMG', $r('app.media.startIcon')),\n      new ViewData('OMG', $r('app.media.startIcon'))];\n  scroller: Scroller = new Scroller();\n  private preIndex: number = -1;\n\n  build() {\n    Column() {\n      Grid(this.scroller) {\n        ForEach(this.dataList, (item: ViewData) => {\n          GridItem() {\n            TapImage({\n              uri: item.uri,\n              index: item.id\n            })\n          }.aspectRatio(1)\n          .onClick(() => {\n            if (this.preIndex === item.id) {\n              return;\n            }\n            let innerEvent: emitter.InnerEvent = { eventId: item.id };\n            // 选中态：黑变红\n            let eventData: emitter.EventData = {\n              data: {\n                'colorTag': 1\n              }\n            };\n            emitter.emit(innerEvent, eventData);\n\n            if (this.preIndex != -1) {\n              hilog.info(DOMAIN, TAG, `preIndex: ${this.preIndex}, index: ${item.id}, black`);\n              let innerEvent: emitter.InnerEvent = { eventId: this.preIndex };\n              // 取消选中态：红变黑\n              let eventData: emitter.EventData = {\n                data: {\n                  'colorTag': 0\n                }\n              };\n              emitter.emit(innerEvent, eventData);\n            }\n            this.preIndex = item.id;\n          })\n        }, (item: ViewData) => JSON.stringify(item))\n      }.columnsTemplate('1fr 1fr')\n    }\n\n  }\n}\n\n@Component\nexport struct TapImage {\n  @State tapColor: Color = Color.Black;\n  index: number = 0;\n  uri: Resource = {\n    id: 0,\n    type: 0,\n    moduleName: '',\n    bundleName: ''\n  };\n\n  onTapIndexChange(colorTag: emitter.EventData) {\n    if (colorTag.data != null) {\n      this.tapColor = colorTag.data.colorTag ? Color.Red : Color.Black;\n    }\n  }\n\n  aboutToAppear() {\n    // 定义事件ID\n    let innerEvent: emitter.InnerEvent = { eventId: this.index };\n    emitter.on(innerEvent, data => {\n      this.onTapIndexChange(data);\n    });\n  }\n\n  build() {\n    Column() {\n      Image(this.uri)\n        .objectFit(ImageFit.Cover)\n        .border({ width: 5, style: BorderStyle.Dotted, color: this.tapColor })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上通知事件逻辑简单，也可以简化成三元表达式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class ViewData {\n  public title: string;\n  public uri: Resource;\n  public color: Color = Color.Black;\n\n  constructor(title: string, uri: Resource) {\n    this.title = title;\n    this.uri = uri;\n  }\n}\n\n@Entry\n@Component\nstruct Gallery {\n  // 请将$r('app.media.startIcon')替换为实际资源文件\n  dataList: Array<ViewData> =\n    [new ViewData('flower', $r('app.media.startIcon')), new ViewData('OMG', $r('app.media.startIcon')),\n      new ViewData('OMG', $r('app.media.startIcon'))];\n  scroller: Scroller = new Scroller();\n\n  build() {\n    Column() {\n      Grid(this.scroller) {\n        ForEach(this.dataList, (item: ViewData, index?: number) => {\n          GridItem() {\n            TapImage({\n              uri: item.uri,\n              index: index\n            })\n          }.aspectRatio(1)\n\n        }, (item: ViewData, index?: number) => {\n          return JSON.stringify(item) + index;\n        })\n      }.columnsTemplate('1fr 1fr')\n    }\n\n  }\n}\n\n@Component\nexport struct TapImage {\n  @StorageLink('tapIndex') tapIndex: number = -1;\n  index: number = 0;\n  uri: Resource = {\n    id: 0,\n    type: 0,\n    moduleName: '',\n    bundleName: ''\n  };\n\n  build() {\n    Column() {\n      Image(this.uri)\n        .objectFit(ImageFit.Cover)\n        .onClick(() => {\n          this.tapIndex = this.index;\n        })\n        .border({\n          width: 5,\n          style: BorderStyle.Dotted,\n          color: (this.tapIndex >= 0 && this.index === this.tapIndex) ? Color.Red : Color.Black\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "storageprop和appstorage接口配合使用时需要注意更新规则",
      children: "@StorageProp和AppStorage接口配合使用时，需要注意更新规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用setOrCreate/set接口更新key的值时，如果值相同，setOrCreate不会通知@StorageLink/@StorageProp更新，但因为@StorageProp本身有数据副本，更改值不会同步给AppStorage，这会导致开发者误认已通过AppStorage改了值，但实际上未通知@StorageProp更新值的情况。示例如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\n\nconst DOMAIN = 0x0001;\nconst TAG: string = '[SampleAppStorage]';\nAppStorage.setOrCreate('propA', false);\n\n@Entry\n@Component\nstruct PageStorageProp {\n  @StorageProp('propA') @Watch('onChange') propA: boolean = false;\n\n  onChange() {\n    hilog.info(DOMAIN, TAG, `propA change`);\n  }\n\n  aboutToAppear(): void {\n    this.propA = true;\n  }\n\n  build() {\n    Column() {\n      Text(`${this.propA}`)\n      Button('change')\n        .onClick(() => {\n          AppStorage.setOrCreate('propA', false);\n          hilog.info(DOMAIN, TAG, `propA: ${this.propA}`);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述示例，在点击事件之前，propA的值已经在本地被更改为true，而AppStorage中存的值仍为false。当点击事件通过setOrCreate接口尝试更新propA的值为false时，由于AppStorage中的值为false，两者相等，不会触发更新同步，因此@StorageProp的值仍为true。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实现二者同步有以下两种方式："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将@StorageProp更改为@StorageLink。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本地更改值的方式变为使用AppStorage.setOrCreate('propA', true)的方式。"
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
816951(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
385721(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957612-a193c7f4eb350c3f3776660fc75f1e4e.png");

},
502815(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
97141(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
357950(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
282865(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
889070(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437657-53a52ea41747861d4af5c41d38ad69ee.png");

},
24169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
204834(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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