"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["97734"], {
316977(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_1_arkts_v_1_application_state_management_arkts_localstorage_arkts_localstorage_md_88a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-state-management-arkts-state-management-v-1-arkts-v-1-application-state-management-arkts-localstorage-arkts-localstorage-md-88a.json
var site_docs_arkui_arkts_ui_development_arkts_state_management_arkts_state_management_v_1_arkts_v_1_application_state_management_arkts_localstorage_arkts_localstorage_md_88a_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage/arkts-localstorage","title":"LocalStorage：页面级UI状态存储","description":"LocalStorage是页面级的UI状态存储，通过@Entry装饰器接收的参数可以在页面内共享同一个LocalStorage实例。LocalStorage支持UIAbility实例内多个页面间状态共享。","source":"@site/docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage/arkts-localstorage.md","sourceDirName":"arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage","slug":"/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"LocalStorage：页面级UI状态存储","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-localstorage","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"管理应用拥有的状态概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-application-state-management-overview/"},"next":{"title":"AppStorage：应用全局的UI状态存储","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage/arkts-localstorage.md


const frontMatter = {
	title: 'LocalStorage：页面级UI状态存储',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-localstorage',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'LocalStorage：页面级UI状态存储';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "@LocalStorageProp",
  "id": "localstorageprop",
  "level": 2
}, {
  "value": "装饰器使用规则",
  "id": "装饰器使用规则",
  "level": 3
}, {
  "value": "变量的传递/访问规则",
  "id": "变量的传递访问规则",
  "level": 3
}, {
  "value": "观察变化和行为表现",
  "id": "观察变化和行为表现",
  "level": 3
}, {
  "value": "@LocalStorageLink",
  "id": "localstoragelink",
  "level": 2
}, {
  "value": "装饰器使用规则",
  "id": "装饰器使用规则-1",
  "level": 3
}, {
  "value": "变量的传递/访问规则",
  "id": "变量的传递访问规则-1",
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
  "value": "应用逻辑使用LocalStorage",
  "id": "应用逻辑使用localstorage",
  "level": 3
}, {
  "value": "从UI内部使用LocalStorage",
  "id": "从ui内部使用localstorage",
  "level": 3
}, {
  "value": "@LocalStorageProp和LocalStorage单向同步的简单场景",
  "id": "localstorageprop和localstorage单向同步的简单场景",
  "level": 3
}, {
  "value": "@LocalStorageLink和LocalStorage双向同步的简单场景",
  "id": "localstoragelink和localstorage双向同步的简单场景",
  "level": 3
}, {
  "value": "兄弟组件之间同步状态变量",
  "id": "兄弟组件之间同步状态变量",
  "level": 3
}, {
  "value": "将LocalStorage实例从UIAbility共享到一个或多个页面",
  "id": "将localstorage实例从uiability共享到一个或多个页面",
  "level": 3
}, {
  "value": "自定义组件接收LocalStorage实例",
  "id": "自定义组件接收localstorage实例",
  "level": 3
}, {
  "value": "Navigation组件和LocalStorage联合使用",
  "id": "navigation组件和localstorage联合使用",
  "level": 3
}, {
  "value": "LocalStorage支持联合类型",
  "id": "localstorage支持联合类型",
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
  "value": "自定义组件外改变状态变量",
  "id": "自定义组件外改变状态变量",
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
        id: "localstorage页面级ui状态存储",
        children: "LocalStorage：页面级UI状态存储"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LocalStorage是页面级的UI状态存储，通过@Entry装饰器接收的参数可以在页面内共享同一个LocalStorage实例。LocalStorage支持UIAbility实例内多个页面间状态共享。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文仅介绍LocalStorage使用场景和相关的装饰器：@LocalStorageProp和@LocalStorageLink。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在阅读本文档前，需要开发者对状态管理框架有基本的了解。建议提前阅读：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview",
        children: "状态管理概述"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LocalStorage还提供了API接口，可以让开发者通过接口在自定义组件外手动触发Storage对应key的增删改查，建议配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-state-management/ts-state-management#localstorage9",
        children: "LocalStorage API文档"
      }), "阅读。最佳实践请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-status-management",
        children: "状态管理最佳实践"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(543062)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LocalStorage从API version 9开始支持。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LocalStorage是ArkTS为构建页面级别状态变量提供存储的内存内的“数据库”。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["应用程序可以创建多个LocalStorage实例，LocalStorage实例可以在页面内共享，也可以通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getsharedlocalstorage12",
          children: "getSharedLocalStorage"
        }), "接口，实现跨页面、跨", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-overview",
          children: "UIAbility"
        }), "实例共享。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["组件树的根节点，即被", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/arkts-extend-component-decorator/ts-universal-entry/ts-universal-entry#entry",
          children: "@Entry"
        }), "装饰的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components#component",
          children: "@Component"
        }), "，可以被分配一个LocalStorage实例，此组件的所有子组件实例将自动获得对该LocalStorage实例的访问权限。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["@Component装饰的组件既可以自动继承来自父组件的LocalStorage实例，也可以传入指定的LocalStorage的实例，详见：", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E6%8E%A5%E6%94%B6localstorage%E5%AE%9E%E4%BE%8B",
          children: "自定义组件接收LocalStorage实例"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LocalStorage中的所有属性都是可变的。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用程序决定LocalStorage对象的生命周期。当应用释放最后一个指向LocalStorage的引用时，比如销毁最后一个自定义组件，LocalStorage将被JS Engine垃圾回收。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LocalStorage根据与@Component装饰的组件的同步类型不同，提供了两个装饰器："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#localstorageprop",
          children: "@LocalStorageProp"
        }), "：@LocalStorageProp装饰的变量与LocalStorage中给定属性建立单向同步关系。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "#localstoragelink",
          children: "@LocalStorageLink"
        }), "：@LocalStorageLink装饰的变量与LocalStorage中给定属性建立双向同步关系。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "localstorageprop",
      children: "@LocalStorageProp"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在上文中已经提到，如果要建立LocalStorage和自定义组件的联系，需要使用@LocalStorageProp和@LocalStorageLink装饰器。使用@LocalStorageProp(key)/@LocalStorageLink(key)装饰组件内的变量，key标识了LocalStorage的属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当自定义组件初始化的时候，@LocalStorageProp(key)/@LocalStorageLink(key)装饰的变量会通过给定的key，绑定LocalStorage对应的属性，完成初始化。本地初始化是必要的，因为无法保证LocalStorage一定存在给定的key（这取决于应用逻辑是否在组件初始化之前在LocalStorage实例中存入对应的属性）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(282255)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 9开始，该装饰器支持在ArkTS卡片中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11开始，该装饰器支持在元服务中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@LocalStorageProp(key)和LocalStorage中key对应的属性建立单向数据同步，ArkUI框架支持修改@LocalStorageProp(key)在本地的值，但是对本地值的修改不会同步回LocalStorage中。相反，如果LocalStorage中key对应的属性值发生改变，例如通过set接口对LocalStorage中的值进行修改，改变会同步给@LocalStorageProp(key)，并覆盖掉本地的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰器使用规则",
      children: "装饰器使用规则"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "@LocalStorageProp变量装饰器"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "装饰器参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "key：常量字符串，必填（字符串需要有引号）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "允许装饰的变量类型"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Object、class、string、number、boolean、enum类型，以及这些类型的数组。  API version 12及以上支持Map、Set、Date、undefined和null类型以及这些类型的联合类型，示例见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#localstorage%E6%94%AF%E6%8C%81%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B",
              children: "LocalStorage支持联合类型"
            }), "。  嵌套类型的场景请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%A7%82%E5%AF%9F%E5%8F%98%E5%8C%96%E5%92%8C%E8%A1%8C%E4%B8%BA%E8%A1%A8%E7%8E%B0",
              children: "观察变化和行为表现"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  变量类型必须被指定，建议和LocalStorage中对应属性类型相同，否则会发生类型隐式转换，从而导致应用行为异常。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "同步类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单向同步：从LocalStorage的对应属性到组件的状态变量。组件本地的修改是允许的，但是LocalStorage中给定的属性一旦发生变化，将覆盖本地的修改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "被装饰变量的初始值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须指定，如果LocalStorage实例中不存在属性，则用该初始值初始化该属性，并存入LocalStorage中。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "变量的传递访问规则",
      children: "变量的传递/访问规则"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "传递/访问规则"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "从父节点初始化和更新"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "禁止，@LocalStorageProp不支持从父节点初始化，只能从LocalStorage中key对应的属性初始化，如果没有对应的key，将使用本地默认值初始化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "初始化子节点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持，可用于初始化@State、@Link、@Prop、@Provide。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持组件外访问"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(720974)/* ["default"] */.A) + "",
        width: "894",
        height: "724"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " @LocalStorageProp初始化规则图示"]
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
        children: "当装饰的数据类型为boolean、string、number类型时，可以观察到数值的变化。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当装饰的数据类型为class或者Object时，可以观察到对象整体赋值和对象属性变化（详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E4%BB%8Eui%E5%86%85%E9%83%A8%E4%BD%BF%E7%94%A8localstorage",
          children: "从ui内部使用localstorage"
        }), "）。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当装饰的对象是数组时，可以观察到数组添加、删除、更新数组单元的变化。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当装饰的对象是Date时，可以观察到Date整体的赋值，同时可通过调用Date的接口setFullYear, setMonth, setDate, setHours, setMinutes, setSeconds, setMilliseconds, setTime, setUTCFullYear, setUTCMonth, setUTCDate, setUTCHours, setUTCMinutes, setUTCSeconds, setUTCMilliseconds 更新Date的属性。详见", (0,jsx_runtime.jsx)(_components.a, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "框架行为"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用@LocalStorageProp(key)装饰的变量更新时，不会写回LocalStorage，但会触发当前自定义组件的重新渲染。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当LocalStorage中对应key的值发生变化时，所有使用@LocalStorageProp(key)装饰的变量都会同步更新，覆盖本地修改。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "LocalStorage与@LocalStorageProp数据同步如下图所示"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(707025)/* ["default"] */.A) + "",
        width: "598",
        height: "346"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " LocalStorage与@LocalStorageProp数据同步图示"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "localstoragelink",
      children: "@LocalStorageLink"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(913664)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 11开始，该装饰器支持在元服务中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果我们需要将自定义组件的状态变量的更新同步回LocalStorage，就需要用到@LocalStorageLink。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@LocalStorageLink(key)是和LocalStorage中key对应的属性建立双向数据同步："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本地修改发生，该修改会被写回LocalStorage中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LocalStorage中的修改发生后，该修改会被同步到所有绑定LocalStorage对应key的属性上，包括单向（@LocalStorageProp和通过prop创建的单向绑定变量）、双向（@LocalStorageLink和通过link创建的双向绑定变量）变量。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰器使用规则-1",
      children: "装饰器使用规则"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "@LocalStorageLink变量装饰器"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "装饰器参数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "key：常量字符串，必填（字符串需要有引号）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "允许装饰的变量类型"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Object、class、string、number、boolean、enum类型，以及这些类型的数组。  API version 12及以上支持Map、Set、Date、undefined和null类型以及这些类型的联合类型。示例见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#localstorage%E6%94%AF%E6%8C%81%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B",
              children: "LocalStorage支持联合类型"
            }), "。  嵌套类型的场景请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%A7%82%E5%AF%9F%E5%8F%98%E5%8C%96%E5%92%8C%E8%A1%8C%E4%B8%BA%E8%A1%A8%E7%8E%B0-1",
              children: "观察变化和行为表现"
            }), "。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  变量类型必须被指定，建议和LocalStorage中对应属性类型相同，否则会发生类型隐式转换，从而导致应用行为异常。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "同步类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "双向同步：从LocalStorage的对应属性到自定义组件，从自定义组件到LocalStorage对应属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "被装饰变量的初始值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "必须指定，如果LocalStorage实例中不存在属性，则用该初始值初始化该属性，并存入LocalStorage中。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "变量的传递访问规则-1",
      children: "变量的传递/访问规则"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "传递/访问规则"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "从父节点初始化和更新"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "禁止，@LocalStorageLink不支持从父节点初始化，只能从LocalStorage中key对应的属性初始化，如果没有对应的key，将使用本地默认值初始化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "初始化子节点"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "支持，可用于初始化@State、@Link、@Prop、@Provide。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "是否支持组件外访问"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(139057)/* ["default"] */.A) + "",
        width: "726",
        height: "645"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图3"
        })
      }), " @LocalStorageLink初始化规则图示"]
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
        children: "当装饰的数据类型为boolean、string、number类型时，可以观察到数值的变化。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当装饰的数据类型为class或者Object时，可以观察到对象整体赋值和对象属性变化（详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E4%BB%8Eui%E5%86%85%E9%83%A8%E4%BD%BF%E7%94%A8localstorage",
          children: "从ui内部使用localstorage"
        }), "）。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当装饰的对象是数组时，可以观察到数组添加、删除、更新数组单元的变化。详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E8%A3%85%E9%A5%B0array%E7%B1%BB%E5%9E%8B%E5%8F%98%E9%87%8F",
          children: "装饰Array类型变量"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当装饰的对象是Date时，可以观察到Date整体的赋值，同时可通过调用Date的接口setFullYear, setMonth, setDate, setHours, setMinutes, setSeconds, setMilliseconds, setTime, setUTCFullYear, setUTCMonth, setUTCDate, setUTCHours, setUTCMinutes, setUTCSeconds, setUTCMilliseconds 更新Date的属性。详见", (0,jsx_runtime.jsx)(_components.a, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "框架行为"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用@LocalStorageLink(key)装饰的变量更新时，会同步写回LocalStorage对应的key，还会触发当前自定义组件的重新渲染。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当LocalStorage中对应key的值发生变化时，所有绑定该key的数据（包括双向@LocalStorageLink和单向@LocalStorageProp）都会同步更新。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "LocalStorage与@LocalStorageLink数据同步如下图所示"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(471850)/* ["default"] */.A) + "",
        width: "589",
        height: "345"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图4"
        })
      }), " LocalStorage与@LocalStorageLink数据同步图示"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限制条件",
      children: "限制条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@LocalStorageProp/@LocalStorageLink的参数必须为string类型，否则编译期会报错。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let storage = new LocalStorage();\nstorage.setOrCreate('PropA', 48);\n\n// 错误写法，编译报错\n@LocalStorageProp() localStorageProp: number = 1;\n@LocalStorageLink() localStorageLink: number = 2;\n\n// 正确写法\n@LocalStorageProp('PropA') localStorageProp: number = 1;\n@LocalStorageLink('PropA') localStorageLink: number = 2;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "@LocalStorageProp与@LocalStorageLink不支持装饰Function类型的变量，API version 23之前，框架会抛出运行时错误。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "从API version 23开始，添加对@LocalStorageProp与@LocalStorageLink装饰Function类型变量的校验，编译期会报错。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "LocalStorage创建后，命名属性的类型不可更改。后续调用Set时必须使用相同类型的值。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["LocalStorage是页面级存储，", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getsharedlocalstorage12",
            children: "getSharedLocalStorage"
          }), "接口仅能获取当前Stage通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#loadcontent9",
            children: "windowStage.loadContent"
          }), "传入的LocalStorage实例，否则返回undefined。例子可见", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%B0%86localstorage%E5%AE%9E%E4%BE%8B%E4%BB%8Euiability%E5%85%B1%E4%BA%AB%E5%88%B0%E4%B8%80%E4%B8%AA%E6%88%96%E5%A4%9A%E4%B8%AA%E9%A1%B5%E9%9D%A2",
            children: "将LocalStorage实例从UIAbility共享到一个或多个页面"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "应用逻辑使用localstorage",
      children: "应用逻辑使用LocalStorage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let para: Record<string,number> = { 'PropA': 47 };\nlet storage: LocalStorage = new LocalStorage(para); // 创建新实例并使用给定对象初始化\nlet propA: number | undefined = storage.get('PropA'); // propA == 47\nlet link1: SubscribedAbstractProperty<number> = storage.link('PropA'); // link1.get() == 47\nlet link2: SubscribedAbstractProperty<number> = storage.link('PropA'); // link2.get() == 47\nlet prop: SubscribedAbstractProperty<number> = storage.prop('PropA'); // prop.get() == 47\nlink1.set(48); // 双向同步: link1.get() == link2.get() == prop.get() == 48\nprop.set(1); // 单向同步: prop.get() == 1; 但 link1.get() == link2.get() == 48\nlink1.set(49); // 双向同步: link1.get() == link2.get() == prop.get() == 49\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "从ui内部使用localstorage",
      children: "从UI内部使用LocalStorage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除了应用程序逻辑使用LocalStorage，还可以借助LocalStorage相关的两个装饰器@LocalStorageProp和@LocalStorageLink，在UI组件内部获取到LocalStorage实例中存储的状态变量。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例以@LocalStorageLink为例，展示了："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用构造函数创建LocalStorage实例storage。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用@Entry装饰器将storage添加到Parent顶层组件中。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@LocalStorageLink绑定LocalStorage对给定的属性，建立双向数据同步。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class Data {\n  public code: number;\n\n  constructor(code: number) {\n    this.code = code;\n  }\n}\n\n// 创建新实例并使用给定对象初始化\nlet para: Record<string, number> = { 'PropA': 47 };\nlet storage: LocalStorage = new LocalStorage(para);\nstorage.setOrCreate('PropB', new Data(50));\n\n@Component\nstruct Child {\n  // @LocalStorageLink变量装饰器与LocalStorage中的'PropA'属性建立双向绑定\n  @LocalStorageLink('PropA') childLinkNumber: number = 1;\n  // @LocalStorageLink变量装饰器与LocalStorage中的'PropB'属性建立双向绑定\n  @LocalStorageLink('PropB') childLinkObject: Data = new Data(0);\n\n  build() {\n    Column({ space: 15 }) {\n      // 更改将同步至LocalStorage中的'PropA'以及Parent.parentLinkNumber\n      Button(`Child from LocalStorage ${this.childLinkNumber}`)\n        .onClick(() => {\n          this.childLinkNumber += 1;\n        })\n      // 更改将同步至LocalStorage中的'PropB'以及Parent.parentLinkObject.code\n      Button(`Child from LocalStorage ${this.childLinkObject.code}`)\n        .onClick(() => {\n          this.childLinkObject.code += 1;\n        })\n    }\n  }\n}\n\n// 使LocalStorage可从@Component组件访问\n@Entry(storage)\n@Component\nstruct Parent {\n  // @LocalStorageLink变量装饰器与LocalStorage中的'PropA'属性建立双向绑定\n  @LocalStorageLink('PropA') parentLinkNumber: number = 1;\n  // @LocalStorageLink变量装饰器与LocalStorage中的'PropB'属性建立双向绑定\n  @LocalStorageLink('PropB') parentLinkObject: Data = new Data(0);\n\n  build() {\n    Column({ space: 15 }) {\n      // 由于LocalStorage中PropA已经被初始化，因此this.parentLinkNumber的值为47\n      Button(`Parent from LocalStorage ${this.parentLinkNumber}`)\n        .onClick(() => {\n          this.parentLinkNumber += 1;\n        })\n      // 由于LocalStorage中PropB已经被初始化，因此this.parentLinkObject.code的值为50\n      Button(`Parent from LocalStorage ${this.parentLinkObject.code}`)\n        .onClick(() => {\n          this.parentLinkObject.code += 1;\n        })\n      // @Component子组件自动获得对Parent LocalStorage实例的访问权限\n      Child()\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "localstorageprop和localstorage单向同步的简单场景",
      children: "@LocalStorageProp和LocalStorage单向同步的简单场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例展示了ParentOne和ChildOne组件各自在本地创建与paraOneLocal中'PropA'属性的单向数据同步："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ParentOne中对this.storagePropOne的修改，只会在ParentOne中生效，并没有同步回storageOneLocal。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ChildOne组件中，Text绑定的storagePropTwo 依旧显示47。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 创建新实例并使用给定对象初始化\nlet paraOneLocal: Record<string, number> = { 'PropA': 47 };\nlet storageOneLocal: LocalStorage = new LocalStorage(paraOneLocal);\n\n// 使LocalStorage可从@Component组件访问\n@Entry(storageOneLocal)\n@Component\nstruct ParentOne {\n  // @LocalStorageProp变量装饰器与LocalStorage中的'PropA'属性建立单向绑定\n  @LocalStorageProp('PropA') storagePropOne: number = 1;\n\n  build() {\n    Column({ space: 15 }) {\n      // 点击后从47开始加1，只改变当前组件显示的storagePropOne ，不会同步到LocalStorage中\n      Button(`ParentOne from LocalStorage ${this.storagePropOne}`)\n        .onClick(() => {\n          this.storagePropOne += 1;\n        })\n      ChildOne()\n    }\n  }\n}\n\n@Component\nstruct ChildOne {\n  // @LocalStorageProp变量装饰器与LocalStorage中的'PropA'属性建立单向绑定\n  @LocalStorageProp('PropA') storagePropTwo: number = 2;\n\n  build() {\n    Column({ space: 15 }) {\n      // 当ParentOne改变时，当前storagePropTwo不会改变，显示47\n      Text(`ParentOne from LocalStorage ${this.storagePropTwo}`)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "localstoragelink和localstorage双向同步的简单场景",
      children: "@LocalStorageLink和LocalStorage双向同步的简单场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面的示例展示了@LocalStorageLink装饰的数据和LocalStorage双向同步的场景："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 构造LocalStorage实例\nlet paraOne: Record<string, number> = { 'PropA': 47 };\nlet storageOne: LocalStorage = new LocalStorage(paraOne);\n// 调用link（api9以上）接口构造'PropA'的双向同步数据，linkToPropA 是全局变量\nlet linkToPropA: SubscribedAbstractProperty<object> = storageOne.link('PropA');\n\n@Entry(storageOne)\n@Component\nstruct ParentTwo {\n  // @LocalStorageLink('PropA')在Parent自定义组件中创建'PropA'的双向同步数据，初始值为47，因为在构造LocalStorage已经给“PropA”设置47\n  @LocalStorageLink('PropA') storageLink: number = 1;\n\n  build() {\n    Column() {\n      Text(`incr @LocalStorageLink variable`)\n      // 点击“incr @LocalStorageLink variable”，this.storageLink加1，改变同步回storage，全局变量linkToPropA也会同步改变\n\n        .onClick(() => {\n          this.storageLink += 1;\n        })\n\n      // 并不建议在组件内使用全局变量linkToPropA.get()，因为可能会有生命周期不同引起的错误。\n      Text(`@LocalStorageLink: ${this.storageLink} - linkToPropA: ${linkToPropA.get()}`)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "兄弟组件之间同步状态变量",
      children: "兄弟组件之间同步状态变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面的示例展示了通过@LocalStorageLink双向同步兄弟组件之间的状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "先看ParentFour自定义组件中发生的变化："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.点击“playCount ${this.playCount} dec by 1”，this.playCount减1，修改同步回LocalStorage中，ChildFour组件中的playCountLink绑定的组件会同步刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.点击“countStorage ${this.playCount} incr by 1”，调用LocalStorage的set接口，更新LocalStorage中“countStorage”对应的属性，ChildFour组件中的playCountLink绑定的组件会同步刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.Text组件“playCount in LocalStorage for debug ${storageFour.get<number>('countStorage')}”没有同步刷新，因为storageFour.get<number>('countStorage')返回的是常规变量，常规变量的更新并不会引起Text组件的重新渲染。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ChildFour自定义组件中的变化："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "playCountLink的刷新会同步回LocalStorage，并且引起兄弟组件和父组件相应的刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let count: Record<string, number> = { 'countStorage': 1 };\nlet storageFour: LocalStorage = new LocalStorage(count);\n\n@Component\nstruct ChildFour {\n  // 子组件实例的名字\n  label: string = 'no name';\n  // 和LocalStorage中“countStorage”的双向绑定数据\n  @LocalStorageLink('countStorage') playCountLink: number = 0;\n\n  build() {\n    Row() {\n      Text(this.label)\n        .width(50)\n        .height(60)\n        .fontSize(12)\n      Text(`playCountLink ${this.playCountLink}: inc by 1`)\n        .onClick(() => {\n          this.playCountLink += 1;\n        })\n        .width(200)\n        .height(60)\n        .fontSize(12)\n    }\n    .width(300)\n    .height(60)\n  }\n}\n\n@Entry(storageFour)\n@Component\nstruct ParentFour {\n  @LocalStorageLink('countStorage') playCount: number = 0;\n\n  build() {\n    Column() {\n      Row() {\n        Text('Parent')\n          .width(50)\n          .height(60)\n          .fontSize(12)\n        Text(`playCount ${this.playCount} dec by 1`)\n          .onClick(() => {\n            this.playCount -= 1;\n          })\n          .width(250)\n          .height(60)\n          .fontSize(12)\n      }\n      .width(300)\n      .height(60)\n\n      Row() {\n        Text('LocalStorage')\n          .width(50)\n          .height(60)\n          .fontSize(12)\n        Text(`countStorage ${this.playCount} incr by 1`)\n          .onClick(() => {\n            storageFour.set<number | undefined>('countStorage', Number(storageFour.get<number>('countStorage')) + 1);\n          })\n          .width(250)\n          .height(60)\n          .fontSize(12)\n      }\n      .width(300)\n      .height(60)\n\n      ChildFour({ label: 'ChildA' })\n      ChildFour({ label: 'ChildB' })\n\n      Text(`playCount in LocalStorage for debug ${storageFour.get<number>('countStorage')}`)\n        .width(300)\n        .height(60)\n        .fontSize(12)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "将localstorage实例从uiability共享到一个或多个页面",
      children: "将LocalStorage实例从UIAbility共享到一个或多个页面"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["上面的实例中，LocalStorage的实例仅仅在一个@Entry装饰的组件和其所属的子组件（一个页面）中共享，如果希望其在多个页面中共享，可以在所属UIAbility中创建LocalStorage实例，并调用windowStage.", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#loadcontent9",
        children: "loadContent"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// EntryAbility.ets\nimport { UIAbility } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\n\n// ...\nexport default class EntryAbility extends UIAbility {\n  para: Record<string, number> = {\n    'PropA': 47\n  };\n  storage: LocalStorage = new LocalStorage(this.para);\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    // 当前用例需要开发者手动修改为windowStage.loadContent('pages/PageFiveShare', this.storage);\n    windowStage.loadContent('pages/Index', this.storage).catch(() => {\n      hilog.error(DOMAIN, 'testTag', '%{public}s', 'Ability onCreonWindowStageCreateate');\n    });\n  }\n\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(174125)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在UI页面通过getSharedLocalStorage获取当前stage共享的LocalStorage实例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "this.getUIContext().getSharedLocalStorage()只在模拟器或者实机上才有效，在Previewer预览器中使用不生效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的用例中，PageFiveShare页面中的propA通过使用共享的LocalStorage实例。点击Button跳转到PageFiveShareChange页面，点击Change propA改变propA的值，back回PageFiveShare页面后，页面中propA的值也同步修改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// PageFiveShare.ets\n// 预览器上不支持获取页面共享的LocalStorage实例\n@Entry({ useSharedStorage: true })\n@Component\nstruct PageFiveShare {\n  // 可以使用@LocalStorageLink/Prop与LocalStorage实例中的变量建立联系\n  @LocalStorageLink('PropA') propA: number = 1;\n  pageStack: NavPathStack = new NavPathStack();\n\n  build() {\n    Navigation(this.pageStack) {\n      Row() {\n        Column() {\n          Text(`${this.propA}`)\n            .fontSize(50)\n            .fontWeight(FontWeight.Bold)\n          Button('To Page')\n            .onClick(() => {\n              this.pageStack.pushPathByName('Page', null);\n            })\n        }\n        .width('100%')\n      }\n      .height('100%')\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Builder\nexport function PageBuilder() {\n  PageFiveShareChange()\n}\n\n// PageFiveShareChange组件获得了父亲PageFiveShare组件的LocalStorage实例\n@Component\nstruct PageFiveShareChange {\n  @LocalStorageLink('PropA') propA: number = 2;\n  pathStack: NavPathStack = new NavPathStack();\n\n  build() {\n    NavDestination() {\n      Row() {\n        Column() {\n          Text(`${this.propA}`)\n            .fontSize(50)\n            .fontWeight(FontWeight.Bold)\n\n          Button('Change propA')\n            .onClick(() => {\n              this.propA = 100;\n            })\n\n          Button('Back PageFiveShare')\n            .onClick(() => {\n              this.pathStack.pop();\n            })\n        }\n        .width('100%')\n      }\n    }\n    .onReady((context: NavDestinationContext) => {\n      this.pathStack = context.pathStack;\n    })\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Navigation时，需要添加配置系统路由表文件src/main/resources/base/profile/route_map.json，并替换pageSourceFile为PageFiveShareChange页面的路径，并且在module.json5中添加：\"routerMap\": \"$profile:route_map\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"routerMap\": [\n    {\n      \"name\": \"Page\",\n      \"pageSourceFile\": \"src/main/ets/pages/PageFiveShareChange.ets\",\n      \"buildFunction\": \"PageBuilder\",\n      \"data\": {\n        \"description\" : \"LocalStorage example\"\n      }\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(807642)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于开发者更建议使用这个方式来构建LocalStorage的实例，并且在创建LocalStorage实例的时候就写入默认值，因为默认值可以作为运行异常的备份，也可以用作页面的单元测试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自定义组件接收localstorage实例",
      children: "自定义组件接收LocalStorage实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "除了根节点可通过@Entry来接收LocalStorage实例，自定义组件（子节点）也可以通过构造参数来传递LocalStorage实例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例以@LocalStorageLink为例，展示了："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "父组件TestIndex中的Text，显示LocalStorage实例localStorageOne中PropA的值为“propA”。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ChildSix组件中，Text绑定的propB，显示LocalStorage实例localStorageTwo中PropB的值为“propB”。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(92716)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始，自定义组件支持接收LocalStorage实例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当自定义组件作为子节点，定义了成员属性时，LocalStorage实例必须要放在第二个参数位置传递，否则会报类型不匹配的编译问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当在自定义组件中定义了属性时，暂时不支持只有一个LocalStorage实例作为入参。如果没定义属性，可以只传入一个LocalStorage实例作为入参。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果定义的属性不需要从父组件初始化变量，则第一个参数需要传{}。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "作为构造参数传给子组件的LocalStorage实例在初始化时就会被决定，可以通过@LocalStorageLink或者LocalStorage的API修改LocalStorage实例中保存的属性值，但LocalStorage实例自身不能被动态修改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let localStorageOne: LocalStorage = new LocalStorage();\nlocalStorageOne.setOrCreate('propA', 'propA');\n\nlet localStorageTwo: LocalStorage = new LocalStorage();\nlocalStorageTwo.setOrCreate('propB', 'propB');\n\n@Entry(localStorageOne)\n@Component\nstruct TestIndex {\n  // 'PropA'，和localStorageOne中'propA'的双向同步\n  @LocalStorageLink('PropA') propA: string = 'Hello World';\n  @State count: number = 0;\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.propA)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n        // 使用LocalStorage 实例localStorageTwo\n        ChildSix({ count: this.count }, localStorageTwo)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n\n\n@Component\nstruct ChildSix {\n  @Link count: number;\n  //  'Hello World'和localStorageTwo中'propB'的双向同步，如果localStorageTwo中没有'propB'，则使用默认值'Hello World'\n  @LocalStorageLink('PropB') propB: string = 'Hello World';\n\n  build() {\n    Text(this.propB)\n      .fontSize(50)\n      .fontWeight(FontWeight.Bold)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当自定义组件没有定义属性时，可以只传入一个LocalStorage实例作为入参。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let localStorageInstance: LocalStorage = new LocalStorage();\nlocalStorageInstance.setOrCreate('propA', 'propA');\n\nlet localStorageChange: LocalStorage = new LocalStorage();\nlocalStorageChange.setOrCreate('propB', 'propB');\n\n@Entry(localStorageInstance)\n@Component\nstruct Index {\n  // 'PropA'，和localStorageInstance中'PropA'的双向同步\n  @LocalStorageLink('PropA') propA: string = 'Hello World';\n  @State count: number = 0;\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.propA)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n        // 使用LocalStorage 实例localStorageChange\n        ChildOne(localStorageChange)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n\n@Component\nstruct ChildOne {\n  build() {\n    Text('hello')\n      .fontSize(50)\n      .fontWeight(FontWeight.Bold)\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当定义的属性不需要从父组件初始化变量时，第一个参数需要传{}。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let localStorageBOne: LocalStorage = new LocalStorage();\nlocalStorageBOne.setOrCreate('propA', 'propA');\n\nlet localStorageBTwo: LocalStorage = new LocalStorage();\nlocalStorageBTwo.setOrCreate('propB', 'propB');\n\n@Entry(localStorageBOne)\n@Component\nstruct PageSixLocalStorageB {\n  // 'PropA'，和localStorageBOne中'propA'的双向同步\n  @LocalStorageLink('PropA') propA: string = 'Hello World';\n  @State count: number = 0;\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.propA)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n        // 使用LocalStorage 实例localStorageBTwo\n        Child({}, localStorageBTwo)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n\n@Component\nstruct Child {\n  @State count: number = 5;\n  // 'Hello World'，和localStorageBTwo中'propB'的双向同步，如果localStorageBTwo中没有'propB'，则使用默认值'Hello World'\n  @LocalStorageLink('PropB') propB: string = 'Hello World';\n\n  build() {\n    Text(this.propB)\n      .fontSize(50)\n      .fontWeight(FontWeight.Bold)\n  }\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "navigation组件和localstorage联合使用",
      children: "Navigation组件和LocalStorage联合使用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可以通过传递不同的LocalStorage实例给自定义组件，从而实现在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/navigation-and-switching/ts-basic-components-navigation/ts-basic-components-navigation",
        children: "Navigation"
      }), "跳转到不同的页面时，绑定不同的LocalStorage实例，显示对应绑定的值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例以@LocalStorageLink为例，展示了："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "点击父组件中的Button \"Next Page\",创建并跳转到name为\"pageOne\"的子页面，Text显示信息为LocalStorage实例localStorageA中绑定的propA的值，为\"propA\"。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "继续点击页面上的Button \"Next Page\",创建并跳转到name为\"pageTwo\"的子页面，Text显示信息为LocalStorage实例localStorageB中绑定的propB的值，为\"propB\"。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "继续点击页面上的Button \"Next Page\",创建并跳转到name为\"pageTree\"的子页面，Text显示信息为LocalStorage实例localStorageC中绑定的propC的值，为\"propC\"。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "继续点击页面上的Button \"Next Page\",创建并跳转到name为\"pageOne\"的子页面，Text显示信息为LocalStorage实例localStorageA中绑定的propA的值，为\"propA\"。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NavigationContentMsgStack自定义组件中的Text组件，共享对应自定义组件树上LocalStorage实例绑定的propA的值。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let localStorageA: LocalStorage = new LocalStorage();\nlocalStorageA.setOrCreate('propA', 'propA');\n\nlet localStorageB: LocalStorage = new LocalStorage();\nlocalStorageB.setOrCreate('propB', 'propB');\n\nlet localStorageC: LocalStorage = new LocalStorage();\nlocalStorageC.setOrCreate('propC', 'propC');\n\n@Entry\n@Component\nstruct MyNavigationTestStack {\n  @Provide('pageInfo') pageInfo: NavPathStack = new NavPathStack();\n\n  @Builder\n  PageMap(name: string) {\n    if (name === 'pageOne') {\n      // 传递不同的LocalStorage实例\n      PageOneStack({}, localStorageA)\n    } else if (name === 'pageTwo') {\n      PageTwoStack({}, localStorageB)\n    } else if (name === 'pageThree') {\n      PageThreeStack({}, localStorageC)\n    }\n  }\n\n  build() {\n    Column({ space: 5 }) {\n      Navigation(this.pageInfo) {\n        Column() {\n          Button('Next Page', { stateEffect: true, type: ButtonType.Capsule })\n            .width('80%')\n            .height(40)\n            .margin(20)\n            .onClick(() => {\n              this.pageInfo.pushPath({ name: 'pageOne' }); //将name指定的NavDestination页面信息入栈\n            })\n        }\n      }.title('NavIndex')\n      .navDestination(this.PageMap)\n      .mode(NavigationMode.Stack)\n      .borderWidth(1)\n    }\n  }\n}\n\n@Component\nstruct PageOneStack {\n  @Consume('pageInfo') pageInfo: NavPathStack;\n  @LocalStorageLink('PropA') propA: string = 'Hello World';\n\n  build() {\n    NavDestination() {\n      Column() {\n        NavigationContentMsgStack()\n        // 显示绑定的LocalStorage中PropA的值'PropA'\n        Text(`${this.propA}`)\n        Button('Next Page', { stateEffect: true, type: ButtonType.Capsule })\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pushPathByName('pageTwo', null);\n          })\n      }.width('100%').height('100%')\n    }.title('pageOne')\n    .onBackPressed(() => {\n      this.pageInfo.pop();\n      return true;\n    })\n  }\n}\n\n@Component\nstruct PageTwoStack {\n  @Consume('pageInfo') pageInfo: NavPathStack;\n  @LocalStorageLink('PropB') propB: string = 'Hello World';\n\n  build() {\n    NavDestination() {\n      Column() {\n        NavigationContentMsgStack()\n        // 如果绑定的LocalStorage中没有PropB,显示本地初始化的值 'Hello World'\n        Text(`${this.propB}`)\n        Button('Next Page', { stateEffect: true, type: ButtonType.Capsule })\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pushPathByName('pageThree', null);\n          })\n\n      }.width('100%').height('100%')\n    }.title('pageTwo')\n    .onBackPressed(() => {\n      this.pageInfo.pop();\n      return true;\n    })\n  }\n}\n\n@Component\nstruct PageThreeStack {\n  @Consume('pageInfo') pageInfo: NavPathStack;\n  @LocalStorageLink('PropC') propC: string = 'pageThreeStack';\n\n  build() {\n    NavDestination() {\n      Column() {\n        NavigationContentMsgStack()\n\n        // 如果绑定的LocalStorage中没有PropC,显示本地初始化的值 'pageThreeStack'\n        Text(`${this.propC}`)\n        Button('Next Page', { stateEffect: true, type: ButtonType.Capsule })\n          .width('80%')\n          .height(40)\n          .margin(20)\n          .onClick(() => {\n            this.pageInfo.pushPathByName('pageOne', null);\n          })\n\n      }.width('100%').height('100%')\n    }.title('pageThree')\n    .onBackPressed(() => {\n      this.pageInfo.pop();\n      return true;\n    })\n  }\n}\n\n@Component\nstruct NavigationContentMsgStack {\n  @LocalStorageLink('PropA') propA: string = 'Hello';\n\n  build() {\n    Column() {\n      Text(`${this.propA}`)\n        .fontSize(30)\n        .fontWeight(FontWeight.Bold)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "localstorage支持联合类型",
      children: "LocalStorage支持联合类型"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，变量linkA的类型为number | null，变量linkB的类型为number | undefined。Text组件初始化分别显示为null和undefined，点击切换为数字，再次点击切换回null和undefined。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct LocalStorageLinkComponent {\n  @LocalStorageLink('LinkA') linkA: number | null = null;\n  @LocalStorageLink('LinkB') linkB: number | undefined = undefined;\n\n  build() {\n    Column() {\n      Text('@LocalStorageLink API Initialization, @LocalStorageLink Value')\n      Text(`${this.linkA}`)\n        .fontSize(20)\n        .onClick(() => {\n          this.linkA ? this.linkA = null : this.linkA = 1;\n        })\n      Text(`${this.linkB}`)\n        .fontSize(20)\n        .onClick(() => {\n          this.linkB ? this.linkB = undefined : this.linkB = 1;\n        })\n    }\n    .borderWidth(3).borderColor(Color.Green)\n  }\n}\n\n@Component\nstruct LocalStoragePropComponent {\n  @LocalStorageProp('PropA') propA: number | null = null;\n  @LocalStorageProp('PropB') propB: number | undefined = undefined;\n\n  build() {\n    Column() {\n      Text('@LocalStorageProp API Initialization, @LocalStorageProp Value')\n      Text(`${this.propA}`)\n        .fontSize(20)\n        .onClick(() => {\n          this.propA ? this.propA = null : this.propA = 1;\n        })\n      Text(`${this.propB}`)\n        .fontSize(20)\n        .onClick(() => {\n          this.propB ? this.propB = undefined : this.propB = 1;\n        })\n    }\n    .borderWidth(3)\n    .borderColor(Color.Yellow)\n  }\n}\n\nlet storageLink: LocalStorage = new LocalStorage();\n\n@Entry(storageLink)\n@Component\nstruct LinkIndex {\n  build() {\n    Row() {\n      Column() {\n        LocalStorageLinkComponent()\n        LocalStoragePropComponent()\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰array类型变量",
      children: "装饰Array类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，@LocalStorageLink装饰的message类型为number[]，点击Button改变message的值，UI会随之刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  @LocalStorageLink('array') message: number[] = [0, 1, 2, 3];\n\n  build() {\n    Column() {\n      ForEach(this.message, (item: number) => {\n        Text(`${item}`)\n          .fontSize(20)\n          .margin(10)\n      })\n      // 新增数组元素，触发UI刷新\n      Button('Push element')\n        .onClick(() => {\n          this.message.push(4);\n        })\n        .width(300)\n        .margin(10)\n      // 删除数组元素，触发UI刷新\n      Button('Pop element')\n        .onClick(() => {\n          this.message.pop();\n        })\n        .width(300)\n        .margin(10)\n      // 对数组整体重新赋值，触发UI刷新\n      Button('Reset array')\n        .onClick(() => {\n          this.message = [9, 8, 7, 6];\n        })\n        .width(300)\n        .margin(10)\n      // 更新数组元素，触发UI刷新\n      Button('Modify element[0]')\n        .onClick(() => {\n          this.message[0] = 10;\n        })\n        .width(300)\n        .margin(10)\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰date类型变量",
      children: "装饰Date类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(290842)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始，LocalStorage支持Date类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，@LocalStorageLink装饰的selectedDate类型为Date，点击Button改变selectedDate的值，UI会随之刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct LocalDateSample {\n  @LocalStorageLink('date') selectedDate: Date = new Date('2021-08-08');\n\n  build() {\n    Column() {\n      Button('set selectedDate to 2023-07-08')\n        .margin(10)\n        .onClick(() => {\n          this.selectedDate = new Date('2023-07-08');\n        })\n      Button('increase the year by 1')\n        .margin(10)\n        .onClick(() => {\n          this.selectedDate.setFullYear(this.selectedDate.getFullYear() + 1);\n        })\n      Button('increase the month by 1')\n        .margin(10)\n        .onClick(() => {\n          this.selectedDate.setMonth(this.selectedDate.getMonth() + 1);\n        })\n      Button('increase the day by 1')\n        .margin(10)\n        .onClick(() => {\n          this.selectedDate.setDate(this.selectedDate.getDate() + 1);\n        })\n      DatePicker({\n        start: new Date('1970-1-1'),\n        end: new Date('2100-1-1'),\n        selected: $$this.selectedDate\n      })\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰map类型变量",
      children: "装饰Map类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(566165)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始，LocalStorage支持Map类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，@LocalStorageLink装饰的message类型为Map<number, string>，点击Button改变message的值，UI会随之刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct LocalMapSample {\n  @LocalStorageLink('map') message: Map<number, string> = new Map([[0, 'a'], [1, 'b'], [3, 'c']]);\n\n  build() {\n    Row() {\n      Column() {\n        ForEach(Array.from(this.message.entries()), (item: [number, string]) => {\n          Text(`${item[0]}`).fontSize(30)\n          Text(`${item[1]}`).fontSize(30)\n          Divider()\n        })\n        Button('init map').onClick(() => {\n          this.message = new Map([[0, 'a'], [1, 'b'], [3, 'c']]);\n        })\n        Button('set new one').onClick(() => {\n          this.message.set(4, 'd');\n        })\n        Button('clear').onClick(() => {\n          this.message.clear();\n        })\n        Button('replace the existing one').onClick(() => {\n          this.message.set(0, 'aa');\n        })\n        Button('delete the existing one').onClick(() => {\n          this.message.delete(0);\n        })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "装饰set类型变量",
      children: "装饰Set类型变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(69817)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始，LocalStorage支持Set类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的示例中，@LocalStorageLink装饰的memberSet类型为Set<number>，点击Button改变memberSet的值，UI会随之刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct LocalSetSample {\n  @LocalStorageLink('set') memberSet: Set<number> = new Set([0, 1, 2, 3, 4]);\n\n  build() {\n    Row() {\n      Column() {\n        ForEach(Array.from(this.memberSet.entries()), (item: [number, number]) => {\n          Text(`${item[0]}`)\n            .fontSize(30)\n          Divider()\n        })\n        Button('init set')\n          .onClick(() => {\n            this.memberSet = new Set([0, 1, 2, 3, 4]);\n          })\n        Button('set new one')\n          .onClick(() => {\n            this.memberSet.add(5);\n          })\n        Button('clear')\n          .onClick(() => {\n            this.memberSet.clear();\n          })\n        Button('delete the first one')\n          .onClick(() => {\n            this.memberSet.delete(0);\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "自定义组件外改变状态变量",
      children: "自定义组件外改变状态变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let storageChange = new LocalStorage();\nstorageChange.setOrCreate('count', 47);\n\nclass Model {\n  public storage: LocalStorage = storageChange;\n\n  call(propName: string, value: number) {\n    this.storage.setOrCreate<number>(propName, value);\n  }\n}\n\nlet model: Model = new Model();\n\n@Entry({ storage: storageChange })\n@Component\nstruct Test {\n  @LocalStorageLink('count') count: number = 0;\n\n  build() {\n    Column() {\n      Text(`count value: ${this.count}`)\n      Button('change')\n        .onClick(() => {\n          model.call('count', this.count + 1);\n        })\n    }\n  }\n}\n"
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
92716(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
282255(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
913664(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
174125(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
707025(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957610-b1e7d3a88d3aaedc67e0a3b8d147f0d0.png");

},
543062(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
139057(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477611-0cd56e2b4685ba5a31925ade9822fcef.png");

},
720974(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437655-9cec673aa31d5b5720efafc9b1736ba9.png");

},
566165(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
69817(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
290842(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
807642(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
471850(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552797962-68555a9ebe71bdb3c6f06b6dd8b6a1f5.png");

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